import "./scss/default.scss";

import Header from "./java/Header"
import Footer from "./java/Footer"
import Main from "./java/Main"
const app = document.querySelector('#app')

let contentHome = "";

contentHome += Header();
contentHome += Footer();
contentHome += Main();

app.innerHTML = contentHome;
