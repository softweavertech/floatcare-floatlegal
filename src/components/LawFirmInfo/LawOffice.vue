<style>
.account_owner span {
  width: 100%;
  border-bottom: 2px solid #eee;
}
.account_owner span h3 {
  width: 75%;
  float: left;
  color: #193b5a;
  font-size: 1.5rem;
}
.account_owner span button {
  float: right;
}
.account_owner span button span {
    border-radius: 50%;
    width: 100%;
    margin-right: 10px;
    padding: 0px 4px;
}
.fc-cart button, .fc-cart button:hover {
    font-weight: 600;
    color: #fff;
    border: #4195ae 1px solid;
    padding: 5px 25px;
}
/* button.btn.btn-outline-secondary {
    //float: left;
} */
.text-center {
    text-align: center !important;
    margin: 0 auto;
}
.col-lg-3 {
    margin-bottom: 1rem;
}
.col-lg-2 img {
    width: 40px; 
}
h5.professional span img {
    width: 30px;
}
.row.mb-2 div span img {
    width: 35px;
}
.btn-deactive {  
    border: 1px solid  rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}
.row.pb-2 div span img {
    width: 25px;
}
.LawOffice span.text-end.col-6 {
    font-size: 14px;
}
.LawOffice h5.professional span {
    opacity: 1;
    color: rgba(31,61,90,1);
    font-family: "Poppins";
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.13px;
    text-align: left;
    line-height: 20px;
}
.LawOffice .bg-grey .bg-grey-btn span {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 400;
}
.LawOffice button.btn.btn-outline-secondary.btn-sm, .LawOffice button.btn.btn-outline-secondary.btn-sm:hover {
    opacity: 1;
    color: rgba(31,61,90,1);
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0px;
    text-align: center;
    line-height: 24px;
}
button.btn.btn-menu.btn-secondary.pull-right {
    border-radius: 6px;
    border: 0px solid rgba(61,96,131, 1);
    opacity: 1;
    background-color: rgba(61,96,131, 0.1);
}
span.text-end.col-6 .text-danger {
    color: #F93D3D !important;
    border: 1px solid #F93D3D;
}
.LawOffice .fa-ellipsis-v:before {
    content: "\f142";
    color: #3D6083;
}
span.bg-grey-btn {
    font-size: 10px;
    padding: 2px 5px;
    background-color: transparent;
    border-radius: 3px;
    margin-left: 12px;
}
.card-wrap.manage-wrap.row .col-md-4 {
    width: auto;
    display: inline-block;
}
.rxx {
    display: flex;
    margin: 0 auto;
}
.rxx .row .col .bg-grey .bg-grey-btn {
    background: #eee;
}
.nav-tabs .nav-link.active{
  border-bottom: 2px solid #1F3D5A;
  border-radius: 0%;
  font-weight: 700;
}
.nav-tabs .nav-link{
  border-radius: 0%;
}
.tab-content .nav.nav-tabs .nav-link.active {
    border-bottom: none;
}
.rxx span.bg-grey-btn span {
    font-size: 10px !important;
    align-items: center;
}
.tab-content .nav.nav-tabs .nav-link.active, .LawOffice .container-fluid {
    border-bottom: none;
    border-radius: 12px 12px 0px 0px;
    opacity: 1;
    background-color: rgba(31,61,90, 0.03);
}
.LawOffice .nav-tabs {
    border-bottom: 0px solid #dee2e6; 
}
.LawOffice .card-wrap.manage-wrap.row .col-md-4.mt-3 .card {
    background-color: #fff;
}
.LawOffice .card-footer {
    background-color: #ffff;
}
.LawOffice .container-fluid {
    padding: 0 20px 20px;
}
</style>
<template>
    <b-container fluid class="main-container-bg p-4 LawOffice">
      <div class="main-card card overflow-hidden p-4 bg-light">
        <headerTemplate :btnName="btnName" />
        <b-tabs>
            <b-tab title="Business" active  @click="btnName = 'Create Law Office'">
            <!-- <b-button class="px-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="@/assets/images/Icon/LawFirm/icons/Add.png" />Create Account Owner</b-button> -->
            <b-card-text>
                        <b-tabs>
                            <b-tab title="Legal Office" active>
                            <b-card-text>
                            <div class="main-wrap">
                                  <b-container fluid>
                                    <b-row v-if="officesArr">
                                      <b-col>
                                        <div class="pt-2 card-wrap manage-wrap row" v-if="officesArr.office.length > 1">
                                          <b-col md="4  mt-3" v-for="office in officesArr.office" :key="k">
                                            <b-card>  
                                              <span class="border2-span"> </span>
                                              <b-row class="mb-2">
                                                <div class="pl-1">
                                                  <span class="pul-left col-12">
                                                    <span class="text-end col-6"><img :src="lawOfficeImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                      Law Office</span>                                                                                                      </span>
                                                  <span class="text-end col-6"><small v-if="office.officeStatus=='active'" class="btn-active pull-right custom-active draft text-success">Active</small>
                                                  <span class="btn-deactive pull-right custom-active draft text-danger" v-else>Deactive</span>
                                                  </span>
                                                  <span class="pul-left col-12">
                                                    <h5 class="professional"><span>{{ office.branchName }}</span>
                                                    </h5>
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="mt-3 pb-2">
                                                <div>
                                                  <span>
                                                    <img :src="locationImg" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="text-grey">
                                                    {{ office.city }},
                                                    {{ office.country }}
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="pb-2">
                                                <div>
                                                  <span>
                                                    <img :src="emailImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ office.email }}</span></span>
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="pb-2">
                                                <div>
                                                  <span>
                                                    <img :src="staffImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ office.timing }}</span></span>
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="pb-2">
                                                <div>
                                                  <span>
                                                    <img :src="phoneImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ office.phone }}</span></span>
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="pb-2">
                                                <div class="rxx" style="{display: flex; align-items: center;
 margin-top: 0;}">
                                                  <span>
                                                    <img :src="departmentsImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <div class="row" v-if="office.account.length">
                                                    <b-col class="col" v-for="account in office.account" :key="k">
                                                      <span class="bg-grey"><span class="bg-grey-btn"><span>{{ account.accountName }}</span></span>
                                                  </span>
                                                    </b-col>
                                                  </div>
                                                </div>
                                              </b-row>
                                             <template #footer>
                                                <b-button size="sm" variant="outline-secondary" v-on:click="
                                                  manageAccount(office.branchId)
                                                ">Manage Offices</b-button>
                                                <span class="pull-right pt-1 px-2 more-btn">
                                                    <div class="dropdown">
                                                      <button class="btn btn-menu btn-secondary pull-right"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                      >
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                      </button>
                                                      <ul
                                                        class="dropdown-menu custom-dropdown"
                                                        aria-labelledby="custom-dropdown"
                                                      >
                                                        <li class="unarch-drop">
                                                          <a class="dropdown-item cutom-dropdown-item active" href="#">Unarchive</a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                </span>
                                              </template>
                                            </b-card>
                                          </b-col>
                                        </div>
                                        <div v-else>
                                          <div class="text-center mt-5">
                                            <img :src="noReferral" />
                                          </div>
                                        </div>
                                      </b-col>
                                    </b-row>
                                  </b-container>
                              </div>
                            </b-card-text>
                            </b-tab>
                            <b-tab title="Satellite Office">
                            <b-card-text>
                              <div class="main-wrap">
                                  <b-container fluid>
                                    <b-row v-if="officesArr">
                                      <b-col>
                                        <div class="pt-2 card-wrap manage-wrap row" v-if="officesArr.satelliteOffice.length">
                                          <b-col md="4  mt-3" v-for="office in officesArr.satelliteOffice" :key="k">
                                            <b-card>  
                                              <span class="border2-span"> </span>
                                              <b-row class="mb-2">
                                                <div class="pl-1">
                                                  <span class="pul-left col-12">
                                                    <span class="text-end col-6"><img :src="lawOfficeImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                      Law Office</span>                                                                                                      </span>
                                                  <span class="text-end col-6"><small v-if="office.officeStatus=='active'" class="btn-active pull-right custom-active draft text-success">Active</small>
                                                  <span class="btn-deactive pull-right custom-active draft text-danger" v-else>Deactive</span>
                                                  </span>
                                                  <span class="pul-left col-12">
                                                    <h5 class="professional"><span>{{ office.branchName }}</span>
                                                    </h5>
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="mt-3 pb-2">
                                                <div class="pl-2 ">
                                                  <span>
                                                    <img :src="locationImg" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="text-grey">
                                                    {{ office.city }},
                                                    {{ office.country }}
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="pb-2">
                                                <div>
                                                  <span>
                                                    <img :src="emailImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ office.email }}</span></span>
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="pb-2">
                                                <div>
                                                  <span>
                                                    <img :src="staffImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ office.timing }}</span></span>
                                                  </span>
                                                </div>
                                              </b-row>
                                              <b-row class="pb-2">
                                                <div>
                                                  <span>
                                                    <img :src="phoneImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ office.phone }}</span></span>
                                                  </span>
                                                </div>
                                              </b-row>
                                               <b-row class="pb-2">
                                                <div class="rxx" style="{align-items: center;  display: flex; margin-top: 0;}">
                                                  <span>
                                                    <img :src="departmentsImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  </span>
                                                  <div class="row" v-if="office.account.length">
                                                    <b-col class="cc" v-for="account in office.account" :key="k">
                                                       <span class="bg-grey"><span class="bg-grey-btn"><span>{{ account.accountName }}</span></span>
                                                  </span>
                                                    </b-col>
                                                  </div>
                                                </div>
                                              </b-row>
                                             <template #footer>
                                                <b-button size="sm" variant="outline-secondary" v-on:click="
                                                  manageAccount(office.branchId)
                                                ">Manage Offices</b-button>
                                                <span class="pull-right pt-1 px-2 more-btn">
                                                   <div class="dropdown">
                                                      <button class="btn btn-menu btn-secondary pull-right"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                      >
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                      </button>
                                                      <ul
                                                        class="dropdown-menu custom-dropdown"
                                                        aria-labelledby="custom-dropdown"
                                                      >
                                                        <li class="unarch-drop">
                                                          <a class="dropdown-item cutom-dropdown-item active" href="#">Unarchive</a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                </span>
                                              </template>
                                            </b-card>
                                          </b-col>
                                        </div>
                                        <div v-else>
                                          <div class="text-center mt-5">
                                            <img :src="noReferral" />
                                          </div>
                                        </div>
                                      </b-col>
                                    </b-row>
                                  </b-container>
                              </div>
                            </b-card-text>
                            </b-tab>
                              <!-- <b-row class="mt-4" lg="3">
                              <b-col sm="4" md="4" lg="10">
                                <span class="fs-6 mt-3 mb-4">inactive</span>
                              </b-col>
                              <b-col sm="2" md="2" lg="2" >
                                <b-form-checkbox switch size="lg"></b-form-checkbox>
                              </b-col>
                            </b-row> -->
                        </b-tabs>
            </b-card-text>
              <!-- <AddBusiness/> -->
            </b-tab>
            <b-tab title="Departments" @click="btnName = 'Create Departments'">
            <b-card-text>
              <b-card>
                  <b-tabs >
                    <b-tab title="location 1" active>
                      <b-card-text>
                        <div class="main-wrap">
                            <b-container fluid>
                              <b-row v-if="documentsArr">
                                <b-col>
                                  <div class="pt-2 card-wrap manage-wrap row" v-if="documentsArr.location1.length">
                                    <b-col md="3  mt-3"   v-for="location1 in documentsArr.location1" :key="location1">
                                      <b-card>  
                                        <span class="border2-span"> </span>
                                        <b-row class="mb-2">
                                          <div class="pl-1">
                                            <span class="pul-left col-12">
                                              <span class="text-end col-6"><img :src="departmentsImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                Department</span>                                                                                                      </span>
                                            <span class="text-end col-6"><small v-if="location1.departmentStatus=='active'" class="btn-active pull-right custom-active draft text-success">Active</small>
                                            <span class="btn-deactive pull-right custom-active draft text-danger" v-else>Deactive</span>
                                            </span>
                                            <span class="pul-left col-12">
                                              <h5 class="professional"><span>{{ location1.departmentName }}</span>
                                              </h5>
                                            </span>
                                          </div>
                                        </b-row>
                                        <b-row class="pb-2">
                                          <div>
                                            <span>
                                              <img :src="rolesImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                            </span>
                                              <span class="bg-grey"><span class="bg-grey-btn"><span> {{ location1.supervisor }} </span></span></span>
                                          </div>
                                        </b-row>
                                        <b-row class="pb-2">
                                          <div class="rxx" style="{align-items: center;  display: flex; margin-top: 0;}">
                                            <span>
                                              <img :src="staffImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                            </span>
                                            <div class="row" v-if="location1.departments.length">
                                              <b-col class="cc" v-for="dept in location1.departments" :key="k">
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ dept.DeptName }} {{ (dept.DepEmpCount) }}</span></span>
                                            </span>
                                              </b-col>
                                            </div>
                                          </div>
                                        </b-row>
                                        <template #footer>
                                          <b-button size="sm" variant="outline-secondary" v-on:click="
                                            manageAccount(location1.departmentId)
                                          ">Manage Offices</b-button>
                                          <span class="pull-right pt-1 px-2 more-btn">
                                              <div class="dropdown">
                                                <button class="btn btn-menu btn-secondary pull-right"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </button>
                                                <ul
                                                  class="dropdown-menu custom-dropdown"
                                                  aria-labelledby="custom-dropdown"
                                                >
                                                  <li class="unarch-drop">
                                                    <a class="dropdown-item cutom-dropdown-item active" href="#">Delete</a>
                                                  </li>
                                                </ul>
                                              </div>
                                          </span>
                                        </template>
                                      </b-card>
                                    </b-col>
                                  </div>
                                  <div v-else>
                                    <div class="text-center mt-5">
                                      <img :src="noReferral" />
                                    </div>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-container>
                        </div>
                      </b-card-text>
                      </b-tab>
                      <b-tab title="location 2">
                        <b-card-text>
                            <div class="main-wrap">
                              <b-container fluid>
                                <b-row v-if="documentsArr">
                                  <b-col>
                                    <div class="pt-2 card-wrap manage-wrap row" v-if="documentsArr.location2.length">
                                      <b-col md="3  mt-3" v-for="location2 in documentsArr.location2" :key="location2">
                                        <b-card>  
                                          <span class="border2-span"> </span>
                                          <b-row class="mb-2">
                                            <div class="pl-1">
                                              <span class="pul-left col-12">
                                                <span class="text-end col-6"><img :src="departmentsImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                  Department</span>                                                                                                      </span>
                                              <span class="text-end col-6"><small v-if="location2.departmentStatus=='active'" class="btn-active pull-right custom-active draft text-success">Active</small>
                                              <span class="btn-deactive pull-right custom-active draft text-danger" v-else>Deactive</span>
                                              </span>
                                              <span class="pul-left col-12">
                                                <h5 class="professional"><span>{{ location2.departmentName }}</span>
                                                </h5>
                                              </span>
                                            </div>
                                          </b-row>
                                          <b-row class="pb-2">
                                            <div>
                                              <span>
                                                <img :src="rolesImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                              </span>
                                                <span class="bg-grey"><span class="bg-grey-btn"><span> {{ location2.supervisor }} </span></span></span>
                                            </div>
                                          </b-row>
                                          <b-row class="pb-2">
                                            <div class="rxx" style="{align-items: center;  display: flex; margin-top: 0;}">
                                              <span>
                                                <img :src="staffImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                              </span>
                                              <div class="row" v-if="location2.departments.length">
                                                <b-col class="cc" v-for="dept in location2.departments" :key="k">
                                                    <span class="bg-grey"><span class="bg-grey-btn"><span>{{ dept.DeptName }} {{ (dept.DepEmpCount) }}</span></span>
                                              </span>
                                                </b-col>
                                              </div>
                                            </div>
                                          </b-row>
                                          <template #footer>
                                            <b-button size="sm" variant="outline-secondary" v-on:click="
                                              manageAccount(location2.departmentId)
                                            ">Manage Offices</b-button>
                                            <span class="pull-right pt-1 px-2 more-btn">
                                                <div class="dropdown">
                                                  <button class="btn btn-menu btn-secondary pull-right"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                  </button>
                                                  <ul
                                                    class="dropdown-menu custom-dropdown"
                                                    aria-labelledby="custom-dropdown"
                                                  >
                                                    <li class="unarch-drop">
                                                      <a class="dropdown-item cutom-dropdown-item active" href="#">Delete</a>
                                                    </li>
                                                  </ul>
                                                </div>
                                            </span>
                                          </template>
                                        </b-card>
                                      </b-col>
                                    </div>
                                    <div v-else>
                                      <div class="text-center mt-5">
                                        <img :src="noReferral" />
                                      </div>
                                    </div>
                                  </b-col>
                                </b-row>
                              </b-container>
                          </div>
                        </b-card-text>
                      </b-tab>
                       <b-tab title="location 3">
                        <b-card-text>
                          <div class="main-wrap">
                            <b-container fluid>
                              <b-row v-if="documentsArr">
                                <b-col>
                                  <div class="pt-2 card-wrap manage-wrap row" v-if="documentsArr.location3.length">
                                    <b-col md="3  mt-3" v-for="location3 in documentsArr.location3" :key="location3">
                                      <b-card>  
                                        <span class="border2-span"> </span>
                                        <b-row class="mb-2">
                                          <div class="pl-1">
                                            <span class="pul-left col-12">
                                              <span class="text-end col-6"><img :src="departmentsImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                Department</span>                                                                                                      </span>
                                            <span class="text-end col-6"><small v-if="location3.departmentStatus=='active'" class="btn-active pull-right custom-active draft text-success">Active</small>
                                            <span class="btn-deactive pull-right custom-active draft text-danger" v-else>Deactive</span>
                                            </span>
                                            <span class="pul-left col-12">
                                              <h5 class="professional"><span>{{ location3.departmentName }}</span>
                                              </h5>
                                            </span>
                                          </div>
                                        </b-row>
                                        <b-row class="pb-2">
                                          <div>
                                            <span>
                                              <img :src="rolesImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                            </span>
                                              <span class="bg-grey"><span class="bg-grey-btn"><span> {{ location3.supervisor }} </span></span></span>
                                          </div>
                                        </b-row>
                                        <b-row class="pb-2">
                                          <div class="rxx" style="{align-items: center;  display: flex; margin-top: 0;}">
                                            <span>
                                              <img :src="staffImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                            </span>
                                            <div class="row" v-if="location3.departments.length">
                                              <b-col class="cc" v-for="dept in location3.departments" :key="k">
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ dept.DeptName }} {{ (dept.DepEmpCount) }}</span></span>
                                            </span>
                                              </b-col>
                                            </div>
                                          </div>
                                        </b-row>
                                        <template #footer>
                                          <b-button size="sm" variant="outline-secondary" v-on:click="
                                            manageAccount(location3.departmentId)
                                          ">Manage Offices</b-button>
                                          <span class="pull-right pt-1 px-2 more-btn">
                                              <div class="dropdown">
                                                <button class="btn btn-menu btn-secondary pull-right"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </button>
                                                <ul
                                                  class="dropdown-menu custom-dropdown"
                                                  aria-labelledby="custom-dropdown"
                                                >
                                                  <li class="unarch-drop">
                                                    <a class="dropdown-item cutom-dropdown-item active" href="#">Delete</a>
                                                  </li>
                                                </ul>
                                              </div>
                                          </span>
                                        </template>
                                      </b-card>
                                    </b-col>
                                  </div>
                                  <div v-else>
                                    <div class="text-center mt-5">
                                      <img :src="noReferral" />
                                    </div>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-container>
                        </div>
                        </b-card-text>
                      </b-tab>
                       <b-tab title="location 4">
                        <b-card-text>
                          <div class="main-wrap">
                            <b-container fluid>
                              <b-row v-if="documentsArr">
                                <b-col>
                                  <div class="pt-2 card-wrap manage-wrap row" v-if="documentsArr.location4.length">
                                    <b-col md="3  mt-3" v-for="location4 in documentsArr.location4" :key="location4">
                                      <b-card>  
                                        <span class="border2-span"> </span>
                                        <b-row class="mb-2">
                                          <div class="pl-1">
                                            <span class="pul-left col-12">
                                              <span class="text-end col-6"><img :src="departmentsImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                                Department</span>                                                                                                      </span>
                                            <span class="text-end col-6"><small v-if="location4.departmentStatus=='active'" class="btn-active pull-right custom-active draft text-success">Active</small>
                                            <span class="btn-deactive pull-right custom-active draft text-danger" v-else>Deactive</span>
                                            </span>
                                            <span class="pul-left col-12">
                                              <h5 class="professional"><span>{{ location4.departmentName }}</span>
                                              </h5>
                                            </span>
                                          </div>
                                        </b-row>
                                        <b-row class="pb-2">
                                          <div>
                                            <span>
                                              <img :src="rolesImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                            </span>
                                              <span class="bg-grey"><span class="bg-grey-btn"><span> {{ location4.supervisor }} </span></span></span>
                                          </div>
                                        </b-row>
                                        <b-row class="pb-2">
                                          <div class="rxx" style="{align-items: center;  display: flex; margin-top: 0;}">
                                            <span>
                                              <img :src="staffImage" class="lawFirm lawFirm-svg-custom" alt="Float Legal 2.0"/>
                                            </span>
                                            <div class="row" v-if="location4.departments.length">
                                              <b-col class="cc" v-for="dept in location4.departments" :key="k">
                                                  <span class="bg-grey"><span class="bg-grey-btn"><span>{{ dept.DeptName }} {{ (dept.DepEmpCount) }}</span></span>
                                            </span>
                                              </b-col>
                                            </div>
                                          </div>
                                        </b-row>
                                        <template #footer>
                                          <b-button size="sm" variant="outline-secondary" v-on:click="
                                            manageAccount(location4.departmentId)
                                          ">Manage Offices</b-button>
                                          <span class="pull-right pt-1 px-2 more-btn">
                                              <div class="dropdown">
                                                <button class="btn btn-menu btn-secondary pull-right"
                                                  type="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </button>
                                                <ul
                                                  class="dropdown-menu custom-dropdown"
                                                  aria-labelledby="custom-dropdown"
                                                >
                                                  <li class="unarch-drop">
                                                    <a class="dropdown-item cutom-dropdown-item active" href="#">Delete</a>
                                                  </li>
                                                </ul>
                                              </div>
                                          </span>
                                        </template>
                                      </b-card>
                                    </b-col>
                                  </div>
                                  <div v-else>
                                    <div class="text-center mt-5">
                                      <img :src="noReferral" />
                                    </div>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-container>
                        </div>
                        </b-card-text>
                      </b-tab>
                    </b-tabs>
                  </b-card>
            </b-card-text>
            </b-tab>
            <b-tab title="Staff" @click="btnName = 'Create Staff'">
            <b-card-text>Staff</b-card-text>
            </b-tab>
            <b-tab title="Roles" @click="btnName = 'Create Roles'">
            <b-card-text>Roles</b-card-text>
            </b-tab>
            <b-tab title="Admins" @click="btnName = 'Create Admins'">
            <b-card-text>Admins</b-card-text>
            </b-tab>
            <b-tab title="Permissions" @click="btnName = 'Create Permissions'">
            <b-card-text>Permissions</b-card-text>
            </b-tab>
             <!-- <b-col>
              <h1> ABc</h1>
            </b-col> -->
        </b-tabs>
      </div>
    </b-container>
</template>
<script>
import headerTemplate from "@/components/LawFirmInfo/HeaderLawFirm.vue";
import lawFirmMenu from '@/components/LawFirmInfo/Shared/LawFirmMenu.vue';
import backgroundImg from '@/assets/images/Icon/LawFirm/images/Web.svg';
import profileImage from "@/assets/images/Avatars/Profile.png";
import noReferral from '@/assets/images/no-referrals.svg';
import lawOfficeImage from '@/assets/images/Icon/LawFirm/icons/LawOffices.svg';
import locationImg from '@/assets/images/Icon/Location.svg';
import emailImage from "@/assets/images/Icon/LawFirm/icons/Mail.svg";
import phoneImage from "@/assets/images/Icon/LawFirm/icons/Phone.svg";
import rolesImage from "@/assets/images/Icon/LawFirm/icons/Roles.png";
//import AddBusiness from '@/components/LawFirmInfo/CreateBusinessAccount.vue';
import departmentsImage from "@/assets/images/Icon/LawFirm/icons/Departments.svg";
import staffImage from "@/assets/images/Icon/LawFirm/icons/Staff.svg";



export default {
  name: "FirmInfo",
  components: {
    headerTemplate,
    backgroundImg,
    profileImage,
    lawFirmMenu,
    noReferral,
    lawOfficeImage,
    locationImg,
    emailImage,
    phoneImage,
    rolesImage,
  //  AddBusiness,
    departmentsImage,
    staffImage
  },
  mounted(){},
  data(){
    return{
      viewOwnerDetails: false,
      btnName: "Create Law Office",
      backgroundImg: backgroundImg,
      profileImage: profileImage,
      departmentsImage: departmentsImage,
      noReferral: noReferral,
      lawOfficeImage: lawOfficeImage,
      locationImg: locationImg,
      phoneImage: phoneImage,
      emailImage: emailImage,
      staffImage: staffImage,
      rolesImage: rolesImage,
      officesArr: {
        "satelliteOffice": [
        {
          "branchId": 1,
          "branchName": "Pearson Hardman Asso",
          "officeStatus": "active",
          "email": "floatLagal1@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png",
          "timing": "10:00AM - 17:00 PM",
          "location": "hongkong, Japan",
          "city": "hongkong",
          "country": "Japan",
          "account": [
            {
            "accountId": 1,
            "accountName":"Accounts"
            },
            {
               "accountId": 2,
            "accountName":"Legal"
            },
            {
               "accountId": 3,
               "accountName":"Attorney"
            },
            {
               "accountId": 4,
               "accountName":"others"
            }
            ]
          },
        {
          "branchId": 2,
          "branchName": "Pearson Hardman Asso",
          "officeStatus": "deactive",
          "email": "floatLagal2@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png",
          "timing": "10:00AM - 17:00 PM",
          "location": "Alaska, US",
          "address": "Alaska, US",
          "city": "Alaska",
          "country": "US",
           "account": [
            {
            "accountId": 1,
            "accountName":"Accounts"
            },
            {
               "accountId": 2,
            "accountName":"Legal"
            },
            {
               "accountId": 3,
               "accountName":"Attorney"
            },
            {
               "accountId": 4,
               "accountName":"others"
            }
            ]
        }
        ],
       "office": [
        {
          "branchId": 4,
          "branchName": "Pearson Hardman Asso",
          "officeStatus": "active",
          "email": "floatLagal3@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png",
          "timing": "10:00AM - 17:00 PM",
          "location": "Alaska, US",
          "address": "Alaska, US",
          "city": "Alaska",
          "country": "US",
           "account": [
            {
            "accountId": 1,
            "accountName":"Accounts"
            },
            {
               "accountId": 2,
            "accountName":"Legal"
            },
            {
               "accountId": 3,
               "accountName":"Attorney"
            },
            {
               "accountId": 4,
               "accountName":"others"
            }
            ]
          },
        {
          "branchId": 3,
          "branchName": "Pearson Hardman Asso",
          "officeStatus": "deactive",
          "email": "floatLagal4@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png",
          "timing": "10:00AM - 17:00 PM",
          "location": "hongkong, Japan",
          "city": "hongkong",
          "country": "Japan",
           "account": [
            {
            "accountId": 1,
            "accountName":"Accounts"
            },
            {
               "accountId": 2,
            "accountName":"Legal"
            },
            {
               "accountId": 3,
               "accountName":"Attorney"
            },
            {
               "accountId": 4,
               "accountName":"others"
            }
            ]
        }
        ],
      },
      documentsArr: {
        "location1": [
        {
          "departmentId": 1,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "active",
          "supervisor": "supervisor(2)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
        },
        {
          "departmentId": 2,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "deactive",
          "supervisor": "supervisor(3)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
        },
        {
          "departmentId": 3,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "deactive",
          "supervisor": "supervisor(4)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
        }
      ],
       "location2": [{
          "departmentId": 2,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "active",
          "supervisor": "supervisor(2)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ],
          },
        {
          "departmentId": 2,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "deactive",
          "supervisor": "supervisor(3)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
        }
          ],
         "location3":  [
          {
          "departmentId": 1,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "deactive",
          "supervisor": "supervisor(2)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
            },
        {
          "departmentId": 2,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "deactive",
          "supervisor": "supervisor(3)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
        },
        {
          "departmentId": 3,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "deactive",
          "supervisor": "supervisor(3)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
        }
            ],
         "location4" : [
          {
          "departmentId": 1,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "active",
          "supervisor": "supervisor(2)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
            },
        {
          "departmentId": 2,
          "departmentName": "Department of Legal Affairs",
          "departmentStatus": "deactive",
          "supervisor": "supervisor(3)",
          "departments": [
            {
            "deptId": 1,
            "DeptName":"Lawyers",
            "DepEmpCount": 12
            },
            {
            "deptId": 2,
            "DeptName":"abc",
            "DepEmpCount": 12
            },
            {
            "deptId": 3,
            "DeptName":"xyx",
            "DepEmpCount": 15
            },
            {
            "deptId": 4,
            "DeptName":"eee",
            "DepEmpCount": 10
            },
            {
            "deptId": 5,
            "DeptName":"fff",
            "DepEmpCount": 12
            }
            ]
        }
          ]
        },
    }
  },
  methods:{
     viewEditMode() {
      this.viewOwnerDetails = true
    }
  },
}
  </script>