import type { RouteRecordRaw }  from 'vue-router';
import Accueil from '@/Accueil.vue';
import Sci from '@/Sci.vue';
import Sch from '@/Sch.vue';
import Histoire from '@/Histoire.vue';
import Geographie from '@/Geographie.vue';
import Biologie from '@/Biologie.vue';
import Mathematique from '@/Mathematique.vue';
import Primaire from '@/Primaire.vue';
import QuiSommesNous from '@/QuiSommesNous.vue';
import Commande from '@/Commande.vue';
import VersionPapNum from '@/VersionPapNum.vue';

export const routes: RouteRecordRaw[] = [
     {
        path:'/',
        component: Accueil
    },
    {
        path:'/Accueil',
        component: Accueil
    },
    {
        path:'/sci',
        component: Sci
    },
    {
        path:'/sch',
        component: Sch
    },
    {
        path:'/histoire',
        component: Histoire
    },
    {
        path:'/geographie',
        component: Geographie
    },
    {
        path:'/biologie',
        component: Biologie
    },
    {
        path:'/mathematique',
        component: Mathematique
    },
    {
        path:'/primaire',
        component: Primaire
    },
    {
        path:'/commande',
        component: Commande
    },
    {
        path:'/quisommesnous',
        component: QuiSommesNous
    },
    {
        path:'/versionpapnum',
        component: VersionPapNum
    },
    
];