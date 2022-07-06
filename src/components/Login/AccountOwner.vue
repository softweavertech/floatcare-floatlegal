<style lang="scss">
.login-svg-custom{
  width:100%;
}
.margin-top-account{
    margin-top:7rem;
}
.btn-info {
    color: #000;
    background-color: #f1f1f5;
    border-color: #f1f1f5;
}
.btn-info:hover {
    color: #000;
    background-color: #f1f1f5;
    border-color: #f1f1f5;
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
.margin-top-account{
    margin-top:0rem;
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
.margin-top-account{
    margin-top:0rem;
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

</style>
<template>
<b-container class=" mt-5 margin-container-top" >
    <b-row class="mt-5">
        <b-col class="login-container text-center" cols="12" md="12" lg="6">
            <img src="@/assets/images/colorfull.svg" class="login-650 login-logo-img mb-2" alt="Float Care 2.0"/>
            <img src="@/assets/images/Graphics.png" class="login-650 login-svg-custom" alt="Float Care 2.0"/>
        </b-col>
        <b-col cols="12" md="12" lg="5" class="margin-top-account">
            <div>
                <b-card class="p-3 login-container-border col-sm-10 " >
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <h2 class="login-title mb-1">Are you the Account Owner?</h2>

                  <b-row class="mt-4"> 
                      <b-col>
                            <b-button class="btn btn-info col-12  login-btn" type="submit" @click="submitForm('No')" variant="info" >No</b-button>
                      </b-col>
                      <b-col>
                             <b-button class="btn btn-primary col-12  login-btn" type="submit" @click="submitForm('Yes')" variant="primary" >Yes</b-button>
                      </b-col>
                  </b-row>
                </b-form>
               </b-card>
            </div>
        </b-col>
    </b-row>

</b-container>

</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
      submitForm(val) {
      this.$router.push("/account-owner-details");
      },
    }
  }
</script>
