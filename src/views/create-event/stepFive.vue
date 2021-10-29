<!-- =========================================================================================
    File Name: stepFive
    Description:
    ----------------------------------------------------------------------------------------
    Item Name: Crete Event Form Step 5
    Author: Ashwani bhardwaj
========================================================================================== -->



<template>
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

      <vs-button class="btn-wizard py-4" @click.stop="addUser"
      >Add User invite</vs-button
      >
    </div>
    <span class="text-danger text-sm mt-4 text-center" style="margin-left: 35%;margin-right:35%; " v-show="userNameError">User Name   and  Email field is required</span>
    <span class="text-danger text-sm mt-4 text-center" style="margin-left: 35%;margin-right:35%; " v-show="stepFiveProps.invitee_details_error">Please Invite  Attendee and Moderator</span>

    <div
      v-if="stepFiveProps.invitee_details.length > 0"
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
            v-for="(item, index) in stepFiveProps.invitee_details"
            :key="index"
          >
            <span>{{ item.name }}</span
            ><span>{{ item.type }}</span
          ><span>{{ item.email }}</span
          ><span @click.stop="removeUser(index)"
          ><i class="fas fa-trash" />Remove</span
          >
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap">-->
    <!--      <div class="vx-card no-shadow card-border p-5 flex flex-wrap">-->
    <!--        <div class="flex flex-wrap w-full form-group items-center">-->
    <!--          <label class="m-0">User Access</label>-->
    <!--          <div>-->
    <!--            <vs-button-->
    <!--              class="-->
    <!--                wizard-btn-->
    <!--                bg-white-->
    <!--                shadow-none-->
    <!--                border-light-->
    <!--                text-dark-->
    <!--                mr-1-->
    <!--              "-->
    <!--              >Anyone</vs-button-->
    <!--            >-->
    <!--            <vs-button-->
    <!--              class="-->
    <!--                wizard-btn-->
    <!--                bg-success-->
    <!--                border-success-->
    <!--                shadow-none-->
    <!--                text-white-->
    <!--              "-->
    <!--              >Payment</vs-button-->
    <!--            >-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <hr class="w-full mt-5 border-light" />-->
    <!--        <div class="vx-col md:w-1/1 w-full mt-5 form-group">-->
    <!--          <label>Please Enter a ticket price a paid event</label>-->
    <!--          <div class="vx-col md:w-1/1 w-full flex flex-wrap">-->
    <!--            <div class="vx-col md:w-1/3 w-full">-->
    <!--              <vs-input-->
    <!--                label=""-->
    <!--                v-model="stepFiveProps.duration"-->
    <!--                class="w-full form-group"-->
    <!--                placeholder="Fixed"-->
    <!--              />-->
    <!--            </div>-->
    <!--            <div class="vx-col md:w-1/3 w-full px-2">-->
    <!--              <vs-input-->
    <!--                label=""-->
    <!--                v-model="stepFiveProps.duration"-->
    <!--                class="w-full form-group"-->
    <!--                placeholder="Ticket Price"-->
    <!--              />-->
    <!--            </div>-->
    <!--            <div class="vx-col md:w-1/3 w-full">-->
    <!--              <vs-input-->
    <!--                label=""-->
    <!--                v-model="stepFiveProps.duration"-->
    <!--                class="w-full form-group"-->
    <!--                placeholder="USD: United States Dollar"-->
    <!--              />-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="vx-col md:w-1/1 w-full mt-5 flex flex-wrap items-center">-->
    <!--            <label class="mb-0">Coupons?</label>-->
    <!--            <vs-button-->
    <!--              class="-->
    <!--                wizard-btn-->
    <!--                bg-success-->
    <!--                border-success-->
    <!--                shadow-none-->
    <!--                text-white-->
    <!--                ml-5-->
    <!--              "-->
    <!--              >Add Coupons</vs-button-->
    <!--            >-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['stepFiveProps'],
    data() {
      return {
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
      };
    },
    methods: {
      addUser() {
        if(this.userName==='' || this.userEmail===''){
          this.userNameError=true;
        }else {
          this.stepFiveProps.invitee_details = [
            ...this.stepFiveProps.invitee_details,
            { name: this.userName, email: this.userEmail, type: this.userRole },
          ];
          this.userName = '';
          this.userEmail = '';
          this.stepFiveProps.invitee_details_error=false;
          this.userNameError=false;
        }
      },
      removeUser(userIndex) {
        if (userIndex > -1) {
          this.stepFiveProps.invitee_details.splice(userIndex, 1);
        }
      },
    },
  };
</script>
