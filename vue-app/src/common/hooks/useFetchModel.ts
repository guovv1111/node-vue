import { useLoading } from './useLoading';
import { Ref, ref } from 'vue';
import { AxiosConfig, get, post, del, put } from '../lib/axios';

export type FetchModelResult<T, P> = {
    mutate(args0?: P, pathParams?: number | string): Promise<unknown>;
    loading: Ref<boolean>;
    data: Ref<T | null>;
    error: Ref<any>;
};

export type FetchModelOptions<P> = {
    immediate?: boolean;
    method?: 'get' | 'post' | 'delete' | 'put';
    params?: P;
    config?: AxiosConfig;
};

export function useFetchModel<T, P>(
    url: string,
    opts: FetchModelOptions<P>
): FetchModelResult<T, P> {
    const { immediate = true, method = 'get', params, config } = opts;

    // const completeUrl = /http(s?):\/\//.test(url) ? url : useBaseUrl(url)
    // const completeUrl = url;
    const data = ref(null) as Ref<T | null>;
    const error = ref<any>(null);

    const execute = (payload?: P, pathParams?: string) => {
        const completeUrl = pathParams ? `${url}/${pathParams}` : url;
        switch(method) {
            case 'get':
                return get<T, P>(completeUrl, payload, config)
                    .then((res) => {
                        data.value = res;
                        //  need clean error when req success
                        error.value = null;
                    })
                    .catch((err) => {
                        error.value = err;
                    });
            case 'delete':
                    return del<T, P>(completeUrl, payload, config)
                        .then((res) => {
                            data.value = res;
                            error.value = null;
                        })
                        .catch((err) => {
                            error.value = err;
                    });
            case 'post':
                return post<T, P>(completeUrl, payload, config)
                    .then((res) => {
                        data.value = res;
                        error.value = null;
                    })
                    .catch((err) => {
                        error.value = err;
                    });
            case 'put':
                return put<T, P>(completeUrl, payload, config)
                    .then((res) => {
                        data.value = res;
                        error.value = null;
                    })
                    .catch((err) => {
                        error.value = err;
                    });
            default:
                break;
        }
    };

    const [loading, mutate] = useLoading(execute);

    if(immediate) mutate(params);

    return {
        mutate,
        loading,
        data,
        error
    };
}
