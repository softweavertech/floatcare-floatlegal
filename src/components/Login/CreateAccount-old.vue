<style lang="scss">
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
                  <h2 class="login-title mb-1">Create an account</h2>
                  <p class="login-create-user">Already Have an account?<span><a href="/" class="login-create-account ml-1"> Sign in</a></span></p>
                  <b-form-group
                    id="input-group-1"
                    label="Email address"
                    class="login-create-user"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="email"
                      placeholder="email@example.com"
                    ></b-form-input>
                     <span v-if="v$.email.$error" class="mt5">
                    {{ v$.email.$errors[0].$message }}
                    </span>
                  </b-form-group>
                  <b-form-group
                    id="input-group-1"
                    label="Password"
                    class="login-create-user"
                    label-for="input-1"
                  >
                    <div class="password-wrap">
                      <input :type="passwordFieldType" id="password" class="form-control password" placeholder="Enter Password"
                      v-model="password" autocomplete="no" />
                      <span v-if="v$.password.$error" class="mt5">
                      {{ v$.password.$errors[0].$message }}
                      </span>
                      <a class="showPassword" :class="passwordFieldType" type="button" @click.stop="switchVisibility"
                        v-if="showPassword">
                        <svg height="30px" width="30px" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                          style="enable-background:new 0 0 100 100;" xml:space="preserve">
                          <g>
                            <path
                              d="M84.9,48.7l-4.4-4.4c-16.8-17-44-17-60.8,0l-4.4,4.4c-0.3,0.3-0.3,0.9,0,1.2l4.8,4.9c16.5,16.8,43.3,16.8,59.8,0l4.8-4.9   C85.2,49.6,85.2,49.1,84.9,48.7z M50.2,62.6c-7.2,0-13-5.9-13-13.2s5.8-13.2,13-13.2s13,5.9,13,13.2S57.3,62.6,50.2,62.6z">
                            </path>
                            <ellipse cx="50.2" cy="49.3" rx="7.7" ry="7.8"></ellipse>
                          </g>
                        </svg>
                      </a>
                      <a class="showPassword" :class="passwordFieldType" type="button" @click.stop="switchVisibility"
                        v-if="!showPassword">
                        <svg height="30px" width="30px" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                          style="enable-background:new 0 0 100 100;" xml:space="preserve">
                          <g>
                            <path
                              d="M84.9,48.7l-4.4-4.4c-9.8-10-23.3-14.1-36.1-12.4l2.4,4.2l0.2,0.4c1-0.2,2-0.4,3-0.4c7.2,0,13,5.9,13,13.2   c0,3.5-1.3,6.6-3.5,8.9l0.2,0.4l3.5,6.1l0.2,0.4c6-2,11.6-5.5,16.3-10.3l4.9-4.9C85.2,49.6,85.2,49.1,84.9,48.7z">
                            </path>
                            <path
                              d="M53,62.2c-0.9,0.2-1.9,0.3-2.9,0.3c-7.2,0-13-5.9-13-13.2c0-3.4,1.3-6.5,3.3-8.8l-0.3-0.4l-3.4-5.9l-0.2-0.4   c-6.2,2.1-11.9,5.6-16.8,10.5l-4.3,4.4c-0.3,0.3-0.3,0.9,0,1.2l4.8,4.9c9.7,9.8,22.9,13.9,35.6,12.2l-2.6-4.4L53,62.2z">
                            </path>
                            <path d="M43.4,45.6c-0.6,1.1-1,2.4-1,3.8c0,4.3,3.4,7.8,7.7,7.8L43.4,45.6z"></path>
                            <path d="M57.9,49.3c0-4.3-3.5-7.8-7.7-7.8c0,0-0.1,0-0.1,0l6.8,11.8C57.5,52.1,57.9,50.8,57.9,49.3z">
                            </path>
                            <polygon
                              points="58.2,59.7 55.5,55 55.5,55 47.9,41.8 47.9,41.8 45.2,37.1 42.4,32.2 37.6,24 34.3,25.9 38.5,33.1 42,39.1    44.7,43.8 44.7,43.8 52.2,56.9 52.2,56.9 55,61.6 57.9,66.7 62.7,75 66,73.1 61.8,65.8  ">
                            </polygon>
                          </g>
                        </svg>
                      </a>
                    </div>
                 </b-form-group>
                                   <b-form-group
                    id="input-group-1"
                    label="Confirm Password"
                    class="login-create-user"
                    label-for="input-1"
                  >
                    <div class="password-wrap">
                      <input :type="passwordFieldType1" id="confirm" class="form-control password" placeholder="Enter Password" v-model="confirm" autocomplete="no" />
                      <span v-if="v$.confirm.$error" class="mt5">
                      {{ v$.confirm.$errors[0].$message }}
                      </span>
                      <a class="showPassword" :class="passwordFieldType1" type="button" @click.stop="switchVisibility1"
                        v-if="showPassword1">
                        <svg height="30px" width="30px" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                          style="enable-background:new 0 0 100 100;" xml:space="preserve">
                          <g>
                            <path
                              d="M84.9,48.7l-4.4-4.4c-16.8-17-44-17-60.8,0l-4.4,4.4c-0.3,0.3-0.3,0.9,0,1.2l4.8,4.9c16.5,16.8,43.3,16.8,59.8,0l4.8-4.9   C85.2,49.6,85.2,49.1,84.9,48.7z M50.2,62.6c-7.2,0-13-5.9-13-13.2s5.8-13.2,13-13.2s13,5.9,13,13.2S57.3,62.6,50.2,62.6z">
                            </path>
                            <ellipse cx="50.2" cy="49.3" rx="7.7" ry="7.8"></ellipse>
                          </g>
                        </svg>
                      </a>
                      <a class="showPassword" :class="passwordFieldType1" type="button" @click.stop="switchVisibility1"
                        v-if="!showPassword1">
                        <svg height="30px" width="30px" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                          style="enable-background:new 0 0 100 100;" xml:space="preserve">
                          <g>
                            <path
                              d="M84.9,48.7l-4.4-4.4c-9.8-10-23.3-14.1-36.1-12.4l2.4,4.2l0.2,0.4c1-0.2,2-0.4,3-0.4c7.2,0,13,5.9,13,13.2   c0,3.5-1.3,6.6-3.5,8.9l0.2,0.4l3.5,6.1l0.2,0.4c6-2,11.6-5.5,16.3-10.3l4.9-4.9C85.2,49.6,85.2,49.1,84.9,48.7z">
                            </path>
                            <path
                              d="M53,62.2c-0.9,0.2-1.9,0.3-2.9,0.3c-7.2,0-13-5.9-13-13.2c0-3.4,1.3-6.5,3.3-8.8l-0.3-0.4l-3.4-5.9l-0.2-0.4   c-6.2,2.1-11.9,5.6-16.8,10.5l-4.3,4.4c-0.3,0.3-0.3,0.9,0,1.2l4.8,4.9c9.7,9.8,22.9,13.9,35.6,12.2l-2.6-4.4L53,62.2z">
                            </path>
                            <path d="M43.4,45.6c-0.6,1.1-1,2.4-1,3.8c0,4.3,3.4,7.8,7.7,7.8L43.4,45.6z"></path>
                            <path d="M57.9,49.3c0-4.3-3.5-7.8-7.7-7.8c0,0-0.1,0-0.1,0l6.8,11.8C57.5,52.1,57.9,50.8,57.9,49.3z">
                            </path>
                            <polygon
                              points="58.2,59.7 55.5,55 55.5,55 47.9,41.8 47.9,41.8 45.2,37.1 42.4,32.2 37.6,24 34.3,25.9 38.5,33.1 42,39.1    44.7,43.8 44.7,43.8 52.2,56.9 52.2,56.9 55,61.6 57.9,66.7 62.7,75 66,73.1 61.8,65.8  ">
                            </polygon>
                          </g>
                        </svg>
                      </a>
                    </div>
                 </b-form-group>
                  <!-- <b-form-group id="input-group-2" class="login-create-user" label="Password" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.pasword"
                      placeholder="Enter password"
                      required
                    ></b-form-input>
                  </b-form-group> -->
                  <div class="pb-4"> <vue-recaptcha sitekey="6LfHog0aAAAAAJJ7FWsP5DPEjbah8drc33ic2HuQ" v-model="recaptcha" :loadRecaptchaScript="true" @verify="validate" @expired="expired"></vue-recaptcha></div>
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
import { VueRecaptcha } from 'vue-recaptcha';
  export default {
      name:"createAccount",
      components:{
          VueRecaptcha,
      },
    data() {
      return {
      v$: useValidate(),
      passwordFieldType:"password",
      passwordFieldType1:"password",
      recaptcha: false,
        email: '',
        password: '',
        confirm: '',
        show: true
      }
    },
    methods: {
        validate(){
            this.recaptcha  = true
        },
        expired() {

        this.recaptcha = false;
      },
      switchVisibility() {
        this.showPassword = !this.showPassword;
        (this.passwordFieldType =
          this.passwordFieldType === "password" ? "text" : "password"),
        (this.visibility = this.visibility === true ? false : true);
      },
      switchVisibility1() {
        this.showPassword1= !this.showPassword1;
        (this.passwordFieldType1 =
          this.passwordFieldType1 === "password" ? "text" : "password"),
        (this.visibility1 = this.visibility1 === true ? false : true);
      },
      onSubmit(event) {
        event.preventDefault()
        this.v$.$validate();
        if (!this.v$.$error) {
          this.$router.push("/account-owner");
        }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.email = ''
        this.password = ''
        this.confirm = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    },
    validations() {
      return {
          email: {
            required: helpers.withMessage("Please fill in your email address", required),
            email: helpers.withMessage("Please enter a valid email address", email),
          },
          password: {
              required: helpers.withMessage("Please enter your password", required),
              minLength: helpers.withMessage("Password should be 6 chracters long", minLength(6))
            },
          confirm: {
            required: helpers.withMessage("Please confirm your password", required),
            minLength: helpers.withMessage("Password should be 6 chracters long", minLength(6)),
            sameAs: helpers.withMessage("Passwords doesn't match", sameAs(this.password))
          },
          recaptcha: {
            required: helpers.withMessage("Please select recaptcha", required),
          }
        }
    }
  }
</script>
