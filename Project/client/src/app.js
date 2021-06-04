function run() {
  let indexComponent = new Vue({
    el: '#app',
    data: {
      guitars: [],
      guitarsService: null,
      message: ''
    },
    created: function () {
      this.guitarsService = guitars();
      console.log(guitars());
      this.guitarsService.get().then(response => (this.guitars = response.data));
      console.log( this.guitars );
    },
    methods: {
      deleteGuitar: function(id) {
        console.log('HTTP DELETE spre backend, guitar: '+id);
        this.guitarsService.remove(id).then(response => {
          this.guitarsService.get().then(response => (this.guitars = response.data));
        });
      },
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
