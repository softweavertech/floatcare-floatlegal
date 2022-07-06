
 <template>
  <div class="mian-card overflow-hidden">
    <b-card-header class="bg-transparent p-4">
      <b-row class="d-flex align-items-center">
        <b-col class="">
          <h2 class="fs-3 fw-bold m-0">{{ title }}</h2>
        </b-col>
        <b-col class="text-right">
          <img :src="closeIcon" @click="closeCreateGroup" alt="" />
        </b-col>
      </b-row>
    </b-card-header>
    <b-card-body class="bg-transparent p-4">
      <b-row class="mb-4">
        <b-col lg="6" class="p-1 pl-3">
          <div class="bg-themecolor py-3 px-3 b-radius">
            <b-form-radio v-model="newGroup" value="0"
              >New Contact</b-form-radio
            >
          </div>
        </b-col>

        <b-col lg="6" class="p-1 pr-3 pl-3">
          <div class="py-3 px-3 border-1 b-radius border-secondary">
            <b-form-radio v-model="newGroup" value="1">New Group</b-form-radio>
          </div>
        </b-col>
      </b-row>
      <b-form-group id="input-group-1">
        <label class="mb-2" for="groupName">Group Name</label>
        <b-form-input
          id="input-1"
          v-model="groupName"
          type="text"
          placeholder="Input Group Name"
          class="b-radius fs-6"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1">
        <label class="mb-2" for="groupName">Add Group Member</label>
        <b-form-input
          id="input-1"
          v-model="selectMembers"
          type="text"
          placeholder="Select Members"
          class="b-radius fs-6 bg-white"
          @click="membersList = !membersList"
          readonly
        ></b-form-input>
      </b-form-group>
      <div v-if="!membersList">
        <b-list-group class="b-radius">
          <b-list-group-item
            v-for="member in membersArray"
            :key="member"
            class="d-flex align-items-center py-3"
          >
            <div class="w-75">
              <b-avatar :size="35" :src="member.profileImage"></b-avatar>
              <p class="attorney-title m-0 ml-2 d-inline-block">
                {{ member.name }}
              </p>
            </div>
            <div class="w-25 d-flex justify-content-end">
              <input
                type="checkbox"
                :value="member"
                v-model="memberData"
                class="form-check-input"
              />
            </div>
            <div class="clearfix"></div>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div v-else>
        <div v-if="memberData.length > 0">
          <b-row>
            <b-col
              lg="4"
              class="p-2"
              v-for="(detail, index) in memberData"
              :key="detail"
            >
              <div
                class="
                  member-detail
                  d-flex
                  align-items-center
                  p-2
                  b-radius
                  border border-secondary
                "
              >
                <div class="member-image mr-2">
                  <b-avatar
                    :size="40"
                    rounded="lg"
                    :src="detail.profileImage"
                  ></b-avatar>
                </div>
                <div class="member-name attorney-title">
                  <p class="m-0">{{ detail.name.substring(0, 8) + ".." }}</p>
                  <small class="opacity-50"> {{ detail.role }} </small>
                </div>
                <div class="deleteMember flex-1">
                  <b-button
                    @click="deleteEvent(index)"
                    class="bg-transparent border-0"
                    type="button"
                  >
                    <img :src="closeIconSmall" alt=""
                  /></b-button>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-card-body>
    <b-card-footer class="bg-transparent p-4">
      <div class="w-100 text-right">
        <b-button class="btn-create" variant="primary" @click="membersList = true"> Continue </b-button>
      </div>
    </b-card-footer >
  </div>
</template>
<script>
import closeIcon from "/src/assets/images/closeIcon.svg";
import closeIconSmall from "/src/assets/images/Close@3x.svg";
export default {
  name: "NewConversation",
  props: ["closeCreateGroup"],
  components: {
    closeIcon,
    closeIconSmall,
  },
  data() {
    return {
      closeIcon: closeIcon,
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