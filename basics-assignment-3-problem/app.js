const app = Vue.createApp({
    data() {
        return {
            num: 0,
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(() => {
                that.num = 0;
            }, 5000);
        },
    },
    computed: {
        result() {
            if (this.num === 37) return this.num
            return this.num < 37 ? 'Not there yet' : 'Too much!';
        },
    },
    methods: {
        addNumbers(val) {
            this.num = this.num + val;
        },
    },
});

app.mount('#assignment');
