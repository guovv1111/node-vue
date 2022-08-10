<template>
<div>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside>
                <el-menu
                    active-text-color="#ffd04b"
                    background-color="#545c64"
                    class="el-menu-vertical-demo"
                    default-active="2"
                    text-color="#fff"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <div v-for="(item, index) in menus" :key="index">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon><location /></el-icon>
                                <span>{{item.name}}</span>
                            </template>
                            <div v-for="(suMenu, i) in item.subMenus" :key="i">
                                <el-menu-item-group>
                                    <router-link :to="suMenu.path">
                                        <el-menu-item :index="index+'-'+i">{{suMenu.name}}</el-menu-item>
                                    </router-link>
                                </el-menu-item-group>
                            </div>
                        </el-sub-menu>
                    </div>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { get } from "@/common/lib/axios";
const menus = ref([]) // 菜单数据

onMounted(() => {
    const data  = get('api/users/test');
    const result = get('base/menu/menu');
    result.then(res => {
        menus.value = res.menus;
        console.log('menus=', menus.value);
    })
})
function handleOpen() {}

function handleClose() {}
</script>

<style >
@import './assets/base.css';

.el-header {
    background: #ccc;
}

.el-aside {
    background: rgb(184, 164, 164);
}

.el-main {
    background: rgba(184, 164, 164, .5);
}

a {
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
}
</style>
