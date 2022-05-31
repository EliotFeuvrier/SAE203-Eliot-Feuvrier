<template>
<div class="ml-auto mr-auto">

    <button class="bg-black border-solid border-2 border-white rounded-xl">
      <div class="flex">
      <p class="text-white font-big-shoulders-text m-2 uppercase"> {{msg}} </p>
      <img src="./icones/Arrow.svg" alt="flêche">
      </div>
<slot/>
</button>



</div>
</template>

<script >
export default {
 name: "bouton",
 props: {
   msg: String
 }
 
}
</script>