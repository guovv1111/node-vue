import { App } from 'vue';

// @ 循环directives，通过Vue.directive注册
export default{
    install(Vue: App) {
        Vue.directive('permission', {
            mounted: (el, bind) => {
                const pervalue = bind.value; 
                if(bind.value) {
                    const pers = ['add', 'del'];
                    const hasPer = pers.some(item => {
                        return pervalue === item;
                    });
                    if(!hasPer) {
                        el.style.display = 'none';
                    }
                }
            }
        });
       
    }
};