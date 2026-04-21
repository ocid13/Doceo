<script setup>
import { ref, onMounted } from 'vue'
import API from '../services/api'
import ProductCard from '../components/ProductCard.vue'
import ProductForm from '../components/ProductForm.vue'

const products = ref([])
const selected = ref(null)

const fetchProducts = async () => {
  const res = await API.get('/products')
  products.value = res.data
}

const deleteProduct = async (id) => {
  await API.delete(`/products/${id}`)
  fetchProducts()
}

onMounted(fetchProducts)
</script>

<template>
  <div class="container">
    <h1>Product List</h1>

    <ProductForm :product="selected" @refresh="fetchProducts" />

    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      @delete="deleteProduct"
      @edit="editProduct"
    />
  </div>
</template>