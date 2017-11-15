<template>
	<div class="sign-up">
		<h2>Create your account Firebase</h2>
		<input type="text" v-model="email" placeholder="Enter your email">
		<input type="password" v-model="password" placeholder="Your password">
		<button v-on:click="signUp">Sign Up</button>
		<router-link :to="{name: 'Login'}">Back to Login</router-link>
		<router-link :to="{name: 'HelloWorld'}">Back to Dashboard</router-link>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'SignUp',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signUp: function () {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then(
				response => {
					this.$router.replace('hello')
				},
				error => {
					console.log('Error : ' + error)
				}
			)
			.catch(function(error) {
				var errorCode = error.code
				var errorMessage = error.message
				if (errorCode == 'auth/weak-password') {
					alert('The password is too weak.')
				} else {
					alert(errorMessage)
				}
				console.log(error)
			})
		}
	}
}
</script>

<style scoped>
	
</style>