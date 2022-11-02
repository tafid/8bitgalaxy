import Index from "./legacy/Index.vue";
import Cards from "./legacy/Cards.vue";
import Start from "./legacy/Start.vue";
import Home from "./legacy/Home.vue";
import Full from "./legacy/Full.vue";

export default [
  { path: "/", component: Index },
  { path: "/cards", component: Cards },
  { path: "/start", component: Start },
  { path: "/home", component: Home },
  { path: "/full", component: Full },
];
