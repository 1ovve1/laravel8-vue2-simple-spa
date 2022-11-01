<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Simple SPA app</a>
                <NavbarToogle></NavbarToogle>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page">Home</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tools
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item" :to="{name: 'counter'}">Counter</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <div v-if="isAuth" class="d-flex flex-lg-row flex-column">
                            <li class="nav-item">
                                <router-link v-text="getUserName" :to="{name: 'dashboard'}" class="nav-link"></router-link>
                            </li>
                            <li class="nav-item">
                                <Logout>></Logout>
                            </li>
                        </div>
                        <div v-if="isNotAuth" class="d-flex flex-lg-row flex-column">
                            <li class="nav-item">
                                <router-link :to="{name: 'login'}" class="nav-link ">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
                            </li>
                        </div>
                    </ul>
                    <hr>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name:"dashboard",
    components:{
        Logout: () => import ('./Logout.vue'),
        NavbarToogle: () => import ('./NavbarToogle.vue'),
    },

    computed: {
        ...mapGetters({
            isAuth: 'auth/isAuth',
            isNotAuth: 'auth/isNotAuth',
            getUserName: 'auth/getUserName'
        }),
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/api/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        },
    }
}
</script>
