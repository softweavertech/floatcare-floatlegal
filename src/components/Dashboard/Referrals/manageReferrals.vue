<template>
    <div class="container-fluid main-container-bg p-4">
        <div class="boder-radius-15 bg-white overflow-hidden">
            <div class="manage-referral-top">
                <div class="d-flex align-items-center  p-4 pb-0 ">
                    <h1 class="me-auto">Manage Referrals</h1>
                    <button class="btn btn-outline-secondary"><svg width="24px" height="24px" viewBox="0 0 24 24"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Icons/ic_add_circle</title>
                            <defs>
                                <path
                                    d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 L17,13 Z"
                                    id="path-1"></path>
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
                                            <use id="Color" stroke="none" fill="#0070FF" fill-rule="evenodd"
                                                xlink:href="#path-3"></use>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg> Create Referral</button>
                </div>
                <div class="border-bottom px-2">
                    <b-nav class="bread-crumb-nav pt-3 mr-auto">
                        <b-nav-item v-for="link in breadCrumb" :to="link.url" :key="link.value" :value="link.name"
                            @click="tabsClick(link.value, link.url)" :class="{ active : displayItem === link.value}">
                            {{ link.name }}
                        </b-nav-item>
                    </b-nav>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default ({
        data() {
            return {
                displayItem: 'inboundReferrals',
                breadCrumb: [{
                        url: "/referrals/inbound-referrals",
                        name: "Inbound Referrals",
                        value: 'inboundReferrals'
                    },
                    {
                        url: "/referrals/outbound-referrals",
                        name: "Outbound Referrals",
                        value: 'outboundReferrals'
                    },

                ],
            };
        },
        methods: { 
            tabsClick(value, link) { 
                this.displayItem =  value 
                this.$router.push(link);
            },
        }
    })
</script>