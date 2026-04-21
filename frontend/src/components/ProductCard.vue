<script setup>
defineProps({
  product: Object
})

const emit = defineEmits(['delete', 'edit'])
</script>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p>Rp {{ new Intl.NumberFormat('id-ID').format(product.price) }}</p>

    <button @click="$emit('edit', product)">Edit</button>
    <button @click="$emit('delete', product.id)">Hapus</button>
  </div>
</template>