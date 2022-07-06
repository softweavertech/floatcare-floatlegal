<template>
  <div class="vertical-main-tabs p-3">
    <b-row class="">
      <b-col sm="12" md="12" lg="12">
        <h4 class="fw-bold text-blue p-2">Associated Cases</h4>
      </b-col>
    </b-row>
    <div class="table-section">
      <table class="table">
        <thead>
          <tr>
            <th v-for="field in fields" :key="field" :class="field.class">
              {{ field.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="patient-name">
              <b-row>
                <b-col sm="3" md="3" lg="3">
                  <img
                    src="@/assets/images/Icon/profilepicture.jpg"
                    class="profile-image"
                    alt="section"
                  />
                </b-col>
                <b-col sm="9" md="9" lg="9" class="text-left">
                  <div class="ml-2">Patricia Avaa</div>
                  <!-- <small class="text-muted">Cardiologist</small> -->
                </b-col>
              </b-row>
            </th>
            <td class="text-center other-data">Alabama City</td>
            <td class="text-center other-data">May 12, 2022</td>
            <td class="text-center other-data">
              <div class="case-status Pending">Pending</div>
            </td>
            <td class="text-center other-data">
              <div class="chat-box">
                <img
                  class="chat-icon"
                  src="/src/assets/images/Icon/chat-icon.svg"
                  alt="chat"
                />
                <span class="notes-count">02</span>
              </div>
            </td>
            <td class="text-center other-data">
              <button type="button" class="btn btn-light other-data" @click="viewCase">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row" class="patient-name">
              <b-row>
                <b-col sm="3" md="3" lg="3">
                  <img
                    src="@/assets/images/Icon/profilepicture.jpg"
                    class="profile-image"
                    alt="section"
                  />
                </b-col>
                <b-col sm="9" md="9" lg="9" class="text-left">
                  <div class="ml-2">Patricia Avaa</div>
                  <!-- <small class="text-muted">Cardiologist</small> -->
                </b-col>
              </b-row>
            </th>
            <td class="text-center other-data">Alabama City</td>
            <td class="text-center other-data">May 05, 2022</td>
            <td class="text-center other-data">
              <div class="case-status Accepted">Accepted</div>
            </td>
            <td class="text-center other-data">
              <div class="chat-box">
                <img
                  class="chat-icon"
                  src="/src/assets/images/Icon/chat-icon.svg"
                  alt="chat"
                />
                <span class="notes-count">01</span>
              </div>
            </td>
            <td class="text-center other-data">
              <button type="button" class="btn btn-light other-data" @click="viewCase">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import chatImg from '@/assets/images/chat-icon.svg';
import moment from "moment";
export default {
  components: {},
  created: function () {
    this.moment = moment;
  },
  data: function () {
    return {
      fields: [
        {
          key: "patientNameStatus",
          label: "Attorney name",
          class: "text-left table-title",
        },
        {
          key: "Worksite",
          label: "Worksite",
          class: "text-left table-title",
        },
        {
          key: "referralDate",
          label: "Referral date",
          class: "text-left table-title",
        },
        {
          key: "referralStatus",
          label: "Referral status",
          class: "text-left table-title",
        },
        {
          key: "Notes",
          label: "Notes",
          class: "text-left table-title",
        },
        {
          key: "Action",
          label: "Action",
          class: "text-left table-title",
        },
      ],

      tableData: false,
      AllClientCases: [],
      patientCaseList: [
        {
          url: "/clientcase",
          name: "Client Cases",
        },
        {
          url: "/dashboard",
          name: "Cases",
        },
      ],
    };
  },

  mounted() {
    this.tableData = true;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.case-status {
  text-transform: capitalize;
  &.Accepted {
    padding: 10px;
    background: #74e790;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    font-size: 14px;
  }
  &.Pending {
    padding: 10px;
    background: #ffbc65;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    font-size: 14px;
  }
  &.Rejected {
    padding: 10px;
    background: #fc5a5a;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    font-size: 14px;
  }
}
.chat-icon {
  width: 15px;
  height: 15px;
  color: white !important;
  // transform: rotateX(45deg);
}

.chat-box {
  cursor: pointer;
  margin-left: 0px !important;
  margin-right: 0px !important;
  padding: 0px 5px 0px 5px;
  border-radius: 5px;
  position: relative;
  border: 2px solid #5c63ab;
  background-color: #5c63ab;
}
.note-count {
  padding: 11px 14px 9px 13px;
  cursor: pointer;
  background-color: #dfe5eb !important;
  color: #103c67;
  border-radius: 11px;
}
.notes-count {
  color: white;
}
.breadcrumb-main {
  border-bottom: 0.5px solid #e1e3e4;
  padding: 15px 15px 0px 15px;
  background: rgba(#818181, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 2px;
  .title {
    color: #173e67;
    font-size: 30px;
    font-weight: 600;
  }

  @media only screen and (min-width: 300px) and (max-width: 768px) {
    .case-breadcrumb {
      //  position: absolute;
      //    top: 42%;
      display: none;
    }
  }
  .case-breadcrumb {
    position: absolute;
    top: 11%;
  }
  .case-section {
    padding: 10px;
  }
  .bread-crumb-nav {
    li {
      &:first-child {
        margin-left: 0;
      }
    }

    .nav-link {
      font-size: 18px;
      font-weight: 600;
      color: #173e67;

      &.active {
        border-bottom: 2px solid #173e67;
      }
    }
  }
}
.breadcrumb {
  padding: 15px;
  background: rgba(#818181, 0.05);
  border-radius: 0px;
  box-shadow: 2px;
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
}
.search-bar {
  background: #fafcff;
  border-radius: 10px;
  padding-right: 0px;
  border: solid 1px #e2e2ea;
  max-width: 320px;
  height: 40px;
  /*-- hide for mvp 1 --*/

  .form-control {
    border: none;
    font-size: 0.875rem;
    height: 38px;
    box-shadow: none;
    border-radius: 10px;
  }

  ::-webkit-input-placeholder {
    color: #dbdbdb;
  }

  .btn {
    background: #fafcff;
    border-color: #e2e2ea;
    border-right: 0;
    height: 39px;
    outline: none;
    color: #92929d;
    border-radius: 10px;
    margin-bottom: 0;
    box-shadow: none;
    padding-top: 2px;

    &:hover,
    &:focus {
      background: #0062ff;
      color: #fafafb;
      outline: none;

      path {
        fill: white;
      }
    }
  }
}
.main-section {
  background: #ffff;
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
// .table-section{
//     //  background:  #eeeef1;
//   padding: 15px;
//   border-radius: 10px;

// }
thead th {
  background-color: #eff3f6 !important;
}
thead th:first-child {
  border-radius: 10px 0 0 10px !important;
  border: none !important;
}
thead th:last-child {
  border-radius: 0 10px 10px 0 !important;
}

/* remove border from th... */
/* !important is only required in stack snippet, probably not in your production code */

.table > thead > tr > th {
  border: none !important;
}
thead,
tbody,
tfoot,
tr,
td,
th {
  border: 2px solid white;
}

/* remove border from first tbody row... */
.table > tbody > tr:first-child > td,
.table > tbody > tr:first-child > th {
  border-top: none !important;
}
.table-title {
  color: #92929d;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
/** Border Fix. **/
.patient-name {
  color: #173e67;
  font-size: 14px;
  font-weight: 600;
  vertical-align: middle;
}
.other-data {
  color: #4394AD;
     border: none;
  font-size: 14px;
  font-weight: 400;
  vertical-align: middle;
}
.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
</style>
