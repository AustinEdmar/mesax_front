<template>
  <q-header :style="headerStyle" class="bg-darks rounded ">
    <div class="row">
      <div class="col-md-1 q-mt-md"><burguer /></div>

      <MenuHeader v-if="props.showInternalComponents" />
    </div>

    <StatusHeader v-if="props.showInternalComponents" />
  </q-header>
</template>

<script setup lang="ts">
import StatusHeader from './Utils/Status-header.vue';
import burguer from './Utils/BurguerPage.vue';
import MenuHeader from './Utils/Menu-header.vue';
import { computed } from 'vue';
import { defineProps } from 'vue';
import { Platform } from 'quasar';
defineOptions({
  name: 'Header-layout',
});

const props = defineProps({
  showInternalComponents: {
    type: Boolean,
    default: true,
  },
});

const headerStyle = computed(() => ({
  height: Platform.is.android ? '150px' : '150px',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '15px',
  width: '100%',
  boxShadow: 'rgb(166, 192, 254)',
}));
</script>

<style scoped>
q-header {
  background-color: black;
}
.borda {
  border: 1px solid red;
}
</style>
