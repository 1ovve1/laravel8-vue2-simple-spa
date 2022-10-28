<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Simple SPA app</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
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
                        <div v-if="isAuth" class="d-flex">
                            <li class="nav-item">
                                <router-link v-text="getUserName" :to="{name: 'home'}" class="nav-link"></router-link>
                            </li>
                            <li class="nav-item">
                                <Logout>></Logout>
                            </li>
                        </div>
                        <div v-if="isNotAuth" class="d-flex">
                            <li class="nav-item">
                                <router-link :to="{name: 'login'}" class="nav-link ">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
                            </li>
                        </div>
                    </ul>
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
    },

    data(){
        return {
            user: this.$store.state.auth.user
        }
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
        }
    }
}
</script>
