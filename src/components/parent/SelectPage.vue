<template>
    <div>
        <h1>Select Component</h1>
        <div class="demo">
            <div class="demo__left">
                <label>Language</label>
                <my-select
                        :options="languages"
                        v-model="selectedLanguage"
                        placeholder="Select Language"
                        ref="language"
                        required="true"
                />
            </div>
            <div class="demo__right">
                <p><strong>Languages: </strong>{{languages}}</p>
                <p><strong>Selected Language:</strong> {{selectedLanguage}}</p>
            </div>
        </div>

        <div class="demo">
            <div class="demo__left">
                <label>Country</label>
                <my-select
                        :options="countries"
                        v-model="selectedCountry"
                        placeholder="Select Country"
                        ref="country"
                />
            </div>
            <div class="demo__right">
                <p><strong>Countries: </strong>{{countries}}</p>
                <p><strong>Selected Country:</strong> {{selectedCountry}}</p>
            </div>
        </div>

        <div class="demo">
            <div class="demo__left">
                <label>Day</label>
                <my-select
                        :options="days"
                        v-model="selectedDay"
                        placeholder="Select Day"
                        display-property="title"
                        value-property="shortcut"
                        ref="day"
                        required
                />
            </div>
            <div class="demo__right">
                <p><strong>Days: </strong>{{days}}</p>
                <p><strong>Selected Day:</strong> {{selectedDay}}</p>
            </div>
        </div>

        <br>
        <my-button
                @click="handleSubmit"
                text="Submit"
                :loading="formSubmitting"
        />

        <br><br>
        <hr>
        <p v-if="formSubmitted">Selected Country: {{selectedCountry}}</p>
    </div>
</template>

<script>
    import MySelect from "../child/MySelect";
    import MyButton from "../child/MyButton";
    export default {
        name: "SelectPage",
        data(){
            return{
                languages: ['Bangla', 'English', 'Arabic'],
                selectedLanguage: '',
                countries: [
                    {name: 'Bangladesh', value: 'Ban'},
                    {name: 'India', value: 'Ind'},
                    {name: 'Pakistan', value: 'Pak'},
                ],
                selectedCountry: '',
                days: [
                    {title: 'Saturday', shortcut: 'sat'},
                    {title: 'Sunday', shortcut: 'sun'},
                    {title: 'Monday', shortcut: 'mon'},
                ],
                selectedDay: '',
                formSubmitted: false,
                formSubmitting: false
            }
        },
        components:{
            MySelect,
            MyButton
        },
        methods: {
            handleSubmit(){
                this.formSubmitted = false;

                if (!this.$refs.language.validateForm()){
                    return;
                }

                if (!this.$refs.country.validateForm()){
                    return;
                }

                if (!this.$refs.day.validateForm()){
                    return;
                }

                this.formSubmitting = true;
                setTimeout(() => {
                    this.formSubmitted = true;
                    this.formSubmitting = false;
                }, 3000)
            }
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
