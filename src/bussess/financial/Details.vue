<template>
<div class="details">
    <div class="details-main">
        <el-form ref="form" :model="form" label-width="75px">
            <el-form-item label="目录">
                <el-input  size="small" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="金额">
                <el-input  size="small" v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="活动省地">
                <el-select v-model="form.province" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动市地">
                <el-select v-model="form.city" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="10">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="描述">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="canlce">取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</div>
</template>


<script>
export default {
    name: 'Details',
    data() {
        return {
            form: {
                name: '',
                price: '',
                province: '',
                city:'',
                date: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    mounted() {
        this.initDatas();
    },
    created() {
        //this.initDatas();
    },
    computed:{
        // initcomputedDatas(){
        //     return this.$store.state.financialDetails;
        // }
    },
    methods: {

        initDatas(){
          this.form  =  this.$store.state.financialDetails
        },

        onSubmit() {
            console.log('submit!');
        },
        canlce(){
          this.$emit('handleClose')
        }
    }
};
</script>

<style scoped>
.details {
    width: 100%;
    height: 100%;
}

.details-main {
    float: left;
    margin-left: 20px;
}
</style>
