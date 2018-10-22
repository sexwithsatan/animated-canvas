/* globals requestAnimationFrame */
import step from './step.js'
import enqueue from './enqueue.js'

export default
function animate(states) {
  return states(play, pause)
}

function pause(g) {
  g.return()
}

function play(fps, frames) {
  const g = frames()
  const handle = requestAnimationFrame(t => {
    enqueue(1000/fps, g, t)
  })
  
  step(handle, g.next())
  return g
}
