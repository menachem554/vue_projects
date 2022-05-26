const app = Vue.createApp({
    data() {
        return {
            name: 'menachem',
            age: 26,
            years: 5,
            random: Math.random(),
            theImage:
                'https://secure.meetupstatic.com/photos/event/4/6/7/7/600_479598039.jpeg',
        };
    },
    methods: {
        addYearsToAge(age) {
            return age += this.years;
        },
        randomNum() {
            return Math.random();
        },
    },
});

app.mount('#assignment');
