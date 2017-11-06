<template>
         <div>
        
		  	  <form> 
				 <div class="register-top-grid">
					<h3>PERSONAL INFORMATION</h3>
					<div class="mation">
						<bs-input v-model="data.firstname" :error="errors.firstname" type="text" id="firstname" label="Firstname" input-class="input-sm"></bs-input>
					
						<bs-input v-model="data.MI" :error="errors.MI" type="text" id="MI" label="Middle Initial" input-class="input-sm"></bs-input>

						<bs-input v-model="data.lastname" :error="errors.lastname" type="text" id="lastname" label="Lastname" input-class="input-sm"></bs-input>

						<bs-input v-model="data.address" :error="errors.address" type="text" id="address" label="Address" input-class="input-sm"></bs-input>

						<bs-input v-model="data.mobile" :error="errors.mobile" type="text" id="mobile" label="Mobile" input-class="input-sm"></bs-input>

					</div>
					 <div class="clearfix"> </div>
					   <a class="news-letter">
						 <label><input class="" type="checkbox" name="checkbox" checked="" ><i> </i>  Sign Up</label>
					   </a>
					 </div>
				     <div class="register-top-grid">
						    <h3>LOGIN INFORMATION</h3>
							<div class="mation">
								 <bs-input v-model="data.email" :error="errors.email" type="email" id="email" label="Email" input-class="input-sm"></bs-input>

								<bs-input v-model="data.password" :error="errors.password" type="password" id="password" label="Password" input-class="input-sm"></bs-input>

								<bs-input v-model="data.password_confirmation" :error="errors.password" type="password" id="password_confirmation" label="Confirm Password" input-class="input-sm"></bs-input>

							</div>
					 </div>

					 <b-button variant="success" :block=true @click.prevent="register()">Sign up</b-button>
				</form>
				<div class="clearfix"> </div>
				<div class="register-but">
				   <form>
					   <router-link to="#" class="acount-btn"> SUBMIT</router-link>
					   <div class="clearfix"> </div>
				   </form>
				</div>
		
    </div>
</template>

<script>
const link = 'http://localhost:8000/';
export default{
	
	 props:{

	 },
	 data() {
        return {

            data: {
                firstname:null,
                MI: null,
                lastname: null,
                mobile: null,
                address: null,
                password: null,
                email: null,
                password_confirmation: null,
            },
            
            errors: {}
        }
    },
    methods: {
        register() {
            Vue.axios.post(link+'register',this.data)
            .then((response) => {})

            .catch(d => {
                
                 this.errors = d.response.data
                // console.log(Object.keys(d.response.data))
                // console.log()
                // console.log(typeof d) 
            })
            
        },
        
        updateModel(value) {
                this.$emit('input', value)
            },
    }
}
</script>