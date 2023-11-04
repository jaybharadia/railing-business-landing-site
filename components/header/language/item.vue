<template>
    <li>
        <a
            href="#"
            class="text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
        >
            <div class="inline-flex items-center">
                <Icon :name="icon" size="20px" class="mr-2 rounded-full" />
                {{ label }}
            </div>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        label: String,
        icon: String,
    },
};
</script>

<style scoped></style>
