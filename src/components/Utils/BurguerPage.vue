<template>
  <q-toolbar>
    <q-btn
      dense
      flat
      round
      icon="menu"
      @click="toggleLeftDrawer"
      class="text-white"
    />

    <!-- <div class="text-dark">Quasar v{{ $q.version }}</div> -->
  </q-toolbar>

  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    overlay
    behavior="mobile"
    elevated
    :width="200"
    :breakpoint="500"
    class="drawer-content"
  >
    <q-scroll-area class="fit">
      <q-list class="q-list">
        <div class="row justify-center q-mb-xl">
          <div class="col-4 flex flex-center q-mt-md">
            <img
              src="../../assets/logo.png"
              alt="Logo"
              class="imagem-borda"
              style="height: 90px; max-width: 400px"
            />
          </div>
        </div>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item
            clickable
            :to="menuItem.route"
            :active="menuItem.label === 'Outbox'"
            v-ripple
            class="text-white"
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
        <div class="column q-sair" :style="qsair">
          <div class="q-list-sair flex justify-center">
            <div class="q-list-sair-icon">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </div>
          </div>
          <div class="logout q-mt-xl">
            <div class="row">
              <div class="col flex justify-center">
                <div>
                  <q-btn
                    size="20px"
                    align="between"
                    flat
                    rounded
                    color="white"
                    label="SAIR"
                    icon="logout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Platform } from 'quasar';
defineOptions({
  name: 'burguer-layout',
});

import { ref } from 'vue';
//import imageSrc from '/logo.png';
//const imageSrc = ref('../../assets/logo.png');

const menuList = [
  {
    icon: 'table_bar',
    label: 'Mesas',
    route: '/',
    separator: false,
  },

  {
    icon: 'menu_book',
    label: 'Menus',
    separator: false,
  },
  {
    icon: 'inventory',
    label: 'Productos',
    separator: false,
  },
  {
    icon: 'book_online',
    label: 'Reservas',
    separator: false,
  },
  {
    icon: 'settings',
    label: 'Definições',
    separator: false,
  },
];

//https://codesandbox.io/p/sandbox/vue-3-drawer-cqbd0?file=%2Fsrc%2Fcomponents%2FDrawer.vue%3A6%2C24

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const qsair = computed(() => ({
  marginTop: Platform.is.ios ? '8rem' : '7rem',
  height: '100%',
  paddingTop: Platform.is.ios ? '70px' : '10px',

}));
//:class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
</script>

<style scoped>
.drawer-content {
  width: 100%;
  overflow: hidden;
  color: white;

  background: rgb(166, 192, 254);
  background: linear-gradient(
    90deg,
    rgba(166, 192, 254, 1) 0%,
    rgba(109, 66, 239, 1) 100%
  );
}

.q-list {
  height: 160px;
}

.q-list-sair {
}

.borda {
  border: 1px solid red;
}
</style>
