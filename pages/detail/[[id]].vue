<template>
  <div>
    Detail {{ idQuake }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isNil } from 'lodash';

const route = useRoute();

const idQuake = computed(() => {
  if (isNil(route.params.id)) { return 'null'; }
  return route.params.id;
});
</script>
