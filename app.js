const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      conformedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.conformedName = this.name;
    },
    submitForm(e) {
      alert('Form Submitted')
      // e.preventDefault()
    },
    setName(e) {
      this.name = e.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    decrement() {
      this.counter--;
    }
  }
});

app.mount('#events');
