<template>
  <b-list-group class="chat-sidebar" v-if="archiveChats.length > 0">
    <div  v-for="member in archiveChats"
      :key="member">
    <b-list-group-item
      class="border-0 border-bottom py-3 member"
      
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