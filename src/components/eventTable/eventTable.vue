<template>
    <div class="md-layout" :class="{root : true}">
      <div :class="{tableWrapper:true}" :style="{ width:'100%' }">

<!-- ****************************************************************************************** -->

      <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-empty-state
      class="md-empty-state md-empty-state-label"
        md-label="No Vehicle found"
        :md-description="``">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }" >
        <md-button @click="edit(item)" :style="{ padding:'0' }">edit</md-button>
        <md-table-cell md-label="Vehicle" :style="{ width:'118px',textAlign: 'center' }" >{{ item.vehicleNo }}</md-table-cell>
        <md-table-cell md-label="Title" :style="{ width:'88px',textAlign: 'center' }" >{{ item.VehicleTitle }}</md-table-cell>
        <md-table-cell md-label="Start Time" :style="{ width:'126px',textAlign: 'center' }" >{{ item.start | formatCustomTime(':') }}</md-table-cell>
        <md-table-cell md-label="End Time" :style="{ width:'127px',textAlign: 'center' }" >{{ item.end | formatCustomTime(':') }}</md-table-cell>
        <md-table-cell v-if="item.eelVal" md-label="Eel" :style="{ width:'58px',textAlign: 'center' }" >{{ item.eelVal }}</md-table-cell>
        <md-table-cell v-else md-label="Eel" :style="{ width:'58px',textAlign: 'center' }" >{{ "-" }}</md-table-cell>
        <md-table-cell md-label="Location" :style="{ width:'121px',textAlign: 'center' }" >{{ item.locationVal }}</md-table-cell>
        <md-table-cell md-label="Persons List" :style="{ width:'58px',textAlign: 'center' }" >{{ item.personsList | StringPersonList }}</md-table-cell>
      </md-table-row>
    </md-table>

<!-- ****************************************************************************************** -->
        
        <!-- <Table stickyHeader>
          <TableHead>
            <TableRow>
            {/* <TableCell/> */}
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {         
              // console.log(row);
                   
              return (
                <TableRow style={{ verticalAlign:'baseline' }} hover role="checkbox" tabIndex={-1} key={row.v_no}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                       <TableCell key={column.id} align={column.align}>
                        {
                        column.id === "edit" ? <Button disableFocusRipple disableRipple size='small' onClick={() => props.editHandler(row,date)} >
                        <EditIcon />
                        </Button> :
                            column.format && typeof value === 'number' ? column.format(value) : value
                        }
                      
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table> -->
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name :  "Eventtable",

    props:["users"],

    data: function(){
     return{
     search: null,
      searched: [],
      detail : {},
      tempData : "Demo Data"
    //   users: [
    //     {
    //       vehicle: 'p1',
    //       title: "Shawna Dubbin",
    //       start_time: "09:00 AM",
    //       end_time: "09:00 PM",
    //       eel: "Assistant Media Planner",
    //       location:"taronto",
    //       persons_list:"user1,user2"
    //     },
    //   ],
    }},

    mounted(){
      // console.log(this.calendarEvents);
      // this.$on('edit',this.$methods.edit)
    },
    methods:{
      edit:function(data_){
        // this.$emit('edit_',{data : data_})
        console.log(data_);
        
      }
    }
})
</script>

<style>
.root {
    width: 100%;
    vertical-align: baseline !important
  };
  .tableWrapper {
    max-height: 40vh;
    overflow: auto;
    margin-top: 2vh;
    width: 100% 
  }

  .md-empty-state-label{
      font-size: 16px !important
  }
  .md-empty-state{
      padding: 0 !important
  }
</style>

<style lang="scss">
  .md-field {
    max-width: 300px;
  }
  .md-table-cell-container{
    padding: 0
  }
</style>