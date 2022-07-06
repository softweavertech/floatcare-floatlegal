<template>
  <div class="w-100 p-4">
    <div class=" accept-evaluation bg-gray border-20">
      <b-container fluid class="bg-gray border-top-left-right">
        <div >
          <b-nav class="bread-crumb-nav pt-3 mr-auto" id="staffSubNav">
            <b-nav-item
              v-for="link in breadCrumb"
              :to="link.url"
              :key="link.value"
              :value="link.name"
              @click="tabsClick(link.value, link.url)"
              :class="font-16"
            >
              {{ link.name }}
            </b-nav-item>
          </b-nav>
        </div>
      </b-container>
      <hr class="p-0 m-0">
       <b-container fluid class="bg-white ">
<b-row>
    <h4 class="my-3">Accept Evalution</h4>
    <b-col cols="4">
        <div class="provider-requested border-10 p-3">
        <div class="">
            <img :src = "ovalimage" />
            <span class="h6 fw-bold">Provider Requested</span>
        </div>
        <b-row>
            <b-col cols="3">
            </b-col>
            <b-col cols="9" class="position-relative">
                <div class="yellow-box border-10 p-2 ">
                    <p class="font-12 p-0 m-0 fw-bold">Original provider</p>
                    <p class="font-14 p-0 m-0 fw-bold">Date:May 12, 2022</p>
                    <div class="d-flex align-items-center mt-2">
                    <img class="evaluation-image" :src = "profileimg" />
                    <span class="font-16 fw-bold ms-2">Dr. Millton Deshai</span>
                    </div>
                     <span class="btn-abslute font-12 ">Chiropractor</span>
                </div>
            </b-col>
        </b-row>
          <b-row class="mt-4">
            <b-col cols="3">
            </b-col>
            <b-col cols="9" class="position-relative">
                <div class="yellow-box border-10 p-2 ">
                    <p class="font-12 p-0 m-0 fw-bold">Original provider</p>
                    <p class="font-14 p-0 m-0 fw-bold">Date:May 12, 2022</p>
                    <div class="d-flex align-items-center mt-2">
                    <img class="evaluation-image" :src = "profileimg" />
                    <span class="font-16 fw-bold ms-2">Dr. Millton Deshai</span>
                    </div>
                     <span class="btn-abslute2 font-12 ">Imaging</span>
                </div>
            </b-col>
        </b-row>
          <b-row class="mt-4">
            <b-col cols="3">
            </b-col>
            <b-col cols="9" class="position-relative">
                <div class="yellow-box border-10 p-2 ">
                    <p class="font-12 p-0 m-0 fw-bold">Original provider</p>
                    <p class="font-14 p-0 m-0 fw-bold">Date:May 12, 2022</p>
                    <div class="d-flex align-items-center mt-2">
                    <img class="evaluation-image" :src = "profileimg" />
                    <span class="font-16 fw-bold ms-2">Dr. Millton Deshai</span>
                    </div>
                     <span class="btn-abslute3 font-12 ">Alternate Provider</span>
                </div>
            </b-col>
        </b-row>
      </div>
    </b-col>
    <b-col cols="8">
        <div class="provider-requested border-10 p-3">
        <div class="provider-requested border-10 p-3">
         <div class="">
            <img :src = "ovalimage" />
            <span class="h6 fw-bold">Provider Requested</span>
        </div>
        <div class="my-2">
            <h4 class="font-16">Preferred Surgery Center</h4>
        </div>

        </div>
        </div>
        
    </b-col>
</b-row>

       </b-container>
    </div>
  </div>
</template>

<script>
import addIcon from "@/assets/images/Icons/ic_add_circle.svg";
import ovalimage from "@/assets/images/oval2.png";
import profileimg from "@/assets/images/Avatars/Profile.png";
export default {
  name: "BreadCrumbNavStaff",
  props: ["createButton", "createButtonAction", "addUser", "addUserAction"],
  data() {
    return {
      displayItem: "staff",
      addIcon: addIcon,
      ovalimage:ovalimage,
      profileimg:profileimg,
      breadCrumb: [
        {
          url: "/staff",
          name: "Treatment Plan 1",
          value: "treatmentplan1",
        },
        {
          url: "/user-permissions",
          name: "Treatment Plan 2",
          value: "treatmentplan2",
        },
         {
          url: "/user-permissions",
          name: "Treatment Plan 3",
          value: "treatmentplan3",
        },
      ],
    };
  },

  mounted() {
    this.displayItem = this.$route.name;
    console.log(this.displayItem);
  },
  methods: {
    tabsClick(value, link) {
      this.displayItem = value;
      this.$router.push(link);
    },
  },
};
</script>
<style scoped lang="scss">
.accept-evaluation {
    border: 1px solid #FFFFFF;
}
.border-top-left-right {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.evaluation-image {
    width: 37px;
    height: 37px;
    border-radius: 10px;
  }
  .yellow-box {
    border: 1px solid yellow;
}
.provider-requested {
    border: 1px solid beige;
}
.btn-abslute[data-v-78837ece] {
    background: #b1b1b1;
    padding: 2px 8px;
    color: white;
    border-radius: 20px;
    position: absolute;
    top: -10px;
    right: 30px;
}
.btn-abslute2{
    background: #1F3D5A;
    padding: 2px 8px;
    color: white;
    border-radius: 20px;
    position: absolute;
    top: -10px;
    right: 30px;
}
.btn-abslute3 {
    background: #6CCCA5;
    padding: 2px 8px;
    color: white;
    border-radius: 20px;
    position: absolute;
    top: -10px;
    right: 30px;
}
</style>
