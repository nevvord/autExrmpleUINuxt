<template>
    <div>
        <div class="page-title">{{ $store.state.user.userName }} - <small>PROFILE</small></div>
        <b-row>
            <b-col sm="12" lg="4" class="n-border-right text-center" alt="Profile img">
                <b-img src="~/assets/img/user.png"></b-img>
                <div class="page-title">Setting</div>
                <div class="text-center"><n-link to="#">Profile</n-link> | <n-link to="#">Password</n-link> | <n-link to="#">Signin Token</n-link> </div>
            </b-col>
            <b-col sm="12" lg="8">
                <div><strong>id: </strong> {{ $store.state.user.id }}</div>
                <div><strong>Email: </strong> {{ $store.state.user.email }}</div>
            </b-col>
        </b-row>
        <br>
        <br>
        <div class="page-title "><strong>More info</strong></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    head: {
        title: `Profile`
    },
    created() {
        if(!this.$store.getters['auth/getAuth']){
            this.$router.push('/')
        }
    }
}
</script>