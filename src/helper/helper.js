import Vue from "vue";

// export default Vue.filter()

export default Vue.filter(
"filterCustomDate",(currentDate,chr)=>{

  // console.log("filter custom date", currentDate);
  let dateObj = currentDate;
  // console.log(dateObj.getMonth()+1);
  let month = dateObj.getMonth()+1;
  if(month < 10) {
     month = "0"+ month;
  } else {
    month = ""+month ;
  }
  let date = dateObj.getDate()
  if(date < 10) {
    date = "0"+ date;
 } else {
   date = ""+date ;
 }
  let dateFormatted = dateObj.getFullYear()+ chr + month + chr + date;
   return dateFormatted;

});

Vue.filter(
  "filterCustomDateWithTime",(currentDate,chr)=>{
  
  
    let timeObj = currentDate ? currentDate : new Date();
    // console.log(timeObj.getHours());
    let hours = timeObj.getHours();
    var ampm = hours > 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (hours < 10) {
      hours = "0" + hours;
    } else {
      hours = ""+hours;
    }
    let minutes = timeObj.getMinutes()
    if (timeObj.getMinutes() < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = ""+minutes;
    }
  
    let timeFormatted = hours + ":" + minutes + ampm;
  
    console.log(timeFormatted);
    
  
    ///////////////////////////////////////////
  
    console.log(currentDate);
    let dateObj = currentDate;
    // console.log(dateObj.getMonth()+1);
    let month = dateObj.getMonth()+1;
    if(month < 10) {
       month = "0"+ month;
    } else {
      month = ""+month ;
    }
    let date = dateObj.getDate()
    if(date < 10) {
      date = "0"+ date;
   } else {
     date = ""+date ;
   }
    let dateFormatted = dateObj.getFullYear()+ chr + month + chr + date;
  
    /////////////////////////////////////////////////////
  
    var resultDate =  dateFormatted + " " + timeFormatted
  
    console.log(resultDate);
    
     return resultDate;
  
  })

Vue.filter(
"formatCustomTime", (currentTime, chr) => {

  // console.log("filter custom time ", currentTime);
  let timeObj = currentTime ? currentTime : new Date();
  // console.log(timeObj.getHours());
  let hours = timeObj.getHours();
  var ampm = hours > 12 ? ' PM' : ' AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) {
    hours = "0" + hours;
  } else {
    hours = ""+hours;
  }
  let minutes = timeObj.getMinutes()
  if (timeObj.getMinutes() < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = ""+minutes;
  }

  let timeFormatted = hours + chr + minutes + ampm;
  return timeFormatted;
})

Vue.filter("StringPersonList",(person)=>{
  return person.map((data)=> data.label ).join()   
})

  export const formatCustomDate = (currentDate,chr) => {
    // console.log(dateData);
    let dateObj = currentDate;
    // console.log(dateObj.getMonth()+1);
    let month = dateObj.getMonth()+1;
    if(month < 10) {
       month = "0"+ month;
    } else {
      month = ""+month ;
    }
    let date = dateObj.getDate()
    if(date < 10) {
      date = "0"+ date;
   } else {
     date = ""+date ;
   }
    let dateFormatted = dateObj.getFullYear()+ chr + month + chr + date;
     return dateFormatted;
  }

export const dateObjFormatter = (date,time) => {
    // console.log(time);
    
    var obj = new Date()
    var d = new Date(),
    s = time,
    parts = s.match(/(\d+):(\d+) (\w+)/),
    hours = /am/i.test(parts[3]) ?
    function(am) {return am < 12 ? am : 0}(parseInt(parts[1], 10)) :
    function(pm) {return pm < 12 ? pm + 12 : 12}(parseInt(parts[1], 10)),
    minutes = parseInt(parts[2], 10);

d.setHours(hours);
d.setMinutes(minutes);
obj = d

// console.log(obj);

return obj

  }

  export const formatCustomTime = (currentTime, chr) => {

    // console.log("filter custom time ", currentTime);
    let timeObj = currentTime ? currentTime : new Date();
    // console.log(timeObj.getHours());
    let hours = timeObj.getHours();
    var ampm = hours > 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (hours < 10) {
      hours = "0" + hours;
    } else {
      hours = ""+hours;
    }
    let minutes = timeObj.getMinutes()
    if (timeObj.getMinutes() < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = ""+minutes;
    }
  
    let timeFormatted = hours + chr + minutes + ampm;
    return timeFormatted;
  }