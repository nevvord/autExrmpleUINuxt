<template>
    <b-nav-item class="n-mr-r-sm">
        <div v-if="login"></div>
        <div v-else>
            <b-button variant="success" size="sm" to="signin"> {{ $t('navBar.right.login.signin') }} </b-button>
            <b-button variant="outline-light" size="sm" to="signup"> {{ $t('navBar.right.login.signup') }} </b-button>
        </div>
    </b-nav-item>
</template>

<script>
export default {
    data() {
        return {
            login: false
        }
    },
    components: {
    }
}
</script>