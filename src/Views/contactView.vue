<template>

<main>

  <div class="flex justify-center mt-10">
    <form action="#" class="flex flex-col mt-6 w-1/2">
      <input type="text" class="border border-Grey placeholder:text-Grey p-2 mb-5" name="Nom"  id="Nom"  placeholder="Nom *">
      <input type="text" class="border border-Grey placeholder:text-Grey p-2 mb-5" name="Email"  id="Email"  placeholder="Email *">
      <input type="text" class="border border-Grey placeholder:text-Grey p-2 mb-5" name="Objet"  id="Objet"  placeholder="Objet *">
      <textarea name="Message" class="border border-Grey placeholder:text-Grey p-2 mb-5" id="Message" cols="30" rows="10" placeholder="Message *"></textarea>
      <div class="flex">
        <input name="checkbox" id="checkbox" class="flex-none w-6 h-6" type="checkbox">
        <label class="text-Grey pl-2" for="checkbox">J’ai lu, compris et j’accepte les conditions d’utilisations de mes données **</label>
      </div>
    </form>

  </div>

<div class=" flex justify-center ">
  <div class="text-Grey">
    <p class="mt-3 pl-20">(*)  Champs obligatoires</p>
    <div class=" flex justify-center"><button class="border-Grey border-2 rounded-2xl font-big-shoulders-text py-1 px-5 text-lg text-Grey">ENVOYER</button></div>
    <p class="mt-6 mb-10">** En comuniquant ses informations personnelles, je consens à être notifié par voie électronique par le site https://electromoodsfestival.fr de ses nouveautées</p>
  </div>
</div>

</main>

</template>

<script >


export default {
  name: "ContactView",
};
</script>