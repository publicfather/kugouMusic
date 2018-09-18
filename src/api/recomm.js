/**
 * Created by zijinhuren2 on 2018/9/3.
 */
import jsonp from '../js/jsonp.js'
import {commonParams, options} from '@/api/config.js'
// 把congfig.js 对象导入进来
export function getRemented () {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=47295634405914032&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w=飞轮海&g_tk=5381&jsonpCallback=MusicJsonCallback8751154254930736&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0'
  // 例如我想要的地址是：https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg
  const data = Object.assign({}, commonParams, {
    // 这些参数都是可以在network Header 下 query string parameters有
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
