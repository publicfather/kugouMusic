/**
 * Created by zijinhuren2 on 2018/10/5.
 */
import jsonp from './jsonp'
import {commonParamsSearch, options} from './config'

export default function search (query, page, zhida) {
  // https://c.y.qq.com/soso/fcgi-bin/client_search_cp
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = Object.assign({}, commonParamsSearch, {
    w: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    remoteplace: 'txt.mqq.all',
    uid: 0,
    needNewCode: 1,
    platform: 'h5'
  })
  return jsonp(url, data, options)
}
