<template>
<div :class="{dilogContainer:true}">
    <md-dialog
    :md-click-outside-to-close = false
    class="md-dialog-container" 
    :class="{mainDilog:!openAdd_Program,mainDilog_in:openAdd_Program}" 
    :md-active.sync="openAdd_Program" >
      <md-dialog-title>{{ event }}</md-dialog-title>

<md-dialog-content>
  <h4>{{ currentDate }}</h4>
  <div :class="{timeDiv:true}">
        <span :style="{ opacity: '0.5' }" class="md-title">Morning/Evening</span>
          <md-switch
            v-model="shift"
            :v-bind:value = shift
            id='shift'
            class="md-primary"
          />
        </div>

        <div :class="{SectionsDiv:true}">
          <div :class="{alignedshifts:true}">
            <div :class="{shiftInfoDiv:true}" >
              <h5 :class="{heading:true}">Oatmeal</h5>
              <span v-if="shift" :class="{ shiftSpan:true }">Morning</span>
              <span v-else :class="{ shiftSpan:true }">Evening</span>
              <div :class="{timeDiv:true}">
                <div :class="{time:true}">
                <form class="md-layout" :class="{formControl:true}">
                  <datetime 
                  v-on:click.native = "datetimechange(1)"
                  v-model="oatmeal_child" 
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
              </div>
            </div>
             <div :class="{shiftInfoDiv:true}" >
              <h5 :class="{heading:true}">Pancake</h5>
              <span v-if="shift" :class="{ shiftSpan:true }">Morning</span>
              <span v-else :class="{ shiftSpan:true }">Evening</span>
              <div :class="{timeDiv:true}">
                <div :class="{time:true}">
                <form class="md-layout" :class="{formControl:true}">
                  <datetime 
                  v-on:click.native = "datetimechange(2)"
                  v-model="pancake_child" 
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
              </div>
            </div>
          </div>

          <div :class="{alignedshifts:true}">
            <div :class="{shiftInfoDiv:true}" >
              <h5 :class="{heading:true}">Beef</h5>
              <span v-if="shift" :class="{ shiftSpan:true }">Morning</span>
              <span v-else :class="{ shiftSpan:true }">Evening</span>
              <div :class="{timeDiv:true}">
                <div :class="{time:true}">
                <form class="md-layout" :class="{formControl:true}">
                  <datetime 
                  v-on:click.native = "datetimechange(3)"
                  v-model="beef_child" 
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
              </div>
            </div>
             <div :class="{shiftInfoDiv:true}" >
              <h5 :class="{heading:true}">Emerald</h5>
              <span v-if="shift" :class="{ shiftSpan:true }">Morning</span>
              <span v-else :class="{ shiftSpan:true }">Evening</span>
              <div :class="{timeDiv:true}">
                <div :class="{time:true}">
                <form class="md-layout" :class="{formControl:true}">
                  <datetime 
                  v-on:click.native = "datetimechange(4)"
                  v-model="emerald_child" 
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
              </div>
            </div>
          </div>
        </div>

        <div class="md-layout" :class="{addVehicleDiv : true}" >
          <span>Add Vehicle</span>
          <md-button class="md-fab md-mini md-primary" :style="{ background: '#1976d2', color: 'white' }" @click="openAddVehicle">
        <md-icon>add</md-icon>
      </md-button>
        </div>
        <Eventtable
        v-bind:users = "calendarEvents"
         />
</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeAddProgram">Close</md-button>
        <md-button class="md-primary" @click="submitAddProgram">{{btn2}}</md-button>
        <!-- <span>{{recieve}}</span> -->
      </md-dialog-actions>
    </md-dialog>

    </div>
</template>

<script>
import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import Eventtable from '../eventTable/eventTable'
import {formatCustomDate} from '../../helper/helper'

export default Vue.extend({
    name : "AddProgram",

    components:{
        Datetime,
        Eventtable
    },

    props:[
      "openAdd_Program",
      "submitAddProgram",
      "closeAddProgram",
      "openAddVehicle",
      "event",
      "currentDate",
      "shift",
      "handletimechange",
      "oatmeal",
      "beef",
      "pancake",
      "emerald",
      "calendarEvents",
      "btn2"
      ],

mounted(){
console.log( this.$children )
},
    data: function(){
        return{
            users: [
        {
          vehicle: 'p1',
          title: "Shawna Dubbin",
          start_time: "09:00 AM",
          end_time: "09:00 PM",
          eel: "Assistant Media Planner",
          location:"taronto",
          persons_list:"user1,user2"
        },
      ],
       oatmeal_child : this.oatmeal,
       beef_child : this.beef,
       pancake_child : this.pancake,
       emerald_child : this.emerald,
        }
    },

computed:{
vehicleList : function(){
  const temp = this.calendarEvents.map(vehicle => {
    const arr = {
          vehicle: vehicle.vehicleNo,
          title: vehicle.VehicleTitle,
          start_time: vehicle.start,
          end_time: vehicle.end,
          eel: vehicle.eelVal,
          location:vehicle.locationVal,
          persons_list:vehicle.personsList
    }
    return arr
  })
  console.log(temp);
  
  return temp
},
// recieve : function(){
//  return Eventtable.$data.detail ? "true" : "false" 
// }
},

    methods:{
      datetimechange : function(id){
        // console.log("datetimechange",id);
        if(id === 1){
          this.$emit('handletimechange_',{time :this.oatmeal_child,id : id})
        }
        if(id === 2){
          this.$emit('handletimechange_',{time :this.pancake_child,id : id})
        }
        if(id === 3){
          this.$emit('handletimechange_',{time :this.beef_child,id : id})
        }
        if(id === 4){
          this.$emit('handletimechange_',{time :this.emerald_child,id : id})
        }
      },
      editHandler : function(value){
        console.log(value);
        
      }
    }

})
</script>

<style lang="scss">
  .md-dialog {
    max-width: 768px;
  }

  .timeDiv {
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: space-between;
    // padding: '0 27px'
  }

  .SectionsDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 15px;
    // flexDirection:'column'
  }

  .shiftInfoDiv {
    display: flex;
    flex-direction: column;
    margin: 4px 0px 25px 0;
    // marginBottom:'25px',
    // marginTop:'4px',
    text-align: 'Left';
    width: 95%
  }

  .alignedshifts {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width:100%;
    padding: 15px;
  }

  .heading {
    // background:'var(--headingBackground)',
    // color:'black',
    padding: 2px 0;
    font-size: 16px;
    margin: 0
  }

  .timeDiv {
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: space-between;
    // padding: '0 27px'
  }

   .time {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .timeInput{
    width: 100%
  }

  .formControl  {
    width:100%;
    margin: 0 0 15px 0
  }

  .mainDilog{
    width: 60%;
    height: 100%;
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

  .mainDilog_in{
        width: 70%;
    height: 100%;
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
</style>