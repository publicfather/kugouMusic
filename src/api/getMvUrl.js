/**
 * Created by zijinhuren2 on 2018/10/15.
 */
import {commonParams} from './config'
import axios from 'axios'
export default function getMvUrl (vids) {
  const url = '/api/getMvUrl'
  const data = Object.assign({}, commonParams, {
    data: {getMvUrl: {module: 'gosrf.Stream.MvUrlProxy', method: 'GetMvUrls', param: {vids: [vids], request_typet: '10001'}}},
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json'
  })
  return axios.get(url, {params: data}).then((res) => {
    return Promise.resolve(res.data)
  })
}
