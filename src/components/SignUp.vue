<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="text-center">
					<h4>Create your account Firebase + Vue.JS</h4>
				</div>
				<div class="panel panel-default">
					<div class="panel-body">
						<div class="form-group">
	        		<label>Email</label>
	        		<input type="text" class="form-control" v-model="email" placeholder="Enter your email">
	        	</div>
	        	<div class="form-group">
	        		<label>Password</label>
	        		<input type="password" class="form-control" v-model="password" placeholder="Your password">
	        	</div>
	        	<div class="form-group">
	        		<label></label>
	        		<button class="btn btn-success" v-on:click="signUp">Sign Up</button>
	        	</div>
	        	<br>
						<router-link :to="{name: 'Login'}">Back to Login</router-link>
					</div>
				</div>
			</div>
		</div>
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