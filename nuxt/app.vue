<script setup lang="ts">
const router = useRouter();

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout class="layouts">
    <NuxtPage />
  </NuxtLayout>
</template>
