import { onUnmounted } from 'vue';

export function useSetTimeout(times: number, callback: ()=> void) {
    let timer: NodeJS.Timeout = setTimeout(() => {});

    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        callback();
    }, times);

    onUnmounted(() => {
        if(timer) {
            clearTimeout(timer);
        }
    });
}