<template>
<div class="f-main">
    <div class="f-main-top">
        <div class="f-main-top-right">
            <Lists></Lists>
        </div>
        <div class="f-main-top-left">
            <fin-chars></fin-chars>
        </div>
    </div>
    <div class="f-main-button">
        <div class="f-main-button-right">
        </div>
        <div class="f-main-button-left">
            hello4
        </div>
    </div>
</div>
</template>

<script>
import Lists from './Lists'
import FinChars from '@/bussess/financial/FinChars';
export default {
    name: 'Index',
    components:{ Lists ,FinChars}
};
</script>

<style scoped>
.f-main {
    width: 100%;
    height: 90%;

    /*    border-style: solid;
    border-color: #889aa4; */
}

.f-main-top {
    float: top;
    width: 100%;
    height: 50%;
}

.f-main-top-right {
    float: left;
    width: 60%;
    height: 100%;
    border-style: solid;
    border-color: #dcdfe6;
}

.f-main-top-left {
    float: left;
    width: calc(40% - 15px);
    height: 100%;
    border-style: solid;
    border-color: #dcdfe6;
    margin-left: 1px;
}

.f-main-button-right {
    float: left;
    width: 60%;
    height: 100%;
    border-style: solid;
    border-color: #dcdfe6;
}

.f-main-button-left {
    float: left;
    width: calc(40% - 15px);
    height: 100%;
    border-style: solid;
    border-color: #dcdfe6;
    margin-left: 1px;
}

.f-main-button {
    float: top;
    width: 100%;
    height: 48%;
    margin-top: 10px;
}

</style>
