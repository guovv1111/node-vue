import { Ref, ComponentPublicInstance } from 'vue';

export type Fn = ()=> void;

export type AnyFn = (...args: any[])=> any;

export type MaybeRef<T> = T | Ref<T>;

export type MaybeElementRef = MaybeRef<
    HTMLElement | ComponentPublicInstance | undefined | null
>;
