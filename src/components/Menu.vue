<template>
    <div class="zhtcc" style="display:block">
        <div class="zhtcc_fu">
            <div class="zhtcc_fu_za">您确定退出登录?</div>
            <div class="zhtcc_fu_da">
                <a class="zhtcc_fu_x1">退出登录</a>
                <a class="zhtcc_fu_x2">取消</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menu'
}
</script>

<style>

/*----- 退出登录-----*/
.zhtcc{ width:100%; height: 100%; background-color:rgba(0,0,0,.6); position: fixed; top: 0; z-index: 9999999;}
.zhtcc_fu{ width:100%; height:2.4rem; background-color:#FFF; position:fixed; bottom:0; z-index:99999999; }
.zhtcc_fu_x1{ width:100%; height:.88rem; display:block; font-size:.24rem; color:#F00; text-align:center;line-height:.85rem; border-top:1px solid #dbdbdc; border-bottom:1px solid #dbdbdc;}
.zhtcc_fu_za{  width:100%; line-height:.4rem; text-align:center; display:block; font-size:.22rem; padding:.1rem; color:#999;}
.zhtcc_fu_x2{ width:100%; height:.88rem; display:block;  color:#000; font-size:.24rem;text-align:center; line-height:.88rem;}
.zhtcc_fu_da{ width:100%; height:1.84rem; position:relative; bottom:0; }
.zhtcc_fu_x3{ width:100%; height:.06rem; display:block; background-color:#ebebeb;}


</style>