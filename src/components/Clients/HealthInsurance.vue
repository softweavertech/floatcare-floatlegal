<template>
  <div class="vertical-main-tabs p-4">
    <b-row class="border-bottom responsive-health pb-3 mb-4 d-flex align-items-center">
      <b-col sm="12" md="7" lg="8" class=" mb-3 mb-lg-0 mb-md-0">
        <h4 class="fw-bold text-blue m-0">Health Insurance</h4>
      </b-col>
      <!-- <b-col sm="12" md="5" lg="4">
        <button
          class="btn btn-outline-secondary"
          @click="AddahealthInsuranceModal()"
        >
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
          Add Health Insurance
        </button>
      </b-col> -->
    </b-row>
    <b-row class="mb-4">
     
  <b-row class="p-3 gx-0">
        <b-col cols="12" md="6 mt-3" lg="4"  v-if="!nodata">
          <b-card>
            <b-row class="staff-cards">
              
              <b-col cols="12">
                <div class="text-color">Blue Cross Blue Shield</div>
                <span>
                  <small class="card-sml-txt text-muted">#26265162532854</small>
                </span><br>
                <span class="text-color">Date added :
                   <small class="card-sml-txt text-muted">Jun 22nd, 2020</small></span> 
             
              </b-col>
            </b-row>

            <template #footer>
              <b-button
                size="sm"
                v-on:click="viewprovider()"
                class="blue-btn"
                >Edit</b-button
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
  <b-modal
    hide-footer="true"
    title="Add Health Insurance"
    class="AddahealthInsuranceModal"
    v-model="ShowAddahealthInsuranceModal"
    centered
  >
    <b-form>
      <b-row>
        <b-col sm="6" offset-sm="2" md="6" offset-md="0">
          <b-form-group
            id="input-group-insurance"
            label="Insurance"
            label-for="input-insurance"
          >
            <b-form-input
              id="input-insurance"
              type="text"
              placeholder="Input insurance"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="6" md="6">
          <b-form-group
            id="input-group-memberpolicyid"
            label="Member policy id"
            label-for="input-language"
          >
            <b-form-input
              id="input-3"
              type="password"
              placeholder="Input member policy id"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-insuranceauthorizationdocument"
            label="Insurance authorization document"
            label-for="input-insuranceauthorizationdocument"
          >
            <div class="upload-btn-wrapper w-100">
              <button class="uploadcreate-btn w-100">
                <i class="fa fa-paperclip" aria-hidden="true"></i> Browse files or drag
                and drop here</button
              ><input type="file" name="myfile" /></div
          ></b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="submit">Save</button>
        </div>
      </b-row>
      <b-row class="my-3">
        <b-col sm="6" md="6" lg="6">
          <b-card bg-variant="light" class="text-center img-ins">
            <b-row class="d-flex align-items-center">
              <b-col sm="2" md="2" lg="2" class="img-bg-ins">
                <span class="fc-card-black">
                  <img src="@/assets/images/image-placeholder.png" alt="" />
                </span>
              </b-col>
              <b-col sm="7" md="7" lg="7">
                <div>
                  <small class="image-info">Screenshot 2022…</small
                  ><small class="image-info">JPG . 1.2MB</small>
                </div>
              </b-col>
              <b-col sm="3" md="3" lg="3">
                <span class="delete-img border rounded-2 px-2 py-1">
                  <img src="@/assets/images/Icon/Delete.png" alt="" />
                </span>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col sm="6" md="6" lg="6">
          <b-card bg-variant="light" class="text-center img-ins">
            <b-row class="d-flex align-items-center">
              <b-col sm="2" md="2" lg="2" class="img-bg-ins">
                <span class="fc-card-black">
                  <img src="@/assets/images/image-placeholder.png" alt="" />
                </span>
              </b-col>
              <b-col sm="7" md="7" lg="7">
                <div>
                  <small class="image-info">Screenshot 2022…</small
                  ><small class="image-info">JPG . 1.2MB</small>
                </div>
              </b-col>
              <b-col sm="3" md="3" lg="3">
                <span class="delete-img border rounded-2 px-2 py-1">
                  <img src="@/assets/images/Icon/Delete.png" alt="" />
                </span>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  data: function () {
    return {
      nodata: false,
      socialsecuritynumber: [
        { text: "English", value: null },
        "test1",
        "test1",
        "test1",
        "test1",
      ],
      language: [{ text: "English", value: null }, "test1", "test1", "test1", "test1"],
      ShowAddahealthInsuranceModal: false,
    };
  },

  methods: {
    viewprovider() {
      this.$router.push("/edit-health-insurance");
    },
    AddahealthInsuranceModal() {
      this.ShowAddahealthInsuranceModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
h5.modal-title {
  font-weight: 600;
  color: #173e67;
}
.image-info {
  font-size: 12px;
}
.delete-img {
  border: 1px solid #d9dadb;
}
.fc-card-black {
  border: 1px solid #eff0f6;
  background: #eff0f6;
  border-radius: 4px;
  padding: 5px 9px;
}
.card-body {
  padding: 10px 8px !important;
}
    @media screen and (min-width:320px) and (max-width:767px) {
.responsive-health{
    text-align: center;
}
    }
      .blue-btn{
    padding: 4px 25px;
    border-radius: 9px;
    text-align: left !important;
    float: left;
    background: #3E8ACC;
    border:none;
    text-decoration: none;
}
</style>
