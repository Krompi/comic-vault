<script setup>
import AuthenticatedLayout from '@/Layouts/DefaultLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

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
                    <ul class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                        <li class="w-full border-b border-gray-200 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100 flex align-middle justify-between" v-for="Publisher in Publishers" :key="Publisher.id">
                            <Link :href="route('publishers.show', Publisher.id)" class=" text-green-400 px-4 py-2 grow">{{ Publisher.name }}</Link>
                            <div class="px-4 py-2">
                                asdf
                            </div>
                        </li>
                    </ul>
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
