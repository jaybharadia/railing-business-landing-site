<template>
    <div class="flex space-x-6 justify-start">
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
</template>

<script>
export default {};
</script>

<style scoped></style>
