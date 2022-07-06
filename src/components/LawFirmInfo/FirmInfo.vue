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
button.btn.btn-outline-secondary {
    float: right;
}
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
</style>
<template>
    <b-container fluid class="main-container-bg p-4">
      <div class="main-card card overflow-hidden p-4 bg-light">
        <headerTemplate />
          <b-row class="mt-5">
            <b-col cols="6" md="6" lg="6" class="text-left fw-bold">
              <h3 class="text-left fw-bold">Account Owner</h3>
            </b-col>
            <b-col cols="6" md="6" lg="6" class="d-flex justify-content-end" >
            <b-button class="px-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="@/assets/images/Icon/LawFirm/icons/Add.png" />Create Account Owner</b-button>
          </b-col>
          </b-row>           
          <b-row class="guter-x p-4" v-if="ownersArr">
              <b-col md="6" sm="12" lg="3" v-for="index,k in ownersArr" :key="k">
                <b-card class="prefered-provider">
                            <b-row class="mb-2">
                              <b-col cols="2" sm="1" md="3" lg="2">
                                <img :src="profileImage" alt="Profile" />
                              </b-col>
                              <b-col  lg="8" cols="8">
                                <h6 class=" ml-auto m-0">{{ index.firstName + " " + index.lastName }}</h6>
                              </b-col>
                              <b-col  lg="2" cols="2">
                               <!-- <span class="account-icon" @click="viewEditMode">
                               <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                     </span> -->
                                  <div class="dropdown">
                                    <button
                                      class="btn btn-menu btn-secondary pull-right"
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
                                        <a
                                          class="dropdown-item cutom-dropdown-item active"
                                          href="#"
                                          >Delete</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col cols="2">
                                <svg width="33px" height="32px" viewBox="0 0 33 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <title>Group 10</title>
                                  <g id="Business-Location" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                      <g id="Business-Location/All-business-Location" transform="translate(-526.000000, -800.000000)">
                                          <g id="Group-13" transform="translate(133.000000, 658.000000)">
                                              <g transform="translate(4.000000, 4.000000)" id="Group-12-Copy">
                                                  <g transform="translate(374.567697, 0.000000)">
                                                      <g id="Group-10" transform="translate(15.000000, 138.000000)">
                                                          <rect id="Rectangle" fill="#EFF3F6" x="0" y="0" width="32" height="32" rx="5"></rect>
                                                          <path d="M25.450805,10.5477086 L17.13118,17.8088214 C16.771225,18.1214714 16.228775,18.1214714 15.86882,17.8088214 L7.5529285,10.5404564 M13.9932635,16.1645071 L7.632719,22.5338571 M25.4452,22.4577143 L19.004865,16.16265 M8.9,23 L24.1,23 C25.14937,23 26,22.1685571 26,21.1428571 L26,11.8571429 C26,10.8314707 25.14937,10 24.1,10 L8.9,10 C7.8506585,10 7,10.8314707 7,11.8571429 L7,21.1428571 C7,22.1685571 7.8506585,23 8.9,23 Z" id="Shape" stroke="#173E67" stroke-width="2"></path>
                                                      </g>
                                                  </g>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                                </svg>
                              </b-col>
                              <b-col cols="10">
                                <h5 class="mt-2">{{ index.email }}</h5>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col cols="2" class="postion-phone">
                              <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <title>Group 16</title>
                                  <g id="Float-Legal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                      <g id="Client-cases/Referraks-/Search-Facility/Provider/Serching" transform="translate(-748.000000, -327.000000)">
                                          <g id="Group-6" transform="translate(132.000000, 198.000000)">
                                              <g id="Group-71" transform="translate(30.000000, 26.000000)">
                                                  <g id="Group-16" transform="translate(586.000000, 103.000000)">
                                                      <rect id="Rectangle" fill="#EFF3F6" x="0" y="0" width="19" height="18" rx="5"></rect>
                                                      <g id="Group-55" transform="translate(8.000000, 8.000000)">
                                                          <rect id="Icon-Spacing" opacity="0.2" x="0" y="0" width="12" height="12" rx="5"></rect>
                                                          <g id="phone" transform="translate(6.000000, 2.000000)" stroke="#173E67" stroke-linecap="round" stroke-width="2">
                                                              <path d="M4,1 L8,1 M2,20 L10,20 C11.1046,20 12,19.1046 12,18 L12,2 C12,0.89543 11.1046,0 10,0 L2,0 C0.89543,0 0,0.89543 0,2 L0,18 C0,19.1046 0.89543,20 2,20 Z" id="Shape"></path>
                                                          </g>
                                                      </g>
                                                  </g>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                                </svg>
                              </b-col>
                              <b-col cols="10">
                                <h5 class="mt-2 p-1">{{ index.phone }}</h5>
                              </b-col>
                            </b-row>
                          </b-card>
                 </b-col>
          </b-row>
           <b-col class="login-container text-center" cols="12" md="12" lg="6" v-else-if ="!ownersArr">
                <img :src="backgroundImg" class="lawFirm mb-2" alt="Float Legal 2.0" />
          </b-col> 
            <Addstaff />
      </div>
    </b-container>
 
</template>
<script>
import headerTemplate from "@/components/LawFirmInfo/HeaderLawFirm.vue";
import Addstaff from '@/components/LawFirmInfo/CreateOwnerAccount.vue';
import backgroundImg from '@/assets/images/Icon/LawFirm/images/Web.svg';
import profileImage from "@/assets/images/Avatars/Profile.png";

export default {
  name: "FirmInfo",
  components: {
    headerTemplate,
    Addstaff,
    backgroundImg,
    profileImage
  },
  mounted(){
     this.getList();
  }, 
  data(){
    return{
      backgroundImg: backgroundImg,
      profileImage: profileImage,
      ownersArr : [{
          "ownerId": 1,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner1@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 2,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner2@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"    
        },
        {
          "ownerId": 3,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner3@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"    
        },
        {
          "ownerId": 4,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner4@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"    
        },
        {
          "ownerId": 5,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner5@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 6,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner6@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 7,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner7@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 8,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner8@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 9,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner9@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 10,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner10@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 11,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner11@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        },
        {
          "ownerId": 12,
          "firstName": "name",
          "lastName": "sirname",
          "email": "owner12@gmail.com",
          "phone": "9876543210",
          "image": "Profile.png"
        }
      ]  ,
      arr:[]
    }
  },
  methods:{
    getList(){
      console.log(this.ownersArr);
    }
  }
};                
  </script>