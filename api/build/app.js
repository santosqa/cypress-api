const a0_0x196432 = a0_0x26d0
;(function (_0x179c39, _0x1d7d36) {
  const _0xd3d374 = a0_0x26d0,
    _0x348c03 = _0x179c39()
  while (!![]) {
    try {
      const _0x1228e2 =
        (-parseInt(_0xd3d374(0xc1)) / 0x1) *
          (-parseInt(_0xd3d374(0xbd)) / 0x2) +
        (-parseInt(_0xd3d374(0xb9)) / 0x3) *
          (-parseInt(_0xd3d374(0xda)) / 0x4) +
        (-parseInt(_0xd3d374(0xcb)) / 0x5) *
          (-parseInt(_0xd3d374(0xe1)) / 0x6) +
        (-parseInt(_0xd3d374(0xc2)) / 0x7) *
          (-parseInt(_0xd3d374(0xbe)) / 0x8) +
        (parseInt(_0xd3d374(0xca)) / 0x9) * (-parseInt(_0xd3d374(0xc3)) / 0xa) +
        -parseInt(_0xd3d374(0xdd)) / 0xb +
        -parseInt(_0xd3d374(0xd3)) / 0xc
      if (_0x1228e2 === _0x1d7d36) break
      else _0x348c03['push'](_0x348c03['shift']())
    } catch (_0x49710a) {
      _0x348c03['push'](_0x348c03['shift']())
    }
  }
})(a0_0x2a07, 0xa58bd)
function a0_0x2a07() {
  const _0x42cbf9 = [
    'env',
    '/tasks',
    'use',
    'todo',
    'urlencoded',
    'log',
    '18NQPQBM',
    '294325XFyvib',
    'type',
    'post',
    'auth',
    'create',
    'done',
    'remove',
    'task',
    '8777196UrcNol',
    'createValidator',
    'connect',
    'json',
    '/tasks/:task_id/todo',
    'Api\x20do\x20Mark85\x20online\x20na\x20porta:\x20',
    '/tasks/:task_id/done',
    '64NbhFNS',
    'get',
    'list',
    '12441737JCYUaT',
    'MONGO_URI',
    'delete',
    '/tasks/:task_id',
    '96pwCMjp',
    'toString',
    'put',
    'error',
    '30777rXMIMr',
    'listen',
    'params',
    'task_id',
    '297230HQsteR',
    '2921976Pisscq',
    'status',
    'body',
    '9fCjqAA',
    '14stzDjq',
    '3167180FNRzoI',
  ]
  a0_0x2a07 = function () {
    return _0x42cbf9
  }
  return a0_0x2a07()
}
import a0_0x10606a from 'express'
import a0_0x522734 from 'mongoose'
import a0_0x5edf68 from 'cors'
const validator = require('express-joi-validation')[a0_0x196432(0xd4)]({
  passError: !![],
})
import a0_0x2444be from './controllers/tasks'
import a0_0x4dd470 from './controllers/users'
function a0_0x26d0(_0x1e1a41, _0x1f11dd) {
  const _0x2a079e = a0_0x2a07()
  return (
    (a0_0x26d0 = function (_0x26d036, _0x322ea3) {
      _0x26d036 = _0x26d036 - 0xb9
      let _0x34b04e = _0x2a079e[_0x26d036]
      return _0x34b04e
    }),
    a0_0x26d0(_0x1e1a41, _0x1f11dd)
  )
}
import a0_0x3f5a92 from './schemas/task'
import a0_0xf84bdc from './schemas/user'
import 'dotenv/config'
import a0_0x2f8819 from './middlewares/auth'
const app = a0_0x10606a()
app[a0_0x196432(0xc6)](
  a0_0x5edf68({ origins: ['*'], methods: ['*'], allowedHeaders: ['*'] })
),
  app[a0_0x196432(0xc6)](a0_0x10606a[a0_0x196432(0xd6)]()),
  app[a0_0x196432(0xc6)](a0_0x10606a[a0_0x196432(0xc8)]({ extended: !![] })),
  a0_0x522734[a0_0x196432(0xd5)](
    process[a0_0x196432(0xc4)][a0_0x196432(0xde)],
    { useNewUrlParser: !![], useUnifiedTopology: !![] }
  ),
  app[a0_0x196432(0xcd)](
    '/users',
    validator['body'](a0_0xf84bdc['user']),
    a0_0x4dd470[a0_0x196432(0xcf)]
  ),
  app[a0_0x196432(0xcd)](
    '/sessions',
    validator[a0_0x196432(0xc0)](a0_0xf84bdc[a0_0x196432(0xce)]),
    a0_0x4dd470[a0_0x196432(0xce)]
  ),
  app[a0_0x196432(0xc6)](a0_0x2f8819),
  app[a0_0x196432(0xdb)](a0_0x196432(0xc5), a0_0x2444be[a0_0x196432(0xdc)]),
  app[a0_0x196432(0xdb)](
    a0_0x196432(0xe0),
    validator['params'](a0_0x3f5a92['task_id']),
    a0_0x2444be[a0_0x196432(0xdb)]
  ),
  app[a0_0x196432(0xdf)](
    a0_0x196432(0xe0),
    validator[a0_0x196432(0xbb)](a0_0x3f5a92['task_id']),
    a0_0x2444be[a0_0x196432(0xd1)]
  ),
  app['post'](
    a0_0x196432(0xc5),
    validator['body'](a0_0x3f5a92[a0_0x196432(0xd2)]),
    a0_0x2444be[a0_0x196432(0xcf)]
  ),
  app[a0_0x196432(0xe3)](
    a0_0x196432(0xd9),
    validator[a0_0x196432(0xbb)](a0_0x3f5a92[a0_0x196432(0xbc)]),
    a0_0x2444be[a0_0x196432(0xd0)]
  ),
  app['put'](
    a0_0x196432(0xd7),
    validator[a0_0x196432(0xbb)](a0_0x3f5a92[a0_0x196432(0xbc)]),
    a0_0x2444be[a0_0x196432(0xc7)]
  )
const port = 0xd05
app[a0_0x196432(0xc6)]((_0x37b4e4, _0x39ac92, _0x4150dc, _0x150fbd) => {
  const _0x3fb9d4 = a0_0x196432
  if (
    _0x37b4e4 &&
    _0x37b4e4[_0x3fb9d4(0xe4)] &&
    _0x37b4e4[_0x3fb9d4(0xe4)]['isJoi']
  )
    _0x4150dc[_0x3fb9d4(0xbf)](0x190)[_0x3fb9d4(0xd6)]({
      type: _0x37b4e4[_0x3fb9d4(0xcc)],
      message: _0x37b4e4['error'][_0x3fb9d4(0xe2)](),
    })
  else
    _0x37b4e4
      ? _0x4150dc[_0x3fb9d4(0xbf)](0x190)[_0x3fb9d4(0xd6)]({
          type: _0x37b4e4[_0x3fb9d4(0xcc)],
        })
      : _0x150fbd(_0x37b4e4)
}),
  app[a0_0x196432(0xba)](port, () => {
    const _0x5cf6db = a0_0x196432
    console[_0x5cf6db(0xc9)](_0x5cf6db(0xd8) + port)
  }),
  (module['exports'] = app)
