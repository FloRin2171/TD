function run() {
    new Vue({
      el: '#update',
      data: {
        id: '',
        message: '',
        guitar: {}
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");

        axios.get('http://localhost:3000/guitars/'+this.id).then(
            (response) => {
                this.guitar = response.data;
            }
        );
      },
      methods: {
        update: function(){
            console.dir(this.guitar);

            return axios.post('http://localhost:3000/guitar', this.guitar).then(
                (response) => {
                    this.message = response.data; // saved
                }
            );
        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  