<template>
    <section class="section p-4">
        <div class="columns">


            <div class="column is-4 is-offset-4 verifyOtp" v-if="!isLopUpload">
                <div class="d-flex  mr-2 mt-2">
                    <h2 class="me-auto">Verification Code</h2> <a type="button" @click="closeChatAuth"
                        class="cancel-btn" tabindex="-1">
                        <img src="@/assets/images/Icons/ic_cancel-greay.svg" />
                    </a>
                </div>

                <p class="thanks-wrap d-flex    align-items-center">Enter the Verification code sent
                    to
                    {{phoneNumber}}<strong>{{message}} </strong>
                </p>
                <div class="verification-wrap pt-4">
                    <b-alert show variant="success" v-if="otpSucess" class="text-center">OTP Sent Successfully</b-alert>
                    <b-alert show variant="success" v-if="otpVerified" class="text-center">OTP verified Successfully
                    </b-alert>
                    <p class="sub-title error-msg" v-if="!otpSucess && auth.error">Invalid OTP given.</p>
                    <form method="POST" @submit.prevent="">

                        <div class="d-flex justify-content-left">
                            <v-otp-input ref="otpInput" input-classes="otp-input" separator=" &nbsp; &nbsp; &nbsp; "
                                :num-inputs="5" :should-auto-focus="true" :is-input-num="true"
                                @on-change="handleOnChange" @on-complete="handleOnComplete" />
                        </div>
                        <div class="row pt-4 inbound-chat">
                            <div class="col-6 d-flex justify-content-center align-items-center align-self-center">
                                <a href="javaScript:;" class="btn btn-light resend-btn px-3 py-2">Resend code</a>
                            </div>
                            <div class="col-6 text-right d-flex justify-content-center align-items-center">
                                <button class="btn btn-primary  submit-btn px-5 py-2"
                                    @click="submitOtp()">Verify</button>

                            </div>
                            <b-modal id="chatpop" ref="chatpop" size="xl" content-class="create-chatmodal" centered
                            hide-header hide-footer no-close-on-backdrop>
                            <chatpop :noteGroupId="noteGroupId" :sourceId="sourceId" :closeInboundChat="closeInboundChat">
                            </chatpop>
                        </b-modal>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

    import chatpop from '@/components/Dashboard/Referrals/ManageReferrals/chatpop.vue';
    //   import {
    //     required,
    //     requiredUnless,
    //     minLength,
    //     between,
    //     phone,
    //     email
    //   } from 'vuelidate/lib/validators' 

    export default {
        name: 'LoginAuth',
        props: ['patientId', 'sourceId', 'closeChatAuth', 'submitLop'],
        components: {
            chatpop 
            },
        data() {
            return {
                isDeclaration: false,
                organizationType: '',
                newFileName: {},
                fileName: "",
                isLopUpload: false,
                users: false,
                auth: {
                    token: '',
                    status: '',
                    error: ''
                },
                passwordVerification: '',
                username: '',
                message: '',
                otpSucess: false,
                email: '',
                noteGroupId: '',
                phoneNumber: '',
                otpVerified: false
            }
        },

        mounted() {

        },
        methods: {
             async closeChatAuth(){ 
                this.$bvModal.hide('verifyNotes')	
            },

             async submitOtp(){ 
                this.$bvModal.hide('verifyNotes')	
                this.$bvModal.show('chatpop')	
            },
        }
    }
</script>

<style lang="scss">
</style>