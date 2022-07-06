<style lang="scss">
.login-svg-custom{
  width: auto;margin-top: 50px;
}
.margin-top-account{
    margin-top:7rem;
}
.col-md-12.col-lg-5 {
    margin-top: 5rem;
}
.col-lg-5 {
    width: 47.666667%;
}
div#input-group-1 {
    margin-bottom: 2rem !important;
}
.card.p-3.login-container-border {
    padding: 2rem !important;
}
p.login-create-user{
  margin-bottom: 2rem;
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
h2.login-title, .login-create-user {
    color: #1F3D5A; 
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
                  <h2 class="login-title mb-1">Forgot Password </h2>
                  <p class="login-create-user">Please Confirm your email address below and we will send you a verification link</p>
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
                  
                  <b-button class="btn btn-primary col-12 login-btn" type="submit" variant="primary" >Submit</b-button>                   
                </b-form>
               </b-card>
            </div>
        </b-col>
    </b-row>

</b-container>

</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
  export default {
    data() {
      return {
        v$: useValidate(),
        email: '',
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        	this.v$.$validate() // checks all inputs
  				if (!this.v$.$error) { // if ANY fail validation
           this.$router.push("/");
  				} else {
  				//	alert('Form failed validation kp')
  				}
      },
      onReset(event) {
        event.preventDefault()
        this.email = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    validations() {
      return {
          email: {
            required: helpers.withMessage("Please fill in your email address", required),
            email: helpers.withMessage("Please enter a valid email address", email),
          }
        }
    },
  }
</script>
