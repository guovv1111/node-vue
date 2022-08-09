<template>
<div>
    <el-row>
        <el-col :span="20">星期几:{{ format(new Date(), "'Today is a' eeee") }}</el-col>
    </el-row>
    <el-row>
        <el-col :span="20">{{ formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }) }}</el-col>
    </el-row>
    <el-row>
        <el-col :span="20">{{ formatRelative(subDays(new Date(), 3), new Date()) }}</el-col>
    </el-row>
    <el-row>
        <el-col :span="20">formate day:{{ format(new Date(+timestamp), 'yyy-MM-dd') }}</el-col>
    </el-row>
    <el-row>
        <el-col :span="20">formate time:{{ format(new Date(+timestamp), 'yyyy-MM-dd HH:mm') }}</el-col>
    </el-row>
    
    

</div>
</template>
<script setup>
import { ref } from 'vue';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const timestamp = 12121222;
</script>