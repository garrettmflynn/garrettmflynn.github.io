import { originalPurpose } from './info/brainsatplay.js'
import * as project from './project/overlay.esc.js'
export const __compose = project

export const date = "Ongoing"
export const header = 'Brains@Play'
export const description = "A Worker-Owned Creative Technology Studio"
export const body = `
<p><a href="https://brainsatplay.com" target="_blank">Brains@Play</a> is a worker-owned creative technology studio that <a href="https://github.com/joshbrew" target="_blank">Josh Brewster</a> and I cofounded during my time at the University of Southern California.</p>
<p>Originally, we sought to ${originalPurpose}.</p>
<p>Since then, however, we've stepped back to address more fundamental problems on the Web.</p>
<p>In particular, we look at designing <em>composability</em> and <em>inspectability</em> into high performance on applications that must handle more than 250 state changes a second (i.e. the minimum for a single-channel EEG headset)—though similar rates can be seen with real-time audio/video processing and similar interactive applications.</p>

`
