Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    removeGoal(goal) {
      this.goals.splice(this.goals.indexOf(goal), 1);
    },
  },
}).mount("#app");

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// function addItem() {
//     const element = input.value;
//     const itemsList = document.createElement('li');
//     itemsList.textContent = element;
//     ul.appendChild(itemsList);
//     input.value = '';
// }

// button.addEventListener('click', addItem);
