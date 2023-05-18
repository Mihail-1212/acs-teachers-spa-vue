import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Main',
		/* view actually - not component */
		component: () => import('../views/MainView.vue')
	},
	/* 404 error */
	{
		path: "/:pathMatch(.*)*",
		component: () => import('../views/PathNotFoundView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	/* Method for scrolling the page up after navigating the router-link */
	scrollBehavior() {
		return {
			top: 0
		}
	}
})

export default router