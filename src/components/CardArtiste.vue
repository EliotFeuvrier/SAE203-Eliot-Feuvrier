<template>
    <div class=" w-max m-10 pb-16 pt-16">
        <img class="rounded-t-2xl" :src="image" alt="">
        <p class="bg-black font-big-shoulders-text text-center rounded-b-2xl text-[25px] text-white py-2"> {{nom}} </p>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        nom: String
    }
}
</script>