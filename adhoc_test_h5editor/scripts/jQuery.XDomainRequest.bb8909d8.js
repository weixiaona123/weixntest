!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){if(a.support.cors||!a.ajaxTransport||!window.XDomainRequest)return a;var b=/^(https?:)?\/\//i,c=/^get|post$/i,d=new RegExp("^(//|"+location.protocol+")","i");return a.ajaxTransport("* text html xml json",function(e,f){if(e.crossDomain&&e.async&&c.test(e.type)&&b.test(e.url)&&d.test(e.url)){var g=null;return{send:function(b,c){var d="",h=(f.dataType||"").toLowerCase();g=new XDomainRequest,/^\d+$/.test(f.timeout)&&(g.timeout=f.timeout),g.ontimeout=function(){c(500,"timeout")},g.onload=function(){var b="Content-Length: "+g.responseText.length+"\r\nContent-Type: "+g.contentType,d={code:200,message:"success"},e={text:g.responseText};try{if("html"===h||/text\/html/i.test(g.contentType))e.html=g.responseText;else if("json"===h||"text"!==h&&/\/json/i.test(g.contentType))try{e.json=a.parseJSON(g.responseText)}catch(f){d.code=500,d.message="parseerror"}else if("xml"===h||"text"!==h&&/\/xml/i.test(g.contentType)){var i=new ActiveXObject("Microsoft.XMLDOM");i.async=!1;try{i.loadXML(g.responseText)}catch(f){i=void 0}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length)throw d.code=500,d.message="parseerror","Invalid XML: "+g.responseText;e.xml=i}}catch(j){throw j}finally{c(d.code,d.message,e,b)}},g.onprogress=function(){},g.onerror=function(){c(500,"error",{text:g.responseText})},f.data&&(d="string"===a.type(f.data)?f.data:a.param(f.data)),g.open(e.type,e.url),g.send(d)},abort:function(){g&&g.abort()}}}}),a});