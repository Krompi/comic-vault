<template>
    <nav :aria-label="props.label">
        <ul class="list-style-none flex">
            <Component
                v-for="link in links"
                :is="link.url ? 'Link' : 'span'"    
                :href="link.url"
                v-html="link.label"
                :class="link.active 
                        ? 'relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 cursor-default'
                        : 'relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'"
            />
        </ul>
    </nav>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Seitenumschalter'
    },
    links: Array
})
</script>