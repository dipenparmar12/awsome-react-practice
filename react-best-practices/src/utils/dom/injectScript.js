/**
 * determine given url is relative or not
 * @param {String} src
 * @see https://dev.to/sandrarodgers/add-an-external-script-to-a-vue-component-and-defer-execution-of-logic-on-the-script-4kge
 * @returns
 */
function injectScript(src, attrs = {}) {
  const isValidUrl =
    src &&
    src.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    )

  if (isValidUrl) {
    const script = document.createElement('script')
    Object.entries(attrs || {}).forEach(([key, val]) => {
      script.setAttribute(key, val)
    })

    script.type = 'text/javascript'
    script.async = true
    script.src = src
    document.head.appendChild(script)
  }
}

export default injectScript
