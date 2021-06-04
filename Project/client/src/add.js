function run() {
    new Vue({
      el: '#add',
      data: {
        id: '',
        message: '',
        guitar: {}
      },
      created: function () {
      },
      methods: {
       add: function(){
            console.dir(this.guitar);
            return axios.put('http://localhost:3000/guitars', this.guitar).then(
                (response) => {
                    this.message = response.data;
                }
            );

        }
      }
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });