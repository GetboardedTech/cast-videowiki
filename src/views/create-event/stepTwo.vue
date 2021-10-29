<!-- =========================================================================================
File Name: stepTwo
Description:
----------------------------------------------------------------------------------------
Item Name: Crete Event Form Step 2
Author: Ashwani bhardwaj
========================================================================================== -->

<template>
  <div class="vx-row">
    <div class="vx-col md:w-1/1 w-full mt-5 form-group">
      <div class="form-group flex flex-wrap">
        <label>Cover</label> <label>{{coverFileName}}</label>
      </div>
      <div class="upload-btn-wrapper items-center w-full">
        <img class="upload-resume-icon" src="../../../src/assets/images/upload-resume.svg" />
        <button class="btn w-full" :class="{'upload-success': upload_success}">Drag’n drop or click to upload file</button>
        <input type="file" name="cover file" id="coverfile" ref="coverfile" accept="image/*" v-on:change="uploadCover" />
      </div>
      <span class="text-danger text-sm mt-1" v-show="stepTwoProps.cover_image_error">Cover Image  field is required.</span>
    </div>
    <div class="vx-col md:w-3/4 w-full mt-5 form-group">
      <label>Choose Color</label>
      <div class="flex flex-wrap">

        <vs-button v-for="(item,index) in colors" :key="index" :color="item.value" :text-color="item.color" style="height:52.49px;width:52.48px" class="ml-1 mr-5 mb-6 p-5 " @click.stop="setPrimaryColor(item.value)"
                   data-toggle="tooltip" data-placement="bottom" :title="item.text">
          <feather-icon
            v-if="stepTwoProps.primary_color === item.value"
            icon="CheckCircleIcon"
            svgClasses="text-white w-5 h-5"
          />
        </vs-button>
        <vs-button  class="medium button-class mb-4" title="Background Image" style="padding:0px;" @click.stop="modalProps.popupBackImageActive=true" >
          <img src="../../assets/images/create-event/image_2021_09_07T14_47_36_644Z.png"  style="height:52.49px;width:52.48px" /></vs-button>
        <vs-input type="hidden" v-model="stepTwoProps.primary_color" />
      </div>
    </div>
    <div class="vx-col md:w-1/4 w-full mt-5 form-group">
      <label>Brand Logo</label>
      <input type="file"  class="w-full w-full form-control mt-4" style="height:40px;padding: 0.7rem !important;ffont-size: 1rem !important;" name="Brand Logo" id="brandLogo" ref="brandLogo" v-on:change="uploadBrandLogo" />
      <!--      <vs-input type="file"  v-model="stepTwoProps.logo" id="brandLogo" ref="brandLogo" class="w-full form-group" v-on:change="valueCheck" />-->
    </div>
    <div class="vx-col md:w-1/1 w-full mt-5" v-if="stepTwoProps.back_image=modalProps.backImage">
      <label>{{stepTwoProps.back_image}}</label>
    </div>
    <!--    <div class="vx-col md:w-1/2 w-full mt-5">-->
    <!--      <vs-input label="Secondary Color" v-model="stepTwoProps.secondary_color" class="w-full form-group" />-->
    <!--    </div>-->


    <vs-popup title="Choose Background Image" :active.sync="modalProps.popupBackImageActive">
      <BackImageModal :modalProps="modalProps" />
    </vs-popup>
  </div>
</template>
<script>
import BackImageModal from './backImageModal.vue'
import { required } from 'vuelidate/lib/validators';
export default {
  name: "",
  props: ["stepTwoProps"],
  components: {
    BackImageModal,
  },
  data() {
    return {
      upload_success: false,
      coverFileName: "",
      modalProps: {
        popupBackImageActive: false,
        backImage: "",
      },
      colors: [
        {text: "River Blue"     ,    value: "#3A74D0", color: "#FFFFFF"},
        {text: "Forest Green"   ,  value: "#398C19", color: "#FFFFFF"},
        {text: "Grassland Green", value: "#7FDA57", color: "#FFFFFF"},
        {text: "Ocean Teal"     ,    value: "#00A2BF", color: "#FFFFFF"},
        {text: "Space Purple"   , value: "#753FB5", color: "#FFFFFF"},
        {text: "Solar Yellow"   , value: "#FBC73E", color: "#FFFFFF"},
        {text: "Sunny Orange"   , value: "#FF6721", color: "#FFFFFF"},
        {text: "Business Red"   , value: "#E00019", color: "#FFFFFF"},
        {text: "Personal Pink"  , value: "#FF4177", color: "#FFFFFF"},
        {text: "Machine Grey"   , value: "#B3B3B3", color: "#FFFFFF"},
      ]
    }
  },
  validations: {
    back_image: { required, },
  },
  methods: {
    setPrimaryColor(color) {
      this.stepTwoProps.primary_color = color;
    },
    uploadCover(event){
      this.coverFileName = event.target.files[0].name;
      this.stepTwoProps.cover_image = event.target.files[0];
      this.stepTwoProps.cover_image_error=false;
      //this.stepTwoProps.cover_image ="";
      this.upload_success = true;
    },
    uploadBrandLogo(event){
      this.stepTwoProps.logo=event.target.files[0];
      //  this.stepTwoProps.logo="";
    }
  },
}
</script>
<style scoped>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
}
.btn {
  /*border: 2px solid gray;*/
  color: gray;
  /*background-color: white;*/
  padding: 120px 200px 80px 200px;
  /*border-radius: 8px;*/
  /*font-size: 20px;
  font-weight: bold;*/
  cursor: pointer;
  background: rgba(242, 147, 0, 0.06);
  border: 1px dashed #F29300;
  box-sizing: border-box;
  border-radius: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #848199;
}
.upload-success {
  background-color: rgba(var(--vs-primary),1)! important;
  color: #FFFFFF;
}
.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
input {
  cursor: pointer! important;
}
.upload-resume-icon {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: 40px;
}
.button-class{
  padding:0;
  background:#ffffff!important;
  heigh:0px;}
</style>
