<template>
	<div class="login">
		<h2>Sign In</h2>
		<div class="login">
			<input type="text" v-model="email" placeholder="Enter your email">
			<input type="password" v-model="password" placeholder="Your password">
			<button v-on:click="signIn">Sign In</button>
			<p>You don't have an account?</p>
			<router-link :to="{name: 'SignUp'}">You can't create one</router-link>
			<router-link :to="{name: 'HelloWorld'}">Back to Dashboard</router-link>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase'
export default {
	name: 'login',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signIn: function () {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
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