import { run } from "./app/app";
import "./main.scss";
import AlertService from "./app/alert.service";
import ComponentService from "./app/component.service";
console.log("HI");
run(new AlertService(), new ComponentService());
