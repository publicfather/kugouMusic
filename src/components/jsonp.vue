<template>
  <div class="footer">
    footer
  </div>
</template>

<script>
import {getRemented} from '../api/recomm'
import {ERR_OK} from '../api/config'
export default{
  name: 'jsonp',
  data () {
    return {
    }
  },
  created () {
    this._getData()
  },
  methods: {
    _getData () {
      getRemented().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data)
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>
