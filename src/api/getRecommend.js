/**
 * Created by zijinhuren2 on 2018/10/4.
 */
import jsonp from './jsonp'
import {commonParamsRecommend, options} from './config'

export default function getRecommend () {
  // 私有参数，传入不同的lan
  var privateParam = arguments[0]
  // https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParamsRecommend, privateParam)
  return jsonp(url, data, options)
}
