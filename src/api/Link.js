import service from "../util/service.js"

// 封装相关的数据请求

let link=(url,method="get",data,params)=>{
    return new Promise((resolve,reject)=>{
        service.request({
            url,
            method,
            data,
            params
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export default link