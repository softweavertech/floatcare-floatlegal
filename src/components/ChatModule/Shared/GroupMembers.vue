<template>
  <b-list-group class="member-sidebar">
    <b-list-group-item
      class="border-0 border-bottom px-2 member"
      v-for="member in GroupMembers"
      :key="member"
    >
      <b-row>
        <b-col lg="3">
          <b-avatar :src="member.profileImage"></b-avatar>
        </b-col>
        <b-col lg="5" class="p-0">
          <p class="theme-text-color fw-bold m-0 member-name">
            {{ member.name.substring(0, 12) + ".." }}
          </p>
          <small class="theme-text-color fw-bold opacity-75 member-msg">{{
            member.role
          }}</small>
        </b-col>
        <b-col
          lg="4"
          class="text-right align-items-center pull-right pr-2 pt-3"
        >
          <b-avatar
            :size="15"
            :src="removeImage"
            class="bg-white pull-right"
          ></b-avatar>
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>
<script>
import removeImage from "@/assets/images/Remove@3x.svg";
export default {
  name: "GroupMembers",
  props: ["searchMembers"],
  components: {
    removeImage,
  },
  data() {
    return {
      removeImage: removeImage,
      GroupMembers: [
        {
          name: "Dynamic Health",
          profileImage: "https://placekitten.com/320/320",
          role: "Nurse",
        },
        {
          name: "Rodriguez Smith",
          profileImage: "https://placekitten.com/300/300",
          role: "Nurse",
        },
        {
          name: "Margaret Emily",
          profileImage: "https://placekitten.com/320/320",
          role: "Nurse",
        },
        {
          name: "Elizabeth Ava",
          profileImage: "https://placekitten.com/300/300",
          lastSecene: "Just Now",
          role: "Nurse",
        },
        {
          name: "Dynamic Health",
          profileImage: "https://placekitten.com/320/320",
          role: "Nurse",
        },
        {
          name: "Rodriguez Smith",
          profileImage: "https://placekitten.com/300/300",
          role: "Nurse",
        },
        {
          name: "Margaret Emily",
          profileImage: "https://placekitten.com/320/320",
          role: "Nurse",
        },
        {
          name: "Elizabeth Ava",
          profileImage: "https://placekitten.com/300/300",
          role: "Nurse",
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
<style>
.member-sidebar {
  min-height: 500px;
  max-height: 500px;
  overflow: auto;
  overflow-x: hidden;
}
</style>