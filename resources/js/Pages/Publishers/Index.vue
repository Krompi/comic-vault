<script setup>
import AuthenticatedLayout from '@/Layouts/DefaultLayout.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    Publishers: Object
})
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Verlage</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 text-gray-900">
                    <ul>
                        <li v-for="Publisher in Publishers" :key="Publisher.id">
                            {{ Publisher.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
