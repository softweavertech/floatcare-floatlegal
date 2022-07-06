import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            // route level code-splitting
            // this generates a separate chunk for this route
            // which is lazy-loaded when the route is visited.
            path: "/",
            name: "home",
            component: () =>
                import ("@/components/Login/Login.vue"),
        },
        {
            path: "/forgot-password",
            name: "ForgotPassword",
            component: () =>
                import ("@/components/Login/ForgotPassword.vue"),
        },
        {
            path: "/create-account",
            name: "CreateAccount",
            component: () =>
                import ("@/components/Login/CreateAccount.vue"),
        },
        {
            path: "/account-owner",
            name: "AccountOwner",
            component: () =>
                import ("@/components/Login/AccountOwner.vue"),
        },
        {
            path: "/verification-code",
            name: "VerificationCode",
            component: () =>
                import ("@/components/Login/VerificationCode.vue"),
        },
        {
            path: "/create-password",
            name: "CreatePassword",
            component: () =>
                import ("@/components/Login/CreatePassword.vue"),
        },
        {
            path: "/sucess-page",
            name: "sucess-page",
            component: () =>
                import ("@/components/Login/sucess-page.vue"),
        },
        {
            path: "/invite-page",
            name: "InvitePage",
            component: () =>
                import ("@/components/Login/InvitePage.vue"),
        },
        {
            path: "/account-owner-details",
            name: "AccountOwnerDetails",
            component: () =>
                import ("@/components/Login/AccountOwnerDetails.vue"),
        },
        {
            path: "/provider-business-details",
            name: "ProviderBusinessDetails",
            component: () =>
                import ("@/components/Login/ProviderBusinessDetails.vue"),
        },
        {
            path: "/pricing-plan",
            name: "PricingPlan",
            component: () =>
                import ("@/components/Plan/PricingPlan.vue"),
        },
        {
            path: "/order-summary",
            name: "OrderSummary",
            component: () =>
                import ("@/components/Plan/OrderSummary.vue"),
        },
        {
            path: "/summary-receipt",
            name: "SummaryReceipt",
            component: () =>
                import ("@/components/Plan/SummaryReceipt.vue"),
        },
        {
            path: "/success-page",
            name: "SuccessPage",
            component: () =>
                import ("@/components/Login/SuccessPage.vue"),
        },
        {
            path: "/welcome-page",
            name: "WelcomePage",
            component: () =>
                import ("@/components/Login/WelcomePage.vue"),
        },
        {
            path: "/email-send",
            name: "EmailSend",
            component: () =>
                import ("@/components/Login/EmailSend.vue"),
        },
        {
            path: "/dashboard",
            component: () =>
                import ("@/components/MainLayout.vue"),
            children: [{
                    path: "/dashboard",
                    name: "dashboard",
                    component: () =>
                        import ("@/components/Dashboard/Dashboard.vue"),
                },
                {
                    path: "/messenger/chat",
                    name: "ChatMainLayout",
                    component: () =>
                        import ("@/components/ChatModule/ChatMainLayout.vue"),
                },
            ],
        },
        {
            path: "/client-cases",
            component: () =>
                import ("@/components/MainLayout.vue"),
            children: [{
                    path: "/client-cases",
                    name: "CaseDashboard",
                    component: () =>
                        import ("@/components/ClientCases/clientCase.vue"),
                },
                {
                    path: "/client-cases/case-info",
                    name: "CaseInfo",
                    component: () =>
                        import ("@/components/ClientCases/CaseInfo.vue"),
                },
                {
                    path: "/client-cases/outbound-cases",
                    name: "outboundCases",
                    component: () =>
                        import ("@/components/ClientCases/OutboundCases.vue"),
                },
                {
                    path: "/client-cases/pending-acceptance",
                    name: "pendingAcceptance",
                    component: () =>
                        import ("@/components/ClientCases/PendingAcceptance.vue"),
                },
                {
                    path: "/client-cases/co-counsel-cases",
                    name: "coCounselCases",
                    component: () =>
                        import ("@/components/ClientCases/coCounselCases.vue"),
                },
                {
                    path: "/client-cases/create-case",
                    name: "CreateCase",
                    component: () =>
                        import ("@/components/ClientCases/CreateCase.vue"),
                },
                {
                    path: "/client-cases/evaluations",
                    name: "Evaluations",
                    component: () =>
                        import ("@/components/ClientCases/Evaluations.vue"),
                },
                {
                    path: "/client-cases/evaluation-view",
                    name: "EvaluationView",
                    component: () =>
                        import ("@/components/ClientCases/EvaluationView.vue"),
                },
                {
                    path: "/client-cases/create-evaluation",
                    name: "/CreateCaseForm",
                    component: () =>
                        import ("@/components/ClientCases/CreateCaseForm.vue"),
                },
                {
                  path: "/client-cases/accept-evalution",
                  name: "AcceptEvalution",
                  component: () => import("@/components/ClientCases/AcceptEvalution.vue"),
                },
            ],
        },

        {
            path: "/clients",
            component: () =>
                import ("@/components/MainLayout.vue"),
            children: [{
                    path: "/clients",
                    name: "Clients",
                    component: () =>
                        import ("@/components/Clients/Clients.vue"),
                },

                {
                    path: "/client-basic-navbar",
                    component: () =>
                        import ("@/components/Clients/Shared/ClientBasicNavbar.vue"),
                    children: [{
                            path: "/associated-cases",
                            name: "AssociatedCases",
                            component: () =>
                                import ("@/components/Clients/AssociatedCases.vue"),
                        },
                        {
                            path: "/associated-referrals",
                            name: "AssociatedReferrals",
                            component: () =>
                                import ("@/components/Clients/AssociatedReferrals.vue"),
                        },
                        {
                            path: "/client-basic-information",
                            name: "ClientBasicInformation",
                            component: () =>
                                import ("@/components/Clients/ClientBasicInformation.vue"),
                        },
                        {
                            path: "/client-care-provider",
                            name: "ClientCareProvider",
                            component: () =>
                                import ("@/components/Clients/ClientCareProvider.vue"),
                        },
                        {
                            path: "/health-insurance",
                            name: "HealthInsurance",
                            component: () =>
                                import ("@/components/Clients/HealthInsurance.vue"),
                        },
                        {
                            path: "/medical-events",
                            name: "MedicalEvents",
                            component: () =>
                                import ("@/components/Clients/MedicalEvents.vue"),
                        },
                    ],
                },
                {
                    path: "/edit-health-insurancenav",
                    component: () =>
                        import ("@/components/Clients/Shared/EditHealthInsuranceNav.vue"),
                    children: [{
                        path: "/edit-health-insurance",
                        name: "EditHealthInsurances",
                        component: () =>
                            import ("@/components/Clients/EditHealthInsurance.vue"),
                    }, ],
                },
            ],
        },

        {
            path: "/firm-info",
            component: () =>
                import ("@/components/MainLayout.vue"),
            children: [{
                    path: "/firm-info",
                    name: "FirmInfo",
                    component: () =>
                        import ("@/components/LawFirmInfo/FirmInfo.vue"),
                },
                {
                    path: "/firm-info/lawoffice",
                    name: "SuccessPage",
                    component: () =>
                        import ("@/components/LawFirmInfo/LawOffice.vue"),
                },
            ],
        },
        {
            path: "/document-center",
            component: () =>
                import ("@/components/MainLayout.vue"),
            children: [{
                    path: "/document-center/intake-form",
                    name: "intakeform",
                    component: () =>
                        import ("@/components/Document/Documentcenter.vue"),
                },
                {
                    path: "/document-center/create-form",
                    name: "CreateForm",
                    component: () =>
                        import ("@/components/Document/CreateForm.vue"),
                },
                {
                    path: "/document-center/template-library",
                    name: "TemplateLibrary",
                    component: () =>
                        import ("@/components/Document/TemplateLibrary.vue"),
                },
                {
                    path: "/document-center/documents",
                    name: "Documents",
                    component: () =>
                        import ("@/components/Document/Documents.vue"),
                },
                {
                    path: "/document-center/document-setting",
                    name: "DocumentSetting",
                    component: () =>
                        import ("@/components/Document/DocumentSetting.vue"),
                },
            ],
        },
        {
            path: "/messenger",
            component: () =>
                import ("@/components/MainLayout.vue"),
            children: [{
                    path: "/messenger",
                    name: "ScanChat",
                    component: () =>
                        import ("@/components/ChatModule/ScanChat.vue"),
                },
                {
                    path: "/messenger/chat",
                    name: "ChatMainLayout",
                    component: () =>
                        import ("@/components/ChatModule/ChatMainLayout.vue"),
                },
            ],
        },
    ],
});

export default router;