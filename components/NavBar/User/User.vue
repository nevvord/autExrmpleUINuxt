<template>
    <div v-if="$store.state.auth.auth">
        <b-nav-item class="" >
            <b-img id="imgUser" class="n-small-userImage n-mr-r-sm" src="~/assets/img/user.png"></b-img>
            <b-tooltip target="imgUser" placement="bottom" variant="">
                {{$store.state.user.userName}}
            </b-tooltip>
            <b-button variant="outline-danger" size="sm" @click="logout">Logout</b-button>
        </b-nav-item>
    </div>
    <div v-else>
        <b-nav-item>
            <b-button variant="success" size="sm" to="signin"> {{ $t('navBar.right.login.signin') }} </b-button>
            <b-button variant="outline-light" size="sm" to="signup"> {{ $t('navBar.right.login.signup') }} </b-button>
        </b-nav-item>
    </div>
</template>

<script>
import Axios from 'axios'
import { serverURL } from '../../../config/default.json'

export default {
    data() {
        return {
        }
    },
    methods: {
        async logout(){
            const token = localStorage.getItem('auth')

            await Axios.post(serverURL + "/user/logout", { token })
                .then(res => {
                    console.log(res.data)
                    localStorage.removeItem('auth')
                    this.$store.commit('auth/authChange')

                })
                .catch(err => {
                    
                })
        }
    }
}
</script>
