# Oasis 🌏

This is simple hexo blog theme, neither elegant ui nor beautiful animation. 

[Preivew Oasis](https://hexo-theme-oasis-preview.pages.dev/)

**Oasis requires Hexo 5.4.0 and above**

## Install

``` sh
git clone --depth 1 https://github.com/qiantao94/hexo-theme-oasis.git themes/oasis
npm install hexo-generator-feed --save
npm install hexo-renderer-pug --save
```

## Enable

Modify `theme` setting in `_config.yml` to `oasis`.

```diff
_config.yml
- theme: some-theme
+ theme: oasis
```

Disable `highlight` and enable `prismjs` to highlight code in `_config.yml`

```diff
highlight:
  enable: false
prismjs:
  enable: true
```

## Run
``` sh
hexo clean
hexo g
hexo s
```

## Update

```sh
cd themes/oasis
git pull
```


## LICENSE

MIT
