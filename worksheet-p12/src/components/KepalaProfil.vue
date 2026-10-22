<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <section class="profil">
    <h2 style="text-transform: capitalize;">{{ props.profil.nama }}</h2>
    <p>{{ props.profil.peran }}</p>
  </section>
</template>