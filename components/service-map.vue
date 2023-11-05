<template>
    <div
        class="relative block p-6 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
        <h3
            class="mb-2 text-2xl md:text-4xl text-primary-500 font-bold tracking-tight dark:text-white"
        >
            Services Provided
        </h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">
            Completed 10+ Projects at various places
        </p>

        <!-- <div class="relative"> -->
        <MapboxMap
            style="position: relative !important"
            class="h-[500px] mt-4"
            map-id="292939"
            :options="{
                style: 'mapbox://styles/mapbox/streets-v12',
                zoom: getZoom(), // starting zoom
                center: [
                    $options.location.indore.longitude,
                    $options.location.indore.latitude,
                ], // starting position
            }"
        >
            <MapboxDefaultMarker
                marker-id="292939"
                :options="{}"
                :lnglat="[
                    $options.location.rajkot.longitude,
                    $options.location.rajkot.latitude,
                ]"
            />

            <MapboxDefaultMarker
                marker-id="292937"
                :options="{}"
                :lnglat="[
                    $options.location.ahmedabad.longitude,
                    $options.location.ahmedabad.latitude,
                ]"
            />

            <MapboxDefaultMarker
                marker-id="292937"
                :options="{}"
                :lnglat="[
                    $options.location.mumbai.longitude,
                    $options.location.mumbai.latitude,
                ]"
            />
        </MapboxMap>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    location: {
        indore: {
            latitude: 22.719568,
            longitude: 75.857727,
        },
        mumbai: {
            latitude: 19.155001,
            longitude: 72.849998,
        },
        rajkot: {
            latitude: 22.308155,
            longitude: 70.800705,
        },
        ahmedabad: {
            latitude: 23.033863,
            longitude: 72.585022,
        },
    },
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
