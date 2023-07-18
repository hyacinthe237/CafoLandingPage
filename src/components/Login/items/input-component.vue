<template>
    <div class="form-group">
        <label :for="name">{{ label }}</label>
        <input 
            :type="types"
            :name="name" 
            class="input" 
            :placeholder="placeholder"
            v-model="inputValue"
        >
    </div>
</template>

<script>
    export default {
        name: 'InputComponent',

        props: {
            label: { type: String, default: '' },
            types: { type: String, default: '' },
            name: { type: String, default: '' },
            modelv: { type: String, default: '' },
        },

        data: () => ({
            inputValue: ''
        }),

        computed: {
            placeholder () {
                return 'Saissisez votre ' + this.name
            }
        },

        methods: {
            send () {
                this.$emit(`emit-${this.name}`, this.inputValue)
            }
        }
    }
</script>

<style scoped>
    .form-group {
        display: flex;
        flex-direction: column;
        width: 100%;
        cursor: pointer;
        margin-bottom: 20px;
    }

    label {
        font-size: 16px;
        color: #ccc;
        text-align: left;
        margin-bottom: ;
    }

    input {
        height: 44px;
        width: 100%;
        font-size: 18px;
    }
</style>