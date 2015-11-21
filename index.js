var nunjucks 	= require('nunjucks'),
	path 		= require('path'),
	_ 			= require('lodash'),
	renderer,
	j2;

hexo.config.nunjucks = _.assign({
	autoescape: false,
	watch: false
}, hexo.config.nunjucks || {});

renderer = function (data, locals) {
	j2 = j2 || nunjucks.configure(path.dirname(data.path), hexo.config.nunjucks);
    return j2.renderString(data.text, _.assign({filename: data.path},locals));
};

_.forEach(['nunjucks', 'j2', 'tpl'], function(ext){
	hexo.extend.renderer.register(ext, 'html', renderer, true);
});
