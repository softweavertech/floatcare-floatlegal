<template>
  <div class="vertical-main-tabs p-4">
    <b-row>
      <b-col sm="12" md="12" lg="12" class="mb-2">
        <h4 class="fw-bold text-blue">Client care provider(s)</h4>
      </b-col>
    </b-row>
    <b-row class="border-bottom py-3 mb-4">
      <b-col sm="12" md="7" lg="7">
        <h5>Primary Care Physician</h5>
      </b-col>
      <!-- <b-col sm="12" md="5" lg="5">
        <button class="btn btn-outline-secondary pull-right">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Icons/ic_add_circle</title>
            <defs>
              <path
                d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 L17,13 Z"
                id="path-1"
              ></path>
              <rect id="path-3" x="0" y="0" width="50" height="50"></rect>
            </defs>
            <g id="Symbol" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icons/ic_add_circle">
                <mask id="mask-2" fill="white">
                  <use xlink:href="#path-1"></use>
                </mask>
                <g id="Mask"></g>
                <g id="🎨-Color" mask="url(#mask-2)">
                  <g transform="translate(-13.000000, -13.000000)">
                    <mask id="mask-4" fill="white">
                      <use xlink:href="#path-3"></use>
                    </mask>
                    <use
                      id="Color"
                      stroke="none"
                      fill="#0070FF"
                      fill-rule="evenodd"
                      xlink:href="#path-3"
                    ></use>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Add primary care physician
        </button>
      </b-col> -->
    </b-row>
    <b-row class="mb-4">
      <b-row class="gx-0">
        <b-col cols="12" md="6  mt-3" lg="4">
          <b-card>
            <b-row class="staff-cards">
             <b-col sm="3" md="3" lg="3">
                  <img
                    src="@/assets/images/Icon/profilepicture.jpg"
                    class="profile-image"
                    alt="section"
                  />
                </b-col>
              <b-col sm="9" md="9" lg="9">
                <div class="text-color">Samantha</div>
                <span>
                  <small class="card-sml-txt text-muted">Physician</small>
                </span>
              </b-col>
            </b-row>

            <template #footer>
              <b-button
                size="sm"
                variant="primary rounded-3 more"
                v-on:click="viewprovider()"
                >View Provider</b-button
              >
              <span class="pull-right pt-1 px-2 view-btn">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-row>
    <b-row class="border-bottom py-3 my-5">
      <b-col sm="12" md="9" lg="9">
        <h5>Other Providers</h5>
      </b-col>
      <!-- <b-col sm="12" md="3" lg="3">
        <button class="btn btn-outline-secondary pull-right">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Icons/ic_add_circle</title>
            <defs>
              <path
                d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 L17,13 Z"
                id="path-1"
              ></path>
              <rect id="path-3" x="0" y="0" width="50" height="50"></rect>
            </defs>
            <g id="Symbol" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Icons/ic_add_circle">
                <mask id="mask-2" fill="white">
                  <use xlink:href="#path-1"></use>
                </mask>
                <g id="Mask"></g>
                <g id="🎨-Color" mask="url(#mask-2)">
                  <g transform="translate(-13.000000, -13.000000)">
                    <mask id="mask-4" fill="white">
                      <use xlink:href="#path-3"></use>
                    </mask>
                    <use
                      id="Color"
                      stroke="none"
                      fill="#0070FF"
                      fill-rule="evenodd"
                      xlink:href="#path-3"
                    ></use>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Add Provider
        </button>
      </b-col> -->
    </b-row>
    <b-row>
      <b-row class="gx-0">
        <b-col cols="12" md="6  mt-3" lg="4">
          <b-card>
            <b-row class="staff-cards">
              <b-col sm="3" md="3" lg="3">
                  <img
                    src="@/assets/images/Icon/profilepicture.jpg"
                    class="profile-image"
                    alt="section"
                  />
                </b-col>
              <b-col sm="9" md="9" lg="9">
                <div class="text-color">Sophia Minal</div>
                <span>
                  <small class="card-sml-txt text-muted">Physician</small>
                </span>
              </b-col>
            </b-row>

            <template #footer>
              <b-button
                size="sm"
                variant="primary rounded-3 more"
                v-on:click="viewprovider()"
                >View Provider</b-button
              >
              <span class="pull-right pt-1 px-2 view-btn">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </span>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },

  methods: {
    viewprovider() {
       this.$router.push("/edit-health-insurance");
    },
  },
};
</script>

<style lang="scss" scoped></style>
