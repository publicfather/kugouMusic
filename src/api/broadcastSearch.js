import axios from 'axios'
export default function broadcastSearch (keywords) {
  const url = '/api/broadcastSearch'
  const data = Object.assign({}, {
    core: 'all',
    kw: keywords,
    spellchecker: true
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
