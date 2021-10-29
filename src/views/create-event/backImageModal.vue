<!-- =========================================================================================
    File Name: backImageModal.vue
    Description: fetch all background image and details using api
    ----------------------------------------------------------------------------------------
    Item Name: Back Image Modal
    Author: Ashwani bhardwaj
========================================================================================== -->



<template>
  <!-- Modal -->
  <div>
    <div class="flex flex-wrap items-center justify-end sticky top-0 p-2" style="z-index:1;background: rgba(255,255,255,0.8);" >
      <div class="ml-3 relative" v-for="(item,index) in themes" :key="index">
        <vs-button :color="item.value" :text-color="item.color" class="p-5" @click.stop="imageCategory = item.name"
                   :data-tooltip="item.text" :title="item.text"></vs-button>
      </div>
    </div>
    <div class="w-full gridView">
      <div v-for="(item,index) in backImages" :key="index">
        <img v-if="item.category == imageCategory || imageCategory == 'all'" :src="item.low_quality_url" class="w-full cursor-pointer" @click.stop="setBackImage(item.high_quality_url)" />
        <p v-if="item.category == imageCategory || imageCategory == 'all'" class="credit"><i>pic credit : {{item.credit}}</i></p>
      </div>
    </div>
  </div>
</template>
<script>
  import constants from '../../../constant'
  import axios from 'axios'
  export default {
    name: "BackImageModal",
    props: ["modalProps"],
    data() {
      return {
        backImages: null,
        imageCategory: 'all',
        themes: [
          {name:'river blue',     text:"River Blue"     , value:'#467FCF'  , color: '#FFFFFF'  },
          {name:'forest green',   text:"Forest Green"   , value:'#58821E'  , color: '#FFFFFF'  },
          {name:'grassland green',text:"Grassland Green", value:'#9DCD5B'  , color: '#FFFFFF'  },
          {name:'ocean teal',     text:"Ocean Teal"     , value:'#3BA0BE'  , color: '#FFFFFF'  },
          {name:'space purple',   text:"Space Purple"   , value:'#6859B4'  , color: '#FFFFFF'  },
          {name:'solar yellow',   text:"Solar Yellow"   , value:'#F2C244'  , color: '#FFFFFF'  },
          {name:'sunny orange',   text:"Sunny Orange"   , value:'#EA7526'  , color: '#FFFFFF'  },
          {name:'bussiness red',  text:"Business Red"   , value:'#C6211B'  , color: '#FFFFFF'  },
          {name:'personal pink',  text:"Personal Pink"  , value:'#F36677'  , color: '#FFFFFF'  },
          {name:'machine grey',   text:"Machine Grey"   , value:'#B3B3B3'  , color: '#FFFFFF'  }
        ]
      }
    },
    mounted () {
      axios.get(`${constants.backImageUrl}`+this.imageCategory).
      then(resp => {
        this.backImages = resp.data.data
        console.log(this.backImages);
      }).
      catch(error => {throw error})
    },
    methods: {
      setBackImage(image) {
        this.modalProps.backImage = image;
        this.modalProps.popupBackImageActive = false;
      }
    }
  }
</script>
<style>
  .con-vs-popup .vs-popup{
    width: auto;
    min-width:calc(100% - 30px);
    min-height: calc(100% - 30px);
  }
  .gridView{
    column-count: 3;
    column-fill: balance;
    column-gap: 7px;
  }
  .gridView > div{
    float: left;
    position: relative;
  }
  .gridView > div > p.credit{
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 7px;
    color: #FFF;
    background: rgba(0,0,0,0.7);
    padding: 5px;
    text-align: right;
    font-weight: 600;
    margin: 0px;
  }
</style>
