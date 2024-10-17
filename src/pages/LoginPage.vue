<template>
  <div class="login-container" style="position: relative">
    <!-- Logo no canto superior esquerdo -->
    <div class="logo" style="position: absolute; top: 20px; left: 20px">
      SEU LOGO
    </div>

    <div class="col-login">
      <q-page class="flex flex-center">
        <q-card
          class="q-pa-md card-opacity card-bg"
          style="max-width: 550px; width: 300%; border-radius: 20px"
        >
          <q-card-section class="btn-login">
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
                class="q-mb-md custom-input-border"
              />

              <div class="text-right q-mb-md text-green">
                <q-btn flat label="Esqueci a minha senha" />
              </div>

              <div class="btn-entrar flex flex-center">
                <q-btn
                  label="Entrar"
                  type="submit"
                  stack
                  rounded
                  outlined
                  class="q-mb-md button-login"
                />
              </div>

              <div class="text-center q-mt-md">
                Não tem conta?
                <q-btn flat glossy color="blue-10" label="Registre-se" />
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
//import { useAuthStore } from 'stores/authStore';
import { useRouter } from 'vue-router';

//const authStore = useAuthStore();
const router = useRouter();

const email = ref('austinedmar@gmail.com');
const password = ref('923.eddy');

const onSubmit = async () => {
 // await authStore.login({ email: email.value, password: password.value });
 // if (authStore.isAuthenticated) {
    router.push('/');
 // }
};
</script>

<style scoped>
label {
  color: white;
}

.side-login {
  height: 90vh;
  width: 40%;
}

.side-login-slide {
  height: 98vh;
  padding-top: 30px;
}

.borda {
  border: 1px solid red;
}

.col-login {
  width: 100%;
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

.button-login {
  color: white;
  width: 400px;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bolder;
  box-shadow: #41648a;
  background: rgb(166, 192, 254);
  background: linear-gradient(
    90deg,
    rgb(80, 129, 245) 0%,
    rgba(109, 66, 239, 1) 100%
  );
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

/* Efeito glossy */
.button-login::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
  opacity: 0.6;
  border-radius: inherit; /* Mantém o mesmo arredondamento do botão */
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

/* Efeito ao passar o mouse */
.button-login:hover {
  background-color: #007bff;
  color: white;
}

.button-login:hover::before {
  opacity: 0.8; /* Aumenta o efeito glossy */
}

.card-bg {
  background-image: url('../assets/bkg.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-opacity {
  color: black;

  box-shadow: 0px 4px 8px
    linear-gradient(
      90deg,
      rgba(166, 192, 254, 1) 0%,
      rgba(109, 66, 239, 1) 100%
    ); /* Mantém o efeito de sombra */
}

.custom-input-border {
  border: 2px solid rgb(166, 192, 254); /* Define a cor da borda */
  border-radius: 30px;
}

.custom-input-border .q-field__control:focus-within {
  border: 2px solid rgb(166, 192, 254); /* Define a cor da borda */
  box-shadow: 0px 4px 8px
    linear-gradient(
      90deg,
      rgba(166, 192, 254, 1) 0%,
      rgba(109, 66, 239, 1) 100%
    );
}
</style>
