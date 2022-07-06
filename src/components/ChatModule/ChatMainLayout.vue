<template>
  <b-container fluid class="main-container-bg p-4">
    <div class="main-card card overflow-hidden">
      <b-row class="bg-themecolor gx-0">
        <b-col lg="3" class="bg-white p-0 pos-r border-end">
          <b-card-header
            class="
              members-head
              title-header
              bg-white
              p-0
              py-3
              border-0
              d-flex
              align-items-center
            "
          >
            <b-container fluid>
              <b-row class="px-2">
                <b-col>
                  <div class="d-flex align-items-center p-2">
                    <img :src="chatIcon" alt="" />

                    <div class="theme-text-color ml-2 msg-title ">Messages</div>
                  </div>
                </b-col>
                <b-col class="d-flex align-items-center justify-content-end">
                  <b-button
                    class="bg-transparent p-0 border-0"
                    @click="searchMembers = !searchMembers"
                  >
                    <img :src="searchIcon" alt="" />
                  </b-button>
                  <b-button
                    class="bg-transparent p-0 border-0 ml-2"
                    @click="showCreateGroup"
                  >
                    <img :src="addIcon" alt="" />
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-card-header>
          <b-card-body class="mt-0 p-0 chat-member-div overflow-hidden">
            <div class="accordion" id="accordionExample">
              <div
                class="accordion-item rounded-0 border-0 border-bottom show"
                v-if="mention.length > 0"
              >
                <h4 class="accordion-header" id="MentionHeading">
                  <button
                    class="accordion-button py-2 rounded-0 theme-text-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mentions"
                    aria-expanded="false"
                    aria-controls="mentions"
                  >
                    <img :src="mentionSmallIcon" alt="" class="mr-2" /> Mentions
                  </button>
                </h4>
                <div
                  id="mentions"
                  class="accordion-collapse collapse"
                  aria-labelledby="MentionHeading"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong>
                  </div>
                </div>
              </div>
              <div
                class="accordion-item rounded-0 border-0"
                v-if="archiveChats.length > 0"
              >
                <h4 class="accordion-header bg-themecolor" id="ArchiveHeading">
                  <button
                    class="
                      accordion-button
                      collapsed
                      py-2
                      rounded-0
                      theme-text-color
                    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Archive"
                    aria-expanded="false"
                    aria-controls="Archive"
                  >
                    <img :src="archiveIconSmall" alt="" class="mr-2" /> Archive
                    Chat
                  </button>
                </h4>
                <div
                  id="Archive"
                  class="accordion-collapse collapse"
                  aria-labelledby="ArchiveHeading"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body p-0">
                   <archive-chat-members :archiveChats="archiveChats" :getMemberChat="getMemberChat" :unarchiveChatMember="unarchiveChatMember"></archive-chat-members>
                  </div>
                </div>
              </div>
            </div>
            <div class="members-section" v-if="membersSection">
              <chat-members
                @Members="chat_member"
                :searchMembers="searchMembers"
                :getMemberChat="getMemberChat"
                :archiveChats="archiveChats"
              >
              </chat-members>
            </div>
            <div class="no-member-section px-2 mt-3" v-else>
              <b-form-group>
                <b-form-input
                  id="input-1"
                  v-model="search"
                  type="search"
                  placeholder=" Select member"
                  required
                  class="b-radius serach-input px-3"
                ></b-form-input>
              </b-form-group>

              <div class="no-chat-members text-center">
                <img :src="noChatMember" alt="" />
                <p class="m-0 mt-2">No chat found</p>
              </div>
            </div>
          </b-card-body>
        </b-col>

        <b-col lg="6" class="pos-r chat-area" v-if="rightSideBar">
          <div
            class="chat-placeholder text-center"
            v-if="rightSideBarTitle == 'undefined'"
          >
            <img :src="chatPlaceHolder" alt="" />
            <p class="fs-2 theme-text-color fw-bolder">
              It's nice to chat with someone
            </p>
            <span class="fs-5 theme-text-color opacity-50">
              Pick a person from left menu and <br />
              start you conversation.</span
            >
          </div>
          <div v-else-if="rightSideBarTitle == 'Profile'">
            <chat-section :showCreateGroup="showCreateGroup" :closeSideBar="closeSideBar" :chatAarry="chatAarry" :makeChatArchive="makeChatArchive" :archiveChats="archiveChats" :unarchiveChatMember="unarchiveChatMember">
            </chat-section>
          </div>
        </b-col>

        <b-col lg="9" class="pos-r chat-area" v-if="rightSideBar == false">
          <div
            class="chat-placeholder text-center"
            v-if="chatAarry.length == 0"
          >
            <img :src="chatPlaceHolder" alt="" />
            <p class="fs-2 theme-text-color fw-bolder">
              It's nice to chat with someone
            </p>
            <span class="fs-5 theme-text-color opacity-50">
              Pick a person from left menu and <br />
              start you conversation.</span
            >
          </div>
          <div
            v-else-if=" rightSideBarTitle == 'ProfileExpand'"
          >
            <chat-section :showCreateGroup="showCreateGroup" :closeSideBar="closeSideBar" :chatAarry="chatAarry" :makeChatArchive="makeChatArchive" :archiveChats="archiveChats" :unarchiveChatMember="unarchiveChatMember">
            </chat-section>
          </div>
          <div v-else-if="rightSideBarTitle == 'strmsgs'">
            <stared-messages
              :closeIconSmall="closeIconSmall"
              :closeSideBar="closeSideBar"
            >
            </stared-messages>
          </div>
        </b-col>
        <b-col
          lg="3"
          class="bg-white p-0 pos-r border-start"
          v-if="rightSideBar"
        >
          <profile-template
            :closeSideBar="closeSideBar"
            :rightHeaderTitle="rightHeaderTitle"
            :closeIconSmall="closeIconSmall"
            :DocumentIcon="DocumentIcon"
            :PhotoIcon="PhotoIcon"
            :StarIcon="StarIcon"
            :editProfile="editProfile"
          ></profile-template>
        </b-col>
      </b-row>
    </div>
  </b-container>
  <b-modal
    v-model="createGroup"
    centered
    size="lg"
    hide-header
    hide-footer
    body-class="p-0"
  >
    <new-conversation :closeCreateGroup="closeCreateGroup"></new-conversation>
  </b-modal>
  <b-modal
    v-model="deleteModal"
    centered
    size="md"
    hide-header
    hide-footer
    body-class="p-0"
  >
    <delete-file-modal :closeDeleteModal="closeDeleteModal"></delete-file-modal>
  </b-modal>

  <b-modal
    v-model="MessageForward"
    centered
    size="md"
    hide-header
    hide-footer
    body-class="p-0"
  >
    <message-forward
      :closeForwardMessageModal="closeForwardMessageModal"
    ></message-forward>
  </b-modal>
 
</template>
<script>
import "@/scss/staff.scss";
import "@/scss/attorney.scss";
import closeIconSmall from "/src/assets/images/Close@3x.svg";
import chatIcon from "/src/assets/images/Chat2@3x.svg";
import noChatMember from "/src/assets/images/Chat@3x.svg";
import searchIcon from "/src/assets/images/Search@3x.svg";
import addIcon from "/src/assets/images/Add@3x.svg";
import DocumentIcon from "/src/assets/images/Documents@3x.svg";
import PhotoIcon from "/src/assets/images/Photos@3x.svg";
import StarIcon from "/src/assets/images/StarMessages@3x.svg";
import chatPlaceHolder from "/src/assets/images/Placeholder@3x.svg";
import ChatMembers from "./Shared/ChatMembers.vue";
import ArchiveChatMembers from "./Shared/ArchiveChatMembers.vue";
import ProfileTemplate from "@/components/ChatModule/Shared/ProfileTemplate.vue";
import ChatSection from "@/components/ChatModule/Shared/ChatSection.vue";
import NewConversation from "@/components/ChatModule/Shared/Modals/NewConversation.vue";
import StaredMessages from "@/components/ChatModule/Shared/StaredMessages.vue";
import DeleteFileModal from "@/components/ChatModule/Shared/Modals/DeleteFileModal.vue";

import MessageForward from "@/components/ChatModule/Shared/Modals/ForwardMessageModal.vue";
import downloadIcon from "@/assets/images/menu@3x.svg";
import mentionSmallIcon from "@/assets/images/@@3x.svg";
import archiveIconSmall from "@/assets/images/archiveIconSmall.svg";
export default {
  components: {
    ArchiveChatMembers,
    StaredMessages,
    MessageForward,
    mentionSmallIcon,
    archiveIconSmall,
    DeleteFileModal,
    ProfileTemplate,
    ChatSection,
    chatIcon,
    PhotoIcon,
    searchIcon,
    addIcon,
    noChatMember,
    chatPlaceHolder,
    ChatMembers,
    NewConversation,
    DocumentIcon,
    closeIconSmall,
    StarIcon,
    downloadIcon,
  },
  data() {
    return {
      editProfile: [],
      chatMemberName: "",
      chatMemberId: 0,
      mention: [],
      archiveChats: [],
      downloadIcon: downloadIcon,
      mentionSmallIcon: mentionSmallIcon,
      archiveIconSmall: archiveIconSmall,
      MessageForward: false,
      deleteModal: false,
      rightSideBar: false,
      chatIcon: chatIcon,
      DocumentIcon: DocumentIcon,
      PhotoIcon: PhotoIcon,
      closeIconSmall: closeIconSmall,
      searchIcon: searchIcon,
      StarIcon: StarIcon,
      addIcon: addIcon,
      noChatMember: noChatMember,
      chatPlaceHolder: chatPlaceHolder,
      search: "",
      searchBtn: true,
      membersSection: true,
      searchMembers: true,
      createGroup: false,
      rightHeaderTitle: "Profile",
      rightSideBarTitle: "ProfileExpand",
      chatMember: [],
      chatAarry: [],
    };
  },
  mounted() {},
  methods: {
    unarchiveChatMember(chat) {
      const indexOfObject = this.archiveChats.findIndex(object => {
        return object.id === chat.id;
      });
      this.archiveChats.splice(indexOfObject, 1);
    },
    getMemberChat(chat) {
      this.chatAarry = chat;
      this.editProfile.splice(0, this.editProfile.length)
      this.editProfile.push(chat);
    },
    makeChatArchive(chat) {
      this.archiveChats.push(chat);
    },
    closeSideBar(val, sidebarTitle,memberData) {
      this.editProfile.push(memberData);
      this.rightSideBarTitle = sidebarTitle;
      this.rightSideBar = val;
    },
    chat_member(value) {
      if (value.length == 0) {
        this.membersSection = false;
      }
    },
    showSearchArea() {
      this.searchMembers = true;
    },
    showCreateGroup() {
      this.createGroup = true;
    },
    closeCreateGroup() {
      this.createGroup = false;
    },

    closeForwardMessageModal() {
      this.MessageForward = false;
    },
  },
};
</script>
<style>
.accordion-button,
.accordion-button:not(.collapsed) {
  background: #e8ecf0;
}
.fileTypeTitle {
  flex: 2;
}
.members-head {
  box-shadow: -9px -7px 20px 5px #00000024;
}
.chat-member-div {
  min-height: 700px;
  max-height: 700px;
}
.chat-sidebar {
  min-height: 700px;
  max-height: 700px;
  overflow: auto;
  overflow-x: hidden;
}
.serach-input {
  font-size: 0.9rem;
}
img.closeIcon {
  width: 80%;
}
.chat-placeholder {
  position: absolute;
  top: 29%;
  left: 29%;
}
.no-chat-members {
  position: absolute;
  top: 42%;
  left: 28%;
}
span.last-scene {
  font-size: 12px;
}
.list-group-item:hover {
  background-color: #f5f8fa;
  cursor: pointer;
}
.msg-title {
  font-size: 18px;
  font-weight: 800;
}
.profile-head {
  box-shadow: 4px 2px 8px 2px #00000014;
}
.accordion-button:not(.collapsed)::after {
  transform: translate(-56%, 33%) rotate(90deg);
  background: url("/src/assets/images/Chevron Right@3x.svg");
  background-repeat: no-repeat;
}
.accordion-button::after {
  transform: translate(0, 19%) rotate(1deg);
  background-size: 0.8rem;
  background: url("/src/assets/images/Chevron Right@3x.svg");
  background-repeat: no-repeat;
}
/* .accordion-button:not(.collapsed){

} */
</style>