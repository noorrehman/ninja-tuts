<template>
    <div>
        <div class="grid grid-cols-3 gap-4 text-center my-10">
            <div v-for="p in products" :key="p.id" class="">
                <NuxtLink :to="'/products/' + p.id"> {{ p.title }} </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style  scoped>

</style>