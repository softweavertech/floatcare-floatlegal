<template>
    <div class="container-fluid staff-main-container-bg p-2 p-lg-4 p-md-4">
        <bread-crumb-nav :addBtn="addBtn" :title="title"/>
        <div class="p-4 patient-list-top">
            <b-tabs pills card class="bgx-nav-pill-tab">
                <b-tab title="All Cases" active>
                    <table-lite
                        :is-loading="isLoading"
                        :columns="columns"
                        :rows="rows"
                        :total="totalRecordCount"
                        :sortable="sortable"
                        :is-hide-paging="Required"
                        />
                </b-tab>
                <b-tab title="Action Needed">
                  <table-lite
                        :is-loading="isLoading"
                        :columns="columns"
                        :rows="rows"
                        :total="totalRecordCount"
                        :sortable="sortable"
                        :is-hide-paging="Required"
                        />
                </b-tab>
                <b-tab title="In-Treatment">
                  <table-lite
                    :is-loading="isLoading"
                    :columns="columns"
                    :rows="rows"
                    :total="totalRecordCount"
                    :sortable="sortable"
                    :is-hide-paging="Required"
                    />
                </b-tab>
                <b-tab title="Pending Evaluation">
                  <table-lite
                    :is-loading="isLoading"
                    :columns="columns"
                    :rows="rows"
                    :total="totalRecordCount"
                    :sortable="sortable"
                    :is-hide-paging="Required"
                    />
                </b-tab>
                <b-tab title="Completed">
                     <table-lite
                    :is-loading="isLoading"
                    :columns="columns"
                    :rows="rows"
                    :total="totalRecordCount"
                    :sortable="sortable"
                    :is-hide-paging="Required"
                    />
                </b-tab>
                <b-tab title="Closed Cases">
                    <table-lite
                    :is-loading="isLoading"
                    :columns="columns"
                    :rows="rows"
                    :total="totalRecordCount"
                    :sortable="sortable"
                    :is-hide-paging="Required"
                    />
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>
<script>
import TableLite from "vue3-table-lite";
import "vue3-table-lite/ts";
import BreadCrumbNav from '@/components/ClientCases/Shared/BreadCrumbNav.vue';
export default {

components:{
    "bread-crumb-nav": BreadCrumbNav,
    TableLite
},
data(){
    return{
         title:"Case Info",
         addBtn:"Create Case",
         isLoading:false,
         Required:"No",
         columns: [
    {
      label: "Client Name",
      field: "clientNAme",
      sortable: true,
    },
    {
      label: "Attorney Assigned",
      field: "attorneyAssigned",
       sortable: true,
    },
    {
      label: "Paralegal Assigned",
      field: "paralegalAssigned",
      sortable: true,
    },
    {
      label: "Case Manager Assigned",
      field: "caseManagerAssigned",
      sortable: true,
    },
    {
      label: "Care Plans",
      field: "carePlans",
      sortable: true,
    },
    {
      label: "Status",
      field: "status",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width:"5%",
      sortable: true,
    },
  ],
  rows: [{
        clientNAme: '-',
        attorneyAssigned: 'jack',
        paralegalAssigned: 'example@example.com',
        caseManagerAssigned:'-',
        carePlans:'-',
        status:'-',
        action:'-'
      },{
        clientNAme: '-',
        attorneyAssigned: 'jack',
        paralegalAssigned: 'example@example.com',
        caseManagerAssigned:'-',
        carePlans:'-',
        status:'-',
        action:'-'
      }],
  totalRecordCount: 2,
  sortable: {
    order: "id",
    sort: "asc",
  },
    }

}
}
</script>
<style>
.nav-item {
  list-style-type: none;
  text-decoration: none !important;
}
.bgx-nav-pill-tab .nav-link {
  font-size: 15px;
  font-weight: 600;
  color: #173e67 !important;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #173e67 !important;
  background-color: #f5f8fa;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .nav-link:hover {
 font-size: 15px;
 border-radius: 4px;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    /* color: #1F3D5A !important; */
    background-color: #dddddd;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    background-color: #fafafc;
    border-color: #fafafc;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
.nav-tabs {
    border-bottom: none;
}
.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    background-color: #fafafc;
    border-color: #fafafc;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
.vtl-table thead th[data-v-14f67392] {
    vertical-align: bottom;
    color: #454d55;
    background-color: #EFF3F6;
    border-color: #dee2e6;
    border-bottom: 2px solid #dee2e6;
    border: none;
    text-align: center;
}
.vtl-table td[data-v-14f67392], .vtl-table th[data-v-14f67392] {
    padding: 0.75rem;
    border: none;
    vertical-align: top;
    /* border-top: 1px solid #dee2e6; */
    vertical-align: middle;
    text-align:center;
}
.nav-link {
    font-size: 15px;
    font-weight: 600;
    color: #173e67 !important;
}

</style>