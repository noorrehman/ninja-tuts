<template>
    <div class="mt-28 text-center mx-auto max-w-md">
        <p class="text-7xl font-bold mt-7">{{ error.statusCode }}</p>
        <p class="text-6xl font-semibold mt-5">Ooops!</p>
        <p class="text-xl mt-7">{{ error.message }}</p>
        <button class="mt-7 py-2 px-4 bg-green-600 rounded-md shadow-md hover:bg-green-500 text-white" @click="HandleError">
            Go Home..
        </button>
    </div>
</template>

<script setup>
    defineProps(['error'])
     const HandleError = () => clearError({ redirect: '/'})
     //both functions are same
    // function handleError ()
    // {
    //     clearError({ redirect: '/'})
    // }
</script>

<style  scoped>

</style>