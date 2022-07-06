<style lang="scss">
.login-svg-custom{
  width: auto;margin-top: 50px;
}
.margin-top-account{
    margin-top:5rem;
}
.margin-container-top{
   margin-top:7rem !important;
}

@media only screen and (min-width:320px) and (max-width: 413px) {
  img.login-650.login-logo-img {
    position: relative;
    top: 30%;
  }
}

@media only screen and (min-width:820px) and (max-width: 990px) {
  .margin-container-top {
    margin-top: 10rem !important;
  }
}

@media only screen and (min-width:320px) and (max-width: 379px) {
  .login-svg-custom {
    right: 2%;
    position: absolute;
    bottom: 0%;
    background: #f2f2f2;
    top: 100%;
  }
}

@media only screen and (min-width:380px) and (max-width: 990px) {
  .login-svg-custom {
    position: absolute;
    right: 2%;
    background: #f2f2f2;
    top: 70%;
  }

  body {
    background-image: url(/src/assets/images/login-tablet.png) !important;
    background-repeat: no-repeat;
    font-family: "Poppins", sans-serif;
    background-size: cover;
  }

  .main-wrapper {
    padding-top: 30px;
  }

  img.login-650.login-logo-img {
    position: relative;
    top: 30%;
  }
}

.login-image {
  width: 85%;
}

.margin-container-top {
  margin-top: 7rem;
}

.form-control {
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

.login-create-account {
  text-decoration: none;
  cursor: pointer;
}

.login-btn {
  border-radius: 10px;
  font-size: 14px;
}

.login-container-border {
  border-radius: 21px;
}

.login-create-user {

  font-weight: 600;
  text-transform: none;
  color: #173e67;

  font-size: 0.875rem;
}

/* .login-container{
      background-image: url("@/assets/images/Graphics.png");
      background-repeat: no-repeat;
  } */
body {
  background-image: url("@/assets/images/BG.svg");
  background-repeat: no-repeat;
  font-family: "Poppins", sans-serif;
  background-size: cover;
}

html {
  height: 100%;
}

.mt5 {
  color: #FF0000;
  top: 5px;
  position: relative;
  left: 5px;
  font-size: 11px;
}

.main-wrapper {
  min-height: auto !important;
  padding-top: 0px;
  height: auto !important;
}
</style>
<template>
  <b-container class=" mt-5 margin-container-top">
    <b-row class="mt-5">
      <b-col class="login-container text-center" cols="12" md="12" lg="6">
        <img src="@/assets/images/colorfull.svg" class="login-650 login-logo-img mb-2" alt="Float Care 2.0" />
        <img src="@/assets/images/Graphics.png" class="login-650 login-svg-custom" alt="Float Care 2.0" />
      </b-col>
      <b-col cols="12" md="12" lg="5" class="mt-5">
        <div>
          <b-card class="p-3 login-container-border col-sm-10 mx-auto">
            <b-form @submit="login" @reset="onReset" v-if="show">
              <h2 class="login-title mb-3">Create Password</h2>
             <b-form-group id="input-group-1" label="Password" class="login-create-user" label-for="input-1">
                <div class="password-wrap">
                  <input :type="passwordFieldType" v-model="password" id="password" class="form-control password"
                    placeholder="Enter Password" autocomplete="off" />
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
                        <path
                          d="M57.9,49.3c0-4.3-3.5-7.8-7.7-7.8c0,0-0.1,0-0.1,0l6.8,11.8C57.5,52.1,57.9,50.8,57.9,49.3z">
                        </path>
                        <polygon
                          points="58.2,59.7 55.5,55 55.5,55 47.9,41.8 47.9,41.8 45.2,37.1 42.4,32.2 37.6,24 34.3,25.9 38.5,33.1 42,39.1    44.7,43.8 44.7,43.8 52.2,56.9 52.2,56.9 55,61.6 57.9,66.7 62.7,75 66,73.1 61.8,65.8  ">
                        </polygon>
                      </g>
                    </svg>
                  </a>
                </div>
              </b-form-group>
              <b-form-group id="input-group-1" label="Confirm Password" class="login-create-user" label-for="input-1">
                <div class="password-wrap">
                  <input :type="ConpasswordFieldType" v-model="ConfirmPassword" id="ConfirmPassword" class="form-control password"
                    placeholder="Enter Password" autocomplete="off" />
                  <span v-if="v$.password.$error" class="mt5">
                    {{ v$.password.$errors[0].$message }}
                  </span>
                  <a class="showPassword" :class="ConpasswordFieldType" type="button" @click.stop="conSwitchVisibility"
                    v-if="showPasswordConfirm">
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
                  <a class="showPassword" :class="ConpasswordFieldType" type="button" @click.stop="conSwitchVisibility"
                    v-if="!showPasswordConfirm">
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
                        <path
                          d="M57.9,49.3c0-4.3-3.5-7.8-7.7-7.8c0,0-0.1,0-0.1,0l6.8,11.8C57.5,52.1,57.9,50.8,57.9,49.3z">
                        </path>
                        <polygon
                          points="58.2,59.7 55.5,55 55.5,55 47.9,41.8 47.9,41.8 45.2,37.1 42.4,32.2 37.6,24 34.3,25.9 38.5,33.1 42,39.1    44.7,43.8 44.7,43.8 52.2,56.9 52.2,56.9 55,61.6 57.9,66.7 62.7,75 66,73.1 61.8,65.8  ">
                        </polygon>
                      </g>
                    </svg>
                  </a>
                </div>
              </b-form-group>
              <b-button class="btn btn-primary col-12 login-btn" type="submit" variant="primary">Contiune
              </b-button>
            </b-form>
          </b-card>
        </div>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
import useValidate from "@vuelidate/core";
import { GET_ORGANIZATION_BY_ID_BASIC, GET_BUSINESSES_AND_DEPARTMENTS } from "@/graphql.js";
export const public_key =
  import.meta.env.VITE_PUBLIC_KEY

import {
  JSEncrypt
} from 'jsencrypt';
import {
  fl_api
} from '@/main.js';
import axios from 'axios';
import {
  required,
  email,
  minLength,
  helpers
} from "@vuelidate/validators";
export default {
  name: "login",
  components: {
    JSEncrypt,
  },
  data() {
    return {
      v$: useValidate(),
      passwordFieldType: "password",
      ConpasswordFieldType: "password",
      email: '',
      password: '',
      errorMessage: '',
      errorField: false,
      axios,
      show: true
    }
  },
  mounted() {
    // if (localStorage.getItem('userToken')) {
    //   this.$router.push("/dashboard");
    // }
  },
  methods: {
    switchVisibility() {
      this.showPassword = !this.showPassword;
      (this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password"),
        (this.visibility = this.visibility === true ? false : true);
    },
       conSwitchVisibility() {
      this.showPasswordConfirm = !this.showPasswordConfirm;
      (this.ConpasswordFieldType =
        this.ConpasswordFieldType === "password" ? "text" : "password"),
        (this.visibility = this.visibility === true ? false : true);
    },
    signUp() {
      this.$router.push("/signup");
    },
    login() {
      this.v$.$validate()
      if (!this.v$.$error) {
        var RSAEncrypt = new JSEncrypt();
        RSAEncrypt.setPublicKey(public_key);
        let encryptedEmail = RSAEncrypt.encrypt(this.email);
        let encryptedPass = RSAEncrypt.encrypt(this.password);
        localStorage.clear();
        sessionStorage.clear();
        this.axios.post(`${fl_api}auth/login`, {
          email: encryptedEmail,
          password: encryptedPass,
        })
          .then((response) => {
            this.errorField = false;
            console.log(response);
            if (response.data.success == true) {
              // this.axios.post(`${fc_api}auth/encrypt`, {
              //   data: response.data.data.userBasicInformation.userId
              // })
              //   .then((data) => {
              //     console.log(data)
              //     localStorage.setItem("currentUserId", data.data.data)
              //   })
              // this.axios.post(`${fc_api}auth/encrypt`, {
              //   data: response.data.data.userBasicInformation.userTypeId
              // })
              //   .then((data) => {
              //     console.log(data)
              //     localStorage.setItem("currentUserTypeId", data.data.data)
              //   })
              // const token = response.data.data.token;
              // localStorage.setItem("userToken", token);

              // localStorage.setItem("userBasicInformation", JSON.stringify(response.data.data.userBasicInformation));

              // if (token) {
              //   var cookieName =
              //     `FC${response.data.data.userBasicInformation.userId}${response.data.data.userBasicInformation.userTypeId}`
              //   this.axios.post(`${fc_api}auth/encrypt`, {
              //     data: cookieName
              //   })
              //     .then((data) => {
                    // console.log(data.data.data)
                    // var cookieEncryptedResult = data.data.data
                    // $cookies.set('myCoookie', cookieEncryptedResult)
                    // if (response.data.data.userBasicInformation.userTypeId == 1) {
                    //   this.$router.push("/admin/dashboard");
                    // }
                    // else {
              this.$router.push("/dashboard");
                    // }
                  // }).catch((error) => {
                  //   console.log(error)
                  //   localStorage.clear();
                  //   sessionStorage.clear();
                  //   this.$router.push("/");
                  // })
              }
            })
          }
    },

    onSubmit(event) {
      alert("onsubmit")
      // let encryptedemail = 'HtgqIzRRJFuVUi6ibV4oVkJO8af1mmQ5Mvd9mF2D5C/nlj5skALsb9ymZ4yxLULBNTvOOS7caW+XyBVIJGYSYB7mq2NH2m27okMpVvDAg1IlnPfs2v9I4bq7eIObDcyyBp8lCQ7z+RBQcXohfEClEk8AOnexwQc5qCel2rTnHH0='
      // let encryptedpass = 'Kcwo0t4FrlXZNqlynVHXUgxlMc6zvWJ/IACnQNRFhrVLuCcdKupkKyYWrmH9Dg8+b+tQGFsz8j+RI2+tPwwwtqZHe/GyRZjVAqN0Lig5X/axxgemWSjU1d6uAr+k2CH4kg6/C7wWvqNZrFDq3Y8+LJ84RpLkbd6SuuG13VnR1IA='
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) { // if ANY fail validation
        let encryptor = new JSEncrypt();
        // let encryptedemail = encryptor.encrypt(this.email);
        // let encryptedpass =  encryptor.encrypt(this.password);
        console.log('Response:- ' + encryptor.encrypt(this.email));
        let encryptedemail = this.email;
        let encryptedpass = this.password;
        localStorage.clear();
        sessionStorage.clear();

        this.axios.post("/auth/login", {
          email: encryptedemail,
          password: encryptedpass,
        })
          .then((response) => {
            console.log('Response: ' + response);
            if (response.data.status == 200) {
              this.errorField = false;
              localStorage.setItem("currentUserId", response.data.data.userBasicInformation.userId);
              const token = response.data.data.token;
              localStorage.setItem("userToken", token);
              localStorage.setItem("userBasicInformation", JSON.stringify(response.data.data.userBasicInformation));
              this.$router.push("/welcome");
            }
            else {
              this.errorField = true;
              this.errormessage = response.data.message;
            }
          })
          .catch((e) => {
            this.errorField = true;
            console.log(e);
          });
      }
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Please fill in your email address", required),
        email: helpers.withMessage("Please enter a valid email address", email),
      },
      password: {
        required: helpers.withMessage("Please enter your password", required),
        minLength: helpers.withMessage("Password should be 6 characters long", minLength(6))
      }
    }
  },
}
</script>