import {jsdom} from 'jsdom'

const doc = jsdom('<!doctype html></html><body></body></html>')
global.document = doc
global.window = doc.defaultView
global.navigator = {
  userAgent: 'node.js'
}
