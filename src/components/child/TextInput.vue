<template>
    <div class="text-input-wrapper">
        <input
                :type="type || 'text'"
                class="my-input"
                :class="{'invalid-input': errorMessage}"
                :value="value"
                :placeholder="placeholder"
                ref="childRef"
                :disabled="disabled"
                @input="handleChange($event.target.value)"
        >
        <br>
        <p class="error-message">{{errorMessage}}</p>
    </div>
</template>

<script>
    export default {
        name: "TextInput",
        props: ['value', 'placeholder', 'minLength', 'required', 'type', 'disabled'],
        data(){
            return {
                validated: false
            }
        },
        computed:{
            errorMessage(){
                if (!this.validated){
                    return;
                }

                if(this.required && !this.value){
                    return 'This field is required'
                }

                if (this.minLength && this.value.length < this.minLength){
                    return `This field must be at least ${this.minLength} character long`
                }
                return '';
            }
        },
        methods: {
            handleChange(ev){
                this.$emit('input', ev);
                this.validated = true
            },

            validateForm(){
                this.validated = true;
                if(this.errorMessage === ''){
                    return true;
                }
                this.focus();
                return false;
            },

            focus(){
                this.$refs.childRef.focus();
            }
        }
    }
</script>

<style scoped>
    .text-input-wrapper{
        width: 333px;
    }
    .my-input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #cccccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .my-input:focus{
        outline: none;
    }
    .invalid-input{
        border: 1px solid red !important;
    }
</style>
