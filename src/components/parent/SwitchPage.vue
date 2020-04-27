<template>
    <div class="switch">
        <h1>Switch Component</h1>
        <br>
        <my-switch v-model="switchValue1"/>

        <br>

        <my-switch v-model="switchValue2"/>

        <br>

        <my-switch v-model="switchValue3"/>

        <p>Value 1: {{switchValue1}}</p>
        <p>Value 2: {{switchValue2}}</p>
        <p>Value 3: {{switchValue3}}</p>
    </div>
</template>

<script>
    import MySwitch from "../child/MySwitch";

    export default {
        name: "switchpage",
        data(){
            return{
                switchValue1: true,
                switchValue2: true,
                switchValue3: true,
            }
        },
        components: {
            MySwitch
        }
    }
</script>

<style scoped>

</style>
