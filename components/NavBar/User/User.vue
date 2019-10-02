<template>
    <b-nav-item right class="n-mr-r-sm">
        <div v-if="login"></div>
        <div v-else>
            <b-button variant="success" size="sm" v-b-modal.signIn> {{ $t('navBar.right.login.signin') }} </b-button>
            <b-button variant="outline-secondary" size="sm"> {{ $t('navBar.right.login.signup') }} </b-button>
        </div>
    
    <ModalSignIn />

    </b-nav-item>
</template>

<script>
import ModalSignIn from './LoginModal'
export default {
    data() {
        return {
            login: false
        }
    },
    components: {
        ModalSignIn
    }
}
</script>