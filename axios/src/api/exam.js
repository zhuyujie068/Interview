import axios from "./http";

function login() {
  return axios.post("/login", {
    xxx: "xxx" //传递参数
  }); // 接口地址
}

export default {
  login
};
