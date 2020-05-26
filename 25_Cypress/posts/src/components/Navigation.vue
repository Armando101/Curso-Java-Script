<template>
    <header>
        <section>
            <div class="col1">
                <router-link to="dashboard"><h3>PlatziPosts</h3></router-link>
                <ul class="inline">
                    <li><router-link to="dashboard">Dashboard</router-link></li>
                    <li><router-link to="settings">Configuración</router-link></li>
                    <li><a @click="logout">Salir</a></li>
                </ul>
            </div>
        </section>
    </header>
</template>

<script>
    const fb = require('../firebaseConfig.js')

    export default {
        methods: {
            logout() {
                fb.auth.signOut().then(() => {
                    this.$store.dispatch('clearData')
                    this.$router.push('/login')
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
