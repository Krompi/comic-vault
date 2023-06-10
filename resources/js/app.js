// CSS Importieren
import './bootstrap'
import '../css/app.css'

// Inertia-Standards importieren
import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'

// Layouts importieren
import BaseLayout from './Layouts/BaseLayout.vue'
import BaseContent from './Layouts/BaseContent.vue'

// eigene Komponenten
import Breadcrumb from './Components/Breadcrumb.vue'

import DefaultLayoutFile from './Layouts/BaseLayout.vue'

const appName =  window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

createInertiaApp({
    title: title => `${title} - ${appName}`,
    // resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    resolve: async name => {
        const page = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        )
        page.default.layout ??= DefaultLayoutFile
        return page
    },
    setup ({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('Link', Link)
            .component('Head', Head)
            .component('BaseLayout', BaseLayout)
            .component('BaseContent', BaseContent)
            .component('Breadcrumb', Breadcrumb)
            .mount(el)
    },
    progress: {
        color: '#4B5563'
    }
})