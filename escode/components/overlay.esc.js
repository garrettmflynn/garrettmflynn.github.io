    const symbol = Symbol('overlay')

    export const componentSymbol = Symbol('overlayComponent')

    export const __symbol = componentSymbol
    
    export const toggleOverlay = function (state) {


        const forced = typeof state === 'boolean'
        let component = this
        while (component.__symbol !== symbol) {
            if (component.__symbol === componentSymbol)  component = component.__children.overlay
            else component = component.__parent.__component
        }


        const element = component.__element

        const toClose = (forced) ? !state : element.classList.contains('open')

        if (toClose) element.classList.remove('open')
        else element.classList.add('open')

        document.body.classList[toClose ? 'remove' : 'add']('noscroll')
        
        // Remove the overlay hash from the URL
        if (toClose && !forced) setTimeout(() => {
            var scrollY = window.scrollY;
            var scrollX = window.scrollX;
            window.location.hash = ''
            window.scrollTo(scrollX, scrollY);
        }, 100)
    }

    // Replacement Shortcuts
    export function __onconnected () {

        const mode = this.mode
        const props = ['header', 'description', 'date', 'body']
        const toggleProps = (mode === 'link') ? ['header'] : props

        props.forEach(async prop => {
            if (prop in this) {
                const value = this[prop]

                // Inside Overlay
                let target = this.__children.overlay.__children.contents
                if (prop !== 'body') target = target.__children.header.__children.text
                target.__children[prop].__element.innerHTML = value

                // On Overlay Toggle
                if (toggleProps.includes(prop)) {
                const toggle = this.__children.toggle
                const toggleProp = toggle.__children[prop]
                if (toggleProp) {
                    toggleProp.__element.innerHTML = value

                    if (prop === 'header') {
                        const str = `#${value.toLowerCase()}`
                        toggle.__element.href = str
                    }
                }
                }

            }
        })

        if (window.location.hash === hash.call(this)) toggle.call(this)

    }

    const hash = function(){
        const url = new URL(this.__children.toggle.__element.href)
        if (url) return url.hash
    }
    
    const toggle = function(){

        let component = this
        while (component.__symbol !== componentSymbol) component = component.__parent.__component
        component.__element.classList.toggle('active')
        component.toggleOverlay.call(component)
    
        // Remove all other active links
        document.body.querySelectorAll('.escodeOverlay').forEach(o => {
            if (o.__component !== component) {
                o.__component.toggleOverlay(false)
            }
        })
    }
    
    export const __element = 'p'
    
    export const __attributes = {
        class: 'escodeOverlay',
    }

    export const  __children = {
        toggle: {

            __element: 'a',
            __attributes: {
                href: '#overlay',
                onclick: toggle,
                style: {
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                }
            },
            __children: {
                header: {
                    __element: 'span',
                    __attributes: {
                        innerText: 'Overlay',
                    }
                },
                date: {
                    __element: 'span',
                    __attributes: {
                        innerText: '',
                        style: {
                            fontSize: '80%'
                        }
                    }
                },   
            },
        },
        overlay: {
            __element: 'section',
            __symbol: symbol,

            __attributes: {
                class: "overlay"
            },
            __children: {
                
        contents: {
            __attributes: {
                style: {
                    position: 'relative',
                }
            },
            __children: {
                header: {
                    __attributes: {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }
                    },
                    __children: {
                        text: {
                            __children: {
                                date: {
                                    __element: 'small',
                                    __attributes: {
                                        innerText: '',
                                        style: {
                                            color: 'rgb(200, 200, 200)',
                                        }
                                    },
                                },
                                header: {
                                    __element: 'h2',
                                    __attributes: {
                                        // class:"outline",
                                        innerText: 'Header'
                                    },
                                },
                                description: {
                                    __element: 'small',
                                    __attributes: {
                                        innerText: '',
                                        style: {
                                            color: 'rgb(200, 200, 200)',
                                        }
                                    }
                                }
                            }
                        },
        
                        // Always outside
                        back: {
                            __element: 'button',
                            __attributes: {
                                innerText: 'X',
                                onclick: toggleOverlay,
                                style: {
                                    position: 'absolute',
                                    right: '0',
                                    top: '0',
                                    transform: 'translateY(-100%)',
                                    padding: '5px 10px'
                                }
                            },
                        }
                    }
                },
                body: {
                    __element: 'div',
                },
            }
        }
    }
}
 }