<template>
  <b-container fluid>
    <b-row class="bg-themecolor p-3 align-items-center b-radius mb-2">
      <b-col lg="8" class="text-left">
        <p class="theme-text-color m-0">
          Are Cost Estimates required for the Evaluation first?
        </p>
      </b-col>
      <b-col lg="4" class="text-right align-items-center c-box">
        <b-form-group v-slot="{ ariaDescribedby }" class="m-0">
          <b-form-checkbox
            v-for="option in options"
            v-model="selected"
            :key="option.value"
            :value="option.value"
            :aria-describedby="ariaDescribedby"
            name="flavour-4a"
            checked="style=''"
            inline
          >
            {{ option.text }}
          </b-form-checkbox>
        </b-form-group></b-col
      >
    </b-row>
    <b-row class="align-items-cente mt-4">
      <b-col class="">
        <b-form-checkbox size="md"
          ><b> Do you wish to suggest a Case Consultant ? </b></b-form-checkbox
        >
      </b-col>
    </b-row>
    <b-row class="align-items-cente mt-4">
      <b-col class="">
        <p class="m-0 theme-text-color mb-3"><b> Add Case Consultant Details </b></p>
        <div class="card main-card provider-card p-4 w-50 py-5 border-dashed">
          <!----><!---->
          <div class="card-body">
            <!----><!---->
            <div class="card-body p-1 btn text-center w-100">
              <!----><!---->
              <div class="row justify-content-center mt-0">
                <div class="col-11 text-center p-0 mt-0 mb-0">
                  <button
                    class="
                      btn btn-secondary btn
                      bg-themecolor
                      border-0
                      rounded-circle
                      add-medications
                   
                    "
                    type="button"
                  >
                    <img src="/src/assets/images/addcase@3x.svg" /></button
                  ><br />
                  <p class="attorney-name m-0 mt-2 theme-text-color p-0">
                    <strong> Add Case Consultant </strong>
                  </p>
                </div>
              </div>
              <!--teleport start--><!--teleport end-->
            </div>
          </div>
          <!----><!----><!---->
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Yes", value: 1 },
        { text: "No", value: 0 },
      ],
    };
  },
};
</script>
<style>
.c-box > fieldset {
  margin-bottom: 0px !important;
}
.form-check-input:checked {
  background-color: #3d6083;
  border-color: #3d6083;
}
.form-check > label {
  font-size: 16px;
}
.add-medications {
    padding: 29px 33px;
 
}
.border-dashed{
    border-style: dashed;
}
</style>