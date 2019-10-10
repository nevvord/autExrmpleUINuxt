<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">
                {{ $t('logoName') }}
            </b-navbar-brand>

            <b-navbar-toggle target="nav-colapse"></b-navbar-toggle>

            <b-collapse id="nav-colapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/link">{{ $t('navBar.left.firstLink') }}</b-nav-item>
                </b-navbar-nav>

                
                <!--Right navBar-->
                <b-navbar-nav class="ml-auto">
                    <!--Search-->
                    <!--<Search />-->
                    <!--User-->
                    <User />
                    <!--Lang-->
                    <Language />
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import Language from './Language/Language'
import User from './User/User'
import Search from './Search/Search'
export default {
    components: {
        Language,
        User,
        Search
    }
}
</script>