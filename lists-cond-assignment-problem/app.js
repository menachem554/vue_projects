const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      showList: true,
      tasks: [],
      options: ["Hide List", "Show List"],
      option: "",
    };
  },
  computed: {
    visibleTasks() {
      return this.showList ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
      this.newTask = "";
    },
    mangeList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
