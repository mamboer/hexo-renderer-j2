# hexo-renderer-j2

[Nunjucks](https://mozilla.github.io/nunjucks/) renderer plugin for [Hexo](https://hexo.io).

Inspired by [hexo-renderer-nunjucks](https://github.com/morrisallison/hexo-renderer-nunjucks). 

## Installation

```
npm install hexo-renderer-j2 --save
```

## Configuration

Nunjucks can be configured by editing the main `_config.yml` file using the `nunjucks` namespace. Configuration options can be found in [Nunjucks API documentation](http://mozilla.github.io/nunjucks/api.html#configure).

```
nunjucks:
  autoescape: true
```

## File Extensions

This plugin supports the extensions as bellow:

1. `.nunjucks` file extension
2. `.j2` Jinja 2 file extension
3. `.tpl` custom template file extension
