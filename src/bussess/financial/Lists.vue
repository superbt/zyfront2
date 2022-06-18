<template>
<div class="lists">
    <el-table
    :data="tableData"
    style="width: 100%; "
    :height="tableHeight"
    border fit
    show-summary
    :summary-method="getSummaries"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
        <el-table-column
            label="序号"
            type="index"
            :index="indexMethod">
        </el-table-column>
        <el-table-column
         prop="date"
         label="日期"
         align="center"
         sortable
        >
        </el-table-column>
        <el-table-column label="详细信息"   align="center">
            <el-table-column
                prop="name"
                label="目录名称"
                align="center"
            >
            </el-table-column>
            <el-table-column label="地址" align="center">
                <el-table-column
                    prop="province"
                    label="省份"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="city"
                    label="市区"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="desc"
                    label="描述"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="金额"
                    align="center"
                    sortable
                >
                </el-table-column>
            </el-table-column>

        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot="header" slot-scope="scope">
                <el-button
                    type="primary"
                    @click.native.prevent="openDetails(scope.$index, tableData)"
                    size="small">
                    新增
                </el-button>
            </template>

            <template slot-scope="scope">
                <el-button
                    @click.native.prevent="openDetails(scope.$index, tableData)"
                    type="text"
                    size="small">
                    查看
                </el-button>
                |
                <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    移除
                </el-button>
            </template>
        </el-table-column>

    </el-table>
    <Pagination></Pagination>
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
        <Details @handleClose="handleClose"  ref="Details" ></Details>
    </el-drawer>
</div>
</template>

<script>
import Pagination from '@/components/admin/common/Pagination.vue';
import Details from '@/bussess/financial/Details';
import axios from 'axios';
export default {
    name: 'Lists',
    components:{
        Pagination,Details
    },

    data(){
        return {
            form: {
                name: '',
                price: '',
                province: '',
                city:'',
                date: '',
                desc: ''
            },
            tableData:[{
                date:'2022-04-09',
                name:'小妖精',
                province:'北京',
                city:'海淀',
                desc:'颐和园东路8号',
                price:'100020'
            }
            ],
            tableHeight: 400 ,
            drawer: false,
            direction: 'rtl',
        }

    },
    computed:{
        isCollapse(){
            return this.$store.state.isCollapse;
        }
    },

    watch:{

    },
    created() {
        this.getTableHeight();
    },
    mounted() {
        window.onresize = () => {
            this.getTableHeight();
        };
        this.initMyfinalTableList();

    },
    destroyed() {
    },
    methods:{
        initMyfinalTableList(){
            var that = this;
            axios.get("/user/userinfo").then((res)=>{
                that.tableData = res.data.list
                console.log("init datalists")
            }).catch((err)=>{
                console.log("err:"+err)
            })
        },
        getTableHeight(){
            this.tableHeight = window.innerHeight - 200 ;
        },
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    //sums[index] = 'N/A';
                }
            });

            return sums;
        },
        indexMethod(index) {
            return index +1;
        },
        openDetails(index ,datas){
            this.$store.state.financialDetails= datas[index] ;
            this.drawer = true
            this.$refs.Details.initDatas();
        },
        handleClose(done){
            // this.$confirm('确认关闭？')
            //     .then(_ => {
            //         done();
            //     })
            //     .catch(_ => {});
            this.drawer = false ;
        },
        deleteRow(){
            this.$confirm('确认删除？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }


};
</script>

<style scoped>
.lists {
    width: 100%;
    height: 100%;

    .el-table__header-wrapper .el-table__header {
        width: 101.01% !important;
        height: 20px;
    }

    .el-table__body-wrapper .el-table__body {
        width: 100.36% !important;
    }
}
</style>
