<template>
  <div class="container-fluid border-top-15 bg-themecolor  bottom-line">
    <div class="breadcrumb-main ">
      <b-container fluid>
        <b-row class="align-items-center mb-3">
          <b-col lg="10" sm="12" md="10" class="p-0 m-0">
            <h1 class="title"> {{ breadCrumbTitle }} </h1>



            <ul class="nav bread-crumb-nav">
              <li class="nav-item" v-for="(item, index) in clientCaseLinks " :key="index">
                <router-link tag="li" class="list-router pb-3 pt-3" active-class="active" :to="item.url"><a
                    class="text-decoration-none mobile-tabs">{{ item.name }}</a></router-link>
              </li>


            </ul>
          </b-col>

          <b-col v-if="btnName != null" md="2" lg="2" class="pt-2 pt-lg-0 pt-md-0 p-0">
            <b-button @click="btnAction" class="b-radius btn btn-light border bg-white text-center py-2" type="button">
              <svg width="16px" height="16px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Icons/ic_add_circle</title>
                <defs>
                  <path
                    d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 L17,13 Z"
                    id="path-1"></path>
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
              <span class="breadcrumb-btn-text">{{ btnName }} </span>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'caseOverview',
  props: ['breadCrumbTitle', 'btnAction', 'btnName'],
  data() {
    return {
      clientCaseLinks: [
        { name: "Case Info", url: "/client-cases/case-info" },
        { name: "Evaluations", url: "/client-cases/evaluations" },
        { name: "Medical Billing", url: "/clientcase/attached-cases/" },
        { name: "Documents", url: "/clientcase/documents/" },
        { name: "Case Timeline", url: "/clientcase/billing/" },

      ]
    }
  }
}
</script>

<style scoped>
.border-top-15 {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.bottom-line {
  border-bottom: 0.5px solid #e1e3e4;
}

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

.nav-item {
  list-style-type: none;
  text-decoration: none !important;
}

.list-router {
  text-decoration: none !important;
  list-style-type: none;
  color: #818181 !important;
}

.list-router>a {

  color: #818181 !important;
}

.breadcrumb-main {

  padding: 15px 15px 0px 15px;
  background: rgba(#818181, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 2px;

}

.title {
  color: #173E67;
  font-size: 30px;
  font-weight: 600;
}


.nav-link {

  font-size: 15px;
  font-weight: 600;
  color: #b5b7b9 !important;

}

.active {
  border-bottom: 2px solid #173E67;
}

.active>a {
  color: #173E67 !important;
}

/* .anchor{
   color: #b5b7b9 ;
  text-decoration: none;
 } */

.breadcrumb {
  padding: 15px;
  background: rgba(#818181, 0.05);
  border-radius: 0px;
  box-shadow: 2px;

}

li.nav-item {
  margin-right: 20px;
}

.breadcrumb-btn-text {
  color: #173E67 !important;
  font-weight: 600;
  font-size: 14px;
  margin-left: 5px;

}

@media only screen and (min-width:320px) and (max-width: 767px) {
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
}
</style>