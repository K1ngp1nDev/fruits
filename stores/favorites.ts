import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'
import type { Fruit } from '~/types/Fruit'

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref<Fruit[]>([])

    onMounted(() => {
        const saved = localStorage.getItem('favorites')
        if (saved) {
            favorites.value = JSON.parse(saved)
        }

        watch(
            favorites,
            (newVal) => {
                localStorage.setItem('favorites', JSON.stringify(newVal))
            },
            { deep: true }
        )
    })

    function addFavorite(fruit: Fruit) {
        if (!favorites.value.find(item => item.id === fruit.id)) {
            favorites.value.push(fruit)
        }
    }

    function removeFavorite(fruitId: number) {
        favorites.value = favorites.value.filter(item => item.id !== fruitId)
    }

    return { favorites, addFavorite, removeFavorite }
})
