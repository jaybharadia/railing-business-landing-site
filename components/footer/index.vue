<template>
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
            <div class="md:flex md:justify-between">
                <div class="mb-2 md:mb-0">
                    <SrLogo />
                </div>

                <div>
                    <FooterAddress />
                    <FooterContact class="mt-2" />
                </div>

                <!-- Right side -->
            </div>
            <SrDivider />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span
                    class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                    >© {{ getCurrentYear() }}
                    <a href="https://flowbite.com" class="hover:underline"
                        >{{ getCompanyName() }}™</a
                    >. All Rights Reserved.
                </span>

                <div class="text-gray-500 mt-2 md:mt-0">
                    🌐 Developed By
                    <a
                        target="_blank"
                        href="https://bento.me/jaybharadia"
                        class="underline font-bold text-primary-500"
                        >Jay Bharadia</a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
