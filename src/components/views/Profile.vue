<script setup>

</script>
<template>
    <div class="dashboard-container">
        <h1 class="person-title">محمد علی</h1>
        <ul class="nav flex-center">
            <li class="nav-item">
                <router-link class="router-link" to="/profile/informations">
                    اطلاعات من  
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="router-link" to="/profile/password">
                    تغیر رمز  
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="router-link" to="/profile/address">
                    آدرسها  
                </router-link>
            </li>
        </ul>
    </div>
    <router-view></router-view>
</template>
<style lang="scss" scoped>
.dashboard-container {
    height: 190px;
    background-color: #6F6F6F;
    width: 100%;
}
.person-title {
    text-align: center;
    color: white;
    font-size: 1.3em;
    
}
.nav{
    list-style-type: none;
    gap: 3%;
    cursor: pointer;
    margin-top: 100px;
    color: white;
    word-wrap: normal;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }

}
.router-link {
    color: white;
    text-decoration: none;
}
.router-link-exact-active {
    color: rgb(213, 213, 213);
    text-decoration: none;
}
</style>