/**
 * Created by zijinhuren2 on 2018/10/15.
 */
import {commonParams} from './config'
import axios from 'axios'
export default function getDiscDetail (disstid) {
  const url = '/api/getDiscDetail'
  const data = Object.assign({}, commonParams, {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid,
    format: 'json',
    g_tk: 2002381126
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
