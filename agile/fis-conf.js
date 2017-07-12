/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'agile');
fis.set('project.fileType.text', 'jes');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei

/**
 * client config
 */
// vue组件中的less片段处理
fis.match('client/**.vjs:less', {
    rExt: '.css',
    parser: fis.plugin('less')
});

// vue组件中js片段处理。
fis.match('client/**.vjs:js', {
    parser: fis.plugin('typescript'),
    release: '${static}/$1'
});

fis.match('client/static/lib/**.js', {
    isMod: true,
});

fis.match('client/router.js', {
    parser: fis.plugin('typescript'),
    isMod: true,
});
fis.match('vue.min.js', {
    isMod: true,
    moduleId:'vue'
});

fis.match('client/**.vjs', {
    isMod: true,
    rExt: '.js',
    useSameNameRequire: true,
    parser: fis.plugin('vue-component', {
        cssScopeFlag: 'mis'
    })
});

// fis.config.set('livereload.port', 35729);

fis.match('server/**.jes', {
    parser: fis.plugin('typescript', {
        module: 1,
        target: 1
    }),
    rExt: 'js'
});
fis.match('server/conf/(**)', {
    optimizer: null,
    useHash: false,
    postprocessor: null,
    release: '${config}/$1'
});
fis.match('server/(plugins/**)', {
    optimizer: null,
    useHash: false,
    postprocessor: null,
    release: '$1'
});

fis.media('agile').match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('http-push', {
        receiver: 'http://agile.xiaodutv.com/yog/upload',
        to: '/'
    })
});
fis.media('output').match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('local-deliver', {
        to: './output'
    })
});
