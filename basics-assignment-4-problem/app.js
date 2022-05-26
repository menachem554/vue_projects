const app = Vue.createApp({
    data() {
        return {
            text: '',
            inputColor: '',
            isVisible: true,
        };
    },
    computed: {
        changeStyle() {
            return {
                user1: this.text === 'user1',
                user2: this.text === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible,
            };
        },
    },
    methods: {
        toggleStyle() {
            this.isVisible = !this.isVisible;
        },
    },
});

app.mount('#assignment');
