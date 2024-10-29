<script setup lang="ts">
import LocationView from "@/location/LocationView.vue";


</script>

<template>
  <LocationView v-bind:baseUrl="'http://localhost:4173'"></LocationView>
</template>

<style>
@import "assets/global.css";
</style>
