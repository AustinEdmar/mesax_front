<template>
  <div class="flex flex-center header-menu-layout">
    <div class="q-pa-md text-dark menu-header">
      <div class="row">
        <div class="col-3">
          <q-input
            label="Procurar por mesas.."
            class="input-bg"
            dense
            rounded
            outlined
            v-model="search"
          >
            <template v-slot:append>
              <q-icon name="search" class="input-bg-icon" />
            </template>
          </q-input>
        </div>
        <div class="col flex flex-center">
          <q-item
            v-for="item in menuItems"
            :key="item.label"
            :to="item.route"
            :active="isActive(item.route)"
            clickable
            @click="handleClick(item.route)"
          >
            <q-item-section>
              {{ item.label }}
            </q-item-section>
          </q-item>
          <div class="row" :style="bells">
            <!-- <div class="icon-container notifications">
              <q-icon name="notifications" size="24px" />
              <q-badge class="badge" color="red" floating label="5" />
            </div> -->
            <div class="">
              <q-btn
                class="icon-container notifications"
                flat
                round
                color="danger"
                icon="notifications"
                size="14px"
              >
                <q-badge class="badge" color="red" floating label="5" />
              </q-btn>
            </div>

            <div class="">
              <q-btn
                class="icon-container shopping_cart"
                flat
                round
                color="danger"
                icon="shopping_cart"
                size="14px"
              >
                <q-badge class="badge" color="red" floating label="5" />
              </q-btn>
              <!-- <q-icon name="shopping_cart" size="24px" />-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
import { Platform } from 'quasar';

import { ref } from 'vue';

const search = ref('');

interface MenuItem {
  label: string;
  route: string;
}

/* interface Grid {
  grid: boolean | undefined;

} */

const showMenu = ref<boolean>(false);

// Obtenha instâncias do roteador e da rota atual
const router = useRouter();
const route = useRoute();

// Defina os itens do menu com tipagem
const menuItems: MenuItem[] = [
  { label: 'Mesas', route: '/' },
  { label: 'Menus', route: '/menus' },
  { label: 'Productos', route: '/productos' },
  { label: 'Reservas', route: '/reservas' },
];

// Verifique se o item está ativo
const isActive = (itemRoute: string): boolean => {
  return route.path === itemRoute;
};

// Navegue para a rota do item e feche o menu
const handleClick = (itemRoute: string): void => {
  router.push(itemRoute);
  showMenu.value = false;
};

const bells = computed(() => ({
  width: Platform.is.ios ? '30%' : '40%',

  paddingLeft: Platform.is.ios ? '80px' : '160px',
}));
</script>

<style scoped>
.icon-container {
  position: relative;
  display: inline-block;
  outline: none;
}

.badge {
  position: absolute;
  top: 4px; /* Ajuste conforme necessário */
  right: 5px; /* Ajuste conforme necessário */
  transform: scale(0.8); /* Ajuste o tamanho do badge se necessário */
}

.notifications {
  width: 35%;
  height: 35%;
  padding: 6px;
  border-radius: 50px;
  background-color: rgb(225, 225, 185);
  outline: none;
  color: yellow;
  cursor: pointer;
}
.shopping_cart {
  width: 35%;
  height: 35%;
  padding: 6px;
  border-radius: 50px;
  background-color: rgb(231, 119, 119);
  color: red;
  margin-left: 30px;
}

.bells {
}

.menu-item {
  position: relative;
}

.menu-item .q-item--active {
  color: white;
  background-color: #1976d2;
}

.menu-item .q-item--active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background-color: #ff5722;
}

.header-menu-layout {
  width: 90%;
  height: 80px;
}

.menu-header {
  width: 90%;
  margin-top: 15px;
  border-radius: 20px;
  border: 1px solid gray;
  background: rgb(166, 192, 254);
  background: linear-gradient(
    90deg,
    rgb(200, 209, 241) 100%,
    rgb(245, 246, 249) 100%
  );
}

.input-bg {
  background: white;
  border-radius: 20px;
}

.input-bg-icon {
  background: #f2f4f7;
  padding: 5px;
  border-radius: 20px;
}
</style>
