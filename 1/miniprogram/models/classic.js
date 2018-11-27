import {HTTP} from '../utils/http.js'

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


class ClassicModel extends HTTP{
  getLatest(sCallback){
    this.request({
      url: 'classic/latest',
      appkey: 'KOLDaSADSDLWWbF',
      success: (res, err) => {},
      fail: (res, err) => {
        sCallback(res)
      },
      data:data
    })
  }
}

export {ClassicModel};