<template>
    <div id="app">
        <div class="left-sidebar">
            <br><br><br>
            <router-link to="/" exact>Switch</router-link>
            <router-link to="/textinput">Text Input</router-link>
            <router-link to="/button">My Button</router-link>
            <router-link to="/select">My Select</router-link>
            <router-link to="/multiselect">My MultiSelect</router-link>
        </div>
        <div class="main-content">
            <router-view/>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App'
    }
</script>

<style>

</style>
