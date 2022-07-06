<template>
  <div class="container-fluid main-container-bg p-4">
    <bread-crumb-case :tempTitle="tempTitle" />

    <!-- <loader v-if="isLoading" /> -->
    <b-form>
      <div class="main-wrap-document">
        <b-container fluid>
          <b-row class="document-section">
            <b-col >
              <b-card class="maincard1" @click="createForm()">
                <div class="logoimg">
                  <div>
                <img class="card-logoimg1 mb-2 mt-3" :src="Create" /></div>
                <span class="createform">+ Create Document Template</span>
                </div> 
              </b-card>
            </b-col>
            <b-col >
              <b-card class="maincard1">
              <b-row>
                <div class="dropdown">
                              <img data-bs-toggle="dropdown" class="card-icon  mt-2 float-end" :src="moreIcon" />
                            
                            <ul
                              class="dropdown-menu custom-dropdown"
                              aria-labelledby="custom-dropdown"
                            >
                              <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Duplicate</a
                                >
                              </li>
                               <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Edit</a
                                >
                              </li>
                            </ul>
                          </div>
              </b-row>
              <b-row>
                <img class="card-logoimg mb-2 mt-0" :src="Added" />
              </b-row>
              <template #footer>
                  <span>Template Name</span>
                </template>
              </b-card>
            </b-col>
            <b-col >
              <b-card class="maincard1">
              <b-row>
                <div class="dropdown">
                              <img data-bs-toggle="dropdown" class="card-icon  mt-2 float-end" :src="moreIcon" />
                            
                            <ul
                              class="dropdown-menu custom-dropdown"
                              aria-labelledby="custom-dropdown"
                            >
                              <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Duplicate</a
                                >
                              </li>
                               <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Edit</a
                                >
                              </li>
                            </ul>
                          </div>
              </b-row>
              <b-row>
                <img class="card-logoimg mb-2 mt-0" :src="Added" />
              </b-row>
              <template #footer>
                  <span>Template Name</span>
                </template>
              </b-card>
            </b-col>
            <b-col cols="">
              <b-card class="maincard1">
              <b-row>
                <div class="dropdown">
                              <img data-bs-toggle="dropdown" class="card-icon  mt-2 float-end" :src="moreIcon" />
                            
                            <ul
                              class="dropdown-menu custom-dropdown"
                              aria-labelledby="custom-dropdown"
                            >
                              <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Duplicate</a
                                >
                              </li>
                               <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Edit</a
                                >
                              </li>
                            </ul>
                          </div>
              </b-row>
              <b-row>
                <img class="card-logoimg mb-2 mt-0" :src="Added" />
              </b-row>
              <template #footer>
                  <span>Template Name</span>
                </template>
              </b-card>
            </b-col>
            <b-col>
              <b-card class="maincard1">
              <b-row>
                <div class="dropdown">
                              <img data-bs-toggle="dropdown" class="card-icon  mt-2 float-end" :src="moreIcon" />
                            
                            <ul
                              class="dropdown-menu custom-dropdown"
                              aria-labelledby="custom-dropdown"
                            >
                              <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Duplicate</a
                                >
                              </li>
                               <li class="unarch-drop">
                                <a
                                  class="dropdown-item cutom-dropdown-item active"
                                  href="#"
                                  >Edit</a
                                >
                              </li>
                            </ul>
                          </div>
              </b-row>
              <b-row>
                <img class="card-logoimg mb-2 mt-0" :src="Added" />
              </b-row>
              <template #footer>
                  <span>Template Name</span>
                </template>
              </b-card>
            </b-col>
          </b-row>

        </b-container>
      </div>
    </b-form>
  </div>
</template>

<script>
import CaseOverView from "@/components/Document/DocumentOverview.vue";
import Added from "@/assets/images/Added.svg";
import Create from "@/assets/images/Create.svg";
import moreIcon from "@/assets/images/ic_more.svg";
export default {
  name: "documentcenter",

  components: {
    "bread-crumb-case": CaseOverView,
  },
  validations() {
    return {};
  },
  data() {
    return {
      tempTitle: "Documents",
      Added:Added,
      Create:Create,
      moreIcon:moreIcon,
    };
  },

  mounted() {},
  computed: {},
  methods: {
    createForm(){
      this.$router.push("/document-center/create-form")
    }
  },
};
</script>

<style scope lang="scss">
.row.document-section {
  background: #fafafc;
  padding: 20px;
  margin: 20px 10px;
  border-radius: 10px;
}
.case-details-top-wrap {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  background: #fff;
}
.main-wrap-document {
  background: white;
  padding-top: 3px;
  padding-bottom: 10%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.logoimg{
  text-align: center;
  margin-top: 18px;
}
.card-logoimg{
  height: 80px;
}
.card-logoimg1{
  height: 70px;
}
.maincard1{
  height: 188px;
  border: 1px solid #b3d1ec;
  border-radius: 12px;
}
.createform {
    color: #173e67;
}

.footerdata{
  font-size: 14px;
  color: 173e67;
  background-color: #e9ecef;
}
.maincard1 .card-body {
    padding: 0px;
}
.card-icon {
    background-color: #e8ecf0;
    border-radius: 4px;
    color: #173E67;
    margin-right: 10px;
}
.cutom-dropdown-item.active,
.cutom-dropdown-item:active {
  color: #000;
  text-decoration: none;
  background-color: white;
  border: none;
  font-size: 12px;
}
.unarch-drop {
  margin: 0px;
   background-color: lightgrey;
  border-bottom: 1px solid lightgrey;
}

ul.dropdown-menu.custom-dropdown.show {
  position: absolute !important;
  min-width: 6rem;
  padding: 0px 0;
  color: #212529;
  background-color: #fff;
 
}


</style>
