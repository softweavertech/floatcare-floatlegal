<template>
    <section class="section ">
        <b-row>
            <b-col lg="12">
                <div class="w-100">
                    <a type="button" class="cancel-btn mr-3 pull-right rotate-cancel" @click="closeModel" tabindex="-1" id="cancel">
                    <svg width="30px" height="30px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>Close</title>
                        <g id="Float-Legal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Client-cases/Referraks-/Add-Preferraed-Provider" transform="translate(-1259.000000, -91.000000)">
                                <g id="Group-8" transform="translate(263.000000, 68.000000)">
                                    <g id="Group-20" transform="translate(996.000000, 23.000000)">
                                        <circle id="Oval" fill-opacity="0.2" fill="#173E67" cx="22" cy="22" r="22"></circle>
                                        <g id="Group" transform="translate(10.000000, 10.000000)">
                                            <rect id="Icon-Spacing" fill="#4394AD" opacity="0" x="0" y="0" width="24" height="24" rx="5"></rect>
                                            <path d="M9.22951453,12 L5.07378633,7.8442718 C4.30873789,7.07922336 4.30873789,5.83883476 5.07378633,5.07378633 C5.83883476,4.30873789 7.07922336,4.30873789 7.8442718,5.07378633 L12,9.22951453 L16.1557282,5.07378633 C16.9207766,4.30873789 18.1611652,4.30873789 18.9262137,5.07378633 C19.6912621,5.83883476 19.6912621,7.07922336 18.9262137,7.8442718 L14.7704855,12 L18.9262137,16.1557282 C19.6912621,16.9207766 19.6912621,18.1611652 18.9262137,18.9262137 C18.1611652,19.6912621 16.9207766,19.6912621 16.1557282,18.9262137 L12,14.7704855 L7.8442718,18.9262137 C7.07922336,19.6912621 5.83883476,19.6912621 5.07378633,18.9262137 C4.30873789,18.1611652 4.30873789,16.9207766 5.07378633,16.1557282 L9.22951453,12 L9.22951453,12 Z" id="Path" fill="#173E67"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    </a>
                </div>
            </b-col>
        </b-row>
        <div class="columns ">
         <b-row class="align-items-center d-flex text-center">
                <b-col lg="12">
                    <img :src="confirmIcon">
                </b-col>
                <h4 class="primary-dark font-16 fw-bold px-5 py-3">
                    By unselecting the checkbox those uploaded documents will be deleted.
                </h4>
                <b-button @click="closeModel" class="continue-btn text-white border-0 border-radius-10 py-2 font-12  w-25 mx-auto my-2  pull-right px-2" >
                    Continue
                </b-button>
        </b-row>
        </div>
    </section>
</template>
<script>
import confirmIcon from "@/assets/images/FLIcons/ManualEntry/Comfirm@3x.svg"

export default {
props:["closeModel"],
 components: {
   
 },
  data: function () {
    return {
        confirmIcon
};
  },
}
</script>

<style lang="scss">
.rotate-cancel{
  transition-delay: 1s;
  transition: transform 0.5s;
}
.font-12{
    font-size: 12px;
}
.rotate-cancel:hover {
   transform: rotate(90deg);
}
.continue-btn{
    background-color: #3E8ACC ;
}
</style>