<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="white">
            <b-navbar-brand to="#">
                {{ $t('logoName') }}
            </b-navbar-brand>

            <b-navbar-toggle target="nav-colapse"></b-navbar-toggle>

            <b-collapse id="nav-colapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="#">{{ $t('navBar.firstLink') }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>