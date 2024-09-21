<template>
  <q-page class="pa">
    <q-header :style="headerStyle">
      <div class="row q-mt-md">
        <div class="col-md-1"><burguer /></div>
        <div class="col-md-11">
          <q-toolbar class="flex justify-space-between">
            <q-btn
              class="icon-container"
              flat
              round
              color="white"
              icon="arrow_back"
              size="16px"
              @click="goToRoute"
            >
              <span class="pedido-back q-ml-md font-bold text-white"
                >Pedido mesa: A-23</span
              >
            </q-btn>
            <div class="q-ml-auto q-mr-xl">
              <div class="">
                <q-btn
                  class="icon-container shopping_cart"
                  flat
                  round
                  color="danger"
                  icon="shopping_cart"
                  size="14px"
                  @click="toggleRightDrawer"
                >
                  <q-badge class="badge" color="red" floating label="5" />
                </q-btn>
                <!-- <q-icon name="shopping_cart" size="24px" />-->
              </div>
            </div>
          </q-toolbar>
        </div>
      </div>

      <div class="search flex flex-center">
        <div class="pro">
          <q-input
            label="Procurar por mesas.."
            class="input-bg"
            rounded
            outlined
            v-model="search"
            style="width: 800px"
          >
            <template v-slot:append>
              <q-icon name="search" class="input-bg-icon" />
            </template>
          </q-input>
        </div>
      </div>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      :width="400"
      behavior="mobile"
      class="drawer-right"
    >
      <q-page padding>
        <div class="row items-center q-mb-md">
          <div class="col">
            <span class="label-category text-grey-8">Pedidos</span>
          </div>
          <div class="col-auto icon-delete-cart flex flex-center">
            <q-btn flat icon="delete" color="red" />
          </div>
        </div>

        <div class="q-mb-md tableid">
          <div class="text-body1 text-bold text-grey-8">
            Numero da Mesa:
            <strong class="q-ml-lg text-black text-bold">A-23</strong>
          </div>
          <div class="text-body2 text-bold text-grey-8">
            ID do Pedido:
            <strong class="q-ml-lg text-black text-bold">A-013212</strong>
          </div>
        </div>

        <div class="q-mb-md">
          <div class="scroll-div">
            <q-card flat bordered class="q-pa-sm q-mt-sm">
              <div class="row">
                <div class="col-auto q-mr-sm">
                  <q-img
                    src="../assets/chicken.avif"
                    style="width: 100px; height: 100px; border-radius: 15px"
                  />
                </div>
                <div class="col">
                  <div class="text-body1 text-bold row">
                    <span class="q-mr-sm">Cozido de Peixe</span>
                    <q-btn
                      flat
                      dense
                      class="q-px-md q-ml-auto"
                      icon="delete"
                      color="red"
                    />
                  </div>

                  <div class="row items-center q-mt-sm">
                    <div class="text-caption text-bold text-green q-mr-sm">
                      32 Stock
                    </div>
                    <q-btn flat dense icon="remove" class="text-grey-8" />
                    <q-badge>3</q-badge>
                    <q-btn flat dense icon="add" class="text-grey-8" />
                  </div>
                  <div class="text-body2 text-grey-8 text-bold">
                    Preço Total: <span class="text-orange-10">19.500 kz</span>
                  </div>
                </div>
              </div>
            </q-card>
            <q-card flat bordered class="q-pa-sm q-mt-sm">
              <div class="row">
                <div class="col-auto q-mr-sm">
                  <q-img
                    src="../assets/food3.avif"
                    style="width: 100px; height: 100px; border-radius: 15px"
                  />
                </div>
                <div class="col">
                  <div class="text-body1 text-bold row">
                    <span class="q-mr-sm">Picanha ao alho</span>
                    <q-btn
                      flat
                      dense
                      class="q-px-md q-ml-auto"
                      icon="delete"
                      color="red"
                    />
                  </div>

                  <div class="row items-center q-mt-sm">
                    <div class="text-caption text-bold text-red q-mr-sm">
                      01 Stock
                    </div>
                    <q-btn flat dense icon="remove" class="text-grey-8" />
                    <q-badge>3</q-badge>
                    <q-btn flat dense icon="add" class="text-grey-8" />
                  </div>
                  <div class="text-body2 text-grey-8 text-bold">
                    Preço Total: <span class="text-orange-10">10.500 kz</span>
                  </div>
                </div>
              </div>
            </q-card>
            <q-card flat bordered class="q-pa-sm q-mt-sm">
              <div class="row">
                <div class="col-auto q-mr-sm">
                  <q-img
                    src="../assets/food7.avif"
                    style="width: 100px; height: 100px; border-radius: 15px"
                  />
                </div>
                <div class="col">
                  <div class="text-body1 text-bold row">
                    <span class="q-mr-sm">Arroz de frango grego</span>
                    <q-btn
                      flat
                      dense
                      class="q-px-md q-ml-auto"
                      icon="delete"
                      color="red"
                    />
                  </div>

                  <div class="row items-center q-mt-sm">
                    <div class="text-caption text-bold text-green q-mr-sm">
                      20 Stock
                    </div>
                    <q-btn flat dense icon="remove" class="text-grey-8" />
                    <q-badge>1</q-badge>
                    <q-btn flat dense icon="add" class="text-grey-8" />
                  </div>
                  <div class="text-body2 text-grey-8 text-bold">
                    Preço Total: <span class="text-orange-10">12.000 kz</span>
                  </div>
                </div>
              </div>
            </q-card>
            <q-card flat bordered class="q-pa-sm q-mt-sm">
              <div class="row">
                <div class="col-auto q-mr-sm">
                  <q-img
                    src="../assets/chicken.avif"
                    style="width: 100px; height: 100px; border-radius: 15px"
                  />
                </div>
                <div class="col">
                  <div class="text-body1 text-bold row">
                    <span class="q-mr-sm">Cozido de Peixe</span>
                    <q-btn
                      flat
                      dense
                      class="q-px-md q-ml-auto"
                      icon="delete"
                      color="red"
                    />
                  </div>

                  <div class="row items-center q-mt-sm">
                    <div class="text-caption text-bold text-green q-mr-sm">
                      32 Stock
                    </div>
                    <q-btn flat dense icon="remove" class="text-grey-8" />
                    <q-badge>3</q-badge>
                    <q-btn flat dense icon="add" class="text-grey-8" />
                  </div>
                  <div class="text-body2 text-grey-8 text-bold">
                    Preço Total: <span class="text-orange-10">19.500 kz</span>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>

        <div class="q-mt-lg">
          <q-separator />
          <div class="row justify-between q-my-md">
            <div class="text-body1 text-grey-8">Subtotal</div>
            <div class="text-body1 text-bold text-grey-8">11.500 kz KZ</div>
          </div>
          <div class="row justify-between q-my-md">
            <div class="text-body1 text-grey-8">Taxa IVA</div>
            <div class="text-body1 text-bold text-grey-8">2.000 KZ</div>
          </div>
          <div class="row justify-between text-bold q-my-md">
            <div class="text-h6">Total a pagar</div>
            <div
              class="text-h4 text-orange text-bold text-weight-bolder text-h4"
            >
              19.500 KZ
            </div>
          </div>
        </div>

        <q-btn rounded unelevated class="full-width btn-pagar">Pagar</q-btn>
      </q-page>
    </q-drawer>

    <q-layout class="">
      <q-page-container class="q-mr-auto q-ml-auto">
        <div class="label-category q-mt-md q-mb-sm text-bold text-grey-8">
          <label class="label q-ml-lg q-mt-xl">Categorias</label>
        </div>
        <div class="category">
          <div class="">
            <q-tabs
              v-model="tab"
              inline-label
              indicator-color="transparent"
              active-color="tabs-color"
              class="tabs-color"
              exact
            >
              <div class="tabs-borda">
                <q-tab name="food" icon="fastfood" label="Refeições" />
              </div>
              <div class="tabs-borda">
                <q-tab name="alarms" icon="wine_bar" label="Bebidas" />
              </div>
              <div class="tabs-borda">
                <q-tab name="movies" icon="cake" label="Sobremesas" />
              </div>
            </q-tabs>

            <q-tab-panels v-model="tab" animated class="tab-panels">
              <q-tab-panel name="food" class="">
                <div class="production-content scrollable-div">
                  <div class="row">
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/prod-ham.png"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/chicken.avif"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/coxinhas.avif"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food1.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food1.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food2.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food2.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food4.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food5.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food6.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/food7.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/frango.avif" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img src="../assets/hambu.png" class="card-img-top" />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/prod-ham.png"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/prod-ham.png"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/prod-ham.png"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/prod-ham.png"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                    <div
                      class="q-pa-none q-mb-md card-customer"
                      :style="customerheight"
                      bordered
                      flat
                    >
                      <!-- Imagem do prato -->
                      <q-img
                        src="../assets/prod-ham.png"
                        class="card-img-top"
                      />

                      <!-- Conteúdo do card -->
                      <div class="q-pa-md">
                        <!-- Nome do prato -->
                        <div class="text-bold label-product text-grey-8">
                          Bife a Milaneza
                        </div>

                        <!-- Disponibilidade -->
                        <div class="text-grey text-caption q-mt-xs">
                          Disponível 15 pratos
                        </div>

                        <!-- Preço -->
                        <div
                          class="text-bold label-product text-orange-10 text-h5 q-mt-md"
                        >
                          8.500 AKZ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script setup lang="ts">
import burguer from '../components/Utils/BurguerPage.vue';
import { computed } from 'vue';
import { Platform } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const search = ref('');
const tab = ref('food');
const router = useRouter();
const rightDrawerOpen = ref(false);

const headerStyle = computed(() => ({
  height: Platform.is.ios ? '170px' : '150px',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '15px',
  width: '100%',
  boxShadow: 'rgb(166, 192, 254)',
}));

const customerheight = computed(() => ({
  width: Platform.is.ios ? '207px' : '187px',
  height: '230px',
}));

const goToRoute = () => {
  router.push('/'); // Substitua '/sua-rota' pela rota para onde você quer navegar
};

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<style scoped>
.pedido-back {
  font-weight: bolder;
}
.search {
  height: 50%;
}

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
.shopping_cart {
  width: 35%;
  height: 35%;
  padding: 6px;
  border-radius: 50px;
  background-color: rgb(231, 119, 119);
  color: red;
  margin-left: 30px;
}

.input-bg {
  background: white;
  border-radius: 30px;
}

.input-bg-icon {
  background: #f2f4f7;
  padding: 5px;
  border-radius: 20px;
}

.label-category {
  font-size: 20px;
  font-weight: bolder;
}

.card-custom {
  width: 150px;
  height: 150px;
  border-radius: 24px; /* Bordas arredondadas maiores */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white; /* Cor de fundo branco */
}

.col-category {
  margin-right: 80px;
}

.scrollable-div {
  padding-bottom: 120px;
  height: 68vh;
  width: 100%;
  overflow: auto; /* Scroll só aparece se necessário */
}

.scroll-div {
  height: 320px;
  overflow: auto;
}

.label-product {
  font-size: large;
}

.card-customer {
  border-radius: 24px; /* Bordas arredondadas maiores */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: white; /* Cor de fundo branco */
}

.q-field:hover {
  border: none;

  box-shadow: -1px 4px 78px 4px rgba(166, 192, 254, 0.49);
}

.q-field__control {
  transition: all 0.3s ease; /* Transição suave */
  box-shadow: -1px 4px 78px 4px rgba(166, 192, 254, 0.49);
}

.card-img-top {
  height: 200px;
  border-radius: 24px 24px 0px 0px;
  object-fit: cover; /* Faz a imagem cobrir todo o espaço disponível */
}

.tab-panels {
  background-color: #f2f4f7;
}

.tabs-color {
  color: #7751e9;
}

.tabs-borda {
  width: 15%;

  margin: 10px;
  border-radius: 25px;
  border: 1px solid blue;
}
.icon-delete-cart {
  width: 6vh;
  background-color: rgb(238, 181, 181);
  border-radius: 10px;
}

.tableid {
  width: 100%;
  height: 100%;
  background-color: #f2f4f7;
  border-radius: 10px;
  padding: 10px;
}

.btn-pagar {
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
</style>
