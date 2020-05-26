<template>
    <div id="login">
        <transition name="fade">
            <div v-if="performingRequest" class="loading">
                <p>Cargando...</p>
            </div>
        </transition>
        <section>
            <div class="col1">
                <h1>PlatziPosts</h1>
                <p>Bienvenido a PlatziPosts, plataforma de microbloging usando Vue y Firebase</p>
            </div>
            <div class="col2" :class="{ 'signup-form': !showLoginForm && !showForgotPassword }">
                <form v-if="showLoginForm" @submit.prevent>
                    <h1>Bienvenido</h1>

                    <label for="email1">Email</label>
                    <input v-model.trim="loginForm.email" type="text" placeholder="Email" id="email1" />

                    <label for="password1">Contraseña</label>
                    <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />

                    <button @click="login" class="button">Ingresar</button>

                    <div class="extras">
                        <a @click="togglePasswordReset">Olvidó su contraseña?</a>
                        <a @click="toggleForm">Crear una cuenta</a>
                    </div>
                </form>
                <form v-if="!showLoginForm && !showForgotPassword" @submit.prevent>
                    <h1>Registro</h1>

                    <label for="name">Nombre</label>
                    <input v-model.trim="signupForm.name" type="text" placeholder="Nombre" id="name" />

                    <label for="title">Compañía</label>
                    <input v-model.trim="signupForm.title" type="text" placeholder="Compañía" id="title" />

                    <label for="email2">Email</label>
                    <input v-model.trim="signupForm.email" type="text" placeholder="Email" id="email2" />

                    <label for="password2">Contraseña</label>
                    <input v-model.trim="signupForm.password" type="password" placeholder="mínimo 6 caracteres" id="password2" />

                    <button @click="signup" class="button">Registrarse</button>

                    <div class="extras">
                        <a @click="toggleForm">Ingresar</a>
                    </div>
                </form>
                <form v-if="showForgotPassword" @submit.prevent class="password-reset">
                    <div v-if="!passwordResetSuccess">
                        <h1>Recuperar contraseña</h1>
                        <p>Le enviaremos un email con su conytraseña</p>

                        <label for="email3">Email</label>
                        <input v-model.trim="passwordForm.email" type="text" placeholder="Email" id="email3" />

                        <button @click="resetPassword" class="button">Enviar</button>

                        <div class="extras">
                            <a @click="togglePasswordReset">Ingresar</a>
                        </div>
                    </div>
                    <div v-else>
                        <h1>Email Enviado</h1>
                        <p>Revise su correo para seguir con el proceso</p>
                        <button @click="togglePasswordReset" class="button">Ingresar</button>
                    </div>
                </form>
                <transition name="fade">
                    <div v-if="errorMsg !== ''" class="error-msg">
                        <p>{{ errorMsg }}</p>
                    </div>
                </transition>
            </div>
        </section>
    </div>
</template>

<script>
    const fb = require('../firebaseConfig.js')

    export default {
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                signupForm: {
                    name: '',
                    title: '',
                    email: '',
                    password: ''
                },
                passwordForm: {
                    email: ''
                },
                showLoginForm: true,
                showForgotPassword: false,
                passwordResetSuccess: false,
                performingRequest: false,
                errorMsg: ''
            }
        },
        methods: {
            toggleForm() {
                this.errorMsg = ''
                this.showLoginForm = !this.showLoginForm
            },
            togglePasswordReset() {
                if (this.showForgotPassword) {
                    this.showLoginForm = true
                    this.showForgotPassword = false
                    this.passwordResetSuccess = false
                } else {
                    this.showLoginForm = false
                    this.showForgotPassword = true
                }
            },
            login() {
                this.performingRequest = true

                fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user)
                    this.$store.dispatch('fetchUserProfile')
                    this.performingRequest = false
                    this.$router.push('/dashboard')
                }).catch(err => {
                    console.log(err)
                    this.performingRequest = false
                    this.errorMsg = err.message
                })
            },
            signup() {
                this.performingRequest = true

                fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user)

                    // create user obj
                    fb.usersCollection.doc(user.uid).set({
                        name: this.signupForm.name,
                        title: this.signupForm.title
                    }).then(() => {
                        this.$store.dispatch('fetchUserProfile')
                        this.performingRequest = false
                        this.$router.push('/dashboard')
                    }).catch(err => {
                        console.log(err)
                        this.performingRequest = false
                        this.errorMsg = err.message
                    })
                }).catch(err => {
                    console.log(err)
                    this.performingRequest = false
                    this.errorMsg = err.message
                })
            },
            resetPassword() {
                this.performingRequest = true

                fb.auth.sendPasswordResetEmail(this.passwordForm.email).then(() => {
                    this.performingRequest = false
                    this.passwordResetSuccess = true
                    this.passwordForm.email = ''
                }).catch(err => {
                    console.log(err)
                    this.performingRequest = false
                    this.errorMsg = err.message
                })
            }
        }
    }
</script>
