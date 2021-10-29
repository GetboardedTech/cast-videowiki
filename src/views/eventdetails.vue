<!-- =========================================================================================
    File Name: Dashboard.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div>
    <div>
      <div class="contain">
        <!-- <router-link
            tag="div"
            to="/"
            class="vx-logo cursor-pointer md:flex items-center "
          >
            
            <img
              src="@/assets/images/eventdetails/logo.svg"
              class="mr-2 text-custom-purple h-16"
            />

            
          </router-link> -->
        <TheHeader />
        <div class="adoptive">
          <div class="datebox">
            <h1 class="monthbox">{{ moment.utc(infos.date).format('MMM') }}</h1>
            <h1 class="daybox">{{ moment.utc(infos.date).format('DD') }}</h1>
            <h1 class="timebox">
              {{ moment.utc(infos.time, 'HH:mm:ss').format('hh:mm:ss a') }}
            </h1>
          </div>
          <h1 class="tophead">{{ infos.event_name }}</h1>
          <h2 class="createdby">By- {{ infos.event_creator_name }}</h2>
        </div>
        <!-- JUMBOTRON -->
        <!-- <div class=" backgroundimg  bccolor w-full lg:block flex flex-wrap">
      <img src="@/assets/images/eventdetails/Backgimg.png" />
      </div> -->
      </div>
      <div class="contain2">
        <vs-col
          class="EventPic"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-xs="5"
          vs-sm="5"
          vs-lg="7"
        >
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-xs="0"
          vs-sm="5"
          vs-lg="5"
        >
          <div class="contain3">
            <div>
              <p class="hidden">
                {{
                  (localtime = moment
                    .utc(infos.date + ', ' + infos.time, 'YYYY-MM-DD, HH:mm:ss')
                    .local()
                    .format('YYYY-MM-DD HH:mm:ss'))
                }}
                <!-- {{localtime=localtime.add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss')}} -->
              </p>
              <!-- countdown -->
              <vue-countdown-timer
                @start_callback="startCallBack('event started')"
                @end_callback="endCallBack('event ended')"
                :start-time="`${localtime}`"
                :end-time="`${localtime}`"
                :interval="1000"
                label-position="begin"
                :end-text="'Event ended!'"
                :day-txt="'days'"
                :hour-txt="'hours'"
                :minutes-txt="'minutes'"
                :seconds-txt="'seconds'"
              >
                <template slot="countdown" slot-scope="scope">
                  <span class="dtm"
                    ><p class="p">{{ scope.props.days }}</p>
                    <div class="cnt">Days</div></span
                  >
                  <span class="dtm"
                    ><p class="p">{{ scope.props.hours }}</p>
                    <div class="cnt">HRS</div></span
                  >
                  <span class="dtm"
                    ><p class="p">{{ scope.props.minutes }}</p>
                    <div class="cnt">MIN</div></span
                  >
                  <span class="dtm"
                    ><p class="p">{{ scope.props.seconds }}</p>
                    <div class="cnt">SEC</div></span
                  >
                </template>

                <template slot="end-text" slot-scope="">
                  <span class="dtm strike"
                    ><p class="p">0</p>
                    <div class="cnt">Days</div></span
                  >
                  <span class="dtm strike"
                    ><p class="p">0</p>
                    <div class="cnt">HRS</div></span
                  >
                  <span class="dtm strike"
                    ><p class="p">0</p>
                    <div class="cnt">MIN</div></span
                  >
                  <span class="dtm strike"
                    ><p class="p">0</p>
                    <div class="cnt">SEC</div></span
                  >
                </template>
              </vue-countdown-timer>
              <!-- /countdown -->
              <!-- <span class="dtm"><p class="p">DAYS</p></span>
                <span class="dtm"><p class="p">HRS</p></span>
                <span class="dtm"><p class="p">MIN</p></span>
                <span class="dtm"><p class="p">SEC</p></span> -->
            </div>
            <div>
              <!-- <p>{{moment.utc(infos.date+' '+infos.time, moment.defaultFormat).fromNow().includes('ago')}}</p> -->
              <div
                v-if="
                  !moment
                    .utc(
                      moment(
                        infos.date + ' ' + infos.time,
                        'YYYY-MM-DD HH:mm:ss'
                      )
                        .add(30, 'minutes')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      'YYYY-MM-DD, HH:mm:ss'
                    )
                    .fromNow()
                    .includes('ago')
                "
                class="btn"
                @click="popupActive2 = true"
              ></div>

              <div
                v-if="
                  moment
                    .utc(
                      moment(
                        infos.date + ' ' + infos.time,
                        'YYYY-MM-DD HH:mm:ss'
                      )
                        .add(30, 'minutes')
                        .format('YYYY-MM-DD HH:mm:ss'),
                      'YYYY-MM-DD, HH:mm:ss'
                    )
                    .fromNow()
                    .includes('ago')
                "
                class="btn2"
                @click="popupActive2 = true"
              ></div>
            </div>
            <div class="description">
              <h1>
                <b>
                  {{ infos.description }}
                </b>
              </h1>
              <h2>
                <b
                  >Created by -
                  {{ infos.event_creator_name }}
                  <!-- <hr>
                 {{infos}} -->
                </b>
              </h2>
            </div>
          </div>
        </vs-col>

        <vs-popup
          classContent="popup-example"
          title="Welcome to VideoWiki"
          :active.sync="popupActive2"
        >
          Name<vs-input
            class="inputx mb-5 w-full"
            placeholder="Name"
            v-model="name"
          />
          Meeting Password<vs-input
            class="inputx mb-5 w-full"
            placeholder="Password"
            v-model="password"
          />
          <!-- <vs-input disabled class="inputx mb-3" placeholder="Disabled" v-model="value2" /> -->
          <vs-button
            class="btncenter"
            @click="joinnow"
            color="primary"
            type="filled"
            >Join</vs-button
          >
        </vs-popup>
      </div>

      <div class="dcontainer">
        <h5><b>Description</b></h5>

        <p class="details">{{ infos.description }}</p>
      </div>
    </div>

    <div class="section bg-white">
      <NewsLetter />
    </div>

    <footer>
      <div class="blackcolor">
        <TheFooter />
      </div>
    </footer>
  </div>
</template>

<script>
var moment = require('moment');
import NewsLetter from './components/NewsLetter';
import TheFooter from '../layouts/components/footer/TheFooter.vue';
import axios from '../axios';
import TheHeader from '@/layouts/components/navbar/NavbarHorizontal3.vue';
import constants from '../../constant';

export default {
  data() {
    return {
      // detail:{},
      popupActive2: false,
      demoVideoUrl: '',
      localtime: '',
      name: '',
      password: '',
      public_meeting_id: '',
      responsedata: {},
      meeting_info: '',
      event_name: '',
      detail: '',
      infos: [],
      name: 'Timer',
      moment: moment,
    };
  },
  components: {
    TheHeader,
    NewsLetter,
    TheFooter,
    // MemberCard
  },
  /* computed: {
    getTeamList() {
      return teamList.slice(0, 4);
    }
  }, */
  mounted() {
    this.getdatainfo();
  },

  methods: {
    startCallBack: function (x) {
      // console.log(x);
    },
    endCallBack: function (x) {
      // console.log(x);
    },
    getdatainfo() {
      axios
        .get(
          constants.apiCastUrl+'/api/event/meeting/info/?public_meeting_id=' +
            this.$route.params.eventId,
          {}
        )
        .then((response) => {
          const responsedata = response.data.meeting_info;
          this.detail = response.meeting_info;
          // console.log(responsedata)
          this.infos = response.data.meeting_info;
          return response.data.meeting_info;
          // window.location.href =  response.data.url;
          // this.$router.push(response.data.url)

          // this.response = JSON.stringify(response, null, 2)
        })
        .catch((error) => {
          this.$vs.notify({
            title: 'Oops!',
            text: 'Check the Scheduled time and Password',
            color: 'danger',
          });
        });
    },

    async joinnow() {
      console.log('...firing');

      axios
        .get(constants.apiCastUrl+'/api/event/meetings/', {})
        .then((response) => {
          this.responsedata1 = response.data.meetings;
          // console.log(response.data.meeting_info);
          console.log(response.status);
          if (response.status === false) {
            this.$vs.notify({
              title: 'Meeting is Not live',
              text: 'Check the Timings',
              color: 'danger',
            });
          } else {
            // http://api.cast.video.wiki/event/meeting/create/
            axios
              .post(constants.apiCastUrl+'/api/event/meeting/join/', {
                //  axios.post('//jsonplaceholder.typicode.com/posts', {

                // 'http://api.cast.video.wiki/api/event/meeting/create/'

                name: this.name,

                password: this.password,
                public_meeting_id: this.$route.params.eventId,

                room_type: 'private',
                avatar_url:
                  'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png',

                moderator_password: this.moderator_password,
                attendee_password: this.attendee_password,
                // logo_url:this.logo_url,

                // email: this.email,
              })
              .then((response) => {
                this.responsedata = response.data.url;
                // console.log(this.responsedata)
                window.location.href = response.data.url;
                // this.$router.push(response.data.url)

                this.$vs.notify({
                  title: 'Success',
                  text: response.data.message,
                  color: 'success',
                });
                // this.response = JSON.stringify(response, null, 2)
              })
              .catch(() => {
                this.$vs.notify({
                  title: 'Error Occured',
                  text: 'Please Check the Cast Timing or the Entered Password',
                  color: 'danger',
                });
              });
          }
        });
    },
  },
};
</script>

<style scoped>
p {
  color: #544837 !important;
}
.aligncenter {
  text-align: center;
}
.no-border {
  border-bottom: none;
}
.section {
  padding: 8%;
  margin-top: 1000px;
}
.card-img {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
.timeline-icon {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
}
.goaltext {
  color: white;
}
.blackcolor {
  background: black;
}
.bccolor {
  background: rgb(115, 103, 240);
  /* background-image: "./assets/images/landing-page/Frame1.png" */
}
.contain {
  position: absolute;
  width: 100vw;
  height: 315px;
  left: 0px;
  top: 0px;
  background: rgba(46, 0, 133, 0.8);
  backdrop-filter: blur(20px);
  background-image: url(../assets/images/eventdetails/Bannerimg.svg) !important;
  background-repeat: no-repeat;
  background-size: cover;
  background: fixed;
}
.tophead {
  position: relative;
  width: 100%;

  margin-left: 5px;
  top: -87px;

  left: 90px;
  /* left:10.5vw; */
  /* top: 89px; */

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  /* or 125% */

  text-transform: capitalize;

  color: #ffffff;
}
.createdby {
  position: relative;
  /* display: inline; */
  width: 100%;
  height: 24px;
  left: 96px;

  /* left: 295px; */

  top: -71px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;
}
.datebox {
  /* position: absolute; */
  width: 90px;
  height: 109px;
  /* top: 82px;
    left:10.5vw; */

  background: #8d56f8;
  border-radius: 4px;
}
/* @media only screen and (min-width: 768px) {
  .timeline::before {
    content: '';
    position: absolute;
    height: 85.5%;
    width: 1px;
    border-right: 0.5px dashed rgba(230, 73, 128, 0.7);
    left: 50%;
    transform: translateX(-50%);
  }
} */
.contain2 {
  position: absolute;
  width: 1171px;
  height: 394px;
  left: 10.5vw;
  top: 210px;
  margin-left: -47px;
}

.EventPic {
  height: 394px;
  background-image: url(../assets/images/eventdetails/EventImg.svg);
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.1));
  border-radius: 6px;
}

.contain3 {
  height: 394px;
  width: 100%;
}
.dtm {
  /* position: absolute; */
  margin-left: 30px;
  width: 77px;
  height: 97px;
  /* left: 1227px;
  top: 396px; */
  display: inline-block;

  background: rgba(29, 194, 2, 0.1);
  border: 2px solid #8d56f8;
  box-sizing: border-box;
  border-radius: 6px;
}

.p {
  text-align: center !important;
  color: white !important;
  font-size: xx-large;
  margin-top: 10px;
}

.btn {
  width: 370px;
  height: 77px;
  background-image: url(../assets/images/eventdetails/JoinNow.png);
  margin-left: 28px;
  margin-top: 62px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 7px 6px 7px #00823f;
}
.btn:hover {
  cursor: pointer;
}
.btn:active {
  box-shadow: 0 0 0 #00823f;
}
.btn2 {
  width: 370px;
  height: 77px;
  background-image: url(../assets/images/eventdetails/ButtonWatchRecording.svg);
  margin-left: 28px;
  margin-top: 62px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 7px 6px 7px #00823f;
}
.btn2:hover {
  cursor: pointer;
}
.btn2:active {
  box-shadow: 0 0 0 #00823f;
}
.description {
  width: 367px;
  height: 128px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */
  margin-left: 30px;
  margin-top: 25px;

  letter-spacing: 0.01em;

  color: #426666;
}

.dcontainer {
  position: absolute;
  width: 1171px;
  height: 393px;
  left: 134px;
  top: 668px;
}
.details {
  margin-top: 24px;
}
.daybox {
  /* width: 30px; */
  height: 66px;
  text-align: center;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 66px;
  /* identical to box height */

  color: #ffffff;
}
.monthbox {
  /* width: 37px; */
  height: 24px;
  text-align: center;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;
}
.timebox {
  /* width: 62px; */
  height: 21px;
  text-align: center;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
}
.cnt {
  text-align: center !important;
  color: white !important;
}
.adoptive {
  position: absolute;
  top: 82px;
  left: 10.5vw;
}
.strike {
  text-decoration: line-through;
  text-decoration-color: white;
}
</style>
