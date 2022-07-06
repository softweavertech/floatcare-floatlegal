
 <template>
  <div class="mian-card overflow-hidden p-3">
    <b-card-body class="bg-transparent">
      <div class="text-center">
        <img :src="deleteIcon" alt="" />
        <h2 class="title mt-3 mb-3">Delete Message</h2>
      </div>
      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        Delete file from your system?
      </b-form-checkbox>
      <b-row class="mt-3">
        <b-col lg="6" class="p-1 pl-3 text-left">
          <b-button
            @click="closeDeleteModal"
            class="w-100 bg-themecolor b-radius border-0 theme-text-color"
            >Cancel</b-button
          >
        </b-col>

        <b-col lg="6" class="p-1 pr-3 pl-3 text-right">
          <b-button variant="danger" class="b-radius w-100"
            >Delete For Me</b-button
          >
        </b-col>
      </b-row>
    </b-card-body>
  </div>
</template>
<script>
import deleteIcon from "/src/assets/images/deleteIcon.svg";
import closeIconSmall from "/src/assets/images/Close@3x.svg";
export default {
  name: "DeleteMessageModal",
  props: ["closeDeleteModal"],
  components: {
    deleteIcon,
    closeIconSmall,
  },
  data() {
    return {
      deleteIcon: deleteIcon,
      closeIconSmall: closeIconSmall,
      title: "New conversation",
      newGroup: "1",
      groupName: "",
      selectMembers: "",
      membersList: true,
      memberData: [],
      membersArray: [
        {
          profileImage: "https://placekitten.com/320/320",
          name: "Rodriguez Jon",
          role: "Nurse",
        },
        {
          profileImage: "https://placekitten.com/300/300",
          name: "O'Sullivan Sing",
          role: "Nurse",
        },
        {
          profileImage: "https://placekitten.com/320/320",
          name: "Williams Davis",
          role: "Nurse",
        },
        {
          profileImage: "https://placekitten.com/300/300",
          name: "Murphy Doniya",
          role: "Nurse",
        },
      ],
    };
  },
  methods: {
    deleteEvent: function (index) {
      this.memberData.splice(index, 1);
    },
  },
};
</script>
<style>
.member-image {
  flex: 1;
}
.member-name {
  flex: 3;
}
.deleteMember {
  flex: 1;
}
</style>