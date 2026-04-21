<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import API from '../services/api'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await API.get(`/products/${route.params.id}`)
  product.value = res.data
})
</script>

<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <p>Harga: Rp {{ product.price }}</p>
  </div>
</template>