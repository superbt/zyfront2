<template>
<div class="main-play">
 <Player></Player>
    hello
</div>
</template>

<script>
import  player from 'zw-player'
export default {
    name: 'Player' ,
    components:{ player},
};
</script>

<style scoped>
.main-play {
    width: 100%;
    height: 100%;
}
</style>
