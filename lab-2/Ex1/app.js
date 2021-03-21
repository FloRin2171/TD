function run() {
  new Vue({
    el: '#app',
    data: {
      message: '',
      btnMessage: ''
    },
    methods: {
      doSomething: function () {
        if(this.message == "123"){
           this.btnMessage = "123";
        }
        else{
        this.btnMessage = '';
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});


