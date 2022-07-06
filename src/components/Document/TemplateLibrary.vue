<template>
  <div class="container-fluid main-container-bg p-4">
    <bread-crumb-case :tempTitle="tempTitle" />

    <!-- <loader v-if="isLoading" /> -->
    <div class="main-wrap">
      <b-container fluid>
        <b-row>
          <b-col class="p-0">
            <div class="document-details-top-wrap pt-3 align-center mt-0">
              <h1 class="title ml-5">Intake Forms</h1>
              <div class="progress_note">
                <!-- <div class="progress_note" v-for="(progress, k) in progressNotes" :key="k"> -->
                <b-row>
                  <b-col class="mt-2" sm="8" md="9" lg="9">
                    <span class="form_question">Intake Form Template 1</span>
                  </b-col>

                  <b-col sm="4" md="3" lg="3" class="text-end">
                    <div class="float-end d-flex">
                      <span class=" pt-1 px-2 more-btn">
                      <img class="mx-3" src="@/assets/images/Preview.png" alt=""/>
                      <b-button
                        class="btn_add"
                        type="submit"
                        variant="light"
                        to="/document-center/documents"
                        ><img :src="Addicon" alt="" />+ Add</b-button
                      >
                       <!-- <b-button
                        class="btn_add"
                        type="submit"
                        variant="light"
                        v-on:click="addToArchive(progress)"
                        ><img src="@/assets/images/Add@2x.png" alt="" />Add</b-button
                      > -->
                      </span>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col> </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import CaseOverView from "@/components/Document/DocumentOverview.vue";
import Addicon from "@/assets/images/Add@2x.png";
// import { form_api } from "@/main.js";
// import axios  from 'axios';
// import profileSide from "./profileSide";
export default {
  name: "documentcenter",

  components: {
    "bread-crumb-case": CaseOverView,
  },
  data() {
    return {
       questions:[],
      // axios,
      progressNotes: [],
      tempTitle: "Template Library",
      clientInfo: {
        caseStatus: "Pending",
        Addicon:Addicon,
        caseNumber: "FLC 464",
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
    };
  },
  mounted() {
    // let userBasicInformation = JSON.parse(
    //   localStorage.getItem("selectedDepartmentAndBusiness")
    // );
    // this.businessId = userBasicInformation.businessName.businessId;
    // this.getDocumentForm();
  },
  computed: {},
  methods: {
    // addToArchive(progress){
    //     console.log("archieve", progress);
    //     console.log(progress.name)
    //     progress.elements.forEach((value,index)=>{
    //          this.questions.push({
    //             question:'QUESTIONS',
    //             type: progress.type,
    //             questionName: progress.questionName,
    //             required: progress.required,
    //             orderId:0,
    //             choices:progress.choices
    //           });
    //     })
    //    console.log(this.questions)
    //     this.axios.post(`${form_api}forms`, {
    //         id:0,
    //         businessId: this.businessId,
    //         name: progress.name,
    //         elements: this.questions,
    //         creatorUserId: progress.creatorUserId,
    //         creatorUserName: progress.creatorUserName,
    //         source: progress.source,
    //         includePracticeLogo: progress.includePracticeLogo,
    //         documentCategory: progress.documentCategory,
    //         userType:'PROVIDER',
    //   //  creationDate: moment().format('MMM DD, YYYY')
    //   })
    //     .then((data) => {

    //       if(data.data.success == true){
    //         if(this.userTypeName == "PROVIDER"){
    //           this.$router.push("/document-center")
    //         }else{
    //           this.$router.push("/admin/document-center")
    //         }
    //       }
    //     })

    // },
    //  viewCreateForm(Id){
    //   this.$router.push("/document-center/update-form/"+ Id)
    // },
    // getDocumentForm() {
    //   this.axios
    //     .get(`${form_api}forms/?userType=SUPER_ADMIN`)
    //     .then((data) => {
    //       console.log(data);
    //       this.progressNotes = data.data.data
    //       // const response = data.data.data.map((value) => {
    //       //   if (value.documentCategory == "Intake form") {
    //       //     this.progressNotes.push(value);
    //       //   }
    //       // });
    //       // console.log(this.progressNotes);
    //       //  console.log(response)
    //       //  if(response){
    //       //       console.log(response)
    //       //  }
    //       // if(index.documentCategory == 'Inprogress notes'){
    //       //    this.progressNotes = index
    //       // }
    //       // })
    //     });
    // },
  },
};
</script>

<style scope lang="scss">
button#dropdown-1 {
  background: white;
  color: gray;
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
.progress_note {
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  margin-left: 22px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.btn.btn-light.btn_add {
  background: #5c63ab;
  width: 110px;
  /* height: 50px; */
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 20px;
  color: #fff;
}
</style>
