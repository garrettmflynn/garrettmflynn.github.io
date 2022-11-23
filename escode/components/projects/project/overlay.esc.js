// TODO: Make a project template that goes into the overlay
import * as overlay from '../../overlay.esc.js'

export const header = 'Project'
export const description = "My project to make a website with ESCode."
export const body = "<p>This project is pretty cool.</p>"

export const __compose = overlay


// // Replace projects contents with object contents
// export function __onconnected () {
//     if (this.html) this.__children.body.__element.innerHTML = this.html
// }

// export const  __children = {
//     header: {
//         __attributes: {
//             style: {
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//             }
//         },
//         __children: {
//             text: {
//                 __element: 'h2',
//                 __children: {
//                     description: {
//                         __element: 'span',
//                         __attributes: {
//                             innerText: 'Header'
//                         }
//                     }
//                 }
//             },
//         }
//     },
//     body: {
//         __element: 'p',
//         __attributes: {
//             innerText: "This is some cool stuff."
//         }
//     },
// }