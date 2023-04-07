<template>
  <div>
    <div>
      <select v-model="sel_reg" @change="changeRegion">
        <option v-for="r in regions" :key="r.noc">{{ r.noc }}  {{ r.notes }}  {{ r.region }}</option>
      </select>
    </div>
    <div>
      <select v-model="sel_event" @change="changeEvent">
        <option v-bind:key="e" v-for="e in serializedEvents" :value="e">{{e}}</option>
      </select>
    </div>
  
  <DataTable class="dTable" width="100%" :data="medals" :options="options">
    <thead>
      <tr>
        <th v-for="c in columns" :key="c">{{ c }}</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </DataTable>

  
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <p>Overall medals of <b>{{sel_reg}}</b></p>
       <VuePlotly :data="p1" :layout="{barmode: 'group'}"></VuePlotly> <br>
       <p>Medals by sex of <b>{{sel_reg}}</b></p>
       <VuePlotly :data="p2" :layout="{barmode: 'group'}"></VuePlotly><br>
       <p>Weight by age of <b>{{sel_reg}}</b></p>
       <VuePlotly :data="p3" :layout="{barmode: 'group'}"></VuePlotly><br>
       <p>Height by age of <b>{{sel_reg}}</b></p>
       <VuePlotly :data="p4" :layout="{barmode: 'group'}"></VuePlotly><br>
       <p>Counting medals of <b>{{sel_reg}}</b> through history </p>
      <HelloWorld :data="p5" />
     
     
     </div>
   </div>
 </div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5'
import { VuePlotly } from 'vue3-plotly';

import { api_medals, api_events, api_medals2, api_regions, api_weight_by_age, api_event_sex, api_height_by_age, api_medals_by_noc_year} from '@/api'

export default {
  name: 'App',
  components: {
    DataTable,
    VuePlotly,
    HelloWorld
    
  },
  data(){
    return{
      medals:[],
      columns:["Medal","Count"],
      p1:[],
      p2:[],
      p3:[],
      p4:[],
      p5:[],
      events:{},
      regions:{},
      sel_reg:{},
      sel_event:{},
      serializedEvents:[],
      options: {
        searching: false,
        ordering: false,
        lengthChange: false,
        paginate: false
      }
    }
  },
  setup(){
    DataTable.use(DataTablesLib)

  },
  async mounted(){

    this.regions = await api_regions()
    this.events = await api_events()
    console.log(this.events)
    for(var e in this.events){
     // let ev = e.substring(2)
      this.serializedEvents.push(this.events[e])
    }

  },
  methods:{
    async changeRegion(){
      console.log(this.sel_reg)
      let region = this.sel_reg.split(" ")[0]
      this.p1 = await api_medals2(region)
      this.p2 = await api_event_sex(region)
      this.p3 = await api_weight_by_age(region)
      this.p4 = await api_height_by_age(region)
      this.p5 = await api_medals_by_noc_year(region)
      this.medals = await api_medals(region)
      // console.log(await api_cbs2(temp_reg))
    },
    async changeEvent(){
      let temp_reg = this.sel_reg.split(" ")[0]
      this.p1 = await api_medals2(temp_reg)
      this.p2 = await api_event_sex(temp_reg)
      this.p3 = await api_weight_by_age(region)
      this.p4 = await api_height_by_age(region)
      this.p5 = await api_medals_by_noc_year(region)
      this.medals = await api_medals(temp_reg)
      // console.log(await api_cbs2(temp_reg))
    }
  }
}
</script>

<style>

@import 'bootstrap';
@import 'datatables.net-bs5';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #1a1a1a; 
  color: #fff; 
}

select {
  background-color: #2b2b2b; 
  color: #fff; 
}

option {
  background-color: #1a1a1a; 
  color: #fff; 
}

.table {
  background-color: #2b2b2b; 
  color: #fff; 
}

.vue-plotly {
  background-color: #2b2b2b; 
  color: #fff; 
}

p{
  color: white
}
.dTable{
  color:white;
  margin: 0 auto;
}
.dTable thead {
  display: table-header-group;
  text-align: center;
}
</style>
