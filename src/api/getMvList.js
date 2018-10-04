/**
 * Created by zijinhuren2 on 2018/9/26.
 */
import jsonp from './jsonp'
import {commonParams, options} from './config'

export default function getMvList () {
  // 私有参数，传入不同的lan
  var privateParam = arguments[0]
  // https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg
  const url = 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag'
  const data = Object.assign({}, commonParams, privateParam)
  return jsonp(url, data, options)
}
