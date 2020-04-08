// import Mock from 'mockjs'
// import { param2Obj } from '../src/utils'

// import user from './user'

const Mock = require('mockjs');
// const { param2Obj } = require('../src/utils');
const user = require("./user");


const mocks = [
  ...user
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          // query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    //url: new RegExp(`${process.env.BASE_ENV}${url}`),
    // url: new RegExp(`${url}`),
    url: "/" + `${process.env.npm_config_baseenv ? process.env.npm_config_baseenv : "mock"}${url}`,
    type: type || 'get',
    response(req, res) {
      console.log('request invoke:' + req.path)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

// module.exports = mocks.map(route => {
//   return responseFake(route.url, route.type, route.response)
// })

module.exports = {
  mockXHR: mockXHR,
  mocks: mocks.map(route => {
    return responseFake(route.url, route.type, route.response)
  })
};
