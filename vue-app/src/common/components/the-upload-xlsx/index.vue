<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { UploadFile } from 'element-plus/es/components/upload/src/upload';
import FileUploader from '../file-uploader/index.vue';
import { read, utils } from 'xlsx';

type Prop = {
    modelValue: string[];
}

const props = withDefaults(defineProps<Prop>(), {
    modelValue: () => []
});

const emits = defineEmits<{
    (e: 'update:modelValue', $event: string[]): void
}>();

const fileUploaderXlsxRef = ref();
const fileList = ref<UploadFile[]>([]);
function readXLSX(file: UploadFile): Promise<TabJsonType[]> {
    return new Promise((resolve, reject) => {
        const reader: FileReader = new FileReader();
        reader.onload  = function (ev: ProgressEvent<FileReader>) {
            const data = ev.target?.result;
            const gameList = read(data, {
                type: 'binary'
            });
            const result: TabJsonType[] = [];
            gameList.SheetNames.forEach((sheetName: string) => {
                result.push({
                    sheetName: sheetName,
                    sheet: utils.sheet_to_json(gameList.Sheets[sheetName], { header: 1 })
                });
            });
            resolve(result);
        };
        reader.readAsArrayBuffer(file.raw as Blob);
    });
}
type TabJsonType = {
    sheetName: string;
    sheet: number[]
}

async function handleOnlineFileChange(file: UploadFile, fileList: UploadFile[]) {
    const tabJson = await readXLSX(file);
    const uploadJson = tabJson[0].sheet.map((item: number) => item[0]);
    // 过滤其他非数字
    const filterResult = uploadJson.filter((item: string | number) => typeof item === 'number');
    // 去重
    const groupItemIds = [...new Set<number>(filterResult)].map((item: number) => `${item}`);
    emits('update:modelValue', groupItemIds);
}
function handleExceed() {
    ElMessage.warning('只能上传一个文件');
}
</script>

<template>
    <div class="file-uploader">
        <file-uploader
            ref="fileUploaderXlsxRef"
            action="/"
            :auto-upload="false"
            accept=".xls,.xlsx"
            method="post"
            :limit="1"
            :file-list="fileList"
            :on-change="handleOnlineFileChange"
            :on-exceed="handleExceed"
        >
            <el-button type="primary">
                选择文件
            </el-button>
        </file-uploader>
    </div>
</template>
<style scoped lang="less">
.file-uploader {
    width: 100%;
}
</style>