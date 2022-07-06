<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white nav-custom">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
            <img src="@/assets/images/colorfull.svg" height="40" class="d-inline-block align-text-top" alt="Float Care 2.0"/>
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                    <b-breadcrumb :items="items"></b-breadcrumb>
                </li>
            </ul>
            <div class="d-flex">
                <a href="/messenger/chat">
                <li class="navbar-nav me-auto mb-2 mb-lg-0">
                    <img class="nav-icons" src="@/assets/images/Avatars/Group_2.svg" alt="search icon">
                </li>
                </a>
                <a href="">
                <li class="navbar-nav me-auto mb-2 mb-lg-0 nav-divider">
                    <a href="#">
                    <img class="nav-icons" src="@/assets/images/Avatars/Group_3.svg" alt="search icon">
                    </a>
                </li>
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown"> 
                        <div class="profile-nav m-0 p-1 text-center">
                            <strong class="name-profile">Location Name</strong><br>
                            <span class="dept-profile text-muted" >Department Name</span>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@/assets/images/Rectangle-1.png" height="10px"
                             class="d-inline-block align-text-top profile-img" alt="Float Legal 2.0"/>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>        
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Dashbaord',
            href: '#'
       },
        //   {
        //     text: 'All Business Location',
        //     active: true
        //   }
        ]
      }
    }
  }
</script>
<style>
.profile-img{
    width: 50px;
    height: 50px;
}
.dropdown-menu {
    top: 100%;
    right: 0 !important;
}
a.navbar-brand img {
    height: 40px;
}
a.nav-link.py-3 > img {
    margin: auto;
    margin-bottom: 0px;
    margin-top: 2px;
}
</style>