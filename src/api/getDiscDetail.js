/**
 * Created by zijinhuren2 on 2018/10/15.
 */
import {commonParams} from './config'
import axios from 'axios'
export default function getDiscDetail () {
  const url = '/api/getDiscDetail'
  const data = Object.assign({}, commonParams, {
    disstid: '4385554939',
    json: 1,
    utf8: 1,
    onlysong: 0,
    g_tk: 5381,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
