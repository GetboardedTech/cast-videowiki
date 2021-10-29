<!-- =========================================================================================
    File Name: stepOne
    Description:
    ----------------------------------------------------------------------------------------
    Item Name: Crete Event Form Step 1
    Author: Ashwani bhardwaj
========================================================================================== -->
<<template>
  <div class="vx-row">
    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">
      <vs-input id="eventName" label="Event Name" v-model="stepOneProps.event_name" class="w-full form-group" placeholder="Pick a name that casts a spell"  v-on:change="valueCheck()" />
      <span class="text-danger text-sm mt-1" v-show="stepOneProps.event_name_error">Event Name  field is required</span>
      <span class="text-danger text-sm mt-1" v-show="stepOneProps.event_name_length_error">Event Name should not exceed 70 Character </span>
    </div>
    <div class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap">
      <vs-input id="moderatorPass" type="password" label="Moderator Password"  v-model="stepOneProps.moderator_password" class="w-full form-group" placeholder="You can skip a Moderator password as an empty"  v-on:change="valueCheck()" />
      <span class="text-danger text-sm mt-1" v-show="stepOneProps.moderator_password_error">Moderator Password field is required</span>
    </div>
    <div class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap">
      <vs-input id="attendeePass" type="password" label="Attendee Password"  v-model="stepOneProps.attendee_password" class="w-full form-group" placeholder="You can skip a Attendee password as an empty"  v-on:change="valueCheck()" />
      <span class="text-danger text-sm mt-1" v-show="stepOneProps.attendee_password_error">Attendee Password field is required</span>
    </div>
    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap form-group">
      <label>Description*</label>
      <vs-textarea id="description" v-model="stepOneProps.description" class="mb-0 form-group" rows="3" placeholder="Event Description"  v-on:change="valueCheck()" />
      <span class="text-danger text-sm mt-1" v-show="stepOneProps.description_error">Description field is required</span>
    </div>
    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">
      <div class="vx-card no-shadow card-border p-5 flex flex-wrap">
        <div class="flex flex-wrap w-full form-group items-center">
          <label class="m-0">Schedule</label>
          <div style="display:none">
            <vs-button class="wizard-btn bg-success border-success shadow-none text-white mr-1">Done</vs-button>
            <vs-button class="wizard-btn bg-white shadow-none border-light text-dark">Cancel</vs-button>
          </div>
        </div>
        <hr class="w-full mt-5 border-light" />
        <div class="vx-col md:w-1/3 w-full mt-5 flex flex-wrap form-group">
          <label>Start time</label>
          <div class="vx-row">
            <div class="vx-col md:w-1/2 w-full flex flex-wrap">
              <vs-input
                v-model="startH"
                type="number"
                color="warning"
                :min="0"
                :max="23"
                placeholder="HH"
                id="startHour"
              />
            </div>
            <div class="vx-col md:w-1/2 w-full flex flex-wrap">
              <vs-input
                v-model="startM"
                type="number"
                color="warning"
                :min="0"
                :max="59"
                placeholder="MM"
                id="startMinute"
              />
            </div>
          </div>
        </div>
        <div class="vx-col md:w-1/3 w-full mt-5 form-group">
          <label  class="w-full form-group"><b>Time Zone</b></label>
        <label class="mt-4 ml-4">GMT</label>
        </div>
        <div class="vx-col md:w-1/3 w-full mt-5 form-group">
          <label>Date</label>
          <datepicker id="startDate" v-model="startD" format="yyyy-MM-dd" @closed="setDate()" :disabledDates="disabledDates" placeholder="Please Select Event Date" v-on:change="valueCheck()"></datepicker>
          <span class="text-danger text-sm mt-1" v-show="stepOneProps.schedule_time_error">Event Date field is required</span>
        </div>
      </div>
    </div>

    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">
      <div class="vx-card no-shadow card-border p-5 flex flex-wrap">
        <div class="flex flex-wrap w-full form-group items-center">
          <label class="m-0">Advance Options</label>
          <div>
            <vs-switch v-model="advanceOpts" />
          </div>
        </div>
        <hr v-if="advanceOpts" class="w-full mt-5 border-light" />
        <div v-if="advanceOpts" class="vx-row mt-5">
          <div class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap">
            <vs-input id="bannerTxt" label="Welcome Message" v-model="stepOneProps.banner_text" class="w-full form-group" placeholder="Your welcome text here" />
          </div>
          <div class="vx-col md:w-1/2 w-full mt-5 form-group flex flex-wrap">
            <label>Guest Policy</label>
            <select  class="selectType  w-full dropdown" v-model="stepOneProps.guest_policy"  >
               <option value="" >Select Guest Policy</option>
                <option value="ALWAYS_ACCEPT">ALWAYS ACCEPT</option>
              <option value="ALWAYS_DENY">ALWAYS DENY</option>
              <option value="ASK_MODERATOR">ASK MODERATOR</option>
            </select>
         </div>
          <div class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap">
            <vs-input id="moderatorOnlyMsg" label="Moderator Only Message" v-model="stepOneProps.welcome_text" class="w-full form-group" placeholder="Write Moderator message here" />
          </div>
          <div class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap">
            <vs-input type="number"  :min="15" id="duration" label="Duration" v-model="stepOneProps.duration" class="w-full form-group" placeholder="In Minutes" />
          </div>
          <div class="vx-col md:w-1/2 w-full mt-5 flex flex-wrap">
            <vs-input id="logoutURL" label="Logout URL" v-model="stepOneProps.logout_url" class="w-full form-group"  placeholder="Enter your Logout url" readonly />
          </div>
          <div class="vx-col md:w-1/2 w-full mt-5 form-group flex flex-wrap">
             <label>Meeting Type</label>
            <select  class="selectType  w-full dropdown" v-model="stepOneProps.meeting_type"  >
              <option value="" >Choose session to be public or private.</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Datepicker from 'vuejs-datepicker';
  import moment from 'moment'
  import {required} from 'vuelidate/lib/validators'

  export default {
    name: "",
    props: ["stepOneProps"],
    components: {
      Datepicker,
      moment
    },
    data() {
      return {
        advanceOpts: false,
        meetingopt: 2,
        startH: '00',
        startM: '01',
        startD:'',
        disabledDates: {
          to: moment().subtract(1, 'days').toDate()
        }
      }
    },
    validations: {
      event_name: { required, },
      duration: { required, },
    },
    methods: {
      setDate(e){
        this.startD = moment.utc(this.startD).format('YYYY-MM-DD');
        var testDateUtc = moment.utc(this.startD+' '+this.startH+':'+this.startM);
        var localDate = moment(testDateUtc).local();
        console.log((localDate.toDate()).toString());
        console.log(testDateUtc.toString());
        console.log(this.startD);
        this.stepOneProps.schedule_time= (localDate.toDate()).toString();
        this.stepOneProps.schedule_time_error=false;
        console.log(this.stepOneProps.schedule_time);
      },
      valueCheck(){
        if(this.meetingopt=='public' || this.meetingopt=='private' ){
          this.stepOneProps.meeting_type=this.meetingopt;
          this.stepOneProps.meeting_type_error=false;
        }
        if(this.stepOneProps.event_name.length>0 & this.stepOneProps.event_name.length<=70){
          this.stepOneProps.event_name_error=false;
          this.stepOneProps.event_name_length_error=false;
        }
        else if(this.stepOneProps.event_name.length>=70){
          this.stepOneProps.event_name_length_error=true;
        }
          else{
          this.stepOneProps.event_name_error=true;
        }
        // if(this.stepOneProps.moderator_password.length>0){
        //   this.stepOneProps.moderator_password_error=false;
        // }else{
        //   this.stepOneProps.moderator_password_error=true;
        // }
        // if(this.stepOneProps.attendee_password.length>0){
        //   this.stepOneProps.attendee_password_error=false;
        // }else{
        //   this.stepOneProps.attendee_password_error=true;
        // }
        if(this.stepOneProps.description.length>0){
          this.stepOneProps.description_error=false;
        }else{
          this.stepOneProps.description_error=true;
        }
      },
      geustPolicySelect(){
        this.stepOneProps.guest_policy=this.geustPolicy;
      }
    }
  }
</script>
<style scoped>
  .con-select-example {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .con-select .vs-select {
    width: 100%
  }
  @media (max-width: 550px) {
    .con-select {
      flex-direction: column;
    }
    .con-select .vs-select {
      width: 100%
    }
  }
  .dropdown{
    background: #fbfbfc;
    border: 1px solid #ebedf0 !important;
    border-radius: 6px;padding: 10px;color:darkgrey
  }
</style>


