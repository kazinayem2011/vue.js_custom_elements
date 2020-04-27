<template>
    <div class="text-input">
        <h1>Text Input Component</h1>
        <br>

        <text-input
                v-model="username"
                placeholder="Enter username"
                min-length="3"
                ref="username"
                required="true"
        />
        <text-input
                type="password"
                v-model="password"
                placeholder="Enter password"
                min-length="8"
                ref="password"
                required="true"
        />
        <br>
        <my-button
                @click="handleSubmit"
                text="Submit"
                :loading="formSubmitting"
        />
        <br><br>
        <hr>
        <p v-if="formSubmitted">Username: {{username}}</p>
        <p v-if="formSubmitted">Password: {{password}}</p>
    </div>
</template>

<script>
    import TextInput from "../child/TextInput";
    import MyButton from "../child/MyButton";
    export default {
        name: "TextInputPage",
        data(){
            return {
                username: '',
                password: '',
                formSubmitted: false,
                formSubmitting: false
            }
        },
        methods: {
            handleSubmit(){
                this.formSubmitted = false;

                if (!this.$refs.username.validateForm()){
                    return;
                }

                if (!this.$refs.password.validateForm()){
                    return;
                }

                this.formSubmitting = true;
                setTimeout(() => {
                    this.formSubmitted = true;
                    this.formSubmitting = false;
                }, 3000)
            }
        },
        components: {
            TextInput,
            MyButton
        }
    }
</script>

<style scoped>
    button{
        padding: 9px 16px;
        background: #0060cc;
        color: #ffffff;
        border: 1px solid #0d0dff;
    }
</style>
