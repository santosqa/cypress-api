const a8_0x3ea74a = a8_0x46a2
function a8_0x46a2(_0x2ea764, _0x5345d3) {
  const _0x57f5b2 = a8_0x57f5()
  return (
    (a8_0x46a2 = function (_0x46a285, _0x24bc62) {
      _0x46a285 = _0x46a285 - 0x89
      let _0x123e6d = _0x57f5b2[_0x46a285]
      return _0x123e6d
    }),
    a8_0x46a2(_0x2ea764, _0x5345d3)
  )
}
function a8_0x57f5() {
  const _0x12ad0b = [
    '45PEkCIt',
    '804870xWsjGt',
    'sendToQueue',
    '\x20[x]\x20Lost\x20amqp\x20connection!\x20Press\x20Control\x20+\x20C',
    '176bSpWEO',
    'log',
    '5IHHgye',
    '1024DVSxjB',
    '1256745htebVK',
    '\x20[x]\x20Sent\x20\x27%s\x27',
    'AMQP_URL',
    '7815WaKINx',
    'connect',
    '851172iDgCEk',
    '1718104aESOcx',
    'dotenv',
    'config',
    'from',
    'amqplib/callback_api',
    '7816542kpLKhU',
    '851540JIhajv',
    'close',
  ]
  a8_0x57f5 = function () {
    return _0x12ad0b
  }
  return a8_0x57f5()
}
;(function (_0x29f3a2, _0x38dfd1) {
  const _0x3b1268 = a8_0x46a2,
    _0x1f0706 = _0x29f3a2()
  while (!![]) {
    try {
      const _0x1d9ff1 =
        parseInt(_0x3b1268(0x9d)) / 0x1 +
        parseInt(_0x3b1268(0x93)) / 0x2 +
        (parseInt(_0x3b1268(0x8a)) / 0x3) * (parseInt(_0x3b1268(0x9c)) / 0x4) +
        (parseInt(_0x3b1268(0x9b)) / 0x5) * (-parseInt(_0x3b1268(0x92)) / 0x6) +
        -parseInt(_0x3b1268(0x8c)) / 0x7 +
        (parseInt(_0x3b1268(0x8d)) / 0x8) * (parseInt(_0x3b1268(0x95)) / 0x9) +
        (parseInt(_0x3b1268(0x96)) / 0xa) * (-parseInt(_0x3b1268(0x99)) / 0xb)
      if (_0x1d9ff1 === _0x38dfd1) break
      else _0x1f0706['push'](_0x1f0706['shift']())
    } catch (_0x38aeb3) {
      _0x1f0706['push'](_0x1f0706['shift']())
    }
  }
})(a8_0x57f5, 0xad999)
const amqplib = require(a8_0x3ea74a(0x91))
require(a8_0x3ea74a(0x8e))[a8_0x3ea74a(0x8f)]()
export const publishToQueue = (_0x3a7efe, _0x48e062) => {
  const _0x51b14f = a8_0x3ea74a
  try {
    amqplib[_0x51b14f(0x8b)](
      process['env'][_0x51b14f(0x89)],
      (_0x28b137, _0x1f7b6d) => {
        const _0x3a6a31 = _0x51b14f
        try {
          _0x1f7b6d['createChannel']((_0x4b8fa5, _0x5d1975) => {
            const _0x3f1952 = a8_0x46a2
            try {
              return (
                _0x5d1975['assertQueue'](_0x3a7efe),
                _0x5d1975[_0x3f1952(0x97)](
                  _0x3a7efe,
                  Buffer[_0x3f1952(0x90)](_0x48e062)
                ),
                console[_0x3f1952(0x9a)](_0x3f1952(0x9e), _0x48e062),
                _0x5d1975[_0x3f1952(0x94)]()
              )
            } catch (_0x5dc20f) {
              console[_0x3f1952(0x9a)](_0x3f1952(0x98))
            }
          })
        } catch (_0x3a4a74) {
          console['log'](_0x3a6a31(0x98))
        }
      }
    )
  } catch (_0x2ff1ff) {
    console['log'](_0x51b14f(0x98))
  }
}
