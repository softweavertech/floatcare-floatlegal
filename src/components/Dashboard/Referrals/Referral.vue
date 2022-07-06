<template>
    <div class="container-fluid main-container-bg p-4">
        <div class="boder-radius-15 bg-white p-4">
            <!-- Referral Dashbaord top section -->
            <div class="referral-top-sec boder-radius-35 p-4">
                <div class="row">
                    <div class="col-4">
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-6 col-lg-3 mb-3 mb-lg-0">
                                <div class="bg-white p-3 boder-radius-20 text-center h-100">
                                    <div class="icon-wrap"></div>
                                    <h3>Manage Referrals</h3>
                                    <button type="button" class="btn btn-light mt-2 py-2">View Referrals</button>

                                </div>
                            </div>
                            <div class="col-6 col-lg-3 mb-3 mb-lg-0">
                                <div class="bg-white p-3 boder-radius-20 text-center h-100">
                                    <div class="icon-wrap"></div>
                                    <h3>Manage Patients</h3>
                                    <button type="button" class="btn btn-light  mt-2 py-2">View Patients</button>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3 ">
                                <div class="bg-white p-3 boder-radius-20 text-center h-100">
                                    <div class="icon-wrap"></div>
                                    <h3>Manage Provider</h3>
                                    <button type="button" class="btn btn-light  mt-2 py-2">View Provider</button>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3">
                                <div class="bg-white p-3 boder-radius-20 text-center h-100">
                                    <div class="icon-wrap"></div>
                                    <h3>Manage Permission</h3>
                                    <button type="button" class="btn btn-light  mt-2 py-2">View Permission</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Referral Dashbaord top section ends-->


            <!-- Referral Dashbaord bottom section -->
            <div class="referral-bottom-sec boder-radius-15 p-4 mt-4">
                <div class="d-flex align-items-center">
                    <h2 class="me-auto ">Referral Volume Analytics</h2>
                    <div class="d-flex  align-items-center ">
                        <label class="text-nowrap me-2">Select business location</label>
                        <select class="form-select md">
                            <option selected>Select Business</option>
                            <option value="1">Float care</option>
                        </select>
                    </div>
                </div>
                <div class="row mt-4 left-sec">
                    <div class="col-lg-3">
                        <div class="row">
                            <div class="col-6 col-lg-12">
                                <div class="bg-white border-0 boder-radius-20 overflow-hidden p-4 ">
                                    <div class="d-flex">
                                        <div class="icon-wrap"></div>
                                        <div>
                                            <span class="badge rounded-pill  ">+2.3%</span>
                                            <select class="form-select sm mt-3">
                                                <option selected>Select Days</option>
                                                <option value="1">30 Days</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h4 class="mt-1">Outbound Referrals</h4>
                                    <h3 class="mt-1">55 Referrals</h3>
                                    <p class="mt-1 mb-0"><small>Jun 12, 2022 - Jun 30, 2022</small></p>
                                </div>
                            </div>
                            <div class="col-6 col-lg-12">
                                <div class="bg-white border-0 boder-radius-20 overflow-hidden p-4 mt-lg-4 ">
                                    <div class="d-flex">
                                        <div class="icon-wrap"></div>
                                        <div>
                                            <span class="badge rounded-pill  ">+2.3%</span>
                                            <select class="form-select sm mt-3">
                                                <option selected>Select Days</option>
                                                <option value="1">30 Days</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h4 class="mt-1">Inbound Referrals</h4>
                                    <h3 class="mt-1">155 Referrals</h3>
                                    <p class="mt-1 mb-0"><small>Jun 12, 2022 - Jun 30, 2022</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 right-sec mt-4 mt-lg-0">
                        <div class="card bg-white border-0 boder-radius-20 overflow-hidden">
                            <div class="card-header bg-white d-flex align-items-center py-3">
                                <h4 class="me-auto">Referral Volume</h4>
                                <select class="form-select w-auto sm">
                                    <option selected>Select</option>
                                    <option value="1">2019-2020</option>
                                </select>
                            </div>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                </div>

                   <div class="row  mt-4">
                  
                    <div class="col-lg-7 right-sec mt-4 mt-lg-0">
                        <div class="card bg-white border-0 boder-radius-20 overflow-hidden">
                            <div class="card-header bg-white d-flex align-items-center py-3">
                                <h4 class="me-auto">Average Time Analytics</h4>
                                  <select class="form-select w-auto sm">
                                    <option selected>Select Physician Name</option> 
                                </select>
                                <select class="form-select w-auto sm ms-3">
                                    <option selected>Select</option>
                                    <option value="1">2019-2020</option>
                                </select>
                            </div>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>

                     <div class="col-lg-5 right-sec mt-4 mt-lg-0">
                        <div class="card bg-white border-0 boder-radius-20 overflow-hidden">
                            <div class="card-header bg-white d-flex align-items-center py-3">
                                <h4 class="me-auto">Referral Acceptance Rate</h4>
                              
                            </div>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Referral Dashbaord bottom section end --> 
        </div>
    </div>
</template>