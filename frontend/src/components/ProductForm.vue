<script setup>
import { ref, watch } from 'vue'
import API from '../services/api'

const props = defineProps({
  product: Object
})

const emit = defineEmits(['refresh'])

const name = ref('')
const price = ref('')
const isEdit = ref(false)

watch(() => props.product, (val) => {
  if (val) {
    name.value = val.name
    price.value = val.price
    isEdit.value = true
  }
})

const submit = async () => {
  if (isEdit.value) {
    await API.put(`/products/${props.product.id}`, {
      name: name.value,
      price: Number(price.value)
    })
  } else {
    await API.post('/products', {
      name: name.value,
      price: Number(price.value)
    })
  }

  name.value = ''
  price.value = ''
  isEdit.value = false

  emit('refresh')
}
</script>

<template>
  <form @submit.prevent="submit" class="card">
    <input v-model="name" placeholder="Nama produk" />
    <input v-model="price" placeholder="Harga" />
    <button>{{ isEdit ? 'Update' : 'Tambah' }}</button>
  </form>
</template>