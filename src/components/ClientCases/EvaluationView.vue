<template>
    <div class="container-fluid staff-main-container-bg p-2 p-lg-4 p-md-4 ">
        <div class="shadow-main-card border-top-15">
            <div class="container-fluid border-top-15 bg-themecolor  ">
                <div class="breadcrumb-main ">
                    <b-container fluid>
                        <b-row class="align-items-center mb-5">
                            <b-col lg="10" sm="12" md="10" class="p-0 m-0">
                                <h1 class="title"> Manual Entry</h1>
                            </b-col>
                            <b-col md="2" lg="2" class="pt-2 pt-lg-0 pt-md-0 p-0">
                                <b-button @click="confirmModal = true" class="complete-btn text-white border-0 border-radius-10 font-14 w-75 pull-right p-2">
                                    Completed
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row class="py-2">
                            <b-col lg="12" class="p-0">
                                <h3 class="font-16 primary-dark fw-bold">Entered by : <span class="text-lite-blue fw-normal">Joseph Will</span> </h3>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </div>
            <b-container fluid class="bg-white border-bottom-radius py-4  h-100">
                <div class="main-screen px-3">
                    <b-row>
                        <b-col lg="6">
                            <b-card class="border-radius-15 border-lite-2 h-100">
                                <b-row>
                                    <b-col lg="2">
                                        <b-avatar rounded="lg" size="70" class="" :src="displayPic"></b-avatar>
                                    </b-col>
                                    <b-col lg="8">
                                        <h3 class="header_h2 mt-1 primary">
                                            Martin Sikka
                                        </h3>
                                        <h5 class="text-blue font-14 fw-bold">
                                            Physician | Cardiologist
                                        </h5>
                                    </b-col>
                                    <b-col lg="2">
                                        <span class="pull-right" >
                                            <b-dropdown size="xs" variant="link" toggle-class="text-decoration-none" no-caret>
                                                <template #button-content>
                                                <div class="fc-btn-black">
                                                    <img :src="hamburgerMenu" >
                                                </div>
                                                </template>
                                                <b-dropdown-item href="#"  id="filterList">
                                                    Edit
                                                </b-dropdown-item>
                                                <b-dropdown-item href="#"  id="filterList">
                                                    Delete
                                                </b-dropdown-item>
                                            </b-dropdown>
                                            
                                        </span>
                                        
                                    </b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col lg="12">
                                        <div class="d-flex align-items-center">
                                            <img :src="locationIcon">
                                            <span class="font-16 text-blue ms-3">
                                                FloatCare Hospital
                                            </span>
                                        </div>
                                    </b-col>
                                    <b-col lg="12" class="mt-3">
                                        <div class="d-flex align-items-center">
                                            <img :src="dateIcon">
                                            <span class="font-16 text-blue ms-3">
                                                Jun 13, 2022
                                            </span>
                                        </div>
                                    </b-col>
                                    <b-col lg="12" class="mt-3">
                                        <div class="d-flex align-items-center">
                                            <img :src="phoneIcon">
                                            <span class="font-16 text-blue ms-3">
                                                (465) 365 2648
                                            </span>
                                        </div>
                                    </b-col>
                                    <b-col lg="12" class="mt-3">
                                        <div class="d-flex align-items-center">
                                            <img :src="emailIcon">
                                            <span class="font-16 text-blue ms-3">
                                                miltonjohnson@floatcare.com
                                            </span>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>
                        <b-col lg="6">
                            <b-card class="border-radius-15 border-lite-2">
                                <b-row>
                                    <b-col lg="2">
                                        <img :src="treatmentDetailIcon">
                                    </b-col>
                                    <b-col lg="7">
                                        <h3 class="header_h2 mt-3 ">
                                           Treatment Details
                                        </h3>
                                    </b-col>
                                    <b-col lg="3" class="px-3">
                                        <b-button class="edit-btn text-white border-0 border-radius-10 font-14 w-100 ms-3  pull-right px-2" @click="editTreatmentDetails = true">
                                            Edit
                                        </b-button>
                                        
                                    </b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col lg="6">
                                        <div class="w-100 d-flex">
                                            <h5 class="font-16 fw-bold text-nowrap">Treatment 1 Start Date : </h5>
                                            <span class="font-14 text-lite-blue ms-1">
                                                May 01, 2022
                                            </span>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="w-100 d-flex">
                                            <h5 class="font-16 fw-bold text-nowrap">Treatment 1 End Date : </h5>
                                            <span class="font-14 text-lite-blue ms-1">
                                                June 01, 2022
                                            </span>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-3">
                                    <b-col lg="6">
                                        <div class="w-100 d-flex">
                                            <h5 class="font-16 fw-bold text-nowrap">Treatment 2 Start Date : </h5>
                                            <span class="font-14 text-lite-blue ms-1">
                                                July 01, 2022
                                            </span>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="w-100 d-flex">
                                            <h5 class="font-16 fw-bold text-nowrap">Treatment 2 End Date : </h5>
                                            <span class="font-14 text-lite-blue ms-1">
                                                June 21, 2022
                                            </span>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-3">
                                    <b-col lg="6">
                                        <div class="w-100 d-flex">
                                            <h5 class="font-16 fw-bold">Case manager : </h5>
                                            <span class="font-14 text-lite-blue ms-1">
                                                - -
                                            </span>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="w-100 d-flex">
                                            <h5 class="font-16 fw-bold">Compliance rate : </h5>
                                            <span class="font-14 text-lite-blue ms-1">
                                                100
                                            </span>
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-3">
                                    <b-col lg="12">
                                        <h5 class="font-16 fw-bold">Notes  </h5>
                                        <p class="font-14 text-lite-blue ms-1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  Lorem Ipsum is simply dummy text of the printing and typesetting indust
                                        </p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-3">
                                    <b-col lg="6">
                                        <b-card class="custom-radius-10">
                                            <b-row>
                                                <b-col lg="3">
                                                    <img :src="docIcon">
                                                </b-col>
                                                <b-col lg="6">
                                                    <h6 class="font-12 mb-0 text-lite-blue">
                                                        File name abc
                                                    </h6>
                                                    <span class="font-12 text-lite-blue">
                                                        PDF <span class="blue-dot"></span> 1.2MB
                                                    </span>
                                                </b-col>
                                                <b-col lg="3">
                                                    <img :src="downloadIcon">
                                                </b-col>
                                            </b-row>
                                        </b-card>
                                    </b-col>
                                    <b-col lg="6">
                                        <b-card class="custom-radius-10">
                                            <b-row>
                                                <b-col lg="3">
                                                    <img :src="docIcon">
                                                </b-col>
                                                <b-col lg="6">
                                                    <h6 class="font-12 mb-0 text-lite-blue">
                                                        File name abc
                                                    </h6>
                                                    <span class="font-12 text-lite-blue">
                                                        PDF <span class="blue-dot"></span> 1.2MB
                                                    </span>
                                                </b-col>
                                                <b-col lg="3">
                                                    <img :src="downloadIcon">
                                                </b-col>
                                            </b-row>
                                        </b-card>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>
                        <b-col lg="6" class="mt-4">
                            <b-card class="border-radius-15 border-lite-2">
                                <b-row>
                                    <b-col lg="8">
                                        <h5 class="font-16 fw-bold text-nowrap">Do you hold harmless for this Treatment? </h5>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class=" d-flex dark-check">
                                        <label class="mb-0 ">Yes</label>
                                        <b-form-checkbox class="p-0 m-0"  >
                                        </b-form-checkbox>
                                        <label class="mb-0  ms-3 ">No</label>
                                        <b-form-checkbox class="p-0 pt-0 m-0"   >
                                        </b-form-checkbox>
                                    </div>
                                    </b-col>
                                    <b-col lg="12" class="d-flex align-items-center">
                                        <h3 class="header_h2 mt-1">
                                            LOP Documents
                                        </h3>
                                        <u class="font-14 underline-blue pull-right ms-auto">
                                            Use previous LOP
                                        </u>
                                    </b-col>
                                    <b-col lg="12" class="mt-4 ">
                                        <b-form-group  id="input-group-coverimage pb-1" label="Attach Files" label-for="input-1">
                                            <div class="upload-btn-wrapper w-100 pt-2">
                                                <button class="upload-field w-100 py-5">
                                                    <i class="fa fa-paperclip text-primary" aria-hidden="true"></i>
                                                    Browse files or drag and drop here
                                                </button>
                                                <input type="file" multiple name="file" ref="file" @change="readFile()"/>
                                            </div>
                                            <b-row  class="d-flex align-items-center " v-if="allImages.length > 0">
                                                
                                                <b-col lg="6" class="mt-3 " v-for="(item,index) in allImages" :key="index" >
                                                    <b-card class="custom-radius-10 h-100">
                                                        <b-row>
                                                            <b-col lg="3">
                                                                <img :src="docIcon">
                                                            </b-col>
                                                            <b-col lg="6">
                                                                <h6 class="font-12 mb-0 text-lite-blue">
                                                                    {{ item.name.split('.')[0]}}
                                                                </h6>
                                                                <span class="font-12 text-lite-blue">
                                                                    {{ item.name.split('.')[1]}} <span class="blue-dot"></span> {{item.size}}
                                                                </span>
                                                            </b-col>
                                                            <b-col lg="3">
                                                                <img :src="deleteIcon" @click="deleteImages(index)">
                                                            </b-col>
                                                        </b-row>
                                                    </b-card>
                                                </b-col>
                                            </b-row>
                                            
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <div class="d-flex">
                                    
                                    
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>
        <b-modal hide-footer="true" class="" size="750" hide-header="true" v-model="editTreatmentDetails"  body-class="p-0" centered>
              <edit-treatment-details :closeModel="closeModel" ></edit-treatment-details>
      </b-modal>
      <b-modal hide-footer="true" class="" size="460" hide-header="true" v-model="confirmModal "  centered>
              <notification-modal  :closeModel="closeModel"></notification-modal>
      </b-modal>
    </div>
</template>

<script>
import displayPic from "@/assets/images/Avatars/showPic.jpg"
import hamburgerMenu from "@/assets/images/FLIcons/ManualEntry/Menu@3x.svg"
import dateIcon from "@/assets/images/FLIcons/ManualEntry/Date@3x.svg"
import docIcon from "@/assets/images/FLIcons/ManualEntry/Doc@3x.svg"
import downloadIcon from "@/assets/images/FLIcons/ManualEntry/Download@3x.svg"
import emailIcon from "@/assets/images/FLIcons/ManualEntry/Email@3x.svg"
import locationIcon from "@/assets/images/FLIcons/ManualEntry/Location@3x.svg"
import phoneIcon from "@/assets/images/FLIcons/ManualEntry/Phone@3x.svg"
import primaryIcon from "@/assets/images/FLIcons/ManualEntry/Primary@3x.svg"
import deleteIcon from "@/assets/images/FLIcons/ManualEntry/Delete@3x.svg"
import treatmentDetailIcon from "@/assets/images/FLIcons/ManualEntry/Treatmentdetail@3x.svg"
import editTreatmentDetails from "@/components/ClientCases/Shared/EditTreatmentDetails.vue"
import notificationModal from "@/components/ClientCases/Shared/NotificationModal.vue"
export default {
    name: 'EvaluationView',
    components:{
       'edit-treatment-details': editTreatmentDetails,
       'notification-modal':notificationModal
    },
    data() {
        return {
            displayPic,
            hamburgerMenu,
            dateIcon,
            deleteIcon,
            docIcon,
            downloadIcon,
            emailIcon,
            locationIcon,
            phoneIcon,
            primaryIcon,
            treatmentDetailIcon,
            allImages:[],
            coverImages: "",
            coverImagesName:'',
            coverImageFormat:'',
            coverImageSize:'',
            editTreatmentDetails:false,
            confirmModal:false,
        }
    },
    methods:{
        readFile() {
            this.coverImages = this.$refs.file.files[0];
            this.allImages.push(...this.$refs.file.files)
            // let name = this.$refs.file.files[0].name.split('.')
            // this.coverImagesName =  name[0]
            // this.coverImageFormat = name[1]
            // this.coverImageSize = this.$refs.file.files[0].size
        },
        deleteImages(index){
            confirm("Are You Sure!")
            ? this.allImages.splice( index ,1)
            :''
        },
        closeModel(){
            this.editTreatmentDetails = false;
            this.confirmModal = false
        },
    }
}
</script>

<style scoped>
.dropdown-menu li{
    margin: 0px;
}

.primary::after{
    content:'';
    background:url("@/assets/images/FLIcons/ManualEntry/Primary@3x.svg");
    width: 26px;
    height: 26px;
    position: absolute;
    margin-top: 3px;
    margin-left: 10px;
}
.upload-field{
  border: 1px dashed #929eaa !important;
    color: #1f3d5a66;
    background-color: #ecf3f9;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
}
.blue-dot{
    display: inline-block;
    width: 4px;
    border-radius: 100%;
    height: 4px;
    background-color: #3D6083;
    margin-bottom: 2px;
}
u.underline-blue{
    color:#3E8ACC;
}
.complete-btn {
  background-color: #74E790;
}
.edit-btn{
  background-color: #4394AD;
}
.text-lite-blue{
    color: #3D6083;
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
.border-lite-2{
    border: 2px solid #f1f1f5;
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