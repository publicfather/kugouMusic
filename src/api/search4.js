/**
 * Created by zijinhuren2 on 2018/10/5.
 */
import {commonParamsSearch} from './config'
// import { options} from './config'
import axios from 'axios'
// import jsonp from './jsonp'

export function searchByKeyWords (query, page, zhida) {
  const url = '/api/search'
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
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
  // return jsonp(url, data, options)
}
