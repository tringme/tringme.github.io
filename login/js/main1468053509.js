/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.0
 *
 */
(function($) {

  jQuery.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
            wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.parent().find('.' + o.barClass);
            rail = me.parent().find('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel();

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel()
        {
          if (window.addEventListener)
          {
            this.addEventListener('DOMMouseScroll', _onWheel, false );
            this.addEventListener('mousewheel', _onWheel, false );
            this.addEventListener('MozMousePixelScroll', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  jQuery.fn.extend({
    slimscroll: jQuery.fn.slimScroll
  });

})(jQuery);

!function ($) {

    /* MODAL POPOVER PUBLIC CLASS DEFINITION
     * =============================== */

    var ModalPopover = function (element, options) {
        this.options = options;
        this.$element = $(element)
            .delegate('[data-dismiss="modal-popup"]', 'click.dismiss.modal-popup', $.proxy(this.hide, this));
        this.options.remote && this.$element.find('.popover-content').load(this.options.remote);
        this.$parent = options.$parent; // todo make sure parent is specified
    }


    /* NOTE: MODAL POPOVER EXTENDS BOOTSTRAP-MODAL.js
     ========================================== */


    ModalPopover.prototype = $.extend({}, $.fn.modal.Constructor.prototype, {

        constructor:ModalPopover,


        getPosition:function () {
            var $element = this.$parent;
            return $.extend({}, ($element.offset()), {
                width:$element[0].offsetWidth, height:$element[0].offsetHeight
            });
        },

        show:function () {
            var $dialog = this.$element;
            $dialog.css({ top:0, left:0, display:'block', 'z-index':1050 });

            var placement = typeof this.options.placement == 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                this.options.placement;

            var pos = this.getPosition();

            var actualWidth = $dialog[0].offsetWidth;
            var actualHeight = $dialog[0].offsetHeight;

            var tp;
            switch (placement) {
                case 'bottom':
                    tp = {top:pos.top + pos.height, left:pos.left + pos.width / 2 - actualWidth / 2}
                    break;
                case 'top':
                    tp = {top:pos.top - actualHeight, left:pos.left + pos.width / 2 - actualWidth / 2}
                    break;
                case 'left':
                    tp = {top:pos.top + pos.height / 2 - actualHeight / 2, left:pos.left - actualWidth}
                    break;
                case 'right':
                    tp = {top:pos.top + pos.height / 2 - actualHeight / 2, left:pos.left + pos.width}
                    break;
            }

            $dialog
                .css(tp)
                .addClass(placement)
                .addClass('in');


            $.fn.modal.Constructor.prototype.show.call(this, arguments); // super
        },

        /** todo entire function was copied just to set the background to 'none'.  need a better way */
        backdrop:function (callback) {
            var that = this
                , animate = this.$element.hasClass('fade') ? 'fade' : ''

            if (this.isShown && this.options.backdrop) {
                var doAnimate = $.support.transition && animate

                this.$backdrop = $('<div class="modal-backdrop ' + animate + '" style="background:none" />')
                    .appendTo(document.body)

                if (this.options.backdrop != 'static') {
                    this.$backdrop.click($.proxy(this.hide, this))
                }

                if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                this.$backdrop.addClass('in')

                doAnimate ?
                    this.$backdrop.one($.support.transition.end, callback) :
                    callback()

            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in')

                $.support.transition && this.$element.hasClass('fade') ?
                    this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
                    this.removeBackdrop()

            } else if (callback) {
                callback()
            }
        }

    });


    /* MODAL POPOVER PLUGIN DEFINITION
     * ======================= */

    $.fn.modalPopover = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('modal-popover');
            var options = $.extend({}, $.fn.modalPopover.defaults, $this.data(), typeof option == 'object' && option);
            // todo need to replace 'parent' with 'target'
            options['$parent'] = (data && data.$parent) || option.$parent || $(options.target);

            if (!data) $this.data('modal-popover', (data = new ModalPopover(this, options)))

            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.modalPopover.Constructor = ModalPopover

    $.fn.modalPopover.defaults = $.extend({}, $.fn.modal.defaults, {
        placement:'right',
        keyboard: true
    });


    $(function () {
        $('body').on('click.modal-popover.data-api', '[data-toggle="modal-popover"]', function (e) {
            var $this = $(this);
            var href = $this.attr('href');
            var $dialog = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))); //strip for ie7
            var option = $dialog.data('modal-popover') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $dialog.data(), $this.data());
            option['$parent'] = $this;

            e.preventDefault();

            $dialog
                .modalPopover(option)
                .modalPopover('show')
                .one('hide', function () {
                    $this.focus()
                })
        })
    })

}(window.jQuery);
//
/* =========================================================
 * bootstrap-slider.js v2.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {

	var Slider = function(element, options) {
		this.element = $(element);
		this.picker = $('<div class="slider">'+
							'<div class="slider-track">'+
								'<div class="slider-selection"></div>'+
								'<div class="slider-handle"></div>'+
								'<div class="slider-handle"></div>'+
							'</div>'+
							'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'+
						'</div>')
							.insertBefore(this.element)
							.append(this.element);
		this.id = this.element.data('slider-id')||options.id;
		if (this.id) {
			this.picker[0].id = this.id;
		}

		if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
			this.touchCapable = true;
		}

		var tooltip = this.element.data('slider-tooltip')||options.tooltip;

		this.tooltip = this.picker.find('.tooltip');
		this.tooltipInner = this.tooltip.find('div.tooltip-inner');

		this.orientation = this.element.data('slider-orientation')||options.orientation;
		switch(this.orientation) {
			case 'vertical':
				this.picker.addClass('slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
				this.tooltip.addClass('right')[0].style.left = '100%';
				break;
			default:
				this.picker
					.addClass('slider-horizontal')
					.css('width', this.element.outerWidth());
				this.orientation = 'horizontal';
				this.stylePos = 'left';
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
				this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
				break;
		}

		this.min = this.element.data('slider-min')||options.min;
		this.max = this.element.data('slider-max')||options.max;
		this.step = this.element.data('slider-step')||options.step;
		this.value = this.element.data('slider-value')||options.value;
		if (this.value[1]) {
			this.range = true;
		}

		this.selection = this.element.data('slider-selection')||options.selection;
		this.selectionEl = this.picker.find('.slider-selection');
		if (this.selection === 'none') {
			this.selectionEl.addClass('hide');
		}
		this.selectionElStyle = this.selectionEl[0].style;


		this.handle1 = this.picker.find('.slider-handle:first');
		this.handle1Stype = this.handle1[0].style;
		this.handle2 = this.picker.find('.slider-handle:last');
		this.handle2Stype = this.handle2[0].style;

		var handle = this.element.data('slider-handle')||options.handle;
		switch(handle) {
			case 'round':
				this.handle1.addClass('round');
				this.handle2.addClass('round');
				break
			case 'triangle':
				this.handle1.addClass('triangle');
				this.handle2.addClass('triangle');
				break
		}

		if (this.range) {
			this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
			this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
		} else {
			this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
			this.handle2.addClass('hide');
			if (this.selection == 'after') {
				this.value[1] = this.max;
			} else {
				this.value[1] = this.min;
			}
		}
		this.diff = this.max - this.min;
		this.percentage = [
			(this.value[0]-this.min)*100/this.diff,
			(this.value[1]-this.min)*100/this.diff,
			this.step*100/this.diff
		];

		this.offset = this.picker.offset();
		this.size = this.picker[0][this.sizePos];

		this.formater = options.formater;

		this.layout();

		if (this.touchCapable) {
			// Touch: Bind touch events:
			this.picker.on({
				touchstart: $.proxy(this.mousedown, this)
			});
		} else {
			this.picker.on({
				mousedown: $.proxy(this.mousedown, this)
			});
		}

		if (tooltip === 'show') {
			this.picker.on({
				mouseenter: $.proxy(this.showTooltip, this),
				mouseleave: $.proxy(this.hideTooltip, this)
			});
		} else {
			this.tooltip.addClass('hide');
		}
	};

	Slider.prototype = {
		constructor: Slider,

		over: false,
		inDrag: false,
		
		showTooltip: function(){
			this.tooltip.addClass('in');
			//var left = Math.round(this.percent*this.width);
			//this.tooltip.css('left', left - this.tooltip.outerWidth()/2);
			this.over = true;
		},
		
		hideTooltip: function(){
			if (this.inDrag === false) {
				this.tooltip.removeClass('in');
			}
			this.over = false;
		},

		layout: function(){
			this.handle1Stype[this.stylePos] = this.percentage[0]+'%';
			this.handle2Stype[this.stylePos] = this.percentage[1]+'%';
			if (this.orientation == 'vertical') {
				this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			} else {
				this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			}
			if (this.range) {
				this.tooltipInner.text(
					this.formater(this.value[0]) + 
					' : ' + 
					this.formater(this.value[1])
				);
				this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0])/2)/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			} else {
				this.tooltipInner.text(
					this.formater(this.value[0])
				);
				this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0]/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			}
		},

		mousedown: function(ev) {

			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchstart') {
				ev = ev.originalEvent;
			}

			this.offset = this.picker.offset();
			this.size = this.picker[0][this.sizePos];

			var percentage = this.getPercentage(ev);

			if (this.range) {
				var diff1 = Math.abs(this.percentage[0] - percentage);
				var diff2 = Math.abs(this.percentage[1] - percentage);
				this.dragged = (diff1 < diff2) ? 0 : 1;
			} else {
				this.dragged = 0;
			}

			this.percentage[this.dragged] = percentage;
			this.layout();

			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).on({
					touchmove: $.proxy(this.mousemove, this),
					touchend: $.proxy(this.mouseup, this)
				});
			} else {
				$(document).on({
					mousemove: $.proxy(this.mousemove, this),
					mouseup: $.proxy(this.mouseup, this)
				});
			}

			this.inDrag = true;
			var val = this.calculateValue();
			this.element.trigger({
					type: 'slideStart',
					value: val
				}).trigger({
					type: 'slide',
					value: val
				});
			return false;
		},

		mousemove: function(ev) {
			
			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchmove') {
				ev = ev.originalEvent;
			}

			var percentage = this.getPercentage(ev);
			if (this.range) {
				if (this.dragged === 0 && this.percentage[1] < percentage) {
					this.percentage[0] = this.percentage[1];
					this.dragged = 1;
				} else if (this.dragged === 1 && this.percentage[0] > percentage) {
					this.percentage[1] = this.percentage[0];
					this.dragged = 0;
				}
			}
			this.percentage[this.dragged] = percentage;
			this.layout();
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slide',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		mouseup: function(ev) {
			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).off({
					touchmove: this.mousemove,
					touchend: this.mouseup
				});
			} else {
				$(document).off({
					mousemove: this.mousemove,
					mouseup: this.mouseup
				});
			}

			this.inDrag = false;
			if (this.over == false) {
				this.hideTooltip();
			}
			this.element;
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slideStop',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		calculateValue: function() {
			var val;
			if (this.range) {
				val = [
					(this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step),
					(this.min + Math.round((this.diff * this.percentage[1]/100)/this.step)*this.step)
				];
				this.value = val;
			} else {
				val = (this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step);
				this.value = [val, this.value[1]];
			}
			return val;
		},

		getPercentage: function(ev) {
			if (this.touchCapable) {
				ev = ev.touches[0];
			}
			var percentage = (ev[this.mousePos] - this.offset[this.stylePos])*100/this.size;
			percentage = Math.round(percentage/this.percentage[2])*this.percentage[2];
			return Math.max(0, Math.min(100, percentage));
		},

		getValue: function() {
			if (this.range) {
				return this.value;
			}
			return this.value[0];
		},

		setValue: function(val) {
			this.value = val;

			if (this.range) {
				this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
				this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
			} else {
				this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
				this.handle2.addClass('hide');
				if (this.selection == 'after') {
					this.value[1] = this.max;
				} else {
					this.value[1] = this.min;
				}
			}
			this.diff = this.max - this.min;
			this.percentage = [
				(this.value[0]-this.min)*100/this.diff,
				(this.value[1]-this.min)*100/this.diff,
				this.step*100/this.diff
			];
			this.layout();
		}
	};

	$.fn.slider = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('slider'),
				options = typeof option === 'object' && option;
			if (!data)  {
				$this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults,options))));
			}
			if (typeof option == 'string') {
				data[option](val);
			}
		})
	};

	$.fn.slider.defaults = {
		min: 0,
		max: 10,
		step: 1,
		orientation: 'horizontal',
		value: 5,
		selection: 'before',
		tooltip: 'show',
		handle: 'round',
		formater: function(value) {
			return value;
		}
	};

	$.fn.slider.Constructor = Slider;

}( window.jQuery );
// States
// 

(function ($){
  window.numberArray = [],
  window.phoneNumber = '',
  window.updateDisplay,
  window.numberDisplayEl,
  window.inCallModeActive,
  window.dialpadButton = $('div.dials a.digit'),
  window.dialpadCase = $('div.dials'),
  window.clearButton = $('div.dials a.clear'),
  window.callButton = $('#actions .call'),
  window.actionButtons = $('#actions'),
  window.skipButton = $('#actions .skip'),
  window.numberDisplayEl = $('input#cnfMobileNo');

  function compilePhoneNumber(numberArray){
    if (window.numberArray.length > 1){ 
      window.phoneNumber = window.numberArray.join('');
    } else {
      window.phoneNumber = window.numberArray
    }
    return this.phoneNumber;
  };

  function updateDisplay(phoneNumber){
    window.numberDisplayEl.val(window.phoneNumber);
  };

  function clearPhoneNumber(){
  var inputString = $('input#cnfMobileNo').val();
        var shortenedString = inputString.substr(0,(inputString.length -1));
        $('input#cnfMobileNo').val(shortenedString);

  };

  function callNumber(){
    window.numberDisplayEl.val('Calling...');
    activateInCallInterface();
    // Need timer interval to animate . . .
    // Trigger  "Hangup"
    // Trigger  "Call timer"
  };


  function changeUnholdIntoHold(){
    window.skipButton.html('Hold');
  };

  function activateInCallInterface(){
    changeSkipIntoHold();
    disableDialButton();
    enableReadOnlyInput();
    window.inCallModeActive = true;
  };

  function disableInCallInterface(){
    removeReadOnlyInput();
    enableCallButton();
    changeHoldIntoSkip();
    window.inCallModeActive = false;
  }

  function enableCallButton(){
    window.callButton.removeClass('deactive');
  };

  function enableDialButton(){
    window.dialpadCase.removeClass('deactive');
  };

  function disableDialButton(){
    window.dialpadCase.addClass('deactive');
  };

  function changeSkipIntoHold(){
    window.skipButton.html('Hold');
  };

  function changeHoldIntoSkip(){
    window.skipButton.html('Skip');
  };

  function enableReadOnlyInput(){
    window.numberDisplayEl.attr('readonly','readonly');
  }

  function removeReadOnlyInput(){
    window.numberDisplayEl.removeAttr('readonly');
  }

  function refreshInputArray(){
    this.numberDisplayElContent = window.numberDisplayEl.val(); 
    window.numberArray = this.numberDisplayElContent.split('');
  };

  window.dialpadButton.click(function(e){
  if(window.numberDisplayEl.val().length == 0){
		$("input#cnfMobileNo").val('+'+$("input#cnfMobileNo").val());
		}
    if( !$(dialpadCase).hasClass('deactive') && window.numberDisplayEl.val().length <= 18){
      var content = $(this).html();
      refreshInputArray();
      window.numberArray.push(content);
      compilePhoneNumber();
      updateDisplay();
      checkDisplayEl();
      saveNumberDisplayEl();

    }
	if(window.numberDisplayEl.val().length > 10 && e.keyCode != 8){
		addReadyToClear();
		e.preventDefault();
	   }
	
  });
   $("input#cnfMobileNo").keydown (function (e) {

       if(window.numberDisplayEl.val().length == 0){
           $("input#cnfMobileNo").val('+'+$("input#cnfMobileNo").val());
       }
       /* console.log(e.keyCode) *//* blinking red num code goes here */
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "49"){

           $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849');
           $('.tm-dp-row1 a:first-Child').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }

       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "50"){

           $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849');
           $('.tm-dp-row1 a:nth-child(2)').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "51"){

           $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849');
           $('.tm-dp-row1 a:nth-child(3)').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "52"){

           $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849');
           $('.tm-dp-row2 a:first-Child').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "53"){

           $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849');
           $('.tm-dp-row2 a:nth-child(2)').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "54"){

           $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849');
           $('.tm-dp-row2 a:nth-child(3)').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "55"){

           $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849');
           $('.tm-dp-row3 a:first-Child').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "56"){

           $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849');
           $('.tm-dp-row3 a:nth-child(2)').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "57"){

           $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849');
           $('.tm-dp-row3 a:nth-child(3)').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length < 18 && e.keyCode == "48"){

           $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849');
           $('.tm-dp-row4 a:nth-child(2)').css('color', '#fff');
           setTimeout(function() { $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
       }
       if(window.numberDisplayEl.val().length > 17 && e.keyCode != 8){
           addReadyToClear();
           e.preventDefault();
       }
       validation(e);
   });
   
   
   $("input#cnfMobileNo").keyup (function (e) {
	  
	   if(window.numberDisplayEl.val().length == 0){
		$("input#cnfMobileNo").val('+'+$("input#cnfMobileNo").val());
		}
		/* console.log(e.keyCode) *//* blinking red num code goes here */
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "97"){
		 
		 $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "98"){
		 
		 $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "99"){
		 
		 $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "100"){
		 
		 $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "101"){
		 
		 $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "102"){
		 
		 $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "103"){
		 
		 $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "104"){
		 
		 $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "105"){
		 
		 $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "96"){
		 
		 $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row4 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
	   if(window.numberDisplayEl.val().length > 17 && e.keyCode != 8){
		addReadyToClear();
		e.preventDefault();
	   }
	   validation(e);
   });
   
  function checkDisplayEl(){
    if( window.numberDisplayEl.val() != "" && window.numberDisplayEl.val().length >= 19){
      addReadyToClear();
	  validation(e);
    } else if ( window.numberDisplayEl.val() == "" ) {
      removeReadyFromClear();
    }
  }

   function validation(e){

        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && window.numberDisplayEl.val().length < 18) {
            e.preventDefault();
        }
  }





  

  function addReadyToClear(){
    window.clearButton.addClass('ready');
 $('#phoneHelper').removeClass('hide');
 $('.phoneHelper1').removeClass('hide');
 $('.phoneHelperCustom').removeClass('hide');

  }

  $('#cnfMobileNo').keyup(function(e){if(e.keyCode == 8)$('#phoneHelper').addClass('hide');
  $('#phoneHelper1').addClass('hide');
  $('.phoneHelperCustom').addClass('hide');
    window.clearButton.removeClass('ready');})


  $('#cnfMobileNo').keyup(function(){
   var len = $.trim(this.value).match(/\d/g).length;
    if (len > 9 ) {
       window.clearButton.addClass('ready');
  $('#phoneHelper').removeClass('hide');
  $('#phoneHelper1').removeClass('hide');
  $('.phoneHelperCustom').removeClass('hide');

    }  
})

$('.tm-i-numberback').click(function(e){$('#phoneHelper').addClass('hide');
  $('#phoneHelper1').addClass('hide');
  $('.phoneHelperCustom').addClass('hide');
    window.clearButton.removeClass('ready');})

$('.tm-i-numberback').click(function(){
   var len = $.trim(this.value).match(/\d/g).length;
    if (len > 9 ) {
       window.clearButton.addClass('ready');
  $('#phoneHelper').removeClass('hide');
  $('#phoneHelper1').removeClass('hide');
  $('.phoneHelperCustom').removeClass('hide');

    }  
})


  function saveNumberDisplayEl(){
    lastNumberDisplayEl = window.numberDisplayEl.val()
  }

  function displayLastSavedNumberDisplayEl(){
    console.log('Last displayed element value: ' + lastNumberDisplayEl);
  }

  $('div.dials a.clear').click(function(){
    enableCallButton();
    enableDialButton();
    clearPhoneNumber();
    removeReadOnlyInput();
    //updateDisplay();
    checkDisplayEl();
    disableInCallInterface();
 
  });

  $('div#actions li.call').click(function(){
    callNumber();
  });

})(jQuery);
// jQuery Mask Plugin v1.13.4
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,c,d){a=b(a);var g=this,k=a.val(),l;c="function"===typeof c?c(a.val(),void 0,a,d):c;var e={invalid:[],getCaret:function(){try{var q,b=0,e=a.get(0),f=document.selection,c=e.selectionStart;if(f&&-1===navigator.appVersion.indexOf("MSIE 10"))q=f.createRange(),q.moveStart("character",a.is("input")?-a.val().length:-a.text().length),
b=q.text.length;else if(c||"0"===c)b=c;return b}catch(d){}},setCaret:function(q){try{if(a.is(":focus")){var b,c=a.get(0);c.setSelectionRange?c.setSelectionRange(q,q):c.createTextRange&&(b=c.createTextRange(),b.collapse(!0),b.moveEnd("character",q),b.moveStart("character",q),b.select())}}catch(f){}},events:function(){a.on("input.mask keyup.mask",e.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",
function(){k===a.val()||a.data("changed")||a.triggerHandler("change");a.data("changed",!1)}).on("blur.mask",function(){k=a.val()}).on("focus.mask",function(a){!0===d.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!l.test(e.val())&&e.val("")})},getRegexMask:function(){for(var a=[],b,e,f,d,h=0;h<c.length;h++)(b=g.translation[c.charAt(h)])?(e=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,(b=b.recursive)?(a.push(c.charAt(h)),d={digit:c.charAt(h),
pattern:e}):a.push(f||b?e+"?":e)):a.push(c.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");d&&(a=a.replace(new RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(new RegExp(d.digit,"g"),d.pattern));return new RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(b){var c=a.is("input")?"val":"text";if(0<arguments.length){if(a[c]()!==b)a[c](b);c=a}else c=a[c]();return c},getMCharsBeforeCount:function(a,
b){for(var e=0,f=0,d=c.length;f<d&&f<a;f++)g.translation[c.charAt(f)]||(a=b?a+1:a,e++);return e},caretPos:function(a,b,d,f){return g.translation[c.charAt(Math.min(a-1,c.length-1))]?Math.min(a+d-b-f,d):e.caretPos(a+1,b,d,f)},behaviour:function(a){a=a||window.event;e.invalid=[];var c=a.keyCode||a.which;if(-1===b.inArray(c,g.byPassKeys)){var d=e.getCaret(),f=e.val().length,n=d<f,h=e.getMasked(),k=h.length,m=e.getMCharsBeforeCount(k-1)-e.getMCharsBeforeCount(f-1);e.val(h);!n||65===c&&a.ctrlKey||(8!==
c&&46!==c&&(d=e.caretPos(d,f,k,m)),e.setCaret(d));return e.callbacks(a)}},getMasked:function(a){var b=[],k=e.val(),f=0,n=c.length,h=0,l=k.length,m=1,p="push",u=-1,t,w;d.reverse?(p="unshift",m=-1,t=0,f=n-1,h=l-1,w=function(){return-1<f&&-1<h}):(t=n-1,w=function(){return f<n&&h<l});for(;w();){var x=c.charAt(f),v=k.charAt(h),r=g.translation[x];if(r)v.match(r.pattern)?(b[p](v),r.recursive&&(-1===u?u=f:f===t&&(f=u-m),t===u&&(f-=m)),f+=m):r.optional?(f+=m,h-=m):r.fallback?(b[p](r.fallback),f+=m,h-=m):e.invalid.push({p:h,
v:v,e:r.pattern}),h+=m;else{if(!a)b[p](x);v===x&&(h+=m);f+=m}}a=c.charAt(t);n!==l+1||g.translation[a]||b.push(a);return b.join("")},callbacks:function(b){var g=e.val(),l=g!==k,f=[g,b,a,d],n=function(a,b,c){"function"===typeof d[a]&&b&&d[a].apply(this,c)};n("onChange",!0===l,f);n("onKeyPress",!0===l,f);n("onComplete",g.length===c.length,f);n("onInvalid",0<e.invalid.length,[g,b,a,e.invalid,d])}};g.mask=c;g.options=d;g.remove=function(){var b=e.getCaret();e.destroyEvents();e.val(g.getCleanVal());e.setCaret(b-
e.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return e.getMasked(!0)};g.init=function(c){c=c||!1;d=d||{};g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.jMaskGlobals.translation;g.translation=b.extend({},g.translation,d.translation);g=b.extend(!0,{},g,d);l=e.getRegexMask();!1===c?(d.placeholder&&a.attr("placeholder",d.placeholder),b("input").length&&!1==="oninput"in b("input")[0]&&"on"===a.attr("autocomplete")&&a.attr("autocomplete","off"),e.destroyEvents(),e.events(),c=e.getCaret(),
e.val(e.getMasked()),e.setCaret(c+e.getMCharsBeforeCount(c,!0))):(e.events(),e.val(e.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),c={},d=a.attr("data-mask");a.attr("data-mask-reverse")&&(c.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(c.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(c.selectOnFocus=!0);if(z(a,d,c))return a.data("mask",new y(this,d,c))},z=function(a,c,d){d=d||{};var g=b(a).data("mask"),k=JSON.stringify;a=b(a).val()||
b(a).text();try{return"function"===typeof c&&(c=c(a)),"object"!==typeof g||k(g.options)!==k(d)||g.mask!==c}catch(l){}};b.fn.mask=function(a,c){c=c||{};var d=this.selector,g=b.jMaskGlobals,k=b.jMaskGlobals.watchInterval,l=function(){if(z(this,a,c))return b(this).data("mask",new y(this,a,c))};b(this).each(l);d&&""!==d&&g.watchInputs&&(clearInterval(b.maskWatchers[d]),b.maskWatchers[d]=setInterval(function(){b(document).find(d).each(l)},k));return this};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);
delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},
9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});

/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				if(formatted != "")
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = (parseInt(this.o.setzindex) > 10)?parseInt(this.o.setzindex):parseInt(this.element.parents().filter(function() {
							return $(this).css('z-index') != 'auto';
						}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(focusDate);
					dateChanged = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart',
		'setzindex'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="tm-i-arrowleft"></i></th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next"><i class="tm-i-arrowright"></i></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});
	   
}(window.jQuery));
$(document).ready(function () {
    $('#datepicker').datepicker({
        format: "dd/mm/yyyy",
		todayHighlight: true,
        todayBtn: true
    });

    $('.date-calender').on('changeDate', function () {
        $('.datepicker').hide();
    });
	$('.calendar-search').click('change', function () {
		
        $('.datepicker').css('display', 'block');
		
    });
	
	

});


 
/*!
 * Timepicker Component for Twitter Bootstrap
 *
 * Copyright 2013 Joris de Wit
 *
 * Contributors https://github.com/jdewit/bootstrap-timepicker/graphs/contributors
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function($, window, document) {
  'use strict';

  // TIMEPICKER PUBLIC CLASS DEFINITION
  var Timepicker = function(element, options) {
    this.widget = '';
    this.$element = $(element);
    this.defaultTime = options.defaultTime;
    this.disableFocus = options.disableFocus;
    this.disableMousewheel = options.disableMousewheel;
    this.isOpen = options.isOpen;
    this.minuteStep = options.minuteStep;
    this.modalBackdrop = options.modalBackdrop;
    this.orientation = options.orientation;
    this.secondStep = options.secondStep;
    this.snapToStep = options.snapToStep;
    this.showInputs = options.showInputs;
    this.showMeridian = options.showMeridian;
    this.showSeconds = options.showSeconds;
    this.template = options.template;
    this.appendWidgetTo = options.appendWidgetTo;
    this.showWidgetOnAddonClick = options.showWidgetOnAddonClick;
    this.maxHours = options.maxHours;
    this.explicitMode = options.explicitMode; // If true 123 = 1:23, 12345 = 1:23:45, else invalid.

    this.handleDocumentClick = function (e) {
      var self = e.data.scope;
      // This condition was inspired by bootstrap-datepicker.
      // The element the timepicker is invoked on is the input but it has a sibling for addon/button.
      if (!(self.$element.parent().find(e.target).length ||
          self.$widget.is(e.target) ||
          self.$widget.find(e.target).length)) {
        self.hideWidget();
      }
    };
    this._init();
  };

  Timepicker.prototype = {

    constructor: Timepicker,
    _init: function() {
      var self = this;

      if (this.showWidgetOnAddonClick && (this.$element.parent().hasClass('input-group bootstrap-timepicker'))) {
        this.$element.parent('.input-group.bootstrap-timepicker').find('.input-group-addon').on({
          'click.timepicker': $.proxy(this.showWidget, this)
        });
        this.$element.on({
          'focus.timepicker': $.proxy(this.highlightUnit, this),
          'click.timepicker': $.proxy(this.highlightUnit, this),
          'keydown.timepicker': $.proxy(this.elementKeydown, this),
          'blur.timepicker': $.proxy(this.blurElement, this),
          'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
        });
      } else {
        if (this.template) {
          this.$element.on({
            'focus.timepicker': $.proxy(this.showWidget, this),
            'click.timepicker': $.proxy(this.showWidget, this),
            'blur.timepicker': $.proxy(this.blurElement, this),
            'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
          });
        } else {
          this.$element.on({
            'focus.timepicker': $.proxy(this.highlightUnit, this),
            'click.timepicker': $.proxy(this.highlightUnit, this),
            'keydown.timepicker': $.proxy(this.elementKeydown, this),
            'blur.timepicker': $.proxy(this.blurElement, this),
            'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
          });
        }
      }

      if (this.template !== false) {
        this.$widget = $(this.getTemplate()).on('click', $.proxy(this.widgetClick, this));
      } else {
        this.$widget = false;
      }

      if (this.showInputs && this.$widget !== false) {
        this.$widget.find('input').each(function() {
          $(this).on({
            'click.timepicker': function() { $(this).select(); },
            'keydown.timepicker': $.proxy(self.widgetKeydown, self),
            'keyup.timepicker': $.proxy(self.widgetKeyup, self)
          });
        });
      }

      this.setDefaultTime(this.defaultTime);
    },

    blurElement: function() {
      this.highlightedUnit = null;
      this.updateFromElementVal();
    },

    clear: function() {
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.meridian = '';

      this.$element.val('');
    },

    decrementHour: function() {
      if (this.showMeridian) {
        if (this.hour === 1) {
          this.hour = 12;
        } else if (this.hour === 12) {
          this.hour--;

          return this.toggleMeridian();
        } else if (this.hour === 0) {
          this.hour = 11;

          return this.toggleMeridian();
        } else {
          this.hour--;
        }
      } else {
        if (this.hour <= 0) {
          this.hour = this.maxHours - 1;
        } else {
          this.hour--;
        }
      }
    },

    decrementMinute: function(step) {
      var newVal;

      if (step) {
        newVal = this.minute - step;
      } else {
        newVal = this.minute - this.minuteStep;
      }

      if (newVal < 0) {
        this.decrementHour();
        this.minute = newVal + 60;
      } else {
        this.minute = newVal;
      }
    },

    decrementSecond: function() {
      var newVal = this.second - this.secondStep;

      if (newVal < 0) {
        this.decrementMinute(true);
        this.second = newVal + 60;
      } else {
        this.second = newVal;
      }
    },

    elementKeydown: function(e) {
      switch (e.which) {
      case 9: //tab
        if (e.shiftKey) {
          if (this.highlightedUnit === 'hour') {
            break;
          }
          this.highlightPrevUnit();
        } else if ((this.showMeridian && this.highlightedUnit === 'meridian') || (this.showSeconds && this.highlightedUnit === 'second') || (!this.showMeridian && !this.showSeconds && this.highlightedUnit ==='minute')) {
          break;
        } else {
          this.highlightNextUnit();
        }
        e.preventDefault();
        this.updateFromElementVal();
        break;
      case 27: // escape
        this.updateFromElementVal();
        break;
      case 37: // left arrow
        e.preventDefault();
        this.highlightPrevUnit();
        this.updateFromElementVal();
        break;
      case 38: // up arrow
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.incrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.incrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.incrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }
        this.update();
        break;
      case 39: // right arrow
        e.preventDefault();
        this.highlightNextUnit();
        this.updateFromElementVal();
        break;
      case 40: // down arrow
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.decrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.decrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.decrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }

        this.update();
        break;
      }
    },

    getCursorPosition: function() {
      var input = this.$element.get(0);

      if ('selectionStart' in input) {// Standard-compliant browsers

        return input.selectionStart;
      } else if (document.selection) {// IE fix
        input.focus();
        var sel = document.selection.createRange(),
          selLen = document.selection.createRange().text.length;

        sel.moveStart('character', - input.value.length);

        return sel.text.length - selLen;
      }
    },

    getTemplate: function() {
      var template,
        hourTemplate,
        minuteTemplate,
        secondTemplate,
        meridianTemplate,
        templateContent;

      if (this.showInputs) {
        hourTemplate = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>';
        minuteTemplate = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>';
        secondTemplate = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>';
        meridianTemplate = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>';
      } else {
        hourTemplate = '<span class="bootstrap-timepicker-hour"></span>';
        minuteTemplate = '<span class="bootstrap-timepicker-minute"></span>';
        secondTemplate = '<span class="bootstrap-timepicker-second"></span>';
        meridianTemplate = '<span class="bootstrap-timepicker-meridian"></span>';
      }

      templateContent = '<table>'+
         '<tr>'+
           '<td><a href="#" data-action="incrementHour"><span class="glyphicon glyphicon-chevron-up"></span></a></td>'+
           '<td class="separator">&nbsp;</td>'+
           '<td><a href="#" data-action="incrementMinute"><span class="glyphicon glyphicon-chevron-up"></span></a></td>'+
           (this.showSeconds ?
             '<td class="separator">&nbsp;</td>'+
             '<td><a href="#" data-action="incrementSecond"><span class="glyphicon glyphicon-chevron-up"></span></a></td>'
           : '') +
           (this.showMeridian ?
             '<td class="separator">&nbsp;</td>'+
             '<td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="glyphicon glyphicon-chevron-up"></span></a></td>'
           : '') +
         '</tr>'+
         '<tr>'+
           '<td>'+ hourTemplate +'</td> '+
           '<td class="separator">:</td>'+
           '<td>'+ minuteTemplate +'</td> '+
           (this.showSeconds ?
            '<td class="separator">:</td>'+
            '<td>'+ secondTemplate +'</td>'
           : '') +
           (this.showMeridian ?
            '<td class="separator">&nbsp;</td>'+
            '<td>'+ meridianTemplate +'</td>'
           : '') +
         '</tr>'+
         '<tr>'+
           '<td><a href="#" data-action="decrementHour"><span class="glyphicon glyphicon-chevron-down"></span></a></td>'+
           '<td class="separator"></td>'+
           '<td><a href="#" data-action="decrementMinute"><span class="glyphicon glyphicon-chevron-down"></span></a></td>'+
           (this.showSeconds ?
            '<td class="separator">&nbsp;</td>'+
            '<td><a href="#" data-action="decrementSecond"><span class="glyphicon glyphicon-chevron-down"></span></a></td>'
           : '') +
           (this.showMeridian ?
            '<td class="separator">&nbsp;</td>'+
            '<td><a href="#" data-action="toggleMeridian"><span class="glyphicon glyphicon-chevron-down"></span></a></td>'
           : '') +
         '</tr>'+
       '</table>';

      switch(this.template) {
      case 'modal':
        template = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+ (this.modalBackdrop ? 'true' : 'false') +'">'+
          '<div class="modal-header">'+
            '<a href="#" class="close" data-dismiss="modal">×</a>'+
            '<h3>Pick a Time</h3>'+
          '</div>'+
          '<div class="modal-content">'+
            templateContent +
          '</div>'+
          '<div class="modal-footer">'+
            '<a href="#" class="btn btn-primary" data-dismiss="modal">OK</a>'+
          '</div>'+
        '</div>';
        break;
      case 'dropdown':
        template = '<div class="bootstrap-timepicker-widget dropdown-menu">'+ templateContent +'</div>';
        break;
      }

      return template;
    },

    getTime: function() {
      if (this.hour === '') {
        return '';
      }

      return this.hour + ':' + (this.minute.toString().length === 1 ? '0' + this.minute : this.minute) + (this.showSeconds ? ':' + (this.second.toString().length === 1 ? '0' + this.second : this.second) : '') + (this.showMeridian ? ' ' + this.meridian : '');
    },

    hideWidget: function() {
      if (this.isOpen === false) {
        return;
      }

      this.$element.trigger({
        'type': 'hide.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });

      if (this.template === 'modal' && this.$widget.modal) {
        this.$widget.modal('hide');
      } else {
        this.$widget.removeClass('open');
      }

      $(document).off('mousedown.timepicker, touchend.timepicker', this.handleDocumentClick);

      this.isOpen = false;
      // show/hide approach taken by datepicker
      this.$widget.detach();
    },

    highlightUnit: function() {
      this.position = this.getCursorPosition();
      if (this.position >= 0 && this.position <= 2) {
        this.highlightHour();
      } else if (this.position >= 3 && this.position <= 5) {
        this.highlightMinute();
      } else if (this.position >= 6 && this.position <= 8) {
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMeridian();
        }
      } else if (this.position >= 9 && this.position <= 11) {
        this.highlightMeridian();
      }
    },

    highlightNextUnit: function() {
      switch (this.highlightedUnit) {
      case 'hour':
        this.highlightMinute();
        break;
      case 'minute':
        if (this.showSeconds) {
          this.highlightSecond();
        } else if (this.showMeridian){
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'second':
        if (this.showMeridian) {
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'meridian':
        this.highlightHour();
        break;
      }
    },

    highlightPrevUnit: function() {
      switch (this.highlightedUnit) {
      case 'hour':
        if(this.showMeridian){
          this.highlightMeridian();
        } else if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMinute();
        }
        break;
      case 'minute':
        this.highlightHour();
        break;
      case 'second':
        this.highlightMinute();
        break;
      case 'meridian':
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMinute();
        }
        break;
      }
    },

    highlightHour: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'hour';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(0,1);
          } else {
            $element.setSelectionRange(0,2);
          }
        }, 0);
      }
    },

    highlightMinute: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'minute';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(2,4);
          } else {
            $element.setSelectionRange(3,5);
          }
        }, 0);
      }
    },

    highlightSecond: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'second';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(5,7);
          } else {
            $element.setSelectionRange(6,8);
          }
        }, 0);
      }
    },

    highlightMeridian: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'meridian';

      if ($element.setSelectionRange) {
        if (this.showSeconds) {
          setTimeout(function() {
            if (self.hour < 10) {
              $element.setSelectionRange(8,10);
            } else {
              $element.setSelectionRange(9,11);
            }
          }, 0);
        } else {
          setTimeout(function() {
            if (self.hour < 10) {
              $element.setSelectionRange(5,7);
            } else {
              $element.setSelectionRange(6,8);
            }
          }, 0);
        }
      }
    },

    incrementHour: function() {
      if (this.showMeridian) {
        if (this.hour === 11) {
          this.hour++;
          return this.toggleMeridian();
        } else if (this.hour === 12) {
          this.hour = 0;
        }
      }
      if (this.hour === this.maxHours - 1) {
        this.hour = 0;

        return;
      }
      this.hour++;
    },

    incrementMinute: function(step) {
      var newVal;

      if (step) {
        newVal = this.minute + step;
      } else {
        newVal = this.minute + this.minuteStep - (this.minute % this.minuteStep);
      }

      if (newVal > 59) {
        this.incrementHour();
        this.minute = newVal - 60;
      } else {
        this.minute = newVal;
      }
    },

    incrementSecond: function() {
      var newVal = this.second + this.secondStep - (this.second % this.secondStep);

      if (newVal > 59) {
        this.incrementMinute(true);
        this.second = newVal - 60;
      } else {
        this.second = newVal;
      }
    },

    mousewheel: function(e) {
      if (this.disableMousewheel) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail,
          scrollTo = null;

      if (e.type === 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
      }
      else if (e.type === 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
      }

      if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
      }

      switch (this.highlightedUnit) {
      case 'minute':
        if (delta > 0) {
          this.incrementMinute();
        } else {
          this.decrementMinute();
        }
        this.highlightMinute();
        break;
      case 'second':
        if (delta > 0) {
          this.incrementSecond();
        } else {
          this.decrementSecond();
        }
        this.highlightSecond();
        break;
      case 'meridian':
        this.toggleMeridian();
        this.highlightMeridian();
        break;
      default:
        if (delta > 0) {
          this.incrementHour();
        } else {
          this.decrementHour();
        }
        this.highlightHour();
        break;
      }

      return false;
    },

    /**
     * Given a segment value like 43, will round and snap the segment
     * to the nearest "step", like 45 if step is 15. Segment will
     * "overflow" to 0 if it's larger than 59 or would otherwise
     * round up to 60.
     */
    changeToNearestStep: function (segment, step) {
      if (segment % step === 0) {
        return segment;
      }
      if (Math.round((segment % step) / step)) {
        return (segment + (step - segment % step)) % 60;
      } else {
        return segment - segment % step;
      }
    },

    // This method was adapted from bootstrap-datepicker.
    place : function() {
      if (this.isInline) {
        return;
      }
      var widgetWidth = this.$widget.outerWidth(), widgetHeight = this.$widget.outerHeight(), visualPadding = 10, windowWidth =
        $(window).width(), windowHeight = $(window).height(), scrollTop = $(window).scrollTop();

      var zIndex = parseInt(this.$element.parents().filter(function() { return $(this).css('z-index') !== 'auto'; }).first().css('z-index'), 10) + 10;
      var offset = this.component ? this.component.parent().offset() : this.$element.offset();
      var height = this.component ? this.component.outerHeight(true) : this.$element.outerHeight(false);
      var width = this.component ? this.component.outerWidth(true) : this.$element.outerWidth(false);
      var left = offset.left, top = offset.top;

      this.$widget.removeClass('timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left');

      if (this.orientation.x !== 'auto') {
        this.picker.addClass('datepicker-orient-' + this.orientation.x);
        if (this.orientation.x === 'right') {
          left -= widgetWidth - width;
        }
      } else{
        // auto x orientation is best-placement: if it crosses a window edge, fudge it sideways
        // Default to left
        this.$widget.addClass('timepicker-orient-left');
        if (offset.left < 0) {
          left -= offset.left - visualPadding;
        } else if (offset.left + widgetWidth > windowWidth) {
          left = windowWidth - widgetWidth - visualPadding;
        }
      }
      // auto y orientation is best-situation: top or bottom, no fudging, decision based on which shows more of the widget
      var yorient = this.orientation.y, topOverflow, bottomOverflow;
      if (yorient === 'auto') {
        topOverflow = -scrollTop + offset.top - widgetHeight;
        bottomOverflow = scrollTop + windowHeight - (offset.top + height + widgetHeight);
        if (Math.max(topOverflow, bottomOverflow) === bottomOverflow) {
          yorient = 'top';
        } else {
          yorient = 'bottom';
        }
      }
      this.$widget.addClass('timepicker-orient-' + yorient);
      if (yorient === 'top'){
        top += height;
      } else{
        top -= widgetHeight + parseInt(this.$widget.css('padding-top'), 10);
      }

      this.$widget.css({
        top : top,
        left : left,
        zIndex : zIndex
      });
    },

    remove: function() {
      $('document').off('.timepicker');
      if (this.$widget) {
        this.$widget.remove();
      }
      delete this.$element.data().timepicker;
    },

    setDefaultTime: function(defaultTime) {
      if (!this.$element.val()) {
        if (defaultTime === 'current') {
          var dTime = new Date(),
            hours = dTime.getHours(),
            minutes = dTime.getMinutes(),
            seconds = dTime.getSeconds(),
            meridian = 'AM';

          if (seconds !== 0) {
            seconds = Math.ceil(dTime.getSeconds() / this.secondStep) * this.secondStep;
            if (seconds === 60) {
              minutes += 1;
              seconds = 0;
            }
          }

          if (minutes !== 0) {
            minutes = Math.ceil(dTime.getMinutes() / this.minuteStep) * this.minuteStep;
            if (minutes === 60) {
              hours += 1;
              minutes = 0;
            }
          }

          if (this.showMeridian) {
            if (hours === 0) {
              hours = 12;
            } else if (hours >= 12) {
              if (hours > 12) {
                hours = hours - 12;
              }
              meridian = 'PM';
            } else {
              meridian = 'AM';
            }
          }

          this.hour = hours;
          this.minute = minutes;
          this.second = seconds;
          this.meridian = meridian;

          this.update();

        } else if (defaultTime === false) {
          this.hour = 0;
          this.minute = 0;
          this.second = 0;
          this.meridian = 'AM';
        } else {
          this.setTime(defaultTime);
        }
      } else {
        this.updateFromElementVal();
      }
    },

    setTime: function(time, ignoreWidget) {
      if (!time) {
        this.clear();
        return;
      }

      var timeMode,
          timeArray,
          hour,
          minute,
          second,
          meridian;

      if (typeof time === 'object' && time.getMonth){
        // this is a date object
        hour    = time.getHours();
        minute  = time.getMinutes();
        second  = time.getSeconds();

        if (this.showMeridian){
          meridian = 'AM';
          if (hour > 12){
            meridian = 'PM';
            hour = hour % 12;
          }

          if (hour === 12){
            meridian = 'PM';
          }
        }
      } else {
        timeMode = ((/a/i).test(time) ? 1 : 0) + ((/p/i).test(time) ? 2 : 0); // 0 = none, 1 = AM, 2 = PM, 3 = BOTH.
        if (timeMode > 2) { // If both are present, fail.
          this.clear();
          return;
        }

        timeArray = time.replace(/[^0-9\:]/g, '').split(':');

        hour = timeArray[0] ? timeArray[0].toString() : timeArray.toString();

        if(this.explicitMode && hour.length > 2 && (hour.length % 2) !== 0 ) {
          this.clear();
          return;
        }

        minute = timeArray[1] ? timeArray[1].toString() : '';
        second = timeArray[2] ? timeArray[2].toString() : '';

        // adaptive time parsing
        if (hour.length > 4) {
          second = hour.slice(-2);
          hour = hour.slice(0, -2);
        }

        if (hour.length > 2) {
          minute = hour.slice(-2);
          hour = hour.slice(0, -2);
        }

        if (minute.length > 2) {
          second = minute.slice(-2);
          minute = minute.slice(0, -2);
        }

        hour = parseInt(hour, 10);
        minute = parseInt(minute, 10);
        second = parseInt(second, 10);

        if (isNaN(hour)) {
          hour = 0;
        }
        if (isNaN(minute)) {
          minute = 0;
        }
        if (isNaN(second)) {
          second = 0;
        }

        // Adjust the time based upon unit boundary.
        // NOTE: Negatives will never occur due to time.replace() above.
        if (second > 59) {
          second = 59;
        }

        if (minute > 59) {
          minute = 59;
        }

        if (hour >= this.maxHours) {
          // No day/date handling.
          hour = this.maxHours - 1;
        }

        if (this.showMeridian) {
          if (hour > 12) {
            // Force PM.
            timeMode = 2;
            hour -= 12;
          }
          if (!timeMode) {
            timeMode = 1;
          }
          if (hour === 0) {
            hour = 12; // AM or PM, reset to 12.  0 AM = 12 AM.  0 PM = 12 PM, etc.
          }
          meridian = timeMode === 1 ? 'AM' : 'PM';
        } else if (hour < 12 && timeMode === 2) {
          hour += 12;
        } else {
          if (hour >= this.maxHours) {
            hour = this.maxHours - 1;
          } else if (hour < 0) {
            hour = 0;
          }
        }
      }

      this.hour = hour;
      if (this.snapToStep) {
        this.minute = this.changeToNearestStep(minute, this.minuteStep);
        this.second = this.changeToNearestStep(second, this.secondStep);
      } else {
        this.minute = minute;
        this.second = second;
      }
      this.meridian = meridian;

      this.update(ignoreWidget);
    },

    showWidget: function() {
      if (this.isOpen) {
        return;
      }

      if (this.$element.is(':disabled')) {
        return;
      }

      // show/hide approach taken by datepicker
      this.$widget.appendTo(this.appendWidgetTo);
      $(document).on('mousedown.timepicker, touchend.timepicker', {scope: this}, this.handleDocumentClick);

      this.$element.trigger({
        'type': 'show.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });

      this.place();
      if (this.disableFocus) {
        this.$element.blur();
      }

      // widget shouldn't be empty on open
      if (this.hour === '') {
        if (this.defaultTime) {
          this.setDefaultTime(this.defaultTime);
        } else {
          this.setTime('0:0:0');
        }
      }

      if (this.template === 'modal' && this.$widget.modal) {
        this.$widget.modal('show').on('hidden', $.proxy(this.hideWidget, this));
      } else {
        if (this.isOpen === false) {
          this.$widget.addClass('open');
        }
      }

      this.isOpen = true;
    },

    toggleMeridian: function() {
      this.meridian = this.meridian === 'AM' ? 'PM' : 'AM';
    },

    update: function(ignoreWidget) {
      this.updateElement();
      if (!ignoreWidget) {
        this.updateWidget();
      }

      this.$element.trigger({
        'type': 'changeTime.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });
    },

    updateElement: function() {
      this.$element.val(this.getTime()).change();
    },

    updateFromElementVal: function() {
      this.setTime(this.$element.val());
    },

    updateWidget: function() {
      if (this.$widget === false) {
        return;
      }

      var hour = this.hour,
          minute = this.minute.toString().length === 1 ? '0' + this.minute : this.minute,
          second = this.second.toString().length === 1 ? '0' + this.second : this.second;

      if (this.showInputs) {
        this.$widget.find('input.bootstrap-timepicker-hour').val(hour);
        this.$widget.find('input.bootstrap-timepicker-minute').val(minute);

        if (this.showSeconds) {
          this.$widget.find('input.bootstrap-timepicker-second').val(second);
        }
        if (this.showMeridian) {
          this.$widget.find('input.bootstrap-timepicker-meridian').val(this.meridian);
        }
      } else {
        this.$widget.find('span.bootstrap-timepicker-hour').text(hour);
        this.$widget.find('span.bootstrap-timepicker-minute').text(minute);

        if (this.showSeconds) {
          this.$widget.find('span.bootstrap-timepicker-second').text(second);
        }
        if (this.showMeridian) {
          this.$widget.find('span.bootstrap-timepicker-meridian').text(this.meridian);
        }
      }
    },

    updateFromWidgetInputs: function() {
      if (this.$widget === false) {
        return;
      }

      var t = this.$widget.find('input.bootstrap-timepicker-hour').val() + ':' +
              this.$widget.find('input.bootstrap-timepicker-minute').val() +
              (this.showSeconds ? ':' + this.$widget.find('input.bootstrap-timepicker-second').val() : '') +
              (this.showMeridian ? this.$widget.find('input.bootstrap-timepicker-meridian').val() : '')
      ;

      this.setTime(t, true);
    },

    widgetClick: function(e) {
      e.stopPropagation();
      e.preventDefault();

      var $input = $(e.target),
          action = $input.closest('a').data('action');

      if (action) {
        this[action]();
      }
      this.update();

      if ($input.is('input')) {
        $input.get(0).setSelectionRange(0,2);
      }
    },

    widgetKeydown: function(e) {
      var $input = $(e.target),
          name = $input.attr('class').replace('bootstrap-timepicker-', '');

      switch (e.which) {
      case 9: //tab
        if (e.shiftKey) {
          if (name === 'hour') {
            return this.hideWidget();
          }
        } else if ((this.showMeridian && name === 'meridian') || (this.showSeconds && name === 'second') || (!this.showMeridian && !this.showSeconds && name === 'minute')) {
          return this.hideWidget();
        }
        break;
      case 27: // escape
        this.hideWidget();
        break;
      case 38: // up arrow
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.incrementHour();
          break;
        case 'minute':
          this.incrementMinute();
          break;
        case 'second':
          this.incrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        this.setTime(this.getTime());
        $input.get(0).setSelectionRange(0,2);
        break;
      case 40: // down arrow
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.decrementHour();
          break;
        case 'minute':
          this.decrementMinute();
          break;
        case 'second':
          this.decrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        this.setTime(this.getTime());
        $input.get(0).setSelectionRange(0,2);
        break;
      }
    },

    widgetKeyup: function(e) {
      if ((e.which === 65) || (e.which === 77) || (e.which === 80) || (e.which === 46) || (e.which === 8) || (e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
        this.updateFromWidgetInputs();
      }
    }
  };

  //TIMEPICKER PLUGIN DEFINITION
  $.fn.timepicker = function(option) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function() {
      var $this = $(this),
        data = $this.data('timepicker'),
        options = typeof option === 'object' && option;

      if (!data) {
        $this.data('timepicker', (data = new Timepicker(this, $.extend({}, $.fn.timepicker.defaults, options, $(this).data()))));
      }

      if (typeof option === 'string') {
        data[option].apply(data, args);
      }
    });
  };

  $.fn.timepicker.defaults = {
    defaultTime: '',
    disableFocus: false,
    disableMousewheel: false,
    isOpen: false,
    minuteStep: 15,
    modalBackdrop: false,
    orientation: { x: 'auto', y: 'auto'},
    secondStep: 15,
    snapToStep: false,
    showSeconds: false,
    showInputs: true,
    showMeridian: true,
    template: 'dropdown',
    appendWidgetTo: 'body',
    showWidgetOnAddonClick: true,
    maxHours: 24,
    explicitMode: false
  };

  $.fn.timepicker.Constructor = Timepicker;

  $(document).on(
    'focus.timepicker.data-api click.timepicker.data-api',
    '[data-provide="timepicker"]',
    function(e){
      var $this = $(this);
      if ($this.data('timepicker')) {
        return;
      }
      e.preventDefault();
      // component click requires us to explicitly show it
      $this.timepicker();
    }
  );
  
 

})(jQuery, window, document);
// States
// 

(function ($){
  window.numberArray = [],
  window.phoneNumber = '',
  window.updateDisplay,
  window.numberDisplayEl,
  window.inCallModeActive,
  window.dialpadButton = $('div.dials a.digit'),
  window.dialpadCase = $('div.dials'),
  window.clearButton = $('div.dials a.clear'),
  window.callButton = $('#actions .call'),
  window.actionButtons = $('#actions'),
  window.skipButton = $('#actions .skip'),
  window.numberDisplayEl = $('input#cnfMobileNo');

  function compilePhoneNumber(numberArray){
    if (window.numberArray.length > 1){ 
      window.phoneNumber = window.numberArray.join('');
    } else {
      window.phoneNumber = window.numberArray
    }
    return this.phoneNumber;
  };

  function updateDisplay(phoneNumber){
    window.numberDisplayEl.val(window.phoneNumber);
  };

  function clearPhoneNumber(){
  var inputString = $('input#cnfMobileNo').val();
        var shortenedString = inputString.substr(0,(inputString.length -1));
        $('input#cnfMobileNo').val(shortenedString);

  };

  function callNumber(){
    window.numberDisplayEl.val('Calling...');
    activateInCallInterface();
    // Need timer interval to animate . . .
    // Trigger  "Hangup"
    // Trigger  "Call timer"
  };


  function changeUnholdIntoHold(){
    window.skipButton.html('Hold');
  };

  function activateInCallInterface(){
    changeSkipIntoHold();
    disableDialButton();
    enableReadOnlyInput();
    window.inCallModeActive = true;
  };

  function disableInCallInterface(){
    removeReadOnlyInput();
    enableCallButton();
    changeHoldIntoSkip();
    window.inCallModeActive = false;
  }

  function enableCallButton(){
    window.callButton.removeClass('deactive');
  };

  function enableDialButton(){
    window.dialpadCase.removeClass('deactive');
  };

  function disableDialButton(){
    window.dialpadCase.addClass('deactive');
  };

  function changeSkipIntoHold(){
    window.skipButton.html('Hold');
  };

  function changeHoldIntoSkip(){
    window.skipButton.html('Skip');
  };

  function enableReadOnlyInput(){
    window.numberDisplayEl.attr('readonly','readonly');
  }

  function removeReadOnlyInput(){
    window.numberDisplayEl.removeAttr('readonly');
  }

  function refreshInputArray(){
    this.numberDisplayElContent = window.numberDisplayEl.val(); 
    window.numberArray = this.numberDisplayElContent.split('');
  };

  window.dialpadButton.click(function(e){
  
    if( !$(dialpadCase).hasClass('deactive') && window.numberDisplayEl.val().length <= 18){
      var content = $(this).html();
      refreshInputArray();
      window.numberArray.push(content);
      compilePhoneNumber();
      updateDisplay();
      checkDisplayEl();
      saveNumberDisplayEl();

    }
	if(window.numberDisplayEl.val().length > 10 && e.keyCode != 8){
		addReadyToClear();
		e.preventDefault();
	   }
	
  });
   $("input#cnfMobileNo").keydown (function (e) {
	  
	  
		/* console.log(e.keyCode) *//* blinking red num code goes here */
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "49"){
		 
		 $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "50"){
		 
		 $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "51"){
		 
		 $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "52"){
		 
		 $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "53"){
		 
		 $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "54"){
		 
		 $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "55"){
		 
		 $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "56"){
		 
		 $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "57"){
		 
		 $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		
		if( window.numberDisplayEl.val().length !=null){
		if(window.numberDisplayEl.val().length < 18){
		if(e.keyCode=="16" &&  e.keyCode=="56"){
		$('.tm-dp-row4 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row4 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row4 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		}}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "48"){
		 
		 $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row4 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if( window.numberDisplayEl.val().length !=null){
		if(window.numberDisplayEl.val().length < 18){
		if(e.keyCode=="16" &&  e.keyCode=="51"){
		$('.tm-dp-row4 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row4 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row4 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		}}
		
	   if(window.numberDisplayEl.val().length > 17 && e.keyCode != 8){
		addReadyToClear();
		e.preventDefault();
	   }
	   validation(e);
   });
   
   
   $("input#cnfMobileNo").keyup (function (e) {
	  
	  
		console.log(e.keyCode)/* blinking red num code goes here */
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "97"){
		 
		 $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "98"){
		 
		 $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "99"){
		 
		 $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row1 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row1 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "100"){
		 
		 $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "101"){
		 
		 $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "102"){
		 
		 $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row2 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row2 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		 if(window.numberDisplayEl.val().length < 18 && e.keyCode == "103"){
		 
		 $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "104"){
		 
		 $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "105"){
		 
		 $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row3 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row3 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if( window.numberDisplayEl.val().length !=null){
		if(window.numberDisplayEl.val().length < 18){
		if(e.keyCode=="16" &&  e.keyCode=="56"){
		$('.tm-dp-row4 a:first-Child').css('background-color', '#eb3849');
		  $('.tm-dp-row4 a:first-Child').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row4 a:first-Child').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		}}
		if(window.numberDisplayEl.val().length < 18 && e.keyCode == "96"){
		 
		 $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849');
		  $('.tm-dp-row4 a:nth-child(2)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row4 a:nth-child(2)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		if( window.numberDisplayEl.val().length !=null){
		if(window.numberDisplayEl.val().length < 18){
		if(e.keyCode=="16" &&  e.keyCode=="51"){
		$('.tm-dp-row4 a:nth-child(3)').css('background-color', '#eb3849');
		  $('.tm-dp-row4 a:nth-child(3)').css('color', '#fff');
		  setTimeout(function() { $('.tm-dp-row4 a:nth-child(3)').css('background-color', '#eb3849').removeAttr('style'); }, 200);
		}
		}}
		
	   if(window.numberDisplayEl.val().length > 17 && e.keyCode != 8){
		addReadyToClear();
		e.preventDefault();
	   }
	   validation(e);
   });
   
  function checkDisplayEl(){
    if( window.numberDisplayEl.val() != "" && window.numberDisplayEl.val().length >= 19){
      addReadyToClear();
	  validation(e);
    } else if ( window.numberDisplayEl.val() == "" ) {
      removeReadyFromClear();
    }
  }

   function validation(e){

        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 56,51]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && window.numberDisplayEl.val().length < 18) {
            e.preventDefault();
        }
  }





  

  function addReadyToClear(){
    window.clearButton.addClass('ready');
 $('#phoneHelper').removeClass('hide');
 $('#phoneHelper1').removeClass('hide');
 
  }

  $('#cnfMobileNo').keyup(function(e){if(e.keyCode == 8)$('#phoneHelper').addClass('hide');
  $('#phoneHelper1').addClass('hide');
    window.clearButton.removeClass('ready');})  


  

$('.tm-i-numberback').click(function(e){$('#phoneHelper').addClass('hide');
  $('#phoneHelper1').addClass('hide');
    window.clearButton.removeClass('ready');})  

$('.tm-i-numberback').click(function(){
   var len = $.trim(this.value).match(/\d/g).length;
    if (len > 9 ) {
       window.clearButton.addClass('ready');
  $('#phoneHelper').removeClass('hide');
  $('#phoneHelper1').removeClass('hide');
  
    }  
})


  function saveNumberDisplayEl(){
    lastNumberDisplayEl = window.numberDisplayEl.val()
  }

  function displayLastSavedNumberDisplayEl(){
    console.log('Last displayed element value: ' + lastNumberDisplayEl);
  }

  $('div.dials a.clear').click(function(){
    enableCallButton();
    enableDialButton();
    clearPhoneNumber();
    removeReadOnlyInput();
    //updateDisplay();
    checkDisplayEl();
    disableInCallInterface();
 
  });

  $('div#actions li.call').click(function(){
    callNumber();
  });

})(jQuery);																																									
function scrollWin() {
    window.scrollTo(0, 80);
	if ($('#livefilter-list').length > 0) {
$('#livefilter-list').liveFilter('.search', 'li', {
  filterChildSelector: 'a'
});
}


if ($('#livefilter-list1').length > 0) {
$('#livefilter-list1').liveFilter('.search', 'li', {
  filterChildSelector: 'a'
});
}



if ($('#add').length > 0) {
$('#add').click(function() {
    var newcontact = $('#name').val();
	var newcontactno = $('#number').val();
    
	if(newcontact&&newcontactno!= '') {
        $('.cList').append('<li><a href="dashboard-contact-profile.html"><div class="cntct-pic"><img src="img/user.jpg" alt="user-picture"/></div><div class="cntct-details"><p class="cntct-name">' + newcontact + '</p><p class="cntct-no">' + newcontactno + '</p></div></a></li>').listview('refresh');
        $('#name').val('');
		 $('#number').val('');
    }
      
});
}




if ($('#add1').length > 0) {
$('#add1').click(function() {
    var newcontact = $('#name1').val();
	var newcontactno = $('#number1').val();
    
	if(newcontact&&newcontactno!= '') {
        $('.cList1').append('<li><a href="dashboard-contact-profile.html"><div class="cntct-pic"><img src="img/user.jpg" alt="user-picture"/></div><div class="cntct-details"><p class="cntct-name">' + newcontact + '</p><p class="cntct-no">' + newcontactno + '</p></div></a></li>').listview('refresh');
        $('#name1').val('');
		 $('#number1').val('');
    }
      
});
}
}


$(function(){
    
    

      $('#testDiv').slimScroll({
          alwaysVisible: true,
          railVisible: true,
          railColor: '#fff',
          railOpacity: 1,
          height : '403px',
          railBorderRadius: 0
      });
    

        $('#scroll').slimScroll({
          alwaysVisible: true,
          railVisible: true,
          railColor: '#eaedef',
          railOpacity: 1,
          height : '190px',
          railBorderRadius: 0
      });
        $('#scroll1').slimScroll({
          alwaysVisible: true,
          railVisible: true,
          railColor: '#eaedef',
          railOpacity: 1,
          height : '269px',
          railBorderRadius: 0
      });
    
     $('#scroll2').slimScroll({
          alwaysVisible: true,
          railVisible: true,
          railColor: '#eaedef',
          railOpacity: 1,
          height : '300px',
          railBorderRadius: 0
      });

        
      $(".tm-user-cntct-dropdown" ).delegate( "input", "click", function(e) {
          e.stopPropagation();
      });

      $('[data-toggle="tooltip"]').tooltip();
      $('.add-contact').on('click', function(e){
          var exampleInputEmail1Value = $('#exampleInputEmail1').val();
          if(exampleInputEmail1Value.length>0){
            $('#contact-add tr:first').before('<tr><td>'+exampleInputEmail1Value+'</td><td>2.20C/Min</td></tr>');
          }
      })
      
      
       $('.remove-me').on('click', function(e){
          $(this).parents(".conference-contact:eq(0)").remove();
      })
      
      $('.conference-contact  glyphicon-volume-up').on('click', function(){
        $('.conference-contact div.conference-icon glyphicon-volume-up').toggleClass('glyphicon-volume-off');
            
      })

      
      $('.tm-i-conferencecallvolume').on('click', function(e){
            $(this).toggleClass('tm-i-conferencecallvolumemute');
      });

	  
	     $('.tm-i-callvolume').on('click', function(e){
            $(this).toggleClass('tm-i-callvolumemute');
      });

       
    
    $('i.tm-i-redial').hover(function(){
         $(this).parent().children('img.img-circle').addClass('img-circle-op');
       
    }, function(){
         $(this).parent().children('img.img-circle').removeClass('img-circle-op');
    });
    
    $('img.img-circle, i.tm-i-redial').hover(function(){
         $(this).parent().children('div.conference-icon').hide();
       
    }, function(){
         $(this).parent().children('div.conference-icon').show();
    });
      
    });




/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);
/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.11.4
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.layout","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.content","material.components.dialog","material.components.divider","material.components.datepicker","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.fabTrigger","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.progressCircular","material.components.radioButton","material.components.progressLinear","material.components.select","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.toast","material.components.tabs","material.components.toolbar","material.components.tooltip","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){e.decorator("$$rAF",["$delegate",o]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")}function n(e){return{restrict:"A",scope:{template:"=mdTemplate"},link:function(t,n){function o(o){n.html(o),e(n.contents())(t)}t.$watch("template",o)}}}function o(e){return e.throttle=function(t){var n,o,r,i;return function(){n=arguments,i=this,r=t,o||(o=!0,e(function(){r.apply(i,Array.prototype.slice.call(n)),o=!1}))}},e}t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.gestures","material.core.theming"]).directive("mdTemplate",n).config(e),e.$inject=["$provide","$mdThemingProvider"],n.$inject=["$compile"]}(),function(){function e(e){function t(e){return n?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var n=/webkit/i.test(e.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(n?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(n?" webkitAnimationEnd":""),TRANSFORM:t("transform"),TRANSFORM_ORIGIN:t("transformOrigin"),TRANSITION:t("transition"),TRANSITION_DURATION:t("transitionDuration"),ANIMATION_PLAY_STATE:t("animationPlayState"),ANIMATION_DURATION:t("animationDuration"),ANIMATION_NAME:t("animationName"),ANIMATION_TIMING:t("animationTimingFunction"),ANIMATION_DIRECTION:t("animationDirection")},MEDIA:{sm:"(max-width: 599px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 959px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1199px)","gt-lg":"(min-width: 1200px)"},MEDIA_PRIORITY:["gt-lg","lg","gt-md","md","gt-sm","sm"]}}t.module("material.core").factory("$mdConstant",e),e.$inject=["$sniffer"]}(),function(){function e(e,n){function o(){return[].concat(E)}function r(){return E.length}function i(e){return E.length&&e>-1&&e<E.length}function a(e){return e?i(u(e)+1):!1}function d(e){return e?i(u(e)-1):!1}function c(e){return i(e)?E[e]:null}function s(e,t){return E.filter(function(n){return n[e]===t})}function l(e,n){return e?(t.isNumber(n)||(n=E.length),E.splice(n,0,e),u(e)):-1}function m(e){h(e)&&E.splice(u(e),1)}function u(e){return E.indexOf(e)}function h(e){return e&&u(e)>-1}function p(){return E.length?E[0]:null}function f(){return E.length?E[E.length-1]:null}function g(e,o,r,a){r=r||b;for(var d=u(o);;){if(!i(d))return null;var c=d+(e?-1:1),s=null;if(i(c)?s=E[c]:n&&(s=e?f():p(),c=u(s)),null===s||c===a)return null;if(r(s))return s;t.isUndefined(a)&&(a=c),d=c}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var E=e||[];return{items:o,count:r,inRange:i,contains:h,indexOf:u,itemAt:c,findBy:s,add:l,remove:m,first:p,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function r(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=i(e));var o=p[n];return t.isUndefined(o)&&(o=a(n)),o}function i(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=h[e]=o.matchMedia(e);return t.addListener(d),p[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){p[e.media]=!!e.matches})}function c(e){return h[e]}function s(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var r=e.MEDIA_PRIORITY[o];if(h[u[r]].matches){var i=m(t,n+"-"+r);if(t[i])return t[i]}}return t[m(t,n)]}function l(n,o,r){var i=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&i.push(o.$observe(a,t.bind(void 0,r,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&i.push(o.$observe(a,t.bind(void 0,r,d)))}),function(){i.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},h={},p={},f={};return r.getResponsiveAttribute=s,r.getQuery=c,r.watchResponsiveAttributes=l,r}t.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),function(){function o(o,i,a,d,c,s,l){function m(e){return e[0]||e}var u=s.startSymbol(),h=s.endSymbol(),p="{{"===u&&"}}"===h,f={dom:{},now:e.performance?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},clientRect:function(e,t,n){var o=m(e);t=m(t||o.offsetParent||document.body);var r=o.getBoundingClientRect(),i=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:r.left-i.left,top:r.top-i.top,width:r.width,height:r.height}},offsetRect:function(e,t){return f.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},scrollTop:function(e){e=t.element(e||o[0].body);var r=e[0]==o[0].body?o[0].body:n,i=r?r.scrollTop+r.parentElement.scrollTop:0;return i||Math.abs(e[0].getBoundingClientRect().top)},findFocusTarget:function(e,n){function o(e,n){var o,r=e[0].querySelectorAll(n);if(r&&r.length){var i=/\s*\[?([\-a-z]*)\]?\s*/i,a=i.exec(n),d=a?a[1]:null;r.length&&t.forEach(r,function(e){e=t.element(e);var n=e[0].getAttribute(d),r=n&&f.validateScope(e)?e.scope().$eval(n)!==!1:!0;r&&(o=e)})}return o}var r,i="[md-autofocus]";return r=o(e,n||i),r||n==i||(r=o(e,"[md-auto-focus]"),r||(r=o(e,i))),r},disableScrollAround:function(e,n){function r(e){function n(e){}function r(e){e.preventDefault()}e=t.element(e||d)[0];var i=50,a=t.element('<div class="md-scroll-mask" style="z-index: '+i+'">  <div class="md-scroll-mask-bar"></div></div>');return e.appendChild(a[0]),a.on("wheel",r),a.on("touchmove",r),o.on("keydown",n),function(){a.off("wheel"),a.off("touchmove"),a[0].parentNode.removeChild(a[0]),o.off("keydown",n),delete f.disableScrollAround._enableScrolling}}function i(){var e=d.parentNode,t=e.getAttribute("style")||"",n=d.getAttribute("style")||"",o=f.scrollTop(d),r=d.clientWidth;return d.scrollHeight>d.clientHeight&&(a(d,{position:"fixed",width:"100%",top:-o+"px"}),a(e,{overflowY:"scroll"})),d.clientWidth<r&&a(d,{overflow:"hidden"}),function(){d.setAttribute("style",n),e.setAttribute("style",t),d.scrollTop=o}}function a(e,t){for(var n in t)e.style[n]=t[n]}if(f.disableScrollAround._count=f.disableScrollAround._count||0,++f.disableScrollAround._count,f.disableScrollAround._enableScrolling)return f.disableScrollAround._enableScrolling;e=t.element(e);var d=o[0].body,c=i(),s=r(n);return f.disableScrollAround._enableScrolling=function(){--f.disableScrollAround._count||(c(),s(),delete f.disableScrollAround._enableScrolling)}},enableScrolling:function(){var e=this.disableScrollAround._enableScrolling;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element('<div style="width: 100%; z-index: -1; position: absolute; height: 35px; overflow-y: scroll"><div style="height: 60;"></div></div>');o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function r(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",r))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(f.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),r=t;try{for(var i in o)o.hasOwnProperty(i)&&(r=r[o[i]])}catch(a){r=e}return"string"==typeof r||"number"==typeof r?r:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,r){var a;return function(){var d=o,c=Array.prototype.slice.call(arguments);i.cancel(a),a=i(function(){a=n,e.apply(d,c)},t||10,r)}},throttle:function(e,t){var n;return function(){var o=this,r=arguments,i=f.now();(!n||i-n>t)&&(e.apply(o,r),n=i)}},time:function(e){var t=f.now();return e(),f.now()-t},valueOnUse:function(e,t,n){var o=null,r=Array.prototype.slice.call(arguments),i=r.length>3?r.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,i)),o}})},nextUid:function(){return""+r++},validateScope:function(e){var n=e&&t.isDefined(e.scope());return n||l.warn("element.scope() is not available when 'debug mode' == false. @see https://docs.angularjs.org/guide/production!"),n},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(e instanceof t.element&&(e=e[0]),n=n.toUpperCase(),o&&(e=e.parentNode),!e)return null;do if(e.nodeName===n)return e;while(e=e.parentNode);return null},elementContains:function(n,o){var r=e.Node&&e.Node.prototype&&Node.prototype.contains,i=r?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return i(o)},extractElementByName:function(e,n,o,r){function i(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;o>t;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;o>n;n++){var r=e[n];if(!t)for(var a=0,d=r.childNodes.length;d>a;a++)t=t||i([r.childNodes[a]])}return t}var c=i(e);return!c&&r&&l.warn(f.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(c||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(r,i){if(r.optional&&t.isUndefined(e[i])){var a=t.isDefined(n[r.attrName]);e[i]=t.isDefined(o[i])?o[i]:a}})},nextTick:function(e,t,n){function o(){var e=n&&n.$$destroyed,t=e?[]:r.queue,o=e?null:r.digest;r.queue=[],r.timeout=null,r.digest=!1,t.forEach(function(e){e()}),o&&d.$digest()}var r=f.nextTick,a=r.timeout,c=r.queue||[];return c.push(e),null==t&&(t=!0),r.digest=r.digest||t,r.queue=c,a||(r.timeout=i(o,0,!1))},processTemplate:function(e){return p?e:e&&t.isString(e)?e.replace(/\{\{/g,u).replace(/}}/g,h):e}};return f.dom.animator=c(f),f}var r=0;t.module("material.core").factory("$mdUtil",o),o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log"],t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(e,n,o){function r(e,o,r){var i=t.element(e)[0]||e;!i||i.hasAttribute(o)&&0!==i.getAttribute(o).length||c(i,o)||(r=t.isString(r)?r.trim():"",r.length?e.attr(o,r):n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',i))}function i(t,n,o){e(function(){r(t,n,o())})}function a(e,t){i(e,t,function(){return d(e)})}function d(e){return e.text().trim()}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var r=e.hasChildNodes(),i=!1;if(r)for(var a=e.childNodes,d=0;d<a.length;d++){var c=a[d];1===c.nodeType&&c.hasAttribute(t)&&(n(c)||(i=!0))}return i}return{expect:r,expectAsync:i,expectWithText:a}}t.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),function(){function e(e,n,o,r,i,a){this.compile=function(d){var c=d.templateUrl,s=d.template||"",l=d.controller,m=d.controllerAs,u=t.extend({},d.resolve||{}),h=t.extend({},d.locals||{}),p=d.transformTemplate||t.identity,f=d.bindToController;return t.forEach(u,function(e,n){t.isString(e)?u[n]=o.get(e):u[n]=o.invoke(e)}),t.extend(u,h),c?u.$template=n.get(c,{cache:a}).then(function(e){return e.data}):u.$template=e.when(s),e.all(u).then(function(e){var n,o=p(e.$template),a=d.element||t.element("<div>").html(o.trim()).contents(),c=r(a);return n={locals:e,element:a,link:function(o){if(e.$scope=o,l){var r=i(l,e,!0);f&&t.extend(r.instance,e);var d=r();a.data("$ngControllerController",d),a.children().data("$ngControllerController",d),m&&(o[m]=d),n.controller=d}return c(o)}}})}}t.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(){function n(){}function o(n,o,r){function i(e,t,n){var o=p[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(p).join(", "));return o.registerElement(e,n)}function a(e,o){var r=new n(e);return t.extend(r,o),p[e]=r,h}var c=navigator.userAgent||navigator.vendor||e.opera,s=c.match(/ipad|iphone|ipod/i),m=c.match(/android/i),u="undefined"!=typeof e.jQuery&&t.element===e.jQuery,h={handler:a,register:i,isHijackingClicks:(s||m)&&!u&&!f};return h.isHijackingClicks&&h.handler("click",{options:{maxDistance:6},onEnd:function(e,t){t.distance<this.state.options.maxDistance&&this.dispatchEvent(e,"click")}}),h.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){r.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=r(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){if(Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance){var n="left"==t.directionX?"$md.swipeleft":"$md.swiperight";this.dispatchEvent(e,n)}}})}function r(e){this.name=e,this.state={}}function i(){function n(e,n,o){o=o||u;var r=new t.element.Event(n);r.$material=!0,r.pointer=o,r.srcEvent=e,t.extend(r,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(r)}function o(t,n,o){o=o||u;var r;"click"===n?(r=document.createEvent("MouseEvents"),r.initMouseEvent("click",!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(r=document.createEvent("CustomEvent"),r.initCustomEvent(n,!0,!0,{})),r.$material=!0,r.pointer=o,r.srcEvent=t,o.target.dispatchEvent(r)}var i="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return r.prototype={options:{},dispatchEvent:i?n:o,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),r=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,r),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n)}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}},r}function a(e,n){function o(e,t){var o;for(var r in p)o=p[r],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function r(e){if(!u){var t=+Date.now();h&&!c(e,h)&&t-h.endTime<1500||(u=d(e),o("start",e))}}function i(e){u&&c(e,u)&&(l(e,u),o("move",e))}function a(e){u&&c(e,u)&&(l(e,u),u.endTime=+Date.now(),o("end",e),h=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",function(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||s(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)},!0),b=!0);var m="mousedown touchstart pointerdown",f="mousemove touchmove pointermove",E="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(m,r).on(f,i).on(E,a).on("$$mdGestureReset",function(){h=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function c(e,t){return e&&t&&e.type.charAt(0)===t.type}function s(e){return g&&g.x==e.x&&g.y==e.y}function l(e,t){var n=m(e),o=t.x=n.pageX,r=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=r-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"up":t.distanceY<0?"down":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}var u,h,p={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",i).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]},o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"]}(),function(){function e(){function e(e){function n(e){return c.optionsFactory=e.options,c.methods=(e.methods||[]).concat(a),s}function o(e,t){return d[e]=t,s}function r(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return c.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},s}function i(n,o){function r(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},l,e))}function i(e){return m.destroy(e)}function a(t,n){var r={};return r[e]=u,o.invoke(t||function(){return n},{},r)}var s,l,m=n(),u={hide:m.hide,cancel:m.cancel,show:r,destroy:i};return s=c.methods||[],l=a(c.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(c.presets,function(e,n){function o(e){this._options=t.extend({},r,e)}var r=a(e.optionsFactory,{}),i=(e.methods||[]).concat(s);if(t.extend(r,{$type:n}),t.forEach(i,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}var a=["onHide","onShow","onRemove"],d={},c={presets:{}},s={setDefaults:n,addPreset:r,addMethod:o,$get:i};return s.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),i.$inject=["$$interimElement","$injector"],s}function o(e,o,r,i,a,d,c,s,l,m,u){return function(){function u(e){e=e||{};var t=new g(e||{}),n=!e.skipHide&&v.length?b.hide():o.when(!0);return n["finally"](function(){v.push(t),t.show()["catch"](function(e){return e})}),t.deferred.promise}function h(e,t){function r(n){return n.remove(e,!1,t||{})["catch"](function(e){return e}),n.deferred.promise}if(!v.length)return o.when(e);if(t=t||{},t.closeAll){var i=o.all(v.reverse().map(r));return v=[],i}if(t.closeTo!==n)return o.all(v.splice(t.closeTo).map(r));var a=v.pop();return r(a)}function p(e,t){var n=v.shift();return n?(n.remove(e,!0,t||{})["catch"](function(e){return e}),n.deferred.promise):o.when(e)}function f(){var e=v.shift();return e?e.remove(E,!1,{$destroy:!0}):o.when(E)}function g(u){function h(){return o(function(e,t){function n(e){A.deferred.reject(e),t(e)}g(u).then(function(t){C=E(t,u),T=$(C,u,t.controller).then(e,n)},n)})}function p(e,n,r){function i(e){A.deferred.resolve(e)}function a(e){A.deferred.reject(e)}return C?(u=t.extend(u||{},r||{}),u.cancelAutoHide&&u.cancelAutoHide(),u.element.triggerHandler("$mdInterimElementRemove"),u.$destroy===!0?y(u.element,u):(o.when(T)["finally"](function(){y(u.element,u).then(function(){n&&a(e)||i(e)},a)}),A.deferred.promise)):o.when(!1)}function f(e){return e=e||{},e.template&&(e.template=s.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||i.$new(e.isolateScope),onShow:function(e,t,n){return c.enter(t,n.parent)},onRemove:function(e,t){return t&&c.leave(t)||o.when()}},e)}function g(e){var t=e.skipCompile?null:l.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function E(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=v(o,n),n.themable&&m(o),o}function v(n,o){var r=o.parent;if(r=t.isFunction(r)?r(o.scope,n,o):t.isString(r)?t.element(e[0].querySelector(r)):t.element(r),!(r||{}).length){var i;return d[0]&&d[0].querySelector&&(i=d[0].querySelector(":not(svg) > body")),i||(i=d[0]),"#comment"==i.nodeName&&(i=e[0].body),t.element(i)}return r}function M(){var e,o=t.noop;u.hideDelay&&(e=a(b.hide,u.hideDelay),o=function(){a.cancel(e)}),u.cancelAutoHide=function(){o(),u.cancelAutoHide=n}}function $(e,n,r){var i=n.onShowing||t.noop,a=n.onComplete||t.noop;return o(function(t,d){try{i(n.scope,e,n),o.when(n.onShow(n.scope,e,n,r)).then(function(){a(n.scope,e,n),M(),t(e)},d)}catch(c){d(c.message)}})}function y(e,n){var o=n.onRemoving||t.noop;return r(function(t,i){try{var a=r.when(n.onRemove(n.scope,e,n)||!0);o(e,a),1==n.$destroy?t(e):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},i)}catch(d){i(d.message)}})}var A,C,T=o.when(!0);return u=f(u),A={options:u,deferred:o.defer(),show:h,remove:p}}var b,E=!1,v=[];return b={show:u,hide:h,cancel:p,destroy:f}}}return e.$get=o,o.$inject=["$document","$q","$$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$log"],e}t.module("material.core").provider("$$interimElement",e)}(),function(){function e(e,n){function o(e){return e&&""!==e}var r,i=[],a={};return r={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return i},get:function(e){if(!o(e))return null;var t,n,r;for(t=0,n=i.length;n>t;t++)if(r=i[t],r.$$mdHandle===e)return r;return null},register:function(e,n){function o(){var t=i.indexOf(e);-1!==t&&i.splice(t,1)}function r(){var t=a[n];t&&(t.resolve(e),delete a[n])}return n?(e.$$mdHandle=n,i.push(e),r(),o):t.noop},when:function(e){if(o(e)){var t=n.defer(),i=r.get(e);return i?t.resolve(i):a[e]=t,t.promise}return n.reject("Invalid `md-component-id` value.")}}}t.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),function(){!function(){function e(){return{restrict:"A",priority:"900",compile:function(e,n){return E.enabled=!1,t.noop}}}function n(e){function n(t,n,o){var i=r(n,e,o),a=o.$observe(o.$normalize(e),i);i(s(e,o,"")),t.$on("$destroy",function(){a()}),E.removeAttributes&&n.removeAttr(e)}return["$mdUtil","$interpolate",function(o,r){return m=o,u=r,{restrict:"A",compile:function(o,r){var i;return E.enabled&&(a(e,s(e,r,""),d(o,e,r)),i=n),i||t.noop}}}]}function o(e){function n(t,n){n.addClass(e),E.removeAttributes&&n.removeAttr(e)}return["$interpolate",function(o){return u=o,{restrict:"A",compile:function(o,r){var i;return E.enabled&&(a(e,s(e,r,""),d(o,e,r)),n(null,o),i=n),i||t.noop}}}]}function r(e,n){var o;return function(r){var i=a(n,r||"");t.isDefined(i)&&(e.removeClass(o),o=i?n+"-"+i.replace(p,"-"):n,e.addClass(o))}}function i(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function a(e,n,o){var r=n;if(!c(n)){switch(e.replace(h,"")){case"layout":l(n,g)||(n=g[0]);break;case"flex":l(n,f)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":(!n||isNaN(+n))&&(n="0");break;case"layout-align":l(n,b,"-")||(n=b[0]);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-no-wrap":n=""}n!=r&&(o||t.noop)(n)}return n}function d(e,t,n){return function(o){c(o)||(e.attr(t,o),n[n.$normalize(t)]=o)}}function c(e){return(e||"").indexOf(u.startSymbol())>-1}function s(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace(p,"-"):n||null}function l(e,t,n){e=n&&e?e.replace(p,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace(p,n):t,o=o||t===e}),o}var m,u,h=/(-gt)?-(sm|md|lg)/g,p=/\s+/g,f=["grow","initial","auto","none"],g=["row","column"],b=["start start","start center","start end","center","center center","center start","center end","end","end center","end start","end end","space-around","space-around center","space-around start","space-around end","space-between","space-between center","space-between start","space-between end"],E={enabled:!0,removeAttributes:!0,breakpoints:[]};t.module("material.core.layout",["ng"]).directive("mdLayoutCss",e).directive("layout",n("layout")).directive("layoutSm",n("layout-sm")).directive("layoutGtSm",n("layout-gt-sm")).directive("layoutMd",n("layout-md")).directive("layoutGtMd",n("layout-gt-md")).directive("layoutLg",n("layout-lg")).directive("layoutGtLg",n("layout-gt-lg")).directive("flex",n("flex")).directive("flexSm",n("flex-sm")).directive("flexGtSm",n("flex-gt-sm")).directive("flexMd",n("flex-md")).directive("flexGtMd",n("flex-gt-md")).directive("flexLg",n("flex-lg")).directive("flexGtLg",n("flex-gt-lg")).directive("flexOrder",n("flex-order")).directive("flexOrderSm",n("flex-order-sm")).directive("flexOrderGtSm",n("flex-order-gt-sm")).directive("flexOrderMd",n("flex-order-md")).directive("flexOrderGtMd",n("flex-order-gt-md")).directive("flexOrderLg",n("flex-order-lg")).directive("flexOrderGtLg",n("flex-order-gt-lg")).directive("flexOffset",n("flex-offset")).directive("flexOffsetSm",n("flex-offset-sm")).directive("flexOffsetGtSm",n("flex-offset-gt-sm")).directive("flexOffsetMd",n("flex-offset-md")).directive("flexOffsetGtMd",n("flex-offset-gt-md")).directive("flexOffsetLg",n("flex-offset-lg")).directive("flexOffsetGtLg",n("flex-offset-gt-lg")).directive("layoutAlign",n("layout-align")).directive("layoutAlignSm",n("layout-align-sm")).directive("layoutAlignGtSm",n("layout-align-gt-sm")).directive("layoutAlignMd",n("layout-align-md")).directive("layoutAlignGtMd",n("layout-align-gt-md")).directive("layoutAlignLg",n("layout-align-lg")).directive("layoutAlignGtLg",n("layout-align-gt-lg")).directive("hide",o("hide")).directive("hideSm",o("hide-sm")).directive("hideGtSm",o("hide-gt-sm")).directive("hideMd",o("hide-md")).directive("hideGtMd",o("hide-gt-md")).directive("hideLg",o("hide-lg")).directive("hideGtLg",o("hide-gt-lg")).directive("show",o("show")).directive("showSm",o("show-sm")).directive("showGtSm",o("show-gt-sm")).directive("showMd",o("show-md")).directive("showGtMd",o("show-gt-md")).directive("showLg",o("show-lg")).directive("showGtLg",o("show-gt-lg")).directive("layoutMargin",o("layout-margin")).directive("layoutPadding",o("layout-padding")).directive("layoutWrap",o("layout-wrap")).directive("layoutNoWrap",o("layout-no-wrap")).directive("layoutFill",o("layout-fill")).directive("layoutLtMd",i("layout-lt-md",!0)).directive("layoutLtLg",i("layout-lt-lg",!0)).directive("flexLtMd",i("flex-lt-md",!0)).directive("flexLtLg",i("flex-lt-lg",!0)).directive("layoutAlignLtMd",i("layout-align-lt-md")).directive("layoutAlignLtLg",i("layout-align-lt-lg")).directive("flexOrderLtMd",i("flex-order-lt-md")).directive("flexOrderLtLg",i("flex-order-lt-lg")).directive("offsetLtMd",i("flex-offset-lt-md")).directive("offsetLtLg",i("flex-offset-lt-lg")).directive("hideLtMd",i("hide-lt-md")).directive("hideLtLg",i("hide-lt-lg")).directive("showLtMd",i("show-lt-md")).directive("showLtLg",i("show-lt-lg"))}()}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,r,i){return i=t.extend(n(r),i),e.attach(o,r,i)}}}t.module("material.core").factory("$mdButtonInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},r))}return{attach:n}}t.module("material.core").factory("$mdCheckboxInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdListInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){function n(e,n){return{controller:t.noop,link:function(t,o,r){r.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function o(e){function n(n,o,i){return o.controller("mdNoInk")?t.noop:e.instantiate(r,{
$scope:n,$element:o,rippleOptions:i})}return{attach:n}}function r(e,n,o,r,i,a){this.$window=r,this.$timeout=i,this.$mdUtil=a,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),a.valueOnUse(this,"background",this.getColor,.5),this.color=this.getColor(1),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.setColor),this.bindEvents()}function i(){return{controller:t.noop}}t.module("material.core").factory("$mdInkRipple",o).directive("mdInkRipple",n).directive("mdNoInk",i).directive("mdNoBar",i).directive("mdNoStretch",i);var a=450;n.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],o.$inject=["$injector"],r.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil"],r.prototype.getColor=function(){function e(){var e=this.options.colorElement&&this.options.colorElement[0];return e=e||this.$element[0],e?this.$window.getComputedStyle(e).color:"rgb(0,0,0)"}return this._parseColor(this.$element.attr("md-ink-ripple"))||this._parseColor(e.call(this))},r.prototype._parseColor=function(e,t){function n(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),r=t.substr(n,n),i=t.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),"rgba("+parseInt(o,16)+","+parseInt(r,16)+","+parseInt(i,16)+",0.1)"}function o(e){return e.replace(")",", 0.1)").replace("(","a(")}return t=t||1,e?0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?o(e):0===e.indexOf("#")?n(e):void 0:void 0},r.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup))},r.prototype.handleMousedown=function(t){this.mousedown||(this.setColor(e.getComputedStyle(this.$element[0]).color),t.hasOwnProperty("originalEvent")&&(t=t.originalEvent),this.mousedown=!0,this.options.center?this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2):this.createRipple(t.layerX,t.layerY))},r.prototype.handleMouseup=function(){if(this.mousedown||this.lastRipple){var e=this;this.mousedown=!1,this.$mdUtil.nextTick(function(){e.clearRipples()},!1)}},r.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},r.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},r.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},r.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&e.hasAttribute&&e.hasAttribute("disabled"))return!1}while(e=e.parentNode);return!0},r.prototype.createRipple=function(e,n){function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}function r(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var i=this,d=t.element('<div class="md-ripple"></div>'),c=this.$element.prop("clientWidth"),s=this.$element.prop("clientHeight"),l=2*Math.max(Math.abs(c-e),e),m=2*Math.max(Math.abs(s-n),n),u=r(this.options.fitRipple,l,m);d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:o(this.color),borderColor:o(this.color)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:this.background}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples()},a,!1)},!1)}},r.prototype.setColor=function(e){this.color=this._parseColor(e)},r.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},r.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);0>n||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},r.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdTabInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900",contrastStrongLightColors:"600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),function(){function e(e){function o(e,t){return t=t||{},l[e]=a(e,t),b}function r(e,n){return a(e,t.extend({},l[e]||{},n))}function a(e,t){var n=C.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function d(e,n){if(m[e])return m[e];n=n||"default";var o="string"==typeof n?m[n]:n,r=new c(e);return o&&t.forEach(o.colors,function(e,n){r.colors[n]={name:e.name,hues:t.extend({},e.hues)}}),m[e]=r,r}function c(e){function n(e){if(e=0===arguments.length?!0:!!e,e!==o.isDark){o.isDark=e,o.foregroundPalette=o.isDark?p:h,o.foregroundShadow=o.isDark?f:g;var n=o.isDark?A:y,r=o.isDark?y:A;return t.forEach(n,function(e,t){var n=o.colors[t],i=r[t];if(n)for(var a in n.hues)n.hues[a]===i[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=e,o.colors={},o.dark=n,n(!1),M.forEach(function(e){var n=(o.isDark?A:y)[e];o[e+"Palette"]=function(r,i){var a=o.colors[e]={name:r,hues:t.extend({},n,i)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",r).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==C.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",o.name).replace("%3",e).replace("%4",r).replace("%5",C.join(", ")))}),o},o[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),o[e+"Palette"].apply(o,t)}})}function u(e,o){function r(e){return e===n||""===e?!0:i.THEMES[e]!==n}function i(t,o){o===n&&(o=t,t=n),t===n&&(t=e),i.inherit(o,o)}return i.inherit=function(n,i){function a(e){if(e){r(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e),d&&n.data("$mdThemeController",d)}}var d=i.controller("mdTheme"),c=n.attr("md-theme-watch");if((v||t.isDefined(c))&&"false"!=c){var s=e.$watch(function(){return d&&d.$mdTheme||("default"==E?"":E)},a);n.on("$destroy",s)}else{var l=d&&d.$mdTheme||("default"==E?"":E);a(l)}},i.THEMES=t.extend({},m),i.defaultTheme=function(){return E},i.registered=r,i}l={},m={};var b,E="default",v=!1;return t.extend(l,e),u.$inject=["$rootScope","$log"],b={definePalette:o,extendPalette:r,theme:d,setDefaultTheme:function(e){E=e},alwaysWatchTheme:function(e){v=e},$get:u,_LIGHT_DEFAULT_HUES:y,_DARK_DEFAULT_HUES:A,_PALETTES:l,_THEMES:m,_parseRules:i,_rgba:s}}function o(e,t,n){return{priority:100,link:{pre:function(o,r,i){var a={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),a.$mdTheme=t}};r.data("$mdThemeController",a),a.$setTheme(t(i.mdTheme)(o)),i.$observe("mdTheme",a.$setTheme)}}}}function r(e){return e}function i(e,n,o){d(e,n),o=o.replace(/THEME_NAME/g,e.name);var r=[],i=e.colors[n],a=new RegExp(".md-"+e.name+"-theme","g"),c=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),m=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,u=l[i.name];return o=o.replace(m,function(t,n,o,r,i){return"foreground"===n?"shadow"==o?e.foregroundShadow:e.foregroundPalette[o]||e.foregroundPalette[1]:(0===o.indexOf("hue")&&(o=e.colors[n].hues[o]),s((l[e.colors[n].name][o]||"")[i?"contrast":"value"],r))}),t.forEach(i.hues,function(t,n){var i=o.replace(c,function(e,n,o,r,i){return s(u[t]["color"===r?"value":"contrast"],i)});"default"!==n&&(i=i.replace(a,".md-"+e.name+"-theme.md-"+n)),"default"==e.name&&(i=i.replace(/((\w|\.|-)+)\.md-default-theme((\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g,"$&, $1$3")),r.push(i)}),r}function a(e){function n(e){var n=e.contrastDefaultColor,o=e.contrastLightColors||[],r=e.contrastStrongLightColors||[],i=e.contrastDarkColors||[];"string"==typeof o&&(o=o.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof i&&(i=i.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,t.forEach(e,function(a,d){function s(){return"light"===n?i.indexOf(d)>-1?b:r.indexOf(d)>-1?v:E:o.indexOf(d)>-1?r.indexOf(d)>-1?v:E:b}if(!t.isObject(a)){var l=c(a);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",d));e[d]={value:l,contrast:s()}}})}var o=document.getElementsByTagName("head")[0],r=o?o.firstElementChild:null,a=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";if(r&&0!==a.length){t.forEach(l,n);var d={},s=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),h=new RegExp("md-("+M.join("|")+")","g");M.forEach(function(e){d[e]=""}),s.forEach(function(e){for(var t,n=(e.match(h),0);t=M[n];n++)if(e.indexOf(".md-"+t)>-1)return d[t]+=e;for(n=0;t=M[n];n++)if(e.indexOf(t)>-1)return d[t]+=e;return d[$]+=e}),t.forEach(m,function(e){u[e.name]||(M.forEach(function(t){for(var n=i(e,t,d[t]);n.length;){var a=document.createElement("style");a.setAttribute("type","text/css"),a.appendChild(document.createTextNode(n.shift())),o.insertBefore(a,r)}}),e.colors.primary.name==e.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."),u[e.name]=!0)})}}function d(e,t){if(!l[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(l).join(", ")))}function c(e){if(t.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var n=e.length/3,o=e.substr(0,n),r=e.substr(n,n),i=e.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),[parseInt(o,16),parseInt(r,16),parseInt(i,16)]}}function s(e,n){return e?(4==e.length&&(e=t.copy(e),n?e.pop():n=e.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+e.join(",")+","+n+")":"rgb("+e.join(",")+")"):"rgb('0,0,0')"}t.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",o).directive("mdThemable",r).provider("$mdTheming",e).run(a);var l,m,u={},h={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},p={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},f="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",g="",b=c("rgba(0,0,0,0.87)"),E=c("rgba(255,255,255,0.87"),v=c("rgb(255,255,255)"),M=["primary","accent","warn","background"],$="primary",y={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"A100","hue-1":"300","hue-2":"800","hue-3":"900"}},A={background:{"default":"800","hue-1":"600","hue-2":"300","hue-3":"900"}};M.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};y[e]||(y[e]=t),A[e]||(A[e]=t)});var C=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];e.$inject=["$mdColorPalette"],o.$inject=["$mdTheming","$interpolate","$log"],r.$inject=["$mdTheming"],a.$inject=["$injector"]}(),function(){function e(e,n,o,r,i){var a;return a={translate3d:function(e,t,n,o){function r(n){return i(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass}).start()}return i(e,{from:t,to:n,addClass:o.transitionInClass}).start().then(function(){return r})},waitTransitionEnd:function(e,t){var i=3e3;return n(function(n,a){function d(t){t&&t.target!==e[0]||(t&&o.cancel(c),e.off(r.CSS.TRANSITIONEND,d),n())}t=t||{};var c=o(d,t.timeout||i);e.on(r.CSS.TRANSITIONEND,d)})},calculateZoomToOrigin:function(n,o){var r=o.element,i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",d=t.bind(null,e.supplant,i),c=d({centerX:0,centerY:0,scaleX:.5,scaleY:.5});if(r){var s=a.clientRect(r)||a.copyRect(o.bounds),l=a.copyRect(n[0].getBoundingClientRect()),m=a.centerPointFor(l),u=a.centerPointFor(s);c=d({centerX:u.x-m.x,centerY:u.y-m.y,scaleX:Math.round(100*Math.min(.5,s.width/l.width))/100,scaleY:Math.round(100*Math.min(.5,s.height/l.height))/100})}return c},toCss:function(e){function n(e,n,r){t.forEach(n.split(" "),function(e){o[e]=r})}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e)}}),o},toTransformCss:function(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?a.copyRect(n):null},centerPointFor:function(e){return{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(t,n,o,r){return function(i){return e(i,t,n,o,r)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),r=o?"-webkit-":"",i=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],c=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],s=["$q","$$rAFMutex",function(e,o){function r(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var i=0,a=1,d=2;return r.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===i&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},r}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",s).factory("$$rAFMutex",c).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout",function(t,d,c,s,l,m){function u(o,d){var s=[],l=M(o);d.transitionStyle&&s.push([r+"transition",d.transitionStyle]),d.keyframeStyle&&s.push([r+"animation",d.keyframeStyle]),d.delay&&s.push([r+"transition-delay",d.delay+"s"]),d.duration&&s.push([r+"transition-duration",d.duration+"s"]);var u=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),f=!!d.addClass||!!d.removeClass,y=u||f;$(o,!0),E(o,d);var A,C,T=!1;return{close:t.close,start:function(){function t(){return T?void 0:(T=!0,A&&C&&o.off(A,C),h(o,d),b(o,d),n(s,function(t){l.style[e(t[0])]=""}),u.complete(!0),u)}var u=new c;return g(function(){if($(o,!1),!y)return t();n(s,function(t){var n=t[0],o=t[1];l.style[e(n)]=o}),h(o,d);var c=p(o);if(0===c.duration)return t();var u=[];d.easing&&(c.transitionDuration&&u.push([r+"transition-timing-function",d.easing]),c.animationDuration&&u.push([r+"animation-timing-function",d.easing])),d.delay&&c.animationDelay&&u.push([r+"animation-delay",d.delay+"s"]),d.duration&&c.animationDuration&&u.push([r+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];l.style[e(n)]=o,s.push(t)});var f=c.delay,g=1e3*f,b=c.duration,E=1e3*b,M=Date.now();A=[],c.transitionDuration&&A.push(i),c.animationDuration&&A.push(a),A=A.join(" "),C=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),r=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-M,0)>=g&&r>=b&&t()},o.on(A,C),v(o,d),m(t,g+1.5*E,!1)}),u}}}function h(e,t){t.addClass&&(l.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(l.removeClass(e,t.removeClass),t.removeClass=null)}function p(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var r=M(e),i=t.getComputedStyle(r),a=f(i[n("transitionDuration")]),d=f(i[n("animationDuration")]),c=f(i[n("transitionDelay")]),s=f(i[n("animationDelay")]);d*=parseInt(i[n("animationIterationCount")],10)||1;var l=Math.max(d,a),m=Math.max(s,c);return{duration:l,delay:m,animationDuration:d,transitionDuration:a,animationDelay:s,transitionDelay:c}}function f(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function g(e){y&&y(),A.push(e),y=d(function(){y=null;for(var e=s(),t=0;t<A.length;t++)A[t](e);A.length=0})}function b(e,t){E(e,t),v(e,t)}function E(e,t){t.from&&(e.css(t.from),t.from=null)}function v(e,t){t.to&&(e.css(t.to),t.to=null)}function M(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function $(t,n){var o=M(t),i=e(r+"transition-delay");o.style[i]=n?"-9999s":""}var y,A=[];return u}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,t,n,o,r,i,a){function d(d,s,l){var m=o.getComputedStyle(a[0].body);if("fixed"==m.position){var u=parseInt(m.height,10)+Math.abs(parseInt(m.top,10));s.css({height:u+"px"})}t.pin&&t.pin(s,n),i(function(){var t=s.parent()[0];if(t){var n=o.getComputedStyle(t);"static"==n.position&&r.warn(c)}e.inherit(s,s.parent())})}var c="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:d}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,i,a,d,c,s){function l(o,r,s,l){r=i.extractElementByName(r,"md-bottom-sheet"),h=i.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),s.clickOutsideToClose&&h.on("click",function(){i.nextTick(d.cancel,!0)}),a.inherit(h,s.parent),e.enter(h,s.parent,null);var m=new u(r,s.parent);return s.bottomSheet=m,a.inherit(m.element,s.parent),s.disableParentScroll&&(s.restoreScroll=i.disableScrollAround(m.element,s.parent)),e.enter(m.element,s.parent).then(function(){var e=i.findFocusTarget(r)||t.element(r[0].querySelector("button")||r[0].querySelector("a")||r[0].querySelector("[ng-click]"));e.focus(),s.escapeToClose&&(s.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&i.nextTick(d.cancel,!0)},c.on("keyup",s.rootElementKeyupCallback))})}function m(t,n,o){var r=o.bottomSheet;return e.leave(h),e.leave(r.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),r.cleanup()})}function u(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function c(t){var o=t.pointer.distanceY;5>o&&(o=Math.max(-r,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(r+o)+"px,0)")}function l(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var r=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(r/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),i.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=s.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",c).on("$md.dragend",l),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",c),t.off("$md.dragend",l)}}}var h;return{themable:!0,onShow:l,onRemove:m,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}var o=.5,r=80;return n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n),e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,r){function i(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){return i(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function d(a,d,c){var s=d[0];n(d),e.attach(a,d);var l=s.textContent.trim();l||o.expect(d,"aria-label"),i(c)&&t.isDefined(c.ngDisabled)&&a.$watch(c.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){c.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,r(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(e){d.removeClass("md-focused")})}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}t.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"]}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){e(n)}}}t.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o,r,i,a){function d(d,s){return s.type="checkbox",s.tabindex=s.tabindex||"0",d.attr("role",s.type),d.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()}),function(d,s,l,m){function u(e,t,n){l[e]&&d.$watch(l[e],function(e){n[e]&&s.attr(t,n[e])})}function h(e){var t=e.which||e.keyCode;(t===o.KEY_CODE.SPACE||t===o.KEY_CODE.ENTER)&&(e.preventDefault(),s.hasClass("md-focused")||s.addClass("md-focused"),p(e))}function p(e){s[0].hasAttribute("disabled")||d.$apply(function(){var t=l.ngChecked?l.checked:!m.$viewValue;m.$setViewValue(t,e&&e.type),m.$render()})}function f(){m.$viewValue?s.addClass(c):s.removeClass(c)}m=m||i.fakeNgModel(),r(s),l.ngChecked&&d.$watch(d.$eval.bind(d,l.ngChecked),m.$setViewValue.bind(m)),u("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(s,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},l,[m]),d.mouseActive=!1,s.on("click",p).on("keypress",h).on("mousedown",function(){d.mouseActive=!0,a(function(){d.mouseActive=!1},100)}).on("focus",function(){d.mouseActive===!1&&s.addClass("md-focused")}).on("blur",function(){s.removeClass("md-focused")}),m.$render=f}}e=e[0];var c="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"]}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o,r){o[0];e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}t.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o){return{restrict:"E",link:function(r,i,a){n(i),e(function(){function e(){i.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=i[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),r.$on("$destroy",function(){o.destroy()})})}}}function n(e){function n(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">',' <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','   <h2 class="md-title">{{ dialog.title }}</h2>','   <div class="md-dialog-content-body" md-template="::dialog.mdContent"></div>'," </md-dialog-content>",' <div class="md-actions">','   <md-button ng-if="dialog.$type == \'confirm\'"     ng-click="dialog.abort()" class="md-primary">',"     {{ dialog.cancel }}","   </md-button>",'   <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type!=\'confirm\'">',"     {{ dialog.ok }}","   </md-button>"," </div>","</md-dialog>"].join("").replace(/\s\s+/g,""),
controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function o(e,n,o,r,i,a,d,c){function s(e,n,r,i){function d(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var o=n[0].querySelectorAll(".md-actions button");e=o[o.length-1]}return t.element(e)}if(r.focusOnOpen){var i=o.findFocusTarget(n)||e();i.focus()}}function c(){if(i){var e=/<\/[\w-]*>/gm,t=i.content||r.content||"",n=e.test(t);n||(t=o.supplant("<p>{0}</p>",[t])),i.mdContent=t}}return t.element(a[0].body).addClass("md-dialog-is-showing"),c(),m(n,r),p(n.find("md-dialog"),r),h(e,n,r),b(n,r).then(function(){u(n,r),f(n,r),d()})}function l(e,n,o){function r(){return E(n,o)}function i(){t.element(a[0].body).removeClass("md-dialog-is-showing"),n.remove(),o.$destroy||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),o.$destroy?i():r().then(i)}function m(e,n){n.origin=t.extend({element:null,bounds:null,focus:t.noop},n.origin||{});var o=t.element((n.targetEvent||{}).target);if(o&&o.length&&(n.origin.element=o,n.origin.bounds=o[0].getBoundingClientRect(),n.origin.focus=function(){o.focus()}),t.isString(n.parent)){var r=n.parent,i=a[0].querySelectorAll(r);n.parent=i.length?i[0]:null}n.parent=t.element(n.parent||c)}function u(n,i){var a=t.element(d),c=o.debounce(function(){g(n,i)},60),s=[],l=function(){var t="alert"==i.$type?e.hide:e.cancel;o.nextTick(t,!0)};if(i.escapeToClose){var m=i.parent,u=function(e){e.keyCode===r.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),l())};n.on("keydown",u),m.on("keydown",u),a.on("resize",c),s.push(function(){n.off("keydown",u),m.off("keydown",u),a.off("resize",c)})}if(i.clickOutsideToClose){var h,m=n,p=function(e){h=e.target},f=function(e){h===m[0]&&e.target===m[0]&&(e.stopPropagation(),e.preventDefault(),l())};m.on("mousedown",p),m.on("mouseup",f),s.push(function(){m.off("mousedown",p),m.off("mouseup",f)})}i.deactivateListeners=function(){s.forEach(function(e){e()}),i.deactivateListeners=null}}function h(e,t,n){n.disableParentScroll&&(n.restoreScroll=o.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=o.createBackdrop(e,"md-dialog-backdrop md-opaque"),i.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():i.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function p(e,t){var r="alert"===t.$type?"alertdialog":"dialog",i=e.find("md-dialog-content"),a=e.attr("id")||"dialog_"+o.nextUid();e.attr({role:r,tabIndex:"-1"}),0===i.length&&(i=e),i.attr("id",a),e.attr("aria-describedby",a),t.ariaLabel?n.expect(e,"aria-label",t.ariaLabel):n.expectAsync(e,"aria-label",function(){var e=i.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function f(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,r=0;r<t.length;r++)e===t[r]||v(t[r],["SCRIPT","STYLE"])||t[r].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function g(e,t){var n="fixed"==d.getComputedStyle(a[0].body).position,r=t.backdrop?d.getComputedStyle(t.backdrop[0]):null,i=r?Math.min(a[0].body.clientHeight,Math.ceil(Math.abs(parseInt(r.height,10)))):0;return e.css({top:(n?o.scrollTop(t.parent):0)+"px",height:i?i+"px":"100%"}),e}function b(e,t){t.parent.append(e),g(e,t);var n=e.find("md-dialog"),r=o.dom.animator,i=r.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=r.toTransformCss(i(n,t.origin)),c=r.toTransformCss("");return r.translate3d(n,d,c,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,e(r.toTransformCss(i(n,t.origin)))},!0})}function E(e,t){return t.reverseAnimate()}function v(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}return{hasBackdrop:!0,isolateScope:!0,onShow:s,onRemove:l,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,focusOnOpen:!0,disableParentScroll:!0,transformTemplate:function(e){function t(e){return/<\/md-dialog>/g.test(e)?e:"<md-dialog>"+e+"</md-dialog>"}return'<div class="md-dialog-container">'+t(e)+"</div>"}}}return n.$inject=["$mdDialog","$mdTheming"],o.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","parent"],options:o}).addPreset("alert",{methods:["title","content","ariaLabel","ok","theme","css"],options:n}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel","theme","css"],options:n})}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",n),e.$inject=["$$rAF","$mdTheming","$mdDialog"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e){return{restrict:"E",link:e}}t.module("material.components.divider",["material.core"]).directive("mdDivider",e),e.$inject=["$mdTheming"]}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(r-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"ctrl",bindToController:!0,link:function(e,t,n,o){var r=o[0],i=o[1];i.configureNgModel(r)}}}function n(e,t,n,o,r,i,a,c,s,l,m){if(a(e),this.items={length:2e3},this.maxDate&&this.minDate){var u=c.getMonthDistance(this.minDate,this.maxDate)+1;u=Math.max(u,1),u+=1,this.items.length=u}if(this.$animate=o,this.$q=r,this.$mdInkRipple=l,this.$mdUtil=m,this.keyCode=i.KEY_CODE,this.dateUtil=c,this.dateLocale=s,this.$element=e,this.$scope=n,this.calendarElement=e[0].querySelector(".md-calendar"),this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.today=this.dateUtil.createDateAtMidnight(),this.firstRenderableDate=this.dateUtil.incrementMonths(this.today,-this.items.length/2),this.minDate&&this.minDate>this.firstRenderableDate)this.firstRenderableDate=this.minDate;else if(this.maxDate){this.items.length-2;this.firstRenderableDate=this.dateUtil.incrementMonths(this.maxDate,-(this.items.length-2))}this.id=d++,this.ngModelCtrl=null,this.selectedDate=null,this.displayDate=null,this.focusDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1,t.tabindex||e.attr("tabindex","-1");var h=this;this.cellClickHandler=function(){var e=this;this.hasAttribute("data-timestamp")&&n.$apply(function(){var t=Number(e.getAttribute("data-timestamp"));h.setNgModelValue(h.dateUtil.createDateAtMidnight(t))})},this.attachCalendarEventListeners()}t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"]).directive("mdCalendar",e);var o=265,r=45,i="md-calendar-selected-date",a="md-focus",d=0;n.$inject=["$element","$attrs","$scope","$animate","$q","$mdConstant","$mdTheming","$$mdDateUtil","$mdDateLocale","$mdInkRipple","$mdUtil"],n.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.changeSelectedDate(t.ngModelCtrl.$viewValue)}},n.prototype.buildInitialCalendarDisplay=function(){this.buildWeekHeader(),this.hideVerticalScrollbar(),this.displayDate=this.selectedDate||this.today,this.isInitialized=!0},n.prototype.hideVerticalScrollbar=function(){var e=this.$element[0],t=e.querySelector(".md-calendar-scroll-mask"),n=this.calendarScroller,o=e.querySelector(".md-calendar-day-header").clientWidth,r=n.offsetWidth-n.clientWidth;t.style.width=o+"px",n.style.width=o+r+"px",n.style.paddingRight=r+"px"},n.prototype.attachCalendarEventListeners=function(){this.$element.on("keydown",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());if(e.which===t.keyCode.ENTER)return t.setNgModelValue(t.displayDate),void e.preventDefault();var n=t.getFocusDateFromKeyEvent(e);n&&(n=t.boundDateByMinAndMax(n),e.preventDefault(),e.stopPropagation(),t.changeDisplayDate(n).then(function(){t.focus(n)}))})},n.prototype.getFocusDateFromKeyEvent=function(e){var t=this.dateUtil,n=this.keyCode;switch(e.which){case n.RIGHT_ARROW:return t.incrementDays(this.displayDate,1);case n.LEFT_ARROW:return t.incrementDays(this.displayDate,-1);case n.DOWN_ARROW:return e.metaKey?t.incrementMonths(this.displayDate,1):t.incrementDays(this.displayDate,7);case n.UP_ARROW:return e.metaKey?t.incrementMonths(this.displayDate,-1):t.incrementDays(this.displayDate,-7);case n.PAGE_DOWN:return t.incrementMonths(this.displayDate,1);case n.PAGE_UP:return t.incrementMonths(this.displayDate,-1);case n.HOME:return t.getFirstDateOfMonth(this.displayDate);case n.END:return t.getLastDateOfMonth(this.displayDate);default:return null}},n.prototype.getSelectedMonthIndex=function(){return this.dateUtil.getMonthDistance(this.firstRenderableDate,this.selectedDate||this.today)},n.prototype.scrollToMonth=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}},n.prototype.setNgModelValue=function(e){this.$scope.$emit("md-calendar-change",e),this.ngModelCtrl.$setViewValue(e),this.ngModelCtrl.$render()},n.prototype.focus=function(e){var t=e||this.selectedDate||this.today,n=this.calendarElement.querySelector(".md-focus");n&&n.classList.remove(a);var o=this.getDateId(t),r=document.getElementById(o);r?(r.classList.add(a),r.focus()):this.focusDate=t},n.prototype.boundDateByMinAndMax=function(e){var t=e;return this.minDate&&e<this.minDate&&(t=new Date(this.minDate.getTime())),this.maxDate&&e>this.maxDate&&(t=new Date(this.maxDate.getTime())),t},n.prototype.changeSelectedDate=function(e){var t=this,n=this.selectedDate;this.selectedDate=e,this.changeDisplayDate(e).then(function(){if(n){var o=document.getElementById(t.getDateId(n));o&&(o.classList.remove(i),o.setAttribute("aria-selected","false"))}if(e){var r=document.getElementById(t.getDateId(e));r&&(r.classList.add(i),r.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildInitialCalendarDisplay(),this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){return this.scrollToMonth(e),this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;7>o;o++){var r=document.createElement("th");r.textContent=t[(o+e)%7],n.appendChild(r)}this.$element.find("thead").append(n)},n.prototype.getDateId=function(e){return["md",this.id,e.getFullYear(),e.getMonth(),e.getDate()].join("-")}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","mdCalendarMonth"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthCtrl",bindToController:!0,link:function(e,t,n,o){var r=o[0],i=o[1];i.calendarCtrl=r,i.generateContent(),e.$watch(function(){return i.offset},function(e,t){e!=t&&i.generateContent()})}}}function n(e,t,n){this.dateUtil=t,this.dateLocale=n,this.$element=e,this.calendarCtrl=null,this.offset,this.focusAfterAppend=null}t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o="md-calendar-date-today",r="md-calendar-selected-date",i="md-focus";n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],n.prototype.generateContent=function(){var e=this.calendarCtrl,t=this.dateUtil.incrementMonths(e.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForMonth(t)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(i),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.calendarCtrl,n=document.createElement("td");if(n.tabIndex=-1,n.classList.add("md-calendar-date"),n.setAttribute("role","gridcell"),e){n.setAttribute("tabindex","-1"),n.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),n.id=t.getDateId(e),n.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,t.today)&&n.classList.add(o),this.dateUtil.isValidDate(t.selectedDate)&&this.dateUtil.isSameDay(e,t.selectedDate)&&(n.classList.add(r),n.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)){var a=document.createElement("span");n.appendChild(a),a.classList.add("md-calendar-date-selection-indicator"),a.textContent=i,n.addEventListener("click",t.cellClickHandler),t.focusDate&&this.dateUtil.isSameDay(e,t.focusDate)&&(this.focusAfterAppend=n)}else n.classList.add("md-calendar-date-disabled"),n.textContent=i}return n},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),r=this.dateUtil.getNumberOfDaysInMonth(t),i=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);i.appendChild(d);var c=this.offset===this.calendarCtrl.items.length-1,s=0,l=document.createElement("td");if(l.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate&&l.classList.add("md-calendar-month-label-disabled"),l.textContent=this.dateLocale.monthHeaderFormatter(t),2>=o){l.setAttribute("colspan","7");var m=this.buildDateRow();if(m.appendChild(l),i.insertBefore(m,d),c)return i}else s=2,l.setAttribute("colspan","2"),d.appendChild(l);for(var u=s;o>u;u++)d.appendChild(this.buildDateCell());for(var h=o,p=n,f=1;r>=f;f++){if(7===h){if(c)return i;h=0,a++,d=this.buildDateRow(a),i.appendChild(d)}p.setDate(f);var g=this.buildDateCell(p);d.appendChild(g),h++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;i.childNodes.length<6;){for(var b=this.buildDateRow(),u=0;7>u;u++)b.appendChild(this.buildDateCell());i.appendChild(b)}return i},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e){function t(e){if(!e)return"";var t=e.toLocaleTimeString(),n=e;return 0!=e.getHours()||-1===t.indexOf("11:")&&-1===t.indexOf("23:")||(n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),n.toLocaleDateString()}function n(e){return new Date(e)}function o(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function r(e){return u.shortMonths[e.getMonth()]+" "+e.getFullYear()}function i(e){return"Week "+e}function a(e){return[u.days[e.getDay()],u.months[e.getMonth()],u.dates[e.getDate()],e.getFullYear()].join(" ")}for(var d=e.DATETIME_FORMATS.DAY.map(function(e){return e[0]}),c=Array(32),s=1;31>=s;s++)c[s]=s;var l="Calendar",m="Open calendar",u={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||d,dates:this.dates||c,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||t,parseDate:this.parseDate||n,isDateComplete:this.isDateComplete||o,monthHeaderFormatter:this.monthHeaderFormatter||r,weekNumberFormatter:this.weekNumberFormatter||i,longDateFormatter:this.longDateFormatter||a,msgCalendar:this.msgCalendar||l,msgOpenCalendar:this.msgOpenCalendar||m};return u},t.prototype.$get.$inject=["$locale"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){function n(){return{template:'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>',require:["ngModel","mdDatepicker"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,t,n,o){var r=o[0],i=o[1];i.configureNgModel(r)}}}function o(e,n,o,r,i,a,d,c,s,l,m,u){this.$compile=r,this.$timeout=i,this.$window=a,this.dateLocale=l,this.dateUtil=m,this.$mdConstant=d,this.$mdUtil=s,this.$$rAF=u,this.ngModelCtrl=null,this.inputElement=n[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=n[0].querySelector(".md-datepicker-input-container"),this.calendarPane=n[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=n[0].querySelector(".md-datepicker-button"),this.inputMask=n[0].querySelector(".md-datepicker-input-mask-opaque"),this.$element=n,this.$attrs=o,this.$scope=e,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(n[0].disabled||t.isString(o.disabled)),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+s.nextUid(),c(n),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowResizeHandler=s.debounce(t.bind(this,this.closeCalendarPane),100),o.tabindex||n.attr("tabindex","-1"),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var h=this;e.$on("$destroy",function(){h.detachCalendarPane()})}t.module("material.components.datepicker").directive("mdDatepicker",n);var r=3,i="md-datepicker-invalid",a=500,d=368,c=360;o.$inject=["$scope","$element","$attrs","$compile","$timeout","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF"],o.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.date=t.ngModelCtrl.$viewValue,t.inputElement.value=t.dateLocale.formatDate(t.date),t.resizeInputElement(),t.setErrorFlags()}},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.ngModelCtrl.$setViewValue(n),e.date=n,e.inputElement.value=e.dateLocale.formatDate(n),e.closeCalendarPane(),e.resizeInputElement(),e.inputContainer.classList.remove(i)}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement)),e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,a,e))},o.prototype.attachInteractionListeners=function(){var e=this,t=this.$scope,n=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(o){o.altKey&&o.keyCode==n.DOWN_ARROW&&(e.openCalendarPane(o),t.$digest())}),t.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$mdUtil.validateScope(this.$element)?this.$element.scope():null;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton.disabled=e},o.prototype.setErrorFlags=function(){this.dateUtil.isValidDate(this.date)&&(this.dateUtil.isValidDate(this.minDate)&&(this.ngModelCtrl.$error.mindate=this.date<this.minDate),this.dateUtil.isValidDate(this.maxDate)&&(this.ngModelCtrl.$error.maxdate=this.date>this.maxDate))},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+r},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=this.dateLocale.parseDate(e);this.dateUtil.setDateTimeToMidnight(t),""===e?(this.ngModelCtrl.$setViewValue(null),this.date=null,this.inputContainer.classList.remove(i)):this.dateUtil.isValidDate(t)&&this.dateLocale.isDateComplete(e)&&this.dateUtil.isDateWithinRange(t,this.minDate,this.maxDate)?(this.ngModelCtrl.$setViewValue(t),this.date=t,this.inputContainer.classList.remove(i)):this.inputContainer.classList.toggle(i,e)},o.prototype.attachCalendarPane=function(){var e=this.calendarPane;e.style.transform="",this.$element.addClass("md-datepicker-open");var t=this.inputContainer.getBoundingClientRect(),n=document.body.getBoundingClientRect(),o=t.top-n.top,r=t.left-n.left,i=document.body.scrollTop,a=i+this.$window.innerHeight,s=document.body.scrollLeft,l=document.body.scrollLeft+this.$window.innerWidth;if(r+c>l){if(l-c>0)r=l-c;else{r=s;var m=this.$window.innerWidth/c;e.style.transform="scale("+m+")"}e.classList.add("md-datepicker-pos-adjusted")}o+d>a&&a-d>i&&(o=a-d,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=r+"px",e.style.top=o+"px",document.body.appendChild(e),this.inputMask.style.left=t.width+"px",this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass("md-datepicker-open"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled){this.isCalendarOpen=!0,this.calendarPaneOpenedFrom=t.target,this.attachCalendarPane(),this.focusCalendar(),this.$mdUtil.disableScrollAround(this.calendarPane);var n=this;this.$mdUtil.nextTick(function(){document.body.addEventListener("click",n.bodyClickHandler)},!1),e.addEventListener("resize",this.windowResizeHandler)}},o.prototype.closeCalendarPane=function(){this.isCalendarOpen&&(this.isCalendarOpen=!1,this.detachCalendarPane(),this.calendarPaneOpenedFrom.focus(),this.calendarPaneOpenedFrom=null,this.$mdUtil.enableScrolling(),document.body.removeEventListener("click",this.bodyClickHandler),e.removeEventListener("resize",this.windowResizeHandler))},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest()}}}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function r(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function i(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&i(e,t)}function d(e,t){var n=o(e);return i(n,t)}function c(e,t){var n=r(e);return i(t,n)}function s(e,t){return b((e.getTime()+t.getTime())/2)}function l(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),r=n(o);return r<e.getDate()?o.setDate(r):o.setDate(e.getDate()),o}function h(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function p(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return null!=e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function E(e,n,o){return(!t.isDate(n)||e>=n)&&(!t.isDate(o)||o>=e)}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:r,isInNextMonth:d,isInPreviousMonth:c,getDateMidpoint:s,isSameMonthAndYear:i,getWeekOfMonth:l,incrementDays:m,incrementMonths:u,getLastDateOfMonth:p,isSameDay:a,getMonthDistance:h,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:E}})}()}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(e,n){var o=e.children(),r=!1;t.forEach(["","data-","x-"],function(e){r=r||(o.attr(e+"ng-repeat")?!0:!1)}),r?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function n(n,o,r,i,a){function d(){S.direction=S.direction||"down",S.isOpen=S.isOpen||!1,p()}function c(){var e=["mousedown","mouseup","click","touchstart","touchend","focusin","focusout"];t.forEach(e,function(e){o.on(e,u)}),n.$on("$destroy",function(){t.forEach(e,function(e){o.off(e,u)}),E()})}function s(){I=[]}function l(e){var n,o,r,i=0;do o=e.map(function(e){return e.replace("?","")}),n=t.equals(I,o),n||(e=m(e),r=e.length>=I.length&&e.length!==o.length);while(10>i&&!n&&r);return n}function m(e){var t=!1;return e.filter(function(e){return t||-1===e.indexOf("?")?!0:(t=!0,!1)})}function u(e){return I.push(e.type),l(["mousedown","focusout?","focusin?","mouseup","click"])?(N(e),void s()):l(["touchstart?","touchend?","click"])?(N(e),void s()):l(["focusin"])?(S.open(),void s()):l(["focusout"])?(S.close(),void s()):void h()}function h(){D&&e.clearTimeout(D),D=e.setTimeout(function(){s()},250)}function p(){S.currentActionIndex=-1}function f(){n.$watch("vm.direction",function(e,t){r.removeClass(o,"md-"+t),r.addClass(o,"md-"+e),p()});var e,t;n.$watch("vm.isOpen",function(n){p(),e&&t||(e=_(),t=H()),n?b():E();var i=n?"md-is-open":"",a=n?"":"md-is-open";e.attr("aria-haspopup",!0),e.attr("aria-expanded",n),t.attr("aria-hidden",!n),r.setClass(o,i,a)})}function g(){i.nextTick(function(){r.addClass(o,"md-noop")})}function b(){t.element(document).on("keydown",v)}function E(){t.element(document).off("keydown",v)}function v(e){switch(e.which){case a.KEY_CODE.SPACE:return e.preventDefault(),!1;case a.KEY_CODE.ESCAPE:return S.close(),e.preventDefault(),!1;case a.KEY_CODE.LEFT_ARROW:return A(e),!1;case a.KEY_CODE.UP_ARROW:return C(e),!1;case a.KEY_CODE.RIGHT_ARROW:return T(e),!1;case a.KEY_CODE.DOWN_ARROW:return k(e),!1}}function M(e){y(e,-1)}function $(e){y(e,1)}function y(e,n){var o=H()[0].querySelectorAll(".md-fab-action-item");t.forEach(o,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),S.currentActionIndex=S.currentActionIndex+n,S.currentActionIndex=Math.min(o.length-1,S.currentActionIndex),S.currentActionIndex=Math.max(0,S.currentActionIndex);var r=t.element(o[S.currentActionIndex]).children()[0];t.element(r).attr("tabindex",0),r.focus(),e.preventDefault(),e.stopImmediatePropagation()}function A(e){"left"===S.direction?$(e):M(e)}function C(e){"down"===S.direction?M(e):$(e)}function T(e){"left"===S.direction?M(e):$(e)}function k(e){"up"===S.direction?M(e):$(e)}function w(e){return i.getClosest(e,"md-fab-trigger")}function x(e){return i.getClosest(e,"md-fab-actions")}function N(e){w(e.target)&&S.toggle(),x(e.target)&&S.close()}function _(){return o.find("md-fab-trigger")}function H(){return o.find("md-fab-actions")}var S=this;S.open=function(){n.$evalAsync("vm.isOpen = true")},S.close=function(){n.$evalAsync("vm.isOpen = false"),o.find("md-fab-trigger")[0].focus()},S.toggle=function(){n.$evalAsync("vm.isOpen = !vm.isOpen")},d(),c(),f(),g();var D,I=[]}t.module("material.components.fabShared",["material.core"]).controller("FabController",n),n.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant"]}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"FabController",controllerAs:"vm",link:e}}function o(){function n(n){var o=n[0],r=n.controller("mdFabSpeedDial"),i=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector(".md-css-variables"),c=parseInt(e.getComputedStyle(d).zIndex);t.forEach(i,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=i.length-t+c}),a.style.zIndex=c+i.length+1,r.isOpen||t.forEach(i,function(e,t){var n,o,i=e.style;switch(r.direction){case"up":n=e.scrollHeight*(t+1),o="Y";break;case"down":n=-e.scrollHeight*(t+1),o="Y";break;case"left":n=e.scrollWidth*(t+1),o="X";break;case"right":n=-e.scrollWidth*(t+1),o="X"}var a="translate"+o+"("+n+"px)";i.transform=i.webkitTransform=a})}return{addClass:function(e,t,o){e.hasClass("md-fling")&&(n(e),o())},removeClass:function(e,t,o){n(e),o()}}}function r(){function n(n){var r=n[0],i=n.controller("mdFabSpeedDial"),a=r.querySelectorAll(".md-fab-action-item"),d=r.querySelector(".md-css-variables"),c=parseInt(e.getComputedStyle(d).zIndex);t.forEach(a,function(e,t){var n=e.style,r=t*o;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?r:a.length-r)+"ms",n.zIndex=a.length-t+c})}var o=65;return{addClass:function(e,t,o){n(e),o()},removeClass:function(e,t,o){n(e),o()}}}t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",r).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",r)}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"FabController",controllerAs:"vm",link:e}}function o(){function n(n,o,r){if(o){var i=n[0],a=n.controller("mdFabToolbar"),d=i.querySelector(".md-fab-toolbar-background"),c=i.querySelector("md-fab-trigger button"),s=i.querySelector("md-toolbar"),l=i.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(c&&d){var u=e.getComputedStyle(c).getPropertyValue("background-color"),h=i.offsetWidth,p=(i.offsetHeight,
2*(h/c.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=h+"px",a.isOpen?(s.style.pointerEvents="initial",d.style.width=c.offsetWidth+"px",d.style.height=c.offsetHeight+"px",d.style.transform="scale("+p+")",d.style.transitionDelay="0ms",l&&(l.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(s.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",l&&(l.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"]}}t.module("material.components.fabTrigger",["material.core"]).directive("mdFabTrigger",e)}()}(),function(){function e(e,o,r,i){function a(n,a,d,c){function s(){for(var e in o.MEDIA)i(e),i.getQuery(o.MEDIA[e]).addListener(A);return i.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function l(){c.layoutDelegate=t.noop,C();for(var e in o.MEDIA)i.getQuery(o.MEDIA[e]).removeListener(A)}function m(e){null==e?c.invalidateLayout():i(e)&&c.invalidateLayout()}function u(e){var o=g(),i={tileSpans:b(o),colCount:E(),rowMode:$(),rowHeight:M(),gutter:v()};if(e||!t.equals(i,T)){var d=r(i.colCount,i.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(i.colCount,n,i.gutter,i.rowMode,i.rowHeight)},tiles:e.map(function(e,r){return{element:t.element(o[r]),style:p(e.position,e.spans,i.colCount,n,i.gutter,i.rowMode,i.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),T=i}}function h(e){return k+e+w}function p(e,t,n,o,r,i,a){var d=1/n*100,c=(n-1)/n,s=x({share:d,gutterShare:c,gutter:r}),l={left:N({unit:s,offset:e.col,gutter:r}),width:_({unit:s,span:t.col,gutter:r}),paddingTop:"",marginTop:"",top:"",height:""};switch(i){case"fixed":l.top=N({unit:a,offset:e.row,gutter:r}),l.height=_({unit:a,span:t.row,gutter:r});break;case"ratio":var m=d/a,u=x({share:m,gutterShare:c,gutter:r});l.paddingTop=_({unit:u,span:t.row,gutter:r}),l.marginTop=N({unit:u,offset:e.row,gutter:r});break;case"fit":var h=(o-1)/o,m=1/o*100,u=x({share:m,gutterShare:h,gutter:r});l.top=N({unit:u,offset:e.row,gutter:r}),l.height=_({unit:u,span:t.row,gutter:r})}return l}function f(e,t,n,o,r){var i={};switch(o){case"fixed":i.height=_({unit:r,span:t,gutter:n}),i.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,c=d*(1/r),s=x({share:c,gutterShare:a,gutter:n});i.height="",i.paddingBottom=_({unit:s,span:t,gutter:n});break;case"fit":}return i}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(i.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(i.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function E(){var e=parseInt(i.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function v(){return y(i.getResponsiveAttribute(d,"md-gutter")||1)}function M(){var e=i.getResponsiveAttribute(d,"md-row-height");switch($()){case"fixed":return y(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function $(){var e=i.getResponsiveAttribute(d,"md-row-height");return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function y(e){return/\D$/.test(e)?e:e+"px"}a.attr("role","list"),c.layoutDelegate=u;var A=t.bind(c,c.invalidateLayout),C=s();n.$on("$destroy",l);var T,k=e.startSymbol(),w=e.endSymbol(),x=e(h("share")+"% - ("+h("gutter")+" * "+h("gutterShare")+")"),N=e("calc(("+h("unit")+" + "+h("gutter")+") * "+h("offset")+")"),_=e("calc(("+h("unit")+") * "+h("span")+" + ("+h("span")+" - 1) * "+h("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,c,s,l;return c=e.time(function(){a=r(t,n)}),o={layoutInfo:function(){return a},map:function(t){return s=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return l=e.time(function(){var e=t||i;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:c,mapTime:s,reflowTime:l,totalTime:c+s+l}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function r(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,l=0;l-a<t.col;)d>=e?o():(a=s.indexOf(0,d),-1!==a&&-1!==(l=i(a+1))?d=l+1:(a=l=0,o()));return r(a,t.col,t.row),d=a+t.col,{col:a,row:c}}function o(){d=0,c++,r(0,e,-1)}function r(e,t,n){for(var o=e;e+t>o;o++)s[o]=Math.max(s[o]+n,0)}function i(e){var t;for(t=e;t<s.length;t++)if(0!==s[t])return t;return t===s.length?t:void 0}function a(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var d=0,c=0,s=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:c+Math.max.apply(Math,s)}}var i=o;return n.animateWith=function(e){i=t.isFunction(e)?e:o},n}function r(e){function n(n,o,r,i){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],r,t.bind(i,i.invalidateLayout));i.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),i.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&i.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function i(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",r).directive("mdGridTileFooter",i).directive("mdGridTileHeader",i).factory("$mdGridLayout",o),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],n.$inject=["$mdUtil"],n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}},o.$inject=["$mdUtil"],r.$inject=["$mdMedia"]}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function e(e,t){function n(t,n,o){e(n)}function o(e,n,o){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setHasMessages=function(e){n.toggleClass("md-input-has-messages",!!e)},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},r.setInvalid=function(e){n.toggleClass("md-input-invalid",!!e)},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}return o.$inject=["$scope","$element","$attrs"],{restrict:"E",link:n,controller:o}}function n(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){o&&!n.mdNoFloat&&(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function o(e,n,o){function r(r,i,a,d){function c(e){return m.setHasValue(!h.$isEmpty(e)),e}function s(){m.setHasValue(i.val().length>0||(i[0].validity||{}).badInput)}function l(){function o(e){return f(),e}function a(){if(l.style.height=l.offsetHeight+"px",i.addClass("md-no-flex"),isNaN(u)){s.style.height="auto",s.scrollTop=0;var e=d();e&&(s.style.height=e+"px")}else{s.setAttribute("rows",1),p||(s.style.minHeight="0",p=i.prop("clientHeight"),s.style.minHeight=null);var t=Math.max(u,Math.round(s.scrollHeight/p));s.setAttribute("rows",t)}i.removeClass("md-no-flex"),l.style.height="auto"}function d(){var e=s.scrollHeight-s.offsetHeight;return s.offsetHeight+(e>0?e:0)}function c(e){s.scrollTop=0;var t=s.scrollHeight-s.offsetHeight,n=s.offsetHeight+t;s.style.height=n+"px"}if(!t.isDefined(i.attr("md-no-autogrow"))){var s=i[0],l=m.element[0],u=NaN,p=null;s.hasAttribute("rows")&&(u=parseInt(s.getAttribute("rows")));var f=e.debounce(a,1);if(h?(h.$formatters.push(o),h.$viewChangeListeners.push(o)):f(),i.on("keydown input",f),isNaN(u)&&(i.attr("rows","1"),i.on("scroll",c)),t.element(n).on("resize",f),r.$on("$destroy",function(){t.element(n).off("resize",f)}),t.isDefined(i.attr("md-detect-hidden"))){var g=function(){var e=!1;return function(){var t=0===s.offsetHeight;t===!1&&e===!0&&a(),e=t}}();r.$watch(function(){return e.nextTick(g,!1),!0})}}}var m=d[0],u=!!d[1],h=d[1]||e.fakeNgModel(),p=t.isDefined(a.readonly);if(m){if(m.input)throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");m.input=i,m.label||o.expect(i,"aria-label",i.attr("placeholder")),i.addClass("md-input"),i.attr("id")||i.attr("id","input_"+e.nextUid()),"textarea"===i[0].tagName.toLowerCase()&&l(),u||s();var f=m.isErrorGetter||function(){return h.$invalid&&h.$touched};r.$watch(f,m.setInvalid),h.$parsers.push(c),h.$formatters.push(c),i.on("input",s),p||i.on("focus",function(e){m.setFocused(!0)}).on("blur",function(e){m.setFocused(!1),s()}),r.$on("$destroy",function(){m.setFocused(!1),m.setHasValue(!1),m.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:r}}function r(e){function n(n,o,r,i){function a(e){return l.text(String(o.val()||e||"").length+"/"+d),e}var d,c=i[0],s=i[1],l=t.element('<div class="md-char-counter">'),m=t.element(s.element[0].querySelector("[md-maxlength]"));r.$set("ngTrim","false");var u=["ng-messages","data-ng-messages","x-ng-messages","[ng-messages]","[data-ng-messages]","[x-ng-messages]"],h=s.element[0].querySelector(u.join(","));h?t.element(h).prepend(l):m.after(l),c.$formatters.push(a),c.$viewChangeListeners.push(a),o.on("input keydown keyup",function(){a()}),n.$watch(r.mdMaxlength,function(n){d=n,t.isNumber(n)&&n>0?(l.parent().length||e.enter(l,s.element,m),a()):e.leave(l)}),c.$validators["md-maxlength"]=function(e,n){return!t.isNumber(d)||0>d?!0:(e||o.val()||n||"").length<=d}}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:n}}function i(e){function n(e,n,o,r){if(r){var i=r.element.find("label"),a=t.isDefined(r.element.attr("md-no-float"));if(i&&i.length||a)return void r.setHasPlaceholder(!0);var d=o.placeholder;if(n.removeAttr("placeholder"),r.input&&"MD-SELECT"!=r.input[0].nodeName){var c='<label ng-click="delegateClick()">'+d+"</label>";r.element.addClass("md-icon-float"),r.element.prepend(c)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:n}}function a(){function e(e,t,n,o){o&&(o.setHasMessages(!0),e.$on("$destroy",function(){o.setHasMessages(!1)}))}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}t.module("material.components.input",["material.core"]).directive("mdInputContainer",e).directive("label",n).directive("input",o).directive("textarea",o).directive("mdMaxlength",r).directive("placeholder",i).directive("ngMessages",a),e.$inject=["$mdTheming","$parse"],o.$inject=["$mdUtil","$window","$mdAria"],r.$inject=["$animate"],i.$inject=["$log"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,r){var i=["md-checkbox","md-switch"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function c(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var r=a.find("p")[0];if(!r)return;e.setAttribute("aria-label","Toggle "+r.textContent)}}function s(n){var o;if("div"==n)o=t.element('<div class="md-no-style md-list-item-inner">'),o.append(a.contents()),a.addClass("md-proxy-focus");else{o=t.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>');var r=["ng-click","aria-label","ng-disabled"];t.forEach(r,function(e){a[0].hasAttribute(e)&&(o[0].setAttribute(e,a[0].getAttribute(e)),a[0].removeAttribute(e))}),o.children().eq(0).append(a.contents())}if(a[0].setAttribute("tabindex","-1"),a.append(o),p&&p.hasAttribute("ng-click")){e.expect(p,"aria-label");var i=t.element('<md-button class="md-secondary-container md-icon-button">');i.attr("ng-click",p.getAttribute("ng-click")),p.removeAttribute("ng-click"),p.setAttribute("tabindex","-1"),p.classList.remove("md-secondary"),i.append(p),p=i[0]}p&&(p.hasAttribute("ng-click")||d.ngClick&&l(p))&&(a.addClass("md-with-secondary"),a.append(p))}function l(e){return-1!=i.indexOf(e.nodeName.toLowerCase())}function m(e,a,d,c){function s(){var e=a.children();e.length&&!e[0].hasAttribute("ng-click")&&t.forEach(i,function(e){t.forEach(u.querySelectorAll(e),function(e){m.push(e)})})}function l(){(m.length||h)&&(a.addClass("md-clickable"),c.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))))}var m=[],u=a[0].firstElementChild,h=u&&u.hasAttribute("ng-click");s(),l(),a.hasClass("md-proxy-focus")&&m.length&&t.forEach(m,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,r(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})}),h||m.length||u&&u.addEventListener("keypress",function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&u&&(u.click(),e.preventDefault(),e.stopPropagation())}}),a.off("click"),a.off("keypress"),m.length&&u&&a.children().eq(0).on("click",function(e){var n=o.getClosest(e.target,"BUTTON");!n&&u.contains(e.target)&&t.forEach(m,function(n){e.target===n||n.contains(e.target)||t.element(n).triggerHandler("click")})})}var u,h,p=a[0].querySelector(".md-secondary");if(a[0].setAttribute("role","listitem"),d.ngClick)s("button");else{for(var f,g=0;f=i[g];++g)if(h=a[0].querySelector(f)){u=!0;break}u?s("div"):a[0].querySelector("md-button")||a.addClass("md-no-proxy")}return c(),m}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var r=this;r.attachRipple=o}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n),e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"]}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.menu"])}(),function(){function e(e,o,r){function i(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(i,a,h){function p(){h.$observe("value",function(e){var t=d(e);a.attr("aria-valuenow",t),v()==m&&b(t)}),h.$observe("mdMode",function(e){switch(e){case m:case u:y.removeClass("ng-hide"),y.removeClass(M),y.addClass(M="md-mode-"+e);break;default:y.removeClass(M),y.addClass("ng-hide"),M=n}})}function f(){$.css(A({transform:o.supplant("scale( {0} )",[E()])}))}function g(){if(t.isUndefined(h.mdMode)){var e=t.isDefined(h.value),n=e?m:u,i="Auto-adding the missing md-mode='{0}' to the ProgressCircular element";r.debug(o.supplant(i,[n])),a.attr("md-mode",n),h.mdMode=n}}function b(e){if(v()){C=C||t.element(a[0].querySelector(".md-left > .md-half-circle")),T=T||t.element(a[0].querySelector(".md-right > .md-half-circle")),k=k||t.element(a[0].querySelector(".md-gap"));var n=c({borderBottomColor:50>=e?"transparent !important":"",transition:50>=e?"":"borderBottomColor 0.1s linear"}),r=c({transition:50>=e?"transform 0.1s linear":"",transform:o.supplant("rotate({0}deg)",[50>=e?135:(e-50)/50*180+135])}),i=c({transition:e>=50?"transform 0.1s linear":"",transform:o.supplant("rotate({0}deg)",[e>=50?45:e/50*180-135])});C.css(A(r)),T.css(A(i)),k.css(A(n))}}function E(){if(!h.mdDiameter)return l;var e=/([0-9]*)%/.exec(h.mdDiameter),t=Math.max(0,e&&e[1]/100||parseFloat(h.mdDiameter));return t>1?t/s:t}function v(){var e=(h.mdMode||"").trim();if(e)switch(e){case m:case u:break;default:e=n}return e}e(a);var M,$=a,y=t.element(a.children()[0]),A=o.dom.animator.toCss;a.attr("md-mode",v()),f(),g(),p();var C,T,k}function d(e){return Math.max(0,Math.min(e||0,100))}function c(e){for(var t in e)e.hasOwnProperty(t)&&""==e[t]&&delete e[t];return e}var s=100,l=.5,m="determinate",u="indeterminate";return{restrict:"E",scope:!0,template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:i}}t.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$mdTheming","$mdUtil","$log"]}(),function(){function e(e,n,o,r){function i(i,a,d,c){function s(){a.hasClass("md-focused")||a.addClass("md-focused")}function l(o){var r=o.which||o.keyCode;switch(r){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),s();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),s();break;case n.KEY_CODE.ENTER:var i=t.element(e.getClosest(a[0],"form"));i.length>0&&i.triggerHandler("submit")}}o(a);var m=c[0],u=c[1]||e.fakeNgModel();m.init(u),i.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){i.mouseActive=!0,r(function(){i.mouseActive=!1},100)}).on("focus",function(){i.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return c(this.$element,1)},selectPrevious:function(){return c(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function c(n,o){var r=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(r.count()){var i=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=r[0>o?"previous":"next"](a,i)||r.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:i}}}function n(e,t,n){function o(o,i,a,d){function c(e){if(!d)throw"RadioGroupController not found.";d.add(l),a.$observe("value",l),i.on("click",s).on("$destroy",function(){d.remove(l)})}function s(e){i[0].hasAttribute("disabled")||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function l(){function e(e){"MD-RADIO-GROUP"!=i.parent()[0].nodeName&&i.parent()[e?"addClass":"removeClass"](r)}var t=d.getViewValue()==a.value;t!==u&&(u=t,i.attr("aria-checked",t),t?(e(!0),i.addClass(r),d.setActiveDescendant(i.attr("id"))):(e(!1),i.removeClass(r)))}function m(n,o){function r(){return a.id||"radio_"+t.nextUid()}o.ariaId=r(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(i),m(i,o),c()}var r="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n),e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),function(){function e(e,o,r){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(i,a,u){function h(){u.$observe("value",function(e){var t=d(e);a.attr("aria-valuenow",t),f()!=m&&g(M,t)}),u.$observe("mdBufferValue",function(e){g(v,d(e))}),u.$observe("mdMode",function(e){switch(e){case m:case l:case c:case s:$.removeClass("ng-hide "+b),$.addClass(b="md-mode-"+e);break;default:$.removeClass(b),$.addClass("ng-hide"),b=n}})}function p(){if(t.isUndefined(u.mdMode)){var e=t.isDefined(u.value),n=e?c:s,i="Auto-adding the missing md-mode='{0}' to the ProgressLinear element";r.debug(o.supplant(i,[n])),a.attr("md-mode",n),u.mdMode=n}}function f(){var e=(u.mdMode||"").trim();if(e)switch(e){case c:case s:case l:case m:break;default:e=n}return e}function g(e,n){if(f()){var r=o.supplant("translateX({0}%) scale({1},1)",[(n-100)/2,n/100]),i=E({transform:r});t.element(e).css(i)}}e(a);var b,E=o.dom.animator.toCss,v=t.element(a[0].querySelector(".md-bar1")),M=t.element(a[0].querySelector(".md-bar2")),$=t.element(a[0].querySelector(".md-container"));a.attr("md-mode",f()),p(),h()}function d(e){return Math.max(0,Math.min(e||0,100))}var c="determinate",s="indeterminate",l="buffer",m="query";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$mdTheming","$mdUtil","$log"]}(),function(){function e(e,o,r,i,a,d){function c(c,s){var l=t.element("<md-select-value><span></span></md-select-value>");if(l.append('<span class="md-select-icon" aria-hidden="true"></span>'),l.addClass("md-select-value"),l[0].hasAttribute("id")||l.attr("id","select_value_label_"+o.nextUid()),c.find("md-content").length||c.append(t.element("<md-content>").append(c.contents())),s.mdOnOpen&&(c.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="{{progressMode}}" ng-hide="$$loadingAsyncDone"></md-progress-circular></div>')),c.find("md-option").attr("ng-show","$$loadingAsyncDone")),s.name){var m=t.element('<select class="md-visually-hidden">');m.attr({name:"."+s.name,"ng-model":s.ngModel,"aria-hidden":"true",tabindex:"-1"});var u=c.find("md-option");t.forEach(u,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),m.append(n)}),c.parent().append(m)}var h=t.isDefined(s.multiple)?"multiple":"",p='<div class="md-select-menu-container"><md-select-menu {0}>{1}</md-select-menu></div>';return p=o.supplant(p,[h,c.html()]),c.empty().append(l),s.tabindex=s.tabindex||"0",function(c,s,l,m){function u(){var e=s.attr("placeholder");!e&&M&&M.label&&(e=M.label.text()),i.expect(s,"aria-label",e)}function h(){w&&(N=N||w.find("md-select-menu").controller("mdSelectMenu"),$.setLabelText(N.selectedLabels()))}function f(){M&&M.setHasValue(N.selectedLabels().length>0||(s[0].validity||{}).badInput)}function g(){w=t.element(p);var e=w.find("md-select-menu");if(e.data("$ngModelController",y),e.data("$mdSelectController",$),x=c.$new(),r.inherit(w,s),s.attr("md-container-class")){var n=w[0].getAttribute("class")+" "+s.attr("md-container-class");w[0].setAttribute("class",n)}w=a(w)(x),N=w.find("md-select-menu").controller("mdSelectMenu")}function b(e){var n=[32,13,38,40];if(-1!=n.indexOf(e.keyCode))e.preventDefault(),E(e);else if(e.keyCode<=90&&e.keyCode>=31){e.preventDefault();var o=N.optNodeForKeyboardSearch(e);if(!o)return;var r=t.element(o).controller("mdOption");N.isMultiple||N.deselect(Object.keys(N.selected)[0]),N.select(r.hashKey,r.value),N.refreshViewValue(),y.$render()}}function E(){x.isOpen=!0,e.show({scope:x,preserveScope:!0,skipCompile:!0,element:w,target:s[0],hasBackdrop:!0,loadingAsync:l.mdOnOpen?c.$eval(l.mdOnOpen)||!0:!1}).then(function(){x.isOpen=!1})}var v,M=m[0],$=m[1],y=m[2],A=m[3],C=s.find("md-select-value"),T=t.isDefined(l.readonly);if(M){var k=M.isErrorGetter||function(){return y.$invalid&&y.$touched};if(M.input)throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");M.input=s,M.label||i.expect(s,"aria-label",s.attr("placeholder")),c.$watch(k,M.setInvalid)}var w,x,N;if(g(),r(s),l.name&&A){var _=s.parent()[0].querySelector('select[name=".'+l.name+'"]'),H=t.element(_).controller();H&&A.$removeControl(H)}A&&o.nextTick(function(){A.$setPristine()});var S=y.$render;y.$render=function(){S(),h(),f()},l.$observe("placeholder",y.$render),$.setLabelText=function(e){$.setIsPlaceholder(!e);var t=l.placeholder||(M&&M.label?M.label.text():"");e=e||t||"";var n=C.children().eq(0);n.text(e)},$.setIsPlaceholder=function(e){e?(C.addClass("md-select-placeholder"),M&&M.label&&M.label.addClass("md-placeholder md-static")):(C.removeClass("md-select-placeholder"),M&&M.label&&M.label.removeClass("md-placeholder"))},T||s.on("focus",function(e){M&&M.element.hasClass("md-input-has-value")&&M.setFocused(!0)}).on("blur",function(e){M&&M.setFocused(!1),f()}),$.triggerClose=function(){d(l.mdOnClose)(c)},c.$$postDigest(function(){u(),h()});var D;l.$observe("ngMultiple",function(e){D&&D();var t=d(e);D=c.$watch(function(){return t(c)},function(e,t){(e!==n||t!==n)&&(e?s.attr("multiple","multiple"):s.removeAttr("multiple"),w&&(N.setMultiple(e),S=y.$render,y.$render=function(){S(),h()},N.refreshViewValue(),y.$render()))})}),l.$observe("disabled",function(e){t.isString(e)&&(e=!0),(v===n||v!==e)&&(v=e,e?(s.attr({tabindex:-1,"aria-disabled":"true"}),s.off("click",E),s.off("keydown",b)):(s.attr({tabindex:l.tabindex,"aria-disabled":"false"}),s.on("click",E),s.on("keydown",b)))}),l.disabled||l.ngDisabled||(s.attr({tabindex:l.tabindex,"aria-disabled":"false"}),s.on("click",E),s.on("keydown",b));var I={role:"combobox","aria-expanded":"false"};s[0].hasAttribute("id")||(I.id="select_"+o.nextUid()),s.attr(I),c.$on("$destroy",function(){e.destroy()["finally"](function(){w&&w.remove(),M&&(M.setFocused(!1),M.setHasValue(!1),M.input=null)})})}}return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:c,controller:function(){}}}function o(e,o,r){function i(e,n,i,a){function d(){n.attr({id:"select_menu_"+o.nextUid(),role:"listbox","aria-multiselectable":l.isMultiple?"true":"false"})}function c(e){(13==e.keyCode||32==e.keyCode)&&s(e)}function s(n){var r=o.getClosest(n.target,"md-option"),i=r&&t.element(r).data("$mdOptionController");if(r&&i){if(r.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=l.hashGetter(i.value),d=t.isDefined(l.selected[a]);e.$apply(function(){l.isMultiple?d?l.deselect(a):l.select(a,i.value):d||(l.deselect(Object.keys(l.selected)[0]),l.select(a,i.value)),l.refreshViewValue()})}}var l=a[0],m=a[1];r(n),n.on("click",s),n.on("keypress",c),m&&l.init(m),d()}function a(r,i,a){function d(){var e=l.ngModel.$modelValue||l.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(l.selected),o=e.map(l.hashGetter),r=n.filter(function(e){return-1===o.indexOf(e)});r.forEach(l.deselect),o.forEach(function(t,n){l.select(t,e[n])})}}function s(){var e=l.ngModel.$viewValue||l.ngModel.$modelValue;Object.keys(l.selected).forEach(l.deselect),l.select(l.hashGetter(e),e)}var l=this;l.isMultiple=t.isDefined(i.multiple),l.selected={},l.options={},r.$watch(function(){return l.options},function(){l.ngModel.$render()},!0);var m;l.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=l.ngModel;l.isMultiple=e,m&&m(),l.isMultiple?(o.$validators["md-multiple"]=n,o.$render=d,r.$watchCollection(i.ngModel,function(e){n(e)&&d(e),l.ngModel.$setPristine()})):(delete o.$validators["md-multiple"],o.$render=s)};var u,h,p,f="",g=300;l.optNodeForKeyboardSearch=function(e){u&&clearTimeout(u),u=setTimeout(function(){u=n,f="",p=n,h=n},g),f+=String.fromCharCode(e.keyCode);var o=new RegExp("^"+f,"i");h||(h=a.find("md-option"),p=new Array(h.length),t.forEach(h,function(e,t){p[t]=e.textContent.trim()}));for(var r=0;r<p.length;++r)if(o.test(p[r]))return h[r]},l.init=function(n){if(l.ngModel=n,n.$options&&n.$options.trackBy){var o={},i=e(n.$options.trackBy);l.hashGetter=function(e,t){return o.$value=e,i(t||r,o)}}else l.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};l.setMultiple(l.isMultiple)},l.selectedLabels=function(){var e=o.nodesToArray(a[0].querySelectorAll("md-option[selected]"));return e.length?e.map(function(e){return e.textContent}).join(", "):""},l.select=function(e,t){var n=l.options[e];n&&n.setSelected(!0),l.selected[e]=t},l.deselect=function(e){var t=l.options[e];t&&t.setSelected(!1),delete l.selected[e]},l.addOption=function(e,n){if(t.isDefined(l.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');l.options[e]=n,t.isDefined(l.selected[e])&&(l.select(e,n.value),l.refreshViewValue())},l.removeOption=function(e){delete l.options[e]},l.refreshViewValue=function(){var e,t=[];for(var n in l.selected)(e=l.options[n])?t.push(e.value):t.push(l.selected[n]);l.ngModel.$setViewValue(l.isMultiple?t:t[0])}}return a.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu","?ngModel"],controller:a,link:{pre:i}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),r}function r(o,r,i,a){function d(e,t){var n=l.hashGetter(t,o),r=l.hashGetter(e,o);s.hashKey=r,s.value=e,l.removeOption(n,s),l.addOption(r,s)}function c(){var e={role:"option","aria-selected":"false"};r[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),r.attr(e)}var s=a[0],l=a[1];t.isDefined(i.ngValue)?o.$watch(i.ngValue,d):t.isDefined(i.value)?d(i.value):o.$watch(function(){return r.text()},d),i.$observe("disabled",function(e){e?r.attr("tabindex","-1"):r.attr("tabindex","0")}),o.$$postDigest(function(){i.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(l.isMultiple||l.deselect(Object.keys(l.selected)[0]),l.select(s.hashKey,s.value)):l.deselect(s.hashKey),l.refreshViewValue(),l.ngModel.$render())})}),e.attach(o,r),c(),o.$on("$destroy",function(){l.removeOption(s.hashKey,s)})}function i(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return i.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:i,compile:o}}function i(){function e(e,n){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),n.label&&o.text(n.label)}return{restrict:"E",compile:e}}function a(e){function o(e,o,c,s,l,m,u,h){function p(e,t,n){function o(){return u(t,{addClass:"md-leave"}).start()}function r(){g(n.target,!1),t.attr("opacity",0),t.removeClass("md-active"),E(t,n),b(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?r():o().then(r)}function f(r,i,a){function d(e,t,n){return n.parent.append(t),l(function(e,n){try{u(t,{removeClass:"md-leave",duration:0}).start().then(p).then(e);
}catch(o){n(o)}})}function p(){return l(function(e){if(a.isRemoved)return l.reject(!1);var t=v(r,i,a);t.container.element.css($.toCss(t.container.styles)),t.dropDown.element.css($.toCss(t.dropDown.styles)),m(function(){i.addClass("md-active"),t.dropDown.element.css($.toCss({transform:""})),b(a.focusedNode),e()})})}function f(e,t,n){return n.disableParentScroll&&!c.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=c.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=c.createBackdrop(e,"md-select-backdrop md-click-catcher"),h.enter(n.backdrop,n.parent,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function b(e){e&&!e.hasAttribute("disabled")&&e.focus()}function E(e,n){var o=i.find("md-select-menu");if(!n.target)throw new Error(c.supplant(M,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:i.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function y(){var e=function(e,t,n){return function(){if(!n.isRemoved){var o=v(e,t,n),r=o.container,i=o.dropDown;r.element.css($.toCss(r.styles)),i.element.css($.toCss(i.styles))}}}(r,i,a),n=t.element(s);return n.on("resize",e),n.on("orientationchange",e),function(){n.off("resize",e),n.off("orientationchange",e)}}function A(){a.loadingAsync&&!a.isRemoved&&(r.$$loadingAsyncDone=!1,r.progressMode="indeterminate",l.when(a.loadingAsync).then(function(){r.$$loadingAsyncDone=!0,r.progressMode="",delete a.loadingAsync}).then(function(){m(p)}))}function C(){function t(t){t.preventDefault(),t.stopPropagation(),a.restoreFocus=!1,c.nextTick(e.hide,!0)}function r(t){var n=o.KEY_CODE;switch(t.keyCode){case n.UP_ARROW:return l();case n.DOWN_ARROW:return s();case n.SPACE:case n.ENTER:var r=c.getClosest(t.target,"md-option");r&&(u.triggerHandler({type:"click",target:r}),t.preventDefault()),m(t);break;case n.TAB:case n.ESCAPE:t.preventDefault(),a.restoreFocus=!0,c.nextTick(e.hide,!0);break;default:if(t.keyCode>=31&&t.keyCode<=90){var i=u.controller("mdSelectMenu").optNodeForKeyboardSearch(t);a.focusedNode=i||a.focusedNode,i&&i.focus()}}}function d(e){var t,o=c.nodesToArray(a.optionNodes),r=o.indexOf(a.focusedNode);do-1===r?r=0:"next"===e&&r<o.length-1?r++:"prev"===e&&r>0&&r--,t=o[r],t.hasAttribute("disabled")&&(t=n);while(!t&&r<o.length-1&&r>0);t&&t.focus(),a.focusedNode=t}function s(){d("next")}function l(){d("prev")}function m(t){function n(){var e=!1;if(t&&t.currentTarget.children.length>0){var n=t.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var r=t.pageX-t.currentTarget.getBoundingClientRect().left;r>n.querySelector("md-option").offsetWidth&&(e=!0)}}return e}t&&"mouseup"==t.type&&t.currentTarget!=u[0]||n()||h.isMultiple||(a.restoreFocus=!0,c.nextTick(function(){e.hide(h.ngModel.$viewValue)},!0))}if(!a.isRemoved){var u=a.selectEl,h=u.controller("mdSelectMenu")||{};return i.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",t),u.on("keydown",r),u.on("mouseup",m),function(){a.backdrop&&a.backdrop.off("click",t),u.off("keydown",r),u.off("mouseup",m),i.removeClass("md-clickable"),a.isRemoved=!0}}}return A(),E(r,a),g(a.target),a.hideBackdrop=f(r,i,a),d(r,i,a).then(function(e){return a.alreadyOpen=!0,a.cleanupInteraction=C(),a.cleanupResizing=y(),e},a.hideBackdrop)}function g(e,n){n=t.isUndefined(n)?"true":"false",e&&e.attr("aria-expanded",n)}function b(e){var t=e.selectEl.controller("mdSelect");if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n.selectedLabels()),t.triggerClose()}}function E(e,t){e[0].parentNode===t.parent[0]&&t.parent[0].removeChild(e[0])}function v(e,n,o){var l,m,u=n[0],h=o.target[0].firstElementChild,p=o.parent[0],f=o.selectEl[0],g=o.contentEl[0],b=p.getBoundingClientRect(),E=h.getBoundingClientRect(),v=!1,M={left:b.left+d,top:d,bottom:b.height-d,right:b.width-d-(c.floatingScrollbars()?16:0)},$={top:E.top-M.top,left:E.left-M.left,right:M.right-(E.left+E.width),bottom:M.bottom-(E.top+E.height)},y=b.width-2*d,A=g.scrollHeight>g.offsetHeight,C=f.querySelector("md-option[selected]"),l=f.getElementsByTagName("md-option"),T=f.getElementsByTagName("md-optgroup"),k=r(o.loadingAsync);m=k?g.firstElementChild||g:C?C:T.length?T[0]:l.length?l[0]:g.firstElementChild||g,g.offsetWidth>y&&(g.style["max-width"]=y+"px"),v&&(g.style["min-width"]=E.width+"px"),A&&f.classList.add("md-overflow");var w=m;"MD-OPTGROUP"===(w.tagName||"").toUpperCase()&&(w=l[0]||g.firstElementChild||g,m=w),o.focusedNode=w;var x=f.getBoundingClientRect(),N=a(m);if(m){var _=s.getComputedStyle(m);N.paddingLeft=parseInt(_.paddingLeft,10)||0,N.paddingRight=parseInt(_.paddingRight,10)||0}if(A){var H=g.offsetHeight/2;g.scrollTop=N.top+N.height/2-H,$.top<H?g.scrollTop=Math.min(N.top,g.scrollTop+H-$.top):$.bottom<H&&(g.scrollTop=Math.max(N.top+N.height-x.height,g.scrollTop-H+$.bottom))}var S,D,I,O;v?(S=E.left,D=E.top+E.height,I="50% 0",D+x.height>M.bottom&&(D=E.top-x.height,I="50% 100%")):(S=E.left+N.left-N.paddingLeft+2,D=Math.floor(E.top+E.height/2-N.height/2-N.top+g.scrollTop)+2,I=N.left+E.width/2+"px "+(N.top+N.height/2-g.scrollTop)+"px 0px",O=E.width+N.paddingLeft+N.paddingRight);var R=u.getBoundingClientRect(),L=Math.round(100*Math.min(E.width/x.width,1))/100,P=Math.round(100*Math.min(E.height/x.height,1))/100;return{container:{element:t.element(u),styles:{left:Math.floor(i(M.left,S,M.right-R.width)),top:Math.floor(i(M.top,D,M.bottom-R.height)),"min-width":O}},dropDown:{element:t.element(f),styles:{transformOrigin:I,transform:o.alreadyOpen?"":c.supplant("scale({0},{1})",[L,P])}}}}var M="$mdSelect.show() expected a target element in options.target but got '{0}'!",$=c.dom.animator;return{parent:"body",themable:!0,onShow:f,onRemove:p,hasBackdrop:!0,disableParentScroll:!0}}function r(e){return e&&t.isFunction(e.then)}function i(e,t,n){return Math.max(e,Math.min(t,n))}function a(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}return o.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate"],e("$mdSelect").setDefaults({methods:["target"],options:o})}var d=8,c=0;t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",e).directive("mdSelectMenu",o).directive("mdOption",r).directive("mdOptgroup",i).provider("$mdSelect",a),e.$inject=["$mdSelect","$mdUtil","$mdTheming","$mdAria","$compile","$parse"],o.$inject=["$parse","$mdUtil","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],a.$inject=["$$interimElementProvider"]}(),function(){function e(e,n){return function(o){function r(){return e.when(o).then(function(e){return d=e,e})}var i,a="SideNav '"+o+"' is not available!",d=e.get(o);return d||e.notFoundError(o),i={isOpen:function(){return d&&d.isOpen()},isLockedOpen:function(){return d&&d.isLockedOpen()},toggle:function(){return d?d.toggle():n.reject(a)},open:function(){return d?d.open():n.reject(a)},close:function(){return d?d.close():n.reject(a)},then:function(e){var o=d?n.when(d):r();return o.then(e||t.noop)}}}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function r(e,o,r,i,a,d,c,s,l,m){function u(d,u,h,p){function f(e,t){d.isLockedOpen=e,e===t?u.toggleClass("md-locked-open",!!e):a[e?"addClass":"removeClass"](u,"md-locked-open"),k.toggleClass("md-locked-open",!!e)}function g(e){var t=o.findFocusTarget(u)||o.findFocusTarget(u,"[md-sidenav-focus]")||u,n=u.parent();return n[e?"on":"off"]("keydown",v),k[e?"on":"off"]("click",M),e&&(y=m[0].activeElement),b(e),A=l.all([e?a.enter(k,n):a.leave(k),a[e?"removeClass":"addClass"](u,"md-closed")]).then(function(){d.isOpen&&t&&t.focus()})}function b(e){var o=u.parent();e&&!$?($=o.css("overflow"),o.css("overflow","hidden")):t.isDefined($)&&(o.css("overflow",$),$=n)}function E(e){return d.isOpen==e?l.when(!0):l(function(t){d.isOpen=e,o.nextTick(function(){A.then(function(e){d.isOpen||(y&&y.focus(),y=null),t(e)})})})}function v(e){var t=e.keyCode===r.KEY_CODE.ESCAPE;return t?M(e):l.when(!0)}function M(e){return e.preventDefault(),e.stopPropagation(),p.close()}var $,y=null,A=l.when(!0),C=c(h.mdIsLockedOpen),T=function(){return C(d.$parent,{$media:function(t){return s.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})},k=o.createBackdrop(d,"md-sidenav-backdrop md-opaque ng-enter");i.inherit(k,u),u.on("$destroy",function(){k.remove(),p.destroy()}),d.$on("$destroy",function(){k.remove()}),d.$watch(T,f),d.$watch("isOpen",g),p.$toggleOpen=E}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u}}}function i(e,t,n,o,r){var i=this;i.isOpen=function(){return!!e.isOpen},i.isLockedOpen=function(){return!!e.isLockedOpen},i.open=function(){return i.$toggleOpen(!0)},i.close=function(){return i.$toggleOpen(!1)},i.toggle=function(){return i.$toggleOpen(!e.isOpen)},i.$toggleOpen=function(t){return r.when(e.isOpen=t)},i.destroy=o.register(i,n.mdComponentId)}t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",r).directive("mdSidenavFocus",o).controller("$mdSidenavController",i),e.$inject=["$mdComponentRegistry","$q"],r.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$animate","$compile","$parse","$log","$q","$document"],i.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),function(){function e(e,n,o,r,i,a,d,c,s){function l(e,t){return e.attr({tabIndex:0,role:"slider"}),o.expect(e,"aria-label"),m}function m(o,l,m,u){function h(){v(),A(),E()}function p(e){K=parseFloat(e),l.attr("aria-valuemin",e),h()}function f(e){G=parseFloat(e),l.attr("aria-valuemax",e),h()}function g(e){X=parseFloat(e),E()}function b(e){l.attr("aria-disabled",!!e)}function E(){if(t.isDefined(m.mdDiscrete)&&!t.isUndefined(X)){if(0>=X){var e="Slider step value must be greater than zero when in discrete mode";throw s.error(e),new Error(e)}var o=Math.floor((G-K)/X);if(!Q){Q=t.element('<canvas style="position:absolute;">'),j.append(Q);var r=n.getComputedStyle(j[0]);Z=Q[0].getContext("2d"),Z.fillStyle=r.backgroundColor||"black"}var i=M();Q[0].width=i.width,Q[0].height=i.height;for(var a,d=0;o>=d;d++)a=Math.floor(i.width*(d/o)),Z.fillRect(a-1,0,2,i.height)}}function v(){J=U[0].getBoundingClientRect()}function M(){return V(),J}function $(e){if(!l[0].hasAttribute("disabled")){var t;e.keyCode===i.KEY_CODE.LEFT_ARROW?t=-X:e.keyCode===i.KEY_CODE.RIGHT_ARROW&&(t=X),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){y(u.$viewValue+t)}))}}function y(e){u.$setViewValue(C(T(e)))}function A(){isNaN(u.$viewValue)&&(u.$viewValue=u.$modelValue);var e=(u.$viewValue-K)/(G-K);o.modelValue=u.$viewValue,l.attr("aria-valuenow",u.$viewValue),k(e),B.text(u.$viewValue)}function C(e){return t.isNumber(e)?Math.max(K,Math.min(G,e)):void 0}function T(e){if(t.isNumber(e)){var n=Math.round(e/X)*X;return Math.round(1e3*n)/1e3}}function k(e){var t=100*e+"%";q.css("width",t),z.css("left",t),l.toggleClass("md-min",0===e),l.toggleClass("md-max",1===e)}function w(e){if(!P()){l.addClass("md-active"),l[0].focus(),v();var t=R(O(e.pointer.x)),n=C(T(t));o.$apply(function(){y(n),k(L(n))})}}function x(e){if(!P()){l.removeClass("md-dragging md-active");var t=R(O(e.pointer.x)),n=C(T(t));o.$apply(function(){y(n),A()})}}function N(e){P()||(ee=!0,e.stopPropagation(),l.addClass("md-dragging"),S(e))}function _(e){ee&&(e.stopPropagation(),S(e))}function H(e){ee&&(e.stopPropagation(),ee=!1)}function S(e){te?I(e.pointer.x):D(e.pointer.x)}function D(e){o.$evalAsync(function(){y(R(O(e)))})}function I(e){var t=R(O(e)),n=C(T(t));k(O(e)),B.text(n)}function O(e){return Math.max(0,Math.min(1,(e-J.left)/J.width))}function R(e){return K+e*(G-K)}function L(e){return(e-K)/(G-K)}a(l),u=u||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var P=t.noop;null!=m.disabled?P=function(){return!0}:m.ngDisabled&&(P=t.bind(null,c(m.ngDisabled),o.$parent));var F=t.element(l[0].querySelector(".md-thumb")),B=t.element(l[0].querySelector(".md-thumb-text")),z=F.parent(),U=t.element(l[0].querySelector(".md-track-container")),q=t.element(l[0].querySelector(".md-track-fill")),j=t.element(l[0].querySelector(".md-track-ticks")),V=r.throttle(v,5e3);t.isDefined(m.min)?m.$observe("min",p):p(0),t.isDefined(m.max)?m.$observe("max",f):f(100),t.isDefined(m.step)?m.$observe("step",g):g(1);var W=t.noop;m.ngDisabled&&(W=o.$parent.$watch(m.ngDisabled,b)),d.register(l,"drag"),l.on("keydown",$).on("$md.pressdown",w).on("$md.pressup",x).on("$md.dragstart",N).on("$md.drag",_).on("$md.dragend",H),setTimeout(h,0);var Y=e.throttle(h);t.element(n).on("resize",Y),o.$on("$destroy",function(){t.element(n).off("resize",Y),W()}),u.$render=A,u.$viewChangeListeners.push(A),u.$formatters.push(C),u.$formatters.push(T);var K,G,X,Q,Z,J={};v();var ee=!1,te=t.isDefined(m.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-slider-wrapper"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div>',compile:l}}t.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log"]}(),function(){function e(e,o,r,i){function a(e){function t(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),i.nextTick(function(){h.prepend(n.clone)}),p(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),p()}}function a(){f.items.forEach(d),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=h.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}l(e)}function d(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==h[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px"),i.floatingScrollbars()&&e.clone.css("margin-right","0")}function s(){var e=h.prop("scrollTop"),t=e>(s.prevScrollTop||0);if(s.prevScrollTop=e,0===e)return void l(null);if(t){if(f.next&&f.next.top<=e)return void l(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void l(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function l(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(e,t){e&&(null===t||t===n?e.translateY&&(e.translateY=null,e.clone.css(o.CSS.TRANSFORM,"")):(e.translateY=t,e.clone.css(o.CSS.TRANSFORM,"translate3d("+e.left+"px,"+t+"px,0)")))}var h=e.$element,p=r.throttle(a);c(h),h.on("$scrollstart",p),h.on("$scroll",s);var f;return f={prev:null,current:null,next:null,items:[],add:t,refreshElements:a}}function d(n){var o,r=t.element("<div>");e[0].body.appendChild(r[0]);for(var i=["sticky","-webkit-sticky"],a=0;a<i.length;++a)if(r.css({position:i[a],top:0,"z-index":2}),r.css("position")==i[a]){o=i[a];break}return r.remove(),o}function c(e){function t(){+i.now()-o>a?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),r.throttle(t))}var n,o,a=200;e.on("scroll touchmove",function(){n||(n=!0,r.throttle(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),o=+i.now()})}var s=d();return function(e,t,n){var o=t.controller("mdContent");if(o)if(s)t.css({position:s,top:0,"z-index":2});else{var r=o.$element.data("$$sticky");r||(r=a(o),o.$element.data("$$sticky",r));var i=r.add(t,n||t.clone());e.$on("$destroy",i)}}}t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$$rAF","$mdUtil"]}(),function(){function e(e,n,o,r){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader">  <div class="md-subheader-inner">    <span class="md-subheader-content"></span>  </div></div>',link:function(i,a,d,c,s){function l(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(a);var m=a[0].outerHTML;s(i,function(e){l(a).append(e)}),a.hasClass("md-no-sticky")||s(i,function(t){var o='<div class="md-subheader-wrapper">'+m+"</div>",d=n(o)(i);e(i,a,d),r.nextTick(function(){l(d).append(t)})})}}}t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil"]}(),function(){function e(e){function t(e){function t(t,r,i){var a=e(i[n]);r.on(o,function(e){t.$apply(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight"))}(),function(){function e(e,n,o,r,i,a){function d(e,d){var s=c.compile(e,d);return e.addClass("md-dragging"),function(e,d,c,l){function m(t){f&&f(e)||(t.stopPropagation(),d.addClass("md-dragging"),E={width:g.prop("offsetWidth")},d.removeClass("transition"))}function u(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=l.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),g.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function h(e){if(E){e.stopPropagation(),d.removeClass("md-dragging"),g.css(o.CSS.TRANSFORM,"");var t=l.$viewValue?E.translate>.5:E.translate<.5;t&&p(!l.$viewValue),E=null}}function p(t){e.$apply(function(){l.$setViewValue(t),l.$render()})}l=l||n.fakeNgModel();var f=null;null!=c.disabled?f=function(){return!0}:c.ngDisabled&&(f=r(c.ngDisabled));var g=t.element(d[0].querySelector(".md-thumb-container")),b=t.element(d[0].querySelector(".md-container"));i(function(){d.removeClass("md-dragging")}),s(e,d,c,l),f&&e.$watch(f,function(e){d.attr("tabindex",e?-1:0)}),a.register(b,"drag"),b.on("$md.dragstart",m).on("$md.drag",u).on("$md.dragend",h);var E}}var c=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:d}}t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture"]}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){t.$on("$destroy",function(){e.destroy()})}}}function n(e){function t(e,t,o){function r(r,i,c){return n=c.content,i=o.extractElementByName(i,"md-toast",!0),c.onSwipe=function(e,n){i.addClass("md-"+e.type.replace("$md.","")),o.nextTick(t.cancel)},c.openClass=a(c.position),c.parent.addClass(c.openClass),i.on(d,c.onSwipe),i.addClass(c.position.split(" ").map(function(e){return"md-"+e}).join(" ")),e.enter(i,c.parent)}function i(t,n,o){return n.off(d,o.onSwipe),o.parent.removeClass(o.openClass),1==o.$destroy?n.remove():e.leave(n)}function a(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}var d="$md.swipeleft $md.swiperight";return{onShow:r,onRemove:i,position:"bottom left",themable:!0,hideDelay:3e3}}var n,o="ok",r=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){var r={template:['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">',"<span flex>{{ toast.content }}</span>",'<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">',"{{ toast.action }}","</md-button>","</md-toast>"].join(""),controller:["$scope",function(t){var r=this;t.$watch(function(){return n},function(){r.content=n}),this.resolve=function(){e.hide(o)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};return r}]}).addMethod("updateContent",function(e){n=e});return t.$inject=["$animate","$mdToast","$mdUtil"],r}t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n),e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"]}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e,n,o,r,i){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{restrict:"E",link:function(d,c,s){function l(){function r(e){var t=c.parent().find("md-content");!f&&t.length&&l(null,t),e=d.$eval(e),e===!1?g():g=u()}function l(e,t){t&&c.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",M),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:E;$(),b=Math.min(p/v,Math.max(0,b+t-E)),c.css(n.CSS.TRANSFORM,a([-b*v])),f.css(n.CSS.TRANSFORM,a([(p-b)*v])),E=t,o.nextTick(function(){var e=c.hasClass("md-whiteframe-z1");e&&!b?i.removeClass(c,"md-whiteframe-z1"):!e&&b&&i.addClass(c,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",M),f.attr("scroll-shrink","true"),e(h),function(){f.off("scroll",M),f.attr("scroll-shrink","false"),e(h)}):t.noop}function h(){p=c.prop("offsetHeight");var e=-p*v+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var p,f,g=t.noop,b=0,E=0,v=s.mdShrinkSpeedFactor||.5,M=e.throttle(m),$=o.debounce(h,5e3);d.$on("$mdContentLoaded",l),s.$observe("mdScrollShrink",r),d.$on("$destroy",g)}r(c),t.isDefined(s.mdScrollShrink)&&l()}}}t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"]}(),function(){function e(e,n,o,r,i,a,d,c,s){function l(l,h,p){function f(){t.isDefined(p.mdDelay)||(l.delay=m)}function g(){l.$on("$destroy",function(){l.visible=!1,h.remove(),t.element(n).off("resize",D)}),l.$watch("visible",function(e){e?C():T()})}function b(){w.attr("aria-label")||w.text().trim()||w.attr("aria-label",h.text().trim())}function E(){h.detach(),h.attr("role","tooltip")}function v(){for(var e=h.parent();$("pointer-events","none",e);)e=e.parent();return e}function M(){for(var e=h.parent()[0];e&&e!==d[0]&&e!==document.body;)e=e.parentNode;return e}function $(e,o,r){var i=!1;if(r&&r.length){e=p.$normalize(e),r=r[0]||h[0];var a=n.getComputedStyle(r);i=t.isDefined(a[e])&&a[e]==o}return i}function y(){var e=!1,o=t.element(n),i=function(){a=document.activeElement===w[0]},a=!1;o.on("blur",i),l.$on("$destroy",function(){o.off("blur",i)});var d=function(e){return"focus"===e.type&&a?void(a=!1):(w.on("blur mouseleave touchend touchcancel",c),void A(!0))},c=function(){var t=l.hasOwnProperty("autohide")?l.autohide:p.hasOwnProperty("mdAutohide");(t||e||r[0].activeElement!==w[0])&&(w.off("blur mouseleave touchend touchcancel",c),w.triggerHandler("blur"),A(!1)),e=!1};w.on("mousedown",function(){e=!0}),w.on("focus mouseenter touchstart",d),t.element(n).on("resize",D)}function A(t){A.value=!!t,A.queued||(t?(A.queued=!0,e(function(){l.visible=A.value,A.queued=!1},l.delay)):i.nextTick(function(){l.visible=!1}))}function C(){return S.append(h),$("display","none")?(l.visible=!1,void h.detach()):(k(),void t.forEach([h,x,N],function(e){c.addClass(e,"md-show")}))}function T(){var e=[];t.forEach([h,x,N],function(t){t.parent()&&t.hasClass("md-show")&&e.push(c.removeClass(t,"md-show"))}),s.all(e).then(function(){l.visible||h.detach()})}function k(){function e(){var e="left"===_||"right"===_?2*Math.sqrt(Math.pow(o.width,2)+Math.pow(o.height/2,2)):2*Math.sqrt(Math.pow(o.width/2,2)+Math.pow(o.height,2)),t="left"===_?{left:100,top:50}:"right"===_?{left:0,top:50}:"top"===_?{left:50,top:100}:{left:50,top:0};x.css({width:e+"px",height:e+"px",left:t.left+"%",top:t.top+"%"})}function t(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,S.prop("scrollWidth")-o.width-u),t.left=Math.max(t.left,u),t.top=Math.min(t.top,S.prop("scrollHeight")-o.height-u),t.top=Math.max(t.top,u),t}function n(e){return"left"===e?{left:r.left-o.width-u,top:r.top+r.height/2-o.height/2}:"right"===e?{left:r.left+r.width+u,top:r.top+r.height/2-o.height/2}:"top"===e?{left:r.left+r.width/2-o.width/2,top:r.top-o.height-u}:{left:r.left+r.width/2-o.width/2,top:r.top+r.height+u}}var o=i.offsetRect(h,S),r=i.offsetRect(w,S),a=n(_);_?a=t(a):a.top>h.prop("offsetParent").scrollHeight-o.height-u&&(a=t(n("top"))),h.css({top:a.top+"px",left:a.left+"px"}),e()}a(h);var w=v(),x=t.element(h[0].getElementsByClassName("md-background")[0]),N=t.element(h[0].getElementsByClassName("md-content")[0]),_=p.mdDirection,H=M(),S=t.element(H||document.body),D=o.throttle(function(){l.visible&&k()});f(),E(),y(),g(),b()}var m=300,u=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="md-background"></div><div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible",delay:"=?mdDelay",autohide:"=?mdAutohide"},link:l}}t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q"]}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,r,i){this.$scope=o,this.$element=r,this.$attrs=i,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.$attrs.mdTopIndex?(this.bindTopIndex=n(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=r[0].getElementsByClassName("md-virtual-repeat-scroller")[0],this.sizer=this.scroller.getElementsByClassName("md-virtual-repeat-sizer")[0],this.offsetter=this.scroller.getElementsByClassName("md-virtual-repeat-offsetter")[0],e(t.bind(this,this.updateSize)),i.ngHide&&o.$watch(i.ngHide,t.bind(this,function(n){n||e(t.bind(this,this.updateSize))}))}function r(e){return{controller:i,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,r=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),i=r[1],a=e(r[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,r){o[0].link_(o[1],r,i,a,d)}}}}function i(e,n,o,r,i,a){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=r,this.$document=i,this.$$rAF=a,this.onDemand=o.hasOwnProperty("mdOnDemand"),this.browserCheckUrlChange=r.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[]}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}t.module("material.components.virtualRepeat",["material.core"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",r);var d=1533917,c=3;o.$inject=["$$rAF","$parse","$scope","$element","$attrs"],o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){this.size=e,this.$element[0].style[this.isHorizontal()?"width":"height"]=e+"px"},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.sizeScroller_=function(e){var t=this.isHorizontal()?"width":"height",n=this.isHorizontal()?"height":"width";if(d>e)this.sizer.style[t]=e+"px";else{this.sizer.innerHTML="",this.sizer.style[t]="auto",this.sizer.style[n]="auto";var o=Math.floor(e/d),r=document.createElement("div");r.style[t]=d+"px",r.style[n]="1px";for(var i=0;o>i;i++)this.sizer.appendChild(r.cloneNode(!1));r.style[t]=e-o*d+"px",this.sizer.appendChild(r)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());this.autoShrink&&t!==this.size&&(t<(this.originalSize||this.size)?(this.originalSize||(this.originalSize=this.size),this.setSize_(t)):this.originalSize&&(this.setSize_(this.originalSize),this.originalSize=null))},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e=this.isHorizontal()?this.scroller.scrollLeft:this.scroller.scrollTop;if(e!==this.scrollOffset){var t=this.repeater.getItemSize();if(t){var n=Math.max(0,Math.floor(e/t)-c),o=this.isHorizontal()?"translateX(":"translateY(";if(o+=n*t+"px)",this.scrollOffset=e,this.offsetter.style.webkitTransform=o,this.offsetter.style.transform=o,this.bindTopIndex){var r=Math.floor(e/t);r!==this.topIndex&&r<this.repeater.itemsLength&&(this.topIndex=r,this.bindTopIndex.assign(this.$scope,r),this.$scope.$root.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},r.$inject=["$parse"],i.$inject=["$scope","$element","$attrs","$browser","$document","$$rAF"],i.Block,i.prototype.link_=function(e,n,o,r,i){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=r,this.extraName=i,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},i.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),
this.itemSize&&this.containerUpdated()}},i.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},i.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,this.virtualRepeatUpdate_))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.$$rAF(t.bind(this,this.readItemSize_))})),void(this.$scope.$root.$$phase||this.$scope.$digest()))},i.prototype.getItemSize=function(){return this.itemSize},i.prototype.virtualRepeatUpdate_=function(e,n){var o=e&&e.length||0,r=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset())return this.items=e,void this.container.resetScroll();if(o!==this.itemsLength&&(r=!0,this.itemsLength=o),this.items=e,(e!==n||r)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,r&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var i=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(i)}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var a,d,c=[],s=[];for(a=this.newStartIndex;a<this.newEndIndex&&null==this.blocks[a];a++)d=this.getBlock_(a),this.updateBlock_(d,a),c.push(d);for(;null!=this.blocks[a];a++)this.updateBlock_(this.blocks[a],a);for(var l=a-1;a<this.newEndIndex;a++)d=this.getBlock_(a),this.updateBlock_(d,a),s.push(d);c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.$element[0].nextSibling),s.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(s),this.blocks[l]&&this.blocks[l].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex},i.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},i.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$scope.$root.$$phase||e.scope.$digest())},i.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},i.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},i.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},i.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+c,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-c)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;t>n;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){t.module("material.components.whiteframe",[])}(),function(){function e(e,o,a,d,c,s,l,m,u,h){function p(){a.initOptionalProperties(e,u,{searchText:null,selectedItem:null}),c(o),E(),a.nextTick(function(){M(),g(),b(),o.on("focus",b)})}function f(){function t(){var e=le.scrollContainer.getBoundingClientRect(),t={};e.right>d.right-i&&(t.left=n.right-e.width+"px"),le.$.scrollContainer.css(t)}if(!le)return a.nextTick(f,!1,e);var n=le.wrap.getBoundingClientRect(),o=le.snap.getBoundingClientRect(),d=le.root.getBoundingClientRect(),c=o.bottom-d.top,s=d.bottom-o.top,l=n.left-d.left,m=n.width,u={left:l+"px",minWidth:m+"px",maxWidth:Math.max(n.right-d.left,d.right-n.left)-i+"px"};c>s&&d.height-n.bottom-i<r?(u.top="auto",u.bottom=s+"px",u.maxHeight=Math.min(r,n.top-d.top-i)+"px"):(u.top=c+"px",u.bottom="auto",u.maxHeight=Math.min(r,d.bottom-n.bottom-i)+"px"),le.$.scrollContainer.css(u),a.nextTick(t,!1)}function g(){le.$.root.length&&(c(le.$.scrollContainer),le.$.scrollContainer.detach(),le.$.root.append(le.$.scrollContainer),l.pin&&l.pin(le.$.scrollContainer,m))}function b(){e.autofocus&&le.input.focus()}function E(){var n=parseInt(e.delay,10)||0;u.$observe("disabled",function(e){de.isDisabled=e}),u.$observe("required",function(e){de.isRequired=null!==e}),e.$watch("searchText",n?a.debounce(D,n):D),e.$watch("selectedItem",w),t.element(s).on("resize",f),e.$on("$destroy",v)}function v(){if(t.element(s).off("resize",f),le){var e="ul scroller scrollContainer input".split(" ");t.forEach(e,function(e){le.$[e].remove()})}}function M(){le={main:o[0],scrollContainer:o[0].getElementsByClassName("md-virtual-repeat-container")[0],scroller:o[0].getElementsByClassName("md-virtual-repeat-scroller")[0],ul:o.find("ul")[0],input:o.find("input")[0],wrap:o.find("md-autocomplete-wrap")[0],root:document.body},le.li=le.ul.getElementsByTagName("li"),le.snap=$(),le.$=y(le)}function $(){for(var e=o;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return le.wrap}function y(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function A(t,n){!t&&n?(f(),le&&a.nextTick(function(){a.disableScrollAround(le.ul)},!1,e)):t&&!n&&a.nextTick(function(){a.enableScrolling()},!1,e)}function C(){ue=!0}function T(){ue=!1,de.hidden=q()}function k(){le.input.focus()}function w(t,n){t&&F(t).then(function(o){e.searchText=o,_(t,n)}),t!==n&&x()}function x(){t.isFunction(e.itemChange)&&e.itemChange(B(e.selectedItem))}function N(){t.isFunction(e.textChange)&&e.textChange()}function _(e,t){he.forEach(function(n){n(e,t)})}function H(e){-1==he.indexOf(e)&&he.push(e)}function S(e){var t=he.indexOf(e);-1!=t&&he.splice(t,1)}function D(t,n){de.index=z(),t!==n&&F(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&N(),G()?ie():(de.matches=[],U(!1),ee()))})}function I(){ue||(pe=!1,de.hidden=q())}function O(e){e&&(ue=!1),le.input.blur()}function R(){pe=!0,t.isString(e.searchText)||(e.searchText=""),de.hidden=q(),de.hidden||ie()}function L(e){switch(e.keyCode){case d.KEY_CODE.DOWN_ARROW:if(de.loading)return;e.stopPropagation(),e.preventDefault(),de.index=Math.min(de.index+1,de.matches.length-1),ne(),ee();break;case d.KEY_CODE.UP_ARROW:if(de.loading)return;e.stopPropagation(),e.preventDefault(),de.index=de.index<0?de.matches.length-1:Math.max(0,de.index-1),ne(),ee();break;case d.KEY_CODE.TAB:case d.KEY_CODE.ENTER:if(de.hidden||de.loading||de.index<0||de.matches.length<1)return;e.stopPropagation(),e.preventDefault(),Q(de.index);break;case d.KEY_CODE.ESCAPE:e.stopPropagation(),e.preventDefault(),Z(),O(!0)}}function P(){return t.isNumber(e.minLength)?e.minLength:1}function F(t){function n(t){return t&&e.itemText?e.itemText(B(t)):null}return h.when(n(t)||t)}function B(e){if(!e)return n;var t={};return de.itemName&&(t[de.itemName]=e),t}function z(){return e.autoselect?0:-1}function U(e){de.loading!=e&&(de.loading=e),de.hidden=q()}function q(){return de.loading&&!V()||W()||!pe?!0:!j()}function j(){return G()&&V()||re()}function V(){return de.matches.length?!0:!1}function W(){return de.scope.selectedItem?!0:!1}function Y(){return de.loading&&!W()}function K(){return F(de.matches[de.index])}function G(){return(e.searchText||"").length>=P()}function X(e,t,n){Object.defineProperty(de,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function Q(t){a.nextTick(function(){F(de.matches[t]).then(function(e){var t=le.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=de.matches[t],U(!1)})},!1)}function Z(){U(!0),de.index=0,de.matches=[],e.searchText="",Q(-1);var t=document.createEvent("CustomEvent");t.initCustomEvent("input",!0,!0,{value:e.searchText}),le.input.dispatchEvent(t),le.input.focus()}function J(n){function o(t){me[i]=t,(n||"")===(e.searchText||"")&&(de.matches=t,de.hidden=q(),e.selectOnMatch&&ae(),ee(),f())}var r=e.$parent.$eval(se),i=n.toLowerCase();t.isArray(r)?o(r):r&&(U(!0),a.nextTick(function(){r.success&&r.success(o),r.then&&r.then(o),r["finally"]&&r["finally"](function(){U(!1)})},!0,e))}function ee(){K().then(function(e){de.messages=[te(),e]})}function te(){if(fe===de.matches.length)return"";switch(fe=de.matches.length,de.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+de.matches.length+" matches available."}}function ne(){if(le.li[0]){var e=le.li[0].offsetHeight,t=e*de.index,n=t+e,o=le.scroller.clientHeight,r=le.scroller.scrollTop;r>t?oe(t):n>r+o&&oe(n-o)}}function oe(e){le.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function re(){var e=(de.scope.searchText||"").length;return de.hasNotFound&&!V()&&!de.loading&&e>=P()&&pe&&!W()}function ie(){var t=e.searchText,n=t.toLowerCase();!e.noCache&&me[n]?(de.matches=me[n],ee()):J(t),de.hidden=q()}function ae(){var t=e.searchText,n=de.matches,o=n[0];1===n.length&&F(o).then(function(e){t==e&&Q(0)})}var de=this,ce=e.itemsExpr.split(/ in /i),se=ce[1],le=null,me={},ue=!1,he=[],pe=!1,fe=0;return X("hidden",A,!0),de.scope=e,de.parent=e.$parent,de.itemName=ce[0],de.matches=[],de.loading=!1,de.hidden=!0,de.index=null,de.messages=[],de.id=a.nextUid(),de.isDisabled=null,de.isRequired=null,de.hasNotFound=!1,de.keydown=L,de.blur=I,de.focus=R,de.clear=Z,de.select=Q,de.listEnter=C,de.listLeave=T,de.mouseUp=k,de.getCurrentDisplayValue=K,de.registerSelectedItemWatcher=H,de.unregisterSelectedItemWatcher=S,de.notFoundVisible=re,de.loadingIsVisible=Y,p()}t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=41,r=5.5*o,i=8;e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q"]}(),function(){function e(){var e=!1;return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",selectOnMatch:"=?mdSelectOnMatch",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId"},link:function(t,n,o,r){r.hasNotFound=e},template:function(t,n){function o(){var e=t.find("md-item-template").detach(),n=e.length?e.html():t.html();return e.length||t.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function r(){var e=t.find("md-not-found").detach(),n=e.length?e.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function i(){return n.mdFloatingLabel?'            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=s?'tabindex="'+s+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+c+"</div>            </md-input-container>":'            <input flex type="search"                '+(null!=s?'tabindex="'+s+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '}var a=r(),d=o(),c=t.html(),s=n.tabindex;return a&&(e=!0),n.hasOwnProperty("tabindex")&&t.attr("tabindex","-1"),'        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel, \'md-menu-showing\': !$mdAutocompleteCtrl.hidden }"            role="listbox">          '+i()+'          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}"                ng-mouseenter="$mdAutocompleteCtrl.listEnter()"                ng-mouseleave="$mdAutocompleteCtrl.listLeave()"                ng-mouseup="$mdAutocompleteCtrl.mouseUp()">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+d+"                  </li>"+a+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'}}}t.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),function(){function e(e,t){function n(n,o,r){function i(e,o){d[o]=n[e],n.$watch(e,function(e){t.nextTick(function(){d[o]=e})})}var a=n.$mdAutocompleteCtrl,d=a.parent.$new(),c=a.itemName;i("$index","$index"),i("item",c),e(o.contents())(d),r.hasOwnProperty("mdAutocompleteReplace")&&(o.after(o.contents()),o.remove())}return{restrict:"AE",link:n,terminal:!0}}t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,n,o){function r(r,i){var d=null,c=null,s=o.mdHighlightFlags||"",l=e.$watch(function(e){return{term:r(e),unsafeText:i(e)}},function(e,o){(null===d||e.unsafeText!==o.unsafeText)&&(d=t.element("<div>").text(e.unsafeText).html()),(null===c||e.term!==o.term)&&(c=a(e.term,s)),n.html(d.replace(c,'<span class="highlight">$&</span>'))},!0);n.on("$destroy",function(){l()})}function i(e){return e&&e.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}function a(e,t){var n="";return t.indexOf("^")>=1&&(n+="^"),n+=e,t.indexOf("$")>=1&&(n+="$"),new RegExp(i(n),t.replace(/[\$\^]/g,""))}this.init=r}t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$attrs"]}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var r=t(o.mdHighlightText),i=e(n.html());return function(e,t,n,o){o.init(r,i)}}}}t.module("material.components.autocomplete").directive("mdHighlightText",e),e.$inject=["$interpolate","$parse"]}(),function(){function e(e,o){function r(n,r){return n.append(o.processTemplate(i)),function(n,o,r,i){o.addClass("md-chip"),e(o),i&&t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){i.selectedChip=-1})}}var i=o.processTemplate(n);return{restrict:"E",require:"^?mdChips",compile:r}}t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e){function t(t,n,o,r){n.on("click",function(e){t.$apply(function(){r.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,ariaHidden:!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}t.module("material.components.chips").directive("mdChipRemove",e),e.$inject=["$timeout"]}(),function(){function e(e){function t(t,n,o){var r=t.$parent.$mdChipsCtrl,i=r.parent.$new(!1,r.parent);i.$$replacedScope=t,i.$chip=t.$chip,i.$index=t.$index,i.$mdChipsCtrl=r;var a=r.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(i)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}t.module("material.components.chips").directive("mdChipTransclude",e),e.$inject=["$compile"]}(),function(){function e(e,t,n,o,r){this.$timeout=r,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.hasAutocomplete=!1,this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useOnAppend=!1,this.useOnSelect=!1}t.module("material.components.chips").controller("MdChipsCtrl",e),e.$inject=["$scope","$mdConstant","$log","$element","$timeout"],e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();switch(e.keyCode){case this.$mdConstant.KEY_CODE.ENTER:if(this.hasAutocomplete&&this.requireMatch||!t)break;e.preventDefault(),this.appendChip(t),this.resetChipBuffer();break;case this.$mdConstant.KEY_CODE.BACKSPACE:if(t)break;e.preventDefault(),e.stopPropagation(),this.items.length&&this.selectAndFocusChipSafe(this.items.length-1)}},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;e.preventDefault(),this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.placeholder:this.secondaryPlaceholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){this.useOnAppend&&this.onAppend&&(e=this.onAppend({$chip:e})),this.items.indexOf(e)+1||this.items.push(e)},e.prototype.useOnAppendExpression=function(){this.useOnAppend=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[this.selectedChip]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),-1!=e&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,r=this,i=function(e,n){o.$evalAsync(t.bind(r,n,e))};e.attr({tabindex:0}).on("keydown",function(e){i(e,r.inputKeydown)}).on("focus",function(e){i(e,r.onInputFocus)}).on("blur",function(e){i(e,r.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.hasAutocomplete=!0,e.registerSelectedItemWatcher(t.bind(this,function(e){e&&(this.appendChip(e),this.resetChipBuffer())})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,c){function s(n,o){function r(e){if(o.ngModel){var t=i[0].querySelector(e);return t&&t.outerHTML}}var i=o.$mdUserTemplate;o.$mdUserTemplate=null;var s=r("md-chips>*[md-chip-remove]")||m.remove,l=r("md-chips>md-chip-template")||m["default"],u=r("md-chips>md-autocomplete")||r("md-chips>input")||m.input,h=i.find("md-chip");return i[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,r,i,d){t.initOptionalProperties(n,o),e(r);var p=d[0];if(p.chipContentsTemplate=l,p.chipRemoveTemplate=s,p.chipInputTemplate=u,r.attr({ariaHidden:!0,tabindex:-1}).on("focus",function(){p.onFocus()}),o.ngModel&&(p.configureNgModel(r.controller("ngModel")),i.mdOnAppend&&p.useOnAppendExpression(),i.mdOnRemove&&p.useOnRemoveExpression(),i.mdOnSelect&&p.useOnSelectExpression(),u!=m.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){0===u.indexOf("<md-autocomplete")&&p.configureAutocomplete(r.find("md-autocomplete").controller("mdAutocomplete")),p.configureUserInput(r.find("input"))})})),h.length>0){var f=a(h.clone())(n.$parent);c(function(){r.find("md-chips-wrap").prepend(f)})}}}function l(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(r),remove:t.processTemplate(i)}}var m=l();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),m.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:s,scope:{readonly:"=readonly",placeholder:"@",secondaryPlaceholder:"@",onAppend:"&mdOnAppend",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",deleteHint:"@",deleteButtonLabel:"@",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(), \'md-readonly\': !$mdChipsCtrl.ngModelCtrl }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="!$mdChipsCtrl.readonly"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',r="      <span>{{$chip}}</span>",i='      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout"]}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.itemName=function(e){return e[this.contactName]},e.prototype.filterSelectedContacts=function(e){return-1==this.contacts.indexOf(e)}}(),function(){function e(e,t){function o(n,o){return function(n,r,i,a){t.initOptionalProperties(n,o),e(r),r.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",highlightFlags:"@?mdHighlightFlags"}}}t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e,t,n){function o(o,r,i){function a(){var e=r.parent();return e.attr("aria-label")||e.text()?!0:e.parent().attr("aria-label")||e.parent().text()?!0:!1}function d(){o.svgIcon||o.svgSrc||(o.fontIcon&&r.addClass("md-font "+o.fontIcon),r.addClass(e.fontSet(o.fontSet)))}t(r),d();var c=i.alt||o.fontIcon||o.svgIcon||r.text(),s=i.$normalize(i.$attr.mdSvgIcon||i.$attr.mdSvgSrc||"");i["aria-label"]||(""==c||a()?r.text()||n.expect(r,"aria-hidden","true"):(n.expect(r,"aria-label",c),n.expect(r,"role","img"))),s&&i.$observe(s,function(t){r.empty(),t&&e(t).then(function(e){r.append(e)})})}return{scope:{fontSet:"@mdFontSet",fontIcon:"@mdFontIcon",svgIcon:"@mdSvgIcon",svgSrc:"@mdSvgSrc"},restrict:"E",link:o}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria",e])}(),function(){function e(){}function n(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function o(e,n,o,r,i){function a(t){if(t=t||"",b[t])return o.when(b[t].clone());if(E.test(t))return m(t).then(c(t));-1==t.indexOf(":")&&(t="$default:"+t);var n=e[t]?s:l;return n(t).then(c(t))}function d(n){var o=t.isUndefined(n)||!(n&&n.length);if(o)return e.defaultFontSet;var r=n;return t.forEach(e.fontSets,function(e){e.alias==n&&(r=e.fontSet||r);
}),r}function c(t){return function(n){return b[t]=h(n)?n:new p(n,e[t]),b[t].clone()}}function s(t){var n=e[t];return m(n.url).then(function(e){return new p(e,n)})}function l(t){function n(e){var n=t.slice(t.lastIndexOf(":")+1),o=e.querySelector("#"+n);return o?new p(o,d):i(t)}function i(e){var t="icon "+e+" not found";return r.warn(t),o.reject(t||e)}var a=t.substring(0,t.lastIndexOf(":"))||"$default",d=e[a];return d?m(d.url).then(n):i(t)}function m(e){return n.get(e,{cache:i}).then(function(e){return t.element("<div>").append(e.data).find("svg")[0]})["catch"](u)}function u(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;return r.warn(n),o.reject(n)}function h(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function p(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function f(){var n=this.config?this.config.viewBoxSize:e.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+n+" "+n},function(e,t){this.element.setAttribute(t,e)},this),t.forEach({"pointer-events":"none",display:"block"},function(e,t){this.element.style[t]=e},this)}function g(){return this.element.cloneNode(!0)}var b={},E=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;return p.prototype={clone:g,prepare:f},a.fontSet=d,a}t.module("material.components.icon").provider("$mdIcon",e);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};e.prototype={icon:function(e,t,o){return-1==e.indexOf(":")&&(e="$default:"+e),r[e]=new n(t,o),this},iconSet:function(e,t,o){return r[e]=new n(t,o),this},defaultIconSet:function(e,t){var o="$default";return r[o]||(r[o]=new n(e,t)),r[o].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'},{id:"md-calendar",url:"md-calendar.svg",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache",function(e,t,n,i){return this.preloadIcons(i),o(r,e,t,n,i)}]},o.$inject=["config","$http","$q","$log","$templateCache"]}(),function(){function e(e,o,r,i,a,d){var c,s,l=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(e,t){t=t||{},c=e,s=r[0].querySelector("[ng-click],[ng-mouseenter]"),this.isInMenuBar=t.isInMenuBar,this.nestedMenus=a.nodesToArray(c[0].querySelectorAll(".md-nested-menu")),this.enableHoverListener(),c.on("$mdInterimElementRemove",function(){l.isOpen=!1})},this.enableHoverListener=function(){i.$on("$mdMenuOpen",function(e,t){c[0].contains(t[0])&&(l.currentlyOpenMenu=t.controller("mdMenu"),l.isAlreadyOpening=!1,l.currentlyOpenMenu.registerContainerProxy(l.triggerContainerProxy.bind(l)))}),i.$on("$mdMenuClose",function(e,t){c[0].contains(t[0])&&(l.currentlyOpenMenu=n)});var e,o=t.element(a.nodesToArray(c[0].querySelectorAll("md-menu-item")));o.on("mouseenter",function(n){if(!l.isAlreadyOpening){var o=n.target.querySelector("md-menu")||a.getClosest(n.target,"MD-MENU");e=d(function(){if(o&&(o=t.element(o).controller("mdMenu")),l.currentlyOpenMenu&&l.currentlyOpenMenu!=o){var e=l.nestLevel+1;l.currentlyOpenMenu.close(!0,{closeTo:e})}else o&&!o.isOpen&&o.open&&(l.isAlreadyOpening=!0,o.open())},o?100:250);var r=n.currentTarget.querySelector("button:not([disabled])");r&&r.focus()}}),o.on("mouseleave",function(t){e&&(d.cancel(e),e=n)})},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),l.isOpen||(l.isOpen=!0,s=s||(t?t.target:r[0]),i.$emit("$mdMenuOpen",r),e.show({scope:i,mdMenuCtrl:l,nestLevel:l.nestLevel,element:c,target:s,preserveElement:l.isInMenuBar||l.nestedMenus.length>0,parent:l.isInMenuBar?r:"body"}))},i.$mdOpenMenu=this.open,i.$watch(function(){return l.isOpen},function(e){e?(s.setAttribute("aria-expanded","true"),r[0].classList.add("md-open"),t.forEach(l.nestedMenus,function(e){e.classList.remove("md-open")})):(s&&s.setAttribute("aria-expanded","false"),r[0].classList.remove("md-open")),i.$mdMenuIsOpen=l.isOpen}),this.focusMenuContainer=function(){var e=c[0].querySelector("[md-menu-focus-target]");e||(e=c[0].querySelector(".md-button")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return e.destroy()},this.close=function(n,o){if(l.isOpen){l.isOpen=!1;var a=t.extend({},o,{skipFocus:n});if(i.$emit("$mdMenuClose",r,a),e.hide(null,o),!n){var d=l.restoreFocusTo||r.find("button")[0];d instanceof t.element&&(d=d[0]),d&&d.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")}}t.module("material.components.menu").controller("mdMenuCtrl",e),e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout"]}(),function(){function e(e){function o(n){n.addClass("md-menu");var o=n.children()[0];if(o.hasAttribute("ng-click")||(o=o.querySelector("[ng-click],[ng-mouseenter]")||o),!o||"MD-BUTTON"!=o.nodeName&&"BUTTON"!=o.nodeName||o.hasAttribute("type")||o.setAttribute("type","button"),2!=n.children().length)throw Error(i+"Expected two children elements.");o&&o.setAttribute("aria-haspopup","true");var a=n[0].querySelectorAll("md-menu"),d=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return a&&t.forEach(e.nodesToArray(a),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("md-nested-menu"),e.setAttribute("md-nest-level",d+1),e.setAttribute("role","menu")}),r}function r(e,o,r,i){var a=i[0],d=i[1]!=n,c=t.element('<div class="md-open-menu-container md-whiteframe-z2"></div>'),s=o.children()[1];c.append(s),d&&(o.append(c),c[0].style.display="none"),a.init(c,{isInMenuBar:d}),e.$on("$destroy",function(){a.destroy()["finally"](function(){c.remove()})})}var i="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:o}}t.module("material.components.menu").directive("mdMenu",e),e.$inject=["$mdUtil"]}(),function(){function e(e){function o(e,o,a,d,c,s,l,m,u){function h(n,o,r){return r.nestLevel?t.noop:(r.disableParentScroll&&!e.getClosest(r.target,"MD-DIALOG")?r.restoreScroll=e.disableScrollAround(r.element,r.parent):r.disableParentScroll=!1,r.hasBackdrop&&(r.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(r.backdrop,r.parent)),function(){r.backdrop&&r.backdrop.remove(),r.disableParentScroll&&r.restoreScroll()})}function p(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start()}function r(){t.removeClass("md-active"),E(t,n),n.alreadyOpen=!1}return n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?r():o().then(r)}function f(n,r,i){function d(){return i.preserveElement?r[0].style.display="":i.parent.append(r),s(function(e){var t=v(r,i);r.removeClass("md-leave"),m(r,{addClass:"md-active",from:M.toCss(t),to:M.toCss({transform:""})}).start().then(e)})}function u(){if(!i.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(i,{alreadyOpen:!1,isRemoved:!1,target:t.element(i.target),parent:t.element(i.parent),menuContentEl:t.element(r[0].querySelector("md-menu-content"))})}function p(){var e=function(e,t){return l.throttle(function(){if(!i.isRemoved){var n=v(e,t);e.css(M.toCss(n))}})}(r,i);return c.addEventListener("resize",e),c.addEventListener("orientationchange",e),function(){c.removeEventListener("resize",e),c.removeEventListener("orientationchange",e)}}function f(){function t(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:i.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:g(t,i.menuContentEl,i,-1)||i.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:g(t,i.menuContentEl,i,1)||i.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:i.nestLevel?i.mdMenuCtrl.close():i.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=i.parent[0]?t.target.click():i.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function o(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){i.mdMenuCtrl.close(!0,{closeAll:!0})})}function d(t){function o(){n.$apply(function(){i.mdMenuCtrl.close(!0,{closeAll:!0})})}function r(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)for(var r,i=[n,"data-"+n,"x-"+n],a=0;r=i[a];++a)if(e.hasAttribute(r))return!0;return!1}var a=t.target;do{if(a==i.menuContentEl[0])return;if(r(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=i.parent[0]||o();break}}while(a=a.parentNode)}r.addClass("md-clickable"),i.backdrop&&i.backdrop.on("click",o),i.menuContentEl.on("keydown",t),i.menuContentEl[0].addEventListener("click",d,!0);var c=i.menuContentEl[0].querySelector("[md-menu-focus-target]");if(!c){var s=i.menuContentEl[0].firstElementChild;c=s&&(s.querySelector(".md-button:not([disabled])")||s.firstElementChild)}return c&&c.focus(),function(){r.removeClass("md-clickable"),i.backdrop&&i.backdrop.off("click",o),i.menuContentEl.off("keydown",t),i.menuContentEl[0].removeEventListener("click",d,!0)}}return u(i),o.inherit(i.menuContentEl,i.target),i.cleanupResizing=p(),i.hideBackdrop=h(n,r,i),d().then(function(e){return i.alreadyOpen=!0,i.cleanupInteraction=f(),e})}function g(t,n,o,r){for(var i,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),c=d.indexOf(a),s=c+r;s>=0&&s<d.length;s+=r){var l=d[s].querySelector(".md-button");if(i=b(l))break}return i}function b(e){return e&&-1!=e.getAttribute("tabindex")?(e.focus(),d[0].activeElement==e):void 0}function E(e,t){t.preserveElement?r(e).style.display="none":r(e).parentNode===r(t.parent)&&r(t.parent).removeChild(r(e))}function v(t,o){function r(e){e.top=Math.max(Math.min(e.top,E.bottom-l.offsetHeight),E.top),e.left=Math.max(Math.min(e.left,E.right-l.offsetWidth),E.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=c.getComputedStyle(m.children[e]).display)return m.children[e]}var s,l=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),h=d[0].body,p=h.getBoundingClientRect(),f=c.getComputedStyle(m),g=o.target[0].querySelector("[md-menu-origin]")||o.target[0],b=g.getBoundingClientRect(),E={left:p.left+i,top:Math.max(p.top,0)+i,bottom:Math.max(p.bottom,Math.max(p.top,0)+p.height)-i,right:p.right-i},v={top:0,left:0,right:0,bottom:0},M={top:0,left:0,right:0,bottom:0},$=o.mdMenuCtrl.positionMode();("target"==$.top||"target"==$.left||"target-right"==$.left)&&(s=a(),s&&(s=s.firstElementChild||s,s=s.querySelector("[md-menu-align-target]")||s,v=s.getBoundingClientRect(),M={top:parseFloat(l.style.top||0),left:parseFloat(l.style.left||0)}));var y={},A="top ";switch($.top){case"target":y.top=M.top+b.top-v.top;break;case"cascade":y.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":y.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+$.top+'" specified for md-menu on Y axis.')}switch($.left){case"target":y.left=M.left+b.left-v.left,A+="left";break;case"target-right":y.left=b.right-u.width+(u.right-v.right),A+="right";break;case"cascade":var C=b.right+u.width<E.right;y.left=C?b.right-g.style.left:b.left-g.style.left-u.width,A+=C?"left":"right";break;case"left":y.left=b.left,A+="left";break;default:throw new Error('Invalid target mode "'+$.left+'" specified for md-menu on X axis.')}var T=o.mdMenuCtrl.offsets();y.top+=T.top,y.left+=T.left,r(y);var k=Math.round(100*Math.min(b.width/l.offsetWidth,1))/100,w=Math.round(100*Math.min(b.height/l.offsetHeight,1))/100;return{top:Math.round(y.top),left:Math.round(y.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[k,w]),transformOrigin:A}}var M=e.dom.animator;return{parent:"body",onShow:f,onRemove:p,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,skipHide:!0,themable:!0}}function r(e){return e instanceof t.element&&(e=e[0]),e}var i=8;return o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate"],e("$mdMenu").setDefaults({methods:["target"],options:o})}t.module("material.components.menu").provider("$mdMenu",e),e.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,r,i,a,d,c){this.$element=n,this.$attrs=r,this.$mdConstant=i,this.$mdUtil=d,this.$document=a,this.$scope=e,this.$timeout=c;var s=this;t.forEach(o,function(e){s[e]=t.bind(s,s[e])})}t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.$inject=["$scope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],e.prototype.init=function(){var e=this.$element,o=this.$mdUtil,r=this.$scope,i=this;e.on("keydown",this.handleKeyDown),this.parentToolbar=o.getClosest(e,"MD-TOOLBAR"),r.$on("$mdMenuOpen",function(t,n){-1!=i.getMenus().indexOf(n[0])&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover())}),r.$on("$mdMenuClose",function(t,r,a){var d=i.getMenus();if(-1!=d.indexOf(r[0])&&(e[0].classList.remove("md-open"),r[0].classList.remove("md-open")),a.closeAll&&e[0].contains(r[0])){for(var c=r[0];c&&-1==d.indexOf(c);)c=o.getClosest(c,"MD-MENU",!0);c&&(a.skipFocus||c.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0))}}),t.element(this.getMenus()).on("mouseenter",this.handleMenuHover),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){this.openOnHoverEnabled=!0;var e;(e=this.parentToolbar)&&(e.dataset.mdRestoreStyle=e.getAttribute("style"),e.style.position="relative",e.style.zIndex=100)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){if(this.openOnHoverEnabled){this.openOnHoverEnabled=!1;var e;(e=this.parentToolbar)&&e.setAttribute("style",e.dataset.mdRestoreStyle||"")}},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,r=o&&o.isOpen;this.setKeyboardMode(!0);var i,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),i=!0;break;case n.UP_ARROW:o&&o.close(),i=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),r&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),i=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),r&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),i=!0}i&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();-1==n&&(n=this.getOpenMenuIndex());var o=!1;return-1==n?n=0:(0>e&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o?(t[n].querySelector("button").focus(),t[n]):void 0},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("md-open"))return t;return-1}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,r){return r.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||n.setAttribute("md-position-mode","left bottom"),n.setAttribute("role","menu");var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),function(e,t,o,r){n(e,t),r.init()}}}}t.module("material.components.menuBar").directive("mdMenuBar",e),e.$inject=["$mdUtil","$mdTheming"]}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}t.module("material.components.menuBar").controller("MenuItemController",e),e.$inject=["$scope","$element","$attrs"],e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,("checkbox"==n.type||"radio"==n.type)&&(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=i.ngValue?r.$eval(i.ngValue):i.value;return o.$modelValue==e}return o.$modelValue}function n(e){e?s.off("click",l):s.on("click",l)}var o=this.ngModel,r=this.$scope,i=this.$attrs,a=this.$element,d=this.mode;this.handleClick=t.bind(this,this.handleClick);var c=this.iconEl,s=t.element(this.buttonEl),l=this.handleClick;i.$observe("disabled",n),n(i.disabled),o.$render=function(){e()?(c.style.display="",a.attr("aria-checked","true")):(c.style.display="none",a.attr("aria-checked","false"))},r.$$postDigest(o.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,r=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=r.ngValue?this.$scope.$eval(r.ngValue):r.value),o.$setViewValue(t),o.$render()}}(),function(){function e(){return{require:["mdMenuItem","?ngModel"],compile:function(e,n){function o(t,n){e[0].hasAttribute(t)||e[0].setAttribute(t,n)}function r(t){if(e[0].hasAttribute(t)){var n=e[0].getAttribute(t);a[0].setAttribute(t,n),e[0].removeAttribute(t)}}if("checkbox"==n.type||"radio"==n.type){var i=e[0].textContent,a=t.element('<md-button type="button"></md-button>');a.html(i),a.attr("tabindex","0"),e.html(""),e.append(t.element('<md-icon md-svg-icon="check"></md-icon>')),e.append(a),e[0].classList.add("md-indent"),o("role","checkbox"==n.type?"menuitemcheckbox":"menuitemradio"),t.forEach(["ng-disabled"],r)}else o("role","menuitem");return function(e,t,n,o){var r=o[0],i=o[1];r.init(i)}},controller:"MenuItemController"}}t.module("material.components.menuBar").directive("mdMenuItem",e)}(),function(){function e(){function e(e,n,o,r){if(r){var i=r.getTabElementIndex(n),a=n.find("md-tab-body").eq(0).remove(),d=n.find("md-tab-label").eq(0).remove(),c=r.insertTab({scope:e,parent:e.$parent,index:i,element:n,template:a.html(),label:d.html()},i);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(c.getIndex())}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return r.getTabElementIndex(n)},function(e){c.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(c)})}}return{require:"^?mdTabs",terminal:!0,compile:function(n,o){var r=n.find("md-tab-label"),i=n.find("md-tab-body");if(0==r.length&&(r=t.element("<md-tab-label></md-tab-label>"),o.label?r.text(o.label):r.append(n.contents()),0==i.length)){var a=n.contents().detach();i=t.element("<md-tab-body></md-tab-body>"),i.append(a)}return n.append(r),i.html()&&n.append(i),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}t.module("material.components.tabs").directive("mdTabScroll",e),e.$inject=["$parse"]}(),function(){function e(e,o,r,i,a,d,c,s,l,m){function u(){ce.selectedIndex=ce.selectedIndex||0,h(),f(),p(),m(o),d.nextTick(function(){oe(),J(),re(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select(),he=!0,Y()})}function h(){var e=s.$mdTabsTemplate,n=t.element(le.data);n.html(e),l(n.contents())(ce.parent),delete s.$mdTabsTemplate}function p(){t.element(r).on("resize",I),e.$on("$destroy",E)}function f(){e.$watch("$mdTabsCtrl.selectedIndex",k)}function g(e,t){var n=s.$normalize("md-"+e);t&&W(e,t),s.$observe(n,function(t){ce[e]=t})}function b(e,t){function n(t){ce[e]="false"!==t}var o=s.$normalize("md-"+e);t&&W(e,t),s.hasOwnProperty(o)&&n(s[o]),s.$observe(o,n)}function E(){ue=!0,t.element(r).off("resize",I)}function v(e){t.element(le.wrapper).toggleClass("md-stretch-tabs",U()),re()}function M(e){ce.shouldCenterTabs=q()}function $(e,t){e!==t&&d.nextTick(ce.updateInkBarStyles)}function y(e,t){e!==t&&(ce.maxTabWidth=G(),ce.shouldCenterTabs=q(),d.nextTick(function(){ce.maxTabWidth=G(),J(ce.selectedIndex)}))}function A(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function C(n){var o=ce.shouldCenterTabs?"":"-"+n+"px";t.element(le.paging).css(i.CSS.TRANSFORM,"translate3d("+o+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function T(e,t){e!==t&&le.tabs[e]&&(J(),Z())}function k(t,n){t!==n&&(ce.selectedIndex=V(t),ce.lastSelectedIndex=n,ce.updateInkBarStyles(),oe(),J(t),e.$broadcast("$mdTabsChanged"),ce.tabs[n]&&ce.tabs[n].scope.deselect(),ce.tabs[t]&&ce.tabs[t].scope.select())}function w(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function x(){x.watcher||(x.watcher=e.$watch(function(){d.nextTick(function(){x.watcher&&o.prop("offsetParent")&&(x.watcher(),x.watcher=null,I())},!1)}))}function N(e){switch(e.keyCode){case i.KEY_CODE.LEFT_ARROW:e.preventDefault(),Q(-1,!0);break;case i.KEY_CODE.RIGHT_ARROW:e.preventDefault(),Q(1,!0);break;case i.KEY_CODE.SPACE:case i.KEY_CODE.ENTER:e.preventDefault(),se||(ce.selectedIndex=ce.focusIndex)}ce.lastClick=!1}function _(e){se||(ce.focusIndex=ce.selectedIndex=e),ce.lastClick=!0,d.nextTick(function(){ce.tabs[e].element.triggerHandler("click")},!1)}function H(e){ce.shouldPaginate&&(e.preventDefault(),ce.offsetLeft=ae(ce.offsetLeft-e.wheelDelta))}function S(){var e,t,n=le.canvas.clientWidth,o=n+ce.offsetLeft;for(e=0;e<le.tabs.length&&(t=le.tabs[e],!(t.offsetLeft+t.offsetWidth>o));e++);ce.offsetLeft=ae(t.offsetLeft)}function D(){var e,t;for(e=0;e<le.tabs.length&&(t=le.tabs[e],!(t.offsetLeft+t.offsetWidth>=ce.offsetLeft));e++);ce.offsetLeft=ae(t.offsetLeft+t.offsetWidth-le.canvas.clientWidth)}function I(){ce.lastSelectedIndex=ce.selectedIndex,ce.offsetLeft=ae(ce.offsetLeft),d.nextTick(function(){ce.updateInkBarStyles(),Y()})}function O(e){t.element(le.inkBar).toggleClass("ng-hide",e)}function R(e){o.toggleClass("md-dynamic-height",e)}function L(e){if(!ue){var t=ce.selectedIndex,n=ce.tabs.splice(e.getIndex(),1)[0];ne(),ce.selectedIndex===t&&(n.scope.deselect(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select()),d.nextTick(function(){Y(),ce.offsetLeft=ae(ce.offsetLeft)})}}function P(e,n){var o=he,r={getIndex:function(){return ce.tabs.indexOf(i)},isActive:function(){return this.getIndex()===ce.selectedIndex},isLeft:function(){return this.getIndex()<ce.selectedIndex},isRight:function(){return this.getIndex()>ce.selectedIndex},shouldRender:function(){return!ce.noDisconnect||this.isActive()},hasFocus:function(){return!ce.lastClick&&ce.hasFocus&&this.getIndex()===ce.focusIndex},id:d.nextUid()},i=t.extend(r,e);return t.isDefined(n)?ce.tabs.splice(n,0,i):ce.tabs.push(i),ee(),te(),d.nextTick(function(){Y(),o&&ce.autoselect&&d.nextTick(function(){d.nextTick(function(){_(ce.tabs.indexOf(i))})})}),i}function F(){var e={};return e.wrapper=o[0].getElementsByTagName("md-tabs-wrapper")[0],e.data=o[0].getElementsByTagName("md-tab-data")[0],e.canvas=e.wrapper.getElementsByTagName("md-tabs-canvas")[0],e.paging=e.canvas.getElementsByTagName("md-pagination-wrapper")[0],e.tabs=e.paging.getElementsByTagName("md-tab-item"),e.dummies=e.canvas.getElementsByTagName("md-dummy-tab"),e.inkBar=e.paging.getElementsByTagName("md-ink-bar")[0],e.contentsWrapper=o[0].getElementsByTagName("md-tabs-content-wrapper")[0],e.contents=e.contentsWrapper.getElementsByTagName("md-tab-content"),e}function B(){return ce.offsetLeft>0}function z(){var e=le.tabs[le.tabs.length-1];return e&&e.offsetLeft+e.offsetWidth>le.canvas.clientWidth+ce.offsetLeft}function U(){switch(ce.stretchTabs){case"always":return!0;case"never":return!1;default:return!ce.shouldPaginate&&r.matchMedia("(max-width: 600px)").matches}}function q(){return ce.centerTabs&&!ce.shouldPaginate}function j(){if(ce.noPagination||!he)return!1;var e=o.prop("clientWidth");return t.forEach(le.dummies,function(t){e-=t.offsetWidth}),0>e}function V(e){if(-1===e)return-1;var t,n,o=Math.max(ce.tabs.length-e,e);for(t=0;o>=t;t++){if(n=ce.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=ce.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function W(e,t,n){Object.defineProperty(ce,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function Y(){U()||K(),ce.maxTabWidth=G(),ce.shouldPaginate=j()}function K(){var e=1;t.forEach(le.dummies,function(t){e+=t.offsetWidth}),t.element(le.paging).css("width",e+"px")}function G(){return o.prop("clientWidth")}function X(){var e=ce.tabs[ce.selectedIndex],t=ce.tabs[ce.focusIndex];ce.tabs=ce.tabs.sort(function(e,t){return e.index-t.index}),ce.selectedIndex=ce.tabs.indexOf(e),ce.focusIndex=ce.tabs.indexOf(t)}function Q(e,t){var n,o=t?"focusIndex":"selectedIndex",r=ce[o];for(n=r+e;ce.tabs[n]&&ce.tabs[n].scope.disabled;n+=e);ce.tabs[n]&&(ce[o]=n)}function Z(){le.dummies[ce.focusIndex].focus()}function J(e){if(null==e&&(e=ce.focusIndex),le.tabs[e]&&!ce.shouldCenterTabs){var t=le.tabs[e],n=t.offsetLeft,o=t.offsetWidth+n;ce.offsetLeft=Math.max(ce.offsetLeft,ae(o-le.canvas.clientWidth+64)),ce.offsetLeft=Math.min(ce.offsetLeft,ae(n))}}function ee(){me.forEach(function(e){d.nextTick(e)}),me=[]}function te(){var e=!1;t.forEach(ce.tabs,function(t){t.template&&(e=!0)}),ce.hasContent=e}function ne(){ce.selectedIndex=V(ce.selectedIndex),ce.focusIndex=V(ce.focusIndex)}function oe(){if(!ce.dynamicHeight)return o.css("height","");if(!ce.tabs.length)return me.push(oe);var e=le.contents[ce.selectedIndex],t=e?e.offsetHeight:0,r=le.wrapper.offsetHeight,i=t+r,a=o.prop("offsetHeight");if("bottom"===o.attr("md-align-tabs")&&(a-=r,i-=r,o.attr("md-border-bottom")!==n&&++a),a!==i){se=!0;var s={height:a+"px"},l={height:i+"px"};o.css(s),c(o,{from:s,to:l,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),se=!1})}}function re(){if(!le.tabs[ce.selectedIndex])return void t.element(le.inkBar).css({left:"auto",right:"auto"});if(!ce.tabs.length)return me.push(ce.updateInkBarStyles);if(!o.prop("offsetParent"))return x();var e,n=ce.selectedIndex,r=le.paging.offsetWidth,i=le.tabs[n],a=i.offsetLeft,c=r-a-i.offsetWidth;ce.shouldCenterTabs&&(e=Array.prototype.slice.call(le.tabs).reduce(function(e,t){return e+t.offsetWidth},0),r>e&&d.nextTick(re,!1)),ie(),t.element(le.inkBar).css({left:a+"px",right:c+"px"})}function ie(){var e=ce.selectedIndex,n=ce.lastSelectedIndex,o=t.element(le.inkBar);t.isNumber(n)&&o.toggleClass("md-left",n>e).toggleClass("md-right",e>n)}function ae(e){if(!le.tabs.length||!ce.shouldPaginate)return 0;var t=le.tabs[le.tabs.length-1],n=t.offsetLeft+t.offsetWidth;return e=Math.max(0,e),e=Math.min(n-le.canvas.clientWidth,e)}function de(e,n){var o={colorElement:t.element(le.inkBar)};a.attach(e,n,o)}var ce=this,se=!1,le=F(),me=[],ue=!1,he=!1;g("stretchTabs",v),W("focusIndex",T,ce.selectedIndex||0),W("offsetLeft",C,0),W("hasContent",A,!1),W("maxTabWidth",$,G()),W("shouldPaginate",y,!1),b("noInkBar",O),b("dynamicHeight",R),b("noPagination"),b("swipeContent"),b("noDisconnect"),b("autoselect"),b("centerTabs",M,!1),b("enableDisconnect"),ce.scope=e,ce.parent=e.$parent,ce.tabs=[],ce.lastSelectedIndex=null,ce.hasFocus=!1,ce.lastClick=!0,ce.shouldCenterTabs=q(),ce.updatePagination=d.debounce(Y,100),ce.redirectFocus=Z,ce.attachRipple=de,ce.insertTab=P,ce.removeTab=L,ce.select=_,ce.scroll=H,ce.nextPage=S,ce.previousPage=D,ce.keydown=N,ce.canPageForward=z,ce.canPageBack=B,ce.refreshIndex=ne,ce.incrementIndex=Q,ce.getTabElementIndex=w,ce.updateInkBarStyles=d.debounce(re,100),ce.updateTabOrder=d.debounce(X,100),u()}t.module("material.components.tabs").controller("MdTabsController",e),e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming"]}(),function(){function e(){return{scope:{selectedIndex:"=?mdSelected"},template:function(e,t){return t.$mdTabsTemplate=e.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-next-button> <md-tabs-canvas tabindex="0" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" style="max-width: {{ $mdTabsCtrl.maxTabWidth + \'px\' }}" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <div class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </div> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0"> <md-tab-content id="tab-content-{{::tab.id}}" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';
},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}t.module("material.components.tabs").directive("mdTabs",e)}(),function(){function e(e,t){function n(n,o,r,i){function a(){n.$watch("connected",function(e){e===!1?d():c()}),n.$on("$destroy",c)}function d(){i.enableDisconnect&&t.disconnectScope(s)}function c(){i.enableDisconnect&&t.reconnectScope(s)}if(i){var s=i.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(s),o.on("DOMSubtreeModified",function(){i.updatePagination(),i.updateInkBarStyles()}),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}t.module("material.components.tabs").directive("mdTabsTemplate",e),e.$inject=["$compile","$mdUtil"]}(),function(){t.module("material.core").constant("$MD_THEME_CSS","md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled] {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover, .md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab md-icon, .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-primary, .md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab, .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-raised, .md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-contrast}}';  background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon {    color: '{{background-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }a.md-button.md-THEME_NAME-theme.md-warn, .md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab, .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-700}}'; }  a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }a.md-button.md-THEME_NAME-theme.md-accent, .md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab, .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-700}}'; }  a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled], .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: not-allowed; }  a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon, .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }a.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  color: '{{foreground-1}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-hue-1}}';  color: '{{foreground-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-THEME_NAME-theme .md-calendar-date.md-focus .md-calendar-date-selection-indicator {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled, .md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{foreground-3}}'; }/** Theme styles for mdDatepicker. */md-datepicker.md-THEME_NAME-theme {  background: '{{background-color}}'; }.md-THEME_NAME-theme .md-datepicker-input {  color: '{{background-contrast}}';  background: '{{background-color}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder, .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{background-300}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-500}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-300}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  fill: '{{primary-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar, .md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-color}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-messages] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme data-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme x-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message-exp] :not(.md-char-counter) {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], md-input-container.md-THEME_NAME-theme .md-input [disabled] {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-list.md-THEME_NAME-theme md-list-item button {  background-color: '{{background-color}}'; }  md-list.md-THEME_NAME-theme md-list-item button.md-button:not([disabled]):hover {    background-color: '{{background-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{foreground-4}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover, md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{foreground-2}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-color}}';  color: '{{foreground-1}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{primary-contrast}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled], md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked:not([disabled]).md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-value {  color: '{{warn-500}}' !important;  border-bottom-color: '{{warn-500}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-option[disabled] {  color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-toast.md-THEME_NAME-theme {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");
}()}(window,window.angular);
/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(G,t,Ra){'use strict';function va(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function wa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Ha(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function S(a,b,c){var d="";a=W(a)?a:a&&M(a)&&a.length?a.split(/\s+/):[];q(a,function(a,u){a&&0<a.length&&(d+=0<u?" ":"",d+=c?b+a:a+b)});return d}function Ia(a){if(a instanceof J)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return J(la(a))}if(1===a.nodeType)return J(a)}function la(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ja(a,b,c){q(b,function(b){a.addClass(b,c)})}function Ka(a,b,c){q(b,function(b){a.removeClass(b,c)})}function P(a){return function(b,c){c.addClass&&(Ja(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ka(a,b,c.removeClass),c.removeClass=null)}}function ha(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
L;a.domOperation=function(){a.$$domOperationFired=!0;b();b=L};a.$$prepared=!0}return a}function da(a,b){xa(a,b);ya(a,b)}function xa(a,b){b.from&&(a.css(b.from),b.from=null)}function ya(a,b){b.to&&(a.css(b.to),b.to=null)}function Q(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),g=(b.removeClass||"")+" "+(c.removeClass||"");a=La(a.attr("class"),d,g);c.preparationClasses&&(b.preparationClasses=X(c.preparationClasses,b.preparationClasses),delete c.preparationClasses);d=b.domOperation!==L?b.domOperation:
null;za(b,c);d&&(b.domOperation=d);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function La(a,b,c){function d(a){M(a)&&(a=a.split(" "));var b={};q(a,function(a){a.length&&(b[a]=!0)});return b}var g={};a=d(a);b=d(b);q(b,function(a,b){g[b]=1});c=d(c);q(c,function(a,b){g[b]=1===g[b]?null:-1});var u={addClass:"",removeClass:""};q(g,function(b,c){var g,d;1===b?(g="addClass",d=!a[c]):-1===b&&(g="removeClass",d=a[c]);d&&(u[g].length&&(u[g]+=" "),u[g]+=c)});
return u}function H(a){return a instanceof t.element?a[0]:a}function Ma(a,b,c){var d="";b&&(d=S(b,"ng-",!0));c.addClass&&(d=X(d,S(c.addClass,"-add")));c.removeClass&&(d=X(d,S(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ia(a,b){var c=b?"-"+b+"s":"";ea(a,[fa,c]);return[fa,c]}function ma(a,b){var c=b?"paused":"",d=T+"PlayState";ea(a,[d,c]);return[d,c]}function ea(a,b){a.style[b[0]]=b[1]}function X(a,b){return a?b?a+" "+b:a:b}function Aa(a,b,c){var d=Object.create(null),
g=a.getComputedStyle(b)||{};q(c,function(a,b){var c=g[a];if(c){var f=c.charAt(0);if("-"===f||"+"===f||0<=f)c=Na(c);0===c&&(c=null);d[b]=c}});return d}function Na(a){var b=0;a=a.split(/\s*,\s*/);q(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function na(a){return 0===a||null!=a}function Ba(a,b){var c=N,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Ca(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},
count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Da(a,b,c){q(c,function(c){a[c]=U(a[c])?a[c]:b.style.getPropertyValue(c)})}var L=t.noop,za=t.extend,J=t.element,q=t.forEach,W=t.isArray,M=t.isString,oa=t.isObject,pa=t.isUndefined,U=t.isDefined,Ea=t.isFunction,qa=t.isElement,N,ra,T,sa;pa(G.ontransitionend)&&U(G.onwebkittransitionend)?(N="WebkitTransition",ra="webkitTransitionEnd transitionend"):
(N="transition",ra="transitionend");pa(G.onanimationend)&&U(G.onwebkitanimationend)?(T="WebkitAnimation",sa="webkitAnimationEnd animationend"):(T="animation",sa="animationend");var ja=T+"Delay",ta=T+"Duration",fa=N+"Delay";G=N+"Duration";var Oa={transitionDuration:G,transitionDelay:fa,transitionProperty:N+"Property",animationDuration:ta,animationDelay:ja,animationIterationCount:T+"IterationCount"},Pa={transitionDuration:G,transitionDelay:fa,animationDuration:ta,animationDelay:ja};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),z=0;z<b.length;z++)b[z]();g||a(function(){g||c()})}}var d,g;d=b.queue=[];b.waitUntilQuiet=function(b){g&&g();g=a(function(){g=
null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$sniffer","$$animateAsyncRun",function(a,b,c){function d(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=c();this._state=0}d.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};d.all=function(a,b){function c(z){f=f&&z;++d===a.length&&b(f)}var d=0,f=!0;q(a,function(a){a.done(c)})};d.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?
a():this._doneCallbacks.push(a)},progress:L,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();
this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return d}]).factory("$$animateAsyncRun",["$$rAF",function(a){function b(b){c.push(b);1<c.length||a(function(){for(var a=0;a<c.length;a++)c[a]();c=[]})}var c=[];return function(){var a=
!1;b(function(){a=!0});return function(c){a?c():b(c)}}}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a,b,c,q){return d[a].some(function(a){return a(b,c,q)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==
c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});d.cancel.push(function(a,b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",
"$$forceReflow",function(d,u,z,x,f,k,$,t,h,I){function A(){var a=!1;return function(b){a?b():u.$$postDigest(function(){a=!0;b()})}}function Y(a,b){var c=H(a),e=[],d=v[b];d&&q(d,function(a){a.node.contains(c)&&e.push(a.callback)});return e}function E(a,e,l){function n(b,c,e,v){z(function(){var b=Y(a,c);b.length&&d(function(){q(b,function(b){b(a,e,v)})})});b.progress(c,e,v)}function v(b){var c=a,e=l;e.preparationClasses&&(c.removeClass(e.preparationClasses),e.preparationClasses=null);e.activeClasses&&
(c.removeClass(e.activeClasses),e.activeClasses=null);Ga(a,l);da(a,l);l.domOperation();f.complete(!b)}var s,C;if(a=Ia(a))s=H(a),C=a.parent();l=ha(l);var f=new $,z=A();W(l.addClass)&&(l.addClass=l.addClass.join(" "));l.addClass&&!M(l.addClass)&&(l.addClass=null);W(l.removeClass)&&(l.removeClass=l.removeClass.join(" "));l.removeClass&&!M(l.removeClass)&&(l.removeClass=null);l.from&&!oa(l.from)&&(l.from=null);l.to&&!oa(l.to)&&(l.to=null);if(!s)return v(),f;var h=[s.className,l.addClass,l.removeClass].join(" ");
if(!Qa(h))return v(),f;var E=0<=["enter","move","leave"].indexOf(e),x=!F||D.get(s),h=!x&&m.get(s)||{},I=!!h.state;x||I&&1==h.state||(x=!ka(a,C,e));if(x)return v(),f;E&&w(a);C={structural:E,element:a,event:e,close:v,options:l,runner:f};if(I){if(b("skip",a,C,h)){if(2===h.state)return v(),f;Q(a,h.options,l);return h.runner}if(b("cancel",a,C,h))if(2===h.state)h.runner.end();else if(h.structural)h.close();else return Q(a,h.options,C.options),h.runner;else if(b("join",a,C,h))if(2===h.state)Q(a,l,{});else return Ma(a,
E?e:null,l),e=C.event=h.event,l=Q(a,h.options,C.options),h.runner}else Q(a,l,{});(I=C.structural)||(I="animate"===C.event&&0<Object.keys(C.options.to||{}).length||c(C.options));if(!I)return v(),y(a),f;var t=(h.counter||0)+1;C.counter=t;r(a,1,C);u.$$postDigest(function(){var b=m.get(s),d=!b,b=b||{},h=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||c(b.options));if(d||b.counter!==t||!h){d&&(Ga(a,l),da(a,l));if(d||E&&b.event!==e)l.domOperation(),f.end();h||y(a)}else e=!b.structural&&c(b.options,
!0)?"setClass":b.event,r(a,2),b=k(a,e,b.options),b.done(function(b){v(!b);(b=m.get(s))&&b.counter===t&&y(H(a));n(f,e,"close",{})}),f.setHost(b),n(f,e,"start",{})});return f}function w(a){a=H(a).querySelectorAll("[data-ng-animate]");q(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function y(a){a=H(a);a.removeAttribute("data-ng-animate");m.remove(a)}function e(a,b){return H(a)===H(b)}function ka(a,b,c){c=J(x[0].body);
var d=e(a,c)||"HTML"===a[0].nodeName,v=e(a,z),n=!1,y;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){v||(v=e(b,z));a=b[0];if(1!==a.nodeType)break;var r=m.get(a)||{};n||(n=r.structural||D.get(a));if(pa(y)||!0===y)a=b.data("$$ngAnimateChildren"),U(a)&&(y=a);if(n&&!1===y)break;v||(v=e(b,z),v||(a=b.data("$ngAnimatePin"))&&(b=a));d||(d=e(b,c));b=b.parent()}return(!n||y)&&v&&d}function r(a,b,c){c=c||{};c.state=b;a=H(a);a.setAttribute("data-ng-animate",b);c=(b=m.get(a))?za(b,c):c;m.put(a,c)}var m=new f,
D=new f,F=null,s=u.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(s(),u.$$postDigest(function(){u.$$postDigest(function(){null===F&&(F=!0)})}))}),v={},n=a.classNameFilter(),Qa=n?function(a){return n.test(a)}:function(){return!0},Ga=P(h);return{on:function(a,b,c){b=la(b);v[a]=v[a]||[];v[a].push({node:b,callback:c})},off:function(a,b,c){function e(a,b,c){var d=la(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=v[a];d&&(v[a]=1===arguments.length?
null:e(d,b,c))},pin:function(a,b){va(qa(a),"element","not an element");va(qa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,e){c=c||{};c.domOperation=e;return E(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!F;else if(qa(a)){var e=H(a),d=D.get(e);1===c?b=!d:(b=!!b)?d&&D.remove(e):D.put(e,!0)}else b=F=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=
[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,g,u,z,x,f){function k(a){function b(a){if(a.processed)return a;a.processed=!0;var e=a.domNode,d=e.parentNode;f.put(e,a);for(var r;d;){if(r=f.get(d)){r.processed||(r=b(r));break}d=d.parentNode}(r||c).children.push(a);return a}var c={children:[]},d,f=new x;for(d=0;d<a.length;d++){var g=a[d];f.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=
[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var m=0,f=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=m,m=0,b.push(f),f=[]);f.push(g.fn);g.children.forEach(function(a){m++;c.push(a)});a--}f.length&&b.push(f);return b}(c)}var $=[],t=P(a);return function(h,x,A){function Y(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];q(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function E(a){var b=[],
c={};q(a,function(a,e){var d=H(a.element),v=0<=["enter","move"].indexOf(a.event),d=a.structural?Y(d):[];if(d.length){var m=v?"to":"from";q(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][m]={animationID:e,element:J(a)}})}else b.push(a)});var e={},d={};q(c,function(c,m){var f=c.from,y=c.to;if(f&&y){var g=a[f.animationID],r=a[y.animationID],s=f.animationID.toString();if(!d[s]){var h=d[s]={structural:!0,beforeStart:function(){g.beforeStart();r.beforeStart()},close:function(){g.close();
r.close()},classes:w(g.classes,r.classes),from:g,to:r,anchors:[]};h.classes.length?b.push(h):(b.push(g),b.push(r))}d[s].anchors.push({out:f.element,"in":y.element})}else f=f?f.animationID:y.animationID,y=f.toString(),e[y]||(e[y]=!0,b.push(a[f]))});return b}function w(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],e=0;e<a.length;e++){var d=a[e];if("ng-"!==d.substring(0,3))for(var m=0;m<b.length;m++)if(d===b[m]){c.push(d);break}}return c.join(" ")}function y(a){for(var b=c.length-1;0<=b;b--){var e=
c[b];if(u.has(e)&&(e=u.get(e)(a)))return e}}function e(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ka(){var a=b(h);!a||"leave"===x&&A.$$domOperationFired||a.end()}function r(b){h.off("$destroy",ka);h.removeData("$$animationRunner");t(h,A);da(h,A);A.domOperation();s&&a.removeClass(h,s);h.removeClass("ng-animate");D.complete(!b)}A=ha(A);var m=0<=["enter","move","leave"].indexOf(x),D=new z({end:function(){r()},cancel:function(){r(!0)}});
if(!c.length)return r(),D;h.data("$$animationRunner",D);var F=wa(h.attr("class"),wa(A.addClass,A.removeClass)),s=A.tempClasses;s&&(F+=" "+s,A.tempClasses=null);$.push({element:h,classes:F,event:x,structural:m,options:A,beforeStart:function(){h.addClass("ng-animate");s&&a.addClass(h,s)},close:r});h.on("$destroy",ka);if(1<$.length)return D;g.$$postDigest(function(){var a=[];q($,function(c){b(c.element)?a.push(c):c.close()});$.length=0;var c=E(a),d=[];q(c,function(a){d.push({domNode:H(a.from?a.from.element:
a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var m=y(a);m&&(c=m.start)}c?(c=c(),c.done(function(a){d(!a)}),e(a,c)):d()}})});f(k(d))});return D}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ca(),c=Ca();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$animate",function(a,g,u,z,x,f,k,t){function Fa(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=
++E))+"-"+a.getAttribute("class")+"-"+b}function h(f,e,h,r){var m;0<b.count(h)&&(m=c.get(h),m||(e=S(e,"-stagger"),g.addClass(f,e),m=Aa(a,f,r),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),g.removeClass(f,e),c.put(h,m)));return m||{}}function I(a){w.push(a);k.waitUntilQuiet(function(){b.flush();c.flush();for(var a=x(),d=0;d<w.length;d++)w[d](a);w.length=0})}function A(c,e,f){e=b.get(f);e||(e=Aa(a,c,Oa),"infinite"===e.animationIterationCount&&
(e.animationIterationCount=1));b.put(f,e);c=e;f=c.animationDelay;e=c.transitionDelay;c.maxDelay=f&&e?Math.max(f,e):f||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var Y=P(g),E=0,w=[];return function(a,c){function d(){m()}function r(){m(!0)}function m(b){if(!(E||ua&&l)){E=!0;l=!1;c.$$skipPreparationClasses||g.removeClass(a,Z);g.removeClass(a,X);ma(n,!1);ia(n,!1);q(w,function(a){n.style[a[0]]=""});Y(a,c);da(a,c);Object.keys(v).length&&q(v,function(a,
b){a?n.style.setProperty(b,a):n.style.removeProperty(b)});if(c.onDone)c.onDone();G&&G.complete(!b)}}function D(a){p.blockTransition&&ia(n,a);p.blockKeyframeAnimation&&ma(n,!!a)}function F(){G=new u({end:d,cancel:r});I(L);m();return{$$willAnimate:!1,start:function(){return G},end:d}}function s(){function b(){if(!E){D(!1);q(w,function(a){n.style[a[0]]=a[1]});Y(a,c);g.addClass(a,X);if(p.recalculateTimingStyles){ga=n.className+" "+Z;aa=Fa(n,ga);B=A(n,ga,aa);V=B.maxDelay;C=Math.max(V,0);K=B.maxDuration;
if(0===K){m();return}p.hasTransitions=0<B.transitionDuration;p.hasAnimations=0<B.animationDuration}p.applyAnimationDelay&&(V="boolean"!==typeof c.delay&&na(c.delay)?parseFloat(c.delay):V,C=Math.max(V,0),B.animationDelay=V,ca=[ja,V+"s"],w.push(ca),n.style[ca[0]]=ca[1]);M=1E3*C;P=1E3*K;if(c.easing){var s,k=c.easing;p.hasTransitions&&(s=N+"TimingFunction",w.push([s,k]),n.style[s]=k);p.hasAnimations&&(s=T+"TimingFunction",w.push([s,k]),n.style[s]=k)}B.transitionDuration&&h.push(ra);B.animationDuration&&
h.push(sa);r=Date.now();var l=M+1.5*P;s=r+l;var k=a.data("$$animateCss")||[],x=!0;if(k.length){var F=k[0];(x=s>F.expectedEndTime)?z.cancel(F.timer):k.push(m)}x&&(l=z(d,l,!1),k[0]={timer:l,expectedEndTime:s},k.push(m),a.data("$$animateCss",k));a.on(h.join(" "),f);c.to&&(c.cleanupStyles&&Da(v,n,Object.keys(c.to)),ya(a,c))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}function f(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||
b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-r,0)>=M&&b>=K&&(ua=!0,m())}if(!E)if(n.parentNode){var r,h=[],s=function(a){if(ua)l&&a&&(l=!1,m());else if(l=!a,B.animationDuration)if(a=ma(n,l),l)w.push(a);else{var b=w,c=b.indexOf(a);0<=a&&b.splice(c,1)}},k=0<U&&(B.transitionDuration&&0===R.transitionDuration||B.animationDuration&&0===R.animationDuration)&&Math.max(R.animationDelay,R.transitionDelay);k?z(b,Math.floor(k*U*1E3),!1):b();J.resume=function(){s(!0)};J.pause=function(){s(!1)}}else m()}
var v={},n=H(a);if(!n||!n.parentNode||!t.enabled())return F();c=ha(c);var w=[],x=a.attr("class"),k=Ha(c),E,l,ua,G,J,C,M,K,P;if(0===c.duration||!f.animations&&!f.transitions)return F();var ba=c.event&&W(c.event)?c.event.join(" "):c.event,Q="",O="";ba&&c.structural?Q=S(ba,"ng-",!0):ba&&(Q=ba);c.addClass&&(O+=S(c.addClass,"-add"));c.removeClass&&(O.length&&(O+=" "),O+=S(c.removeClass,"-remove"));c.applyClassesEarly&&O.length&&Y(a,c);var Z=[Q,O].join(" ").trim(),ga=x+" "+Z,X=S(Z,"-active"),x=k.to&&0<
Object.keys(k.to).length;if(!(0<(c.keyframeStyle||"").length||x||Z))return F();var aa,R;0<c.stagger?(k=parseFloat(c.stagger),R={transitionDelay:k,animationDelay:k,transitionDuration:0,animationDuration:0}):(aa=Fa(n,ga),R=h(n,Z,aa,Pa));c.$$skipPreparationClasses||g.addClass(a,Z);c.transitionStyle&&(k=[N,c.transitionStyle],ea(n,k),w.push(k));0<=c.duration&&(k=0<n.style[N].length,k=Ba(c.duration,k),ea(n,k),w.push(k));c.keyframeStyle&&(k=[T,c.keyframeStyle],ea(n,k),w.push(k));var U=R?0<=c.staggerIndex?
c.staggerIndex:b.count(aa):0;(ba=0===U)&&!c.skipBlocking&&ia(n,9999);var B=A(n,ga,aa),V=B.maxDelay;C=Math.max(V,0);K=B.maxDuration;var p={};p.hasTransitions=0<B.transitionDuration;p.hasAnimations=0<B.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"==B.transitionProperty;p.applyTransitionDuration=x&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=c.duration&&p.hasAnimations;p.applyTransitionDelay=na(c.delay)&&(p.applyTransitionDuration||
p.hasTransitions);p.applyAnimationDelay=na(c.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<O.length;if(p.applyTransitionDuration||p.applyAnimationDuration)K=c.duration?parseFloat(c.duration):K,p.applyTransitionDuration&&(p.hasTransitions=!0,B.transitionDuration=K,k=0<n.style[N+"Property"].length,w.push(Ba(K,k))),p.applyAnimationDuration&&(p.hasAnimations=!0,B.animationDuration=K,w.push([ta,K+"s"]));if(0===K&&!p.recalculateTimingStyles)return F();if(null!=c.delay){var ca=parseFloat(c.delay);
p.applyTransitionDelay&&w.push([fa,ca+"s"]);p.applyAnimationDelay&&w.push([ja,ca+"s"])}null==c.duration&&0<B.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||ba);M=1E3*C;P=1E3*K;c.skipBlocking||(p.blockTransition=0<B.transitionDuration,p.blockKeyframeAnimation=0<B.animationDuration&&0<R.animationDelay&&0===R.animationDuration);c.from&&(c.cleanupStyles&&Da(v,n,Object.keys(c.from)),xa(a,c));p.blockTransition||p.blockKeyframeAnimation?D(K):c.skipBlocking||ia(n,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!E)return J={end:d,cancel:r,resume:null,pause:null},G=new u(J),I(s),G}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,g,u,z,x){function f(a){return a.replace(/\bng-\S+\b/g,"")}function k(a,b){M(a)&&(a=a.split(" "));M(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function t(c,h,g){function x(a){var b={},c=H(a).getBoundingClientRect();q(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function e(){var c=f(g.attr("class")||""),d=k(c,m),c=k(m,c),d=a(r,{to:x(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function z(){r.remove();h.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var r=
J(H(h).cloneNode(!0)),m=f(r.attr("class")||"");h.addClass("ng-animate-shim");g.addClass("ng-animate-shim");r.addClass("ng-anchor");A.append(r);var D;c=function(){var c=a(r,{addClass:"ng-anchor-out",delay:!0,from:x(h)});return c.$$willAnimate?c:null}();if(!c&&(D=e(),!D))return z();var F=c||D;return{start:function(){function a(){c&&c.end()}var b,c=F.start();c.done(function(){c=null;if(!D&&(D=e()))return c=D.start(),c.done(function(){c=null;z();b.complete()}),c;z();b.complete()});return b=new d({end:a,
cancel:a})}}}function G(a,b,c,f){var e=h(a,L),g=h(b,L),k=[];q(f,function(a){(a=t(c,a.out,a["in"]))&&k.push(a)});if(e||g||0!==k.length)return{start:function(){function a(){q(b,function(a){a.end()})}var b=[];e&&b.push(e.start());g&&b.push(g.start());q(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function h(c){var d=c.element,f=c.options||{};c.structural&&(f.event=c.event,f.structural=!0,f.applyClassesEarly=!0,"leave"===c.event&&(f.onDone=
f.domOperation));f.preparationClasses&&(f.event=X(f.event,f.preparationClasses));c=a(d,f);return c.$$willAnimate?c:null}if(!u.animations&&!u.transitions)return L;var I=x[0].body;c=H(g);var A=J(c.parentNode&&11===c.parentNode.nodeType||I.contains(c)?c:I);P(z);return function(a){return a.from&&a.to?G(a.from,a.to,a.classes,a.anchors):h(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function g(c){c=W(c)?c:c.split(" ");
for(var d=[],f={},g=0;g<c.length;g++){var q=c[g],u=a.$$registeredAnimations[q];u&&!f[q]&&(d.push(b.get(u)),f[q]=!0)}return d}var u=P(d);return function(a,b,d,k){function t(){k.domOperation();u(a,k)}function G(a,b,d,f,e){switch(d){case "animate":b=[b,f.from,f.to,e];break;case "setClass":b=[b,A,H,e];break;case "addClass":b=[b,A,e];break;case "removeClass":b=[b,H,e];break;default:b=[b,e]}b.push(f);if(a=a.apply(a,b))if(Ea(a.start)&&(a=a.start()),a instanceof c)a.done(e);else if(Ea(a))return a;return L}
function h(a,b,d,e,f){var g=[];q(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||L)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=G(h,a,b,d,function(a){k(!1===a)});return e})});return g}function I(a,b,d,e,f){var g=h(a,b,d,e,f);if(0===g.length){var k,u;"beforeSetClass"===f?(k=h(a,"removeClass",d,e,"beforeRemoveClass"),u=h(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(k=h(a,"removeClass",d,e,"removeClass"),u=h(a,"addClass",
d,e,"addClass"));k&&(g=g.concat(k));u&&(g=g.concat(u))}if(0!==g.length)return function(a){var b=[];g.length&&q(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){q(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&oa(d)&&(k=d,d=null);k=ha(k);d||(d=a.attr("class")||"",k.addClass&&(d+=" "+k.addClass),k.removeClass&&(d+=" "+k.removeClass));var A=k.addClass,H=k.removeClass,E=g(d),w,y;if(E.length){var e,J;"leave"==b?(J="leave",e="afterLeave"):(J="before"+b.charAt(0).toUpperCase()+
b.substr(1),e=b);"enter"!==b&&"move"!==b&&(w=I(a,b,k,E,J));y=I(a,b,k,E,e)}if(w||y)return{start:function(){function b(c){f=!0;t();da(a,k);g.complete(c)}var d,e=[];w&&e.push(function(a){d=w(a)});e.length?e.push(function(a){t();a(!0)}):t();y&&e.push(function(a){d=y(a)});var f=!1,g=new c({end:function(){f||((d||L)(void 0),b(void 0))},cancel:function(){f||((d||L)(!0),b(!0))}});c.chain(e,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");
this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),t=d(a.to);if(b||t)return{start:function(){function a(){return function(){q(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());t&&d.push(t.start());c.all(d,function(a){g.complete(a)});var g=new c({end:a(),cancel:a()});return g}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,p,t){'use strict';var q="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),n=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,f,l,m){return function(d,e,b){var g=b.$normalize(f);!c[g]||n(e,l)||b[g]||d.$watch(b[a],function(b){b=m?!b:!!b;e.attr(f,b)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};
this.config=function(a){c=p.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngModel",["$aria",function(a){function c(c,m,d){return a.config(m)&&!d.attr(c)}function k(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function f(a,c){var d=
a.type,e=a.role;return"checkbox"===(d||e)||"menuitemcheckbox"===e?"checkbox":"radio"===(d||e)||"menuitemradio"===e?"radio":"range"===d||"progressbar"===e||"slider"===e?"range":"textbox"===(d||e)||"TEXTAREA"===c[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",priority:200,compile:function(l,m){var d=f(m,l);return{pre:function(a,b,c,h){"checkbox"===d&&"checkbox"!==c.type&&(h.$isEmpty=function(b){return!1===b})},post:function(e,b,g,h){function f(){return h.$modelValue}function m(){return r?
(r=!1,function(a){a=g.value==h.$viewValue;b.attr("aria-checked",a);b.attr("tabindex",0-!a)}):function(a){b.attr("aria-checked",g.value==h.$viewValue)}}function l(){b.attr("aria-checked",!h.$isEmpty(h.$viewValue))}var r=c("tabindex","tabindex",b);switch(d){case "radio":case "checkbox":k(d,b)&&b.attr("role",d);c("aria-checked","ariaChecked",b)&&e.$watch(f,"radio"===d?m():l);r&&b.attr("tabindex",0);break;case "range":k(d,b)&&b.attr("role","slider");if(a.config("ariaValue")){var n=!b.attr("aria-valuemin")&&
(g.hasOwnProperty("min")||g.hasOwnProperty("ngMin")),p=!b.attr("aria-valuemax")&&(g.hasOwnProperty("max")||g.hasOwnProperty("ngMax")),q=!b.attr("aria-valuenow");n&&g.$observe("min",function(a){b.attr("aria-valuemin",a)});p&&g.$observe("max",function(a){b.attr("aria-valuemax",a)});q&&e.$watch(f,function(a){b.attr("aria-valuenow",a)})}r&&b.attr("tabindex",0);break;case "multiline":c("aria-multiline","ariaMultiline",b)&&b.attr("aria-multiline",!0)}h.$validators.required&&c("aria-required","ariaRequired",
b)&&e.$watch(function(){return h.$error.required},function(a){b.attr("aria-required",!!a)});c("aria-invalid","ariaInvalid",b)&&e.$watch(function(){return h.$invalid},function(a){b.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",[])}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,c,k,f){c.attr("aria-live")||c.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",
function(a,c){return{restrict:"A",compile:function(k,f){var l=c(f.ngClick,null,!0);return function(c,d,e){if(!n(d,q)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!e.ngKeypress))d.on("keypress",function(a){function d(){l(c,{$event:a})}var e=a.which||a.keyCode;32!==e&&13!==e||c.$apply(d)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,k,f){!a.config("tabindex")||
k.attr("tabindex")||n(k,q)||k.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

!function(t,e){"use strict";if("undefined"!=typeof module&&module.exports){var n="undefined"!=typeof process,o=n&&"electron"in process.versions;o?t.BootstrapDialog=e(t.jQuery):module.exports=e(require("jquery"),require("bootstrap"))}else"function"==typeof define&&define.amd?define("bootstrap-dialog",["jquery","bootstrap"],function(t){return e(t)}):t.BootstrapDialog=e(t.jQuery)}(this,function(t){"use strict";var e=t.fn.modal.Constructor,n=function(t,n){e.call(this,t,n)};n.getModalVersion=function(){var e=null;return e="undefined"==typeof t.fn.modal.Constructor.VERSION?"v3.1":/3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION)?"v3.2":/3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION)?"v3.3":"v3.3.4"},n.ORIGINAL_BODY_PADDING=parseInt(t("body").css("padding-right")||0,10),n.METHODS_TO_OVERRIDE={},n.METHODS_TO_OVERRIDE["v3.1"]={},n.METHODS_TO_OVERRIDE["v3.2"]={hide:function(e){if(e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()){this.isShown=!1;var n=this.getGlobalOpenedDialogs();0===n.length&&this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}}},n.METHODS_TO_OVERRIDE["v3.3"]={setScrollbar:function(){var t=n.ORIGINAL_BODY_PADDING;this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},resetScrollbar:function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.css("padding-right",n.ORIGINAL_BODY_PADDING)},hideModal:function(){this.$element.hide(),this.backdrop(t.proxy(function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.removeClass("modal-open"),this.resetAdjustments(),this.resetScrollbar(),this.$element.trigger("hidden.bs.modal")},this))}},n.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},n.METHODS_TO_OVERRIDE["v3.3"]),n.prototype={constructor:n,getGlobalOpenedDialogs:function(){var e=[];return t.each(o.dialogs,function(t,n){n.isRealized()&&n.isOpened()&&e.push(n)}),e}},n.prototype=t.extend(n.prototype,e.prototype,n.METHODS_TO_OVERRIDE[n.getModalVersion()]);var o=function(e){this.defaultOptions=t.extend(!0,{id:o.newGuid(),buttons:[],data:{},onshow:null,onshown:null,onhide:null,onhidden:null},o.defaultOptions),this.indexedButtons={},this.registeredButtonHotkeys={},this.draggableData={isMouseDown:!1,mouseOffset:{}},this.realized=!1,this.opened=!1,this.initOptions(e),this.holdThisInstance()};return o.BootstrapDialogModal=n,o.NAMESPACE="bootstrap-dialog",o.TYPE_DEFAULT="type-default",o.TYPE_INFO="type-info",o.TYPE_PRIMARY="type-primary",o.TYPE_SUCCESS="type-success",o.TYPE_WARNING="type-warning",o.TYPE_DANGER="type-danger",o.DEFAULT_TEXTS={},o.DEFAULT_TEXTS[o.TYPE_DEFAULT]="Information",o.DEFAULT_TEXTS[o.TYPE_INFO]="Information",o.DEFAULT_TEXTS[o.TYPE_PRIMARY]="Information",o.DEFAULT_TEXTS[o.TYPE_SUCCESS]="Success",o.DEFAULT_TEXTS[o.TYPE_WARNING]="Warning",o.DEFAULT_TEXTS[o.TYPE_DANGER]="Danger",o.DEFAULT_TEXTS.OK="OK",o.DEFAULT_TEXTS.CANCEL="Cancel",o.DEFAULT_TEXTS.CONFIRM="Confirmation",o.SIZE_NORMAL="size-normal",o.SIZE_SMALL="size-small",o.SIZE_WIDE="size-wide",o.SIZE_LARGE="size-large",o.BUTTON_SIZES={},o.BUTTON_SIZES[o.SIZE_NORMAL]="",o.BUTTON_SIZES[o.SIZE_SMALL]="",o.BUTTON_SIZES[o.SIZE_WIDE]="",o.BUTTON_SIZES[o.SIZE_LARGE]="btn-lg",o.ICON_SPINNER="glyphicon glyphicon-asterisk",o.defaultOptions={type:o.TYPE_PRIMARY,size:o.SIZE_NORMAL,cssClass:"",title:null,message:null,nl2br:!0,closable:!0,closeByBackdrop:!0,closeByKeyboard:!0,spinicon:o.ICON_SPINNER,autodestroy:!0,draggable:!1,animate:!0,description:"",tabindex:-1},o.configDefaultOptions=function(e){o.defaultOptions=t.extend(!0,o.defaultOptions,e)},o.dialogs={},o.openAll=function(){t.each(o.dialogs,function(t,e){e.open()})},o.closeAll=function(){t.each(o.dialogs,function(t,e){e.close()})},o.getDialog=function(t){var e=null;return"undefined"!=typeof o.dialogs[t]&&(e=o.dialogs[t]),e},o.setDialog=function(t){return o.dialogs[t.getId()]=t,t},o.addDialog=function(t){return o.setDialog(t)},o.moveFocus=function(){var e=null;t.each(o.dialogs,function(t,n){e=n}),null!==e&&e.isRealized()&&e.getModal().focus()},o.METHODS_TO_OVERRIDE={},o.METHODS_TO_OVERRIDE["v3.1"]={handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(t){t.target===this&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByBackdrop()&&t.data.dialog.close()}),this},updateZIndex:function(){var e=1040,n=1050,i=0;t.each(o.dialogs,function(t,e){i++});var s=this.getModal(),a=s.data("bs.modal").$backdrop;return s.css("z-index",n+20*(i-1)),a.css("z-index",e+20*(i-1)),this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this.updateZIndex(),this}},o.METHODS_TO_OVERRIDE["v3.2"]={handleModalBackdropEvent:o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,updateZIndex:o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,open:o.METHODS_TO_OVERRIDE["v3.1"].open},o.METHODS_TO_OVERRIDE["v3.3"]={},o.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},o.METHODS_TO_OVERRIDE["v3.1"]),o.prototype={constructor:o,initOptions:function(e){return this.options=t.extend(!0,this.defaultOptions,e),this},holdThisInstance:function(){return o.addDialog(this),this},initModalStuff:function(){return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()),this.getModal().append(this.getModalDialog()),this.getModalDialog().append(this.getModalContent()),this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()),this},createModal:function(){var e=t('<div class="modal" role="dialog" aria-hidden="true"></div>');return e.prop("id",this.getId()),e.attr("aria-labelledby",this.getId()+"_title"),e},getModal:function(){return this.$modal},setModal:function(t){return this.$modal=t,this},createModalDialog:function(){return t('<div class="modal-dialog"></div>')},getModalDialog:function(){return this.$modalDialog},setModalDialog:function(t){return this.$modalDialog=t,this},createModalContent:function(){return t('<div class="modal-content"></div>')},getModalContent:function(){return this.$modalContent},setModalContent:function(t){return this.$modalContent=t,this},createModalHeader:function(){return t('<div class="modal-header"></div>')},getModalHeader:function(){return this.$modalHeader},setModalHeader:function(t){return this.$modalHeader=t,this},createModalBody:function(){return t('<div class="modal-body"></div>')},getModalBody:function(){return this.$modalBody},setModalBody:function(t){return this.$modalBody=t,this},createModalFooter:function(){return t('<div class="modal-footer"></div>')},getModalFooter:function(){return this.$modalFooter},setModalFooter:function(t){return this.$modalFooter=t,this},createDynamicContent:function(t){var e=null;return e="function"==typeof t?t.call(t,this):t,"string"==typeof e&&(e=this.formatStringContent(e)),e},formatStringContent:function(t){return this.options.nl2br?t.replace(/\r\n/g,"<br />").replace(/[\r\n]/g,"<br />"):t},setData:function(t,e){return this.options.data[t]=e,this},getData:function(t){return this.options.data[t]},setId:function(t){return this.options.id=t,this},getId:function(){return this.options.id},getType:function(){return this.options.type},setType:function(t){return this.options.type=t,this.updateType(),this},updateType:function(){if(this.isRealized()){var t=[o.TYPE_DEFAULT,o.TYPE_INFO,o.TYPE_PRIMARY,o.TYPE_SUCCESS,o.TYPE_WARNING,o.TYPE_DANGER];this.getModal().removeClass(t.join(" ")).addClass(this.getType())}return this},getSize:function(){return this.options.size},setSize:function(t){return this.options.size=t,this.updateSize(),this},updateSize:function(){if(this.isRealized()){var e=this;this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE),this.getModal().addClass(this.getSize()),this.getModalDialog().removeClass("modal-sm"),this.getSize()===o.SIZE_SMALL&&this.getModalDialog().addClass("modal-sm"),this.getModalDialog().removeClass("modal-lg"),this.getSize()===o.SIZE_WIDE&&this.getModalDialog().addClass("modal-lg"),t.each(this.options.buttons,function(n,o){var i=e.getButton(o.id),s=["btn-lg","btn-sm","btn-xs"],a=!1;if("string"==typeof o.cssClass){var d=o.cssClass.split(" ");t.each(d,function(e,n){-1!==t.inArray(n,s)&&(a=!0)})}a||(i.removeClass(s.join(" ")),i.addClass(e.getButtonSize()))})}return this},getCssClass:function(){return this.options.cssClass},setCssClass:function(t){return this.options.cssClass=t,this},getTitle:function(){return this.options.title},setTitle:function(t){return this.options.title=t,this.updateTitle(),this},updateTitle:function(){if(this.isRealized()){var t=null!==this.getTitle()?this.createDynamicContent(this.getTitle()):this.getDefaultText();this.getModalHeader().find("."+this.getNamespace("title")).html("").append(t).prop("id",this.getId()+"_title")}return this},getMessage:function(){return this.options.message},setMessage:function(t){return this.options.message=t,this.updateMessage(),this},updateMessage:function(){if(this.isRealized()){var t=this.createDynamicContent(this.getMessage());this.getModalBody().find("."+this.getNamespace("message")).html("").append(t)}return this},isClosable:function(){return this.options.closable},setClosable:function(t){return this.options.closable=t,this.updateClosable(),this},setCloseByBackdrop:function(t){return this.options.closeByBackdrop=t,this},canCloseByBackdrop:function(){return this.options.closeByBackdrop},setCloseByKeyboard:function(t){return this.options.closeByKeyboard=t,this},canCloseByKeyboard:function(){return this.options.closeByKeyboard},isAnimate:function(){return this.options.animate},setAnimate:function(t){return this.options.animate=t,this},updateAnimate:function(){return this.isRealized()&&this.getModal().toggleClass("fade",this.isAnimate()),this},getSpinicon:function(){return this.options.spinicon},setSpinicon:function(t){return this.options.spinicon=t,this},addButton:function(t){return this.options.buttons.push(t),this},addButtons:function(e){var n=this;return t.each(e,function(t,e){n.addButton(e)}),this},getButtons:function(){return this.options.buttons},setButtons:function(t){return this.options.buttons=t,this.updateButtons(),this},getButton:function(t){return"undefined"!=typeof this.indexedButtons[t]?this.indexedButtons[t]:null},getButtonSize:function(){return"undefined"!=typeof o.BUTTON_SIZES[this.getSize()]?o.BUTTON_SIZES[this.getSize()]:""},updateButtons:function(){return this.isRealized()&&(0===this.getButtons().length?this.getModalFooter().hide():this.getModalFooter().show().find("."+this.getNamespace("footer")).html("").append(this.createFooterButtons())),this},isAutodestroy:function(){return this.options.autodestroy},setAutodestroy:function(t){this.options.autodestroy=t},getDescription:function(){return this.options.description},setDescription:function(t){return this.options.description=t,this},setTabindex:function(t){return this.options.tabindex=t,this},getTabindex:function(){return this.options.tabindex},updateTabindex:function(){return this.isRealized()&&this.getModal().attr("tabindex",this.getTabindex()),this},getDefaultText:function(){return o.DEFAULT_TEXTS[this.getType()]},getNamespace:function(t){return o.NAMESPACE+"-"+t},createHeaderContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("header")),e.append(this.createTitleContent()),e.prepend(this.createCloseButton()),e},createTitleContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("title")),e},createCloseButton:function(){var e=t("<div></div>");e.addClass(this.getNamespace("close-button"));var n=t('<button class="close">&times;</button>');return e.append(n),e.on("click",{dialog:this},function(t){t.data.dialog.close()}),e},createBodyContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("body")),e.append(this.createMessageContent()),e},createMessageContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("message")),e},createFooterContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("footer")),e},createFooterButtons:function(){var e=this,n=t("<div></div>");return n.addClass(this.getNamespace("footer-buttons")),this.indexedButtons={},t.each(this.options.buttons,function(t,i){i.id||(i.id=o.newGuid());var s=e.createButton(i);e.indexedButtons[i.id]=s,n.append(s)}),n},createButton:function(e){var n=t('<button class="btn"></button>');return n.prop("id",e.id),n.data("button",e),"undefined"!=typeof e.icon&&""!==t.trim(e.icon)&&n.append(this.createButtonIcon(e.icon)),"undefined"!=typeof e.label&&n.append(e.label),n.addClass("undefined"!=typeof e.cssClass&&""!==t.trim(e.cssClass)?e.cssClass:"btn-default"),"undefined"!=typeof e.hotkey&&(this.registeredButtonHotkeys[e.hotkey]=n),n.on("click",{dialog:this,$button:n,button:e},function(t){var e=t.data.dialog,n=t.data.$button,o=n.data("button");"function"==typeof o.action&&o.action.call(n,e,t),o.autospin&&n.toggleSpin(!0)}),this.enhanceButton(n),"undefined"!=typeof e.enabled&&n.toggleEnable(e.enabled),n},enhanceButton:function(t){return t.dialog=this,t.toggleEnable=function(t){var e=this;return"undefined"!=typeof t?e.prop("disabled",!t).toggleClass("disabled",!t):e.prop("disabled",!e.prop("disabled")),e},t.enable=function(){var t=this;return t.toggleEnable(!0),t},t.disable=function(){var t=this;return t.toggleEnable(!1),t},t.toggleSpin=function(e){var n=this,o=n.dialog,i=n.find("."+o.getNamespace("button-icon"));return"undefined"==typeof e&&(e=!(t.find(".icon-spin").length>0)),e?(i.hide(),t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))):(i.show(),t.find(".icon-spin").remove()),n},t.spin=function(){var t=this;return t.toggleSpin(!0),t},t.stopSpin=function(){var t=this;return t.toggleSpin(!1),t},this},createButtonIcon:function(e){var n=t("<span></span>");return n.addClass(this.getNamespace("button-icon")).addClass(e),n},enableButtons:function(e){return t.each(this.indexedButtons,function(t,n){n.toggleEnable(e)}),this},updateClosable:function(){return this.isRealized()&&this.getModalHeader().find("."+this.getNamespace("close-button")).toggle(this.isClosable()),this},onShow:function(t){return this.options.onshow=t,this},onShown:function(t){return this.options.onshown=t,this},onHide:function(t){return this.options.onhide=t,this},onHidden:function(t){return this.options.onhidden=t,this},isRealized:function(){return this.realized},setRealized:function(t){return this.realized=t,this},isOpened:function(){return this.opened},setOpened:function(t){return this.opened=t,this},handleModalEvents:function(){return this.getModal().on("show.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!0),e.isModalEvent(t)&&"function"==typeof e.options.onshow){var n=e.options.onshow(e);return n===!1&&e.setOpened(!1),n}}),this.getModal().on("shown.bs.modal",{dialog:this},function(t){var e=t.data.dialog;e.isModalEvent(t)&&"function"==typeof e.options.onshown&&e.options.onshown(e)}),this.getModal().on("hide.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!1),e.isModalEvent(t)&&"function"==typeof e.options.onhide){var n=e.options.onhide(e);return n===!1&&e.setOpened(!0),n}}),this.getModal().on("hidden.bs.modal",{dialog:this},function(e){var n=e.data.dialog;n.isModalEvent(e)&&"function"==typeof n.options.onhidden&&n.options.onhidden(n),n.isAutodestroy()&&(n.setRealized(!1),delete o.dialogs[n.getId()],t(this).remove()),o.moveFocus()}),this.handleModalBackdropEvent(),this.getModal().on("keyup",{dialog:this},function(t){27===t.which&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByKeyboard()&&t.data.dialog.close()}),this.getModal().on("keyup",{dialog:this},function(e){var n=e.data.dialog;if("undefined"!=typeof n.registeredButtonHotkeys[e.which]){var o=t(n.registeredButtonHotkeys[e.which]);!o.prop("disabled")&&o.focus().trigger("click")}}),this},handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(e){t(e.target).hasClass("modal-backdrop")&&e.data.dialog.isClosable()&&e.data.dialog.canCloseByBackdrop()&&e.data.dialog.close()}),this},isModalEvent:function(t){return"undefined"!=typeof t.namespace&&"bs.modal"===t.namespace},makeModalDraggable:function(){return this.options.draggable&&(this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown=!0;var n=e.getModalDialog().offset();e.draggableData.mouseOffset={top:t.clientY-n.top,left:t.clientX-n.left}}),this.getModal().on("mouseup mouseleave",{dialog:this},function(t){t.data.dialog.draggableData.isMouseDown=!1}),t("body").on("mousemove",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown&&e.getModalDialog().offset({top:t.clientY-e.draggableData.mouseOffset.top,left:t.clientX-e.draggableData.mouseOffset.left})})),this},realize:function(){return this.initModalStuff(),this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()),this.updateSize(),this.getDescription()&&this.getModal().attr("aria-describedby",this.getDescription()),this.getModalFooter().append(this.createFooterContent()),this.getModalHeader().append(this.createHeaderContent()),this.getModalBody().append(this.createBodyContent()),this.getModal().data("bs.modal",new n(this.getModal(),{backdrop:"static",keyboard:!1,show:!1})),this.makeModalDraggable(),this.handleModalEvents(),this.setRealized(!0),this.updateButtons(),this.updateType(),this.updateTitle(),this.updateMessage(),this.updateClosable(),this.updateAnimate(),this.updateSize(),this.updateTabindex(),this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this},close:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("hide"),this}},o.prototype=t.extend(o.prototype,o.METHODS_TO_OVERRIDE[n.getModalVersion()]),o.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})},o.show=function(t){return new o(t).open()},o.alert=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,buttonLabel:o.DEFAULT_TEXTS.OK,callback:null};return e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],callback:"undefined"!=typeof arguments[1]?arguments[1]:null}),new o({type:e.type,title:e.title,message:e.message,closable:e.closable,draggable:e.draggable,data:{callback:e.callback},onhide:function(t){!t.getData("btnClicked")&&t.isClosable()&&"function"==typeof t.getData("callback")&&t.getData("callback")(!1)},buttons:[{label:e.buttonLabel,action:function(t){t.setData("btnClicked",!0),"function"==typeof t.getData("callback")&&t.getData("callback")(!0),t.close()}}]}).open()},o.confirm=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,btnCancelLabel:o.DEFAULT_TEXTS.CANCEL,btnOKLabel:o.DEFAULT_TEXTS.OK,btnOKClass:null,callback:null};return e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],closable:!1,buttonLabel:o.DEFAULT_TEXTS.OK,callback:"undefined"!=typeof arguments[1]?arguments[1]:null}),null===e.btnOKClass&&(e.btnOKClass=["btn",e.type.split("-")[1]].join("-")),new o({type:e.type,title:e.title,message:e.message,closable:e.closable,draggable:e.draggable,data:{callback:e.callback},buttons:[{label:e.btnCancelLabel,action:function(t){"function"==typeof t.getData("callback")&&t.getData("callback")(!1),t.close()}},{label:e.btnOKLabel,cssClass:e.btnOKClass,action:function(t){"function"==typeof t.getData("callback")&&t.getData("callback")(!0),t.close()}}]}).open()},o.warning=function(t,e){return new o({type:o.TYPE_WARNING,message:t}).open()},o.danger=function(t,e){return new o({type:o.TYPE_DANGER,message:t}).open()},o.success=function(t,e){return new o({type:o.TYPE_SUCCESS,message:t}).open()},o});
	

// jQBrowser v0.2: http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/

function scrollWin() {
    window.scrollTo(0, 80);
}



$(function () {
    if ($('#example').length > 0) {
        $('#example').dataTable({
            "paging": true,
            "iDisplayLength": 7
        });
    }
    if ($('#testDiv1').length > 0) {
        $('#testDiv1').slimScroll({
            alwaysVisible: true,
            railVisible: true,
            railColor: '#fff',
            railOpacity: 1,
            height: '420px',
            railBorderRadius: 0
        });
    }
    if ($('#testDiv').length > 0) {
        $('#testDiv').slimScroll({
            alwaysVisible: true,
            railVisible: true,
            railColor: '#fff',
            railOpacity: 1,
            height: '403px',
            railBorderRadius: 0
        });
    }
    if ($('#testDiv2').length > 0) {
        $('#testDiv2').slimScroll({
            alwaysVisible: true,
            railVisible: true,
            railColor: '#fff',
            railOpacity: 1,
            height: '430px',
            railBorderRadius: 0
        });
    }
    if ($('#scroll').length > 0) {
    $('#scroll').slimScroll({
        alwaysVisible: true,
        railVisible: true,
        railColor: '#eaedef',
        railOpacity: 1,
        height: '230px',
        railBorderRadius: 0
    });
    }
    if ($('#scroll1').length > 0) {
    $('#scroll1').slimScroll({
        alwaysVisible: true,
        railVisible: true,
        railColor: '#eaedef',
        railOpacity: 1,
        height: '310px',
        railBorderRadius: 0
    });
    }
	if ($('#scroll-selectbox').length > 0) {
    $('#scroll-selectbox').slimScroll({
        alwaysVisible: true,
        railVisible: true,
        railColor: '#eaedef',
        railOpacity: 1,
        height: '160px',
        railBorderRadius: 0
    });
    }


if ($('.tm-i-edit').length > 0) {

$('.btn-pad-icon').click(function() {
	$(this).find('i').toggleClass( "tm-i-save" );
    
  });
}


if ($('.tm-i-numbercancel').length > 0) {
	$(function(){
    		$(".tm-i-numbercancel").click(function(){
        		$(this).closest("tr").remove();
    		});
	});
}


    $('[data-toggle="tooltip"]').tooltip();

    $(".tm-user-cntct-dropdown").delegate("input", "click", function (e) {
        e.stopPropagation();
    });

    
    $('.add-contact').on('click', function (e) {
        var exampleInputEmail1Value = $('#exampleInputEmail1').val();
        if (exampleInputEmail1Value.length > 0) {
            $('#contact-add tr:first').before('<tr><td>' + exampleInputEmail1Value + '</td><td>2.20C/Min</td><td><i class="tm-i-numbercancel font-size-14" ></i></td></tr>');
			$('#exampleInputEmail1').val('');
        }
    })
	
	
    $('.conference-icon i.glyphicon ').eq(0).click(function () {
        alert(1)
        if ($(this).attr('class') == "glyphicon-asterisk") {
            $(this).addClass('glyphicon-volume-up').removeClass('glyphicon-asterisk');
        } else {
            $(this).addClass('glyphicon-asterisk').removeClass('glyphicon-volume-up');
        }

    })

    $(".tm-user-cntct-dropdown").delegate("input", "click", function (e) {
        e.stopPropagation();
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('#sl1').slider({
        formater: function (value) {
            return 'Volume : ' + value;
        }
    });





    // Make the divs have equal heights
    var h1 = $("#div1").height();
    var h2 = $("#div2").height();
    $("#div1,#div2").height(Math.max(h1, h2));

    // Then hide the second div
    $("#div2").hide();

    // Then add a click handlers to the buttons
    $("#button1").click(function () {
        $("#div1").show();
        $("#div2").hide();
    });
    $("#button2").click(function () {
        $("#div1").hide();
        $("#div2").show();
    });


	
	
	

    // Make the divs have equal heights
    var h1 = $("#div3").height();
    var h2 = $("#div4").height();
    $("#div1,#div2").height(Math.max(h1, h2));

    // Then hide the second div
    $("#div4").hide();

    // Then add a click handlers to the buttons
    $("#button3").click(function () {
        $("#div3").show();
        $("#div4").hide();
    });
    $("#button4").click(function () {
        $("#div3").hide();
        $("#div4").show();
    });

	
	
	
	
	

	 

	
	if ($('.timepicker').length > 0) {
 $('.timepicker').timepicker({
      showInputs: false
    });	
	
	
	
	
	
    }
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	if ($('#show').length > 0) {
	$("#show").click(function(){
        
		$(".hide").removeClass('hide');
    });
	}
	
	


	

    

});







function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "" + x;
	$(".remove-input").hide();
}




 if ($('.front-end-side').length > 0) {
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
}


$(function(){
   
$('#checkrates').on('click', function(e){
    $("#calldial-rate").toggle();
    
   
	$("#calldial-rate").addClass("show");
$(".rate").hide();
});
    
});
// Check Rate text hide show
$(document).ready(function(){
    $("#crate").click(function(){	
        $(".ratespan").toggle();
		$(".ratespan").addClass("show");
    });
});

$(document).ready(function(){
    $("#crate1").click(function(){	
        $(".ratespan").toggle();
		$(".ratespan").addClass("show");
    });
});
 



function ClearFields() {
     document.getElementById("exampleInputEmail1").value = "";
}



   $('.dropdown-menu').on('click', function(event){
    // The event won't be propagated up to the document NODE and 
    // therefore delegated events won't be fired
    //event.stopPropagation();
});



 
$(document).ready(function() {
    $('#selectamount').css('color','white');
	$('#selectamount').css('font-weight','bold');
    $('#selectamount').change(function() {
       var current = $('#selectamount').val();
       if (current != 'null') {
           $('#selectamount').css('color','white');
		   
       } else {
           $('#selectamount').css('color','gray');
       }
    }); 
});
 



/* ######## My Custom function 230915  dashboard-calldialnumber.html #######################*/

function onDialer(digit) {
    //var r = String.fromCharCode(digit);
        $('#cnfMobileNo').focus();
	var dialedNumber =  $('#cnfMobileNo').val();
	var len = dialedNumber.length;
	if(0 == len) {
		dialedNumber = '+';
		len = 1;
		if('0' == digit)
			return;
	}
	//if (len > 11) {
	//    return;
	//}

	if (digit >= 0 && digit <= 9 && digit != 8) {
		if(len > 17)
			return;

		dialedNumber = dialedNumber + '' + digit;
	} 
	else if(digit == 10) {
		dialedNumber = window.localStorage['lastCall'];
	}
	
	var keybgcolor = '#eb3849';

	if(dialedNumber.length > 10) {
	    // enable call button
	    $("#phoneHelper1").removeClass("hide");
	    $("#phoneHelper").removeClass("hide");
	    

	} else {
	    //disable call button
	    $("#phoneHelper1").addClass("hide");
	    $("#phoneHelper").addClass("hide");
	}
	if (digit == 11 || digit == 8) {
	    if (0 == len)
	        return;

	    dialedNumber = dialedNumber.substring(0, len - 1);
	    if (dialedNumber == '+')
	        dialedNumber = '';
	    $('.tm-dp-row4 a:nth-child(3)').css('background-color', keybgcolor);
	    $('.tm-dp-row4 a:nth-child(3)').css('color', '#fff');
	    setTimeout(function () { $('.tm-dp-row4 a:nth-child(3)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
		//$('#cnfMobileNo').val(dialedNumber);
	    return;
	}
	if (digit == 999) {
	    if (0 == len)
	        return;

	    dialedNumber = dialedNumber.substring(0, len - 1);
	    if (dialedNumber == '+')
	        dialedNumber = '';
	    $('.tm-dp-row4 a:nth-child(3)').css('background-color', keybgcolor);
	    $('.tm-dp-row4 a:nth-child(3)').css('color', '#fff');
	    setTimeout(function () { $('.tm-dp-row4 a:nth-child(3)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
		$('#cnfMobileNo').val(dialedNumber);
	    return;
	}
	
	$('#cnfMobileNo').val(dialedNumber);
	if (digit == "97" || digit == "49") {
//49
        $('.tm-dp-row1 a:first-Child').css('background-color', keybgcolor);
        $('.tm-dp-row1 a:first-Child').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row1 a:first-Child').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }

	if (digit == "98" || digit == "50") {
      $('.tm-dp-row1 a:nth-child(2)').css('background-color', keybgcolor);
        $('.tm-dp-row1 a:nth-child(2)').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row1 a:nth-child(2)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
	if (digit == "99" || digit == "51") {
        $('.tm-dp-row1 a:nth-child(3)').css('background-color', keybgcolor);
        $('.tm-dp-row1 a:nth-child(3)').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row1 a:nth-child(3)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }

	if (digit == "100" || digit == "52") {

        $('.tm-dp-row2 a:first-Child').css('background-color', keybgcolor);
        $('.tm-dp-row2 a:first-Child').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row2 a:first-Child').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
	if(digit == "101"||digit == "53"){

        $('.tm-dp-row2 a:nth-child(2)').css('background-color', keybgcolor);
        $('.tm-dp-row2 a:nth-child(2)').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row2 a:nth-child(2)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
	if (digit == "102" || digit == "54") {

        $('.tm-dp-row2 a:nth-child(3)').css('background-color', keybgcolor);
        $('.tm-dp-row2 a:nth-child(3)').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row2 a:nth-child(3)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
	if (digit == "103" || digit == "55") {

        $('.tm-dp-row3 a:first-Child').css('background-color', keybgcolor);
        $('.tm-dp-row3 a:first-Child').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row3 a:first-Child').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
	if (digit == "104" || digit == "56" || digit == "998" ) {

        $('.tm-dp-row3 a:nth-child(2)').css('background-color', keybgcolor);
        $('.tm-dp-row3 a:nth-child(2)').css('color', '#fff');
		if(digit == "998"){
			$('#cnfMobileNo').val(dialedNumber+'8');
			}
        setTimeout(function() { $('.tm-dp-row3 a:nth-child(2)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
	if (digit == "105" || digit == "57") {

        $('.tm-dp-row3 a:nth-child(3)').css('background-color', keybgcolor);
        $('.tm-dp-row3 a:nth-child(3)').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row3 a:nth-child(3)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
	if (digit == "96" || digit == "48") {

        $('.tm-dp-row4 a:nth-child(2)').css('background-color', keybgcolor);
        $('.tm-dp-row4 a:nth-child(2)').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row4 a:nth-child(2)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }
    if(digit == "8"){

        $('.tm-dp-row4 a:nth-child(3)').css('background-color', keybgcolor);
        $('.tm-dp-row4 a:nth-child(3)').css('color', '#fff');
        setTimeout(function() { $('.tm-dp-row4 a:nth-child(3)').css('background-color', keybgcolor).removeAttr('style'); }, 200);
    }

    //if(digit > 17 && e.keyCode != 8){
		//    if(digit > 17 && digit != 8){
//        addReadyToClear();
//        e.preventDefault();
  //  }

}

function changeFocus(targetId,object){
debugger;

    setTimeout(function(){
        if($(object).parent().hasClass('open')) {

            isFocus = false;
            $('#' + targetId).focus();
        }else{
            isFocus=true;

        }
    },100);
    /*setTimeout(function(){


     isFocus=true;
     $('#cnfMobileNo').focus();

     },200);*/


}
$(".popupopen").on("focusout",function(){
	if($(this).attr("flg") !="1"){
	$(".leftaddcontcatPopup").hide();	
		}
	});

$(document).ready(function(){
    $("input[type='tel']").keyup(function() {
        var value = $(this).val();
        $("#gridSystemModalLabel p").text(value);
        $(".modal-body span").text(value);

    })
//.keyup();
});

function myToFixed(i, digits) {
    var pow = Math.pow(10, digits);
var r=Math.floor(i * pow) / pow;
    return r=='0'?'0.00':r;
}



(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.moment=factory()}(this,function(){'use strict';var hookCallback;function utils_hooks__hooks(){return hookCallback.apply(null,arguments);}function setHookCallback(callback){hookCallback=callback;}function isArray(input){return Object.prototype.toString.call(input)==='[object Array]';}function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==='[object Date]';}function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}return res;}function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}if(hasOwnProp(b,'toString')){a.toString=b.toString;}if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}return a;}function create_utc__createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false};}function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags();}return m._pf;}function valid__isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);m._isValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated;if(m._strict){m._isValid=m._isValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined;}}return m._isValid;}function valid__createInvalid(flags){var m=create_utc__createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags);}else{getParsingFlags(m).userInvalidated=true;}return m;}var momentProperties=utils_hooks__hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(typeof from._isAMomentObject!=='undefined'){to._isAMomentObject=from._isAMomentObject;}if(typeof from._i!=='undefined'){to._i=from._i;}if(typeof from._f!=='undefined'){to._f=from._f;}if(typeof from._l!=='undefined'){to._l=from._l;}if(typeof from._strict!=='undefined'){to._strict=from._strict;}if(typeof from._tzm!=='undefined'){to._tzm=from._tzm;}if(typeof from._isUTC!=='undefined'){to._isUTC=from._isUTC;}if(typeof from._offset!=='undefined'){to._offset=from._offset;}if(typeof from._pf!=='undefined'){to._pf=getParsingFlags(from);}if(typeof from._locale!=='undefined'){to._locale=from._locale;}if(momentProperties.length>0){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(typeof val!=='undefined'){to[prop]=val;}}}return to;}var updateInProgress=false;function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(updateInProgress===false){updateInProgress=true;utils_hooks__hooks.updateOffset(this);updateInProgress=false;}}function isMoment(obj){return obj instanceof Moment||(obj!=null&&obj._isAMomentObject!=null);}function absFloor(number){if(number<0){return Math.ceil(number);}else{return Math.floor(number);}}function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber);}return value;}function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}return diffs+lengthDiff;}function Locale(){}var locales={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){break;}j--;}i++;}return null;}function loadLocale(name){var oldLocale=null;if(!locales[name]&&typeof module!=='undefined'&&module&&module.exports){try{oldLocale=globalLocale._abbr;require('./locale/'+name);locale_locales__getSetGlobalLocale(oldLocale);}catch(e){}}return locales[name];}function locale_locales__getSetGlobalLocale(key,values){var data;if(key){if(typeof values==='undefined'){data=locale_locales__getLocale(key);}else{data=defineLocale(key,values);}if(data){globalLocale=data;}}return globalLocale._abbr;}function defineLocale(name,values){if(values!==null){values.abbr=name;locales[name]=locales[name]||new Locale();locales[name].set(values);locale_locales__getSetGlobalLocale(name);return locales[name];}else{delete locales[name];return null;}}function locale_locales__getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}if(!key){return globalLocale;}if(!isArray(key)){locale=loadLocale(key);if(locale){return locale;}key=[key];}return chooseLocale(key);}var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit;}function normalizeUnits(units){return typeof units==='string'?aliases[units]||aliases[units.toLowerCase()]:undefined;}function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}return normalizedInput;}function makeGetSet(unit,keepTime){return function(value){if(value!=null){get_set__set(this,unit,value);utils_hooks__hooks.updateOffset(this,keepTime);return this;}else{return get_set__get(this,unit);}};}function get_set__get(mom,unit){return mom._d['get'+(mom._isUTC?'UTC':'')+unit]();}function get_set__set(mom,unit,value){return mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);}function getSet(units,value){var unit;if(typeof units==='object'){for(unit in units){this.set(unit,units[unit]);}}else{units=normalizeUnits(units);if(typeof this[units]==='function'){return this[units](value);}}return this;}function zeroFill(number,targetLength,forceSign){var absNumber=''+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?(forceSign?'+':''):'-')+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;}var formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==='string'){func=function(){return this[callback]();};}if(token){formatTokenFunctions[token]=func;}if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}return input.replace(/\\/g,'');}function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}return function(mom){var output='';for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i];}return output;};}function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m);}function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}return format;}var match1=/\d/;var match2=/\d\d/;var match3=/\d{3}/;var match4=/\d{4}/;var match6=/[+-]?\d{6}/;var match1to2=/\d\d?/;var match1to3=/\d{1,3}/;var match1to4=/\d{1,4}/;var match1to6=/[+-]?\d{1,6}/;var matchUnsigned=/\d+/;var matchSigned=/[+-]?\d+/;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function isFunction(sth){return typeof sth==='function'&&Object.prototype.toString.call(sth)==='[object Function]';}function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict){return(isStrict&&strictRegex)?strictRegex:regex;};}function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}return regexes[token](config._strict,config._locale);}function unescapeFormat(s){return s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;}).replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==='string'){token=[token];}if(typeof callback==='number'){func=function(input,array){array[callback]=toInt(input);};}for(i=0;i<token.length;i++){tokens[token[i]]=func;}}function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token);});}function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();}addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);});addUnitAlias('month','M');addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',matchWord);addRegexToken('MMMM',matchWord);addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(month!=null){array[MONTH]=month;}else{getParsingFlags(config).invalidMonth=input;}});var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m){return this._months[m.month()];}var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m){return this._monthsShort[m.month()];}function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}for(i=0;i<12;i++){mom=create_utc__createUTC([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');}if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}}function setMonth(mom,value){var dayOfMonth;if(typeof value==='string'){value=mom.localeData().monthsParse(value);if(typeof value!=='number'){return mom;}}dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}function getSetMonth(value){if(value!=null){setMonth(this,value);utils_hooks__hooks.updateOffset(this,true);return this;}else{return get_set__get(this,'Month');}}function getDaysInMonth(){return daysInMonth(this.year(),this.month());}function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||(a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0))?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}getParsingFlags(m).overflow=overflow;}return m;}function warn(msg){if(utils_hooks__hooks.suppressDeprecationWarnings===false&&typeof console!=='undefined'&&console.warn){console.warn('Deprecation warning: '+msg);}}function deprecate(msg,fn){var firstTime=true;return extend(function(){if(firstTime){warn(msg+'\n'+(new Error()).stack);firstTime=false;}return fn.apply(this,arguments);},fn);}var deprecations={};function deprecateSimple(name,msg){if(!deprecations[name]){warn(msg);deprecations[name]=true;}}utils_hooks__hooks.suppressDeprecationWarnings=false;var from_string__isoRegex=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d{2}-\d{2}/],['YYYY-MM-DD',/\d{4}-\d{2}-\d{2}/],['GGGG-[W]WW-E',/\d{4}-W\d{2}-\d/],['GGGG-[W]WW',/\d{4}-W\d{2}/],['YYYY-DDD',/\d{4}-\d{3}/]];var isoTimes=[['HH:mm:ss.SSSS',/(T| )\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss',/(T| )\d\d:\d\d:\d\d/],['HH:mm',/(T| )\d\d:\d\d/],['HH',/(T| )\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=from_string__isoRegex.exec(string);if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(string)){config._f=isoDates[i][0];break;}}for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(string)){config._f+=(match[6]||' ')+isoTimes[i][0];break;}}if(string.match(matchOffset)){config._f+='Z';}configFromStringAndFormat(config);}else{config._isValid=false;}}function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return;}configFromISO(config);if(config._isValid===false){delete config._isValid;utils_hooks__hooks.createFromInputFallback(config);}}utils_hooks__hooks.createFromInputFallback=deprecate('moment construction falls back to js Date. This is '+'discouraged and will be removed in upcoming major '+'release. Please refer to '+'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});function createDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(y<1970){date.setFullYear(y);}return date;}function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<1970){date.setUTCFullYear(y);}return date;}addFormatToken(0,['YY',2],0,function(){return this.year()%100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year');addUnitAlias('year','y');addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR]=input.length===2?utils_hooks__hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR]=utils_hooks__hooks.parseTwoDigitYear(input);});function daysInYear(year){return isLeapYear(year)?366:365;}function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;}utils_hooks__hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);};var getSetYear=makeGetSet('FullYear',false);function getIsLeapYear(){return isLeapYear(this.year());}addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek');addUnitAlias('week','w');addUnitAlias('isoWeek','W');addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input);});function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear){var end=firstDayOfWeekOfYear-firstDayOfWeek,daysToDayOfWeek=firstDayOfWeekOfYear-mom.day(),adjustedMoment;if(daysToDayOfWeek>end){daysToDayOfWeek-=7;}if(daysToDayOfWeek<end-7){daysToDayOfWeek+=7;}adjustedMoment=local__createLocal(mom).add(daysToDayOfWeek,'d');return{week:Math.ceil(adjustedMoment.dayOfYear()/7),year:adjustedMoment.year()};}function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow;}function localeFirstDayOfYear(){return this._week.doy;}function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');}function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');}addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear');addUnitAlias('dayOfYear','DDD');addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input);});function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek){var week1Jan=6+firstDayOfWeek-firstDayOfWeekOfYear,janX=createUTCDate(year,0,1+week1Jan),d=janX.getUTCDay(),dayOfYear;if(d<firstDayOfWeek){d+=7;}weekday=weekday!=null?1*weekday:firstDayOfWeek;dayOfYear=1+week1Jan+7*(week-1)-d+weekday;return{year:dayOfYear>0?year:year-1,dayOfYear:dayOfYear>0?dayOfYear:daysInYear(year-1)+dayOfYear};}function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');}function defaults(a,b,c){if(a!=null){return a;}if(b!=null){return b;}return c;}function currentDateArray(config){var now=new Date();if(config._useUTC){return[now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()];}return[now.getFullYear(),now.getMonth(),now.getDate()];}function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);}if(config._dayOfYear){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear=true;}date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];}for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];}if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}if(config._nextDay){config._a[HOUR]=24;}}function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=defaults(w.gg,config._a[YEAR],weekOfYear(local__createLocal(),dow,doy).year);week=defaults(w.w,1);if(w.d!=null){weekday=w.d;if(weekday<dow){++week;}}else if(w.e!=null){weekday=w.e+dow;}else{weekday=dow;}}temp=dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}utils_hooks__hooks.ISO_8601=function(){};function configFromStringAndFormat(config){if(config._f===utils_hooks__hooks.ISO_8601){configFromISO(config);return;}config._a=[];getParsingFlags(config).empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);}string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;}if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false;}else{getParsingFlags(config).unusedTokens.push(token);}addTimeToArrayFromToken(token,parsedInput,config);}else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token);}}getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string);}if(getParsingFlags(config).bigHour===true&&config._a[HOUR]<=12&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined;}config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour;}if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}if(!isPm&&hour===12){hour=0;}return hour;}else{return hour;}}function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return;}for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!valid__isValid(tempConfig)){continue;}currentScore+=getParsingFlags(tempConfig).charsLeftOver;currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}extend(config,bestMoment||tempConfig);}function configFromObject(config){if(config._d){return;}var i=normalizeObjectUnits(config._i);config._a=[i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond];configFromArray(config);}function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,'d');res._nextDay=undefined;}return res;}function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||locale_locales__getLocale(config._l);if(input===null||(format===undefined&&input==='')){return valid__createInvalid({nullInput:true});}if(typeof input==='string'){config._i=input=config._locale.preparse(input);}if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else if(isDate(input)){config._d=input;}else{configFromInput(config);}return config;}function configFromInput(config){var input=config._i;if(input===undefined){config._d=new Date();}else if(isDate(input)){config._d=new Date(+input);}else if(typeof input==='string'){configFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(typeof(input)==='object'){configFromObject(config);}else if(typeof(input)==='number'){config._d=new Date(input);}else{utils_hooks__hooks.createFromInputFallback(config);}}function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(typeof(locale)==='boolean'){strict=locale;locale=undefined;}c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c);}function local__createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}var prototypeMin=deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);return other<this?this:other;});var prototypeMax=deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);return other>this?this:other;});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}if(!moments.length){return local__createLocal();}res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i];}}return res;}function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._milliseconds=+milliseconds+seconds*1e3+minutes*6e4+hours*36e5;this._days=+days+weeks*7;this._months=+months+quarters*3+years*12;this._data={};this._locale=locale_locales__getLocale();this._bubble();}function isDuration(obj){return obj instanceof Duration;}function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset<0){offset=-offset;sign='-';}return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~(offset)%60,2);});}offset('Z',':');offset('ZZ','');addRegexToken('Z',matchOffset);addRegexToken('ZZ',matchOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(input);});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(string){var matches=((string||'').match(matchOffset)||[]);var chunk=matches[matches.length-1]||[];var parts=(chunk+'').match(chunkOffset)||['-',0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);return parts[0]==='+'?minutes:-minutes;}function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?+input:+local__createLocal(input))-(+res);res._d.setTime(+res._d+diff);utils_hooks__hooks.updateOffset(res,false);return res;}else{return local__createLocal(input).local();}}function getDateOffset(m){return-Math.round(m._d.getTimezoneOffset()/15)*15;}utils_hooks__hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(input!=null){if(typeof input==='string'){input=offsetFromString(input);}if(Math.abs(input)<16){input=input*60;}if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this);}this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,'m');}if(offset!==input){if(!keepLocalTime||this._changeInProgress){add_subtract__addSubtract(this,create__createDuration(input-offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;utils_hooks__hooks.updateOffset(this,true);this._changeInProgress=null;}}return this;}else{return this._isUTC?offset:getDateOffset(this);}}function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input;}this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}return this;}function setOffsetToParsedOffset(){if(this._tzm){this.utcOffset(this._tzm);}else if(typeof this._i==='string'){this.utcOffset(offsetFromString(this._i));}return this;}function hasAlignedHourOffset(input){input=input?local__createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0;}function isDaylightSavingTime(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset());}function isDaylightSavingTimeShifted(){if(typeof this._isDSTShifted!=='undefined'){return this._isDSTShifted;}var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?create_utc__createUTC(c._a):local__createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;}else{this._isDSTShifted=false;}return this._isDSTShifted;}function isLocal(){return!this._isUTC;}function isUtcOffset(){return this._isUTC;}function isUtc(){return this._isUTC&&this._offset===0;}var aspNetRegex=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;var create__isoRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;function create__createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(typeof input==='number'){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign};}else if(!!(match=create__isoRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),d:parseIso(match[4],sign),h:parseIso(match[5],sign),m:parseIso(match[6],sign),s:parseIso(match[7],sign),w:parseIso(match[8],sign)};}else if(duration==null){duration={};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(local__createLocal(duration.from),local__createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}return ret;}create__createDuration.fn=Duration.prototype;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(',','.'));return(isNaN(res)?0:res)*sign;}function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}function momentsDifference(base,other){var res;other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}return res;}function createAdder(direction,name){return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period).');tmp=val;val=period;period=tmp;}val=typeof val==='string'?+val:val;dur=create__createDuration(val,period);add_subtract__addSubtract(this,dur,direction);return this;};}function add_subtract__addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(+mom._d+milliseconds*isAdding);}if(days){get_set__set(mom,'Date',get_set__get(mom,'Date')+days*isAdding);}if(months){setMonth(mom,get_set__get(mom,'Month')+months*isAdding);}if(updateOffset){utils_hooks__hooks.updateOffset(mom,days||months);}}var add_subtract__add=createAdder(1,'add');var add_subtract__subtract=createAdder(-1,'subtract');function moment_calendar__calendar(time,formats){var now=time||local__createLocal(),sod=cloneWithOffset(now,this).startOf('day'),diff=this.diff(sod,'days',true),format=diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';return this.format(formats&&formats[format]||this.localeData().calendar(format,this,local__createLocal(now)));}function clone(){return new Moment(this);}function isAfter(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=isMoment(input)?input:local__createLocal(input);return+this>+input;}else{inputMs=isMoment(input)?+input:+local__createLocal(input);return inputMs<+this.clone().startOf(units);}}function isBefore(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=isMoment(input)?input:local__createLocal(input);return+this<+input;}else{inputMs=isMoment(input)?+input:+local__createLocal(input);return+this.clone().endOf(units)<inputMs;}}function isBetween(from,to,units){return this.isAfter(from,units)&&this.isBefore(to,units);}function isSame(input,units){var inputMs;units=normalizeUnits(units||'millisecond');if(units==='millisecond'){input=isMoment(input)?input:local__createLocal(input);return+this===+input;}else{inputMs=+local__createLocal(input);return+(this.clone().startOf(units))<=inputMs&&inputMs<=+(this.clone().endOf(units));}}function diff(input,units,asFloat){var that=cloneWithOffset(input,this),zoneDelta=(that.utcOffset()-this.utcOffset())*6e4,delta,output;units=normalizeUnits(units);if(units==='year'||units==='month'||units==='quarter'){output=monthDiff(this,that);if(units==='quarter'){output=output/3;}else if(units==='year'){output=output/12;}}else{delta=this-that;output=units==='second'?delta/1e3:units==='minute'?delta/6e4:units==='hour'?delta/36e5:units==='day'?(delta-zoneDelta)/864e5:units==='week'?(delta-zoneDelta)/6048e5:delta;}return asFloat?output:absFloor(output);}function monthDiff(a,b){var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months');adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,'months');adjust=(b-anchor)/(anchor2-anchor);}return-(wholeMonthDiff+adjust);}utils_hooks__hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}function moment_format__toISOString(){var m=this.clone().utc();if(0<m.year()&&m.year()<=9999){if('function'===typeof Date.prototype.toISOString){return this.toDate().toISOString();}else{return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else{return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}function format(inputString){var output=formatMoment(this,inputString||utils_hooks__hooks.defaultFormat);return this.localeData().postformat(output);}function from(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();}return create__createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}function fromNow(withoutSuffix){return this.from(local__createLocal(),withoutSuffix);}function to(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();}return create__createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}function toNow(withoutSuffix){return this.to(local__createLocal(),withoutSuffix);}function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=locale_locales__getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData;}return this;}}var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}});function localeData(){return this._locale;}function startOf(units){units=normalizeUnits(units);switch(units){case'year':this.month(0);case'quarter':case'month':this.date(1);case'week':case'isoWeek':case'day':this.hours(0);case'hour':this.minutes(0);case'minute':this.seconds(0);case'second':this.milliseconds(0);}if(units==='week'){this.weekday(0);}if(units==='isoWeek'){this.isoWeekday(1);}if(units==='quarter'){this.month(Math.floor(this.month()/3)*3);}return this;}function endOf(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this;}return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms');}function to_type__valueOf(){return+this._d-((this._offset||0)*60000);}function unix(){return Math.floor(+this/1000);}function toDate(){return this._offset?new Date(+this):this._d;}function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}function moment_valid__isValid(){return valid__isValid(this);}function parsingFlags(){return extend({},getParsingFlags(this));}function invalidAt(){return getParsingFlags(this).overflow;}addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear');addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG');addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=utils_hooks__hooks.parseTwoDigitYear(input);});function weeksInYear(year,dow,doy){return weekOfYear(local__createLocal([year,11,31+dow-doy]),dow,doy).week;}function getSetWeekYear(input){var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return input==null?year:this.add((input-year),'y');}function getSetISOWeekYear(input){var year=weekOfYear(this,1,4).year;return input==null?year:this.add((input-year),'y');}function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}addFormatToken('Q',0,0,'quarter');addUnitAlias('quarter','Q');addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH]=(toInt(input)-1)*3;});function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);}addFormatToken('D',['DD',2],'Do','date');addUnitAlias('date','D');addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10);});var getSetDayOfMonth=makeGetSet('Date',true);addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday');addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E');addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',matchWord);addRegexToken('ddd',matchWord);addRegexToken('dddd',matchWord);addWeekParseToken(['dd','ddd','dddd'],function(input,week,config){var weekday=config._locale.weekdaysParse(input);if(weekday!=null){week.d=weekday;}else{getParsingFlags(config).invalidWeekday=input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input);});function parseWeekday(input,locale){if(typeof input!=='string'){return input;}if(!isNaN(input)){return parseInt(input,10);}input=locale.weekdaysParse(input);if(typeof input==='number'){return input;}return null;}var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m){return this._weekdays[m.day()];}var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return this._weekdaysShort[m.day()];}var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return this._weekdaysMin[m.day()];}function localeWeekdaysParse(weekdayName){var i,mom,regex;this._weekdaysParse=this._weekdaysParse||[];for(i=0;i<7;i++){if(!this._weekdaysParse[i]){mom=local__createLocal([2000,1]).day(i);regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');}if(this._weekdaysParse[i].test(weekdayName)){return i;}}}function getSetDayOfWeek(input){var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}}function getSetLocaleDayOfWeek(input){var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');}function getSetISODayOfWeek(input){return input==null?this.day()||7:this.day(this.day()%7?input:input-7);}addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,function(){return this.hours()%12||12;});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}meridiem('a',true);meridiem('A',false);addUnitAlias('hour','h');function matchMeridiem(isStrict,locale){return locale._meridiemParse;}addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addParseToken(['H','HH'],HOUR);addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;});function localeIsPM(input){return((input+'').toLowerCase().charAt(0)==='p');}var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}}var getSetHour=makeGetSet('Hours',true);addFormatToken('m',['mm',2],0,'minute');addUnitAlias('minute','m');addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE);var getSetMinute=makeGetSet('Minutes',false);addFormatToken('s',['ss',2],0,'second');addUnitAlias('second','s');addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND);var getSetSecond=makeGetSet('Seconds',false);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100);});addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond()*10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond()*100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond()*1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond()*10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond()*100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond()*1000000;});addUnitAlias('millisecond','ms');addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';token.length<=9;token+='S'){addRegexToken(token,matchUnsigned);}function parseMs(input,array){array[MILLISECOND]=toInt(('0.'+input)*1000);}for(token='S';token.length<=9;token+='S'){addParseToken(token,parseMs);}var getSetMillisecond=makeGetSet('Milliseconds',false);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName');function getZoneAbbr(){return this._isUTC?'UTC':'';}function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}var momentPrototype__proto=Moment.prototype;momentPrototype__proto.add=add_subtract__add;momentPrototype__proto.calendar=moment_calendar__calendar;momentPrototype__proto.clone=clone;momentPrototype__proto.diff=diff;momentPrototype__proto.endOf=endOf;momentPrototype__proto.format=format;momentPrototype__proto.from=from;momentPrototype__proto.fromNow=fromNow;momentPrototype__proto.to=to;momentPrototype__proto.toNow=toNow;momentPrototype__proto.get=getSet;momentPrototype__proto.invalidAt=invalidAt;momentPrototype__proto.isAfter=isAfter;momentPrototype__proto.isBefore=isBefore;momentPrototype__proto.isBetween=isBetween;momentPrototype__proto.isSame=isSame;momentPrototype__proto.isValid=moment_valid__isValid;momentPrototype__proto.lang=lang;momentPrototype__proto.locale=locale;momentPrototype__proto.localeData=localeData;momentPrototype__proto.max=prototypeMax;momentPrototype__proto.min=prototypeMin;momentPrototype__proto.parsingFlags=parsingFlags;momentPrototype__proto.set=getSet;momentPrototype__proto.startOf=startOf;momentPrototype__proto.subtract=add_subtract__subtract;momentPrototype__proto.toArray=toArray;momentPrototype__proto.toObject=toObject;momentPrototype__proto.toDate=toDate;momentPrototype__proto.toISOString=moment_format__toISOString;momentPrototype__proto.toJSON=moment_format__toISOString;momentPrototype__proto.toString=toString;momentPrototype__proto.unix=unix;momentPrototype__proto.valueOf=to_type__valueOf;momentPrototype__proto.year=getSetYear;momentPrototype__proto.isLeapYear=getIsLeapYear;momentPrototype__proto.weekYear=getSetWeekYear;momentPrototype__proto.isoWeekYear=getSetISOWeekYear;momentPrototype__proto.quarter=momentPrototype__proto.quarters=getSetQuarter;momentPrototype__proto.month=getSetMonth;momentPrototype__proto.daysInMonth=getDaysInMonth;momentPrototype__proto.week=momentPrototype__proto.weeks=getSetWeek;momentPrototype__proto.isoWeek=momentPrototype__proto.isoWeeks=getSetISOWeek;momentPrototype__proto.weeksInYear=getWeeksInYear;momentPrototype__proto.isoWeeksInYear=getISOWeeksInYear;momentPrototype__proto.date=getSetDayOfMonth;momentPrototype__proto.day=momentPrototype__proto.days=getSetDayOfWeek;momentPrototype__proto.weekday=getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday=getSetISODayOfWeek;momentPrototype__proto.dayOfYear=getSetDayOfYear;momentPrototype__proto.hour=momentPrototype__proto.hours=getSetHour;momentPrototype__proto.minute=momentPrototype__proto.minutes=getSetMinute;momentPrototype__proto.second=momentPrototype__proto.seconds=getSetSecond;momentPrototype__proto.millisecond=momentPrototype__proto.milliseconds=getSetMillisecond;momentPrototype__proto.utcOffset=getSetOffset;momentPrototype__proto.utc=setOffsetToUTC;momentPrototype__proto.local=setOffsetToLocal;momentPrototype__proto.parseZone=setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset=hasAlignedHourOffset;momentPrototype__proto.isDST=isDaylightSavingTime;momentPrototype__proto.isDSTShifted=isDaylightSavingTimeShifted;momentPrototype__proto.isLocal=isLocal;momentPrototype__proto.isUtcOffset=isUtcOffset;momentPrototype__proto.isUtc=isUtc;momentPrototype__proto.isUTC=isUtc;momentPrototype__proto.zoneAbbr=getZoneAbbr;momentPrototype__proto.zoneName=getZoneName;momentPrototype__proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);momentPrototype__proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);momentPrototype__proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);momentPrototype__proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',getSetZone);var momentPrototype=momentPrototype__proto;function moment__createUnix(input){return local__createLocal(input*1000);}function moment__createInZone(){return local__createLocal.apply(null,arguments).parseZone();}var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function locale_calendar__calendar(key,mom,now){var output=this._calendar[key];return typeof output==='function'?output.call(mom,now):output;}var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format;}this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}function preParsePostFormat(string){return string;}var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relative__relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(typeof output==='function')?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}function pastFuture(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return typeof format==='function'?format(output):format.replace(/%s/i,output);}function locale_set__set(config){var prop,i;for(i in config){prop=config[i];if(typeof prop==='function'){this[i]=prop;}else{this['_'+i]=prop;}}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+(/\d{1,2}/).source);}var prototype__proto=Locale.prototype;prototype__proto._calendar=defaultCalendar;prototype__proto.calendar=locale_calendar__calendar;prototype__proto._longDateFormat=defaultLongDateFormat;prototype__proto.longDateFormat=longDateFormat;prototype__proto._invalidDate=defaultInvalidDate;prototype__proto.invalidDate=invalidDate;prototype__proto._ordinal=defaultOrdinal;prototype__proto.ordinal=ordinal;prototype__proto._ordinalParse=defaultOrdinalParse;prototype__proto.preparse=preParsePostFormat;prototype__proto.postformat=preParsePostFormat;prototype__proto._relativeTime=defaultRelativeTime;prototype__proto.relativeTime=relative__relativeTime;prototype__proto.pastFuture=pastFuture;prototype__proto.set=locale_set__set;prototype__proto.months=localeMonths;prototype__proto._months=defaultLocaleMonths;prototype__proto.monthsShort=localeMonthsShort;prototype__proto._monthsShort=defaultLocaleMonthsShort;prototype__proto.monthsParse=localeMonthsParse;prototype__proto.week=localeWeek;prototype__proto._week=defaultLocaleWeek;prototype__proto.firstDayOfYear=localeFirstDayOfYear;prototype__proto.firstDayOfWeek=localeFirstDayOfWeek;prototype__proto.weekdays=localeWeekdays;prototype__proto._weekdays=defaultLocaleWeekdays;prototype__proto.weekdaysMin=localeWeekdaysMin;prototype__proto._weekdaysMin=defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort=localeWeekdaysShort;prototype__proto._weekdaysShort=defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse=localeWeekdaysParse;prototype__proto.isPM=localeIsPM;prototype__proto._meridiemParse=defaultLocaleMeridiemParse;prototype__proto.meridiem=localeMeridiem;function lists__get(format,index,field,setter){var locale=locale_locales__getLocale();var utc=create_utc__createUTC().set(setter,index);return locale[field](utc,format);}function list(format,index,field,count,setter){if(typeof format==='number'){index=format;format=undefined;}format=format||'';if(index!=null){return lists__get(format,index,field,setter);}var i;var out=[];for(i=0;i<count;i++){out[i]=lists__get(format,i,field,setter);}return out;}function lists__listMonths(format,index){return list(format,index,'months',12,'month');}function lists__listMonthsShort(format,index){return list(format,index,'monthsShort',12,'month');}function lists__listWeekdays(format,index){return list(format,index,'weekdays',7,'day');}function lists__listWeekdaysShort(format,index){return list(format,index,'weekdaysShort',7,'day');}function lists__listWeekdaysMin(format,index){return list(format,index,'weekdaysMin',7,'day');}locale_locales__getSetGlobalLocale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}});utils_hooks__hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',locale_locales__getLocale);var mathAbs=Math.abs;function duration_abs__abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this;}function duration_add_subtract__addSubtract(duration,input,value,direction){var other=create__createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble();}function duration_add_subtract__add(input,value){return duration_add_subtract__addSubtract(this,input,value,1);}function duration_add_subtract__subtract(input,value){return duration_add_subtract__addSubtract(this,input,value,-1);}function absCeil(number){if(number<0){return Math.floor(number);}else{return Math.ceil(number);}}function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;if(!((milliseconds>=0&&days>=0&&months>=0)||(milliseconds<=0&&days<=0&&months<=0))){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0;}data.milliseconds=milliseconds%1000;seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this;}function daysToMonths(days){return days*4800/146097;}function monthsToDays(months){return months*146097/4800;}function as(units){var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==='month'?months:months/12;}else{days=this._days+Math.round(monthsToDays(this._months));switch(units){case'week':return days/7+milliseconds/6048e5;case'day':return days+milliseconds/864e5;case'hour':return days*24+milliseconds/36e5;case'minute':return days*1440+milliseconds/6e4;case'second':return days*86400+milliseconds/1000;case'millisecond':return Math.floor(days*864e5)+milliseconds;default:throw new Error('Unknown unit '+units);}}}function duration_as__valueOf(){return(this._milliseconds+this._days*864e5+(this._months%12)*2592e6+toInt(this._months/12)*31536e6);}function makeAs(alias){return function(){return this.as(alias);};}var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function duration_get__get(units){units=normalizeUnits(units);return this[units+'s']();}function makeGetter(name){return function(){return this._data[name];};}var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days()/7);}var round=Math.round;var thresholds={s:45,m:45,h:22,d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}function duration_humanize__relativeTime(posNegDuration,withoutSuffix,locale){var duration=create__createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds<thresholds.s&&['s',seconds]||minutes===1&&['m']||minutes<thresholds.m&&['mm',minutes]||hours===1&&['h']||hours<thresholds.h&&['hh',hours]||days===1&&['d']||days<thresholds.d&&['dd',days]||months===1&&['M']||months<thresholds.M&&['MM',months]||years===1&&['y']||['yy',years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a);}function duration_humanize__getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return false;}if(limit===undefined){return thresholds[threshold];}thresholds[threshold]=limit;return true;}function humanize(withSuffix){var locale=this.localeData();var output=duration_humanize__relativeTime(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output);}return locale.postformat(output);}var iso_string__abs=Math.abs;function iso_string__toISOString(){var seconds=iso_string__abs(this._milliseconds)/1000;var days=iso_string__abs(this._days);var months=iso_string__abs(this._months);var minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);months%=12;var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){return'P0D';}return(total<0?'-':'')+'P'+(Y?Y+'Y':'')+(M?M+'M':'')+(D?D+'D':'')+((h||m||s)?'T':'')+(h?h+'H':'')+(m?m+'M':'')+(s?s+'S':'');}var duration_prototype__proto=Duration.prototype;duration_prototype__proto.abs=duration_abs__abs;duration_prototype__proto.add=duration_add_subtract__add;duration_prototype__proto.subtract=duration_add_subtract__subtract;duration_prototype__proto.as=as;duration_prototype__proto.asMilliseconds=asMilliseconds;duration_prototype__proto.asSeconds=asSeconds;duration_prototype__proto.asMinutes=asMinutes;duration_prototype__proto.asHours=asHours;duration_prototype__proto.asDays=asDays;duration_prototype__proto.asWeeks=asWeeks;duration_prototype__proto.asMonths=asMonths;duration_prototype__proto.asYears=asYears;duration_prototype__proto.valueOf=duration_as__valueOf;duration_prototype__proto._bubble=bubble;duration_prototype__proto.get=duration_get__get;duration_prototype__proto.milliseconds=milliseconds;duration_prototype__proto.seconds=seconds;duration_prototype__proto.minutes=minutes;duration_prototype__proto.hours=hours;duration_prototype__proto.days=days;duration_prototype__proto.weeks=weeks;duration_prototype__proto.months=months;duration_prototype__proto.years=years;duration_prototype__proto.humanize=humanize;duration_prototype__proto.toISOString=iso_string__toISOString;duration_prototype__proto.toString=iso_string__toISOString;duration_prototype__proto.toJSON=iso_string__toISOString;duration_prototype__proto.locale=locale;duration_prototype__proto.localeData=localeData;duration_prototype__proto.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',iso_string__toISOString);duration_prototype__proto.lang=lang;addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf');addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d=new Date(parseFloat(input,10)*1000);});addParseToken('x',function(input,array,config){config._d=new Date(toInt(input));});utils_hooks__hooks.version='2.10.6';setHookCallback(local__createLocal);utils_hooks__hooks.fn=momentPrototype;utils_hooks__hooks.min=min;utils_hooks__hooks.max=max;utils_hooks__hooks.utc=create_utc__createUTC;utils_hooks__hooks.unix=moment__createUnix;utils_hooks__hooks.months=lists__listMonths;utils_hooks__hooks.isDate=isDate;utils_hooks__hooks.locale=locale_locales__getSetGlobalLocale;utils_hooks__hooks.invalid=valid__createInvalid;utils_hooks__hooks.duration=create__createDuration;utils_hooks__hooks.isMoment=isMoment;utils_hooks__hooks.weekdays=lists__listWeekdays;utils_hooks__hooks.parseZone=moment__createInZone;utils_hooks__hooks.localeData=locale_locales__getLocale;utils_hooks__hooks.isDuration=isDuration;utils_hooks__hooks.monthsShort=lists__listMonthsShort;utils_hooks__hooks.weekdaysMin=lists__listWeekdaysMin;utils_hooks__hooks.defineLocale=defineLocale;utils_hooks__hooks.weekdaysShort=lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits=normalizeUnits;utils_hooks__hooks.relativeTimeThreshold=duration_humanize__getSetRelativeTimeThreshold;var _moment=utils_hooks__hooks;return _moment;}));
"format amd";!function(){"use strict";function a(a){return angular.isUndefined(a)||null===a}function b(){try{return require("moment")}catch(a){throw new Error("Please install moment via npm. Please reference to: https://github.com/urish/angular-moment")}}function c(c,d){if("undefined"==typeof d){if("function"!=typeof require)throw new Error("Moment cannot be found by angular-moment! Please reference to: https://github.com/urish/angular-moment");d=b()}return c.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:null,format:null,statefulFilters:!0}).constant("moment",d).constant("amTimeAgoConfig",{withoutSuffix:!1,serverTime:null,titleFormat:null,fullDateThreshold:null,fullDateFormat:null}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig",function(b,d,e,f){return function(g,h,i){function j(){var a;if(p)a=p;else if(f.serverTime){var b=(new Date).getTime(),c=b-v+f.serverTime;a=d(c)}else a=d();return a}function k(){q&&(b.clearTimeout(q),q=null)}function l(a){var c=j().diff(a,"day"),d=t&&c>=t;if(d?h.text(a.format(u)):h.text(a.from(j(),r)),s&&y&&h.attr("title",a.local().format(s)),!d){var e=Math.abs(j().diff(a,"minute")),f=3600;1>e?f=1:60>e?f=30:180>e&&(f=300),q=b.setTimeout(function(){l(a)},1e3*f)}}function m(a){x&&h.attr("datetime",a)}function n(){if(k(),o){var a=e.preprocessDate(o);l(a),m(a.toISOString())}}var o,p,q=null,r=f.withoutSuffix,s=f.titleFormat,t=f.fullDateThreshold,u=f.fullDateFormat,v=(new Date).getTime(),w=i.amTimeAgo,x="TIME"===h[0].nodeName.toUpperCase(),y=!h.attr("title");g.$watch(w,function(b){return a(b)||""===b?(k(),void(o&&(h.text(""),m(""),o=null))):(o=b,void n())}),c.isDefined(i.amFrom)&&g.$watch(i.amFrom,function(b){p=a(b)||""===b?null:d(b),n()}),c.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(r=a,n()):r=f.withoutSuffix}),i.$observe("amFullDateThreshold",function(a){t=a,n()}),i.$observe("amFullDateFormat",function(a){u=a,n()}),g.$on("$destroy",function(){k()}),g.$on("amMoment:localeChanged",function(){n()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(a,b,d,e){var f=null;this.changeLocale=function(d,e){var f=a.locale(d,e);return c.isDefined(d)&&b.$broadcast("amMoment:localeChanged"),f},this.changeTimezone=function(c){a.tz&&a.tz.setDefault?(a.tz.setDefault(c),b.$broadcast("amMoment:timezoneChanged")):d.warn("angular-moment: changeTimezone() works only with moment-timezone.js v0.3.0 or greater."),e.timezone=c,f=c},this.preprocessDate=function(b){return f!==e.timezone&&this.changeTimezone(e.timezone),e.preprocess?e.preprocess(b):a(!isNaN(parseFloat(b))&&isFinite(b)?parseInt(b,10):b)}}]).filter("amParse",["moment",function(a){return function(b,c){return a(b,c)}}]).filter("amFromUnix",["moment",function(a){return function(b){return a.unix(b)}}]).filter("amUtc",["moment",function(a){return function(b){return a.utc(b)}}]).filter("amUtcOffset",["amMoment",function(a){function b(b,c){return a.preprocessDate(b).utcOffset(c)}return b}]).filter("amLocal",["moment",function(a){return function(b){return a.isMoment(b)?b.local():null}}]).filter("amTimezone",["amMoment","angularMomentConfig","$log",function(a,b,c){function d(b,d){var e=a.preprocessDate(b);return d?e.tz?e.tz(d):(c.warn("angular-moment: named timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js ?"),e):e}return d}]).filter("amCalendar",["moment","amMoment","angularMomentConfig",function(b,c,d){function e(b){if(a(b))return"";var d=c.preprocessDate(b);return d.isValid()?d.calendar():""}return e.$stateful=d.statefulFilters,e}]).filter("amDifference",["moment","amMoment","angularMomentConfig",function(b,c,d){function e(d,e,f,g){if(a(d))return"";var h=c.preprocessDate(d),i=a(e)?b():c.preprocessDate(e);return h.isValid()&&i.isValid()?h.diff(i,f,g):""}return e.$stateful=d.statefulFilters,e}]).filter("amDateFormat",["moment","amMoment","angularMomentConfig",function(b,c,d){function e(b,d){if(a(b))return"";var e=c.preprocessDate(b);return e.isValid()?e.format(d):""}return e.$stateful=d.statefulFilters,e}]).filter("amDurationFormat",["moment","angularMomentConfig",function(b,c){function d(c,d,e){return a(c)?"":b.duration(c,d).humanize(e)}return d.$stateful=c.statefulFilters,d}]).filter("amTimeAgo",["moment","amMoment","angularMomentConfig",function(b,c,d){function e(d,e,f){var g,h;return a(d)?"":(d=c.preprocessDate(d),g=b(d),g.isValid()?(h=b(f),!a(f)&&h.isValid()?g.from(h,e):g.fromNow(e)):"")}return e.$stateful=d.statefulFilters,e}]).filter("amSubtract",["moment","angularMomentConfig",function(b,c){function d(c,d,e){return a(c)?"":b(c).subtract(parseInt(d,10),e)}return d.$stateful=c.statefulFilters,d}]).filter("amAdd",["moment","angularMomentConfig",function(b,c){function d(c,d,e){return a(c)?"":b(c).add(parseInt(d,10),e)}return d.$stateful=c.statefulFilters,d}]).filter("amStartOf",["moment","angularMomentConfig",function(b,c){function d(c,d){return a(c)?"":b(c).startOf(d)}return d.$stateful=c.statefulFilters,d}]).filter("amEndOf",["moment","angularMomentConfig",function(b,c){function d(c,d){return a(c)?"":b(c).endOf(d)}return d.$stateful=c.statefulFilters,d}])}"function"==typeof define&&define.amd?define(["angular","moment"],c):"undefined"!=typeof module&&module&&module.exports?(c(require("angular"),require("moment")),module.exports="angularMoment"):c(angular,("undefined"!=typeof global?global:window).moment)}();
//# sourceMappingURL=angular-moment.min.js.map
/*globals define, jQuery, module, require */
/*jslint vars:true */

/**
 * @license angular-bootstrap-datetimepicker  version: 0.3.15
 * Copyright 2015 Knight Rider Consulting, Inc. http://www.knightrider.com
 * License: MIT
 */

/**
 *
 *    @author        Dale "Ducky" Lotts
 *    @since        2013-Jul-8
 */

(function (factory) {
  'use strict';
  /* istanbul ignore if */
  if (typeof define === 'function' && /* istanbul ignore next */ define.amd) {
    define(['angular', 'moment'], factory); // AMD
    /* istanbul ignore next */
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'), require('moment')); // CommonJS
  } else {
    factory(window.angular, window.moment); // Browser global
  }
}(function (angular, moment) {
  'use strict';
  angular.module('ui.bootstrap.datetimepicker', [])
    .constant('dateTimePickerConfig', {
      dropdownSelector: null,
      minuteStep: 5,
      minView: 'minute',
      startView: 'day'
    })
    .directive('datetimepicker', ['$log', 'dateTimePickerConfig', function datetimepickerDirective($log, defaultConfig) {

      function DateObject() {

        var tempDate = new Date();
        var localOffset = tempDate.getTimezoneOffset() * 60000;
        this.utcDateValue = tempDate.getTime();
        this.selectable = true;

        this.localDateValue = function () {
          return this.utcDateValue + localOffset;
        };

        var validProperties = ['utcDateValue', 'localDateValue', 'display', 'active', 'selectable', 'past', 'future'];

        for (var prop in arguments[0]) {
          /* istanbul ignore else */
          //noinspection JSUnfilteredForInLoop
          if (validProperties.indexOf(prop) >= 0) {
            //noinspection JSUnfilteredForInLoop
            this[prop] = arguments[0][prop];
          }
        }
      }

      var validateConfiguration = function validateConfiguration(configuration) {
        var validOptions = ['startView', 'minView', 'minuteStep', 'dropdownSelector'];

        for (var prop in configuration) {
          //noinspection JSUnfilteredForInLoop
          if (validOptions.indexOf(prop) < 0) {
            throw ('invalid option: ' + prop);
          }
        }

        // Order of the elements in the validViews array is significant.
        var validViews = ['minute', 'hour', 'day', 'month', 'year'];

        if (validViews.indexOf(configuration.startView) < 0) {
          throw ('invalid startView value: ' + configuration.startView);
        }

        if (validViews.indexOf(configuration.minView) < 0) {
          throw ('invalid minView value: ' + configuration.minView);
        }

        if (validViews.indexOf(configuration.minView) > validViews.indexOf(configuration.startView)) {
          throw ('startView must be greater than minView');
        }

        if (!angular.isNumber(configuration.minuteStep)) {
          throw ('minuteStep must be numeric');
        }
        if (configuration.minuteStep <= 0 || configuration.minuteStep >= 60) {
          throw ('minuteStep must be greater than zero and less than 60');
        }
        if (configuration.dropdownSelector !== null && !angular.isString(configuration.dropdownSelector)) {
          throw ('dropdownSelector must be a string');
        }

        /* istanbul ignore next */
        if (configuration.dropdownSelector !== null && ((typeof jQuery === 'undefined') || (typeof jQuery().dropdown !== 'function'))) {
          $log.error('Please DO NOT specify the dropdownSelector option unless you are using jQuery AND Bootstrap.js. ' +
          'Please include jQuery AND Bootstrap.js, or write code to close the dropdown in the on-set-time callback. \n\n' +
          'The dropdownSelector configuration option is being removed because it will not function properly.');
          delete configuration.dropdownSelector;
        }
      };

      return {
        restrict: 'E',
        require: 'ngModel',
        template: '<div class="datetimepicker table-responsive">' +
        '<table class="table table-condensed  {{ data.currentView }}-view">' +
        '   <thead>' +
        '       <tr>' +
        '           <th class="left" data-ng-click="changeView(data.currentView, data.leftDate, $event)" data-ng-show="data.leftDate.selectable"><i class="glyphicon glyphicon-arrow-left"/></th>' +
        '           <th class="switch" colspan="5" data-ng-show="data.previousViewDate.selectable" data-ng-click="changeView(data.previousView, data.previousViewDate, $event)">{{ data.previousViewDate.display }}</th>' +
        '           <th class="right" data-ng-click="changeView(data.currentView, data.rightDate, $event)" data-ng-show="data.rightDate.selectable"><i class="glyphicon glyphicon-arrow-right"/></th>' +
        '       </tr>' +
        '       <tr>' +
        '           <th class="dow" data-ng-repeat="day in data.dayNames" >{{ day }}</th>' +
        '       </tr>' +
        '   </thead>' +
        '   <tbody>' +
        '       <tr data-ng-if="data.currentView !== \'day\'" >' +
        '           <td colspan="7" >' +
        '              <span    class="{{ data.currentView }}" ' +
        '                       data-ng-repeat="dateObject in data.dates"  ' +
        '                       data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" ' +
        '                       data-ng-click="changeView(data.nextView, dateObject, $event)">{{ dateObject.display }}</span> ' +
        '           </td>' +
        '       </tr>' +
        '       <tr data-ng-if="data.currentView === \'day\'" data-ng-repeat="week in data.weeks">' +
        '           <td data-ng-repeat="dateObject in week.dates" ' +
        '               data-ng-click="changeView(data.nextView, dateObject, $event)"' +
        '               class="day" ' +
        '               data-ng-class="{active: dateObject.active, past: dateObject.past, future: dateObject.future, disabled: !dateObject.selectable}" >{{ dateObject.display }}</td>' +
        '       </tr>' +
        '   </tbody>' +
        '</table></div>',
        scope: {
          onSetTime: '&',
          beforeRender: '&'
        },
        replace: true,
        link: function link(scope, element, attrs, ngModelController) {

          var directiveConfig = {};

          if (attrs.datetimepickerConfig) {
            directiveConfig = scope.$parent.$eval(attrs.datetimepickerConfig);
          }

          var configuration = {};

          angular.extend(configuration, defaultConfig, directiveConfig);

          validateConfiguration(configuration);

          var startOfDecade = function startOfDecade(unixDate) {
            var startYear = (parseInt(moment.utc(unixDate).year() / 10, 10) * 10);
            return moment.utc(unixDate).year(startYear).startOf('year');
          };

          var dataFactory = {
            year: function year(unixDate) {
              var selectedDate = moment.utc(unixDate).startOf('year');
              // View starts one year before the decade starts and ends one year after the decade ends
              // i.e. passing in a date of 1/1/2013 will give a range of 2009 to 2020
              // Truncate the last digit from the current year and subtract 1 to get the start of the decade
              var startDecade = (parseInt(selectedDate.year() / 10, 10) * 10);
              var startDate = moment.utc(startOfDecade(unixDate)).subtract(1, 'year').startOf('year');

              var activeYear = ngModelController.$modelValue ? moment(ngModelController.$modelValue).year() : 0;

              var result = {
                'currentView': 'year',
                'nextView': configuration.minView === 'year' ? 'setTime' : 'month',
                'previousViewDate': new DateObject({
                  utcDateValue: null,
                  display: startDecade + '-' + (startDecade + 9)
                }),
                'leftDate': new DateObject({utcDateValue: moment.utc(startDate).subtract(9, 'year').valueOf()}),
                'rightDate': new DateObject({utcDateValue: moment.utc(startDate).add(11, 'year').valueOf()}),
                'dates': []
              };

              for (var i = 0; i < 12; i += 1) {
                var yearMoment = moment.utc(startDate).add(i, 'years');
                var dateValue = {
                  'utcDateValue': yearMoment.valueOf(),
                  'display': yearMoment.format('YYYY'),
                  'past': yearMoment.year() < startDecade,
                  'future': yearMoment.year() > startDecade + 9,
                  'active': yearMoment.year() === activeYear
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            month: function month(unixDate) {

              var startDate = moment.utc(unixDate).startOf('year');
              var previousViewDate = startOfDecade(unixDate);
              var activeDate = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MMM') : 0;

              var result = {
                'previousView': 'year',
                'currentView': 'month',
                'nextView': configuration.minView === 'month' ? 'setTime' : 'day',
                'previousViewDate': new DateObject({
                  utcDateValue: previousViewDate.valueOf(),
                  display: startDate.format('YYYY')
                }),
                'leftDate': new DateObject({utcDateValue: moment.utc(startDate).subtract(1, 'year').valueOf()}),
                'rightDate': new DateObject({utcDateValue: moment.utc(startDate).add(1, 'year').valueOf()}),
                'dates': []
              };

              for (var i = 0; i < 12; i += 1) {
                var monthMoment = moment.utc(startDate).add(i, 'months');
                var dateValue = {
                  'utcDateValue': monthMoment.valueOf(),
                  'display': monthMoment.format('MMM'),
                  'active': monthMoment.format('YYYY-MMM') === activeDate
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            day: function day(unixDate) {

              var selectedDate = moment.utc(unixDate);
              var startOfMonth = moment.utc(selectedDate).startOf('month');
              var previousViewDate = moment.utc(selectedDate).startOf('year');
              var endOfMonth = moment.utc(selectedDate).endOf('month');

              var startDate = moment.utc(startOfMonth).subtract(Math.abs(startOfMonth.weekday()), 'days');

              var activeDate = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MMM-DD') : '';

              var result = {
                'previousView': 'month',
                'currentView': 'day',
                'nextView': configuration.minView === 'day' ? 'setTime' : 'hour',
                'previousViewDate': new DateObject({
                  utcDateValue: previousViewDate.valueOf(),
                  display: startOfMonth.format('YYYY-MMM')
                }),
                'leftDate': new DateObject({utcDateValue: moment.utc(startOfMonth).subtract(1, 'months').valueOf()}),
                'rightDate': new DateObject({utcDateValue: moment.utc(startOfMonth).add(1, 'months').valueOf()}),
                'dayNames': [],
                'weeks': []
              };


              for (var dayNumber = 0; dayNumber < 7; dayNumber += 1) {
                result.dayNames.push(moment.utc().weekday(dayNumber).format('dd'));
              }

              for (var i = 0; i < 6; i += 1) {
                var week = {dates: []};
                for (var j = 0; j < 7; j += 1) {
                  var monthMoment = moment.utc(startDate).add((i * 7) + j, 'days');
                  var dateValue = {
                    'utcDateValue': monthMoment.valueOf(),
                    'display': monthMoment.format('D'),
                    'active': monthMoment.format('YYYY-MMM-DD') === activeDate,
                    'past': monthMoment.isBefore(startOfMonth),
                    'future': monthMoment.isAfter(endOfMonth)
                  };
                  week.dates.push(new DateObject(dateValue));
                }
                result.weeks.push(week);
              }

              return result;
            },

            hour: function hour(unixDate) {
              var selectedDate = moment.utc(unixDate).startOf('day');
              var previousViewDate = moment.utc(selectedDate).startOf('month');

              var activeFormat = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MM-DD H') : '';

              var result = {
                'previousView': 'day',
                'currentView': 'hour',
                'nextView': configuration.minView === 'hour' ? 'setTime' : 'minute',
                'previousViewDate': new DateObject({
                  utcDateValue: previousViewDate.valueOf(),
                  display: selectedDate.format('ll')
                }),
                'leftDate': new DateObject({utcDateValue: moment.utc(selectedDate).subtract(1, 'days').valueOf()}),
                'rightDate': new DateObject({utcDateValue: moment.utc(selectedDate).add(1, 'days').valueOf()}),
                'dates': []
              };

              for (var i = 0; i < 24; i += 1) {
                var hourMoment = moment.utc(selectedDate).add(i, 'hours');
                var dateValue = {
                  'utcDateValue': hourMoment.valueOf(),
                  'display': hourMoment.format('LT'),
                  'active': hourMoment.format('YYYY-MM-DD H') === activeFormat
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            minute: function minute(unixDate) {
              var selectedDate = moment.utc(unixDate).startOf('hour');
              var previousViewDate = moment.utc(selectedDate).startOf('day');
              var activeFormat = ngModelController.$modelValue ? moment(ngModelController.$modelValue).format('YYYY-MM-DD H:mm') : '';

              var result = {
                'previousView': 'hour',
                'currentView': 'minute',
                'nextView': 'setTime',
                'previousViewDate': new DateObject({
                  utcDateValue: previousViewDate.valueOf(),
                  display: selectedDate.format('lll')
                }),
                'leftDate': new DateObject({utcDateValue: moment.utc(selectedDate).subtract(1, 'hours').valueOf()}),
                'rightDate': new DateObject({utcDateValue: moment.utc(selectedDate).add(1, 'hours').valueOf()}),
                'dates': []
              };

              var limit = 60 / configuration.minuteStep;

              for (var i = 0; i < limit; i += 1) {
                var hourMoment = moment.utc(selectedDate).add(i * configuration.minuteStep, 'minute');
                var dateValue = {
                  'utcDateValue': hourMoment.valueOf(),
                  'display': hourMoment.format('LT'),
                  'active': hourMoment.format('YYYY-MM-DD H:mm') === activeFormat
                };

                result.dates.push(new DateObject(dateValue));
              }

              return result;
            },

            setTime: function setTime(unixDate) {
              var tempDate = new Date(unixDate);
              var newDate = new Date(tempDate.getTime() + (tempDate.getTimezoneOffset() * 60000));

              var oldDate = ngModelController.$modelValue;
              ngModelController.$setViewValue(newDate);

              if (configuration.dropdownSelector) {
                jQuery(configuration.dropdownSelector).dropdown('toggle');
              }

              scope.onSetTime({newDate: newDate, oldDate: oldDate});

              return dataFactory[configuration.startView](unixDate);
            }
          };

          var getUTCTime = function getUTCTime(modelValue) {
            var tempDate = (modelValue ? moment(modelValue).toDate() : new Date());
            return tempDate.getTime() - (tempDate.getTimezoneOffset() * 60000);
          };

          scope.changeView = function changeView(viewName, dateObject, event) {
            if (event) {
              event.stopPropagation();
              event.preventDefault();
            }

            if (viewName && (dateObject.utcDateValue > -Infinity) && dateObject.selectable && dataFactory[viewName]) {
              var result = dataFactory[viewName](dateObject.utcDateValue);

              var weekDates = [];
              if (result.weeks) {
                for (var i = 0; i < result.weeks.length; i += 1) {
                  var week = result.weeks[i];
                  for (var j = 0; j < week.dates.length; j += 1) {
                    var weekDate = week.dates[j];
                    weekDates.push(weekDate);
                  }
                }
              }

              scope.beforeRender({
                $view: result.currentView,
                $dates: result.dates || weekDates,
                $leftDate: result.leftDate,
                $upDate: result.previousViewDate,
                $rightDate: result.rightDate
              });

              scope.data = result;
            }
          };

          ngModelController.$render = function $render() {
            scope.changeView(configuration.startView, new DateObject({utcDateValue: getUTCTime(ngModelController.$viewValue)}));
          };
        }
      };
    }]);
}));

/**
* bootstrap-formhelpers.js v2.3.0 by @vincentlamanna
* Copyright 2013 Vincent Lamanna
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap Form Helpers requires jQuery");var BFHCountriesList={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",CI:"Côte d'Ivoire",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TP:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FO:"Faeroe Islands",FK:"Falkland Islands",FJ:"Fiji",FI:"Finland",MK:"Former Yugoslav Republic of Macedonia",FR:"France",FX:"France, Metropolitan",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard and Mc Donald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macau",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Marianas",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn Islands",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",ST:"São Tomé and Príncipe",SH:"Saint Helena",PM:"St. Pierre and Miquelon",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen Islands",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",BS:"The Bahamas",GM:"The Gambia",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"US Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican City",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna Islands",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"},BFHCurrenciesList={AED:{label:"United Arab Emirates dirham",currencyflag:"",symbol:"د.إ"},AFN:{label:"Afghan afghani",currencyflag:"",symbol:"؋"},ALL:{label:"Albanian lek",currencyflag:"",symbol:"L"},AMD:{label:"Armenian dram",currencyflag:"",symbol:"դր"},AOA:{label:"Angolan kwanza",currencyflag:"",symbol:"Kz"},ARS:{label:"Argentine peso",currencyflag:"",symbol:"$"},AUD:{label:"Australian dollar",currencyflag:"AUD",symbol:"$"},AWG:{label:"Aruban florin",currencyflag:"",symbol:"ƒ"},AZN:{label:"Azerbaijani manat",currencyflag:"",symbol:""},BAM:{label:"Bosnia and Herzegovina convertible mark",currencyflag:"",symbol:"KM"},BBD:{label:"Barbadian dollar",currencyflag:"",symbol:"$"},BDT:{label:"Bangladeshi taka",currencyflag:"",symbol:"৳"},BGN:{label:"Bulgarian lev",currencyflag:"",symbol:"лв"},BHD:{label:"Bahraini dinar",currencyflag:"",symbol:".د.ب"},BIF:{label:"Burundian franc",currencyflag:"",symbol:"Fr"},BMD:{label:"Bermudian dollar",currencyflag:"",symbol:"$"},BND:{label:"Brunei dollar",currencyflag:"",symbol:"$"},BOB:{label:"Bolivian boliviano",currencyflag:"",symbol:"Bs"},BRL:{label:"Brazilian real",currencyflag:"",symbol:"R$"},BSD:{label:"Bahamian dollar",currencyflag:"",symbol:"$"},BTN:{label:"Bhutanese ngultrum",currencyflag:"",symbol:"Nu"},BWP:{label:"Botswana pula",currencyflag:"",symbol:"P"},BYR:{label:"Belarusian ruble",currencyflag:"",symbol:"Br"},BZD:{label:"Belize dollar",currencyflag:"",symbol:"$"},CAD:{label:"Canadian dollar",currencyflag:"",symbol:"$"},CDF:{label:"Congolese franc",currencyflag:"",symbol:"Fr"},CHF:{label:"Swiss franc",currencyflag:"CHF",symbol:"Fr"},CLP:{label:"Chilean peso",currencyflag:"",symbol:"$"},CNY:{label:"Chinese yuan",currencyflag:"",symbol:"¥"},COP:{label:"Colombian peso",currencyflag:"",symbol:"$"},CRC:{label:"Costa Rican colón",currencyflag:"",symbol:"₡"},CUP:{label:"Cuban convertible peso",currencyflag:"",symbol:"$"},CVE:{label:"Cape Verdean escudo",currencyflag:"",symbol:"$"},CZK:{label:"Czech koruna",currencyflag:"",symbol:"Kč"},DJF:{label:"Djiboutian franc",currencyflag:"",symbol:"Fr"},DKK:{label:"Danish krone",currencyflag:"DKK",symbol:"kr"},DOP:{label:"Dominican peso",currencyflag:"",symbol:"$"},DZD:{label:"Algerian dinar",currencyflag:"",symbol:"د.ج"},EGP:{label:"Egyptian pound",currencyflag:"",symbol:"ج.م"},ERN:{label:"Eritrean nakfa",currencyflag:"",symbol:"Nfk"},ETB:{label:"Ethiopian birr",currencyflag:"",symbol:"Br"},EUR:{label:"Euro",currencyflag:"EUR",symbol:"€"},FJD:{label:"Fijian dollar",currencyflag:"",symbol:"$"},FKP:{label:"Falkland Islands pound",currencyflag:"",symbol:"£"},GBP:{label:"British pound",currencyflag:"",symbol:"£"},GEL:{label:"Georgian lari",currencyflag:"",symbol:"ლ"},GHS:{label:"Ghana cedi",currencyflag:"",symbol:"₵"},GMD:{label:"Gambian dalasi",currencyflag:"",symbol:"D"},GNF:{label:"Guinean franc",currencyflag:"",symbol:"Fr"},GTQ:{label:"Guatemalan quetzal",currencyflag:"",symbol:"Q"},GYD:{label:"Guyanese dollar",currencyflag:"",symbol:"$"},HKD:{label:"Hong Kong dollar",currencyflag:"",symbol:"$"},HNL:{label:"Honduran lempira",currencyflag:"",symbol:"L"},HRK:{label:"Croatian kuna",currencyflag:"",symbol:"kn"},HTG:{label:"Haitian gourde",currencyflag:"",symbol:"G"},HUF:{label:"Hungarian forint",currencyflag:"",symbol:"Ft"},IDR:{label:"Indonesian rupiah",currencyflag:"",symbol:"Rp"},ILS:{label:"Israeli new shekel",currencyflag:"",symbol:"₪"},IMP:{label:"Manx pound",currencyflag:"",symbol:"£"},INR:{label:"Indian rupee",currencyflag:"",symbol:""},IQD:{label:"Iraqi dinar",currencyflag:"",symbol:"ع.د"},IRR:{label:"Iranian rial",currencyflag:"",symbol:"﷼"},ISK:{label:"Icelandic króna",currencyflag:"",symbol:"kr"},JEP:{label:"Jersey pound",currencyflag:"",symbol:"£"},JMD:{label:"Jamaican dollar",currencyflag:"",symbol:"$"},JOD:{label:"Jordanian dinar",currencyflag:"",symbol:"د.ا"},JPY:{label:"Japanese yen",currencyflag:"",symbol:"¥"},KES:{label:"Kenyan shilling",currencyflag:"",symbol:"Sh"},KGS:{label:"Kyrgyzstani som",currencyflag:"",symbol:"лв"},KHR:{label:"Cambodian riel",currencyflag:"",symbol:"៛"},KMF:{label:"Comorian franc",currencyflag:"",symbol:"Fr"},KPW:{label:"North Korean won",currencyflag:"",symbol:"₩"},KRW:{label:"South Korean won",currencyflag:"",symbol:"₩"},KWD:{label:"Kuwaiti dinar",currencyflag:"",symbol:"د.ك"},KYD:{label:"Cayman Islands dollar",currencyflag:"",symbol:"$"},KZT:{label:"Kazakhstani tenge",currencyflag:"",symbol:"₸"},LAK:{label:"Lao kip",currencyflag:"",symbol:"₭"},LBP:{label:"Lebanese pound",currencyflag:"",symbol:"ل.ل"},LKR:{label:"Sri Lankan rupee",currencyflag:"",symbol:"Rs"},LRD:{label:"Liberian dollar",currencyflag:"",symbol:"$"},LSL:{label:"Lesotho loti",currencyflag:"",symbol:"L"},LTL:{label:"Lithuanian litas",currencyflag:"",symbol:"Lt"},LVL:{label:"Latvian lats",currencyflag:"",symbol:"Ls"},LYD:{label:"Libyan dinar",currencyflag:"",symbol:"ل.د"},MAD:{label:"Moroccan dirham",currencyflag:"",symbol:"د.م."},MDL:{label:"Moldovan leu",currencyflag:"",symbol:"L"},MGA:{label:"Malagasy ariary",currencyflag:"",symbol:"Ar"},MKD:{label:"Macedonian denar",currencyflag:"",symbol:"ден"},MMK:{label:"Burmese kyat",currencyflag:"",symbol:"Ks"},MNT:{label:"Mongolian tögrög",currencyflag:"",symbol:"₮"},MOP:{label:"Macanese pataca",currencyflag:"",symbol:"P"},MRO:{label:"Mauritanian ouguiya",currencyflag:"",symbol:"UM"},MUR:{label:"Mauritian rupee",currencyflag:"",symbol:"Rs"},MVR:{label:"Maldivian rufiyaa",currencyflag:"",symbol:".ރ"},MWK:{label:"Malawian kwacha",currencyflag:"",symbol:"MK"},MXN:{label:"Mexican peso",currencyflag:"",symbol:"$"},MYR:{label:"Malaysian ringgit",currencyflag:"",symbol:"MR"},MZN:{label:"Mozambican metical",currencyflag:"",symbol:"MT"},NAD:{label:"Namibian dollar",currencyflag:"",symbol:"$"},NGN:{label:"Nigerian naira",currencyflag:"",symbol:"₦"},NIO:{label:"Nicaraguan córdoba",currencyflag:"",symbol:"C$"},NOK:{label:"Norwegian krone",currencyflag:"",symbol:"kr"},NPR:{label:"Nepalese rupee",currencyflag:"",symbol:"Rs"},NZD:{label:"New Zealand dollar",currencyflag:"",symbol:"$"},OMR:{label:"Omani rial",currencyflag:"",symbol:"ر.ع."},PAB:{label:"Panamanian balboa",currencyflag:"",symbol:"B/."},PEN:{label:"Peruvian nuevo sol",currencyflag:"",symbol:"S/."},PGK:{label:"Papua New Guinean kina",currencyflag:"",symbol:"K"},PHP:{label:"Philippine peso",currencyflag:"",symbol:"₱"},PKR:{label:"Pakistani rupee",currencyflag:"",symbol:"Rs"},PLN:{label:"Polish złoty",currencyflag:"",symbol:"zł"},PRB:{label:"Transnistrian ruble",currencyflag:"",symbol:"р."},PYG:{label:"Paraguayan guaraní",currencyflag:"",symbol:"₲"},QAR:{label:"Qatari riyal",currencyflag:"",symbol:"ر.ق"},RON:{label:"Romanian leu",currencyflag:"",symbol:"L"},RSD:{label:"Serbian dinar",currencyflag:"",symbol:"дин"},RUB:{label:"Russian ruble",currencyflag:"",symbol:"руб."},RWF:{label:"Rwandan franc",currencyflag:"",symbol:"Fr"},SAR:{label:"Saudi riyal",currencyflag:"",symbol:"ر.س"},SBD:{label:"Solomon Islands dollar",currencyflag:"",symbol:"$"},SCR:{label:"Seychellois rupee",currencyflag:"",symbol:"Rs"},SDG:{label:"Singapore dollar",currencyflag:"",symbol:"$"},SEK:{label:"Swedish krona",currencyflag:"",symbol:"kr"},SGD:{label:"Singapore dollar",currencyflag:"",symbol:"$"},SHP:{label:"Saint Helena pound",currencyflag:"",symbol:"£"},SLL:{label:"Sierra Leonean leone",currencyflag:"",symbol:"Le"},SOS:{label:"Somali shilling",currencyflag:"",symbol:"Sh"},SRD:{label:"Surinamese dollar",currencyflag:"",symbol:"$"},SSP:{label:"South Sudanese pound",currencyflag:"",symbol:"£"},STD:{label:"São Tomé and Príncipe dobra",currencyflag:"",symbol:"Db"},SVC:{label:"Salvadoran colón",currencyflag:"",symbol:"₡"},SYP:{label:"Syrian pound",currencyflag:"",symbol:"£"},SZL:{label:"Swazi lilangeni",currencyflag:"",symbol:"L"},THB:{label:"Thai baht",currencyflag:"",symbol:"฿"},TJS:{label:"Tajikistani somoni",currencyflag:"",symbol:"SM"},TMT:{label:"Turkmenistan manat",currencyflag:"",symbol:"m"},TND:{label:"Tunisian dinar",currencyflag:"",symbol:"د.ت"},TOP:{label:"Tongan paʻanga",currencyflag:"",symbol:"T$"},TRY:{label:"Turkish lira",currencyflag:"",symbol:"&#8378;"},TTD:{label:"Trinidad and Tobago dollar",currencyflag:"",symbol:"$"},TWD:{label:"New Taiwan dollar",currencyflag:"",symbol:"$"},TZS:{label:"Tanzanian shilling",currencyflag:"",symbol:"Sh"},UAH:{label:"Ukrainian hryvnia",currencyflag:"",symbol:"₴"},UGX:{label:"Ugandan shilling",currencyflag:"",symbol:"Sh"},USD:{label:"United States dollar",currencyflag:"",symbol:"$"},UYU:{label:"Uruguayan peso",currencyflag:"",symbol:"$"},UZS:{label:"Uzbekistani som",currencyflag:"",symbol:"лв"},VEF:{label:"Venezuelan bolívar",currencyflag:"",symbol:"Bs F"},VND:{label:"Vietnamese đồng",currencyflag:"",symbol:"₫"},VUV:{label:"Vanuatu vatu",currencyflag:"",symbol:"Vt"},WST:{label:"Samoan tālā",currencyflag:"",symbol:"T"},XAF:{label:"Central African CFA franc",currencyflag:"XAF",symbol:"Fr"},XCD:{label:"East Caribbean dollar",currencyflag:"XCD",symbol:"$"},XOF:{label:"West African CFA franc",currencyflag:"XOF",symbol:"Fr"},XPF:{label:"CFP franc",currencyflag:"XPF",symbol:"Fr"},YER:{label:"Yemeni rial",currencyflag:"",symbol:"﷼"},ZAR:{label:"South African rand",currencyflag:"ZAR",symbol:"R"},ZMW:{label:"Zambian kwacha",currencyflag:"",symbol:"ZK"},ZWL:{label:"Zimbabwean dollar",currencyflag:"",symbol:"$"}},BFHMonthsList=["January","February","March","April","May","June","July","August","September","October","November","December"],BFHDaysList=["SUN","MON","TUE","WED","THU","FRI","SAT"],BFHDayOfWeekStart=0,BFHFontsList={"Andale Mono":'"Andale Mono", AndaleMono, monospace',Arial:'Arial, "Helvetica Neue", Helvetica, sans-serif',"Arial Black":'"Arial Black", "Arial Bold", Gadget, sans-serif',"Arial Narrow":'"Arial Narrow", Arial, sans-serif',"Arial Rounded MT Bold":'"Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif',"Avant Garde":'"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif',Baskerville:'Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif',"Big Caslon":'"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif',"Bodoni MT":'"Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif',"Book Antiqua":'"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif',"Brush Script MT":'"Brush Script MT", cursive',Calibri:'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',"Calisto MT":'"Calisto MT", "Bookman Old Style", Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter", Georgia, serif',Cambrio:"Cambria, Georgia, serif",Candara:'Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif',"Century Gothic":'"Century Gothic", CenturyGothic, AppleGothic, sans-serif',Consolas:"Consolas, monaco, monospace",Copperplate:'Copperplate, "Copperplate Gothic Light", fantasy',"Courier New":'"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace',Didot:'Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif',"Franklin Gothic Medium":'"Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif',Futura:'Futura, "Trebuchet MS", Arial, sans-serif',Garamond:'Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman", serif',Geneva:"Geneva, Tahoma, Verdana, sans-serif",Georgia:'Georgia, Times, "Times New Roman", serif',"Gill Sans":'"Gill Sans", "Gill Sans MT", Calibri, sans-serif',"Goudy Old Style":'"Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif',Helvetica:'"Helvetica Neue", Helvetica, Arial, sans-serif',"Hoefler Text":'"Hoefler Text", "Baskerville old face", Garamond, "Times New Roman", serif',Impact:'Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans serif',"Lucida Bright":'"Lucida Bright", Georgia, serif',"Lucida Console":'"Lucida Console", "Lucida Sans Typewriter", Monaco, "Bitstream Vera Sans Mono", monospace',"Lucida Sans Typewriter":'"Lucida Sans Typewriter", "Lucida Console", Monaco, "Bitstream Vera Sans Mono", monospace',"Lucida Grande":'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif',Monaco:'Monaco, Consolas, "Lucida Console", monospace',Optima:'Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif',Palatino:'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',Papyrus:"Papyrus, fantasy",Perpetua:'Perpetua, Baskerville, "Big Caslon", "Palatino Linotype", Palatino, "URW Palladio L", "Nimbus Roman No9 L", serif',Rockwell:'Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif',"Rockwell Extra Bold":'"Rockwell Extra Bold", "Rockwell Bold", monospace',"Segoe UI":'"Segoe UI", Frutiger, "Frutiger Linotype',Tahoma:"Tahoma, Verdana, Segoe, sans-serif","Times New Roman":'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif',"Trebuchet MS":'"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif',Verdana:"Verdana, Geneva, sans-serif"},BFHFontSizesList={8:"8px",9:"9px",10:"10px",11:"11px",12:"12px",14:"14px",16:"16px",18:"18px",20:"20px",24:"24px",28:"28px",36:"36px",48:"48px"},BFHGoogleFontsList={kind:"webfonts#webfontList",items:[{kind:"webfonts#webfont",family:"ABeeZee",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Abel",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Abril Fatface",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Aclonica",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Acme",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Actor",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Adamina",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Advent Pro",variants:["100","200","300","regular","500","600","700"],subsets:["latin-ext","latin","greek"]},{kind:"webfonts#webfont",family:"Aguafina Script",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Akronim",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Aladin",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Aldrich",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Alegreya",variants:["regular","italic","700","700italic","900","900italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Alegreya SC",variants:["regular","italic","700","700italic","900","900italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Alex Brush",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Alfa Slab One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Alice",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Alike",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Alike Angular",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Allan",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Allerta",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Allerta Stencil",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Allura",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Almendra",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Almendra Display",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Almendra SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Amarante",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Amaranth",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Amatic SC",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Amethysta",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Anaheim",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Andada",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Andika",variants:["regular"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Angkor",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Annie Use Your Telescope",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Anonymous Pro",variants:["regular","italic","700","700italic"],subsets:["cyrillic","greek-ext","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Antic",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Antic Didone",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Antic Slab",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Anton",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Arapey",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Arbutus",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Arbutus Slab",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Architects Daughter",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Archivo Black",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Archivo Narrow",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Arimo",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Arizonia",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Armata",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Artifika",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Arvo",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Asap",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Asset",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Astloch",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Asul",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Atomic Age",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Aubrey",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Audiowide",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Autour One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Average",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Average Sans",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Averia Gruesa Libre",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Averia Libre",variants:["300","300italic","regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Averia Sans Libre",variants:["300","300italic","regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Averia Serif Libre",variants:["300","300italic","regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bad Script",variants:["regular"],subsets:["cyrillic","latin"]},{kind:"webfonts#webfont",family:"Balthazar",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bangers",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Basic",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Battambang",variants:["regular","700"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Baumans",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bayon",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Belgrano",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Belleza",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"BenchNine",variants:["300","regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bentham",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Berkshire Swash",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bevan",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bigelow Rules",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bigshot One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bilbo",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bilbo Swash Caps",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bitter",variants:["regular","italic","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Black Ops One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bokor",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Bonbon",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Boogaloo",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bowlby One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bowlby One SC",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Brawler",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Bree Serif",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bubblegum Sans",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Bubbler One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Buda",variants:["300"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Buenard",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Butcherman",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Butterfly Kids",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Cabin",variants:["regular","italic","500","500italic","600","600italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cabin Condensed",variants:["regular","500","600","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cabin Sketch",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Caesar Dressing",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cagliostro",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Calligraffitti",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cambo",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Candal",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cantarell",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cantata One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Cantora One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Capriola",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Cardo",variants:["regular","italic","700"],subsets:["greek-ext","latin-ext","latin","greek"]},{kind:"webfonts#webfont",family:"Carme",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Carrois Gothic",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Carrois Gothic SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Carter One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Caudex",variants:["regular","italic","700","700italic"],subsets:["greek-ext","latin-ext","latin","greek"]},{kind:"webfonts#webfont",family:"Cedarville Cursive",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Ceviche One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Changa One",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Chango",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Chau Philomene One",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Chela One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Chelsea Market",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Chenla",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Cherry Cream Soda",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cherry Swash",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Chewy",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Chicle",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Chivo",variants:["regular","italic","900","900italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cinzel",variants:["regular","700","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cinzel Decorative",variants:["regular","700","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Clicker Script",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Coda",variants:["regular","800"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Coda Caption",variants:["800"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Codystar",variants:["300","regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Combo",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Comfortaa",variants:["300","regular","700"],subsets:["cyrillic","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Coming Soon",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Concert One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Condiment",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Content",variants:["regular","700"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Contrail One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Convergence",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cookie",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Copse",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Corben",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Courgette",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Cousine",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Coustard",variants:["regular","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Covered By Your Grace",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Crafty Girls",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Creepster",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Crete Round",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Crimson Text",variants:["regular","italic","600","600italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Croissant One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Crushed",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Cuprum",variants:["regular","italic","700","700italic"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Cutive",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Cutive Mono",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Damion",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Dancing Script",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Dangrek",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Dawning of a New Day",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Days One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Delius",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Delius Swash Caps",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Delius Unicase",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Della Respira",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Devonshire",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Didact Gothic",variants:["regular"],subsets:["cyrillic","greek-ext","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Diplomata",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Diplomata SC",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Doppio One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Dorsa",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Dosis",variants:["200","300","regular","500","600","700","800"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Dr Sugiyama",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Droid Sans",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Droid Sans Mono",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Droid Serif",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Duru Sans",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Dynalight",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"EB Garamond",variants:["regular"],subsets:["cyrillic","latin-ext","latin","vietnamese","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Eagle Lake",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Eater",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Economica",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Electrolize",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Emblema One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Emilys Candy",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Engagement",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Englebert",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Enriqueta",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Erica One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Esteban",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Euphoria Script",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ewert",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Exo",variants:["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Expletus Sans",variants:["regular","italic","500","500italic","600","600italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fanwood Text",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fascinate",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fascinate Inline",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Faster One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fasthand",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Federant",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Federo",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Felipa",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Fenix",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Finger Paint",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fjord One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Flamenco",variants:["300","regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Flavors",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fondamento",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Fontdiner Swanky",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Forum",variants:["regular"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Francois One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Freckle Face",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Fredericka the Great",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fredoka One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Freehand",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Fresca",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Frijole",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Fugaz One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"GFS Didot",variants:["regular"],subsets:["greek"]},{kind:"webfonts#webfont",family:"GFS Neohellenic",variants:["regular","italic","700","700italic"],subsets:["greek"]},{kind:"webfonts#webfont",family:"Gafata",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Galdeano",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Galindo",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Gentium Basic",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Gentium Book Basic",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Geo",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Geostar",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Geostar Fill",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Germania One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Gilda Display",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Give You Glory",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Glass Antiqua",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Glegoo",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Gloria Hallelujah",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Goblin One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Gochi Hand",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Gorditas",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Goudy Bookletter 1911",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Graduate",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Gravitas One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Great Vibes",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Griffy",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Gruppo",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Gudea",variants:["regular","italic","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Habibi",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Hammersmith One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Hanalei",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Hanalei Fill",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Handlee",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Hanuman",variants:["regular","700"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Happy Monkey",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Headland One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Henny Penny",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Herr Von Muellerhoff",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Holtwood One SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Homemade Apple",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Homenaje",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"IM Fell DW Pica",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell DW Pica SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell Double Pica",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell Double Pica SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell English",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell English SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell French Canon",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell French Canon SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell Great Primer",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"IM Fell Great Primer SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Iceberg",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Iceland",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Imprima",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Inconsolata",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Inder",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Indie Flower",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Inika",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Irish Grover",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Istok Web",variants:["regular","italic","700","700italic"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Italiana",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Italianno",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Jacques Francois",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Jacques Francois Shadow",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Jim Nightshade",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Jockey One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Jolly Lodger",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Josefin Sans",variants:["100","100italic","300","300italic","regular","italic","600","600italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Josefin Slab",variants:["100","100italic","300","300italic","regular","italic","600","600italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Joti One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Judson",variants:["regular","italic","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Julee",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Julius Sans One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Junge",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Jura",variants:["300","regular","500","600"],subsets:["cyrillic","greek-ext","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Just Another Hand",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Just Me Again Down Here",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Kameron",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Karla",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Kaushan Script",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Keania One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Kelly Slab",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Kenia",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Khmer",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Kite One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Knewave",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Kotta One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Koulen",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Kranky",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Kreon",variants:["300","regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Kristi",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Krona One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"La Belle Aurore",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Lancelot",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Lato",variants:["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"League Script",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Leckerli One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Ledger",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Lekton",variants:["regular","italic","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Lemon",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Life Savers",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Lilita One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Limelight",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Linden Hill",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Lobster",variants:["regular"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Lobster Two",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Londrina Outline",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Londrina Shadow",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Londrina Sketch",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Londrina Solid",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Lora",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Love Ya Like A Sister",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Loved by the King",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Lovers Quarrel",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Luckiest Guy",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Lusitana",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Lustria",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Macondo",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Macondo Swash Caps",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Magra",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Maiden Orange",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Mako",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Marcellus",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Marcellus SC",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Marck Script",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Margarine",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Marko One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Marmelad",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Marvel",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Mate",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Mate SC",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Maven Pro",variants:["regular","500","700","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"McLaren",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Meddon",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"MedievalSharp",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Medula One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Megrim",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Meie Script",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Merienda",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Merienda One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Merriweather",variants:["300","regular","700","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Metal",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Metal Mania",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Metamorphous",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Metrophobic",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Michroma",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Miltonian",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Miltonian Tattoo",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Miniver",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Miss Fajardose",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Modern Antiqua",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Molengo",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Molle",variants:["italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Monofett",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Monoton",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Monsieur La Doulaise",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Montaga",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Montez",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Montserrat",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Montserrat Alternates",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Montserrat Subrayada",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Moul",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Moulpali",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Mountains of Christmas",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Mouse Memoirs",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Mr Bedfort",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Mr Dafoe",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Mr De Haviland",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Mrs Saint Delafield",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Mrs Sheppards",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Muli",variants:["300","300italic","regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Mystery Quest",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Neucha",variants:["regular"],subsets:["cyrillic","latin"]},{kind:"webfonts#webfont",family:"Neuton",variants:["200","300","regular","italic","700","800"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"News Cycle",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Niconne",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Nixie One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nobile",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nokora",variants:["regular","700"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Norican",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Nosifer",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Nothing You Could Do",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Noticia Text",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin","vietnamese"]},{kind:"webfonts#webfont",family:"Nova Cut",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nova Flat",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nova Mono",variants:["regular"],subsets:["latin","greek"]},{kind:"webfonts#webfont",family:"Nova Oval",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nova Round",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nova Script",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nova Slim",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nova Square",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Numans",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Nunito",variants:["300","regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Odor Mean Chey",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Offside",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Old Standard TT",variants:["regular","italic","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Oldenburg",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Oleo Script",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Oleo Script Swash Caps",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Open Sans",variants:["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],subsets:["cyrillic","greek-ext","latin-ext","latin","vietnamese","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Open Sans Condensed",variants:["300","300italic","700"],subsets:["cyrillic","greek-ext","latin-ext","latin","vietnamese","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Oranienbaum",variants:["regular"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Orbitron",variants:["regular","500","700","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Oregano",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Orienta",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Original Surfer",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Oswald",variants:["300","regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Over the Rainbow",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Overlock",variants:["regular","italic","700","700italic","900","900italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Overlock SC",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ovo",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Oxygen",variants:["300","regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Oxygen Mono",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"PT Mono",variants:["regular"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"PT Sans",variants:["regular","italic","700","700italic"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"PT Sans Caption",variants:["regular","700"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"PT Sans Narrow",variants:["regular","700"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"PT Serif",variants:["regular","italic","700","700italic"],subsets:["cyrillic","latin"]},{kind:"webfonts#webfont",family:"PT Serif Caption",variants:["regular","italic"],subsets:["cyrillic","latin"]},{kind:"webfonts#webfont",family:"Pacifico",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Paprika",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Parisienne",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Passero One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Passion One",variants:["regular","700","900"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Patrick Hand",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Patua One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Paytone One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Peralta",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Permanent Marker",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Petit Formal Script",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Petrona",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Philosopher",variants:["regular","italic","700","700italic"],subsets:["cyrillic","latin"]},{kind:"webfonts#webfont",family:"Piedra",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Pinyon Script",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Pirata One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Plaster",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Play",variants:["regular","700"],subsets:["cyrillic","greek-ext","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Playball",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Playfair Display",variants:["regular","italic","700","700italic","900","900italic"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Playfair Display SC",variants:["regular","italic","700","700italic","900","900italic"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Podkova",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Poiret One",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Poller One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Poly",variants:["regular","italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Pompiere",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Pontano Sans",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Port Lligat Sans",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Port Lligat Slab",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Prata",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Preahvihear",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Press Start 2P",variants:["regular"],subsets:["cyrillic","latin-ext","latin","greek"]},{kind:"webfonts#webfont",family:"Princess Sofia",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Prociono",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Prosto One",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Puritan",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Purple Purse",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Quando",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Quantico",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Quattrocento",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Quattrocento Sans",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Questrial",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Quicksand",variants:["300","regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Quintessential",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Qwigley",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Racing Sans One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Radley",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Raleway",variants:["100","200","300","regular","500","600","700","800","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Raleway Dots",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rambla",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rammetto One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ranchers",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rancho",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Rationale",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Redressed",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Reenie Beanie",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Revalia",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ribeye",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ribeye Marrow",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Righteous",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Risque",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rochester",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Rock Salt",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Rokkitt",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Romanesco",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ropa Sans",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rosario",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Rosarivo",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rouge Script",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Ruda",variants:["regular","700","900"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rufina",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ruge Boogie",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ruluko",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rum Raisin",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ruslan Display",variants:["regular"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Russo One",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Ruthie",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Rye",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sacramento",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sail",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Salsa",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Sanchez",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sancreek",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sansita One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Sarina",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Satisfy",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Scada",variants:["regular","italic","700","700italic"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Schoolbell",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Seaweed Script",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sevillana",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Seymour One",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Shadows Into Light",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Shadows Into Light Two",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Shanti",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Share",variants:["regular","italic","700","700italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Share Tech",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Share Tech Mono",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Shojumaru",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Short Stack",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Siemreap",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Sigmar One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Signika",variants:["300","regular","600","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Signika Negative",variants:["300","regular","600","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Simonetta",variants:["regular","italic","900","900italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sirin Stencil",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Six Caps",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Skranji",variants:["regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Slackey",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Smokum",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Smythe",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Sniglet",variants:["800"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Snippet",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Snowburst One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sofadi One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Sofia",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Sonsie One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Sorts Mill Goudy",variants:["regular","italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Source Code Pro",variants:["200","300","regular","600","700","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Source Sans Pro",variants:["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Special Elite",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Spicy Rice",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Spinnaker",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Spirax",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Squada One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Stalemate",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Stalinist One",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Stardos Stencil",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Stint Ultra Condensed",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Stint Ultra Expanded",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Stoke",variants:["300","regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Strait",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Sue Ellen Francisco",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Sunshiney",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Supermercado One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Suwannaphum",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Swanky and Moo Moo",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Syncopate",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Tangerine",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Taprom",variants:["regular"],subsets:["khmer"]},{kind:"webfonts#webfont",family:"Telex",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Tenor Sans",variants:["regular"],subsets:["cyrillic","latin-ext","latin","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Text Me One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"The Girl Next Door",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Tienne",variants:["regular","700","900"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Tinos",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Titan One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Titillium Web",variants:["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Trade Winds",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Trocchi",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Trochut",variants:["regular","italic","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Trykker",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Tulpen One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Ubuntu",variants:["300","300italic","regular","italic","500","500italic","700","700italic"],subsets:["cyrillic","greek-ext","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Ubuntu Condensed",variants:["regular"],subsets:["cyrillic","greek-ext","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Ubuntu Mono",variants:["regular","italic","700","700italic"],subsets:["cyrillic","greek-ext","latin-ext","latin","greek","cyrillic-ext"]},{kind:"webfonts#webfont",family:"Ultra",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Uncial Antiqua",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Underdog",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Unica One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"UnifrakturCook",variants:["700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"UnifrakturMaguntia",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Unkempt",variants:["regular","700"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Unlock",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Unna",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"VT323",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Vampiro One",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Varela",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Varela Round",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Vast Shadow",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Vibur",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Vidaloka",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Viga",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Voces",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Volkhov",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Vollkorn",variants:["regular","italic","700","700italic"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Voltaire",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Waiting for the Sunrise",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Wallpoet",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Walter Turncoat",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Warnes",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Wellfleet",variants:["regular"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Wire One",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Yanone Kaffeesatz",variants:["200","300","regular","700"],subsets:["latin-ext","latin"]},{kind:"webfonts#webfont",family:"Yellowtail",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Yeseva One",variants:["regular"],subsets:["cyrillic","latin-ext","latin"]},{kind:"webfonts#webfont",family:"Yesteryear",variants:["regular"],subsets:["latin"]},{kind:"webfonts#webfont",family:"Zeyada",variants:["regular"],subsets:["latin"]}]},BFHLanguagesList={om:"Afaan Oromoo",aa:"Afaraf",af:"Afrikaans",ak:"Akan",an:"aragonés",ig:"Asụsụ Igbo",gn:"Avañe'ẽ",ae:"avesta",ay:"aymar aru",az:"azərbaycan dili",id:"Bahasa Indonesia",ms:"bahasa Melayu",bm:"bamanankan",jv:"basa Jawa",su:"Basa Sunda",bi:"Bislama",bs:"bosanski jezik",br:"brezhoneg",ca:"català",ch:"Chamoru",ny:"chiCheŵa",sn:"chiShona",co:"corsu",cy:"Cymraeg",da:"dansk",se:"Davvisámegiella",de:"Deutsch",nv:"Diné bizaad",et:"eesti",na:"Ekakairũ Naoero",en:"English",es:"español",eo:"Esperanto",eu:"euskara",ee:"Eʋegbe",to:"faka Tonga",mg:"fiteny malagasy",fr:"français",fy:"Frysk",ff:"Fulfulde",fo:"føroyskt",ga:"Gaeilge",gv:"Gaelg",sm:"gagana fa'a Samoa",gl:"galego",sq:"gjuha shqipe",gd:"Gàidhlig",ki:"Gĩkũyũ",ha:"Hausa",ho:"Hiri Motu",hr:"hrvatski jezik",io:"Ido",rw:"Ikinyarwanda",rn:"Ikirundi",ia:"Interlingua",nd:"isiNdebele",nr:"isiNdebele",xh:"isiXhosa",zu:"isiZulu",it:"italiano",ik:"Iñupiaq",pl:"polski",mh:"Kajin M̧ajeļ",kl:"kalaallisut",kr:"Kanuri",kw:"Kernewek",kg:"KiKongo",sw:"Kiswahili",ht:"Kreyòl ayisyen",kj:"Kuanyama",ku:"Kurdî",la:"latine",lv:"latviešu valoda",lt:"lietuvių kalba",ro:"limba română",li:"Limburgs",ln:"Lingála",lg:"Luganda",lb:"Lëtzebuergesch",hu:"magyar",mt:"Malti",nl:"Nederlands",no:"Norsk",nb:"Norsk bokmål",nn:"Norsk nynorsk",uz:"O'zbek",oc:"occitan",ie:"Interlingue",hz:"Otjiherero",ng:"Owambo",pt:"português",ty:"Reo Tahiti",rm:"rumantsch grischun",qu:"Runa Simi",sc:"sardu",za:"Saɯ cueŋƅ",st:"Sesotho",tn:"Setswana",ss:"SiSwati",sl:"slovenski jezik",sk:"slovenčina",so:"Soomaaliga",fi:"suomi",sv:"Svenska",mi:"te reo Māori",vi:"Tiếng Việt",lu:"Tshiluba",ve:"Tshivenḓa",tw:"Twi",tk:"Türkmen",tr:"Türkçe",ug:"Uyƣurqə",vo:"Volapük",fj:"vosa Vakaviti",wa:"walon",tl:"Wikang Tagalog",wo:"Wollof",ts:"Xitsonga",yo:"Yorùbá",sg:"yângâ tî sängö",is:"Íslenska",cs:"čeština",el:"ελληνικά",av:"авар мацӀ",ab:"аҧсуа бызшәа",ba:"башҡорт теле",be:"беларуская мова",bg:"български език",os:"ирон æвзаг",kv:"коми кыв",ky:"Кыргызча",mk:"македонски јазик",mn:"монгол",ce:"нохчийн мотт",ru:"русский язык",sr:"српски језик",tt:"татар теле",tg:"тоҷикӣ",uk:"українська мова",cv:"чӑваш чӗлхи",cu:"ѩзыкъ словѣньскъ",kk:"қазақ тілі",hy:"Հայերեն",yi:"ייִדיש",he:"עברית",ur:"اردو",ar:"العربية",fa:"فارسی",ps:"پښتو",ks:"कश्मीरी",ne:"नेपाली",pi:"पाऴि",bh:"भोजपुरी",mr:"मराठी",sa:"संस्कृतम्",sd:"सिन्धी",hi:"हिन्दी",as:"অসমীয়া",bn:"বাংলা",pa:"ਪੰਜਾਬੀ",gu:"ગુજરાતી",or:"ଓଡ଼ିଆ",ta:"தமிழ்",te:"తెలుగు",kn:"ಕನ್ನಡ",ml:"മലയാളം",si:"සිංහල",th:"ไทย",lo:"ພາສາລາວ",bo:"བོད་ཡིག",dz:"རྫོང་ཁ",my:"ဗမာစာ",ka:"ქართული",ti:"ትግርኛ",am:"አማርኛ",iu:"ᐃᓄᒃᑎᑐᑦ",oj:"ᐊᓂᔑᓈᐯᒧᐎᓐ",cr:"ᓀᐦᐃᔭᐍᐏᐣ",km:"ខ្មែរ",zh:"中文 (Zhōngwén)",ja:"日本語 (にほんご)",ii:"ꆈꌠ꒿ Nuosuhxop",ko:"한국어 (韓國語)"},BFHPhoneFormatList={AF:"+93 0dd ddd dddd",AL:"+355 0dd ddd ddd",DZ:"+213 0ddd dd dd dd",AS:"+1 (ddd) ddd-dddd",AD:"+376 ddddddddd",AO:"+244 ddd ddd ddd",AI:"+1 (ddd) ddd-dddd",AQ:"+672 ddddddddd",AG:"+1 (ddd) ddd-dddd",AR:"+54 ddddddddd",AM:"+374 0dd dddddd",AW:"+297 ddd dddd",AU:"+61 ddd ddd ddd",AT:"+43 0dddd ddddddddd",AZ:"+994 ddddddddd",BH:"+973 ddddddddd",BD:"+880 ddddddddd",BB:"+1 ddddddddd",BY:"+375 ddddddddd",BE:"+32 ddddddddd",BZ:"+501 ddddddddd",BJ:"+229 ddddddddd",BM:"+1 (ddd) ddd-dddd",BT:"+975 ddddddddd",BO:"+591 ddddddddd",BA:"+387 ddddddddd",BW:"+267 ddddddddd",BV:"+0 ddddddddd",BR:"+55 ddddddddd",IO:"+0 ddddddddd",VG:"+1 (ddd) ddd-dddd",BN:"+673 ddddddddd",BG:"+359 ddddddddd",BF:"+226 ddddddddd",BI:"+257 ddddddddd",CI:"+225 ddddddddd",KH:"+855 ddddddddd",CM:"+237 ddddddddd",CA:"+1 (ddd) ddd-dddd",CV:"+238 ddddddddd",KY:"+1 (ddd) ddd-dddd",CF:"+236 ddddddddd",TD:"+235 ddddddddd",CL:"+56 ddddddddd",CN:"+86 ddddddddd",CX:"+61 ddddddddd",CC:"+61 ddddddddd",CO:"+57 ddddddddd",KM:"+269 ddddddddd",CG:"+242 ddddddddd",CK:"+682 ddddddddd",CR:"+506 ddddddddd",HR:"+385 ddddddddd",CU:"+53 ddddddddd",CY:"+357 ddddddddd",CZ:"+420 ddddddddd",CD:"+243 ddddddddd",DK:"+45 ddddddddd",DJ:"+253 ddddddddd",DM:"+1 (ddd) ddd-dddd",DO:"+1 (ddd) ddd-dddd",TL:"+670 ddddddddd",EC:"+593 ddddddddd",EG:"+20 ddddddddd",SV:"+503 ddddddddd",GQ:"+240 ddddddddd",ER:"+291 ddddddddd",EE:"+372 ddddddddd",ET:"+251 ddddddddd",FO:"+298 ddddddddd",FK:"+500 ddddddddd",FJ:"+679 ddddddddd",FI:"+358 ddddddddd",MK:"+389 ddddddddd",FR:"+33 d dd dd dd dd",GF:"+594 ddddddddd",PF:"+689 ddddddddd",TF:"+262 ddddddddd",GA:"+241 ddddddddd",GE:"+995 ddddddddd",DE:"+49 ddddddddd",GH:"+233 ddddddddd",GI:"+350 ddddddddd",GR:"+30 ddddddddd",GL:"+299 ddddddddd",GD:"+1 (ddd) ddd-dddd",GP:"+590 ddddddddd",GU:"+1 (ddd) ddd-dddd",GT:"+502 ddddddddd",GN:"+224 ddddddddd",GW:"+245 ddddddddd",GY:"+592 ddddddddd",HT:"+509 ddddddddd",HM:"+0 ddddddddd",HN:"+504 ddddddddd",HK:"+852 ddddddddd",HU:"+36 ddddddddd",IS:"+354 ddddddddd",IN:"+91 ddddddddd",ID:"+62 ddddddddd",IR:"+98 ddddddddd",IQ:"+964 ddddddddd",IE:"+353 ddddddddd",IL:"+972 ddddddddd",IT:"+39 ddddddddd",JM:"+1 (ddd) ddd-dddd",JP:"+81 ddddddddd",JO:"+962 ddddddddd",KZ:"+7 ddddddddd",KE:"+254 ddddddddd",KI:"+686 ddddddddd",KW:"+965 ddddddddd",KG:"+996 ddddddddd",LA:"+856 ddddddddd",LV:"+371 ddddddddd",LB:"+961 ddddddddd",LS:"+266 ddddddddd",LR:"+231 ddddddddd",LY:"+218 ddddddddd",LI:"+423 ddddddddd",LT:"+370 ddddddddd",LU:"+352 ddddddddd",MO:"+853 ddddddddd",MG:"+261 ddddddddd",MW:"+265 ddddddddd",MY:"+60 ddddddddd",MV:"+960 ddddddddd",ML:"+223 ddddddddd",MT:"+356 ddddddddd",MH:"+692 ddddddddd",MQ:"+596 ddddddddd",MR:"+222 ddddddddd",MU:"+230 ddddddddd",YT:"+262 ddddddddd",MX:"+52 ddddddddd",FM:"+691 ddddddddd",MD:"+373 ddddddddd",MC:"+377 ddddddddd",MN:"+976 ddddddddd",MS:"+1 (ddd) ddd-dddd",MA:"+212 ddddddddd",MZ:"+258 ddddddddd",MM:"+95 ddddddddd",NA:"+264 ddddddddd",NR:"+674 ddddddddd",NP:"+977 ddddddddd",NL:"+31 ddddddddd",AN:"+599 ddddddddd",NC:"+687 ddddddddd",NZ:"+64 ddddddddd",NI:"+505 ddddddddd",NE:"+227 ddddddddd",NG:"+234 ddddddddd",NU:"+683 ddddddddd",NF:"+672 ddddddddd",KP:"+850 ddddddddd",MP:"+1 (ddd) ddd-dddd",NO:"+47 ddddddddd",OM:"+968 ddddddddd",PK:"+92 ddddddddd",PW:"+680 ddddddddd",PA:"+507 ddddddddd",PG:"+675 ddddddddd",PY:"+595 ddddddddd",PE:"+51 ddddddddd",PH:"+63 ddddddddd",PN:"+870 ddddddddd",PL:"+48 ddddddddd",PT:"+351 ddddddddd",PR:"+1 (ddd) ddd-dddd",QA:"+974 ddddddddd",RE:"+262 ddddddddd",RO:"+40 ddddddddd",RU:"+7 ddddddddd",RW:"+250 ddddddddd",ST:"+239 ddddddddd",SH:"+290 ddddddddd",KN:"+1 (ddd) ddd-dddd",LC:"+1 (ddd) ddd-dddd",PM:"+508 ddddddddd",VC:"+1 (ddd) ddd-dddd",WS:"+685 ddddddddd",SM:"+378 ddddddddd",SA:"+966 ddddddddd",SN:"+221 ddddddddd",SC:"+248 ddddddddd",SL:"+232 ddddddddd",SG:"+65 ddddddddd",SK:"+421 ddddddddd",SI:"+386 ddddddddd",SB:"+677 ddddddddd",SO:"+252 ddddddddd",ZA:"+27 ddddddddd",GS:"+0 ddddddddd",KR:"+82 ddddddddd",ES:"+34 ddddddddd",LK:"+94 ddddddddd",SD:"+249 ddddddddd",SR:"+597 ddddddddd",SJ:"+0 ddddddddd",SZ:"+268 ddddddddd",SE:"+46 ddddddddd",CH:"+41 ddddddddd",SY:"+963 ddddddddd",TW:"+886 ddddddddd",TJ:"+992 ddddddddd",TZ:"+255 ddddddddd",TH:"+66 ddddddddd",BS:"+1 (ddd) ddd-dddd",GM:"+220 ddddddddd",TG:"+228 ddddddddd",TK:"+690 ddddddddd",TO:"+676 ddddddddd",TT:"+1 (ddd) ddd-dddd",TN:"+216 ddddddddd",TR:"+90 ddddddddd",TM:"+993 ddddddddd",TC:"+1 (ddd) ddd-dddd",TV:"+688 ddddddddd",VI:"+1 (ddd) ddd-dddd",UG:"+256 ddddddddd",UA:"+380 ddddddddd",AE:"+971 ddddddddd",GB:"+44 (ddd) dddd dddd",US:"+1 (ddd) ddd-dddd",UM:"+0 ddddddddd",UY:"+598 ddddddddd",UZ:"+998 ddddddddd",VU:"+678 ddddddddd",VA:"+39 ddddddddd",VE:"+58 ddddddddd",VN:"+84 ddddddddd",WF:"+681 ddddddddd",EH:"+0 ddddddddd",YE:"+967 ddddddddd",YU:"+0 ddddddddd",ZM:"+260 ddddddddd",ZW:"+263 ddddddddd"},BFHStatesList={AF:{1:{code:"BAL",name:"Balkh"},2:{code:"BAM",name:"Bamian"},3:{code:"BDG",name:"Badghis"},4:{code:"BDS",name:"Badakhshan"},5:{code:"BGL",name:"Baghlan"},6:{code:"FRA",name:"Farah"},7:{code:"FYB",name:"Faryab"},8:{code:"GHA",name:"Ghazni"},9:{code:"GHO",name:"Ghowr"},10:{code:"HEL",name:"Helmand"},11:{code:"HER",name:"Herat"},12:{code:"JOW",name:"Jowzjan"},13:{code:"KAB",name:"Kabul"},14:{code:"KAN",name:"Kandahar"},15:{code:"KAP",name:"Kapisa"},16:{code:"KDZ",name:"Kondoz"},17:{code:"KHO",name:"Khost"},18:{code:"KNR",name:"Konar"},19:{code:"LAG",name:"Laghman"},20:{code:"LOW",name:"Lowgar"},21:{code:"NAN",name:"Nangrahar"},22:{code:"NIM",name:"Nimruz"},23:{code:"NUR",name:"Nurestan"},24:{code:"ORU",name:"Oruzgan"},25:{code:"PAR",name:"Parwan"},26:{code:"PIA",name:"Paktia"},27:{code:"PKA",name:"Paktika"},28:{code:"SAM",name:"Samangan"},29:{code:"SAR",name:"Sar-e Pol"},30:{code:"TAK",name:"Takhar"},31:{code:"WAR",name:"Wardak"},32:{code:"ZAB",name:"Zabol"}},AL:{1:{code:"BR",name:"Berat"},2:{code:"BU",name:"Bulqize"},3:{code:"DI",name:"Diber"},4:{code:"DL",name:"Delvine"},5:{code:"DR",name:"Durres"},6:{code:"DV",name:"Devoll"},7:{code:"EL",name:"Elbasan"},8:{code:"ER",name:"Kolonje"},9:{code:"FR",name:"Fier"},10:{code:"GJ",name:"Gjirokaster"},11:{code:"GR",name:"Gramsh"},12:{code:"HA",name:"Has"},13:{code:"KA",name:"Kavaje"},14:{code:"KB",name:"Kurbin"},15:{code:"KC",name:"Kucove"},16:{code:"KO",name:"Korce"},17:{code:"KR",name:"Kruje"},18:{code:"KU",name:"Kukes"},19:{code:"LB",name:"Librazhd"},20:{code:"LE",name:"Lezhe"},21:{code:"LU",name:"Lushnje"},22:{code:"MK",name:"Mallakaster"},23:{code:"MM",name:"Malesi e Madhe"},24:{code:"MR",name:"Mirdite"},25:{code:"MT",name:"Mat"},26:{code:"PG",name:"Pogradec"},27:{code:"PQ",name:"Peqin"},28:{code:"PR",name:"Permet"},29:{code:"PU",name:"Puke"},30:{code:"SH",name:"Shkoder"},31:{code:"SK",name:"Skrapar"},32:{code:"SR",name:"Sarande"},33:{code:"TE",name:"Tepelene"},34:{code:"TP",name:"Tropoje"},35:{code:"TR",name:"Tirane"},36:{code:"VL",name:"Vlore"}},DZ:{1:{code:"ADE",name:"Ain Defla"},2:{code:"ADR",name:"Adrar"},3:{code:"ALG",name:"Alger"},4:{code:"ANN",name:"Annaba"},5:{code:"ATE",name:"Ain Temouchent"},6:{code:"BAT",name:"Batna"},7:{code:"BBA",name:"Bordj Bou Arreridj"},8:{code:"BEC",name:"Bechar"},9:{code:"BEJ",name:"Bejaia"},10:{code:"BIS",name:"Biskra"},11:{code:"BLI",name:"Blida"},12:{code:"BMD",name:"Boumerdes"},13:{code:"BOA",name:"Bouira"},14:{code:"CHL",name:"Chlef"},15:{code:"CON",name:"Constantine"},16:{code:"DJE",name:"Djelfa"},17:{code:"EBA",name:"El Bayadh"},18:{code:"EOU",name:"El Oued"},19:{code:"ETA",name:"El Tarf"},20:{code:"GHA",name:"Ghardaia"},21:{code:"GUE",name:"Guelma"},22:{code:"ILL",name:"Illizi"},23:{code:"JIJ",name:"Jijel"},24:{code:"KHE",name:"Khenchela"},25:{code:"LAG",name:"Laghouat"},26:{code:"MED",name:"Medea"},27:{code:"MIL",name:"Mila"},28:{code:"MOS",name:"Mostaganem"},29:{code:"MSI",name:"M'Sila"},30:{code:"MUA",name:"Muaskar"},31:{code:"NAA",name:"Naama"},32:{code:"OEB",name:"Oum el-Bouaghi"},33:{code:"ORA",name:"Oran"},34:{code:"OUA",name:"Ouargla"},35:{code:"REL",name:"Relizane"},36:{code:"SAH",name:"Souk Ahras"},37:{code:"SAI",name:"Saida"},38:{code:"SBA",name:"Sidi Bel Abbes"},39:{code:"SET",name:"Setif"},40:{code:"SKI",name:"Skikda"},41:{code:"TAM",name:"Tamanghasset"},42:{code:"TEB",name:"Tebessa"},43:{code:"TIA",name:"Tiaret"},44:{code:"TIN",name:"Tindouf"},45:{code:"TIP",name:"Tipaza"},46:{code:"TIS",name:"Tissemsilt"},47:{code:"TLE",name:"Tlemcen"},48:{code:"TOU",name:"Tizi Ouzou"}},AS:{1:{code:"E",name:"Eastern"},2:{code:"M",name:"Manu'a"},3:{code:"R",name:"Rose Island"},4:{code:"S",name:"Swains Island"},5:{code:"W",name:"Western"}},AD:{1:{code:"ALV",name:"Andorra la Vella"},2:{code:"CAN",name:"Canillo"},3:{code:"ENC",name:"Encamp"},4:{code:"ESE",name:"Escaldes-Engordany"},5:{code:"LMA",name:"La Massana"},6:{code:"ORD",name:"Ordino"},7:{code:"SJL",name:"Sant Julià de Lòria"}},AO:{1:{code:"BGO",name:"Bengo"},2:{code:"BGU",name:"Benguela"},3:{code:"BIE",name:"Bie"},4:{code:"CAB",name:"Cabinda"},5:{code:"CCU",name:"Cuando-Cubango"},6:{code:"CNO",name:"Cuanza Norte"},7:{code:"CUS",name:"Cuanza Sul"},8:{code:"CNN",name:"Cunene"},9:{code:"HUA",name:"Huambo"},10:{code:"HUI",name:"Huila"},11:{code:"LUA",name:"Luanda"},12:{code:"LNO",name:"Lunda Norte"},13:{code:"LSU",name:"Lunda Sul"},14:{code:"MAL",name:"Malange"},15:{code:"MOX",name:"Moxico"},16:{code:"NAM",name:"Namibe"},17:{code:"UIG",name:"Uige"},18:{code:"ZAI",name:"Zaire"}},AI:{1:{code:"ANG",name:"Anguillita"},2:{code:"ANG",name:"Anguila"},3:{code:"DOG",name:"Dog"},4:{code:"LIT",name:"Little Scrub"},5:{code:"PRI",name:"Prickly Pear"},6:{code:"SAN",name:"Sandy"},7:{code:"SCR",name:"Scrub"},8:{code:"SEA",name:"Seal"},9:{code:"SOM",name:"Sombrero"}},AQ:{1:{code:"ASG",name:"Saint George"},2:{code:"ASH",name:"Saint Philip"},3:{code:"ASJ",name:"Saint John"},4:{code:"ASL",name:"Saint Paul"},5:{code:"ASM",name:"Saint Mary"},6:{code:"ASR",name:"Saint Peter"},7:{code:"BAR",name:"Barbuda"},8:{code:"RED",name:"Redonda"}},AR:{1:{code:"AN",name:"Antartida e Islas del Atlantico"},2:{code:"BA",name:"Buenos Aires"},3:{code:"CA",name:"Catamarca"},4:{code:"CH",name:"Chaco"},5:{code:"CU",name:"Chubut"},6:{code:"CO",name:"Cordoba"},7:{code:"CR",name:"Corrientes"},8:{code:"CF",name:"Capital Federal"},9:{code:"ER",name:"Entre Rios"},10:{code:"FO",name:"Formosa"},11:{code:"JU",name:"Jujuy"},12:{code:"LP",name:"La Pampa"},13:{code:"LR",name:"La Rioja"},14:{code:"ME",name:"Mendoza"},15:{code:"MI",name:"Misiones"},16:{code:"NE",name:"Neuquen"},17:{code:"RN",name:"Rio Negro"},18:{code:"SA",name:"Salta"},19:{code:"SJ",name:"San Juan"},20:{code:"SL",name:"San Luis"},21:{code:"SC",name:"Santa Cruz"},22:{code:"SF",name:"Santa Fe"},23:{code:"SD",name:"Santiago del Estero"},24:{code:"TF",name:"Tierra del Fuego"},25:{code:"TU",name:"Tucuman"}},AM:{1:{code:"AGT",name:"Aragatsotn"},2:{code:"ARR",name:"Ararat"},3:{code:"ARM",name:"Armavir"},4:{code:"GEG",name:"Geghark 'unik'"},5:{code:"KOT",name:"Kotayk'"},6:{code:"LOR",name:"Lorri"},7:{code:"SHI",name:"Shirak"},8:{code:"SYU",name:"Syunik'"},9:{code:"TAV",name:"Tavush"},10:{code:"VAY",name:"Vayots' Dzor"},11:{code:"YER",name:"Yerevan"}},AW:{1:{code:"ARU",name:"Aruba"},2:{code:"DRU",name:"Druif Beach"},3:{code:"MAN",name:"Manchebo Beach"},4:{code:"NOO",name:"Noord"},5:{code:"ORA",name:"Oranjestad"},6:{code:"PAL",name:"Palm Beach"},7:{code:"ROO",name:"Rooi Thomas"},8:{code:"SIN",name:"Sint Nicolaas"},9:{code:"SIN",name:"Sint Nicolas"},10:{code:"WAY",name:"Wayaca"}},AU:{1:{code:"ACT",name:"Australian Capital Territory"},2:{code:"NSW",name:"New South Wales"},3:{code:"NT",name:"Northern Territory"},4:{code:"QLD",name:"Queensland"},5:{code:"SA",name:"South Australia"},6:{code:"TAS",name:"Tasmania"},7:{code:"VIC",name:"Victoria"},8:{code:"WA",name:"Western Australia"}},AT:{1:{code:"BUR",name:"Burgenland"},2:{code:"KAR",name:"Krnten"},3:{code:"NOS",name:"Niederöesterreich"},4:{code:"OOS",name:"Oberöesterreich"},5:{code:"SAL",name:"Salzburg"},6:{code:"STE",name:"Steiermark"},7:{code:"TIR",name:"Tirol"},8:{code:"VOR",name:"Vorarlberg"},9:{code:"WIE",name:"Wien"}},AZ:{1:{code:"AB",name:"Ali Bayramli"},2:{code:"ABS",name:"Abseron"},3:{code:"AGC",name:"AgcabAdi"},4:{code:"AGM",name:"Agdam"},5:{code:"AGS",name:"Agdas"},6:{code:"AGA",name:"Agstafa"},7:{code:"AGU",name:"Agsu"},8:{code:"AST",name:"Astara"},9:{code:"BA",name:"Baki"},10:{code:"BAB",name:"BabAk"},11:{code:"BAL",name:"BalakAn"},12:{code:"BAR",name:"BArdA"},13:{code:"BEY",name:"Beylaqan"},14:{code:"BIL",name:"Bilasuvar"},15:{code:"CAB",name:"Cabrayil"},16:{code:"CAL",name:"Calilabab"},17:{code:"CUL",name:"Culfa"},18:{code:"DAS",name:"Daskasan"},19:{code:"DAV",name:"Davaci"},20:{code:"FUZ",name:"Fuzuli"},21:{code:"GA",name:"Ganca"},22:{code:"GAD",name:"Gadabay"},23:{code:"GOR",name:"Goranboy"},24:{code:"GOY",name:"Goycay"},25:{code:"HAC",name:"Haciqabul"},26:{code:"IMI",name:"Imisli"},27:{code:"ISM",name:"Ismayilli"},28:{code:"KAL",name:"Kalbacar"},29:{code:"KUR",name:"Kurdamir"},30:{code:"LA",name:"Lankaran"},31:{code:"LAC",name:"Lacin"},32:{code:"LAN",name:"Lankaran"},33:{code:"LER",name:"Lerik"},34:{code:"MAS",name:"Masalli"},35:{code:"MI",name:"Mingacevir"},36:{code:"NA",name:"Naftalan"},37:{code:"NX",name:"Naxcivan"},38:{code:"NEF",name:"Neftcala"},39:{code:"OGU",name:"Oguz"},40:{code:"ORD",name:"Ordubad"},41:{code:"QAB",name:"Qabala"},42:{code:"QAX",name:"Qax"},43:{code:"QAZ",name:"Qazax"},44:{code:"QOB",name:"Qobustan"},45:{code:"QBA",name:"Quba"},46:{code:"QBI",name:"Qubadli"},47:{code:"QUS",name:"Qusar"},48:{code:"SA",name:"Saki"},49:{code:"SAT",name:"Saatli"},50:{code:"SAB",name:"Sabirabad"},51:{code:"SAD",name:"Sadarak"},52:{code:"SAH",name:"Sahbuz"},53:{code:"SAK",name:"Saki"},54:{code:"SAL",name:"Salyan"},55:{code:"SM",name:"Sumqayit"},56:{code:"SMI",name:"Samaxi"},57:{code:"SKR",name:"Samkir"},58:{code:"SMX",name:"Samux"},59:{code:"SAR",name:"Sarur"},60:{code:"SIY",name:"Siyazan"},61:{code:"SS",name:"Susa"},62:{code:"SUS",name:"Susa"},63:{code:"TAR",name:"Tartar"},64:{code:"TOV",name:"Tovuz"},65:{code:"UCA",name:"Ucar"},66:{code:"XA",name:"Xankandi"},67:{code:"XAC",name:"Xacmaz"},68:{code:"XAN",name:"Xanlar"},69:{code:"XIZ",name:"Xizi"},70:{code:"XCI",name:"Xocali"},71:{code:"XVD",name:"Xocavand"},72:{code:"YAR",name:"Yardimli"},73:{code:"YEV",name:"Yevlax"},74:{code:"ZAN",name:"Zangilan"},75:{code:"ZAQ",name:"Zaqatala"},76:{code:"ZAR",name:"Zardab"}},BS:{1:{code:"ACK",name:"Acklins"},2:{code:"BER",name:"Berry Islands"},3:{code:"BIM",name:"Bimini"},4:{code:"BLK",name:"Black Point"},5:{code:"CAT",name:"Cat Island"},6:{code:"CAB",name:"Central Abaco"},7:{code:"CAN",name:"Central Andros"},8:{code:"CEL",name:"Central Eleuthera"},9:{code:"FRE",name:"City of Freeport"},10:{code:"CRO",name:"Crooked Island"},11:{code:"EGB",name:"East Grand Bahama"},12:{code:"EXU",name:"Exuma"},13:{code:"GRD",name:"Grand Cay"},14:{code:"HAR",name:"Harbour Island"},15:{code:"HOP",name:"Hope Town"},16:{code:"INA",name:"Inagua"},17:{code:"LNG",name:"Long Island"},18:{code:"MAN",name:"Mangrove Cay"},19:{code:"MAY",name:"Mayaguana"},20:{code:"MOO",name:"Moore's Island"},21:{code:"NAB",name:"North Abaco"},22:{code:"NAN",name:"North Andros"},23:{code:"NEL",name:"North Eleuthera"},24:{code:"RAG",name:"Ragged Island"},25:{code:"RUM",name:"Rum Cay"},26:{code:"SAL",name:"San Salvador"},27:{code:"SAB",name:"South Abaco"},28:{code:"SAN",name:"South Andros"},29:{code:"SEL",name:"South Eleuthera"},30:{code:"SWE",name:"Spanish Wells"},31:{code:"WGB",name:"West Grand Bahama"}},BH:{1:{code:"CAP",name:"Capital"},2:{code:"CEN",name:"Central"},3:{code:"MUH",name:"Muharraq"},4:{code:"NOR",name:"Northern"},5:{code:"SOU",name:"Southern"}},BD:{1:{code:"BAR",name:"Barisal"},2:{code:"CHI",name:"Chittagong"},3:{code:"DHA",name:"Dhaka"},4:{code:"KHU",name:"Khulna"},5:{code:"RAJ",name:"Rajshahi"},6:{code:"SYL",name:"Sylhet"}},BB:{1:{code:"CC",name:"Christ Church"},2:{code:"AND",name:"Saint Andrew"},3:{code:"GEO",name:"Saint George"},4:{code:"JAM",name:"Saint James"},5:{code:"JOH",name:"Saint John"},6:{code:"JOS",name:"Saint Joseph"},7:{code:"LUC",name:"Saint Lucy"},8:{code:"MIC",name:"Saint Michael"},9:{code:"PET",name:"Saint Peter"},10:{code:"PHI",name:"Saint Philip"},11:{code:"THO",name:"Saint Thomas"}},BY:{1:{code:"BR",name:"Brestskaya (Brest)"},2:{code:"HO",name:"Homyel'skaya (Homyel')"},3:{code:"HM",name:"Horad Minsk"},4:{code:"HR",name:"Hrodzyenskaya (Hrodna)"},5:{code:"MA",name:"Mahilyowskaya (Mahilyow)"},6:{code:"MI",name:"Minskaya"},7:{code:"VI",name:"Vitsyebskaya (Vitsyebsk)"}},BE:{1:{code:"VAN",name:"Antwerpen"},2:{code:"WBR",name:"Brabant Wallon"},3:{code:"WHT",name:"Hainaut"},4:{code:"WLG",name:"Liege"},5:{code:"VLI",name:"Limburg"},6:{code:"WLX",name:"Luxembourg"},7:{code:"WNA",name:"Namur"},8:{code:"VOV",name:"Oost-Vlaanderen"},9:{code:"VBR",name:"Vlaams Brabant"},10:{code:"VWV",name:"West-Vlaanderen"}},BZ:{1:{code:"BZ",name:"Belize"},2:{code:"CY",name:"Cayo"},3:{code:"CR",name:"Corozal"},4:{code:"OW",name:"Orange Walk"},5:{code:"SC",name:"Stann Creek"},6:{code:"TO",name:"Toledo"}},BJ:{1:{code:"AL",name:"Alibori"},2:{code:"AK",name:"Atakora"},3:{code:"AQ",name:"Atlantique"},4:{code:"BO",name:"Borgou"},5:{code:"CO",name:"Collines"},6:{code:"DO",name:"Donga"},7:{code:"KO",name:"Kouffo"},8:{code:"LI",name:"Littoral"},9:{code:"MO",name:"Mono"},10:{code:"OU",name:"Oueme"},11:{code:"PL",name:"Plateau"},12:{code:"ZO",name:"Zou"}},BM:{1:{code:"DS",name:"Devonshire"},2:{code:"HC",name:"Hamilton City"},3:{code:"HA",name:"Hamilton"},4:{code:"PG",name:"Paget"},5:{code:"PB",name:"Pembroke"},6:{code:"GC",name:"Saint George City"},7:{code:"SG",name:"Saint George's"},8:{code:"SA",name:"Sandys"},9:{code:"SM",name:"Smith's"},10:{code:"SH",name:"Southampton"},11:{code:"WA",name:"Warwick"}},BT:{1:{code:"BUM",name:"Bumthang"},2:{code:"CHU",name:"Chukha"},3:{code:"DAG",name:"Dagana"},4:{code:"GAS",name:"Gasa"},5:{code:"HAA",name:"Haa"},6:{code:"LHU",name:"Lhuntse"},7:{code:"MON",name:"Mongar"},8:{code:"PAR",name:"Paro"},9:{code:"PEM",name:"Pemagatshel"},10:{code:"PUN",name:"Punakha"},11:{code:"SJO",name:"Samdrup Jongkhar"},12:{code:"SAT",name:"Samtse"},13:{code:"SAR",name:"Sarpang"},14:{code:"THI",name:"Thimphu"},15:{code:"TRG",name:"Trashigang"},16:{code:"TRY",name:"Trashiyangste"},17:{code:"TRO",name:"Trongsa"},18:{code:"TSI",name:"Tsirang"},19:{code:"WPH",name:"Wangdue Phodrang"},20:{code:"ZHE",name:"Zhemgang"}},BO:{1:{code:"BEN",name:"Beni"},2:{code:"CHU",name:"Chuquisaca"},3:{code:"COC",name:"Cochabamba"},4:{code:"LPZ",name:"La Paz"},5:{code:"ORU",name:"Oruro"},6:{code:"PAN",name:"Pando"},7:{code:"POT",name:"Potosi"},8:{code:"SCZ",name:"Santa Cruz"},9:{code:"TAR",name:"Tarija"}},BA:{1:{code:"BRO",name:"Brcko district"},2:{code:"FBP",name:"Bosanskopodrinjski Kanton"},3:{code:"FHN",name:"Hercegovacko-neretvanski Kanton"},4:{code:"FPO",name:"Posavski Kanton"},5:{code:"FSA",name:"Kanton Sarajevo"},6:{code:"FSB",name:"Srednjebosanski Kanton"},7:{code:"FTU",name:"Tuzlanski Kanton"},8:{code:"FUS",name:"Unsko-Sanski Kanton"},9:{code:"FZA",name:"Zapadnobosanska"},10:{code:"FZE",name:"Zenicko-Dobojski Kanton"},11:{code:"FZH",name:"Zapadnohercegovacka Zupanija"},12:{code:"SBI",name:"Bijeljina"},13:{code:"SBL",name:"Banja Luka"},14:{code:"SDO",name:"Doboj"},15:{code:"SFO",name:"Foca"},16:{code:"SSR",name:"Sarajevo-Romanija or Sokolac"},17:{code:"STR",name:"Trebinje"},18:{code:"SVL",name:"Vlasenica"}},BW:{1:{code:"CE",name:"Central"},2:{code:"GH",name:"Ghanzi"},3:{code:"KD",name:"Kgalagadi"},4:{code:"KT",name:"Kgatleng"},5:{code:"KW",name:"Kweneng"},6:{code:"NG",name:"Ngamiland"},7:{code:"NE",name:"North East"},8:{code:"NW",name:"North West"},9:{code:"SE",name:"South East"},10:{code:"SO",name:"Southern"}},BR:{1:{code:"AC",name:"Acre"},2:{code:"AL",name:"Alagoas"},3:{code:"AP",name:"Amapa"},4:{code:"AM",name:"Amazonas"},5:{code:"BA",name:"Bahia"},6:{code:"CE",name:"Ceara"},7:{code:"DF",name:"Distrito Federal"},8:{code:"ES",name:"Espirito Santo"},9:{code:"GO",name:"Goias"},10:{code:"MA",name:"Maranhao"},11:{code:"MT",name:"Mato Grosso"},12:{code:"MS",name:"Mato Grosso do Sul"},13:{code:"MG",name:"Minas Gerais"},14:{code:"PA",name:"Para"},15:{code:"PB",name:"Paraiba"},16:{code:"PR",name:"Parana"},17:{code:"PE",name:"Pernambuco"},18:{code:"PI",name:"Piaui"},19:{code:"RJ",name:"Rio de Janeiro"},20:{code:"RN",name:"Rio Grande do Norte"},21:{code:"RS",name:"Rio Grande do Sul"},22:{code:"RO",name:"Rondonia"},23:{code:"RR",name:"Roraima"},24:{code:"SC",name:"Santa Catarina"},25:{code:"SP",name:"Sao Paulo"},26:{code:"SE",name:"Sergipe"},27:{code:"TO",name:"Tocantins"}},IO:{1:{code:"DG",name:"Diego Garcia"},2:{code:"DI",name:"Danger Island"},3:{code:"EA",name:"Eagle Islands"},4:{code:"EG",name:"Egmont Islands"},5:{code:"NI",name:"Nelsons Island"},6:{code:"PB",name:"Peros Banhos"},7:{code:"SI",name:"Salomon Islands"},8:{code:"TB",name:"Three Brothers"}},BN:{1:{code:"BEL",name:"Belait"},2:{code:"BRM",name:"Brunei and Muara"},3:{code:"TEM",name:"Temburong"},4:{code:"TUT",name:"Tutong"}},BG:{1:{code:"BG-01",name:"Blagoevgrad"},2:{code:"BG-02",name:"Burgas"},3:{code:"BG-03",name:"Dobrich"},4:{code:"BG-04",name:"Gabrovo"},5:{code:"BG-05",name:"Haskovo"},6:{code:"BG-06",name:"Kardjali"},7:{code:"BG-07",name:"Kyustendil"},8:{code:"BG-08",name:"Lovech"},9:{code:"BG-09",name:"Montana"},10:{code:"BG-10",name:"Pazardjik"},11:{code:"BG-11",name:"Pernik"},12:{code:"BG-12",name:"Pleven"},13:{code:"BG-13",name:"Plovdiv"},14:{code:"BG-14",name:"Razgrad"},15:{code:"BG-15",name:"Shumen"},16:{code:"BG-16",name:"Silistra"},17:{code:"BG-17",name:"Sliven"},18:{code:"BG-18",name:"Smolyan"},19:{code:"BG-19",name:"Sofia"},20:{code:"BG-20",name:"Sofia - town"},21:{code:"BG-21",name:"Stara Zagora"},22:{code:"BG-22",name:"Targovishte"},23:{code:"BG-23",name:"Varna"},24:{code:"BG-24",name:"Veliko Tarnovo"},25:{code:"BG-25",name:"Vidin"},26:{code:"BG-26",name:"Vratza"},27:{code:"BG-27",name:"Yambol"}},BF:{1:{code:"BAL",name:"Bale"},2:{code:"BAM",name:"Bam"},3:{code:"BAN",name:"Banwa"},4:{code:"BAZ",name:"Bazega"},5:{code:"BOR",name:"Bougouriba"},6:{code:"BLG",name:"Boulgou"},7:{code:"BOK",name:"Boulkiemde"},8:{code:"COM",name:"Comoe"},9:{code:"GAN",name:"Ganzourgou"},10:{code:"GNA",name:"Gnagna"},11:{code:"GOU",name:"Gourma"},12:{code:"HOU",name:"Houet"},13:{code:"IOA",name:"Ioba"},14:{code:"KAD",name:"Kadiogo"},15:{code:"KEN",name:"Kenedougou"},16:{code:"KOD",name:"Komondjari"},17:{code:"KOP",name:"Kompienga"},18:{code:"KOS",name:"Kossi"},19:{code:"KOL",name:"Koulpelogo"},20:{code:"KOT",name:"Kouritenga"},21:{code:"KOW",name:"Kourweogo"},22:{code:"LER",name:"Leraba"},23:{code:"LOR",name:"Loroum"},24:{code:"MOU",name:"Mouhoun"},25:{code:"NAH",name:"Nahouri"},26:{code:"NAM",name:"Namentenga"},27:{code:"NAY",name:"Nayala"},28:{code:"NOU",name:"Noumbiel"},29:{code:"OUB",name:"Oubritenga"},30:{code:"OUD",name:"Oudalan"},31:{code:"PAS",name:"Passore"},32:{code:"PON",name:"Poni"},33:{code:"SAG",name:"Sanguie"},34:{code:"SAM",name:"Sanmatenga"},35:{code:"SEN",name:"Seno"},36:{code:"SIS",name:"Sissili"},37:{code:"SOM",name:"Soum"},38:{code:"SOR",name:"Sourou"},39:{code:"TAP",name:"Tapoa"},40:{code:"TUY",name:"Tuy"},41:{code:"YAG",name:"Yagha"},42:{code:"YAT",name:"Yatenga"},43:{code:"ZIR",name:"Ziro"},44:{code:"ZOD",name:"Zondoma"},45:{code:"ZOW",name:"Zoundweogo"}},BI:{1:{code:"BB",name:"Bubanza"},2:{code:"BJ",name:"Bujumbura"},3:{code:"BR",name:"Bururi"},4:{code:"CA",name:"Cankuzo"},5:{code:"CI",name:"Cibitoke"},6:{code:"GI",name:"Gitega"},7:{code:"KR",name:"Karuzi"},8:{code:"KY",name:"Kayanza"},9:{code:"KI",name:"Kirundo"},10:{code:"MA",name:"Makamba"},11:{code:"MU",name:"Muramvya"},12:{code:"MY",name:"Muyinga"},13:{code:"MW",name:"Mwaro"},14:{code:"NG",name:"Ngozi"},15:{code:"RT",name:"Rutana"},16:{code:"RY",name:"Ruyigi"}},KH:{1:{code:"BA",name:"Battambang"},2:{code:"BM",name:"Banteay Meanchey"},3:{code:"KB",name:"Keb"},4:{code:"KK",name:"Kaoh Kong"},5:{code:"KL",name:"Kandal"},6:{code:"KM",name:"Kampong Cham"},7:{code:"KN",name:"Kampong Chhnang"},8:{code:"KO",name:"Kampong Som"},9:{code:"KP",name:"Kampot"},10:{code:"KR",name:"Kratie"},11:{code:"KT",name:"Kampong Thom"},12:{code:"KU",name:"Kampong Speu"},13:{code:"MK",name:"Mondul Kiri"},14:{code:"OM",name:"Oddar Meancheay"},15:{code:"PA",name:"Pailin"},16:{code:"PG",name:"Prey Veng"},17:{code:"PP",name:"Phnom Penh"},18:{code:"PR",name:"Preah Vihear"},19:{code:"PS",name:"Preah Seihanu (Kompong Som or Si)"},20:{code:"PU",name:"Pursat"},21:{code:"RK",name:"Ratanak Kiri"},22:{code:"SI",name:"Siemreap"},23:{code:"SR",name:"Svay Rieng"},24:{code:"ST",name:"Stung Treng"},25:{code:"TK",name:"Takeo"}},CM:{1:{code:"ADA",name:"Adamawa (Adamaoua)"},2:{code:"CEN",name:"Centre"},3:{code:"EST",name:"East (Est)"},4:{code:"EXN",name:"Extrême-Nord"},5:{code:"LIT",name:"Littoral"},6:{code:"NOR",name:"North (Nord)"},7:{code:"NOT",name:"Northwest (Nord-Ouest)"},8:{code:"OUE",name:"West (Ouest)"},9:{code:"SUD",name:"South (Sud)"},10:{code:"SOU",name:"Southwest (Sud-Ouest)"}},CA:{1:{code:"AB",name:"Alberta"},2:{code:"BC",name:"British Columbia"},3:{code:"MB",name:"Manitoba"},4:{code:"NB",name:"New Brunswick"},5:{code:"NL",name:"Newfoundland and Labrador"},6:{code:"NT",name:"Northwest Territories"},7:{code:"NS",name:"Nova Scotia"},8:{code:"NU",name:"Nunavut"},9:{code:"ON",name:"Ontario"},10:{code:"PE",name:"Prince Edward Island"},11:{code:"QC",name:"Québec"},12:{code:"SK",name:"Saskatchewan"},13:{code:"YT",name:"Yukon Territory"}},CV:{1:{code:"BV",name:"Boa Vista"},2:{code:"BR",name:"Brava"},3:{code:"CS",name:"Calheta de Sao Miguel"},4:{code:"MA",name:"Maio"},5:{code:"MO",name:"Mosteiros"},6:{code:"PA",name:"Paul"},7:{code:"PN",name:"Porto Novo"},8:{code:"PR",name:"Praia"},9:{code:"RG",name:"Ribeira Grande"},10:{code:"SL",name:"Sal"},11:{code:"CA",name:"Santa Catarina"},12:{code:"CR",name:"Santa Cruz"},13:{code:"SD",name:"Sao Domingos"},14:{code:"SF",name:"Sao Filipe"},15:{code:"SN",name:"Sao Nicolau"},16:{code:"SV",name:"Sao Vicente"},17:{code:"TA",name:"Tarrafal"}},KY:{1:{code:"CR",name:"Creek"},2:{code:"EA",name:"Eastern"},3:{code:"ML",name:"Midland"},4:{code:"ST",name:"South Town"},5:{code:"SP",name:"Spot Bay"},6:{code:"SK",name:"Stake Bay"},7:{code:"WD",name:"West End"},8:{code:"WN",name:"Western"}},CF:{1:{code:"BAN",name:"Bangui"},2:{code:"BBA",name:"Bamingui-Bangoran"},3:{code:"BKO",name:"Basse-Kotto"},4:{code:"HKO",name:"Haute-Kotto"},5:{code:"HMB",name:"Haut-Mbomou"},6:{code:"KEM",name:"Kemo"},7:{code:"LOB",name:"Lobaye"},8:{code:"MBO",name:"Mbomou"},9:{code:"MKD",name:"Mambéré-Kadéï"},10:{code:"NGR",name:"Nana-Grebizi"},11:{code:"NMM",name:"Nana-Mambere"},12:{code:"OMP",name:"Ombella-M'Poko"},13:{code:"OPE",name:"Ouham-Pende"},14:{code:"OUH",name:"Ouham"},15:{code:"OUK",name:"Ouaka"},16:{code:"SMB",name:"Sangha-Mbaere"},17:{code:"VAK",name:"Vakaga"}},TD:{1:{code:"BA",name:"Batha"},2:{code:"BI",name:"Biltine"},3:{code:"BE",name:"Borkou-Ennedi-Tibesti"},4:{code:"CB",name:"Chari-Baguirmi"},5:{code:"GU",name:"Guera"},6:{code:"KA",name:"Kanem"},7:{code:"LA",name:"Lac"},8:{code:"LC",name:"Logone Occidental"},9:{code:"LR",name:"Logone Oriental"},10:{code:"MK",name:"Mayo-Kebbi"},11:{code:"MC",name:"Moyen-Chari"},12:{code:"OU",name:"Ouaddai"},13:{code:"SA",name:"Salamat"},14:{code:"TA",name:"Tandjile"}},CL:{1:{code:"AI",name:"Aisen del General Carlos Ibanez"},2:{code:"AN",name:"Antofagasta"},3:{code:"AR",name:"Araucania"},4:{code:"AT",name:"Atacama"},5:{code:"BI",name:"Bio-Bio"},6:{code:"CO",name:"Coquimbo"},7:{code:"LI",name:"Libertador General Bernardo O'Hi"},8:{code:"LL",name:"Los Lagos"},9:{code:"MA",name:"Magallanes y de la Antartica Chi"},10:{code:"ML",name:"Maule"},11:{code:"RM",name:"Region Metropolitana"},12:{code:"TA",name:"Tarapaca"},13:{code:"VS",name:"Valparaiso"}},CN:{1:{code:"AN",name:"Anhui"},2:{code:"BE",name:"Beijing"},3:{code:"CH",name:"Chongqing"},4:{code:"FU",name:"Fujian"},5:{code:"GA",name:"Gansu"},6:{code:"GU",name:"Guangdong"},7:{code:"GX",name:"Guangxi"},8:{code:"GZ",name:"Guizhou"},9:{code:"HA",name:"Hainan"},10:{code:"HB",name:"Hebei"},11:{code:"HL",name:"Heilongjiang"},12:{code:"HE",name:"Henan"},13:{code:"HK",name:"Hong Kong"},14:{code:"HU",name:"Hubei"},15:{code:"HN",name:"Hunan"},16:{code:"IM",name:"Inner Mongolia"},17:{code:"JI",name:"Jiangsu"},18:{code:"JX",name:"Jiangxi"},19:{code:"JL",name:"Jilin"},20:{code:"LI",name:"Liaoning"},21:{code:"MA",name:"Macau"},22:{code:"NI",name:"Ningxia"},23:{code:"SH",name:"Shaanxi"},24:{code:"SA",name:"Shandong"},25:{code:"SG",name:"Shanghai"},26:{code:"SX",name:"Shanxi"},27:{code:"SI",name:"Sichuan"},28:{code:"TI",name:"Tianjin"},29:{code:"XI",name:"Xinjiang"},30:{code:"YU",name:"Yunnan"},31:{code:"ZH",name:"Zhejiang"}},CC:{1:{code:"D",name:"Direction Island"},2:{code:"H",name:"Home Island"},3:{code:"O",name:"Horsburgh Island"},4:{code:"S",name:"South Island"},5:{code:"W",name:"West Island"}},CO:{1:{code:"AMZ",name:"Amazonas"},2:{code:"ANT",name:"Antioquia"},3:{code:"ARA",name:"Arauca"},4:{code:"ATL",name:"Atlantico"},5:{code:"BDC",name:"Bogota D.C."},6:{code:"BOL",name:"Bolivar"},7:{code:"BOY",name:"Boyaca"},8:{code:"CAL",name:"Caldas"},9:{code:"CAQ",name:"Caqueta"},10:{code:"CAS",name:"Casanare"},11:{code:"CAU",name:"Cauca"},12:{code:"CES",name:"Cesar"},13:{code:"CHO",name:"Choco"},14:{code:"COR",name:"Cordoba"},15:{code:"CAM",name:"Cundinamarca"},16:{code:"GNA",name:"Guainia"},17:{code:"GJR",name:"Guajira"},18:{code:"GVR",name:"Guaviare"},19:{code:"HUI",name:"Huila"},20:{code:"MAG",name:"Magdalena"},21:{code:"MET",name:"Meta"},22:{code:"NAR",name:"Narino"},23:{code:"NDS",name:"Norte de Santander"},24:{code:"PUT",name:"Putumayo"},25:{code:"QUI",name:"Quindio"},26:{code:"RIS",name:"Risaralda"},27:{code:"SAP",name:"San Andres y Providencia"},28:{code:"SAN",name:"Santander"},29:{code:"SUC",name:"Sucre"},30:{code:"TOL",name:"Tolima"},31:{code:"VDC",name:"Valle del Cauca"},32:{code:"VAU",name:"Vaupes"},33:{code:"VIC",name:"Vichada"}},KM:{1:{code:"G",name:"Grande Comore"},2:{code:"A",name:"Anjouan"},3:{code:"M",name:"Moheli"}},CG:{1:{code:"BO",name:"Bouenza"},2:{code:"BR",name:"Brazzaville"},3:{code:"CU",name:"Cuvette"},4:{code:"CO",name:"Cuvette-Ouest"},5:{code:"KO",name:"Kouilou"},6:{code:"LE",name:"Lekoumou"},7:{code:"LI",name:"Likouala"},8:{code:"NI",name:"Niari"},9:{code:"PL",name:"Plateaux"},10:{code:"PO",name:"Pool"},11:{code:"SA",name:"Sangha"}},CK:{1:{code:"AI",name:"Aitutaki"},2:{code:"AT",name:"Atiu"},3:{code:"MA",name:"Manuae"},4:{code:"MG",name:"Mangaia"},5:{code:"MK",name:"Manihiki"},6:{code:"MT",name:"Mitiaro"},7:{code:"MU",name:"Mauke"},8:{code:"NI",name:"Nassau Island"},9:{code:"PA",name:"Palmerston"},10:{code:"PE",name:"Penrhyn"},11:{code:"PU",name:"Pukapuka"},12:{code:"RK",name:"Rakahanga"},13:{code:"RR",name:"Rarotonga"},14:{code:"SU",name:"Surwarrow"},15:{code:"TA",name:"Takutea"}},CR:{1:{code:"AL",name:"Alajuela"},2:{code:"CA",name:"Cartago"},3:{code:"GU",name:"Guanacaste"},4:{code:"HE",name:"Heredia"},5:{code:"LI",name:"Limon"},6:{code:"PU",name:"Puntarenas"},7:{code:"SJ",name:"San Jose"}},CI:{1:{code:"ABE",name:"Abengourou"},2:{code:"ABI",name:"Abidjan"},3:{code:"ABO",name:"Aboisso"},4:{code:"ADI",name:"Adiake"},5:{code:"ADZ",name:"Adzope"},6:{code:"AGB",name:"Agboville"},7:{code:"AGN",name:"Agnibilekrou"},8:{code:"ALE",name:"Alepe"},9:{code:"BOC",name:"Bocanda"},10:{code:"BAN",name:"Bangolo"},11:{code:"BEO",name:"Beoumi"},12:{code:"BIA",name:"Biankouma"},13:{code:"BDK",name:"Bondoukou"},14:{code:"BGN",name:"Bongouanou"},15:{code:"BFL",name:"Bouafle"},16:{code:"BKE",name:"Bouake"},17:{code:"BNA",name:"Bouna"},18:{code:"BDL",name:"Boundiali"},19:{code:"DKL",name:"Dabakala"},20:{code:"DBU",name:"Dabou"},21:{code:"DAL",name:"Daloa"},22:{code:"DAN",name:"Danane"},23:{code:"DAO",name:"Daoukro"},24:{code:"DIM",name:"Dimbokro"},25:{code:"DIV",name:"Divo"},26:{code:"DUE",name:"Duekoue"},27:{code:"FER",name:"Ferkessedougou"},28:{code:"GAG",name:"Gagnoa"},29:{code:"GBA",name:"Grand-Bassam"},30:{code:"GLA",name:"Grand-Lahou"},31:{code:"GUI",name:"Guiglo"},32:{code:"ISS",name:"Issia"},33:{code:"JAC",name:"Jacqueville"},34:{code:"KAT",name:"Katiola"},35:{code:"KOR",name:"Korhogo"},36:{code:"LAK",name:"Lakota"},37:{code:"MAN",name:"Man"},38:{code:"MKN",name:"Mankono"},39:{code:"MBA",name:"Mbahiakro"},40:{code:"ODI",name:"Odienne"},41:{code:"OUM",name:"Oume"},42:{code:"SAK",name:"Sakassou"},43:{code:"SPE",name:"San-Pedro"},44:{code:"SAS",name:"Sassandra"},45:{code:"SEG",name:"Seguela"},46:{code:"SIN",name:"Sinfra"},47:{code:"SOU",name:"Soubre"},48:{code:"TAB",name:"Tabou"},49:{code:"TAN",name:"Tanda"},50:{code:"TIE",name:"Tiebissou"},51:{code:"TIN",name:"Tingrela"},52:{code:"TIA",name:"Tiassale"},53:{code:"TBA",name:"Touba"},54:{code:"TLP",name:"Toulepleu"},55:{code:"TMD",name:"Toumodi"},56:{code:"VAV",name:"Vavoua"},57:{code:"YAM",name:"Yamoussoukro"},58:{code:"ZUE",name:"Zuenoula"}},HR:{1:{code:"BB",name:"Bjelovar-Bilogora"},2:{code:"CZ",name:"City of Zagreb"},3:{code:"DN",name:"Dubrovnik-Neretva"},4:{code:"IS",name:"Istra"},5:{code:"KA",name:"Karlovac"},6:{code:"KK",name:"Koprivnica-Krizevci"},7:{code:"KZ",name:"Krapina-Zagorje"},8:{code:"LS",name:"Lika-Senj"},9:{code:"ME",name:"Medimurje"},10:{code:"OB",name:"Osijek-Baranja"},11:{code:"PS",name:"Pozega-Slavonia"},12:{code:"PG",name:"Primorje-Gorski Kotar"},13:{code:"SI",name:"Sibenik"},14:{code:"SM",name:"Sisak-Moslavina"},15:{code:"SB",name:"Slavonski Brod-Posavina"},16:{code:"SD",name:"Split-Dalmatia"},17:{code:"VA",name:"Varazdin"},18:{code:"VP",name:"Virovitica-Podravina"},19:{code:"VS",name:"Vukovar-Srijem"},20:{code:"ZK",name:"Zadar-Knin"},21:{code:"ZA",name:"Zagreb"}},CU:{1:{code:"CA",name:"Camaguey"},2:{code:"CD",name:"Ciego de Avila"},3:{code:"CI",name:"Cienfuegos"},4:{code:"CH",name:"Ciudad de La Habana"},5:{code:"GR",name:"Granma"},6:{code:"GU",name:"Guantanamo"},7:{code:"HO",name:"Holguin"},8:{code:"IJ",name:"Isla de la Juventud"},9:{code:"LH",name:"La Habana"},10:{code:"LT",name:"Las Tunas"},11:{code:"MA",name:"Matanzas"},12:{code:"PR",name:"Pinar del Rio"},13:{code:"SS",name:"Sancti Spiritus"},14:{code:"SC",name:"Santiago de Cuba"},15:{code:"VC",name:"Villa Clara"}},CY:{1:{code:"F",name:"Famagusta"},2:{code:"K",name:"Kyrenia"},3:{code:"A",name:"Larnaca"},4:{code:"I",name:"Limassol"},5:{code:"N",name:"Nicosia"},6:{code:"P",name:"Paphos"}},CZ:{1:{code:"A",name:"Hlavní město Praha"},2:{code:"B",name:"Jihomoravský"},3:{code:"C",name:"Jihočeský"},4:{code:"E",name:"Pardubický"},5:{code:"H",name:"Královéhradecký"},6:{code:"J",name:"Vysočina"},7:{code:"K",name:"Karlovarský"},8:{code:"L",name:"Liberecký"},9:{code:"M",name:"Olomoucký"},10:{code:"P",name:"Plzeňský"},11:{code:"S",name:"Středočeský"},12:{code:"T",name:"Moravskoslezský"},13:{code:"U",name:"Ústecký"},14:{code:"Z",name:"Zlínský"}},DK:{1:{code:"AR",name:"Arhus"},2:{code:"BH",name:"Bornholm"},3:{code:"CO",name:"Copenhagen"},4:{code:"FO",name:"Faroe Islands"},5:{code:"FR",name:"Frederiksborg"},6:{code:"FY",name:"Fyn"},7:{code:"KO",name:"Kobenhavn"},8:{code:"NO",name:"Nordjylland"},9:{code:"RI",name:"Ribe"},10:{code:"RK",name:"Ringkobing"},11:{code:"RO",name:"Roskilde"},12:{code:"SO",name:"Sonderjylland"},13:{code:"ST",name:"Storstrom"},14:{code:"VK",name:"Vejle"},15:{code:"VJ",name:"Vestjælland"},16:{code:"VB",name:"Viborg"}},DJ:{1:{code:"S",name:"'Ali Sabih"},2:{code:"K",name:"Dikhil"},3:{code:"J",name:"Djibouti"},4:{code:"O",name:"Obock"},5:{code:"T",name:"Tadjoura"}},DM:{1:{code:"AND",name:"Saint Andrew Parish"},2:{code:"DAV",name:"Saint David Parish"},3:{code:"GEO",name:"Saint George Parish"},4:{code:"JOH",name:"Saint John Parish"},5:{code:"JOS",name:"Saint Joseph Parish"},6:{code:"LUK",name:"Saint Luke Parish"},7:{code:"MAR",name:"Saint Mark Parish"},8:{code:"PAT",name:"Saint Patrick Parish"},9:{code:"PAU",name:"Saint Paul Parish"},10:{code:"PET",name:"Saint Peter Parish"}},DO:{1:{code:"DN",name:"Distrito Nacional"},2:{code:"AZ",name:"Azua"},3:{code:"BC",name:"Baoruco"},4:{code:"BH",name:"Barahona"},5:{code:"DJ",name:"Dajabon"},6:{code:"DU",name:"Duarte"},7:{code:"EL",name:"Elias Pina"},8:{code:"SY",name:"El Seybo"},9:{code:"ET",name:"Espaillat"},10:{code:"HM",name:"Hato Mayor"},11:{code:"IN",name:"Independencia"},12:{code:"AL",name:"La Altagracia"},13:{code:"RO",name:"La Romana"},14:{code:"VE",name:"La Vega"},15:{code:"MT",name:"Maria Trinidad Sanchez"},16:{code:"MN",name:"Monsenor Nouel"},17:{code:"MC",name:"Monte Cristi"},18:{code:"MP",name:"Monte Plata"},19:{code:"PD",name:"Pedernales"},20:{code:"PR",name:"Peravia (Bani)"},21:{code:"PP",name:"Puerto Plata"},22:{code:"SL",name:"Salcedo"},23:{code:"SM",name:"Samana"},24:{code:"SH",name:"Sanchez Ramirez"},25:{code:"SC",name:"San Cristobal"},26:{code:"JO",name:"San Jose de Ocoa"},27:{code:"SJ",name:"San Juan"},28:{code:"PM",name:"San Pedro de Macoris"},29:{code:"SA",name:"Santiago"},30:{code:"ST",name:"Santiago Rodriguez"},31:{code:"SD",name:"Santo Domingo"},32:{code:"VA",name:"Valverde"}},TP:{1:{code:"AL",name:"Aileu"},2:{code:"AN",name:"Ainaro"},3:{code:"BA",name:"Baucau"},4:{code:"BO",name:"Bobonaro"},5:{code:"CO",name:"Cova Lima"},6:{code:"DI",name:"Dili"},7:{code:"ER",name:"Ermera"},8:{code:"LA",name:"Lautem"},9:{code:"LI",name:"Liquica"},10:{code:"MT",name:"Manatuto"},11:{code:"MF",name:"Manufahi"},12:{code:"OE",name:"Oecussi"},13:{code:"VI",name:"Viqueque"}},EC:{1:{code:"AZU",name:"Azuay"},2:{code:"BOL",name:"Bolivar"},3:{code:"CAN",name:"Cañar"},4:{code:"CAR",name:"Carchi"},5:{code:"CHI",name:"Chimborazo"},6:{code:"COT",name:"Cotopaxi"},7:{code:"EOR",name:"El Oro"},8:{code:"ESM",name:"Esmeraldas"},9:{code:"GPS",name:"Galápagos"},10:{code:"GUA",name:"Guayas"},11:{code:"IMB",name:"Imbabura"},12:{code:"LOJ",name:"Loja"},13:{code:"LRO",name:"Los Ríos"},14:{code:"MAN",name:"Manabí"},15:{code:"MSA",name:"Morona Santiago"},16:{code:"NAP",name:"Napo"},17:{code:"ORE",name:"Orellana"},18:{code:"PAS",name:"Pastaza"},19:{code:"PIC",name:"Pichincha"},20:{code:"SUC",name:"Sucumbíos"},21:{code:"TUN",name:"Tungurahua"},22:{code:"ZCH",name:"Zamora Chinchipe"}},EG:{1:{code:"DHY",name:"Ad Daqahliyah"},2:{code:"BAM",name:"Al Bahr al Ahmar"},3:{code:"BHY",name:"Al Buhayrah"},4:{code:"FYM",name:"Al Fayyum"},5:{code:"GBY",name:"Al Gharbiyah"},6:{code:"IDR",name:"Al Iskandariyah"},7:{code:"IML",name:"Al Isma 'iliyah"},8:{code:"JZH",name:"Al Jizah"},9:{code:"MFY",name:"Al Minufiyah"},10:{code:"MNY",name:"Al Minya"},11:{code:"QHR",name:"Al Qahirah"},12:{code:"QLY",name:"Al Qalyubiyah"},13:{code:"WJD",name:"Al Wadi al Jadid"},14:{code:"SHQ",name:"Ash Sharqiyah"},15:{code:"SWY",name:"As Suways"},16:{code:"ASW",name:"Aswan"},17:{code:"ASY",name:"Asyut"},18:{code:"BSW",name:"Bani Suwayf"},19:{code:"BSD",name:"Bur Sa'id"},20:{code:"DMY",name:"Dumyat"},21:{code:"JNS",name:"Janub Sina'"},22:{code:"KSH",name:"Kafr ash Shaykh"},23:{code:"MAT",name:"Matruh"},24:{code:"QIN",name:"Qina"},25:{code:"SHS",name:"Shamal Sina'"},26:{code:"SUH",name:"Suhaj"}},SV:{1:{code:"AH",name:"Ahuachapan"},2:{code:"CA",name:"Cabanas"},3:{code:"CH",name:"Chalatenango"},4:{code:"CU",name:"Cuscatlan"},5:{code:"LB",name:"La Libertad"},6:{code:"PZ",name:"La Paz"},7:{code:"UN",name:"La Union"},8:{code:"MO",name:"Morazan"},9:{code:"SM",name:"San Miguel"},10:{code:"SS",name:"San Salvador"},11:{code:"SV",name:"San Vicente"},12:{code:"SA",name:"Santa Ana"},13:{code:"SO",name:"Sonsonate"},14:{code:"US",name:"Usulutan"}},GQ:{1:{code:"AN",name:"Provincia Annobon"},2:{code:"BN",name:"Provincia Bioko Norte"},3:{code:"BS",name:"Provincia Bioko Sur"},4:{code:"CS",name:"Provincia Centro Sur"},5:{code:"KN",name:"Provincia Kie-Ntem"},6:{code:"LI",name:"Provincia Litoral"},7:{code:"WN",name:"Provincia Wele-Nzas"}},ER:{1:{code:"MA",name:"Central (Maekel)"},2:{code:"KE",name:"Anseba (Keren)"},3:{code:"DK",name:"Southern Red Sea (Debub-Keih-Bah)"},4:{code:"SK",name:"Northern Red Sea (Semien-Keih-Ba)"},5:{code:"DE",name:"Southern (Debub)"},6:{code:"BR",name:"Gash-Barka (Barentu)"}},EE:{1:{code:"HA",name:"Harjumaa (Tallinn)"},2:{code:"HI",name:"Hiiumaa (Kardla)"},3:{code:"IV",name:"Ida-Virumaa (Johvi)"},4:{code:"JA",name:"Jarvamaa (Paide)"},5:{code:"JO",name:"Jogevamaa (Jogeva)"},6:{code:"LV",name:"Laane-Virumaa (Rakvere)"},7:{code:"LA",name:"Laanemaa (Haapsalu)"},8:{code:"PA",name:"Parnumaa (Parnu)"},9:{code:"PO",name:"Polvamaa (Polva)"},10:{code:"RA",name:"Raplamaa (Rapla)"},11:{code:"SA",name:"Saaremaa (Kuessaare)"},12:{code:"TA",name:"Tartumaa (Tartu)"},13:{code:"VA",name:"Valgamaa (Valga)"},14:{code:"VI",name:"Viljandimaa (Viljandi)"},15:{code:"VO",name:"Vorumaa (Voru)"}},ET:{1:{code:"AF",name:"Afar"},2:{code:"AH",name:"Amhara"},3:{code:"BG",name:"Benishangul-Gumaz"},4:{code:"GB",name:"Gambela"},5:{code:"HR",name:"Hariai"},6:{code:"OR",name:"Oromia"},7:{code:"SM",name:"Somali"},8:{code:"SN",name:"Southern Nations - Nationalities"},9:{code:"TG",name:"Tigray"},10:{code:"AA",name:"Addis Ababa"},11:{code:"DD",name:"Dire Dawa"}},FO:{1:{code:"TÛR",name:"Tûrshavnar Kommuna"},2:{code:"KLA",name:"Klaksvík"},3:{code:"RUN",name:"Runavík"},4:{code:"TVØ",name:"Tvøroyri"},5:{code:"FUG",name:"Fuglafjørður"},6:{code:"SUN",name:"Sunda Kommuna"},7:{code:"VáG",name:"Vágur"},8:{code:"NES",name:"Nes"},9:{code:"VES",name:"Vestmanna"},10:{code:"MIð",name:"Miðvágur"},11:{code:"SØR",name:"Sørvágur"},12:{code:"GØT",name:"Gøtu Kommuna"},13:{code:"SJû",name:"Sjûvar Kommuna"},14:{code:"LEI",name:"Leirvík"},15:{code:"SAN",name:"Sandavágur"},16:{code:"HVA",name:"Hvalba"},17:{code:"EIð",name:"Eiði"},18:{code:"KVí",name:"Kvívík"},19:{code:"SAN",name:"Sandur"},20:{code:"SKO",name:"Skopun"},21:{code:"HVA",name:"Hvannasund"},22:{code:"SUM",name:"Sumba"},23:{code:"VIð",name:"Viðareiði"},24:{code:"POR",name:"Porkeri"},25:{code:"SKá",name:"Skálavík"},26:{code:"KUN",name:"Kunoy"},27:{code:"HÚS",name:"HÚsavík"},28:{code:"HOV",name:"Hov"},29:{code:"FáM",name:"Fámjin"},30:{code:"FUN",name:"Funningur"},31:{code:"HÚS",name:"HÚsar"},32:{code:"SKÚ",name:"SkÚvoy"},33:{code:"SVí",name:"Svínoy"},34:{code:"FUG",name:"Fugloy"}},FJ:{1:{code:"C",name:"Central Division"},2:{code:"E",name:"Eastern Division"},3:{code:"N",name:"Northern Division"},4:{code:"R",name:"Rotuma"},5:{code:"W",name:"Western Division"}},FI:{1:{code:"AL",name:"Ahvenanmaan Laani"},2:{code:"ES",name:"Etela-Suomen Laani"},3:{code:"IS",name:"Ita-Suomen Laani"},4:{code:"LS",name:"Lansi-Suomen Laani"},5:{code:"LA",name:"Lapin Lanani"},6:{code:"OU",name:"Oulun Laani"}},FR:{1:{code:"AL",name:"Alsace"},2:{code:"AQ",name:"Aquitaine"},3:{code:"AU",name:"Auvergne"},4:{code:"BR",name:"Brittany"},5:{code:"BU",name:"Burgundy"},6:{code:"CE",name:"Center Loire Valley"},7:{code:"CH",name:"Champagne"},8:{code:"CO",name:"Corse"},9:{code:"FR",name:"France Comte"},10:{code:"LA",name:"Languedoc Roussillon"},11:{code:"LI",name:"Limousin"},12:{code:"LO",name:"Lorraine"},13:{code:"MI",name:"Midi Pyrenees"},14:{code:"NO",name:"Nord Pas de Calais"},15:{code:"NR",name:"Normandy"},16:{code:"PA",name:"Paris / Ile de France"},17:{code:"PI",name:"Picardie"},18:{code:"PO",name:"Poitou Charente"},19:{code:"PR",name:"Provence"},20:{code:"RH",name:"Rhone Alps"},21:{code:"RI",name:"Riviera"},22:{code:"WE",name:"Western Loire Valley"}},FX:{1:{code:"Et",name:"Etranger"},2:{code:"01",name:"Ain"},3:{code:"02",name:"Aisne"},4:{code:"03",name:"Allier"},5:{code:"04",name:"Alpes de Haute Provence"},6:{code:"05",name:"Hautes-Alpes"},7:{code:"06",name:"Alpes Maritimes"},8:{code:"07",name:"Ardèche"},9:{code:"08",name:"Ardennes"},10:{code:"09",name:"Ariège"},11:{code:"10",name:"Aube"},12:{code:"11",name:"Aude"},13:{code:"12",name:"Aveyron"},14:{code:"13",name:"Bouches du Rhône"},15:{code:"14",name:"Calvados"},16:{code:"15",name:"Cantal"},17:{code:"16",name:"Charente"},18:{code:"17",name:"Charente Maritime"},19:{code:"18",name:"Cher"},20:{code:"19",name:"Corrèze"},21:{code:"2A",name:"Corse du Sud"},22:{code:"2B",name:"Haute Corse"},23:{code:"21",name:"Côte d'or"},24:{code:"22",name:"Côtes d'Armor"},25:{code:"23",name:"Creuse"},26:{code:"24",name:"Dordogne"},27:{code:"25",name:"Doubs"},28:{code:"26",name:"Drôme"},29:{code:"27",name:"Eure"},30:{code:"28",name:"Eure et Loir"},31:{code:"29",name:"Finistère"},32:{code:"30",name:"Gard"},33:{code:"31",name:"Haute Garonne"},34:{code:"32",name:"Gers"},35:{code:"33",name:"Gironde"},36:{code:"34",name:"Hérault"},37:{code:"35",name:"Ille et Vilaine"},38:{code:"36",name:"Indre"},39:{code:"37",name:"Indre et Loire"},40:{code:"38",name:"Isére"},41:{code:"39",name:"Jura"},42:{code:"40",name:"Landes"},43:{code:"41",name:"Loir et Cher"},44:{code:"42",name:"Loire"},45:{code:"43",name:"Haute Loire"},46:{code:"44",name:"Loire Atlantique"},47:{code:"45",name:"Loiret"},48:{code:"46",name:"Lot"},49:{code:"47",name:"Lot et Garonne"},50:{code:"48",name:"Lozère"},51:{code:"49",name:"Maine et Loire"},52:{code:"50",name:"Manche"},53:{code:"51",name:"Marne"},54:{code:"52",name:"Haute Marne"},55:{code:"53",name:"Mayenne"},56:{code:"54",name:"Meurthe et Moselle"},57:{code:"55",name:"Meuse"},58:{code:"56",name:"Morbihan"},59:{code:"57",name:"Moselle"},60:{code:"58",name:"Nièvre"},61:{code:"59",name:"Nord"},62:{code:"60",name:"Oise"},63:{code:"61",name:"Orne"},64:{code:"62",name:"Pas de Calais"},65:{code:"63",name:"Puy de Dôme"},66:{code:"64",name:"Pyrenees Atlantique"},67:{code:"65",name:"Hautes Pyrenees"},68:{code:"66",name:"Pyrenees Orientale"},69:{code:"67",name:"Bas Rhin"},70:{code:"68",name:"Haut Rhin"},71:{code:"69",name:"Rhône"},72:{code:"70",name:"Haute Saône"},73:{code:"71",name:"Saône et Loire"},74:{code:"72",name:"Sarthe"},75:{code:"73",name:"Savoie"},76:{code:"74",name:"Haute Savoie"},77:{code:"75",name:"Paris"},78:{code:"76",name:"Seine Martitime"},79:{code:"77",name:"Seine et Marne"},80:{code:"78",name:"Yvelines"},81:{code:"79",name:"Deux Sèvres"},82:{code:"80",name:"Somme"},83:{code:"81",name:"Tarn"},84:{code:"82",name:"Tarn et Garonne"},85:{code:"83",name:"Var"},86:{code:"84",name:"Vaucluse"},87:{code:"85",name:"Vendée"},88:{code:"86",name:"Vienne"},89:{code:"87",name:"Haute Vienne"},90:{code:"88",name:"Vosges"},91:{code:"89",name:"Yonne"},92:{code:"90",name:"Territoire de Belfort"},93:{code:"91",name:"Essonne"},94:{code:"92",name:"Hauts de Seine"},95:{code:"93",name:"Seine St-Denis"},96:{code:"94",name:"Val de Marne"},97:{code:"95",name:"Val d'oise"}},GF:{1:{code:"AWA",name:"Awala-Yalimapo"},2:{code:"MAN",name:"Mana"},3:{code:"SAI",name:"Saint-Laurent-Du-Maroni"},4:{code:"APA",name:"Apatou"},5:{code:"GRA",name:"Grand-Santi"},6:{code:"PAP",name:"Papaïchton"},7:{code:"SAÜ",name:"SaÜl"},8:{code:"MAR",name:"Maripasoula"},9:{code:"CAM",name:"Camopi"},10:{code:"SAI",name:"Saint-Georges"},11:{code:"OUA",name:"Ouanary"},12:{code:"RéG",name:"Régina"},13:{code:"ROU",name:"Roura"},14:{code:"SAI",name:"Saint-élie"},15:{code:"IRA",name:"Iracoubo"},16:{code:"SIN",name:"Sinnamary"},17:{code:"KOU",name:"Kourou"},18:{code:"MAC",name:"Macouria"},19:{code:"MON",name:"Montsinéry-Tonnegrande"},20:{code:"MAT",name:"Matoury"},21:{code:"CAY",name:"Cayenne"},22:{code:"REM",name:"Remire-Montjoly"}},PF:{1:{code:"M",name:"Archipel des Marquises"},2:{code:"T",name:"Archipel des Tuamotu"},3:{code:"I",name:"Archipel des Tubuai"},4:{code:"V",name:"Iles du Vent"},5:{code:"S",name:"Iles Sous-le-Vent"}},TF:{1:{code:"C",name:"Iles Crozet"},2:{code:"K",name:"Iles Kerguelen"},3:{code:"A",name:"Ile Amsterdam"},4:{code:"P",name:"Ile Saint-Paul"},5:{code:"D",name:"Adelie Land"}},GA:{1:{code:"ES",name:"Estuaire"},2:{code:"HO",name:"Haut-Ogooue"},3:{code:"MO",name:"Moyen-Ogooue"},4:{code:"NG",name:"Ngounie"},5:{code:"NY",name:"Nyanga"},6:{code:"OI",name:"Ogooue-Ivindo"},7:{code:"OL",name:"Ogooue-Lolo"},8:{code:"OM",name:"Ogooue-Maritime"},9:{code:"WN",name:"Woleu-Ntem"}},GM:{1:{code:"BJ",name:"Banjul"},2:{code:"BS",name:"Basse"},3:{code:"BR",name:"Brikama"},4:{code:"JA",name:"Janjangbure"},5:{code:"KA",name:"Kanifeng"},6:{code:"KE",name:"Kerewan"},7:{code:"KU",name:"Kuntaur"},8:{code:"MA",name:"Mansakonko"},9:{code:"LR",name:"Lower River"},10:{code:"CR",name:"Central River"},11:{code:"NB",name:"North Bank"},12:{code:"UR",name:"Upper River"},13:{code:"WE",name:"Western"}},GE:{1:{code:"AB",name:"Abkhazia"},2:{code:"AJ",name:"Ajaria"},3:{code:"GU",name:"Guria"},4:{code:"IM",name:"Imereti"},5:{code:"KA",name:"Kakheti"},6:{code:"KK",name:"Kvemo Kartli"},7:{code:"MM",name:"Mtskheta-Mtianeti"},8:{code:"RL",name:"Racha Lechkhumi and Kvemo Svanet"},9:{code:"SJ",name:"Samtskhe-Javakheti"},10:{code:"SK",name:"Shida Kartli"},11:{code:"SZ",name:"Samegrelo-Zemo Svaneti"},12:{code:"TB",name:"Tbilisi"}},DE:{1:{code:"BAW",name:"Baden-Württemberg"},2:{code:"BAY",name:"Bayern"},3:{code:"BER",name:"Berlin"},4:{code:"BRG",name:"Brandenburg"},5:{code:"BRE",name:"Bremen"},6:{code:"HAM",name:"Hamburg"},7:{code:"HES",name:"Hessen"},8:{code:"MEC",name:"Mecklenburg-Vorpommern"},9:{code:"NDS",name:"Niedersachsen"},10:{code:"NRW",name:"Nordrhein-Westfalen"},11:{code:"RHE",name:"Rheinland-Pfalz"},12:{code:"SAR",name:"Saarland"},13:{code:"SAS",name:"Sachsen"},14:{code:"SAC",name:"Sachsen-Anhalt"},15:{code:"SCN",name:"Schleswig-Holstein"},16:{code:"THE",name:"Thüringen"}},GH:{1:{code:"AS",name:"Ashanti Region"},2:{code:"BA",name:"Brong-Ahafo Region"},3:{code:"CE",name:"Central Region"},4:{code:"EA",name:"Eastern Region"},5:{code:"GA",name:"Greater Accra Region"},6:{code:"NO",name:"Northern Region"},7:{code:"UE",name:"Upper East Region"},8:{code:"UW",name:"Upper West Region"},9:{code:"VO",name:"Volta Region"},10:{code:"WE",name:"Western Region"}},GI:{1:{code:"EAS",name:"East Side"},2:{code:"NOR",name:"North District"},3:{code:"REC",name:"Reclamation Areas"},4:{code:"SAN",name:"Sandpits Area"},5:{code:"SOU",name:"South District"},6:{code:"TOW",name:"Town Area"},7:{code:"UPP",name:"Upper Town"},8:{code:"OTH",name:"Other"}},GR:{1:{code:"AT",name:"Attica"},2:{code:"CN",name:"Central Greece"},3:{code:"CM",name:"Central Macedonia"},4:{code:"CR",name:"Crete"},5:{code:"EM",name:"East Macedonia and Thrace"},6:{code:"EP",name:"Epirus"},7:{code:"II",name:"Ionian Islands"},8:{code:"NA",name:"North Aegean"},9:{code:"PP",name:"Peloponnesos"},10:{code:"SA",name:"South Aegean"},11:{code:"TH",name:"Thessaly"},12:{code:"WG",name:"West Greece"},13:{code:"WM",name:"West Macedonia"}},GL:{1:{code:"A",name:"Avannaa"},2:{code:"T",name:"Tunu"},3:{code:"K",name:"Kitaa"}},86:{1:{code:"A",name:"Saint Andrew"},2:{code:"D",name:"Saint David"},3:{code:"G",name:"Saint George"},4:{code:"J",name:"Saint John"},5:{code:"M",name:"Saint Mark"},6:{code:"P",name:"Saint Patrick"},7:{code:"C",name:"Carriacou"},8:{code:"Q",name:"Petit Martinique"}},GP:{1:{code:"ARR",name:"Arrondissements Of The Guadeloup"},2:{code:"CAN",name:"Cantons Of The Guadeloup Depart"},3:{code:"COM",name:"Communes Of The Guadeloup Depart"}},GU:{1:{code:"AGA",name:"Agana Heights"},2:{code:"AGA",name:"Agat"},3:{code:"ASA",name:"Asan Maina"},4:{code:"BAR",name:"Barrigada"},5:{code:"CHA",name:"Chalan Pago Ordot"},6:{code:"DED",name:"Dededo"},7:{code:"HAG",name:"HagÅtña"},8:{code:"INA",name:"Inarajan"},9:{code:"MAN",name:"Mangilao"},10:{code:"MER",name:"Merizo"},11:{code:"MON",name:"Mongmong Toto Maite"},12:{code:"PIT",name:"Piti"},13:{code:"SAN",name:"Santa Rita"},14:{code:"SIN",name:"Sinajana"},15:{code:"TAL",name:"Talofofo"},16:{code:"TAM",name:"Tamuning"},17:{code:"UMA",name:"Umatac"},18:{code:"YIG",name:"Yigo"},19:{code:"YON",name:"Yona"}},GT:{1:{code:"AV",name:"Alta Verapaz"},2:{code:"BV",name:"Baja Verapaz"},3:{code:"CM",name:"Chimaltenango"},4:{code:"CQ",name:"Chiquimula"},5:{code:"PE",name:"El Peten"},6:{code:"PR",name:"El Progreso"},7:{code:"QC",name:"El Quiche"},8:{code:"ES",name:"Escuintla"},9:{code:"GU",name:"Guatemala"},10:{code:"HU",name:"Huehuetenango"},11:{code:"IZ",name:"Izabal"},12:{code:"JA",name:"Jalapa"},13:{code:"JU",name:"Jutiapa"},14:{code:"QZ",name:"Quetzaltenango"},15:{code:"RE",name:"Retalhuleu"},16:{code:"ST",name:"Sacatepequez"},17:{code:"SM",name:"San Marcos"},18:{code:"SR",name:"Santa Rosa"},19:{code:"SO",name:"Solola"},20:{code:"SU",name:"Suchitepequez"},21:{code:"TO",name:"Totonicapan"},22:{code:"ZA",name:"Zacapa"}},GN:{1:{code:"CNK",name:"Conakry"},2:{code:"BYL",name:"Beyla"},3:{code:"BFA",name:"Boffa"},4:{code:"BOK",name:"Boke"},5:{code:"COY",name:"Coyah"},6:{code:"DBL",name:"Dabola"},7:{code:"DLB",name:"Dalaba"},8:{code:"DGR",name:"Dinguiraye"},9:{code:"DBR",name:"Dubreka"},10:{code:"FRN",name:"Faranah"},11:{code:"FRC",name:"Forecariah"},12:{code:"FRI",name:"Fria"},13:{code:"GAO",name:"Gaoual"},14:{code:"GCD",name:"Gueckedou"},15:{code:"KNK",name:"Kankan"},16:{code:"KRN",name:"Kerouane"},17:{code:"KND",name:"Kindia"},18:{code:"KSD",name:"Kissidougou"},19:{code:"KBA",name:"Koubia"},20:{code:"KDA",name:"Koundara"},21:{code:"KRA",name:"Kouroussa"},22:{code:"LAB",name:"Labe"},23:{code:"LLM",name:"Lelouma"},24:{code:"LOL",name:"Lola"},25:{code:"MCT",name:"Macenta"},26:{code:"MAL",name:"Mali"},27:{code:"MAM",name:"Mamou"},28:{code:"MAN",name:"Mandiana"},29:{code:"NZR",name:"Nzerekore"},30:{code:"PIT",name:"Pita"},31:{code:"SIG",name:"Siguiri"},32:{code:"TLM",name:"Telimele"},33:{code:"TOG",name:"Tougue"},34:{code:"YOM",name:"Yomou"}},GW:{1:{code:"BF",name:"Bafata Region"},2:{code:"BB",name:"Biombo Region"},3:{code:"BS",name:"Bissau Region"},4:{code:"BL",name:"Bolama Region"},5:{code:"CA",name:"Cacheu Region"},6:{code:"GA",name:"Gabu Region"},7:{code:"OI",name:"Oio Region"},8:{code:"QU",name:"Quinara Region"},9:{code:"TO",name:"Tombali Region"}},GY:{1:{code:"BW",name:"Barima-Waini"},2:{code:"CM",name:"Cuyuni-Mazaruni"},3:{code:"DM",name:"Demerara-Mahaica"},4:{code:"EC",name:"East Berbice-Corentyne"},5:{code:"EW",name:"Essequibo Islands-West Demerara"},6:{code:"MB",name:"Mahaica-Berbice"},7:{code:"PM",name:"Pomeroon-Supenaam"},8:{code:"PI",name:"Potaro-Siparuni"},9:{code:"UD",name:"Upper Demerara-Berbice"},10:{code:"UT",name:"Upper Takutu-Upper Essequibo"}},HT:{1:{code:"AR",name:"Artibonite"},2:{code:"CE",name:"Centre"},3:{code:"GA",name:"Grand'Anse"},4:{code:"ND",name:"Nord"},5:{code:"NE",name:"Nord-Est"},6:{code:"NO",name:"Nord-Ouest"},7:{code:"OU",name:"Ouest"},8:{code:"SD",name:"Sud"},9:{code:"SE",name:"Sud-Est"}},HM:{1:{code:"F",name:"Flat Island"},2:{code:"M",name:"McDonald Island"},3:{code:"S",name:"Shag Island"},4:{code:"H",name:"Heard Island"}},HN:{1:{code:"AT",name:"Atlantida"},2:{code:"CH",name:"Choluteca"},3:{code:"CL",name:"Colon"},4:{code:"CM",name:"Comayagua"},5:{code:"CP",name:"Copan"},6:{code:"CR",name:"Cortes"},7:{code:"PA",name:"El Paraiso"},8:{code:"FM",name:"Francisco Morazan"},9:{code:"GD",name:"Gracias a Dios"},10:{code:"IN",name:"Intibuca"},11:{code:"IB",name:"Islas de la Bahia (Bay Islands)"},12:{code:"PZ",name:"La Paz"},13:{code:"LE",name:"Lempira"},14:{code:"OC",name:"Ocotepeque"},15:{code:"OL",name:"Olancho"},16:{code:"SB",name:"Santa Barbara"},17:{code:"VA",name:"Valle"},18:{code:"YO",name:"Yoro"}},HK:{1:{code:"HCW",name:"Central and Western Hong Kong Is"},2:{code:"HEA",name:"Eastern Hong Kong Island"},3:{code:"HSO",name:"Southern Hong Kong Island"},4:{code:"HWC",name:"Wan Chai Hong Kong Island"},5:{code:"KKC",name:"Kowloon City Kowloon"},6:{code:"KKT",name:"Kwun Tong Kowloon"},7:{code:"KSS",name:"Sham Shui Po Kowloon"},8:{code:"KWT",name:"Wong Tai Sin Kowloon"},9:{code:"KYT",name:"Yau Tsim Mong Kowloon"},10:{code:"NIS",name:"Islands New Territories"},11:{code:"NKT",name:"Kwai Tsing New Territories"},12:{code:"NNO",name:"North New Territories"},13:{code:"NSK",name:"Sai Kung New Territories"},14:{code:"NST",name:"Sha Tin New Territories"},15:{code:"NTP",name:"Tai Po New Territories"},16:{code:"NTW",name:"Tsuen Wan New Territories"},17:{code:"NTM",name:"Tuen Mun New Territories"},18:{code:"NYL",name:"Yuen Long New Territories"}},HU:{1:{code:"BK",name:"Bacs-Kiskun"},2:{code:"BA",name:"Baranya"},3:{code:"BE",name:"Bekes"},4:{code:"BS",name:"Bekescsaba"},5:{code:"BZ",name:"Borsod-Abauj-Zemplen"},6:{code:"BU",name:"Budapest"},7:{code:"CS",name:"Csongrad"},8:{code:"DE",name:"Debrecen"},9:{code:"DU",name:"Dunaujvaros"},10:{code:"EG",name:"Eger"},11:{code:"FE",name:"Fejer"},12:{code:"GY",name:"Gyor"},13:{code:"GM",name:"Gyor-Moson-Sopron"},14:{code:"HB",name:"Hajdu-Bihar"},15:{code:"HE",name:"Heves"},16:{code:"HO",name:"Hodmezovasarhely"},17:{code:"JN",name:"Jasz-Nagykun-Szolnok"},18:{code:"KA",name:"Kaposvar"},19:{code:"KE",name:"Kecskemet"},20:{code:"KO",name:"Komarom-Esztergom"},21:{code:"MI",name:"Miskolc"},22:{code:"NA",name:"Nagykanizsa"},23:{code:"NO",name:"Nograd"},24:{code:"NY",name:"Nyiregyhaza"},25:{code:"PE",name:"Pecs"},26:{code:"PS",name:"Pest"},27:{code:"SO",name:"Somogy"},28:{code:"SP",name:"Sopron"},29:{code:"SS",name:"Szabolcs-Szatmar-Bereg"},30:{code:"SZ",name:"Szeged"},31:{code:"SE",name:"Szekesfehervar"},32:{code:"SL",name:"Szolnok"},33:{code:"SM",name:"Szombathely"},34:{code:"TA",name:"Tatabanya"},35:{code:"TO",name:"Tolna"},36:{code:"VA",name:"Vas"},37:{code:"VE",name:"Veszprem"},38:{code:"ZA",name:"Zala"},39:{code:"ZZ",name:"Zalaegerszeg"}},IS:{1:{code:"AL",name:"Austurland"},2:{code:"HF",name:"Hofuoborgarsvaeoi"},3:{code:"NE",name:"Norourland eystra"},4:{code:"NV",name:"Norourland vestra"},5:{code:"SL",name:"Suourland"},6:{code:"SN",name:"Suournes"},7:{code:"VF",name:"Vestfiroir"},8:{code:"VL",name:"Vesturland"}},IN:{1:{code:"AN",name:"Andaman and Nicobar Islands"},2:{code:"AP",name:"Andhra Pradesh"},3:{code:"AR",name:"Arunachal Pradesh"},4:{code:"AS",name:"Assam"},5:{code:"BI",name:"Bihar"},6:{code:"CH",name:"Chandigarh"},7:{code:"DA",name:"Dadra and Nagar Haveli"},8:{code:"DM",name:"Daman and Diu"},9:{code:"DE",name:"Delhi"},10:{code:"GO",name:"Goa"},11:{code:"GU",name:"Gujarat"},12:{code:"HA",name:"Haryana"},13:{code:"HP",name:"Himachal Pradesh"},14:{code:"JA",name:"Jammu and Kashmir"},15:{code:"KA",name:"Karnataka"},16:{code:"KE",name:"Kerala"},17:{code:"LI",name:"Lakshadweep Islands"},18:{code:"MP",name:"Madhya Pradesh"},19:{code:"MA",name:"Maharashtra"},20:{code:"MN",name:"Manipur"},21:{code:"ME",name:"Meghalaya"},22:{code:"MI",name:"Mizoram"},23:{code:"NA",name:"Nagaland"},24:{code:"OR",name:"Orissa"},25:{code:"PO",name:"Pondicherry"},26:{code:"PU",name:"Punjab"},27:{code:"RA",name:"Rajasthan"},28:{code:"SI",name:"Sikkim"},29:{code:"TN",name:"Tamil Nadu"},30:{code:"TR",name:"Tripura"},31:{code:"UP",name:"Uttar Pradesh"},32:{code:"WB",name:"West Bengal"}},ID:{1:{code:"DA",name:"Daista Aceh"},2:{code:"SU",name:"Sumatera Utara"},3:{code:"SB",name:"Sumatera Barat"},4:{code:"SI",name:"Riau"},5:{code:"JA",name:"Jambi"},6:{code:"SS",name:"Sumatera Selatan"},7:{code:"BE",name:"Bengkulu"},8:{code:"LA",name:"Lampung"},9:{code:"JK",name:"Dki Jakarta"},10:{code:"JB",name:"Jawa Barat"},11:{code:"JT",name:"Jawa Tengah"},12:{code:"DY",name:"Daista Yogyakarta"},13:{code:"JT",name:"Jawa Timur"},14:{code:"KB",name:"Kalimantan Barat"},15:{code:"KT",name:"Kalimantan Tengah"},16:{code:"KI",name:"Kalimantan Timur"},17:{code:"KS",name:"Kalimantan Selatan"},18:{code:"BA",name:"Bali"},19:{code:"NB",name:"Nusa Tenggara Barat"},20:{code:"NT",name:"Nusa Tenggara Timur"},21:{code:"SN",name:"Sulawesi Selatan"},22:{code:"ST",name:"Sulawesi Tengah"},23:{code:"SA",name:"Sulawesi Utara"},24:{code:"SG",name:"Sulawesi Tenggara"},25:{code:"MA",name:"Maluku"},26:{code:"MU",name:"Maluku Utara"},27:{code:"IJ",name:"Irian Jaya Timur"},28:{code:"IT",name:"Irian Jaya Tengah"},29:{code:"IB",name:"Irian Jawa Barat"},30:{code:"BT",name:"Banten"},31:{code:"BB",name:"Bangka Belitung"},32:{code:"GO",name:"Gorontalo"}},IR:{1:{code:"ARD",name:"Ardabil"},2:{code:"BSH",name:"Bushehr"},3:{code:"CMB",name:"Chahar Mahaal and Bakhtiari"},4:{code:"EAZ",name:"East Azarbaijan"},5:{code:"EFH",name:"Esfahan"},6:{code:"FAR",name:"Fars"},7:{code:"GIL",name:"Gilan"},8:{code:"GLS",name:"Golestan"},9:{code:"HMD",name:"Hamadan"},10:{code:"HRM",name:"Hormozgan"},11:{code:"ILM",name:"Ilam"},12:{code:"KBA",name:"Kohkiluyeh and Buyer Ahmad"},13:{code:"KRB",name:"Kerman"},14:{code:"KRD",name:"Kurdistan"},15:{code:"KRM",name:"Kermanshah"},16:{code:"KZT",name:"Khuzestan"},17:{code:"LRS",name:"Lorestan"},18:{code:"MKZ",name:"Markazi"},19:{code:"MZD",name:"Mazandaran"},20:{code:"NKH",name:"North Khorasan"},21:{code:"QAZ",name:"Qazvin"},22:{code:"QOM",name:"Qom"},23:{code:"RKH",name:"Razavi Khorasan"},24:{code:"SBL",name:"Sistan and Baluchistan"},25:{code:"SKH",name:"South Khorasan"},26:{code:"SMN",name:"Semnan"},27:{code:"TEH",name:"Tehran"},28:{code:"WEZ",name:"West Azarbaijan"},29:{code:"YZD",name:"Yazd"},30:{code:"ZAN",name:"Zanjan"}},IQ:{1:{code:"AB",name:"Al Anbar"},2:{code:"AL",name:"Arbil"},3:{code:"BA",name:"Al Basrah"},4:{code:"BB",name:"Babil"},5:{code:"BD",name:"Baghdad"},6:{code:"DH",name:"Dahuk"},7:{code:"DQ",name:"Dhi Qar"},8:{code:"DY",name:"Diyala"},9:{code:"KB",name:"Al Karbala"},10:{code:"MU",name:"Al Muthanna"},11:{code:"MY",name:"Maysan"},12:{code:"NJ",name:"An Najaf"},13:{code:"NN",name:"Ninawa"},14:{code:"QA",name:"Al Qadisyah"},15:{code:"SD",name:"Salah ad Din"},16:{code:"SL",name:"As Sulaymaniyah"},17:{code:"TM",name:"At Ta'mim"},18:{code:"WS",name:"Wasit"}},IE:{1:{code:"CA",name:"Carlow"},2:{code:"CV",name:"Cavan"},3:{code:"CL",name:"Clare"},4:{code:"CO",name:"Cork"},5:{code:"DO",name:"Donegal"},6:{code:"DU",name:"Dublin"},7:{code:"GA",name:"Galway"},8:{code:"KE",name:"Kerry"},9:{code:"KI",name:"Kildare"},10:{code:"KL",name:"Kilkenny"},11:{code:"LA",name:"Laois"},12:{code:"LE",name:"Leitrim"},13:{code:"LI",name:"Limerick"},14:{code:"LO",name:"Longford"},15:{code:"LU",name:"Louth"},16:{code:"MA",name:"Mayo"},17:{code:"ME",name:"Meath"},18:{code:"MO",name:"Monaghan"},19:{code:"OF",name:"Offaly"},20:{code:"RO",name:"Roscommon"},21:{code:"SL",name:"Sligo"},22:{code:"TI",name:"Tipperary"},23:{code:"WA",name:"Waterford"},24:{code:"WE",name:"Westmeath"},25:{code:"WX",name:"Wexford"},26:{code:"WI",name:"Wicklow"}},IL:{1:{code:"BS",name:"Be'er Sheva"},2:{code:"BH",name:"Bika'at Hayarden"},3:{code:"EA",name:"Eilat and Arava"},4:{code:"GA",name:"Galil"},5:{code:"HA",name:"Haifa"},6:{code:"JM",name:"Jehuda Mountains"},7:{code:"JE",name:"Jerusalem"},8:{code:"NE",name:"Negev"},10:{code:"SE",name:"Semaria"},11:{code:"SH",name:"Sharon"},12:{code:"TA",name:"Tel Aviv (Gosh Dan)"}},IT:{1:{code:"AG",name:"Agrigento"},2:{code:"AL",name:"Alessandria"},3:{code:"AN",name:"Ancona"},4:{code:"AO",name:"Aosta"},5:{code:"AR",name:"Arezzo"},6:{code:"AP",name:"Ascoli Piceno"},7:{code:"AT",name:"Asti"},8:{code:"AV",name:"Avellino"},9:{code:"BA",name:"Bari"},10:{code:"BL",name:"Belluno"},11:{code:"BN",name:"Benevento"},12:{code:"BG",name:"Bergamo"},13:{code:"BI",name:"Biella"},14:{code:"BO",name:"Bologna"},15:{code:"BZ",name:"Bolzano"},16:{code:"BS",name:"Brescia"},17:{code:"BR",name:"Brindisi"},18:{code:"CA",name:"Cagliari"},19:{code:"CL",name:"Caltanissetta"},20:{code:"CB",name:"Campobasso"},21:{code:"CE",name:"Caserta"},22:{code:"CT",name:"Catania"},23:{code:"CZ",name:"Catanzaro"},24:{code:"CH",name:"Chieti"},25:{code:"CO",name:"Como"},26:{code:"CS",name:"Cosenza"},27:{code:"CR",name:"Cremona"},28:{code:"KR",name:"Crotone"},29:{code:"CN",name:"Cuneo"},30:{code:"EN",name:"Enna"},31:{code:"FE",name:"Ferrara"},32:{code:"FI",name:"Firenze"},33:{code:"FG",name:"Foggia"},34:{code:"FO",name:"Forlì"},35:{code:"FR",name:"Frosinone"},36:{code:"GE",name:"Genova"},37:{code:"GO",name:"Gorizia"},38:{code:"GR",name:"Grosseto"},39:{code:"IM",name:"Imperia"},40:{code:"IS",name:"Isernia"},41:{code:"AQ",name:"Aquila"},42:{code:"SP",name:"La Spezia"},43:{code:"LT",name:"Latina"},44:{code:"LE",name:"Lecce"},45:{code:"LC",name:"Lecco"},46:{code:"LI",name:"Livorno"},47:{code:"LO",name:"Lodi"},48:{code:"LU",name:"Lucca"},49:{code:"MC",name:"Macerata"},50:{code:"MN",name:"Mantova"},51:{code:"MS",name:"Massa-Carrara"},52:{code:"MT",name:"Matera"},53:{code:"ME",name:"Messina"},54:{code:"MI",name:"Milano"},55:{code:"MO",name:"Modena"},56:{code:"NA",name:"Napoli"},57:{code:"NO",name:"Novara"},58:{code:"NU",name:"Nuoro"},59:{code:"OR",name:"Oristano"},60:{code:"PD",name:"Padova"},61:{code:"PA",name:"Palermo"},62:{code:"PR",name:"Parma"},63:{code:"PG",name:"Perugia"},64:{code:"PV",name:"Pavia"},65:{code:"PU",name:"Pesaro Urbino"},66:{code:"PE",name:"Pescara"},67:{code:"PC",name:"Piacenza"},68:{code:"PI",name:"Pisa"},69:{code:"PT",name:"Pistoia"},70:{code:"PN",name:"Pordenone"},71:{code:"PZ",name:"Potenza"},72:{code:"PO",name:"Prato"},73:{code:"RG",name:"Ragusa"},74:{code:"RA",name:"Ravenna"},75:{code:"RC",name:"Reggio Calabria"},76:{code:"RE",name:"Reggio Emilia"},77:{code:"RI",name:"Rieti"},78:{code:"RN",name:"Rimini"},79:{code:"RM",name:"Roma"},80:{code:"RO",name:"Rovigo"},81:{code:"SA",name:"Salerno"},82:{code:"SS",name:"Sassari"},83:{code:"SV",name:"Savona"},84:{code:"SI",name:"Siena"},85:{code:"SR",name:"Siracusa"},86:{code:"SO",name:"Sondrio"},87:{code:"TA",name:"Taranto"},88:{code:"TE",name:"Teramo"},89:{code:"TR",name:"Terni"},90:{code:"TO",name:"Torino"},91:{code:"TP",name:"Trapani"},92:{code:"TN",name:"Trento"},93:{code:"TV",name:"Treviso"},94:{code:"TS",name:"Trieste"},95:{code:"UD",name:"Udine"},96:{code:"VA",name:"Varese"},97:{code:"VE",name:"Venezia"},98:{code:"VB",name:"Verbania"},99:{code:"VC",name:"Vercelli"},100:{code:"VR",name:"Verona"},101:{code:"VV",name:"Vibo Valentia"},102:{code:"VI",name:"Vicenza"},103:{code:"VT",name:"Viterbo"},104:{code:"CI",name:"Carbonia-Iglesias"},105:{code:"VS",name:"Medio Campidano"},106:{code:"OG",name:"Ogliastra"},107:{code:"OT",name:"Olbia-Tempio"},108:{code:"MB",name:"Monza e Brianza"},109:{code:"FM",name:"Fermo"},110:{code:"BT",name:"Barletta-Andria-Trani"}},JM:{1:{code:"CLA",name:"Clarendon Parish"},2:{code:"HAN",name:"Hanover Parish"},3:{code:"KIN",name:"Kingston Parish"},4:{code:"MAN",name:"Manchester Parish"},5:{code:"POR",name:"Portland Parish"},6:{code:"AND",name:"Saint Andrew Parish"},7:{code:"ANN",name:"Saint Ann Parish"},8:{code:"CAT",name:"Saint Catherine Parish"},9:{code:"ELI",name:"Saint Elizabeth Parish"},10:{code:"JAM",name:"Saint James Parish"},11:{code:"MAR",name:"Saint Mary Parish"},12:{code:"THO",name:"Saint Thomas Parish"},13:{code:"TRL",name:"Trelawny Parish"},14:{code:"WML",name:"Westmoreland Parish"}},JP:{1:{code:"AI",name:"Aichi"},2:{code:"AK",name:"Akita"},3:{code:"AO",name:"Aomori"},4:{code:"CH",name:"Chiba"},5:{code:"EH",name:"Ehime"},6:{code:"FK",name:"Fukui"},7:{code:"FU",name:"Fukuoka"},8:{code:"FS",name:"Fukushima"},9:{code:"GI",name:"Gifu"},10:{code:"GU",name:"Gumma"},11:{code:"HI",name:"Hiroshima"},12:{code:"HO",name:"Hokkaido"},13:{code:"HY",name:"Hyogo"},14:{code:"IB",name:"Ibaraki"},15:{code:"IS",name:"Ishikawa"},16:{code:"IW",name:"Iwate"},17:{code:"KA",name:"Kagawa"},18:{code:"KG",name:"Kagoshima"},19:{code:"KN",name:"Kanagawa"},20:{code:"KO",name:"Kochi"},21:{code:"KU",name:"Kumamoto"},22:{code:"KY",name:"Kyoto"},23:{code:"MI",name:"Mie"},24:{code:"MY",name:"Miyagi"},25:{code:"MZ",name:"Miyazaki"},26:{code:"NA",name:"Nagano"},27:{code:"NG",name:"Nagasaki"},28:{code:"NR",name:"Nara"},29:{code:"NI",name:"Niigata"},30:{code:"OI",name:"Oita"},31:{code:"OK",name:"Okayama"},32:{code:"ON",name:"Okinawa"},33:{code:"OS",name:"Osaka"},34:{code:"SA",name:"Saga"},35:{code:"SI",name:"Saitama"},36:{code:"SH",name:"Shiga"},37:{code:"SM",name:"Shimane"},38:{code:"SZ",name:"Shizuoka"},39:{code:"TO",name:"Tochigi"},40:{code:"TS",name:"Tokushima"},41:{code:"TK",name:"Tokyo"},42:{code:"TT",name:"Tottori"},43:{code:"TY",name:"Toyama"},44:{code:"WA",name:"Wakayama"},45:{code:"YA",name:"Yamagata"},46:{code:"YM",name:"Yamaguchi"},47:{code:"YN",name:"Yamanashi"}},JO:{1:{code:"AM",name:"'Amman"},2:{code:"AJ",name:"Ajlun"},3:{code:"AA",name:"Al'Aqabah"},4:{code:"AB",name:"Al Balqa'"},5:{code:"AK",name:"Al Karak"},6:{code:"AL",name:"Al Mafraq"},7:{code:"AT",name:"At Tafilah"},8:{code:"AZ",name:"Az Zarqa'"},9:{code:"IR",name:"Irbid"},10:{code:"JA",name:"Jarash"},11:{code:"MA",name:"Ma'an"},12:{code:"MD",name:"Madaba"}},KZ:{1:{code:"AL",name:"Almaty"},2:{code:"AC",name:"Almaty City"},3:{code:"AM",name:"Aqmola"},4:{code:"AQ",name:"Aqtobe"},5:{code:"AS",name:"Astana City"},6:{code:"AT",name:"Atyrau"},7:{code:"BA",name:"Batys Qazaqstan"},8:{code:"BY",name:"Bayqongyr City"},9:{code:"MA",name:"Mangghystau"},10:{code:"ON",name:"Ongtustik Qazaqstan"},11:{code:"PA",name:"Pavlodar"},12:{code:"QA",name:"Qaraghandy"},13:{code:"QO",name:"Qostanay"},14:{code:"QY",name:"Qyzylorda"},15:{code:"SH",name:"Shyghys Qazaqstan"},16:{code:"SO",name:"Soltustik Qazaqstan"},17:{code:"ZH",name:"Zhambyl"}},KE:{1:{code:"CE",name:"Central"},2:{code:"CO",name:"Coast"},3:{code:"EA",name:"Eastern"},4:{code:"NA",name:"Nairobi Area"},5:{code:"NE",name:"North Eastern"},6:{code:"NY",name:"Nyanza"},7:{code:"RV",name:"Rift Valley"},8:{code:"WE",name:"Western"}},KI:{1:{code:"AG",name:"Abaiang"},2:{code:"AM",name:"Abemama"},3:{code:"AK",name:"Aranuka"},4:{code:"AO",name:"Arorae"},5:{code:"BA",name:"Banaba"},6:{code:"BE",name:"Beru"},7:{code:"bT",name:"Butaritari"},8:{code:"KA",name:"Kanton"},9:{code:"KR",name:"Kiritimati"},10:{code:"KU",name:"Kuria"},11:{code:"MI",name:"Maiana"},12:{code:"MN",name:"Makin"},13:{code:"ME",name:"Marakei"},14:{code:"NI",name:"Nikunau"},15:{code:"NO",name:"Nonouti"},16:{code:"ON",name:"Onotoa"},17:{code:"TT",name:"Tabiteuea"},18:{code:"TR",name:"Tabuaeran"},19:{code:"TM",name:"Tamana"},20:{code:"TW",name:"Tarawa"},21:{code:"TE",name:"Teraina"}},KP:{1:{code:"CHA",name:"Chagang-do"},2:{code:"HAB",name:"Hamgyong-bukto"},3:{code:"HAN",name:"Hamgyong-namdo"},4:{code:"HWB",name:"Hwanghae-bukto"},5:{code:"HWN",name:"Hwanghae-namdo"},6:{code:"KAN",name:"Kangwon-do"},7:{code:"PYB",name:"P'yongan-bukto"},8:{code:"PYN",name:"P'yongan-namdo"},9:{code:"YAN",name:"Ryanggang-do (Yanggang-do)"},10:{code:"NAJ",name:"Rason Directly Governed City"},11:{code:"PYO",name:"P'yongyang Special City"}},KR:{1:{code:"CO",name:"Ch'ungch'ong-bukto"},2:{code:"CH",name:"Ch'ungch'ong-namdo"},3:{code:"CD",name:"Cheju-do"},4:{code:"CB",name:"Cholla-bukto"},5:{code:"CN",name:"Cholla-namdo"},6:{code:"IG",name:"Inch'on-gwangyoksi"},7:{code:"KA",name:"Kangwon-do"},8:{code:"KG",name:"Kwangju-gwangyoksi"},9:{code:"KD",name:"Kyonggi-do"},10:{code:"KB",name:"Kyongsang-bukto"},11:{code:"KN",name:"Kyongsang-namdo"},12:{code:"PG",name:"Pusan-gwangyoksi"},13:{code:"SO",name:"Soul-t'ukpyolsi"},14:{code:"TA",name:"Taegu-gwangyoksi"},15:{code:"TG",name:"Taejon-gwangyoksi"}},KW:{1:{code:"AL",name:"Al'Asimah"},2:{code:"AA",name:"Al Ahmadi"},3:{code:"AF",name:"Al Farwaniyah"},4:{code:"AJ",name:"Al Jahra'"},5:{code:"HA",name:"Hawalli"}},KG:{1:{code:"GB",name:"Bishkek"},2:{code:"B",name:"Batken"},3:{code:"C",name:"Chu"},4:{code:"J",name:"Jalal-Abad"},5:{code:"N",name:"Naryn"},6:{code:"O",name:"Osh"},7:{code:"T",name:"Talas"},8:{code:"Y",name:"Ysyk-Kol"}},LA:{1:{code:"VT",name:"Vientiane"},2:{code:"AT",name:"Attapu"},3:{code:"BK",name:"Bokeo"},4:{code:"BL",name:"Bolikhamxai"},5:{code:"CH",name:"Champasak"},6:{code:"HO",name:"Houaphan"},7:{code:"KH",name:"Khammouan"},8:{code:"LM",name:"Louang Namtha"},9:{code:"LP",name:"Louangphabang"},10:{code:"OU",name:"Oudomxai"},11:{code:"PH",name:"Phongsali"},12:{code:"SL",name:"Salavan"},13:{code:"SV",name:"Savannakhet"},14:{code:"VI",name:"Vientiane"},15:{code:"XA",name:"Xaignabouli"},16:{code:"XE",name:"Xekong"},17:{code:"XI",name:"Xiangkhoang"},18:{code:"XN",name:"Xaisomboun"}},LV:{1:{code:"AIZ",name:"Aizkraukles Rajons"},2:{code:"ALU",name:"Aluksnes Rajons"},3:{code:"BAL",name:"Balvu Rajons"},4:{code:"BAU",name:"Bauskas Rajons"},5:{code:"CES",name:"Cesu Rajons"},6:{code:"DGR",name:"Daugavpils Rajons"},7:{code:"DOB",name:"Dobeles Rajons"},8:{code:"GUL",name:"Gulbenes Rajons"},9:{code:"JEK",name:"Jekabpils Rajons"},10:{code:"JGR",name:"Jelgavas Rajons"},11:{code:"KRA",name:"Kraslavas Rajons"},12:{code:"KUL",name:"Kuldigas Rajons"},13:{code:"LPR",name:"Liepajas Rajons"},14:{code:"LIM",name:"Limbazu Rajons"},15:{code:"LUD",name:"Ludzas Rajons"},16:{code:"MAD",name:"Madonas Rajons"},17:{code:"OGR",name:"Ogres Rajons"},18:{code:"PRE",name:"Preilu Rajons"},19:{code:"RZR",name:"Rezeknes Rajons"},20:{code:"RGR",name:"Rigas Rajons"},21:{code:"SAL",name:"Saldus Rajons"},22:{code:"TAL",name:"Talsu Rajons"},23:{code:"TUK",name:"Tukuma Rajons"},24:{code:"VLK",name:"Valkas Rajons"},25:{code:"VLM",name:"Valmieras Rajons"},26:{code:"VSR",name:"Ventspils Rajons"},27:{code:"DGV",name:"Daugavpils"},28:{code:"JGV",name:"Jelgava"},29:{code:"JUR",name:"Jurmala"},30:{code:"LPK",name:"Liepaja"},31:{code:"RZK",name:"Rezekne"},32:{code:"RGA",name:"Riga"},33:{code:"VSL",name:"Ventspils"}},LB:{1:{code:"BIN",name:"Bint Jbeil"},2:{code:"HAS",name:"Hasbaya"},3:{code:"MAR",name:"Marjeyoun"},4:{code:"NAB",name:"Nabatieh"},5:{code:"BAA",name:"Baalbek"},6:{code:"HER",name:"Hermel"},7:{code:"RAS",name:"Rashaya"},8:{code:"WES",name:"Western Beqaa"},9:{code:"ZAH",name:"Zahle"},10:{code:"AKK",name:"Akkar"},11:{code:"BAT",name:"Batroun"},12:{code:"BSH",name:"Bsharri"},13:{code:"KOU",name:"Koura"},14:{code:"MIN",name:"Miniyeh-Danniyeh"},15:{code:"TRI",name:"Tripoli"},16:{code:"ZGH",name:"Zgharta"},17:{code:"ALE",name:"Aley"},18:{code:"BAA",name:"Baabda"},19:{code:"BYB",name:"Byblos"},20:{code:"CHO",name:"Chouf"},21:{code:"KES",name:"Kesrwan"},22:{code:"MAT",name:"Matn"},23:{code:"JEZ",name:"Jezzine"},24:{code:"SID",name:"Sidon"},25:{code:"TYR",name:"Tyre"}},LS:{1:{code:"BE",name:"Berea"},2:{code:"BB",name:"Butha-Buthe"},3:{code:"LE",name:"Leribe"},4:{code:"MF",name:"Mafeteng"},5:{code:"MS",name:"Maseru"},6:{code:"MH",name:"Mohale's Hoek"},7:{code:"MK",name:"Mokhotlong"},8:{code:"QN",name:"Qacha's Nek"},9:{code:"QT",name:"Quthing"},10:{code:"TT",name:"Thaba-Tseka"}},LR:{1:{code:"BI",name:"Bomi"},2:{code:"BG",name:"Bong"},3:{code:"GB",name:"Grand Bassa"},4:{code:"CM",name:"Grand Cape Mount"},5:{code:"GG",name:"Grand Gedeh"},6:{code:"GK",name:"Grand Kru"},7:{code:"LO",name:"Lofa"},8:{code:"MG",name:"Margibi"},9:{code:"ML",name:"Maryland"},10:{code:"MS",name:"Montserrado"},11:{code:"NB",name:"Nimba"},12:{code:"RC",name:"River Cess"},13:{code:"SN",name:"Sinoe"}},LY:{1:{code:"AJ",name:"Ajdabiya"},2:{code:"AZ",name:"Al 'Aziziyah"},3:{code:"FA",name:"Al Fatih"},4:{code:"JA",name:"Al Jabal al Akhdar"},5:{code:"JU",name:"Al Jufrah"},6:{code:"KH",name:"Al Khums"},7:{code:"KU",name:"Al Kufrah"},8:{code:"NK",name:"An Nuqat al Khams"},9:{code:"AS",name:"Ash Shati'"},10:{code:"AW",name:"Awbari"},11:{code:"ZA",name:"Az Zawiyah"},12:{code:"BA",name:"Banghazi"},13:{code:"DA",name:"Darnah"},14:{code:"GD",name:"Ghadamis"},15:{code:"GY",name:"Gharyan"},16:{code:"MI",name:"Misratah"},17:{code:"MZ",name:"Murzuq"},18:{code:"SB",name:"Sabha"},19:{code:"SW",name:"Sawfajjin"},20:{code:"SU",name:"Surt"},21:{code:"TL",name:"Tarabulus (Tripoli)"},22:{code:"TH",name:"Tarhunah"},23:{code:"TU",name:"Tubruq"},24:{code:"YA",name:"Yafran"},25:{code:"ZL",name:"Zlitan"}},LI:{1:{code:"V",name:"Vaduz"},2:{code:"A",name:"Schaan"},3:{code:"B",name:"Balzers"},4:{code:"N",name:"Triesen"},5:{code:"E",name:"Eschen"},6:{code:"M",name:"Mauren"},7:{code:"T",name:"Triesenberg"},8:{code:"R",name:"Ruggell"},9:{code:"G",name:"Gamprin"},10:{code:"L",name:"Schellenberg"},11:{code:"P",name:"Planken"}},LT:{1:{code:"AL",name:"Alytus"},2:{code:"KA",name:"Kaunas"},3:{code:"KL",name:"Klaipeda"},4:{code:"MA",name:"Marijampole"},5:{code:"PA",name:"Panevezys"},6:{code:"SI",name:"Siauliai"},7:{code:"TA",name:"Taurage"},8:{code:"TE",name:"Telsiai"},9:{code:"UT",name:"Utena"},10:{code:"VI",name:"Vilnius"}},LU:{1:{code:"DD",name:"Diekirch"},2:{code:"DC",name:"Clervaux"},3:{code:"DR",name:"Redange"},4:{code:"DV",name:"Vianden"},5:{code:"DW",name:"Wiltz"},6:{code:"GG",name:"Grevenmacher"},7:{code:"GE",name:"Echternach"},8:{code:"GR",name:"Remich"},9:{code:"LL",name:"Luxembourg"},10:{code:"LC",name:"Capellen"},11:{code:"LE",name:"Esch-sur-Alzette"},12:{code:"LM",name:"Mersch"}},MO:{1:{code:"OLF",name:"Our Lady Fatima Parish"},2:{code:"ANT",name:"St. Anthony Parish"},3:{code:"LAZ",name:"St. Lazarus Parish"},4:{code:"CAT",name:"Cathedral Parish"},5:{code:"LAW",name:"St. Lawrence Parish"}},MK:{1:{code:"AER",name:"Aerodrom"},2:{code:"ARA",name:"Aračinovo"},3:{code:"BER",name:"Berovo"},4:{code:"BIT",name:"Bitola"},5:{code:"BOG",name:"Bogdanci"},6:{code:"BOG",name:"Bogovinje"},7:{code:"BOS",name:"Bosilovo"},8:{code:"BRV",name:"Brvenica"},9:{code:"BUT",name:"Butel"},10:{code:"ČAI",name:"Čair"},11:{code:"ČAš",name:"Čaška"},12:{code:"CEN",name:"Centar"},13:{code:"CEN",name:"Centar Župa"},14:{code:"Češ",name:"Češinovo-Obleš"},15:{code:"ČUČ",name:"Čučer-Sandevo"},16:{code:"DEB",name:"Debar"},17:{code:"DEB",name:"Debarca"},18:{code:"DEL",name:"Delčevo"},19:{code:"DEM",name:"Demir Hisar"},20:{code:"DEM",name:"Demir Kapija"},21:{code:"DOL",name:"Dolneni"},22:{code:"DRU",name:"Drugovo"},23:{code:"GAZ",name:"Gazi Baba"},24:{code:"GEV",name:"Gevgelija"},25:{code:"GJO",name:"Gjorče Petrov"},26:{code:"GOS",name:"Gostivar"},27:{code:"GRA",name:"Gradsko"},28:{code:"ILI",name:"Ilinden"},29:{code:"JEG",name:"Jegunovce"},30:{code:"KAR",name:"Karbinci"},31:{code:"KAR",name:"Karpoš"},32:{code:"KAV",name:"Kavadarci"},33:{code:"KIČ",name:"Kičevo"},34:{code:"KIS",name:"Kisela Voda"},35:{code:"KOč",name:"Kočani"},36:{code:"KON",name:"Konče"},37:{code:"KRA",name:"Kratovo"},38:{code:"KRI",name:"Kriva Palanka"},39:{code:"KRI",name:"Krivogaštani"},40:{code:"KRU",name:"Kruševo"},41:{code:"KUM",name:"Kumanovo"},42:{code:"LIP",name:"Lipkovo"},43:{code:"LOZ",name:"Lozovo"},44:{code:"MAK",name:"Makedonska Kamenica"},45:{code:"MAK",name:"Makedonski Brod"},46:{code:"MAV",name:"Mavrovo and Rostuša"},47:{code:"MOG",name:"Mogila"},48:{code:"NEG",name:"Negotino"},49:{code:"NOV",name:"Novaci"},50:{code:"NOV",name:"Novo Selo"},51:{code:"OHR",name:"Ohrid"},52:{code:"OSL",name:"Oslomej"},53:{code:"PEH",name:"Pehčevo"},54:{code:"PET",name:"Petrovec"},55:{code:"PLA",name:"Plasnica"},56:{code:"PRI",name:"Prilep"},57:{code:"PRO",name:"Probištip"},58:{code:"RAD",name:"Radoviš"},59:{code:"RAN",name:"Rankovce"},60:{code:"RES",name:"Resen"},61:{code:"ROS",name:"Rosoman"},62:{code:"SAR",name:"Saraj"},63:{code:"SOP",name:"Sopište"},64:{code:"STA",name:"Star Dojran"},65:{code:"STA",name:"Staro Nagoričane"},66:{code:"ŠTI",name:"Štip"},67:{code:"STR",name:"Struga"},68:{code:"STR",name:"Strumica"},69:{code:"STU",name:"Studeničani"},70:{code:"ŠUT",name:"Šuto Orizari"},71:{code:"SVE",name:"Sveti Nikole"},72:{code:"TEA",name:"Tearce"},73:{code:"TET",name:"Tetovo"},74:{code:"VAL",name:"Valandovo"},75:{code:"VAS",name:"Vasilevo"},76:{code:"VEL",name:"Veles"},77:{code:"VEV",name:"Vevčani"},78:{code:"VIN",name:"Vinica"},79:{code:"VRA",name:"Vraneštica"},80:{code:"VRA",name:"Vrapčište"},81:{code:"ZAJ",name:"Zajas"},82:{code:"ZEL",name:"Zelenikovo"},83:{code:"ŽEL",name:"Želino"},84:{code:"ZRN",name:"Zrnovci"}},MG:{1:{code:"AN",name:"Antananarivo"},2:{code:"AS",name:"Antsiranana"},3:{code:"FN",name:"Fianarantsoa"},4:{code:"MJ",name:"Mahajanga"},5:{code:"TM",name:"Toamasina"},6:{code:"TL",name:"Toliara"}},MW:{1:{code:"BLK",name:"Balaka"},2:{code:"BLT",name:"Blantyre"},3:{code:"CKW",name:"Chikwawa"},4:{code:"CRD",name:"Chiradzulu"},5:{code:"CTP",name:"Chitipa"},6:{code:"DDZ",name:"Dedza"},7:{code:"DWA",name:"Dowa"},8:{code:"KRG",name:"Karonga"},9:{code:"KSG",name:"Kasungu"},10:{code:"LKM",name:"Likoma"},11:{code:"LLG",name:"Lilongwe"},12:{code:"MCG",name:"Machinga"},13:{code:"MGC",name:"Mangochi"},14:{code:"MCH",name:"Mchinji"},15:{code:"MLJ",name:"Mulanje"},16:{code:"MWZ",name:"Mwanza"},17:{code:"MZM",name:"Mzimba"},18:{code:"NTU",name:"Ntcheu"},19:{code:"NKB",name:"Nkhata Bay"},20:{code:"NKH",name:"Nkhotakota"},21:{code:"NSJ",name:"Nsanje"},22:{code:"NTI",name:"Ntchisi"},23:{code:"PHL",name:"Phalombe"},24:{code:"RMP",name:"Rumphi"},25:{code:"SLM",name:"Salima"},26:{code:"THY",name:"Thyolo"},27:{code:"ZBA",name:"Zomba"}},MY:{1:{code:"Johor",name:"Johor"},2:{code:"Kedah",name:"Kedah"},3:{code:"Kelantan",name:"Kelantan"},4:{code:"Labuan",name:"Labuan"},5:{code:"Melaka",name:"Melaka"},6:{code:"Negeri Sembilan",name:"Negeri Sembilan"},7:{code:"Pahang",name:"Pahang"},8:{code:"Perak",name:"Perak"},9:{code:"Perlis",name:"Perlis"},10:{code:"Pulau Pinang",name:"Pulau Pinang"},11:{code:"Sabah",name:"Sabah"},12:{code:"Sarawak",name:"Sarawak"},13:{code:"Selangor",name:"Selangor"},14:{code:"Terengganu",name:"Terengganu"},15:{code:"Kuala Lumpur",name:"Kuala Lumpur"}},MV:{1:{code:"AAD",name:"Ari Atoll Dheknu"},2:{code:"AAU",name:"Ari Atoll Uthuru"},3:{code:"ADD",name:"Addu"},4:{code:"FAA",name:"Faadhippolhu"},5:{code:"FEA",name:"Felidhe Atoll"},6:{code:"FMU",name:"Fua Mulaku"},7:{code:"HAD",name:"Huvadhu Atoll Dhekunu"},8:{code:"HAU",name:"Huvadhu Atoll Uthuru"},9:{code:"HDH",name:"Hadhdhunmathi"},10:{code:"KLH",name:"Kolhumadulu"},11:{code:"MAA",name:"Male Atoll"},12:{code:"MAD",name:"Maalhosmadulu Dhekunu"},13:{code:"MAU",name:"Maalhosmadulu Uthuru"},14:{code:"MLD",name:"Miladhunmadulu Dhekunu"},15:{code:"MLU",name:"Miladhunmadulu Uthuru"},16:{code:"MUA",name:"Mulaku Atoll"},17:{code:"NAD",name:"Nilandhe Atoll Dhekunu"},18:{code:"NAU",name:"Nilandhe Atoll Uthuru"},19:{code:"THD",name:"Thiladhunmathi Dhekunu"},20:{code:"THU",name:"Thiladhunmathi Uthuru"}},ML:{1:{code:"GA",name:"Gao"},2:{code:"KY",name:"Kayes"},3:{code:"KD",name:"Kidal"},4:{code:"KL",name:"Koulikoro"},5:{code:"MP",name:"Mopti"},6:{code:"SG",name:"Segou"},7:{code:"SK",name:"Sikasso"},8:{code:"TB",name:"Tombouctou"},9:{code:"CD",name:"Bamako Capital District"}},MT:{1:{code:"ATT",name:"Attard"},2:{code:"BAL",name:"Balzan"},3:{code:"BGU",name:"Birgu"},4:{code:"BKK",name:"Birkirkara"},5:{code:"BRZ",name:"Birzebbuga"},6:{code:"BOR",name:"Bormla"},7:{code:"DIN",name:"Dingli"},8:{code:"FGU",name:"Fgura"},9:{code:"FLO",name:"Floriana"},10:{code:"GDJ",name:"Gudja"},11:{code:"GZR",name:"Gzira"},12:{code:"GRG",name:"Gargur"},13:{code:"GXQ",name:"Gaxaq"},14:{code:"HMR",name:"Hamrun"},15:{code:"IKL",name:"Iklin"},16:{code:"ISL",name:"Isla"},17:{code:"KLK",name:"Kalkara"},18:{code:"KRK",name:"Kirkop"},19:{code:"LIJ",name:"Lija"},20:{code:"LUQ",name:"Luqa"},21:{code:"MRS",name:"Marsa"},22:{code:"MKL",name:"Marsaskala"},23:{code:"MXL",name:"Marsaxlokk"},24:{code:"MDN",name:"Mdina"},25:{code:"MEL",name:"Melliea"},26:{code:"MGR",name:"Mgarr"},27:{code:"MST",name:"Mosta"},28:{code:"MQA",name:"Mqabba"},29:{code:"MSI",name:"Msida"},30:{code:"MTF",name:"Mtarfa"},31:{code:"NAX",name:"Naxxar"},32:{code:"PAO",name:"Paola"},33:{code:"PEM",name:"Pembroke"},34:{code:"PIE",name:"Pieta"},35:{code:"QOR",name:"Qormi"},36:{code:"QRE",name:"Qrendi"},37:{code:"RAB",name:"Rabat"},38:{code:"SAF",name:"Safi"},39:{code:"SGI",name:"San Giljan"},40:{code:"SLU",name:"Santa Lucija"},41:{code:"SPB",name:"San Pawl il-Bahar"},42:{code:"SGW",name:"San Gwann"},43:{code:"SVE",name:"Santa Venera"},44:{code:"SIG",name:"Siggiewi"},45:{code:"SLM",name:"Sliema"},46:{code:"SWQ",name:"Swieqi"},47:{code:"TXB",name:"Ta Xbiex"},48:{code:"TRX",name:"Tarxien"},49:{code:"VLT",name:"Valletta"},50:{code:"XGJ",name:"Xgajra"},51:{code:"ZBR",name:"Zabbar"},52:{code:"ZBG",name:"Zebbug"},53:{code:"ZJT",name:"Zejtun"},54:{code:"ZRQ",name:"Zurrieq"},55:{code:"FNT",name:"Fontana"},56:{code:"GHJ",name:"Ghajnsielem"},57:{code:"GHR",name:"Gharb"},58:{code:"GHS",name:"Ghasri"},59:{code:"KRC",name:"Kercem"},60:{code:"MUN",name:"Munxar"},61:{code:"NAD",name:"Nadur"},62:{code:"QAL",name:"Qala"},63:{code:"VIC",name:"Victoria"},64:{code:"SLA",name:"San Lawrenz"},65:{code:"SNT",name:"Sannat"},66:{code:"ZAG",name:"Xagra"},67:{code:"XEW",name:"Xewkija"},68:{code:"ZEB",name:"Zebbug"}},MH:{1:{code:"ALG",name:"Ailinginae"},2:{code:"ALL",name:"Ailinglaplap"},3:{code:"ALK",name:"Ailuk"},4:{code:"ARN",name:"Arno"},5:{code:"AUR",name:"Aur"},6:{code:"BKR",name:"Bikar"},7:{code:"BKN",name:"Bikini"},8:{code:"BKK",name:"Bokak"},9:{code:"EBN",name:"Ebon"},10:{code:"ENT",name:"Enewetak"},11:{code:"EKB",name:"Erikub"},12:{code:"JBT",name:"Jabat"},13:{code:"JLT",name:"Jaluit"},14:{code:"JEM",name:"Jemo"},15:{code:"KIL",name:"Kili"},16:{code:"KWJ",name:"Kwajalein"},17:{code:"LAE",name:"Lae"},18:{code:"LIB",name:"Lib"},19:{code:"LKP",name:"Likiep"},20:{code:"MJR",name:"Majuro"},21:{code:"MLP",name:"Maloelap"},22:{code:"MJT",name:"Mejit"},23:{code:"MIL",name:"Mili"},24:{code:"NMK",name:"Namorik"},25:{code:"NAM",name:"Namu"},26:{code:"RGL",name:"Rongelap"},27:{code:"RGK",name:"Rongrik"},28:{code:"TOK",name:"Toke"},29:{code:"UJA",name:"Ujae"},30:{code:"UJL",name:"Ujelang"},31:{code:"UTK",name:"Utirik"},32:{code:"WTH",name:"Wotho"},33:{code:"WTJ",name:"Wotje"}},MQ:{1:{code:"LAJ",name:"L'Ajoupa-Bouillon"},2:{code:"LES",name:"Les Anses-d'Arlet"},3:{code:"BAS",name:"Basse-Pointe"},4:{code:"BEL",name:"Bellefontaine"},5:{code:"LE",name:"Le Carbet"},6:{code:"CAS",name:"Case-Pilote"},7:{code:"LE",name:"Le Diamant"},8:{code:"DUC",name:"Ducos"},9:{code:"FON",name:"Fonds-Saint-Denis"},10:{code:"FOR",name:"Fort-De-France"},11:{code:"LE",name:"Le François"},12:{code:"GRA",name:"Grand'Rivière"},13:{code:"GRO",name:"Gros-Morne"},14:{code:"LE",name:"Le Lamentin"},15:{code:"LE",name:"Le Lorrain"},16:{code:"MAC",name:"Macouba"},17:{code:"LE",name:"Le Marigot"},18:{code:"LE",name:"Le Marin"},19:{code:"LE",name:"Le Morne-Rouge"},20:{code:"LE",name:"Le Morne-Vert"},21:{code:"LE",name:"Le Prêcheur"},22:{code:"RIV",name:"Rivière-Pilote"},23:{code:"RIV",name:"Rivière-Salée"},24:{code:"LE",name:"Le Robert"},25:{code:"SAI",name:"Sainte-Anne"},26:{code:"SAI",name:"Sainte-Luce"},27:{code:"SAI",name:"Sainte-Marie"},28:{code:"SAI",name:"Saint-Esprit"},29:{code:"SAI",name:"Saint-Joseph"},30:{code:"SAI",name:"Saint-Pierre"},31:{code:"SCH",name:"Schœlcher"},32:{code:"LA",name:"La Trinité"},33:{code:"LES",name:"Les Trois-Îlets"},34:{code:"LE",name:"Le Vauclin"}},MR:{1:{code:"AD",name:"Adrar"},2:{code:"AS",name:"Assaba"},3:{code:"BR",name:"Brakna"},4:{code:"DN",name:"Dakhlet Nouadhibou"},5:{code:"GO",name:"Gorgol"},6:{code:"GM",name:"Guidimaka"},7:{code:"HC",name:"Hodh Ech Chargui"},8:{code:"HG",name:"Hodh El Gharbi"},9:{code:"IN",name:"Inchiri"},10:{code:"TA",name:"Tagant"},11:{code:"TZ",name:"Tiris Zemmour"},12:{code:"TR",name:"Trarza"},13:{code:"NO",name:"Nouakchott"}},MU:{1:{code:"AG",name:"Agalega Islands"},2:{code:"BL",name:"Black River"},3:{code:"BR",name:"Beau Bassin-Rose Hill"},4:{code:"CC",name:"Cargados Carajos Shoals (Saint B)"},5:{code:"CU",name:"Curepipe"},6:{code:"FL",name:"Flacq"},7:{code:"GP",name:"Grand Port"},8:{code:"MO",name:"Moka"},9:{code:"PA",name:"Pamplemousses"},10:{code:"PL",name:"Port Louis"},11:{code:"PU",name:"Port Louis"},12:{code:"PW",name:"Plaines Wilhems"},13:{code:"QB",name:"Quatre Bornes"},14:{code:"RO",name:"Rodrigues"},15:{code:"RR",name:"Riviere du Rempart"},16:{code:"SA",name:"Savanne"},17:{code:"VP",name:"Vacoas-Phoenix"}},YT:{1:{code:"DZA",name:"Dzaoudzi"},2:{code:"PAM",name:"Pamandzi"},3:{code:"MAM",name:"Mamoudzou"},4:{code:"DEM",name:"Dembeni"},5:{code:"BAN",name:"Bandrele"},6:{code:"KAN",name:"Kani-Kéli"},7:{code:"BOU",name:"Bouéni"},8:{code:"CHI",name:"Chirongui"},9:{code:"SAD",name:"Sada"},10:{code:"OUA",name:"Ouangani"},11:{code:"CHI",name:"Chiconi"},12:{code:"TSI",name:"Tsingoni"},13:{code:"MTS",name:"M'Tsangamouji"},14:{code:"ACO",name:"Acoua"},15:{code:"MTS",name:"Mtsamboro"},16:{code:"BAN",name:"Bandraboua"},17:{code:"KOU",name:"Koungou"}},MX:{1:{code:"AGU",name:"Aguascalientes"},2:{code:"BCN",name:"Baja California Norte"},3:{code:"BCS",name:"Baja California Sur"},4:{code:"CAM",name:"Campeche"},5:{code:"CHP",name:"Chiapas"},6:{code:"CHH",name:"Chihuahua"},7:{code:"COA",name:"Coahuila de Zaragoza"},8:{code:"COL",name:"Colima"},9:{code:"DIF",name:"Distrito Federal"},10:{code:"DUR",name:"Durango"},11:{code:"GUA",name:"Guanajuato"},12:{code:"GRO",name:"Guerrero"},13:{code:"HID",name:"Hidalgo"},14:{code:"JAL",name:"Jalisco"},15:{code:"MEX",name:"Mexico"},16:{code:"MIC",name:"Michoacan de Ocampo"},17:{code:"MOR",name:"Morelos"},18:{code:"NAY",name:"Nayarit"},19:{code:"NLE",name:"Nuevo Leon"},20:{code:"OAX",name:"Oaxaca"},21:{code:"PUE",name:"Puebla"},22:{code:"QUE",name:"Queretaro de Arteaga"},23:{code:"ROO",name:"Quintana Roo"},24:{code:"SLP",name:"San Luis Potosi"},25:{code:"SIN",name:"Sinaloa"},26:{code:"SON",name:"Sonora"},27:{code:"TAB",name:"Tabasco"},28:{code:"TAM",name:"Tamaulipas"},29:{code:"TLA",name:"Tlaxcala"},30:{code:"VER",name:"Veracruz-Llave"},31:{code:"YUC",name:"Yucatan"},32:{code:"ZAC",name:"Zacatecas"}},FM:{1:{code:"C",name:"Chuuk"},2:{code:"K",name:"Kosrae"},3:{code:"P",name:"Pohnpei"},4:{code:"Y",name:"Yap"}},MD:{1:{code:"GA",name:"Gagauzia"},2:{code:"CU",name:"Chisinau"},3:{code:"BA",name:"Balti"},4:{code:"CA",name:"Cahul"},5:{code:"ED",name:"Edinet"},6:{code:"LA",name:"Lapusna"},7:{code:"OR",name:"Orhei"},8:{code:"SO",name:"Soroca"},9:{code:"TI",name:"Tighina"},10:{code:"UN",name:"Ungheni"},11:{code:"SN",name:"Stânga Nistrului"}},MC:{1:{code:"FV",name:"Fontvieille"},2:{code:"LC",name:"La Condamine"},3:{code:"MV",name:"Monaco-Ville"},4:{code:"MC",name:"Monte-Carlo"}},MN:{1:{code:"1",name:"Ulanbaatar"},2:{code:"035",name:"Orhon"},3:{code:"037",name:"Darhan uul"},4:{code:"039",name:"Hentiy"},5:{code:"041",name:"Hovsgol"},6:{code:"043",name:"Hovd"},7:{code:"046",name:"Uvs"},8:{code:"047",name:"Tov"},9:{code:"049",name:"Selenge"},10:{code:"051",name:"Suhbaatar"},11:{code:"053",name:"Omnogovi"},12:{code:"055",name:"Ovorhangay"},13:{code:"057",name:"Dzavhan"},14:{code:"059",name:"DundgovL"},15:{code:"061",name:"Dornod"},16:{code:"063",name:"Dornogov"},17:{code:"064",name:"Govi-Sumber"},18:{code:"065",name:"Govi-Altay"},19:{code:"067",name:"Bulgan"},20:{code:"069",name:"Bayanhongor"},21:{code:"071",name:"Bayan-Olgiy"},22:{code:"073",name:"Arhangay"}},MS:{1:{code:"A",name:"Saint Anthony"},2:{code:"G",name:"Saint Georges"},3:{code:"P",name:"Saint Peter"}},MA:{1:{code:"AGD",name:"Agadir"},2:{code:"HOC",name:"Al Hoceima"},3:{code:"AZI",name:"Azilal"},4:{code:"BME",name:"Beni Mellal"},5:{code:"BSL",name:"Ben Slimane"},6:{code:"BLM",name:"Boulemane"},7:{code:"CBL",name:"Casablanca"},8:{code:"CHA",name:"Chaouen"},9:{code:"EJA",name:"El Jadida"},10:{code:"EKS",name:"El Kelaa des Sraghna"},11:{code:"ERA",name:"Er Rachidia"},12:{code:"ESS",name:"Essaouira"},13:{code:"FES",name:"Fes"},14:{code:"FIG",name:"Figuig"},15:{code:"GLM",name:"Guelmim"},16:{code:"IFR",name:"Ifrane"},17:{code:"KEN",name:"Kenitra"},18:{code:"KHM",name:"Khemisset"},19:{code:"KHN",name:"Khenifra"},20:{code:"KHO",name:"Khouribga"},21:{code:"LYN",name:"Laayoune"},22:{code:"LAR",name:"Larache"},23:{code:"MRK",name:"Marrakech"},24:{code:"MKN",name:"Meknes"},25:{code:"NAD",name:"Nador"},26:{code:"ORZ",name:"Ouarzazate"},27:{code:"OUJ",name:"Oujda"},28:{code:"RSA",name:"Rabat-Sale"},29:{code:"SAF",name:"Safi"},30:{code:"SET",name:"Settat"},31:{code:"SKA",name:"Sidi Kacem"},32:{code:"TGR",name:"Tangier"},33:{code:"TAN",name:"Tan-Tan"},34:{code:"TAO",name:"Taounate"},35:{code:"TRD",name:"Taroudannt"},36:{code:"TAT",name:"Tata"},37:{code:"TAZ",name:"Taza"},38:{code:"TET",name:"Tetouan"},39:{code:"TIZ",name:"Tiznit"},40:{code:"ADK",name:"Ad Dakhla"},41:{code:"BJD",name:"Boujdour"},42:{code:"ESM",name:"Es Smara"}},MZ:{1:{code:"CD",name:"Cabo Delgado"},2:{code:"GZ",name:"Gaza"},3:{code:"IN",name:"Inhambane"},4:{code:"MN",name:"Manica"},5:{code:"MC",name:"Maputo (city)"},6:{code:"MP",name:"Maputo"},7:{code:"NA",name:"Nampula"},8:{code:"NI",name:"Niassa"},9:{code:"SO",name:"Sofala"},10:{code:"TE",name:"Tete"},11:{code:"ZA",name:"Zambezia"}},MM:{1:{code:"AY",name:"Ayeyarwady"},2:{code:"BG",name:"Bago"},3:{code:"MG",name:"Magway"},4:{code:"MD",name:"Mandalay"},5:{code:"SG",name:"Sagaing"},6:{code:"TN",name:"Tanintharyi"},7:{code:"YG",name:"Yangon"},8:{code:"CH",name:"Chin State"},9:{code:"KC",name:"Kachin State"},10:{code:"KH",name:"Kayah State"},11:{code:"KN",name:"Kayin State"},12:{code:"MN",name:"Mon State"},13:{code:"RK",name:"Rakhine State"},14:{code:"SH",name:"Shan State"}},NA:{1:{code:"CA",name:"Caprivi"},2:{code:"ER",name:"Erongo"},3:{code:"HA",name:"Hardap"},4:{code:"KR",name:"Karas"},5:{code:"KV",name:"Kavango"},6:{code:"KH",name:"Khomas"},7:{code:"KU",name:"Kunene"},8:{code:"OW",name:"Ohangwena"},9:{code:"OK",name:"Omaheke"},10:{code:"OT",name:"Omusati"},11:{code:"ON",name:"Oshana"},12:{code:"OO",name:"Oshikoto"},13:{code:"OJ",name:"Otjozondjupa"}},NR:{1:{code:"AO",name:"Aiwo"},2:{code:"AA",name:"Anabar"},3:{code:"AT",name:"Anetan"},4:{code:"AI",name:"Anibare"},5:{code:"BA",name:"Baiti"},6:{code:"BO",name:"Boe"},7:{code:"BU",name:"Buada"},8:{code:"DE",name:"Denigomodu"},9:{code:"EW",name:"Ewa"},10:{code:"IJ",name:"Ijuw"},11:{code:"ME",name:"Meneng"},12:{code:"NI",name:"Nibok"},13:{code:"UA",name:"Uaboe"},14:{code:"YA",name:"Yaren"}},NP:{1:{code:"BA",name:"Bagmati"},2:{code:"BH",name:"Bheri"},3:{code:"DH",name:"Dhawalagiri"},4:{code:"GA",name:"Gandaki"},5:{code:"JA",name:"Janakpur"},6:{code:"KA",name:"Karnali"},7:{code:"KO",name:"Kosi"},8:{code:"LU",name:"Lumbini"},9:{code:"MA",name:"Mahakali"},10:{code:"ME",name:"Mechi"},11:{code:"NA",name:"Narayani"},12:{code:"RA",name:"Rapti"},13:{code:"SA",name:"Sagarmatha"},14:{code:"SE",name:"Seti"}},NL:{1:{code:"DR",name:"Drenthe"},2:{code:"FL",name:"Flevoland"},3:{code:"FR",name:"Friesland"},4:{code:"GE",name:"Gelderland"},5:{code:"GR",name:"Groningen"},6:{code:"LI",name:"Limburg"},7:{code:"NB",name:"Noord Brabant"},8:{code:"NH",name:"Noord Holland"},9:{code:"OV",name:"Overijssel"},10:{code:"UT",name:"Utrecht"},11:{code:"ZE",name:"Zeeland"},12:{code:"ZH",name:"Zuid Holland"}},AN:{1:{code:"BON",name:"Bonaire"},2:{code:"CUR",name:"Curaçao"},3:{code:"SAB",name:"Saba"},4:{code:"SEU",name:"Sint Eustatius"},5:{code:"SMA",name:"Sint Maarten"}},NC:{1:{code:"L",name:"Iles Loyaute"},2:{code:"N",name:"Nord"},3:{code:"S",name:"Sud"}},NZ:{1:{code:"AUK",name:"Auckland"},2:{code:"BOP",name:"Bay of Plenty"},3:{code:"CAN",name:"Canterbury"},4:{code:"COR",name:"Coromandel"},5:{code:"GIS",name:"Gisborne"},6:{code:"FIO",name:"Fiordland"},7:{code:"HKB",name:"Hawke's Bay"},8:{code:"MBH",name:"Marlborough"},9:{code:"MWT",name:"Manawatu-Wanganui"},10:{code:"MCM",name:"Mt Cook-Mackenzie"},11:{code:"NSN",name:"Nelson"},12:{code:"NTL",name:"Northland"},13:{code:"OTA",name:"Otago"},14:{code:"STL",name:"Southland"},15:{code:"TKI",name:"Taranaki"},16:{code:"WGN",name:"Wellington"},17:{code:"WKO",name:"Waikato"},18:{code:"WAI",name:"Wairprarapa"},19:{code:"WTC",name:"West Coast"}},NI:{1:{code:"AN",name:"Atlantico Norte"},2:{code:"AS",name:"Atlantico Sur"},3:{code:"BO",name:"Boaco"},4:{code:"CA",name:"Carazo"},5:{code:"CI",name:"Chinandega"},6:{code:"CO",name:"Chontales"},7:{code:"ES",name:"Esteli"},8:{code:"GR",name:"Granada"},9:{code:"JI",name:"Jinotega"},10:{code:"LE",name:"Leon"},11:{code:"MD",name:"Madriz"},12:{code:"MN",name:"Managua"},13:{code:"MS",name:"Masaya"},14:{code:"MT",name:"Matagalpa"},15:{code:"NS",name:"Nuevo Segovia"},16:{code:"RS",name:"Rio San Juan"},17:{code:"RI",name:"Rivas"}},NE:{1:{code:"AG",name:"Agadez"},2:{code:"DF",name:"Diffa"},3:{code:"DS",name:"Dosso"},4:{code:"MA",name:"Maradi"},5:{code:"NM",name:"Niamey"},6:{code:"TH",name:"Tahoua"},7:{code:"TL",name:"Tillaberi"},8:{code:"ZD",name:"Zinder"}},NG:{1:{code:"AB",name:"Abia"},2:{code:"CT",name:"Abuja Federal Capital Territory"},3:{code:"AD",name:"Adamawa"},4:{code:"AK",name:"Akwa Ibom"},5:{code:"AN",name:"Anambra"},6:{code:"BC",name:"Bauchi"},7:{code:"BY",name:"Bayelsa"},8:{code:"BN",name:"Benue"},9:{code:"BO",name:"Borno"},10:{code:"CR",name:"Cross River"},11:{code:"DE",name:"Delta"},12:{code:"EB",name:"Ebonyi"},13:{code:"ED",name:"Edo"},14:{code:"EK",name:"Ekiti"},15:{code:"EN",name:"Enugu"},16:{code:"GO",name:"Gombe"},17:{code:"IM",name:"Imo"},18:{code:"JI",name:"Jigawa"},19:{code:"KD",name:"Kaduna"},20:{code:"KN",name:"Kano"},21:{code:"KT",name:"Katsina"},22:{code:"KE",name:"Kebbi"},23:{code:"KO",name:"Kogi"},24:{code:"KW",name:"Kwara"},25:{code:"LA",name:"Lagos"},26:{code:"NA",name:"Nassarawa"},27:{code:"NI",name:"Niger"},28:{code:"OG",name:"Ogun"},29:{code:"ONG",name:"Ondo"},30:{code:"OS",name:"Osun"},31:{code:"OY",name:"Oyo"},32:{code:"PL",name:"Plateau"},33:{code:"RI",name:"Rivers"},34:{code:"SO",name:"Sokoto"},35:{code:"TA",name:"Taraba"},36:{code:"YO",name:"Yobe"},37:{code:"ZA",name:"Zamfara"}},NU:{1:{code:"MAK",name:"Makefu"},2:{code:"TUA",name:"Tuapa"},3:{code:"NAM",name:"Namukulu"},4:{code:"HIK",name:"Hikutavake"},5:{code:"TOI",name:"Toi"},6:{code:"MUT",name:"Mutalau"},7:{code:"LAK",name:"Lakepa"},8:{code:"LIK",name:"Liku"},9:{code:"HAK",name:"Hakupu"},10:{code:"VAI",name:"Vaiea"},11:{code:"AVA",name:"Avatele"},12:{code:"TAM",name:"Tamakautoga"},13:{code:"ALO",name:"Alofi South"},14:{code:"ALO",name:"Alofi North"}},NF:{1:{code:"NOR",name:"Norfolk Island"}},MP:{1:{code:"N",name:"Northern Islands"},2:{code:"R",name:"Rota"},3:{code:"S",name:"Saipan"},4:{code:"T",name:"Tinian"}},NO:{1:{code:"AK",name:"Akershus"},2:{code:"AA",name:"Aust-Agder"},3:{code:"BU",name:"Buskerud"},4:{code:"FM",name:"Finnmark"},5:{code:"HM",name:"Hedmark"},6:{code:"HL",name:"Hordaland"},7:{code:"MR",name:"Møre og Romsdal"},8:{code:"NL",name:"Nordland"},9:{code:"NT",name:"Nord-Trøndelag"},10:{code:"OP",name:"Oppland"},11:{code:"OL",name:"Oslo"},12:{code:"RL",name:"Rogaland"},13:{code:"SJ",name:"Sogn og Fjordane"},14:{code:"ST",name:"Sør-Trøndelag"},15:{code:"SV",name:"Svalbard"},16:{code:"TM",name:"Telemark"},17:{code:"TR",name:"Troms"},18:{code:"VA",name:"Vest-Agder"},19:{code:"VF",name:"Vestfold"},20:{code:"OF",name:"Østfold"}},OM:{1:{code:"DA",name:"Ad Dakhiliyah"},2:{code:"BA",name:"Al Batinah"},3:{code:"WU",name:"Al Wusta"},4:{code:"SH",name:"Ash Sharqiyah"},5:{code:"ZA",name:"Az Zahirah"},6:{code:"MA",name:"Masqat"},7:{code:"MU",name:"Musandam"},8:{code:"ZU",name:"Zufar"}},PK:{1:{code:"B",name:"Balochistan"},2:{code:"T",name:"Federally Administered Tribal Ar"},3:{code:"I",name:"Islamabad Capital Territory"},4:{code:"N",name:"North-West Frontier"},5:{code:"P",name:"Punjab"},6:{code:"S",name:"Sindh"}},PW:{1:{code:"AM",name:"Aimeliik"},2:{code:"AR",name:"Airai"},3:{code:"AN",name:"Angaur"},4:{code:"HA",name:"Hatohobei"},5:{code:"KA",name:"Kayangel"},6:{code:"KO",name:"Koror"},7:{code:"ME",name:"Melekeok"},8:{code:"NA",name:"Ngaraard"},9:{code:"NG",name:"Ngarchelong"},10:{code:"ND",name:"Ngardmau"},11:{code:"NT",name:"Ngatpang"},12:{code:"NC",name:"Ngchesar"},13:{code:"NR",name:"Ngeremlengui"},14:{code:"NW",name:"Ngiwal"},15:{code:"PE",name:"Peleliu"},16:{code:"SO",name:"Sonsorol"}},PA:{1:{code:"BT",name:"Bocas del Toro"},2:{code:"CH",name:"Chiriqui"},3:{code:"CC",name:"Cocle"},4:{code:"CL",name:"Colon"},5:{code:"DA",name:"Darien"},6:{code:"HE",name:"Herrera"},7:{code:"LS",name:"Los Santos"},8:{code:"PA",name:"Panama"},9:{code:"SB",name:"San Blas"},10:{code:"VG",name:"Veraguas"}},PG:{1:{code:"BV",name:"Bougainville"},2:{code:"CE",name:"Central"},3:{code:"CH",name:"Chimbu"},4:{code:"EH",name:"Eastern Highlands"},5:{code:"EB",name:"East New Britain"},6:{code:"ES",name:"East Sepik"},7:{code:"EN",name:"Enga"},8:{code:"GU",name:"Gulf"},9:{code:"MD",name:"Madang"},10:{code:"MN",name:"Manus"},11:{code:"MB",name:"Milne Bay"},12:{code:"MR",name:"Morobe"},13:{code:"NC",name:"National Capital"},14:{code:"NI",name:"New Ireland"},15:{code:"NO",name:"Northern"},16:{code:"SA",name:"Sandaun"},17:{code:"SH",name:"Southern Highlands"},18:{code:"WE",name:"Western"},19:{code:"WH",name:"Western Highlands"},20:{code:"WB",name:"West New Britain"}},PY:{1:{code:"AG",name:"Alto Paraguay"},2:{code:"AN",name:"Alto Parana"},3:{code:"AM",name:"Amambay"},4:{code:"AS",name:"Asuncion"},5:{code:"BO",name:"Boqueron"},6:{code:"CG",name:"Caaguazu"},7:{code:"CZ",name:"Caazapa"},8:{code:"CN",name:"Canindeyu"},9:{code:"CE",name:"Central"},10:{code:"CC",name:"Concepcion"},11:{code:"CD",name:"Cordillera"},12:{code:"GU",name:"Guaira"},13:{code:"IT",name:"Itapua"},14:{code:"MI",name:"Misiones"},15:{code:"NE",name:"Neembucu"},16:{code:"PA",name:"Paraguari"},17:{code:"PH",name:"Presidente Hayes"},18:{code:"SP",name:"San Pedro"}},PE:{1:{code:"AM",name:"Amazonas"},2:{code:"AN",name:"Ancash"},3:{code:"AP",name:"Apurimac"},4:{code:"AR",name:"Arequipa"},5:{code:"AY",name:"Ayacucho"},6:{code:"CJ",name:"Cajamarca"},7:{code:"CL",name:"Callao"},8:{code:"CU",name:"Cusco"},9:{code:"HV",name:"Huancavelica"},10:{code:"HO",name:"Huanuco"},11:{code:"IC",name:"Ica"},12:{code:"JU",name:"Junin"},13:{code:"LD",name:"La Libertad"},14:{code:"LY",name:"Lambayeque"},15:{code:"LI",name:"Lima"},16:{code:"LO",name:"Loreto"},17:{code:"MD",name:"Madre de Dios"},18:{code:"MO",name:"Moquegua"},19:{code:"PA",name:"Pasco"},20:{code:"PI",name:"Piura"},21:{code:"PU",name:"Puno"},22:{code:"SM",name:"San Martin"},23:{code:"TA",name:"Tacna"},24:{code:"TU",name:"Tumbes"},25:{code:"UC",name:"Ucayali"}},PH:{1:{code:"ABR",name:"Abra"},2:{code:"ANO",name:"Agusan del Norte"},3:{code:"ASU",name:"Agusan del Sur"},4:{code:"AKL",name:"Aklan"},5:{code:"ALB",name:"Albay"},6:{code:"ANT",name:"Antique"},7:{code:"APY",name:"Apayao"},8:{code:"AUR",name:"Aurora"},9:{code:"BAS",name:"Basilan"},10:{code:"BTA",name:"Bataan"},11:{code:"BTE",name:"Batanes"},12:{code:"BTG",name:"Batangas"},13:{code:"BLR",name:"Biliran"},14:{code:"BEN",name:"Benguet"},15:{code:"BOL",name:"Bohol"},16:{code:"BUK",name:"Bukidnon"},17:{code:"BUL",name:"Bulacan"},18:{code:"CAG",name:"Cagayan"},19:{code:"CNO",name:"Camarines Norte"},20:{code:"CSU",name:"Camarines Sur"},21:{code:"CAM",name:"Camiguin"},22:{code:"CAP",name:"Capiz"},23:{code:"CAT",name:"Catanduanes"},24:{code:"CAV",name:"Cavite"},25:{code:"CEB",name:"Cebu"},26:{code:"CMP",name:"Compostela"},27:{code:"DNO",name:"Davao del Norte"},28:{code:"DSU",name:"Davao del Sur"},29:{code:"DOR",name:"Davao Oriental"},30:{code:"ESA",name:"Eastern Samar"},31:{code:"GUI",name:"Guimaras"},32:{code:"IFU",name:"Ifugao"},33:{code:"INO",name:"Ilocos Norte"},34:{code:"ISU",name:"Ilocos Sur"},35:{code:"ILO",name:"Iloilo"},36:{code:"ISA",name:"Isabela"},37:{code:"KAL",name:"Kalinga"},38:{code:"LAG",name:"Laguna"},39:{code:"LNO",name:"Lanao del Norte"},40:{code:"LSU",name:"Lanao del Sur"},41:{code:"UNI",name:"La Union"},42:{code:"LEY",name:"Leyte"},43:{code:"MAG",name:"Maguindanao"},44:{code:"MRN",name:"Marinduque"},45:{code:"MSB",name:"Masbate"},46:{code:"MIC",name:"Mindoro Occidental"},47:{code:"MIR",name:"Mindoro Oriental"},48:{code:"MSC",name:"Misamis Occidental"},49:{code:"MOR",name:"Misamis Oriental"},50:{code:"MOP",name:"Mountain"},51:{code:"NOC",name:"Negros Occidental"},52:{code:"NOR",name:"Negros Oriental"},53:{code:"NCT",name:"North Cotabato"},54:{code:"NSM",name:"Northern Samar"},55:{code:"NEC",name:"Nueva Ecija"},56:{code:"NVZ",name:"Nueva Vizcaya"},57:{code:"PLW",name:"Palawan"},58:{code:"PMP",name:"Pampanga"},59:{code:"PNG",name:"Pangasinan"},60:{code:"QZN",name:"Quezon"},61:{code:"QRN",name:"Quirino"},62:{code:"RIZ",name:"Rizal"},63:{code:"ROM",name:"Romblon"},64:{code:"SMR",name:"Samar"},65:{code:"SRG",name:"Sarangani"},66:{code:"SQJ",name:"Siquijor"},67:{code:"SRS",name:"Sorsogon"},68:{code:"SCO",name:"South Cotabato"},69:{code:"SLE",name:"Southern Leyte"},70:{code:"SKU",name:"Sultan Kudarat"},71:{code:"SLU",name:"Sulu"},72:{code:"SNO",name:"Surigao del Norte"},73:{code:"SSU",name:"Surigao del Sur"},74:{code:"TAR",name:"Tarlac"},75:{code:"TAW",name:"Tawi-Tawi"},76:{code:"ZBL",name:"Zambales"},77:{code:"ZNO",name:"Zamboanga del Norte"},78:{code:"ZSU",name:"Zamboanga del Sur"},79:{code:"ZSI",name:"Zamboanga Sibugay"}},PN:{1:{code:"PIT",name:"Pitcairn Island"}},PL:{1:{code:"DO",name:"Dolnośląskie"},2:{code:"KP",name:"Kujawsko-Pomorskie"},3:{code:"LL",name:"Lubelskie"},4:{code:"LU",name:"Lubuskie"},5:{code:"LO",name:"Łódzkie"},6:{code:"ML",name:"Małopolskie"},7:{code:"MZ",name:"Mazowieckie"},8:{code:"OP",name:"Opolskie"},9:{code:"PP",name:"Podkarpackie"},10:{code:"PL",name:"Podlaskie"},11:{code:"PM",name:"Pomorskie"},12:{code:"SL",name:"Śląskie"},13:{code:"SW",name:"Świętokrzyskie"},14:{code:"WM",name:"Warmińsko-Mazurskie"},15:{code:"WP",name:"Wielkopolskie"},16:{code:"ZA",name:"Zachodniopomorskie"}},PT:{1:{code:"AC",name:"Açores"},2:{code:"AV",name:"Aveiro"},3:{code:"BE",name:"Beja"},4:{code:"BR",name:"Braga"},5:{code:"BA",name:"Bragança"},6:{code:"CB",name:"Castelo Branco"},7:{code:"CO",name:"Coimbra"},8:{code:"EV",name:"évora"},9:{code:"FA",name:"Faro"},10:{code:"GU",name:"Guarda"},12:{code:"LE",name:"Leiria"},13:{code:"LI",name:"Lisboa"},14:{code:"ME",name:"Madeira"},15:{code:"PO",name:"Portalegre"},16:{code:"PR",name:"Porto"},17:{code:"SA",name:"Santarém"},18:{code:"SE",name:"SetÚbal"},19:{code:"VC",name:"Viana do Castelo"},20:{code:"VR",name:"Vila Real"},21:{code:"VI",name:"Viseu"}},PR:{1:{code:"A-A",name:"Añasco"},2:{code:"ADJ",name:"Adjuntas"},3:{code:"AGU",name:"Aguada"},4:{code:"AGU",name:"Aguadilla"},5:{code:"AGU",name:"Aguas Buenas"},6:{code:"AIB",name:"Aibonito"},7:{code:"ARE",name:"Arecibo"},8:{code:"ARR",name:"Arroyo"},9:{code:"BAR",name:"Barceloneta"},10:{code:"BAR",name:"Barranquitas"},11:{code:"BAY",name:"Bayamón"},12:{code:"CAB",name:"Cabo Rojo"},13:{code:"CAG",name:"Caguas"},14:{code:"CAM",name:"Camuy"},15:{code:"CAN",name:"Canóvanas"},16:{code:"CAR",name:"Carolina"},17:{code:"CAT",name:"Cataño"},18:{code:"CAY",name:"Cayey"},19:{code:"CEI",name:"Ceiba"},20:{code:"CIA",name:"Ciales"},21:{code:"CID",name:"Cidra"},22:{code:"COA",name:"Coamo"},23:{code:"COM",name:"Comerío"},24:{code:"COR",name:"Corozal"},25:{code:"CUL",name:"Culebra"},26:{code:"DOR",name:"Dorado"},27:{code:"FAJ",name:"Fajardo"},28:{code:"FLO",name:"Florida"},29:{code:"GUA",name:"Guayama"},30:{code:"GUA",name:"Guayanilla"},31:{code:"GUA",name:"Guaynabo"},32:{code:"GUR",name:"Gurabo"},33:{code:"GU¡",name:"Guánica"},34:{code:"HAT",name:"Hatillo"},35:{code:"HOR",name:"Hormigueros"},36:{code:"HUM",name:"Humacao"},37:{code:"ISA",name:"Isabela"},38:{code:"JAY",name:"Jayuya"},39:{code:"JUA",name:"Juana Díaz"},40:{code:"JUN",name:"Juncos"},41:{code:"LAJ",name:"Lajas"},42:{code:"LAR",name:"Lares"},43:{code:"LAS",name:"Las Marías"},44:{code:"LAS",name:"Las Piedras"},45:{code:"LOÕ",name:"Loíza"},46:{code:"LUQ",name:"Luquillo"},47:{code:"MAN",name:"Manatí"},48:{code:"MAR",name:"Maricao"},49:{code:"MAU",name:"Maunabo"},50:{code:"MAY",name:"Mayagüez"},51:{code:"MOC",name:"Moca"},52:{code:"MOR",name:"Morovis"},53:{code:"NAG",name:"Naguabo"},54:{code:"NAR",name:"Naranjito"},55:{code:"ORO",name:"Orocovis"},56:{code:"PAT",name:"Patillas"},57:{code:"PE-",name:"Peñuelas"},58:{code:"PON",name:"Ponce"},59:{code:"QUE",name:"Quebradillas"},60:{code:"RIN",name:"Rincón"},61:{code:"RIO",name:"Rio Grande"},62:{code:"SAB",name:"Sabana Grande"},63:{code:"SAL",name:"Salinas"},64:{code:"SAN",name:"San Germàn"},65:{code:"SAN",name:"San Juan"},66:{code:"SAN",name:"San Lorenzo"},67:{code:"SAN",name:"San Sebastiàn"},68:{code:"SAN",name:"Santa Isabel"},69:{code:"TOA",name:"Toa Alta"},70:{code:"TOA",name:"Toa Baja"},71:{code:"TRU",name:"Trujillo Alto"},72:{code:"UTU",name:"Utuado"},73:{code:"VEG",name:"Vega Alta"},74:{code:"VEG",name:"Vega Baja"},75:{code:"VIE",name:"Vieques"},76:{code:"VIL",name:"Villalba"},77:{code:"YAB",name:"Yabucoa"},78:{code:"YAU",name:"Yauco"}},QA:{1:{code:"DW",name:"Ad Dawhah"},2:{code:"GW",name:"Al Ghuwayriyah"},3:{code:"JM",name:"Al Jumayliyah"},4:{code:"KR",name:"Al Khawr"},5:{code:"WK",name:"Al Wakrah"},6:{code:"RN",name:"Ar Rayyan"},7:{code:"JB",name:"Jarayan al Batinah"},8:{code:"MS",name:"Madinat ash Shamal"},9:{code:"UD",name:"Umm Sa'id"},10:{code:"UL",name:"Umm Salal"}},RO:{1:{code:"AB",name:"Alba"},2:{code:"AR",name:"Arad"},3:{code:"AG",name:"Arges"},4:{code:"BC",name:"Bacau"},5:{code:"BH",name:"Bihor"},6:{code:"BN",name:"Bistrita-Nasaud"},7:{code:"BT",name:"Botosani"},8:{code:"BV",name:"Brasov"},9:{code:"BR",name:"Braila"},10:{code:"B",name:"Bucuresti"},11:{code:"BZ",name:"Buzau"},12:{code:"CS",name:"Caras-Severin"},13:{code:"CL",name:"Calarasi"},14:{code:"CJ",name:"Cluj"},15:{code:"CT",name:"Constanta"},16:{code:"CV",name:"Covasna"},17:{code:"DB",name:"Dimbovita"},18:{code:"DJ",name:"Dolj"},19:{code:"GL",name:"Galati"},20:{code:"GR",name:"Giurgiu"},21:{code:"GJ",name:"Gorj"},22:{code:"HR",name:"Harghita"},23:{code:"HD",name:"Hunedoara"},24:{code:"IL",name:"Ialomita"},25:{code:"IS",name:"Iasi"},26:{code:"IF",name:"Ilfov"},27:{code:"MM",name:"Maramures"},28:{code:"MH",name:"Mehedinti"},29:{code:"MS",name:"Mures"},30:{code:"NT",name:"Neamt"},31:{code:"OT",name:"Olt"},32:{code:"PH",name:"Prahova"},33:{code:"SM",name:"Satu-Mare"},34:{code:"SJ",name:"Salaj"},35:{code:"SB",name:"Sibiu"},36:{code:"SV",name:"Suceava"},37:{code:"TR",name:"Teleorman"},38:{code:"TM",name:"Timis"},39:{code:"TL",name:"Tulcea"},40:{code:"VS",name:"Vaslui"},41:{code:"VL",name:"Valcea"},42:{code:"VN",name:"Vrancea"}},RU:{1:{code:"AB",name:"Abakan"},2:{code:"AG",name:"Aginskoye"},3:{code:"AN",name:"Anadyr"},4:{code:"AR",name:"Arkahangelsk"},5:{code:"AS",name:"Astrakhan"},6:{code:"BA",name:"Barnaul"},7:{code:"BE",name:"Belgorod"},8:{code:"BI",name:"Birobidzhan"},9:{code:"BL",name:"Blagoveshchensk"},10:{code:"BR",name:"Bryansk"},11:{code:"CH",name:"Cheboksary"},12:{code:"CL",name:"Chelyabinsk"},13:{code:"CR",name:"Cherkessk"},14:{code:"CI",name:"Chita"},15:{code:"DU",name:"Dudinka"},16:{code:"EL",name:"Elista"},17:{code:"GO",name:"Gomo-Altaysk"},18:{code:"GA",name:"Gorno-Altaysk"},19:{code:"GR",name:"Groznyy"},20:{code:"IR",name:"Irkutsk"},21:{code:"IV",name:"Ivanovo"},22:{code:"IZ",name:"Izhevsk"},23:{code:"KA",name:"Kalinigrad"},24:{code:"KL",name:"Kaluga"},25:{code:"KS",name:"Kasnodar"},26:{code:"KZ",name:"Kazan"},27:{code:"KE",name:"Kemerovo"},28:{code:"KH",name:"Khabarovsk"},29:{code:"KM",name:"Khanty-Mansiysk"},30:{code:"KO",name:"Kostroma"},31:{code:"KR",name:"Krasnodar"},32:{code:"KN",name:"Krasnoyarsk"},33:{code:"KU",name:"Kudymkar"},34:{code:"KG",name:"Kurgan"},35:{code:"KK",name:"Kursk"},36:{code:"KY",name:"Kyzyl"},37:{code:"LI",name:"Lipetsk"},38:{code:"MA",name:"Magadan"},39:{code:"MK",name:"Makhachkala"},40:{code:"MY",name:"Maykop"},41:{code:"MO",name:"Moscow"},42:{code:"MU",name:"Murmansk"},43:{code:"NA",name:"Nalchik"},44:{code:"NR",name:"Naryan Mar"},45:{code:"NZ",name:"Nazran"},46:{code:"NI",name:"Nizhniy Novgorod"},47:{code:"NO",name:"Novgorod"},48:{code:"NV",name:"Novosibirsk"},49:{code:"OM",name:"Omsk"},50:{code:"OR",name:"Orel"},51:{code:"OE",name:"Orenburg"},52:{code:"PA",name:"Palana"},53:{code:"PE",name:"Penza"},54:{code:"PR",name:"Perm"},55:{code:"PK",name:"Petropavlovsk-Kamchatskiy"},56:{code:"PT",name:"Petrozavodsk"},57:{code:"PS",name:"Pskov"},58:{code:"RO",name:"Rostov-na-Donu"},59:{code:"RY",name:"Ryazan"},60:{code:"SL",name:"Salekhard"},61:{code:"SA",name:"Samara"},62:{code:"SR",name:"Saransk"},63:{code:"SV",name:"Saratov"},64:{code:"SM",name:"Smolensk"},65:{code:"SP",name:"St. Petersburg"},66:{code:"ST",name:"Stavropol"},67:{code:"SY",name:"Syktyvkar"},68:{code:"TA",name:"Tambov"},69:{code:"TO",name:"Tomsk"},70:{code:"TU",name:"Tula"},71:{code:"TR",name:"Tura"},72:{code:"TV",name:"Tver"},73:{code:"TY",name:"Tyumen"},74:{code:"UF",name:"Ufa"},75:{code:"UL",name:"Ul'yanovsk"},76:{code:"UU",name:"Ulan-Ude"},77:{code:"US",name:"Ust'-Ordynskiy"},78:{code:"VL",name:"Vladikavkaz"},79:{code:"VA",name:"Vladimir"},80:{code:"VV",name:"Vladivostok"},81:{code:"VG",name:"Volgograd"},82:{code:"VD",name:"Vologda"},83:{code:"VO",name:"Voronezh"},84:{code:"VY",name:"Vyatka"},85:{code:"YA",name:"Yakutsk"},86:{code:"YR",name:"Yaroslavl"},87:{code:"YE",name:"Yekaterinburg"},88:{code:"YO",name:"Yoshkar-Ola"}},RW:{1:{code:"BU",name:"Butare"},2:{code:"BY",name:"Byumba"},3:{code:"CY",name:"Cyangugu"},4:{code:"GK",name:"Gikongoro"},5:{code:"GS",name:"Gisenyi"},6:{code:"GT",name:"Gitarama"},7:{code:"KG",name:"Kibungo"},8:{code:"KY",name:"Kibuye"},9:{code:"KR",name:"Kigali Rurale"},10:{code:"KV",name:"Kigali-ville"},11:{code:"RU",name:"Ruhengeri"},12:{code:"UM",name:"Umutara"}},KN:{1:{code:"CCN",name:"Christ Church Nichola Town"},2:{code:"SAS",name:"Saint Anne Sandy Point"},3:{code:"SGB",name:"Saint George Basseterre"},4:{code:"SGG",name:"Saint George Gingerland"},5:{code:"SJW",name:"Saint James Windward"},6:{code:"SJC",name:"Saint John Capesterre"},7:{code:"SJF",name:"Saint John Figtree"},8:{code:"SMC",name:"Saint Mary Cayon"},9:{code:"CAP",name:"Saint Paul Capesterre"},10:{code:"CHA",name:"Saint Paul Charlestown"},11:{code:"SPB",name:"Saint Peter Basseterre"},12:{code:"STL",name:"Saint Thomas Lowland"},13:{code:"STM",name:"Saint Thomas Middle Island"},14:{code:"TPP",name:"Trinity Palmetto Point"}},LC:{1:{code:"AR",name:"Anse-la-Raye"},2:{code:"CA",name:"Castries"},3:{code:"CH",name:"Choiseul"},4:{code:"DA",name:"Dauphin"},5:{code:"DE",name:"Dennery"},6:{code:"GI",name:"Gros-Islet"},7:{code:"LA",name:"Laborie"},8:{code:"MI",name:"Micoud"},9:{code:"PR",name:"Praslin"},10:{code:"SO",name:"Soufriere"},11:{code:"VF",name:"Vieux-Fort"}},VC:{1:{code:"C",name:"Charlotte"},2:{code:"R",name:"Grenadines"},3:{code:"A",name:"Saint Andrew"},4:{code:"D",name:"Saint David"},5:{code:"G",name:"Saint George"},6:{code:"P",name:"Saint Patrick"}},WS:{1:{code:"AN",name:"A'ana"},2:{code:"AI",name:"Aiga-i-le-Tai"},3:{code:"AT",name:"Atua"},4:{code:"FA",name:"Fa'asaleleaga"},5:{code:"GE",name:"Gaga'emauga"},6:{code:"GF",name:"Gagaifomauga"},7:{code:"PA",name:"Palauli"},8:{code:"SA",name:"Satupa'itea"},9:{code:"TU",name:"Tuamasaga"},10:{code:"VF",name:"Va'a-o-Fonoti"},11:{code:"VS",name:"Vaisigano"}},SM:{1:{code:"AC",name:"Acquaviva"},2:{code:"BM",name:"Borgo Maggiore"},3:{code:"CH",name:"Chiesanuova"},4:{code:"DO",name:"Domagnano"},5:{code:"FA",name:"Faetano"},6:{code:"FI",name:"Fiorentino"},7:{code:"MO",name:"Montegiardino"},8:{code:"SM",name:"Citta di San Marino"},9:{code:"SE",name:"Serravalle"}},ST:{1:{code:"S",name:"Sao Tome"},2:{code:"P",name:"Principe"}},SA:{1:{code:"BH",name:"Al Bahah"},2:{code:"HS",name:"Al Hudud ash Shamaliyah"},3:{code:"JF",name:"Al Jawf"},4:{code:"MD",name:"Al Madinah"},5:{code:"QS",name:"Al Qasim"},6:{code:"RD",name:"Ar Riyad"},7:{code:"AQ",name:"Ash Sharqiyah (Eastern)"},8:{code:"AS",name:"'Asir"},9:{code:"HL",name:"Ha'il"},10:{code:"JZ",name:"Jizan"},11:{code:"ML",name:"Makkah"},12:{code:"NR",name:"Najran"},13:{code:"TB",name:"Tabuk"}},SN:{1:{code:"DA",name:"Dakar"},2:{code:"DI",name:"Diourbel"},3:{code:"FA",name:"Fatick"},4:{code:"KA",name:"Kaolack"},5:{code:"KO",name:"Kolda"},6:{code:"LO",name:"Louga"},7:{code:"MA",name:"Matam"},8:{code:"SL",name:"Saint-Louis"},9:{code:"TA",name:"Tambacounda"},10:{code:"TH",name:"Thies"},11:{code:"ZI",name:"Ziguinchor"}},SC:{1:{code:"AP",name:"Anse aux Pins"},2:{code:"AB",name:"Anse Boileau"},3:{code:"AE",name:"Anse Etoile"},4:{code:"AL",name:"Anse Louis"},5:{code:"AR",name:"Anse Royale"},6:{code:"BL",name:"Baie Lazare"},7:{code:"BS",name:"Baie Sainte Anne"},8:{code:"BV",name:"Beau Vallon"},9:{code:"BA",name:"Bel Air"},10:{code:"BO",name:"Bel Ombre"},11:{code:"CA",name:"Cascade"},12:{code:"GL",name:"Glacis"},13:{code:"GM",name:"Grand' Anse (on Mahe)"},14:{code:"GP",name:"Grand' Anse (on Praslin)"},15:{code:"DG",name:"La Digue"},16:{code:"RA",name:"La Riviere Anglaise"},17:{code:"MB",name:"Mont Buxton"},18:{code:"MF",name:"Mont Fleuri"},19:{code:"PL",name:"Plaisance"},20:{code:"PR",name:"Pointe La Rue"},21:{code:"PG",name:"Port Glaud"},22:{code:"SL",name:"Saint Louis"},23:{code:"TA",name:"Takamaka"}},SL:{1:{code:"E",name:"Eastern"},2:{code:"N",name:"Northern"},3:{code:"S",name:"Southern"},4:{code:"W",name:"Western"}},SK:{1:{code:"BA",name:"Banskobystricky"},2:{code:"BR",name:"Bratislavsky"},3:{code:"KO",name:"Kosicky"},4:{code:"NI",name:"Nitriansky"},5:{code:"PR",name:"Presovsky"},6:{code:"TC",name:"Trenciansky"},7:{code:"TV",name:"Trnavsky"},8:{code:"ZI",name:"Zilinsky"}},SI:{1:{code:"4",name:"Štajerska"},2:{code:"2A",name:"Gorenjska"},3:{code:"5",name:"Prekmurje"},4:{code:"3",name:"Koroška"},5:{code:"2B",name:"Notranjska"},6:{code:"1",name:"Primorska"},7:{code:"2C",name:"Dolenjska"},8:{code:"2C",name:"Bela Krajina"}},SB:{1:{code:"CE",name:"Central"},2:{code:"CH",name:"Choiseul"},3:{code:"GC",name:"Guadalcanal"},4:{code:"HO",name:"Honiara"},5:{code:"IS",name:"Isabel"},6:{code:"MK",name:"Makira"},7:{code:"ML",name:"Malaita"},8:{code:"RB",name:"Rennell and Bellona"},9:{code:"TM",name:"Temotu"},10:{code:"WE",name:"Western"}},SO:{1:{code:"AW",name:"Awdal"},2:{code:"BK",name:"Bakool"},3:{code:"BN",name:"Banaadir"},4:{code:"BR",name:"Bari"},5:{code:"BY",name:"Bay"},6:{code:"GA",name:"Galguduud"},7:{code:"GE",name:"Gedo"},8:{code:"HI",name:"Hiiraan"},9:{code:"JD",name:"Jubbada Dhexe"},10:{code:"JH",name:"Jubbada Hoose"},11:{code:"MU",name:"Mudug"},12:{code:"NU",name:"Nugaal"},13:{code:"SA",name:"Sanaag"},14:{code:"SD",name:"Shabeellaha Dhexe"},15:{code:"SH",name:"Shabeellaha Hoose"},16:{code:"SL",name:"Sool"},17:{code:"TO",name:"Togdheer"},18:{code:"WG",name:"Woqooyi Galbeed"}},ZA:{1:{code:"EC",name:"Eastern Cape"},2:{code:"FS",name:"Free State"},3:{code:"GT",name:"Gauteng"},4:{code:"KN",name:"KwaZulu-Natal"},5:{code:"LP",name:"Limpopo"},6:{code:"MP",name:"Mpumalanga"},7:{code:"NW",name:"North West"},8:{code:"NC",name:"Northern Cape"},9:{code:"WC",name:"Western Cape"}},ES:{1:{code:"CA",name:"La Coruña"},2:{code:"AL",name:"Álava"},3:{code:"AB",name:"Albacete"},4:{code:"AC",name:"Alicante"},5:{code:"AM",name:"Almeria"},6:{code:"AS",name:"Asturias"},7:{code:"AV",name:"Ávila"},8:{code:"BJ",name:"Badajoz"},9:{code:"IB",name:"Baleares"},10:{code:"BA",name:"Barcelona"},11:{code:"BU",name:"Burgos"},12:{code:"CC",name:"Cáceres"},13:{code:"CZ",name:"Cádiz"},14:{code:"CT",name:"Cantabria"},15:{code:"CL",name:"Castellón"},16:{code:"CE",name:"Ceuta"},17:{code:"CR",name:"Ciudad Real"},18:{code:"CD",name:"Córdoba"},19:{code:"CU",name:"Cuenca"},20:{code:"GI",name:"Gerona"},21:{code:"GD",name:"Granada"},22:{code:"GJ",name:"Guadalajara"},23:{code:"GP",name:"Guipúzcoa"},24:{code:"HL",name:"Huelva"},25:{code:"HS",name:"Huesca"},26:{code:"JN",name:"Jaén"},27:{code:"RJ",name:"La Rioja"},28:{code:"PM",name:"Las Palmas"},29:{code:"LE",name:"León"},30:{code:"LL",name:"Lérida"},31:{code:"LG",name:"Lugo"},32:{code:"MD",name:"Madrid"},33:{code:"MA",name:"Málaga"},34:{code:"ML",name:"Melilla"},35:{code:"MU",name:"Murcia"},36:{code:"NV",name:"Navarra"},37:{code:"OU",name:"Ourense"},38:{code:"PL",name:"Palencia"},39:{code:"PO",name:"Pontevedra"},40:{code:"SL",name:"Salamanca"},41:{code:"SC",name:"Santa Cruz de Tenerife"},42:{code:"SG",name:"Segovia"},43:{code:"SV",name:"Sevilla"},44:{code:"SO",name:"Soria"},45:{code:"TA",name:"Tarragona"},46:{code:"TE",name:"Teruel"},47:{code:"TO",name:"Toledo"},48:{code:"VC",name:"Valencia"},49:{code:"VD",name:"Valladolid"},50:{code:"VZ",name:"Vizcaya"},51:{code:"ZM",name:"Zamora"},52:{code:"ZR",name:"Zaragoza"}},LK:{1:{code:"CE",name:"Central"},2:{code:"EA",name:"Eastern"},3:{code:"NC",name:"North Central"},4:{code:"NO",name:"Northern"},5:{code:"NW",name:"North Western"},6:{code:"SA",name:"Sabaragamuwa"},7:{code:"SO",name:"Southern"},8:{code:"UV",name:"Uva"},9:{code:"WE",name:"Western"}},SH:{1:{code:"A",name:"Ascension"},2:{code:"S",name:"Saint Helena"},3:{code:"T",name:"Tristan da Cunha"}},PM:{1:{code:"P",name:"Saint Pierre"},2:{code:"M",name:"Miquelon"}},SD:{1:{code:"ANL",name:"A'ali an Nil"},2:{code:"BAM",name:"Al Bahr al Ahmar"},3:{code:"BRT",name:"Al Buhayrat"},4:{code:"JZR",name:"Al Jazirah"},5:{code:"KRT",name:"Al Khartum"},6:{code:"QDR",name:"Al Qadarif"},7:{code:"WDH",name:"Al Wahdah"},8:{code:"ANB",name:"An Nil al Abyad"},9:{code:"ANZ",name:"An Nil al Azraq"},10:{code:"ASH",name:"Ash Shamaliyah"},11:{code:"BJA",name:"Bahr al Jabal"},12:{code:"GIS",name:"Gharb al Istiwa'iyah"},13:{code:"GBG",name:"Gharb Bahr al Ghazal"},14:{code:"GDA",name:"Gharb Darfur"},15:{code:"GKU",name:"Gharb Kurdufan"},16:{code:"JDA",name:"Janub Darfur"},17:{code:"JKU",name:"Janub Kurdufan"},18:{code:"JQL",name:"Junqali"},19:{code:"KSL",name:"Kassala"},20:{code:"NNL",name:"Nahr an Nil"},21:{code:"SBG",name:"Shamal Bahr al Ghazal"},22:{code:"SDA",name:"Shamal Darfur"},23:{code:"SKU",name:"Shamal Kurdufan"},24:{code:"SIS",name:"Sharq al Istiwa'iyah"},25:{code:"SNR",name:"Sinnar"},26:{code:"WRB",name:"Warab"}},SR:{1:{code:"BR",name:"Brokopondo"},2:{code:"CM",name:"Commewijne"},3:{code:"CR",name:"Coronie"},4:{code:"MA",name:"Marowijne"},5:{code:"NI",name:"Nickerie"},6:{code:"PA",name:"Para"},7:{code:"PM",name:"Paramaribo"},9:{code:"SA",name:"Saramacca"},10:{code:"SI",name:"Sipaliwini"},11:{code:"WA",name:"Wanica"}},SZ:{1:{code:"H",name:"Hhohho"},2:{code:"L",name:"Lubombo"},3:{code:"M",name:"Manzini"},4:{code:"S",name:"Shishelweni"}},SE:{1:{code:"K",name:"Blekinge"},2:{code:"W",name:"Dalama"},3:{code:"I",name:"Gotland"},4:{code:"X",name:"Gävleborg"},5:{code:"N",name:"Halland"},6:{code:"Z",name:"Jämtland"},7:{code:"F",name:"Jönköping"},8:{code:"H",name:"Kalmar"},9:{code:"G",name:"Kronoberg"},10:{code:"BD",name:"Norrbotten"},11:{code:"M",name:"Skåne"},12:{code:"AB",name:"Stockholm"},13:{code:"D",name:"Södermanland"},14:{code:"C",name:"Uppsala"},15:{code:"S",name:"Värmland"},16:{code:"AC",name:"Västerbotten"},17:{code:"Y",name:"Västernorrland"},18:{code:"U",name:"Västmanland"},19:{code:"O",name:"Västra Götaland"},20:{code:"T",name:"Örebro"},21:{code:"E",name:"Östergötland"}},CH:{1:{code:"AG",name:"Aargau"},2:{code:"AR",name:"Appenzell Ausserrhoden"},3:{code:"AI",name:"Appenzell Innerrhoden"},4:{code:"BS",name:"Basel-Stadt"},5:{code:"BL",name:"Basel-Landschaft"},6:{code:"BE",name:"Bern"},7:{code:"FR",name:"Fribourg"},8:{code:"GE",name:"Genève"},9:{code:"GL",name:"Glarus"},10:{code:"GR",name:"Graubünden"},11:{code:"JU",name:"Jura"},12:{code:"LU",name:"Lucerne"},13:{code:"NE",name:"Neuchâtel"},14:{code:"NW",name:"Nidwalden"},15:{code:"OW",name:"Obwalden"},16:{code:"SG",name:"St. Gallen"},17:{code:"SH",name:"Schaffhausen"},18:{code:"SZ",name:"Schwyz"},19:{code:"SO",name:"Solothurn"},20:{code:"TG",name:"Thurgau"},21:{code:"TI",name:"Ticino"},22:{code:"UR",name:"Uri"},23:{code:"VS",name:"Valais"},24:{code:"VD",name:"Vaud"},25:{code:"ZG",name:"Zug"},26:{code:"ZH",name:"Zürich"}},SY:{1:{code:"HA",name:"Al Hasakah"},2:{code:"LA",name:"Al Ladhiqiyah"},3:{code:"QU",name:"Al Qunaytirah"},4:{code:"RQ",name:"Ar Raqqah"},5:{code:"SU",name:"As Suwayda"},6:{code:"DA",name:"Dara"},7:{code:"DZ",name:"Dayr az Zawr"},8:{code:"DI",name:"Dimashq"},9:{code:"HL",name:"Halab"},10:{code:"HM",name:"Hamah"},11:{code:"HI",name:"Hims"},12:{code:"ID",name:"Idlib"},13:{code:"RD",name:"Rif Dimashq"},14:{code:"TA",name:"Tartus"}},TW:{1:{code:"CH",name:"Chang-hua"},2:{code:"CI",name:"Chia-i"},3:{code:"HS",name:"Hsin-chu"},4:{code:"HL",name:"Hua-lien"},5:{code:"IL",name:"I-lan"},6:{code:"KH",name:"Kao-hsiung county"},7:{code:"KM",name:"Kin-men"},8:{code:"LC",name:"Lien-chiang"},9:{code:"ML",name:"Miao-li"},10:{code:"NT",name:"Nan-t'ou"},11:{code:"PH",name:"P'eng-hu"},12:{code:"PT",name:"P'ing-tung"},13:{code:"TG",name:"T'ai-chung"},14:{code:"TA",name:"T'ai-nan"},15:{code:"TP",name:"T'ai-pei county"},16:{code:"TT",name:"T'ai-tung"},17:{code:"TY",name:"T'ao-yuan"},18:{code:"YL",name:"Yun-lin"},19:{code:"CC",name:"Chia-i city"},20:{code:"CL",name:"Chi-lung"},21:{code:"HC",name:"Hsin-chu"},22:{code:"TH",name:"T'ai-chung"},23:{code:"TN",name:"T'ai-nan"},24:{code:"KC",name:"Kao-hsiung city"},25:{code:"TC",name:"T'ai-pei city"}},TJ:{1:{code:"GB",name:"Gorno-Badakhstan"},2:{code:"KT",name:"Khatlon"},3:{code:"SU",name:"Sughd"}},TZ:{1:{code:"AR",name:"Arusha"},2:{code:"DS",name:"Dar es Salaam"},3:{code:"DO",name:"Dodoma"},4:{code:"IR",name:"Iringa"},5:{code:"KA",name:"Kagera"},6:{code:"KI",name:"Kigoma"},7:{code:"KJ",name:"Kilimanjaro"},8:{code:"LN",name:"Lindi"},9:{code:"MY",name:"Manyara"},10:{code:"MR",name:"Mara"},11:{code:"MB",name:"Mbeya"},12:{code:"MO",name:"Morogoro"},13:{code:"MT",name:"Mtwara"},14:{code:"MW",name:"Mwanza"},15:{code:"PN",name:"Pemba North"},16:{code:"PS",name:"Pemba South"},17:{code:"PW",name:"Pwani"},18:{code:"RK",name:"Rukwa"},19:{code:"RV",name:"Ruvuma"},20:{code:"SH",name:"Shinyanga"},21:{code:"SI",name:"Singida"},22:{code:"TB",name:"Tabora"},23:{code:"TN",name:"Tanga"},24:{code:"ZC",name:"Zanzibar Central/South"},25:{code:"ZN",name:"Zanzibar North"},26:{code:"ZU",name:"Zanzibar Urban/West"}},TH:{1:{code:"Amnat Charoen",name:"Amnat Charoen"},2:{code:"Ang Thong",name:"Ang Thong"},3:{code:"Ayutthaya",name:"Ayutthaya"},4:{code:"Bangkok",name:"Bangkok"},5:{code:"Buriram",name:"Buriram"},6:{code:"Chachoengsao",name:"Chachoengsao"},7:{code:"Chai Nat",name:"Chai Nat"},8:{code:"Chaiyaphum",name:"Chaiyaphum"},9:{code:"Chanthaburi",name:"Chanthaburi"},10:{code:"Chiang Mai",name:"Chiang Mai"},11:{code:"Chiang Rai",name:"Chiang Rai"},12:{code:"Chon Buri",name:"Chon Buri"},13:{code:"Chumphon",name:"Chumphon"},14:{code:"Kalasin",name:"Kalasin"},15:{code:"Kamphaeng Phet",name:"Kamphaeng Phet"},16:{code:"Kanchanaburi",name:"Kanchanaburi"},17:{code:"Khon Kaen",name:"Khon Kaen"},18:{code:"Krabi",name:"Krabi"},19:{code:"Lampang",name:"Lampang"},20:{code:"Lamphun",name:"Lamphun"},21:{code:"Loei",name:"Loei"},22:{code:"Lop Buri",name:"Lop Buri"},23:{code:"Mae Hong Son",name:"Mae Hong Son"},24:{code:"Maha Sarakham",name:"Maha Sarakham"},25:{code:"Mukdahan",name:"Mukdahan"},26:{code:"Nakhon Nayok",name:"Nakhon Nayok"},27:{code:"Nakhon Pathom",name:"Nakhon Pathom"},28:{code:"Nakhon Phanom",name:"Nakhon Phanom"},29:{code:"Nakhon Ratchasima",name:"Nakhon Ratchasima"},30:{code:"Nakhon Sawan",name:"Nakhon Sawan"},31:{code:"Nakhon Si Thammarat",name:"Nakhon Si Thammarat"},32:{code:"Nan",name:"Nan"},33:{code:"Narathiwat",name:"Narathiwat"},34:{code:"Nong Bua Lamphu",name:"Nong Bua Lamphu"},35:{code:"Nong Khai",name:"Nong Khai"},36:{code:"Nonthaburi",name:"Nonthaburi"},37:{code:"Pathum Thani",name:"Pathum Thani"},38:{code:"Pattani",name:"Pattani"},39:{code:"Phangnga",name:"Phangnga"},40:{code:"Phatthalung",name:"Phatthalung"},41:{code:"Phayao",name:"Phayao"},42:{code:"Phetchabun",name:"Phetchabun"},43:{code:"Phetchaburi",name:"Phetchaburi"},44:{code:"Phichit",name:"Phichit"},45:{code:"Phitsanulok",name:"Phitsanulok"},46:{code:"Phrae",name:"Phrae"},47:{code:"Phuket",name:"Phuket"},48:{code:"Prachin Buri",name:"Prachin Buri"},49:{code:"Prachuap Khiri Khan",name:"Prachuap Khiri Khan"},50:{code:"Ranong",name:"Ranong"},51:{code:"Ratchaburi",name:"Ratchaburi"},52:{code:"Rayong",name:"Rayong"},53:{code:"Roi Et",name:"Roi Et"},54:{code:"Sa Kaeo",name:"Sa Kaeo"},55:{code:"Sakon Nakhon",name:"Sakon Nakhon"},56:{code:"Samut Prakan",name:"Samut Prakan"},57:{code:"Samut Sakhon",name:"Samut Sakhon"},58:{code:"Samut Songkhram",name:"Samut Songkhram"},59:{code:"Sara Buri",name:"Sara Buri"},60:{code:"Satun",name:"Satun"},61:{code:"Sing Buri",name:"Sing Buri"},62:{code:"Sisaket",name:"Sisaket"},63:{code:"Songkhla",name:"Songkhla"},64:{code:"Sukhothai",name:"Sukhothai"},65:{code:"Suphan Buri",name:"Suphan Buri"},66:{code:"Surat Thani",name:"Surat Thani"},67:{code:"Surin",name:"Surin"},68:{code:"Tak",name:"Tak"},69:{code:"Trang",name:"Trang"},70:{code:"Trat",name:"Trat"},71:{code:"Ubon Ratchathani",name:"Ubon Ratchathani"},72:{code:"Udon Thani",name:"Udon Thani"},73:{code:"Uthai Thani",name:"Uthai Thani"},74:{code:"Uttaradit",name:"Uttaradit"},75:{code:"Yala",name:"Yala"},76:{code:"Yasothon",name:"Yasothon"}},TG:{1:{code:"K",name:"Kara"},2:{code:"P",name:"Plateaux"},3:{code:"S",name:"Savanes"},4:{code:"C",name:"Centrale"},5:{code:"M",name:"Maritime"}},TK:{1:{code:"A",name:"Atafu"},2:{code:"F",name:"Fakaofo"},3:{code:"N",name:"Nukunonu"}},TO:{1:{code:"H",name:"Ha'apai"},2:{code:"T",name:"Tongatapu"},3:{code:"V",name:"Vava'u"}},TT:{1:{code:"CT",name:"Couva/Tabaquite/Talparo"},2:{code:"DM",name:"Diego Martin"},3:{code:"MR",name:"Mayaro/Rio Claro"},4:{code:"PD",name:"Penal/Debe"},5:{code:"PT",name:"Princes Town"},6:{code:"SG",name:"Sangre Grande"},7:{code:"SL",name:"San Juan/Laventille"},8:{code:"SI",name:"Siparia"},9:{code:"TP",name:"Tunapuna/Piarco"},10:{code:"PS",name:"Port of Spain"},11:{code:"SF",name:"San Fernando"},12:{code:"AR",name:"Arima"},13:{code:"PF",name:"Point Fortin"},14:{code:"CH",name:"Chaguanas"},15:{code:"TO",name:"Tobago"}},TN:{1:{code:"AR",name:"Ariana"},2:{code:"BJ",name:"Beja"},3:{code:"BA",name:"Ben Arous"},4:{code:"BI",name:"Bizerte"},5:{code:"GB",name:"Gabes"},6:{code:"GF",name:"Gafsa"},7:{code:"JE",name:"Jendouba"},8:{code:"KR",name:"Kairouan"},9:{code:"KS",name:"Kasserine"},10:{code:"KB",name:"Kebili"},11:{code:"KF",name:"Kef"},12:{code:"MH",name:"Mahdia"},13:{code:"MN",name:"Manouba"},14:{code:"ME",name:"Medenine"},15:{code:"MO",name:"Monastir"},16:{code:"NA",name:"Nabeul"},17:{code:"SF",name:"Sfax"},18:{code:"SD",name:"Sidi"},19:{code:"SL",name:"Siliana"},20:{code:"SO",name:"Sousse"},21:{code:"TA",name:"Tataouine"},22:{code:"TO",name:"Tozeur"},23:{code:"TU",name:"Tunis"},24:{code:"ZA",name:"Zaghouan"}},TR:{1:{code:"ADA",name:"Adana"},2:{code:"ADI",name:"Adiyaman"},3:{code:"AFY",name:"Afyonkarahisar"},4:{code:"AGR",name:"Agri"},5:{code:"AKS",name:"Aksaray"},6:{code:"AMA",name:"Amasya"},7:{code:"ANK",name:"Ankara"},8:{code:"ANT",name:"Antalya"},9:{code:"ARD",name:"Ardahan"},10:{code:"ART",name:"Artvin"},11:{code:"AYI",name:"Aydin"},12:{code:"BAL",name:"Balikesir"},13:{code:"BAR",name:"Bartin"},14:{code:"BAT",name:"Batman"},15:{code:"BAY",name:"Bayburt"},16:{code:"BIL",name:"Bilecik"},17:{code:"BIN",name:"Bingol"},18:{code:"BIT",name:"Bitlis"},19:{code:"BOL",name:"Bolu"},20:{code:"BRD",name:"Burdur"},21:{code:"BRS",name:"Bursa"},22:{code:"CKL",name:"Canakkale"},23:{code:"CKR",name:"Cankiri"},24:{code:"COR",name:"Corum"},25:{code:"DEN",name:"Denizli"},26:{code:"DIY",name:"Diyarbakir"},27:{code:"DUZ",name:"Duzce"},28:{code:"EDI",name:"Edirne"},29:{code:"ELA",name:"Elazig"},30:{code:"EZC",name:"Erzincan"},31:{code:"EZR",name:"Erzurum"},32:{code:"ESK",name:"Eskisehir"},33:{code:"GAZ",name:"Gaziantep"},34:{code:"GIR",name:"Giresun"},35:{code:"GMS",name:"Gumushane"},36:{code:"HKR",name:"Hakkari"},37:{code:"HTY",name:"Hatay"},38:{code:"IGD",name:"Igdir"},39:{code:"ISP",name:"Isparta"},40:{code:"IST",name:"Istanbul"},41:{code:"IZM",name:"Izmir"},42:{code:"KAH",name:"Kahramanmaras"},43:{code:"KRB",name:"Karabuk"},44:{code:"KRM",name:"Karaman"},45:{code:"KRS",name:"Kars"},46:{code:"KAS",name:"Kastamonu"},47:{code:"KAY",name:"Kayseri"},48:{code:"KLS",name:"Kilis"},49:{code:"KRK",name:"Kirikkale"},50:{code:"KLR",name:"Kirklareli"},51:{code:"KRH",name:"Kirsehir"},52:{code:"KOC",name:"Kocaeli"},53:{code:"KON",name:"Konya"},54:{code:"KUT",name:"Kutahya"},55:{code:"MAL",name:"Malatya"},56:{code:"MAN",name:"Manisa"},57:{code:"MAR",name:"Mardin"},58:{code:"MER",name:"Mersin"},59:{code:"MUG",name:"Mugla"},60:{code:"MUS",name:"Mus"},61:{code:"NEV",name:"Nevsehir"},62:{code:"NIG",name:"Nigde"},63:{code:"ORD",name:"Ordu"},64:{code:"OSM",name:"Osmaniye"},65:{code:"RIZ",name:"Rize"},66:{code:"SAK",name:"Sakarya"},67:{code:"SAM",name:"Samsun"},68:{code:"SAN",name:"Sanliurfa"},69:{code:"SII",name:"Siirt"},70:{code:"SIN",name:"Sinop"},71:{code:"SIR",name:"Sirnak"},72:{code:"SIV",name:"Sivas"},73:{code:"TEL",name:"Tekirdag"},74:{code:"TOK",name:"Tokat"},75:{code:"TRA",name:"Trabzon"},76:{code:"TUN",name:"Tunceli"},77:{code:"USK",name:"Usak"},78:{code:"VAN",name:"Van"},79:{code:"YAL",name:"Yalova"},80:{code:"YOZ",name:"Yozgat"},81:{code:"ZON",name:"Zonguldak"}},TM:{1:{code:"A",name:"Ahal Welayaty"},2:{code:"B",name:"Balkan Welayaty"},3:{code:"D",name:"Dashhowuz Welayaty"},4:{code:"L",name:"Lebap Welayaty"},5:{code:"M",name:"Mary Welayaty"}},TC:{1:{code:"AC",name:"Ambergris Cays"},2:{code:"DC",name:"Dellis Cay"},3:{code:"FC",name:"French Cay"},4:{code:"LW",name:"Little Water Cay"},5:{code:"RC",name:"Parrot Cay"},6:{code:"PN",name:"Pine Cay"},7:{code:"SL",name:"Salt Cay"},8:{code:"GT",name:"Grand Turk"},9:{code:"SC",name:"South Caicos"},10:{code:"EC",name:"East Caicos"},11:{code:"MC",name:"Middle Caicos"},12:{code:"NC",name:"North Caicos"},13:{code:"PR",name:"Providenciales"},14:{code:"WC",name:"West Caicos"}},TV:{1:{code:"NMG",name:"Nanumanga"},2:{code:"NLK",name:"Niulakita"},3:{code:"NTO",name:"Niutao"},4:{code:"FUN",name:"Funafuti"},5:{code:"NME",name:"Nanumea"},6:{code:"NUI",name:"Nui"},7:{code:"NFT",name:"Nukufetau"},8:{code:"NLL",name:"Nukulaelae"},9:{code:"VAI",name:"Vaitupu"}},UG:{1:{code:"KAL",name:"Kalangala"},2:{code:"KMP",name:"Kampala"},3:{code:"KAY",name:"Kayunga"},4:{code:"KIB",name:"Kiboga"},5:{code:"LUW",name:"Luwero"},6:{code:"MAS",name:"Masaka"},7:{code:"MPI",name:"Mpigi"},8:{code:"MUB",name:"Mubende"},9:{code:"MUK",name:"Mukono"},10:{code:"NKS",name:"Nakasongola"},11:{code:"RAK",name:"Rakai"},12:{code:"SEM",name:"Sembabule"},13:{code:"WAK",name:"Wakiso"},14:{code:"BUG",name:"Bugiri"},15:{code:"BUS",name:"Busia"},16:{code:"IGA",name:"Iganga"},17:{code:"JIN",name:"Jinja"},18:{code:"KAB",name:"Kaberamaido"},19:{code:"KML",name:"Kamuli"},20:{code:"KPC",name:"Kapchorwa"},21:{code:"KTK",name:"Katakwi"},22:{code:"KUM",name:"Kumi"},23:{code:"MAY",name:"Mayuge"},24:{code:"MBA",name:"Mbale"},25:{code:"PAL",name:"Pallisa"},26:{code:"SIR",name:"Sironko"},27:{code:"SOR",name:"Soroti"},28:{code:"TOR",name:"Tororo"},29:{code:"ADJ",name:"Adjumani"},30:{code:"APC",name:"Apac"},31:{code:"ARU",name:"Arua"},32:{code:"GUL",name:"Gulu"},33:{code:"KIT",name:"Kitgum"},34:{code:"KOT",name:"Kotido"},35:{code:"LIR",name:"Lira"},36:{code:"MRT",name:"Moroto"},37:{code:"MOY",name:"Moyo"},38:{code:"NAK",name:"Nakapiripirit"},39:{code:"NEB",name:"Nebbi"},40:{code:"PAD",name:"Pader"},41:{code:"YUM",name:"Yumbe"},42:{code:"BUN",name:"Bundibugyo"},43:{code:"BSH",name:"Bushenyi"},44:{code:"HOI",name:"Hoima"},45:{code:"KBL",name:"Kabale"},46:{code:"KAR",name:"Kabarole"},47:{code:"KAM",name:"Kamwenge"},48:{code:"KAN",name:"Kanungu"},49:{code:"KAS",name:"Kasese"},50:{code:"KBA",name:"Kibaale"},51:{code:"KIS",name:"Kisoro"},52:{code:"KYE",name:"Kyenjojo"},53:{code:"MSN",name:"Masindi"},54:{code:"MBR",name:"Mbarara"},55:{code:"NTU",name:"Ntungamo"},56:{code:"RUK",name:"Rukungiri"}},UA:{1:{code:"CK",name:"Cherkasy"},2:{code:"CH",name:"Chernihiv"},3:{code:"CV",name:"Chernivtsi"},4:{code:"CR",name:"Crimea"},5:{code:"DN",name:"Dnipropetrovs'k"},6:{code:"DO",name:"Donets'k"},7:{code:"IV",name:"Ivano-Frankivs'k"},8:{code:"KL",name:"Kharkiv Kherson"},9:{code:"KM",name:"Khmel'nyts'kyy"},10:{code:"KR",name:"Kirovohrad"},11:{code:"KV",name:"Kiev"},12:{code:"KY",name:"Kyyiv"},13:{code:"LU",name:"Luhans'k"},14:{code:"LV",name:"L'viv"},15:{code:"MY",name:"Mykolayiv"},16:{code:"OD",name:"Odesa"},17:{code:"PO",name:"Poltava"},18:{code:"RI",name:"Rivne"},19:{code:"SE",name:"Sevastopol"},20:{code:"SU",name:"Sumy"},21:{code:"TE",name:"Ternopil'"},22:{code:"VI",name:"Vinnytsya"},23:{code:"VO",name:"Volyn'"},24:{code:"ZK",name:"Zakarpattya"},25:{code:"ZA",name:"Zaporizhzhya"},26:{code:"ZH",name:"Zhytomyr"}},AE:{1:{code:"AZ",name:"Abu Zaby"},2:{code:"AJ",name:"'Ajman"},3:{code:"FU",name:"Al Fujayrah"},4:{code:"SH",name:"Ash Shariqah"},5:{code:"DU",name:"Dubayy"},6:{code:"RK",name:"R'as al Khaymah"},7:{code:"UQ",name:"Umm al Qaywayn"}},GB:{1:{code:"ABN",name:"Aberdeen"},2:{code:"ABNS",name:"Aberdeenshire"},3:{code:"ANG",name:"Anglesey"},4:{code:"AGS",name:"Angus"},5:{code:"ARY",name:"Argyll and Bute"},6:{code:"BEDS",name:"Bedfordshire"},7:{code:"BERKS",name:"Berkshire"},8:{code:"BLA",name:"Blaenau Gwent"},9:{code:"BRI",name:"Bridgend"},10:{code:"BSTL",name:"Bristol"},11:{code:"BUCKS",name:"Buckinghamshire"},12:{code:"CAE",name:"Caerphilly"},13:{code:"CAMBS",name:"Cambridgeshire"},14:{code:"CDF",name:"Cardiff"},15:{code:"CARM",name:"Carmarthenshire"},16:{code:"CDGN",name:"Ceredigion"},17:{code:"CHES",name:"Cheshire"},18:{code:"CLACK",name:"Clackmannanshire"},19:{code:"CON",name:"Conwy"},20:{code:"CORN",name:"Cornwall"},21:{code:"DNBG",name:"Denbighshire"},22:{code:"DERBY",name:"Derbyshire"},23:{code:"DVN",name:"Devon"},24:{code:"DOR",name:"Dorset"},25:{code:"DGL",name:"Dumfries and Galloway"},26:{code:"DUND",name:"Dundee"},27:{code:"DHM",name:"Durham"},28:{code:"ARYE",name:"East Ayrshire"},29:{code:"DUNBE",name:"East Dunbartonshire"},30:{code:"LOTE",name:"East Lothian"},31:{code:"RENE",name:"East Renfrewshire"},32:{code:"ERYS",name:"East Riding of Yorkshire"},33:{code:"SXE",name:"East Sussex"},34:{code:"EDIN",name:"Edinburgh"},35:{code:"ESX",name:"Essex"},36:{code:"FALK",name:"Falkirk"},37:{code:"FFE",name:"Fife"},38:{code:"FLINT",name:"Flintshire"},39:{code:"GLAS",name:"Glasgow"},40:{code:"GLOS",name:"Gloucestershire"},41:{code:"LDN",name:"Greater London"},42:{code:"MCH",name:"Greater Manchester"},43:{code:"GDD",name:"Gwynedd"},44:{code:"HANTS",name:"Hampshire"},45:{code:"HWR",name:"Herefordshire"},46:{code:"HERTS",name:"Hertfordshire"},47:{code:"HLD",name:"Highlands"},48:{code:"IVER",name:"Inverclyde"},49:{code:"IOW",name:"Isle of Wight"},50:{code:"KNT",name:"Kent"},51:{code:"LANCS",name:"Lancashire"},52:{code:"LEICS",name:"Leicestershire"},53:{code:"LINCS",name:"Lincolnshire"},54:{code:"MSY",name:"Merseyside"},55:{code:"MERT",name:"Merthyr Tydfil"},56:{code:"MLOT",name:"Midlothian"},57:{code:"MMOUTH",name:"Monmouthshire"},58:{code:"MORAY",name:"Moray"},59:{code:"NPRTAL",name:"Neath Port Talbot"},60:{code:"NEWPT",name:"Newport"},61:{code:"NOR",name:"Norfolk"},62:{code:"ARYN",name:"North Ayrshire"},63:{code:"LANN",name:"North Lanarkshire"},64:{code:"YSN",name:"North Yorkshire"},65:{code:"NHM",name:"Northamptonshire"},66:{code:"NLD",name:"Northumberland"},67:{code:"NOT",name:"Nottinghamshire"},68:{code:"ORK",name:"Orkney Islands"},69:{code:"OFE",name:"Oxfordshire"},70:{code:"PEM",name:"Pembrokeshire"},71:{code:"PERTH",name:"Perth and Kinross"},72:{code:"PWS",name:"Powys"},73:{code:"REN",name:"Renfrewshire"},74:{code:"RHON",name:"Rhondda Cynon Taff"},75:{code:"RUT",name:"Rutland"},76:{code:"BOR",name:"Scottish Borders"},77:{code:"SHET",name:"Shetland Islands"},78:{code:"SPE",name:"Shropshire"},79:{code:"SOM",name:"Somerset"},80:{code:"ARYS",name:"South Ayrshire"},81:{code:"LANS",name:"South Lanarkshire"},82:{code:"YSS",name:"South Yorkshire"},83:{code:"SFD",name:"Staffordshire"},84:{code:"STIR",name:"Stirling"},85:{code:"SFK",name:"Suffolk"},86:{code:"SRY",name:"Surrey"},87:{code:"SWAN",name:"Swansea"},88:{code:"TORF",name:"Torfaen"},89:{code:"TWR",name:"Tyne and Wear"},90:{code:"VGLAM",name:"Vale of Glamorgan"},91:{code:"WARKS",name:"Warwickshire"},92:{code:"WDUN",name:"West Dunbartonshire"},93:{code:"WLOT",name:"West Lothian"},94:{code:"WMD",name:"West Midlands"},95:{code:"SXW",name:"West Sussex"},96:{code:"YSW",name:"West Yorkshire"},97:{code:"WIL",name:"Western Isles"},98:{code:"WLT",name:"Wiltshire"},99:{code:"WORCS",name:"Worcestershire"},100:{code:"WRX",name:"Wrexham"}},US:{1:{code:"AL",name:"Alabama"},2:{code:"AK",name:"Alaska"},3:{code:"AS",name:"American Samoa"},4:{code:"AZ",name:"Arizona"},5:{code:"AR",name:"Arkansas"},6:{code:"AF",name:"Armed Forces Africa"},7:{code:"AA",name:"Armed Forces Americas"},8:{code:"AC",name:"Armed Forces Canada"},9:{code:"AE",name:"Armed Forces Europe"},10:{code:"AM",name:"Armed Forces Middle East"},11:{code:"AP",name:"Armed Forces Pacific"},12:{code:"CA",name:"California"},13:{code:"CO",name:"Colorado"},14:{code:"CT",name:"Connecticut"},15:{code:"DE",name:"Delaware"},16:{code:"DC",name:"District of Columbia"},17:{code:"FM",name:"Federated States Of Micronesia"},18:{code:"FL",name:"Florida"},19:{code:"GA",name:"Georgia"},20:{code:"GU",name:"Guam"},21:{code:"HI",name:"Hawaii"},22:{code:"ID",name:"Idaho"},23:{code:"IL",name:"Illinois"},24:{code:"IN",name:"Indiana"},25:{code:"IA",name:"Iowa"},26:{code:"KS",name:"Kansas"},27:{code:"KY",name:"Kentucky"},28:{code:"LA",name:"Louisiana"},29:{code:"ME",name:"Maine"},30:{code:"MH",name:"Marshall Islands"},31:{code:"MD",name:"Maryland"},32:{code:"MA",name:"Massachusetts"},33:{code:"MI",name:"Michigan"},34:{code:"MN",name:"Minnesota"},35:{code:"MS",name:"Mississippi"},36:{code:"MO",name:"Missouri"},37:{code:"MT",name:"Montana"},38:{code:"NE",name:"Nebraska"},39:{code:"NV",name:"Nevada"},40:{code:"NH",name:"New Hampshire"},41:{code:"NJ",name:"New Jersey"},42:{code:"NM",name:"New Mexico"},43:{code:"NY",name:"New York"},44:{code:"NC",name:"North Carolina"},45:{code:"ND",name:"North Dakota"},46:{code:"MP",name:"Northern Mariana Islands"},47:{code:"OH",name:"Ohio"},48:{code:"OK",name:"Oklahoma"},49:{code:"OR",name:"Oregon"},50:{code:"PW",name:"Palau"},51:{code:"PA",name:"Pennsylvania"},52:{code:"PR",name:"Puerto Rico"},53:{code:"RI",name:"Rhode Island"},54:{code:"SC",name:"South Carolina"},55:{code:"SD",name:"South Dakota"},56:{code:"TN",name:"Tennessee"},57:{code:"TX",name:"Texas"},58:{code:"UT",name:"Utah"},59:{code:"VT",name:"Vermont"},60:{code:"VI",name:"Virgin Islands"},61:{code:"VA",name:"Virginia"},62:{code:"WA",name:"Washington"},63:{code:"WV",name:"West Virginia"},64:{code:"WI",name:"Wisconsin"},65:{code:"WY",name:"Wyoming"}},UM:{1:{code:"BI",name:"Baker Island"},2:{code:"HI",name:"Howland Island"},3:{code:"JI",name:"Jarvis Island"},4:{code:"JA",name:"Johnston Atoll"},5:{code:"KR",name:"Kingman Reef"},6:{code:"MA",name:"Midway Atoll"},7:{code:"NI",name:"Navassa Island"},8:{code:"PA",name:"Palmyra Atoll"},9:{code:"WI",name:"Wake Island"}},UY:{1:{code:"AR",name:"Artigas"},2:{code:"CA",name:"Canelones"},3:{code:"CL",name:"Cerro Largo"},4:{code:"CO",name:"Colonia"},5:{code:"DU",name:"Durazno"},6:{code:"FS",name:"Flores"},7:{code:"FA",name:"Florida"},8:{code:"LA",name:"Lavalleja"},9:{code:"MA",name:"Maldonado"},10:{code:"MO",name:"Montevideo"},11:{code:"PA",name:"Paysandu"},12:{code:"RN",name:"Rio Negro"},13:{code:"RV",name:"Rivera"},14:{code:"RO",name:"Rocha"},15:{code:"SL",name:"Salto"},16:{code:"SJ",name:"San Jose"},17:{code:"SO",name:"Soriano"},18:{code:"TA",name:"Tacuarembo"},19:{code:"TT",name:"Treinta y Tres"}},UZ:{1:{code:"AN",name:"Andijon"},2:{code:"BU",name:"Buxoro"},3:{code:"FA",name:"Farg'ona"},4:{code:"JI",name:"Jizzax"},5:{code:"NG",name:"Namangan"},6:{code:"NW",name:"Navoiy"},7:{code:"QA",name:"Qashqadaryo"},8:{code:"QR",name:"Qoraqalpog'iston Republikasi"},9:{code:"SA",name:"Samarqand"},10:{code:"SI",name:"Sirdaryo"},11:{code:"SU",name:"Surxondaryo"},12:{code:"TK",name:"Toshkent City"},13:{code:"TO",name:"Toshkent Region"},14:{code:"XO",name:"Xorazm"}},VU:{1:{code:"MA",name:"Malampa"},2:{code:"PE",name:"Penama"},3:{code:"SA",name:"Sanma"},4:{code:"SH",name:"Shefa"},5:{code:"TA",name:"Tafea"},6:{code:"TO",name:"Torba"}},VE:{1:{code:"AM",name:"Amazonas"},2:{code:"AN",name:"Anzoategui"},3:{code:"AP",name:"Apure"},4:{code:"AR",name:"Aragua"},5:{code:"BA",name:"Barinas"},6:{code:"BO",name:"Bolivar"},7:{code:"CA",name:"Carabobo"},8:{code:"CO",name:"Cojedes"},9:{code:"DA",name:"Delta Amacuro"},10:{code:"DF",name:"Dependencias Federales"},11:{code:"DI",name:"Distrito Federal"},12:{code:"FA",name:"Falcon"},13:{code:"GU",name:"Guarico"},14:{code:"LA",name:"Lara"},15:{code:"ME",name:"Merida"},16:{code:"MI",name:"Miranda"},17:{code:"MO",name:"Monagas"},18:{code:"NE",name:"Nueva Esparta"},19:{code:"PO",name:"Portuguesa"},20:{code:"SU",name:"Sucre"},21:{code:"TA",name:"Tachira"},22:{code:"TR",name:"Trujillo"},23:{code:"VA",name:"Vargas"},24:{code:"YA",name:"Yaracuy"},25:{code:"ZU",name:"Zulia"}},VN:{1:{code:"AG",name:"An Giang"},2:{code:"BG",name:"Bac Giang"},3:{code:"BK",name:"Bac Kan"},4:{code:"BL",name:"Bac Lieu"},5:{code:"BC",name:"Bac Ninh"},6:{code:"BR",name:"Ba Ria-Vung Tau"},7:{code:"BN",name:"Ben Tre"},8:{code:"BH",name:"Binh Dinh"},9:{code:"BU",name:"Binh Duong"},10:{code:"BP",name:"Binh Phuoc"},11:{code:"BT",name:"Binh Thuan"},12:{code:"CM",name:"Ca Mau"},13:{code:"CT",name:"Can Tho"},14:{code:"CB",name:"Cao Bang"},15:{code:"DL",name:"Dak Lak"},16:{code:"DG",name:"Dak Nong"},17:{code:"DN",name:"Da Nang"},18:{code:"DB",name:"Dien Bien"},19:{code:"DI",name:"Dong Nai"},20:{code:"DT",name:"Dong Thap"},21:{code:"GL",name:"Gia Lai"},22:{code:"HG",name:"Ha Giang"},23:{code:"HD",name:"Hai Duong"},24:{code:"HP",name:"Hai Phong"},25:{code:"HM",name:"Ha Nam"},26:{code:"HI",name:"Ha Noi"},27:{code:"HT",name:"Ha Tay"},28:{code:"HH",name:"Ha Tinh"},29:{code:"HB",name:"Hoa Binh"},30:{code:"HC",name:"Ho Chin Minh"},31:{code:"HU",name:"Hau Giang"},32:{code:"HY",name:"Hung Yen"}},VI:{1:{code:"C",name:"Saint Croix"},2:{code:"J",name:"Saint John"},3:{code:"T",name:"Saint Thomas"}},WF:{1:{code:"A",name:"Alo"},2:{code:"S",name:"Sigave"},3:{code:"W",name:"Wallis"}},YE:{1:{code:"AB",name:"Abyan"},2:{code:"AD",name:"Adan"},3:{code:"AM",name:"Amran"},4:{code:"BA",name:"Al Bayda"},5:{code:"DA",name:"Ad Dali"},6:{code:"DH",name:"Dhamar"},7:{code:"HD",name:"Hadramawt"},8:{code:"HJ",name:"Hajjah"},9:{code:"HU",name:"Al Hudaydah"},10:{code:"IB",name:"Ibb"},11:{code:"JA",name:"Al Jawf"},12:{code:"LA",name:"Lahij"},13:{code:"MA",name:"Ma'rib"},14:{code:"MR",name:"Al Mahrah"},15:{code:"MW",name:"Al Mahwit"},16:{code:"SD",name:"Sa'dah"},17:{code:"SN",name:"San'a"},18:{code:"SH",name:"Shabwah"},19:{code:"TA",name:"Ta'izz"}},YU:{1:{code:"KOS",name:"Kosovo"},2:{code:"MON",name:"Montenegro"},3:{code:"SER",name:"Serbia"},4:{code:"VOJ",name:"Vojvodina"}},ZR:{1:{code:"BC",name:"Bas-Congo"},2:{code:"BN",name:"Bandundu"},3:{code:"EQ",name:"Equateur"},4:{code:"KA",name:"Katanga"},5:{code:"KE",name:"Kasai-Oriental"},6:{code:"KN",name:"Kinshasa"},7:{code:"KW",name:"Kasai-Occidental"},8:{code:"MA",name:"Maniema"},9:{code:"NK",name:"Nord-Kivu"},10:{code:"OR",name:"Orientale"},11:{code:"SK",name:"Sud-Kivu"}},ZM:{1:{code:"CE",name:"Central"},2:{code:"CB",name:"Copperbelt"},3:{code:"EA",name:"Eastern"},4:{code:"LP",name:"Luapula"},5:{code:"LK",name:"Lusaka"},6:{code:"NO",name:"Northern"},7:{code:"NW",name:"North-Western"},8:{code:"SO",name:"Southern"},9:{code:"WE",name:"Western"}},ZW:{1:{code:"BU",name:"Bulawayo"},2:{code:"HA",name:"Harare"},3:{code:"ML",name:"Manicaland"},4:{code:"MC",name:"Mashonaland Central"},5:{code:"ME",name:"Mashonaland East"},6:{code:"MW",name:"Mashonaland West"},7:{code:"MV",name:"Masvingo"},8:{code:"MN",name:"Matabeleland North"},9:{code:"MS",name:"Matabeleland South"},10:{code:"MD",name:"Midlands"}}},BFHTimePickerDelimiter=":",BFHTimePickerModes={am:"AM",pm:"PM"},BFHTimezonesList={AF:{"Asia/Kabul":"Kabul"},AL:{"Europe/Tirane":"Tirane"},DZ:{"Africa/Algiers":"Algiers"},AS:{"Pacific/Pago_Pago":"Pago Pago"},AD:{"Europe/Andorra":"Andorra"},AO:{"Africa/Luanda":"Luanda"},AI:{"America/Anguilla":"Anguilla"},AQ:{"Antarctica/Casey":"Casey","Antarctica/Davis":"Davis","Antarctica/DumontDUrville":"DumontDUrville","Antarctica/Macquarie":"Macquarie","Antarctica/Mawson":"Mawson","Antarctica/McMurdo":"McMurdo","Antarctica/Palmer":"Palmer","Antarctica/Rothera":"Rothera","Antarctica/South_Pole":"South Pole","Antarctica/Syowa":"Syowa","Antarctica/Vostok":"Vostok"},AG:{"America/Antigua":"Antigua"},AR:{"America/Argentina/Buenos_Aires":"Argentina / Buenos Aires","America/Argentina/Catamarca":"Argentina / Catamarca","America/Argentina/Cordoba":"Argentina / Cordoba","America/Argentina/Jujuy":"Argentina / Jujuy","America/Argentina/La_Rioja":"Argentina / La Rioja","America/Argentina/Mendoza":"Argentina / Mendoza","America/Argentina/Rio_Gallegos":"Argentina / Rio Gallegos","America/Argentina/Salta":"Argentina / Salta","America/Argentina/San_Juan":"Argentina / San Juan","America/Argentina/San_Luis":"Argentina / San Luis","America/Argentina/Tucuman":"Argentina / Tucuman","America/Argentina/Ushuaia":"Argentina / Ushuaia"},AM:{"Asia/Yerevan":"Yerevan"},AW:{"America/Aruba":"Aruba"},AU:{"Australia/Adelaide":"Adelaide","Australia/Brisbane":"Brisbane","Australia/Broken_Hill":"Broken Hill","Australia/Currie":"Currie","Australia/Darwin":"Darwin","Australia/Eucla":"Eucla","Australia/Hobart":"Hobart","Australia/Lindeman":"Lindeman","Australia/Lord_Howe":"Lord Howe","Australia/Melbourne":"Melbourne","Australia/Perth":"Perth","Australia/Sydney":"Sydney"},AT:{"Europe/Vienna":"Vienna"},AZ:{"Asia/Baku":"Baku"},BH:{"Asia/Bahrain":"Bahrain"},BD:{"Asia/Dhaka":"Dhaka"},BB:{"America/Barbados":"Barbados"},BY:{"Europe/Minsk":"Minsk"},BE:{"Europe/Brussels":"Brussels"},BZ:{"America/Belize":"Belize"},BJ:{"Africa/Porto-Novo":"Porto-Novo"},BM:{"Atlantic/Bermuda":"Bermuda"},BT:{"Asia/Thimphu":"Thimphu"},BO:{"America/La_Paz":"La Paz"},BA:{"Europe/Sarajevo":"Sarajevo"},BW:{"Africa/Gaborone":"Gaborone"},BR:{"America/Araguaina":"Araguaina","America/Bahia":"Bahia","America/Belem":"Belem","America/Boa_Vista":"Boa Vista","America/Campo_Grande":"Campo Grande","America/Cuiaba":"Cuiaba","America/Eirunepe":"Eirunepe","America/Fortaleza":"Fortaleza","America/Maceio":"Maceio","America/Manaus":"Manaus","America/Noronha":"Noronha","America/Porto_Velho":"Porto Velho","America/Recife":"Recife","America/Rio_Branco":"Rio Branco","America/Santarem":"Santarem","America/Sao_Paulo":"Sao Paulo"},VG:{"America/Tortola":"Tortola"},BN:{"Asia/Brunei":"Brunei"},BG:{"Europe/Sofia":"Sofia"},BF:{"Africa/Ouagadougou":"Ouagadougou"},BI:{"Africa/Bujumbura":"Bujumbura"},CI:{"Africa/Abidjan":"Abidjan"},KH:{"Asia/Phnom_Penh":"Phnom Penh"},CM:{"Africa/Douala":"Douala"},CA:{"America/Atikokan":"Atikokan","America/Blanc-Sablon":"Blanc-Sablon","America/Cambridge_Bay":"Cambridge Bay","America/Creston":"Creston","America/Dawson":"Dawson","America/Dawson_Creek":"Dawson Creek","America/Edmonton":"Edmonton","America/Glace_Bay":"Glace Bay","America/Goose_Bay":"Goose Bay","America/Halifax":"Halifax","America/Inuvik":"Inuvik","America/Iqaluit":"Iqaluit","America/Moncton":"Moncton","America/Montreal":"Montreal","America/Nipigon":"Nipigon","America/Pangnirtung":"Pangnirtung","America/Rainy_River":"Rainy River","America/Rankin_Inlet":"Rankin Inlet","America/Regina":"Regina","America/Resolute":"Resolute","America/St_Johns":"St Johns","America/Swift_Current":"Swift Current","America/Thunder_Bay":"Thunder Bay","America/Toronto":"Toronto","America/Vancouver":"Vancouver","America/Whitehorse":"Whitehorse","America/Winnipeg":"Winnipeg","America/Yellowknife":"Yellowknife"},CV:{"Atlantic/Cape_Verde":"Cape Verde"},KY:{"America/Cayman":"Cayman"},CF:{"Africa/Bangui":"Bangui"},TD:{"Africa/Ndjamena":"Ndjamena"},CL:{"America/Santiago":"Santiago","Pacific/Easter":"Easter"},CN:{"Asia/Chongqing":"Chongqing","Asia/Harbin":"Harbin","Asia/Kashgar":"Kashgar","Asia/Shanghai":"Shanghai","Asia/Urumqi":"Urumqi"},CO:{"America/Bogota":"Bogota"},KM:{"Indian/Comoro":"Comoro"},CG:{"Africa/Brazzaville":"Brazzaville"},CR:{"America/Costa_Rica":"Costa Rica"},HR:{"Europe/Zagreb":"Zagreb"},CU:{"America/Havana":"Havana"},CY:{"Asia/Nicosia":"Nicosia"},CZ:{"Europe/Prague":"Prague"},CD:{"Africa/Kinshasa":"Kinshasa","Africa/Lubumbashi":"Lubumbashi"},DK:{"Europe/Copenhagen":"Copenhagen"},DJ:{"Africa/Djibouti":"Djibouti"},DM:{"America/Dominica":"Dominica"},DO:{"America/Santo_Domingo":"Santo Domingo"},TP:{},EC:{"America/Guayaquil":"Guayaquil","Pacific/Galapagos":"Galapagos"},EG:{"Africa/Cairo":"Cairo"},SV:{"America/El_Salvador":"El Salvador"},GQ:{"Africa/Malabo":"Malabo"},ER:{"Africa/Asmara":"Asmara"},EE:{"Europe/Tallinn":"Tallinn"},ET:{"Africa/Addis_Ababa":"Addis Ababa"},FO:{"Atlantic/Faroe":"Faroe"},FK:{"Atlantic/Stanley":"Stanley"},FJ:{"Pacific/Fiji":"Fiji"},FI:{"Europe/Helsinki":"Helsinki"},MK:{"Europe/Skopje":"Skopje"},FR:{"Europe/Paris":"Paris"},GA:{"Africa/Libreville":"Libreville"},GE:{"Asia/Tbilisi":"Tbilisi"},DE:{"Europe/Berlin":"Berlin"},GH:{"Africa/Accra":"Accra"},GR:{"Europe/Athens":"Athens"},GL:{"America/Danmarkshavn":"Danmarkshavn","America/Godthab":"Godthab","America/Scoresbysund":"Scoresbysund","America/Thule":"Thule"},GD:{"America/Grenada":"Grenada"},GU:{"Pacific/Guam":"Guam"},GT:{"America/Guatemala":"Guatemala"},GN:{"Africa/Conakry":"Conakry"},GW:{"Africa/Bissau":"Bissau"},GY:{"America/Guyana":"Guyana"},HT:{"America/Port-au-Prince":"Port-au-Prince"},HN:{"America/Tegucigalpa":"Tegucigalpa"},HK:{"Asia/Hong_Kong":"Hong Kong"},HU:{"Europe/Budapest":"Budapest"},IS:{"Atlantic/Reykjavik":"Reykjavik"},IN:{"Asia/Kolkata":"Kolkata"},ID:{"Asia/Jakarta":"Jakarta","Asia/Jayapura":"Jayapura","Asia/Makassar":"Makassar","Asia/Pontianak":"Pontianak"},IR:{"Asia/Tehran":"Tehran"},IQ:{"Asia/Baghdad":"Baghdad"},IE:{"Europe/Dublin":"Dublin"},IL:{"Asia/Jerusalem":"Jerusalem"},IT:{"Europe/Rome":"Rome"},JM:{"America/Jamaica":"Jamaica"},JP:{"Asia/Tokyo":"Tokyo"},JO:{"Asia/Amman":"Amman"},KZ:{"Asia/Almaty":"Almaty","Asia/Aqtau":"Aqtau","Asia/Aqtobe":"Aqtobe","Asia/Oral":"Oral","Asia/Qyzylorda":"Qyzylorda"},KE:{"Africa/Nairobi":"Nairobi"},KI:{"Pacific/Enderbury":"Enderbury","Pacific/Kiritimati":"Kiritimati","Pacific/Tarawa":"Tarawa"},KW:{"Asia/Kuwait":"Kuwait"},KG:{"Asia/Bishkek":"Bishkek"},LA:{"Asia/Vientiane":"Vientiane"},LV:{"Europe/Riga":"Riga"},LB:{"Asia/Beirut":"Beirut"},LS:{"Africa/Maseru":"Maseru"},LR:{"Africa/Monrovia":"Monrovia"},LY:{"Africa/Tripoli":"Tripoli"},LI:{"Europe/Vaduz":"Vaduz"},LT:{"Europe/Vilnius":"Vilnius"},LU:{"Europe/Luxembourg":"Luxembourg"},MO:{"Asia/Macau":"Macau"},MG:{"Indian/Antananarivo":"Antananarivo"},MW:{"Africa/Blantyre":"Blantyre"},MY:{"Asia/Kuala_Lumpur":"Kuala Lumpur","Asia/Kuching":"Kuching"},MV:{"Indian/Maldives":"Maldives"},ML:{"Africa/Bamako":"Bamako"},MT:{"Europe/Malta":"Malta"},MH:{"Pacific/Kwajalein":"Kwajalein","Pacific/Majuro":"Majuro"},MR:{"Africa/Nouakchott":"Nouakchott"},MU:{"Indian/Mauritius":"Mauritius"},MX:{"America/Bahia_Banderas":"Bahia Banderas","America/Cancun":"Cancun","America/Chihuahua":"Chihuahua","America/Hermosillo":"Hermosillo","America/Matamoros":"Matamoros","America/Mazatlan":"Mazatlan","America/Merida":"Merida","America/Mexico_City":"Mexico City","America/Monterrey":"Monterrey","America/Ojinaga":"Ojinaga","America/Santa_Isabel":"Santa Isabel","America/Tijuana":"Tijuana"},FM:{"Pacific/Chuuk":"Chuuk","Pacific/Kosrae":"Kosrae","Pacific/Pohnpei":"Pohnpei"},MD:{"Europe/Chisinau":"Chisinau"},MC:{"Europe/Monaco":"Monaco"},MN:{"Asia/Choibalsan":"Choibalsan","Asia/Hovd":"Hovd","Asia/Ulaanbaatar":"Ulaanbaatar"},ME:{"Europe/Podgorica":"Podgorica"},MS:{"America/Montserrat":"Montserrat"},MA:{"Africa/Casablanca":"Casablanca"},MZ:{"Africa/Maputo":"Maputo"},MM:{"Asia/Rangoon":"Rangoon"},NA:{"Africa/Windhoek":"Windhoek"},NR:{"Pacific/Nauru":"Nauru"},NP:{"Asia/Kathmandu":"Kathmandu"},NL:{"Europe/Amsterdam":"Amsterdam"},AN:{},NZ:{"Pacific/Auckland":"Auckland","Pacific/Chatham":"Chatham"},NI:{"America/Managua":"Managua"},NE:{"Africa/Niamey":"Niamey"},NG:{"Africa/Lagos":"Lagos"},NF:{"Pacific/Norfolk":"Norfolk"},KP:{"Asia/Pyongyang":"Pyongyang"},MP:{"Pacific/Saipan":"Saipan"},NO:{"Europe/Oslo":"Oslo"},OM:{"Asia/Muscat":"Muscat"},PK:{"Asia/Karachi":"Karachi"},PW:{"Pacific/Palau":"Palau"},PA:{"America/Panama":"Panama"},PG:{"Pacific/Port_Moresby":"Port Moresby"},PY:{"America/Asuncion":"Asuncion"},PE:{"America/Lima":"Lima"},PH:{"Asia/Manila":"Manila"},PN:{"Pacific/Pitcairn":"Pitcairn"},PL:{"Europe/Warsaw":"Warsaw"},PT:{"Atlantic/Azores":"Azores","Atlantic/Madeira":"Madeira","Europe/Lisbon":"Lisbon"},PR:{"America/Puerto_Rico":"Puerto Rico"},QA:{"Asia/Qatar":"Qatar"},RO:{"Europe/Bucharest":"Bucharest"},RU:{"Asia/Anadyr":"Anadyr","Asia/Irkutsk":"Irkutsk","Asia/Kamchatka":"Kamchatka","Asia/Krasnoyarsk":"Krasnoyarsk","Asia/Magadan":"Magadan","Asia/Novokuznetsk":"Novokuznetsk","Asia/Novosibirsk":"Novosibirsk","Asia/Omsk":"Omsk","Asia/Sakhalin":"Sakhalin","Asia/Vladivostok":"Vladivostok","Asia/Yakutsk":"Yakutsk","Asia/Yekaterinburg":"Yekaterinburg","Europe/Kaliningrad":"Kaliningrad","Europe/Moscow":"Moscow","Europe/Samara":"Samara","Europe/Volgograd":"Volgograd"},RW:{"Africa/Kigali":"Kigali"},ST:{"Africa/Sao_Tome":"Sao Tome"},SH:{"Atlantic/St_Helena":"St Helena"},KN:{"America/St_Kitts":"St Kitts"},LC:{"America/St_Lucia":"St Lucia"},VC:{"America/St_Vincent":"St Vincent"},WS:{"Pacific/Apia":"Apia"},SM:{"Europe/San_Marino":"San Marino"},SA:{"Asia/Riyadh":"Riyadh"},SN:{"Africa/Dakar":"Dakar"},RS:{"Europe/Belgrade":"Belgrade"},SC:{"Indian/Mahe":"Mahe"},SL:{"Africa/Freetown":"Freetown"},SG:{"Asia/Singapore":"Singapore"},SK:{"Europe/Bratislava":"Bratislava"},SI:{"Europe/Ljubljana":"Ljubljana"},SB:{"Pacific/Guadalcanal":"Guadalcanal"},SO:{"Africa/Mogadishu":"Mogadishu"},ZA:{"Africa/Johannesburg":"Johannesburg"},GS:{"Atlantic/South_Georgia":"South Georgia"},KR:{"Asia/Seoul":"Seoul"},ES:{"Africa/Ceuta":"Ceuta","Atlantic/Canary":"Canary","Europe/Madrid":"Madrid"},LK:{"Asia/Colombo":"Colombo"},SD:{"Africa/Khartoum":"Khartoum"},SR:{"America/Paramaribo":"Paramaribo"},SZ:{"Africa/Mbabane":"Mbabane"},SE:{"Europe/Stockholm":"Stockholm"},CH:{"Europe/Zurich":"Zurich"},SY:{"Asia/Damascus":"Damascus"},TW:{"Asia/Taipei":"Taipei"},TJ:{"Asia/Dushanbe":"Dushanbe"},TZ:{"Africa/Dar_es_Salaam":"Dar es Salaam"},TH:{"Asia/Bangkok":"Bangkok"},BS:{"America/Nassau":"Nassau"},GM:{"Africa/Banjul":"Banjul"},TG:{"Africa/Lome":"Lome"},TO:{"Pacific/Tongatapu":"Tongatapu"},TT:{"America/Port_of_Spain":"Port of Spain"},TN:{"Africa/Tunis":"Tunis"},TR:{"Europe/Istanbul":"Istanbul"},TM:{"Asia/Ashgabat":"Ashgabat"},TC:{"America/Grand_Turk":"Grand Turk"},TV:{"Pacific/Funafuti":"Funafuti"},VI:{"America/St_Thomas":"St Thomas"},UG:{"Africa/Kampala":"Kampala"},UA:{"Europe/Kiev":"Kiev","Europe/Simferopol":"Simferopol","Europe/Uzhgorod":"Uzhgorod","Europe/Zaporozhye":"Zaporozhye"},AE:{"Asia/Dubai":"Dubai"},GB:{"Europe/London":"London"},US:{"America/Adak":"Adak","America/Anchorage":"Anchorage","America/Boise":"Boise","America/Chicago":"Chicago","America/Denver":"Denver","America/Detroit":"Detroit","America/Indiana/Indianapolis":"Indiana / Indianapolis","America/Indiana/Knox":"Indiana / Knox","America/Indiana/Marengo":"Indiana / Marengo","America/Indiana/Petersburg":"Indiana / Petersburg","America/Indiana/Tell_City":"Indiana / Tell City","America/Indiana/Vevay":"Indiana / Vevay","America/Indiana/Vincennes":"Indiana / Vincennes","America/Indiana/Winamac":"Indiana / Winamac","America/Juneau":"Juneau","America/Kentucky/Louisville":"Kentucky / Louisville","America/Kentucky/Monticello":"Kentucky / Monticello","America/Los_Angeles":"Los Angeles","America/Menominee":"Menominee","America/Metlakatla":"Metlakatla","America/New_York":"New York","America/Nome":"Nome","America/North_Dakota/Beulah":"North Dakota / Beulah","America/North_Dakota/Center":"North Dakota / Center","America/North_Dakota/New_Salem":"North Dakota / New Salem","America/Phoenix":"Phoenix","America/Shiprock":"Shiprock","America/Sitka":"Sitka","America/Yakutat":"Yakutat","Pacific/Honolulu":"Honolulu"},UY:{"America/Montevideo":"Montevideo"},UZ:{"Asia/Samarkand":"Samarkand","Asia/Tashkent":"Tashkent"},VU:{"Pacific/Efate":"Efate"},VA:{"Europe/Vatican":"Vatican"},VE:{"America/Caracas":"Caracas"},VN:{"Asia/Ho_Chi_Minh":"Ho Chi Minh"},EH:{"Africa/El_Aaiun":"El Aaiun"},YE:{"Asia/Aden":"Aden"},ZM:{"Africa/Lusaka":"Lusaka"},ZW:{"Africa/Harare":"Harare"}};
+function(a){"use strict";function b(a){var b=a.toString(16);return 1===b.length?"0"+b:b}function c(a,c,d){return"#"+b(a)+b(c)+b(d)}function d(){var b;a(f).each(function(c){return b=e(a(this)),b.hasClass("open")?(b.trigger(c=a.Event("hide.bfhcolorpicker")),c.isDefaultPrevented()?!0:(b.removeClass("open").trigger("hidden.bfhcolorpicker"),void 0)):!0})}function e(a){return a.closest(".bfh-colorpicker")}var f="[data-toggle=bfh-colorpicker]",g=function(b,c){this.options=a.extend({},a.fn.bfhcolorpicker.defaults,c),this.$element=a(b),this.initPopover()};g.prototype={constructor:g,initPalette:function(){var a,b,c;a=this.$element.find("canvas"),b=a[0].getContext("2d"),c=b.createLinearGradient(0,0,a.width(),0),c.addColorStop(0,"rgb(255, 255, 255)"),c.addColorStop(.1,"rgb(255,   0,   0)"),c.addColorStop(.25,"rgb(255,   0, 255)"),c.addColorStop(.4,"rgb(0,     0, 255)"),c.addColorStop(.55,"rgb(0,   255, 255)"),c.addColorStop(.7,"rgb(0,   255,   0)"),c.addColorStop(.85,"rgb(255, 255,   0)"),c.addColorStop(1,"rgb(255,   0,   0)"),b.fillStyle=c,b.fillRect(0,0,b.canvas.width,b.canvas.height),c=b.createLinearGradient(0,0,0,a.height()),c.addColorStop(0,"rgba(255, 255, 255, 1)"),c.addColorStop(.5,"rgba(255, 255, 255, 0)"),c.addColorStop(.5,"rgba(0,     0,   0, 0)"),c.addColorStop(1,"rgba(0,     0,   0, 1)"),b.fillStyle=c,b.fillRect(0,0,b.canvas.width,b.canvas.height)},initPopover:function(){var a,b;a="",b="","right"===this.options.align?b='<span class="input-group-addon"><span class="bfh-colorpicker-icon"></span></span>':a='<span class="input-group-addon"><span class="bfh-colorpicker-icon"></span></span>',this.$element.html('<div class="input-group bfh-colorpicker-toggle" data-toggle="bfh-colorpicker">'+a+'<input type="text" name="'+this.options.name+'" class="'+this.options.input+'" placeholder="'+this.options.placeholder+'" readonly>'+b+"</div>"+'<div class="bfh-colorpicker-popover">'+'<canvas class="bfh-colorpicker-palette" width="384" height="256"></canvas>'+"</div>"),this.$element.on("click.bfhcolorpicker.data-api touchstart.bfhcolorpicker.data-api",f,g.prototype.toggle).on("mousedown.bfhcolorpicker.data-api","canvas",g.prototype.mouseDown).on("click.bfhcolorpicker.data-api touchstart.bfhcolorpicker.data-api",".bfh-colorpicker-popover",function(){return!1}),this.initPalette(),this.$element.val(this.options.color)},updateVal:function(a,b){var d,e,f,g,h,i,j;h=5,d=this.$element.find("canvas"),e=d[0].getContext("2d"),f=a-d.offset().left,g=b-d.offset().top,f=Math.round(f/h)*h,g=Math.round(g/h)*h,0>f&&(f=0),f>=d.width()&&(f=d.width()-1),0>g&&(g=0),g>d.height()&&(g=d.height()),i=e.getImageData(f,g,1,1),j=c(i.data[0],i.data[1],i.data[2]),j!==this.$element.val()&&(this.$element.val(j),this.$element.trigger("change.bfhcolorpicker"))},mouseDown:function(){var b,c;b=a(this),c=e(b),a(document).on("mousemove.bfhcolorpicker.data-api",{colorpicker:c},g.prototype.mouseMove).one("mouseup.bfhcolorpicker.data-api",{colorpicker:c},g.prototype.mouseUp)},mouseMove:function(a){var b;b=a.data.colorpicker,b.data("bfhcolorpicker").updateVal(a.pageX,a.pageY)},mouseUp:function(b){var c;c=b.data.colorpicker,c.data("bfhcolorpicker").updateVal(b.pageX,b.pageY),a(document).off("mousemove.bfhcolorpicker.data-api"),c.data("bfhcolorpicker").options.close===!0&&d()},toggle:function(b){var c,f,g;if(c=a(this),f=e(c),f.is(".disabled")||void 0!==f.attr("disabled"))return!0;if(g=f.hasClass("open"),d(),!g){if(f.trigger(b=a.Event("show.bfhcolorpicker")),b.isDefaultPrevented())return!0;f.toggleClass("open").trigger("shown.bfhcolorpicker"),c.focus()}return!1}};var h=a.fn.bfhcolorpicker;a.fn.bfhcolorpicker=function(b){return this.each(function(){var c,d,e;c=a(this),d=c.data("bfhcolorpicker"),e="object"==typeof b&&b,this.type="bfhcolorpicker",d||c.data("bfhcolorpicker",d=new g(this,e)),"string"==typeof b&&d[b].call(c)})},a.fn.bfhcolorpicker.Constructor=g,a.fn.bfhcolorpicker.defaults={align:"left",input:"form-control",placeholder:"",name:"",color:"#000000",close:!0},a.fn.bfhcolorpicker.noConflict=function(){return a.fn.bfhcolorpicker=h,this};var i;a.valHooks.div&&(i=a.valHooks.div),a.valHooks.div={get:function(b){return a(b).hasClass("bfh-colorpicker")?a(b).find('input[type="text"]').val():i?i.get(b):void 0},set:function(b,c){if(a(b).hasClass("bfh-colorpicker"))a(b).find(".bfh-colorpicker-icon").css("background-color",c),a(b).find('input[type="text"]').val(c);else if(i)return i.set(b,c)}},a(document).ready(function(){a("div.bfh-colorpicker").each(function(){var b;b=a(this),b.bfhcolorpicker(b.data())})}),a(document).on("click.bfhcolorpicker.data-api",d)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhcountries.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addCountries(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapCountries(),this.$element.is("span")&&this.displayCountry()};b.prototype={constructor:b,getCountries:function(){var b,c;if(this.options.available){if("string"==typeof this.options.available){c=[],this.options.available=this.options.available.split(",");for(b in BFHCountriesList)BFHCountriesList.hasOwnProperty(b)&&a.inArray(b,this.options.available)>=0&&(c[b]=BFHCountriesList[b])}else c=this.options.available;return c}return BFHCountriesList},addCountries:function(){var a,b,c;a=this.options.country,c=this.getCountries(),this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(b in c)c.hasOwnProperty(b)&&this.$element.append('<option value="'+b+'">'+c[b]+"</option>");this.$element.val(a)},addBootstrapCountries:function(){var a,b,c,d,e,f;d=this.options.country,a=this.$element.find('input[type="hidden"]'),b=this.$element.find(".bfh-selectbox-option"),c=this.$element.find("[role=option]"),f=this.getCountries(),c.html(""),this.options.blank===!0&&c.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');for(e in f)f.hasOwnProperty(e)&&(this.options.flags===!0?c.append('<li><a tabindex="-1" href="#" data-option="'+e+'"><i class="glyphicon bfh-flag-'+e+'"></i>'+f[e]+"</a></li>"):c.append('<li><a tabindex="-1" href="#" data-option="'+e+'">'+f[e]+"</a></li>"));this.$element.val(d)},displayCountry:function(){var a;a=this.options.country,this.options.flags===!0?this.$element.html('<i class="glyphicon bfh-flag-'+a+'"></i> '+BFHCountriesList[a]):this.$element.html(BFHCountriesList[a])}};var c=a.fn.bfhcountries;a.fn.bfhcountries=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhcountries"),f="object"==typeof c&&c,e||d.data("bfhcountries",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhcountries.Constructor=b,a.fn.bfhcountries.defaults={country:"",available:"",flags:!1,blank:!0},a.fn.bfhcountries.noConflict=function(){return a.fn.bfhcountries=c,this},a(document).ready(function(){a("form select.bfh-countries, span.bfh-countries, div.bfh-countries").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhcountries(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhcurrencies.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addCurrencies(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapCurrencies(),this.$element.is("span")&&this.displayCurrency()};b.prototype={constructor:b,getCurrencies:function(){var b,c;if(this.options.available){c=[],this.options.available=this.options.available.split(",");for(b in BFHCurrenciesList)BFHCurrenciesList.hasOwnProperty(b)&&a.inArray(b,this.options.available)>=0&&(c[b]=BFHCurrenciesList[b]);return c}return BFHCurrenciesList},addCurrencies:function(){var a,b,c;a=this.options.currency,c=this.getCurrencies(),this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(b in c)c.hasOwnProperty(b)&&this.$element.append('<option value="'+b+'">'+c[b].label+"</option>");this.$element.val(a)},addBootstrapCurrencies:function(){var a,b,c,d,e,f,g;d=this.options.currency,a=this.$element.find('input[type="hidden"]'),b=this.$element.find(".bfh-selectbox-option"),c=this.$element.find("[role=option]"),f=this.getCurrencies(),c.html(""),this.options.blank===!0&&c.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');for(e in f)f.hasOwnProperty(e)&&(this.options.flags===!0?(g=f[e].currencyflag?f[e].currencyflag:e.substr(0,2),c.append('<li><a tabindex="-1" href="#" data-option="'+e+'"><i class="glyphicon bfh-flag-'+g+'"></i>'+f[e].label+"</a></li>")):c.append('<li><a tabindex="-1" href="#" data-option="'+e+'">'+f[e].label+"</a></li>"));this.$element.val(d)},displayCurrency:function(){var a,b;a=this.options.currency,this.options.flags===!0?(b=BFHCurrenciesList[a].currencyflag?BFHCurrenciesList[a].currencyflag:a.substr(0,2),this.$element.html('<i class="glyphicon bfh-flag-'+b+'"></i> '+BFHCurrenciesList[a].label)):this.$element.html(BFHCurrenciesList[a].label)}};var c=a.fn.bfhcurrencies;a.fn.bfhcurrencies=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhcurrencies"),f="object"==typeof c&&c,e||d.data("bfhcurrencies",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhcurrencies.Constructor=b,a.fn.bfhcurrencies.defaults={currency:"",available:"",flags:!1,blank:!0},a.fn.bfhcurrencies.noConflict=function(){return a.fn.bfhcurrencies=c,this},a(document).ready(function(){a("form select.bfh-currencies, span.bfh-currencies, div.bfh-currencies").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhcurrencies(b.data())})})}(window.jQuery),+function(a){"use strict";function b(a,b){return new Date(b,a,0).getDate()}function c(a,b,c){return new Date(b,a,c).getDay()}function d(a,b,c,d){return b+=1,b=String(b),d=String(d),1===b.length&&(b="0"+b),1===d.length&&(d="0"+d),a.replace("m",b).replace("y",c).replace("d",d)}function e(a,b,c){var d,e,f;d=[{part:"m",position:a.indexOf("m")},{part:"y",position:a.indexOf("y")},{part:"d",position:a.indexOf("d")}],d.sort(function(a,b){return a.position-b.position}),f=b.match(/(\d+)/g);for(e in d)if(d.hasOwnProperty(e)&&d[e].part===c)return Number(f[e]).toString()}function f(){var b;a(h).each(function(c){return b=g(a(this)),b.hasClass("open")?(b.trigger(c=a.Event("hide.bfhdatepicker")),c.isDefaultPrevented()?!0:(b.removeClass("open").trigger("hidden.bfhdatepicker"),void 0)):!0})}function g(a){return a.closest(".bfh-datepicker")}var h="[data-toggle=bfh-datepicker]",i=function(b,c){this.options=a.extend({},a.fn.bfhdatepicker.defaults,c),this.$element=a(b),this.initCalendar()};i.prototype={constructor:i,setDate:function(){var a,b,c;a=this.options.date,c=this.options.format,""===a||"today"===a||void 0===a?(b=new Date,"today"===a&&this.$element.val(d(c,b.getMonth(),b.getFullYear(),b.getDate())),this.$element.data("month",b.getMonth()),this.$element.data("year",b.getFullYear())):(this.$element.val(a),this.$element.data("month",Number(e(c,a,"m")-1)),this.$element.data("year",Number(e(c,a,"y"))))},setDateLimit:function(a,b){var c,d;d=this.options.format,""!==a?(this.$element.data(b+"limit",!0),"today"===a?(c=new Date,this.$element.data(b+"day",c.getDate()),this.$element.data(b+"month",c.getMonth()),this.$element.data(b+"year",c.getFullYear())):(this.$element.data(b+"day",Number(e(d,a,"d"))),this.$element.data(b+"month",Number(e(d,a,"m")-1)),this.$element.data(b+"year",Number(e(d,a,"y"))))):this.$element.data(b+"limit",!1)},initCalendar:function(){var a,b,c;a="",b="",c="",""!==this.options.icon&&("right"===this.options.align?b='<span class="input-group-addon"><i class="'+this.options.icon+'"></i></span>':a='<span class="input-group-addon"><i class="'+this.options.icon+'"></i></span>',c="input-group"),this.$element.html('<div class="'+c+' bfh-datepicker-toggle" data-toggle="bfh-datepicker">'+a+'<input type="text" name="'+this.options.name+'" class="'+this.options.input+'" placeholder="'+this.options.placeholder+'" readonly>'+b+"</div>"+'<div class="bfh-datepicker-calendar">'+'<table class="calendar table table-bordered">'+"<thead>"+'<tr class="months-header">'+'<th class="month" colspan="4">'+'<a class="previous" href="#"><i class="glyphicon glyphicon-chevron-left"></i></a>'+"<span></span>"+'<a class="next" href="#"><i class="glyphicon glyphicon-chevron-right"></i></a>'+"</th>"+'<th class="year" colspan="3">'+'<a class="previous" href="#"><i class="glyphicon glyphicon-chevron-left"></i></a>'+"<span></span>"+'<a class="next" href="#"><i class="glyphicon glyphicon-chevron-right"></i></a>'+"</th>"+"</tr>"+'<tr class="days-header">'+"</tr>"+"</thead>"+"<tbody>"+"</tbody>"+"</table>"+"</div>"),this.$element.on("click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api",h,i.prototype.toggle).on("click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api",".bfh-datepicker-calendar > table.calendar .month > .previous",i.prototype.previousMonth).on("click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api",".bfh-datepicker-calendar > table.calendar .month > .next",i.prototype.nextMonth).on("click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api",".bfh-datepicker-calendar > table.calendar .year > .previous",i.prototype.previousYear).on("click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api",".bfh-datepicker-calendar > table.calendar .year > .next",i.prototype.nextYear).on("click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api",".bfh-datepicker-calendar > table.calendar td:not(.off)",i.prototype.select).on("click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api",".bfh-datepicker-calendar > table.calendar",function(){return!1}),this.setDate(),this.setDateLimit(this.options.min,"lower"),this.setDateLimit(this.options.max,"higher"),this.updateCalendar()},updateCalendarHeader:function(a,b,c){var d,e;for(a.find("table > thead > tr > th.month > span").text(BFHMonthsList[b]),a.find("table > thead > tr > th.year > span").text(c),d=a.find("table > thead > tr.days-header"),d.html(""),e=BFHDayOfWeekStart;e<BFHDaysList.length;e+=1)d.append("<th>"+BFHDaysList[e]+"</th>");for(e=0;BFHDayOfWeekStart>e;e+=1)d.append("<th>"+BFHDaysList[e]+"</th>")},checkMinDate:function(a,b,c){var d,e,f,g;return d=this.$element.data("lowerlimit"),d===!0&&(e=this.$element.data("lowerday"),f=this.$element.data("lowermonth"),g=this.$element.data("loweryear"),e>a&&b===f&&c===g||f>b&&c===g||g>c)?!0:!1},checkMaxDate:function(a,b,c){var d,e,f,g;return d=this.$element.data("higherlimit"),d===!0&&(e=this.$element.data("higherday"),f=this.$element.data("highermonth"),g=this.$element.data("higheryear"),a>e&&b===f&&c===g||b>f&&c===g||c>g)?!0:!1},checkToday:function(a,b,c){var d;return d=new Date,a===d.getDate()&&b===d.getMonth()&&c===d.getFullYear()?!0:!1},updateCalendarDays:function(a,d,e){var f,g,h,i,j,k,l;for(f=a.find("table > tbody").html(""),g=b(d,e),h=b(d+1,e),i=c(d,e,1),j=c(d,e,h),k="",l=0;(i-BFHDayOfWeekStart+7)%7>l;l+=1)k+='<td class="off">'+(g-(i-BFHDayOfWeekStart+7)%7+l+1)+"</td>";for(l=1;h>=l;l+=1)k+=this.checkMinDate(l,d,e)?'<td data-day="'+l+'" class="off">'+l+"</td>":this.checkMaxDate(l,d,e)?'<td data-day="'+l+'" class="off">'+l+"</td>":this.checkToday(l,d,e)?'<td data-day="'+l+'" class="today">'+l+"</td>":'<td data-day="'+l+'">'+l+"</td>",c(d,e,l)===(6+BFHDayOfWeekStart)%7&&(f.append("<tr>"+k+"</tr>"),k="");for(l=1;(7-(j+1-BFHDayOfWeekStart+7)%7)%7+1>=l;l+=1)k+='<td class="off">'+l+"</td>",l===(7-(j+1-BFHDayOfWeekStart+7)%7)%7&&f.append("<tr>"+k+"</tr>")},updateCalendar:function(){var a,b,c;a=this.$element.find(".bfh-datepicker-calendar"),b=this.$element.data("month"),c=this.$element.data("year"),this.updateCalendarHeader(a,b,c),this.updateCalendarDays(a,b,c)},previousMonth:function(){var b,c,d;return b=a(this),c=g(b),0===Number(c.data("month"))?(c.data("month",11),c.data("year",Number(c.data("year"))-1)):c.data("month",Number(c.data("month"))-1),d=c.data("bfhdatepicker"),d.updateCalendar(),!1},nextMonth:function(){var b,c,d;return b=a(this),c=g(b),11===Number(c.data("month"))?(c.data("month",0),c.data("year",Number(c.data("year"))+1)):c.data("month",Number(c.data("month"))+1),d=c.data("bfhdatepicker"),d.updateCalendar(),!1},previousYear:function(){var b,c,d;return b=a(this),c=g(b),c.data("year",Number(c.data("year"))-1),d=c.data("bfhdatepicker"),d.updateCalendar(),!1},nextYear:function(){var b,c,d;return b=a(this),c=g(b),c.data("year",Number(c.data("year"))+1),d=c.data("bfhdatepicker"),d.updateCalendar(),!1},select:function(b){var c,e,h,i,j,k;c=a(this),b.preventDefault(),b.stopPropagation(),e=g(c),h=e.data("bfhdatepicker"),i=e.data("month"),j=e.data("year"),k=c.data("day"),e.val(d(h.options.format,i,j,k)),e.trigger("change.bfhdatepicker"),h.options.close===!0&&f()},toggle:function(b){var c,d,e;if(c=a(this),d=g(c),d.is(".disabled")||void 0!==d.attr("disabled"))return!0;if(e=d.hasClass("open"),f(),!e){if(d.trigger(b=a.Event("show.bfhdatepicker")),b.isDefaultPrevented())return!0;d.toggleClass("open").trigger("shown.bfhdatepicker"),c.focus()}return!1}};var j=a.fn.bfhdatepicker;a.fn.bfhdatepicker=function(b){return this.each(function(){var c,d,e;c=a(this),d=c.data("bfhdatepicker"),e="object"==typeof b&&b,this.type="bfhdatepicker",d||c.data("bfhdatepicker",d=new i(this,e)),"string"==typeof b&&d[b].call(c)})},a.fn.bfhdatepicker.Constructor=i,a.fn.bfhdatepicker.defaults={icon:"glyphicon glyphicon-calendar",align:"left",input:"form-control",placeholder:"",name:"",date:"today",format:"m/d/y",min:"",max:"",close:!0},a.fn.bfhdatepicker.noConflict=function(){return a.fn.bfhdatepicker=j,this};var k;a.valHooks.div&&(k=a.valHooks.div),a.valHooks.div={get:function(b){return a(b).hasClass("bfh-datepicker")?a(b).find('input[type="text"]').val():k?k.get(b):void 0},set:function(b,c){if(a(b).hasClass("bfh-datepicker"))a(b).find('input[type="text"]').val(c);else if(k)return k.set(b,c)}},a(document).ready(function(){a("div.bfh-datepicker").each(function(){var b;b=a(this),b.bfhdatepicker(b.data())})}),a(document).on("click.bfhdatepicker.data-api",f)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhfonts.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addFonts(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapFonts()};b.prototype={constructor:b,getFonts:function(){var b,c;if(this.options.available){c=[],this.options.available=this.options.available.split(",");for(b in BFHFontsList)BFHFontsList.hasOwnProperty(b)&&a.inArray(b,this.options.available)>=0&&(c[b]=BFHFontsList[b]);return c}return BFHFontsList},addFonts:function(){var a,b,c;a=this.options.font,c=this.getFonts(),this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(b in c)c.hasOwnProperty(b)&&this.$element.append('<option value="'+b+'">'+b+"</option>");this.$element.val(a)},addBootstrapFonts:function(){var a,b,c,d,e,f;d=this.options.font,a=this.$element.find('input[type="hidden"]'),b=this.$element.find(".bfh-selectbox-option"),c=this.$element.find("[role=option]"),f=this.getFonts(),c.html(""),this.options.blank===!0&&c.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');for(e in f)f.hasOwnProperty(e)&&c.append('<li><a tabindex="-1" href="#" style=\'font-family: '+f[e]+"' data-option=\""+e+'">'+e+"</a></li>");this.$element.val(d)}};var c=a.fn.bfhfonts;a.fn.bfhfonts=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhfonts"),f="object"==typeof c&&c,e||d.data("bfhfonts",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhfonts.Constructor=b,a.fn.bfhfonts.defaults={font:"",available:"",blank:!0},a.fn.bfhfonts.noConflict=function(){return a.fn.bfhfonts=c,this},a(document).ready(function(){a("form select.bfh-fonts, span.bfh-fonts, div.bfh-fonts").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhfonts(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhfontsizes.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addFontSizes(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapFontSizes()};b.prototype={constructor:b,getFontsizes:function(){var b,c;if(this.options.available){c=[],this.options.available=this.options.available.split(",");for(b in BFHFontSizesList)BFHFontSizesList.hasOwnProperty(b)&&a.inArray(b,this.options.available)>=0&&(c[b]=BFHFontSizesList[b]);return c}return BFHFontSizesList},addFontSizes:function(){var a,b,c;a=this.options.fontsize,c=this.getFontsizes(),this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(b in c)c.hasOwnProperty(b)&&this.$element.append('<option value="'+b+'">'+c[b]+"</option>");this.$element.val(a)},addBootstrapFontSizes:function(){var a,b,c,d,e,f;d=this.options.fontsize,a=this.$element.find('input[type="hidden"]'),b=this.$element.find(".bfh-selectbox-option"),c=this.$element.find("[role=option]"),f=this.getFontsizes(),c.html(""),this.options.blank===!0&&c.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');for(e in f)f.hasOwnProperty(e)&&c.append('<li><a tabindex="-1" href="#" data-option="'+e+'">'+f[e]+"</a></li>");this.$element.val(d)}};var c=a.fn.bfhfontsizes;a.fn.bfhfontsizes=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhfontsizes"),f="object"==typeof c&&c,e||d.data("bfhfontsizes",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhfontsizes.Constructor=b,a.fn.bfhfontsizes.defaults={fontsize:"",available:"",blank:!0},a.fn.bfhfontsizes.noConflict=function(){return a.fn.bfhfontsizes=c,this},a(document).ready(function(){a("form select.bfh-fontsizes, span.bfh-fontsizes, div.bfh-fontsizes").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhfontsizes(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhgooglefonts.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addFonts(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapFonts()};b.prototype={constructor:b,getFonts:function(){var b,c;if(c=[],this.options.subset)for(b in BFHGoogleFontsList.items)BFHGoogleFontsList.items.hasOwnProperty(b)&&a.inArray(this.options.subset,BFHGoogleFontsList.items[b].subsets)>=0&&(c[BFHGoogleFontsList.items[b].family]={info:BFHGoogleFontsList.items[b],index:parseInt(b,10)});else if(this.options.available){this.options.available=this.options.available.split(",");for(b in BFHGoogleFontsList.items)BFHGoogleFontsList.items.hasOwnProperty(b)&&a.inArray(BFHGoogleFontsList.items[b].family,this.options.available)>=0&&(c[BFHGoogleFontsList.items[b].family]={info:BFHGoogleFontsList.items[b],index:parseInt(b,10)})}else for(b in BFHGoogleFontsList.items)BFHGoogleFontsList.items.hasOwnProperty(b)&&(c[BFHGoogleFontsList.items[b].family]={info:BFHGoogleFontsList.items[b],index:parseInt(b,10)});return c},addFonts:function(){var a,b,c;a=this.options.font,c=this.getFonts(),this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(b in c)c.hasOwnProperty(b)&&this.$element.append('<option value="'+c[b].info.family+'">'+c[b].info.family+"</option>");this.$element.val(a)},addBootstrapFonts:function(){var a,b,c,d,e,f;d=this.options.font,a=this.$element.find('input[type="hidden"]'),b=this.$element.find(".bfh-selectbox-option"),c=this.$element.find("[role=option]"),f=this.getFonts(),c.html(""),this.options.blank===!0&&c.append('<li><a tabindex="-1" href="#" data-option="" style="background-image: none;"></a></li>');for(e in f)f.hasOwnProperty(e)&&c.append('<li><a tabindex="-1" href="#" style="background-position: 0 -'+(30*f[e].index-2)+'px;" data-option="'+f[e].info.family+'">'+f[e].info.family+"</a></li>");this.$element.val(d)}};var c=a.fn.bfhgooglefonts;a.fn.bfhgooglefonts=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhgooglefonts"),f="object"==typeof c&&c,e||d.data("bfhgooglefonts",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhgooglefonts.Constructor=b,a.fn.bfhgooglefonts.defaults={font:"",available:"",subset:"",blank:!0},a.fn.bfhgooglefonts.noConflict=function(){return a.fn.bfhgooglefonts=c,this},a(document).ready(function(){a("form select.bfh-googlefonts, span.bfh-googlefonts, div.bfh-googlefonts").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhgooglefonts(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhlanguages.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addLanguages(),this.$element.is("span")&&this.displayLanguage(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapLanguages()};b.prototype={constructor:b,getLanguages:function(){var a,b,c;if(this.options.available){c=[],this.options.available=this.options.available.split(",");for(b in this.options.available)this.options.available.hasOwnProperty(b)&&(-1!==this.options.available[b].indexOf("_")?(a=this.options.available[b].split("_"),c[a[0]]={name:BFHLanguagesList[a[0]],country:a[1]}):c[this.options.available[b]]=BFHLanguagesList[this.options.available[b]]);return c}return BFHLanguagesList},addLanguages:function(){var a,b,c;a=this.options.language,b=this.getLanguages(),this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(c in b)b.hasOwnProperty(c)&&(b[c].hasOwnProperty("name")?this.$element.append('<option value="'+c+"_"+b[c].country+'">'+b[c].name.toProperCase()+" ("+BFHCountriesList[b[c].country]+")</option>"):this.$element.append('<option value="'+c+'">'+b[c].toProperCase()+"</option>"));this.$element.val(a)},addBootstrapLanguages:function(){var a,b,c,d,e,f;d=this.options.language,a=this.$element.find('input[type="hidden"]'),b=this.$element.find(".bfh-selectbox-option"),c=this.$element.find("[role=option]"),e=this.getLanguages(),c.html(""),this.options.blank===!0&&c.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');for(f in e)e.hasOwnProperty(f)&&(e[f].hasOwnProperty("name")?this.options.flags===!0?c.append('<li><a tabindex="-1" href="#" data-option="'+f+"_"+e[f].country+'"><i class="glyphicon bfh-flag-'+e[f].country+'"></i>'+e[f].name.toProperCase()+"</a></li>"):c.append('<li><a tabindex="-1" href="#" data-option="'+f+"_"+e[f].country+'">'+e[f].name.toProperCase()+" ("+BFHCountriesList[e[f].country]+")</a></li>"):c.append('<li><a tabindex="-1" href="#" data-option="'+f+'">'+e[f]+"</a></li>"));this.$element.val(d)},displayLanguage:function(){var a;a=this.options.language,-1!==a.indexOf("_")?(a=a.split("_"),this.options.flags===!0?this.$element.html('<i class="glyphicon bfh-flag-'+a[1]+'"></i> '+BFHLanguagesList[a[0]].toProperCase()):this.$element.html(BFHLanguagesList[a[0]].toProperCase()+" ("+BFHCountriesList[a[1]]+")")):this.$element.html(BFHLanguagesList[a].toProperCase())}};var c=a.fn.bfhlanguages;a.fn.bfhlanguages=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhlanguages"),f="object"==typeof c&&c,e||d.data("bfhlanguages",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhlanguages.Constructor=b,a.fn.bfhlanguages.defaults={language:"",available:"",flags:!1,blank:!0},a.fn.bfhlanguages.noConflict=function(){return a.fn.bfhlanguages=c,this},a(document).ready(function(){a("form select.bfh-languages, span.bfh-languages, div.bfh-languages").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhlanguages(b.data())})}),String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})}}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhnumber.defaults,c),this.$element=a(b),this.initInput()};b.prototype={constructor:b,initInput:function(){this.options.buttons===!0&&(this.$element.wrap('<div class="input-group"></div>'),this.$element.parent().append('<span class="input-group-addon bfh-number-btn inc"><span class="glyphicon glyphicon-chevron-up"></span></span>'),this.$element.parent().append('<span class="input-group-addon bfh-number-btn dec"><span class="glyphicon glyphicon-chevron-down"></span></span>')),this.$element.on("change.bfhnumber.data-api",b.prototype.change),this.options.keyboard===!0&&this.$element.on("keydown.bfhnumber.data-api",b.prototype.keydown),this.options.buttons===!0&&this.$element.parent().on("mousedown.bfhnumber.data-api",".inc",b.prototype.btninc).on("mousedown.bfhnumber.data-api",".dec",b.prototype.btndec),this.formatNumber()},keydown:function(b){var c;if(c=a(this).data("bfhnumber"),c.$element.is(".disabled")||void 0!==c.$element.attr("disabled"))return!0;switch(b.which){case 38:c.increment();break;case 40:c.decrement()}return!0},mouseup:function(a){var b,c,d;b=a.data.btn,c=b.$element.data("timer"),d=b.$element.data("interval"),clearTimeout(c),clearInterval(d)},btninc:function(){var c,d;return c=a(this).parent().find(".bfh-number").data("bfhnumber"),c.$element.is(".disabled")||void 0!==c.$element.attr("disabled")?!0:(c.increment(),d=setTimeout(function(){var a;a=setInterval(function(){c.increment()},80),c.$element.data("interval",a)},750),c.$element.data("timer",d),a(document).one("mouseup",{btn:c},b.prototype.mouseup),!0)},btndec:function(){var c,d;return c=a(this).parent().find(".bfh-number").data("bfhnumber"),c.$element.is(".disabled")||void 0!==c.$element.attr("disabled")?!0:(c.decrement(),d=setTimeout(function(){var a;a=setInterval(function(){c.decrement()},80),c.$element.data("interval",a)},750),c.$element.data("timer",d),a(document).one("mouseup",{btn:c},b.prototype.mouseup),!0)},change:function(){var b;return b=a(this).data("bfhnumber"),b.$element.is(".disabled")||void 0!==b.$element.attr("disabled")?!0:(b.formatNumber(),!0)},increment:function(){var a;a=this.getValue(),a+=1,this.$element.val(a).change()},decrement:function(){var a;a=this.getValue(),a-=1,this.$element.val(a).change()},getValue:function(){var a;return a=this.$element.val(),"-1"!==a&&(a=String(a).replace(/\D/g,"")),0===String(a).length&&(a=this.options.min),parseInt(a)},formatNumber:function(){var a,b,c,d;if(a=this.getValue(),a>this.options.max&&(a=this.options.wrap===!0?this.options.min:this.options.max),a<this.options.min&&(a=this.options.wrap===!0?this.options.max:this.options.min),this.options.zeros===!0)for(b=String(this.options.max).length,c=String(a).length,d=c;b>d;d+=1)a="0"+a;a!==this.$element.val()&&this.$element.val(a)}};var c=a.fn.bfhnumber;a.fn.bfhnumber=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhnumber"),f="object"==typeof c&&c,e||d.data("bfhnumber",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhnumber.Constructor=b,a.fn.bfhnumber.defaults={min:0,max:9999,zeros:!1,keyboard:!0,buttons:!0,wrap:!1},a.fn.bfhnumber.noConflict=function(){return a.fn.bfhnumber=c,this},a(document).ready(function(){a('form input[type="text"].bfh-number, form input[type="number"].bfh-number').each(function(){var b;b=a(this),b.bfhnumber(b.data())})})}(window.jQuery),+function(a){"use strict";function b(a,b){var c,d,e,f;for(c="",b=String(b).replace(/\D/g,""),d=0,e=0;d<a.length;d+=1)/\d/g.test(a.charAt(d))?a.charAt(d)===b.charAt(e)?(c+=b.charAt(e),e+=1):c+=a.charAt(d):"d"!==a.charAt(d)?(""!==b.charAt(e)||"+"===a.charAt(d))&&(c+=a.charAt(d)):""===b.charAt(e)?c+="":(c+=b.charAt(e),e+=1);return f=a.charAt(c.length),"d"!==f&&(c+=f),c}function c(a){var b,c=0;return document.selection?(a.focus(),b=document.selection.createRange(),b.moveStart("character",-a.value.length),c=b.text.length):(a.selectionStart||0===a.selectionStart)&&(c=a.selectionStart),c}function d(a,b){var c;document.selection?(a.focus(),c=document.selection.createRange(),c.moveStart("character",-a.value.length),c.moveStart("character",b),c.moveEnd("character",0),c.select()):(a.selectionStart||0===a.selectionStart)&&(a.selectionStart=b,a.selectionEnd=b,a.focus())}var e=function(b,c){this.options=a.extend({},a.fn.bfhphone.defaults,c),this.$element=a(b),(this.$element.is('input[type="text"]')||this.$element.is('input[type="tel"]'))&&this.addFormatter(),this.$element.is("span")&&this.displayFormatter()
};e.prototype={constructor:e,addFormatter:function(){var b;""!==this.options.country&&(b=a(document).find("#"+this.options.country),0!==b.length?(this.options.format=BFHPhoneFormatList[b.val()],b.on("change",{phone:this},this.changeCountry)):this.options.format=BFHPhoneFormatList[this.options.country]),this.$element.on("keyup.bfhphone.data-api",e.prototype.change),this.loadFormatter()},loadFormatter:function(){var a;a=b(this.options.format,this.$element.val()),this.$element.val(a)},displayFormatter:function(){var a;""!==this.options.country&&(this.options.format=BFHPhoneFormatList[this.options.country]),a=b(this.options.format,this.options.number),this.$element.html(a)},changeCountry:function(b){var c,d;c=a(this),d=b.data.phone,d.$element.val(String(d.$element.val()).replace(/\+\d*/g,"")),d.options.format=BFHPhoneFormatList[c.val()],d.loadFormatter()},change:function(e){var f,g,h,i;return f=a(this).data("bfhphone"),f.$element.is(".disabled")||void 0!==f.$element.attr("disabled")?!0:(g=c(f.$element[0]),h=!1,g===f.$element.val().length&&(h=!0),8===e.which&&"d"!==f.options.format.charAt(f.$element.val().length)&&f.$element.val(String(f.$element.val()).substring(0,f.$element.val().length-1)),i=b(f.options.format,f.$element.val()),i===f.$element.val()?!0:(f.$element.val(i),h&&(g=f.$element.val().length),d(f.$element[0],g),!0))}};var f=a.fn.bfhphone;a.fn.bfhphone=function(b){return this.each(function(){var c,d,f;c=a(this),d=c.data("bfhphone"),f="object"==typeof b&&b,d||c.data("bfhphone",d=new e(this,f)),"string"==typeof b&&d[b].call(c)})},a.fn.bfhphone.Constructor=e,a.fn.bfhphone.defaults={format:"",number:"",country:""},a.fn.bfhphone.noConflict=function(){return a.fn.bfhphone=f,this},a(document).ready(function(){a('form input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function(){var b;b=a(this),b.bfhphone(b.data())})})}(window.jQuery),+function(a){"use strict";function b(){var b;a(d).each(function(d){return b=c(a(this)),b.hasClass("open")?(b.trigger(d=a.Event("hide.bfhselectbox")),d.isDefaultPrevented()?!0:(b.removeClass("open").trigger("hidden.bfhselectbox"),void 0)):!0})}function c(a){return a.closest(".bfh-selectbox")}var d="[data-toggle=bfh-selectbox]",e=function(b,c){this.options=a.extend({},a.fn.bfhselectbox.defaults,c),this.$element=a(b),this.initSelectBox()};e.prototype={constructor:e,initSelectBox:function(){var b;b="",this.$element.find("div").each(function(){b=b+'<li><a tabindex="-1" href="#" data-option="'+a(this).data("value")+'">'+a(this).html()+"</a></li>"}),this.$element.html('<input type="hidden" name="'+this.options.name+'" value="">'+'<a class="bfh-selectbox-toggle '+this.options.input+'" role="button" data-toggle="bfh-selectbox" href="#">'+'<span class="bfh-selectbox-option"></span>'+'<span class="'+this.options.icon+' selectbox-caret"></span>'+"</a>"+'<div class="bfh-selectbox-options">'+'<div role="listbox">'+'<ul role="option">'+"</ul>"+"</div>"+"</div>"),this.$element.find("[role=option]").html(b),this.options.filter===!0&&this.$element.find(".bfh-selectbox-options").prepend('<div class="bfh-selectbox-filter-container"><input type="text" class="bfh-selectbox-filter form-control"></div>'),this.$element.val(this.options.value),this.$element.on("click.bfhselectbox.data-api touchstart.bfhselectbox.data-api",d,e.prototype.toggle).on("keydown.bfhselectbox.data-api",d+", [role=option]",e.prototype.keydown).on("mouseenter.bfhselectbox.data-api","[role=option] > li > a",e.prototype.mouseenter).on("click.bfhselectbox.data-api","[role=option] > li > a",e.prototype.select).on("click.bfhselectbox.data-api",".bfh-selectbox-filter",function(){return!1}).on("propertychange.bfhselectbox.data-api change.bfhselectbox.data-api input.bfhselectbox.data-api paste.bfhselectbox.data-api",".bfh-selectbox-filter",e.prototype.filter)},toggle:function(d){var e,f,g;if(e=a(this),f=c(e),f.is(".disabled")||void 0!==f.attr("disabled"))return!0;if(g=f.hasClass("open"),b(),!g){if(f.trigger(d=a.Event("show.bfhselectbox")),d.isDefaultPrevented())return!0;f.toggleClass("open").trigger("shown.bfhselectbox").find('[role=option] > li > [data-option="'+f.val()+'"]').focus()}return!1},filter:function(){var b,d,e;b=a(this),d=c(b),e=a("[role=option] li a",d),e.hide().filter(function(){return-1!==a(this).text().toUpperCase().indexOf(b.val().toUpperCase())}).show()},keydown:function(b){var f,g,h,i,j;return/(38|40|27)/.test(b.keyCode)?(f=a(this),b.preventDefault(),b.stopPropagation(),h=c(f),i=h.hasClass("open"),!i||i&&27===b.keyCode?(27===b.which&&h.find(d).focus(),f.click()):(g=a("[role=option] li:not(.divider) a:visible",h),g.length?(a("body").off("mouseenter.bfh-selectbox.data-api","[role=option] > li > a",e.prototype.mouseenter),j=g.index(g.filter(":focus")),38===b.keyCode&&j>0&&(j-=1),40===b.keyCode&&j<g.length-1&&(j+=1),j||(j=0),g.eq(j).focus(),a("body").on("mouseenter.bfh-selectbox.data-api","[role=option] > li > a",e.prototype.mouseenter),void 0):!0)):!0},mouseenter:function(){var b;b=a(this),b.focus()},select:function(d){var e,f;return e=a(this),d.preventDefault(),d.stopPropagation(),e.is(".disabled")||void 0!==e.attr("disabled")?!0:(f=c(e),f.val(e.data("option")),f.trigger("change.bfhselectbox"),b(),void 0)}};var f=a.fn.bfhselectbox;a.fn.bfhselectbox=function(b){return this.each(function(){var c,d,f;c=a(this),d=c.data("bfhselectbox"),f="object"==typeof b&&b,this.type="bfhselectbox",d||c.data("bfhselectbox",d=new e(this,f)),"string"==typeof b&&d[b].call(c)})},a.fn.bfhselectbox.Constructor=e,a.fn.bfhselectbox.defaults={icon:"caret",input:"form-control",name:"",value:"",filter:!1},a.fn.bfhselectbox.noConflict=function(){return a.fn.bfhselectbox=f,this};var g;a.valHooks.div&&(g=a.valHooks.div),a.valHooks.div={get:function(b){return a(b).hasClass("bfh-selectbox")?a(b).find('input[type="hidden"]').val():g?g.get(b):void 0},set:function(b,c){var d,e;if(a(b).hasClass("bfh-selectbox"))d=a(b),d.find("li a[data-option='"+c+"']").length>0?e=d.find("li a[data-option='"+c+"']").html():d.find("li a").length>0?e=d.find("li a").eq(0).html():(c="",e=""),d.find('input[type="hidden"]').val(c),d.find(".bfh-selectbox-option").html(e);else if(g)return g.set(b,c)}},a(document).ready(function(){a("div.bfh-selectbox").each(function(){var b;b=a(this),b.bfhselectbox(b.data())})}),a(document).on("click.bfhselectbox.data-api",b)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhslider.defaults,c),this.$element=a(b),this.initSlider()};b.prototype={constructor:b,initSlider:function(){""===this.options.value&&(this.options.value=this.options.min),this.$element.html('<input type="hidden" name="'+this.options.name+'" value="">'+'<div class="bfh-slider-handle"><div class="bfh-slider-value"></div></div>'),this.$element.find('input[type="hidden"]').val(this.options.value),this.updateHandle(this.options.value),this.$element.on("mousedown.bfhslider.data-api",b.prototype.mouseDown)},updateHandle:function(a){var b,c,d,e;e=this.options.max-this.options.min,c=this.$element.width(),d=this.$element.position().left,b=Math.round((a-this.options.min)*(c-20)/e+d),this.$element.find(".bfh-slider-handle").css("left",b+"px"),this.$element.find(".bfh-slider-value").text(a)},updateVal:function(a){var b,c,d,e,f;return f=this.options.max-this.options.min,b=this.$element.width(),c=this.$element.offset().left,d=c+b,c>a&&(a=c),a+20>d&&(a=d),e=(a-c)/b,e=Math.ceil(e*f+this.options.min),e===this.$element.val()?!0:(this.$element.val(e),this.$element.trigger("change.bfhslider"),void 0)},mouseDown:function(){var c;return c=a(this),c.is(".disabled")||void 0!==c.attr("disabled")?!0:(a(document).on("mousemove.bfhslider.data-api",{slider:c},b.prototype.mouseMove).one("mouseup.bfhslider.data-api",{slider:c},b.prototype.mouseUp),void 0)},mouseMove:function(a){var b;b=a.data.slider,b.data("bfhslider").updateVal(a.pageX)},mouseUp:function(b){var c;c=b.data.slider,c.data("bfhslider").updateVal(b.pageX),a(document).off("mousemove.bfhslider.data-api")}};var c=a.fn.bfhslider;a.fn.bfhslider=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhslider"),f="object"==typeof c&&c,this.type="bfhslider",e||d.data("bfhslider",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhslider.Constructor=b,a.fn.bfhslider.defaults={name:"",value:"",min:0,max:100},a.fn.bfhslider.noConflict=function(){return a.fn.bfhslider=c,this};var d;a.valHooks.div&&(d=a.valHooks.div),a.valHooks.div={get:function(b){return a(b).hasClass("bfh-slider")?a(b).find('input[type="hidden"]').val():d?d.get(b):void 0},set:function(b,c){if(a(b).hasClass("bfh-slider"))a(b).find('input[type="hidden"]').val(c),a(b).data("bfhslider").updateHandle(c);else if(d)return d.set(b,c)}},a(document).ready(function(){a("div.bfh-slider").each(function(){var b;b=a(this),b.bfhslider(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhstates.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addStates(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapStates(),this.$element.is("span")&&this.displayState()};b.prototype={constructor:b,addStates:function(){var b,c;b=this.options.country,""!==b&&(c=a(document).find("#"+b),0!==c.length&&(b=c.val(),c.on("change",{state:this},this.changeCountry))),this.loadStates(b)},loadStates:function(a){var b,c;b=this.options.state,this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(c in BFHStatesList[a])BFHStatesList[a].hasOwnProperty(c)&&this.$element.append('<option value="'+BFHStatesList[a][c].code+'">'+BFHStatesList[a][c].name+"</option>");this.$element.val(b)},changeCountry:function(b){var c,d,e;c=a(this),d=b.data.state,e=c.val(),d.loadStates(e)},addBootstrapStates:function(){var b,c;b=this.options.country,""!==b&&(c=a(document).find("#"+b),0!==c.length&&(b=c.find('input[type="hidden"]').val(),c.on("change.bfhselectbox",{state:this},this.changeBootstrapCountry))),this.loadBootstrapStates(b)},loadBootstrapStates:function(a){var b,c,d,e,f,g;e=this.options.state,f="",b=this.$element.find('input[type="hidden"]'),c=this.$element.find(".bfh-selectbox-option"),d=this.$element.find("[role=option]"),d.html(""),this.options.blank===!0&&d.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');for(g in BFHStatesList[a])BFHStatesList[a].hasOwnProperty(g)&&(d.append('<li><a tabindex="-1" href="#" data-option="'+BFHStatesList[a][g].code+'">'+BFHStatesList[a][g].name+"</a></li>"),BFHStatesList[a][g].code===e&&(f=BFHStatesList[a][g].name));this.$element.val(e)},changeBootstrapCountry:function(b){var c,d,e;c=a(this),d=b.data.state,e=c.val(),d.loadBootstrapStates(e)},displayState:function(){var a,b,c,d;a=this.options.country,b=this.options.state,c="";for(d in BFHStatesList[a])if(BFHStatesList[a].hasOwnProperty(d)&&BFHStatesList[a][d].code===b){c=BFHStatesList[a][d].name;break}this.$element.html(c)}};var c=a.fn.bfhstates;a.fn.bfhstates=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhstates"),f="object"==typeof c&&c,e||d.data("bfhstates",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhstates.Constructor=b,a.fn.bfhstates.defaults={country:"",state:"",blank:!0},a.fn.bfhstates.noConflict=function(){return a.fn.bfhstates=c,this},a(document).ready(function(){a("form select.bfh-states, span.bfh-states, div.bfh-states").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhstates(b.data())})})}(window.jQuery),+function(a){"use strict";function b(a,b){return a=String(a),1===a.length&&(a="0"+a),b=String(b),1===b.length&&(b="0"+b),a+BFHTimePickerDelimiter+b}function c(){var b;a(e).each(function(c){return b=d(a(this)),b.hasClass("open")?(b.trigger(c=a.Event("hide.bfhtimepicker")),c.isDefaultPrevented()?!0:(b.removeClass("open").trigger("hidden.bfhtimepicker"),void 0)):!0})}function d(a){return a.closest(".bfh-timepicker")}var e="[data-toggle=bfh-timepicker]",f=function(b,c){this.options=a.extend({},a.fn.bfhtimepicker.defaults,c),this.$element=a(b),this.initPopover()};f.prototype={constructor:f,setTime:function(){var a,c,d,e,f,g,h;a=this.options.time,g="",h="",""===a||"now"===a||void 0===a?(c=new Date,e=c.getHours(),f=c.getMinutes(),"12h"===this.options.mode&&(e>12?(e-=12,g=" "+BFHTimePickerModes.pm,h="pm"):(g=" "+BFHTimePickerModes.am,h="am")),"now"===a&&this.$element.find('.bfh-timepicker-toggle > input[type="text"]').val(b(e,f)+g),this.$element.data("hour",e),this.$element.data("minute",f),this.$element.data("mode",h)):(d=String(a).split(BFHTimePickerDelimiter),e=d[0],f=d[1],"12h"===this.options.mode&&(d=String(f).split(" "),f=d[0],h=d[1]===BFHTimePickerModes.pm?"pm":"am"),this.$element.find('.bfh-timepicker-toggle > input[type="text"]').val(a),this.$element.data("hour",e),this.$element.data("minute",f),this.$element.data("mode",h))},initPopover:function(){var b,c,d,g,h;b="",c="",d="",""!==this.options.icon&&("right"===this.options.align?c='<span class="input-group-addon"><i class="'+this.options.icon+'"></i></span>':b='<span class="input-group-addon"><i class="'+this.options.icon+'"></i></span>',d="input-group"),g="",h="23","12h"===this.options.mode&&(g='<td><div class="bfh-selectbox" data-input="'+this.options.input+'" data-value="am">'+'<div data-value="am">'+BFHTimePickerModes.am+"</div>"+'<div data-value="pm">'+BFHTimePickerModes.pm+"</div>"+"</div>",h="11"),this.$element.html('<div class="'+d+' bfh-timepicker-toggle" data-toggle="bfh-timepicker">'+b+'<input type="text" name="'+this.options.name+'" class="'+this.options.input+'" placeholder="'+this.options.placeholder+'" readonly>'+c+"</div>"+'<div class="bfh-timepicker-popover">'+'<table class="table">'+"<tbody>"+"<tr>"+'<td class="hour">'+'<input type="text" class="'+this.options.input+' bfh-number"  data-min="0" data-max="'+h+'" data-zeros="true" data-wrap="true">'+"</td>"+'<td class="separator">'+BFHTimePickerDelimiter+"</td>"+'<td class="minute">'+'<input type="text" class="'+this.options.input+' bfh-number"  data-min="0" data-max="59" data-zeros="true" data-wrap="true">'+"</td>"+g+"</tr>"+"</tbody>"+"</table>"+"</div>"),this.$element.on("click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api",e,f.prototype.toggle).on("click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api",".bfh-timepicker-popover > table",function(){return!1}),this.$element.find(".bfh-number").each(function(){var b;b=a(this),b.bfhnumber(b.data()),b.on("change",f.prototype.change)}),this.$element.find(".bfh-selectbox").each(function(){var b;b=a(this),b.bfhselectbox(b.data()),b.on("change.bfhselectbox",f.prototype.change)}),this.setTime(),this.updatePopover()},updatePopover:function(){var a,b,c;a=this.$element.data("hour"),b=this.$element.data("minute"),c=this.$element.data("mode"),this.$element.find(".hour input[type=text]").val(a).change(),this.$element.find(".minute input[type=text]").val(b).change(),this.$element.find(".bfh-selectbox").val(c)},change:function(){var b,c,e,f;return b=a(this),c=d(b),e=c.data("bfhtimepicker"),e&&"undefined"!==e&&(f="","12h"===e.options.mode&&(f=" "+BFHTimePickerModes[c.find(".bfh-selectbox").val()]),c.find('.bfh-timepicker-toggle > input[type="text"]').val(c.find(".hour input[type=text]").val()+BFHTimePickerDelimiter+c.find(".minute input[type=text]").val()+f),c.trigger("change.bfhtimepicker")),!1},toggle:function(b){var e,f,g;if(e=a(this),f=d(e),f.is(".disabled")||void 0!==f.attr("disabled"))return!0;if(g=f.hasClass("open"),c(),!g){if(f.trigger(b=a.Event("show.bfhtimepicker")),b.isDefaultPrevented())return!0;f.toggleClass("open").trigger("shown.bfhtimepicker"),e.focus()}return!1}};var g=a.fn.bfhtimepicker;a.fn.bfhtimepicker=function(b){return this.each(function(){var c,d,e;c=a(this),d=c.data("bfhtimepicker"),e="object"==typeof b&&b,this.type="bfhtimepicker",d||c.data("bfhtimepicker",d=new f(this,e)),"string"==typeof b&&d[b].call(c)})},a.fn.bfhtimepicker.Constructor=f,a.fn.bfhtimepicker.defaults={icon:"glyphicon glyphicon-time",align:"left",input:"form-control",placeholder:"",name:"",time:"now",mode:"24h"},a.fn.bfhtimepicker.noConflict=function(){return a.fn.bfhtimepicker=g,this};var h;a.valHooks.div&&(h=a.valHooks.div),a.valHooks.div={get:function(b){return a(b).hasClass("bfh-timepicker")?a(b).find('.bfh-timepicker-toggle > input[type="text"]').val():h?h.get(b):void 0},set:function(b,c){var d;if(a(b).hasClass("bfh-timepicker"))d=a(b).data("bfhtimepicker"),d.options.time=c,d.setTime(),d.updatePopover();else if(h)return h.set(b,c)}},a(document).ready(function(){a("div.bfh-timepicker").each(function(){var b;b=a(this),b.bfhtimepicker(b.data())})}),a(document).on("click.bfhtimepicker.data-api",c)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.bfhtimezones.defaults,c),this.$element=a(b),this.$element.is("select")&&this.addTimezones(),this.$element.hasClass("bfh-selectbox")&&this.addBootstrapTimezones()};b.prototype={constructor:b,addTimezones:function(){var b,c;b=this.options.country,""!==b&&(c=a(document).find("#"+b),0!==c.length&&(b=c.val(),c.on("change",{timezone:this},this.changeCountry))),this.loadTimezones(b)},loadTimezones:function(a){var b,c;b=this.options.timezone,this.$element.html(""),this.options.blank===!0&&this.$element.append('<option value=""></option>');for(c in BFHTimezonesList[a])BFHTimezonesList[a].hasOwnProperty(c)&&this.$element.append('<option value="'+c+'">'+BFHTimezonesList[a][c]+"</option>");this.$element.val(b)},changeCountry:function(b){var c,d,e;c=a(this),d=b.data.timezone,e=c.val(),d.loadTimezones(e)},addBootstrapTimezones:function(){var b,c;b=this.options.country,""!==b&&(c=a(document).find("#"+b),0!==c.length&&(b=c.find('input[type="hidden"]').val(),c.on("change.bfhselectbox",{timezone:this},this.changeBootstrapCountry))),this.loadBootstrapTimezones(b)},loadBootstrapTimezones:function(a){var b,c,d,e,f;e=this.options.timezone,b=this.$element.find('input[type="hidden"]'),c=this.$element.find(".bfh-selectbox-option"),d=this.$element.find("[role=option]"),d.html(""),this.options.blank===!0&&d.append('<li><a tabindex="-1" href="#" data-option=""></a></li>');for(f in BFHTimezonesList[a])BFHTimezonesList[a].hasOwnProperty(f)&&d.append('<li><a tabindex="-1" href="#" data-option="'+f+'">'+BFHTimezonesList[a][f]+"</a></li>");this.$element.val(e)},changeBootstrapCountry:function(b){var c,d,e;c=a(this),d=b.data.timezone,e=c.val(),d.loadBootstrapTimezones(e)}};var c=a.fn.bfhtimezones;a.fn.bfhtimezones=function(c){return this.each(function(){var d,e,f;d=a(this),e=d.data("bfhtimezones"),f="object"==typeof c&&c,e||d.data("bfhtimezones",e=new b(this,f)),"string"==typeof c&&e[c].call(d)})},a.fn.bfhtimezones.Constructor=b,a.fn.bfhtimezones.defaults={country:"",timezone:"",blank:!0},a.fn.bfhtimezones.noConflict=function(){return a.fn.bfhtimezones=c,this},a(document).ready(function(){a("form select.bfh-timezones, div.bfh-timezones").each(function(){var b;b=a(this),b.hasClass("bfh-selectbox")&&b.bfhselectbox(b.data()),b.bfhtimezones(b.data())})})}(window.jQuery);


var routerApp=angular.module("routerApp",["ui.router","ngMaterial","ui.bootstrap.datetimepicker","angularMoment","contactFilter"]);
routerApp.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(b,c,d){c.otherwise("/index");b.state("index",{url:"/index",views:{"":{templateUrl:"views/loading.html",controller:"loading"}}}).state("login",{url:"/login",views:{"":{templateUrl:"views/login.html",controller:"loginController"}}}).state("register",{url:"/register",views:{"":{templateUrl:"views/signup.html",controller:"registerController"}}}).state("forgotpassword",{url:"/forgotpassword",views:{"":{templateUrl:"views/forgotpassword.html",
controller:"forgotpasswordController"}}}).state("passwordmailsent",{url:"/passwordmailsent/{email}",views:{"":{templateUrl:"views/passwordmailsent.html",controller:"passwordmailsentController"}}}).state("verifyphone",{url:"/verifyphone",views:{"":{templateUrl:"views/verifyphone.html",controller:"verifyphoneController"}}}).state("verifycode",{url:"/verifycode",views:{"":{templateUrl:"views/verifycode.html",controller:"verifycodeController"}}}).state("welcome-to-tringme",{url:"/welcome-to-tringme",
views:{"":{templateUrl:"views/welcome-to-tringme.html",controller:"welcometotringmeController"}}}).state("logout",{url:"/logout",views:{"":{controller:function(b){tringme_logout()}}}}).state("home",{url:"/home",views:{topview:{templateUrl:"home.html"},bottomview:{templateUrl:"home.html"}}}).state("dashboard",{url:"/dashboard",views:{"":{templateUrl:"views/dashboard.html",controller:"dashBoardController"},"contentNav@dashboard":{templateUrl:"views/navigation.html",controller:"contentNavController"},
"contentLeft@dashboard":{templateUrl:"views/contactlist.html",controller:"contactListController"},"contentRight@dashboard":{templateUrl:"views/dialerpad.html",controller:"dialerPadController"}}}).state("setting",{url:"/setting",views:{"":{templateUrl:"views/setting.html",controller:"settingController"},"contentNav@setting":{templateUrl:"views/navigation.html",controller:"contentNavController"},"contentLeft@setting":{templateUrl:"views/settingleft.html",controller:"settingleftController"},"contentRight@setting":{templateUrl:"views/accountinformation.html",
controller:"accountinformationController"}}}).state("payment",{url:"/payment",views:{"":{templateUrl:"views/payment.html",controller:"paymentController"},"contentNav@payment":{templateUrl:"views/navigation.html",controller:"contentNavController"},"contentLeft@payment":{templateUrl:"views/paymentleft.html",controller:"paymentleftController"},"contentRight@payment":{templateUrl:"views/creditcard.html",controller:"creditcardController"}}}).state("dashboard.conference",{url:"/conference",views:{"contentRight@dashboard":{templateUrl:"views/conferencecall.html",
controller:"conferencecallController"}}}).state("dashboard.broadcastmessage",{url:"/broadcastmessage",views:{"contentRight@dashboard":{templateUrl:"views/broadcastmessage.html",controller:"broadcastmessageController"}}}).state("dashboard.microphoneaccess",{url:"/microphoneaccess/{phone}",views:{"contentRight@dashboard":{templateUrl:"views/microphoneaccess.html",controller:"microphoneaccessController"}}}).state("dashboard.callnotsupported",{url:"/callnotsupported/{phone}",views:{"contentRight@dashboard":{templateUrl:"views/callnotsupported.html",
controller:"callnotsupportedController"}}}).state("dashboard.callprogress",{url:"/callprogress/{phone}",views:{"contentRight@dashboard":{templateUrl:"views/callprogress.html",controller:"callprogressController"}}});b.state("dashboard.callfinish",{url:"/callfinish",views:{"contentRight@dashboard":{templateUrl:"views/callfinish.html",controller:"callfinishController"}}});b.state("dashboard.callfinishsupport",{url:"/callfinishsupport",views:{"contentRight@dashboard":{templateUrl:"views/callfinishsupport.html",
controller:"callfinishsupportController"}}}).state("dashboard.callhistory",{url:"/callhistory/{id}",views:{"contentRight@dashboard":{templateUrl:"views/callhistory.html",controller:"callhistoryController"}}}).state("dashboard.contact",{url:"/contact/{id}",views:{"contentRight@dashboard":{templateUrl:"views/contact-profile.html",controller:"contactDetailController"}}}).state("dashboard.contactedit",{url:"/contactedit/{id}",views:{"contentRight@dashboard":{templateUrl:"views/contact-edit-profile.html",
controller:"contactDetailController"}}}).state("setting.subscription",{url:"/subscription",views:{"contentRight@setting":{templateUrl:"views/subscription.html",controller:"subscriptionController"}}}).state("setting.changephonecode",{url:"/changephonecode",views:{"contentRight@setting":{templateUrl:"views/changephonecode.html",controller:"verifycodeController"}}}).state("setting.changephonenumber",{url:"/changephonenumber",views:{"contentRight@setting":{templateUrl:"views/changephonenumber.html",controller:"verifyphoneController"}}}).state("setting.purchasehistory",
{url:"/purchasehistory",views:{"contentRight@setting":{templateUrl:"views/purchasehistory.html",controller:"purchasehistoryController"}}}).state("setting.callhistory",{url:"/callhistory",views:{"contentRight@setting":{templateUrl:"views/callhistory.html",controller:"callhistoryController"}}}).state("setting.bonus",{url:"/bonus",views:{"contentRight@setting":{templateUrl:"views/bonushistory.html",controller:"bonushistoryController"}}}).state("setting.profile",{url:"/profile",views:{"contentRight@setting":{templateUrl:"views/profile.html",
controller:"profileController"}}}).state("setting.offerforme",{url:"/offerforme",views:{"contentRight@setting":{templateUrl:"views/offerforme.html",controller:"offerformeController"}}}).state("setting.freecredits",{url:"/freecredits",views:{"contentRight@setting":{templateUrl:"views/freecredits.html",controller:"freecreditsController"}}}).state("payment.paypal",{url:"/paypal",views:{"contentRight@payment":{templateUrl:"views/paypal.html",controller:"paypalController"}}}).state("payment.netbanking",
{url:"/netbanking",views:{"contentRight@payment":{templateUrl:"views/netbanking.html",controller:"netbankingController"}}}).state("payment.redeemvoucher",{url:"/redeemvoucher",views:{"contentRight@payment":{templateUrl:"views/redeemvoucher.html",controller:"redeemvoucherController"}}}).state("support",{url:"/support",views:{"":{templateUrl:"views/support.html"},"contentNav@support":{templateUrl:"views/navigation.html",controller:"contentNavController"},"contentLeft@support":{templateUrl:"views/supportleft.html"},
"contentRight@support":{templateUrl:"views/supporttickets.html",controller:"supportTicketsController"}}}).state("support.ticketnew",{url:"/ticketnew",views:{"contentRight@support":{templateUrl:"views/supportnew.html",controller:"supportNewController"}}}).state("support.tickets",{url:"/tickets",views:{"contentRight@support":{templateUrl:"views/supporttickets.html",controller:"supportTicketsController"}}}).state("support.ticketview",{url:"/ticketview/{id}",views:{"contentRight@support":{templateUrl:"views/supportviewticket.html",
controller:"supportTicketDetailController"}}})}]);routerApp.controller("loading",["$scope",function(b){console.log("tringme init from loading")}]);routerApp.controller("dashBoardController",["$scope","$window",function(b,c){b.$on("$viewContentLoaded",function(){0<$("#testDiv").length&&$("#testDiv").slimScroll({alwaysVisible:!0,railVisible:!0,railColor:"#fff",railOpacity:1,height:"403px",railBorderRadius:0})})}]);
routerApp.controller("settingController",["$scope","$window",function(b,c){analytics("send","pageview","#settings");b.$on("$viewContentLoaded",function(){0<$("#testDiv").length&&$("#testDiv").slimScroll({alwaysVisible:!0,railVisible:!0,railColor:"#fff",railOpacity:1,height:"403px",railBorderRadius:0})})}]);
routerApp.controller("loginController",["$scope","$window","$state",function(b,c,d){analytics("send","pageview","#login");b.doLogin=function(){tringme_login(b.appdata.email,b.appdata.password,1)};b.doThirdPartyLogin=function(b){tringme_login_thirdparty(b)};c.show_loginfailed=function(c){b.showAlert("Login Failed","Check your email or password and try again!","Ok")}}]);
routerApp.controller("registerController",["$scope","$window","$state",function(b,c,d){analytics("send","pageview","#register");b.appdata.message="We have sent you an email with your password. Please check your SPAM folder if you don't see it in your INBOX.";b.signup=function(){tringme_signup(b.appdata.name,b.appdata.email,b.appdata.gender,"","","")};b.doThirdPartyLogin=function(b){tringme_login_thirdparty(b)};c.show_loginfailed=function(c){b.showAlert("Account Exists!","Your account already exists, login with your password to continue.",
"Login Now");d.go("login")}}]);routerApp.controller("contentNavController",["$scope",function(b){b.shortname=b.user.name;18<b.user.name.length&&(b.shortname=b.user.name.substring(0,18)+"..")}]);
routerApp.controller("contactListController",["$scope","$window",function(b,c){b.searchText="";b.searchVisible=!1;b.addContact=function(){var c=b.vm.createContact;tringme_addcontact(0,c.name,c.number,c.type)};b.toggleSearch=function(){b.searchVisible?(b.searchText="",b.searchVisible=!1):b.searchVisible=!0};b.isSearchVisible=function(){return b.searchVisible};b.doRefresh=function(){tringme_reload()}}]);
routerApp.controller("contactDetailController",["$scope","$window","$state","$stateParams","$mdDialog",function(b,c,d,e,f){analytics("send","pageview","#contactDetail");b.appdata.navclass="call";var h=e.id;c=b.contacts;uistorage_set("lastviewedid",h);b.currtime=new Date;b.phonetypes=[{id:"2",label:"Mobile"},{id:"1",label:"Home"},{id:"3",label:"Work"}];var g={};0==h&&(g.id=0,g.name="",g.photo="male",g.c=[],g.c[0]={},g.c[0].phone=b.appdata.newphone,b.appdata.newphone="",g.c[0].type=2,g.c[0].selected=
b.phonetypes[0],b.selcontact=g);for(var k in b.contacts){if(0==h)break;if(c[k].id==h){b.selcontact=c[k];k=b.selcontact.c;for(c=k.length-1;0<=c;c--)void 0!=k[c].created&&0<k[c].created&&(""==k[c].phone.trim()?k.splice(c,1):k[c].created=0);for(g=0;g<k.length;g++)for(k[g].typestr=tringme_phonetype_to_string(k[g].type),c=0;c<b.phonetypes.length;c++)if(k[g].type==b.phonetypes[c].id){k[g].selected=b.phonetypes[c];break}break}}b.selcontactimage=null!=b.selcontact&&""!=b.selcontact.photo?b.user.imageurl+
"/"+b.selcontact.photo+".jpg":b.user.imageurl+"/male.jpg";b.showConfirm=function(b,c,d){b=f.confirm().content(c).title(b).ok("Please do it!").cancel("Cancel");f.show(b).then(d,function(){})};b.deleteContact=function(){b.showConfirm("Delete Contact?","All the information including phone numbers will be deleted, continue?",function(){tringme_delcontact(e.id);d.go("dashboard")})};b.deleteNumber=function(c){0==e.id?d.go("dashboard"):b.showConfirm("Confirm","Would you like to delete this phone number?",
function(){var l=b.selcontact.c.length;tringme_delcontact(e.id,c);1==l&&d.go("dashboard")})};b.SaveContact=function(){tringme_savecontact(b.selcontact);if(0==e.id)return d.go("dashboard"),!1;d.go("dashboard.contact",e);return!0};b.checkrate=function(c,d){var h=angular.element("contentRight");b.rateglobal(h,c,d)};b.callback=function(c,d){var h=angular.element("contentRight");b.callbackglobal(h,c,d)};b.onPhoneType=function(b){b.type=b.selected.id};b.addNewNumber=function(){var c=b.selcontact.c.length;
if(3!=c){b.selcontact.c[c]={};b.selcontact.c[c].phone="";b.selcontact.c[c].type="2";b.selcontact.c[c].created=1;for(var d=0;d<b.phonetypes.length;d++)if(b.selcontact.c[c].type==b.phonetypes[d].id){b.selcontact.c[c].selected=b.phonetypes[d];break}}};b.updatesContacts=function(){tringme_addcontact(parseInt(e.id),$("#contactInputName").val(),b.selcontact.mobile,$("#contactInputHome").val(),$("#contactInputOffice").val(),"");var c=b.contacts,d;for(d in b.contacts)if(c[d].id==h){b.selcontact=c[d];b.selcontact.IsEdit=
!1;break}}}]);routerApp.controller("contactEditController",["$scope","$window","$stateParams",function(b,c,d){}]);routerApp.controller("verifyphoneController",["$scope","$window","$location","$state",function(b,c,d,e){analytics("send","pageview","#verifyphone");b.appdata.sentby="";b.verify=function(){tringme_verifyphone(function(c,d,g){0==c&&b.showAlert(g,"Please check your number and try again.","Ok")},b.register.number)};c.phone_updated=function(){b.$apply();e.go("setting")}}]);
routerApp.controller("verifycodeController",["$state","$scope","$window","$location",function(b,c,d,e){analytics("send","pageview","#verifycode");c.message="You must have received a verification code from TringMe. Please enter below.";"sms"==c.appdata.sentby?c.message="We have sent a SMS with verification code to your phone number. It may take a few minutes to receive it.":"call"==c.appdata.sentby&&(c.message="You will soon receive a call from us with a verification code. Note it down and then enter it here");
c.verifycode=function(){var b=c.register.code.trim();6>b.length?c.showAlert("Invalid Code","Please check the code and try again.","Ok"):tringme_verifycode(function(b,d,f){0==b?c.showAlert("Invalid Code","Please check the code and try again.","Ok"):c.showAlert("Successful","Your phone number has been updated.","Ok")},b)};d.phone_updated=function(){c.$apply();b.go("setting")}}]);
routerApp.controller("welcometotringmeController",["$scope","$window","$location",function(b,c,d){analytics("send","pageview","#welcome")}]);
routerApp.controller("forgotpasswordController",["$scope","$window","$state",function(b,c,d){b.forgetmail=function(){var c=b.appdata.email;tringme_resetpassword(function(f,h,g){f?d.go("passwordmailsent",{email:c}):(b.showAlert("Account not found","You do not have TringMe Account associated with this email. Please sign-up to continue.","Ok"),d.go("register"))},c)}}]);routerApp.controller("passwordmailsentController",["$scope","$window","$stateParams",function(b,c,d){b.appdata.email=d.email}]);
routerApp.controller("conferencecallController",["$scope",function(b){}]);routerApp.controller("broadcastmessageController",["$scope",function(b){}]);
routerApp.controller("callhistoryController",["$scope","$window","$location","$stateParams",function(b,c,d,e){analytics("send","pageview","#callhistory");"setting"!=b.appdata.navclass&&(b.appdata.navclass="callhistory");c=e.id;b.filtername="";d=null;0<c&&(d=tringme_findcontact(c),null!=d&&(b.filtername=d.name));b.show_call_records=function(c,d,g){console.log("show call history new");b.$apply(function(){if(0!=d.cdrcount){for(var c in d){var f=Math.floor(d[c].dur/60),l=Math.round(d[c].dur%60);10>parseInt(f)&&
(f="0"+f);10>parseInt(l)&&(l="0"+l);d[c].dur=f+":"+l;d[c].charge="$"+myToFixed(d[c].charge,3)}b.history=d}})};tringme_getcdr(b.show_call_records,b.filtername,0,0,8);b.$on("$viewContentLoaded",function(){});b.callback=function(c,d){var g=angular.element("contentRight");b.callbackglobal(g,c,d)};b.fetchCDR=function(c){var d="";"undefined"!=this.filterdate&&(d=this.filterdate);tringme_getcdr(b.show_call_records,this.filtername,d,c,8)};b.filterdata=function(){b.fetchCDR(0)};b.next=function(){b.fetchCDR(1)};
b.cdrrefresh=function(){b.fetchCDR(0)}}]);routerApp.controller("bonushistoryController",["$scope","$window","$location","$stateParams",function(b,c,d,e){analytics("send","pageview","#bonushistory");b.appdata.navclass="setting";tringme_getbonushistory(function(c,d,g){b.appdata.inprogress="";b.$apply()})}]);routerApp.controller("settingleftController",["$scope",function(b){b.appdata.navclass="setting"}]);
routerApp.controller("accountinformationController",["$rootScope","$scope","$state","$window","$location",function(b,c,d,e,f){analytics("send","pageview","#account");c.setpassword=function(){var b=c.oldpassword,d=c.newpassword;if(d!=c.confirmpassword)return c.IsMatch=!0,!1;tringme_setaccount(function(b,d,l){b?c.showAlert("Password Changed","Your password was changed successfully.","Ok"):c.showAlert("Password not changed","Please retype your current password and try again.","Ok")},b,d,"")};c.IsMatch=
!1;c.appdata.inprogress=" (checking bonus)";c.update_bonus=function(){void 0==c.user.bonus||""==c.user.bonus?(c.appdata.bonus={},c.appdata.bonus.amount=0,c.appdata.bonus.minamount=0,c.appdata.bonus.expiry=""):(c.appdata.bonus=c.user.bonus[0],c.appdata.inprogress="(expiry: "+c.appdata.bonus.expiry+")")};c.update_bonus();c.user.bonus="";tringme_getbonus(function(b,d,f){c.appdata.inprogress="";c.update_bonus();c.$apply()})}]);routerApp.controller("subscriptionController",["$scope",function(b){}]);
routerApp.controller("purchasehistoryController",["$rootScope","$scope","$window","$location",function(b,c,d,e){c.appdata.purchasetype="1";c.show_transactions=function(b,d,e){console.log("show purchase history");0!=d.reccount&&(c.appdata.purchases=d,c.$apply())};tringme_gettransactions(c.show_transactions,1);c.$on("$viewContentLoaded",function(){});c.onPurchaseType=function(){tringme_gettransactions(c.show_transactions,c.appdata.purchasetype)}}]);
routerApp.controller("profileController",["$scope",function(b){tringme_getprofile(function(c,d,e){b.$apply(function(){b.userprofile=d})});b.uploadimage=function(){tringme_upload("fileform","fileToUpload","jpg,png.gif",1E3,function(c){b.$apply(function(){tringme_update_image(1)})})};b.removepic=function(){tringme_removepicture(function(c,d,e){b.$apply(function(){tringme_update_image(1)})})};b.save=function(){var c=b.userprofile;tringme_setprofile(function(c,e,f){b.showAlert("Saved","Profile saved",
"Ok")},c.name,c.gender,c.day,c.month,c.year,c.email,c.occupation,c.city,c.state,c.country)}}]);routerApp.controller("offerformeController",["$scope",function(b){}]);routerApp.controller("freecreditsController",["$scope",function(b){}]);routerApp.controller("callfinishController",["$scope",function(b){b.closecallscreen=function(){b.dashboard()};b.donoshow=function(){}}]);routerApp.controller("callfinishsupportController",["$scope",function(b){}]);
routerApp.controller("dialerPadController",["$scope","$window","$location","$state","$stateParams",function(b,c,d,e,f){analytics("send","pageview","#dialer");b.appdata.navclass="call";b.appdata.dialednum="";uistorage_set("lastviewedid",0);b.addContacts=function(){var c=b.vmc.createContacts;tringme_addcontact(0,c.name,c.phone,c.type);$(".addContact-btn").attr("flag","1");$(".leftaddcontcatPopup").hide()};b.checkrate=function(){b.rateglobal(null,0,b.appdata.dialednum)};b.docall=function(){window.localStorage.lastCall=
b.appdata.dialednum;e.go("dashboard.callprogress",{phone:b.appdata.dialednum});return!1};b.docallback=function(){window.localStorage.lastCall=b.appdata.dialednum;b.callbackglobal(null,0,b.appdata.dialednum);return!1};b.addContactFromDialer=function(){f.id=0;f.phone=b.appdata.dialednum;b.appdata.newphone=b.appdata.dialednum;"+"==b.appdata.newphone.charAt(0)&&(b.appdata.newphone=b.appdata.newphone.substring(1));e.go("dashboard.contactedit",{id:0,phone:b.appdata.dialednum})}}]);
routerApp.controller("paymentController",["$scope","$window",function(b,c){b.appdata.navclass="payment";b.payment=tringme_paymentinfo();b.$on("$viewContentLoaded",function(){0<$("#testDiv").length&&$("#testDiv").slimScroll({alwaysVisible:!0,railVisible:!0,railColor:"#fff",railOpacity:1,height:"403px",railBorderRadius:0})})}]);routerApp.controller("paymentleftController",["$scope",function(b){b.payment=tringme_paymentinfo()}]);
routerApp.controller("creditcardController",["$scope",function(b){analytics("send","pageview","#creditcard");b.payment=tringme_paymentinfo();b.payment.amount=b.payment.amounts[1];b.payment.tax=0;b.payment.coupon="";b.payment.couponinfo="";b.payment.ccnum="";b.payment.name="";b.payment.cvv="";b.payment.phone="";b.payment.month=0;b.payment.year=0;b.payment.agree1=0;b.payment.agree2=0;b.payment.ccnumerror="";b.payment.dateerror="";b.checkForm=function(){if(16>b.payment.ccnum.trim().length)return b.payment.ccnumerror=
"",!0;if(!tringme_checkcc(b.payment.ccnum.trim()))return b.payment.ccnumerror="-Invalid Credit Card",!0;b.payment.ccnumerror="";if(0==b.payment.month||0==b.payment.year)return b.payment.dateerror="",!0;if(!tringme_checkccdate(b.payment.month,b.payment.year))return b.payment.dateerror="-Invalid Expiry",!0;b.payment.dateerror="";return 3>b.payment.name.trim().length||3>b.payment.cvv.trim().length||7>b.payment.phone.trim().length||0==b.payment.agree1||0==b.payment.agree2?!0:!1};b.amountchanged=function(){b.payment.bonus=
toFixed(.2*b.payment.amount,2);parseFloat(b.payment.bonus)>parseFloat(b.user.referbonus)&&(b.payment.bonus=b.user.referbonus)};b.applycoupon=function(){b.payment.couponinfo="Invalid Coupon Code"};b.paycc=function(){var c=b.payment;tringme_payment_cc(c.name,c.ccnum,c.month,c.year,c.cvv,"",c.amount)};b.amountchanged()}]);
function toFixed(b,c){c=c||0;var d=Math.pow(10,c),e=Math.abs(Math.round(b*d)),f=(0>b?"-":"")+String(Math.floor(e/d));0<c&&(d=String(e%d),e=Array(Math.max(c-d.length,0)+1).join("0"),f+="."+e+d);return f}
routerApp.controller("paypalController",["$scope",function(b){analytics("send","pageview","#paypal");b.payment=tringme_paymentinfo();b.payment.amount=b.payment.ppamounts[0];b.payment.agree1=0;b.payment.agree2=0;b.payment.fee=0;b.payment.total=b.payment.amount;0<b.payment.paypalfee&&(b.payment.fee=b.payment.amount*b.payment.paypalfee/100,b.payment.total=parseFloat(b.payment.amount)+parseFloat(b.payment.fee),b.payment.fee=toFixed(b.payment.fee,2),b.payment.total=toFixed(b.payment.total,2));b.amountchanged=
function(){0<b.payment.paypalfee&&(b.payment.fee=b.payment.amount*b.payment.paypalfee/100,b.payment.total=parseFloat(b.payment.amount)+parseFloat(b.payment.fee),b.payment.fee=toFixed(b.payment.fee,2),b.payment.total=toFixed(b.payment.total,2))};b.applycoupon=function(){b.payment.couponinfo="Coupons only valid on Credit Card Payments"};b.paypp=function(){0==b.payment.agree1||0==b.payment.agree2?b.showAlert("Missing Inputs","You must agree to both the terms.","Ok"):tringme_payment_paypal(b.payment.total)};
b.checkForm=function(){return 0==b.payment.agree1||0==b.payment.agree2?!0:!1}}]);
routerApp.controller("netbankingController",["$scope",function(b){analytics("send","pageview","#netbanking");b.payment=tringme_paymentinfo();b.payment.amount=b.payment.amounts[1];b.payment.tax=b.payment.servicetax;b.payment.coupon="";b.payment.couponinfo="";b.payment.bank=b.payment.banks[0];b.payment.agree1=0;b.applycoupon=function(){b.payment.couponinfo="Invalid Coupon Code"};b.paynb=function(){var c=b.payment;tringme_payment_netbanking(c.bank.id,c.amount)};b.checkForm=function(){return 0==b.payment.agree1?
!0:!1}}]);routerApp.controller("redeemvoucherController",["$scope",function(b){analytics("send","pageview","#voucher");b.payment.agree1=0;b.redeem=function(){b.showAlert("Invalid Voucher Code","Please check and try again later","Ok")};b.checkForm=function(){return 0==b.payment.agree1?!0:!1}}]);function pad(b){b+="";return 2>b.length?"0"+b:b}
routerApp.controller("callprogressController",["$scope","$window","$state","$stateParams",function(b,c,d,e){analytics("send","pageview","#callprogress");c=e.phone;"+"==c.charAt(0)&&(c=c.substring(1));e=tringme_reverselookup(c);var f="+"+c;null!=e?f=e.name:"1000555"==c.substring(0,7)&&(f="TringMe Test Call");b.calleeimage=e&&""!=e.photo?b.user.imageurl+"/"+e.photo+".jpg":b.user.imageurl+"/male.jpg";b.calleename=f;b.calleephone=c;b.callstatus="Calling";b.calltimer="";b.answertime=0;b.timer=0;b.microphonetext=
"Please allow microphone access to continue";b.calltimer=function(){var c=new Date;console.log(c.getTime()+" "+b.answertime);var c=parseInt((c.getTime()-b.answertime)/1E3),d=pad(c%60),f=pad(parseInt(c/60));b.$apply(function(){b.calltimer=f+":"+d})};tringme_call(c,"audioPlayer","flashdiv",!1,function(c,f){var e=tringme_callstatusToString(c);null!=e&&(b.callstatus=e,b.microphonetext="");259==c?(b.microphonetext="",b.$apply()):(b.$apply(),258==c?d.go("dashboard.microphoneaccess"):(4==c&&(b.answertime=
(new Date).getTime(),b.timer=setInterval(b.calltimer,1E3)),console.log("callstatus: "+c+" data: "+f),5<=c&&26!=c&&(tringme_hangup(),0<b.timer&&clearInterval(b.timer),b.timer=0,setTimeout(function(){d.go("dashboard.callfinish")},3E3))))})||d.go("dashboard.callnotsupported",{phone:c});b.hangup=function(){tringme_hangup();0<b.timer&&clearInterval(b.timer);b.timer=0;0<b.answertime?d.go("dashboard.callfinish"):b.dashboard()};b.ismute=!1;b.micclass=function(){return b.ismute?"mute fa fa-microphone-slash":
"mute fa fa-microphone"};b.mutesupported=function(){return tringme_ismutesupported()};b.dtmfsupported=function(){return tringme_isdtmfsupported()};b.rtcsupported=function(){return tringme_isrtcsupported()};b.mute=function(){b.ismute=tringme_mute()}}]);
routerApp.controller("callnotsupportedController",["$scope","$window","$state","$stateParams",function(b,c,d,e){b.callback=function(c,e){b.showAlert("Callback initiated","You will soon receive a call. <p>Answer and then wait to get connected to the destination");d.go("dashboard")}}]);routerApp.controller("microphoneaccessController",["$scope","$window","$state","$stateParams",function(b,c,d,e){b.call=function(b,c){d.go("dashboard.callprogress",{phone:c})}}]);
routerApp.controller("supportController",["$scope","$window","$state","$mdDialog",function(b,c,d,e){b.appdata.navclass="support";b.support.subject="";b.support.body=""}]);
routerApp.controller("supportTicketsController",["$scope","$window","$state","$mdDialog",function(b,c,d,e){analytics("send","pageview","#support");b.appdata.navclass="support";console.log("supportTicketsController");tringme_support(function(c,d,e){if(0!=c&&"undefined"!=typeof d.support_type){c=d["support_"+d.support_type];if("undefined"!=typeof c.tickets)for(b.support.tickets=c.tickets,b.support.topics=c.topics,d=0;d<c.tickets.length;d++)c.tickets[d].style="",0<c.tickets[d].isanswered&&"1"==c.tickets[d].status&&
(c.tickets[d].style="font-weight:bold;");b.$apply()}});b.show_ticket=function(b){d.go("support.ticketview",{id:b})}}]);
routerApp.controller("supportNewController",["$scope","$window","$state","$mdDialog",function(b,c,d,e){analytics("send","pageview","#supportnewticket");b.support.subject="";b.support.body="";b.support.topic={id:b.support.topics[0].id,topic:b.support.topics[0].topic};b.submitTicket=function(){if(!(5>b.support.subject.length||20>b.support.body.length)){if(b.support.topic.id!=b.support.topics[0].id&&0<b.support.tickets.length)for(var c=0;c<b.support.tickets.length;c++)if(b.support.tickets[c].topic==
b.support.topic.id&&"1"==b.support.tickets[c].status){b.showPrompt(null,"Duplicate Problem ","You already have an open ticket for this problem. Would you like to append this information to your open ticket?","Yes",function(){tringme_support(function(b,c,e){d.go("support.tickets")},b.support.tickets[c].id,0,"",b.support.body)},"Cancel");return}tringme_support(function(c,e,f){0!=c&&"undefined"!=typeof e.support_type&&("FAIL"==e["support_"+e.support_type].result&&b.showAlert("Too many open tickets",
"You have too many open tickets. Please close any tickets which were resolved before submitting a new ticket.","Ok"),d.go("support.tickets"))},0,b.support.topic.id,b.support.subject,b.support.body)}}}]);
routerApp.controller("supportTicketDetailController",["$scope","$window","$state","$stateParams","$mdDialog",function(b,c,d,e,f){analytics("send","pageview","#supportticketdetail");var h=e.id;b.support.closebuttontitle="Close Ticket";b.fetchTicket=function(){b.support.ticket={};b.support.body="";tringme_support(function(c,d,e){if(0!=c&&"undefined"!=typeof d.support_type){b.support.ticket=d["support_"+d.support_type];c=b.support.ticket.threads;for(d=0;d<c.length;d++)c[d].body=c[d].body.trim(),c[d].headclass=
"support-message-header","R"==c[d].type&&(c[d].headclass="support-reply-header");b.support.closebuttontitle="1"!=b.support.ticket.status?"Reopen":"Close Ticket";b.$apply()}},h)};b.submitTicket=function(){3>b.support.body.length||tringme_support(function(c,d,e){b.fetchTicket()},h,0,"",b.support.body)};b.canReply=function(){return"undefined"!=typeof b.support.ticket.status&&1==b.support.ticket.status?!0:!1};b.toggleTicketStatus=function(){var c=1;"1"==b.support.ticket.status&&(c=2);tringme_support(function(e,
f,l){1==c?b.fetchTicket():d.go("support.tickets")},h,0,"","",c)};b.fetchTicket()}]);routerApp.directive("header",function(){return{restrict:"A",replace:!0,templateUrl:"views/header.html",controller:["$scope","$filter",function(b,c){}]}});routerApp.directive("footerUp",function(){return{restrict:"A",replace:!0,templateUrl:"views/footer_up.html",controller:["$scope","$filter",function(b,c){}]}});
routerApp.directive("footerDown",function(){return{restrict:"A",replace:!0,templateUrl:"views/footer_down.html",controller:["$scope","$filter",function(b,c){}]}});routerApp.directive("offerStrip",function(){return{restrict:"A",replace:!0,templateUrl:"views/offer_strip.html",controller:["$scope","$filter",function(b,c){}]}});
routerApp.controller("mainCtrl",["$scope","$window","$state","$mdDialog","$location",function(b,c,d,e,f){b.appdata={email:"",password:"",dialednum:"",newphone:"",message:"",sentby:"",inprogress:"",navclass:"call"};b.userprofile={name:"",day:"",month:"",year:"",gender:"",email:"",city:"",state:"",country:""};b.appdata.offers=[];b.appdata.promos=[];b.appdata.offer={};b.appdata.promo={};b.support={};b.support.tickets=[];b.support.topics=[];b.support.topic=0;b.support.ticket={};b.appdata.androidstore=
"https://play.google.com/store/apps/details?id=com.tringme.android";b.appdata.applestore="https://itunes.apple.com/app/id1050425742?mt=8";b.promocall={title:"Get Your Free International Call",text:"We understand that you would like to try our services before you buy, so we offer you the first international call up to 2 minutes for free. To prevent misuse of this offer, the free call is limited to certain countries and offered only once per phone number.",buttontext:"",url:""};e=!!window.opera||0<=
navigator.userAgent.indexOf(" OPR/");var h="undefined"!==typeof InstallTrigger,g=0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor"),k=!!window.chrome&&!e,n=!!document.documentMode;b.appdata.browser="unknown";k?b.appdata.browser="chrome":h?b.appdata.browser="firefox":e?b.appdata.browser="opera":g?b.appdata.browser="safari":n&&(b.appdata.browser="ie");angular.element(document).ready(function(){console.log("ready: "+b.appdata.browser);contacts="";tringme_init()});b.is_loggedin=
function(){return tringme_isloggedin()};b.goto_support=function(){tringme_isloggedin()?d.go("support"):b.showAlert("TringMe Support","Please login to contact our support team.\n\nIf you are unable to login, please send an email to support@tringme.com. Please note that for any issues other than the login problem, you must login and file a support ticket.")};c.show_login_page=function(c,e){var m=f.search(),g=objValue(m,"name","");c=objValue(m,"email","");""!=c&&""!=g?(tringme_signup(g,c,"","","",""),
d.go("register")):(b.$apply(function(){"undefined"!=c&&(b.appdata.email=c);b.appdata.password=""}),d.go("login"))};b.showAlert=function(c,d,e){if(null==e||""==e)e="Ok";b.showPrompt(null,c,d,e,null)};b.showPrompt=function(b,c,d,e,f,g){6>e.length&&(e="&nbsp;"+e+"&nbsp;");b=[{label:"Cancel",action:function(b){b.close()}},{label:e,action:function(b){b.close();null!=f&&f()}}];"undefined"==typeof g||"undefined"==g||null==g||""==g?b.splice(0,1):b[0].label=g;BootstrapDialog.show({title:c,message:d,buttons:b})};
b.callbackglobal=function(c,d,e){"+"==e.charAt(0)&&(e=e.substring(1));var f=null,f=0<d?tringme_findcontact(d):tringme_reverselookup(e);d="+"+e;f&&(d=f.name);b.showPrompt(c,"Callback to "+d,"A call will be placed to your number and <br/>then we will connect you to "+d+". <p/>You will be charged for both the calls.","Continue",function(){tringme_callback(e)})};b.rateglobal=function(c,e,f){"+"==f.charAt(0)&&(f=f.substring(1));0<e?tringme_findcontact(e):tringme_reverselookup(f);tringme_getrate(function(e,
g,h){b.showPrompt(c,"Rate for +"+f,"Destination: "+g[0].destination+"<p/>Rate: "+g[0].rate+" cents/min","Call",function(){d.go("dashboard.callprogress",{phone:f})})},f)};b.validemail=function(){return tringme_isvalidemail(b.appdata.email)};b.logout=function(){analytics("send","pageview","#logout");tringme_logout()};b.update_promos_offers=function(){b.appdata.promos=b.user.promos;b.appdata.promo=b.user.promos[parseInt(10*Math.random())%b.user.promos.length];b.appdata.offers=b.user.offers;b.appdata.offer=
b.user.offers[parseInt(10*Math.random())%b.user.offers.length];var c=uistorage_get("promocallshown");tringme_isfreecallpossible()&&(1!=c||.7<Math.random())&&(b.appdata.promo=b.promocall,uistorage_set("promocallshown",1))};b.dashboard=function(){var b=uistorage_get("lastviewedid");null!=b&&0<b&&null!=tringme_findcontact(b)?(d.go("dashboard"),d.go("dashboard.contact",{id:b})):d.go("dashboard")};c.show_dashboard=function(c){console.log("show dashboard");b.$apply(function(){c.credits=parseFloat(c.credits).toFixed(2);
c.referbonus=parseFloat(c.referbonus).toFixed(2);b.user=c;b.update_promos_offers()});b.dashboard()};b.getHash=function(b){var c=0;if(0==b.length)return c;for(i=0;i<b.length;i++)var d=b.charCodeAt(i),c=(c<<5)-c+d,c=c&c;return c};c.update_contacts=function(c){console.log("update contacts: "+c);for(var d="#f16364 #f58559 #f9a43e #e4c62e #67bf74 #59a2be #2093cd #ad62a7".split(" "),e=0;e<c.length;e++){var f=parseInt(b.getHash(c[e].name)&7);c[e].tilename=c[e].name.toUpperCase()[0];c[e].tilecolor=d[f]}b.$apply(function(){b.contacts=
c})};c.update_userinfo=function(c){console.log("update userinfo");b.$apply(function(){c.credits=parseFloat(c.credits).toFixed(2);c.referbonus=parseFloat(c.referbonus).toFixed(2);b.user=c;b.update_promos_offers()})};c.update_offers=function(){};c.update_promos=function(){};c.show_error=function(c,d){b.showAlert("Failed",d,"Ok")};c.show_verify_phone_page=function(b){d.go("verifyphone")};c.show_verify_code_page=function(c){b.appdata.sentby=c;d.go("verifycode")};c.show_verify_code_popup=function(b){d.go("setting.changephonecode")};
b.confirmRedeemBonus=function(){b.showPrompt(null,"Redeem Bonus Credits","Awesome, continue on purchase page to redeem your bonus credits before it expires.","Continue",function(){d.go("payment")})};c.registration_successful=function(b){1==b?analytics("send","pageview","#registered"):analytics("send","pageview","#regsuccessful")};return this}]);
angular.module("contactFilter",[]).filter("contactfilter",function(){return function(b,c){if(!b||!c||0==c.trim().length)return b;var d=(""+c).toLowerCase(),e=[];angular.forEach(b,function(b){if(b)if(-1!==(""+b.name).toLowerCase().indexOf(d)||-1!==(""+b.defnum).indexOf(d))e.push(b);else for(var c=b.c,g=0;g<c.length;g++)if(-1!==(""+c[g].phone).indexOf(d)){e.push(b);break}});return e}});
routerApp.directive("focusOnShow",["$timeout",function(b){return{restrict:"A",link:function(c,d,e){e.ngShow&&c.$watch(e.ngShow,function(c){c&&b(function(){d.focus()},0)});e.ngHide&&c.$watch(e.ngHide,function(c){c||b(function(){d.focus()},0)})}}}]);function objValue(b,c,d){return"undefined"==b[c]||"undefined"==typeof b[c]?d:b[c]}function alertObject(b){var c=!1,d;for(d in b)b.hasOwnProperty(d)&&(alert(d+" -> "+b[d]),c=!0);c||alert("empty object")}
function Linkify(b){b=b.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,'<a href="$1" target="_blank">$1</a>');b=b.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim,'$1<a href="http://$2" target="_blank">$2</a>');return b=b.replace(/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim,'<a href="mailto:$1">$1</a>')};

