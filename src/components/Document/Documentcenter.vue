<template>
  <div class="container-fluid main-container-bg p-4">
    <bread-crumb-case :tempTitle="tempTitle" :createForm="createForm" />

    <!-- <loader v-if="isLoading" /> -->
    <div class="main-wrap">
      <b-container fluid>
        <b-row>
          <b-col class="p-0">
            <div class="document-details-top-wrap pt-3 align-center mt-0">
              <h1 class="title ml-5">Progress Notes</h1>
              <div class="progress_note">
                 <!-- <div class="progress_note" v-for="(progress,k) in progressNotes" :key="k"> -->
                <b-row>
                  <b-col sm="9" md="10" lg="10">
                    <span class="form_question">Progress Note 1</span>
                    <!-- <span class="form_question">{{ progress.name }}</span> -->
                  </b-col>

                  <b-col sm="3" md="2" lg="2">
                    <div class="text-center d-flex">
                      <span class=" pt-1 px-2 more-btn">
                        <div class="dropdown">
                            <img
                              class="mx-2 copy_img"
                              src="@/assets/images/Copy.png"
                              alt="" 
                            />
                             <!-- <img
                              class="mx-2 copy_img"
                              src="@/assets/images/Copy.png"
                              alt=""
                              @click="showclientmodal(progress.formId)"
                              
                            /> -->
                          </div>
                      </span>
                      <span class=" pt-1 px-2 more-btn">
                        <div class="dropdown">
                           <img class="mx-2" src="@/assets/images/Preview.png" alt=""/>
                           <!-- <img class="mx-2" src="@/assets/images/Preview.png" alt="" @click="viewCreateForm(progress.formId)"/> -->
                        </div>
                      </span>
                      <span class="pull-right pt-1 px-2 more-btn">
                        <div class="dropdown">
                          <button class="btn btn-sm moreBtn more-btn-bg" type="button"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img :src="moreIcon" />
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li class="drop-menu m-0">
                              <a class="dropdown-item" href="#">Delete</a>
                               <!-- <a class="dropdown-item" href="#" @click="getDeletedSection(progress.formId)">Delete</a> -->
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="text-center mt-5" v-if="progressNotes.length <= 0 ">
                <img src="@/assets/images/norecord.png" alt="" />
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col> </b-col>
        </b-row>
      </b-container>

      <b-modal
        hide-footer="true"
        class=""
        size="lg"
        hide-header="true"
        v-model="modalsearchprovider"
        centered
      >
        <search-provider-modal
          :closeSearchModel="closeSearchModel" :clientID="clientId"
        ></search-provider-modal>
      </b-modal>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { form_api } from "@/main.js";
import CaseOverView from "@/components/Document/DocumentOverview.vue";
import searchProvider from "@/components/Document/Shared/ClientIntakeForm.vue";
import moreIcon from "@/assets/images/ic_more.svg";
import norecord from "@/assets/images/norecord.png";
// import profileSide from "./profileSide";
export default {
  name: "documentcenter",

  components: {
    "bread-crumb-case": CaseOverView,
    "search-provider-modal": searchProvider,
  },
  data() {
    return {
      clientId:null,  
      moreIcon:moreIcon,
      tempTitle: "My Notes & Intake Forms",
      modalsearchprovider: false,
      clientInfo: {
        caseStatus: "Pending",
        caseNumber: "FLC 464",
        norecord:norecord,
        attorneys: [
          {
            firstName: "sri",
            lastName: "Ragh",
          },
        ],
        caseManagers: [
          {
            firstName: "sri",
            lastName: "Ragh",
          },
        ],
        paralegals: [
          {
            firstName: "sri",
            lastName: "Ragh",
          },
        ],
      },
      // axios,
      // businessId:null,
      progressNotes:[],
    };
  },
  mounted() {
      // let userBasicInformation = JSON.parse(localStorage.getItem("selectedDepartmentAndBusiness"))
      // this.businessId = userBasicInformation.businessName.businessId
      // this.getDocumentForm()
      // this.get
  },
  computed: {},
  methods: {
    // getDocumentForm(){
    //   this.axios.get(`${form_api}forms/?businessId=`+ this.businessId +``)
    //     .then((data) => {
    //       console.log(data);
    //      const response= data.data.data.map((value=>{  
    //             this.progressNotes.push(value)
    //      }

    //      ))
    //       console.log(this.progressNotes)

    //     })
    // },
    createForm() {
      this.$router.push("/document-center/create-form");
    },
    // showclientmodal(clientId) {
    //   this.clientId = clientId
    //   this.modalsearchprovider = true;
    // },
    // closeSearchModel() {
    //   this.modalsearchprovider = false;
    // },
    //  getDeletedSection(Id){
    //   this.axios.delete(`${form_api}forms/`+ Id +``,{
    //       businessId:1
    //     }).then((data)=>{
    //              this.$router.go()
    //       }).catch((e)=>{
    //           console.log(e)
    //       })
    // },
    // viewCreateForm(Id){

    //   this.$router.push("/document-center/update-form/"+ Id)

    // }
  },
};
</script>

<style scope lang="scss">
.document_select_btn button#dropdown-1 {
  background: white !important;
  color: gray !important;
  padding: 5px 20px;
  border-radius: 10px;
  border: none;
}

.dropdown-toggle::after {
  vertical-align: 1px !important;
}

.title {
  color: #173e67;
  font-size: 30px;
  font-weight: 600;
}

.document-details-top-wrap.pt-3.align-center.mt-0 {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  background: #fff;
}

.case-info-section {
  padding: 0px !important;
}

.profile-image {
  width: 55px;
  height: 50px;
  border-radius: 10px;
}

.patient-list-ul {
  padding-left: 15px !important;
  li {
    list-style-type: none;
    h1 {
      color: #173e67;
      font-size: 26px;
    }
    h2 {
      font-size: 14px;
      font-weight: 400;
    }
  }
}

// .patient-name{
//   margin-left: 10px !important;
// }
.case-details-top-wrap {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  background: #fff;
  .status {
    color: #dca71e;
  }
  h2 {
    font-size: 14px;
    color: #173e67;
    font-weight: 600;
  }
  h1 {
    font-size: 16px;
    color: #173e67;
    font-weight: 600;
  }
  .created-date {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.5);
  }
  h5 {
    font-size: 14px;
    color: #173e67;
    font-weight: 600;
    span {
      font-weight: 500;
      color: rgb(173, 171, 171);
    }
  }
}

.case-details {
  padding: 15px;
  border: 2px solid #f1f1f5;
  border-radius: 10px;
}

.btn-outline-secondary:hover {
  color: #000 !important;
  background-color: #6c757d;
  border-color: #6c757d;
}

.progress_note {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  margin-left: 22px;
  margin-bottom: 10px;
  margin-top: 10px;
}

span.form_question {
  color: #517193;
}

img.menu_img {
  background: #f5f8fa;
  margin: 0px;
  border-radius: 5px;
  width: 30px;
  height: 30px;
}

@media only screen and (min-width:320px)and (max-width: 767px) {
  .img-logo img {
    width: 100%;
  }

}

</style>
