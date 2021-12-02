'use strict'
var HostedGit = require('../index')
var test = require('tap').test

var showLabel = function (label, fn) { return label + ' -> ' + fn }

var testFixtures = function (t, params, fixtures) {
  for (var i = 0; i < fixtures.length; ++i) {
    var fixture = fixtures[i]
    var host = fixture.host(params)
    var hostinfo = HostedGit.fromUrl(host)
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
  =======
    var expectedHash = params.project
  >>>>>>> nlf/simpler-regex
  =======
  >>>>>>> isaacs/fix-60-legacy

    // INFO: from Url should return `undefined` from fixture input
    if (fixture.isUndefined) {
      t.test('input results in undefined', function (tt) {
        tt.is(hostinfo, undefined)
        tt.end()
      })
      break
    }

    t.test('hostinfo.https', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '#' + params.branch
          : url
      }
      tt.is(
        hostinfo.https(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('git+https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  =======
        expected(`git+https://gist.github.com/${expectedHash}.git`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('git+https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'https')
      )
      tt.is(
        hostinfo.https({ noCommittish: true }),
        // INFO: not using `expected` because with `{noCommittish: true}` the output is always the same
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        'git+https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git',
  =======
        `git+https://gist.github.com/${expectedHash}.git`,
  >>>>>>> nlf/simpler-regex
  =======
        'git+https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git',
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'https({ noCommittish: true })')
      )
      tt.is(
        hostinfo.https({ noGitPlus: true }),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  =======
        expected(`https://gist.github.com/${expectedHash}.git`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'https({ noGitPlus: true })')
      )
      tt.end()
    })
    t.test('hostinfo.git', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '#' + params.branch
          : url
      }
      tt.is(
        hostinfo.git(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('git://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  =======
        expected(`git://gist.github.com/${expectedHash}.git`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('git://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'git')
      )
      tt.is(
        hostinfo.git({ noCommittish: true }),
        // INFO: not using `expected` because with `{noCommittish: true}` the output is always the same
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        'git://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git',
  =======
        `git://gist.github.com/${expectedHash}.git`,
  >>>>>>> nlf/simpler-regex
  =======
        'git://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git',
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'git({ noCommittish: true })')
      )
      tt.is(
        hostinfo.git({ noGitPlus: true }),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('git://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  =======
        expected(`git://gist.github.com/${expectedHash}.git`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('git://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'git({ noGitPlus: true })')
      )
      tt.end()
    })
    t.test('hostinfo.browse', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '/' + params.branch
          : url
      }
      tt.is(
        hostinfo.browse(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch),
  =======
        expected(`https://gist.github.com/${expectedHash}`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'browse')
      )
      tt.is(
        hostinfo.browse('C'),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-c',
  =======
        expected(`https://gist.github.com/${expectedHash}`, fixture.hasBranch) + '#file-c',
  >>>>>>> nlf/simpler-regex
  =======
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-c',
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, "browse('C')")
      )
      tt.is(
        hostinfo.browse('C/D'),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-cd',
  =======
        expected(`https://gist.github.com/${expectedHash}`, fixture.hasBranch) + '#file-cd',
  >>>>>>> nlf/simpler-regex
  =======
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-cd',
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, "browse('C/D')")
      )
      tt.is(
        hostinfo.browse('C', 'A'),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-c',
  =======
        expected(`https://gist.github.com/${expectedHash}`, fixture.hasBranch) + '#file-c',
  >>>>>>> nlf/simpler-regex
  =======
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-c',
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, "browse('C', 'A')")
      )
      tt.is(
        hostinfo.browse('C/D', 'A'),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-cd',
  =======
        expected(`https://gist.github.com/${expectedHash}`, fixture.hasBranch) + '#file-cd',
  >>>>>>> nlf/simpler-regex
  =======
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch) + '#file-cd',
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, "browse('C/D', 'A')")
      )
      tt.end()
    })
    t.test('hostinfo.bugs', function (tt) {
      tt.is(
        hostinfo.bugs(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        'https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2',
  =======
        `https://gist.github.com/${expectedHash}`,
  >>>>>>> nlf/simpler-regex
  =======
        'https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2',
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'bugs')
      )
      tt.end()
    })
    t.test('hostinfo.docs', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '/' + params.branch
          : url
      }
      tt.is(
        hostinfo.docs(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch),
  =======
        expected(`https://gist.github.com/${expectedHash}`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'docs')
      )
      tt.end()
    })
    t.test('hostinfo.ssh', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '#' + params.branch
          : url
      }
      tt.is(
        hostinfo.ssh(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('git@gist.github.com:/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  =======
        expected(`git@gist.github.com:/${expectedHash}.git`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('git@gist.github.com:/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'ssh')
      )
      tt.end()
    })
    t.test('hostinfo.sshurl', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '#' + params.branch
          : url
      }
      tt.is(
        hostinfo.sshurl(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('git+ssh://git@gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  =======
        expected(`git+ssh://git@gist.github.com/${expectedHash}.git`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('git+ssh://git@gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'sshurl')
      )
      tt.end()
    })
    t.test('hostinfo.shortcut', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '#' + params.branch
          : url
      }
      tt.is(
        hostinfo.shortcut(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('gist:a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch),
  =======
        expected(`gist:${expectedHash}`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('gist:a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'shortcut')
      )
      tt.end()
    })
    if (hostinfo.user) {
      t.test('hostinfo.file', function (tt) {
        var expected = function (url, hasBranch) {
          return (hasBranch)
            ? url + params.branch + '/'
            : url
        }
        tt.is(
          hostinfo.file(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch),
  =======
          expected(`https://gist.githubusercontent.com/some-owner/${expectedHash}/raw/`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
          showLabel(fixture.label, 'file')
        )
        tt.is(
          hostinfo.file(''),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch),
  =======
          expected(`https://gist.githubusercontent.com/some-owner/${expectedHash}/raw/`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
          showLabel(fixture.label, "file('')")
        )
        tt.is(
          hostinfo.file('C'),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch) + 'C',
  =======
          expected(`https://gist.githubusercontent.com/some-owner/${expectedHash}/raw/`, fixture.hasBranch) + 'C',
  >>>>>>> nlf/simpler-regex
  =======
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch) + 'C',
  >>>>>>> isaacs/fix-60-legacy
          showLabel(fixture.label, "file('C')")
        )
        tt.is(
          hostinfo.file('C/D'),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch) + 'C/D',
  =======
          expected(`https://gist.githubusercontent.com/some-owner/${expectedHash}/raw/`, fixture.hasBranch) + 'C/D',
  >>>>>>> nlf/simpler-regex
  =======
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch) + 'C/D',
  >>>>>>> isaacs/fix-60-legacy
          showLabel(fixture.label, "file('C/D')")
        )
        tt.is(
          hostinfo.file('C', 'A'),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch) + 'C',
  =======
          expected(`https://gist.githubusercontent.com/some-owner/${expectedHash}/raw/`, fixture.hasBranch) + 'C',
  >>>>>>> nlf/simpler-regex
  =======
          expected('https://gist.githubusercontent.com/some-owner/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/raw/', fixture.hasBranch) + 'C',
  >>>>>>> isaacs/fix-60-legacy
          showLabel(fixture.label, "file('C', 'A')")
        )
        tt.end()
      })
      t.test('hostinfo.tarball', function (tt) {
        var expected = function (url, hasBranch) {
          return (hasBranch)
            ? url.replace(/master/gi, params.branch)
            : url
        }
        tt.is(
          hostinfo.tarball(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
          expected('https://codeload.github.com/gist/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/tar.gz/master', fixture.hasBranch),
  =======
          expected(`https://codeload.github.com/gist/${expectedHash}/tar.gz/master`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
          expected('https://codeload.github.com/gist/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/tar.gz/master', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
          showLabel(fixture.label, 'tarball')
        )
        tt.is(
          hostinfo.tarball({ noCommittish: true }),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
          expected('https://codeload.github.com/gist/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/tar.gz/master', fixture.hasBranch),
  =======
          expected(`https://codeload.github.com/gist/${expectedHash}/tar.gz/master`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
          expected('https://codeload.github.com/gist/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2/tar.gz/master', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
          showLabel(fixture.label, 'tarball({ noCommittish: true })')
        )
        tt.end()
      })
    }

    t.test('hostinfo.toString', function (tt) {
      var expected = function (url, hasBranch) {
        return (hasBranch)
          ? url + '#' + params.branch
          : url
      }
      tt.is(
        hostinfo.toString(),
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
        expected('git+https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  =======
        expected(`git+https://gist.github.com/${expectedHash}.git`, fixture.hasBranch),
  >>>>>>> nlf/simpler-regex
  =======
        expected('git+https://gist.github.com/a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2.git', fixture.hasBranch),
  >>>>>>> isaacs/fix-60-legacy
        showLabel(fixture.label, 'toString')
      )
      tt.end()
    })
  }
}
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
  =======
  >>>>>>> isaacs/fix-60-legacy

test('fromUrl(gist url)', function (t) {
  var fixtures = require('./fixtures')
  var gistFixtures = require('./fixtures/gist')
  var collectedFixtures = [].concat(fixtures, gistFixtures)

  <<<<<<< nlf/simpler-regex
  =======

test('fromUrl(gist url)', function (t) {
  var fixtures = require('./fixtures')
  var gistFixtures = require('./fixtures/gist')
  var collectedFixtures = [].concat(fixtures, gistFixtures)

  >>>>>>> nlf/simpler-regex
  =======
  >>>>>>> isaacs/fix-60-legacy
  t.test('main fixtures', function (tt) {
    var params = {
      domain: 'gist.github.com',
      shortname: 'github',
      label: 'github',
      owner: 'some-owner',
      project: new Array(17).join('a2'),
      branch: 'feature-branch'
    }
  <<<<<<< nlf/simpler-regex
  <<<<<<< nlf/backport-regex-fix
  =======

    testFixtures(tt, params, collectedFixtures)
    tt.end()
  })

  t.test('legacy gist hash length', function (tt) {
    var params = {
      domain: 'gist.github.com',
      shortname: 'github',
      label: 'github',
      owner: 'some-owner',
      project: '3135914',
      branch: 'feature-branch'
    }
  >>>>>>> nlf/simpler-regex
  =======
  >>>>>>> isaacs/fix-60-legacy

    testFixtures(tt, params, collectedFixtures)
    tt.end()
  })

  t.end()
})
