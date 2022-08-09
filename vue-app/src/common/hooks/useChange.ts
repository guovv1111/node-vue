import { ref, watch, WatchStopHandle, Ref } from 'vue';

export function useChange(data: Ref<unknown> | Ref<unknown>[], flag?: boolean) {

    const isChange = ref(false);
    const watchHandle = ref<WatchStopHandle>();

    function startWatch() {
        stopWatch();
        watchHandle.value = watch(() => Array.isArray(data) ? data.map(item => item.value) : data.value, () => {
            isChange.value = true;
        }, { deep: true });
    }

    function stopWatch() {
        watchHandle.value?.();
        isChange.value = false;
    }

    return {
        isChange,
        startWatch
    };
}
