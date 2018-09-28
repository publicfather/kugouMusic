/**
 * Created by zijinhuren2 on 2018/9/28.
 */
import axios from 'axios'

export default function getList () {
  axios.get('/static/mock/list.json')
    .then(function (res) {
      // console.log(res.data.list)
      return res.data
    })
}
