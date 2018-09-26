export default
function step(handle, {done}) {
  if (done) {
    cancelAnimationFrame(handle)
  }
}
