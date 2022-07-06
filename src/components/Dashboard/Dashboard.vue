<style lang="scss">
.message-request h6 {
	color: #5c63ab;
}

.fs-14 {
	font-size: 14px;
}

.fs-10 {
	font-size: 10px;
}

.dashboard-main {
	padding: 30px;
	margin: 20px;
	border-radius: 20px;
	background: white;
}

.fc-card-dashboard {
	border: 1px solid #f0ecec;
	background: #fff;
	border-radius: 20px;
	padding: 12px;
	position: relative;
}

.fc-card-black {
	border: 1px solid #eff0f6;
	background: #eff0f6;
	border-radius: 15px;
	padding: 10px 20px !important;
	height: 65px;
}

.fc-btn-black strong {
	color: #6c757d;
}

#input-search {
	border-radius: 20px !important;
	color: #dee2e6;
	border-color: #dee2e6;
}

.btn-search,
.btn-search:hover {
	background-color: #fff !important;
	color: #6c757d;
	border-color: #dee2e6;
	border-radius: 5px !important;
	width: 100%;
	padding: 6px 4px;
	font-size: 13px;
	font-weight: bold;
}

.btn.btn-link.btn-lg.dropdown-toggle.dropdown-toggle-no-caret.text-decoration-none {
	border-radius: 2px solid #6c757d !important;
}

.btn-lg,
.btn-group-lg>.btn {
	padding: 0 !important;
	font-size: 1.25rem;
	border-radius: 0.3rem;
}

.search-div {
	position: relative;
}

span.input-group-addon {
	position: absolute;
	top: 8px;
	left: 17px;
	z-index: 10;
	color: #929eaa;
}

b-container-fluid {
	width: 100%;
	overflow: hidden;
}

.dashboard-bg {
	background-image: url(../../src/assets/images/BGWithColor@3x.svg);
	background-repeat: no-repeat;
	background-position: center;
	color: white;
	border-radius: 25px;
	background-size: cover;
}

img.dashboard-girl {
	position: absolute;
	height: 230px;
	bottom: 0;
}

span.price {
	color: #5c63ab;
	font-size: 32px;
	font-weight: 600;
}

span.percentage {
	position: relative;
	margin: 0 10px;
	border-radius: 12px;
	opacity: 1;
	background-color: rgba(255, 179, 15, 0.2);
	font-size: 12px;
}

.message-request h6 {
	float: left;
}

.message-request p {
	float: right;
}

small.text-muted {
	font-size: 10px;
}

p.time {
	font-size: 10px;
}

.col-md-3.calander {
	border: 1px solid #f0f2f4;
	margin: 0px;
	padding: 10px 20px;
	border-radius: 10px;
}

.row.mt-4.client-card {
	background: #f5f4f4;
	padding: 10px;
	border-radius: 10px;
	margin: 0px;
}

.vc-container.vc-blue.current_calendar {
	width: 100%;
	margin-bottom: 20px;
}

h6 {
	opacity: 1;
	color: #1f3d5a;
	font-size: 18px;
	font-weight: 600;
	font-style: normal;
	letter-spacing: 0.13px;
	text-align: left;
	line-height: 20px;
}

.bg-action-need {
	background: #f93d3d;
	padding: 5px 8px;
	border-radius: 20px;
	color: white;
}

.bg-pending {
	background: #3d6083;
	padding: 5px 14px;
	border-radius: 20px;
	color: white;
}

.apex-dot-yellow {
	color: #FFB30F;
}

.apex-dot-blue {
	color: #3E8ACC;
}

.center-item {
	display: grid !important;
	place-content: center !important;
}
</style>
<template>
	<b-container-fluid class="dashboard-main 12">
		<b-row class="">
			<b-col cols="12" md="9" lg="9">
				<div class="dashboard-bg align-items-center position-relative mb-4">
					<b-row class="">
						<b-col cols="8">
							<div class="bg p-4">
								<h2 class="text-white">Hello John deo,</h2>
								<small>Here are your important tasks, updates and alerts. You can set your in
									app preferences here.</small>
								<b-row class="mt-3">
									<b-col cols="4"><small>Business location:</small></b-col>
									<b-col cols="4">
										<b-form-group id="input-group">
											<b-form-select id="input-gender" size="sm" v-model="selected" :options="options" required>
											</b-form-select>
										</b-form-group>
									</b-col>
								</b-row>
							</div>
						</b-col>

						<b-col cols="4">
							<div class="relative">
								<img class="dashboard-girl" :src="dashboardGirl" alt="" />
							</div>
						</b-col>
					</b-row>
				</div>
				<b-row>
					<b-col md="6" sm="12" lg="3">
						<div class="fc-card-dashboard mb-2">
							<div class="dashboard-price">
								<span class="float-left">
									<h6>New Cases</h6>
									<span class="price">178</span>
								</span>

								<span class="percentage">+ 2.3 <span><img :src="Stats" alt="" /></span>
									<img :src="dashboardTrending_up" alt="" />
								</span>
							</div>
							<div class="fc-card-black text-center mt-2 mb-2">
								<img :src="NewCase" alt="" />
							</div>
						</div>
					</b-col>
					<b-col md="6" sm="12" lg="3">
						<div class="fc-card-dashboard mb-2">
							<div class="dashboard-price">
								<span class="float-left">
									<h6>Total Cases</h6>
									<span class="price">234</span>
								</span>

								<span class="percentage">+ 2.3<span><img :src="Stats" alt="" /></span>
									<img :src="dashboardTrending_up" alt="" />
								</span>
							</div>

							<div class="fc-card-black text-center mt-2 mb-2">
								<img :src="NewCase" alt="" />
							</div>
						</div>
					</b-col>
					<b-col md="6" sm="12" lg="3">
						<div class="fc-card-dashboard mb-2">
							<div class="dashboard-price">
								<span class="float-left">
									<h6>New Clients</h6>
									<span class="price">1250</span>
								</span>

								<span class="percentage">+ 2.3<span><img :src="Stats" alt="" /></span>
									<img :src="dashboardTrending_up" alt="" />
								</span>
							</div>
							<div class="fc-card-black text-center mt-2 mb-2">
								<img :src="NewClients" alt="" />
							</div>
						</div>
					</b-col>
					<b-col md="6" sm="12" lg="3">
						<div class="fc-card-dashboard mb-2">
							<div class="dashboard-price">
								<span class="float-left">
									<h6>Total Clients</h6>
									<span class="price">233</span>
								</span>
								<span class="percentage">+ 2.3<span><img :src="Stats" alt="" /></span>
									<img :src="dashboardTrending_up1" alt="" />
								</span>
							</div>

							<div class="fc-card-black text-center mt-2 mb-2">
								<img :src="NewClients" alt="" />
							</div>
						</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="6" md="6" lg="6">
						<b-card body-class="p-0" class="custom-radius">
							<div class="p-3">
								<h5 class="m-0">Pending cases</h5>
							</div>
							<hr class="m-0" />
							<b-row>
								<b-col sm="6" md="6" lg="6">
									<apexchart type="radialBar" height="250" :options="chartOptionsReferrals" :series="ReferralsSeries">
									</apexchart>
								</b-col>
								<b-col sm="6" md="6" lg="6" class="center-item">
									<div>
										<i class="fa fa-square apex-dot-yellow px-3" aria-hidden="true"></i>
										<small>Current week 75.26%</small>
									</div>
									<div>
										<i class="fa fa-square apex-dot-blue px-3" aria-hidden="true"></i>
										<small> Last week 75.26%</small>
									</div>
								</b-col>
							</b-row>
						</b-card>
					</b-col>
					<b-col sm="6" md="6" lg="6">
						<b-card body-class="p-0" class="custom-radius">
							<div class="p-3">
								<h5 class="m-0">Completed Cases</h5>
							</div>
							<hr class="m-0" />
							<b-row>
								<b-col sm="6" md="6" lg="6">
									<apexchart type="radialBar" height="250" :options="chartOptionsReferrals" :series="ReferralsSeries">
									</apexchart>
								</b-col>
								<b-col sm="6" md="6" lg="6" class="center-item">
									<div>
										<i class="fa fa-square apex-dot-yellow px-3" aria-hidden="true"></i>
										<small>Current week 75.26%</small>
									</div>
									<div>
										<i class="fa fa-square apex-dot-blue px-3" aria-hidden="true"></i>
										<small> Last week 75.26%</small>
									</div>
								</b-col>
							</b-row>
						</b-card>
					</b-col>
				</b-row>
			</b-col>
			<b-col md="3" class="calander">
				<b-row>
					<DatePicker class="current_calendar" />
				</b-row>
				<b-row>
					<div class="message-box px-3">
						<div class="message-request">
							<div class="fw-bolder text-blue">Today’s appointments</div>
						</div>
					</div>
				</b-row>
				<div class="mt-4 client-card">
					<div class="d-flex background-grey py-2 px-1 mb-3 custom-radius-10">
						<span>
							<img width="50" :src="dashboardUser" alt="" />
						</span>
						<span class="fw-bold text-blue fs-14">Samantha Oliva
							<small class="text-muted"> Appointment a for 04/01/2022 </small>
						</span>
						<small class="time fs-10">05:23 AM</small>
					</div>
					<div class="d-flex background-grey py-2 px-1 mb-3 custom-radius-10">
						<span>
							<img width="50" :src="dashboardUser" alt="" />
						</span>
						<span class="fw-bold text-blue fs-14">Samantha Oliva
							<small class="text-muted"> Appointment a for 04/01/2022 </small>
						</span>
						<small class="time fs-10">05:23 AM</small>
					</div>
					<div class="d-flex background-grey py-2 px-1 mb-3 custom-radius-10">
						<span>
							<img width="50" :src="dashboardUser" alt="" />
						</span>
						<span class="fw-bold text-blue fs-14">Samantha Oliva
							<small class="text-muted"> Appointment a for 04/01/2022 </small>
						</span>
						<small class="time fs-10">05:23 AM</small>
					</div>
					<div class="d-flex background-grey py-2 px-1 mb-3 custom-radius-10">
						<span>
							<img width="50" :src="dashboardUser" alt="" />
						</span>
						<span class="fw-bold text-blue fs-14">Samantha Oliva
							<small class="text-muted"> Appointment a for 04/01/2022 </small>
						</span>
						<small class="time fs-10">05:23 AM</small>
					</div>
				</div>
			</b-col>
		</b-row>
		<b-row class="mt-4">
			<b-col sm="7" md="7" lg="7">
				<b-card body-class="p-0" class="custom-radius">
					<div class="p-3">
						<h5 class="fw-bold m-0">Pending Actions</h5>
					</div>
					<hr class="m-0" />
					<div class="todo-list p-4">
						<div class="item">
							<b-row>
								<b-col sm="6" md="6" lg="6" class="px-3">
									<b-row class="border mb-3 custom-radius-10 py-2 d-flex align-items-center">
										<b-col sm="7" md="7" lg="7" class="pe-0 mr-0">
											<div class="d-flex align-items-center">
												<span>
													<img width="55" :src="dashboardUser" alt="" />
												</span>
												<span class="fw-bold text-blue fs-14 ps-1">
													<div>Samantha Oliva</div>
													<small class="text-muted"> Case no. : 20482048</small>
												</span>
											</div>
										</b-col>
										<b-col sm="5" md="5" lg="5" class="pe-0 mr-0">
											<span size="sm" class="font-12 bg-action-need">Action Needed</span>
										</b-col>
									</b-row>
								</b-col>
								<b-col sm="6" md="6" lg="6" class="px-3">
									<b-row class="border mb-3 custom-radius-10 py-2 d-flex align-items-center">
										<b-col sm="7" md="7" lg="7" class="pe-0 mr-0">
											<div class="d-flex align-items-center">
												<span>
													<img width="55" :src="dashboardUser" alt="" />
												</span>
												<span class="fw-bold text-blue fs-14 ps-1">
													<div>Samantha Oliva</div>
													<small class="text-muted"> Case no. : 20482048</small>
												</span>
											</div>
										</b-col>
										<b-col sm="5" md="5" lg="5" class="pe-0 mr-0">
											<span size="sm" class="font-12 bg-pending">Action Needed</span>
										</b-col>
									</b-row>
								</b-col>
								<b-col sm="6" md="6" lg="6" class="px-3">
									<b-row class="border mb-3 custom-radius-10 py-2 d-flex align-items-center">
										<b-col sm="7" md="7" lg="7" class="pe-0 mr-0">
											<div class="d-flex align-items-center">
												<span>
													<img width="55" :src="dashboardUser" alt="" />
												</span>
												<span class="fw-bold text-blue fs-14 ps-1">
													<div>Samantha Oliva</div>
													<small class="text-muted"> Case no. : 20482048</small>
												</span>
											</div>
										</b-col>
										<b-col sm="5" md="5" lg="5" class="pe-0 mr-0">
											<span size="sm" class="font-12 bg-action-need">Action Needed</span>
										</b-col>
									</b-row>
								</b-col>
								<b-col sm="6" md="6" lg="6" class="px-3">
									<b-row class="border mb-3 custom-radius-10 py-2 d-flex align-items-center">
										<b-col sm="7" md="7" lg="7" class="pe-0 mr-0">
											<div class="d-flex align-items-center">
												<span>
													<img width="55" :src="dashboardUser" alt="" />
												</span>
												<span class="fw-bold text-blue fs-14 ps-1">
													<div>Samantha Oliva</div>
													<small class="text-muted"> Case no. : 20482048</small>
												</span>
											</div>
										</b-col>
										<b-col sm="5" md="5" lg="5" class="pe-0 mr-0">
											<span size="sm" class="font-12 bg-pending">Action Needed</span>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
						</div>
					</div>
				</b-card>
			</b-col>
			<b-col sm="5" md="5" lg="5">
				<Todolist />
			</b-col>
		</b-row>
	</b-container-fluid>
	<div>
		<b-modal hide-footer="true" hide-header="true" v-model="modalShowWelcome" centered>
			<b-row>
				<b-col cols="12">
					<img :src="dashboardHeader" class="login-650 login-svg-custom" alt="Float Care 2.0" />
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<h3>Welcome to FloatCare!</h3>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<p class="my-4 text-center">
						Thank you for choosing our solutions to streamline your processes and make
						your medical practice more efficient and organized. We are happy to have you
						onboard. Just a few more steps now to set up your business/practice.
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<b-button class="btn btn-primary col-12 login-btn" @click="showTourModal" variant="primary">View
						Tour</b-button>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<p class="my-4 text-center" @click="hideWelcomeModal">Skip Tour</p>
				</b-col>
			</b-row>
		</b-modal>
		<b-modal hide-footer="true" hide-header="true" v-model="modalShowTour" centered>
			<b-row>
				<b-col cols="12">
					<img :src="dashboardHeader" class="login-650 login-svg-custom" alt="Float Care 2.0" />
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<h3>Business Location</h3>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<p class="my-4 text-center">
						If you have more than one business/practice, you can add them here so you can
						manage your schedule, staff or calendar across different facilities.
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<b-button class="btn btn-primary col-12 login-btn" @click="showStaffModal" variant="primary">Next
					</b-button>
				</b-col>
			</b-row>
		</b-modal>
		<b-modal hide-footer="true" hide-header="true" v-model="modalShowStaff" centered>
			<b-row>
				<b-col cols="12">
					<img :src="dashboardHeader" class="login-650 login-svg-custom" alt="Float Care 2.0" />
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<h3>Add Staff</h3>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<p class="my-4 text-center">
						You can add your staff here including their names, departments, FTE status,
						and contact details.
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<b-button class="btn btn-primary col-12 login-btn" @click="showCalendarModal" variant="primary">Next
					</b-button>
				</b-col>
			</b-row>
		</b-modal>

		<b-modal hide-footer="true" hide-header="true" v-model="modalShowCalendar" centered>
			<b-row>
				<b-col cols="12">
					<img :src="dashboardHeader" class="login-650 login-svg-custom" alt="Float Care 2.0" />
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<h3>Manage Calendar</h3>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<p class="my-4 text-center">
						A user-friendly calendar to keep tabs on your practice appointments, patient’s
						name and contact info, and the provider.
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<b-button class="btn btn-primary col-12 login-btn" @click="showBusinessfModal" variant="primary">
						Next</b-button>
				</b-col>
			</b-row>
		</b-modal>

		<b-modal hide-footer="true" hide-header="true" v-model="modalShowBusiness" centered>
			<b-row>
				<b-col cols="12">
					<img :src="dashboardHeader" class="login-650 login-svg-custom" alt="Float Care 2.0" />
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<h3>Add New Business</h3>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<p class="my-4 text-center">
						If you have more than one business/practice, you can add them here so you can
						manage your schedule, staff or calendar across different facilities.
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" class="d-block text-center">
					<b-button class="btn btn-primary col-12 login-btn" @click="hideModal" variant="primary">Next
					</b-button>
				</b-col>
			</b-row>
		</b-modal>
	</div>
</template>
<script>
export const private_key = import.meta.env.VITE_PRIVATE_KEY;
import { GET_BUSINESSES_AND_DEPARTMENTS } from "@/graphql.js";
import VueApexCharts from "vue-apexcharts";
import Todolist from "@/components/TodoList/TodoList.vue";
import dashboardGirl from "@/assets/images/Graphic@3x.svg";
import NewCase from "@/assets/images/NewCase@3x.svg";
import NewClients from "@/assets/images/NewClients@3x.svg";
import dashboardUser from "@/assets/images/User@2x.png";
import Stats from "@/assets/images/Stats.svg";
import { JSEncrypt } from "jsencrypt";
export default {
	name: "dashbord",
	components: {
		VueApexCharts,
		Todolist,
	},
	data() {
		return {
			NewCase,
			NewClients,
			dashboardUser,
			Stats: Stats,
			dashboardGirl: dashboardGirl,
			modalShowWelcome: false,
			modalShowTour: false,
			modalShowStaff: false,
			modalShowCalendar: false,
			modalShowBusiness: false,
			userBasicInformation: {},
			selected: "California",
			chartOptionsReferrals: {
				chart: {
					type: "radialBar",
					height: 200,
				},

				legend: {
					position: "bottom",
					fontSize: "16px",
					itemMargin: {
						horizontal: 10,
						vertical: 10,
					},
				},
				plotOptions: {
					radialBar: {
						dataLabels: {
							total: {
								show: true,
								label: ["TOTAL"],
							},
						},
					},
				},
				labels: ["Last week", "Current week"],
				stroke: {
					lineCap: "round",
				},
				colors: ["#3E8ACC", "#FFB30F"],
			},
			ReferralsSeries: [67, 84],
			options: [
				{ value: "California", text: "California" },
				{ value: "Mohali", text: "Mohali" },
			],
			userId: "",
			userTypeId: 0,
		};
	},
	mounted() {
		// this.modalShowWelcome = true;
		// this.selectDepartmentByBusinees();
	},
	methods: {
		async selectDepartmentByBusinees() {
			// if (localStorage.getItem("selectedDepartmentBusinees")) {
			//     var currentBusiness = JSON.parse(
			//         localStorage.getItem("selectedDepartmentBusinees")
			//     );
			//     if (currentBusiness.departmentName) {
			//         this.departmentId = currentBusiness.departmentName.departmentId;
			//     }
			//     this.loggedInUser = JSON.parse(localStorage.getItem("userBasicInformation"));
			//     //this.isLoading = false
			// } else if (localStorage.getItem("userBasicInformation")) {
			var uObj = JSON.parse(localStorage.getItem("userBasicInformation"));
			if (uObj.userTypeId == 2) {
				this.$apollo
					.query({
						query: GET_BUSINESSES_AND_DEPARTMENTS,

						variables: {
							organizationId: uObj.organizationId,
						},
					})
					.then((data) => {
						console.log(data);
						// if (
						//     data.data.findAllBusinesses.length > 0 &&
						//     data.data.findAllBusinesses[0].department.length > 0
						// ) {
						//     let department = {
						//         businessName: data.data.findAllBusinesses[0],
						//         departmentName: data.data.findAllBusinesses[0].department[0],
						//     };
						//     localStorage.setItem(
						//         "selectedDepartmentAndBusiness",
						//         JSON.stringify(department)
						//     );
						//     this.isLoading = false;
						// } else {
						//     this.isLoading = false;
						//     /* alert("Your organization hasn't completed the setup. Kindly contact the administrator!")
						//             this.logout()*/
						// }
					})
					.catch((error) => {
						this.isLoading = false;
						console.log(error);
					});
				// } else {
				//     this.isLoading = false;
				// }
			}
		},
		logout() {
			localStorage.clear();
			sessionStorage.clear();
			this.$router.push("/");
		},
		hideWelcomeModal() {
			this.modalShowWelcome = false;
		},
		hideModal() {
			this.modalShowWelcome = false;
			this.modalShowTour = false;
			this.modalShowStaff = false;
			this.modalShowCalendar = false;
			this.modalShowBusiness = false;
		},
		showTourModal() {
			this.modalShowWelcome = false;
			this.modalShowTour = false;
		},
		showStaffModal() {
			this.modalShowTour = false;
			this.modalShowStaff = true;
		},
		showCalendarModal() {
			this.modalShowStaff = false;
			this.modalShowCalendar = true;
		},
		showBusinessfModal() {
			this.modalShowBusiness = true;
			this.modalShowCalendar = false;
		},
	},
};
</script>
<style>
.left-container {
	overflow: hidden;
	position: relative;
	height: 100vh;
}

.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab {
	border-left-style: none;
	box-shadow: -1px 0 0 #0288d1;
}

.dhx_cal_tab.active {
	text-decoration: none;
	cursor: default;
	font-weight: 500;
	font-size: inherit;
	color: #fff;
	border: 1px solid #5c63ab;
	border-bottom: 1;
	background-color: #5c63ab;
	z-index: 25;
}

.dhx_cal_tab {
	width: 88px;
	height: 29px;
	background-color: none;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 500;
	padding-top: 1px;
	border-radius: 0;
	cursor: pointer;
	border: 1px solid #5c63ab;
	color: #5c63ab;
	font-size: inherit;
}

.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab {
	border-left-style: none;
	box-shadow: -1px 0 0 #5c63ab;
}

.dhx_cal_today_button.dhx_cal_nav_button {
	display: none !important;
}

.dhx_cal_navline .dhx_cal_date {
	background: #f1f1f5;
	border-radius: 7px;
	border: 0;
	font-size: 14px;
	font-weight: 500;
	font-family: Roboto, Arial;
	width: 100%;
	text-align: center;
	left: 0;
	padding: 1px 0 0 0;
	color: #173e67;
	z-index: -1;
	/* max-width: 212px; */
}

.dhx_cal_tab.dhx_cal_tab_first {
	display: none;
}

.dhx_cal_tab {
	display: none;
}

.dhx_cal_navline.dhx_cal_navline_flex {
	width: 297px !important;
	height: 59px !important;
	right: 0% !important;
	left: 60% !important;
	top: 0px !important;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
	.dashboard-bg {
		background-image: url(../../src/assets/images/dashboard_bg.png);
		background-repeat: no-repeat;
		background-position: center;
		padding: 20px;
		background-size: cover;
		color: white;
		border-radius: 15px;
		margin: 10px;
	}

	.dhx_cal_navline.dhx_cal_navline_flex {
		width: 100% !important;
		height: 59px !important;
		/* right: 0% !important; */
		left: 0px !important;
		top: 0px !important;
	}

	.left-container {
		overflow: hidden;
		position: relative;
		height: 42vh;
		margin-bottom: 30px;
	}

	.vc-weeks {
		min-width: 100%;
	}

	.vc-pane {
		min-width: 100%;
	}
}

@media screen and (min-width: 420px) and (max-width: 1024px) {
	.dhx_cal_navline.dhx_cal_navline_flex {
		width: 100% !important;
		left: 0px !important;
	}

	.vc-weeks {
		min-width: 100%;
	}

	.vc-pane {
		min-width: 100%;
	}

	.dashboard-bg {
		background-image: url(../../src/assets/images/dashboard_bg.png);
		background-repeat: no-repeat;
		background-position: center;
		padding: 20px;
		background-size: cover;
		color: white;
		border-radius: 15px;
		margin: 10px;
	}
}
</style>
