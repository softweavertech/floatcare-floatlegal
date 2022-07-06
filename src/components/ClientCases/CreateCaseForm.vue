<template>
  <div class="container-fluid main-container-bg p-1 p-lg-4 p-md-4">
    <div class="main-wrap">
      <b-container fluid class="p-1">
        <div class="card main-card overflow-hidden">
          <b-card-header class="bg-themecolor border-0 px-3 py-5" style="height: 287px  ;">
            <b-container fluid>
              <b-row class="py-4 pt-0">
                <b-col class="text-left heading-div">
                  <h1 class="title ml-5">Create Evaluation</h1>
                </b-col>
              </b-row>
            </b-container>
          </b-card-header>
          <b-card-body class="p-0 bg-white pos-r" style="height: 700px  ;">
            <div class="">
              <div class="create-case-form w-75 m-auto">
                <Wizard
                  rounded-tabs
                  card-background
                  navigable-tabs
                  scrollable-tabs
                  :nextButton="{
                    text: 'Next',
                    icon: 'Back',
                    hideIcon: true, // default false but selected for sample
                    hideText: false, // default false but selected for sample
                  }"
                  :custom-tabs="[
                    
                    {
                      title: 'Client Info',
                    },
                    {
                      title: 'Select Provider',
                    },
                    {
                      title: 'Attach LOP & Documents',
                    },
                    {
                      title: 'Preferred Providers & Pharmacy',
                    },
                  ]"
                  :beforeChange="onTabBeforeChange"
                  @change="onChangeCurrentTab"
                >
                  <div v-if="currentTabIndex === 0"><step-one/></div>
                  <div v-if="currentTabIndex === 1">Tab 1</div>
                  <div v-if="currentTabIndex === 2">Tab 2</div>
                  <div v-if="currentTabIndex === 3">Tab 3</div>
              
                </Wizard>
              </div>
            </div>
          </b-card-body>
        </div>
      </b-container>
    </div>
  </div>

 </template>

<script>
import "@/scss/attorney.scss"
import "@/scss/staff.scss"
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
import BreadCrumbNav from "@/components/ClientCases/Shared/BreadCrumbNav.vue";
import StepOne from "@/components/ClientCases/Shared/CreateEvaluationSteps/StepOne.vue";
export default {
  name: "CreateCaseForm",
  components: {
    Wizard,
    "bread-crumb-nav": BreadCrumbNav,
    "step-one": StepOne,
  },
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  methods: {
    onChangeCurrentTab(index) {
      this.currentTabIndex = index;
    },
    onTabBeforeChange() {
      if (this.currentTabIndex === 0) {
        console.log("First Tab");
      }
      console.log("All Tabs");
    },
  },
};
</script>

<style>
.css {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}

.maincard {
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 0px 0px;
}
.head-section {
  background-color: #f5f9fc;
  height: 150px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.headdata {
  font-size: 26px;
  font-weight: 600;
  padding-left: 25px;
  padding-top: 25px;
}
.fw-body-list{
  padding: 0;
  margin: 0;
}
.form-wizard-vue .fw-step-checked {
    border: 1px solid #3D6083;
}
li .fw-list-wrapper-icon {
    background: #fafaff;
}
.fw-step-container > i {
    font-style: unset;
}
.form-wizard-vue .fw-body-list .fw-list-progress-active {
    background: #3D6083 !important;
    /* border: 1px dashed #3D6083; */
}
.form-wizard-vue .fw-body-list .fw-list-progress {
    width: 69%;
    height: 1px;
    top: 39%;
    left: 67%;
    border: 1px dashed #35567721;
}
.form-wizard-vue .fw-step-active {
    background: #3D6083 !important;
}
span.fw-step-title.active{
  color: #3D6083 !important;
}
.fw-overflow-scroll .fw-body-list:hover {
    overflow: hidden;
}
.fw-overflow-scroll .fw-body-list {
    overflow: hidden;
    border-bottom: 1px solid #cbdae5;
}
.create-case-form.w-75.m-auto {
    position: absolute;
    left: 13%;
    top: -21%;
}
button.fw-btn {
    background: #3E8ACC !important;
}
.form-wizard-vue .fw-body-list li {
    position: relative;
    padding: 3rem 1.5rem;
}
</style>
