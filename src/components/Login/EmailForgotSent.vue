<style>
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
.verification-code input[type="text"] {
    margin: 0px 10px;
    border: 1px solid #dfdfdf;
    box-shadow: 0 0 7px 0px #dfdfdf;
    width: 40px;
    border-radius: 5px;
    height: 38px;
}
.verification-code .btn-primary {
    width: 85%;
    border-radius: 10px;
      padding: 10px;
}
 button.btn.btn-resend{
    width: 85%;
    background: #e9e9e9;
    border-radius: 10px;
    padding: 10px;
}
.sucess-code img {
    border: 3px solid #0d6efd;
    padding: 3px;
    border-radius: 18px;
}
.border-custom {
    background: #b7d1f7;
    width: 57px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 32px;
}
</style>
<template>
    <b-container class=" mt-5 margin-container-top" >
        <b-row class="mt-5">
            <b-col class="login-container text-center" cols="12" md="12" lg="6">
                <img src="@/assets/images/colorfull.svg" class="login-650 login-logo-img mb-2" alt="Float Care 2.0"/>
                <img src="@/assets/images/Graphics.png" class="login-650 login-svg-custom" alt="Float Care 2.0"/>
            </b-col>
            <b-col cols="12" md="12" lg="6" class="margin-top-account">
                <div class="sucess-code">
                    <b-card class="p-3 login-container-border col-sm-10 " >
                    <b-form @submit="onSubmit" class="text-center">
                        <div class="border-custom">
                         <img src="@/assets/images/Icon/Icons/ic_check.svg"></div>
                       <h2 class="login-title mb-1 mt-4">Account created sucessufully </h2>
                       <p class="login-create-user">Congratulations you are all set to start enjoying all the benefits of being a Float Care professional.</p>

                       <b-row> 
                         <b-col cols="12" md="12" lg="12" class="mt-4">
                          <button class="btn btn-primary w-100" @clic="Contiunelogin">Contiune to login</button>
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
      onSubmit(event) {
        event.preventDefault()
        this.$router.push("/");
      },
      onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.show = false
            this.$nextTick(() => {
              this.show = true
            })
          }
    }
  }
</script>