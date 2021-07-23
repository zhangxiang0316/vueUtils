import axios from 'axios';
import QS from 'qs';
// import {
//     Message,
//     Loading
//   } from 'element-ui'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/testApi';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://api.123dailu.com/';
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
// axios.interceptors.request.use(
//     config => {
//         // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//         // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//         const token = 'eyJhbGciOiJIUzI1NiJ9.eyJuYmYiOjE2MTY3NDY3NTksImlzcyI6ImdhdGV3YXkiLCJ1c2VyIjoiUGV0UGVLWUY0czJXay96dS9yZzRLMnJHbDJkdnM3emUvYjBnVHV2T3BzbGRzYVZxc2toNEVQREwzWE4rbWxJSkExYnlUbFVaTFNCZVBPVUdCNmdVcTRkZmpaNHFzdTRseGNra29WTkl3Rm1kalR1QjlvaUIyazRBNVVqemZrUnhEL1VsS1Irc0pMODRaeWlqRUNzdjR3PT0iLCJpYXQiOjE2MTY3NDY3NTl9.9nTDBWuiPDKmPAf973CziRuVa4XGWIPB8WmTcCy80tI';
//         token && (config.headers.Token = token);
//         return config;
//     },
//     error => {
//         return Promise.error(error);
//     })

// 响应拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.status === 200) {
//             return Promise.resolve(response);
//         } else {
//             return Promise.reject(response);
//         }
//     },
//     // 服务器状态码不是200的情况
//     error => {
//         if (error.response.status) {
//             switch (error.response.status) {
//                 // 401: 未登录
//                 // 未登录则跳转登录页面，并携带当前页面的路径
//                 // 在登录成功后返回当前页面，这一步需要在登录页操作。
//                 case 401:
//                     router.replace({
//                         path: '/login',
//                         query: { redirect: router.currentRoute.fullPath }
//                     });
//                     break;
//                 // 403 token过期
//                 // 登录过期对用户进行提示
//                 // 清除本地token和清空vuex中token对象
//                 // 跳转登录页面
//                 case 403:
//                 Message({
//                         message: '登录过期，请重新登录',
//                         type: 'error'
//                     });
//                     // 清除token
//                     localStorage.removeItem('token');
//                     store.commit('loginSuccess', null);
//                     // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//                     setTimeout(() => {
//                         router.replace({
//                             path: '/login',
//                             query: {
//                                 redirect: router.currentRoute.fullPath
//                             }
//                         });
//                     }, 1000);
//                     break;
//                 // 404请求不存在
//                 case 404:
//                 Message({
//                         message: '网络请求不存在',
//                         type: 'error'
//                     });
//                 break;
//                 // 其他错误，直接抛出错误提示
//                 default:
//                 Message({
//                         message: error.response.data.message,
//                         duration: 1500,
//                         ype: 'info'
//                     });
//             }
//             return Promise.reject(error.response);
//         }
//     }
// );

export default {
    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    get(url, params) {
        return new Promise((resolve, reject) => {
            console.log(`%c请求:${url}`, 'color:green', params);
            axios.get(url, {
                params: params
            })
                .then(res => {
                    console.log(`%c响应:${url}`, 'color:red', JSON.parse(res));
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    },
    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    post(url, params) {
        return new Promise((resolve, reject) => {
            console.log(`%c请求:${url}`, 'color:blue', params);
            axios.post(url, QS.stringify(params))
                .then(res => {
                    console.log(`%c响应成功:${url}`, 'color:green', QS.parse(res));
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(`%c响应失败:${url}`, 'color:red', QS.parse(err));
                    reject(err.data)
                })
        });
    }
}
