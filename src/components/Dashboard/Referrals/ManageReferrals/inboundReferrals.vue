<template>
    <div class=" main-container-bg">
        <div class="manage-referral-search d-flex px-4 py-3">
            <b-input-group>
                <b-input-group-append>
                    <i class='fa fa-search'></i>
                </b-input-group-append>
                <b-form-input v-model="searchReferral" type="text" placeholder="Search"></b-form-input>

            </b-input-group>

            <button class="btn btn-primary btn-merge-referral ms-auto boder-radius-10 " v-b-modal.my-modal>Merge
                Referral</button>

        </div>

        <div class="referral-list-container px-4 pt-2 pb-4 bg-white">
            <b-nav class="contianer-tabs pt-3 mr-auto">
                <b-nav-item v-for="link in breadCrumb" :key="link.value" :value="link.name"
                    @click="tabsActivate(link.value)" :class="{ active : displayItem === link.value}">
                    {{ link.name }}
                </b-nav-item>
            </b-nav>
            <div class="p-3 table-container">
                <table id="tableComponent" class="table table-borderless mb-0">
                    <thead>
                        <tr>
                            <!-- loop through each value of the fields to get the table header -->
                            <th v-for="field in fields" :key='field' :class="field.class">
                                {{field.label}}
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="inboundReferralList.length == 0">
                        <tr class=" border-0.referral-list-container">
                            <td class="text-center p-5" colspan="8">
                                <img :src="noReferral">
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="inboundReferralList.length != 0">
                        <!-- Loop through the list get the each student data -->
                        <tr v-for="item in inboundReferralList" :key='item'>
                            <td class="fw-bold">
                                <b-avatar variant="primary" :text="item.avatar" class="me-2" v-if="!item.profilePhoto">
                                </b-avatar>
                                <b-avatar variant="info" src="https://placekitten.com/300/300" class="me-2"
                                    v-if=" item.profilePhoto"></b-avatar>
                                {{item.name}}
                            </td>
                            <td>
                                <span v-if="item.caseId > 0">
                                    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <title>Icon/Icon_blue_green/ic_Referrals-Inbound</title>
                                        <g id="Icon/Icon_blue_green/ic_Referrals-Inbound" stroke="none" stroke-width="1"
                                            fill="none" fill-rule="evenodd">
                                            <g id="Group-2" transform="translate(1.500000, 0.500000)">
                                                <path
                                                    d="M4,6 C2.34314575,6 1,4.65685425 1,3 C1,1.34314575 2.34314575,0 4,0 C5.65685425,0 7,1.34314575 7,3 C7,4.65685425 5.65685425,6 4,6 Z M4,4 C4.55228475,4 5,3.55228475 5,3 C5,2.44771525 4.55228475,2 4,2 C3.44771525,2 3,2.44771525 3,3 C3,3.55228475 3.44771525,4 4,4 Z M3,6 L5,6 C6.65685425,6 8,7.34314575 8,9 L8,10 C8,11.6568542 6.65685425,13 5,13 L3,13 C1.34314575,13 0,11.6568542 0,10 L0,9 C0,7.34314575 1.34314575,6 3,6 Z M3,8 C2.44771525,8 2,8.44771525 2,9 L2,10 C2,10.5522847 2.44771525,11 3,11 L5,11 C5.55228475,11 6,10.5522847 6,10 L6,9 C6,8.44771525 5.55228475,8 5,8 L3,8 Z"
                                                    id="Shape" fill="#B5B5BE"></path>
                                                <path
                                                    d="M15,14 C13.3431458,14 12,12.6568542 12,11 C12,9.34314575 13.3431458,8 15,8 C16.6568542,8 18,9.34314575 18,11 C18,12.6568542 16.6568542,14 15,14 Z M16,14 C17.6568542,14 19,15.3431458 19,17 L19,18 C19,19.6568542 17.6568542,21 16,21 L14,21 C12.3431458,21 11,19.6568542 11,18 L11,17 C11,15.3431458 12.3431458,14 14,14 L16,14 Z M15,10 C15.5522847,10 16,10.4477153 16,11 C16,11.5522847 15.5522847,12 15,12 C14.4477153,12 14,11.5522847 14,11 C14,10.4477153 14.4477153,10 15,10 Z M14,16 C13.4477153,16 13,16.4477153 13,17 L13,18 C13,18.5522847 13.4477153,19 14,19 L16,19 C16.5522847,19 17,18.5522847 17,18 L17,17 C17,16.4477153 16.5522847,16 16,16 L14,16 Z"
                                                    id="Shape" fill="#5C63AB"></path>
                                                <g id="Group-3" transform="translate(2.500000, 14.000000)"
                                                    fill="#4394AD" fill-rule="nonzero">
                                                    <path
                                                        d="M1.01906374,0 C1.5818771,0 2.03812748,0.437128985 2.03812748,0.976354914 C2.03812748,2.02032029 2.88129754,2.87560618 3.95077494,2.95120248 L4.10503032,2.95663413 L4.958,2.956 L4.48879833,2.48699426 C4.09082918,2.08902511 4.07730832,1.45731051 4.45859863,1.07602019 C4.81265392,0.721964905 5.38263628,0.708333539 5.7808923,1.02682898 L5.86957269,1.10621989 L7.32431129,2.56095849 C7.71292416,2.94957137 7.93056085,3.46377925 7.9418482,3.99114084 C7.95188141,4.4599067 7.79827861,4.91128748 7.50252423,5.26730365 L7.38499494,5.3961872 L5.99122424,6.78995789 C5.60993393,7.1712482 4.97821933,7.15772734 4.58025018,6.75975819 C4.2107074,6.39021541 4.17265319,5.81912681 4.47438467,5.43414578 L4.55005048,5.34878413 L4.989,4.909 L4.10503032,4.90934396 C1.83788468,4.90934396 0,3.14848478 0,0.976354914 C0,0.437128985 0.456250377,0 1.01906374,0 Z"
                                                        id="Combined-Shape"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span v-if="item.caseId === 0">
                                    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <title>Icon/Icon_blue_green/ic_Referrals-Outbound</title>
                                        <g id="Icon/Icon_blue_green/ic_Referrals-Outbound" stroke="none"
                                            stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Group-2" transform="translate(1.500000, 0.500000)">
                                                <path
                                                    d="M4,6 C2.34314575,6 1,4.65685425 1,3 C1,1.34314575 2.34314575,0 4,0 C5.65685425,0 7,1.34314575 7,3 C7,4.65685425 5.65685425,6 4,6 Z M4,4 C4.55228475,4 5,3.55228475 5,3 C5,2.44771525 4.55228475,2 4,2 C3.44771525,2 3,2.44771525 3,3 C3,3.55228475 3.44771525,4 4,4 Z M3,6 L5,6 C6.65685425,6 8,7.34314575 8,9 L8,10 C8,11.6568542 6.65685425,13 5,13 L3,13 C1.34314575,13 0,11.6568542 0,10 L0,9 C0,7.34314575 1.34314575,6 3,6 Z M3,8 C2.44771525,8 2,8.44771525 2,9 L2,10 C2,10.5522847 2.44771525,11 3,11 L5,11 C5.55228475,11 6,10.5522847 6,10 L6,9 C6,8.44771525 5.55228475,8 5,8 L3,8 Z"
                                                    id="Shape" fill="#B5B5BE"></path>
                                                <path
                                                    d="M15,14 C13.3431458,14 12,12.6568542 12,11 C12,9.34314575 13.3431458,8 15,8 C16.6568542,8 18,9.34314575 18,11 C18,12.6568542 16.6568542,14 15,14 Z M16,14 C17.6568542,14 19,15.3431458 19,17 L19,18 C19,19.6568542 17.6568542,21 16,21 L14,21 C12.3431458,21 11,19.6568542 11,18 L11,17 C11,15.3431458 12.3431458,14 14,14 L16,14 Z M15,10 C15.5522847,10 16,10.4477153 16,11 C16,11.5522847 15.5522847,12 15,12 C14.4477153,12 14,11.5522847 14,11 C14,10.4477153 14.4477153,10 15,10 Z M14,16 C13.4477153,16 13,16.4477153 13,17 L13,18 C13,18.5522847 13.4477153,19 14,19 L16,19 C16.5522847,19 17,18.5522847 17,18 L17,17 C17,16.4477153 16.5522847,16 16,16 L14,16 Z"
                                                    id="Shape" fill="#4394AD"></path>
                                                <g id="Group-4" transform="translate(8.500000, 0.000000)" fill="#5C63AB"
                                                    fill-rule="nonzero">
                                                    <path
                                                        d="M3.51120167,4.51300574 C3.90917082,4.91097489 3.92269168,5.54268949 3.54140137,5.92397981 C3.18734608,6.2780351 2.61736372,6.29166646 2.2191077,5.97317102 L2.13042731,5.89378011 L0.675688714,4.43904151 C0.287075838,4.05042863 0.0694391495,3.53622075 0.0581517967,3.00885916 C0.0481185943,2.5400933 0.201721389,2.08871252 0.497475774,1.73269635 L0.615005063,1.6038128 L2.00877576,0.210042107 C2.39006607,-0.171248205 3.02178067,-0.157727338 3.41974982,0.240241807 C3.7892926,0.609784585 3.82734681,1.18087319 3.52561533,1.56585422 L3.44994952,1.65121587 L3.01,2.09 L3.89496968,2.09065604 C6.16211532,2.09065604 8,3.85151522 8,6.02364509 C8,6.56287102 7.54374962,7 6.98093626,7 C6.45832385,7 6.02759483,6.62308776 5.96872851,6.13750869 L5.96187252,6.02364509 C5.96187252,4.97967971 5.11870246,4.12439382 4.04922506,4.04879752 L3.89496968,4.04336587 L3.041,4.043 L3.51120167,4.51300574 Z"
                                                        id="Combined-Shape"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </td>

                            <td>{{item.referralTo.firstName}} {{item.referralTo.lastName}}</td>
                            <td> {{ $filters.dateformate(item.referralDate) }} </td>
                            <td><span v-if="item.referralFrom">{{item.referralFrom.firstName}} </span>
                                <span v-if="item.referralFrom">{{item.referralFrom.lastName}}</span></td>
                            <td><span :class="item.status">{{item.status}}</span> </td>
                            <td><button class="btn btn-light chat-btn" @click="openNotes"><img :src="chatImg">
                                    {{item.totalNotes}}</button>
                            </td>

                            <td> <button class="btn btn-light view-btn"> View</button></td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
            <b-modal id="verifyNotes" content-class="otp-modal" size="md" centered  hide-footer  hide-header  no-close-on-backdrop> 
                <otp-verification  ></otp-verification>
            </b-modal>

    </div>
</template>

<script>
    import chatImg from '@/assets/images/notes.svg';
    import noReferral from '@/assets/images/no-referrals.svg';
    import otpVerification from '@/components/Dashboard/Referrals/ManageReferrals/otpVerification.vue';
    export default ({
         components: {
            otpVerification 
            },
        data() {
            return {
                displayItem: 'allReferrals',
                inboundReferralList: [],
                searchReferral: "",
                chatImg: chatImg,
                noReferral: noReferral,
                breadCrumb: [{
                        name: "All Referrals",
                        value: 'allReferrals'
                    },
                    {
                        name: "Accepted Referrals",
                        value: 'Accepted'
                    },
                    {
                        name: "Pending Referrals",
                        value: 'Pending'
                    },
                    {
                        name: "Reject Referrals",
                        value: 'Rejected'
                    },

                ],

                fields: [{
                        key: "patientInformation",
                        label: "Patient Name & Status",
                        class: "text-left",
                    },
                    {
                        key: "status",
                        label: "Status",
                        class: "text-left",
                    },
                    {
                        key: "referralTo",
                        label: "Referred Physician",
                        class: "text-left",
                    },

                    {
                        key: "referraldate",
                        label: "Referral Date",
                        class: "text-left",
                    },
                    {
                        key: "referralfrom",
                        label: "Referral From",
                        class: "text-left",
                    },
                    {
                        key: "referralstatus",
                        label: "Referral Status",
                        class: "text-left",
                    },
                    {
                        key: "totalNotes",
                        label: "Notes",
                        class: "text-left",
                    },
                    {
                        key: "action",
                        label: "Action",
                        class: "text-left",
                    },
                ],

                "findInboundReferralsByBusinessId": [{
                    "referralId": 847,
                    "referralDate": "2022-01-27",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 575,
                        "firstName": "Kami",
                        "lastName": "Axelsen",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Jogesh",
                        "lastName": "Harjai",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "John",
                        "lastName": "Kegel",
                        "middleName": null,
                        "staffUserCoreTypeName": "Office Admin",
                    },
                    "fromBusinessDetails": {
                        "businessId": 0,
                        "name": null,
                    },
                    "caseId": 0,
                    "unreadNotesForUser": 5,
                    "lawFirmStatus": "pending",
                    "status": "Pending",
                }, {
                    "referralId": 852,
                    "referralDate": "2022-02-02",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 569,
                        "firstName": "Mani",
                        "lastName": "N",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Ryan",
                        "lastName": "Farah",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "John",
                        "lastName": "Kegel",
                        "middleName": null,
                        "staffUserCoreTypeName": "Office Admin",
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 0,
                        "name": null,
                        "__typename": "Businesses"
                    },
                    "caseId": 455,
                    "unreadNotesForUser": 29,
                    "lawFirmStatus": "pending",
                    "status": "Accepted",
                    "__typename": "Referrals"
                }, {
                    "referralId": 905,
                    "referralDate": "2022-02-02",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 569,
                        "firstName": "Mani",
                        "lastName": "N",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Ryan",
                        "lastName": "Farah",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "John",
                        "lastName": "Kegel",
                        "middleName": null,
                        "staffUserCoreTypeName": "Office Admin",
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 0,
                        "name": null,
                        "__typename": "Businesses"
                    },
                    "caseId": 455,
                    "unreadNotesForUser": 29,
                    "lawFirmStatus": "pending",
                    "status": "Accepted",
                    "__typename": "Referrals"
                }, {
                    "referralId": 908,
                    "referralDate": "2022-02-08",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 589,
                        "firstName": "Nobitha",
                        "lastName": "n",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Ryan",
                        "lastName": "Farah",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "John",
                        "lastName": "Kegel",
                        "middleName": null,
                        "staffUserCoreTypeName": "Office Admin",
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 0,
                        "name": null,
                        "__typename": "Businesses"
                    },
                    "caseId": 457,
                    "unreadNotesForUser": 42,
                    "lawFirmStatus": "pending",
                    "status": "Accepted",
                    "__typename": "Referrals"
                }, {
                    "referralId": 968,
                    "referralDate": "2022-02-09",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 578,
                        "firstName": "mANOJ ",
                        "lastName": "sRI",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Jogesh",
                        "lastName": "Harjai",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "Narayana",
                        "lastName": "CH",
                        "middleName": null,
                        "staffUserCoreTypeName": null,
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 689,
                        "name": "Health Sciences Centre Winnipeg",
                        "__typename": "Businesses"
                    },
                    "caseId": 471,
                    "unreadNotesForUser": 1,
                    "lawFirmStatus": "pending",
                    "status": "Pending",
                    "__typename": "Referrals"
                }, {
                    "referralId": 1046,
                    "referralDate": "2022-02-21",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 91,
                        "firstName": "Devi",
                        "lastName": "Sri",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Sridevi",
                        "lastName": "Rapolu",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "Siganak",
                        "lastName": "minask",
                        "middleName": null,
                        "staffUserCoreTypeName": "Office Admin",
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 713,
                        "name": "RADIO DALAM",
                        "__typename": "Businesses"
                    },
                    "caseId": 505,
                    "unreadNotesForUser": 33,
                    "lawFirmStatus": "pending",
                    "status": "Accepted",
                    "__typename": "Referrals"
                }, {
                    "referralId": 1140,
                    "referralDate": "2022-03-02",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 40,
                        "firstName": "Selena",
                        "lastName": "Gomez",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Jogesh",
                        "lastName": "Harjai",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": null,
                    "fromBusinessDetails": {
                        "businessId": 350,
                        "name": "AEONLAW",
                        "__typename": "Businesses"
                    },
                    "caseId": 451,
                    "unreadNotesForUser": 25,
                    "lawFirmStatus": "pending",
                    "status": "Pending",
                    "__typename": "Referrals"
                }, {
                    "referralId": 1141,
                    "referralDate": "2022-03-02",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 40,
                        "firstName": "Selena",
                        "lastName": "Gomez",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Jogesh",
                        "lastName": "Harjai",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": null,
                    "fromBusinessDetails": {
                        "businessId": 350,
                        "name": "AEONLAW",
                        "__typename": "Businesses"
                    },
                    "caseId": 451,
                    "unreadNotesForUser": 25,
                    "lawFirmStatus": "pending",
                    "status": "Pending",
                    "__typename": "Referrals"
                }, {
                    "referralId": 1185,
                    "referralDate": "2022-03-17",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 171,
                        "firstName": "richard",
                        "lastName": "patient",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Ryan",
                        "lastName": "Farah",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "Sarad",
                        "lastName": "u",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 679,
                        "name": "pernixY",
                        "__typename": "Businesses"
                    },
                    "caseId": 0,
                    "unreadNotesForUser": 1,
                    "lawFirmStatus": null,
                    "status": "Rejected",
                    "__typename": "Referrals"
                }, {
                    "referralId": 1285,
                    "referralDate": "2022-03-28",
                    "totalNotes": 2,
                    "patientInformation": {
                        "patientId": 681,
                        "firstName": "Tia",
                        "lastName": "Tofu",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Jogesh",
                        "lastName": "Harjai",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "devi",
                        "lastName": "sri1",
                        "middleName": null,
                        "staffUserCoreTypeName": null,
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 787,
                        "name": "KMN",
                        "__typename": "Businesses"
                    },
                    "caseId": 580,
                    "unreadNotesForUser": 28,
                    "lawFirmStatus": "pending",
                    "status": "Pending",
                    "__typename": "Referrals"
                }, {
                    "referralId": 1291,
                    "referralDate": "2022-03-28",
                    "totalNotes": 0,
                    "patientInformation": {
                        "patientId": 178,
                        "firstName": "ClientHuman1",
                        "lastName": "m",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Sridevi",
                        "lastName": "Rapolu",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": {
                        "firstName": "Sarad",
                        "lastName": "u",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "fromBusinessDetails": {
                        "businessId": 679,
                        "name": "pernixY",
                        "__typename": "Businesses"
                    },
                    "caseId": 0,
                    "unreadNotesForUser": 2,
                    "lawFirmStatus": null,
                    "status": "Pending",
                    "__typename": "Referrals"
                }, {
                    "referralId": 1314,
                    "referralDate": "2022-03-30",
                    "totalNotes": 0,
                    "patientInformation": {
                        "patientId": 40,
                        "firstName": "Selena",
                        "lastName": "Gomez",
                        "__typename": "Patients"
                    },
                    "businessDetails": {
                        "name": null,
                        "__typename": "Organizations"
                    },
                    "referralTo": {
                        "firstName": "Jogesh",
                        "lastName": "Harjai",
                        "middleName": null,
                        "staffUserCoreTypeName": "Physician",
                        "__typename": "UserBasicInformation"
                    },
                    "referralFrom": null,
                    "fromBusinessDetails": {
                        "businessId": 350,
                        "name": "AEONLAW",
                        "__typename": "Businesses"
                    },
                    "caseId": 451,
                    "unreadNotesForUser": 25,
                    "lawFirmStatus": "pending",
                    "status": "Pending",
                    "__typename": "Referrals"
                }],

            };
        },

        mounted() {
            this.getReferrals()
        },

        computed: {

            filteredList() {
                return this.postList.filter(post => {
                    return post.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }

        },
        methods: {
           async  openNotes() {
                this.$bvModal.show('verifyNotes')	
                 
            },
        
            tabsActivate(value) {
                this.getReferrals()
                this.displayItem = value;
                if (value != 'allReferrals') {
                    this.inboundReferralList = this.inboundReferralList.filter((item) => {
                        return item.status == value
                    })
                } else {
                    this.inboundReferralList = this.inboundReferralList
                }
            },
            
            getReferrals() {
                if (this.findInboundReferralsByBusinessId != null) {
                    this.inboundReferralList = this.findInboundReferralsByBusinessId.filter((item) => {
                        return item.caseId <= 0
                    })
                    console.log(this.inboundReferralList.patientInformation)
                    // this.inboundReferralList = this.inboundReferralList.patientInformation.firstName + ' ' + this.inboundReferralList.patientInformation.lastName;

                    this.inboundReferralList.forEach(function (v) {
                        v.name = v.patientInformation.firstName + ' ' + v.patientInformation.lastName
                        v.avatar = v.patientInformation.firstName.charAt(0) + v.patientInformation.lastName
                            .charAt(0)

                    })
                    this.inboundReferralList.reverse();
                } else {
                    console.log("null value")
                }
            },



        }
    })
</script>