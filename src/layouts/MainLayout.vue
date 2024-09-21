<template>
  <q-layout view="hHh lpR fFf ">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout',
});
</script>

<style>
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

.drawer-right {
  border-radius: 0px;
}

.q-header {
  background: rgb(166, 192, 254);
  background: linear-gradient(
    90deg,
    rgba(166, 192, 254, 1) 0%,
    rgba(109, 66, 239, 1) 100%
  );

  border-radius: 0px 0px 50px 50px;
}

.borda {
  border: 1px solid red;
}

html {
  background-color: #f2f4f7;
}

body {
  overflow: hidden;
}
</style>
