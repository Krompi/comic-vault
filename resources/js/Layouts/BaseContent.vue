<template>
    <header class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-5xl mx-auto py-6">
            <h1 class="font-semibold text-2xl text-gray-800 leading-tight">
                <slot name="header">{{ $page.props.app.name }}</slot>
            </h1>
        </div>
    </header>
    <section class="max-w-5xl mx-auto py-6 text-sm" v-if="$slots.breadcrumb">
        <slot name="breadcrumb" />
    </section>

    <section class="py-8">
        <div class="max-w-5xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script setup>

import { onMounted } from "vue";
import {
    Dropdown,
    Ripple,
    Carousel,
    Datepicker,
    Input,
    initTE
} from "tw-elements";

onMounted(() => {
    initTE({
        Dropdown,
        Ripple,
        Carousel,
        Datepicker,
        Input
    });
});
</script>