<template>
  <div class="home_container">
    2dsa
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import RN from '../../mds/rn.md'
  import marked from 'marked'
  export default {
    data() {
      return {
        msg: marked(RN, {
          sanitize: true
        })
      }
    },
    mounted() {
      console.log(this.msg)
      this.markdown()
    },
    components: {
      VueMarkdown
    },
    methods: {
      markdown() {
          marked.setOptions({
              renderer: new marked.Renderer(),
              gfm: true,
              tables: true,
              breaks: false,
              pedantic: false,
              sanitize: true,
              smartLists: true,
              smartypants: false
          });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>

