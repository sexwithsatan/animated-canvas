/* globals requestAnimationFrame */
import step from './step.js'

export default
function enqueue(interval, g, now, {
  start = now,
  delta = 0
} = {}) {
  const elapsed = now - start + delta
  const handle = requestAnimationFrame(t => {
    enqueue(interval, g, t, {
      start: now,
      delta: elapsed % interval
    })
  })

  if (elapsed > interval) {
    step(handle, g.next(elapsed))
  }
}
