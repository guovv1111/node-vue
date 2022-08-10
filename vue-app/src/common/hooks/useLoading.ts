import { ref, Ref, watch, unref, WatchStopHandle } from 'vue';
import { isDef } from '../utils/index';
import { Fn, MaybeRef } from './types';

function setLoading(loading: Ref<boolean>, timeout?: number) {
    if(isDef(timeout)) {
        setTimeout(() => {
            loading.value = false;
        }, timeout);
    } else {
        loading.value = false;
    }
}

export type LoadingReturn = [
    Ref<boolean>,
    (...args: any[])=> Promise<unknown>
];

export type LoadingWithWatchReturn = [Ref<boolean>, WatchStopHandle];

export function useLoading(args: Fn, timeout?: number): LoadingReturn;

export function useLoading<T>(
    args: MaybeRef<Promise<T>>,
    timeout?: number
): LoadingWithWatchReturn;

/**
 *  loading state auto flow duration req
 * @param req
 * @param timeout
 * @returns
 */
export function useLoading(observer: any, timeout: any) {
    const loading = ref(false);

    if(typeof observer.then === 'function') {
        loading.value = true;

        const watchFn = watch(
            () => unref(observer),
            () => {
                observer
                    .then(() => {
                        setLoading(loading, timeout);
                    })
                    .catch(() => {
                        loading.value = false;
                    });
            },
            {
                immediate: true
            }
        );

        return [loading, watchFn];
    }
    const watchFn = (...args: any[]) => {
        loading.value = true;
        return Promise.resolve(observer(...args))
            .then(() => {
                setLoading(loading, timeout);
            })
            .catch(() => {
                loading.value = false;
            });
    };
    return [loading, watchFn];
}
