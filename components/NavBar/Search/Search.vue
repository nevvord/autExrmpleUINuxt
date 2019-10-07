<template>
    <b-nav-form class="n-mr-r-md">
        <b-input-group>
            <b-form-input type="text" size="sm" :placeholder="$t('navBar.right.search.input')"></b-form-input>
            <b-input-group-append>
                <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="light">{{ $t('navBar.right.search.button') }}</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-nav-form>
</template>