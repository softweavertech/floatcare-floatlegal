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
 <h2>Order summary</h2>
  <b-col md="12" sm="12" class="p-card my-4">
    <b-row>
      <b-col md="6" sm="6">
       <h5 class="m-0">Business name</h5>
       <p class="text-muted">1034, New Wave Street, New York</p>
      </b-col>
      <b-col md="6" sm="6">
        <div class="p-legal d-flex align-items-center">
       <h6 class="mt-3 text-primary">PLANS FOR (LOCATION)</h6>
        </div>

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
       <h5 class="m-0">Plan</h5>
       <p class="text-muted">Float Care basic $149 x 12 months</p>
      </b-col>
      <b-col md="6" sm="6">
        <div class="p-legal d-flex align-items-center">
         <button class="btn btn-select px-4 py-2 mt-1">Chnage plan </button>
        </div>
      </b-col>
    </b-row>
    <hr>
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
 </b-row>
</b-container>
<b-container>
    <b-row class="my-4">
            <h2>Payment details</h2>
            <b-col md="12" sm="12" class="order-credit mt-4">
           <h5> <span class="mx-4"><svg width="30px" height="24px" viewBox="0 0 30 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
             <title>Icon/Icons/ic_payment</title>
                <defs>
                    <path d="M30,6 L6,6 C4.335,6 3.015,7.335 3.015,9 L3,27 C3,28.665 4.335,30 6,30 L30,30 C31.665,30 33,28.665 33,27 L33,9 C33,7.335 31.665,6 30,6 L30,6 Z M30,27 L6,27 L6,18 L30,18 L30,27 L30,27 Z M30,12 L6,12 L6,9 L30,9 L30,12 L30,12 Z" id="path-1"></path>
                    <rect id="path-3" x="0" y="0" width="75" height="75"></rect>
                </defs>
                    <g id="Login,Sign-up-and-Plan" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Order-Summary" transform="translate(-264.000000, -1091.000000)">
                            <g id="Group-2" transform="translate(221.000000, 1063.000000)">
                                <g id="Icon/Icons/ic_payment" transform="translate(40.000000, 22.000000)">
                                    <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Mask"></g>
                                    <g id="🎨-Color" mask="url(#mask-2)">
                                        <g transform="translate(-19.500000, -19.500000)">
                                            <mask id="mask-4" fill="white">
                                                <use xlink:href="#path-3"></use>
                                            </mask>
                                            <use id="Color" stroke="none" fill="#5C63AB" fill-rule="evenodd" xlink:href="#path-3"></use>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg></span>Credit card</h5>

              <b-form-checkbox id="checkbox-1" class="text-right" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            </b-form-checkbox>
            </b-col>
            <b-container>-
                <b-row class="my-4">
                    <b-col md="12" sm="12" class="order-card my-4">
                    <b-row class="my-1">
                            <b-col md="6">
                                <div role="group">
                                    <!-- <label for="input-live">Card number</label> -->
                                    <b-form-group
                                            id="input-group-1"
                                            label="Card number"
                                            label-for="input-1"
                                        >
                                    <b-form-input
                                    id="input-live"
                                    v-model="name"
                                    :state="nameState"
                                    aria-describedby="input-live-help input-live-feedback"
                                    placeholder="Enter your name"
                                    trim
                                    ></b-form-input></b-form-group>

                                    <!-- This will only be shown if the preceding input has an invalid state -->
                                    <b-form-invalid-feedback id="input-live-feedback">
                                    Enter at least 3 letters
                                    </b-form-invalid-feedback>
                                </div>
                            </b-col>
                                <b-col md="3">
                                  <b-form>
                                        <b-form-group
                                            id="input-group-1"
                                            label="Email address:"
                                            label-for="input-1"
                                        >
                                            <b-form-input
                                            id="input-1"
                                            v-model="crcCode"
                                            type="email"
                                            placeholder="Enter email"
                                            required
                                            ></b-form-input>
                                        </b-form-group>
                                  </b-form>
                                </b-col>
                     <b-col md="3">
                 </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="6">
                <b-form-group id="input-group-2" label="First name" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="cardfirstName"
                    placeholder="Input first name"
                    required
                    ></b-form-input>
                </b-form-group>


                        </b-col>
                         <b-col md="6">
              <b-form-group id="input-group-2" label="Last name" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="cardlastName"
                    placeholder="Input last name"
                    required
                    ></b-form-input>
                </b-form-group>

                        </b-col>
                           <b-col md="12">
              <b-form-group id="input-group-2" label="Billing address 1" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="cardBilling"
                    placeholder="Input Billing address 1"
                    required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Billing address 2" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="cardBilling2"
                    placeholder="Input Billing address 2"
                    required
                    ></b-form-input>
                </b-form-group>

                        </b-col>
                         <b-col md="6">
                                 <b-form-group id="input-group-2" label="City" label-for="input-2">
                         <b-form-select v-model="creditselected" :options="options"></b-form-select>
                                 </b-form-group>
                         </b-col>
                          <b-col md="3">
                              <b-form-group id="input-group-2" label="State" label-for="input-2">
                         <b-form-select v-model="creditstate" :options="options"></b-form-select>
                                 </b-form-group>
                          </b-col>
                           <b-col md="3">
                 <b-form-group id="input-group-2" label="ZIP Code" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="cardzipcode"
                    placeholder="Input ZIP code"
                    required
                    ></b-form-input>
                </b-form-group>
                          </b-col>
                    </b-row>
                    </b-col>
                </b-row>
                </b-container>

 <b-col md="12" sm="12" class="order-credit mt-4">
            <h5 class="mx-0 my-0"> <span class="mx-4"><svg width="30px" height="24px" viewBox="0 0 30 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
             <title>Icon/Icons/ic_payment</title>
                <defs>
                    <path d="M30,6 L6,6 C4.335,6 3.015,7.335 3.015,9 L3,27 C3,28.665 4.335,30 6,30 L30,30 C31.665,30 33,28.665 33,27 L33,9 C33,7.335 31.665,6 30,6 L30,6 Z M30,27 L6,27 L6,18 L30,18 L30,27 L30,27 Z M30,12 L6,12 L6,9 L30,9 L30,12 L30,12 Z" id="path-1"></path>
                    <rect id="path-3" x="0" y="0" width="75" height="75"></rect>
                </defs>
                    <g id="Login,Sign-up-and-Plan" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Order-Summary" transform="translate(-264.000000, -1091.000000)">
                            <g id="Group-2" transform="translate(221.000000, 1063.000000)">
                                <g id="Icon/Icons/ic_payment" transform="translate(40.000000, 22.000000)">
                                    <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Mask"></g>
                                    <g id="🎨-Color" mask="url(#mask-2)">
                                        <g transform="translate(-19.500000, -19.500000)">
                                            <mask id="mask-4" fill="white">
                                                <use xlink:href="#path-3"></use>
                                            </mask>
                                            <use id="Color" stroke="none" fill="#5C63AB" fill-rule="evenodd" xlink:href="#path-3"></use>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg></span>ACH payment</h5>
              <b-form-checkbox id="checkbox-1" class="text-right" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            </b-form-checkbox>
  </b-col>
                </b-row>
               
                <b-row class="my-4">
                 <b-col md="12" sm="12" class="order-card my-4">
                    <b-row>
                        <b-col md="6">
                            <b-form-group id="input-group-2" label="First name" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="cardfirstName"
                                placeholder="Input first name"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                         <b-col md="6">
                            <b-form-group id="input-group-2" label="Last name" label-for="input-2">
                                    <b-form-input
                                    id="input-2"
                                    v-model="cardlastName"
                                    placeholder="Input last name"
                                    required
                                    ></b-form-input>
                                </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="6">
                            <b-form-group id="input-group-2" label="Account number" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="cardAcnumber"
                                placeholder="Input Account number"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                         <b-col md="6">
                            <b-form-group id="input-group-2" label="Re-enter account number" label-for="input-2">
                                    <b-form-input
                                    id="input-2"
                                    v-model="cardReenter"
                                    placeholder="Input Re-enter account number"
                                    required
                                    ></b-form-input>
                                </b-form-group>
                        </b-col>
                    </b-row>
                     <b-row>
                        <b-col md="6">
                            <b-form-group id="input-group-2" label="Routing number" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="cardRouting"
                                placeholder="Input Routing number"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                         <b-col md="6">
                            <b-form-group id="input-group-2" label="Bank name & state" label-for="input-2">
                                    <b-form-input
                                    id="input-2"
                                    v-model="cardBankname"
                                    placeholder="Input Bank name & state"
                                    required
                                    ></b-form-input>
                                </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                         <b-col md="12">
                        <button class="btn btn-primary btn-embossed mt-3">Purchase plan</button>

                        <p class="text-muted mt-3">As you click Purchase plan you authorized <span class="text-primary">FloatCare</span> Inc to electronically debit my bank according to the terms outlined below. You acknowledge that electronic debit against my account must comp;y with the United States Law.</p>
 

                         </b-col>
                    </b-row>
                    </b-col>
                </b-row>
                <b-row class="my-4">
                    <h2>Referal code (Optional)</h2>
                    <b-col md="12" sm="12" class="order-card-new my-4">
                    <b-form-input id="input-search" v-model="referalCode" size="lg" placeholder=" Input referal code"></b-form-input>
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