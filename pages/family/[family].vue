<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import FilterPanel from '~/components/FilterPanel.vue'
import FruitCard from '~/components/FruitCard.vue'
import type { Fruit } from '~/types/Fruit'

const route = useRoute()
const family = route.params.family as string

const fruits = ref<Fruit[]>([])
const filters = ref({
    calories: { min: 0, max: 500 },
    fat: { min: 0, max: 100 },
    sugar: { min: 0, max: 100 },
    carbohydrates: { min: 0, max: 200 },
    protein: { min: 0, max: 100 }
})

const { data } = await useFetch<Fruit[]>('/api/fruit/all')
if (data.value) {
    fruits.value = data.value.filter(fruit =>
        fruit.family.toLowerCase() === family.toLowerCase()
    )
}

const onUpdateFilters = (newFilters: typeof filters.value) => {
    filters.value = newFilters
}

const filteredFruits = computed(() => {
    return fruits.value.filter(fruit => {
        const n = fruit.nutritions
        return (
            n.calories >= filters.value.calories.min && n.calories <= filters.value.calories.max &&
            n.fat >= filters.value.fat.min && n.fat <= filters.value.fat.max &&
            n.sugar >= filters.value.sugar.min && n.sugar <= filters.value.sugar.max &&
            n.carbohydrates >= filters.value.carbohydrates.min && n.carbohydrates <= filters.value.carbohydrates.max &&
            n.protein >= filters.value.protein.min && n.protein <= filters.value.protein.max
        )
    })
})
</script>

<template>
    <div>
        <h2>Family: {{ family }}</h2>
        <FilterPanel @updateFilters="onUpdateFilters" />
        <div class="fruit-grid">
            <FruitCard
                v-for="fruit in filteredFruits"
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
