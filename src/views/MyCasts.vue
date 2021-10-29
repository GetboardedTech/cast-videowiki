<!-- =========================================================================================
    File Name: MyVideos.vue
    Description: fetch all background image and details using api
    ----------------------------------------------------------------------------------------
    Item Name:
    Author: Rana Vivek Singh
========================================================================================== -->




<template>
  <div id="knowledge-base-page">
    <div class="knowledge-base-jumbotron backgroundimage">
      <span class="float"><TheHeader /></span>
      <div
        class="
          knowledge-base-jumbotron-content
          lg:p-32
          md:p-24
          sm:p-16
          p-8
          rounded-lg
          mb-base
        "
      >
        <h1 class="mb-1 textdiscover"><b>Discover livecasts</b></h1>
        <p class="mb-1 textdiscover">
          Scale your voice! Broadcast your message on multiple channels streams
        </p>
        <vs-input
          icon-no-border
          placeholder="Search Topic or Keyword"
          v-model="knowledgeBaseSearchQuery"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-1/2 mt-6 searchbardis"
        />
      </div>
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div
      class="vs-con-loading__container"
      id="div-with-loading"
      :class="{ 'h-72': isLoading }"
    ></div>

    <div v-if="!isLoading">
      <template v-if="videoList.length > 0">

<!--        <ul>-->
<!--&lt;!&ndash;        <li @click="ongoing=true; upcoming=false; ended=false"><p > Ongoing Events</p></li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li @click="ongoing=false; upcoming=true; ended=false"><p> Upcoming Events</p></li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li @click="ongoing=false; upcoming=false; ended=true"><p> Ended Events</p></li>&ndash;&gt;-->
<!--      </ul>-->
        <!-- Ongoing Events -->
        <h3 class="lg:text-2xl text-xl mb-10 upcoming">
          <b>Ongoing Events</b>
        </h3>

        <vs-row>
          <template v-for="video in videoList">

            <p class="hide" :key="video.id">
              {{
              (live = moment
              .utc(
              video.event_date + ' ' + video.event_time,
              moment.defaultFormat
              )
              .fromNow())
              }}
            </p>
            <vs-col
              v-if="minsdiff(`${video.event_date} ${video.event_time}`)"
              :key="video.id"
              class="p-3 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"
            >
              <vs-card class="cardx card-dimension custom-border-box">
                <div slot="media" class="thumbnail">
                  <img
                    class="cardcolor"
                    style=""
                    :src="video.cover_image"
                    height="208"
                    width="344"
                  />

                  <vs-chip
                    class="video-length"
                    style="font-size: 20px; padding-left: 20px; color: Red"
                  ><b>Event is Live!</b>
                  </vs-chip>

                </div>

                <div>
                  <div
                    class="video-title text-dark mt-3"
                    style="font-size: 20px; padding-left: 20px"
                  >
                    <b>{{ video.event_name }}</b>
                  </div>

                  <div class="creator-profile mt-3">
                    <vs-row
                      vs-type="flex"
                      vs-justify="space-between"
                      vs-align="center"
                      class="pl-5"
                    >
                      <div>
                        <button
                          @click="joinnow(video)"
                          class="custom-avatar container joinimage"
                        ></button>

                        <h4>
                          Live
                          {{
                          moment
                          .utc(video.event_date + ' ' + video.event_time)
                          .fromNow()
                          }}
                        </h4>
                      </div>
                      <div>
                        <span @click="delmeet(video)" class="btnhover"
                        ><i
                          class="
                              vs-icon
                              notranslate
                              icon-scale
                              material-icons
                              20px
                            "
                        >delete</i
                        ></span
                        >
                      </div>
                    </vs-row>
                  </div>
                </div>
              </vs-card>
            </vs-col>
          </template>
        </vs-row>
        <!-- Upcoming Events -->
        <h3 class="lg:text-2xl text-xl mb-10 upcoming">
          <b>Upcoming Events</b>
        </h3>
        <vs-row>
          <template v-for="video in videoList">
            <vs-popup
              classContent="popup-example "
              title="Add Invitee "
              :active.sync="inviteePopup"
              style="background: rgba(0,0,0,0.05);"
            >
              <div class="vx-row">
                <div class="vx-col md:w-1/4 w-full mt-5 flex flex-wrap">
                  <vs-input
                    label="Name"
                    v-model="userName"
                    class="w-full form-group"
                    placeholder="Name"
                  />

                </div>
                <div class="vx-col md:w-1/4 w-full mt-5 flex flex-wrap">
                  <vs-select
                    autocomplete
                    class="selectType form-group w-full normal"
                    label="Role"
                    v-model="userRole"
                    id="userType"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item, index) in userType"
                    />
                  </vs-select>
                </div>
                <div
                  class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap form-group items-end"
                >
                  <vs-input
                    type="mail"
                    label="Email Address"
                    v-model="userEmail"
                    class="flex-1 mr-5 form-group"
                    placeholder="Email"
                  />

                  <vs-button class="btn-wizard py-4" @click.stop="addUser()"
                  >+</vs-button
                  >
                </div>
                <div class="text-danger text-sm mt-4 ml-4" v-show="userNameError">User Name   and  Email field is required</div>
                <div
                  v-if="invitee_details.length > 0"
                  class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap"
                >
                  <div class="vx-card no-shadow card-border p-5 flex flex-wrap">
                    <div class="flex flex-wrap w-full form-group items-center">
                      <label class="m-0">Added User List</label>
                      <div
                        class="
              w-full
              p-5
              flex flex-wrap
              items-center
              form-group
              vx-card
              mt-5
              border-light
            "
                        v-for="(item, index) in invitee_details"
                        :key="index"
                      >
            <span>{{ item.name }}</span
            ><span  class="ml-3">{{ item.type }}</span
                      ><span  class="ml-3">{{ item.email }}</span
                      ><span  class="ml-3" @click.stop="removeUser(index)"
                      ><i class="fas fa-trash" />Remove</span
                      >
                      </div>
                    </div>
                  </div>
                </div>
                <vs-button class="btn-wizard mt-4 ml-4 flex-wrap text-center" @click.stop="inviteUser(video.public_meeting_id)"
                >Invite User</vs-button
                >
              </div>
            </vs-popup>
            <p class="hide" :key="video.id">
              {{
              (live = moment
              .utc(
              video.event_date + ' ' + video.event_time,
              moment.defaultFormat
              )
              .fromNow())
              }}
            </p>
            <vs-col
              v-if="checkpast(live)"
              :key="video.id"
              class="p-3 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"
            >
              <vs-card class="cardx card-dimension custom-border-box">
                <div slot="media" class="thumbnail">
                  <img
                    class="cardcolor"
                    style=""
                    :src="video.cover_image"
                    height="208"
                    width="344"
                  />
                </div>

                <div>
                  <div
                    class="video-title text-dark mt-3"
                    style="font-size: 15px"
                  >
                    <h3>
                      <b>{{ video.event_name }}</b>
                    </h3>
<!--                    <span @click="addInviteePupup(video)" class="btnhover"-->
<!--                    > <feather-icon  class="-->
<!--                              vs-icon-->
<!--                              notranslate-->
<!--                              icon-scale-->
<!--                              material-icons-->
<!--                              20px-->
<!--                              mr-2-->
<!--                              mt-4-->
<!--                            " icon="UserPlusIcon" title="Add Invitee" svgClasses="w-4 h-4" /></span-->
<!--                    >-->
                  </div>
                  <vs-row vs-type="flex" vs-align="center"> </vs-row>
                  <div class="creator-profile mt-3">
                    <vs-row
                      vs-type="flex"
                      vs-justify="space-between"
                      vs-align="center"
                      class="pl-5"
                    >
                      <div>
                        <button
                          @click="joinnow(video)"
                          class="custom-avatar container joinimage"
                        ></button>

                        <h3 class="livetext">
                          Live
                          {{
                          moment
                          .utc(video.event_date + ' ' + video.event_time)
                          .fromNow()
                          }}
                        </h3>
                      </div>
                      <div>
                        <span @click="delmeet(video)" class="btnhover"
                        ><i
                          class="
                              vs-icon
                              notranslate
                              icon-scale
                              material-icons
                              20px
                            "
                        >delete</i
                        ></span
                        >
                        <!-- <p>{{ video.event_date }}</p>
                        <p>{{ video.event_time }}</p> -->
                      </div>
                    </vs-row>
                  </div>
                </div>
              </vs-card>
            </vs-col>
          </template>
        </vs-row>
        <!-- Ended Events -->
        <h3 class="lg:text-2xl text-xl mb-10 upcoming">
          <b>Ended Events</b>
        </h3>

        <vs-row>
          <template v-for="video in videoList">
<!--            {{video}}-->
<!--            <vs-input type="hidden" v-modal="meetingId" :value="video.public_meeting_id"/>-->
            <vs-popup
              classContent="popup-example "
              title="Add Invitee "
              :active.sync="inviteePopup"
              style="background: rgba(0,0,0,0.05);"
            >
              <div class="vx-row">
                <div class="vx-col md:w-1/4 w-full mt-5 flex flex-wrap">
                  <vs-input
                    label="Name"
                    v-model="userName"
                    class="w-full form-group"
                    placeholder="Name"
                  />

                </div>
                <div class="vx-col md:w-1/4 w-full mt-5 flex flex-wrap">
                  <vs-select
                    autocomplete
                    class="selectType form-group w-full normal"
                    label="Role"
                    v-model="userRole"
                    id="userType"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item, index) in userType"
                    />
                  </vs-select>
                </div>
                <div
                  class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap form-group items-end"
                >
                  <vs-input
                    type="mail"
                    label="Email Address"
                    v-model="userEmail"
                    class="flex-1 mr-5 form-group"
                    placeholder="Email"
                  />

                  <vs-button class="btn-wizard py-4" @click.stop="addUser()"
                  >+</vs-button
                  >
                </div>
                <div class="text-danger text-sm mt-4 ml-4" v-show="userNameError">User Name   and  Email field is required</div>
                <div
                  v-if="invitee_details.length > 0"
                  class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap"
                >
                  <div class="vx-card no-shadow card-border p-5 flex flex-wrap">
                    <div class="flex flex-wrap w-full form-group items-center">
                      <label class="m-0">Added User List</label>
                      <div
                        class="
              w-full
              p-5
              flex flex-wrap
              items-center
              form-group
              vx-card
              mt-5
              border-light
            "
                        v-for="(item, index) in invitee_details"
                        :key="index"
                      >
            <span>{{ item.name }}</span
            ><span  class="ml-3">{{ item.type }}</span
                      ><span  class="ml-3">{{ item.email }}</span
                      ><span  class="ml-3" @click.stop="removeUser(index)"
                      ><i class="fas fa-trash" />Remove</span
                      >
                      </div>
                    </div>
                  </div>
                </div>
                <vs-button class="btn-wizard mt-4 ml-4 flex-wrap text-center" @click.stop="inviteUser(video.public_meeting_id)"
                >Invite User</vs-button
                >
              </div>
            </vs-popup>
            <p class="hide" :key="video.id">
              {{
              (live = moment
              .utc(
              video.event_date + ' ' + video.event_time,
              moment.defaultFormat
              )
              .fromNow())
              }}
            </p>
            <vs-col
              v-if="
                !checkpast(live) &&
                !minsdiff(`${video.event_date} ${video.event_time}`)
              "
              :key="video.id"
              class="p-3 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"
            >
              <!-- {{video.cover_image}} -->
              <vs-card class="cardx card-dimension custom-border-box">
                <div
                  slot="media"
                  style="font-size: 15px; padding-left: 20px"
                  class="thumbnail"
                >
                  <img
                    class="cardcolor"
                    style=""
                    :src="video.cover_image"
                    height="208"
                    width="368"
                  />

                  <vs-chip class="video-length ended-event mt-4"
                  >Event Ended</vs-chip
                  >
<!--                  <span @click="addInviteePupup(video)" class="btnhover"-->
<!--                  > <feather-icon  class="-->
<!--                              vs-icon-->
<!--                              notranslate-->
<!--                              icon-scale-->
<!--                              material-icons-->
<!--                              20px-->
<!--                              mr-2-->
<!--                              mt-4-->
<!--                            " icon="UserPlusIcon" title="Add Invitee" svgClasses="w-4 h-4" /></span-->
<!--                  >-->
                </div>
                <div>
                  <div
                    class="video-title text-dark mt-3"
                    style="font-size: 15px; padding-left: 20px"
                  >
                    <b>{{ video.event_name }}</b>
                  </div>

                  <div class="creator-profile mt-3">
                    <vs-row
                      vs-type="flex"
                      vs-justify="space-between"
                      vs-align="center"
                      class="pl-5"
                    >
                      <div>
                        <h4>
                          Live
                          {{
                          moment
                          .utc(video.event_date + ' ' + video.event_time)
                          .fromNow()
                          }}
                        </h4>
                      </div>
                      <div>
                        <span @click="delmeet(video)" class="btnhover"
                        ><i
                          class="
                              vs-icon
                              notranslate
                              icon-scale
                              material-icons
                              20px
                            "
                        >delete</i
                        ></span
                        >
                        <!-- <p>{{ video.event_date }}</p>
                        <p>{{ video.event_time }}</p> -->
                      </div>
                    </vs-row>
                  </div>
                </div>
              </vs-card>
            </vs-col>
          </template>
        </vs-row>
      </template>
      <template v-else>
        <div class="flex h-72 justify-center items-center flex-wrap">
          <h4 class="text-danger">No Event Created yet</h4>
        </div>
      </template>
    </div>
    <vs-popup ref="custom_modal" :active.sync="showAssetModal">
      <div class="flex items-start -m-5">
        <div class="p-5">
          <img src="@/assets/images/Frame264.svg" />
        </div>
        <div class="p-5">
          <div class="mb-2">
            <h4>{{ selectedVideo.video ? selectedVideo.video.title : '' }}</h4>
          </div>
          <div>
            <div class="text-2xl" v-if="!isWalletConnected">
              Connect Wallet !
            </div>
            <div v-else class="vs-con-loading__container" id="buy-download">
              <div v-if="!isDownloadable">
                <div class="mb-2">
                  <b>{{ oceanRequired }}</b> OCEAN
                </div>
                <vs-button
                  type="filled"
                  class="mb-2 font-semibold"
                  @click="buyContent"
                >Buy</vs-button
                >
              </div>
              <vs-button
                v-else
                type="filled"
                class="font-semibold"
                @click="downloadAsset"
              >Download</vs-button
              >
            </div>
          </div>
        </div>
      </div>
      <!--vs-divider /-->
    </vs-popup>
    <Transaction
      :show="showTransactionModal"
      :transactionType="txType"
      :transactionPhase="currentTxPhase"
      @close="showTransactionModal = false"
      @retry="txType === 'Buy' ? buyContent() : downloadAsset()"
    />

  </div>
</template>
<script>
  var moment = require('moment');
  import TheHeader from '@/layouts/components/navbar/NavbarHorizontal3.vue';
  import Transaction from '@/views/components/Transaction/Transaction.vue';
  import VideoCard from './components/VideoCard';
  import { ajaxCallMixin } from '../http/HttpCommon';
  import axios from '../axios';
  import constants from '../../constant';

  export default {
    mounted() {},
    name: 'Dashboard',
    mixins: [ajaxCallMixin],

    components: {
      TheHeader,
      VideoCard,
      Transaction,
    },

    data() {
      return {
        ongoing: true,
        upcoming: true,
        ended: true,
        videoList: [],
        knowledgeBaseSearchQuery:null,
        moment: moment,
        my_events: [
          {
            event_name: [],
          },
        ],
        isLoading: false,
        selectedVideo: {},
        oceanRequired: 0,
        showAssetModal: false,
        videoTxData: {},
        isDownloadable: false,
        showTransactionModal: false,
        txType: 'Buy',
        inviteePopup:false,
        currentTxPhase: 'Processing',
        userName: '',
        userNameError:false,
        userEmailError:false,
        userEmail: '',
        userRole: 'attendee',
        userType: [
          { text: 'Attendee', value: 'attendee' },
          { text: 'Viewer', value: 'viewer' },
          { text: 'Moderator', value: 'moderator' },
        ],
        invitee_details:[],
        meetingId:''
      };
    },
    computed: {
      reversedVideoList() {
        return this.videoList.slice().reverse();
      },
      isWalletConnected() {
        return this.$store.state.isWalletConnected;
      },
      accountAddress() {
        return this.$store.state.accountAddress;
      },
    },
    mounted() {
      this.getVideoList();
      this.$refs.custom_modal.$el.childNodes[1].childNodes[0].style.display =
        'none';
      this.$refs.custom_modal.$el.childNodes[1].style.width = '400px';
    },
    methods: {
      checkpast(live) {
        return live.includes('ago') ? false : true;
      },
      minsdiff(s) {
        const now = moment.utc().format('yyyy-MM-DD HH:mm:ss');
        const expiration = moment(s, 'yyyy-MM-DD HH:mm:ss');

        // get the difference between the moments
        const diff = expiration.diff(now);
        // console.log("Days:", now);
        // console.log("Hours:", expiration);
        //express as a duration
        const diffDuration = moment.duration(diff);

        // display
        // console.log("Days:", diffDuration.days());
        // console.log("Hours:", diffDuration.hours());
        // console.log("Minutes:", diffDuration.minutes());
        // console.log("sconds:", diffDuration.seconds());

        if (
          diffDuration.days() == 0 &&
          diffDuration.hours() == 0 &&
          diffDuration.seconds() <0 &&
          diffDuration.minutes() < 0 &&
          diffDuration.minutes() > -30
        ){
          return true;}
        else if(diffDuration.days() == 0 &&
          diffDuration.hours() == 0 &&
          diffDuration.seconds() <0 &&
          diffDuration.minutes() == 0 ){
          return true;
        }
        else if(diffDuration.days() == 0 &&
          diffDuration.hours() == 0 &&
          diffDuration.seconds() == 0 &&
          diffDuration.minutes() == 0 ){
          return true;
        }
        else {return false;}
      },
      getVideoList() {
        const url = constants.apiCastUrl+'/api/event/user/events/';
        this.$vs.loading({
          background: 'transparent',
          container: '#div-with-loading',
        });
        this.isLoading = true;
        this.getRequest(url, this.handleResponse);
      },
      handleResponse(apiResponse) {
        this.$vs.loading.close('#div-with-loading > .con-vs-loading');
        this.isLoading = false;
        this.videoList = apiResponse.my_events;
        this.event_name = apiResponse.my_events.event_name;
      },

      async joinnow(video) {
        axios
          .post(constants.apiCastUrl+'/api/event/meeting/join/', {
            name: this.name,
            name: video.event_name,
            password: '',
            public_meeting_id: video.public_meeting_id,
            redirect: true,
            room_type: 'private',
            avatar_url:
              '',
            guest: false,
            moderator_password: this.moderator_password,
            attendee_password: this.attendee_password,
          })
          .then((response) => {
            this.responsedata = response.data.url;
            console.log(this.responsedata);
            window.location.href = response.data.url;
            // this.$router.push(response.data.url)
            this.$vs.notify({
              title: 'Success',
              text: response.data.message,
              color: 'success',
            });
          })
          .catch((error) => {
            this.$vs.notify({
              title: 'Oops!',
              text: 'Check the Scheduled time',
              color: 'danger',
            });
          });
      },

      async delmeet(video) {
        axios
          .post("https://api.cast.video.wiki/api/event/meeting/delete/", {

            name: video.event_name,
            password: '',
            public_meeting_id: video.public_meeting_id,
            redirect: true,
            room_type: 'public',
            avatar_url:
              'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png',
            guest: false,
            moderator_password: this.moderator_password,
            attendee_password: this.attendee_password,
          })
          .then((response) => {
            this.responsedata = response.data.url;
            console.log(this.responsedata);
            this.$router.go(this.$router.currentRoute);
            this.$vs.notify({
              title: 'Success',
              text: response.data.message,
              color: 'success',
            });
            // this.response = JSON.stringify(response, null, 2)
          })
          .catch((error) => {
            this.response = 'Error: ' + error.response.status;
            this.$vs.notify({
              title: 'Meeting Does not Exist',
              text: 'meeting already got deleted ',
              color: 'danger',
            });
          });
      },
      addInviteePupup (){
           this.inviteePopup=true;
      },
      addUser() {
        if(this.userName==='' || this.userEmail===''){
          this.userNameError=true;
        }else {
          this.invitee_details = [
            ...this.invitee_details,
            { name: this.userName, email: this.userEmail, type: this.userRole },
          ];
          this.userName = '';
          this.userEmail = '';
          this.userNameError=false;
        }
      },
      removeUser(userIndex) {
        if (userIndex > -1) {
          this.invitee_details.splice(userIndex, 1);
        }
      },
      inviteUser(meetId){
          console.log('meetId',this.meetingId);
      }
    },
  };
</script>
<style scoped>
  .backgroundimage {
    background: rgb(115, 103, 240);

    background-image: url(../assets/images/landing-page/newmask.svg);
    height: 37rem;
  }
  .textdiscover {
    text-align: center;
    padding-top: 3rem;
    color: white;
    size: 20rem;
  }
  .searchbardis {
    align-content: right;
    padding-top: 7rem;
    margin-left: auto;
    margin-right: auto;
  }
  .cardcolor {
    align-items: center;
  }
  .joinimage {
    align-items: center;
    background-image: url(../assets/images/Framestartclass.svg);
    border-radius: 70px;
    height: 2.2em;
    padding-left: 20px;
    width: 155px;
    background-position-y: center;
    background-position-x: center;
    background-color: white;
    border: none;
    cursor: pointer;
    margin-left: -13px;
  }
  .joinimage:active {
    background-color: whitesmoke;
  }
  .btnhover:hover {
    cursor: pointer;
  }
  .icon-scale {
    width: 20px;
    height: 20px;
    font-size: 20px;
    float: right;
  }
  .float {
    float: left;
    width: 100%;
  }

  li {
    list-style: none;
    margin-top: 30px;
  }
  li:hover {
    cursor: pointer;
  }
  .hide {
    display: none;
  }
  .upcoming {
    text-align: center;
    padding-top: 2rem;
    color: black;
  }
  .livetext {
    color: royalblue;
  }
  .ended-event {
    background-color: orange;
  }
  ..vs-popup--background{
    background: ;
  }
</style>
