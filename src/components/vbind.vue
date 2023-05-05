<template>
 <h1 v-bind:style="color>Hello World!"</h1>
 <botton @click="ChangColor">Chang Color</botton>
<template>

<script>
export default{
  data(){
    return{
      color: { color: '#00000'}
    }
  },
methods: {
  ChangColor(){
    this.colors.color ='red'
  }
}
}
</script>