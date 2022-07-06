<template>
  <div class="bg-white overflow-hidden">
    <div class="patient-list-top">
      <div class="d-flex align-items-center p-4 pb-0">
        <h1 class="me-auto">{{title}}</h1>
        <button
          class="btn btn-outline-secondary"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasAddPlan"
          aria-controls="offcanvasRight"
        >
          <img :src="addIcon" class="px-2" />{{ addBtn }}
        </button>
      </div>
      <div class="border-bottom px-2">
        <b-nav class="bread-crumb-nav pt-3 mr-auto">
          <b-nav-item
            v-for="link in breadCrumb"
            :to="link.url"
            :key="link.value"
            :value="link.name"
            @click="tabsClick(link.value, link.url)"
          >
            {{ link.name }}
          </b-nav-item>
        </b-nav>
      </div>
      <b-row class="p-4">
        <b-col cols="3">
        
          <SearchInput v-model="searchVal" />
        </b-col>
        <b-col cols="5"></b-col>
        <b-col cols="4 text-end" >
          <div class>
            <div class="filterActions" id="filterActions">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <div class="fc-btn-black">
                    <i class="fa fa-filter" aria-hidden="true"></i>
                    &nbsp;|&nbsp;
                    <strong>A to Z</strong> &nbsp;
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                </template>
                <b-dropdown-item href="#" id="filterList">A to Z</b-dropdown-item>
                <b-dropdown-item href="#" id="filterList">Z to A</b-dropdown-item>
              </b-dropdown>
            </div>
          </div></b-col
        >
      </b-row>
    </div>
  </div>
</template>

<script>
import addIcon from "@/assets/images/Icon/addIcon.svg";
import SearchInput from "vue-search-input";
import "vue-search-input/dist/styles.css";
export default {
  props: ["addBtn","title"],
  components: {
    SearchInput,
  },
  data() {
    return {
      addIcon: addIcon,
      displayItem: "CaseInfo",
      breadCrumb: [
        {
          url: "/client-cases/case-info",
          name: "My Cases",
          value: "CaseInfo",
        },
        {
          url: "/client-cases/outbound-cases",
          name: "Outbound Cases",
          value: "outboundCase",
        },
        {
          url: "/client-cases/pending-acceptance",
          name: "Pending Acceptance",
          value: "pendingAcceptance",
        },
        {
          url: "/client-cases/co-counsel-cases",
          name: "Co-Counsel Cases",
          value: "coCounselCases",
        },
      ],
    };
  },
  methods: {
    tabsClick(value, link) {
      this.displayItem = value;
      this.$router.push(link);
    },
  },
};
</script>
<style scope lang="scss">
.filterActions .btn-group .btn {
  margin-left: 15px;
  margin-top: 2px;
  border: 1px solid #eff0f6;
  background: #eff0f6;
  border-radius: 5px;
  padding: 12px 13.5px;
  font-size: 14px;
  color: #5c63ab;
  width: 145px;
  height: 45px;
}
.search-input-wrapper input[data-search-input="true"] {
  border: 1px solid #3e8acc;
  border-radius: 10.35rem;
}
.patient-list-top {
  padding-bottom: 0px;
}

.bg-white {
  border-radius: 15px 15px 0px 0px !important;
}
.bread-crumb-nav {
  .nav-link {
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 500;
    color: #3d6083;
    padding-bottom: 15px;
  }

  .active {
    border-bottom: 2px solid #173e67;
    .nav-link {
      color: rgba($color: #173e67, $alpha: 1);
      font-weight: 600;
    }
  }
}
</style>
