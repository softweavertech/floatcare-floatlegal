<template>

  <div class="ss">
    <b-card-header
      class="
        chat-head
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
        <b-row class="px-2 d-flex align-items-center ">
          <b-col cols="11">
            <div class="d-flex align-items-center p-2">
           
              <div class="theme-text-color ml-2">Star messages</div>
            </div>
          </b-col>
          <b-col cols="1" class=" text-right pr-3">
              <b-button class="bg-transparent p-0 border-0 pull-right">
              <img
                @click="closeSideBar(true,'Profile')"
                :src="closeIconSmall"
                alt=""
                class="closeIcon"
              />
            </b-button>
            <div class="clearfix"></div>
          </b-col>
        </b-row>
      </b-container>
    </b-card-header>
    <b-card-body class="overflow-auto chat-section-height">
      <div class="chat-area">
        <div v-for="chat in chatAarry" :key="chat">
          <div v-if="chat.role == 'receiveFrom'" class="">
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
       
        </div>
      </div>
    </b-card-body>
  
  </div>
</template>
<script>
import downloadIcon from "@/assets/images/menu@3x.svg";
import senderPic from "@/assets/images/Avatars/ProfilePicture.png";
import receiverPic from "@/assets/images/Avatars/Profile.png";
import attachment from "@/assets/images/Attachment@3x.svg";
import emoji from "@/assets/images/Emoji@3x.svg";
import Rrecord from "@/assets/images/Record@3x.svg";
import Star from "@/assets/images/Star@3x.svg";

export default {
  name: "ChatSection.vue",
  props: ["closeSideBar","closeIconSmall"],
  components: {
    downloadIcon,
    senderPic,
    receiverPic,
    attachment,
    Star,
emoji,
Rrecord,
  },
  data() {
    return {
    attachment:attachment,
    Star:Star,
    emoji:emoji,
    Rrecord:Rrecord,
      senderPic: senderPic,
      receiverPic: receiverPic,
      chatAarry: [
        {
          role: "sender",
          msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Okay.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "The text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "1500s, when an unknown printer took a galley of type and scrambled.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Why do we use it?.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "many web sites still in their infancy",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Okay.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "The text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "1500s, when an unknown printer took a galley of type and scrambled.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Why do we use it?.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "many web sites still in their infancy",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Okay.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "The text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "1500s, when an unknown printer took a galley of type and scrambled.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Why do we use it?.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "many web sites still in their infancy",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Okay.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "The text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "1500s, when an unknown printer took a galley of type and scrambled.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Why do we use it?.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "many web sites still in their infancy",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Okay.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "The text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "1500s, when an unknown printer took a galley of type and scrambled.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Why do we use it?.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "many web sites still in their infancy",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Okay.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "The text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "1500s, when an unknown printer took a galley of type and scrambled.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Why do we use it?.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "many web sites still in their infancy",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Okay.",
          time: "Sender. 11.30 AM",
        },
        {
          role: "sender",
          msg: "The text of the printing and typesetting industry.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "sender",
          msg: "1500s, when an unknown printer took a galley of type and scrambled.",
          time: "Receiver. 12.15 AM",
        },
        {
          role: "receiveFrom",
          msg: "Why do we use it?.",
          time: "Sender.11.30 AM",
        },
        {
          role: "sender",
          msg: "many web sites still in their infancy1241624162412",
          time: "Receiver. 12.15 AM",
        }
      ],
      downloadIcon: downloadIcon,
    };
  },
  mounted() {

  },
  methods: {
  
  },
};
</script>
<style>
span.send-time {
  font-size: 12px;
}
.chat-section-height {
  max-height: 700px;
}
span.sender {
  background-color: #5563ab;
  color: #fff;
  width: 70%;
  position: relative;
}
span.receiveFrom {
  background-color: #5563ab24;
  color: #173e67;
  width: 70%;
  position: relative;
}

span.sender:before {
  content: " ";
  position: absolute;
  left: 95%;
  bottom: 0;
  border-style: solid;
  border-width: 0px 17px 17px 17px;
  border-color: transparent transparent #5563ab #5563ab;
  overflow: hidden;
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
span.receiveFrom:before {
  content: " ";
  position: absolute;
  right: 98%;
  bottom: 0;
  border-style: solid;
  border-width: 20px 20px 0px 0px;
  border-color: transparent #dee3ef #5563ab00 #dee3ef;
  overflow: hidden;
}
.user-avatar {
    position: absolute;
    bottom: 40px;
    right: 2px;
}

input.border-0.border-end.text-left.w-100 {
    padding: 10px;
}
input:focus{
    outline: none;
}
.pr-2{
    padding-right: 0.5rem;
}
.typing-area {
    box-shadow: 2px 2px 2px 2px #00000026;
    border-radius: 15px;
}
span.receiveFrom:after {
    content: url(/src/assets/images/Star@3x.svg);
    width: 30px;
    height: 27px;
    display: block;
    position: absolute;
    right: 20px;
    bottom: -12px;
    background: white;
    text-align: center;
    padding: 3px 5px 0px 5px;
    border-radius: 5px;
}
</style>