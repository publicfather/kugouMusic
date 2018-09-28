/**
 * Created by zijinhuren2 on 2018/9/26.
 */
import jsonp from './jsonp'
import {commonParams, options} from './config'

export default function getSongs () {
  // https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    loginUin: 2643291886,
    hostUin: 0
  })
  return jsonp(url, data, options)
}
