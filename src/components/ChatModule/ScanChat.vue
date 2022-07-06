<template>
  <b-container fluid class="main-container-bg p-4">
    <div class="main-card card overflow-hidden">
      <b-card-header class="title-header bg-white p-0 py-3">
        <b-container fluid>
          <div class="d-flex align-items-center p-2">
            <img :src="chatIcon" alt="" />

            <div class="attorney-title ml-2">Messages</div>
          </div>
        </b-container>
      </b-card-header>
      <b-card-body class="bg-themecolor">
        <b-container fluid>
          <b-row class="pt-5 pb-1">
            <b-col lg="8">
              <div class="logo">
                <img :src="FloatCareLogo" alt="" />
              </div>
              <div class="scanTitle py-5">
                <p class="m-0">To use Float care on your computer</p>
              </div>
              <div class="connectSteps">
                <ol class="list-group list-group-numbered m-0 p-0">
                  <li class="py-2 fs-5 theme-text-color">
                    On your phone, open messages.
                  </li>
                  <li class="py-2 fs-5 theme-text-color">
                    Tab the more options menu and select “Messages for web”
                  </li>
                  <li class="py-2 fs-5 theme-text-color">
                    Scan the code your phone.
                  </li>
                </ol>
                <li class="py-2 fs-5 list-unstyled">
                  <b-link class="text-decoration-none"> Learn More </b-link>
                </li>
              </div>
            </b-col>
            <b-col lg="4" class="text-center p-4 px-3">
              <div
                class="
                  qrCode
                  m-auto
                  main-card
                  py-5
                  theme-color
                  d-flex
                  align-items-justify
                  justify-content-center
                "
              >
                <div class="inside-qr main-card p-5 bg-white">
                  <div v-if="showQrCode">
                    <qrcode-vue :value="value" :size="size"></qrcode-vue>
                  </div>
                  <div v-else>
                      <b-button class="reload-qr px-4 rounded-circle py-5" @click="showQr"> 
                          <div class="mb-3"> <img :src="Reload" alt=""> </div>
                          <p class="fs-6 m-0"> Click here to reload <br> the QR Code</p>
                      </b-button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
          <div class="mt-5 d-flex align-items-center pt-5">
            <b-link class="text-decoration-none theme-text-color">
              Privacy Policy
            </b-link>
            <b-link class="text-decoration-none ml-2 theme-text-color">
              Terms and Condition
            </b-link>
          </div>
        </b-container>
      </b-card-body>
    </div>
  </b-container>
</template>
<script>
import "@/scss/staff.scss";
import "@/scss/attorney.scss";
import chatIcon from "/src/assets/images/Chat2@3x.svg";
import FloatCareLogo from "/src/assets/images/colorfull.svg";
import Reload from "/src/assets/images/Rekoad@3x.svg";
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    chatIcon,
    FloatCareLogo,
    QrcodeVue,
    Reload,
  },
  data() {
    return {
      value: "https://example.com",
      size: 200,
      chatIcon: chatIcon,
      FloatCareLogo: FloatCareLogo,
      Reload: Reload,
      showQrCode:true,
    };
  },
  mounted(){
      this.showQr();
      this.hideQr();
  },
  methods:{
      hideQr(){
          setTimeout(() => {
              this.showQrCode = false;
          }, 10000);
      },
      showQr(){
              this.showQrCode = true;
        this.hideQr();
      }
  }
};
</script>
<style>
.scanTitle p {
  font-size: 45px;
  font-family: Poppins;
  color: #173e67;
  font-weight: 400;
  line-height: 35px;
}
.reload-qr{
    background: #4394AD;
}
</style>