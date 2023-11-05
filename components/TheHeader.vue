<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div
            class="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <a href="https://flowbite.com/" class="flex items-center">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="h-8 mr-3"
                    alt="Flowbite Logo"
                />
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                    >Decent Steel
                </span>
            </a>
            <div class="flex items-center md:order-2">
                <HeaderLanguageDropDown />

                <HeaderButton @click.native="toggleMenu = !toggleMenu" />
            </div>
            <div
                :class="{ hidden: toggleMenu }"
                class="absolute md:relative top-12 md:top-0 right-0 left-0 p-5 md:p-0 items-center justify-between w-full md:flex md:w-auto md:order-1"
                id="navbar-language"
            >
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                >
                    <HeaderNavItem label="Home" link="/" />
                    <HeaderNavItem label="Products" link="/products" />
                    <HeaderNavItem label="About Us" link="/about" />
                    <HeaderNavItem label="Contact Us" link="/contact" />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            toggleMenu: true,
        };
    },
};
</script>

<style scoped></style>
