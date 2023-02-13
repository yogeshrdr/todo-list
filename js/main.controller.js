class MainController {
    constructor(model, view) {
      this.model = model;
      this.view = view;

      this.view.subscribeView();
      this.model.subscribeModel();
    };
};

export default MainController;