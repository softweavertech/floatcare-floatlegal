<template>
  <div class="container-fluid staff-main-container-bg p-4"  id="staff-main-container-bg">
    <div class="staff-userPer-breadcrumbTop" id="staff-userPer-breadcrumbTop">
      <bread-crumb :BreadCrumbActions="BreadCrumbActions" :addUser="addUser"  :addUserAction="addUserAction" :BreadCrumbTitle="BreadCrumbTitle"></bread-crumb>
      <!-- Add Staff Modal -->
      
      <!-- Bread crumb start -->
      <div class="staffList-breadcrumb" id="staffList-breadcrumb">
        <b-container fluid>
          <b-row class="align-items-center">
            <b-col cols="12" lg="4" md="4">
              <div class="staff-referral-search d-flex px-4 py-3" id="staff-referral-search">
                <b-input-group>
                  <b-input-group-append>
                    <i class='fa fa-search'></i>
                  </b-input-group-append>
                  <b-form-input class="bg-transparent" v-model="searchReferral" type="text" placeholder="Search" id="searchInput"></b-form-input>
                </b-input-group>
              </div>
            </b-col>
            
          </b-row>
        </b-container>
      </div>
      <!-- Bread crumb end -->
    </div>
    <div class="staff-main-section  px-4 pt-2 pb-4 " id="staff-main-section">

      <div class="p-3 bg-table mt-2" id="table-container">
                <!-- <common-table :tHead="tHead"  :viewBtnAction="viewInvited"  :tableName="tableName" :tData="tData"></common-table> -->
      </div>
    </div>
  </div>
 
</template>
<script>

import BreadCrumb from "@/components/Dashboard/ClientCase/CaseBreadCrumb.vue";

export default {
  name: "Staff",
  components: {
    
    "bread-crumb": BreadCrumb,
    
  },

  data: function () {
    return {
       SearchData: false,
       addUser:"Create Case",
       pageTitle: "User",
      pageHeader: "Add User",
      BreadCrumbActions: [{
        url: "/Case-info-list",
        name: "My Cases",
        value: 'mycases'
      },
      {
        url: "/outbound-cases",
        name: "Outbound Cases",
        value: 'outboundcases'
      },
      {
        url: "/pendinf-acceptence",
        name: "Pendinf Acceptence",
        value: 'pendinfacceptence'
      },
      {
        url: "/co-counsel-cases",
        name: "Co-counsel cases",
        value: 'cocounselcases'
      },

      ],
      BreadCrumbTitle:"Case Info",
      staffList: [],
      sortSettings: ["Type", "A-Z", "Z-A"],
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scope lang="scss">

.btn-light {
    color: #b6bdd9;
    background-color: #f3f4f7;
    border-radius: 0.6rem;
    border-color: #f3f4f7;
}
.btn-light:hover {
    color: #b6bdd9;
    border-radius: 0.6rem;
    background-color: #e7e7e7;
    border-color: #e7e7e7;
}
.manage-referral-top {
    background: #fafafc !important;
    border-radius: 20px;
}
.nav-tabs {
    border: none;
}
.bg-table{
  background-color:  #fafafc;
  border-radius: 15px;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border-color: #fafafc!important;
}
@media only screen and (min-width:320px) and (max-width: 767px) {
a.text-decoration-none {
    background: gainsboro;
    border-bottom: none;
    padding: 4px 10px;
}
.bread-crumb-nav .active {
    border-bottom: none;
}
li.nav-item {
    padding: 4px 5px;
    margin: 4px 0px;   
    border-radius: 6px;
}
}
</style>