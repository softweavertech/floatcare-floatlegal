<template>
 <div class="container-fluid staff-main-container-bg p-2 p-lg-4 p-md-4">
    <div class="bg-white overflow-hidden">
        <div class="patient-list-top">
            <div class="d-flex align-items-center p-4 pb-0">
                    <h1 class="me-auto">Create Case</h1>
            </div>
        </div>
    </div>
    <b-card class="bgx-create-client col-8 mx-auto">
        <div class="m-3  pb-0 border-1">
                    <div class="row">
                      <div class="col-md-12 ">
                        <form id="msform" class="mt-0">
                          <!-- progressbar -->
                            <ul
                              id="progressbar"
                              class="align-items-center d-flex mt-0 pt-4"
                            >
                              <li class="active" id="location">
                                <strong>Location</strong>
                              </li>
                              <li id="patient">
                                <strong>Patient</strong>
                              </li>
                              <li id="service">
                                <strong>Services</strong>
                              </li>
                              <li id="professional">
                                <strong>Professional</strong>
                              </li>
                              <li id="date">
                                <strong>Date</strong>
                              </li>
                              <li id="confirm">
                                <strong>Confirm</strong>
                              </li>
                            </ul>
                          <b-card-body class="mt-5 pb-0">
                            <!-- fieldsets -->
                            <fieldset>
                              <div class="form-card">
                               <b-row class="mb-3">
                                  <b-col lg="12" sm="12">
                                    <b-form-group
                                      id="input-group-2"
                                      label="Select business location"
                                      label-for="input-2"
                                       v-model="business_location"
                                    >
                                      <b-form-select
                                        :options="locations"
                                      ></b-form-select>
                                    </b-form-group>
                                  </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="12" >
                                        <b-card class="referral-type">
                                            <b-row  class="mb-2">
                                                <b-col lg="1" sm="2" >
                                                    <div class=" mt-4" >
                                                      <span class="bg-grey mt-2">
                                                         <img :src="greylocation" > 
                                                      </span>
                                                       
                                                    </div>
                                                    </b-col>
                                                    <b-col lg="6" sm="2" >
                                                    <div class="ms-3">
                                                        <h4 class="mt-2">Floatcare Hospital</h4>
                                                        <p >12345 Main Street, Los Angeles, CA 90094</p>
                                                    </div>
                                                </b-col>
                                               <b-col lg="5" sm="2" >
                                                    <div class="ms-3 d-flex" >
                                                        <h4 class="mt-3">20 </h4>
                                                        <p  class="mt-3"> &nbsp;professionals are available</p>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                </b-row>
                              </div>
                              <button
                                type="button"
                                name="next"
                                class="next border-for-btns btn btn-primary mt-3"
                                value="Next Step"
                              >
                                Next
                              </button>
                            </fieldset>
                            <fieldset>
                              <div class="form-card">
                                <b-row class="mb-3">
                                  <b-col lg="12" sm="12" class="input-icons">
                                    <b-form-group
                                      label="Search & Select Patient"
                                      label-for="input-2"
                                      @click="searchpatientmodal= true"
                                    >
                                    <img :src="search_icon" class="icon p-2" >
                                      <b-form-input class="input-field"
                                        v-model="patient"
                                        placeholder="Select Patient"
                                        required
                                      ></b-form-input>
                                    </b-form-group>
                                  </b-col>
                                </b-row>
                                
                               <b-row>
                                    <b-col lg="6" >
                                       <h4>Patient</h4>
                                        <b-card class="referral-type" body-class="pb-2">
                                            <b-row  class="mb-2">
                                                <div class="d-flex">
                                                  <b-avatar :src="patientpic" rounded="lg" size="50"></b-avatar>
                                                  <div class="ms-3  mb-0">
                                                    <h5 class="patient-name mb-0">Jim Swanson</h5>
                                                    <span class="patient-info">42 year old • Male </span>
                                                  </div>
                                                </div>
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                    <b-col lg="6" >
                                      <h4>Parent/Guardian</h4>
                                        <b-card class="referral-type" body-class="pb-2">
                                            <b-row  class="mb-2">
                                                <div class="d-flex">
                                                  <span class="bg-grey-guardian ">
                                                         <img :src="guardianimage" width="25" > 
                                                      </span>
                                                  <div class="ms-3  mb-0">
                                                    <h5 class="patient-name mb-0">Amanda Tya</h5>
                                                    <span class="patient-info">(Partner)</span>
                                                  </div>
                                                </div>
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                </b-row>
                              
                              </div>
                              <button
                                type="button"
                                name="previous"
                                class=" border-for-btns 
                                  previous
                                  btn btn-back btn-create
                                  ml-0  mt-3
                                "
                                value="Previous"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                name="next"
                                class="next border-for-btns btn btn-primary btn-create  mt-3"
                                value="Next Step"
                              >
                                Next
                              </button>
                            </fieldset>
                            <fieldset>
                              <div class="form-card">
                               <b-row class="mb-3">
                                  <b-col lg="12" sm="12" class="input-icons">
                                    <b-form-group
                                      label="Search for appointment service"
                                      label-for="input-2"
                                       @click="appointmentservicemodal =true"
                                    >
                                    <img :src="search_icon" class="icon p-2" >
                                      <b-form-input class="input-field"
                                        v-model="patient"
                                        placeholder="Select appointment service"
                                        required
                                       
                                      ></b-form-input>
                                    </b-form-group>
                                  </b-col>
                                  <b-col lg="12" >
                                    <b-card class="referral-type" body-class="pb-2">
                                      <b-row  class="mb-2">
                                          <div class="d-flex">
                                            <div class="mt-2">
                                                <img :src="basic_const_icon" width="45" >
                                            </div>
                                            <div class="ms-3 mt-2 mb-0">
                                              <h5 class="patient-name mb-0">Basic Consultation</h5>
                                              <span class="patient-info">$150 • 30 minutes</span>
                                            </div>
                                          </div>
                                      </b-row>
                                        
                                    </b-card>
                                  </b-col>
                                  <b-col cols="12" class="mt-3">
                                    <h4>Required documents</h4>
                                    <div class="d-flex">
                                      <span class="required-document-tabs p-2 m-2">
                                        Driving Licence
                                      </span>
                                      <span class="required-document-tabs p-2 m-2">
                                        Medicare card
                                      </span>
                                      <span class="required-document-tabs p-2 m-2">
                                        Health Insurance
                                      </span>
                                    </div>
                                  </b-col>
                                  <b-col lg="12" sm="12">
                                    <b-form-group
                                      id="input-group-2"
                                      label="Select room available"
                                      label-for="input-2"
                                       v-model="available_room"
                                    >
                                      <b-form-select
                                       
                                        :options="rooms"
                                      ></b-form-select>
                                    </b-form-group>
                                  </b-col>
                                </b-row>
                                
                              </div>
                              <button
                                type="button"
                                name="previous"
                                class="border-for-btns
                                  previous
                                  btn btn-back btn-create
                                  ml-0
                                "
                                value="Previous"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                name="next"
                                class="next  border-for-btns btn btn-primary btn-create"
                                value="Next Step"
                              >
                                Next
                              </button>
                            </fieldset>
                            <fieldset>
                              <div class="form-card">
                                <b-row class="mb-3">
                                  <b-col lg="12" sm="12">
                                    <b-form-group
                                      id="input-group-2"
                                      label="Select professional"
                                      label-for="input-2"
                                      html-field="html"
                                       v-model="professional"
                                    >
                                      <b-form-select
                                       html-field="html"
                                        :options="AllProfessional"
                                      ></b-form-select>
                                    </b-form-group>
                                  </b-col>
                                  <b-col lg="7" >
                                       <h4>Care professional</h4>
                                        <b-card class="referral-type" body-class="pb-2">
                                            <b-row  class="mb-2">
                                                <div class="d-flex">
                                                  <b-avatar :src="patientpic" rounded="lg" size="50"></b-avatar>
                                                  <div class="ms-3 mt-1 mb-0">
                                                    <h5 class="patient-name mb-0">Dr. Lisa Stevenson</h5>
                                                    <span class="patient-info">Primary Care Physician </span>
                                                  </div>
                                                </div>
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                </b-row>

                               
                              </div>
                              <button
                                type="button"
                                name="previous"
                                class="
                                  previous
                                  border-for-btns
                                  btn btn-back btn-create
                                  ml-0
                                "
                                value="Previous"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                name="next"
                                class="next border-for-btns btn btn-primary btn-create"
                                value="Next Step"
                              >
                                Next
                              </button>
                            </fieldset>
                            <fieldset>
                              <div class="form-card">
                                <b-row class="mb-3">
                                  <b-col lg="6" sm="6" >
                                    <b-form-group id="input-group-Concern" label="Select Date" label-for="input-3">
                                      <img :src="calandericon" class="calendar-icon-position">
                                     <datepicker class="form-control datapicker" v-model="picked"  placeholder="Select Date" />
                                    </b-form-group>
                                  </b-col>
                                  <b-col lg="6" >
                                       <b-form-group
                                      id="input-group-2"
                                      label="Select time"
                                      label-for="input-2"
                                      html-field="html"
                                       v-model="Timeslot"
                                    >
                                      <b-form-select
                                       html-field="html"
                                        :options="slots"
                                      ></b-form-select>
                                    </b-form-group>
                                    </b-col>
                                    <b-col lg="12" class="my-3" >
                                        <b-card class="referral-type" body-class="pb-2">
                                            <b-row  class="mb-2 d-flex">
                                              <b-col cols="8">
                                                <h6 class="mb-0 fs-title">Is it recurring appointment?</h6>
                                              </b-col>
                                              <b-col cols="4" class="d-flex purple-checkbox">
                                                 <h6 class="mb-0 fs-title  me-2 line-height-info">Yes</h6>
                                                  <b-form-checkbox class="p-0 m-0"  v-model="BasicConsultation" >
                                                  </b-form-checkbox>
                                                  <h6 class="mb-0 fs-title ms-3 line-height-info">No</h6>
                                                  <b-form-checkbox class="p-0 pt-0 m-0"  v-model="BasicConsultation" >
                                                  </b-form-checkbox>
                                              </b-col>
                                             
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                    
                                </b-row>
                                <b-row>
                                  <b-col cols="6">
                                    <b-form-group
                                      label="Treatment / Procedure Type"
                                      label-for="input-2"
                                      
                                    >
                                    
                                      <b-form-input 
                                        v-model="patient"
                                        placeholder="Input Treatment /Procedure type"
                                        required
                                      ></b-form-input>
                                    </b-form-group>
                                  </b-col>
                                  <b-col cols="6">
                                    <b-form-group
                                      label="Number of visit "
                                      label-for="input-2"
                                      
                                    >
                                    
                                      <b-form-input 
                                        v-model="patient"
                                        placeholder="Input number of visit "
                                        required
                                      ></b-form-input>
                                    </b-form-group>
                                  </b-col>
                                  <b-col cols="6">
                                    <b-form-group
                                      id="input-group-2"
                                      label="How Often?"
                                      label-for="input-2"
                                       v-model="totalvisits"
                                    >
                                      <b-form-select
                                       
                                        :options="VisitsOption"
                                      ></b-form-select>
                                    </b-form-group>
                                  </b-col>
                                  <b-col cols="6">
                                    <b-form-group
                                      id="input-group-2"
                                      label="Appointment Frequency"
                                      label-for="input-2"
                                       v-model="AppointmentFrequency"
                                    >
                                      <b-form-select
                                       
                                        :options="FrequncyOptions"
                                      ></b-form-select>
                                    </b-form-group>
                                  </b-col>
                                  <b-col md="12" class="d-flex my-2 purple-checkbox">
                                    <div class="width">
                                        <b-form-checkbox
                                          id="checkbox-1"
                                          v-model="status"
                                          name="checkbox-1"
                                          value="accepted"
                                          unchecked-value="not_accepted"
                                        >
                                        <span class="line-height-info ms-1">
                                          Sun
                                        </span>
                                        </b-form-checkbox>
                                    </div>
                                    <div class="width">
                                        <b-form-checkbox
                                          id="checkbox-1"
                                          v-model="status"
                                          name="checkbox-1"
                                          value="accepted"
                                          unchecked-value="not_accepted"
                                        >
                                      <span class="line-height-info ms-1">
                                          Mon
                                        </span>
                                        </b-form-checkbox>
                                    </div>
                                    <div class="width">
                                        <b-form-checkbox
                                          id="checkbox-1"
                                          v-model="status"
                                          name="checkbox-1"
                                          value="accepted"
                                          unchecked-value="not_accepted"
                                        >
                                      <span class="line-height-info ms-1">
                                          Tue
                                        </span>
                                        </b-form-checkbox>
                                    </div>
                                    <div class="width">
                                        <b-form-checkbox
                                          id="checkbox-1"
                                          v-model="status"
                                          name="checkbox-1"
                                          value="accepted"
                                          unchecked-value="not_accepted"
                                        >
                                        <span class="line-height-info ms-1">
                                          Wed
                                        </span>
                                        </b-form-checkbox>
                                    </div>
                                    <div class="width">
                                        <b-form-checkbox
                                          id="checkbox-1"
                                          v-model="status"
                                          name="checkbox-1"
                                          value="accepted"
                                          unchecked-value="not_accepted"
                                        >
                                        <span class="line-height-info ms-1">
                                          Thu
                                        </span>
                                        </b-form-checkbox>
                                    </div>
                                    <div class="width">
                                        <b-form-checkbox
                                          id="checkbox-1"
                                          v-model="status"
                                          name="checkbox-1"
                                          value="accepted"
                                          unchecked-value="not_accepted"
                                        >
                                        <span class="line-height-info ms-1">
                                          Fri
                                        </span>
                                        </b-form-checkbox>
                                    </div>
                                    <div class="width">
                                        <b-form-checkbox
                                          id="checkbox-1"
                                          v-model="status"
                                          name="checkbox-1"
                                          value="accepted"
                                          unchecked-value="not_accepted"
                                        >
                                        <span class="line-height-info ms-1">
                                          Sat
                                        </span>
                                        </b-form-checkbox>
                                    </div>
                                  </b-col>
                                  <b-col lg="6" sm="6" >
                                    <b-form-group id="input-group-Concern" label="Projected End Date" label-for="input-3">
                                      <img :src="calandericon" class="calendar-icon-position">
                                     <datepicker class="form-control datapicker" v-model="picked"  placeholder="Select Date" />
                                    </b-form-group>
                                  </b-col>
                                </b-row>
                              </div>
                              <button
                                type="button"
                                name="previous"
                                class="
                                  previous
                                  border-for-btns
                                  btn btn-back btn-create
                                  ml-0
                                "
                                value="Previous"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                name="next"
                                class="next border-for-btns btn btn-primary btn-create"
                                value="Next Step"
                              >
                                Next
                              </button>
                            </fieldset>
                            <fieldset>
                              <div class="form-card">
                                <b-row>
                                  <b-col cols="12">
                                    <h4>Appointment Details</h4>
                                    <b-card class="confirm-cards">
                                      <h4>
                                        Superior Wellness Chiropractic | Los Angeles

                                      </h4>
                                      <p class="mb-0">
                                        12345 Main Street, Los Angeles, CA 90094
                                      </p>
                                    </b-card>
                                  </b-col>
                                  <b-col cols="12" class="my-3">
                                    <b-card class="confirm-cards" body-class="py-2">
                                      <b-row  class="mb-2">
                                          <div class="d-flex">
                                            <div class="mt-2">
                                                <img :src="basic_const_icon" width="45" >
                                            </div>
                                            <div class="ms-3 mt-2 mb-0">
                                              <h5 class="patient-name mb-0">Basic Consultation</h5>
                                              <span class="patient-info">$150 • 30 minutes</span>
                                            </div>
                                          </div>
                                      </b-row>
                                    </b-card>
                                  </b-col>
                                  <b-col cols="12" class="">
                                    <b-card class="confirm-cards" body-class="py-2">
                                      <b-row  class="mb-2">
                                          <div class="d-flex">
                                            <div class="mt-2">
                                                <img :src="basic_const_icon" width="45" >
                                            </div>
                                            <div class="ms-3 mt-3 mb-0 items-align-center">
                                              <h5 class="patient-name mb-0">Friday, December 5th, 2021 @ 8:00 am</h5>
                                              
                                            </div>
                                          </div>
                                      </b-row>
                                    </b-card>
                                  </b-col>
                                  <b-col cols="12" class="mt-3">
                                    <h4>Required documents</h4>
                                    <div class="d-flex">
                                      <span class="required-document-tabs p-2 m-2">
                                        Driving Licence
                                      </span>
                                      <span class="required-document-tabs p-2 m-2">
                                        Medicare card
                                      </span>
                                      <span class="required-document-tabs p-2 m-2">
                                        Health Insurance
                                      </span>
                                    </div>
                                  </b-col>
                                  <b-col cols="12">
                                    <h4>Recurring appointment</h4>
                                    <b-card class="confirm-cards" body-class="py-2">
                                      <b-row  class="mb-0 m-2">
                                          <b-row>
                                            <b-col cols="6">
                                              <h4>Treatment / Procedure Type</h4>
                                                <p class="">Body Aching</p>
                                            </b-col>
                                            <b-col cols="6">
                                              <h4>Number of visit </h4>
                                                <p class="">06</p>
                                            </b-col>
                                            <b-col cols="6">
                                              <h4>How Often? </h4>
                                                <p class="">06</p>
                                            </b-col>
                                            <b-col cols="6">
                                              <h4>Appointment Frequency</h4>
                                                <p class="">Monthly</p>
                                            </b-col>
                                          </b-row>
                                      </b-row>
                                    </b-card>
                                  </b-col>
                                  <b-col cols="12" class="my-3">
                                    <b-card class="confirm-cards" body-class="py-2">
                                      <b-row  class="mb-2">
                                          <div class="d-flex">
                                            <div class="mt-2">
                                                <img :src="basic_const_icon" width="45" >
                                            </div>
                                            <div class="ms-3 mt-3 mb-0  d-flex">
                                              <h5 class="patient-name mb-0 align-items-center">Room : </h5>
                                              <span class="patient-info align-items-center line-height-info mx-2 "> Procedure therapy</span>
                                            </div>
                                          </div>
                                      </b-row>
                                    </b-card>
                                  </b-col>
                                  <b-col lg="6" >
                                       <h4>Patient</h4>
                                        <b-card class="confirm-cards" body-class="pb-2">
                                            <b-row  class="mb-2">
                                                <div class="d-flex">
                                                  <b-avatar :src="patientpic" rounded="lg" size="50"></b-avatar>
                                                  <div class="ms-3 mt-1 mb-0">
                                                    <h5 class="patient-name mb-0">Jim Swanson</h5>
                                                    <span class="patient-info">42 year old • Male </span>
                                                  </div>
                                                </div>
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                    <b-col lg="6" >
                                      <h4>Parent/Guardian</h4>
                                        <b-card class="confirm-cards" body-class="pb-2">
                                            <b-row  class="mb-2">
                                                <div class="d-flex">
                                                  <span class="bg-grey-guardian ">
                                                         <img :src="guardianimage" width="25" > 
                                                      </span>
                                                  <div class="ms-3 mt-1 mb-0">
                                                    <h5 class="patient-name mb-0">Amanda Tya</h5>
                                                    <span class="patient-info">(Partner)</span>
                                                  </div>
                                                </div>
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                    <b-col lg="6" class="my-3" >
                                       <h4>Care professional</h4>
                                        <b-card class="confirm-cards" body-class="pb-2">
                                            <b-row  class="mb-2">
                                                <div class="d-flex">
                                                  <b-avatar :src="patientpic" rounded="lg" size="50"></b-avatar>
                                                  <div class="ms-3 mt-1 mb-0">
                                                    <h5 class="patient-name mb-0" >{{ CarePhysicianName.slice(0,14) }}<span v-if="CarePhysicianName.length > 13">...</span></h5>
                                                    <span class="patient-info">Primary Care Physic.. </span>
                                                  </div>
                                                </div>
                                            </b-row>
                                        
                                        </b-card>
                                    </b-col>
                                    <b-col lg="5">

                                    </b-col>
                                </b-row>
                                
                              </div>
                              <button
                                type="button"
                                name="previous"
                                class="
                                  previous
                                  border-for-btns
                                  btn btn-back btn-create
                                  ml-0
                                "
                                value="Previous"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                name="next"
                                class="next border-for-btns btn btn-primary btn-create"
                                value="Next Step"
                              >
                                Confirm
                              </button>
                            </fieldset>
                          </b-card-body>
                        </form>
                      </div>
                    </div>
                  </div>
    </b-card>
 </div>

</template>
<script>
export default {
 name:'CreateCase',
 components:{
 },
 data(){
    return{
    }
 }
}
</script>
<style>
.card.bgx-create-client{
    margin-top: -51px;
    border-radius: 8px;
}
.patient-list-top {
    background: #F5F8FA;
    height: 150px;
}

</style>