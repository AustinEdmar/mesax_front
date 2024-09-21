<template>
  <div class="row q-pa-md q-ml-lg q-mt-md text-dark">
    <div class="col-md-2">
      <div class="row">
        <div class="col-2 dispo-border flex flex-center">
          <div class="dispo-border-back"></div>
        </div>
        <span class="col-2 text-white">Disponivel</span>
      </div>
    </div>
    <div class="col-md-2 text-white">
      <div class="row">
        <div class="col-2 reserva-border flex flex-center">
          <div class="reserva-border-back"></div>
        </div>
        <span class="col-2">Ocupada</span>
      </div>
    </div>
    <div class="col-md-2 text-white">
      <div class="row">
        <div class="col-2 ocupada-border flex flex-center">
          <div class="ocupada-border-back"></div>
        </div>
        <span class="col-2">Reservada</span>
      </div>
    </div>

    <div class="col-md-2">
      <div class="row"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dispo-border {
  width: 20px;
  height: 20px;
  border: 1px solid rgb(0, 255, 8);
  border-radius: 50px;
  margin-right: 5px;
}

.dispo-border-back {
  width: 10px;
  height: 10px;
  border: 1px solid rgb(0, 255, 8);
  border-radius: 50px;
  background-color: rgb(0, 255, 8);
}

.reserva-border {
  width: 20px;
  height: 20px;
  border: 1px solid rgb(228, 228, 35);
  border-radius: 50px;
  margin-right: 5px;
}

.reserva-border-back {
  width: 10px;
  height: 10px;
  border: 1px solid rgb(228, 228, 35);
  border-radius: 50px;
  background-color: rgb(228, 228, 35);
}
.ocupada-border {
  width: 20px;
  height: 20px;
  border: 1px solid rgb(220, 49, 7);
  border-radius: 50px;
  margin-right: 5px;
}

.ocupada-border-back {
  width: 10px;
  height: 10px;
  border: 1px solid rgb(220, 49, 7);
  border-radius: 50px;
  background-color: rgb(220, 49, 7);
}
</style>
