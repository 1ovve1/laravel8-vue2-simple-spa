<template>
	<div class="container h-100">
		<div class="row h-100 justify-content-center mt-5">
			<div class="col-12 col-md-6 offser-md-3">
				<div class="card shadow sm">
					<div class="cardbody p-2">
						<h1 class="text-center">Login</h1>
						<hr/>
						<form action="javascript:void(0)" class="form row" method="post">
							<div class="form-group col-12">
								<label for="email" class="font-weight-bold">Email</label>
								<input type="text" v-model="auth.email" name="email" id="email" class="form-control">
							</div>
							<div class="form-group col-12">
								<label for="password" class="font-weight-bold">Password</label>
								<input type="password" v-model="auth.password" name="password" class="form-control" id="password">
							</div>
							<div class="col-12">
								<div class="d-flex justify-content-center mt-3">
									<button type="submit" :disabled="processing" @click="login" class="btn btn-primary" v-text="processing ? 'Please wait' : 'Login'"></button>
								</div>
							</div>
							<div class="col-12 text-center">
                                <label>Don't have an account? <router-link :to="{name:'register'}">Register Now!</router-link></label>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		name: 'login',
		data() {
			return {
				auth: {
					email: '',
					password: ''
				},
				processing: false
			}
		},

		methods: {
			...mapActions({
				signIn: 'auth/login',
			}),

			async login() {
				this.processing = true;
				await axios.get('/sanctum/csrf-cookie');
				await axios.post('/api/login', this.auth)
					.then(({data}) => {
						this.signIn();
					}).catch(({response: {data}}) => {
						alert(data.message);
					}).finally(() => {
						this.processing = false;
					});
			},
		}
	}
</script>
