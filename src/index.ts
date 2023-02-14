import {Header} from "./app/header";
import {Footer} from "./app/footer";
import "./styles/css/style.css";
import "./styles/scss/main.scss";
// @ts-ignore
import img from "./assets/images/sun.jpg";



let header = new Header();
console.log(header.getFirstHeading());
let footer = new Footer();
console.log(footer.getFooterText());
// @ts-ignore
document.getElementById("img").setAttribute("src", img);