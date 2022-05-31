<template>
    <div class="border border-white rounded-lg w-max text-white text-center font-big-shoulders-text">
        <div class="border-b border-white"><p>  {{date}}</p></div>
        <div class="mx-5 my-6 leading-[195%] font-big-shoulders-text">
            <p class=""> {{name1}} </p>
            <p class="">{{name2}}</p>
            <p class="">{{name3}}</p>
            <p class="">{{name4}}</p>
            <p class="">{{name5}}</p>
            <p class="">{{name6}}</p>
        </div>
        <div class="border-t border-white font-big-shoulders-text">
            <p>EN SAVOIR PLUS ></p>
        </div>
    </div>
</template>

<script>

export default({
    props: {
        date: String,
        name1: String,
        name2: String,
        name3: String,
        name4: String,
        name5: String,
        name6: String,
        

    }
})
</script>
