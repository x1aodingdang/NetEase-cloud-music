import { $APICheckMusic } from "./apiList";

export const API = process.env.REACT_APP_API || "http://localhost:3000";

// 不需要  判断 code 码 等于200的接口
const noCode200 = [$APICheckMusic];

export interface IHttpOpt {
  method?: "get" | "post"; // 暂时两种方法
  data?: {}; // 请求的数据  json 格式
  headers?: {}; // 请求头
}
export const http = (url: string, opt?: IHttpOpt) => {
  if (typeof window.fetch !== "function") {
    const errorMsg = "浏览器不支持 fetch 请更换最新版chrome浏览器";
    alert(errorMsg);
    throw new Error(errorMsg);
  }

  //   body?: string; // 请求的数据  这个是吧 data 转成 string
  const { method = "get", data = {}, headers = {} } = opt || {};
  const isGet = method === "get";
  // if (isGet) {
  const urlQuery = `${API}${url}${isGet && objToQueryStr(data)}`;
  // }
  const options = {
    method,
    body: isGet ? undefined : JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  };
  return new Promise<any>((res, rej) => {
    fetch(urlQuery, options)
      .then(response => {
        response.json().then((data: any) => {
          if (noCode200.includes(url)) {
            return res(data);
          }
          if (data.code === 200) {
            return res(data);
          }
          rej(data);
        });
      })
      .catch(err => {
        // alert(`${url}请求出错了`);
        throw new Error(`${url}请求出错了`);
      });
  });
};

/**
 *
 * @param obj  {type: 2}
 * @returns {string}  ?type=2&
 */
function objToQueryStr(obj: any): string {
  let str = "?";
  for (const key in obj) {
    let val = obj[key];
    str += `${key}=${val}&`;
  }
  return str;
}
