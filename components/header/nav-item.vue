<template>
    <li>
        <nuxt-link
            :to="link"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
            {{ label }}
        </nuxt-link>
    </li>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
a.router-link-active.router-link-exact-active {
    @apply text-primary-500;
}
</style>
