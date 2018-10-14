/**
 * Created by zijinhuren2 on 2018/10/14.
 */
import {commonParamsMvList} from './config'
import axios from 'axios'
export default function getMusic (songmid) {
  const url = '/api/music'
  const data = Object.assign({}, commonParamsMvList, {
    songmid: songmid,
    filename: 'C400' + songmid + '.m4a',
    guid: 7981028948,
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    cid: 205361747,
    uid: 0,
    g_tk: 1928111839
  })
  return axios.get(url, {params: data}).then((res) => {
    return Promise.resolve(res.data)
  })
}
