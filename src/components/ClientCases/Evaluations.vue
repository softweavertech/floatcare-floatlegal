<template>
  <div class="container-fluid staff-main-container-bg p-2 p-lg-4 p-md-4 ">
    <div class="shadow-main-card border-top-15">
      <bread-crumb-case :btnName="btnName" :btnAction="btnAction" breadCrumbTitle="William Carness" />
      <div class="bg-themecolor py-3 px-4">
        <b-row>
          <b-col cols="3">
            <div
              class="inside-search bg-white border-light-blue  position-relative w-35 rounded-pill overflow-hidden pe-2">
              <i class="fa fa-search search-icon" aria-hidden="true"></i>
              <input type="search" v-model="SearchQuery" placeholder="Search"
                class="border-0 w-90 py-2 search-input search-box">
            </div>
          </b-col>
          <b-col cols="2">

          </b-col>
          <b-col cols="7">
            <div class="d-flex ms-5">
              <div class="color-tabs shadow-lite-3 align-items-center border d-flex p-1 bg-white b-radius ">
                <span class="case-color color-box border-radius-5 me-2">

                </span>

                <span class="font-14 primary-dark me-2">Case Consultant</span>
              </div>
              <div class="ms-3 color-tabs shadow-lite-3 align-items-center border d-flex p-1 bg-white b-radius ">
                <span class="attorney-color color-box border-radius-5 me-2">

                </span>

                <span class="font-14 primary-dark me-2">Attorney</span>
              </div>
              <div class="ms-3 color-tabs shadow-lite-3 align-items-center border d-flex p-1 bg-white b-radius ">
                <span class="manual-color color-box border-radius-5 me-2">

                </span>

                <span class="font-14 primary-dark me-2">Manual Entry</span>
              </div>
              <div class>
                <div class="filterActions" id="filterActions">
                  <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                      <div class="fc-btn-black">
                        <img :src="Shape" />

                        &nbsp;|&nbsp;
                        <strong>A to Z</strong> &nbsp;
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                      </div>
                    </template>
                    <b-dropdown-item href="#" v-for="sortkey in sortSettings" :key="sortkey" id="filterList">
                      {{ sortkey }}
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-container fluid class="bg-white border-bottom-radius py-4">
        <div v-if="NoEvaluation" class="d-flex justify-content-center align-items-center b-tab-border-radius p-5">
          <img :src="NoEvaluationImg" @click="NoEvaluation = false">
        </div>
        <b-tabs v-else nav-class="ps-4" content-class="b-tab-border-radius  p-3 custom-heightbiling"
          class=" col-custom-tabs h-75 border-0">
          <b-tab title="All" active>
            <all-evaluations :tableHeadColumn="columns" />
          </b-tab>
          <b-tab title="Action needed">
            <div class="d-flex">
              <img :src="NoEvaluationImg" class="mx-auto">
            </div>
          </b-tab>
          <b-tab title="Recall/Archived Evaluations">
            <div class="d-flex">
              <img :src="NoEvaluationImg" class="mx-auto">
            </div>
          </b-tab>
        </b-tabs>
      </b-container>
    </div>
  </div>
</template>
<script>
import TableLite from "vue3-table-lite";
import "@/scss/attorney.scss"
import "vue3-table-lite/ts";
import BreadCrumbCase from '@/components/ClientCases/Shared/BreadCrumbCase.vue';
import AllEvaluationsVue from "@/components/ClientCases/Shared/AllEvaluations.vue";
import NoEvaluationImg from "@/assets/images/no-referrals.svg";
import Shape from "@/assets/images/Icons/Shape@3x.svg"
export default {

  components: {
    "bread-crumb-case": BreadCrumbCase,
    "all-evaluations": AllEvaluationsVue,
    TableLite,

  },
  data() {
    return {
      Shape,
      btnName: "Create Evaluation",
      isLoading: false,
      NoEvaluation: false,
      NoEvaluationImg,
      Required: "No",
      columns: [
        {
          label: "",
          field: "",
        },
        {
          label: "Provider",
          field: "provider",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Type",
          field: "type",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Profession",
          field: "profession",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Worksite",
          field: "worksite",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Date",
          field: "date",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Email",
          field: "email",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Contact",
          field: "contact",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Referral Status",
          field: "referralStatus",
          class: "text-left",
          sortable: true,
        },
        {
          label: "Notes",
          field: "note",
          class: "text-left",
          sortable: true,
        },
      ],
      rows: [{
        clientNAme: '-',
        attorneyAssigned: 'jack',
        paralegalAssigned: 'example@example.com',
        caseManagerAssigned: '-',
        carePlans: '-',
        status: '-',
        action: '-'
      }, {
        clientNAme: '-',
        attorneyAssigned: 'jack',
        paralegalAssigned: 'example@example.com',
        caseManagerAssigned: '-',
        carePlans: '-',
        status: '-',
        action: '-'
      }],
      totalRecordCount: 2,
      sortable: {
        order: "id",
        sort: "asc",
      },
    }

  },
  methods:{
    btnAction(){
   
      this.$router.push('/client-cases/create-evaluation');
    },
  }

}
</script>
<style  scope="scss">
.filterActions .btn-group .btn {
  margin-left: 15px;
  border: none;
  background: #3e89cc1a;
  border-radius: 10px;
  padding: 12px 13.5px;
  font-size: 14px;
  color: #1F3D5A;
  width: 145px;
  height: 35px;
}

.font-14-dark-600 {
  font-weight: 600;
  color: #173E67;
  font-size: 14px;
}

.fw-600 {
  font-weight: 600
}

.border-bottom-radius {
  border-radius: 0px 0px 15px 15px;
}

.shadow-main-card {
  box-shadow: 0px 0px 8px rgb(0 0 0 / 3%);
}

.shadow-lite-3 {
  box-shadow: 0px 1px 3px rgb(0 0 0 / 10%);
}

.border-radius-5 {
  border-radius: 5px;
}

.primary-dark {
  color: #173E67;
}

.font-12 {
  font-size: 12px;
}

.font-14 {
  font-size: 14px;
}

.border-light-blue {
  border: 1px solid #3E8ACC;
}

.case-color {
  background-color: #FFB30F;
}

.attorney-color {
  background-color: #6CCCA5;
}

.manual-color {
  background-color: #3D6083;
}

.in-progress {
  background-color: #1F3D5A;
}

.complete-btn {
  background-color: #74E790;
}
.approval-needed{
  background-color:  #F93D3D;
}
.color-box {
  height: 25px;
  width: 25px;
  display: inline-block;
}

.search-box {
  width: 88%;
  margin-left: 12%;
  font-size: 14px;
}

.search-icon {
  color: #3E8ACC;
  font-size: 14px;
  position: absolute;
  top: 48%;
  left: 10px;
  transform: translateY(-48%);
}

.border-top-15 {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.nav-tabs {
  border: none;
}

.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: #fafafc !important;
  border-top: #fff;
}

.nav-link {
  padding: 0.5rem 0.7rem !important;

}

.col-custom-tabs .nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #173E67 !important;
}

.b-tab-border-radius {
  background: #5563ab08 !important;
  border-radius: 15px;
}

.border-10 {
  border-radius: 10px;
}

.note-count {
  padding: 11px 14px 9px 13px;
  cursor: pointer;
  background-color: #dfe5eb !important;
  color: #103c67;
  border-radius: 10px;
}
</style>