<template>
  <table :class="{table:true}">
    <thead>
      <tr>
        <th :style="{ borderRadius: '8px 0 0px 0' }" :class="{tableHeader:true}">Name</th>
        <th :class="{tableHeader:true}">In/Out</th>
        <th
          :class="{tableHeader:true}"
          :style="{ borderRadius: '0 8px 0px 0',width:'60%',height:'42px' }"
        >Remarks</th>
      </tr>
    </thead>
    
    <tbody v-if="users.length>0">
      <tr v-for="(user,i) in users"  :key="i" :class="{ tableRow:true }">
        
        <td :class="{td:true}">{{ user.display_name }}</td>
        <td
          :style="{ fontWeight: 'bold', color : user.remarks.length>0 ? user.remarks[0].status === 1 ? '#FFBF00' : 'red' : 'green' }"
          :class="{td:true}"
        >{{ user.remarks.length > 0 ? user.remarks[0].status === 1 ? "In" : 'Out' : "In" }}</td>
        <td :class="{td:true}" :style="{ width:'60%' }">
          <div v-for="(remark,index) in user.remarks" :key="index" :class="{remarksContainer:true}">
            <div
              :style="{ display: 'flex',flexWrap: 'wrap',justifyContent: 'space-between',padding:'0px 8px'}"
            >
              <div :style="{ width: '100%',display:'flex' }">
                <span :style="{ marginRight:'10px' }" v-if="remark.start_time">{{ remark.start_time }}</span>
                <span v-if="remark.start_time && remark.end_time">to</span>
                <span :style="{ marginLeft:'10px' }" v-if="remark.end_time">{{ remark.end_time }}</span>
              </div>
              <span v-if="remark.add_note">{{ remark.add_note }}</span>
            </div>
          </div>
        </td>
      </tr>
    </tbody>

  </table>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "tablecomponent",
  props: ["users"],

});
</script>

<style >
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  /* // border: '2px solid floralwhite',
    // "& th:first-child":{
    //   borderRadius:'10px 0 0 0px !important',
    // },
    // "& th:last-child":{
    //   borderRadius:'0 10px 0px 0 !important',
    // }, */
}

.tableHeader {
  background: #1976D2;
  /* // border: "1px solid #1976D2", */
  color: white;
  padding: 10px 0;
}

.tableRow {
  border-bottom: 1px solid black;
  /* // color:'white', */
  /* // backgroundColor:'green', */
  /* "&:hover": {
      background: "rgba(0,0,0,.2)",
      cursor: "pointer"
    } */
}

.td {
  border: 1px solid #ccc;
  padding: 10px 0;
  height: 5vh;
  width: 20vh;
}

.remarksContainer {
  /* // display:'flex', */
  overflow: auto;
  max-height: 80px;
}
</style>