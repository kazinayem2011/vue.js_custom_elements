<template>
    <div class="my-multiselect"
         @click="handleClick"
         @blur="focused=false"
         tabindex="-1"
         ref="parent"
         :style="{width: width}"
    >
        <div class="my-multiselect__selected"
             v-for="(option, i) in formattedOptions"
             :key="i"
             v-show="option.checked"
        >
            {{ option[displayProperty] }}
            <span class="my-multiselect__remove" @click="preventClose($event), handleOptionClick(i)">&times;</span>
        </div>
        <div class="my-multiselect__options"
             v-show="focused"
             :style="{top: optionsTop}"
             @click="preventClose"
        >
            <div class="my-multiselect__option"
                 :class="{'my-multiselect__option--checked': option.checked}"
                 v-for="(option, i) in formattedOptions"
                 :key="i"
                 @click="handleOptionClick(i)"
            >
                <div class="my-multiselect__checkbox">

                </div>
                <div class="my-multiselect__text">
                    {{ option[displayProperty] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyMultiselect",
        data(){
            return {
                focused: false,
                optionsTop: '34px;'
            }
        },
        computed: {
            formattedOptions(){
                let fo = this.options.map(option =>{
                    let checked = this.value.some(v => v === option[this.valueProperty]);
                    return {...option, checked: checked};
                });

                return fo;
            }
        },
        props: {
            width:{
                type: String,
                default: '333px'
            },
            options: {
                type: Array,
                default: () => []
            },
            value: {
                default: () => []
            },
            placeholder:{
                type: String,
                default: 'Click to Select'
            },
            displayProperty:{
                type: String,
                default: 'name'
            },
            valueProperty:{
                type: String,
                default: 'value'
            }
        },
        mounted() {
            this.fixTop();
        },
        methods: {
            fixTop(){
                this.optionsTop = this.$refs.parent.clientHeight + 2 + "px";
            },
            handleClick(){
                this.focused = !this.focused;
            },
            preventClose(e){
                e.stopPropagation();
            },
            handleOptionClick(i){
                let clickedValue = this.options[i][this.valueProperty];
                let newValue = [...this.value];
                let existIndex = this.value.findIndex(v => v === clickedValue);
                if (existIndex == -1){
                    newValue.push(clickedValue);
                }else{
                    newValue.splice(existIndex, 1);
                }
                this.$emit('input', newValue);
                setTimeout(this.fixTop, 100);
            }
        }
    }
</script>

<style scoped>
    .my-multiselect{
        background: #ffffff;
        padding: 6px 12px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        min-height: 33px;
        min-width: 222px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
    }
    .my-multiselect:focus{
        outline: none;
    }
    .my-multiselect__placeholder{
        color: #929292;
    }
    .my-multiselect__selected{
        border: 1px solid #e0e0e0;
        padding: 4px 8px;
        padding-right: 0px;
        margin: 3px 3px;
    }
    .my-multiselect__remove{
        cursor: pointer;
        padding-right: 7px;
    }
    .my-multiselect__remove:hover{
        color: red;
        font-weight: bold;
    }
    .my-multiselect__options{
        position: absolute;
        top: 34px;
        right: 0;
        left: 0;
        display: flex;
        background: #ffffff;
        flex-direction: column;
        box-shadow: 0 3px 3px 2px #e3e3e3;
        padding: 5px 0;
        min-height: 55px;
        max-height: 188px;
        overflow-y: auto;
    }
    .my-multiselect__option{
        padding: 6px 11px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .my-multiselect__option--checked{
        color: #1f7bb8;
        font-weight: bold;
    }
    .my-multiselect__checkbox{
        width: 22px;
        height: 22px;
        border: 1px solid #969696;
        margin-right: 7px;
        position: relative;
    }
    .my-multiselect__option--checked .my-multiselect__checkbox{
        border: 1px solid #1f7bb8;
        background: #1f7bb8;
    }
    .my-multiselect__option--checked .my-multiselect__checkbox:after{
        width: 11px;
        height: 6px;
        border-left: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
        content: '';
        z-index: 9999;
        position: absolute;
        transform: rotate(-45deg);
        left: 3px;
        top: 4px;
    }

</style>
