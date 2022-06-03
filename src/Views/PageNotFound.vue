<template>
    
<main class=" min-h-screen bg-black">

    <div class="bg-white  mx-auto pt-20 pb-20">
        <div class="w-auto mt-auto justify-around text-6xl mb-20 text-center font-big-shoulders-text text-black">
            <p >ERREUR 404</p>
            <p>Cette page n'a pas été trouvée</p>
            <img class="mx-auto mt-20" src="/images/img-page404.webp" alt="image page 404">
        </div>

 <div>
     <form
            action="https://duckduckgo.com/"
            method="GET"
            x-data="{ q:'', }"
            x-on:submit="q = q + ' site:mmimontbeliard.com'"
          >
            
            <div class=" flex justify-center">
                <input
                  class="border-2 border-Grey w-2/4 text-lg pl-2 text-Grey"
                  placeholder="Rechercher une solution : "
                  type="text"
                  id="q"
                  name="q"
                  x-model="q"
                />
            </div>
          </form>
 </div>


    </div>

   

</main>

</template>

<script>
export default {
   name:"PageNotFound"
}
</script>