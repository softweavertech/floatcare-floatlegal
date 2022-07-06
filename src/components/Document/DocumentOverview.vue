<template>
  <div class="container-fluid main-container-bg">
    <div class="breadcrumb-main">
      <b-container fluid>
        <b-row
          class="align-items-center mb-3"
          v-if="tempTitle == 'My Notes & Intake Forms'"
        >
          <b-col>
            <div class="create-form">
              <div class="pull-left">
                <h1 class="title">{{ tempTitle }}</h1>

                <ul class="nav bread-crumb-nav">
                  <li class="nav-item">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/intake-form"
                      ><a class="text-decoration-none"
                        >My Notes & Intake Forms</a
                      ></router-link
                    >
                  </li>

                  <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/template-library"
                      ><a class="text-decoration-none">Template Library</a></router-link
                    >
                  </li>
                   <!-- <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/documents"
                      ><a class="text-decoration-none">Documents</a></router-link
                    >
                  </li> -->
                  <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/document-setting"
                      ><a class="text-decoration-none">Document Settings</a></router-link
                    >
                  </li>
                </ul>
              </div>

              <div class="pull-right">
                <div class="create-buttton">
                  <div
                    class="btn-search btn btn-outline-secondary text-center"
                    type="button"
                    @click="createForm()"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <title>Icons/ic_add_circle</title>

                      <defs>
                        <path
                          d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 L17,13 Z"
                          id="path-1"
                        ></path>

                        <rect id="path-3" x="0" y="0" width="50" height="50"></rect>
                      </defs>

                      <g
                        id="Symbol"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g id="Icons/ic_add_circle">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>

                          <g id="Mask"></g>

                          <g id="🎨-Color" mask="url(#mask-2)">
                            <g transform="translate(-13.000000, -13.000000)">
                              <mask id="mask-4" fill="white">
                                <use xlink:href="#path-3"></use>
                              </mask>

                              <use
                                id="Color"
                                stroke="none"
                                fill="#0070FF"
                                fill-rule="evenodd"
                                xlink:href="#path-3"
                              ></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    Create Form
                  </div>
                </div>
              </div>
            </div>
          </b-col>

          <b-row class="mt-4 pr-0">
            <b-col md="10" class="mt-3">
              <div class="search-div w-25">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>

                <b-form-input
                  id="input-search"
                  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search"
                ></b-form-input>
              </div>
            </b-col>

            <b-col md="2" class="pull-right p-0 mt-2">
              <b-dropdown
                id="dropdown-1"
                text="Select"
                class="form-dropdown p-0 pull-right document_select_btn"
              >
                <b-dropdown-item>Progress Note</b-dropdown-item>

                <b-dropdown-item>Intake Note</b-dropdown-item>

                <b-dropdown-item>Survey Forms</b-dropdown-item>

                <b-dropdown-item>Assessment Forms</b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-row>

        <b-row
          class="align-items-center mb-3"
          v-else-if="tempTitle == 'Template Library'"
        >
          <b-col>
            <div class="create-form">
              <div class="pull-left">
                <h1 class="title">{{ tempTitle }}</h1>

                <ul class="nav bread-crumb-nav">
                  <li class="nav-item">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/intake-form"
                      ><a class="text-decoration-none"
                        >My Notes & Intake Forms</a
                      ></router-link
                    >
                  </li>

                  <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/template-library"
                      ><a class="text-decoration-none">Template Library</a></router-link
                    >
                  </li>
                   <!-- <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/documents"
                      ><a class="text-decoration-none">Documents</a></router-link
                    >
                  </li> -->

                   <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/document-setting"
                      ><a class="text-decoration-none">Document Settings</a></router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </b-col>

          <b-row class="mt-4 pr-0">
            <b-col md="10" class="mt-3">
              <div class="search-div w-25">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>

                <b-form-input
                  id="input-search"
                  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search"
                ></b-form-input>
              </div>
            </b-col>

            <b-col md="2" class="pull-right p-0 mt-2">
              <b-dropdown
                id="dropdown-1"
                text="Intake Form"
                class="form-dropdown p-0 pull-right"
              >
                <b-dropdown-item>Progress Note</b-dropdown-item>

                <b-dropdown-item>Intake Note</b-dropdown-item>

                <b-dropdown-item>Survey Forms</b-dropdown-item>

                <b-dropdown-item>Assessment Forms</b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-row>

        <b-row
          class="align-items-center mb-3"
          v-else-if="tempTitle == 'Documents'"
        >
          <b-col>
            <div class="create-form">
              <div class="pull-left">
                <h1 class="title">{{ tempTitle }}</h1>

                <ul class="nav bread-crumb-nav">
                  <li class="nav-item">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/intake-form"
                      ><a class="text-decoration-none"
                        >My Notes & Intake Forms</a
                      ></router-link
                    >
                  </li>

                  <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/template-library"
                      ><a class="text-decoration-none">Template Library</a></router-link
                    >
                  </li>

                  <!-- <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/documents"
                      ><a class="text-decoration-none">Documents</a></router-link
                    >
                  </li> -->
                   <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/document-setting"
                      ><a class="text-decoration-none">Document Settings</a></router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row
          class="align-items-center mb-3"
          v-else-if="tempTitle == 'Document Settings'"
        >
          <b-col>
            <div class="create-form">
              <div class="pull-left">
                <h1 class="title">{{ tempTitle }}</h1>

                <ul class="nav bread-crumb-nav">
                  <li class="nav-item">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/intake-form"
                      ><a class="text-decoration-none"
                        >My Notes & Intake Forms</a
                      ></router-link
                    >
                  </li>

                  <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/template-library"
                      ><a class="text-decoration-none">Template Library</a></router-link
                    >
                  </li>

                  <!-- <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/documents"
                      ><a class="text-decoration-none">Documents</a></router-link
                    >
                  </li> -->
                   <li class="nav-item referral-nav">
                    <router-link
                      tag="li"
                      class="list-router pb-3 pt-3"
                      active-class="active"
                      to="/document-center/document-setting"
                      ><a class="text-decoration-none">Document Settings</a></router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </b-col>

          <b-row class="mt-4 pr-0">
            <b-col md="10" class="mt-3">
              <div class="search-div w-25">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>

                <b-form-input id="input-search" placeholder="Search"></b-form-input>
              </div>
            </b-col>
          </b-row>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentOverview",
  props: ["tempTitle", "createForm"],
};
</script>

<style scoped>
.dropdown-toggle::after {
  vertical-align: 1px !important;
}

ul {
  list-style: none;
}

.b-radius {
  border-radius: 0.6rem !important;
}

.referral-nav {
  padding-left: 1.8rem;
}

li {
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
}

.main-container-bg {
  background: #f5f8fa !important;
}

.nav-item {
  list-style-type: none;
  text-decoration: none !important;
}

.list-router {
  text-decoration: none !important;
  list-style-type: none;
  color: #818181 !important;
}

.list-router > a {
  color: #818181 !important;
}

.breadcrumb-main {
  border-bottom: 0.5px solid #e1e3e4;
  padding: 15px 15px 0px 15px;
  background: rgba(#818181, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 2px;
}

.title {
  color: #173e67;
  font-size: 30px;
  font-weight: 600;
}

.nav-link {
  font-size: 15px;
  font-weight: 600;
  color: #b5b7b9 !important;
}

.active {
  /* border-bottom: 2px solid #173e67; */
}

.active > a {
  color: #173e67 !important;
}
.breadcrumb {
  padding: 15px;
  background: rgba(#818181, 0.05);
  border-radius: 0px;
  box-shadow: 2px;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .mobile-tabs {
    background: gainsboro;
    border-bottom: none;
    padding: 4px 10px;
  }
  .bread-crumb-nav .active {
    border-bottom: none;
  }
  li.nav-item {
    padding: 4px 5px;
    margin: 4px 0px;
    border-radius: 6px;
  }
  .gx-0 {
    --bs-gutter-x: 0;
  }
}
</style>
