import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token:  window.sessionStorage.getItem('token')
    },
    mutations: {
        setToken (token,tokenReceived) {
            this.state.token = tokenReceived;
            window.sessionStorage.setItem('token',tokenReceived);
        },
        clearToken () {
            this.state.token = '';
            window.sessionStorage.setItem('token','');
        }
    },
    actions: {
        UserLogout (context) {
            context.commit('clearToken')
        }
    }
})


