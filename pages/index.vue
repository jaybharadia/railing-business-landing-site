<template>
    <div>
        <section
            class="bg-center bg-cover md:bg-contain md:bg-top bg-no-repeat bg-[url('/images/railing-jumbotron.jpeg')] bg-gray-700"
        >
            <div
                class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"
            >
                <h1
                    class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
                >
                    Welcome to Decent Steel Rail
                </h1>
                <p
                    class="mb-8 text-lg text-white font-bold lg:text-xl sm:px-16 lg:px-48"
                >
                    Manufacturer of aluminium glass railing, aluminum profile
                    glass railing & aluminium glass railing in Rajkot, Gujarat.
                </p>

                <a
                    href="#"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                    Know More
                    <svg
                        class="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>

            <ServiceMap />

            <SrFooter />
        </section>
    </div>
</template>

<script>
export default {};
</script>
