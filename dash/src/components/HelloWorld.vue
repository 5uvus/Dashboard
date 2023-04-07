<template>
  <VuePlotly :data="data" :layout="{barmode: 'group'}"></VuePlotly>
</template>

<script>
import { VuePlotly } from 'vue3-plotly';
export default {
   name:"HelloWorld",
   components: {
   VuePlotly
   
 },
   props:{
       data:{}
   }
   
}
</script>