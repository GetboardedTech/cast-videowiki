<!-- =========================================================================================
    File Name: Main Page
    Description:
    ----------------------------------------------------------------------------------------
    Item Name: Crete Event Form Container
    Author: Ashwani bhardwaj
========================================================================================== -->

<template>
  <div>
    <div class="eventBanner w-full lg:block flex flex-wrap">
      <TheHeader class="headerwidth" />
    </div>
    <div class="container" style="height:200vh;">
      <div class="form-container">
        <form-wizard
          class="createEventForm"
          color="rgba(var(--vs-primary), 1)"
          :title="null"
          finishButtonText="Submit"
          @on-complete="formSubmitted"
        >
          <!-- tab 1 content -->
          <tab-content
            title=""
            class="mb-5"
            :before-change="() => validateFormOne()"
          >
            <step-1 ref="stepone" :stepOneProps="stepOneProps" />
          </tab-content>
          <!-- tab 2 content -->
          <tab-content title="" class="mb-5"
                       :before-change="() => validateFormTwo()"
          >
            <step-2 :stepTwoProps="stepTwoProps"
                    />
          </tab-content>
          <!-- tab 3 content -->
          <tab-content title="" class="mb-5">
            <step-3 :stepThreeProps="stepThreeProps" />
          </tab-content>
          <!-- tab 4 content -->
          <tab-content title="" class="mb-5">
            <step-4 :stepFourProps="stepFourProps" />
          </tab-content>
          <!-- tab 5 content -->
          <tab-content title="" class="mb-5" :before-change="() => validateFormFive()">
            <step-5 :stepFiveProps="stepFiveProps"
            />
          </tab-content>
        </form-wizard>
      </div>
    </div>
    <div id="loading-bg" v-if="loading">
<!--      <div class="loading-logo">-->
<!--        <img src="<%= BASE_URL %>logo.svg" alt="Logo" />-->
<!--      </div>-->
      <div class="loading">
        <div class="effect-1 effects"></div>
        <div class="effect-2 effects"></div>
        <div class="effect-3 effects"></div>
      </div>
    </div>
    <div class="blackcolor" >
      <TheFooter />
    </div>
  </div>
</template>

<script>
  import TheHeader from '@/layouts/components/navbar/NavbarHorizontal3.vue';
  import { FormWizard, TabContent } from 'vue-form-wizard';
  import 'vue-form-wizard/dist/vue-form-wizard.min.css';
  import axios from '../../axios';
  import Step1 from '../create-event/stepOne.vue';
  import Step2 from '../create-event/stepTwo.vue';
  import Step3 from '../create-event/stepThree.vue';
  import Step4 from '../create-event/stepFour.vue';
  import Step5 from '../create-event/stepFive.vue';
  import TheFooter from '@/layouts/components/footer/TheFooter.vue';
  export default {
    data() {
      return {
        stepOneProps: {
          event_name: '',
          moderator_password: '',
          attendee_password: '',
          banner_text: '',
          guest_policy: '',
          welcome_text: 'You are a Moderator, you can control who presents and participates in the live cast',
          duration: '',
          logout_url: 'https://cast.video.wiki/postCast',
          meeting_type: '',
          schedule_time: "",
          description: '',
          max_participant: 100,
          short_description: '',
          hide_users: false,
          event_name_error:false,
          moderator_password_error:false,
          attendee_password_error:false,
          description_error:false,
          schedule_time_error:false,
          meeting_type_error:false,
          event_name_length_error:false,
          event_tag: ['videowiki'],
        },
        stepTwoProps: {
          primary_color: '',
          secondary_color: '',
          logo: '',
          back_image: '',
          cover_image: '',
          cover_image_error:false,
          back_image_error:false
        },
        stepThreeProps: {
          record_facebook: '',
          record_youtube: '',
          record_twich: '',
          facebook_rtmp_url:"",
          facebook_secret_key:'',
          twich__rtmp_url:'',
          twicth_secret_key:'',
          facebook_stream_url: '',
          facebook_url2: '',
          youtube_stream_url: '',
          twich_url: '',
          vw_stream_url: '',
          is_streaming: true,
        },
        stepFourProps: {
          record: '',
          mute_on_start: '',
          end_when_no_moderator: '',
          allow_moderator_to_unmute_user: '',
          webcam_only_for_moderator: '',
          auto_start_recording: '',
          allow_start_stop_recording: '',
          disable_cam: '',
          disable_mic: '',
          lock_layout: '',
          lock_on_join: '',
        },
        stepFiveProps: {
          name: '',
          email: '',
          invitee_details_error:false,
          invitee_details: [],
        },

        statusOptions: [
          { text: 'Ask Moderator', value: 'ask_moderator' },
          { text: 'Allow Without Asking', value: 'without_asking' },
        ],
        onPageExtraProps: {
          copyright: '',
          breakout_room: '',
          free_join: '',
          breakout_room_enabled: '',
          breakout_room_record: '',
          breakout_room_private_chat_enabled: '',
          duplicate_user: '',
          message: '',
          city: 'new-york',
          proposalTitle: '',
          jobTitle: '',
          textarea: '',
          eventName: '',
          eventLocation: 'san-francisco',
          status: 'plannning',
          response: '',
          LocationOptions: [
            { text: 'New York', value: 'new-york' },
            { text: 'Chicago', value: 'chicago' },
            { text: 'San Francisco', value: 'san-francisco' },
            { text: 'Boston', value: 'boston' },
          ],
        },
        onFileExtraProps: {
          hide_users: true,
          short_description: '',
          max_participant: '',
        },
        format: 'd MMMM yyyy',
        responsedata: {},
        formData: new FormData(),
         loading:false,
      };
    },
    methods: {
      setCreateEventData() {
        // this.formData = { ...this.formData, ...this.stepOneProps };
       // / this.formData = { ...this.formData, ...this.stepTwoProps };
        // this.formData = { ...this.formData, ...this.stepThreeProps };
        // this.formData = { ...this.formData, ...this.stepFourProps };
        // this.formData = { ...this.formData, ...this.stepFiveProps };
        for (const [key, value] of Object.entries(this.stepOneProps)) {
          console.log(this.stepOneProps);
          if(value.length ==0){
            value="";
          }
          else {
            if (value === false) {
              value = "False";
            }
           else if (value === true) {
              value = "True";
            } else if (value === "") {
              value = "";
            }else{
              value=value;
            }
          }
          this.formData.append(key, value);
        }
        for (const [key, value] of Object.entries(this.stepTwoProps)) {
          if(value.length ==0){
            value="";
          }
          else {
            if (value === false) {
              value = "False";
            }
            else if (value === true) {
              value = "True";
            } else if (value === "") {
              value = "";
            }else{
              value=value;
            }
          }
          this.formData.append(key, value);
        }
        for (const [key, value] of Object.entries(this.stepThreeProps)) {
          console.log(this.stepThreeProps);
          if(value.length ==0){
            value="";
          }
          else {
            if (value === false) {
              value = "False";
            }
            else if (value === true) {
              value = "True";
            } else if (value === "") {
              value = "";
            }else{
              value=value;
            }
          }
          this.formData.append(key, value);
        }
        for (const [key, value] of Object.entries(this.stepFourProps)) {
          console.log(this.stepFourProps);
          if(value.length ==0){
            value="";
          }
          else {
            if (value === false) {
              value = "False";
            }
            else if (value === true) {
              value = "True";
            } else if (value === "") {
              value = "";
            }else{
              value=value;
            }
          }
          this.formData.append(key, value);
        }
        for (const [key, value] of Object.entries(this.stepFiveProps)) {
          console.log(this.stepFiveProps);
          if(value.length ==0){
            value="";
          }
          else {
            if (value === false) {
              value = "False";
            }
            else if (value === true) {
              value = "True";
            } else if (value === "") {
              value = "";
            }else{
              value=JSON.stringify(value);
            }
          }
          this.formData.append(key, value);
        }
        console.log(this.formData);
      },
      formSubmitted() {
        this.setCreateEventData();
        this.$vs.loading()

        axios
          .post(
            'https://api.cast.video.wiki/api/event/meeting/create/',
            this.formData
          )
          .then((response) => {
            setTimeout( ()=> {
              this.$vs.loading.close()
            }, 5000);
            this.responsedata = response.data.message;
            this.$vs.notify({
              title: 'Success',
              text: response.data.message,
              color: 'success',
            });
            this.$router.push('/mycasts');
            // this.response = JSON.stringify(response, null, 2)
          })
          .catch((error) => {
            this.$vs.loading.close();
            console.log(error.response.data.message);
            this.formData=new FormData();
            if(error.response.data.message.length>0){
              this.$vs.notify({
                title: 'Oops!',
                text: error.response.data.message,
                color: 'danger',
              });
            }else {
              this.$vs.notify({
                title: 'Oops!',
                text: 'Some Fields are Missing',
                color: 'danger',
              });
            }
          });
      },

      validateFormOne() {
        if (
          this.stepOneProps.event_name === '' ||

          this.stepOneProps.description === '' ||
          this.stepOneProps.schedule_time === ''
        ){
          this.stepOneProps.event_name_error=true;

          this.stepOneProps.description_error=true;
          this.stepOneProps.schedule_time_error=true;

          return false;
        }
        else {
          return true;
        }
      },
      validateFormTwo() {
        if (
          this.stepTwoProps.cover_image === ''
        ){
          this.stepTwoProps.cover_image_error=true;
          return false;
        }
        else {
          return true;
        }
      },
      validateFormThree() {},
      validateFormFour() {},
      validateFormFive() {
        console.log(this.stepFiveProps.invitee_details);
        if (
          this.stepFiveProps.invitee_details.length <1
        ){
          this.stepFiveProps.invitee_details_error=true;
          return false;
        }
        else {
          return true;
        }
      },
    },
    components: {
      TheHeader,
      TheFooter,
      FormWizard,
      TabContent,
      Step1,
      Step2,
      Step3,
      Step4,
      Step5,
    },
    computed: {
      usersData() {
          return this.$store.state.AppActiveUser;
      },
    },
    created(){
      console.log('Active User', this.$store.state.AppActiveUser);
      if(this.$store.state.AppActiveUser.email.length>0){
      }else{
        this.$router.push('/login');
      }
    }

  };
</script>

<style>
  .eventBanner  {
    background: rgb(115, 103, 240);
    background-image: url('../../assets/images/landing-page/Frame1.png');
    height: 350px;
    position: relative;
    top: 0px;
  }

  .form-container {
    position: relative;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: -106px;
    background: rgba(255, 255, 255, 1);
  }

  .createEventForm .wizard-progress-with-circle {
    position: absolute !important;
    top: 50px !important;
    height: 4px;
    left: 0px;
    right: 0px;
  }
  .createEventForm > .wizard-header {
    position: relative;
    visibility: hidden;
    display: none;
  }
  .vue-form-wizard .wizard-nav-pills {
    margin-top: 0px;
    text-align: center;
    padding: 21px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  } .vue-form-wizard .wizard-icon-circle .wizard-icon-container {
        border-radius: 50%;
  }
  .form-group {
    justify-content: space-between;
  }
  .form-group label {
    font-weight: 600;
    margin-bottom: 13px;
    font-size: 16px;
    display: inline-block;
    padding-left: 5px;
    text-transform: capitalize;
  }
  .form-group input {
    background: #fbfbfc;
    border: 1px solid #ebedf0 !important;
    border-radius: 6px;
    font-weight: 500;
  }
  .form-group > h4 {
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }
  .headerwidth {
    width: 100%;
  }
</style>
