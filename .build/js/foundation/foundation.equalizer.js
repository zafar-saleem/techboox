(function(e,t,n,r){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n=!1,r=t.data("equalizer"),i=t.data(this.attr_name(!0)+"-init")||this.settings,s,o;i.act_on_hidden_el?s=r?t.find("["+this.attr_name()+'-watch="'+r+'"]'):t.find("["+this.attr_name()+"-watch]"):s=r?t.find("["+this.attr_name()+'-watch="'+r+'"]:visible'):t.find("["+this.attr_name()+"-watch]:visible");if(s.length===0)return;i.before_height_change(),t.trigger("before-height-change.fndth.equalizer"),s.height("inherit");if(i.equalize_on_stack===!1){o=s.first().offset().top,s.each(function(){if(e(this).offset().top!==o)return n=!0,!1});if(n)return}var u=s.map(function(){return e(this).outerHeight(!1)}).get();if(i.use_tallest){var a=Math.max.apply(null,u);s.css("height",a)}else{var f=Math.min.apply(null,u);s.css("height",f)}i.after_height_change(),t.trigger("after-height-change.fndtn.equalizer")},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this),r=n.data("equalizer-mq"),i=!0;r&&(r="is_"+r.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(r)&&(i=!1)),t.image_loaded(t.S("img",this),function(){if(i||Foundation.utils[r]())t.equalize(n);else{var e=n.find("["+t.attr_name()+"-watch]:visible");e.css("height","auto")}})})}}})(jQuery,window,window.document);