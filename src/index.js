import nav from "./nav"
import { top, bottom } from "./footer";
import makeButton from "./button"
import { makeColor } from "./button-styles"

const button = makeButton("Yay, A button is made")
button.style = makeColor("cyan")
document.body.appendChild(button)



console.log(nav(), top, bottom, makeColor("cyan"))