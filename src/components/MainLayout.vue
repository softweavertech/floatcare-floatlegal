
<template>
  <div id="app" class="top_container">
    <Navbar></Navbar>
    <main>
        <Sidebar></Sidebar>
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Shared/Navbar.vue'
import Sidebar from '@/components/Shared/Sidebar.vue'


export default {
  components: {
    'Sidebar': Sidebar,
    'Navbar': Navbar
  }
}
</script>
