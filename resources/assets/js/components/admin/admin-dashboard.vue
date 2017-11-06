<style>
body,html{
    background-image: url('../../../sass/images/background.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.setMargin{
    margin-left: 10px;
    margin-top: 10px;
    
}
.mapMargin{
    margin-top: 10px;
}
</style>
<template>
  <div>
    <div>
     <admin-navbar></admin-navbar>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <admin-card class="setMargin"></admin-card>
        </div>

        <div class="col-9">
          <googlemap class="mapMargin"></googlemap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
     components : {
            'admin-navbar' : require('../navbar.vue'),
            'admin-card' : require('../admin/admin-card.vue')
        },
}
</script>