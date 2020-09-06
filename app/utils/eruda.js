export default () => {
  const src = 'https://cdnjs.cloudflare.com/ajax/libs/eruda/1.5.4/eruda.min.js'
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  document.body.appendChild(script)
  script.onload = () => {
    // eslint-disable-next-line no-undef
    if (eruda) {
      // eslint-disable-next-line no-undef
      eruda.init({ tool: ['console', 'elements', 'network', 'resources', 'info'], useShadowDom: false })
    }
  }
}
