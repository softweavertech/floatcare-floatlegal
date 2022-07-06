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
    id="offcanvasRightDept"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h2 id="offcanvasRightLabel">Create Department</h2>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <b-form @submit="onSubmit" v-show="ShowCreateBusiness">
          <b-row>
            <b-col sm="12" offset-sm="2" md="12" offset-md="0">
            <b-form-group
              id="input-group-business"
              label="Select business"
              label-for="input-business"
            >
              <b-form-select
                id="input-business"
                v-model="bussiness"
                :options="business"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
          </b-row>
         <b-row>
          <b-col sm="12" md="12">
            <b-form-group
              id="input-group-DeptName"
              label="Department name"
              label-for="input-3"
            >
              <b-form-input
                id="input-DeptName"
                v-model="DeptName"
                type="text"
                placeholder="Input Department name"
                required
              ></b-form-input>
              <span v-if="v$.DeptName.$error" class="mt-5 text-danger">
                    {{ v$.DeptName.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
        </b-row>        
        <b-row>
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
            <b-col sm="2" offset-sm="2" md="2" offset-md="0">
             <b-form-group
              id="input-group-extn"
              label="Extn.*"
              label-for="input-3"
            >
              <b-form-input
                id="input-extn"
                v-model="Extension"
                type="text"
                placeholder="Input Extension number"
                required
              ></b-form-input>
              <span v-if="v$.extension.$error" class="mt-5 text-danger">
                    {{ v$.extension.$errors[0].$message  }}
                </span>
            </b-form-group>
              </b-col>
          <b-col sm="6" offset-sm="2" md="6" offset-md="0">
            <b-form-group
              id="input-group-email"
              label="Email:"
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
          <b-col sm="12" offset-sm="2" md="12" offset-md="0">
            <b-form-group
              id="input-group-speciality"
              label="Select Speciality"
              label-for="input-speciality"
            >
              <b-form-select
                id="input-speciality"
                v-model="specialitySelect"
                :options="speciality"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
         <b-row>
          <b-col sm="12" offset-sm="2" md="12" offset-md="0">
            <b-form-group
              id="input-group-description"
              label="Description"
              label-for="input-1"
            >
            <b-form-textarea
              id="input-description"
              v-model="text"
              placeholder="Enter something..."
              max-rows="6"
              style="height: 100px;"
            ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <div id="app">
            <v-app id="inspire">
              <v-form>               
                <v-btn
                  color="success"
                  @click="submit"
                >
                  
                </v-btn>
              </v-form>
            </v-app>
          </div>
     
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
         DeptName: {
            required: helpers.withMessage("Please Select First Name", required),
            // businessName: helpers.withMessage("Plese fill ", email),
          },
          speciality:{
             required: helpers.withMessage("Please Select speciality", required),
          },
          business:{
             required: helpers.withMessage("Please Select business", required),
          },
          phonenumber:{
             required: helpers.withMessage("Please Enter Phone Number", required),
          },
          extension:{
             required: helpers.withMessage("0000", required),
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
      extension:'',
      personalphonenumber:'',
      personalemail:'',
      DeptName:'',
      title:'',
      country:"us",
      business: [
        { text: "Select One", value: null },
        "test1",
        "test1",
        "test1",
        "test1",
      ],
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
