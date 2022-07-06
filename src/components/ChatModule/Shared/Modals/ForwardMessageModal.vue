
 <template>
  <div class="main-card overflow-hidden">
    <b-card-header class="bg-transparent p-4">
      <b-row class="d-flex align-items-center">
        <b-col lg="8">
          <h2 class="fs-3 fw-bold m-0">{{ title }}</h2>
        </b-col>
        <b-col lg="4" class="text-right">
          <img :src="closeIcon" @click="closeForwardMessageModal" alt="" />
        </b-col>
      </b-row>
    </b-card-header>
    <b-card-body class="bg-transparent p-4">
            <b-form-input
        id="input-formatter"
        v-model="search"
        placeholder="Search User"
        type="search"
        class="b-radius"
      ></b-form-input>
      <p class="attorney-title mt-3 mb-3">Recent Chats</p>

      <div>
        <b-list-group class="">
          <b-list-group-item
            v-for="member in membersArray"
            :key="member"
            class="d-flex align-items-center py-3"
          >
            <div class="mr-3">
              <input
                type="checkbox"
                :value="member"
                v-model="memberData"
                class="form-check-input"
              />
            </div>
            <div class="w-75 d-block align-items-center">
              <b-avatar
                badge
                :size="35"
                :src="member.profileImage"
                :badge-variant="member.status"
              ></b-avatar>
              <p class="attorney-title m-0 ml-2 d-inline-block">
                {{ member.name }} <br />
              </p>
            </div>
            <div class="clearfix"></div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div></div>
    </b-card-body>

    <b-card-footer class="bg-forward p-4" v-if="memberData.length > 0">
      <div class="text-right d-flex align-items-center">
        <p class="m-0 w-50" >
          <small v-for="detail in memberData" :key="detail" class="text-white member-name pull-left">{{ detail.name }},</small>
        </p>
        <div class="w-50">
          <b-button class="btn-create " variant="primary"> Send</b-button>
        </div>
        <div class="clearfix"></div>
      </div>
    </b-card-footer>
  </div>

</template>
<script>
import closeIcon from "/src/assets/images/closeIcon.svg";
import closeIconSmall from "/src/assets/images/Close@3x.svg";
export default {
  name: "ForwardMessageModal",
  props: ["closeForwardMessageModal"],
  components: {
    closeIcon,
    closeIconSmall,
  },
  data() {
    return {
      closeIcon: closeIcon,
      closeIconSmall: closeIconSmall,
      title: "Forward Message to",
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
          status: "secondary",
          msg: "I have great news today!",
        },
        {
          profileImage: "https://placekitten.com/300/300",
          name: "O'Sullivan Sing",
          role: "Nurse",
          status: "success",
          msg: "Ok I will do that. Thanks,",
        },
        {
          profileImage: "https://placekitten.com/320/320",
          name: "Williams Davis",
          role: "Nurse",
          status: "secondary",
          msg: "Can i change the shipping..",
        },
        {
          profileImage: "https://placekitten.com/300/300",
          name: "Murphy Doniya",
          role: "Nurse",
          status: "success",
          msg: "Hi there, How are you?",
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
.bg-forward {
  background: #173e67;
}
</style>