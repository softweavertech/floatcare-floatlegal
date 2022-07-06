import {
    createApp
} from 'vue'

import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'v-calendar/dist/style.css'
import {
    SetupCalendar,
    Calendar,
    DatePicker
} from 'v-calendar'
import Popper from "vue3-popper";
import VueClipboard from "vue3-clipboard";
import VOtpInput from "vue3-otp-input";
import VueApexCharts from "vue3-apexcharts";
// import VOtpInput  from "token-store";
import VueMask from 'v-mask'
import router from './router'
import moment from 'moment'
import vueCountryRegionSelect from 'vue3-country-region-select'
import {
    onError
} from "apollo-link-error";
import.meta.env.VITE_FROM;
import {
    ApolloClient,
    HttpLink,
    InMemoryCache
} from '@apollo/client/core';
import VueCookies from 'vue3-cookies'
import {
    createApolloProvider
} from '@vue/apollo-option'
import {
    setContext
} from 'apollo-link-context'
import {
    from
} from 'apollo-link';
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
export const fl_api =
    import.meta.env.VITE_FLOAT_LEGAL_API
export const fc_api =
    import.meta.env.VITE_FLOAT_CARE_API
export const referral_api =
    import.meta.env.VITE_REFERRAL_API
export const $s3_bucket =
    import.meta.env.VITE_S3_MEDIA
export const form_api =
    import.meta.env.VITE_FORM_API;    

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    }
}

const authLink = setContext((_, {
    headers
}) => {
    const token = window.localStorage.getItem('userToken');
    // const cookie = $cookies.get('myCoookie')
    var userId = localStorage.getItem('currentUserId')
    var userTypeId = localStorage.getItem('currentUserTypeId')
    var constCookie = `${userId}fc2.0${userTypeId}`
    // var constCookie = `IShzhZMhjTDzBC9Y35TiL7VsqzF6bE1wjtYRr49IhTq%2BYoBB%2Fzghl6J%2BizmRxVSjXMXRlQr19nuWCSjLzkIk0nxYznYl7yKykzrDZXrc7WwelMvxZDgZCBIcTo5vxZrZkG1dk8s47qdzoXKFrWUBfeG49o7TCcR5I8GneUYe0KE%3D`
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : null,
            'x-api-key': cookie ? `${cookie}!@#$%${constCookie}` : null

        }
    }
})

axios.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('userToken');

        if (token) {

            // if (validateCookie) {
            config.headers['Authorization'] = `Bearer ${ token }`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const floatLegalLink = new HttpLink({
    uri: `${fl_api}apis/graphql`,
    fetch,
})
const referralLink = new HttpLink({
    uri: `${referral_api}apis/graphql`,
    fetch,
})
const floatCareLink = new HttpLink({
    uri: `${fc_api}apis/graphql`,
    fetch,
})

const errorHandler = onError(({
    graphQLErrors,
    networkError
}) => {
    if (graphQLErrors) {
        let errors = []
        graphQLErrors.map(({
                message,
                locations,
                path
            }) =>
            errors.push(message),
        );
    }

    if (networkError) {
        alert("Your session got cancelled due to bad request. Please login again.")
        localStorage.clear();
        $cookies.set('myCoookie', '');
        window.location = '/'
        console.log(`[Network error]: ${networkError}`)
    };
});
const apolloLegalClient = new ApolloClient({
    link: from([
        authLink,
        errorHandler,
        floatLegalLink,
    ]),
    cache: new InMemoryCache({
        addTypename: true
    }),
    defaultOptions: defaultOptions,
})

const apolloFloatCare = new ApolloClient({
    link: from([
        authLink,
        errorHandler,
        floatCareLink,
    ]),
    cache: new InMemoryCache({
        addTypename: true
    }),
    defaultOptions: defaultOptions,
})
const apolloReferralClient = new ApolloClient({
    link: from([
        authLink,
        errorHandler,
        referralLink,

    ]),
    cache: new InMemoryCache({
        addTypename: true
    }),
    defaultOptions: defaultOptions,
})
const apolloProviders = createApolloProvider({
    defaultClient: apolloFloatCare,
    clients: {
        apolloReferralClient,
        apolloLegalClient,
    }
})
const instance = axios.create({
  baseURL: `https://devapi-legal.float.care/`,
});

const app = createApp(App);
app.use(apolloProviders)
app.use(VueCookies, {
    expireTimes: "365d",
    path: "/"
})
app.use(VueCookies, {
    secure: true,
    SameSite: 'Lax'
});
app.use(BootstrapVue3)
app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)
app.use(router)
app.use(SetupCalendar, {})
app.component('Calendar', Calendar)
app.use(vueCountryRegionSelect);
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
})
app.component('DatePicker', DatePicker)
app.component('v-otp-input', VOtpInput)
app.use(PerfectScrollbar);

app.config.globalProperties.$filters = {
    timeAgo(date) {
        return moment(date).fromNow()
    },
    dateformate(date) {
        return moment(date).format('MMM DD, YYYY')
    },
}
app.mount('#app')

app.config.globalProperties.axios = instance