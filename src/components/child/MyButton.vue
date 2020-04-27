<template>
    <button
            class="button-wrapper"
            :class="{'disabled-button': disabled, 'loading-button': loading}"
            @click="handleClick"
    >
        <img src="../../assets/loading.gif" class="loading-image" v-if="loading">
        <template v-if="!loading">{{text}}</template>
    </button>
</template>

<script>
    export default {
        props: ['text', 'loading', 'disabled'],
        methods: {
            handleClick(){
                if (this.loading || this.disabled){
                    return;
                }
                this.$emit('click')
            }
        }
    }
</script>

<style scoped>
    .button-wrapper{
        padding: 6px 16px;
        background: #0060cc;
        color: #ffffff;
        border: 1px solid #0d0dff;
        min-width: 111px;
        font-size: 20px;
        display: inline-block;
        margin: 5px 0;
        cursor: pointer;
    }
    .loading-image {
        display: inline;
        height: 15px;
    }
    .disabled-button{
        opacity: 0.5;
        cursor: not-allowed;
    }
    .loading-button{
        cursor: wait;
    }
</style>
