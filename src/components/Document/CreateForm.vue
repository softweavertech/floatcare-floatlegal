<template>
  <div class="container-fluid main-container-bg">
    <!-- <loader v-if="isLoading" /> -->
    <!-- Main Bread crumb start -->
    <div class="breadcrumb-main">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-container fluid>
          <b-row class="align-items-center mb-3 mr-0 ml-0">
            <b-col sm="12" md="12" lg="12">
              <div class="pull-left px-3 pt-3">
                <h2>Create Form</h2>
              </div>
            </b-col>
          </b-row>
          <b-row class="align-items-center mb-3 px-3 mr-0 ml-0">
            <b-col sm="4" md="4" lg="4">
              <b-form-group id="input-group-formname" label="Form name*" label-for="input-3">
                <b-form-input id="input-formname" v-model="form.formname" type="text" placeholder="Client intake form"
                  required>
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" md="4" lg="4">
              <b-form-group id="input-group-documentcategory" label="Document Category" label-for="input-3">
                <b-form-select id="input-documentcategory" v-model="form.documentcategory" :options="documentcategory"
                  required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4" md="4" lg="4">
              <div class="checkbox_logo mt-4">
                <b-form-checkbox id="includepracticelogo." v-model="includepracticelogo"
                  name="checkbox-includepracticelogo" value="accepted" unchecked-value="not_accepted">
                  <b-form-group label="Include practice logo" label-for="input-3">
                  </b-form-group>
                </b-form-checkbox>
              </div>
            </b-col>
          </b-row>
        </b-container>
        <div class="element">
          <b-row class="align-items-center mb-3 mr-0 ml-0 px-4">
            <b-col sm="8" md="8" lg="8">
              <h2 class="new_element">Add New Element</h2>
            </b-col>
            <b-col sm="4" md="4" lg="4">
              <div class="button_btn float-end">
                <b-button type="button" variant="light" >Clear</b-button>
                <b-button type="submit" variant="primary">Save</b-button>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="create_form_element">
          <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
            <b-col sm="6" md="6" lg="6">
              <b-form-group id="input-group-element" label="select element type" label-for="input-element">
                <b-form-select id="input-element" v-model="form.element" :options="element" required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" lg="6">
            </b-col>
          </b-row>
          <div class="question_type">
            <span class="question">Type in the Question</span>
            <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
              <b-col sm="6" md="6" lg="6">
                <div class="question_input mt-2">
                  <b-form-group id="input-group-Question" label="Question" label-for="input-3">
                    <b-form-input id="input-Question" v-model="form.Question" type="text"
                      placeholder="Type question here" required>
                    </b-form-input>
                  </b-form-group>
                </div>
              </b-col>
              <b-col sm="6" md="6" lg="6">
                <div class="checkbox_logo mt-5">
                  <b-form-checkbox id="requiredanswer." v-model="requiredanswer" name="checkbox-requiredanswer"
                    value="accepted" unchecked-value="not_accepted">
                    <b-form-group label="This is a required answer" label-for="input-3">
                    </b-form-group>
                  </b-form-checkbox>
                </div>
              </b-col>
            </b-row>
            <span class="question">Type in the Paragraph</span>
            <b-row class="align-items-center mb-3 mr-0 ml-0 px-4 mt-4">
              <b-col sm="6" md="6" lg="6">
                <div class="question_input mt-2">
                  <b-form-group id="input-group-Paragraph" label="Paragraph-text" label-for="input-3">
                    <b-form-textarea id="input-Paragraph" v-model="form.Paragraph" type="text"
                      placeholder="Input somthing..." required>
                    </b-form-textarea>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>
            <span class="question">This can help give your clients context for your form. Note: clients will not be able
              to add content here.</span>
            <div class="answer_form">
              <b-row class="align-items-center mr-0 ml-0 px-4">
                <b-col sm="2" md="2" lg="2">
                  <span class="Answer">Answer</span>
                </b-col>
                <b-col sm="8" md="8" lg="8">
                </b-col>
                <b-col sm="2" md="2" lg="2">
                  <b-button class="btn_answer" type="submit" variant="light" v-on:click="onSubmit()"><img
                      src="@/assets/images/Addanswer.png" alt=""> Answer</b-button>
                </b-col>
              </b-row>
            </div>
            <b-row class="align-items-center mb-3 mr-0 ml-0 px-4">
              <b-col sm="4" md="4" lg="4">
                <div class="question_input mt-2">
                  <b-row class="align-items-center mb-3 mr-0 ml-0 mt-4">
                    <b-col sm="10" md="10" lg="10">
                      <b-form-input id="input-Answer" v-model="form.Answer" type="text" placeholder="Type choice here"
                        required>
                      </b-form-input>
                    </b-col>
                    <b-col class="mt-1" sm="2" md="2" lg="2">
                      <img src="@/assets/images/Icons/Delete.png" alt="">
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col sm="4" md="4" lg="4">
                <div class="question_input">
                  <b-row class="align-items-center mr-0 ml-0">
                    <b-col sm="10" md="10" lg="10">
                      <b-form-input id="input-Answer" v-model="form.Answer" type="text" placeholder="Type choice here"
                        required>
                      </b-form-input>
                    </b-col>
                    <b-col class="mt-1" sm="2" md="2" lg="2">
                      <img src="@/assets/images/Icons/Delete.png" alt="">
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col sm="4" md="4" lg="4">
                <div class="question_input">
                  <b-row class="align-items-center mr-0 ml-0">
                    <b-col sm="10" md="10" lg="10">
                      <b-form-input id="input-Answer" v-model="form.Answer" type="text" placeholder="Type choice here"
                        required>
                      </b-form-input>
                    </b-col>
                    <b-col class="mt-1" sm="2" md="2" lg="2">
                      <img src="@/assets/images/Icons/Delete.png" alt="">
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
            <b-row class="align-items-center mb-3 mr-0 ml-0 px-4">
              <b-col sm="4" md="4" lg="4">
                <div class="question_input mt-2">
                  <b-row class="align-items-center mb-3 mr-0 ml-0 mt-4">
                    <b-col sm="10" md="10" lg="10">
                      <b-form-input id="input-Answer" v-model="form.Answer" type="text" placeholder="Type choice here"
                        required>
                      </b-form-input>
                    </b-col>
                    <b-col class="mt-1" sm="2" md="2" lg="2">
                      <img src="@/assets/images/Icons/Delete.png" alt="">
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
        <div class="element">
          <div class="form_questions">
            <b-row class="align-items-center mr-0 ml-0 px-4 mt-4 mb-4">
              <b-col sm="3" md="3" lg="3">
                <span class="form_question">Question name/Form element</span>
              </b-col>
              <b-col sm="5" md="5" lg="5">
                <span class="form_question">Type</span>
              </b-col>
              <b-col sm="2" md="2" lg="2">
                <span class="form_question">Required</span>
              </b-col>
              <b-col sm="2" md="2" lg="2">
                <span class="form_question">Action</span>
              </b-col>
            </b-row>
          </div>
          <div class="form_questions_element">
            <b-row class="align-items-center mr-0 ml-0 px-4 mt-4 mb-4">
              <b-col sm="3" md="3" lg="3">
                <span class="form_question">What is your concern ?</span>
              </b-col>
              <b-col sm="5" md="5" lg="5">
                <span class="form_question">Single choice (radio buttons)</span>
              </b-col>
              <b-col sm="2" md="2" lg="2">
                <span class="form_question">Yes</span>
              </b-col>
              <b-col sm="2" md="2" lg="2">
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>Icons/ic_more_vert</title>
                  <defs>
                    <path
                      d="M12,8 C13.1,8 14,7.1 14,6 C14,4.9 13.1,4 12,4 C10.9,4 10,4.9 10,6 C10,7.1 10.9,8 12,8 L12,8 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 L12,10 Z M12,16 C10.9,16 10,16.9 10,18 C10,19.1 10.9,20 12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 L12,16 Z"
                      id="path-1"></path>
                    <rect id="path-3" x="0" y="0" width="50" height="50"></rect>
                  </defs>
                  <g id="Symbol" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Icons/ic_more_vert">
                      <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                      </mask>
                      <g id="Mask"></g>
                      <g id="🎨-Color" mask="url(#mask-2)">
                        <g transform="translate(-13.000000, -13.000000)">
                          <mask id="mask-4" fill="white">
                            <use xlink:href="#path-3"></use>
                          </mask>
                          <use id="Color" stroke="none" fill="#5C63AB" fill-rule="evenodd" xlink:href="#path-3"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </b-col>
            </b-row>
          </div>
          <div class="form_questions_element">
            <b-row class="align-items-center mr-0 ml-0 px-4 mt-4 mb-4">
              <b-col sm="3" md="3" lg="3">
                <span class="form_question">What is your concern ?</span>
              </b-col>
              <b-col sm="5" md="5" lg="5">
                <span class="form_question">Long answer type</span>
              </b-col>
              <b-col sm="2" md="2" lg="2">
                <span class="form_question">Yes</span>
              </b-col>
              <b-col sm="2" md="2" lg="2">
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>Icons/ic_more_vert</title>
                  <defs>
                    <path
                      d="M12,8 C13.1,8 14,7.1 14,6 C14,4.9 13.1,4 12,4 C10.9,4 10,4.9 10,6 C10,7.1 10.9,8 12,8 L12,8 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 L12,10 Z M12,16 C10.9,16 10,16.9 10,18 C10,19.1 10.9,20 12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 L12,16 Z"
                      id="path-1"></path>
                    <rect id="path-3" x="0" y="0" width="50" height="50"></rect>
                  </defs>
                  <g id="Symbol" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Icons/ic_more_vert">
                      <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                      </mask>
                      <g id="Mask"></g>
                      <g id="🎨-Color" mask="url(#mask-2)">
                        <g transform="translate(-13.000000, -13.000000)">
                          <mask id="mask-4" fill="white">
                            <use xlink:href="#path-3"></use>
                          </mask>
                          <use id="Color" stroke="none" fill="#5C63AB" fill-rule="evenodd" xlink:href="#path-3"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </b-col>
            </b-row>
          </div>
          <div class="text-center mt-5">
            <img src="@/assets/images/NoDataFound1.png" alt="">
          </div>
          <div class="text-center">
            <span>No Data Found</span>
          </div>
          <div class="btn_save px-4">
            <b-button type="submit" variant="primary" @click="onSubmit()">Save Form</b-button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
   import Multiselect from "@vueform/multiselect";
   import Datepicker from "vue3-datepicker";
   import VueTimepicker from "vue3-timepicker";
   import "vue3-timepicker/dist/VueTimepicker.css";
   import { ref } from "vue";
  // import {
  // form_api  } from '@/main.js';
  // import axios from 'axios';
   export default {
     components: {
       Multiselect,
       Datepicker,
       VueTimepicker,
     },
     setup() {
       const picked = ref(new Date());
       return {
         picked,
       };
     },
     data() {
       return {
         form: { email: "", name: "", checked: [] },
         businesstype: [
           { text: "Select One", value: null },
           "test1",
           "test1",
           "test1",
           "test1",
         ],
         selected: null,
           element: [
             {value: null, text: "Select element type"},
             { value: 'a',text: 'QUESTIONS',disabled: true },
             { value: 'b', text: 'Long Answers (Multiple-Line text)'},
             { value: 'c', text: 'Short Answers (Single-Line text)' },
             { value: 'd', text: 'Single Choice (Checkboxes)' },
             { value: 'e', text: 'Multiple Choice (Checkboxes)'},
             { value: 'f', text: 'Dropdown'},
             { value: 'g', text: 'Date Field (calendar)'},
             { value: 'h',text: 'TEXT AND DIVIDERS (NOT QUESTIONS)',disabled: true },
             { value: 'i', text: 'Paragraph Text (No Client Input)'},
             { value: 'j', text: 'Section Header'},
             { value: 'k', text: 'Section Break'},
           ],
         documentcategory: [{ text: "Intake form123", value: null }, "progress notes", "Assesment forms", "Survey forms"],
         state: [{ text: "Select state", value: null }, "test1", "test1", "test1", "test1"],
         maritalstatus: [
           { text: "Select Marital Status", value: null },
           "test1",
           "test1",
           "test1",
           "test1",
         ],
         rolesapplicable: [
           { text: "Select state", value: null },
           "test1",
           "test1",
           "test1",
           "test1",
         ],
         drivelicensestate: [
           { text: "worksite", value: null },
           "test1",
           "test1",
           "test1",
           "test1",
         ],
         insurance: [
           { text: "Select Insurance", value: null },
           "test1",
           "test1",
           "test1",
           "test1",
         ],
         subrole: [
           { text: "Select subrole", value: null },
           "test1",
           "test1",
           "test1",
           "test1",
         ],
         role: [{ text: "Select role", value: null }, "test1", "test1", "test1", "test1"],
         practicename: [{ text: "Select practice name", value: null }, "test1", "test1", "test1", "test1"],
         ethnicity: [{ text: "Select ethnicity", value: null }, "test1", "test1", "test1", "test1"],
         formname: [
           { text: "Organization Name", value: null },
           "test1",
           "test1",
           "test1",
           "test1",
         ],
         language: [{ text: "English", value: null }, "test1", "test1", "test1", "test1"],
         AddPatient: true,
         AddPrimaryCarePhysician: false,
         ShowInsurancesAccepted: false,
        //  axios,
         show:true
       };
     },
     methods: {
       onSubmit: function (event) {
      //    alert("hello")
      //    this.axios.post(`${form_api}forms`, {
      //      businessId: 767,
      //      name: "TO DO List",
      //      documentCategory: "ProgressNotes",
      //      includePracticeLogo: true,
      //      elements: [
      //        {
      //          question: "yes",
      //          type: "longAns",
      //          questionName: "How Are You?",
      //          required: true,
      //          orderId: 1,
      //          choices: []
      //        }
      //      ],
      //      creatorUserId: 2287,
      //      creatorUserName: null,
      //      source: "practice_form",
      //      creationDate: "2022-02-03"
      //    })
      //     .then((data) => {
      //       console.log(data);
      //      })
        
      //   //  this.AddPatient = false
      //   //  this.AddPrimaryCarePhysician = true
        },
     },
   };
</script>
<style scoped>
   .form-control {
   border-radius: 10px;
   }
   .breadcrumb-main {
   background: #F5F8FA;
   border-radius: 15px;
   margin-top: 10px;
   }
   .element {
   background: #fff;
   padding-top: 20px;
   padding-bottom: 10px;
   }
   .form-select{
   border-radius: 10px;
   }
   button.btn.btn-light {
   margin-right: 10px;
   padding-left: 30px;
   padding-right: 30px;
   border-radius: 10px;
   }
   /* button.btn.btn-primary {
   padding-left: 30px;
   padding-right: 30px;
   border-radius: 10px;
   } */
   .form_questions {
    background: #f5f8fa;
    border-radius: 10px;
    margin-left: 25px;
    margin-right: 25px;
    padding: 1px;
}
span.question {
    margin-left: 25px;
    color: #517193;
    font-weight: bold;
}
.form_questions_element {
    margin-left: 25px;
    margin-right: 25px;
}
h2.new_element {
    color: #517193;
}
svg {
    background: #f5f8fa;
    margin: 0px;
    border-radius: 5px;
    width: 30px;
    height: 30px;
}
button.btn.btn-light.btn_answer {
    border: 1px solid #ced4da;
    color: #0d6efd;
    float: right;
}
span.form_question {
    color: #917993;
    font-weight: bold;
}
</style>