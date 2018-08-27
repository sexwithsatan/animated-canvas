const {cancelAnimationFrame} = window

export default
function repaint(handle, blit, {value, done}) {
  if (done) {
    cancelAnimationFrame(handle)
  } else {
    blit(value)
  }
}
