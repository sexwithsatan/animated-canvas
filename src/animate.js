/* global requestAnimationFrame */
import animateFrame from './animate-frame.js'
import nextFrame from './next-frame.js'

export default
function animate(iterable, {fps}) {
  const handle = requestAnimationFrame(t => {
    animateFrame(iterable, 1000/fps, t)
  })
  
  nextFrame(iterable[Symbol.iterator]().next(undefined), handle)
  return iterable
}
