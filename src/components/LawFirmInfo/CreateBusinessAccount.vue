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
.col-sm-6.col-md-6.pull-right {
    text-align: right;
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
      <h2 id="offcanvasRightLabel">Business Details</h2>
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
           <b-col sm="4" md="4" lg="12">
                <b-form-checkbox id="idSatelliteOffice" name="checkbox-satelliteOffice" :value="true" :unchecked-value="false">
                    <b-form-group label="is this a satellite office? " label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
              </b-col>
        </b-row>
        <b-row>
        <b-col sm="6" offset-sm="2" md="6" lg="12" offset-md="0">
            <b-form-group
              id="input-group-location"
              label=""
              label-for="input-location"
            >
              <b-form-input
                id="input-location"
                v-model="location"
                type="text"
                placeholder="Input location"
                required
              ></b-form-input>
               <span v-if="v$.location.$error" class="mt-5 text-danger">
                    {{ v$.location.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
        </b-row>
         <b-row>
        <b-col sm="6" offset-sm="2" md="6" lg="12" offset-md="0">
            <b-form-group
              id="input-group-businessName"
              label="Business Name"
              label-for="input-businessName"
            >
              <b-form-input
                id="input-businessName"
                v-model="businessName"
                type="text"
                placeholder="Input Business Name"
                required
              ></b-form-input>
               <span v-if="v$.businessName.$error" class="mt-5 text-danger">
                    {{ v$.businessName.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="6" lg="6">
            <b-form-group
              id="input-group-phone"
              label="Phone number*"
              label-for="input-3"
            >
              <b-form-input
                id="input-phone"
                v-model="phone"
                type="text"
                placeholder="Input Phone number"
                required
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
            </b-form-group>
          </b-col>
          <b-col sm="6" offset-sm="2" md="6" offset-md="0">
            <b-form-group
              id="input-group-email"
              label="Email*:"
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
          <b-col sm="6" md="6" lg="12">Practice Working Hours</b-col>
          <b-col sm="6" md="6" ><span>Days</span></b-col>  
          <b-col sm="6" md="6" class="pull-right"><span>Closed ?</span></b-col>
          </b-row>
          <b-row>
          <b-col sm="6" md="5" lg="3">
            <b-form-label>Monday</b-form-label>
            </b-col>
            <b-col sm="6" md="5" lg="3" >
              <b-form-input
                id="input-mfTiming"
                v-model="mfTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
          </b-col>
          <b-col sm="6" md="5" lg="1">
            <b-form-label> to </b-form-label>
            </b-col>
            <b-col  sm="6" md="5" lg="3">
              <b-form-input
                id="input-mtTiming"
                v-model="mtTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
             </b-col>
           <b-col sm="4" md="4" lg="2">
                <b-form-checkbox id="idMonday" name="checkbox-idMonday" :value="true" :unchecked-value="false">
                    <b-form-group label="" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
            </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="5" lg="3">
            <b-form-label>Tuesday</b-form-label>
            </b-col>
            <b-col sm="6" md="5" lg="3" >
              <b-form-input
                id="input-tfTiming"
                v-model="tfTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
          </b-col>
          <b-col sm="6" md="5" lg="1">
            <b-form-label> to </b-form-label>
            </b-col>
            <b-col  sm="6" md="5" lg="3">
              <b-form-input
                id="input-ttTiming"
                v-model="ttTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"                
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
             </b-col>
           <b-col sm="4" md="4" lg="2">
                <b-form-checkbox id="idTuesday" name="checkbox-idMonday" :value="true" :unchecked-value="false">
                    <b-form-group label="" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
            </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="5" lg="3">
            <b-form-label>Wednesday</b-form-label>
            </b-col>
            <b-col sm="6" md="5" lg="3" >
              <b-form-input
                id="input-wfTiming"
                v-model="wfTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
          </b-col>
          <b-col sm="6" md="5" lg="1">
            <b-form-label> to </b-form-label>
            </b-col>
            <b-col  sm="6" md="5" lg="3">
              <b-form-input
                id="input-wtTiming"
                v-model="wtTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"                
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
             </b-col>
           <b-col sm="4" md="4" lg="2">
                <b-form-checkbox id="idWednesday" name="checkbox-idMonday" :value="true" :unchecked-value="false">
                    <b-form-group label="" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
            </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="5" lg="3">
            <b-form-label>Thursday</b-form-label>
            </b-col>
            <b-col sm="6" md="5" lg="3" >
              <b-form-input
                id="input-thfTiming"
                v-model="thfTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
          </b-col>
          <b-col sm="6" md="5" lg="1">
            <b-form-label> to </b-form-label>
            </b-col>
            <b-col  sm="6" md="5" lg="3">
              <b-form-input
                id="input-thtTiming"
                v-model="thtTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"                
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
             </b-col>
           <b-col sm="4" md="4" lg="2">
                <b-form-checkbox id="idMonday" name="checkbox-idMonday" :value="true" :unchecked-value="false">
                    <b-form-group label="" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
            </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="5" lg="3">
            <b-form-label>Friday</b-form-label>
            </b-col>
            <b-col sm="6" md="5" lg="3" >
              <b-form-input
                id="input-mfTiming"
                v-model="ffTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
          </b-col>
          <b-col sm="6" md="5" lg="1">
            <b-form-label> to </b-form-label>
            </b-col>
            <b-col  sm="6" md="5" lg="3">
              <b-form-input
                id="input-mtTiming"
                v-model="ftTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"                
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
             </b-col>
           <b-col sm="4" md="4" lg="2">
                <b-form-checkbox id="idMonday" name="checkbox-idMonday" :value="true" :unchecked-value="false">
                    <b-form-group label="" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
            </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="5" lg="3">
            <b-form-label>Saturday</b-form-label>
            </b-col>
            <b-col sm="6" md="5" lg="3" >
              <b-form-input
                id="input-sfTiming"
                v-model="sfTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
          </b-col>
          <b-col sm="6" md="5" lg="1">
            <b-form-label> to </b-form-label>
            </b-col>
            <b-col  sm="6" md="5" lg="3">
              <b-form-input
                id="input-stTiming"
                v-model="stTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"                
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
             </b-col>
           <b-col sm="4" md="4" lg="2">
                <b-form-checkbox v-model="checkedMonday"  @click="checked($event)">
                    <b-form-group label="" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
            </b-col>
        </b-row>
        <b-row>
          <b-col sm="6" md="5" lg="3">
            <b-form-label>Sunday</b-form-label>
            </b-col>
            <b-col sm="6" md="5" lg="3" >
              <b-form-input
                id="input-sufTiming"
                v-model="sufTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
          </b-col>
          <b-col sm="6" md="5" lg="1">
            <b-form-label> to </b-form-label>
            </b-col>
            <b-col  sm="6" md="5" lg="3">
              <b-form-input
                id="input-sutTiming"
                v-model="sutTiming"
                type="text"
                placeholder=""
                :disabled="isDisabled"               
              ></b-form-input>
              <span v-if="v$.phone.$error" class="mt-5 text-danger">
                    {{ v$.phone.$errors[0].$message  }}
                </span>
             </b-col>
           <b-col sm="4" md="4" lg="2">
                <b-form-checkbox id="idMonday" name="checkbox-idMonday" >
                    <b-form-group label="" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
            </b-col>
        </b-row>


        <div id="app">
            <v-app id="inspire">
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="3">
                      <vue-tel-input v-bind="bindProps" v-model="phone" v-on:country-changed="countryChanged" ></vue-tel-input>
                    </v-col>
                  </v-row>
                </v-container>
                <v-btn
                  color="success"
                  @click="submit"
                >
                  submit
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
         location: {
            required: helpers.withMessage("Please Enter location", required),
            },
          businessName:{
             required: helpers.withMessage("Please Fill Business Name", required),
          },
          phone:{
             required: helpers.withMessage("Please Enter Phone Number", required),
          },
          email:{
             required: helpers.withMessage("Please Enter Email", required),
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
      phone:'',
      email:'',
      location: '',
      businessName:'',
      checkedMonday:false,
      country:"us",
      ShowCreateBusiness: true,
      ShowInsurancesAccepted: false,
    };
  },
  computed: {
 isDisabled() {
   return true;
 }
},
  methods: {
    checkedMonday(id){
          alert(id)
    }  ,
    onSubmit(event) {
            this.v$.$validate();
      if (!this.v$.$error) {
      console.log(JSON.stringify(this.form));
      }
    },
  },
};
</script>
