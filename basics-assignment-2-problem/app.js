const app = Vue.createApp({
    data() {
        return {
            inputText: '',
            confirmInput: '',
        };
    },
    methods: {
        showAlert() {
            alert('Hello from Vue!');
        },
        updateInput(input) {
            this.inputText = input.target.value;
        },
        confirmName() {
            this.confirmInput = this.inputText;
        },
    },
});

app.mount('#assignment');
