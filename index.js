import Controller from "./js/main.controller.js";
import Model from "./js/main.model.js";
import Subscriber from "./js/subscriber.js";
import View from "./js/main.view.js";

const sub = Subscriber();
const model = new Model(sub);
const view = new View(sub);
const controller = new Controller(model, view);
