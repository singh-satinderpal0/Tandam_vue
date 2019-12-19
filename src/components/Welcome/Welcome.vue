<template>
<div :style="{ width : '100%' }">
  <div :style="{ width : '100%' }">
    <div>
      <div :class="{ dateDiv : true }">
        <span v-if="singleObj[0]">{{ singleObj[0].date }}</span>
      </div>
      <div :class="{tablesDiv:true}" v-if="singleObj[0]">
        <div  :style="{ justifyContent: 'center', display: 'flex' }"
           v-for="(item,i) in singleObj[0].department"
          :key="i"
        >
          <div :class="{Container:true}">
            <div :class="{row:true}">
              <div :class="{ departmentName:true}">
                <h4>{{ item.department_name }}</h4>
              </div>
              <div :class="{medium:true}">
                <tablecomponent
                  v-bind:users = "item.sub_department[0].users"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

       <paginate
    :page-count="3"
    :page-range="1"
    :margin-pages="2"
    :click-handler="handleDateChange"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :active-class="'currentPageClass'"
    >
  </paginate>

  </div>
  
</template>

<script >
import { getListWhosIN } from "../../services";
import Vue from "vue";
import tablecomponent from '../Table/Table'
import paginate from 'vuejs-paginate'
import { formatCustomDate } from '../../helper/helper'

export default Vue.extend({
  name: "welcome",

    components:{
        tablecomponent,paginate
    },

  data: function() {
    return {
      whosInList: [],
      singleObj : [],
      currentPage: 1,
      updatedDate: new Date(),
      currentDate : new Date()
    };
  },

  mounted() {
    const auth = localStorage.getItem("isLoggedin");
    getListWhosIN(auth, formatCustomDate(this.currentDate,'-')).then(response => {
      this.whosInList = response.data.data;
     this.currentObj()
    });
  },

  methods: {
    currentObj: function() {
      const temp = this.whosInList.filter(data => {
        return data.date === formatCustomDate(this.currentDate,'-');
      });
      this.singleObj = temp
    //   window.console.log(this.singleObj)
    },
    handleDateChange : function(e){
        // window.console.log("date handler fired", pageNum)

            // console.log(e.selected);
    let tempUpdatedDate = this.updatedDate

    if (e > this.currentPage) {

      let temp = e - this.currentPage

      tempUpdatedDate = new Date(this.updatedDate.setDate(this.updatedDate.getDate() + temp))
    }
    else if (e < this.currentPage) {

      let temp = this.currentPage - e

      tempUpdatedDate = new Date(this.updatedDate.setDate(this.updatedDate.getDate() - temp))
    }
    else {
      tempUpdatedDate = this.currentDate
    }
    this.currentDate = this.updatedDate;

      this.updatedDate = tempUpdatedDate,
      this.currentPage = e

    //   window.console.log(this.updatedDate)
    //   window.console.log(this.currentPage)
      this.currentObj()
    }
  }

});
</script>
<style >
.dateDiv {
  padding: 10px 0;
  /* position: 'fixed', */
  left: 0;
  width: 100%;
  z-index: 9;
  background-color: white;
}

.tablesDiv {
  height: 78vh;
  overflow: auto;
}

.Container {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  /* [theme.breakpoints.down("sm")]: {
      paddingTop: "25px"
    } */
}

.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.departmentName {
  color: #1976D2;
}

.medium {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  /* // height: '40vh', */
  /* // overflowY: 'auto', */
  /* [theme.breakpoints.down("sm")]: {
      padding: "0"
    } */
}

.currentPageClass a{
    color: black;
    background-color: aquamarine
}


.pagination{
    display: flex;
    width: 40%;
    justify-content: space-between;
    list-style: none;
}
</style>