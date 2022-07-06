<style>
span.bg-grey-btn {
  font-size: 14px;
  padding: 2px 10px;
  background-color: #eff0f6;
  border-radius: 3px;
  margin-left: 12px;
  color: #6c757d;
}
.text-cyan {
  color: #4394ad;
}
</style>
<template>
  <b-row>
    <b-col md="12">
      <div class="container fc-card bg-light p-4 mb-4">
        <b-row class="my-4">
          <b-col sm="1" md="1" lg="1">
            <img
              src="@/assets/images/Icon/profilepicture.jpg"
              class="rounded-3"
              width="80"
              height="80"
            />
          </b-col>
          <b-col sm="11" md="11" lg="11">
            <h2>Patricia Avaa</h2>
            <span class="text-muted">Male</span>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-3">
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Date of birth</div>
            <small class="text-muted">Jun 15, 2022</small>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Email ID</div>
            <small class="text-muted">m********@gmail.com</small>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Phone number</div>
            <small class="text-muted">*** **** 4689</small>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-3">
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Sub-Speciality</div>
            <small class="text-muted">Physician</small>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Speciality</div>
            <small class="text-muted">Phrimacy care physician</small>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Languages</div>
            <small class="text-muted">English</small>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-3">
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Address</div>
            <small class="text-muted">900 Hyde St, San Francisco, CA 94109, US..</small>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <div class="fs-6 text-blue fw-bold mb-2">Ethnicity</div>
            <small class="text-muted">White</small>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-3">
          <b-col sm="12" md="12" lg="12">
            <div class="fs-6 text-blue fw-bold mb-2">Search & add speciality tag (s)</div>
            <span class="bg-grey"
              ><span class="bg-grey-btn">Chiropractor</span
              ><span class="bg-grey-btn">Critical Care</span
              ><span class="bg-grey-btn">Cardiology</span
              ><span class="bg-grey-btn">Dermatology</span>
            </span>
          </b-col>
        </b-row>
        <b-row>
          <h2 class="my-5">Manage Practices</h2>
        </b-row>
        <b-row>
          <b-col md="3  mt-3">
            <b-card>
              <b-row class="staff-cards">
                <b-col sm="12" md="12" lg="12">
                  <div class="text-cyan">FLOATCARE HOSPITAL</div>
                  <span>
                    <small class="card-sml-txt text-muted">123, Canada</small>
                  </span>
                </b-col>
              </b-row>

              <template #footer>
                <b-button
                  size="sm"
                  variant="primary rounded-3 more"
                  
                  >View Provider</b-button
                >
                <span class="pull-right pt-1 px-2 view-btn">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </template>
            </b-card>
          </b-col>
          <b-col md="3  mt-3">
            <b-card>
              <b-row class="staff-cards">
                <b-col sm="12" md="12" lg="12">
                  <div class="text-cyan">BLUE CROSS</div>
                  <span>
                    <small class="card-sml-txt text-muted">123, US</small>
                  </span>
                </b-col>
              </b-row>

              <template #footer>
                <b-button
                  size="sm"
                  variant="primary rounded-3 more"
                  
                  >View Provider</b-button
                >
                <span class="pull-right pt-1 px-2 view-btn">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </template>
            </b-card>
          </b-col>
          <b-col md="3  mt-3">
            <b-card>
              <b-row class="staff-cards">
                <b-col sm="12" md="12" lg="12">
                  <div class="text-cyan">INSTITUTE FOR MEDICAL QUALITY</div>
                  <span>
                    <small class="card-sml-txt text-muted">Hoston</small>
                  </span>
                </b-col>
              </b-row>

              <template #footer>
                <b-button
                  size="sm"
                  variant="primary rounded-3 more"
                  
                  >View Provider</b-button
                >
                <span class="pull-right pt-1 px-2 view-btn">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </template>
            </b-card>
          </b-col>
          <b-col md="3  mt-3">
            <b-card>
              <b-row class="staff-cards">
                <b-col sm="12" md="12" lg="12">
                  <div class="text-cyan">CVS HEALTH</div>
                  <span>
                    <small class="card-sml-txt text-muted">West 514</small>
                  </span>
                </b-col>
              </b-row>

              <template #footer>
                <b-button
                  size="sm"
                  variant="primary rounded-3 more"
                  
                  >View Provider</b-button
                >
                <span class="pull-right pt-1 px-2 view-btn">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>
