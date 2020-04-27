<template>
    <div class="switch">
        <h1>Multiselect Component</h1>
        <div class="demo">
            <div class="demo__left">
                <label>Days</label>
                <my-multiselect
                        :options="days"
                        display-property="title"
                        value-property="shortcut"
                        v-model="selectedDays"
                />
            </div>
            <div class="demo__right">
                <p><strong>Days: </strong>{{days}}</p>
                <p><strong>Selected Days: </strong>{{selectedDays}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import MyMultiselect from "../child/MyMultiselect";
    export default {
        name: "MultiselectPage",
        data(){
            return {
                days: [
                    {title: 'Saturday', shortcut: 'sat'},
                    {title: 'Sunday', shortcut: 'sun'},
                    {title: 'Monday', shortcut: 'mon'},
                    {title: 'Tuesday', shortcut: 'tue'},
                    {title: 'Wednesday', shortcut: 'wed'},
                    {title: 'Thursday', shortcut: 'thu'},
                    {title: 'Friday', shortcut: 'fri'},
                ],
                selectedDays: ['sun']
            }
        },
        components: {
            MyMultiselect
        }
    }
</script>

<style scoped>
    p, label{
        margin: 11px 0;
    }
    .demo{
        display: flex;
        margin-bottom: 55px;
    }
    .demo__left{
        padding-right: 22px;
    }
    .demo__right{
        padding: 0 22px;
        border-left: 1px solid rgb(179, 179, 179);
    }
</style>
