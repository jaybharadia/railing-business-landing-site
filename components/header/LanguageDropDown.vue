<template>
    <button
        @click="toggleMenu = !toggleMenu"
        type="button"
        class="relative inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
        <Icon name="flag:us-1x1" size="20px" class="mr-2 rounded-full" />
        English (US)
        <!-- Dropdown -->
        <div
            :class="{ hidden: toggleMenu }"
            class="absolute z-50 top-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu"
        >
            <ul class="py-2 font-medium" role="none">
                <HeaderLanguageItem label="English (US)" icon="flag:us-1x1" />
                <HeaderLanguageItem label="ગુજરાતી 🔜" icon="flag:in-1x1" />
            </ul>
        </div>
    </button>
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
