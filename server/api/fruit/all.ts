export default defineEventHandler(async (event) => {
    try {
        return await $fetch('https://www.fruityvice.com/api/fruit/all');
    } catch (error: any) {
        event.node.res.statusCode = error.statusCode || 500;
        return { error: error.message || 'Internal server error' };
    }
});
