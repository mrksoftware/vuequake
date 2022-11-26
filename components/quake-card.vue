<template>
  <div class="flex rounded shadow-md" v-if="canShow">
    <div class="flex flex-col m-4 w-full space-y-4">
      <div class="flex flex-1 first-row justify-start space-x-4">
        <div class="flex flex-0 flex-col text-2xl font-medium">
          <div class="p-4 rounded-full border-4 border-green-500 h-auto">
            {{ quake.magnitude }}
          </div>
        </div>
        <div class="flex flex-1 flex-col">
          <div class="quake-location text-4xl">{{ quake.epicentre }}</div>
          <div class="quake-coordinates text-lg text-slate-400">{{ quake.langitude }} - {{ quake.longitude }}</div>
          <div class="quake-date text-lg text-slate-400">{{ formattedDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { IQuake } from '@/types';
import { isNil } from 'lodash';

const props = defineProps<{
  quake: IQuake
}>();

// const { quake } = toRefs(props);

const canShow = computed(() => !isNil(props.quake));
const formattedDate = computed(() => props.quake.date.toDateString());
</script>