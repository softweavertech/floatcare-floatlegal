<style src="@vueform/multiselect/themes/default.css"></style>
<style>
button.createbus-btn {
  padding: 5px 50px;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 1px solid gray;
  padding: 6px 20px;
  border-radius: 8px;
}

.upload-btn-wrapper input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.img-txt {
  font-size: 12px;
}
.form-control-lg{
  padding: 0 auto;
}
small.text-muted.mb-4.comment {
    text-align: center;
    margin-bottom: 0 !important;
    font-weight: 700;
    margin-top: 300px;
}
.row.mt-4 {
    border: 1px solid #ced4da;
    border-radius: 4%;
    margin: 0 auto;
}
.col-sm-4.col-md-4.col-lg-10 span {
    vertical-align: -webkit-baseline-middle;
}
h2#offcanvasRightLabel {
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 0.18;
}
</style>
<template>
  <div
    class="offcanvas offcanvas-end w-45 p-1"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h2 id="offcanvasRightLabel">Account Owner Details</h2>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <b-form @submit="onSubmit" v-show="ShowCreateBusiness">
        <b-row class="mb-4">
          <b-col sm="3" md="3" lg="3">
            <img :src="profileImage" alt="Profile" />
          </b-col>
          <b-col sm="9" md="9" lg="9">
            <div>
              <p class="fw-bold m-0">Upload your photo</p>
            </div>
            <div class="text-muted">
              <small class="img-txt"
                >Photo Should be less than 200KB and 300px x 300px</small
              >
            </div>
            <div class="upload-btn-wrapper mt-2">
              <b-button class="btn" variant="secondary">Upload</b-button>
              <input type="file" name="photo" />
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="6">
            <b-form-group
              id="input-group-firstname"
              label="First name"
              label-for="input-3"
            >
              <b-form-input
                id="input-firstname"
                v-model="firstname"
                type="text"
                placeholder="Input First name"
                required
              ></b-form-input>
              <span v-if="v$.firstname.$error" class="mt-5 text-danger">
                    {{ v$.firstname.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
          <b-col sm="6" offset-sm="2" md="6" offset-md="0">
            <b-form-group
              id="input-group-lastname"
              label="Last name"
              label-for="input-lastname"
            >
              <b-form-input
                id="input-lastname"
                v-model="lastname"
                type="text"
                placeholder="Input Last name"
                required
              ></b-form-input>
               <span v-if="v$.lastname.$error" class="mt-5 text-danger">
                    {{ v$.lastname.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" offset-sm="2" md="6" offset-md="0">
            <b-form-group
              id="input-group-title"
              label="Title"
              label-for="input-title"
            >
              <b-form-input
                id="input-title"
                v-model="title"
                type="text"
                placeholder="Input Title"
                required
              ></b-form-input>
               <span v-if="v$.title.$error" class="mt-5 text-danger">
                    {{ v$.title.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
          <b-col sm="6" offset-sm="2" md="6" offset-md="0">
            <b-form-group
              id="input-group-speciality"
              label="Speciality"
              label-for="input-speciality"
            >
              <b-form-select
                id="input-speciality"
                v-model="speciality"
                :options="speciality"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="2" offset-sm="2" md="2" offset-md="0">
            <b-form-group
              id="input-group-country"
              label="Work"
              label-for="input-country"
            >
             <country-select
                class="form-select"
                v-model="country"
                :country="'US'"
                topCountry="US"
              />          
               <span v-if="v$.country.$error" class="mt-5 text-danger">
                    {{ v$.country.$errors[0].$message  }}
                </span>
            </b-form-group>    
            </b-col>
          <b-col sm="4" md="4">
            <b-form-group
              id="input-group-phonenumber"
              label="Phone number*"
              label-for="input-3"
            >
              <b-form-input
                id="input-phonenumber"
                v-model="phonenumber"
                type="text"
                placeholder="Input Phone number"
                required
              ></b-form-input>
              <span v-if="v$.phonenumber.$error" class="mt-5 text-danger">
                    {{ v$.phonenumber.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
          <b-col sm="6" offset-sm="2" md="6" offset-md="0">
            <b-form-group
              id="input-group-email"
              label="Work Email:"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
              <span v-if="v$.email.$error" class="mt-5 text-danger">
                    {{ v$.email.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
        </b-row>
         <b-row>
          <b-col sm="6" md="6">
            <b-form-group
              id="input-group-personalphonenumber"
              label="Personal Phone*"
              label-for="input-3"
            >
              <b-form-input
                id="input-personalphone"
                v-model="personalphonenumber"
                type="text"
                placeholder="Input Personal Phone number"
                required
              ></b-form-input>
              <span v-if="v$.personalphonenumber.$error" class="mt-5 text-danger">
                    {{ v$.personalphonenumber.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
          <b-col sm="6" offset-sm="2" md="6" offset-md="0">
            <b-form-group
              id="input-group-personalemail"
              label="Personal Email:"
              label-for="input-personalemail"
            >
              <b-form-input
                id="input-personalemail"
                v-model="email"
                type="email"
                placeholder="Enter personal email"
                required
              ></b-form-input>
              <span v-if="v$.personalemail.$error" class="mt-5 text-danger">
                    {{ v$.personalemail.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
        </b-row>
        <div id="app">
            <v-app id="inspire">
              <v-form>
                <v-container>
                  <v-row>        
                    <v-col cols="12" sm="6" md="3">
                      <vue-tel-input v-bind="bindProps" v-model="phone" v-on:country-changed="countryChanged"></vue-tel-input>
                    </v-col>
                  </v-row>
                </v-container>
                <v-btn
                  color="success"
                  @click="submit"
                >
                  
                </v-btn>
              </v-form>
            </v-app>
          </div>


        <b-row class="mt-4">
          <b-col sm="4" md="4" lg="10">
            <span class="fs-6 mt-3 mb-4">Do you want to add this person as admin?</span>
          </b-col>
          <b-col sm="2" md="2" lg="2" >
            <b-form-checkbox switch size="lg"></b-form-checkbox>
          </b-col>
        </b-row>
        <div class="d-grid gap-2">
          <small class="text-muted mb-4 comment"
            >*Additional account owner can be added later</small>
          <b-button type="button" variant="primary" v-on:click="onSubmit()"
            >Create account</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers, sameAs } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import profileImage from "@/assets/images/Avatars/Profile.png";
export default {
  components: {
    Multiselect,
    profileImage
  },
  validations() {
      return {
         firstname: {
            required: helpers.withMessage("Please Select First Name", required),
            // businessName: helpers.withMessage("Plese fill ", email),
          },
          lastname:{
             required: helpers.withMessage("Please Select Last Name", required),
          },
          title:{
             required: helpers.withMessage("Please Select Title", required),
          },
          speciality:{
             required: helpers.withMessage("Please Select Speciality", required),
          },
          phonenumber:{
             required: helpers.withMessage("Please Enter Phone Number", required),
          },
          email:{
             required: helpers.withMessage("Please Enter Email", required),
          },
          personalphonenumber:{
             required: helpers.withMessage("Please Enter Personal Phone Number", required),
          },
          personalemail:{
             required: helpers.withMessage("Please Enter Personal Email", required),
          },
           country:{
            required: helpers.withMessage("Please Select Country", required),
          }
        }
    },
  data() {
    return {
      profileImage:profileImage,
      v$:useValidate(),
      form: { email: "", name: "", checked: [] },
      phonenumber:'',
      email:'',
      personalphonenumber:'',
      personalemail:'',
      firstname:'',
      lastname:'',
      title:'',
      country:"us",
      speciality: [
        { text: "Select One", value: null },
        "test1",
        "test1",
        "test1",
        "test1",
      ],
      ShowCreateBusiness: true,
      ShowInsurancesAccepted: false,
    };
  },

  methods: {
    onSubmit(event) {
            this.v$.$validate();
      if (!this.v$.$error) {
      console.log(JSON.stringify(this.form));
      }
    },
  },
};
</script>
