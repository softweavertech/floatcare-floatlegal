<style>
span.input-group-addon {
  top: 32px;
  left: 15px;
  padding: 4px 10px;
}
#input-search {
  border-radius: 60px !important;
  padding: 0px 50px;
}
span.profile-heading {
  background: rebeccapurple;
  border-radius: 17px;
  color: #ffff;
}
.boder-radius-top-div {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.vertical-nav li.nav-item {
  border-bottom: 1px solid #e9ecef;
}
.nav .nav-item a {
  display: block;
}
.vertical-main-tabs {
  background: #fafafc;
}
.patient-nav {
  background: #fafafc;
  padding: 0;
}
.list-router {
  text-decoration: none !important;
  list-style-type: none;
  color: #818181 !important;
}
.list-router > a {
  color: #818181 !important;
  padding: 10px;
  margin: 2px 0px;
}
.active.view-patient-nav {
  background-color: #ffff;
}
.active.view-patient-nav a {
  color: #5c63ab !important;
  background-color: #ffff;
  font-size: 16px;
}
.active a span.border-list {
  position: relative;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  left: -10px;
  top: 0px;
  font-size: 20px;
  border-left: 3px solid #5c63ab;
}
</style>
<template>
  <div class="container-fluid main-container-bg p-4">
    <div class="boder-radius-top-div bg-white overflow-hidden">
      <div class="manage-referral-top p-5">
        <b-row>
          <b-col cols="3" lg="1" md="2" class="py-3">
            <span class="text-center fs-2 fw-bold p-3 profile-heading">
              KP
            </span>
          </b-col>
          <b-col cols="9" lg="4" md="4">
            <div>
              <small class="text-muted">Client</small>
            </div>
            <div class="fs-5 fw-bold">Samantha Dami</div>
            <div>
              <small class="text-muted">Last updated Jun 12, 2022 </small>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="container-fluid main-container-bg p-4">
        <div class="main-section">
          <b-container fluid>
            <b-row>
              <b-col sm="12" md="3" lg="3" class="patient-nav">
                <div class="vertical-main-tabs">
                  <b-row class="align-items-center mb-3">
                    <b-col sm="12" md="12" lg="12">
                      <ul class="nav flex-column vertical-nav">
                        <li class="nav-item">
                          <router-link
                            tag="li"
                            class="list-router pb-1 pt-1 view-patient-nav"
                            active-class="active"
                            :to="'/client-basic-information'"
                          >
                            <a class="text-decoration-none">
                              <span class="border-list"></span>
                              <svg
                                width="15px"
                                height="18px"
                                viewBox="0 0 15 18"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>profile@3x</title>
                                <g
                                  id="Symbols"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="card/List-View/Staff"
                                    transform="translate(-1213.000000, -15.000000)"
                                    fill="#5C63AB"
                                  >
                                    <g
                                      id="Button/With-Icon/Btn_Secondary_Icon"
                                      transform="translate(1198.000000, 5.000000)"
                                    >
                                      <g
                                        id="ic_Plus"
                                        transform="translate(10.000000, 7.000000)"
                                      >
                                        <path
                                          d="M7.76923077,7.82352941 C7.76923077,5.15956768 9.8872683,3 12.5,3 C15.1127317,3 17.2307692,5.15956768 17.2307692,7.82352941 C17.2307692,9.49624988 16.3956963,10.9701043 15.1274305,11.8353324 C17.9736545,12.9209146 20,15.7191781 20,19 L20,21 L5,21 L5,19 C5,15.7191781 7.02634547,12.9209146 9.87256955,11.8353324 C8.60430374,10.9701043 7.76923077,9.49624988 7.76923077,7.82352941 Z M12.5,10.5294118 C13.9656788,10.5294118 15.1538462,9.31794697 15.1538462,7.82352941 C15.1538462,6.32911185 13.9656788,5.11764706 12.5,5.11764706 C11.0343212,5.11764706 9.84615385,6.32911185 9.84615385,7.82352941 C9.84615385,9.31794697 11.0343212,10.5294118 12.5,10.5294118 Z M12.5,13.4705882 C9.54347416,13.4705882 7.13953005,15.8828617 7.07812624,18.8823529 L17.9218738,18.8823529 C17.86047,15.8828617 15.4565258,13.4705882 12.5,13.4705882 Z"
                                          id="Shape"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                              &nbsp;Client Basic Information</a
                            ></router-link
                          >
                        </li>
                        <li class="nav-item referral-nav">
                          <router-link
                            tag="li"
                            class="list-router py-1 view-patient-nav"
                            active-class="active"
                            :to="'/client-care-provider'"
                            ><a class="text-decoration-none"
                              ><span class="border-list"></span
                              ><svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>Friends Request</title>
                                <g
                                  id="Manage-Referral"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Manage-Referrals/-View-patient-profile"
                                    transform="translate(-147.000000, -438.000000)"
                                  >
                                    <g
                                      id="Friends-Request"
                                      transform="translate(147.000000, 438.000000)"
                                    >
                                      <circle
                                        id="Oval"
                                        cx="12"
                                        cy="12"
                                        r="12"
                                      ></circle>
                                      <g
                                        id="Group-24"
                                        transform="translate(1.000000, 1.000000)"
                                        fill="#5C63AB"
                                      >
                                        <path
                                          d="M8,11 C12.418278,11 16,14.581722 16,19 L16,21 C16,21.5522847 15.5522847,22 15,22 L1,22 C0.44771525,22 0,21.5522847 0,21 L0,19 C0,14.581722 3.581722,11 8,11 Z M8,13 C4.6862915,13 2,15.6862915 2,19 L2,20 L14,20 L14,19 C14,15.6862915 11.3137085,13 8,13 Z M19,7 L19,9 L21,9 C22.3333333,9 22.3333333,11 21,11 L19,11 L19,13 C19,14.3333333 17,14.3333333 17,13 L17,11 L15,11 C13.6666667,11 13.6666667,9 15,9 L17,9 L17,7 C17,5.66666667 19,5.66666667 19,7 Z M8,0 C10.7614237,0 13,2.23857625 13,5 C13,7.76142375 10.7614237,10 8,10 C5.23857625,10 3,7.76142375 3,5 C3,2.23857625 5.23857625,0 8,0 Z M8,2 C6.34314575,2 5,3.34314575 5,5 C5,6.65685425 6.34314575,8 8,8 C9.65685425,8 11,6.65685425 11,5 C11,3.34314575 9.65685425,2 8,2 Z"
                                          id="Combined-Shape"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g></svg
                              >&nbsp;Client's Care Provider(s)</a
                            ></router-link
                          >
                        </li>
                        <li class="nav-item referral-nav">
                          <router-link
                            tag="li"
                            class="list-router py-1 view-patient-nav"
                            active-class="active"
                            :to="'/health-insurance'"
                            ><a class="text-decoration-none"
                              ><span class="border-list"></span
                              ><svg
                                width="20px"
                                height="30px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>Health Insurance Selected@3x</title>
                                <defs>
                                  <path
                                    d="M9.66035554,0.0594461003 C9.87984883,-0.0198153668 10.1201512,-0.0198153668 10.3396445,0.0594461003 L19.3396445,3.3094461 C19.735923,3.45254668 20,3.82867536 20,4.25 L20,11 C20,16.4996419 16.6712061,20.1983018 10.2657497,21.9640421 C10.0940579,22.011371 9.91284144,22.0119889 9.7408309,21.965832 C3.33125415,20.245901 0,16.5445075 0,11 L0,4.25 C0,3.82867536 0.264077006,3.45254668 0.660355536,3.3094461 L9.66035554,0.0594461003 Z M10,2.06320329 L2,4.95209218 L2,11 C2,15.4966243 4.58512253,18.4399927 9.99650462,19.9620023 C15.4123019,18.3998454 18,15.4544444 18,11 L18,4.95209218 L10,2.06320329 Z M9.04966518,5.93024554 C9.04966518,5.37796079 9.49738043,4.93024554 10.0496652,4.93024554 C10.6019499,4.93024554 11.0496652,5.37796079 11.0496652,5.93024554 L11.0496652,12.5427856 C11.0496652,13.0950704 10.6019499,13.5427856 10.0496652,13.5427856 C9.49738043,13.5427856 9.04966518,13.0950704 9.04966518,12.5427856 L9.04966518,5.93024554 Z M10,17 C9.44771525,17 9,16.5522847 9,16 C9,15.4477153 9.44771525,15 10,15 C10.5522847,15 11,15.4477153 11,16 C11,16.5522847 10.5522847,17 10,17 Z"
                                    id="path-1"
                                  ></path>
                                  <filter
                                    x="-87.5%"
                                    y="-56.8%"
                                    width="275.0%"
                                    height="259.1%"
                                    filterUnits="objectBoundingBox"
                                    id="filter-2"
                                  >
                                    <feOffset
                                      dx="0"
                                      dy="5"
                                      in="SourceAlpha"
                                      result="shadowOffsetOuter1"
                                    ></feOffset>
                                    <feGaussianBlur
                                      stdDeviation="5"
                                      in="shadowOffsetOuter1"
                                      result="shadowBlurOuter1"
                                    ></feGaussianBlur>
                                    <feColorMatrix
                                      values="0 0 0 0 0.650980392   0 0 0 0 0.643137255   0 0 0 0 0.631372549  0 0 0 0.1 0"
                                      type="matrix"
                                      in="shadowBlurOuter1"
                                    ></feColorMatrix>
                                  </filter>
                                </defs>
                                <g
                                  id="Health-Insurance-Selected"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g>
                                    <rect
                                      id="Rectangle"
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <g
                                      transform="translate(2.000000, 1.000000)"
                                      id="Shape"
                                    >
                                      <use
                                        fill="black"
                                        fill-opacity="1"
                                        filter="url(#filter-2)"
                                        xlink:href="#path-1"
                                      ></use>
                                      <use
                                        fill="#5C63AB"
                                        fill-rule="evenodd"
                                        xlink:href="#path-1"
                                      ></use>
                                    </g>
                                  </g>
                                </g></svg
                              >&nbsp;Health Insurance</a
                            ></router-link
                          >
                        </li>
                        <li class="nav-item referral-nav">
                          <router-link
                            tag="li"
                            class="list-router py-1 view-patient-nav"
                            active-class="active"
                            :to="'/associated-cases'"
                            ><a class="text-decoration-none"
                              ><span class="border-list"></span
                              ><svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>Associated Referrals Seleted@3x</title>
                                <g
                                  id="Patient"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Manage-Referrals/-Health-Insurance-"
                                    transform="translate(-147.000000, -555.000000)"
                                  >
                                    <g
                                      id="Associated-Referrals-Seleted"
                                      transform="translate(147.000000, 555.000000)"
                                    >
                                      <g id="Group-85" opacity="0.2">
                                        <rect
                                          id="Icon-Spacing"
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                          rx="5"
                                        ></rect>
                                      </g>
                                      <path
                                        d="M20.372093,3.92096944 L20.372093,3.92096944 C15.7674419,3.4805058 13.1627907,1.44046365 13.1627907,1.41728135 C12.4883721,0.860906217 11.5348837,0.860906217 10.8604651,1.41728135 C10.8372093,1.44046365 8.23255814,3.4805058 3.62790698,3.92096944 C2.69767442,4.01369863 2,4.77871444 2,5.70600632 C2,18.6880927 10.9069767,22.6986301 11.2790698,22.8609062 C11.5116279,22.9536354 11.744186,23 12,23 C12.255814,23 12.4883721,22.9536354 12.7209302,22.8609062 C13.0930233,22.6986301 22,18.6880927 22,5.70600632 C22,4.77871444 21.3023256,4.01369863 20.372093,3.92096944 Z M11.9767442,21.28451 C11.8372093,21.2149631 10.2325581,20.4963119 8.48837209,18.711275 L8.72093023,16.6944152 C8.86046512,15.5816649 9.79069767,14.7471022 10.9069767,14.7471022 L13.0697674,14.7471022 C14.1860465,14.7471022 15.1395349,15.5816649 15.255814,16.6944152 L15.4883721,18.711275 C13.7674419,20.4963119 12.1395349,21.2149631 11.9767442,21.28451 Z M12,12.6606955 C10.8837209,12.6606955 9.97674419,11.7565859 9.97674419,10.6438356 C9.97674419,9.53108535 10.8837209,8.62697576 12,8.62697576 C13.1162791,8.62697576 14.0232558,9.53108535 14.0232558,10.6438356 C14.0232558,11.7565859 13.1162791,12.6606955 12,12.6606955 Z M17.0465116,16.8566913 L17,16.4857745 C16.8372093,15.0484721 15.8837209,13.8893572 14.627907,13.3329821 C15.3255814,12.6375132 15.7674419,11.687039 15.7674419,10.6438356 C15.7674419,8.58061117 14.0697674,6.88830348 12,6.88830348 C9.93023256,6.88830348 8.23255814,8.58061117 8.23255814,10.6438356 C8.23255814,11.7102213 8.6744186,12.6606955 9.37209302,13.3329821 C8.11627907,13.8661749 7.1627907,15.0484721 7,16.4857745 L6.95348837,16.8566913 C5.25581395,14.4225501 3.79069767,10.829294 3.81395349,5.68282403 C9.06976744,5.17281349 11.9534884,2.78503688 12.0465116,2.78503688 C12.1627907,2.87776607 15.0697674,5.19599579 20.2093023,5.68282403 L20.255814,5.72918862 C20.255814,10.8524763 18.7674419,14.4457323 17.0465116,16.8566913 Z"
                                        id="Shape"
                                        fill="#5C63AB"
                                        fill-rule="nonzero"
                                      ></path>
                                    </g>
                                  </g>
                                </g></svg
                              >&nbsp;Associated Referrals</a
                            ></router-link
                          >
                        </li>
                        
                        <li class="nav-item referral-nav">
                          <router-link
                            tag="li"
                            class="list-router py-1 view-patient-nav"
                            active-class="active"
                            :to="'/associated-referrals'"
                            ><a class="text-decoration-none"
                              ><span class="border-list"></span
                              ><img :src="medicalevents"/>&nbsp;Associated Cases</a
                            ></router-link
                          >
                        </li>
                        <li class="nav-item referral-nav">
                          <router-link
                            tag="li"
                            class="list-router py-1 view-patient-nav"
                            active-class="active"
                            :to="'/medical-events'"
                            ><a class="text-decoration-none"
                              ><span class="border-list"></span>   <img :src="medicalevent"/>&nbsp;Logged in Medical Events</a
                            ></router-link
                          >
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col sm="12" md="9" lg="9" class="mt-4 mt-lg-0 mt-md-0 px-0 px-lg-2 px-md-2">
                <router-view></router-view>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
  <b-modal
    hide-footer="true"
    class=""
    size="lg"
    hide-header="true"
    v-model="modalaCreatePatient"
    centered
  >
  </b-modal>
</template>

<script>
import medicalevents from '@/assets/images/MedicalEvents@3x.svg';
import medicalevent from '@/assets/images/MedicalEvent@3x.svg';
export default {
  components: {},
  data() {
    return {
      modalaCreatePatient: false,
      adminlogin: "false",
      displayItem: "ManagePatient",
      medicalevents: medicalevents,
       medicalevent: medicalevent,

      breadCrumb: [
        {
          url: "/manage-referrals/patient/manage-patient",
          name: "Manage Patient",
          value: "ManagePatient",
        },
      ],
    };
  },
  mounted() {
    let organizationId = JSON.parse(
      localStorage.getItem("userBasicInformation")
    );
    if (organizationId.userTypeId == 1) {
      this.adminlogin = "/admin";
    }else{
      this.adminlogin = "";
    }
  },
  methods: {
    tabsClick(value, link) {
      this.displayItem = value;
      this.$router.push(link);
    },
    showAddModel() {
      this.modalaCreatePatient = true;
    },
    closeAddModel() {
      this.modalaCreatePatient = false;
    },
  },
};
</script>
