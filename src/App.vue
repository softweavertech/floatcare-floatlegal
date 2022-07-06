<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style lang="scss">
@import "@/scss/custom.scss";
@import "@/scss/global.scss";
@import "@/scss/referrals.scss";
@import "@/scss/staff.scss";
// @import "@/scss/attorney.scss";
@import "@/scss/variables.scss";
@import "@/scss/patientCareCenter.scss";
@import "@/scss/link-business-referrals.scss";
</style>

<template>
  <header>
    <div class="wrapper">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <RouterView />
  </template>