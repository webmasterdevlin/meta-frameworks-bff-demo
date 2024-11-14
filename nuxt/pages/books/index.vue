<script setup lang="ts">
import { useFetch } from "#app";
console.log("client code");

const { data, error } = await useFetch("/api/books");
</script>

<template>
  <h1>Welcome to Books Page!</h1>
  <div>
    <ul>
      <li v-for="book in data" :key="book">{{ book.title }}</li>
    </ul>
  </div>
</template>
