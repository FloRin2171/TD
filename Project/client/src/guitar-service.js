function guitars() {
  get = function () {
    return axios.get('http://localhost:3000/guitars');
  };

  remove = function (index) {
    return axios.delete('http://localhost:3000/guitars/'+index);
  };

  return {
    get: get,
    remove: remove
  };
}
