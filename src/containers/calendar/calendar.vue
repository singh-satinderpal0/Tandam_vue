<template>
<div>
  <FullCalendar
    defaultView           = "dayGridMonth"
    ref                   = "fullCalendar"
    :eventTextColor       = "eventColor"
    :plugins              = "calendarPlugins"
    :draggable            = "true"
    :droppable            = "true"
    :editable             = "true"
    :config               = "config"
    :displayEventTime     = "false"
    :fixedWeekCount       = "false"
    @dateClick            = "handleDateClick"
    @eventClick           = "eventClick"
    :events               = "arrayOfProgState"
  />
  <AddProgram 
  v-if                    = "programm_Add"
  v-bind:btn2             = "'Submit'"
  event                   = "Add Program"
  v-bind:currentDate      = "currentDate | filterCustomDate('-')"
  v-bind:shift            = "shift"
  v-bind:openAdd_Program  = "openAdd_Program"
  v-bind:submitAddProgram = "handleAddProgram"
  v-bind:closeAddProgram  = "closeAddProgram"
  v-bind:openAddVehicle   = "openAddVehicle"
  v-bind:oatMeal          = "oatMeal | formatCustomTime(':')"
  v-bind:beef             = "beef | formatCustomTime(':')"
  v-bind:pancake          = "pancake | formatCustomTime(':')"
  v-bind:emerald          = "emerald | formatCustomTime(':')"
  v-bind:calendarEvents   = "calendarEvents"

  v-on:handletimechange_  = "datetimehandle($event)"
  />

  <AddProgram 
  v-else
  v-bind:btn2             = "'Edit'"
  event                   = "Add Program"
  v-bind:currentDate      = "currentDate | filterCustomDate('-')"
  v-bind:shift            = "shift"
  v-bind:openAdd_Program  = "openAdd_Program"
  v-bind:submitAddProgram = "handleEdit"
  v-bind:closeAddProgram  = "closeAddProgram"
  v-bind:openAddVehicle   = "openAddVehicle"
  v-bind:oatMeal          = "oatMeal | formatCustomTime(':')"
  v-bind:beef             = "beef | formatCustomTime(':')"
  v-bind:pancake          = "pancake | formatCustomTime(':')"
  v-bind:emerald          = "emerald | formatCustomTime(':')"
  v-bind:calendarEvents   = "calendarEvents"
  
  v-on:handletimechange_  = "datetimehandle($event)"
  />

  <!-- v-bind:editHandler      = "openEdit($event)" -->

            <!-- openAdd_Program=openAdd_Program
            
            pancake_error = {!_this.state.pancake_valid}
            emerald_error = {!_this.state.emerald_valid}

            editHandler = {(e,date,myPersonList)=>_this.openEdit(e,date,myPersonList)}

            handleSubmit={_this.state.programm_Add ? _this.handleAddProgram : _this.handleEdit}

            btn1="Cancel"
            btn2={_this.state.programm_Add ? "Submit" : "Edit"}

            // Component props for Select time
            handletimechange={(date,id) => _this.handletimechange(date,id)}
            timeValue={_this.state.timeValue}

            //Component Props for Add Person Dilouge
            openAddVehicle={_this.openAddVehicle} -->

<!-- <AddProgram 
  v-else
  event = "Edit Program"
  v-bind:showAddProgram = "showAddProgram"
  v-bind:submitAddProgram="submitAddProgram"
  v-bind:closeAddProgram="closeAddProgram"
  v-bind:openAddVehicle="openAddVehicle"
  
  /> -->

<AddVehicle 
v-if="isVehicleAdd"
v-bind:title_error="title_Valid"
v-bind:endTime_error="date_Valid"
v-bind:eel_error="eel_Valid"
v-bind:vehicle_error="vehicle_Valid"
v-bind:location_error="location_valid"
v-bind:personList_error="personList_valid"

v-bind:openAdd_VehicleDliog = "openAdd_VehicleDliog"
v-bind:title = "VehicleTitle"
v-bind:handleTitleChange = "handleTitleChange"
v-bind:start_time = "start | formatCustomTime(':')"
v-on:handletimechange_ = "datetimehandle($event)"
v-bind:end_time = "end | formatCustomTime(':')"
v-bind:eelVal = "eelVal"
v-bind:handleEelChange = "handleEelChange"
v-bind:v_no = "vehicleNo"
v-bind:vehicleNoHandler = "vehicleNoHandler"
v-bind:location = "locationVal"
v-bind:handleLocationChange = "handleLocationChange"
v-bind:persons = "availOptions"
v-bind:selectedPersons="personsList"
v-bind:handleUserChange = "handleUserChange"
v-bind:handleSubmit = "handleAddEvent"
v-bind:handleCloseVehicle = "handleCloseVehicle"
v-bind:addVehicleBtnSubmit="'Submit'"
/>

<AddVehicle 
v-else
v-bind:title_error="title_Valid"
v-bind:endTime_error="date_Valid"
v-bind:eel_error="eel_Valid"
v-bind:vehicle_error="vehicle_Valid"
v-bind:location_error="location_valid"
v-bind:personList_error="personList_valid"

v-bind:openAdd_VehicleDliog = "openAdd_VehicleDliog"
v-bind:title = "VehicleTitle"
v-bind:handleTitleChange = "handleTitleChange"
v-bind:start_time = "start | formatCustomTime(':')"
v-on:handletimechange_ = "datetimehandle($event)"
v-bind:end_time = "end | formatCustomTime(':')"
v-bind:eelVal = "eelVal"
v-bind:handleEelChange = "handleEelChange"
v-bind:v_no = "vehicleNo"
v-bind:vehicleNoHandler = "vehicleNoHandler"
v-bind:location = "locationVal"
v-bind:handleLocationChange = "handleLocationChange"
v-bind:persons = "availOptions"
v-bind:selectedPersons="personsList"
v-bind:handleUserChange = "handleUserChange"
v-bind:handleSubmit = "submitEdit($event)"
v-bind:handleCloseVehicle = "handleCloseVehicle"
v-bind:addVehicleBtnSubmit="'Edit'"
/>

            <!-- date_valid = {this.state.date_valid} -->

            <!-- //For Eel User -->
            <!-- eelDefaultValue={this.state.defaultEelVal} -->
            <!-- handleEelChange={this.handleEelChange} -->

            <!-- // Component props For Select Users and Listing them -->
            <!-- handleUserChange = {this.handleUserChange} -->
            <!-- defaultValue={this.state.isEdit ? this.state.personsList : []} -->
  
</div>
</template>

<script>
import Vue from "vue";
import FullCalendar from "@fullcalendar/vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import AddProgram from "../../components/DilogBox/AddProgram";
import $ from 'jquery';
import slide from "jquery-ui/ui/effects/effect-slide"
import AddVehicle from '../../components/DilogBox/AddVehicle'
import {formatCustomDate, dateObjFormatter, formatCustomTime} from '../../helper/helper'
import passwordValidator from 'password-validator'
import { getListOfProgrammes, getProgrammeById, getUserList, updateProgram, createProgram } from '../../services'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';


const schema = new passwordValidator()
var arrayOfProg = []
var currentMonth = new Date()
var valid = false
let removedList = []
var _this = null

export default Vue.extend({
  name: "calendar",

  components: {
    FullCalendar,
    AddProgram,
    AddVehicle
  },

  data: function() {
    return {
      calendarPlugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      calendarEvents: [
        // initial event data
        { title: "Event 1", start: new Date() },
        { title: "Event 2", start: "2019-12-05" },
        { title: "Event 3", start: "2019-12-06" },
        { title: "Event 4", start: "2019-12-07" },
        { title: "Event 5", start: "2019-12-10" },
        { title: "Event 6", start: "2019-12-14" },
        { title: "Event 7", start: "2019-12-15" }
      ],
      config: {
        defaultView: "month",
        editable: true,
        eventRender: function(event, element) {
          console.log(event);
        }
      },
      eventColor: "#fff",
      showAddProgram : false,

    isloading:false,
    program: [],
    arrayOfProgState : [],
    vehicle: [],
    editableDta:[],
    currentProgrammeId : 0,
    openAdd_Program: false,
    isSubmit: false,
    isEdit: false,
    start: new Date(),
    end: new Date(),
    title: "",
    editableTitle: "",
    editablestart: "",
    editableend: "",
    id: 0,
    removedUserListArray : [],
    currentVehicleId:0,
    updateVehicleId : [],
    eventSelectId: 0,
    isValid: false,
    title_Valid:true,
    oatmeal_valid : true,
    beef_valid : true,
    pancake_valid : true,
    emerald_valid: true,
    vehicle_Valid : false,
    date_Valid : false,
    eel_Valid : false,
    location_valid : false,
    personList_valid : false,
    programm_Add : false,
    event_date: new Date(),
    dateTimeStart: new Date(),
    dateTimeEnd: new Date(),
    theme: "dark",
    VehicleTitle : '',
    personsList: [],
    fullList:[],
    VehiclesList:[],
    usersList: false,
    preSelect: ["User1", "User2"],
    timeValue: new Date(),
    openAdd_VehicleDliog: false,
    vehicleNo: null,
    shift: true,
    eelVal: "",
    defaultEelVal:{},
    eelId:0,
    locationVal: '',
    isVehicleAdd:true,
      oatMeal: new Date,
      beef: new Date(),
      pancake: new Date(),
      emerald: new Date(),
      currentDate:new Date(),
    Morning: {
      shift: 'Morning',
      shiftTime: new Date(),
    },
    Evening: {
      shift: 'Evening',
      shiftTime: new Date(),
    },
    filteredList:[],
    availOptions : [],
    userList: []
    };
  },

  mounted() {
       _this = this;

    document.addEventListener('DOMContentLoaded', function() {
    let draggableEl = document.getElementById('mydraggable')
    new Draggable(draggableEl, {
      itemSelector: ".item-class",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        return {
          title: title
        };
      }
    });
      })

     _this.monthChangehandler(0)

    $('.fc-today-button').click(() => {      
      _this.monthChangehandler(0)
   })

    $('.fc-prev-button').click(() => {  
       _this.monthChangehandler(1)     
   });

    $('.fc-next-button').click(() => {
      _this.monthChangehandler(2)
 });
  },


  methods: {
    async monthChangehandler(id){
    const token = localStorage.getItem('isLoggedin')
    var updateMonth = id === 1 ? new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)) : 
                      id === 2 ? new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)) :
                      new Date(currentMonth.setMonth(new Date().getMonth()))

    currentMonth = updateMonth

    var month = currentMonth.getMonth() > 8 ? currentMonth.getMonth()+1 : '0' + parseInt(currentMonth.getMonth()+1)
 
    var lastDate = new Date(currentMonth.getFullYear(),month,0);
    var programmeStart = currentMonth.getFullYear().toString()+ "-" + month + "-01"
    var programmeEnd = currentMonth.getFullYear().toString()+ "-" + month + '-' +lastDate.getDate();

   await getListOfProgrammes(token,programmeStart,programmeEnd).then((response) => {
       arrayOfProg = response.data.data.map((data) => {
          var obj = {
            id: data.programmes.length > 0 ? data.programmes[0].programme_id : 0,
            title : (data.programmes.length > 0 ? data.programmes[0].vechicleCount : 0) + " vehicles",
            date : data.date
          }
           return data.programmes.length > 0 ? obj : false
      })
        _this.arrayOfProgState = arrayOfProg
    })
  },

  validateProgram : function(){
    let pancakeValid = false
    let emeraldValid = false
    
    if(_this.pancake >= _this.oatMeal){
      pancakeValid = true
    }else{
      pancakeValid = false
    }

    if(_this.emerald > _this.oatMeal){
      emeraldValid = true
    }else{
      emeraldValid = false
    }

      _this.pancake_valid = pancakeValid,
      _this.emerald_valid = emeraldValid

    let validateObj = pancakeValid && emeraldValid
    return validateObj
  },

    handleDateClick: function(arg) {
      // console.log("date click ",_this.openAdd_Program);
      
    const temp = _this.arrayOfProgState.filter(data => {
      return data.date === formatCustomDate(arg.date,'-')
    })

    const empty = "";
    const defaultDate = arg.date;
    const emptyList = [];
    var token = localStorage.getItem('isLoggedin')
    if(arg.date > new Date()){
      if(!(temp.length > 0)){
        {
          getUserList(token,new Date(arg.date)).then(response => {
            const users = response.data.data.map((data)=>{
              var obj = {
                label: data.user_name,
                value: data.user_id,
                id : data.user_id
              }
              return obj
            })
              _this.userList = users
              // console.log(_this.userList);
              
          })
            
          const currentDate = new Date(arg.date)
        
        // bind with an arrow function
    
          _this.oatmeal_valid    = true,
          _this.beef_valid       = true,
          _this.pancake_valid    = true,
          _this.emerald_valid    = true,
          _this.openAdd_Program  = !_this.openAdd_Program,
          _this.VehicleTitle     = empty,
          _this.isSubmit         = true,
          _this.shift            = true,
          _this.start            = defaultDate,
          _this.end              = defaultDate,
          _this.currentDate      = currentDate,
          _this.calendarEvents   = emptyList,
          _this.programm_Add     = true
          _this.personsList      = emptyList
          // personId:0
      }
      }else{
        ToastsStore.error("Only one Program can be add at particular date!")
      }
}
else{
  ToastsStore.error("Please select future dates only for creating Programme!")
}
},

    eventClick:function(program){
        
    const removedUserListArray = []
    const token = localStorage.getItem('isLoggedin');
    
    getProgrammeById(token,parseInt(program.event.id)).then( async function(response){      
        // console.log(response);
      const tempProg = []
      var data = response.data.data[0]
      var date = new Date(data.date)
      
      await getUserList(token,date).then(response => {
          
        const users = response.data.data.map((data)=>{
          var obj = {
            label: data.user_name,
            value: data.user_id,
            id : data.user_id
          }          
          return obj
        })
       Vue.set(_this.$data,'userList',users) 
      })

      const events = data.programmes_vehicles.map(vehicle => {
        const eel = _this.userList.filter(user => {
          return user.id === data.user_id
        })
        
      var list = vehicle.prog_vehicle_users.map(user => {
        const obj = {
          label: user.user.display_name,
          value: user.user_id,
          id : user.user_id
        }
        return obj
      })

    const vehicles = data.programmes_vehicles.map(v_data => {      

      const assingnedPerson = v_data.prog_vehicle_users.map((user) => {
        const temp = {
          label: user.user.display_name,
          value: user.user.display_name,
          id : user.user_id
        }

        return temp
  })

  const emergencyUser = {
    label:  v_data.support_user.display_name, value:  v_data.support_user_id, id:  v_data.support_user_id
  }
  // console.log(emergencyUser);
  
  // const emergencyUser = _this.state.userList.filter(userName => {
    
  //   return userName.id === v_data.support_user_id
  // })
  
      const obj = {
        date:_this.currentDate,
        VehicleTitle: v_data.title,
        start: dateObjFormatter(date,v_data.v_s_t),
        end: dateObjFormatter(date,v_data.v_e_t),
        id: v_data.vehicle_id,
        vehicleNo: v_data.vehicle_no,
        eelVal : emergencyUser.label,
        personsList:[...assingnedPerson],
        eelId : v_data.support_user_id,
        locationVal: v_data.additional_info,

      }
      return obj
    })
    
    tempProg.push({
      title: data.programmes_vehicles.length +' vehicles',
      programme_id : data.id,
      date:date,
      emerald : data.oct_evening !== "" ? dateObjFormatter(date,data.oct_evening) : dateObjFormatter(date,data.oct_morning),
      beef : data.vmt_evening !== "" ? dateObjFormatter(date,data.vmt_evening) : dateObjFormatter(date,data.vmt_morning),
      pancake : dateObjFormatter(date,data.ws_o_time),
       oatMeal : data.oot_evening !== "" ? dateObjFormatter(date,data.oot_evening) : dateObjFormatter(date,data.oot_morning),
      VehiclesList : [...vehicles]
    })

       const obj = {
        date:new Date(data.date),
        VehicleTitle: vehicle.title,
        start: dateObjFormatter(new Date(),vehicle.v_s_t),
        end: dateObjFormatter(new Date(),vehicle.v_e_t),
        id: vehicle.vehicle_id,
        vehicleNo: vehicle.vehicle_no,
        personsList: list,
        eelId : vehicle.support_user_id,
        locationVal: vehicle.additional_info,
        eelVal : vehicle.support_user.display_name,
        currentProgrammeId : program.event.id,
        openAdd_Program : false
      }
      return obj 
      })

        _this.oatmeal_valid = true,
        _this.beef_valid = true,
        _this.pancake_valid = true,
        _this.emerald_valid = true,
        _this.program = tempProg,
        _this.openAdd_Program= !_this.openAdd_Program,
        _this.isEdit= true,
        _this.isSubmit= false,
        _this.calendarEvents = [...events], 
        _this.removedUserListArray = removedUserListArray,
        _this.beef    = data.vmt_evening !== "" ? dateObjFormatter(date,data.vmt_evening) : dateObjFormatter(date,data.vmt_morning),
        _this.emerald = data.oct_evening !== "" ? dateObjFormatter(date,data.oct_evening) : dateObjFormatter(date,data.oct_morning),
        _this.oatMeal = data.oot_evening !== "" ? dateObjFormatter(date,data.oot_evening) : dateObjFormatter(date,data.oot_morning),
        _this.pancake = dateObjFormatter(date,data.ws_o_time),
        _this.programm_Add=false,
        _this.event_date = date,
        _this.shift = data.oct_evening === "" ? true : false,
        _this.currentDate = new Date(data.date)

        console.log(_this.beef);
        
     
    })
     // console.log(typeof(_this.state.personId));
    },

    handleEdit : function() {    
   if(_this.event_date > new Date()){

    const token = localStorage.getItem('isLoggedin')
    
    const cloneProgram = [..._this.program]
    const events = [..._this.calendarEvents];

    const updatedProg = cloneProgram.map(info =>{

      const obj ={
        title: _this.calendarEvents.length +' vehicles' ,
        programme_id : info.programme_id,
        date:_this.currentDate,
        emerald : _this.emerald,
        beef : _this.beef,
        pancake : _this.pancake,
        oatMeal : _this.oatMeal,
        VehiclesList : [...events]
      }
      return obj
    })    
    events.map(event => {
      return event[_this.eventSelectId];
    });

    updateProgram(token,updatedProg,_this.shift,_this.calendarEvents,_this.updateVehicleId,_this.removedUserListArray)
    .then(()=>{
      window.location.reload(false);
    })
    // events[_this.state.eventSelectId] = newEvent;

      _this.VehiclesList = events,
      _this.beef = _this.beef,
      _this.date = _this.currentDate,
      _this.emerald = _this.emerald,
      _this.oatMeal = _this.oatMeal,
      _this.pancake = _this.pancake,
      _this.title= _this.calendarEvents.length+'Programs' ,
      _this.openAdd_Program = false,
      _this.isloading = true
      _this.isSubmit = false,
      _this.isEdit = false    
   }else{
     ToastsStore.error('Future events can only be edited!')
   }
  },

  handleTitleChange:function(event){
    const tempVal = event.target.value;
    //  console.log(tempVal);
    if (_this.isSubmit) {
        _this.title_Valid = true,
        _this.VehicleTitle = tempVal
    } else {
        _this.title_Valid = true,
        _this.VehicleTitle = tempVal
    }
  },

  handleEelChange : function(e){
    // console.log(e);
      _this.eelVal= e,
      _this.eelId = e.id,
      _this.eel_Valid = true
  },

    closeAddProgram:function(){
        _this.openAdd_Program = false
    },

    handleAddProgram: function(){
      
    const valid_prog = this.validateProgram()
    // console.log(temp);

if(_this.calendarEvents.length > 0 && valid_prog){
  if(_this.pancake_valid && _this.oatmeal_valid && _this.beef_valid && _this.emerald_valid){
      const program = []

      const events = [..._this.calendarEvents];
      // const id = new Date().getTime();
      program.push({
        title: _this.calendarEvents.length+' Vehicles' ,
        date:formatCustomDate(_this.currentDate,'-'),
        oatMeal : formatCustomTime(_this.oatMeal,':'),
        beef : formatCustomTime(_this.beef,':'),
        pancake : formatCustomTime(_this.pancake,':'),
        emerald : formatCustomTime(_this.emerald,':'),
        VehiclesList : [...events]
      });
  
      arrayOfProg = [...program,...arrayOfProg]
      
        _this.program               = program,
        _this.arrayOfProgState      = arrayOfProg,
        _this.openAdd_Program       = false,
        _this.isSubmit              = false,
        _this.isEdit                = false,
        _this.programm_Add          =false
      
      const token = localStorage.getItem('isLoggedin')
      createProgram(token,program,_this.shift,_this.calendarEvents,_this.personsList)
      .then(response => {
        window.location.reload(false);
      })

        _this.personsList = _this.personsList
  
    }
}else{
  // ToastsStore.error("please add atleast one vehicle to add program! ") ;
}
 },
    openAddVehicle:function(){   
      
      const list = _this.userList.filter((data) => {
      return _this.fullList.findIndex(user => data.id === user.id) < 0
     })      

      _this.VehicleTitle     = "",
      _this.start            = new Date(),
      _this.end              = new Date(),
      _this.id               = 0,
      _this.vehicleNo        = "",
      _this.availOptions     = list,
      _this.eelVal           = {},
      _this.personsList      = [],
      _this.eelId            = 0,
      _this.locationVal      = "",
      _this.isVehicleAdd     = true,
      _this.date_Valid       = true,
      _this.title_Valid      = true,
      _this.vehicle_Valid    = true,
      _this.eel_Valid        = true,
      _this.location_valid   = true,
      _this.personList_valid = true

      _this.valid = false
      _this.openAdd_VehicleDliog = true  

      // console.log("open add vehicle",_this.availOptions);
          
    },  
handleCloseVehicle:function(){  
      _this.openAdd_VehicleDliog = false
    //   console.log("closeAddVehicle hit before ",_this.openAdd_VehicleDliog)  ;
    //  _this.$set(_this.$data,'openAdd_VehicleDliog',false)  
      // console.log("handleCloseVehicle hit after",_this.openAdd_VehicleDliog);  
    },  

    validateVehicle:function(){

let titleValid = false
let dateValid = false
let eelValid = false
let vehicleValid = false
let locationValid = false
let personValid = false
  if(_this.VehicleTitle){
    titleValid = true
}else{
  titleValid =false
}

if(new Date(_this.end) > new Date(_this.start)){
    dateValid = true
}else{
  dateValid = false
}

if(_this.eelVal){
  eelValid = true
}else{
  eelValid = false
}

if(_this.vehicleNo){
  vehicleValid = true
}else{
  vehicleValid = false
}

if(_this.locationVal.length>0){
  locationValid = true
}else{
  locationValid = false
}

if(_this.personsList.length>0){
  personValid = true
}else{
  personValid = false
}

  _this.title_Valid      = titleValid,
  _this.date_Valid       = dateValid,
  _this.eel_Valid        = eelValid,
  _this.vehicle_Valid    = vehicleValid,
  _this.location_valid   = locationValid,
  _this.personList_valid = personValid


let validateObj =  titleValid && dateValid && eelValid && vehicleValid && locationValid && personValid

return validateObj

    },

    handleAddEvent:function(){    
    var temp = _this.validateVehicle()    
    
console.log("titleValid",_this.title_Valid);
console.log("dateValid",_this.date_Valid);
console.log("eelValid",_this.eel_Valid);
console.log("vehicleValid",_this.vehicle_Valid);
console.log("locationValid",_this.location_valid);
console.log("personValid",_this.personList_valid);

     valid = temp && _this.title_Valid && _this.date_Valid && _this.eel_Valid && _this.vehicle_Valid && _this.location_valid && _this.personList_valid
    // var valid = true  
    if (valid) {  
      const events = [..._this.calendarEvents];  
        
      const templist = [..._this.fullList, ..._this.personsList]  
  
      events.push({  
        date:_this.currentDate,  
        VehicleTitle: _this.VehicleTitle,  
        start: _this.start,
        end: _this.end,
        id: _this.id,
        vehicleNo: _this.vehicleNo,
        personsList: _this.personsList,
        eelId : _this.eelId,
        locationVal: _this.locationVal,
        eelVal: _this.eelVal.label
      });
       
        _this.calendarEvents      = events,
        _this.isSubmit            = true,
        _this.isEdit              = false,
        _this.openAdd_VehicleDliog= false,
        _this.id                  = _this.id + 1,
        _this.eelVal              = _this.eelVal,
        _this.fullList            = templist,
        _this.personsList         = _this.personsList,
        _this.title_Valid         = false,
        _this.vehicle_Valid       = false,
        _this.date_Valid          = false,
        _this.eel_Valid           = false,
        _this.location_valid      = false,
        _this.personList_valid    = false

      console.log(_this.calendarEvents);
    } else{
      // var inp = !this.state.date_Valid ? "Time should be different & greater than start time" : null
    }
    },

  openEdit : function(data){
    // console.log(date); 
    
    console.log(data);
    
    const v_id = [..._this.updateVehicleId]

  const vehicleId = _this.calendarEvents.filter(vehicle => {
            return vehicle.vehicleNo === data.v_no
  })
      v_id.push(vehicleId[0].id)

      // let editedVehicleList = v_id.filter((v,i) => v_id.indexOf(v) === i)
      // console.log(x);
      
    const list = data.persons.split(",")    
      const assingnedPerson = _this.userList.filter((data) => {
        return list.findIndex(user => data.value.toString() === user) !== -1
  })    
  // console.log(assingnedPerson);

  let eel = _this.userList.filter((user) => {
    return user.label === data.eel
  })
  // console.log(eel);

  const Avail_Opt = _this.userList.filter((data) => {
    return _this.fullList.findIndex(user => data.id === user.id) < 0
   }) 
 
      _this.defaultEelVal        = eel.label,
      _this.eelVal               = eel[0],
      _this.eelId                = eel.id,
      _this.start                = dateObjFormatter(_this.currentDate,data.v_move_start),
      _this.end                  = dateObjFormatter(_this.currentDate,data.v_move_end),
      _this.locationVal          = data.location,
      _this.personsList          = assingnedPerson,
      _this.VehicleTitle         = data.title,
      _this.vehicleNo            = data.v_no,
      _this.isVehicleAdd         = false,
      _this.date_Valid           = true,
      _this.title_Valid          = true,
      _this.eel_Valid            = true,
      _this.vehicle_Valid        = true,
      _this.location_valid       = true,
      _this.personList_valid     = true,
      _this.updateVehicleId      = v_id,
      _this.currentVehicleId     = vehicleId[0].id
    
      _this.openAdd_VehicleDliog = true,
      _this.availOptions         =  Avail_Opt
          // eelVal: data.eel,
    },

      datetimehandle : function(data){
        // console.log(data);
        if(data.id === 1){
          console.log("oatmeal");
          _this.oatMeal = new Date(data.time)
          _this.oatmeal_valid = true        }
        if(data.id === 2 ){
          console.log("pancake ");
          if(new Date(data.time) >= new Date(_this.oatMeal)){
          _this.pancake = new Date(data.time)
          _this.pancake_valid = true        }
        }if(data.id === 3){
          console.log("beef ");
          _this.beef = new Date(data.time)
          _this.beef_valid = true        }
        if(data.id == 4){
          console.log("emerald ");
          if(new Date(data.time) > new Date(_this.oatMeal)){
          _this.emerald = new Date(data.time)
          _this.emerald_valid = true        
          }
        }
        if(data.id == 5){          
          if(new Date(data.time) < new Date(_this.end) && new Date(data.time) !== new Date(_this.end)){
          console.log("start time ");
          _this.start = new Date(data.time)
          _this.date_Valid = true
        }
        }
        if(data.id == 6){
          if(new Date(data.time) > new Date(_this.start) && new Date(data.time) !== new Date(_this.start)){
          _this.end = new Date(data.time)
          _this.date_Valid = true
        }
        }
      },

      vehicleNoHandler: function(data){
        const tempNo = data.target.value 
          schema
        .has().not().symbols()
        .has().not().spaces()

          if (schema.validate(tempNo)) {
              _this.vehicleNo     = tempNo,
              _this.vehicle_Valid = true
          } else {
            ToastsStore.error("enter valid vehicle number")
              _this.vehicle_Valid = false
            }
      },

   handleLocationChange:function(e){

    // console.log(e.target.value);
    const tempVal = e.target.value

      _this.locationVal= tempVal,
      _this.location_valid = true
 
      },

   handleUserChange : function(data){
console.log("handle user change ",data);

    let difference = _this.personsList.filter(x => data !== null ? !data.includes(x) : _this.personsList)  // calculates diff

    removedList = [...removedList,...difference]

    removedList = removedList.filter((v,i) => removedList.indexOf(v) === i)
    // console.log(removedList);
    
    if (data && data.length > 0){
        _this.personList_valid = true,
       // value:temp
        _this.personsList = [...data]
    } else {
        _this.personsList = []
    }
  }
  }
});
</script>

<style lang='scss'>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
@import "~@fullcalendar/resource-timeline/main.css";
</style>