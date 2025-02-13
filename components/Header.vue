<script setup lang="ts">

</script>

<template>
    <header>
        <div class="header">
            <nav>
                <ul>
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/favorites">Favorites</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    
    li {
        a {
            text-decoration: none;
            color: #333;
            &.router-link-active {
                text-decoration: underline;
                font-weight: 700;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

</style>