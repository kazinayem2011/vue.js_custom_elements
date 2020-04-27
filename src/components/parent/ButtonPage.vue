<template>
    <div>
        <h1>Button Component</h1>
        <br>
        <my-button
            text="Click Me"
            @click="formSubmit"
        />
        <br>
        <my-button
                text="Click Me"
                loading="true"
                @click="formSubmit"
        />
        <br>
        <my-button
                text="Click Me"
                disabled="true"
                @click="formSubmit"
        />
    </div>
</template>

<script>
    import MyButton from "../child/MyButton";
    export default {
        name: "ButtonPage",
        data(){
            return {

            }
        },
        methods: {
            formSubmit(){

            }
        },
        components: {
            MyButton
        }
    }
</script>

<style scoped>

</style>
