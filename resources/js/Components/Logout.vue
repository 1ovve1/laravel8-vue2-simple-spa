<template>
    <button class="nav-link btn" v-on:click="logout">Logout</button>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'logout-tab',

        methods: {
            ...mapActions({
                logout: 'auth/logout',
            }),
        }
    }
</script>
