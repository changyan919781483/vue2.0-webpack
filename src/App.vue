<template>
    <div>
        <ul>
            <li><router-link to="/foo">点我跳转到第一页</router-link></li>
            <li><router-link to="/bar/child">点我跳转到第二页</router-link></li>
        </ul>
        <router-view class="view"></router-view>
    </div>
</template>
<script>

</script>
<style>
    .router-link-active{
        color: #f00;
    }
</style>