<template>
  <div class="container-fluid main-container-bg p-4">
    <bread-crumb-case :tempTitle="tempTitle" />

    <!-- <loader v-if="isLoading" /> -->
<b-form @submit.prevent="onsubmit()">
    <div class="main-wrap-document">
      <b-container fluid>
        <b-row class="document-section">
          <b-col md="9">
            <b-row>
              <b-col cols="12" lg="6" md="12" class="px-4">
                <h1 class="title ml-5">Practice Name</h1>

                <p>Your Practice name will be displayed as you set it here</p>

                <h6><b>Practice name</b></h6>

                <div class="search-div w-100">
                  <span class="input-group-addon"></span>

                  <div class="search_form">
                    <b-form-input
                      id="input-search"
                      placeholder="Input form name"
                      v-model="practiceName"
                    ></b-form-input>
                     <span v-if="v$.practiceName.$error" class="mt5">
                    {{ v$.practiceName.$errors[0].$message }}
                  </span>
                  </div>
                </div>
              </b-col>

               <b-col cols="12" lg="6" md="12" class="px-4 mt-3 mt-lg-0 mt-md-3">
                <h6><b>Upload Practice Logo </b></h6>

                <p>Add your practice's logo for use on your Practice documents.</p>

                <form>
                  <input id="file2" type="file" />
                  <!-- <input id="file2" type="file" @change="getfile()" /> -->
                </form>
                    <!-- {{ practiceLogoName }} -->
              </b-col>
            </b-row>
          </b-col>

          <b-col md="3" class="document-seting-btn mt-3 mt-lg-0 mt-md-0">
            <button type="submit" class="btn btn-primary px-4 w-100"  >Save Profile</button>
          </b-col>
        </b-row>

        <b-row>
          <b-col> </b-col>
        </b-row>
      </b-container>
    </div>
    </b-form>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers, sameAs } from "@vuelidate/validators";
import CaseOverView from "@/components/Document/DocumentOverview.vue";
// import axios from 'axios';
// import {
//   form_api
// } from '@/main.js';
// import profileSide from "./profileSide";
export default {
  name: "documentcenter",

  components: {
    "bread-crumb-case": CaseOverView,
  },
 validations() {
    return {
      practiceName: {
        required: helpers.withMessage("Please enter Name", required),
      },
    }
  },
  data() {
    return {
      v$: useValidate(),
      tempTitle: "Document Settings",
      clientInfo: {
        caseStatus: "Pending",
        caseNumber: "FLC 464",
        attorneys: [
          {
            firstName: "sri",
            lastName: "Ragh",
          },
        ],
        caseManagers: [
          {
            firstName: "sri",
            lastName: "Ragh",
          },
        ],
        paralegals: [
          {
            firstName: "sri",
            lastName: "Ragh",
          },
        ],
      },
      // axios,
      practiceName:"",
      practiceLogo:'',
      // businessId :null,
      // practiceLogoName:"",
    };
  },

  mounted() {
      // let userBasicInformation = JSON.parse(localStorage.getItem("selectedDepartmentAndBusiness"))
      // this.businessId = userBasicInformation.businessName.businessId
  },
  computed: {},
  methods: {
      // getfile(){
      //   const file = document.querySelector('input[type=file]').files[0]
      //   this.practiceLogoName = document.querySelector('input[type=file]').files[0].name
      //   const reader = new FileReader();
      //   let rawImg;
      //   reader.onloadend = () => {
      //   rawImg = reader.result;
      //   this.practiceLogo =   rawImg
      //   }
      //   reader.readAsDataURL(file);
      //   //this.practiceLogo =   file  // console.log("practiceLogo",file)
      //   // console.log("rawImg",rawImg)

      // },
      // onsubmit(){
      //       this.v$.$validate();
      //      if (!this.v$.$error) {
      //     this.axios.post(`${form_api}forms/settings`, {
      //       name:this.practiceName,
      //       businessId: this.businessId,
      //       logo:this.practiceLogo
      //     }).then((data)=>{
      //           console.log(data)
      //     }).catch((e)=>{
      //         console.log(e)
      //     })
      //   }
      // }
  },
};
</script>

<style scope lang="scss">
.row.document-section p {
  font-size: 13px;
  color: #c5bfbf;
}

.row.document-section {
  background: #fafafc;
  padding: 20px;
  margin: 20px 10px;
  border-radius: 10px;
}

button#dropdown-1 {
  background: white;
  color: gray;
  padding: 5px 20px;
  border-radius: 10px;
  border: none;
}

.dropdown-toggle::after {
  vertical-align: 1px !important;
}

.title {
  color: #173e67;
  font-size: 30px;
  font-weight: 600;
}

.document-details-top-wrap.pt-3.align-center.mt-0 {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  background: #fff;
}

.case-info-section {
  padding: 0px !important;
}

.profile-image {
  width: 55px;
  height: 50px;
  border-radius: 10px;
}

.patient-list-ul {
  padding-left: 15px !important;

  li {
    list-style-type: none;

    h1 {
      color: #173e67;
      font-size: 26px;
    }

    h2 {
      font-size: 14px;
      font-weight: 400;
    }
  }
}

// .patient-name{
//   margin-left: 10px !important;
// }
.case-details-top-wrap {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  background: #fff;

  .status {
    color: #dca71e;
  }

  h2 {
    font-size: 14px;
    color: #173e67;
    font-weight: 600;
  }

  h1 {
    font-size: 16px;
    color: #173e67;
    font-weight: 600;
  }

  .created-date {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.5);
  }

  h5 {
    font-size: 14px;
    color: #173e67;
    font-weight: 600;

    span {
      font-weight: 500;
      color: rgb(173, 171, 171);
    }
  }
}

.case-details {
  padding: 15px;
  border: 2px solid #f1f1f5;
  border-radius: 10px;
}

.document-seting-btn button {
  position: absolute;
  bottom: 0px;
  width: 92%;
}

.document-seting-btn {
  position: relative;
}

input#file2 {
  display: inline-block;
  padding: 65px 0 0 0;
  box-sizing: border-box;
  background: url(/src/assets/images/Screenshot_21.png) center center no-repeat #e4e4e4;
  border-radius: 10px;
  background-color: #eef3fc;
  width: 100%;
}

::-webkit-file-upload-button {
  display: none;
}

.main-wrap-document {
  background: white;
  padding-top: 3px;
  padding-bottom: 10%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.document-section input {
  color: transparent;
}

.search_form #input-search {
  color: #dee2e6;
  position: relative;
  top: 0px;
  border-color: #dee2e6;
  border-radius: 10px !important;
  padding: 0px 20px;
}
.mt5 {
   color: #FF0000;
   top: 5px;
   position: relative;
   left: 5px;
 }
 @media only screen and (min-width:320px) and (max-width: 767px) {
 .document-seting-btn button {
    position: absolute;
    top: 0px;
    bottom: unset;
    width: 92% !important;
}
 }
</style>
