/* global requestAnimationFrame */
import nextFrame from './next-frame.js'

export default
function animate(iterable, {fps}) {
  const interval = 1000/fps
  const handle = requestAnimationFrame(t => {
    animateFrame(t)
  })
  
  nextFrame(iterable[Symbol.iterator]().next(undefined), handle)

  function animateFrame(now, start = now) {
    const delta = now - start
    const lag = delta % interval
    const handle = requestAnimationFrame(t => {
      animateFrame(t, now - lag)
    })

    if (delta > interval) {
      nextFrame(iterable[Symbol.iterator]().next(delta), handle)
    }
  }
}
