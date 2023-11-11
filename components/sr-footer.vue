<template>
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            class="mr-3 h-8"
                            alt="FlowBite Logo"
                        />
                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                            >{{ getCompanyName() }}</span
                        >
                    </a>
                </div>

                <div>
                    <h3 class="text-lg">Workshop Address 🏭</h3>
                    <p class="max-w-xs text-gray-500">
                        Gondal road, S.T workshop,Samrat industries, Area Samrat
                        10.
                    </p>
                </div>

                <!-- Right side -->
            </div>
            <hr
                class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
            />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span
                    class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                    >© {{ getCurrentYear() }}
                    <a href="https://flowbite.com" class="hover:underline"
                        >{{ getCompanyName() }}™</a
                    >. All Rights Reserved.
                </span>

                <div class="text-gray-500 mt-2 md:mt-0">
                    🌐 Website Developed By
                    <a
                        target="_blank"
                        href="https://bento.me/jaybharadia"
                        class="underline font-bold text-primary-500"
                        >Jay Bharadia</a
                    >
                </div>
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a
                        target="_blank"
                        :href="`https://wa.me/${getWhatsappNumber()}?text=Hello%2C%20I%20am%20looking%20for%20Railing%20service%2C%20lets%20connect%20`"
                        class="text-green-500 hover:text-green-900"
                    >
                        <Icon name="ic:outline-whatsapp" size="24px" />
                    </a>

                    <a
                        :href="`tel:${getPhoneNumber()}`"
                        class="text-primary-500 hover:text-primary-900"
                    >
                        <Icon name="ic:outline-phone" size="24px" />
                    </a>

                    <a
                        target="_blank"
                        :href="`mailto:${getEmail()}`"
                        class="text-gray-500 hover:text-gray-900"
                    >
                        <Icon name="ic:outline-email" size="24px" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
