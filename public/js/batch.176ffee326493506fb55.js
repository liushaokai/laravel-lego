!function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}({0:function(t,e,n){t.exports=n("NjW2")},"450j":function(t,e){var n,r;n=function(){function t(){}return t}(),r=new n,window.lego=r,t.exports=r},NjW2:function(t,e,n){"use strict";var r,s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};r=n("450j"),r.createGridBatch=function(t,e,n){return new Vue({el:"#"+t,data:{ids:e,selectedIds:[],batches:n,currentBatchAction:null,currentBatchFormTarget:null},computed:{selected:function(){return this.selectedIds.length},selectedIdsValue:function(){return this.selectedIds.join(",")}},methods:{selectAll:function(){return this.selectedIds=this.ids},trigger:function(t){var e;if(!(s.call(this.ids,t)<0))return s.call(this.selectedIds,t)<0?this.selectedIds.push(t):this.selectedIds=function(){var n,r,s,i;for(s=this.selectedIds,i=[],n=0,r=s.length;n<r;n++)(e=s[n])!==t&&i.push(e);return i}.call(this)},selectReverse:function(){var t,e,n,r,i,c;for(t=this.selectedIds,this.selectedIds=[],i=this.ids,c=[],e=0,r=i.length;e<r;e++)n=i[e],s.call(t,n)<0?c.push(this.selectedIds.push(n)):c.push(void 0);return c},submitBatch:function(t){var e;return this.currentBatchAction=t.url,"object"==typeof t.open_target?(e="Lego_Popup_Window_Batch_"+t.name,window.open("about:blank",e,"width="+t.open_target.width+",height="+t.open_target.height+",resizeable=no"),this.currentBatchFormTarget=e):this.currentBatchFormTarget=t.open_target}}})}}});