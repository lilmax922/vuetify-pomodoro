<template lang="pug">
h1 {{ num }}
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const num = ref(0)
const plus = () => {
  num.value += 10
}

defineExpose({
  num,
  plus
})
</script>
