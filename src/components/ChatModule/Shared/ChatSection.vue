<template>
  <div class="ss bg-white">
    <b-card-header
      class="
        chat-head
        title-header
        bg-white
        p-0
        py-2
        border-0
        d-flex
        align-items-center
      "
    >
      <b-container fluid>
        <b-row class="px-2 d-flex align-items-center">
          <b-col cols="11">
            <div class="d-flex align-items-center p-2">
              <b-avatar badge :src="profileImage"></b-avatar>
              <div class="theme-text-color ml-2">{{ chatAarry.name }}</div>
            </div>
          </b-col>
          <b-col cols="1" class="d-flex align-itmes-center">
            <div
              class="
                dropdown
                fs-4
                theme-text-color
                mb-0
                text-right
                align-itmes-center
              "
            >
              <button
                class="btn btn-menu p-0 border-0 bg-themecolor pull-right"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="downloadIcon" />
              </button>

              <ul
                class="dropdown-menu custom-dropdown"
                aria-labelledby="custom-dropdown"
              >
                <li class="unarch-drop1 s">
                  <button
                    class="dropdown-item cutom-dropdown-item"
                    @click="closeSideBar(true, 'Profile')"
                  >
                    View Profile
                  </button>
                </li>
                <li
                  class="unarch-drop1"
                  v-if="archiveChats.includes(chatAarry)"
                >
                  <button
                    class="dropdown-item cutom-dropdown-item"
                    href="#"
                    @click="unarchiveChatMember(chatAarry)"
                  >
                    Unrchive Chat
                  </button>
                </li>
                <li class="unarch-drop1" v-else>
                  <button
                    class="dropdown-item cutom-dropdown-item"
                    href="#"
                    @click="makeChatArchive(chatAarry)"
                  >
                    Archive Chat
                  </button>
                </li>
                <li class="unarch-drop1">
                  <button
                    class="dropdown-item cutom-dropdown-item"
                    href="#"
                    @click="chatDeleteModal = true"
                  >
                    Delete Chat
                  </button>
                </li>
                <li class="unarch-drop1">
                  <button class="dropdown-item cutom-dropdown-item" href="#">
                    Clear Chat
                  </button>
                </li>
                <li class="unarch-drop1">
                  <button
                    class="dropdown-item cutom-dropdown-item"
                    href="#"
                    @click="showCreateGroup"
                  >
                    Add Member
                  </button>
                </li>
                <li class="unarch-drop1">
                  <a class="dropdown-item cutom-dropdown-item" href="#"
                    >Search Chat</a
                  >
                </li>
                <li class="unarch-drop1">
                  <button
                    class="dropdown-item cutom-dropdown-item"
                    href="#"
                    @click="closeSideBar(true, 'Profile', chatAarry)"
                  >
                    Edit Profile
                  </button>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-card-header>
    <b-card-body class="overflow-auto chat-section-height">
      <div class="chat-area">
        <div
          class="encrypted-msg b-radius py-3 px-3 mb-5"
          v-if="archiveChats.length > 0 && archiveChats.includes(chatAarry)"
        >
          <p class="p-0 m-0 fs-6">
            <i class="fa fa-lock" aria-hidden="true"></i> Message and calls are
            end-to-end encrypted. No one outside of this chat, not even Float
            Care, can read to them.
          </p>
        </div>
        <div v-for="chat in chatAarry.chatAarry" :key="chat">
          <div v-if="chat.role == 'receiver'" class="">
            <div class="d-flex align-items-center w-100">
              <div class="pro-pic w-10">
                <b-avatar :src="receiverPic" size="40"></b-avatar>
              </div>
              <div class="chat-div w-90">
                <p class="text-left mb-3">
                  <span
                    class="px-3 py-4 d-inline-block b-radius"
                    :class="chat.role"
                  >
                    {{ chat.msg }}</span
                  >
                  <br />
                  <span class="send-time"> {{ chat.time }}</span>
                </p>
              </div>
            </div>
          </div>
          <div v-if="chat.role == 'sender'" class="">
            <div class="d-flex align-items-center w-100 pos-r">
              <div class="chat-div w-90">
                <p class="text-right mb-3">
                  <span
                    class="
                      px-3
                      py-4
                      d-inline-block
                      text-theme-color
                      b-radius
                      text-left
                    "
                    :class="chat.role"
                  >
                    {{ chat.msg }}</span
                  ><br />
                  <span class="send-time"> {{ chat.time }}</span>
                </p>
              </div>
              <div class="pro-pic w-10 text-right">
                <b-avatar
                  :src="receiverPic"
                  size="40"
                  class="user-avatar"
                ></b-avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-card-body>
    <b-card-footer class="border-0 p-0 bg-transparent">
        
      <div class="px-3 msg-sending-area">
        <b-row class="bg-white shadow-sm b-radius">
        
          <b-col lg="9">
            <DiscordPicker
            input
            :value="value"
            gif-format="md"
            @update:value="value = $event"
            :emoji="String" 
            class="border-0 border-end text-left w-100"
          >
          </DiscordPicker>

            
          </b-col>
          <b-col lg="3" class="align-items-center d-flex">
            <ul class="list-unstyled m-0 chat-options">
              <li class="text-center d-inline">
                <b-button class="bg-white p-0 border-0"
                  ><img :src="Rrecord" alt=""
                /></b-button>
              </li>
              <li class="text-center d-inline">
                
                <b-button class="bg-white p-0 border-0"
                  ><img :src="emoji" alt=""
                /></b-button>
              </li>
              <li class="text-center d-inline">
                <b-button
                  class="bg-white p-0 border-0"
                  @click="uploadDocument = true"
                  ><img :src="attachment" alt=""
                /></b-button>
              </li>
              <li class="text-center d-inline">
                <b-button
                  variant="primary"
                  class="btn-primary px-3 py-2 border-0 b-radius"
                  >Send</b-button
                >
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
      <!-- <div class="typing-area bg-white style-type-area px-3 py-2 ">
        <div class="type-text w-70">
          
        </div>
        <div class="other-elements d-flex w-30">
         
        </div>
      </div> -->
    </b-card-footer>
  </div>
  <b-modal
    v-model="chatDeleteModal"
    centered
    size="md"
    hide-header
    hide-footer
    body-class="p-0"
  >
    <chat-delete-modal :closeDeleteModal="closeDeleteModal"></chat-delete-modal>
  </b-modal>
  <b-modal
    v-model="uploadDocument"
    centered
    size="lg  "
    hide-header
    hide-footer
    body-class="p-0"
  >
    <upload-document :closeUploadModal="closeUploadModal"></upload-document>
  </b-modal>
</template>
<script>
import downloadIcon from "@/assets/images/menu@3x.svg";
import senderPic from "@/assets/images/Avatars/ProfilePicture.png";
import receiverPic from "@/assets/images/Avatars/Profile.png";
import attachment from "@/assets/images/Attachment@3x.svg";
import emoji from "@/assets/images/Emoji@3x.svg";
import Rrecord from "@/assets/images/Record@3x.svg";
import chatDeleteModal from "@/components/ChatModule/Shared/Modals/DeleteChatModal.vue";
import uploadDocument from "@/components/ChatModule/Shared/Modals/UploadDocument.vue";
import DiscordPicker from "vue3-discordpicker";

export default {
  name: "ChatSection.vue",
  props: [
    "closeSideBar",
    "chatAarry",
    "makeChatArchive",
    "archiveChats",
    "unarchiveChatMember",
    "showCreateGroup",
  ],
  components: {
    downloadIcon,
    senderPic,
    receiverPic,
    attachment,
    chatDeleteModal,
    emoji,
    uploadDocument,
    Rrecord,
    DiscordPicker,
  },
  data() {
    return {
      value: "",
      uploadDocument: false,
      chatDeleteModal: false,
      attachment: attachment,
      emoji: emoji,
      Rrecord: Rrecord,
      senderPic: senderPic,
      receiverPic: receiverPic,
      downloadIcon: downloadIcon,
    };
  },
  mounted() {},
  methods: {
    closeDeleteModal() {
      this.chatDeleteModal = false;
    },
    closeUploadModal() {
      this.uploadDocument = false;
    },
  },
};
</script>
<style>
.msg-sending-area {
  width: 97%;
  margin: 0 auto;
  padding: 18px 20px;
}
ul.list-unstyled.chat-options > li:first-child {
  padding-left: 0;
}
span.send-time {
  font-size: 12px;
}
.chat-section-height {
  max-height: 650px;
}
span.sender {
  background-color: #5563ab;
  color: #fff;
  width: 70%;
  position: relative;
}
span.receiver {
  background-color: #5563ab24;
  color: #173e67;
  width: 70%;
  position: relative;
}

span.sender:after {
  content: " ";
  position: absolute;
  left: 95%;
  bottom: 0;
  border-style: solid;
  border-width: 0px 17px 17px 17px;
  border-color: transparent transparent #5563ab #5563ab;
  overflow: hidden;
}
ul.list-unstyled.chat-options > li {
  padding: 0px 9px;
}
.w-20 {
  width: 20%;
}
.w-30 {
  width: 20%;
}
.w-10 {
  width: 10%;
}
.w-80 {
  width: 80%;
}
.w-70 {
  width: 70%;
}
.w-90 {
  width: 90%;
}
.encrypted-msg {
  background-color: #ffbc6536;
}
span.receiver:after {
  content: " ";
  position: absolute;
  right: 98%;
  bottom: 0;
  border-style: solid;
  border-width: 20px 20px 0px 0px;
  border-color: transparent #e7e8f3 #5563ab00 #e7e8f3;
  overflow: hidden;
}
.user-avatar {
  position: absolute;
  bottom: 40px;
  right: 2px;
}
input.w-full.vue3-discord-emojipicker__input.bg-transparent.px-5.py-3.text-white.outline-none.text-base.placeholder-grey-200 {
    padding-left: 12px !important;
    padding-right: 12px !important;
}
input.border-0.border-end.text-left.w-100 {
  padding: 10px;
}
input:focus,
textarea:focus {
  outline: none;
}
.pr-2 {
  padding-right: 0.5rem;
}
.typing-area {
  box-shadow: 2px 2px 2px 2px #00000026;
  border-radius: 15px;
}
.emojibutton__active {
    margin: 0px !important;
    background: white !important;
}
.emojibutton__active .vue3-discord-emojipicker__emojibutton {
    width: 22px;
}
.vue3-emojipicker .w-full {
    width: 100%;
    color: black !important;
}
</style>