<template>
    <div> 
		<div class=" login-right">
			<h3>REGISTERED USERS</h3>
				<p>If you have an account with us, please log in.</p>
				<form>
				  <div>
					<span>Email Address<label>*</label></span>
					<input type="text"> 
				  </div>
				  <div>
					<span>Password<label>*</label></span>
					<input type="text"> 
				  </div>
				  <router-link to="#" class="acount-btn"> LOGIN</router-link>
			    </form>
			   </div>	
			    <div class=" login-left">
			  	 <h3>NEW USERS</h3>
				 <p>By creating an account with our site, you will be able to post a book into you account profile and find a potential buyer for your posted book.</p>
				  <router-link to="register" class="acount-btn"> Create an Account</router-link>
			</div>
		<div class="clearfix"> </div>
    </div>
</template>