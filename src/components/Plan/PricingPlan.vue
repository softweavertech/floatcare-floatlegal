<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
    background-color: #5c63ab;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.switch-button {
    background: #f7f6f9;
    width: 20%;
    margin: 44px auto;
    border-radius: 27px;
    font-size: 14px;
    color: #173E67;
    padding: 6px 0px;
}
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

button.btn.btn-select{
    background: #e9e9e9;
    border-radius: 10px;
}
.pricing-custom {
    background: #5C63AB;
    color: white;
}
.pricing-custom  p {
    width: 39%;
    margin: 0 auto;
}
span.custom-year {
    
    position: relative;
    top: 6px;
    margin: 12px;
}

button.btn.btn-select {
    font-weight: 500;
    font-size: 14px;
    color: #5c63ab;
}

span.price {
    color: #5C63AB;
    font-size: 32px;
    font-weight: 600;
}
.practice {
    text-align: left;
}
.practice h6 {
    background: #f1f1f5;
    padding: 10px;
    padding-left: 20px;
    color: #5c63ab;
    font-weight: 700;
}
button.btn.btn-info.collapsed {
    width: 100%;
}
.btn-info:hover {
    width: 100%;
}
button.btn.btn-info {
    width: 100%;
}
.price-text {
    margin: 0 23px;
    padding-top: 25px;
}
button.accordion-button.collapsed {
    background: #f8f9fa;
    color: gray;
}
div#app {
    overflow: hidden;
}
.bg-custom {
    background: #5C63AB;
    color: white;
}
.bg-custom button.accordion-button.collapsed {
    background: #5c63ab;
}
.bg-custom.accordion-body {
    background: #5c63ab;
}
.bg-custom.accordion-button:hover {
    z-index: 2;
    background: #5c63ab;
    color: white;
}
.bg-custom.accordion-body.bg-light {
    background: #5c63ab !important;
}
.bg-custom button.accordion-button.collapsed {
    background: #5c63ab;
    color: white;
}
.bg-custom.accordion-button:not(.collapsed) {
    color: gray;
    background-color: #5c63ab;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
}
.bg-custom-main {
    background: #f8f9fa;
}
input:checked + .slider {
    background-color: #5c63ab;
    border-radius: 20px;
}
body {
    background: white;
}
.bg-custom.practice h6 {
    background: #b8bbd7;
    padding: 10px;
}
.slider {
    border-radius: 20px;
}
.accordion-button:not(.collapsed) {
    color: #5c63ab;
    background-color: #f8f9fa;
    box-shadow: unset;
    font-weight: 500;
}
.accordion-button:focus {
    border-color: unset;
    box-shadow:unset;
}
h6.custom-backgrond {
    background: #8d94d5;
    color: #f1e4e4;
}
.price-text h4 {
    font-size: 19px;
    color: #3d4385;
    font-weight: 700;
}
.bg-custom h4 {
    color: white !important;
}

.bg-custom .accordion-body {
    padding: 1rem 1.25rem;
    background: #5c63ab;
}
.bg-custom button.accordion-button {
    background: #5c63ab !important;
    color: white !important;
}
.accordion-button::after {
    filter: invert(1);
}
hr.custom-hr {
    padding: 0;
    width: 88%;
    margin: 0 auto;
    height: 2px;
}
.accordion-item {
    border: none;
}
.empty {
    text-align: center;
    font-size: 24px;
    color: gray;
}
div#accordionExample {
    padding-bottom: 20px;
}
.bg-custom span.price {
    color: white;
}
.accordion-body.bg-light {
    color: gray;
}
.p-card {
    border: 2px solid #e6e7e9;
    border-radius: 10px;
    padding: 35px;
}
.p-button {
    float: right;
    margin-top: 10px;
}

.p-total {
    display: flex;
    align-items: center;
    float: left;
}
.p-total h5 {
    margin: 0 20px;
}
.p-card p {
    margin: 0px;
}
.p-legal {
    float: right;
}
</style>
<template>
    <b-container-fluid>
        <b-row>
            <b-col class="login-container text-center pricing-custom pt-5" cols="12" md="12" lg="12">
               <h4>Pricing plan</h4>
               <p>Float Care understands your situation and caters to your specific needs with 3 feature packages to choose from.</p>
               <div class="switch-button">
                   <span class="custom-year">Monthly</span>
                   <!-- Default switch -->
                   <span>
                        <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                        </label>
                    </span>
                      <span class="custom-year">Yearly</span>

                </div>
            </b-col>
        </b-row>
     </b-container-fluid>
         <b-container class="price-plan text-center mt-5">
           <b-row class="mb-5">
            <b-col cols="12" md="4" lg="4" sm="12" class="mt-4">
             <div class="bg-custom-main">
                <div class="price-text">
                    <h4>Float Care basic</h4>
                    <p class="text-muted">Help your staff be productive with this basic plan by providing them access to secure messaging, up-to-date credentialing and å scheduling</p>
                    <span class="price">$249  </span><br>
                    <button class="btn btn-select ">Select plan</button>
                </div>
             <div class="practice mt-4">
              <h6>Basic</h6>
             <div class="accordion" id="accordionExample">
               <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Organizing admin & staff  workflows
                    </button>
                    </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                       <div class="accordion-body bg-light">
                      Stay productive and organized with our array of tools at your disposal.
                   </div>
                  </div>
               </div>
               <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Staff messaging 
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                </div>
                </div>
             </div>
              <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Credentialing
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                </div>
                </div>
              </div>
               <hr class="custom-hr">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                Staff scheduling & calendar Use
                </button>
                </h2>
                <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
            <hr class="custom-hr">
            <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
             <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
             <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
             <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
             <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
             <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
        </div>
     </div>
  </div>
</b-col>
    <b-col cols="12" md="4" lg="4" sm="12" class="mt-4">
             <div class="bg-custom-main">
                <div class="price-text">
                    <h4>Float Care practice</h4>
                    <p class="text-muted">Keeps your staff efficient and improves your medical practice by giving your patients that extra care through easy referrals, messaging and reliable documentation.</p>
                    <span class="price">$249  </span><br>
                    <button class="btn btn-select ">Select plan</button>
                </div>
             <div class="practice mt-4">
              <h6>Practice</h6>
             <div class="accordion" id="accordionExample">
               <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOnea">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnea" aria-expanded="true" aria-controls="collapseOnea">
                   Organizing Admin & Staff  Workflows
                    </button>
                    </h2>
                      <div id="collapseOnea" class="accordion-collapse collapse show" aria-labelledby="headingOnea" data-bs-parent="#accordionExample">
                       <div class="accordion-body bg-light">
                      Stay productive and organized with our array of tools at your disposal.
                   </div>
                  </div>
               </div>
               <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwoa">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoa" aria-expanded="false" aria-controls="collapseTwoa">
              Setting referrals 
                </button>
                </h2>
                <div id="collapseTwoa" class="accordion-collapse collapse" aria-labelledby="headingTwoa" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                </div>
                </div>
             </div>
             <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingThreea">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreea" aria-expanded="false" aria-controls="collapseThreea">
              Organizing practice workflows
                </button>
                </h2>
                <div id="collapseThreea" class="accordion-collapse collapse" aria-labelledby="headingThreea" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                </div>
                </div>
              </div>
              <hr class="custom-hr">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfoura">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefoura" aria-expanded="false" aria-controls="collapsefoura">
                Staff scheduling & calendar Use
                </button>
                </h2>
                <div id="collapsefoura" class="accordion-collapse collapse" aria-labelledby="headingfoura" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingfive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                 Manage patient
                </button>
                </h2>
                <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingsix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                Patient messaging
                </button>
                </h2>
                <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
             <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
              <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
              <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
              <div class="empty">
              <p>-</p>
            </div>
             <hr class="custom-hr">
        </div>
     </div>
  </div>
</b-col>
       <b-col cols="12" md="4" lg="4" sm="12" class="mt-4">
         <div class="bg-custom">
                <div class="price-text">
                    <h4>Float Care basic + practice</h4>
                    <p>This premium plan fully delivers on responsive patient care and workforce efficiency covered in plans Basic and Practice.</p>
                    <span class="price">$349</span><br>
                    <button class="btn btn-select ">Select plan</button>
                </div>
            <div class="practice mt-4">
              <h6 class="custom-backgrond">Basic</h6>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOneb">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneb" aria-expanded="true" aria-controls="collapseOneb">
                    Organizing admin & staff  workflows
                    </button>
                    </h2>
                      <div id="collapseOneb" class="accordion-collapse collapse show" aria-labelledby="headingOneb" data-bs-parent="#accordionExample">
                       <div class="accordion-body">
                      Stay productive and organized with our array of tools at your disposal.
                   </div>
                  </div>
               </div>
                <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwob">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwob" aria-expanded="false" aria-controls="collapseTwob">
                Staff messaging
                </button>
                </h2>
                <div id="collapseTwob" class="accordion-collapse collapse" aria-labelledby="headingTwob" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                </div>
                </div>
             </div>
             <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingThreeb">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeb" aria-expanded="false" aria-controls="collapseThreeb">
                Credentialing
                </button>
                </h2>
                <div id="collapseThreeb" class="accordion-collapse collapse" aria-labelledby="headingThreeb" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                </div>
                </div>
              </div>
              <hr class="custom-hr">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfourb">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefourb" aria-expanded="false" aria-controls="collapsefourb">
                Staff scheduling & calendar Use
                </button>
                </h2>
                <div id="collapsefourb" class="accordion-collapse collapse" aria-labelledby="headingfourb" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfiveb">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefiveb" aria-expanded="false" aria-controls="collapsefiveb">
              Practice
                </button>
                </h2>
                <div id="collapsefiveb" class="accordion-collapse collapse" aria-labelledby="headingfiveb" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
             <div class="accordion-item">
                <h2 class="accordion-header" id="headingsixb">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesixb" aria-expanded="false" aria-controls="collapsesixb">
               Setting referrals
                </button>
                </h2>
                <div id="collapsesixb" class="accordion-collapse collapse" aria-labelledby="headingsixb" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingseven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
               Organizing practice workflows
                </button>
                </h2>
                <div id="collapseseven" class="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingeight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                Patient scheduling & calendar use
                </button>
                </h2>
                <div id="collapseeight" class="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingnine">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                Manage patient
                </button>
                </h2>
                <div id="collapsenine" class="accordion-collapse collapse" aria-labelledby="headingnine" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">
           <div class="accordion-item">
                <h2 class="accordion-header" id="headingten">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                Patient messaging
                </button>
                </h2>
                <div id="collapseten" class="accordion-collapse collapse" aria-labelledby="headingten" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
                </div>
           </div>
           <hr class="custom-hr">

        </div>
     </div>
   </div>
 </b-col>
  <hr class="mt-4 mb-4">
</b-row>
</b-container>
<b-container>
  <b-row>
 <h2>Total</h2>
  <b-col md="12" sm="12" class="p-card my-4">
    <b-row>
      <b-col md="6" sm="6">
       <h5 class="m-0">Plan</h5>
       <p class="text-muted">Float Care basic $149 x 12 months</p>
      </b-col>
      <b-col md="6" sm="6">
        <div class="p-total">
       <h5>Grand total:</h5>
      <span class="price">$178</span>
        </div>
         <div class="p-button">
       <button class="btn btn-select px-4 py-2 " @click="doPayment">Continue </button>
         </div>
      </b-col>
    </b-row>
  </b-col>
 </b-row>
</b-container>
<b-container>
  <b-row>
 <h2>Legal</h2>
  <b-col md="12" sm="12" class="p-card my-4">
    <b-row>
      <b-col md="6" sm="6">
       <h5 class="m-0">Plan</h5>
       <p class="text-muted">Legal feature 1 | Legal feature 2 |Legal feature 3| Legal feature 4</p>
      </b-col>
      <b-col md="6" sm="6">
        <div class="p-legal d-flex align-items-center">
       <h5 class="mx-4 my-0">Float legal:</h5>
      <span class="price">$149</span>
        </div>
        
      </b-col>
    </b-row>
  </b-col>
 </b-row>
</b-container>
</template>

<script>
  export default {
    computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
        name: '',
        referalCode:'',
        cardAcnumber:'',
        cardReenter:'',
        cardNumber:'',
        cardRouting:'',
        cardBankname:'',
        crcCode:'',
        cardfirstName:'',
        cardlastName:'',
        cardBilling:'',
        cardBilling2:'',
        cardzipcode:'',
        creditstate: null,
        options: [
            { value: null, text: 'Select city' },
        ],
        creditselected: null,
        options: [
            { value: null, text: 'Select state' },
        ]
      }
    },
        methods: {
      doPayment(event) {
          this.$router.push("/order-summary");
      },
    },
  }
</script>