<template>
<div>
    <el-upload
        v-model:file-list="fileList"
        class="upload-demo"
        action="http://localhost:5000/upload/upload/uploadImg"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
    >
        <el-button type="primary">Click to upload</el-button>
        <template #tip>
        <div class="el-upload__tip">
            jpg/png files with a size less than 500KB.
        </div>
        </template>
    </el-upload>

    <form>
      <label>选择文件</label>
      <input @change="fileSelect" type="file" ref="file">
      <button type="button" @click="submit">上传</button>
    </form>
</div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { post } from "@/common/lib/axios";
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

async function submit(){
    const formData = new FormData();
    formData.append('file',this.file);
    await axios.post('http://127.0.0.1:3000/upload',formData,{
    });
}
function fileSelect(){
    let file = this.$refs.file.files[0];
    this.file = file;
}
</script>