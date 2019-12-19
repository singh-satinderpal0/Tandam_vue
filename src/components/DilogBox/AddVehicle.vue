<template>
    <div :class="{dilogContainer:true}">
    <md-dialog 
    :md-click-outside-to-close = false
    class="md-dialog-container" 
    :class="{mainDilog_Vehicle:!openAdd_VehicleDliog,mainDilog_Vehicle_in:openAdd_VehicleDliog}" 
    :md-active.sync="openAdd_VehicleDliog" >
    <md-dialog-title>Vehicle Details</md-dialog-title>

<md-dialog-content>
  <md-field :class="{'md-invalid':title_error}" >
      <!-- <label>Title</label> -->
      <md-input 
      @change="handleTitleChange"
      value="title_child" 
      type="text" 
      required
      placeholder="Enter title" 
      v-model="title_child"></md-input>

      <span class="md-error">Please enter title</span>

    </md-field>

        <div :class="{SectionsDiv:true}">
          <div :style="{ padding: '0 15px 0 0' }" :class="{alignedshifts:true}">
              <h5 :class="{heading:true}">Start Date</h5>
                <form class="md-layout" :class="{formControl:true}">
                  <datetime 
                  v-on:click.native = "datetimechange(5)"
                  v-model="start_time_child" 
                  type="time"
                  use12-hour
                  format="HH:mm a"
                  :phrases="{ok: 'Continue', cancel: 'Exit'}"
                  value-zone="asia/calcutta"
                  zone="asia/calcutta"
                  auto
                  :input-style="{ width:'100%',border:'none',borderBottom:'1px solid #8a8a8a' }"
                  :class="{timePicker:true}"
                  >
                  </datetime>
                    </form>
          </div>

  <md-field :class="{endTime_err_message}" >
          <div :class="{alignedshifts:true}"> 
              <h5 :class="{heading:true}">End Date</h5>
                <form class="md-layout" :class="{formControl:true}">
                  <datetime 
                  v-on:click.native = "datetimechange(6)"
                  v-model="end_time_child" 
                  type="time"
                  use12-hour
                  format="HH:mm a"
                  :phrases="{ok: 'Continue', cancel: 'Exit'}"
                  value-zone="asia/calcutta"
                  zone="asia/calcutta"
                  auto
                  :input-style="{ width:'100%',border:'none',borderBottom:'1px solid #8a8a8a' }"
                  :class="{timePicker:true}"
                  >
                  </datetime>
                    </form>
          </div>

          <span class="md-error">Time should be different & greater than start time</span>

          </md-field>

        </div>
        <md-field :class="{eel_err_message}" >
<div :style="{ width:'100%' }">
    <label :style="{ fontWeight:'bold',fontSize:'18px' }" for="eel">Eel</label>
        <multiselect 
        placeholder="Pick some"
        v-model = "eelVal_child" 
        label="label"
        @input="handleEelChange"
        :options="persons"
        ></multiselect>
</div>
<span class="md-error">Select eel</span>

          </md-field>

<md-field :class="{ vehicleDiv : true,vehicle_err_message }" >
          <label>Vehicle Number</label>
      <md-input 
      type="text" @change="vehicleNoHandler" 
      value="v_no_child" 
      :style="{ width:'50%' }" 
      v-model="v_no_child"></md-input>

      <span class="md-error">Vehicle number is required and have't any special character</span>

</md-field>

  <md-field class="md-field" :class="{ vehicleDiv : true,location_err_message }">
      <label>Location</label>
      <md-input 
      value="location" 
      @change="handleLocationChange" 
      v-model="location_child"></md-input>

      <span class="md-error">Please enter address</span>

    </md-field>

<md-field class="md-field" :class="{ vehicleDiv : true,personList_err_message }">
          <div :style="{ width:'100%' }">
          <label :style="{ fontWeight:'bold',fontSize:'18px' }" for="users">Users</label>
          <multiselect 
          value="selectedPersons_child"
          v-model= "selectedPersons_child"
          label="label" 
          @input="handleUserChange" 
          :options="persons"
          :multiple="true"
          :close-on-select="false"
          ></multiselect>
          </div>

          <span class="md-error">Please add persons</span>

    </md-field>

</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="handleCloseVehicle">Cancel</md-button>
        <md-button class="md-primary" @click="handleSubmit">Add</md-button>
      </md-dialog-actions>
    </md-dialog>

    </div>
</template>

<script>
import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.min.css"

export default Vue.extend({
    name : "AddVehicle",

props:[
  "openAdd_VehicleDliog",
  "title",
  "handleTitleChange",
  "start_time",
  "handletimechange_",
  "end_time",
  "eelVal",
  "handleEelChange",
  "v_no",
  "vehicleNoHandler",
  "location",
  "handleLocationChange",
  "selectedPersons",
  "handleUserChange",
  "persons",
  "handleSubmit",
  "handleCloseVehicle",

  "title_error",
  "endTime_error",
  "eel_error",
  "vehicle_error",
  "location_error",
  "personList_error"
  ],

    components:{
        Datetime,
        multiselect
    },

    data: function(){
        return{
            shift : true,
            title_child : this.title,
            start_time_child : this.start_time,
            end_time_child : this.end_time,
            eelVal_child : this.eelVal,
            v_no_child : this.v_no,
            location_child : this.location,
            selectedPersons_child : this.selectedPersons,
            personList: this.persons
        }
    },

    mounted(){
        // console.log(typeof(this.endTime_error),this.endTime_error);
    },

    methods:{
      shiftToggle:function(){
        console.log(this.shift);
      },

      // handleUserChange:function(value){
      //   console.log(value);
        
      // },
      datetimechange : function(id){
        // console.log("datetimechange",this);
        if(id === 5){
        console.log("datetimechange",this.start_time_child);
          this.$emit('handletimechange_',{time :this.start_time_child,id : id})
        }
        if(id === 6){
          this.$emit('handletimechange_',{time :this.end_time_child,id : id})
        }
        
      }
    },

    computed: {
      title_err_message () {
        return {
          'md-invalid': this.title_error
        }
      },
      endTime_err_message () {
        return {
          'md-invalid': this.endTime_error
        }
      },
      eel_err_message () {
        return {
          'md-invalid': this.eel_error
        }
      },
      vehicle_err_message () {
        return {
          'md-invalid': this.vehicle_error
        }
      },
      location_err_message () {
        return {
          'md-invalid': this.location_error
        }
      },
      personList_err_message () {
        return {
          'md-invalid': this.personList_error
        }
      }
    }

})
</script>

<style lang="scss">
  .md-dialog {
    max-width: 768px;
  }

  .SectionsDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 15px;
    // flexDirection:'column'
  }

  .alignedshifts {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width:100%;
    margin: 0;
    padding: 0
  }

  .heading {
    // background:'var(--headingBackground)',
    // color:'black',
    padding: 2px 0;
    font-size: 16px;
    margin: 0
  }

  .formControl  {
    width:100%;
    margin: 0 0 15px 0
  }

  .mainDilog_Vehicle{
    width: 60%;
    height: 63%;
    // display: flex;
    // justify-content: flex-end;
    // padding: 0;
    // margin: 0;
    // left: calc(100% - 293px);
    //     transform: translate(-50%,-50%);
    //     transition: opacity .15s cubic-bezier(.25,.8,.25,1),transform .2s cubic-bezier(.25,.8,.25,1),animation slide 0.5s forwards;
    transform: translateX(50%);
    animation: slide 3.5s forwards;
    // animation-delay: 5.0s;
    animation-duration: 1s;
    transition: transform animation-duration animation 3.4s ease-in-out;
    // animation-delay: 2s;
  }

  .mainDilog_Vehicle_in{
        width: 70%;
    height: 63% !important;
    // display: flex;
    // justify-content: flex-end;
    // padding: 0;
    // margin: 0;
    transform: translate(-50% , -50%);
    transition: transform 0.1s ease-in-out;
    // animation-delay: 2s;
    // left: calc(100% - 293px);
    //     transform: translate(-50%,-50%);
    //     transition: opacity .15s cubic-bezier(.25,.8,.25,1),transform .2s cubic-bezier(.25,.8,.25,1),animation slide 0.5s forwards;
    // animation-delay: 2s;
  }

  .dilogContainer{
    display: flex;
    width: 100%;
    height: 100%;
  }

  .timePicker {
    width: 100%
  }

  .shiftSpan{
    font-size: 12px;
    color: #676767;
  }

  .addVehicleDiv{
    display: flex;
    justify-content: space-between;
    padding: 3px 8px;
    align-items: center;
    border: 1px solid #eeeeee;
    border-radius: 10px 10px 0 0;
    box-shadow: 1.2px 5px 12px #ccc;
    padding: 0 10px 0 15px;
    height: 10%;

  }

  .md-dialog-container{
    height: 100% ;
  }

  .vehicleDiv{
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin: 30px 0px 0px 0;
    font-size: 17px;
    font-weight: bold;
  }

  .md-field{
      max-width: unset;
  }
</style>