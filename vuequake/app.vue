<template>
  <div>
    <!-- <NuxtWelcome /> -->
     {{ test }}
  </div>
</template>


<script setup lang="ts">
import { Ref } from 'vue';

const test: Ref<string>  = ref('ciao');
</script>