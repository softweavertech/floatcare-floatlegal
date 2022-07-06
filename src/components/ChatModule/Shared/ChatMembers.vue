<template>
  <b-list-group class="chat-sidebar">
    <div  v-for="member in ChatMembers"
      :key="member">
    <b-list-group-item
      class="border-0 border-bottom py-3 member"
      v-if="!archiveChats.includes(member)"
    >
      <b-row @click="getMemberChat(member)">
        <b-col lg="3">
          <b-avatar
            badge
            :badge-variant="member.status"
            :src="member.profileImage"
          ></b-avatar>
        </b-col>
        <b-col lg="5" class="p-0">
          <p class="theme-text-color fw-bold mb-1 member-name">
            {{ member.name.substring(0, 12) + ".." }}
          </p>
          <small class="theme-text-color fw-bold opacity-75 member-msg">{{
            member.msg.substring(0, 15) + ".."
          }}</small>
        </b-col>
        <b-col lg="4" class="text-right">
          <span class="last-scene d-block opacity-50 mb-3">{{
            member.lastSecene
          }}</span>
          <b-badge pill class="theme-color">21</b-badge>
        </b-col>
      </b-row>
    </b-list-group-item>
      </div>
  </b-list-group>
</template>
<script>
export default {
  name: "ChatMembers",
  props: ["searchMembers", "getMemberChat","archiveChats"],
  data() {
    return {
      ChatMembers: [
        {
          id: 1,
          name: "Dynamic Health",
          profileImage: "https://placekitten.com/320/320",
          lastSecene: "Just Now",
          status: "secondary",
          msg: "I have great news today!",
          memberType:"group",
          chatAarry: [
            {
              role: "sender",
              msg: "1Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
              msg: "Why do we use it?.",
              time: "Sender. 11.30 AM",
            },
            {
              role: "sender",
              msg: "many web sites still in their infancy",
              time: "Receiver. 12.15 AM",
            },
           
          ],
        },
        {
          id: 2,
          name: "Rodriguez Smith",
          profileImage: "https://placekitten.com/300/300",
          lastSecene: "15 min ago",
          status: "success",
          msg: "Ok I will do that. Thanks,",
          memberType:"personal",
          chatAarry: [
           
            {
              role: "sender",
              msg: "1500s, when an unknown printer took a galley of type and scrambled.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "sender",
              msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
              msg: "Why do we use it?.",
              time: "Sender.11.30 AM",
            },
            {
              role: "sender",
              msg: "many web sites still in their infancy1241624162412",
              time: "Receiver. 12.15 AM",
            },
          ],
        },
        {
          id: 3,
          name: "Margaret Emily",
          profileImage: "https://placekitten.com/320/320",
          lastSecene: "30 min ago",
          status: "secondary",
          msg: "Can i change the shipping..",
          memberType:"group",
          chatAarry: [
            {
              role: "sender",
              msg: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
              msg: "Okay.",
              time: "Sender. 11.30 AM",
            },
            {
              role: "sender",
              msg: "The text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
              msg: "Why do we use it?.",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
            
          ],
        },
        {
          id: 4,
          name: "Elizabeth Ava",
          profileImage: "https://placekitten.com/300/300",
          lastSecene: "Just Now",
          status: "success",
          msg: "Hi there, How are you?",
          memberType:"group",
          chatAarry: [
            
            {
              role: "sender",
              msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              msg: "many web sites still in their infancy1241624162412",
              time: "Receiver. 12.15 AM",
            },
          ],
        },
        {
          id: 5,
          name: "Dynamic Health",
          profileImage: "https://placekitten.com/320/320",
          lastSecene: "Just Now",
          status: "secondary",
          msg: "I have great news today!",
          memberType:"personal",
          chatAarry: [
           
            {
              role: "sender",
              msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              msg: "many web sites still in their infancy",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "sender",
              msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
              msg: "Okay.",
              time: "Sender. 11.30 AM",
            },
            {
              role: "sender",
              msg: "The text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
        
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
              msg: "Why do we use it?.",
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
              role: "receiver",
              msg: "Why do we use it?.",
              time: "Sender.11.30 AM",
            },
            {
              role: "sender",
              msg: "many web sites still in their infancy1241624162412",
              time: "Receiver. 12.15 AM",
            },
          ],
        },
        {
          id: 6,
          name: "Rodriguez Smith",
          profileImage: "https://placekitten.com/300/300",
          lastSecene: "15 min ago",
          status: "success",
          msg: "Ok I will do that. Thanks,",
          memberType:"personal",
          chatAarry: [
            {
              role: "sender",
              msg: "6Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
              msg: "Why do we use it?.",
              time: "Sender.11.30 AM",
            },
            {
              role: "sender",
              msg: "many web sites still in their infancy1241624162412",
              time: "Receiver. 12.15 AM",
            },
          ],
        },
        {
          id: 7,
          name: "Margaret Emily",
          profileImage: "https://placekitten.com/320/320",
          lastSecene: "30 min ago",
          status: "secondary",
          msg: "Can i change the shipping..",
          memberType:"group",
          chatAarry: [
            
            {
              role: "sender",
              msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
              msg: "Why do we use it?.",
              time: "Sender.11.30 AM",
            },
            {
              role: "sender",
              msg: "many web sites still in their infancy1241624162412",
              time: "Receiver. 12.15 AM",
            },
          ],
        },
        {
          id: 8,
          name: "Elizabeth Ava",
          profileImage: "https://placekitten.com/300/300",
          lastSecene: "Just Now",
          status: "success",
          msg: "Hi there, How are you?",
          memberType:"personal",
          chatAarry: [
            {
              role: "sender",
              msg: "8Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
              msg: "Okay.",
              time: "Sender. 11.30 AM",
            },
            {
              role: "sender",
              msg: "The text of the printing and typesetting industry.",
              time: "Receiver. 12.15 AM",
            },
            
            {
              role: "receiver",
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
              role: "receiver",
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
              role: "receiver",
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
            
          ],
        },
      ],
    };
  },
  mounted() {
    this.sendData();
  },
  methods: {
    sendData() {
      this.$emit("Members", this.ChatMembers);
    },
  },
};
</script>