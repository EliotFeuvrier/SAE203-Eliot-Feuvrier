<template>
<div class="ml-auto mr-auto">

    <button class=" border-solid border-2 border-black rounded-xl">
      <div class="flex">
      <p class="text-black font-big-shoulders-text text-xl px-8 py-1 uppercase"> {{msg}} </p>
      
      </div>
<slot/>
</button>



</div>
</template>

<script >
export default {
 name: "bouton2",
 props: {
   msg: String
 }
 
}
</script>