import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
/*
  let tokenExpirationTimer: NodeJS.Timeout | null = null;

  // Define uma função para remover o token após 8 horas
  function setTokenExpiration() {
    // Limpa o temporizador anterior, se houver
    if (tokenExpirationTimer) {
      clearTimeout(tokenExpirationTimer);
    }

    tokenExpirationTimer = setTimeout(
      () => {
        localStorage.removeItem('token');
        Router.push('/guest/login');
      },
      8 * 60 * 60 * 1000,
    ); // 8 horas = 8 * 60 minutos * 60 segundos * 1000 milissegundos
  }

  // Antes de cada navegação, verifique o token
  Router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    // Se o usuário tentar acessar uma rota protegida sem token, redirecione para login
    if (to.path !== '/guest/login' && to.path !== '/guest/register' && !token) {
      next('/guest/login');
    }
    // Se o usuário já estiver logado, mas tentar acessar a página de login ou registro, redirecione para a home
    else if (
      (to.path === '/guest/login' || to.path === '/guest/register') &&
      token
    ) {
      next('/');
    } else {
      // Apenas se o token existir, inicie o temporizador (apenas uma vez)
      if (token && !tokenExpirationTimer) {
        setTokenExpiration();
      }
      next();
    }
  });
 */
  return Router;
});
