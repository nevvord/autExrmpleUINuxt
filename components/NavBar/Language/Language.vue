<template>
    <b-nav-item-dropdown :text="$t('navBar.right.lang.button')" right>
        <b-dropdown-item @click="changeLanguage('ru')">RU</b-dropdown-item>
        <b-dropdown-item @click="changeLanguage('en')">EN</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
export default {
    methods:{
        changeLanguage(lang){
            this.$i18n.locale = lang;
        }
    }
}
</script>