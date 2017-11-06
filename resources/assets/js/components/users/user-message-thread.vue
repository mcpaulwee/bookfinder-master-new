<style>
body,html{
    background-image: url('../../../sass/images/background.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.setMarginTop{
    margin-top:10px;
}
</style>
<template>
<div>
    <div>
        <user-navbar></user-navbar>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 setMarginTop">
                <div class="card">
                    <div class="card-header bg-primary" style="padding:3px 3px 3px 3px;"></div>
                    <b style="font-size:14px; margin-left:12px;">Inbox</b>
                    <a href="/#/usermessages" style="margin-left:12px;">Jamaica Ybanez</a>
                    <a href="/#/usermessages" style="margin-left:12px;">Mcpaul Wee</a>
                    <a href="/#/usermessages" style="margin-left:12px;">Carmichael Cabreros</a>
                </div>
            </div>

            <div class="col-6 setMarginTop" >
                <div class="card" >
                    <div class="card-header">

                    </div>
                    
                    <div class="card-body">   
                        <div class="row">
                            <div class="col-md-5 pull-right">
                                <div class="alert alert-success" role="alert" >
                                    <p style="font-size: 14px; color:black"> I'am Interested </p>
                                </div>
                            </div>
                        </div>

                         <div class="row">
                            <div class="col-md-5" style="margin-left:380px;">
                                <div class="alert alert-primary" role="alert" >
                                    <p style="font-size: 12px; color:black"> Where can we meet up?</p>
                                </div>
                            </div>
                        </div>

                         <div class="row">
                            <div class="col-md-5 pull-right">
                                <div class="alert alert-success" role="alert" >
                                     <p style="font-size: 14px; color:black"> Can we meet at Ayala?</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-5" style="margin-left:380px;">
                                <div class="alert alert-primary" role="alert" >
                                     <p style="font-size: 14px; color:black"> Okay sir</p>
                                </div>
                            </div>
                        </div>

                         <div class="row">
                            <div class="col-md-5" style="margin-left:380px;">
                                <div class="alert alert-primary" role="alert" >
                                     <p style="font-size: 14px; color:black">At 4pm</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>

                   <hr> 
                   <div class="input-group">
                        <textarea class="form-control" rows="3" style="resize:none; border:none" placeholder="Type a message.."></textarea>     
                        <span class="input-group-btn">
                            <button class="btn btn-outline btn-success" type="button"><span class="fa fa-send"></span></button>
                        </span>
                    </div>
                </div>

               
            </div>

            <div class="col-3 setMarginTop">
                 <div class="card setTopMargin">
                   <div class="card-header bg-success" style="padding:3px 3px 3px 3px;"></div>
                   <p class="text-center"> Currently chatting with</p>
                   <div class="card-body">
                        <div class="text-center">
                            <img src="images/default_avatar_female.png" width="50" height="50" class="d-inline-block align-top rounded-circle" alt="">
                            <b style="margin-left:4px; margin-top:20px;">Jamaica Ybanez</b>
                            <hr>
                            Interested buyer
                        </div>
                   </div>
                   <div class="card-footer">
                        <button class="btn btn-success btn-block">Meet-up!</button>
                   </div>
                 </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    props:{

    },
    data(){
        return {
            data:{
                description:null
            }
        }
    },
    components: {
        'user-navbar' : require('../users/user-navbar.vue'),
    }
}
</script>