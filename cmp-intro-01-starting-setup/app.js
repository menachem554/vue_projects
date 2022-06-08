const app = Vue.createApp({
   data() {
      return {
         friends: [
            { id: 1, name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
            { id: 2, name: 'Julie Jones', phone: '09876 543 221', email: 'julie@localhost.com' },
         ],
      };
   },
});

app.component('friend-list', {
   template: `
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{ friend.name}}</h2>
    <button @click="toggleDetails()">{{ dataAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="dataAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
   data() {
      return {
         dataAreVisible: false,
         friends: [
            { id: 1, name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com' },
         ],
      };
   },
   methods: {
      toggleDetails() {
         this.dataAreVisible = !this.dataAreVisible;
      },
   },
});

app.mount('#app');
