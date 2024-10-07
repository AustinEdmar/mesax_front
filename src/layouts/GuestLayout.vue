<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.q-layout {
  background: linear-gradient(
      90deg,
      rgba(166, 192, 254, 0.9) 0%,
      rgba(109, 66, 239, 0.6) 100%
    ),
    url('../assets/bkg.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

}

.card-bg {
  background-image: url('../assets/bkg.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9;
}

.borda {
  border: 1px solid red;
}
</style>