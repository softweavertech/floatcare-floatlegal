<style>

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
  html {
  height: 100%;
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
div#app {
    overflow: hidden;
}

body {
    background: white;
}
.bg-custom.practice h6 {
    background: #b8bbd7;
    padding: 10px;
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

hr.custom-hr {
    padding: 0;
    width: 88%;
    margin: 0 auto;
    height: 2px;
}

.empty {
    text-align: center;
    font-size: 24px;
    color: gray;
}
.p-card {
    border: 2px solid #e6e7e9;
    border-radius: 10px;
    padding: 35px;
}
.order-credit{
 border: 2px solid #e6e7e9;
    border-radius: 10px;
    padding: 10px;
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
.order-card {
    border: 33px solid #f2f3f5;
    border-radius: 10px;
    padding: 35px;
}
.order-credit h5 {
    float: left;
}

.order-credit.form-check {
    float: right;
    margin-top: 3px;
}
.col-sm-12.col-md-12.order-credit input#checkbox-1 {
    float: right;
}
.order-card-new {
    border: 33px solid #f2f3f5;
    border-radius: 10px;
    padding: 0px;
    background: #f2f3f5;
}
.purchase{
    width: 152px;
    padding: 10px;
    border-radius: 15px;
}
</style>
<template>
    <b-container-fluid>
        <b-row>
            <b-col class="login-container text-center pricing-custom pt-5" cols="12" md="12" lg="12">
               <h4>Pricing plan</h4>
               <p class="pt-3 pb-5">Float Care understands your situation and caters to your specific needs with 3 feature packages to choose from.</p>
            </b-col>
        </b-row>
     </b-container-fluid>
<b-container class="mt-4">
  <b-row>
 <h2>Receipt / Invoice</h2>
  <b-col md="12" sm="12" class="p-card my-4">
    <b-row>
      <b-col md="12">
       <h5 class="m-0">Business name</h5>
       <p class="text-muted">1034, New Wave Street, New York</p>
      </b-col>
     
    </b-row>
  </b-col>
 </b-row>
</b-container>
<b-container class="mt-4">
  <b-row>
  <b-col md="12" sm="12" class="order-card my-4">
    <b-row>
      <b-col md="6" sm="6">
       <h5 class="m-0">Transaction ID</h5>
       
      </b-col>
      <b-col md="6" sm="6">
        <div class="p-legal d-flex align-items-center">
        <h5>123344556-565656-4</h5>
        </div>
      </b-col>
    </b-row>
    <hr class="mt-4">
     <b-row class="d-flex align-items-center mt-4">
    <b-col md="8" sm="8">
     <h5 class="m-0">Float Care basic</h5>
     <p class="text-muted m-0">Float Care Basic $149 x 12 months</p>
    </b-col>
    <b-col md="4" sm="4">
      <div class="p-legal d-flex align-items-center">
         <button class="btn btn-select px-4 py-2 mt-1">Chnage plan </button>
      </div>
    </b-col>
  </b-row>
  <hr class="mt-4">
    <b-row class="d-flex align-items-center mt-4">
    <b-col md="8" sm="8">
     <h5 class="m-0">Visa  - 1567</h5>
    </b-col>
    <b-col md="4" sm="4">
      <div class="p-legal d-flex align-items-center">
         <button class="btn btn-select px-4 py-2 mt-1">Chnage plan </button>
      </div>
    </b-col>
  </b-row>
 <hr class="mt-4">
      <b-row class="d-flex align-items-center mt-4">
      <b-col md="8" sm="8">
       <h5 class="m-0">Grand total:</h5>
       <p class="text-muted m-0">Started on november 2021 and renews on november 15, 2022  for $1788 </p>
      </b-col>
      <b-col md="4" sm="4">
        <div class="p-legal d-flex align-items-center">
         <span class="price">$178</span>
        </div>
      </b-col>
      
    </b-row>
    

  </b-col>
  <button class="btn btn-primary purchase mt-3 mb-5">Go to dashboard</button>
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
    }
  }
</script>