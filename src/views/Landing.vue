<!-- =========================================================================================
    File Name: Landing.vue
    Description: fetch all background image and details using api
    ----------------------------------------------------------------------------------------
    Item Name:
    Author: Rana Vivek Singh
========================================================================================== -->

<template>
  <div id="knowledge-base-page" class="">
    <!-- JUMBOTRON -->
    <div class="backgroundimg bccolor w-full lg:block flex flex-wrap">
      <div class="section flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:text-left text-center">
          <h6 class="lg:text-2xl text-xl mb-10 goaltext">
            {{ $t('Welcome to Videowiki') }}
          </h6>
          <h1 class="lg:text-7xl font-extrabold mb-8 mt-2 text-5xl goaltext">
            {{ $t('Landing.Welcome.title') }}
          </h1>
          <h4 class="lg:text-2xl text-xl mb-10 goaltext">
            {{ $t('Landing.Welcome.info1') }}
            {{ $t('Landing.Welcome.info2') }}
          </h4>
          <div class="lg:text-left text-center">
            <vs-button
              type="filled"
              class="bg-custom-purple text-base font-bold"
              @click="$router.push('/events')"
            >
              {{ $t('Landing.Welcome.button') }}</vs-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- JUMBOTRON /-->

    <!--ABOUT US-->

    <div class="section flex flex-wrap md:justify-between">
      <div class="lg:w-1/2 hidden md:hidden sm:hidden lg:block">
        <img src="@/assets/images/landing-page/Frame2new.svg" />
      </div>
      <div class="lg:w-1/2 lg:mx-auto w-full text-left">
        <div class="lg:w-4/5 lg:mx-auto">
          <h1 class="text-4xl font-extrabold mb-8 lg:text-left text-center">
            {{ $t('Landing.About.title') }}
          </h1>
          <div class="text-base font-medium mb-10">
            <h5>{{ $t('Landing.About.info1') }}</h5>
            <br /><br />
            <h5>{{ $t('Landing.About.info2') }}</h5>
            <br />
            <h5>
              {{ $t('Landing.About.info3') }}
              <span class="font-bold">{{ $t('Landing.About.info4') }}</span>
            </h5>
            <br />
            <ul id="ulli">
              <span class="ull">{{ $t('Landing.About.info5') }}</span>
              <li>{{ $t('Landing.About.info6') }}</li>
              <li>{{ $t('Landing.About.info7') }}</li>
              <li>{{ $t('Landing.About.info8') }}</li>
            </ul>
          </div>
          <br />
          <br />
          <div class="text-center lg:text-left">
            <vs-button
              type="filled"
              class="bg-custom-purple text-base font-bold"
              @click="$router.push('/createEvent')"
              >Create Event</vs-button
            >
            <!-- <p>Create engaging online events</p> -->
          </div>
        </div>
      </div>
    </div>

    <!--ABOUT US /-->

    <vs-divider class="m-0" />

    <!-- PROJECT GOALS -->
    <div class="section flex bg-black">
      <div class="lg:w-1/2 w-full">
        <h1
          class="font-extrabold text-4xl mb-6 lg:text-left text-center goaltext"
        >
          {{ $t('Landing.Project.title1') }}<br class="hidden lg:block" />
          {{ $t('Landing.Project.title2') }}
        </h1>
        &nbsp; &nbsp;
        <h4 class="font-medium mb-10 text-left goaltext">
          {{ $t('Landing.Project.info') }}
        </h4>
        <h4 class="font-medium mb-10 text-left goaltext">
          {{ $t('Landing.Project.info2') }}
        </h4>
        <div class="lg:text-left text-center">
          <!-- <vs-button
            type="filled"                                                      //For furthur use
            class="bg-custom-purple font-bold"
            @click="$router.push('/goals')"
            >{{$t('Landing.Project.button')}}</vs-button
          > -->
        </div>
      </div>
      <div class="lg:w-1/3 hidden md:hidden sm:hidden lg:block mx-auto">
        <img src="@/assets/images/landing-page/embedsocial-integrations.svg" />
      </div>
    </div>
    <!-- PROJECT GOALS /-->

    <!-- MISSION -->
    <div class="section flex flex-wrap md:justify-between bg-white">
      <div class="lg:w-1/2 hidden md:hidden sm:hidden lg:block">
        <img src="@/assets/images/landing-page/analyze.svg" />
      </div>
      <div class="lg:w-1/2 lg:mx-auto w-full text-left">
        <div class="lg:w-4/5 lg:mx-auto">
          <h1 class="text-4xl font-extrabold mb-8 lg:text-left text-center">
            {{ $t('Landing.Mission.title') }}
          </h1>
          <div class="text-base font-medium mb-10">
            <h1>{{ $t('Landing.Mission.info1') }}</h1>
            <br /><br />
            <h5>{{ $t('Landing.Mission.info2') }}</h5>
            <br />
            <h5>{{ $t('Landing.Mission.info3') }}</h5>
            <span class="font-bold">{{ $t('Landing.Mission.info4') }}</span>
          </div>
          <br /><br />
          <div class="text-center lg:text-left">
            <vs-button
              type="filled"
              class="bg-custom-purple text-base font-bold"
              @click="$router.push('/createEvent')"
              >Create Event</vs-button
            >
          </div>
        </div>
      </div>
    </div>

<!--    <div class="section">-->
<!--      <div class="text-center mb-20">-->
<!--        <h1 class="font-extrabold text-4xl mb-4">-->
<!--          {{ $t('Landing.Strategy.title1') }} <br />-->
<!--          {{ $t('Landing.Strategy.title2') }}-->
<!--        </h1>-->
<!--      </div>-->

<!--      <vs-collapse>-->
<!--        <vx-card class="lg:w-1/2 p1">-->
<!--          <vs-collapse-item>-->
<!--            <div slot="header">Collapse item</div>-->
<!--            Lorem....metus.-->
<!--          </vs-collapse-item>-->
<!--        </vx-card>-->
<!--        <vx-card class="lg:w-1/2 p1">-->
<!--          <vs-collapse-item>-->
<!--            <div slot="header">Collapse item 2</div>-->
<!--            Nunc....maximus.-->
<!--          </vs-collapse-item>-->
<!--        </vx-card>-->

<!--        <vx-card class="lg:w-1/2">-->
<!--          <vs-collapse-item>-->
<!--            <div slot="header">Collapse item 4</div>-->
<!--            Suspendisse....finibus.-->
<!--          </vs-collapse-item>-->
<!--        </vx-card>-->
<!--        <vx-card class="lg:w-1/2">-->
<!--          <vs-collapse-item>-->
<!--            <div slot="header">Collapse item 4</div>-->
<!--            Suspendisse....finibus.-->
<!--          </vs-collapse-item>-->
<!--        </vx-card>-->
<!--      </vs-collapse>-->
<!--    </div>-->

    <!--NEWSLETTER-->
    <div class="section">
      <NewsLetter />
    </div>
    <!--NEWSLETTER/-->

    <footer>
      <div class="blackcolor">
        <TheFooter />
      </div>
    </footer>
  </div>
</template>

<script>
import NewsLetter from './components/NewsLetter';
// import { teamList } from './components/localDb';
// import MemberCard from './components/MemberCard';

export default {
  data() {
    return {
      demoVideoUrl: '',
      expand: Function,
      list: this.$t('Landing.List'),
      list1: [
        {
          title: this.$t('Landing.List1[0]'),
          url: '/integration/ocean-protocol',
        },
        {
          title: this.$t('Landing.List1[1]'),
          url: '/integration/ms-teams',
        },
        {
          title: this.$t('Landing.List1[2]'),
          url: '#',
        },
      ],
      list2: [],
      list3: this.$t('Landing.List3'),
      list4: this.$t('Landing.List4'),
      list5: this.$t('Landing.List5'),
      list6: [
        {
          title: this.$t('Landing.List6.item1.title'),
          description: this.$t('Landing.List6.item1.description'),
          closed: true,
        },
        {
          title: this.$t('Landing.List6.item2.title'),
          description: this.$t('Landing.List6.item2.description'),
          closed: true,
        },
        {
          title: this.$t('Landing.List6.item3.title'),
          description: this.$t('Landing.List6.item3.description'),
          closed: true,
        },
        {
          title: this.$t('Landing.List6.item4.title'),
          description: this.$t('Landing.List6.item4.description'),
          closed: true,
        },
        {
          title: this.$t('Landing.List6.item5.title'),
          description: this.$t('Landing.List6.item5.description'),
          closed: true,
        },
        {
          title: this.$t('Landing.List6.item6.title'),
          description: this.$t('Landing.List6.item6.description'),
          closed: true,
        },
      ],
      steps: this.$t('Landing.Steps'),
    };
  },
  components: {
    NewsLetter,
  },

  mounted() {
    this.expand = (idx) => this.isClosed(idx);
    this.demoVideoUrl =
      'https://dapi.videowiki.pt/media/temporary/2021/03/03/demo.mp4';
  },
  methods: {
    isClosed(idx) {
      if (this.$refs[`collapse_${idx}`][0].maxHeight === '0px') return true;
      return false;
    },
    getStepIcon(index) {
      return require(`../assets/images/landing-page/step${index + 1}.png`);
    },
  },
  beforeDestroy() {
    if (this.$refs.vsCollapse) {
      for (const collapseItem of this.$refs.vsCollapse.$children) {
        window.removeEventListener('resize', collapseItem.changeHeight);
      }
    }
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
  background-image: './assets/images/landing-page/Frame1.png';
}
.backgroundimg {
  background-image: url(../assets/images/landing-page/Framenew.svg);
}
@media only screen and (min-width: 768px) {
  .timeline::before {
    content: '';
    position: absolute;
    height: 85.5%;
    width: 1px;
    border-right: 0.5px dashed rgba(230, 73, 128, 0.7);
    left: 50%;
    transform: translateX(-50%);
  }
}
img {
  height: 100%;
}
#ulli {
  font-size: 1.2em;
  margin-left: 21px;
  list-style-image: url('../assets/images/landing-page/check.svg');
  color: black;
}
.ull {
  margin-left: -21px;
}
</style>
