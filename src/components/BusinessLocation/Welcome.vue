<style>
  .offcanvas-end {
    width: 535px;
}
</style>
<template>
  <b-container class="bv-example-row">
    <b-row>
      <div class="mt-4">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Create Business</button>
      </div>

      <div class="offcanvas offcanvas-end w-45" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h2 id="offcanvasRightLabel">Create Business</h2>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-businessman"
              label="Business name*"
              label-for="input-1"
            >
              <b-form-input
                id="input-businessman"
                v-model="form.businessman"
                type="text"
                placeholder="Input Business name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-businesstype" label="Business type*" label-for="input-2">
              <b-form-select
                id="input-businesstype"
                v-model="form.businesstype"
                :options="businesstype"
                required
              ></b-form-select>

            </b-form-group>
            <b-row>
              <b-col sm="5" md="6">
                <b-form-group id="input-group-phonenumber" label="Phone number*" label-for="input-3">
                  <b-form-input
                    id="input-phonenumber"
                    v-model="form.phonenumber"
                    type="text"
                    placeholder="Input Phone number"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="5" offset-sm="2" md="6" offset-md="0">
                <b-form-group
                  id="input-group-email"
                  label="Email address:"
                  label-for="input-email"
                >
                  <b-form-input
                    id="input-email"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group
              id="input-group-suite"
              label="Suite*"
              label-for="input-suite"
            >
              <b-form-input
                id="input-suite"
                v-model="form.suite"
                type="text"
                placeholder="Input Suite"
                required
              ></b-form-input>
            </b-form-group>
            <b-row>
              <b-col sm="5" md="6">
                <b-form-group id="input-group-3" label="Start time" label-for="input-3">
                  <b-form-input
                    id="input-1"
                    v-model="form.starttime"
                    type="text"
                    placeholder="Input Start time"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="5" offset-sm="2" md="6" offset-md="0">
                <b-form-group
                  id="input-group-1"
                  label="Close time"
                  label-for="input-1"
                >
                <b-form-select
                  id="input-3"
                  v-model="form.closetime"
                  :options="closetime"
                  placeholder="Select close time"
                  required
                ></b-form-select>

                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="5" md="6">
                <b-form-group id="input-group-city" label="City*" label-for="input-3">
                  <b-form-input
                    id="input-city"
                    v-model="form.city"
                    type="text"
                    placeholder="Input City"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="5" offset-sm="2" md="6" offset-md="0">
                <b-form-group
                  id="input-group-state"
                  label="State*"
                  label-for="input-state"
                >
                <b-form-select
                  id="input-3"
                  v-model="form.state"
                  :options="state"
                  placeholder="Select State"
                  required
                ></b-form-select>

                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="5" md="6">
                <b-form-group id="input-group-zipcode" label="Zip code*" label-for="input-3">
                  <b-form-input
                    id="input-zipcode"
                    v-model="form.zipcode"
                    type="text"
                    placeholder="Input zip code"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="5" offset-sm="2" md="6" offset-md="0">
                <b-form-group
                  id="input-group-country"
                  label="Country*"
                  label-for="input-country"
                > 
                <b-form-input
                    id="input-zipcode"
                    v-model="form.country"
                    type="text"
                    placeholder="Input Country"
                    required
                  ></b-form-input>

                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group
              id="input-group-description"
              label="Description"
              label-for="input-1"
            >
            <b-form-textarea
              id="input-description"
              v-model="text"
              placeholder="Enter something..."
              max-rows="6"
              style="height: 100px;"
            ></b-form-textarea>
            </b-form-group>
            <b-form-group
              id="input-group-coverimage"
              label="Cover image(s)"
              label-for="input-1"
            >
            <input type="file" id="input-coverimage" multiple>
            </b-form-group>
            <h3 class="mt-5 mb-3">Reporting Manager</h3>
            <b-row>
              <b-col sm="5" md="6">
                <b-form-group id="input-group-firstname" label="First name" label-for="input-3">
                  <b-form-input
                    id="input-firstname"
                    v-model="form.firstname"
                    type="text"
                    placeholder="Input First name"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="5" offset-sm="2" md="6" offset-md="0">
                <b-form-group
                  id="input-group-lastname"
                  label="Last name"
                  label-for="input-lastname"
                > 
                <b-form-input
                    id="input-lastname"
                    v-model="form.lastname"
                    type="text"
                    placeholder="Input Last name"
                    required
                  ></b-form-input>

                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group
              id="input-group-role"
              label="Role"
              label-for="input-role"
            >
            <b-form-select
              id="input-3"
              v-model="form.role"
              :options="role"
              placeholder="Select Role"
              required
            ></b-form-select>
            </b-form-group>
            <b-form-group
              id="input-group-rolesapplicable"
              label="Roles applicable"
              label-for="input-1"
            >
            <b-form-select
              id="input-rolesapplicable"
              v-model="form.rolesapplicable"
              :options="rolesapplicable"
              placeholder="Select Roles applicable"
              required
            ></b-form-select>
            </b-form-group>
            <b-row>
              <div>
                <b-button type="submit" class="mb-2" variant="primary">Save</b-button>
              </div>
            </b-row>
            <div class="d-grid gap-2">
              <b-button type="button" class="" variant="primary">Skip</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </b-row>
  </b-container>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        businesstype: [{ text: 'Select One', value: null }, 'test1', 'test1', 'test1', 'test1'],
        closetime: [{ text: 'Select One', value: null }, 'test1', 'test1', 'test1', 'test1'],
        state: [{ text: 'Select state', value: null }, 'test1', 'test1', 'test1', 'test1'],
        role: [{ text: 'Select state', value: null }, 'test1', 'test1', 'test1', 'test1'],
        rolesapplicable: [{ text: 'Select state', value: null }, 'test1', 'test1', 'test1', 'test1'],
        show: true
      }
    },
    mounted() {
      document.getElementById('offcanvasRight').addEventListener('hidden.bs.offcanvas', function () {
      // do something...
     document.getElementById('offcanvasRight').show
      })
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },

  }
</script>