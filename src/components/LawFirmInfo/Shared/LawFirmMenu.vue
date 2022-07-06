<template>
  <div class="container-fluid main-container-bg">
    <!-- <loader v-if="isLoading" /> -->
    <!-- Main Bread crumb start -->
    <div class="breadcrumb-main">
      <b-container fluid>
        <b-row class="align-items-center mb-3">
    <b-col sm="12" md="12" lg="12">      
        <div class="pull-left px-3 pt-3">
                    <h2></h2>
            <ul class="nav bread-crumb-nav">
              <li class="nav-item">
                <router-link
                  tag="li"
                  class="list-router pb-3 pt-3"
                  active-class="active"
                  to="/account"
                  ><a class="text-decoration-none">Business</a></router-link
                >
              </li>
              <li class="nav-item referral-nav">
                <router-link
                  tag="li"
                  class="list-router pb-3 pt-3"
                  active-class="active"
                  to="/myplan"
                  ><a class="text-decoration-none">Departments</a></router-link
                >
              </li>
              <li class="nav-item referral-nav">
                <router-link
                  tag="li"
                  class="list-router pb-3 pt-3"
                  active-class="active"
                  to="/payments"
                  ><a class="text-decoration-none">Staff</a></router-link
                >
              </li>             
               <li class="nav-item referral-nav">
                <router-link
                  tag="li"
                  class="list-router pb-3 pt-3"
                  active-class="active"
                  to="/helpcenter"
                  ><a class="text-decoration-none">Roles</a></router-link
                >
              </li>
              <li class="nav-item referral-nav">
                <router-link
                  tag="li"
                  class="list-router pb-3 pt-3"
                  active-class="active"
                  to="/floatcarecenter"
                  ><a class="text-decoration-none">Admins</a></router-link
                >
              </li>
              <li class="nav-item referral-nav">
                <router-link
                  tag="li"
                  class="list-router pb-3 pt-3"
                  active-class="active"
                  to="TermsandCondition"
                  ><a class="text-decoration-none">Permissions</a></router-link
                >
              </li>
            </ul>
        </div>
             <div class="pull-right pt-4" v-if="isAccountPage == true">
                    <div class="create-buttton">
                      <div class="btn-search btn btn-outline-secondary text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddOwner" aria-controls="offcanvasRight">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Icons/ic_add_circle</title>
                                <defs>
                                    <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 L17,13 Z" id="path-1"></path>
                                    <rect id="path-3" x="0" y="0" width="50" height="50"></rect>
                                </defs>
                                <g id="Symbol" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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
                                                <use id="Color" stroke="none" fill="#0070FF" fill-rule="evenodd" xlink:href="#path-3"></use>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            Add Owner
                        </div>
                    </div>
              </div>
          </b-col>
        </b-row>
        <b-row> </b-row>
      </b-container>
    </div>
  </div>
</template>
<script >
    export default {
        props:['isAccountPage'],
    }
</script>
<style>
#lawOfficeIgnored{
  display: none;
}
ul {
  list-style: none;
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
  padding: 0px;
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

.container-fluid {
  padding: 0;
}

.breadcrumb {
  padding: 15px;
  background: rgba(#818181, 0.05);
  border-radius: 0px;
  box-shadow: 2px;
}
.create-buttton {
    margin-right: 20px;
}
.btn:hover {
    color: #212529;
}
@media only screen and (min-width:320px) and (max-width: 767px) {
a.text-decoration-none {
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
}
</style>