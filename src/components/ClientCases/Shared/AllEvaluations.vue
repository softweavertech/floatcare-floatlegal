<template>
    <div>
        <table class="table  table-borderless">
            <thead>
                <tr>
                    <th v-for="field in tableHeadColumn" :key='field' :class="field.class">
                        {{ field.label }}
                    </th>
                </tr>
            </thead>
            <tbody>

                <tr class="active-row py-3">
                    <td>
                        <div class="d-flex manual me-3" @click="showManualCards = !showManualCards">
                            <div class="position-relative">
                                <span class="border-notch caret"></span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="  font-14-dark-600 ">
                            Manual Entries
                        </span>
                    </td>
                    <td colspan="8">
                        <div class="">

                        </div>

                    </td>
                </tr>
                <tr class="sub-div mt-3 ps-3" v-if="false">
                    <td colspan="10">

                        <ul class="position-relative treatment-plan-list">
                            <li class="treatment-plan-list-item">
                                <b-card class="w-100 plan-card" body-class="p-0">
                                    <section class="p-3 border-bottom-treatment-2" >
                                        <div class="d-flex">
                                            <div class="" @click="showSpecialists = !showSpecialists">
                                                <span class="sub-caret">

                                                </span>
                                            </div>

                                            <div class="w-12">
                                                <span class="font-14-dark-600">
                                                    Treatment Plan 1
                                                </span>
                                                <span class="font-12 primary-dark d-block">FloatCare Hospital</span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date created : 22nd Jul, 2022
                                                </span>
                                            </div>

                                            <div class="w-17">
                                                <span class="font-14  primary-dark">
                                                    Speciality: Cardiologist
                                                </span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date accepted : Aug 4th, 2022
                                                </span>
                                            </div>

                                            <div class="w-8 ">
                                                <b-badge class="note-count">
                                                    <img :src="groupPic" />
                                                    <span class="ms-2">02</span>
                                                </b-badge>
                                            </div>

                                            <div class="w-12">
                                                <b-button
                                                    class="in-progress text-white border-0 border-10 font-14 w-100 p-2">
                                                    In Progress</b-button>
                                            </div>

                                            <div class="w-7">
                                                <b-badge class="note-count pull-right">
                                                    <span class="" @click="$router.push('/client-cases/evaluation-view')" >View</span>
                                                </b-badge>
                                            </div>

                                        </div>
                                    </section>
                                    <section class=" treatment-specialists" v-if="showSpecialists">
                                        <ul>
                                            <li class="p-3 inner-border-notch pb-2" v-for="ele in 3" :key="ele" >
                                                <div class="w-100 d-flex">
                                                    <div class="w-21">
                                                        <b-avatar rounded="lg" size="30" class="me-2" :src="displayPic">
                                                        </b-avatar>
                                                        <span class="font-14-dark-600">
                                                            Aasiya Jayavant
                                                        </span>
                                                    </div>
                                                    <div class="w-21">
                                                        <span class="font-14  primary-dark">
                                                            Speciality: Cardiologist
                                                        </span>
                                                    </div>
                                                    <div class="w-21">
                                                        <span class="font-14  primary-dark">
                                                            Date created : May 06, 2022
                                                        </span>
                                                    </div>
                                                    <div class="w-21 text-center">
                                                        <img :src="timePic" >
                                                    </div>
                                                    <div class="w-16">
                                                        <b-button class="approval-needed text-white border-0 border-10 font-14 w-100 p-2">
                                                        Approval Needed
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>
                                </b-card>
                            </li>
                            <li  class="treatment-plan-list-item">
                                <section>
                                    <b-card class="w-100 plan-card highlighted-border">
                                        <div class="d-flex">
                                            <div class="">
                                                <span class="sub-caret">

                                                </span>
                                            </div>

                                            <div class="w-12">
                                                <span class="font-14-dark-600">
                                                    Treatment Plan 1
                                                </span>
                                                <span class="font-12 primary-dark d-block">FloatCare Hospital</span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date created : 22nd Jul, 2022
                                                </span>
                                            </div>

                                            <div class="w-17">
                                                <span class="font-14  primary-dark">
                                                    Speciality: Cardiologist
                                                </span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date accepted : Aug 4th, 2022
                                                </span>
                                            </div>

                                            <div class="w-8 ">
                                                <b-badge class="note-count">
                                                    <img :src="groupPic" />
                                                    <span class="ms-2">02</span>
                                                </b-badge>
                                            </div>

                                            <div class="w-12">
                                                <b-button
                                                    class="case-color text-white border-0 border-10 font-14 w-100 p-2">
                                                    Pending</b-button>
                                            </div>

                                            <div class="w-7">
                                                <b-badge class="note-count pull-right">
                                                    <span class=""  @click="$router.push('/client-cases/evaluation-view')">View</span>
                                                </b-badge>
                                            </div>

                                        </div>
                                    </b-card>
                                </section>
                            </li>
                            <li  class="treatment-plan-list-item">
                                <section>
                                    <b-card class="w-100 plan-card">
                                        <div class="d-flex">
                                            <div class="">
                                                <span class="sub-caret">

                                                </span>
                                            </div>

                                            <div class="w-12">
                                                <span class="font-14-dark-600">
                                                    Treatment Plan 1
                                                </span>
                                                <span class="font-12 primary-dark d-block">FloatCare Hospital</span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date created : 22nd Jul, 2022
                                                </span>
                                            </div>

                                            <div class="w-17">
                                                <span class="font-14  primary-dark">
                                                    Speciality: Cardiologist
                                                </span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date accepted : Aug 4th, 2022
                                                </span>
                                            </div>

                                            <div class="w-8 ">
                                                <b-badge class="note-count">
                                                    <img :src="groupPic" />
                                                    <span class="ms-2">02</span>
                                                </b-badge>
                                            </div>

                                            <div class="w-12">
                                                <b-button
                                                    class="complete-btn text-white border-0 border-10 font-14 w-100 p-2">
                                                    Completed</b-button>
                                            </div>

                                            <div class="w-7">
                                                <b-badge class="note-count pull-right">
                                                    <span class=""  @click="$router.push('/client-cases/evaluation-view')">View</span>
                                                </b-badge>
                                            </div>

                                        </div>

                                    </b-card>
                                </section>
                            </li>
                        </ul>
                    </td>

                </tr>
                <tr class="active-row py-3">
                    <td>
                        <div class="d-flex case me-3" @click="showDetails">
                            <div class="position-relative">
                                <span class="border-notch caret " :class="{ 'caret-down': currentActive }"></span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <b-avatar rounded="lg" size="30" class="me-2" :src="displayPic"></b-avatar>
                        <span class="  font-14-dark-600 ">
                            Nayara Delafuente
                        </span>
                    </td>

                    <td>
                        <img :src="inboundImg" />
                    </td>
                    <td>
                        <span class="font-14 primary-dark">Case Consultant</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">Los Angeles, CA.</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">May 05, 2022</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">John@floatlegal.com</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">(123) 456-7890</span>
                    </td>
                    <td>
                        <b-button class="case-color text-white border-0 border-10 font-14 w-100 p-2">Action needed
                        </b-button>
                    </td>
                    <td>
                        <b-badge class="note-count">
                            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Notes</title>
                                <g id="Float-Legal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Manage-Referrals/Outbound-Referral-Vide"
                                        transform="translate(-1233.000000, -147.000000)">
                                        <g id="Group" transform="translate(1222.000000, 135.000000)">
                                            <g id="speaker_notes_black_24dp"
                                                transform="translate(11.000000, 12.000000)">
                                                <polygon id="Path" points="0 0 16 0 16 16 0 16"></polygon>
                                                <path
                                                    d="M13.7,1 L3.3,1 C2.585,1 2.0065,1.585 2.0065,2.3 L2,14 L4.6,11.4 L13.7,11.4 C14.415,11.4 15,10.815 15,10.1 L15,2.3 C15,1.585 14.415,1 13.7,1 Z M5.9,8.8 L4.6,8.8 L4.6,7.5 L5.9,7.5 L5.9,8.8 Z M5.9,6.85 L4.6,6.85 L4.6,5.55 L5.9,5.55 L5.9,6.85 Z M5.9,4.9 L4.6,4.9 L4.6,3.6 L5.9,3.6 L5.9,4.9 Z M9.8,8.8 L7.85,8.8 C7.4925,8.8 7.2,8.5075 7.2,8.15 C7.2,7.7925 7.4925,7.5 7.85,7.5 L9.8,7.5 C10.1575,7.5 10.45,7.7925 10.45,8.15 C10.45,8.5075 10.1575,8.8 9.8,8.8 Z M11.75,6.85 L7.85,6.85 C7.4925,6.85 7.2,6.5575 7.2,6.2 C7.2,5.8425 7.4925,5.55 7.85,5.55 L11.75,5.55 C12.1075,5.55 12.4,5.8425 12.4,6.2 C12.4,6.5575 12.1075,6.85 11.75,6.85 Z M11.75,4.9 L7.85,4.9 C7.4925,4.9 7.2,4.6075 7.2,4.25 C7.2,3.8925 7.4925,3.6 7.85,3.6 L11.75,3.6 C12.1075,3.6 12.4,3.8925 12.4,4.25 C12.4,4.6075 12.1075,4.9 11.75,4.9 Z"
                                                    id="Shape" fill="#173E67" fill-rule="nonzero"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="ms-2">02</span>
                        </b-badge>
                    </td>

                </tr>
                <tr id="tr-detail" class="tr-detail" v-if="currentActive" @click="showTreatmentPlans = !showTreatmentPlans">
                    <td class=" tree-border position-relative">
                        <span class="border-down"></span>
                    </td>
                    <td class="d-flex">
                        <div class="position-relative">
                            <span class="inner-caret"></span>
                        </div>
                        <b-avatar rounded="lg" size="30" class="me-2" :src="displayPic"></b-avatar>
                        <span class="font-14-dark-600">
                            Nayara Delafuente
                        </span>
                    </td>

                    <td>
                        <img :src="inboundImg" />
                    </td>
                    <td>
                        <span class="font-14 primary-dark">Case Consultant</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">Los Angeles, CA.</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">May 05, 2022</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">John@floatlegal.com</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">(123) 456-7890</span>
                    </td>
                    <td>
                        <b-button class="case-color text-white border-0 border-10 font-14 w-100 p-2">Action needed
                        </b-button>
                    </td>
                    <td>
                        <b-badge class="note-count">
                            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Notes</title>
                                <g id="Float-Legal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Manage-Referrals/Outbound-Referral-Vide"
                                        transform="translate(-1233.000000, -147.000000)">
                                        <g id="Group" transform="translate(1222.000000, 135.000000)">
                                            <g id="speaker_notes_black_24dp"
                                                transform="translate(11.000000, 12.000000)">
                                                <polygon id="Path" points="0 0 16 0 16 16 0 16"></polygon>
                                                <path
                                                    d="M13.7,1 L3.3,1 C2.585,1 2.0065,1.585 2.0065,2.3 L2,14 L4.6,11.4 L13.7,11.4 C14.415,11.4 15,10.815 15,10.1 L15,2.3 C15,1.585 14.415,1 13.7,1 Z M5.9,8.8 L4.6,8.8 L4.6,7.5 L5.9,7.5 L5.9,8.8 Z M5.9,6.85 L4.6,6.85 L4.6,5.55 L5.9,5.55 L5.9,6.85 Z M5.9,4.9 L4.6,4.9 L4.6,3.6 L5.9,3.6 L5.9,4.9 Z M9.8,8.8 L7.85,8.8 C7.4925,8.8 7.2,8.5075 7.2,8.15 C7.2,7.7925 7.4925,7.5 7.85,7.5 L9.8,7.5 C10.1575,7.5 10.45,7.7925 10.45,8.15 C10.45,8.5075 10.1575,8.8 9.8,8.8 Z M11.75,6.85 L7.85,6.85 C7.4925,6.85 7.2,6.5575 7.2,6.2 C7.2,5.8425 7.4925,5.55 7.85,5.55 L11.75,5.55 C12.1075,5.55 12.4,5.8425 12.4,6.2 C12.4,6.5575 12.1075,6.85 11.75,6.85 Z M11.75,4.9 L7.85,4.9 C7.4925,4.9 7.2,4.6075 7.2,4.25 C7.2,3.8925 7.4925,3.6 7.85,3.6 L11.75,3.6 C12.1075,3.6 12.4,3.8925 12.4,4.25 C12.4,4.6075 12.1075,4.9 11.75,4.9 Z"
                                                    id="Shape" fill="#173E67" fill-rule="nonzero"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="ms-2">02</span>
                        </b-badge>
                    </td>
                </tr>
                <tr id="tr-detail" class="tr-detail" v-else @click="showDetails" >
                    <td class=" tree-border position-relative">
                        <span class="border-down"></span>
                    </td>
                    <td colspan="9" class="pt-0">
                        <div>
                             <img :src="moreIcon">
                             <span class="ms-2 font-14-dark-600">
                                3 More Providers    
                            </span>
                        </div>
                       
                    </td>
                    </tr>
                <tr class="sub-div" v-if="showTreatmentPlans">
                    <td></td>
                    <td colspan="9">

                        <ul class="position-relative treatment-plan-list">
                            <li class="treatment-plan-list-item">
                                <b-card class="w-100 plan-card" body-class="p-0">
                                    <section class="p-3 border-bottom-treatment-2" >
                                        <div class="d-flex">
                                            <div class="" @click="showSpecialists = !showSpecialists">
                                                <span class="sub-caret">

                                                </span>
                                            </div>

                                            <div class="w-12">
                                                <span class="font-14-dark-600">
                                                    Treatment Plan 1
                                                </span>
                                                <span class="font-12 primary-dark d-block">FloatCare Hospital</span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date created : 22nd Jul, 2022
                                                </span>
                                            </div>

                                            <div class="w-17">
                                                <span class="font-14  primary-dark">
                                                    Speciality: Cardiologist
                                                </span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date accepted : Aug 4th, 2022
                                                </span>
                                            </div>

                                            <div class="w-8 ">
                                                <b-badge class="note-count">
                                                    <img :src="groupPic" />
                                                    <span class="ms-2">02</span>
                                                </b-badge>
                                            </div>

                                            <div class="w-12">
                                                <b-button
                                                    class="in-progress text-white border-0 border-10 font-14 w-100 p-2">
                                                    In Progress</b-button>
                                            </div>

                                            <div class="w-7">
                                                <b-badge class="note-count pull-right">
                                                    <span class="" @click="$router.push('/client-cases/evaluation-view')" >View</span>
                                                </b-badge>
                                            </div>

                                        </div>
                                    </section>
                                    <section class=" treatment-specialists" v-if="showSpecialists">
                                        <ul>
                                            <li class="p-3 inner-border-notch pb-2" v-for="ele in 3" :key="ele" >
                                                <div class="w-100 d-flex">
                                                    <div class="w-21">
                                                        <b-avatar rounded="lg" size="30" class="me-2" :src="displayPic">
                                                        </b-avatar>
                                                        <span class="font-14-dark-600">
                                                            Aasiya Jayavant
                                                        </span>
                                                    </div>
                                                    <div class="w-21">
                                                        <span class="font-14  primary-dark">
                                                            Speciality: Cardiologist
                                                        </span>
                                                    </div>
                                                    <div class="w-21">
                                                        <span class="font-14  primary-dark">
                                                            Date created : May 06, 2022
                                                        </span>
                                                    </div>
                                                    <div class="w-21 text-center">
                                                        <img :src="timePic" >
                                                    </div>
                                                    <div class="w-16">
                                                        <b-button class="approval-needed text-white border-0 border-10 font-14 w-100 p-2">
                                                        Approval Needed
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>
                                </b-card>
                            </li>
                            <li  class="treatment-plan-list-item">
                                <section>
                                    <b-card class="w-100 plan-card highlighted-border">
                                        <div class="d-flex">
                                            <div class="">
                                                <span class="sub-caret">

                                                </span>
                                            </div>

                                            <div class="w-12">
                                                <span class="font-14-dark-600">
                                                    Treatment Plan 1
                                                </span>
                                                <span class="font-12 primary-dark d-block">FloatCare Hospital</span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date created : 22nd Jul, 2022
                                                </span>
                                            </div>

                                            <div class="w-17">
                                                <span class="font-14  primary-dark">
                                                    Speciality: Cardiologist
                                                </span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date accepted : Aug 4th, 2022
                                                </span>
                                            </div>

                                            <div class="w-8 ">
                                                <b-badge class="note-count">
                                                    <img :src="groupPic" />
                                                    <span class="ms-2">02</span>
                                                </b-badge>
                                            </div>

                                            <div class="w-12">
                                                <b-button
                                                    class="case-color text-white border-0 border-10 font-14 w-100 p-2">
                                                    Pending</b-button>
                                            </div>

                                            <div class="w-7">
                                                <b-badge class="note-count pull-right">
                                                    <span class=""  @click="$router.push('/client-cases/evaluation-view')">View</span>
                                                </b-badge>
                                            </div>

                                        </div>
                                    </b-card>
                                </section>
                            </li>
                            <li  class="treatment-plan-list-item">
                                <section>
                                    <b-card class="w-100 plan-card">
                                        <div class="d-flex">
                                            <div class="">
                                                <span class="sub-caret">

                                                </span>
                                            </div>

                                            <div class="w-12">
                                                <span class="font-14-dark-600">
                                                    Treatment Plan 1
                                                </span>
                                                <span class="font-12 primary-dark d-block">FloatCare Hospital</span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date created : 22nd Jul, 2022
                                                </span>
                                            </div>

                                            <div class="w-17">
                                                <span class="font-14  primary-dark">
                                                    Speciality: Cardiologist
                                                </span>
                                            </div>

                                            <div class="w-22">
                                                <span class="font-14  primary-dark">
                                                    Date accepted : Aug 4th, 2022
                                                </span>
                                            </div>

                                            <div class="w-8 ">
                                                <b-badge class="note-count">
                                                    <img :src="groupPic" />
                                                    <span class="ms-2">02</span>
                                                </b-badge>
                                            </div>

                                            <div class="w-12">
                                                <b-button
                                                    class="complete-btn text-white border-0 border-10 font-14 w-100 p-2">
                                                    Completed</b-button>
                                            </div>

                                            <div class="w-7">
                                                <b-badge class="note-count pull-right">
                                                    <span class=""  @click="$router.push('/client-cases/evaluation-view')">View</span>
                                                </b-badge>
                                            </div>

                                        </div>

                                    </b-card>
                                </section>
                            </li>
                        </ul>
                    </td>

                </tr>
                <tr class="active-row py-3">
                    <td>
                        <div class="d-flex attorney me-3">
                            <div class="position-relative">
                                <span class="border-notch caret" :class="{ 'caret-down': active }"></span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <b-avatar rounded="lg" size="30" class="me-2" :src="displayPic"></b-avatar>
                        <span class="  font-14-dark-600 ">
                            Nayara Delafuente
                        </span>
                    </td>

                    <td>
                        <img :src="inboundImg" />
                    </td>
                    <td>
                        <span class="font-14 primary-dark">Case Consultant</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">Los Angeles, CA.</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">May 05, 2022</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">John@floatlegal.com</span>
                    </td>
                    <td>
                        <span class="font-14 primary-dark">(123) 456-7890</span>
                    </td>
                    <td>
                        <b-button class="case-color text-white border-0 border-10 font-14 w-100 p-2">Action needed
                        </b-button>
                    </td>
                    <td>
                        <b-badge class="note-count">
                            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Notes</title>
                                <g id="Float-Legal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Manage-Referrals/Outbound-Referral-Vide"
                                        transform="translate(-1233.000000, -147.000000)">
                                        <g id="Group" transform="translate(1222.000000, 135.000000)">
                                            <g id="speaker_notes_black_24dp"
                                                transform="translate(11.000000, 12.000000)">
                                                <polygon id="Path" points="0 0 16 0 16 16 0 16"></polygon>
                                                <path
                                                    d="M13.7,1 L3.3,1 C2.585,1 2.0065,1.585 2.0065,2.3 L2,14 L4.6,11.4 L13.7,11.4 C14.415,11.4 15,10.815 15,10.1 L15,2.3 C15,1.585 14.415,1 13.7,1 Z M5.9,8.8 L4.6,8.8 L4.6,7.5 L5.9,7.5 L5.9,8.8 Z M5.9,6.85 L4.6,6.85 L4.6,5.55 L5.9,5.55 L5.9,6.85 Z M5.9,4.9 L4.6,4.9 L4.6,3.6 L5.9,3.6 L5.9,4.9 Z M9.8,8.8 L7.85,8.8 C7.4925,8.8 7.2,8.5075 7.2,8.15 C7.2,7.7925 7.4925,7.5 7.85,7.5 L9.8,7.5 C10.1575,7.5 10.45,7.7925 10.45,8.15 C10.45,8.5075 10.1575,8.8 9.8,8.8 Z M11.75,6.85 L7.85,6.85 C7.4925,6.85 7.2,6.5575 7.2,6.2 C7.2,5.8425 7.4925,5.55 7.85,5.55 L11.75,5.55 C12.1075,5.55 12.4,5.8425 12.4,6.2 C12.4,6.5575 12.1075,6.85 11.75,6.85 Z M11.75,4.9 L7.85,4.9 C7.4925,4.9 7.2,4.6075 7.2,4.25 C7.2,3.8925 7.4925,3.6 7.85,3.6 L11.75,3.6 C12.1075,3.6 12.4,3.8925 12.4,4.25 C12.4,4.6075 12.1075,4.9 11.75,4.9 Z"
                                                    id="Shape" fill="#173E67" fill-rule="nonzero"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="ms-2">02</span>
                        </b-badge>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import inboundImg from "@/assets/images/inbound.svg"
import displayPic from "@/assets/images/Avatars/showPic.jpg"
import groupPic from "@/assets/images/Group52.svg"
import timePic from "@/assets/images/Time@3x.svg"
import moreIcon from "@/assets/images/More@3x.svg"

import { ref, onMounted } from 'vue';
export default {
    name: "AllEvaluations",

    props: ["tableHeadColumn"],
    data() {
        return {
            displayPic,
            inboundImg,
            timePic,
            groupPic,
            moreIcon,
            active: false,
            currentActive: false,
            showTreatmentPlans:false,
            showSpecialists:false,
            showManualCards:false,
        }
    },
    methods: {
        showDetails(event) {
            this.currentActive = !this.currentActive
            this.showTreatmentPlans = false
            this.showSpecialists = false 
            // const el = document.body;
            // console.log(el)
            // el.classList.add('caret-down');
        }
    }
}
</script>
<style lang="scss" scoped>
.sub-div {
    ul.treatment-plan-list::before {
        content: "";
        border-left: 1px solid gray;
        position: absolute;
        bottom: 37px;
        left: 0;
        height: 97%;
    }

    ul {
        list-style: none;
        .border-bottom-treatment-2 ~ .treatment-specialists{
            border-top: 2px solid #5563ab23;
        }
        li.treatment-plan-list-item {
            .treatment-specialists{
                ul{
                    padding: 0px ;
                    li.inner-border-notch::before{
                        content: "";
                        height: 30px;
                        border-left: 3px solid #FFB30F;
                        position: absolute;
                        left: 0px;
                        border-radius: 0 10px 10px 0;
                    }
                    li.inner-border-notch:not(:last-of-type)::after{
                        content: "";
                        position: absolute;
                        background: #5563ab23;
                        width: 96%;
                        height: 1px;
                        margin-top: 12px;
                    }
                    
                    .w-21{
                        min-width: 21%;
                    }
                    .w-16{
                        width: 16%;
                    }
                }
            }
            position: relative;
            margin-bottom: 10px;

            .highlighted-border {
                border: 2px solid #74E790 !important;
            }

            .plan-card {
                border: 2px solid #5563ab23;
                border-radius: 10px;

                .note-count {
                    padding: 12px 14px 11px 13px;
                }

                .w-17 {
                    width: 17%;
                }

                .w-20 {
                    width: 20%;
                }

                .w-22 {
                    width: 22%;
                }

                .w-11 {
                    width: 12%;
                }

                .w-8 {
                    width: 8%;
                }

                .w-7 {
                    width: 7%;
                }

                .w-12 {
                    width: 12%;
                }
            }
        }

        li.treatment-plan-list-item::before {
            content: "";
            position: absolute;
            top: 40px;
            left: -31px;
            background: gray;
            width: 33px;
            height: 1px;

        }
    }
}

.tree-border::after {
    content: "";
    position: absolute;
    left: 65%;
    border-left: 1px solid gray;
    height: 42%;
    top: 0;
    border-bottom: 1px solid gray;
    width: 40%;
    border-radius: 0px 5px 1px;
}

.detail-content {

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}

.sub-caret {
    position: relative;
}

.sub-caret::before {
    content: "\f0da";
    margin-right: 0.75rem;
    font-family: FontAwesome;
    color: #173E67;
}

.inner-caret::after {
    content: "\f0da";
    margin-right: 0.75rem;
    font-family: FontAwesome;
    color: #173E67;
    display: inline-block;
    // transform: translateY(-50%);
}

.caret::after {
    content: "\f0da";
    margin-left: 0.75rem;
    font-family: FontAwesome;
    color: #173E67;
    display: inline-block;
    transform: translateY(-50%);
}

.caret-down::after {
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    position: absolute;
    top: 20%;
}

.caret {
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari 3.1+ */
    -moz-user-select: none;
    /* Firefox 2+ */
    -ms-user-select: none;
    /* IE 10+ */
    user-select: none;
}

.manual .border-notch {
    background: #1F3D5A;
}

.case .border-notch {
    background: #FFB30F;
}

.attorney .border-notch {
    background: #6CCCA5;
}

.border-notch {
    width: 3px;
    padding: 15px 0px;
    height: 100%;
    border-radius: 0 10px 10px 0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
}

tbody tr td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    vertical-align: middle;
}

tr+.active-row {
    border-top: 1px solid #dee2e6 !important;
}

tr:last-child {
    order: -1;
}

thead th {
    background-color: #eeeff0 !important;
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

.table>thead>tr>th {
    border: none !important;
}


/* remove border from first tbody row... */
.table>tbody>tr:first-child>td,

.table>thead>tr>th {

    color: #7c7c7c;
}

.table-title {
    color: #7c7c7c;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
}
</style>
