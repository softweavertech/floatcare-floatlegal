<template>
    <section class="section p-4">
        <div class="row">
            <div class="col-lg-9">
                <h3>Samantha Kitta</h3>
            </div>
              <div class="col-lg-3">
                
            </div>
        </div>
    </section>
</template>
<script> 
    export default {
        name: 'Chat modal', 

        data() {
            return { 
            }
        },

        mounted() {

        },
        methods: {
            async closeChatAuth(){ 
                this.$bvModal.hide('verifyNotes')	
            },
        }
    }
</script>

<style lang="scss">
</style>