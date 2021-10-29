<!-- =========================================================================================
    File Name: VideoCard.vue
    Description: fetch all background image and details using api
    ----------------------------------------------------------------------------------------
    Item Name: 
    Author: Rana Vivek Singh
========================================================================================== -->



<template>
  <div class="newalignvideo">
    <vs-card class="cardx card-dimension custom-border-box">
      <div slot="media" class="thumbnail">
        <img
          style="background-color: #f5f5f5"
          :src="cover_image"
          height="208"
          width="368"
        />

        <vs-chip class="video-length">{{ meeting_time }} GMT</vs-chip>
      </div>
      <div class="content">
        <vs-row vs-type="flex" vs-align="center">
          <!-- <vs-chip class="video-tag">VideoWiki</vs-chip> -->
        </vs-row>
        <div
          class="text-dark mt-3"
          @click="joinnowEventDetail"
          style="font-size: 25px"
        >
          <h3
            data-v-1ab6bfc5=""
            class="
              truncate
              font-semibold
              mb-1
              hover:text-primary
              cursor-pointer
            "
          >
            <b>{{ meeting_name }}</b>
          </h3>
        </div>
        <div class="creator-profile mt-3">
          <vs-row
            vs-type="flex"
            vs-justify="space-between"
            vs-align="center"
            class=""
          >
            <div>
              <!-- <button
                @click="joinnowEventDetail"
                class="custom-avatar container joinimage"
              ></button> -->
              <h4 class="status">Live {{ live_in }}</h4>
              <span>
                <vs-avatar :src="logo" color="primary" text="" /><b
                  class="avatar-text"
                  >{{ creator_name }}</b
                ></span
              >
            </div>

            <div>
              <!-- <p>{{ meeting_day }}</p>
              <p>{{ meeting_time }}</p> -->
            </div>
          </vs-row>
        </div>
      </div>
    </vs-card>
  </div>
</template>
<script>
var moment = require('moment');
import videoList from '../MyCasts.vue';
import axios from '../../axios';

export default {
  mounted() {},
  props: [
    'meeting_name',
    'meeting_day',
    'meeting_time',
    'session_key',
    'live_in',
    'creator_name',
    'cover_image',
    'logo',
  ],
  data() {
    return {
      videoList: [],
      popupActive2: false,
      name: '',
      password: '',
      eventid: '',
    };
  },
  methods: {
    joinnowEventDetail() {
      var push = `/eventdetails/${this.session_key}`; //used /info/public api for event details page
      this.$router.push(push);
    },
  },
};
</script>
<style scoped>
.card-dimension {
  height: 90%;
  width: 90%;
  overflow: hidden;
  border-radius: 16px;
}
.custom-avatar {
  margin: 0;
  margin-left: -13px;
}
.custom-avatar :first-child {
  font-size: 16px;
}
.thumbnail {
  position: relative;
}
.video-length {
  position: absolute;
  z-index: 10;
  bottom: 15px;
  right: 20px;
  background: rgba(0, 0, 0, 0.62);
}
.video-length :first-child {
  color: #fff;
  font-weight: 600;
}
.video-tag {
  width: 61px;
  height: 20px;
}

.version-chip :last-child {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #e64980;
  cursor: pointer;
  color: #e64980;
  background: none;
}
.joinimage {
  background-image: url(../../assets/images/Frame264.svg);
  border-radius: 70px;
  height: 2.2em;
  width: 155px;
  background-position-y: center;
  background-position-x: center;
  background-color: white;
  border: none;
  cursor: pointer;
}
.joinimage:active {
  background-color: whitesmoke;
}
.containnew {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 1300px;
  height: 1630px;
  left: 120px;
  top: 646px;
}
.rowone {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1200px;
  height: 385px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 30px 0px;
}
.newalignvideo {
  position: static;
  width: 370px;
  height: 385px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 30px;
}
.videosection {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1170px;
  height: 385px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 30px 0px;
}
.content {
  padding-left: 1rem;
}
.status {
  color: #00cc66;
}
.avatar-text {
  position: relative;
  top: -16px;
}
</style>
