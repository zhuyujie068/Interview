import axios from "axios";
import qs from "qs";

// 设置公共请求地址
axios.defaults.baseURL = "http://bufabtec.com/";

// 设置超时时间
axios.defaults.timeout = 5000;

// 跨域是否允许携带凭证 （是否携带cookie）
axios.defaults.withCredentials = true;

/*
  设置请求传递数据的格式（看后端要求什么格式）
  application/x-www-form-urlencoded;charset=UTF-8

  application/json;charset=UTF-8
*/
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

/*  方法二：

    var instance = axios.create({
        baseURL:"http://bufabtec.com/",
        timeout:5000,
        headers:{'X-Custom-Header':'token'}
    })
   
*/

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 如开启 loading 对请求的参数做处理 添加 token 验证 等等

    // 添加 token 验证：可以从本地存储中获取，也可以从 vuex 中取，主要看怎么存储的
    const token = localStorage.getItem("token");
    token && (config.headers.Authorization = token);

    // 进行判断是 get 还是 post 请求,如果是 post 请求根据后端需求是否将参数进行 序列化。请求时： 'Content-Type': 'application/x-www-form-urlencoded' 需要序列化
    /*
        qs.stringify()是将对象 序列化成URL的形式，以&进行拼接.
            qs.stringify({username:'admin', password:'admin'})  ===>  username=admin&password=admin

        qs.parse()是将URL解析成对象的形式.
            const str = "username='admin'&password='admin'"  ===>  Object { username: "admin", password: "admin" }
    */
    if (config.method.toLowerCase() == "post") {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error); // 返回一个失败状态
  }
);

// 校验 HTTP 状态码 （一般公司不需要配置，默认成功状态码为 2xx ，如果想要获取 3XX 状态码返回的数据，可以把 3xx 也配置成为响应成功，就可以对 3xx 中的数据进行处理）
// axios.defaults.validateStatus = status => {
//   return /^(2|3)\d{2}$/.test(status); // 将 3xx 配置成为响应成功
// };

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // 可以关闭 loading , 根据请求回来的响应状态码进行数据处理
    return response.data; //返回数据
  },
  error => {
    let { response } = error;

    // 服务器返回结果
    if (response) {
      // 请求已发送，只不过状态不是200系列，设置不同状态码的不同处理

      switch (response.status) {
        case 401: // 当前请求需要用户验证（一般是未登录）
          // 在此可以给出一个提示或者跳转路由
          break;
        case 403: // 服务器已经理解请求，但是拒绝执行它 （一般是 token 过期）
          localStorage.removeItem("token");

          // 跳转到登录页

          break;
        case 404: // 找不到页面
          // 跳转到 404页面
          break;
      }
      return Promise.reject(response);
    }
    //服务器没有返回结果
    else {
      // 判断是否断网
      if (!window.navigator.onLine) {
        // 断开网络了，可以让其跳转到断网页面

        return;
      }

      return Promise.reject(error);
    }
  }
);

export default axios;
