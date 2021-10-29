<!-- =========================================================================================
    File Name: stepFour
    Description:
    ----------------------------------------------------------------------------------------
    Item Name: Crete Event Form Step 4
    Author: Ashwani bhardwaj
========================================================================================== -->



<template>
  <div class="vx-row">
    <div class="vx-col w-full mt-5 flex flex-wrap">
      <div class="flex flex-wrap w-full form-group">
        <label class="float-left">Recording</label>
        <vs-switch class="float-right" v-model="stepFourProps.record" />
        <div class="w-full ml-2 mt-2">
          Switch this on to allow the recording of the session. You can start and pause the recording as many times as you want.
        </div>
      </div>
      <div class="flex flex-wrap w-full form-group">
        <label>Mute on start</label>
        <vs-switch v-model="stepFourProps.mute_on_start" />
        <div class="w-full ml-2 mt-2">
          Switch this on for attendees to join muted.
        </div>
      </div>
      <div class="flex flex-wrap w-full form-group">
        <label>End when no moderator</label>
        <vs-switch v-model="stepFourProps.end_when_no_moderator" />
        <div class="w-full ml-2 mt-2">
          Switch this on to end the room when all the moderators leave.
        </div>
      </div>
      <div class="flex flex-wrap w-full form-group">
        <label>Allow moderator to unmute user</label>
        <vs-switch v-model="stepFourProps.allow_moderator_to_unmute_user" />
        <div class="w-full ml-2 mt-2">
          Switch this on for moderator to be able to unmute users.
        </div>
      </div>
      <div class="flex flex-wrap w-full form-group">
        <label>Webcam moderator only</label>
        <vs-switch v-model="stepFourProps.webcam_only_for_moderator" />
        <div class="w-full ml-2 mt-2">
          Switch this on to give permission to start the camera for the moderators only.
        </div>
      </div>
      <div class="flex flex-wrap w-full form-group">
        <label>Auto start recoding</label>
        <vs-switch v-model="stepFourProps.auto_start_recording" />
        <div class="w-full ml-2 mt-2">
          Switch this on to automatically record your event.
        </div>
      </div>
<!--      <div class="flex flex-wrap w-full form-group">-->
<!--        <label>Allow start stop recoding</label>-->
<!--        <vs-switch v-model="stepFourProps.allow_start_stop_recording" />-->
<!--      </div>-->
      <div class="flex flex-wrap w-full form-group">
        <label>Disable cam</label>
        <vs-switch v-model="stepFourProps.disable_cam" />
        <div class="w-full ml-2 mt-2">
          Switch this on to forbid people to open their camera.
        </div>
      </div>
      <div class="flex flex-wrap w-full form-group">
        <label>Disable mic</label>
        <vs-switch v-model="stepFourProps.disable_mic" />
        <div class="w-full ml-2 mt-2">
          Switch this on to forbid people to open their microphone.
        </div>
      </div>
      <div class="flex flex-wrap w-full form-group">
        <label>Lock layout</label>
        <vs-switch v-model="stepFourProps.lock_layout" />
        <div class="w-full ml-2 mt-2">
          Switch this on to lock the possibility of changing the layout of the room.
        </div>
      </div>
<!--      <div class="flex flex-wrap w-full form-group">-->
<!--        <label>Lock on join</label>-->
<!--        <vs-switch v-model="stepFourProps.lock_on_join" />-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    props: ["stepFourProps"]
  }
</script>
<style scoped>
  .form-group{
    background: #FBFBFC;
    border: 1px solid #EBEDF0;
    padding: 20px;
  }
  .form-group:first-child{
    border-radius: 12px 12px 0px 0px;
  }
  .form-group:last-child{
    border-radius: 0px 0px 12px 12px;
  }
  .form-group > label{
    margin-bottom: 0px;
  }
</style>
