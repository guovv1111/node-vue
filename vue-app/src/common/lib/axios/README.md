## 使用方法

```js
import { post, get, del, put } from '@/common/lib/axios';

// 1. get 方法的使用
get(url, query, config)
// 2. delete 方法的使用
del(url, query, config)
// 注意：
// 1. get、del 的第二个参数会拼接到 url 的后面
// 2. get、delete 根据规范一般把参数放在 url 中传递，即 query 参数中（query 参数是拼接在 url 后的，例如 ?a=1&b=2），为兼容不符合规范的老接口需要将参数放到 body 中传递，此时需要传递 config 参数，例如 del(url, null, { data: { 你的参数 } })

// 3. post 方法的使用
post(url, body, config)
// 4. put 方法的使用
put(url, body, config)
// 注意：
// 1. post、put 的第二个参数会作为 body 中的数据传递
// 2. post、put 根据规范一般把参数放到 body 中传递，即 body 参数中；如果为了兼容不规范的老接口需要将参数拼接在 url 后，可以直接修改 url，也可以将参数放到 config 参数中传递，例如 post(url, null, { params: { 你的参数 } })
```
