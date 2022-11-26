<template>
  <div class="flex p-4">
    <div class="flex flex-0 flex-col min-w-[25%]">
      <quake-card :quake="quake" v-for="(quake, index) in quakes" :key="index"/>
    </div>
    <div class="flex flex-1">
      Map
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import QuakeCard from '@/components/quake-card.vue';
import { IQuake } from '@/types';

const quakes: Ref<IQuake[]> = ref([]);

onMounted(() => {
  const defaultQuake: IQuake = {
    epicentre: 'Catania',
    magnitude: 2.3,
    langitude: '45.5168°N',
    longitude: '9.5618°E',
    date: new Date()
  };
  quakes.value = Array(10).fill(defaultQuake);
})
</script>
