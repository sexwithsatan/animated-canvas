/* global requestAnimationFrame */
import nextFrame from './next-frame.js'

export default
function animateFrame(iterable, interval, now, {
  start = now,
  delta = 0
} = {}) {
  const elapsed = now - start + delta
  const handle = requestAnimationFrame(t => {
    animateFrame(iterable, interval, t, {
      start: now,
      delta: elapsed % interval
    })
  })

  if (elapsed > interval) {
    nextFrame(iterable[Symbol.iterator]().next(elapsed), handle)
  }
}
