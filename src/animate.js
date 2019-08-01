/* global requestAnimationFrame */
import nextFrame from './next-frame.js'

export default
function animate(iterable, {fps}) {
  const interval = 1000/fps
  const handle = requestAnimationFrame(t => {
    animateFrame(t)
  })
  
  nextFrame(iterable[Symbol.iterator]().next(undefined), handle)

  function animateFrame(now, {
    start = now,
    delta = 0
  } = {}) {
    const elapsed = now - start + delta
    const handle = requestAnimationFrame(t => {
      animateFrame(t, {
        start: now,
        delta: elapsed % interval
      })
    })

    if (elapsed > interval) {
      nextFrame(iterable[Symbol.iterator]().next(elapsed), handle)
    }
  }
}
