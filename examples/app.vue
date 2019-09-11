<template>
  <div id="app" class="esign">
    <div class="esign-box">
      <vue-esign class="esignature" ref="esign" :width="800" :height="300" :isCrop="isCrop" :lineWidth="lineWidth" :lineColor="lineColor" :bgColor.sync="bgColor" />
    </div>
    <div class="esigh-btns">
      <button @click="handleReset">清空画板</button> 
      <button @click="handleGenerate">生成图片</button>
    </div>
    <div class="esigh-result">
      <img v-if="resultImg" :src="resultImg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      lineWidth: 6,
      lineColor: '#000000',
      bgColor: '',
      resultImg: '',
      isCrop: false
    }
  },

  methods: {
    handleReset () {
      this.$refs.esign.reset()
    },
    handleGenerate () {
      this.$refs.esign.generate().then(res => {
        this.resultImg = res
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>

<style scoped>
.esign {
  max-width: 1000px;
  margin: auto;
  padding: 10px;
}
.esigh-btns button{
  color: #fff;
  height: 40px;
  width: 100px;
  font-size: 16px;
  margin-right: 10px;
  outline: none;
  border-radius: 4px;
  background: #F60;
  border: 1px solid transparent; 
}
.esigh-btns button:active{ 
  color:#fff; 
  box-shadow: 0px 0px 50px orangered inset; 
}
.esigh-result {
  margin-top: 10px;
}
.esigh-result img {
  display: block;
  max-width: 100%;
  height: auto;
  border: 1px solid #ececee;
}
.esignature {
  margin: 10px 0;
  border: 2px solid #ccc;
}
</style>
