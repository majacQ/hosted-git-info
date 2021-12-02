// An example of a custom setup, useful when testing modules like pacote,
// which do various things with these git shortcuts.
  <<<<<<< nlf/fix-trailing-slash
const ghi = require('../git-host-info.js')
ghi.localhost = {
  protocols: ['git:'],
  domain: 'localhost',
  extract: (url) => {
    const [, user, project] = url.pathname.split('/')
    return { user, project, committish: url.hash.slice(1) }
  }
}

ghi.byShortcut['localhost:'] = 'localhost'
ghi.byDomain.localhost = 'localhost'

const HostedGit = require('../')
const t = require('tap')

t.test('supports extensions', t => {
  const hosted = HostedGit.fromUrl('git://localhost:12345/foo/bar')
  t.match(hosted, { type: 'localhost', default: 'git', user: 'foo', project: 'bar' }, 'parsed correctly')

  const shortcut = HostedGit.fromUrl('localhost:foo/bar')
  t.match(shortcut, { type: 'localhost', default: 'shortcut', user: 'foo', project: 'bar' }, 'parsed correctly')

  t.end()
})
  =======
const t = require('tap')
const ghi = require('../git-host-info.js')
ghi.localhost = {
  protocols: [ 'git' ],
  domain: 'localhost:12345',
  gittemplate: 'git://{domain}/{user}{#committish}',
  treepath: 'not-implemented',
  tarballtemplate: 'http://localhost:18000/repo-HEAD.tgz',
  shortcuttemplate: '{type}:{user}/x{#committish}',
  pathtemplate: '/{user}{#committish}',
  pathmatch: /^\/(repo|submodule-repo)/,
  hashformat: h => h,
  protocols_re: /^(git):$/
}

const gh = require('../')
const f = gh.fromUrl('git://localhost:12345/repo')

t.ok(f, 'got a localhost "hosted" repo')
t.equal(f.git(), 'git://localhost:12345/repo')
t.equal(f.tarball(), 'http://localhost:18000/repo-HEAD.tgz')
t.equal(f.shortcut(), 'localhost:repo/x')

const g = gh.fromUrl('localhost:repo/x')
t.ok(g, 'got a localhost repo from shortcut')
t.equal(g.git(), f.git(), 'resolves to the same repo')
t.equal(g.tarball(), f.tarball(), 'resolves to same tarball')
  >>>>>>> isaacs/allow-colon-in-host
