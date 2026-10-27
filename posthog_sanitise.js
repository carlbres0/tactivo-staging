// The web half of lib/core/analytics/url_sanitiser.dart: posthog-js stamps the whole URL ($current_url, with the hash route and its query)
// on every event, so the values of free-text params (a search, a Find ask, a Customise prefill) are blanked to `_` before anything is sent.
// The same rule, held to the same vectors: test/fixtures/url_sanitise_vectors.json (tool/posthog_sanitise.test.mjs runs this file).
(function (root) {
  var FREE_TEXT = /([?&])(q|prefill|text|ask|search)=[^&#\s]*/gi
  function sanitiseUrl(url) { return String(url).replace(FREE_TEXT, '$1$2=_') }
  function isUrlProperty(key) {
    var k = String(key).toLowerCase()
    return k === '$pathname' || k === '$referrer' || /url$/.test(k) || /referrer$/.test(k)
  }
  function beforeSend(event) {
    if (!event) return event
    ;['properties', '$set', '$set_once'].forEach(function (bag) {
      var props = event[bag]
      if (!props) return
      for (var key in props) {
        if (typeof props[key] === 'string' && isUrlProperty(key)) props[key] = sanitiseUrl(props[key])
      }
    })
    return event
  }
  root.tactivoSanitise = { sanitiseUrl: sanitiseUrl, beforeSend: beforeSend }
  if (typeof module !== 'undefined' && module.exports) module.exports = root.tactivoSanitise
})(typeof window !== 'undefined' ? window : globalThis)
