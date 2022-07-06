<style lang="scss" >
.d-down-menu {
  margin-left: auto;
  box-shadow: -1px 0px 7px 4px #0000000a;
  margin-top: 21px;
  position: absolute;
    right: 19px;
    background: white;
    z-index: 6;
}
.cutom-dropdown-item.active,
.cutom-dropdown-item:active {
  color: #000;
  text-decoration: none;
  background-color: #ffffff;
}
.p-image {
  outline: 7px solid #fff;
  box-shadow: 0px 1px 14px 10px #00000045;
}
.unarch-drop {
  margin: 0px;
}
.unarch-drop1 {
  margin: 0px;
}
ul.dropdown-menu.custom-dropdown.show {
  position: absolute !important;
  min-width: 6rem;
  padding: 0px 0;
  color: #212529;
  background-color: #fff;

  border-radius: 10px !important;
  overflow: hidden;
  box-shadow: 1px -2px 7px 1px #00000030;
}
.custom-dropdown {
  position: absolute;
  min-width: 6rem;
  padding: 0px 0;
  color: #212529;
  background-color: #fff;
}
.profile-image-dropdown-button {
  position: absolute;
  bottom: -20px;
  right: 42%;
}
.web-camera-container {
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 294px;

  .camera-button {
    margin-bottom: 2rem;
    
  }

  .camera-box {
    .camera-shutter {
      opacity: 0;
      width: 294px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;

      &.flash {
        opacity: 1;
      }
    }
  }

  .camera-shoot {
    margin: 1rem 0;
    z-index: 1;

    button {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      box-shadow: -1px 0px 7px 4px rgb(0 0 0 / 10%);

      img {
        height: 20px;
        object-fit: cover;
      }
    }
  }

  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;

    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }

    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;

      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }
.close-camera {
    position: absolute;
    top: 11px;
    right: 12px;
    z-index: 7;
}
  @keyframes preload {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
}
.uploadPhoto {
  position: absolute;
  opacity: 0;
  overflow: hidden;
  width: 100%;
  left: 0;
  z-index: 4;
  cursor: ew-resize;
}
.camera-download {
  z-index: 5;
}
</style>
<template>
  <!-- Active Profile Section  -->

  <div v-if="rightHeaderTitle == 'Profile'">
    <b-card-header
      class="
        profile-head
        title-header
        bg-white
        p-0
        py-4
        mb-3
        border-0
        px-3
        d-flex
        align-items-center
      "
    >
      <b-container fluid>
        <b-row class="">
          <b-col>
            <div class="d-flex align-items-center">
              <div class="fw-bolder fs-6 ml-2 theme-text-color">
                {{ rightHeaderTitle }}
              </div>
            </div>
          </b-col>
          <b-col class="d-flex align-items-center justify-content-end">
            <b-button class="bg-transparent p-0 border-0">
              <img
                @click="closeSideBar(false, 'ProfileExpand')"
                :src="closeIconSmall"
                alt=""
                class="closeIcon"
              />
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-card-header>
    <b-card-body class="mt-0 p-0 chat-member-div overflow-hidden px-2">
      <div v-if="editProfile[0].memberType == 'personal'" class="text-center mb-3 border-bottom">
        <div class="profile-update py-3 pb-0 text-center mb-3 mt-3" >
          <div class="user-image m-auto">
            <div class="avatar-image pos-r">
              <b-avatar
                size="8rem"
                :src="previewImage"
                class="p-image"
              ></b-avatar>
              <b-button
                @click="picDropDown = !picDropDown"
                class="
                  rounded-circle
                  profile-image-dropdown-button
                  bg-white
                  border-0
                "
              >
                <img :src="cameraIcon" alt="" />
              </b-button>
            </div>

            <div
              class="d-down-menu w-50 text-center b-radius"
              v-if="picDropDown == true"
            >
              <ul class="camera-button list-unstyled mb-0">
                <li
                  class="
                    border-0
                    bg-white
                    text-dark text-left
                    theme-text-color
                    cursor-pointer
                    p-1
                    px-2
                  "
                  :class="{
                    'is-primary': !isCameraOpen,
                    'is-danger': isCameraOpen,
                  }"
                  @click="toggleCamera"
                >
                  <span v-if="!isCameraOpen"> Take Pohto </span>
                  <span v-else>Close Camera</span>
                </li>
               
                <li
                  class="
                    text-left
                    theme-text-color
                    cursor-pointer
                    p-1
                    px-2
                    pos-r
                  "
                >
                  Upload Pohto
                  <input
                    type="file"
                    class="uploadPhoto"
                    accept="image/jpeg"
                    @change="uploadImage"
                  />
                </li>
                <li class="text-left theme-text-color cursor-pointer p-1 px-2">
                  Remove Pohto
                </li>
              </ul>
            </div>
            <div
              class="web-camera-container pos-r"
              v-if="isCameraOpen"
              v-show="!isLoading"
            >
            <b-button @click="toggleCamera" class="bg-transparent border-0 close-camera rounded-circle p-0">
              <img :src="closeIconSmall" alt="">
            </b-button>
              <div
                v-show="isCameraOpen && isLoading"
                class="camera-loading"
              ></div>

              <div
                v-if="isCameraOpen"
                v-show="!isLoading"
                class="camera-box"
                :class="{ flash: isShotPhoto }"
              >
                <div
                  class="camera-shutter"
                  :class="{ flash: isShotPhoto }"
                ></div>

                <video
                  v-show="!isPhotoTaken"
                  ref="camera"
                  :width="284"
                  :height="207"
                  autoplay
                ></video>
                <canvas
                  v-show="isPhotoTaken"
                  id="photoTaken"
                  ref="canvas"
                  :width="284"
                  :height="207"
                ></canvas>
              </div>

              <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                <button
                  type="button"
                  class="bg-white rounded-circle border-0 cursor-pointer"
                  @click="takePhoto"
                >
                  <img :src="cameraIcon" />
                </button>
              </div>

              <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                <a
                  id="downloadPhoto"
                  download="/my-photo.jpg"
                  class="button"
                  role="button"
                  @click="downloadImage"
                >
                  Use Photo
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 class="title mt-5 mb-3"> {{editProfile[0].name}} </h2>
      </div>
      <b-modal v-model="cameraModal"></b-modal>
      <div class="fileType" v-if="rightHeaderTitle == 'Profile' && !isCameraOpen">
        <div class="fw-bolder fs-6 ml-2 theme-text-color">File Type</div>
        <b-list-group class="mt-3">
          <b-list-group-item
            class="border-0 d-flex align-items-center p-2"
            @click="rightHeaderTitle = 'Documents'"
          >
            <img :src="DocumentIcon" alt="" />
            <p class="fw-bolder fs-6 theme-text-color ml-2 mb-0 fileTypeTitle">
              Documents <br />
              <small> 50 Files</small>
            </p>
            <div class="goIcon justify-content-end">
              <p class="fs-4 theme-text-color mb-0">></p>
            </div>
          </b-list-group-item>
          <b-list-group-item
            class="border-0 d-flex align-items-center p-2"
            @click="rightHeaderTitle = 'Photos'"
          >
            <img :src="PhotoIcon" alt="" />
            <p class="fw-bolder fs-6 theme-text-color ml-2 mb-0 fileTypeTitle">
              Photos <br />
              <small> 50 Files</small>
            </p>
            <div class="goIcon justify-content-end">
              <p class="fs-4 theme-text-color mb-0">></p>
            </div>
          </b-list-group-item>
          <b-list-group-item
            @click="closeSideBar(false, strmsgs)"
            class="border-0 d-flex align-items-center p-2"
          >
            <img :src="StarIcon" alt="" />
            <p class="fw-bolder fs-6 theme-text-color ml-2 mb-0 fileTypeTitle">
              Star Messages <br />
              <small> 50 Files</small>
            </p>
            <div class="goIcon justify-content-end">
              <p class="fs-4 theme-text-color mb-0">></p>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div class="group-members-section">
        <div
          class="fw-bolder border-top fs-6 ml-2 theme-text-color mt-2 pt-4 mb-4"
        >
          Members
        </div>
        <group-members></group-members>
      </div>
    </b-card-body>
  </div>

  <!-- Active Profile Photos  -->

  <div v-else-if="rightHeaderTitle == 'Photos'">
    <b-card-header
      class="
        profile-head
        title-header
        bg-white
        p-0
        py-4
        mb-3
        border-0
        px-3
        d-flex
        align-items-center
      "
    >
      <b-container fluid>
        <b-row class="">
          <b-col>
            <div class="d-flex align-items-center">
              <div class="fw-bolder fs-6 ml-2 theme-text-color">
                {{ rightHeaderTitle }}
              </div>
            </div>
          </b-col>

          <b-col class="d-flex align-items-center justify-content-end">
            <b-button class="bg-transparent p-0 border-0">
              <img
                @click="rightHeaderTitle = 'Profile'"
                :src="closeIconSmall"
                alt=""
                class="closeIcon"
              />
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-card-header>
    <b-card-body class="mt-0 p-0 chat-member-div overflow-hidden px-3">
      <b-list-group class="mt-3">
        <b-list-group-item
          class="border d-flex align-items-center p-2 mb-3 rounded-3"
          v-for="items in loopData"
          :key="items"
        >
          <img :src="PicIcon" alt="" />
          <p class="fw-bolder fs-6 theme-text-color ml-2 mb-0 fileTypeTitle">
            X-Ray <br />
            <small> JPG - 1.2MB</small>
          </p>
          <div class="goIcon justify-content-end">
            <!-- <p class="fs-4 theme-text-color mb-0"> -->
            <div class="dropdown fs-4 theme-text-color mb-0">
              <button
                class="btn btn-menu p-0 border-0 bg-themecolor pull-right"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="downloadIcon" />
              </button>
              <div class="clearfix"></div>
              <ul
                class="dropdown-menu custom-dropdown"
                aria-labelledby="custom-dropdown"
              >
                <li class="unarch-drop1">
                  <a class="dropdown-item cutom-dropdown-item active" href="#"
                    >Download</a
                  >
                </li>
              </ul>
            </div>

            <!-- </p> -->
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </div>

  <!-- Active Profile Documents  -->

  <div v-else-if="rightHeaderTitle == 'Documents'">
    <b-card-header
      class="
        profile-head
        title-header
        bg-white
        p-0
        py-4
        mb-3
        border-0
        px-3
        d-flex
        align-items-center
      "
    >
      <b-container fluid>
        <b-row class="">
          <b-col>
            <div class="d-flex align-items-center">
              <div class="fw-bolder fs-6 ml-2 theme-text-color">
                {{ rightHeaderTitle }}
              </div>
            </div>
          </b-col>

          <b-col class="d-flex align-items-center justify-content-end">
            <b-button class="bg-transparent p-0 border-0">
              <img
                @click="rightHeaderTitle = 'Profile'"
                :src="closeIconSmall"
                alt=""
                class="closeIcon"
              />
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-card-header>
    <b-card-body class="mt-0 p-0 chat-member-div overflow-hidden px-3">
      <b-list-group class="mt-3">
        <b-list-group-item
          class="border d-flex align-items-center p-2 mb-3 rounded-3"
          v-for="items in loopData"
          :key="items"
        >
          <img :src="PicIcon" alt="" />
          <p class="fw-bolder fs-6 theme-text-color ml-2 mb-0 fileTypeTitle">
            Documentations <br />
            <small> Doc - 1.2MB</small>
          </p>
          <div class="goIcon justify-content-end">
            <!-- <p class="fs-4 theme-text-color mb-0"> -->
            <div class="dropdown fs-4 theme-text-color mb-0">
              <button
                class="btn btn-menu p-0 border-0 bg-themecolor pull-right"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="downloadIcon" />
              </button>
              <div class="clearfix"></div>
              <ul
                class="dropdown-menu custom-dropdown"
                aria-labelledby="custom-dropdown"
              >
                <li class="unarch-drop1">
                  <a class="dropdown-item cutom-dropdown-item active" href="#"
                    >Download</a
                  >
                </li>
              </ul>
            </div>

            <!-- </p> -->
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </div>
</template>
<script>
import PicIcon from "@/assets/images/Photo@3x.svg";
import cameraIcon from "@/assets/images/Camera@3x.svg";
import downloadIcon from "@/assets/images/menu@3x.svg";
import GroupMembers from "./GroupMembers.vue";
import axios from "axios";
export default {
  components: {
    GroupMembers,
    downloadIcon,
    cameraIcon,
  },
  props: [
    "closeIconSmall",
    "DocumentIcon",
    "PhotoIcon",
    "StarIcon",
    "rightHeaderTitle",
    "closeSideBar",
    "editProfile",
  ],
  data() {
    return {
      previewImage: this.editProfile[0].profileImage,
      picDropDown: false,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: "#",
      cameraIcon: cameraIcon,
      PicIcon: PicIcon,
      downloadIcon: downloadIcon,
      loopData: ["1", "2", "3"],
      strmsgs: "strmsgs",
    };
  },

  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
      this.picDropDown = false;
    },

    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
      this.picDropDown=false;
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext("2d");
      context.drawImage(this.$refs.camera, 0, 0, 284, 207);
    },

    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document
        .getElementById("photoTaken")
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      this.previewImage = canvas;
      this.isCameraOpen = false;
      this.picDropDown = false;
      this.stopCameraStream();
      // download.setAttribute("href", canvas);
    },
  },
};
</script>
