'use strict'
var gulp = require('gulp')
var GulpSSH = require('gulp-ssh')

let config = {
  version: '1.0.0',
  ssh: {
    host: '192.168.0.47', // 服务器ip地址
    port: 22, // 端口号
    username: 'abc', // 用户名
    password: '111111' // 密码
  },
  remoteDir: '/home/abc/statics/dist/', // 项目存放路径
  commands: [
    'rm -rf /home/abc/statics/dist/' // 拷贝之前执行命令
  ]
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config.ssh
})

gulp.task('default', ['deployFile'], function () {})

/**
 * 上传文件
 */
gulp.task('deployFile', ['execSSH'], () => {
  return gulp
    .src(['./dist/**'])
    .pipe(gulpSSH.dest(config.remoteDir))
})

/**
 * 执行命令
 */
gulp.task('execSSH', () => {
  console.log('删除服务器上现有文件...')
  return gulpSSH.shell(config.commands, {
    filePath: 'commands.log'
  })
    .pipe(gulp.dest('logs'))
})
