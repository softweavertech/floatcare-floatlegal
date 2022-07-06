<style>
.login-svg-custom{
  width:70%;margin-top: 10%;
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
 .mb-4 {
    margin-bottom: 0.25rem !important;
}
.card-body h6 {
    margin-bottom: 1.5rem;
    color: #3D6083;
}
.login-logo-img {
     margin: 200px 50px 10px;
}

.form-label {
    margin-bottom: 0.5rem;
    color: #3D6083;
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
            <img src="@/assets/images/colorfull.svg" class="login-650 login-logo-img mb-2" alt="Float Legal 2.0"/>
            <img src="@/assets/images/Graphics.png" class="login-650 login-svg-custom" alt="Float Legal 2.0"/>
        </b-col>
        <b-col cols="12" md="12" lg="5">
            <div>
                <b-card class="p-3 login-container-border col-sm-10 mx-auto" >
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <h2 class="login-title mb-4">Create account</h2>
                  <h6>Once you are verified, You will get an email with login instructions.</h6>
                  <h6><strong>Already Have an account?</strong> &nbsp;<a href="/">Sign in</a></h6>

                  <b-row>
                    <b-form-group
                      id="input-group-1"
                      label=""
                      class="login-create-user col-12"
                      label-for="input-1"
                    >
                      <b-form-input
                        v-model="location"
                        placeholder="Select location on google map"
                      ></b-form-input>
                      <span v-if="v$.location.$error" class="mt5">
                      {{ v$.location.$errors[0].$message }}
                      </span>
                    </b-form-group>

                    <b-form-group
                    id="input-group-1"
                    label="Orgnization name"
                    class="login-create-user col-12"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="orgnization"
                      placeholder="Orgnazation name"
                    ></b-form-input>
                    <span v-if="v$.orgnization.$error" class="mt5">
                    {{ v$.orgnization.$errors[0].$message }}
                    </span>
                  </b-form-group>


                  <b-form-group
                    label="First Name"
                    class="login-create-user col-6"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="first_name"
                      type="text"
                      placeholder="First Name"
                    ></b-form-input>
                    <span v-if="v$.first_name.$error" class="mt5">
                    {{ v$.first_name.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    label="Last Name"
                    class="login-create-user col-6"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="last_name"
                      placeholder="Last Name"
                    ></b-form-input>
                    <span v-if="v$.last_name.$error" class="mt5">
                    {{ v$.last_name.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    label="Phone number"
                    class="login-create-user col-6"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="phone"
                      placeholder="Phone number"
                    ></b-form-input>
                    <span v-if="v$.phone.$error" class="mt5">
                    {{ v$.phone.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Email address"
                    class="login-create-user col-6"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="email"
                      placeholder="Email address"
                    ></b-form-input>
                    <span v-if="v$.email.$error" class="mt5">
                    {{ v$.email.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Address1"
                    class="login-create-user col-12"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="address1"
                      placeholder="Address1"
                    ></b-form-input>
                    <span v-if="v$.address1.$error" class="mt5">
                    {{ v$.address1.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Address2"
                    class="login-create-user col-12"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="address2"
                      placeholder="Address2"
                    ></b-form-input>
                    <span v-if="v$.address2.$error" class="mt5">
                    {{ v$.address2.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    label="City"
                    class="login-create-user col-12"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="city"
                      placeholder="City "
                    ></b-form-input>
                  <span v-if="v$.city.$error" class="mt5">
                    {{ v$.city.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="State"
                    class="login-create-user col-6"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="state"
                      placeholder="State "
                    ></b-form-input>
                    <span v-if="v$.state.$error" class="mt5">
                    {{ v$.state.$errors[0].$message }}
                    </span>
                  </b-form-group>
                   <b-form-group
                    id="input-group-1"
                    label="Zip code"
                    class="login-create-user col-6"
                    label-for="input-1"
                  >
                    <b-form-input
                      v-model="zip_code"
                      placeholder="zipcode "
                    ></b-form-input>
                    <span v-if="v$.zip_code.$error" class="mt5">
                    {{ v$.zip_code.$errors[0].$message }}
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
  export default {
    data() {
      return {
        v$: useValidate(),
        location:'',
        orgnization: '',
        first_name: '',
        last_name: '',
        title: '',
        phone: '',
        email: '',
        role: '',
        sub_role: '',
        address1: '',
        address2:'',
        city: '',
        state: '',
        zip_code: '',
        show: true
      }
    },
    validations() {
      return {
            location:{
              required: helpers.withMessage("Enter location name", required)
            },
            orgnization: {
              required: helpers.withMessage("Enter orgnization name", required)
            },
           first_name: {
              required: helpers.withMessage("Enter first name", required)
            },
             last_name: {
              required: helpers.withMessage("Enter last name", required)
            }, title: {
              required: helpers.withMessage("Enter title", required)
            }, phone: {
              required: helpers.withMessage("Enter phone number", required),
            },email: {
              required: helpers.withMessage("Please fill in your email address", required),
              email: helpers.withMessage("Please enter a valid email address", email),
            }, role: {
              required: helpers.withMessage("Enter Role", required)
            }, sub_role: {
              required: helpers.withMessage("Enter Sub Role", required),
            },        
           address1: {
              required: helpers.withMessage("Enter address1", required)
            },        
           address2: {
              required: helpers.withMessage("Enter address2", required)
            },
           city: {
              required: helpers.withMessage("Enter City name", required)
            },
           state: {
              required: helpers.withMessage("Enter State", required)
            },
            zip_code: {
              required: helpers.withMessage("Enter zip code", required)
            }

        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.v$.$validate();
        if (!this.v$.$error) {
                this.$router.push("/provide-business-details");
        }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
