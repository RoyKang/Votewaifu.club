import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token:  window.sessionStorage.getItem('token') | null

    },
    mutations: {
        setToken (token,tokenReceived) {
            this.state.token = tokenReceived;
            window.sessionStorage.setItem('token',tokenReceived);
        }
    }
})


