<template>
    <Head title="Verlage" />
    <BaseContent>
        <template #header>Verlage</template>
        <template #breadcrumb>
            <Breadcrumb active="Verlage" />
        </template>

        <ul class="w-96">
            <li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
                v-for="publisher in publishers.data">
                <Link :href="route('publisher.show', { publishers: publisher['id'] })">
                {{ publisher['name'] }}
                </Link>
            </li>
        </ul>
    </BaseContent>
</template>

<script setup>
import Pagination from '@/Shared/Pagination.vue';
defineProps({
    publishers: Object
})
</script>
