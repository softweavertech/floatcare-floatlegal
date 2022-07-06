<template>
  <div class="container-fluid staff-main-container-bg p-4" id="staff-main-container-bg">
    <div class="staff-userPer-breadcrumbTop" id="staff-userPer-breadcrumbTop">
      <client-navbar  />
      <bread-crumb-staff
        v-if="!isAdmin"
        :addUser="addUser"
        :addUserAction="createAction"
        
      ></bread-crumb-staff>
      <!-- Add Staff Modal -->
      
      
      <!-- Bread crumb start -->
      <div class="staffList-breadcrumb" id="staffList-breadcrumb">
        <b-container fluid>
          <b-row class="align-items-center">
            <b-col cols="12" md="4" lg="4">
              <div
                class="staff-referral-search d-flex px-1 py-3"
                id="staff-referral-search"
              >
                <b-input-group>
                  <b-input-group-append>
                    <i class="fa fa-search"></i>
                  </b-input-group-append>
                  <b-form-input
                    v-model="searchReferral"
                    type="text"
                    placeholder="Search"
                    id="searchInput"
                    class="bg-transparent"
                  ></b-form-input>
                </b-input-group>
              </div>
            </b-col>
           <b-col cols="12" md="4" lg="4"></b-col>
               <b-col cols="12" md="6" lg="4" class="text-right d-flex justify-content-end gridsBtn gx-0">
               <b-row class="mt-2 mt-md-0 mt-lg-0" >
             <b-col cols="3" class="mt-2 mt-md-0 mt-lg-0" >
              <div class="px-3 border-right">
                <a
                  type="button"
                  class="btn-none listViewBtn"
                  id="listView"
                  v-on:click="listviewShow()"
                  :class="{ active: !isGridView }"
                >
                  <img :src="listViewIcon" />
                </a>
              </div>
             </b-col>
           <b-col cols="2" class="mt-2 mt-md-0 mt-lg-0" >
              <div class="pl-3">
                <a
                  type="button"
                  class="btn-none"
                  id="cardView"
                  v-on:click="gridviewShow()"
                  :class="{ active: isGridView }"
                >
                  <img :src="gridViewIcon" />
                </a>
              </div>
             </b-col>
              <b-col cols="7" class="my-2 my-md-0 my-lg-0" >
              <div class>
                <div class="filterActions" id="filterActions">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <div class="fc-btn-black">
                         <img :src="Shape" />
                        
                        &nbsp;|&nbsp;
                        <strong>A to Z</strong> &nbsp;
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      </div>
                    </template>
                    <b-dropdown-item
                      href="#"
                      v-for="sortkey in sortSettings" :key="sortkey"
                      id="filterList"
                    >
                      {{ sortkey }}
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div></b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- Bread crumb end -->
    </div>
    <div class="staff-main-section bg-white" id="staff-main-section">
       <div class="table-container" v-if="!isGridView" id="table-container">
        <table id="tableComponent" class="table table-borderless mb-0" >
          <thead>
            <tr>
              <th>
                Client
              </th>
               <th>
                Date of Birth
              </th>
               <th>
                Guardian name
              </th>
               <th>
                Address
              </th>
               <th>
                Phone
              </th>
               <th>
                Email
              </th>
               <th>
                PCP
              </th>
               <th>
                Recent Location
              </th>
               <th>
                Referrals
              </th>
               <th>
                Action
              </th>
            </tr>
          </thead>
        
          <tbody>
            <tr >
              <td scope="row" class="text-center patient-name">
                <div class="d-flex align-items-center" id="PROFESSIONAL">
                  <div class="profile-image">
                    <b-avatar
                      rounded="lg"
                      variant="primary"
                      
                      class="me-2"
                     
                    >
                    </b-avatar>
                    <b-avatar
                      rounded="lg"
                      variant="info"
                      src="https://placekitten.com/300/300"
                      class="me-2"
                      
                    ></b-avatar>
                  </div>
                  <div class="professional">Diego Morata</div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="" id="staffRole">Apr 4th, 1994</div>
                  <!-- <small class="role">gg</small> -->
                </div>
              </td>
              <td>
                <div class="d-flex flex-row" id="staffPrimaryDept">
                  <div class="primaryDept"> Jason Bailey </div>
                </div>
              </td>
              <td>
                <div class="d-flex flex-row" id="staffleaderships">
                  <div class=""></div>San Diago, CA.
                </div>
              </td>
              <td>
                <div class="d-flex flex-row" id="staffStatus">
                  <div class="fteStatus"> (465) 365 2648</div>
                </div>
              </td>
              <td>
                <div class="d-flex flex-row" id="staffPhone">
                  <div class="phone text-ellipsis70">
                   kanimsiahh24@gmail.com
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex flex-row" id="staffEmail">
                  <div class="email">
                 Carole Chimako
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex flex-row" id="staffEmail">
                  <div class="email">
                Hamburg
                  </div>
                </div>
              </td>

                <td>
                  <div class="moreAction" id="moreAction">
                    <button type="button" class="btn moreBtn">
                      <img :src="moreIcon" />
                    </button>
                  </div>
                
              </td>
              <td>
                  <div class="view" id="viewProfile">
                    <router-link
                      type="button"
                      class="btn-sm btn-light viewBtn"
                      :to="'/client-basic-information'"
                      >View Profile</router-link
                    >
                  </div> </td>
              
            </tr>
          </tbody>
        </table>
      </div>
  <div class="main-wrap" v-else>
        <b-container fluid>
          <b-row>
            <b-col>
              <div class="pt-2 card-wrap manage-wrap">
                <div class="pt-3 search-list" id="searchListCardView">
                  <b-row>
                    <b-col
                      sm="3"
                      md="3"
                      lg="3"
                      class="mb-4"
                      
                    >
                      <div class="card">
                        <div class="card-header">
                          <div class="align-middle">
                            <div class="patient-name" id="patient-name">
                              <b-row class="d-flex align-items-center"> 
                                <b-col class="text-center col-2 px-1">
                                  <div class="profile-image">
                                  
                                    <b-avatar
                                      rounded="lg"
                                      variant="info"
                                      src="https://placekitten.com/300/300"
                                      class="me-2"
                                      
                                    ></b-avatar>
                                  </div>
                                </b-col>
                                <b-col class="col-10 px-1">
                                  <div class="professional text-left">
                                    <p class="card-title mb-0 ">Yasaman Foroutan</p>
                                   
                                  </div>
                                </b-col>
                        
                              </b-row>

                              <b-col class="more d-none">
                                <b-button variant="outline-light"> </b-button>
                              </b-col>
                              <b-col class="address mt-3">
                                <div class="card-add">
                                  <img class="my-2 ms-0 me-2" :src="staffAddress" />Aug 11, 2022
                                </div>
                                <div class="card-add">
                                  <img :src="phoneIcon" /> (465) 365 2648
                                </div>
                                <div class="card-add">
                                  <img :src="emailIcon" /> martin@gmail.com
                                </div>
                                
                               
                              </b-col>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer">
                          <b-row>
                            <b-col cols="9" class="" id="viewProfile">
                              <router-link
                                type="button"
                                class="btn-primary blue-btn"
                                :to="'/client-basic-information'"
                              >
                              View Client
                              </router-link>
                            </b-col>
                            <!-- <b-col cols="3">
                              <div class="moreAction" id="moreAction">
                                <button type="button" class="moreBtn border-0">
                                  <img :src="moreIcon" />
                                </button>
                              </div>
                            </b-col> -->
                          </b-row>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
 
    </div>
  </div>
  
</template>
<script>
import ClientsNavbarVue from '@/components/Clients/Shared/ClientsNavbar.vue';
import gridViewIcon from "@/assets/images/Icons/ic_gridview.svg";
import listViewIcon from "@/assets/images/Icons/listview.svg";
import Shape from "@/assets/images/Icons/Shape@3x.svg";
import staffAddress from "@/assets/images/Icon/Location.svg";
import phoneIcon from "@/assets/images/Icons/ic_phone_icon.svg";
import emailIcon from "@/assets/images/Icons/ic_email.svg";
export default {
  name: "Staff",

  components: {
    'client-navbar': ClientsNavbarVue,
    
  },

  data: function () {
    return {
         listViewIcon: listViewIcon,
        gridViewIcon:gridViewIcon,
         Shape : Shape,
         staffList:[],
         sortSettings: ["Type", "A-Z", "Z-A"],
          isGridView: false,
          phoneIcon: phoneIcon,
          emailIcon: emailIcon,
         staffAddress: staffAddress,
    };
  },
  methods:{
   closeSearchModel() {
      this.searchUserModal = false;
    },
      listviewShow() {
      this.isGridView = false;
    },
    gridviewShow() {
      this.isGridView = true;

    },
  },

};
</script>
<style scope lang="scss">
.card-add img{
    margin-left: -9px;
}
.blue-btn{
    padding: 4px 15px;
    border-radius: 9px;
    text-align: left !important;
    float: left;
    background: #3E8ACC;
    text-decoration: none;
}
.card-add {
    font-size: 14px !important;
}
.address{
    padding: 0px !important;
}
.card-add {
    padding: 0px !important;
}
.modal-body {
    padding: 0px !important;
}
</style>
