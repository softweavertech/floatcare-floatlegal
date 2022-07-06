<template>
  <div>
    <!-- loader -->

    <loader v-if="isLoading" />

    <form
      class="Client_Intake_Form"
      method="POST"
      @submit.prevent="searchUsers"
      autocomplete="off"
    >
      <b-container fluid>
        <div class="row align-items-center py-3 modal-bottom-border">
          <div class="col-3">
            <div class="upload-btn-wrapper">
              <button class="btn_logo">Your logo goes in here</button>

              <input type="file" name="myfile" />
            </div>
          </div>

          <div class="col-7">
            <h3 class="ml-3 modal-title">Client Intake Form</h3>

            <span class="standard"
              >Lorem Ipsum has been the industry's standard dummy</span
            >
          </div>

          <div class="col-2 text-right searchUser">
            <a
              type="button"
              class="cancel-btn mr-3 pull-right"
              @click="closeSearchModel"
              tabindex="-1"
              id="cancel"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 44 44"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>Close</title>

                <g
                  id="Float-Legal"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Client-cases/Referraks-/Add-Preferraed-Provider"
                    transform="translate(-1259.000000, -91.000000)"
                  >
                    <g id="Group-8" transform="translate(263.000000, 68.000000)">
                      <g id="Group-20" transform="translate(996.000000, 23.000000)">
                        <circle
                          id="Oval"
                          fill-opacity="0.2"
                          fill="#173E67"
                          cx="22"
                          cy="22"
                          r="22"
                        ></circle>

                        <g id="Group" transform="translate(10.000000, 10.000000)">
                          <rect
                            id="Icon-Spacing"
                            fill="#4394AD"
                            opacity="0"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                            rx="5"
                          ></rect>

                          <path
                            d="M9.22951453,12 L5.07378633,7.8442718 C4.30873789,7.07922336 4.30873789,5.83883476 5.07378633,5.07378633 C5.83883476,4.30873789 7.07922336,4.30873789 7.8442718,5.07378633 L12,9.22951453 L16.1557282,5.07378633 C16.9207766,4.30873789 18.1611652,4.30873789 18.9262137,5.07378633 C19.6912621,5.83883476 19.6912621,7.07922336 18.9262137,7.8442718 L14.7704855,12 L18.9262137,16.1557282 C19.6912621,16.9207766 19.6912621,18.1611652 18.9262137,18.9262137 C18.1611652,19.6912621 16.9207766,19.6912621 16.1557282,18.9262137 L12,14.7704855 L7.8442718,18.9262137 C7.07922336,19.6912621 5.83883476,19.6912621 5.07378633,18.9262137 C4.30873789,18.1611652 4.30873789,16.9207766 5.07378633,16.1557282 L9.22951453,12 L9.22951453,12 Z"
                            id="Path"
                            fill="#173E67"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </b-container>
    </form>

    <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
      <b-col sm="10" md="10" lg="10">
        <h3 class="concern">What is your concern ? *</h3>

        <b-form-group id="input-group-Response" label="Your Response" label-for="input-3">
          <b-form-input
            id="input-Response"
            v-model="Response"
            type="text"
            placeholder="Type your answer here"
            required
          >
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col sm="2" md="2" lg="2"> </b-col>
    </b-row>

    <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
      <b-col sm="10" md="10" lg="10">
        <h3 class="concern">What is your concern ? *</h3>

        <b-form-group id="input-group-Response" label="Your Response" label-for="input-3">
          <b-form-input
            id="input-Response"
            v-model="Response"
            type="text"
            placeholder="Type your answer here"
            required
          >
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col sm="2" md="2" lg="2"> </b-col>
    </b-row>

    <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
      <b-col sm="10" md="10" lg="10">
        <h3 class="concern">What is your concern ? *</h3>

        <b-form-checkbox
          id="Option"
          v-model="Option"
          name="checkbox-Option"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <b-form-group label="Option 1" label-for="input-3"> </b-form-group>
        </b-form-checkbox>

        <b-form-input
          id="input-Response"
          v-model="Response"
          type="text"
          placeholder="if yes, why?"
          required
        >
        </b-form-input>

        <b-form-checkbox
          id="Option"
          v-model="Option"
          name="checkbox-Option"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <b-form-group label="Option 2" label-for="input-3"> </b-form-group>
        </b-form-checkbox>

        <b-form-checkbox
          id="Option"
          v-model="Option"
          name="checkbox-Option"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <b-form-group label="Option 3" label-for="input-3"> </b-form-group>
        </b-form-checkbox>

        <b-form-checkbox
          id="Option"
          v-model="Option"
          name="checkbox-Option"
          value="accepted"
          unchecked-value="not_accepted"
        >
          <b-form-group label="Option 4" label-for="input-3"> </b-form-group>
        </b-form-checkbox>
      </b-col>

      <b-col sm="2" md="2" lg="2"> </b-col>
    </b-row>

    <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
      <b-col sm="6" md="6" lg="6">
        <h3 class="concern">Select your concern ?</h3>

        <b-form-group id="input-group-Concern" label="Select Concern" label-for="input-3">
          <b-form-select
            id="input-Concern"
            v-model="Concern"
            :options="SelectConcern"
            required
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="6" md="6" lg="6"> </b-col>
    </b-row>

    <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
      <b-col sm="6" md="6" lg="6">
        <h3 class="concern">Select date of accident</h3>

        <b-form-group id="input-group-Concern" label="Select Date" label-for="input-3">
          <datepicker class="form-control datapicker" v-model="picked" />
        </b-form-group>
      </b-col>

      <b-col sm="6" md="6" lg="6"> </b-col>
    </b-row>

    <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
      <b-col sm="10" md="10" lg="10">
        <h3 class="concern">Section Header Goes here</h3>

        <span class="text_para">
          The Paragraph text type question and element goes here. The Paragraph text type
          question and element goes here. The Paragraph text type question and element
          goes here. The Paragraph text type question and element goes here.
        </span>
      </b-col>

      <b-col sm="2" md="2" lg="2"> </b-col>
    </b-row>

    <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
      <b-col sm="10" md="10" lg="10">
        <b-button type="submit" class="Download" v-on:click="onSubmit()"
          >Download</b-button
        >

        <b-button type="submit" variant="light" v-on:click="onSubmit()">Print</b-button>
      </b-col>

      <b-col sm="2" md="2" lg="2"> </b-col>
    </b-row>
  </div>
</template>

<script>
import VueTimepicker from "vue3-timepicker";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
import "vue3-timepicker/dist/VueTimepicker.css";
import { ETHNICITY_LIST } from "@/ethnicityList.js";
export default {
  name: "searchprovider",

  props: ["closeSearchModel", "subRoleList", "languageList","clientId"],
  components: {
    VueTimepicker,
    Datepicker,
  },
  setup() {
    const val = "10:10";
    const picked = ref(new Date());
    return {
      val,
      picked,
    };
  },
  data() {
    return {
      items: [3, 3, 3, 3, 4],
      ethincityOptions: [],
      genderoptions: [
        { value: null, text: "Please Select Gender" },
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        { value: "Other", text: "Other" },
      ],
      Response: "",
      SelectConcern: ["Choice 1", "Choice 2", "Choice 3"],
      langs: [
        { value: null, text: "Select Language" },
        { value: "Arabic", text: "Arabic" },
        { value: "English", text: "English" },
        { value: "Hindi", text: "Hindi" },
        { value: "Punjabi", text: "Punjabi" },
      ],
      subRol: [
        { value: null, text: "Please select a sub-rol" },
        { value: "cardiologist", text: "cardiologist" },
        { value: "Orthopedics", text: "Orthopedics" },
        { value: "Neurology", text: "Neurology" },
        { value: "Test", text: "Test" },
        { value: "Cardiology", text: "Cardiology" },
        { value: "Gastroentrology", text: "Gastroentrology" },
        { value: "Opthalmology", text: "Opthalmology" },
        { value: "Rheumatology", text: "Rheumatology" },
        { value: "Careedics", text: "Primary Care" },
        { value: "Primary Care", text: "Primary Care" },
      ],
    };
  },

  created() {},
  mounted() {
    this.ethincityOptions = ETHNICITY_LIST;
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.rounded-border {
  border-radius: 0.6rem !important;
}

.prefered-provider {
  border-radius: 0.6rem !important;
  img {
    width: 36px;
    height: 38px;
    border-radius: 10px;
  }
  h6 {
    font-size: 16px;
    font-weight: 600;
    color: #173e67;
  }
  h5 {
    font-size: 12px;
    font-weight: 600;
    color: #173e67;
  }
  span {
    font-weight: 400;
    color: #adabab;
    font-size: 12px;
  }
}

.modal-bottom-border {
  border-bottom: 2px solid #dee2e6 !important;
}

.modal-title {
  color: #173e67;
  font-size: 26px;
  font-weight: 600;
}

.search-provider-form {
  border-radius: 10px;
  .col-custom-label {
    font-size: 14px;
    margin-left: 0rem;
    font-weight: 600;
    margin-top: 1rem;
    color: #173e67;
  }
  .form-select {
    border-radius: 0.6rem !important;
  }
}

.matching-provider-title {
  font-size: 18px;
  margin-left: 0rem;
  font-weight: 600;
  margin-top: 1rem;
  color: #173e67;
}

input#file2 {
  display: inline-block;
  padding: 65px 0 0 0;
  box-sizing: border-box;
  background: url(/src/assets/images/Screenshot_21.png) center center no-repeat #e4e4e4;
  border-radius: 10px;
  background-color: #eef3fc;
  width: 100%;
}

button.btn.btn-secondary.Download {
  background: #5c63ab;
  color: #fff;
}

button.btn.btn-light {
  margin-left: 10px;
  padding-left: 25px;
  padding-right: 25px;
  color: #4394ad;
}

h3.concern {
  color: #173e67;
  text-shadow: 0 0 black;
}

input#input-Response {
  margin-bottom: 15px;
  height: 60px;
  border-radius: 15px;
  border-color: lightgrey;
}

select#input-Concern {
  height: 40px;
  border-radius: 15px;
  border-color: lightgrey;
}

input.form-control.datapicker {
  height: 40px;
  border-radius: 15px;
  border-color: lightgrey;
}

span.text_para {
  color: #173e67;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn_logo {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
  border: dashed;
  height: 100px;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
span.standard {
  font-size: 15px;
  color: #d1d8e1;
}
form.Client_Intake_Form {
  background: #fffbf0;
  position: relative;
  top: -15px;
  margin-left: -15px;
  margin-right: -15px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
</style>
