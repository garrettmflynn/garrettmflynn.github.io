import * as github from './components/icons/github.esc.js'
import * as instagram from './components/icons/instagram.esc.js'
import * as twitter from './components/icons/twitter.esc.js'

import * as about from './components/about.esc.js'

import * as portfolio from './components/projects/index.esc.js'

const select = function(ev, to) {
    ev.preventDefault()
    var scrollY = window.scrollY;
    var scrollX = window.scrollX;
    window.location.hash = to
    window.scrollTo(scrollX, scrollY);

    this.__element.classList.add('active')
    this.__parent.__component.__parent.querySelector('#about').classList.remove('open')
    this.__parent.querySelector('#aboutLink').classList.remove('active')
    document.body.classList.remove('noscroll')


    let el = (to === '#') ? document.body : this.__parent.__component.__parent.querySelector(to)
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export const __children = {

    loader: {
        __element: 'section',
        __attributes: {
            class: "overlay",
            style: {
                opacity: 1
            }
        },

        __onconnected: function () {
            setTimeout(() => {
                this.__element.style.opacity = 0;
                this.__element.style.pointerEvents = 'none'
            }, 1000)
        },

        __children: {
            image: {
                __element: 'img',
                __attributes: {
                    src: 'assets/favicon.png'
                }
            }
        }
    },

    timeElapsed: {
        __onconnected: function() {
            this.start = Date.now()
        },
        start: null,
        __animate: true,
        default: function () { 
            const output =  `${((Date.now() - this.start)/1000).toFixed(2)}s`
            return output
        },
    },

    controls: {
        __element: 'section',
        __children: {
            header: {
                __element: 'h2',
                __attributes: {
                    innerText: 'ESCode Output',
                    style: {
                        marginBottom: '10px'
                    }
                }
            },
            time: {
                __element: 'small',
                __children: {
                    label: {
                        __element: 'b',
                        __attributes: {
                            innerText: 'Time Elapsed: '
                        }
                    },
                    value: {
                        __element: 'span',
                    }
                }

            }
        },
        __attributes: {
            style: {
                position: 'fixed',
                bottom: 0,
                right: 0,
                background: 'black',
                padding: '25px',
                zIndex: 1
            }
        }
    },

    nav: {
        __element: 'nav',

        __children: {
            homeIcon: {
                __element: 'span',
                __attributes: {
                    onclick: function (ev) {
                        select.call(this, ev, '#')
                    },
                },
                __children: {
                    link: {
                        __element: 'a',
                        __attributes: {
                            href: '#',
                            class:"logo"
                        },
                        __children: {
                            homeIcon: {
                                __element: 'span',
                                __children: {
                                    icon: {
                                        __element: 'img',
                                        __attributes: {
                                            src: 'assets/favicon.png'
                                        }
                                    }
                                }
                            },
                        }
                    },
                }
            },

            aboutLink: about,

            portfolioLink: {
                __element: 'p',

                __attributes: {
                    onclick: function (ev) {
                        select.call(this, ev, '#portfolio')
                    },
                },
                __children: {
                    link: {
                        __element: 'a',
                        __attributes: {
                            href: '#portfolio',
                            innerText:"Portfolio"
                        },
                    },
                }
            },


            contact: {
                __element: 'p',
                __children: {
                    link: {
                        __element: 'a',
                        __attributes: {
                            href: 'mailto:garrettmflynn@gmail.com',
                            target: '_blank',
                            innerText:"Contact"
                        },
                    },
                }
            },

            twitter,

            instagram,

            github,
        }
    },

    hero: {
        __element: 'section',
       __children: {
            center: {
                __children: {
                    me: {
                        __children: {
                            img: {
                                __element: 'img',
                                __attributes: {
                                    src: 'assets/garrett.jpg'
                                }
                            }
                        }
                    },
                    name: {
                        __element: 'h1',
                        __attributes: {
                            innerText: 'Garrett Flynn',
                            style: {
                                userSelect: 'none',
                            },
                        }
                    },
                    tagline: {
                        __element: 'h3',
                        __children: {
                            first: {
                                __element: 'p',
                                __children: {
                                    text: {
                                        __element: 'span',
                                        __attributes: {
                                            innerHTML: 'Founding Partner of'
                                        }
                                    },
                                    space: {
                                        __element: 'span',
                                        __attributes: {
                                            innerHTML: ' '
                                        }
                                    },
                                    link: {
                                        __element: 'a',
                                        __attributes: {
                                            href: 'https://brainsatplay.com/',
                                            class: 'link',
                                            target: '_blank',
                                            innerHTML: 'Brains@Play'
                                        }
                                    }
                                }
                            },
                            second: {
                                __element: 'p',
                                __children: {
                                    text: {
                                        __element: 'span',
                                        __attributes: {
                                            innerHTML: 'Creator of'
                                        }
                                    },
                                    space: {
                                        __element: 'span',
                                        __attributes: {
                                            innerHTML: ' '
                                        }
                                    },
                                    link: {
                                        __element: 'a',
                                        __attributes: {
                                            href: 'https:/github.com/brainsatplay/escode/',
                                            class: 'link',
                                            target: '_blank',
                                            innerHTML: 'ESCode'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    separator: {
                        __element: 'br',
                    },
                    firstparagraph: {
                        __element: 'small',
                        __attributes: {
                            innerText: 'Hi! I’m a software engineer and transdisciplinary researcher who develops technologies that expand how people can interact with the Web.'
                        }
                    },
                }
            }
        }
    },

    demo: {
        __element: 'section',
        __children: {
            header: {
                __element: 'h2',
                __attributes: {
                    innerText: 'ESCode'
                }
            },
            text: {
                __attributes: {
                    innerHTML: `<br><span>Mess around this portfolio using ESCode. Don't be shy!</span><br><small><small>e.g. Connect the default output of timeElapsed to another object.</small></small><br><br>`
                }
            },
            edit: {
                __editor: {
                    bind: '../..',
                    views: {
                        menubar: false,
                        properties: false
                    },
                    style: {
                        background: 'white',
                        height: '300px',
                        color: 'black'
                    }
                }
            }
        },
    },

    portfolio: {
        __element: 'section',
        __compose: portfolio,
        __children: {
            header: {
                __element: 'h2',
                __attributes: {
                    innerText: 'Portfolio'
                },
                __childposition: 0
            },
        },
    },

    footer: {
        __element: 'footer',
        __attributes: {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        },
        __children: {
            text: {
                __element: 'small',
                __attributes: {
                    innerHTML: 'Made with ESCode &#128302;'
                }
            }
        },
    }

}

export const __listeners = {
    'controls.time.value': {
        timeElapsed: true
    },
}