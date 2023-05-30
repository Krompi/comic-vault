<template>
    <nav>
        <ul>
            <li>
                <NavLink :href="route('home')" :active="route().current('home')">
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink :href="route('users')" :active="route().current('users')">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink :href="route('settings')" :active="route().current('settings')">
                    Settings
                </NavLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import NavLink from '../Components/NavLink.vue';
</script>

<style lang="scss" scoped>

</style>