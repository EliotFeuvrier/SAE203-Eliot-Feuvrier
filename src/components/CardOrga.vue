<template>
    <div class="border border-white p-4 rounded-2xl text-white flex flex-col items-center font-big-shoulders-text text-lg leading-8 w-max m-4 mb-10">
        <img :src="image" alt="">
        <p>{{ desc}}</p>
        <h2 class="uppercase">{{ nom}}</h2>
    </div>
</template>
<script>
export default {
    props: {
        image: String,
        desc: String,
        nom: String
    }
}
</script>