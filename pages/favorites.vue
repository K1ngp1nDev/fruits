<script setup lang="ts">
import FruitCard from '~/components/FruitCard.vue'
import { useFavoritesStore } from '~/stores/favorites'
import { storeToRefs } from 'pinia'

const favoritesStore = useFavoritesStore()
const { favorites } = storeToRefs(favoritesStore)
</script>

<template>
    <div>
        <h2>Favorites</h2>
        <div v-if="favorites.length === 0">No favorite fruits added yet.</div>
        <div class="fruit-grid">
            <FruitCard
                v-for="fruit in favorites"
                :key="fruit.id"
                :fruit="fruit"
            />
        </div>
    </div>
</template>

<style scoped>
.fruit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}
</style>
