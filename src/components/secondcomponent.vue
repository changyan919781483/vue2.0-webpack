<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a>written by {{author}}</a>
        <p>感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
        return {
            author:"常艳",
            articles:[]
        }
    }
    }
</script>