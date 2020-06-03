import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);


const routes = [
  {
    path: "/",
    name: "index",
    component: () =>import("../views/index.vue"),
	 meta:{
		title: '扬帆向海 聚力攻坚'
	}
  },
];

const router = new Router({

  base: process.env.BASE_URL,
  routes,
});

export default router;