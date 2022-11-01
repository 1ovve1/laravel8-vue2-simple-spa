<template>
    <button v-click-outside="unToogle" v-on:click="toogle" ref="toogleBtn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
</template>

<script>
    export default {
        data() {
            return {
                toogled: false
            }
        },

        methods: {
            unToogle() {
                if (this.toogled) {
                    const toogleBtn = this.$refs.toogleBtn;
                    toogleBtn.click();
                }
                this.toogled = false;
            },

            toogle() {
                this.toogled = !this.toogled;
            }
        }
    }
</script>
