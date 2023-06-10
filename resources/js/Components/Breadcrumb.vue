<template>
    <nav class="w-full rounded-md">
        <ol class="list-reset flex">
            <li v-if="links || active">
                <Link :href="route('home')"
                    class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                    Home
                </Link>
            </li>
            <li v-else>
                <span class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                    Home
                </span>
            </li>
            <li v-if="links" v-for="link in links">
                <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                <Link :href="link['url']"
                    class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                    {{ link['name'] }}
                </Link>
            </li>
            <li class="text-neutral-500 dark:text-neutral-400" v-if="active">
                <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                {{ active }}
            </li>
        </ol>
    </nav>
</template>

<script setup>
defineProps({
    links: {
        type: Array,
        default: null
    },
    active: {
        type: String,
        default: null
    }
})
</script>