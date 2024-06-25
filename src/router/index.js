import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from '../views/HomeComp.vue';
import LoginComp from '../views/LoginComp.vue';
import CheckoutComp from '../views/CheckoutComp.vue';
import CareCosPage from '../views/CareCosPage.vue';
import HairPage from '../views/HairPage.vue';
import DecCosPage from '../views/DecCosPage.vue';
import ParfumePage from '../views/ParfumePage.vue';
import ProductDetail from '@/components/ProductDetail';
import UserProfile from '../views/UserProfile.vue'; 
import ThankYouPage from '../views/ThankYouPage.vue'
import FavPage from '@/views/FavPage.vue';
import CardBn from '@/views/CardBn.vue';
import StorePg from '@/views/StorePg.vue';
import SalePage from '@/views/SalePage.vue';
import ActPage from '@/views/ActPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComp
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComp
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutComp
  },
  {
    path: '/carecos',
    name: 'CareCos',
    component: CareCosPage
  },
  {
    path: '/hair',
    name: 'Hair',
    component: HairPage
  },{
    path: '/deccos',
    name: 'DecCos',
    component: DecCosPage
  },
  {
    path: '/parf',
    name: 'Parf',
    component: ParfumePage
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  { path: '/user-profile', 
    name: 'UserProfile', 
    component: UserProfile },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYouPage
  },
  {
    path: '/favorites',
    name: 'FavPage',
    component: FavPage
  },
  {
    path: '/gift-cards',
    name: 'CardBn',
    component: CardBn
  },
  {
    path: '/stores',
    name: 'StorePg',
    component: StorePg
  },
  {
    path: '/discounts',
    name: 'SalePage',
    component: SalePage
  },
  {
    path: '/promotions',
    name: 'ActPage',
    component: ActPage
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
