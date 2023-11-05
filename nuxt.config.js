// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-mapbox"],
    mapbox: {
        accessToken:
            "pk.eyJ1IjoiZGF2aWRyYW1pMTIiLCJhIjoiY2xlcmowN25oMGM4YjN4cWo1d2VjdWtlbiJ9._i-alLPw_HV5Oaln2pNYtQ",
    },
});
