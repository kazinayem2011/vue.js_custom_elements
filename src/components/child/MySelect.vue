<template>
    <div>
        <select
                class="my-select__select"
                :class="{'my-select__select--error': errorMessage}"
                @change="handleChange"
                :value="value"
                ref="childRef"
        >
            <option value="">{{placeholder}}</option>

            <template v-if="optionsType === 'string'">
                <option :value="option" v-for="(option, i) in options" :key="i">
                    {{option}}
                </option>
            </template>

            <template v-else>
                <option :value="option[valueProperty]" v-for="(option, i) in options" :key="i">
                    {{option[displayProperty]}}
                </option>
            </template>

        </select>
        <br>
        <p class="error-message">{{errorMessage}}</p>
    </div>
</template>

<script>
    export default {
        name: "MySelect",
        props: {
            options: {
                type: Array,
                default: () => []
            },
            value: {
                default: ''
            },
            placeholder:{
                type: String,
                default: 'Select One'
            },
            displayProperty:{
                type: String,
                default: 'name'
            },
            valueProperty:{
                type: String,
                default: 'value'
            },
            required: {
                default: false
            }
        },
        data(){
            return {
                validated: false
            }
        },
        computed: {
            optionsType(){
                let ot = 'string';
                if (this.options.length > 0 && typeof this.options[0] !='string'){
                    ot = 'object';
                }
                return ot;
            },
            errorMessage(){
                if (!this.validated){
                    return;
                }

                if((this.required || this.required === '') && !this.value){
                    return 'This field is required'
                }
                return '';
            }
        },
        methods: {
            handleChange(e){
                this.$emit('input', e.target.value);
                this.validated = true;
            },

            validateForm(){
                this.validated = true;
                this.focus();
                if(this.errorMessage === ''){
                    return true;
                }

                return false;
            },

            focus(){
                this.$refs.childRef.focus();
            }
        }
    }
</script>

<style scoped>
    .my-select__select{
        background: #ffffff;
        padding: 6px 12px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .my-select__select:focus{
        outline: none;
    }
    .my-select__select--error{
        border: 1px solid red;
    }
</style>
