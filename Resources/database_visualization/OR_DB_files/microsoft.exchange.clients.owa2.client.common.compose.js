﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.exchange.clients.owa2.client.common.compose.js'] = (new Date()).getTime();
Type.registerNamespace("_cmc");_cmc.$4z=function(n,t,i){this.$$d_$E2x=Function.createDelegate(this,this.$E2x);this.$$d_$3I0=Function.createDelegate(this,this.$3I0);_cmc.$4z.initializeBase(this,[n]);this.$1E=t;this.set_$VY(2);this.get_$4y().set_$Rx(22);n.setAttribute("contenteditable","true");n.setAttribute("spellcheck","true");n.setAttribute("useinlinestyle","true");n.style.outline="none";this.$A6s(n,i.get_$1j());this.$Bz(352)};_cmc.$4z.prototype={$1E:null,$1QD:null,$9o:!1,$1tq:null,$14N:null,$14Q:null,$5Jv:!1,set_$16X:function(n){if(n){var t=this.$1QD===n;this.$1QD=n;n.get_$6PI()||this.$7oq(n);t||this.$4("CallContext")}return n},set_$G8:function(n){this.$9o=n;this.$4("IsInitialized");return n},add_$1s6:function(n){this.$14N||(this.$14N=new _js.$HI);this.$14N.$HN(n)},remove_$1s6:function(n){this.$14N&&this.$14N.$RF(n)},add_$1fh:function(n){this.$14Q||(this.$14Q=new _js.$HI);this.$14Q.$HN(n)},remove_$1fh:function(n){this.$14Q&&this.$14Q.$RF(n)},set_$Du1:function(n){this.$5Jv!==n&&(this.$5Jv=n);return n},get_$9yv:function(){var n=this.$6Hy();return n?n.toString():null},get_$9yx:function(){var n=this.$6Hy();return n?n.startContainer:null},$4Sw:function(){this.$2h4("bold",!1,null)},$4zA:function(){this.$2h4("italic",!1,null)},$5eC:function(){this.$2h4("underline",!1,null)},$64n:function(n){this.$2h4("forecolor",!1,n)},$5nK:function(n){this.$2h4("backcolor",!1,n)},$2Bf:function(){this.$2h4("undo",!1,null)},$28S:function(){this.$2h4("redo",!1,null)},$EsP:function(){this.$1IP(352)},$A6R:function(n){var i=this.$5Mc(n);var t=this.$6Ne(i);this.get_$S().append(t)},$BjZ:function(){var t=null;var n=this.$3t8();if(!this.$6Sq(n.getRangeAt(0)))return null;n.focusNode.childNodes.length>0&&n.focusNode.childNodes[n.focusOffset-1].nodeName.toLowerCase()==="a"?t=n.focusNode.childNodes[n.focusOffset-1]:n.focusNode.childNodes.length>0&&n.focusNode.lastChild.nodeName.toLowerCase()==="a"?t=n.focusNode.lastChild:n.focusNode.previousSibling&&n.focusNode.previousSibling.nodeName.toLowerCase()==="a"&&(t=n.focusNode.previousSibling);return t},$6Hy:function(){var u=this.$1TF();if(u){var r=u.startContainer;var t=u.startOffset;if(!t)return null;if(r.nodeName==="#text"){var f=t;var n=document.createRange();n.setEnd(r,f);for(;;){t--;n.setStart(r,t);var i=n.toString();if(i.startsWith(" ")||i.startsWith("<")||i.startsWith(">")||i.startsWith(String.fromCharCode(160))){n.setStart(r,t+1);return n}else if(!t)return n}}}return null},$E2x:function(n){var t=this.$6Hy();if(t){t.deleteContents();this.$4t9(t,$(n));var i=this.$3t8();t.collapse(!1);i.removeAllRanges();i.addRange(t)}},$3I0:function(){return!!this.$5ds()},$3S9:function(n){this.$14N&&this.$14N.$Mt()},$1TF:function(){var n=null;var t=null;try{n=this.$5ds();if(!n){t=document.activeElement;this.get_$S().focus();n=this.$5ds()}}catch(i){_js.Trace.logException(_cmc.$4z.$2D,i,"Exception encountered attempting to get selection for insertion")}finally{$C(t)||t.focus()}return n},$3T:function(){_js.$F.prototype.$3T.call(this);this.get_$S()[0].parentNode.appendChild($(_cmc.$4z.$93y)[0]);var n=this.$8FN();this.set_$16X(new _cmc.$1GD(n));_js.Trace.logInfo(_cmc.$4z.$2D,"sending get content callback with content on activation with content "+n);this.set_$G8(!0)},$1WC:function(n){_js.$F.prototype.$1WC.call(this,n);n.get_$9k()===8&&n.$OB();if(n.get_$9k()===9&&n.$XZ()){this.$14Q&&this.$14Q.$Mt();this.$5Jv&&this.$Wn(n)}},$1s3:function(n){_js.$F.prototype.$1s3.call(this,n);var t=this.$5ds();if(t){this.$1tq=t;_js.Trace.logInfo(this.get_$m(),"selectionRangeAtLastBlur is set to "+t.startContainer?t.startContainer.nodeValue:"null")}},$8FN:function(){var n=this.get_$S().clone();n.removeAttr("contenteditable");n.removeAttr("spellcheck");n.removeClass();n.css("min-height","");n.css("height","");n.removeAttr("tabindex");n.removeAttr("id");n.removeAttr("autoid");var t=n.wrap("<div>").parents().html();this.$1E.get_$Df()&&document.documentMode===11&&(t=t.replace(_cmc.$4z.$309,""));var i='<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css" style="display:none"><!-- p {margin-top:0;margin-bottom:0;} --></style></head><body>'+t+"</body></html>";_js.Trace.logInfo(_cmc.$4z.$2D,"Got full content from content editable div: "+i);return i},$7oq:function(n){if(_y.$13I.isInstanceOfType(n)){var f=this.$8FN();n.set_$DY(f);_js.Trace.logInfo(_cmc.$4z.$2D,"executing get content call context, content="+f)}else if(_y.$1Jy.isInstanceOfType(n)){var r=n.get_$DY();var o=this.$5Mc(r);var h=this.$6Ne(o);this.get_$S().html(h);_js.Trace.logInfo(_cmc.$4z.$2D,"executing set content call context, content="+r)}else if(_y.$13O.isInstanceOfType(n)){var t=n;var i=null;if(t.get_$CBP()){var c=n.get_$DY();var s=this.$5Mc(c);var e=this.$6Ne(s);i=$(e)}else{var u=document.createElement("div");u.innerText=t.get_$DY();i=$(u)}t.get_$3vf()===1?this.$4t8(i):t.get_$3vf()===2?this.$6Nq(i,t.get_$9zD()):this.$3vd(i,t.get_$9uG(),t.get_$9Ni())}else if(_y.$1Jz.isInstanceOfType(n))this.get_$S().focus();else throw Error.notImplemented("content editable div does not support call context type "+Object.getType(n).getName());},$A6s:function(n,t){var u="Calibri";var f="#000000";var r="12";if(t){t.get_$34c()&&(u=t.get_$34c());t.get_$34b()&&(f=t.get_$34b());t.get_$2FS()>0&&t.get_$2FS()<_cmc.$4z.$1lb.length&&(r=_cmc.$4z.$1lb[t.get_$2FS()])}var i=n.style;i.fontSize=r+"pt";i.color=f;i.backgroundColor="#FFFFFF";var e=this.$3sk(u);i.fontFamily=e;_js.Trace.logInfo(_cmc.$4z.$2D,"applying user default font "+u+", color "+f+", size "+r+", family "+e)},$3sk:function(n){for(var t=0;t<_cmc.$4z.$1Jy.length;++t)if(_cmc.$4z.$1Jy[t][0]===n)return _cmc.$4z.$1Jy[t][1];return n},$Arf:function(){var t=_js.$F.prototype.$3S.call(this);if(t&&this.$1tq&&this.$6Sq(this.$1tq)){var n=this.$3t8();n.removeAllRanges();n.addRange(this.$1tq);this.$1tq=null}},$5ds:function(){var t=this.$3t8();if(t)try{var n=t.getRangeAt(0);if(this.$6Sq(n))return n}catch(i){_js.Trace.logInfo(_cmc.$4z.$2D,"CED: TryGetSelectionRange: Ignoring an exception. Details: "+i.message)}return null},$6Sq:function(n){if($C(n.commonAncestorContainer))return!1;var r=n.commonAncestorContainer;var u=$(r);var t=this.getAttachedElement();var i=u.closest(t);return i.length?!0:!1},$4t9:function(n,t){for(var u=t.get(),e=u.length,i=0;i<e;++i){var r=u[i];n.collapse(!1);if($C(n.insertNode))$C(n.pasteHTML)||n.pasteHTML(r.innerHTML);else{var f=document.importNode(r,!0);n.insertNode(f)}}},$6Nq:function(n,t){_js.Trace.logInfo(_cmc.$4z.$2D,"Appending element. Html: "+n.html()+"");var u=this.get_$S().find('div[id^="Signature"]');if(t&&u&&u.length>0){var r=u.get(0);var i=document.createRange();i.selectNodeContents(r.previousSibling?r.previousSibling:r);i.collapse(!0);this.$4t9(i,n)}else this.get_$S().append(n)},$4t8:function(n){_js.Trace.logInfo(_cmc.$4z.$2D,"Prepending element. Html: "+n.html()+"");this.get_$S().prepend(n)},$3vd:function(n,t,i){var r=this.$1TF();if(r){_js.Trace.logInfo(_cmc.$4z.$2D,"Got a good selection range. Calling InsertElementAtRange");!r.collapsed&&i&&r.deleteContents();var f=r.cloneRange();this.$4t9(r,n);var u=this.$3t8();u.removeAllRanges();if(t){_js.Trace.logInfo(_cmc.$4z.$2D,"Set new selection after insertion");r.collapse(!1);u.addRange(r)}else{_js.Trace.logInfo(_cmc.$4z.$2D,"Restore original selection range after insertion");u.addRange(f)}}else{_js.Trace.logInfo(_cmc.$4z.$2D,"Could not get a Range to insert content, so appending the element to the end of the CED");this.$6Nq(n,!0)}},$2h4:function(n,t,i){this.$Arf();if(this.get_$k()&&_y.$IC.isInstanceOfType(this.get_$k())){var r=this.get_$k().get_$cD();if(r){r.document.execCommand(n,t,i);return}}document.execCommand(n,t,i)},$5Mc:function(n){_js.Trace.logInfo(this.get_$m(),"RemovePStyles: RemovePStyles");return n.replace(_cmc.$4z.$4eq,"$1").replace(_cmc.$4z.$4fW,"")},$6Ne:function(n){return this.$1E.get_$Df()&&document.documentMode===11?n.replace(_cmc.$4z.$7nV,"<p>&#8203;</p>"):n},$3t8:function(){if(this.get_$k()&&_y.$IC.isInstanceOfType(this.get_$k())){var n=this.get_$k().get_$cD();if(n)return n.getSelection()}return window.getSelection()}};_cmc.$1EL=function(n){this.$61T=n};_cmc.$1EL.prototype={$61T:0,get_$4d9:function(){return this.$61T},set_$Dz:function(n){return n}};_cmc.$11J=function(n,t,i){this.$tf=n;this.$il=t;this.$1QN=i};_cmc.$11J.prototype={$tf:null,$il:0,$1QN:null,get_$2e2:function(){return this.$tf},get_$4Vb:function(){return this.$il},get_$4Vc:function(){return this.$1QN},set_$Dz:function(n){return n}};_cmc.$MV=function(n,t,i){this.$6Ns=n;this.$Fc=t;this.$6Qx=i};_cmc.$MV.prototype={$Fc:null,$6Qx:!1,$18d:!1,$6Ns:0,$2zX:!1,$28c:!0,$4OG:!0,get_$DY:function(){return this.$Fc},get_$CBP:function(){return this.$6Qx},get_$6PI:function(){return this.$18d},get_$3vf:function(){return this.$6Ns},get_$9uG:function(){return this.$2zX},get_$9Ni:function(){return this.$28c},get_$9zD:function(){return this.$4OG}};function CommonComposeComponent(){}CommonComposeComponent.prototype={$2FV:function(n,t,i){var r=this;n.$r(_cmc.$kS).$1I().$t(function(){return new _cmc.$kS})},$Bl5:function(){return null}};_cmc.$1EK=function(){};_cmc.$1EK.prototype={$Fc:null,$18d:!1,get_$DY:function(){return this.$Fc},set_$DY:function(n){this.$Fc=n;return n},get_$6PI:function(){return this.$18d}};_cmc.$sj=function(n){this.$Fc=n};_cmc.$sj.prototype={$Fc:null,$18d:!1,get_$DY:function(){return this.$Fc},get_$6PI:function(){return this.$18d}};_cmc.$1GD=function(n){this.$18d=!0;this.$Fc=n};_cmc.$1GD.prototype={$Fc:null,$18d:!1,get_$DY:function(){return this.$Fc},set_$DY:function(n){this.$Fc=n;return n},get_$6PI:function(){return this.$18d}};_cmc.$1GE=function(){};_cmc.$1GE.prototype={$Fc:null,$18d:!1,get_$DY:function(){return this.$Fc},set_$DY:function(n){this.$Fc=n;return n},get_$6PI:function(){return this.$18d}};_cmc.$1L2=function(n){this.$2VG=n};_cmc.$1L2.prototype={$2VG:null,$7PP:!1,get_$1gL:function(){return this.$2VG},set_$F0l:function(n){this.$7PP=n;return n},get_$6PI:function(){return!1}};_cmc.$18B=function(n){this.$Fc=n};_cmc.$18B.prototype={$Fc:null,$18d:!1,get_$DY:function(){return this.$Fc},get_$6PI:function(){return this.$18d}};_cmc.$1Py=function(){};_cmc.$1Py.prototype={$18d:!1,get_$6PI:function(){return this.$18d}};_cmc.$Tu=function(n){this.$8E=n};_cmc.$Tu.prototype={$8E:null,get_$6PI:function(){return!1}};_cmc.$UN=function(n){this.$137=n};_cmc.$UN.prototype={$137:null,get_$6PI:function(){return!1}};_cmc.$u3=function(n,t,i,r,u,f){this.$A1=n;this.$2Pg=t;this.$50c=i;this.$1k9=r;this.$3vX=u;this.$4t1=f};_cmc.$u3.prototype={$A1:null,$2Pg:null,$50c:null,$1k9:null,$3vX:null,$4t1:null,get_$6PI:function(){return!1},get_$C6W:function(){return this.$3vX}};_cmc.$Of=function(n,t){this.$137=n;this.$2hF=t};_cmc.$Of.prototype={$137:null,$2hF:null,get_$6PI:function(){return!1}};_cmc.$gd=function(n,t){this.$2Fb=n;this.$137=t};_cmc.$gd.prototype={$2Fb:null,$137:null,get_$6PI:function(){return!1}};_cmc.$ge=function(n,t,i){this.$137=n;this.$A1=t;this.$2Fb=i};_cmc.$ge.prototype={$137:null,$A1:null,$2Fb:null,get_$6PI:function(){return!1}};_cmc.$s7=function(n,t){this.$7DR=n;this.$7DM=t};_cmc.$s7.prototype={$7DR:!1,$7DM:!1,get_$Ebf:function(){return this.$7DR},get_$EbX:function(){return this.$7DM},get_$6PI:function(){return!1}};_cmc.$1Cm=function(){};_cmc.$1Cm.prototype={get_$6PI:function(){return!1}};_cmc.$11I=function(n){this.$6Uo=n};_cmc.$11I.prototype={$6Uo:null,get_$1m:function(){return this.$6Uo},set_$Dz:function(n){return n}};_cmc.$1EM=function(n){this.$22n=n};_cmc.$1EM.prototype={$22n:null,get_$lu:function(){return this.$22n},set_$Dz:function(n){return n}};_cmc.$l8=function(){};_cmc.$l8.prototype={set_$Dz:function(n){return n}};_cmc.$si=function(n){this.$QO=n};_cmc.$si.prototype={$QO:!1,set_$Dz:function(n){this.$QO=n;return n}};_cmc.$11K=function(n,t,i,r){this.$9o=n;this.$JO=t;this.$2gg=i;this.$7DY=r};_cmc.$11K.prototype={$9o:!1,$JO:!1,$2gg:null,$7DY:!1,get_$G8:function(){return this.$9o},get_$dK:function(){return this.$JO},get_$4c8:function(){return this.$2gg},get_$Ebs:function(){return this.$7DY},set_$Dz:function(n){return n}};_cmc.$1Cf=function(n,t){_cmc.$1Cf.initializeBase(this);this.$5f=n;this.$2D=t};_cmc.$1Cf.prototype={$5f:null,$2D:null,$1Pk:function(n){if(this.$5f){var t=this;_js.$D.get_$Q().$2V(_a.$0.$1m,"ComposeCopyPasteViewModel.OnAttachViaString",function(){var i=_a.$6.$1g(_a.$0.$1m,"AttachmentCopyAndPasteItemAttachments",!0);t.$5f.$30r(n,null,i)},0)}}};_cmc.$kS=function(){};_cmc.$kS.prototype={$9:function(n,t){return new _cmc.$1Cf(n,t)}};_cmc.$4z.registerClass("_cmc.$4z",_js.$F);_cmc.$1EL.registerClass("_cmc.$1EL",null,_y.$1Ip,_y.$1WP);_cmc.$11J.registerClass("_cmc.$11J",null,_y.$1Is,_y.$1WP);_cmc.$MV.registerClass("_cmc.$MV",null,_y.$13O,_fm.$1In);CommonComposeComponent.registerClass("CommonComposeComponent",null,_a.$1X7);_cmc.$1EK.registerClass("_cmc.$1EK",null,_y.$13I,_fm.$1In);_cmc.$sj.registerClass("_cmc.$sj",null,_y.$1Jy,_fm.$1In);_cmc.$1GD.registerClass("_cmc.$1GD",null,_y.$13I,_fm.$1In);_cmc.$1GE.registerClass("_cmc.$1GE",null,_y.$13I,_fm.$1In);_cmc.$1L2.registerClass("_cmc.$1L2",null,_y.$13P,_fm.$1In);_cmc.$18B.registerClass("_cmc.$18B",null,_y.$1Jy,_fm.$1In);_cmc.$1Py.registerClass("_cmc.$1Py",null,_y.$1Jz,_fm.$1In);_cmc.$Tu.registerClass("_cmc.$Tu",null,_fm.$1In);_cmc.$UN.registerClass("_cmc.$UN",null,_fm.$1In);_cmc.$u3.registerClass("_cmc.$u3",null,_y.$1UU,_fm.$1In);_cmc.$Of.registerClass("_cmc.$Of",null,_fm.$1In);_cmc.$gd.registerClass("_cmc.$gd",null,_fm.$1In);_cmc.$ge.registerClass("_cmc.$ge",null,_fm.$1In);_cmc.$s7.registerClass("_cmc.$s7",null,_y.$1J2,_fm.$1In);_cmc.$1Cm.registerClass("_cmc.$1Cm",null,_y.$1Jt,_fm.$1In);_cmc.$11I.registerClass("_cmc.$11I",null,_y.$1Io,_y.$1WP);_cmc.$1EM.registerClass("_cmc.$1EM",null,_y.$1Iq,_y.$1WP);_cmc.$l8.registerClass("_cmc.$l8",null,_y.$1Ir,_y.$1WP);_cmc.$si.registerClass("_cmc.$si",null,_y.$1It,_y.$1WP);_cmc.$11K.registerClass("_cmc.$11K",null,_y.$1Iu,_y.$1WP);_cmc.$1Cf.registerClass("_cmc.$1Cf",_a.$En);_cmc.$kS.registerClass("_cmc.$kS");_cmc.$4z.$7nV=new RegExp("<p>\\s*</p>","gim");_cmc.$4z.$309=new RegExp("​","gim");_cmc.$4z.$2D=_a.$0.$Ju;_cmc.$4z.$1lb=["","8","10","12","14","18","24","36"];_cmc.$4z.$1Jy=[["Angsana New","'Angsana New',Serif"],["Arial","Arial,Helvetica,sans-serif"],["Calibri","Calibri,Arial,Helvetica,sans-serif"],["Cambria","Cambria,Serif"],["Comic Sans MS","'Comic Sans MS',Fantasy,cursive"],["Candara","Candara,Sans-Serif"],["Consolas","Consolas,monospace"],["Constantia","Constantia,Serif"],["Corbel","Corbel,Sans-Serif"],["Cordia New","'Cordia New',Sans-Serif"],["Courier New","'Courier New',monospace"],["DaunPenh","DaunPenh,Sans-Serif"],["Gautami","Gautami,Sans-Serif"],["Georgia","Georgia,serif"],["Gungsuh","Gungsuh,Serif"],["Helvetica","Helvetica, Sans-Serif"],["Impact","Impact, Charcoal, sans-serif"],["Iskoola Pota","'Iskoola Pota',Sans-Serif"],["Kalinga","Kalinga,Sans-Serif"],["Kartika","Kartika,Sans-Serif"],["Latha","Latha,Sans-Serif"],["Lucida Console","'Lucida Console', Monaco, monospace"],["Lucida Sans Unicode","'Lucida Sans Unicode', 'Lucida Grande', sans-serif"],["Mangal","Mangal,Sans-Serif"],["Palatino Linotype","'Palatino Linotype', 'Book Antiqua', Palatino, serif"],["Segoe","Segoe,'Segoe UI', Sans-Serif"],["Segoe UI","'Segoe UI',Sans-Serif"],["Symbol","Symbol,'Segoe UI',Tahoma,Sans-Serif"],["Tahoma","Tahoma, Geneva, sans-serif"],["Times","Times,'Times New Roman',Serif"],["Times New Roman","'Times New Roman', Times, serif"],["Trebuchet MS","'Trebuchet MS', sans-serif"],["Tunga","Tunga,Sans-Serif"],["Verdana","Verdana, Geneva, sans-serif"],["Vrinda","Vrinda,Sans-Serif"],["Wingdings","Wingdings,Zapf Dingbats"],["黑体","SimHei,'黑体',Sans-Serif"],["微軟正黑體","'Microsoft JhengHei','微軟正黑體',Sans-Serif"],["微软雅黑","'Microsoft YaHei','微软雅黑',Sans-Serif"],["宋体","SimSun,'宋体',Serif"],["宋体-ExtB","SimSun-ExtB,Serif"],["仿宋","FangSong,'仿宋',Serif"],["楷体","KaiTi,'楷体'，Sans-Serif"],["細明體","MingLiU,'細明體',Serif"],["細明體_HKSCS","MingLiU_HKSCS,'細明體_HKSCS',Serif"],["新細明體","PMingLiU,'新細明體',Serif"],["新細明體-ExtB","PMingLiU-ExtB,'新細明體-ExtB',Serif"],["맑은 고딕","'Malgun Gothic','맑은 고딕',Sans-Serif"],["굴림","Gulim,'굴림',Sans-Serif"],["돋움","Dotum,'돋움',Sans-Serif"],["바탕","Batang,'바탕',Serif"],["メイリオ","Meiryo,'メイリオ',Sans-Serif"],["ＭＳ ゴシック","'MS Gothic','ＭＳ ゴシック',Sans-Serif"],["ＭＳ Ｐゴシック","'MS PGothic','ＭＳ Ｐゴシック',Sans-Serif"],["ＭＳ 明朝","'MS Mincho','ＭＳ 明朝',Serif"],["ＭＳ Ｐ明朝","'MS PMincho','ＭＳ Ｐ明朝',Serif"],["Nyala","Nyala,Sans-Serif"],["Raavi","Raavi,Sans-Serif"],["Shruti","Shruti,Sans-Serif"],["Sylfaen","Sylfaen,Serif"]];_cmc.$4z.$93y='<style type="text/css" style="display:none;">P{margin-top:0;margin-bottom:0;}</style>';_cmc.$4z.$4eq=new RegExp("(<style[^>]*>)[\\s]*p[\\s]*{[^}]*}","i");_cmc.$4z.$4fW=new RegExp("}[\\s]*p[\\s]*{[^}]*","gi");
window.scriptsLoaded['microsoft.exchange.clients.owa2.client.common.compose.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.exchange.clients.owa2.client.common.compose.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }