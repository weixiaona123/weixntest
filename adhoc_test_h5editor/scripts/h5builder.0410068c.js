"use strict";!function(a){a(function(){var b=a("#demo-btn"),c=a("#demo-desktop"),d=a("#demo-input"),e=a(".color-box"),f=a(".img-check-box"),g=["#58c0c5","#ec7c7c","#313131"],h=[a("#bg-one").attr("src"),a("#bg-two").attr("src")];d.on("keyup",function(){var a=d.val();a||(a="演示按钮"),b.text(a)}),e.on("click",function(){e.removeClass("check-avtive");var c=a(this);c.addClass("check-avtive");var d=e.index(c),f=g[d];b.css("backgroundColor",f)}),f.on("click",function(){f.removeClass("check-avtive");var b=a(this);b.addClass("check-avtive");var d=f.index(b);c.attr("src",h[d])})})}(jQuery);