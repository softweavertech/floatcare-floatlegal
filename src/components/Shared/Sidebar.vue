
<template>
  <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li>
        <a
          href="/dashboard"
          class="nav-link py-3"
          title=""
          data-bs-toggle="Dashboard"
          data-bs-placement="right"
          data-bs-original-title="Dashboard"
        >
          <img :src="dashboardIcon" />
        </a>
      </li>
      <li class="nav-item">
        <a
          href="/firm-info"
          class="nav-link py-3"
          aria-current="page"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Home"
        >
          <img :src="lawFirmIcon" />
        </a>
      </li>
      <li>
        <a
          href="/client-cases"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Dashboard"
        >
          <img :src="casesIcon" />
        </a>
      </li>
      <li>
        <a
          href="/clients"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Orders"
        >
          <img :src="clientsIcon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Products"
        >
          <img :src="providersIcon" >
        </a>
      </li>
      <li>
        <a
          href="#"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Customers"
        >
          <img :src="archivesIcon" alt="">
        </a>
      </li>
      <li>
        <a
          href=""
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Customers"
        >
          <img :src="scheduleIcon" alt="">
        </a>
      </li>
      <li>
        <a
          href="/document-center/intake-form"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Customers"
        >
       <img :src="documentIcon" alt="">
        </a>
      </li>
    
    </ul>
  </div>
</template>
<script>
import dashboardIcon from "/src/assets/images/FL_Sidebar/Dashboard@3x.svg";
import activeDashboardIcon from "/src/assets/images/FL_Sidebar/Dashboard Select@3x.svg";
import lawFirmIcon from "/src/assets/images/FL_Sidebar/Law firm@3x.svg";
import activeLawFirmIcon from "/src/assets/images/FL_Sidebar/Law firm Select@3x.svg";
import casesIcon from "/src/assets/images/FL_Sidebar/Cases@3x.svg";
import activeCasesIcon from "/src/assets/images/FL_Sidebar/Cases Select@3x.svg";
import clientsIcon from "/src/assets/images/FL_Sidebar/Clients@3x.svg";
import activeClientsIcon from "/src/assets/images/FL_Sidebar/Clients Select@3x.svg";
import providersIcon from "/src/assets/images/FL_Sidebar/Providers@3x.svg";
import activeProvidersIcon from "/src/assets/images/FL_Sidebar/Providers Select@3x.svg";
import archivesIcon from "/src/assets/images/FL_Sidebar/Archives Users@3x.svg";
import activeArchivesIcon from "/src/assets/images/FL_Sidebar/Archives Users Select@3x.svg";
import scheduleIcon from "/src/assets/images/FL_Sidebar/Client Schedule@3x.svg";
import activeScheduleIcon from "/src/assets/images/FL_Sidebar/Client Schedule Select@3x.svg";
import documentIcon from "/src/assets/images/FL_Sidebar/Document Center@3x.svg";
import activeDocumentIcon from "/src/assets/images/FL_Sidebar/Document Center Select@3x.svg";
export default {
  components: {
    dashboardIcon,
    activeDashboardIcon,
    lawFirmIcon,
    activeLawFirmIcon,
    casesIcon,
    activeCasesIcon,
    clientsIcon,
    activeClientsIcon,
    providersIcon,
    activeProvidersIcon,
    archivesIcon,
    activeArchivesIcon,
    scheduleIcon,
    activeScheduleIcon,
    documentIcon,
activeDocumentIcon
  },
  data() {
    return {
      dashboardIcon: dashboardIcon,
      activeDashboardIcon: activeDashboardIcon,
      lawFirmIcon: lawFirmIcon,
      activeLawFirmIcon: activeLawFirmIcon,
      casesIcon: casesIcon,
      activeCasesIcon: activeCasesIcon,
      clientsIcon: clientsIcon,
      activeClientsIcon: activeClientsIcon,
      providersIcon: providersIcon,
      activeProvidersIcon: activeProvidersIcon,
      archivesIcon: archivesIcon,
      activeArchivesIcon: activeArchivesIcon,
      scheduleIcon: scheduleIcon,
      documentIcon: documentIcon,
      activeDocumentIcon: activeDocumentIcon,
    };
  },
  mounted() {
    this.dashboardIcon =
      this.$route.fullPath.includes("/dashboard") === true
        ? this.activeDashboardIcon
        : this.dashboardIcon;
    this.lawFirmIcon =
      this.$route.fullPath.includes("/firm-info") === true
        ? this.activeLawFirmIcon
        : this.lawFirmIcon;
    this.casesIcon =
      this.$route.fullPath.includes("/client-cases") === true
        ? this.activeCasesIcon
        : this.casesIcon;
    this.clientsIcon =
      this.$route.fullPath.includes("/clients") === true
        ? this.activeClientsIcon
        : this.clientsIcon;
    this.providersIcon =
      this.$route.fullPath.includes("/provider") === true
        ? this.activeProvidersIcon
        : this.providersIcon;
    this.archivesIcon =
      this.$route.fullPath.includes("/archive") === true
        ? this.activeArchivesIcon
        : this.archivesIcon;
    this.scheduleIcon =
      this.$route.fullPath.includes("/schedule") === true
        ? this.activeScheduleIcon
        : this.scheduleIcon;
    this.documentIcon =
      this.$route.fullPath.includes("/document") === true
        ? this.activeDocumentIcon
        : this.documentIcon;

  },
};
</script>
