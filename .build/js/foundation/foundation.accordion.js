(function(e,t,n,r){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.3",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,r=this.S;n.create(this.S(t)),r(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(t){var i=r(this).closest("["+n.attr_name()+"]"),s=n.attr_name()+"="+i.attr(n.attr_name()),o=i.data(n.attr_name(!0)+"-init")||n.settings,u=r("#"+this.href.split("#")[1]),a=e("> dd, > li",i),f=a.children("."+o.content_class),l=f.filter("."+o.active_class);t.preventDefault(),i.attr(n.attr_name())&&(f=f.add("["+s+"] dd > "+"."+o.content_class+", ["+s+"] li > "+"."+o.content_class),a=a.add("["+s+"] dd, ["+s+"] li"));if(o.toggleable&&u.is(l)){u.parent("dd, li").toggleClass(o.active_class,!1),u.toggleClass(o.active_class,!1),r(this).attr("aria-expanded",function(e,t){return t==="true"?"false":"true"}),o.callback(u),u.triggerHandler("toggled",[i]),i.triggerHandler("toggled",[u]);return}o.multi_expand||(f.removeClass(o.active_class),a.removeClass(o.active_class),a.children("a").attr("aria-expanded","false")),u.addClass(o.active_class).parent().addClass(o.active_class),o.callback(u),u.triggerHandler("toggled",[i]),i.triggerHandler("toggled",[u]),r(this).attr("aria-expanded","true")})},create:function(t){var n=this,r=t,i=e("> .accordion-navigation",r),s=r.data(n.attr_name(!0)+"-init")||n.settings;i.children("a").attr("aria-expanded","false"),i.has("."+s.content_class+"."+s.active_class).addClass(s.active_class).children("a").attr("aria-expanded","true"),s.multi_expand&&t.attr("aria-multiselectable","true")},toggle:function(e){var e=typeof e!="undefined"?e:{},n=typeof e.selector!="undefined"?e.selector:"",r=typeof e.toggle_state!="undefined"?e.toggle_state:"",i=typeof e.$accordion!="undefined"?e.$accordion:this.S(this.scope).closest("["+this.attr_name()+"]"),s=i.find("> dd"+n+", > li"+n);if(s.length<1)return t.console&&console.error("Selection not found.",n),!1;var o=this.S,u=this.settings.active_class;s.each(function(){var e=o(this),t=e.hasClass(u);(t&&r==="close"||!t&&r==="open"||r==="")&&e.find("> a").trigger("click.fndtn.accordion")})},open:function(e){var e=typeof e!="undefined"?e:{};e.toggle_state="open",this.toggle(e)},close:function(e){var e=typeof e!="undefined"?e:{};e.toggle_state="close",this.toggle(e)},off:function(){},reflow:function(){}}})(jQuery,window,window.document);