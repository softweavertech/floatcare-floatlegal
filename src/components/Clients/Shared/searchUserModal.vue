<template>
  <div class="search-staff-modal">
    <loader v-if="isLoading" />
    <form method="POST" @submit.prevent="searchUsers" autocomplete="off">
      <b-container fluid>
        <div class="row align-items-center py-3 border-bottom searchNav">
          <div class="col title">
            <h3 class="ml-3">Search & Select Client</h3>
          </div>
          <div class="col text-right searchUser">
            <img class="mr-3" :src="cancelImg" @click="closeSearchModel" />
          </div>
        </div>
        <div class="row">
          <div class="form-area pb-3  w-100">
            <perfect-scrollbar :suppressScrollY="true">
              <div class="searchdiv">
                <div class="row align-items-center py-3 searchInputs">
                  <div class="col col-4">
                    <div class="form-group">
                      <label for="firstName">First or Last Name</label>
                      <b-form-input
                        placeholder="Enter minimum 3 characters"
                        v-model="searchName"
                        class="form-control ml-3"
                        id="searchName"
                      ></b-form-input>
                    </div>
                  </div>
                  <div class="col col-2">
                    <div class="form-group">
                      <label for="phoneNumber">Phone Number</label>
                      <input
                        placeholder="eg: (411) 111-1111"
                        v-model="searchPhone"
                        class="form-control ml-3"
                        id="phone"
                        @input="acceptNumber"
                      />
                    </div>
                  </div>
                  <span class="searchOr">or</span>
                  <div class="col col-3">
                    <div class="form-group">
                      <label for="Email">Email</label>
                      <b-form-input
                        placeholder="Enter valid Email ID"
                        v-model="searchEmail"
                        class="form-control ml-3"
                        id="email"
                      ></b-form-input>
                    </div>
                  </div>
                  <div class="col mr-3">
                    <button
                      class="btn btn-create px-4 w-100"
                      id="search"
                      @click="searchUsers"
                      :disabled="
                        (searchName.length < 3 || searchPhone.length != 14) &&
                        (searchName.length < 3 || searchEmail.length < 3)
                      "
                    >
                      Search
                    </button>
                  </div>
                </div>
                <b-row class="searchCont" align-h="center" v-if="searched" >
                  <b-col cols="4">
                    <div class="search-nolist">
                      <img :src="searchListEmptyIcon"/>
                    </div>
                    <h4>Search for a {{ pageTitle }}</h4>
                    <p>
                      Search by First + Last Name &
                      <br />Phone or Email.
                    </p>
                  </b-col>
                </b-row>
    <div class="main-wrap">
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
                              <b-row>
                                <b-col class="text-center col-3 px-1">
                                  <div class="profile-image">
                                  
                                    <b-avatar
                                      rounded="lg"
                                      variant="info"
                                      src="https://placekitten.com/300/300"
                                      class="me-2"
                                      
                                    ></b-avatar>
                                  </div>
                                </b-col>
                                <b-col class="col-9 px-1">
                                  <div class="professional text-left">
                                    <p class="card-title mb-0 ">Yasaman Foroutan</p>
                                    <p class="card-subtitle text-muted">
                                    Mother
                                    </p>
                                  </div>
                                </b-col>
                        
                              </b-row>

                              <b-col class="more d-none">
                                <b-button variant="outline-light"> </b-button>
                              </b-col>
                              <b-col class="address">
                                <div class="card-add">
                                  <img class="my-2 ms-0 me-2" :src="staffAddress" />Aug 11, 2022
                                </div>
                                <div class="card-add">
                                  <img :src="emailIcon" /> martin@gmail.com
                                </div>
                                <div class="card-add">
                                  <img :src="phoneIcon" /> (465) 365 2648
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
                                :to="'/clients'"
                              >
                              Add
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
            </perfect-scrollbar>
          </div>
        </div>
        <!----footer---->
       
        </b-container>
      </form>
        
    </div>
</template>

<script>

import cancelImg from '@/assets/images/Icons/ic_cancel.svg';
import userImage from '@/assets/images/sridevi.jpg';
import noReferral from "@/assets/images/no-referrals.svg";
import listViewIcon from "@/assets/images/Icons/ic_listview.svg";
import gridViewIcon from "@/assets/images/Icons/ic_gridview.svg";
import profileIcon from "@/assets/images/Icons/ic_view_profile.svg";
import moreIcon from "@/assets/images/ic_more.svg";
import staffAddress from "@/assets/images/Icons/Date@3x.svg";
import leadershipIcon from "@/assets/images/Icons/ic_leadership.svg";
import phoneIcon from "@/assets/images/Icons/ic_phone_icon.svg";
import emailIcon from "@/assets/images/Icons/ic_email.svg";
import { FIND_ALL_STAFF_MEMBERS } from "@/graphql.js";
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers, sameAs } from "@vuelidate/validators";
export default {
  name: "searchUserModal",
  props: ["closeSearchModel", "hideSearchModel", 'modalTitle', 'addUserToSettings'],
  components: {
    
  },
  data() {
    return {
            v$: useValidate(),
      profileUrl: "",
      pageTitle: "User",
      pageHeader: "Add User",
      cancelImg: cancelImg,
      userImage: userImage,
      gridViewIcon: gridViewIcon,
      listViewIcon: listViewIcon,
      profileIcon: profileIcon,
      leadershipIcon: leadershipIcon,
      phoneIcon: phoneIcon,
      emailIcon: emailIcon,
      sortSettings: ["Type", "A-Z", "Z-A"],
      noReferral: noReferral,
      moreIcon: moreIcon,
      staffAddress: staffAddress,
      success: false,
      successMessage: "",
      uploadBtn: "Upload ",
      searchName: "",
      searchPhone: "",
      searchEmail: "",
    //   searchListEmptyIcon: searchListEmptyIcon,
      isSearched: false,
      fields: [
        {
          userName: "Sridevi Rapolu",
          role: "Nurse",
          email: "sridevi@yopmail.com",
          phone: "(789) 555-6456",
        },
        {
          userName: "Mani G",
          role: "Nurse",
          email: "mani.g@yopmail.com",
          phone: "(432) 555-6789",
        },
        {
          userName: "Vardhan C",
          role: "Nurse",
          email: "vardhan.c@yopmail.com",
          phone: "(555) 555-4848",
        },
        {
          userName: "Sri Ragh Ch",
          role: "Nurse",
          email: "sri.ragh@yopmail.com",
          phone: "(321) 555-4567",
        },
        {
          userName: "Srivani",
          role: "Nurse",
          email: "srivani@yopmail.com",
          phone: "(123) 555-1234",
        },
        {
          userName: "Saanvi",
          role: "Nurse",
          email: "saanvi@yopmail.com",
          phone: "(345) 345-5555",
        },
      ],
      businesstype: [{ text: 'Select One', value: null }, 'test1', 'test1', 'test1', 'test1'],
      closetime: [{ text: 'Select One', value: null }, 'test1', 'test1', 'test1', 'test1'],
      state: [{ text: 'Select state', value: null }, 'test1', 'test1', 'test1', 'test1'],
      role: [{ text: 'Select state', value: null }, 'test1', 'test1', 'test1', 'test1'],
      rolesapplicable: [{ text: 'Select state', value: null }, 'test1', 'test1', 'test1', 'test1'],
      show: true,
      form: {
        firstname: "",
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      checked: true,
    };
  },
  mounted() {
  },
  methods: {
    acceptNumber() {
      var x = this.searchPhone.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.searchPhone = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    onPhotoChange(e) {
      const file = e.target.files[0];
    
    this.profileUrl = URL.createObjectURL(file);
    },
    searchUsers() {
      this.searchResults ="";
      this.isLoading = true;
      this.$apollo
        .query({
          query: FIND_ALL_STAFF_MEMBERS,
          variables: {
            name: this.searchName,
            phone: this.searchPhone,
            email: this.searchEmail,
            firmType: this.organizationType,
            organizationId: 1,
          },
        })
        .then((data) => {
          this.isSearched = true;
          this.searchResults = data.data.findAllStaffMembers;
          console.log(this.searchResults);
        });
      this.isLoading = false;
    },
    onSubmit(event) {
      event.preventDefault();
      this.v$.$validate();
      if (!this.v$.$error) {
           this.axios.post(`/verify/email`, {
              email: this.email
          })
         .then(response => {
            if (response.status == 200) {
               this.newAccountDetails = {
                email: this.email,
                password: this.password
              }
              localStorage.setItem('newAccountDetails', JSON.stringify(this.newAccountDetails))
                this.$router.push("/account-owner");
            }
          })
           .catch(e => {
                     this.isUserExists = e.response.data.message

          })
        }
    },
  },
};
</script>
<style scoped lang="scss">
.card-add img {
    margin-left: -9px;
}
.form-select {
  color: gray;
  border-radius: 10px;
}
.offcanvas-end {
  width: 535px;
}
.form-switch {
  padding-left: 2.5em;
  float: right;
}
.px-4 {
  margin-bottom: 20px;
}
.gap-2 {
  padding-top: 20px;
}
.para p {
  color: RGBA(23, 62, 103, 0.6);
  font-size: 12px;
  font-weight: 500;
}
h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #171725;
  margin: 0;
}

.searchdiv h3 {
  font-size: 0.8rem;
  margin-left: 1.3rem;
  margin-top: 2rem;
  color: #173e67;
}

.searchHeader h6 {
  margin-top: 20px;
  margin-bottom: 25px;
}

.searchUser .cancel-btn:hover {
  text-decoration: none;
}
/*-------add staff css-----*/
.offcanvas-end {
  top: 0;
  right: 0;
  width: 603.78px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
}
.offcanvas-header {
  h3 {
    font-size: 26px;
    font-weight: 600;
    color: #173e67;
    padding-left: 20px;
    padding-top: 20px;
  }
}
.offcanvas-body {
  .mx-auto {
    margin-left: 0px;
    .pt-4 {
      padding-top: 10px;
    }
  }
  .patientInputs {
    padding-top: 20px;
  }
}
.searchUser {
  padding-right: 15px;

  img {
    margin-right: 1rem !important;
    float: right;
    width: 44px;
    height: 44px;
  }
}
.successMessage {
  position: relative;
  padding: 0% 0%;
  text-align: center;
  width: 100%;
}
.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}
img {
  vertical-align: middle;
  border-style: none;
}
form {
  label {
    font-size: 12px;
    font-weight: 600;
    color: #4c5775;
    text-transform: uppercase;

    small {
      color: #92929d;
      font-size: 0.75rem;
      display: block;
      text-transform: initial;
      padding-bottom: 5px;
    }
  }
  a {
    text-decoration: none;
  }
  .upload-btn {
    color: RGBA(23, 62, 103, 0.4);
    border: RGBA(23, 62, 103, 0.4) solid 1px;
    border-radius: 5px;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 12px;
    padding: 2px 10px 1px 10px;
    background: RGB(239, 243, 246);
    text-transform: uppercase;
  }
}
.align-self-center {
  align-self: center !important;
}
.avatarDiv{
  padding-bottom: 25px;
  .avat-img {
  width: 102px;
  height: 102px;
  // background: #0fc221;
  border-radius: 20px;
  }

}


/*-------End add staff css-----*/
.main-wrap {
  padding: 0;
}

h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #171725;
  margin: 0;
}

.ps {
  height: 475px;
}

.addDepartment button {
  font-size: 12px;
  font-weight: 200;
}

form label {
  font-size: 12px;
  font-weight: 600;
  color: #4c5775;
  text-transform: uppercase;
}

.addDepartment .btn {
  background-color: #0470ff;
  font-size: 12px;
  font-weight: 400;
}

.resendInvite {
  font-size: 14px;
  font-weight: 400;
}

.resendInvite .btn {
  background-color: #0470ff;
  font-size: 12px;
  font-weight: 400;
  margin-left: 4%;
}

.addDepartment .btn:hover,
.resendInvite .btn:hover {
  background-color: #fff;
}

.addDepartment svg {
  background-color: #fff;
  border-radius: 15px;
  width: 15px;
  height: 15px;
}

.depart-container {
  border: 1px solid #e2e2ea;
  border-radius: 20px;
  padding: 20px;
  margin-top: 15px;

  .submit-btn {
    background-color: #5564ac;
    padding: 9px 40px;
    font-weight: 400;
    font-size: 12px;

    &:hover {
      color: white;
    }
  }
}

.setPrimary h3 {
  font-size: 16px;
  font-weight: 600;
  color: #517193;
}

.inviteAdd .cancel-btn:hover {
  text-decoration: none;
}

.successMessage {
  position: relative;
  padding: 0% 0%;
  text-align: center;
  width: 100%;
}

.form-group .name {
  text-transform: capitalize;
}

.sub-role {
  padding-right: 15px !important;
}

.ui.selection.dropdown {
  min-height: 14px;
  height: auto !important;
}

.worksiteOptions .form-control {
  text-transform: capitalize;
}
.upload-btn-wrap {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.upload-btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrap input[type="file"] {
  font-size: 100px;
  position: absolute;
  height: 24px;
  width: 120px;
  left: 0;
  top: 0;
  opacity: 0;
}
.blue-btn {
    padding: 4px 15px;
    border-radius: 9px;
    text-align: left !important;
    float: left;
   background:#3E8ACC;
}
</style>
