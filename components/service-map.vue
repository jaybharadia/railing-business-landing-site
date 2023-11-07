<template>
    <div
        class="relative block p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
        <h3
            class="mb-2 text-2xl md:text-4xl text-primary-500 font-bold tracking-tight dark:text-white"
        >
            Project Locations
        </h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">
            Completed 15+ Projects in Different states of India
        </p>

        <!-- <div class="relative"> -->

        <img src="/images/service-location.png" class="mx-auto mt-4" />

        <!-- </div> -->
    </div>
</template>

<script>
export default {
    methods: {
        getZoom() {
            if (process.client) {
                if (window.innerWidth > 768) return 5;
                else return 3;
            }
        },
    },
};
</script>
