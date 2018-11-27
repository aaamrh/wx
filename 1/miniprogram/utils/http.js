import { config } from '../config'

export class HTTP{
  request(params){
    if(!params.method){
      params.method = "GET"
    }

    wx.request({

      url: config.api_base_url + params.url,
      method: params.method,
      header: {
        "content-type": "application/json",
        "appkey": params.appkey
      },
      success:(res, err)=>{
        let code = res.statusCode.toString();
        if(code.startsWith('2')){
          params.success(res)
        }
        else{
          // 服务器异常

          // 无论是服务器异常，还是API调用失败都统一给用户返回一个数据
          // wx.showToast({
          //   title: '错误 !!!',
          //   icon:'none',
          //   duration: 2000
          // })
          params.fail(params.data)
        }
      },
      fail: (res, err)=>{
        // API调用失败
        params.fail(res, err)
      }

    })
  }

  _show_error(error_code){
    wx.showToast({
      title: '错误 *_*!',
      icon: 'none',
      duration: 2000
    })
  }

}