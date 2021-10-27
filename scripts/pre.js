/**
 * Note: configs in _data/temp.yml will replace configs in hexo.theme.config.
 */
hexo.on('generateBefore', function () {
    if (hexo.locals.get) {
        var data = hexo.locals.get('data') // 获取_data文件夹下的内容
        data && data.oasis && (hexo.theme.config = data.oasis) // oasis.yml 存在，就把内容替换掉主题的config
    }

    const themeConfig = hexo.theme.config
    const hexoConfig = hexo.config
    themeConfig.hljs_settings = hexoConfig.highlight
    themeConfig.prismjs_settings = hexoConfig.prismjs
})
