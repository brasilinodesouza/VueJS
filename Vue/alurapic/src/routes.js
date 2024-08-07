//import { component } from 'vue/types/umd';
import Home from './componentes/home/Home.vue';
import Cadastro from './componentes/cadastro/Cadastro.vue';
//import { component } from 'vue/types/umd';



export const routes = [
    {path: '', name: 'home' , component: Home, titulo: 'Home' , menu: true },
    {path: '/cadastro', name: 'cadastro' , component: Cadastro, titulo: 'Cadastro' , menu: true},
    {path: '*', component: Home, menu: false},
    {path: '/cadastro/:id', name: 'altera' , component: Cadastro, titulo: 'Cadastro' , menu: false},

];

