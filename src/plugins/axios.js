import Vue from 'vue'
import axios from 'axios'
import { promised } from 'q'

// axios.defaults.baseURL = 'https://curso-vue-35019.firebaseio.com/'

Vue.use ({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL : 'https://curso-vue-35019.firebaseio.com/'
        })
        Vue.prototype.$http.interceptors.request.use(config =>{
            // if (config.method=='post'){
            //     config.method ='put'
            // }
            console.log(config.method)
            return config
        }, error =>Promise.reject(error))
    }
})