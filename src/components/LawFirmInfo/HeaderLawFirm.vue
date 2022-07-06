<style>
.container-fluid.fc-card {
  margin-left: 20px;
}
span.fc-avatar.fc-img-tit {
  padding: 6px;
  width: auto;
  margin: 15px 45px;
  text-align: center;
  display: block;
}
.fc-department {
  text-align: center;
  margin: 0 auto;
  display: block;
}
.fc-card-black {
  border: 1px solid #eff0f6;
  background: #eff0f6;
  border-radius: 5px;
  padding: 10px 5px;
}
.row.align-items-start .fc-avatar {
  margin-right: 10px;
  padding: 5px;
  font-size: 12px;
  border-radius: 4px;
  color: black;
  font-weight: 400;
}
.fc-avatar {
  color: #193b5a;
  background: #eff0f6;
}

h3.text-left.fw-bold {
  color: #193b5a;
}
/* .LawfirmInfo { 
    margin-bottom: 30px;
} */
.LawfirmInfo {
  opacity: 1;
  color: rgba(31, 61, 90, 1);
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.22px;
  text-align: left;
  line-height: 40px;
  margin-bottom: 30px;
}
.LawfirmInfo .align-items-start .fc-avatar img {
  width: 23px;
  margin-right: 10px;
}
.LawfirmInfo .align-items-start .col {
  max-width: 33.33% !important;
  color: #3d6083 !important;
  font-weight: 600;
}
.fl-avatar {
  text-align: center;
  display: block;
  margin-bottom: 20px;
}
.LawfirmInfo small.text-muted {
  font-size: 14px;
}
.fc-card-sm small.fw-bold {
  color: #173e67;
  font-size: 14px;
  line-height: 18px;
}
.justify-content-end .btn-secondary img {
  margin-right: 14px;
}
.justify-content-end .btn-secondary {
  background: transparent;
  color: #000;
}
.fc-cart button,
.fc-cart button:hover {
  font-weight: 600;
  color: #3d6083 !important;
  border: #4195ae 1px solid;
  padding: 5px 25px;
  background: transparent;
  font-size: 14px;
}
.fc-cart button img,
.fc-cart button img:hover {
  margin-right: 10px;
}
.fc-avatar {
  color: #193b5a;
  background: transparent;
}
img.lawFirm.lawFirm-svg-custom {
  width: 65px;
}
.LawfirmInfo .text-muted {
  max-width: 30% !important;
  color: #3d6083;
  font-size: 16px;
}
.LawfirmInfo .col.col.col-3.mt-3 {
  float: right;
  width: auto;
  right: 0;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #1f3d5a !important;
  background-color: transparent;
  border-color: transparent;
  font-size: 18px;
  font-weight: 500;
}
.nav-tabs .nav-link,
.nav-tabs .nav-item.show .nav-link {
  color: #3d6083 !important;
  background-color: transparent;
  border-color: transparent;
  font-size: 18px;
  font-weight: 500;
}
small.btn-active.pull-right.custom-active.draft.text-success {
  color: #74e790 !important;
}

</style>

<template>
  <!-- <b-container fluid class="main-container-bg p-4">
    <div class="main-card card overflow-hidden p-4 bg-light"> -->
  <b-row class="fc-cart mt-2 p-0 LawfirmInfo">
    <b-col class="col mt-3" cols="auto">
      <span class="fc-avatar"
        ><img
          :src="departmentlogo"
          class="lawFirm lawFirm-svg-custom"
          alt="Float Legal 2.0"
      /></span>
    </b-col>
    <b-col class="col col-8 mt-3" align-v="start">
      <span
        ><h3 class="text-left fw-bold">Person Hardman Associates</h3>
        <b-row align-v="start">
          <b-col>
            <span class="fc-avatar"
              ><img
                :src="lawOfficeImage"
                class="lawFirm lawFirm-svg-custom"
                alt="Float Legal 2.0"
              />
              <small class="col col-4 text-muted"
                >Houstan, TX, United States</small
              ></span
            ></b-col
          >
          <b-col>
            <span class="fc-avatar"
              ><img
                :src="emailImage"
                class="lawFirm lawFirm-svg-custom"
                alt="Float Legal 2.0"
              />
              <small class="col col-4 text-muted"
                >floatLegal123@gmail.com</small
              ></span
            ></b-col
          >
          <b-col>
            <span class="fc-avatar"
              ><img
                :src="phoneImage"
                class="lawFirm lawFirm-svg-custom"
                alt="Float Legal 2.0"
              />
              <small class="col col-4 text-muted">(458)585-6958</small></span
            ></b-col
          >
        </b-row>
      </span>
    </b-col>
    <b-col class="col col-3 mt-3">
      <!-- <button type="button" class="btn btn-info pull-right"
                        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                {{  btnName }}
                </button> -->
      <!-- <b-button class="px-4" v-if="btnName == 'Create Law Office'" @click="eveLawOffice()" ><img src="@/assets/images/Icon/LawFirm/icons/Add.png" />{{  btnName }}</b-button> -->
      <!-- <b-button
        class="px-4"
        v-if="btnName == 'Create Law Office'"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        ><img src="@/assets/images/Icon/LawFirm/icons/Add.png" />{{
          btnName
        }}</b-button
      >
      <b-button
        class="px-4"
        v-if="btnName == 'Create Departments'"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        ><img src="@/assets/images/Icon/LawFirm/icons/Add.png" />{{
          btnName
        }}</b-button> -->
      
            <b-button class="px-4"  v-if="btnName == 'Create Law Office'" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="@/assets/images/Icon/LawFirm/icons/Add.png" />{{  btnName }}</b-button>
            <b-button class="px-4"  v-if="btnName == 'Create Departments'" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightDept" aria-controls="offcanvasRightDept"><img src="@/assets/images/Icon/LawFirm/icons/Add.png" />{{  btnName }}</b-button>
            <div class="clearfix"></div>
    </b-col>
  </b-row>
  <b-row id="lawOfficeIgnored" >
    
      <b-col class="col col-2">
        <a
      href="/firm-info/lawoffice"
      class="py-3"
      title=""
      id="LawOffice"
    >
        <div class="fc-card-sm mb-2">
          <span class="fl-avatar fc-img-tit"
            ><img
              :src="lawOfficeImage"
              class="lawFirm lawFirm-svg-custom"
              alt="Float Legal 2.0"
          /></span>
          <small class="fw-bold fc-department">Law Offices</small>
          <div class="fc-card-black text-center mt-2 mb-2">
            <small class="fw-bold">View Law Offices</small>
          </div>
        </div></a>
      </b-col>
    
    
      <b-col class="col col-2">
        <a href="/firm-info/lawoffice" class="py-3" title="" id="LawDep">
        <div class="fc-card-sm mb-2">
          <span class="fl-avatar fc-img-tit"
            ><img
              :src="departmentsImage"
              class="lawFirm lawFirm-svg-custom"
              alt="Float Legal 2.0"
          /></span>
          <small class="fw-bold fc-department">Departments</small>
          <div class="fc-card-black text-center mt-2 mb-2">
            <small class="fw-bold">View Departments</small>
          </div>
        </div>
        </a>
       </b-col>
 
      <b-col class="col col-2">
        <a href="/firm-info/lawoffice" class="py-3" title="" id="LawStaff">
        <div class="fc-card-sm mb-2">
          <span class="fl-avatar fc-img-tit"
            ><img
              :src="staffImage"
              class="lawFirm lawFirm-svg-custom"
              alt="Float Legal 2.0"
          /></span>
          <small class="fw-bold fc-department">Staff</small>
          <div class="fc-card-black text-center mt-2 mb-2">
            <small class="fw-bold">View Staff</small>
          </div>
        </div>
        </a>
      </b-col>
      <b-col class="col col-2">
        <a href="/firm-info/lawoffice" class="py-3" title="" id="LawRoles">
        <div class="fc-card-sm mb-2">
          <span class="fl-avatar fc-img-tit"
            ><img
              :src="rolesImage"
              class="lawFirm lawFirm-svg-custom"
              alt="Float Legal 2.0"
          /></span>
          <small class="fw-bold fc-department">Roles</small>
          <div class="fc-card-black text-center mt-2 mb-2">
            <small class="fw-bold">View Roles</small>
          </div>
        </div>
      </a>
      </b-col>
      <b-col class="col col-2">
        <a href="/firm-info/lawoffice" class="py-3" title="" id="LawAdmins" >
        <div class="fc-card-sm mb-2">
          <span class="fl-avatar fc-img-tit"
            ><img
              :src="adminsImage"
              class="lawFirm lawFirm-svg-custom"
              alt="Float Legal 2.0"
          /></span>
          <small class="fw-bold fc-department">Admins</small>
          <div class="fc-card-black text-center mt-2 mb-2">
            <small class="fw-bold">View Admins</small>
          </div>
        </div>
        </a>
      </b-col>
      <b-col class="col col-2">
      <a href="/firm-info/lawoffice" class="py-3"  title="" id="LawPermission" >
        <div class="fc-card-sm mb-2">
          <span class="fl-avatar fc-img-tit"
            ><img
              :src="permissionsImage"
              class="lawFirm lawFirm-svg-custom"
              alt="Float Legal 2.0"
          /></span>
          <small class="fw-bold fc-department">Permissions</small>
          <div class="fc-card-black text-center mt-2 mb-2">
            <small class="fw-bold">View Permissions</small>
          </div>
        </div>
        </a>
      </b-col>
     
  </b-row>
  
  <AddBusiness />
  <AddDepartment />
  <!-- </div>
  </b-container> -->
</template>
<script>
import permissionsImage from "@/assets/images/Icon/LawFirm/icons/Permissions.png";
import adminsImage from "@/assets/images/Icon/LawFirm/icons/Admins.png";
import rolesImage from "@/assets/images/Icon/LawFirm/icons/Roles.png";
import staffImage from "@/assets/images/Icon/LawFirm/icons/Staff.png";
import departmentsImage from "@/assets/images/Icon/LawFirm/icons/Departments.png";
import lawOfficeImage from "@/assets/images/Icon/LawFirm/icons/LawOffices.svg";
import departmentlogo from "@/assets/images/Icon/LawFirm/icons/holder.png";
import emailImage from "@/assets/images/Icon/LawFirm/icons/Email.svg";
import phoneImage from "@/assets/images/Icon/LawFirm/icons/Phone.svg";
import AddBusiness from "@/components/LawFirmInfo/CreateBusinessAccount.vue";
import AddDepartment from "@/components/LawFirmInfo/CreateDepartment.vue";

export default {
  name: "FirmInfo",
  props: ["btnName"],
  components: {
    permissionsImage,
    adminsImage,
    rolesImage,
    staffImage,
    departmentsImage,
    lawOfficeImage,
    emailImage,
    phoneImage,
    AddBusiness,
    AddDepartment,
    departmentlogo,
  },
  data() {
    return {
      permissionsImage: permissionsImage,
      adminsImage: adminsImage,
      rolesImage: rolesImage,
      staffImage: staffImage,
      departmentsImage: departmentsImage,
      lawOfficeImage: lawOfficeImage,
      emailImage: emailImage,
      phoneImage: phoneImage,
      departmentlogo: departmentlogo,
    };
  },
  methods: {
    eveLawOffice() {
      //alert('gggg');
    },
    eveDepartments() {
      //alert('ig')
    },
  },
};
</script>
