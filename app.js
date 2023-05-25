const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      conformedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.conformedName = this.name;
    },
    submitForm(e) {
      alert('Form is Submitted !!!')
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
    },
    resetInput(){
      // document.querySelector('input').value  = '';
      this.name = '';
    }
  }
});

app.mount('#events');
