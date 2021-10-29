<!-- =========================================================================================
    File Name: stepThree
    Description:
    ----------------------------------------------------------------------------------------
    Item Name: Crete Event Form Step 3
    Author: Ashwani bhardwaj
========================================================================================== -->



<template>
  <div class="vx-row">
    <!--    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">-->
    <!--      <div class="vx-card no-shadow card-border p-5 flex flex-wrap form-group">-->
    <!--        <label class="mb-0"-->
    <!--          ><font-awesome-icon icon="facebbok" />Facebook</label-->
    <!--        >-->
    <!--        <vs-switch v-model="stepThreeProps.record_facebook" />-->
    <!--        <div v-if="stepThreeProps.record_facebook" class="w-full">-->
    <!--          <hr class="w-full mt-5 border-light" />-->
    <!--          <div class="vx-col md:w-1/1 w-full mt-5">-->
    <!--            <vs-input-->
    <!--              label="Facebook RTMP Url"-->
    <!--              class="w-full form-group"-->
    <!--              v-model="stepThreeProps.facebook_rtmp_url"-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="vx-col md:w-1/1 w-full mt-5">-->
    <!--            <vs-input-->
    <!--              label="Facebook Secret Key"-->
    <!--              class="w-full form-group"-->
    <!--              v-model="stepThreeProps.facebook_secret_key"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">
      <div class="vx-card no-shadow card-border p-5 flex flex-wrap form-group">
        <label class="mb-0">VideoWiki Streaming</label>
        <vs-switch v-model="stepThreeProps.vw_stream_url"  />
        <div class="w-full ml-2 mt-2">
          For streaming the event on VideoWiki, choose this option and you will receive the stream page adress in your email.
        </div>
      </div>
    </div>
    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">
      <div class="vx-card no-shadow card-border p-5 flex flex-wrap form-group">
        <label class="mb-0">YouTube Streaming</label>
        <vs-switch v-model="stepThreeProps.record_youtube" />
        <div class="w-full ml-2 mt-2">
          You can stream your event on YouTube.
          - Server URL address:
          - Stream name/key:
        </div>
        <div v-if="stepThreeProps.record_youtube" class="w-full">
          <hr class="w-full mt-5 border-light" />
          <div class="vx-col md:w-1/1 w-full mt-5">
            <vs-input
              label="Youtube RTMP Url"
              class="w-full form-group"
              v-model="youtube_rtmp_url"
            />
          </div>
          <div class="vx-col md:w-1/1 w-full mt-5">
            <vs-input
              label="Youtube Secret Key"
              class="w-full form-group"
              v-model="youtube_secret_key"
              v-on:change="valueCheck()"
            />
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">-->
    <!--      <div class="vx-card no-shadow card-border p-5 flex flex-wrap form-group">-->
    <!--        <label class="mb-0">Twitch</label>-->
    <!--        <vs-switch v-model="stepThreeProps.record_twich" />-->
    <!--        <div v-if="stepThreeProps.record_twich" class="w-full">-->
    <!--          <hr class="w-full mt-5 border-light" />-->
    <!--          <div class="vx-col md:w-1/1 w-full mt-5">-->
    <!--            <vs-input-->
    <!--              label="Twitch RTMP Url"-->
    <!--              class="w-full form-group"-->
    <!--              v-model="stepThreeProps.twich__rtmp_url"-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="vx-col md:w-1/1 w-full mt-5">-->
    <!--            <vs-input-->
    <!--              label="Twitch Secret Key "-->
    <!--              class="w-full form-group"-->
    <!--              v-model="stepThreeProps.twicth_secret_key"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  export default {
    name: '',
    props: ['stepThreeProps'],
    data() {
      return {
        userName: '',
        userNameError:false,
        userEmailError:false,
        userEmail: '',
        youtube_rtmp_url:'',
        youtube_secret_key:'',
        userRole: 'attendee',
        userType: [
          { text: 'Attendee', value: 'attendee' },
          { text: 'Moderator', value: 'moderator' },
        ],
      };
    },
    components: {
      FontAwesomeIcon,
    },
    methods: {
      valueCheck(){
        if(this.youtube_secret_key.length>0){
          this.stepThreeProps.youtube_stream_url=this.youtube_rtmp_url+'/'+this.youtube_secret_key;
        }
      }
    },

  };
</script>
