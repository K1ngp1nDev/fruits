<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useFavoritesStore } from '~/stores/favorites'
import type { Fruit } from '~/types/Fruit'

const props = defineProps<{
    fruit: Fruit
}>()

const favoritesStore = useFavoritesStore()

const isFavorite = computed(() =>
    favoritesStore.favorites.some(item => item.id === props.fruit.id)
)

function addToFavorites() {
    favoritesStore.addFavorite(props.fruit)
}

function removeFromFavorites() {
    favoritesStore.removeFavorite(props.fruit.id)
}
</script>

<template>
    <div class="fruit-card">
        <h3>{{ fruit.name }}</h3>
        <p>
            <strong>Family: </strong>
            <NuxtLink :to="`/family/${fruit.family}`">{{ fruit.family }}</NuxtLink>
        </p>
        <ul>
            <li>Calories: {{ fruit.nutritions.calories }}</li>
            <li>Fat: {{ fruit.nutritions.fat }}</li>
            <li>Sugar: {{ fruit.nutritions.sugar }}</li>
            <li>Carbohydrates: {{ fruit.nutritions.carbohydrates }}</li>
            <li>Protein: {{ fruit.nutritions.protein }}</li>
        </ul>
        <div class="buttons">
            <button v-if="!isFavorite" @click="addToFavorites">Add to Favorites</button>
            <button v-else @click="removeFromFavorites">Remove from Favorites</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fruit-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 1.5rem;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    h3 {
        margin-bottom: 0.5rem;
        color: #333;
        font-size: 1.3rem;
    }
    
    p {
        margin-bottom: 1rem;
        font-size: 0.95rem;
        
        a {
            color: #0070f3;
            text-decoration: none;
            transition: color 0.2s ease;
            
            &:hover {
                text-decoration: underline;
                color: #005bb5;
            }
        }
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin-bottom: 1rem;
        
        li {
            font-size: 0.9rem;
            color: #555;
            margin-bottom: 0.3rem;
            position: relative;
            padding-left: 1.2rem;
            
            &:before {
                content: '•';
                position: absolute;
                left: 0;
                color: #0070f3;
            }
        }
    }
    
    .buttons {
        display: flex;
        gap: 0.5rem;
        
        button {
            flex: 1;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background 0.2s ease;
            
            &:first-of-type {
                background: #0070f3;
                color: #fff;
                
                &:hover {
                    background: #005bb5;
                }
            }
            
            &:last-of-type {
                background: #e0e0e0;
                color: #333;
                
                &:hover {
                    background: #ccc;
                }
            }
        }
    }
}
</style>
