<template>
    <div class="category-sort">
        <label for="category">Sort By:</label>
        <div id="category">
            <button v-for="option in sortOptions" :key="option.id" data-test="sort-option"
                :class="{ selected: option.value === currentSort }" :data-value="option.value"
                @click="onSortChange(option.value)">
                {{ option.label }}
            </button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductSort',
    props: {
        currentSort: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            sortOptions: [
                { id: '1', value: 'price-asc', label: 'Price: Low to High' },
                { id: '2', value: 'price-desc', label: 'Price: High to Low' },
                { id: '3', value: 'rating-desc', label: 'Rating: High to Low' },
            ],
        };
    },
    methods: {
        onSortChange(selectedSort) {
            if (selectedSort !== this.currentSort) {
                this.$emit('sort-change', selectedSort);
            }
        },
    },
});
</script>

<style>
.selected {
    font-weight: bold;
    text-decoration: underline;
}
</style>