<template>
  <q-page class="">
    <HeaderPage />

    <q-layout class=" ">

      <div class="scrollable-div  ">
        <!-- <div v-for="mesa in mesas" :key="mesa.id" class="col-xs-12 col-sm-6 col-md-4">
        <q-card @click="selecionarMesa(mesa)" :class="{ 'bg-primary text-white': mesa.id === mesaSelecionada?.id }">
          <q-card-section>
            <div class="text-h6">Mesa {{ mesa.numero }}</div>
            <div>Status: {{ mesa.status }}</div>
          </q-card-section>
        </q-card>
      </div> -->
        <div class="row  table-mb flex flex-center ">
          
          <q-btn flat class=" mesacursor " v-for="table in tables" :key="table.id" @click="selectTable(table)">
            <div class="container ">
              <div class="cont  ">
                <div class="main-box q-ma-xl" :class="{ 'bg-primary text-white': table.id === tableSelected?.id }">
  <div class="circle" :class="{
    'bg-positive': table.status === 'available',
    'bg-warning': table.status === 'reserved',
    'bg-negative': table.status === 'busy'
  }">
    <div class="div">
      <div class="text">Mesa</div>
      <div class="text-number">{{ table.number }}</div>
    </div>
  </div>
  <div class="square top"></div>
  <div class="square bottom"></div>
  <div class="square left"></div>
  <div class="square right"></div>
</div>
              </div>
            </div>
          </q-btn >
         
         
        </div>

      </div>
    </q-layout>


  </q-page>
</template>

<script setup lang="ts">
import HeaderPage from '../components/HeaderPage.vue';

import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useTableStore } from 'src/stores/table';

import { Table } from 'src/types';


defineOptions({
  name: 'IndexPage',
});

const router = useRouter();

const tableStore = useTableStore();


const tables = computed(() => tableStore.tables);
const tableSelected = computed(() => tableStore.tableSelected);

onMounted(() => {
  tableStore.fetchTables();
});

const selectTable = (table: Table) => {
  tableStore.selecionarMesa(table);
  router.push('/order');
};



</script>

<style scoped>
.scrollable-div {
  
  padding-bottom: 150px;
  height: 530px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
}

.borda {
  border: 1px solid red;
}

.mesacursor {
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 25px;
}



.div-table-mb {
  background-color: #f2f4f7;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-box {
  position: relative;
  background-color: #fff;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  margin: 30px; /* Adiciona espaçamento entre a main-box e os quadrados */
}

.circle {
  width: 70px;
  height: 70px;
  background-color: #ff0000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.text {
  color: white;
  font-weight: bold;
  font-size: 13px;
}
.text-number {
  color: white;
  font-weight: bold;
  font-size: 30px;
}

.square {
  width: 40px;
  height: 40px;
  background-color: #fff;
  position: absolute;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
}

.top {
  top: -35px; /* Ajuste para incluir o margin */
  left: 50%;
  transform: translateX(-50%);

  border-radius: 10px 10px 0px 0px;
  width: 45px;
  height: 30px;
}

.bottom {
  bottom: -35px; /* Ajuste para incluir o margin */
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0px 0px 10px 10px;
  width: 45px;
  height: 30px;
}

.left {
  left: -35px; /* Ajuste para incluir o margin */
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px 0px 0px 10px;
  width: 30px;
  height: 40px;
}

.right {
  right: -35px; /* Ajuste para incluir o margin */
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0px 10px 10px 0px;
  width: 30px;
  height: 40px;
}
</style>
