<template>
<div class="nav-item dropdown">

    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img class="flag" v-if="this.$i18n.locale == 'fr'" src="/img/frenchflag.jpg">
        <img class="flag" v-if="this.$i18n.locale == 'en'" src="/img/britishflag.jpg">
        <span class="mr-2 d-none d-lg-inline text-gray-100">
            {{ this.language[this.$i18n.locale] }}
        </span>

    </a>
    <!-- Dropdown - User Information -->
    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
        <a class="dropdown-item" @click.prevent="setLang('fr')">
            <img src="/img/frenchflag.jpg">
            Français
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" @click.prevent="setLang('en')">
            <img src="/img/britishflag.jpg">
            English
        </a>
    </div>
</div>
</template>

<style scoped>
.flag {
    width: 35px;
    display: flex;
}
</style>

<script>
export default {
    data: function () {
        return {
            language: {
                'fr': 'Français',
                'en': 'English',
            }
        }
    },
    created() {

    },
    methods: {
        setLang: function (locale) {
            this.$i18n.locale = locale;
            this.moment.locale(locale);
        }
    }
}
</script>
