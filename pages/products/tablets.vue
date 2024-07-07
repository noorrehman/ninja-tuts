<template>
    <div>
        <ul class="flex flex-col space-y-4 text-teal-600 text-3xl text-center py-10 font-bold">
            <li>SAMSUNG</li>
            <li>XIOAMI</li>
            <li>NOKIA</li>
        </ul>
    </div>
    <div>
        <p class="text-2xl font-bold">{{ data }}</p>
    </div>
</template>

<script setup>
    definePageMeta ({
        layout: 'product'
    })

    const {data} = await useFetch('/api/server-routes?name=noor')
</script>

<style lang="scss" scoped>

</style>