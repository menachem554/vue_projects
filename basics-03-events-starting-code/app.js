const app = Vue.createApp({
    data() {
        return {
            counter: 100,
            name: '',
            confirmInput: '',
            input: '',
        };
    },
    computed: {
        fullName() {
            if (this.name) {
                return this.name + ' ' + 'The Great';
            }
        },
    },
    methods: {
        add() {
            this.counter += 10;
        },
        subtract() {
            this.counter -= 5;
        },
        updateName(event) {
            this.name = event.target.value;
        },
        resetName() {
            this.name = '';
        },
        saveInput(event) {
            this.input = event.target.value;
        },
        printInput() {
            this.confirmInput = this.input;
        },
        resetInput() {
            this.confirmInput = '';
        },
        submitForum() {
            alert(`Hello ${this.name}!`);
        },
    },
});

app.mount('#events');
