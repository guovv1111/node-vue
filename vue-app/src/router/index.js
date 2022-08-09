import { createRouter , createWebHashHistory } from 'vue-router';
import About from '@/views/about/index.vue';
import Record from '@/views/record/index.vue';
import DateFormate from '@/views/common/date/index.vue';
import Upload from '@/views/common/upload/index.vue';

const routes = [
    { path: '/', component: About },
    { path: '/record', component: Record },
    { path: '/common/date', component: DateFormate },
    { path: '/common/upload', component: Upload }
]

export const router = createRouter({
    history:createWebHashHistory(),
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    routes, // `routes: routes` 的缩写
});