export const API = "http://10.99.50.89:9000";

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
  url = `${API}${url}${isGet && objToQueryStr(data)}`;
  // }
  const options = {
    method,
    body: isGet ? undefined : JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  };
  return new Promise((res, rej) => {
    fetch(url, options)
      .then(response => {
        response.json().then((data: any) => {
          if (data.code === 200) {
            res(data);
            return;
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
