<template>
  <div class="main-card card">
   

    <form method="POST" @submit.prevent="searchUsers" autocomplete="off">
      <b-container fluid>
        <div class="row align-items-center py-3  px-3 modal-bottom-border">
          <div class="col-10">
            <h3 class=" modal-title">Edit Treatment Details</h3>
          </div>
          <div class="col-2 text-right searchUser">
            <a type="button" class="cancel-btn mr-3 pull-right rotate-cancel" @click="closeModel" tabindex="-1" id="cancel">
             <svg width="30px" height="30px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Close</title>
                <g id="Float-Legal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Client-cases/Referraks-/Add-Preferraed-Provider" transform="translate(-1259.000000, -91.000000)">
                        <g id="Group-8" transform="translate(263.000000, 68.000000)">
                            <g id="Group-20" transform="translate(996.000000, 23.000000)">
                                <circle id="Oval" fill-opacity="0.2" fill="#173E67" cx="22" cy="22" r="22"></circle>
                                <g id="Group" transform="translate(10.000000, 10.000000)">
                                    <rect id="Icon-Spacing" fill="#4394AD" opacity="0" x="0" y="0" width="24" height="24" rx="5"></rect>
                                    <path d="M9.22951453,12 L5.07378633,7.8442718 C4.30873789,7.07922336 4.30873789,5.83883476 5.07378633,5.07378633 C5.83883476,4.30873789 7.07922336,4.30873789 7.8442718,5.07378633 L12,9.22951453 L16.1557282,5.07378633 C16.9207766,4.30873789 18.1611652,4.30873789 18.9262137,5.07378633 C19.6912621,5.83883476 19.6912621,7.07922336 18.9262137,7.8442718 L14.7704855,12 L18.9262137,16.1557282 C19.6912621,16.9207766 19.6912621,18.1611652 18.9262137,18.9262137 C18.1611652,19.6912621 16.9207766,19.6912621 16.1557282,18.9262137 L12,14.7704855 L7.8442718,18.9262137 C7.07922336,19.6912621 5.83883476,19.6912621 5.07378633,18.9262137 C4.30873789,18.1611652 4.30873789,16.9207766 5.07378633,16.1557282 L9.22951453,12 L9.22951453,12 Z" id="Path" fill="#173E67"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            </a>
          </div>
        </div>
      
        <div class="w-100 p-3">
            <b-row class="align-items-center d-flex">
                <b-col lg="6">
                    <h3 class="font-16 primary-dark fw-bold">
                        Previous Treatments Details
                    </h3>
                </b-col>
                <b-col lg="6">
                    <b-button  class="shadow-lite-3 custom-radius-10 btn btn-light border bg-white text-center pull-right py-2" type="button">
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
                        <span class="font-14-dark-600"> Add multiple treatment dates</span>
                    </b-button>
                </b-col>
                <b-col lg="12" class="mt-4">
                    <b-card class="lite-card-no-border">
                        <b-row>
                            <b-col lg="6">
                                <b-form-group id="input-group-duration" label="Treatment Start Date" label-for="start-date">
                                    <datepicker   v-model="treatmentStartDate" inputFormat="MMM dd,yyyy"    class="datepicker custom-bg-date-icon form-select"  />
                                </b-form-group>
                            </b-col>
                            <b-col lg="6">
                                <b-form-group id="input-group-duration" label="Treatment End Date" label-for="start-date">
                                    <datepicker   v-model="treatmentEndDate" inputFormat="MMM dd,yyyy"    class="datepicker custom-bg-date-icon form-select"  />
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col lg="12" class="mt-4">
                    <b-card class="lite-card-no-border">
                        <span class="position-absolute remove-icon-css" ><img :src="removeIcon"></span>
                        <b-row class="d-flex align-items-center">
                            <b-col lg="6">
                                <b-form-group id="input-group-duration" label="Treatment Start Date" label-for="start-date">
                                    <datepicker   v-model="treatmentStartDate" inputFormat="MMM dd,yyyy"    class="datepicker custom-bg-date-icon form-select"  />
                                </b-form-group>
                            </b-col>
                            <b-col v-if="!range">
                                <u class="font-14 underline-blue fw-bold ms-auto" @click="range= true">
                                    + Add Range
                                </u>
                            </b-col>
                            <b-col lg="6" v-else>
                                <b-form-group id="input-group-duration" label="Treatment End Date" label-class="u-remove-text" label-for="start-date">
                                    <datepicker   v-model="treatmentEndDate" inputFormat="MMM dd,yyyy"    class="datepicker custom-bg-date-icon form-select"  />
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col lg="12" class="mt-4 ">
                    <b-form-group  id="input-group-coverimage pb-1" label-class="font-16 fw-bold" label="Attach Files" label-for="input-1">
                        <div class="upload-btn-wrapper w-100 pt-2">
                            <button class="upload-field w-100 py-5">
                                <i class="fa fa-paperclip text-primary" aria-hidden="true"></i>
                                Browse files or drag and drop here
                            </button>
                            <input type="file" multiple name="file" ref="file" @change="readFile()"/>
                        </div>
                        <b-row class="mt-3"   v-if="allImages.length > 0">
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
                        <b-row class="mt-3">
                            <b-col lg="12">
                                <div class="d-block">
                                    <h2 class=" d-block font-16 fw-bold ">Diagnosis*</h2>
                                    <b-form-textarea
                                    class=" form-control h-100 mt-4"
                                    placeholder="This is some text.It is read only and doesn't look like an input."
                                    id="textarea-plaintext"
                                    :v-model="textDiagonsis"
                                    ></b-form-textarea>
                                </div>
                            </b-col>
                            <b-col lg="10">
                                
                            </b-col>
                            <b-col lg="2">
                                <b-button @click="closeModel" class="save-btn text-white border-0 border-radius-10 font-12 py-2 w-100 ms-3 mt-3  pull-right px-2" >
                                            Save
                                        </b-button>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-col>
            </b-row>
        </div>

      </b-container>
    </form>
  </div>
</template>

<script>
import Datepicker from "vue3-datepicker";
import removeIcon from "@/assets/images/FLIcons/ManualEntry/Remove.svg"
import deleteIcon from "@/assets/images/FLIcons/ManualEntry/Delete@3x.svg"
import docIcon from "@/assets/images/FLIcons/ManualEntry/Doc@3x.svg"
import { ref } from "vue";

  export default {
    name: "SearchPatient",
    setup() {
    const picked = ref(new Date());
    return {
      picked,
    };
  },
    props: ["closeModel"],
    components: {
     Datepicker,
    },
    data() {
      return {
        coverImages: "",
        coverImagesName:'',
        coverImageFormat:'',
        coverImageSize:'',
        allImages:[],
        deleteIcon,
        docIcon,
        range:false,
        removeIcon,
        searchText: "",
        treatmentStartDate:this.picked,
        treatmentEndDate:this.picked,
       
      };
    },
    

    created() {
   
    },
    mounted() {
 

    },
    methods: {
      readFile() {
            this.coverImages = this.$refs.file.files[0];
            this.allImages.push(...this.$refs.file.files)
        },
        deleteImages(index){
            confirm("Are You Sure!")
            ? this.allImages.splice( index ,1)
            :''
          },
      
    }
      };
</script>
<style scoped lang="scss">
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
input.datepicker {
  width: 100%;
}
u.underline-blue{
    color:#3E8ACC;
}
.save-btn{
    background-color: #3E8ACC;
}
.remove-icon-css{
        right: 10px;
        top: 5px;

}
.lite-card-no-border{
  border-radius: 10px;
    background-color: #f4f5f7;
    border: none;
}
.form-check{
.check__box {
  width: 250px !important;
    height: 250px !important;
}
}
.add-prefer-btns .btn-primary {
        border-radius: 0.6rem;
    color: #fff;
    width: 100%;
    background-color: #0070FF;
    border-color: #0070FF;
    padding-left: 11px;
    padding-right: 11px;
}
.modal-bottom-border{
      border-bottom: 2px solid #dee2e6 !important;
}
.matching-providers{
  border-radius: 10px;
  span.btn-text {
    font-size: 12px;
    font-weight: 400;
}
.card-head{

  border-bottom: 1px solid #dfd8d8;
}
  img{
    width: 36px;
    height: 37px;
    border-radius: 8px;
  }
  .title{
        font-size: 14px;
    font-weight: 500;
    color:   #4394AD;
  }
  .sub-details{
    font-weight: 500;
    color: #adabab;
    font-size: 14px;
  }
  .sub-title{
    font-weight: 400;
    color: #adabab;
    font-size: 12px;
  }
h5{
  font-weight: 400;
    color:  #173E67;
    font-size: 14px;
}
}
.rounded-border{
     border-radius:0.6rem !important;
}
.modal-title{
  color: #173E67;
  font-size: 26px;
  font-weight: 600;
}
  
  .searchInputs.py-3{
    padding-top: 0rem!important;
  }
  form {
    label {
      font-size: 12px;
      font-weight: 600;
      color: #bcbfc1;
      margin-left: 21px;
      margin-bottom: 0px;
    }
    ::placeholder {
      font-size: 12px;
    }
  }
  .searchdiv h3 {
    font-size: 14px;
    font-weight: 600;
    color:  #173E67;
    
  }
.input-icons i {
            position: absolute;
        }
          
        .input-icons {
            width: 100%;
        }
          
        .icon {
            padding: 10px;
            min-width: 40px;
        }
          
        .input-field {
            width: 100%;
            padding: 10px;
            padding-left: 30px;
        }
  .userInfo {
    text-align: center;
  }


.rotate-cancel{
  transition-delay: 1s;
  transition: transform 0.5s;
}
.rotate-cancel:hover {
   transform: rotate(90deg);
}
.active{
  background-color: #EFF3F6;
}

</style>