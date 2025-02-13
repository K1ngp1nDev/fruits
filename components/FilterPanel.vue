<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Filter } from "~/types/Fruit";

const filters = ref<Filter>({
    carbohydrates: { min: 0, max: 200 },
    protein: { min: 0, max: 100 },
    fat: { min: 0, max: 100 },
    calories: { min: 0, max: 500 },
    sugar: { min: 0, max: 100 },
})

const emit = defineEmits<{
    (e: 'updateFilters', filters: Filter): void
}>()

watch(filters, () => {
    emit('updateFilters', { ...filters.value })
}, { deep: true })

</script>

<template>
    <div class="filter-panel">
        <div v-for="(filter, key) in filters" :key="key" class="filter-group">
            <label>{{ key }}</label>
            <div class="inputs">
                <input type="number" v-model.number="filters[key].min" placeholder="Min" />
                <input type="number" v-model.number="filters[key].max" placeholder="Max" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter-panel {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-end;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin-bottom: 1rem;
    
    .filter-group {
        flex: 1 1 150px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 0.5rem 0.8rem;
        
        label {
            font-weight: bold;
            margin-bottom: 0.5rem;
            text-transform: capitalize;
            font-size: 0.9rem;
            color: #333;
        }
        
        .inputs {
            display: flex;
            gap: 0.3rem;
            
            input {
                width: 50%;
                padding: 0.3rem 0.4rem;
                font-size: 0.85rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                outline: none;
                transition: border-color 0.2s ease;
                
                &:focus {
                    border-color: #0070f3;
                }
            }
        }
    }
    
    .apply-button {
        flex: 1 1 150px;
        background: #0070f3;
        color: #fff;
        border: none;
        border-radius: 6px;
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
        cursor: pointer;
        transition: background 0.2s ease;
        text-align: center;
        
        &:hover {
            background: #005bb5;
        }
    }
}
</style>