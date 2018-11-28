import { config } from '../config'

const data = {
  "content": "人生不能像做菜，把所有的料准备好才下锅",
  "fav_nums": 11,
  "id": 1,
  "image": "images/1.png",
  "index": 7,
  "like_status": 0,
  "pubdate": "2018-06-22",
  "title": "李安<<饮食男女>>",
  "type": 100
}

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
          console.log('utils/http.js' + ': method: success() -- status:2**')
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
          console.log('utils/http.js' + ': method: success() -- status:4**')
          params.fail(data)
        }
      },
      fail: (res, err)=>{
        // API调用失败
        params.fail(res, err)
      },
      data:data
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