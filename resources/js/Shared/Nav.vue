<template>
    <section class="bg-gray-100">
        <header class="flex max-w-5xl mx-auto justify-between items-center font-bold text-lg">
            <!-- <Link :href="route('home')" class="flex grow items-center">
            <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800 mr-4" />
            {{ $page.props.app.name }}
            </Link> -->

            <!-- Main navigation container -->
            <nav class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                    <!-- Hamburger button for mobile view -->
                    <button
                        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                        <!-- Hamburger icon -->
                        <span class="[&>svg]:w-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>

                    <!-- Collapsible navigation container -->
                    <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent1" data-te-collapse-item>
                        <!-- Logo -->
                        <Link
                            class="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                            href="/">
                        <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800 mr-4" />
                        </Link>
                        <!-- Left navigation links -->
                        <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
                            <!--Dienststellen Link-->
                            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <Link
                                    class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                    :href="route('publishers.index')" data-te-nav-link-ref>Verlag</Link>
                            </li>
                        </ul>
                    </div>

                    <!-- Right elements -->
                    <div class="relative flex items-center">


                        <!-- Second dropdown container -->
                        <div class="relative" v-if="$page.props.auth.user" data-te-dropdown-ref>
                            <!-- Second dropdown trigger -->
                            <a class="hidden-arrow flex items-center justify-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none rounded-full bg-gray-400 w-8 h-8"
                                href="#" id="userMenuButton" role="button" data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                <!-- User avatar -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff"
                                    class="bi bi-person-fill" viewBox="0 0 16 16" part="svg">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                                    </path>
                                </svg>
                            </a>
                            <!-- Second dropdown menu -->
                            <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                aria-labelledby="userMenuButton" data-te-dropdown-menu-ref>
                                <!-- Second dropdown menu items -->
                                <li class="border-b px-4 py-2">
                                        <span class="block">{{ $page.props.auth.user.name }}</span>
                                        <span class="block font-normal text-sm">{{ $page.props.auth.user.email }}</span>
                                </li>
                                <li>
                                    <Link
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        :href="route('profile.edit')" data-te-dropdown-item-ref>Profile</Link>
                                </li>
                                <li>
                                    <Link
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        :href="route('dashboard')" data-te-dropdown-item-ref>Dashboard</Link>
                                </li>
                                <li>
                                    <Link
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        :href="route('logout')" method="post" as="button" data-te-dropdown-item-ref>Abmelden</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="relative" v-else data-te-dropdown-ref>
                            <!-- Second dropdown trigger -->
                            <a class="hidden-arrow flex items-center justify-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none rounded-full bg-gray-400 w-8 h-8"
                                href="#" id="userMenuButton" role="button" data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                <!-- User avatar -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff"
                                    class="bi bi-person-fill" viewBox="0 0 16 16" part="svg">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                                    </path>
                                </svg>
                            </a>
                            <!-- Second dropdown menu -->
                            <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                aria-labelledby="userMenuButton" data-te-dropdown-menu-ref>
                                <!-- Second dropdown menu items -->
                                <li>
                                    <Link
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                        :href="route('login')" data-te-dropdown-item-ref>Anmelden</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    </section>
</template>

<script setup>
import NavLink from '../Shared/NavLink.vue';
import ApplicationLogo from '../Components/ApplicationLogo.vue';
</script>