<template>
    <div>
        <NuxtLink class="hover:text-blue-500" to="laptops">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/></svg>
        </NuxtLink>
    </div>
    <div class="flex items-center justify-center space-x-6 ">
        <div>
            <img :src="product.image" alt="Image Title" class="w-40">
        
    </div>
    <div class="my-10 space-y-5 text-xl font-semibold font-mono" v-if="product">
        <p> Product ID: {{ product.id }} </p>
        <p> Product Price: {{ product.price }} </p>
        <p> Product Title: {{ product.title }} </p>
    </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'product'
    })
    const {items} = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + items
    const { data: product } = await useFetch(uri, {key:items})
    if(!product.value)
    {
        throw createError({statusCode:404, statusMessage:'Product not found!'})
    }
</script>

<style  scoped>

</style>