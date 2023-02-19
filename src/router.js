import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import nftMainInfoPage from "./components/nft-main-info-page.vue";
import nftPartners from "./components/nft-partners.vue";
import nftLegend from "./components/nft-legend/nft-legend.vue";
import nftCollection from "./components/collection/nft-collection.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: nftMainInfoPage,
        },
        {
            path: '/partners',
            component: nftPartners,
        },
        {
            path: '/collection',
            component: nftCollection,
        },
        {
            path: '/collection/:nameLegend',
            component: nftLegend,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
            }
        }
    },
})