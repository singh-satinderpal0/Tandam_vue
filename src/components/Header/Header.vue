<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last" class="md-app-scroller">
      <md-app-toolbar class="md-medium md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuHandler()">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">Who's In</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <!-- <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-pages" md-label="Pages"></md-tab>
            <md-tab id="tab-posts" md-label="Posts"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
          </md-tabs>
        </div>-->
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0"></md-toolbar>

        <md-list>
          <md-list-item  @click="componentHandler(1)">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">welcome</span>
          </md-list-item>

          <md-list-item @click="componentHandler(2)">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">calender</span>
          </md-list-item>

          <!-- <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item> -->
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div v-if="componentId === 1">
          <Welcome />
        </div>
        <div v-if="componentId === 2">
          <Calendar />
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Calendar from "../../containers/calendar/calendar";
import Welcome from "../Welcome/Welcome";
export default {
  components: {
    Calendar,
    Welcome
  },
  name: "LastRowFixed",

  data: () => {
   return{ 
    menuVisible: false,
    componentId: 1
  }
  },

  methods: {
    componentHandler: function(id){
     this.menuVisible = !this.menuVisible,
      this.componentId = id
    },

    menuHandler : function() {
        // window.console.log();
        // window.console.log("menu handler")
         this.menuVisible = !this.menuVisible
    }
  },


};
</script>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-list-item :hover{
cursor: pointer;
background-color: #ccc;
// opacity: 0.7;
}

.md-app-scroller{
    margin-top: 0;
    flex: 1;
}

</style>