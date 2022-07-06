<style src="@vueform/multiselect/themes/default.css"></style>
    <style>
    .login-svg-custom{
      width:100%;
    }
    @media only screen and (max-width: 600px) {
    .login-svg-custom{
        right: 2%;
        position: absolute;
        bottom: 0%;
        background: #f2f2f2;
        top: 100%;
    }
    img.login-650.login-logo-img {
        position: absolute;
        top: 6%;
        left: 22%;
    }
    }
    @media only screen and (min-width:600px) and (max-width: 768px) {
    .login-svg-custom {
        position: absolute;
        left: 0%;
        bottom: 0%;   
        background: #f2f2f2;
        top: 100%;
    }
    img.login-650.login-logo-img.mb-2 {
        position: absolute;
        left: 35%;
        top: 5%;
    }
    }
    .login-image{
      width:85%;
    }
    .margin-container-top{
      margin-top: 7rem !important;
    }
    .form-control{
        font-size: 0.875rem;
        padding: 1rem;
        height: 40px;
        border-radius: 10px;
        border-color: #cccccc;
    }
    .password-wrap {
        position: relative;

      }
      .showPassword {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 24px;
          height: 24px;
          display: block;
          border: none;
          outline: none;
      }
      .showPassword1 {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 24px;
          height: 24px;
          display: block;
          border: none;
          outline: none;
      }
      svg {

            path,
            ellipse,
            polygon {
              fill: #cccccc;
            }
          }
    .login-create-account{

      text-decoration: none;
    }
    .login-btn {
          border-radius:10px;
          font-size: 14px;
      }
      .login-container-border{
        border-radius: 21px;
      }
    .login-create-user{

      font-weight: 600;
        text-transform: none;
        color: #173e67;

        font-size: 0.875rem;
    }
      /* .login-container{
          background-image: url("@/assets/images/Graphics.png");
          background-repeat: no-repeat;
      } */
      body{
        background-image: url("@/assets/images/BG.svg");
        background-repeat: no-repeat;
        font-family: "Poppins", sans-serif;
        background-size: cover;
      }
      html {
      height: 100%;
    }
    .mt5{color: #FF0000;top: 5px; position: relative;left: 5px;}
    </style>
    <template>
    <b-container class=" mt-5 margin-container-top" >
        <b-row class="mt-5">
            <b-col class="login-container text-center" cols="12" md="12" lg="6">
                <img src="@/assets/images/colorfull.svg" class="login-650 login-logo-img mb-2" alt="Float Care 2.0"/>
                <img src="@/assets/images/Graphics.png" class="login-650 login-svg-custom" alt="Float Care 2.0"/>
            </b-col>
            <b-col cols="12" md="12" lg="5">
                <div>
                    <b-card class="p-3 login-container-border col-sm-10 mx-auto" >
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                      <h2 class="login-title mb-4">Provide Business Details</h2>
                      <b-row>
                      <b-form-group
                        label="Organization/Business name"
                        class="login-create-user col-12"
                        label-for="business_name"
                      >
                        <b-form-input
                          v-model="business_name"
                          type="text"
                          placeholder="Business Name"
                        ></b-form-input>
                       <span v-if="v$.business_name.$error" class="mt5">
                       {{ v$.business_name.$errors[0].$message }}
                       </span>
                      </b-form-group>
                      <b-form-group
                        label="Business type"
                        class="login-create-user col-12 mb-0"
                        label-for="business_type"
                      >
                        <Multiselect class="form-control"
                          v-model="business_type"
                          :options="options"
                          placeholder="Select Business type"
                          />
                       <span v-if="v$.business_type.$error" class="mt5">
                       {{ v$.business_type.$errors[0].$message }}
                       </span>
                        </b-form-group>
                      
                      <b-form-group
                        label="Suite"
                        class="login-create-user col-12"
                        label-for="suite"
                      >
                      <b-form-input
                          v-model="suite"
                          placeholder="Suite"
                        ></b-form-input>
                      <span v-if="v$.suite.$error" class="mt5">
                       {{ v$.suite.$errors[0].$message }}
                       </span>
                      </b-form-group> 
                      <b-form-group
                        label="State"
                        class="login-create-user col-6"
                        label-for="states"
                      >
                        <Multiselect class="form-control"
                          v-model="state"
                          :options="states"  
                          aria-placeholder="Select here"
                        />
                      <span v-if="v$.state.$error" class="mt5">
                       {{ v$.state.$errors[0].$message }}
                       </span>
                      </b-form-group>
                      <b-form-group
                        label="Zip Code"
                        class="login-create-user col-6"
                        label-for="zipcode"
                      >
                        <b-form-input
                          v-model="zipcode"
                          placeholder="Zip code "
                        ></b-form-input>
                       <span v-if="v$.zipcode.$error" class="mt5">
                       {{ v$.zipcode.$errors[0].$message }}
                       </span>
                      </b-form-group>
                      </b-row>  
                      <b-button class="btn btn-primary col-12 login-btn mt-2" type="submit" variant="primary" >Continue</b-button>
                    </b-form>
                  </b-card>
                </div>
            </b-col>
        </b-row>

    </b-container>

    </template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers, sameAs } from "@vuelidate/validators";
import Multiselect from '@vueform/multiselect'
export default {
    components: {
      Multiselect 
      },
  data() {
    return {
    v$: useValidate(),
    states:[],
      options: [
        'Batman',
        'Robin',
        'Joker',
      ],
      states:[
     "AL",
     "AK"
    ,"AS"
    ,"AZ"
    ,"AR"
    ,"CA"
    ,"CO"
    ,"CT"
    ,"DE"
    ,"DC"
    ,"FM"
    ,"FL"
    ,"GA"
    ,"GU"
    ,"HI"
    ,"ID"
    ,"IL"
    ,"IN"
    ,"IA"
    ,"KS"
    ,"KY"
    ,"LA"
    ,"ME"
    ,"MH"
    ,"MD"
    ,"MA"
    ,"MI"
    ,"MN"
    ,"MS"
    ,"MO"
    ,"MT"
    ,"NE"
    ,"NV"
    ,"NH"
    ,"NJ"
    ,"NM"
    ,"NY"
    ,"NC"
    ,"ND"
    ,"MP"
    ,"OH"
    ,"OK"
    ,"OR"
    ,"PW"
    ,"PA"
    ,"PR"
    ,"RI"
    ,"SC"
    ,"SD"
    ,"TN"
    ,"TX"
    ,"UT"
    ,"VT"
    ,"VI"
    ,"VA"
    ,"WA"
    ,"WV"
    ,"WI"
    ,"WY"],
      business_name: '',
      business_type: '',
      suite: '',
      state: '',
      zipcode: '',
      show: true
    }
  },
  validations() {
  return {
        business_name: {
          required: helpers.withMessage("Enter business name", required)
        },business_type: {
          required: helpers.withMessage("Enter business type", required)
        }, suite: {
          required: helpers.withMessage("Enter suite", required)
        }, state: {
          required: helpers.withMessage("Enter state", required),
        }, zipcode: {
          required: helpers.withMessage("Enter zip code", required),
        }
    }
},
  methods: {
    onSubmit(event) {
      event.preventDefault()
        this.v$.$validate();
        if (!this.v$.$error) {
          this.$router.push("/verification-code");
        }
    },
    onReset(event) {
      event.preventDefault()
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
