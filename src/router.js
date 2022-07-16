import Vue from "vue";
import VueRouter from "vue-router"
import Authors from "./components/Authors"
import Blog from "./components/Blog"
import AuthorDetail from "./components/AuthorDetail"
import BlogDetail from "./components/BlogDetail"
import Home from "./components/Home"
import Posts from "./components/Posts"


Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/authors", component: Authors },
        { path: "/blog", component: Blog },
        { path: "/authors/:userId", component: AuthorDetail },
        { path: "/blogs/:postId", component: BlogDetail },
        { path: "/posts", component: Posts },
    ],
    mode: "history"
})