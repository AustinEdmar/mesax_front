<template>
  <div class="row ">
  <div class="col-md-4  side-login  ">
    <div class=" q-pa-md side-login-slide  ">
    <q-carousel
    style="height: 100%; border-radius: 20px;"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../assets/login-side.png" />
      <q-carousel-slide :name="2" img-src="../assets/divu.webp" />
      <q-carousel-slide :name="3" img-src="../assets/olaclick.webp" />
      
    </q-carousel>
  </div>
</div>
  <div class="col-md-8">
  
      <q-page class="flex flex-center">
    <q-card class="q-pa-md card-opacity card-bg " style="max-width: 750px; width: 300%; border-radius: 20px;" >
      <q-card-section>
        <div class="text-h6 text-center q-mb-md">LOGIN</div>
        <p class="text-center q-mb-md">Insira os dados de acesso</p>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input
            v-model="email"
            rounded
            outlined
            type="email"
            label="Email"
            placeholder="Insira o seu email"
            class="q-mb-md custom-input-border"
          />
          <q-input
            v-model="password"
            
            rounded
           outlined
            type="password"
            label="Password"
            placeholder="Insira a sua senha"
            class="q-mb-md custom-input-border "
          />
          
          <div class="text-right q-mb-md">
            <q-btn flat label="Esqueci a minha senha" />
          </div>

          <q-btn
            label="Entrar"
            type="submit"
           rounded
           outlined
            class="full-width q-mb-md btn-login"
          />

          <div class="text-center q-mt-md">
            Não tem conta? <q-btn flat label="Registre-se"  />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const slide = ref(1)
const autoplay = ref(true)
const email = ref('austinedmar@gmail.com');
const password = ref('923.eddy');

const onSubmit = async () => {
  await authStore.login({ email: email.value, password: password.value });
  if (authStore.isAuthenticated) {
    router.push('/'); 
  }
};
</script>

<style scoped>
label{
  color: white;
}

.side-login{
  height: 100vh;
  
}

.side-login-slide{
  height: 92vh;
  padding-top: 30px;
  
}

.borda {
  border: 1px solid red;
}

.btn-login {
  color: white;
  font-size: 20px;
  font-weight: bolder;
  background: rgb(166, 192, 254);
  background: linear-gradient(
    90deg,
    rgba(166, 192, 254, 1) 0%,
    rgba(109, 66, 239, 1) 100%
  );
}

.card-bg {
  background-image: url('../assets/bkg.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

.card-opacity {
  color: black;
  
  box-shadow: 0px 4px 8px linear-gradient(
    90deg,
    rgba(166, 192, 254, 1) 0%,
    rgba(109, 66, 239, 1) 100%
  ); /* Mantém o efeito de sombra */
 
}


.custom-input-border  {
   border: 2px solid rgb(166, 192, 254); /* Define a cor da borda */
   border-radius: 30px;
}

.custom-input-border .q-field__control:focus-within {
   border: 2px solid rgb(166, 192, 254); /* Define a cor da borda */
  box-shadow: 0px 4px 8px linear-gradient(
    90deg,
    rgba(166, 192, 254, 1) 0%,
    rgba(109, 66, 239, 1) 100%
  );
}
</style>