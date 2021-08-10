(function () {

  interface Model {
    items: []
  }

  interface View {
    clearList: Function;
    render: Function;
    addItem: Function;
  }

  interface Controller {
    init: Function;
    addItem: Function;
    completeItem: Function;
    deleteItem: Function;
  }

  let model: Model = {
    items: []
  };

  let view: View = {
    clearList: function () {

    },
    render: function () {

    },
    addItem: function () {

    }
  };

  let controller: Controller = {
    init: function name() {

    },
    addItem: function () {

    },
    completeItem: function () {

    },
    deleteItem: function () {

    }

  }

})();
