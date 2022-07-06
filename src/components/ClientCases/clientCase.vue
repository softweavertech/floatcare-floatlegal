<style lang="scss">
.clientcard {
  width: 200px;
  height: 250px;
}
.viewcase {
    background-color: #e9ecef;
    padding: 9px 10px;
    border-radius: 10px;
    color: #2b4a65;
    text-decoration: none;
}
.viewcard {
   width: 180px;
    height: auto;
    border-radius: 15px;
    
}
.bgmain {
    background-image: url(../src/assets/images/BGwithcolor.svg);
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-position: center;
    margin: 0;
    position: relative;
    padding: 30px 0px;
}
.caseimg {
    width: 190px;
    position: absolute;
    right: 65px;
    height: 261px;
    bottom: 0;
}
.caseinfo{
  display: grid;
    place-items: center;
}


</style>

<template>
  <div class="container-fluid">
    <div class="fc-card">
      <b-container fluid>
        <div>
        <b-row class="bgmain">
          <b-col cols="7" class="caseinfo"> 
            <b-row>
               <b-col cols="4">
            <b-card class="viewcard text-center">
              <span class="mb-3 mt-3"><img :src="caseInfo" alt="" /></span>
              <b-card-text class="mb-4 mt-3">
                Case Info
              </b-card-text>
              <span><router-link class="viewcase" to="/client-cases/case-info">View Cases</router-link></span>
            </b-card>
          </b-col>
           <b-col cols="4">
             <b-card class="viewcard text-center">
               <span class="mb-3 mt-3"><img :src="Evaluation" alt="" /></span>
              <b-card-text class="mb-4 mt-3">
                Case Info
              </b-card-text>
                <span><router-link class="viewcase" to="/client-cases/evaluations">View Evaluation</router-link></span>
             
            </b-card>
          </b-col>
           <b-col cols="4">
            <b-card class="viewcard text-center">
              <span class="mb-3 mt-3"><img :src="Reminders" alt="" /></span>
              <b-card-text class="mb-4 mt-3">
                Case Info
              </b-card-text>
              <span class="viewcase">View Cases</span>
            </b-card>
          </b-col>
            </b-row>
          </b-col>
          <b-col cols="5 text-end">
          <img :src="Case" alt="" class="caseimg" /></b-col>
          </b-row>
          
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import BGwithcolor from "@/assets/images/BGwithcolor.svg";
import CaseInfo from "@/assets/images/Caseinfo.svg";
import Evaluation from "@/assets/images/Evaluation.svg";
import Reminders from "@/assets/images/Reminders.svg";
import Case from "@/assets/images/Case.svg";

export default {
  data() {
    return {
      BGwithcolor: BGwithcolor,
      caseInfo: CaseInfo,
      Evaluation:Evaluation,
      Reminders:Reminders,
      Case:Case,
    };
  },
  mounted() {},
  methods: {},
};
</script>
