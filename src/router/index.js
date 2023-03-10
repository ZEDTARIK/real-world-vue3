/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../components/EventDetails.vue";

const routes = [{
        path: "/",
        name: "EventList",
        component: EventList,
    },
    {
        path: "/events/:id",
        name: "EventDetails",
        props: true,
        component: EventDetails,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;