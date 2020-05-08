<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    margin-bottom: 10px;
    li {
        flex: 1;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background-color: white;
    }
}
.active {
    color: red;
    border-bottom: 2px solid red;
}
.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: white;
}
</style>
