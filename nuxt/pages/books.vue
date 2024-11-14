<script setup lang="ts">
import { useFetch } from "#app";

const { data, error } = await useFetch("/api/books");
</script>

<template>
  <div>
    <ul>
      <li v-for="book in data" :key="book">{{ book }}</li>
    </ul>
  </div>
</template>
