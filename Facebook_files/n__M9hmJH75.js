/*!CK:2007752295!*//*1386635921,178185015*/

if (self.CavalryLogger) { CavalryLogger.start_js(["EZE5R"]); }

__d("flash-js",["copyProperties"],function(a,b,c,d,e,f){var g=b('copyProperties');function h(){}g(h,{INIT:'flash/init',READY:'flash/ready',FAILED:'flash/failed'});e.exports=h;});
__d("legacy:flash-js",["flash-js"],function(a,b,c,d){a.Flash=b('flash-js');},3);
__d("legacy:swfobject",["swfobject"],function(a,b,c,d){var e=b('swfobject');a.deconcept=e;a.SWFObject=e.SWFObject;a.showFlashErrorDialog=e.showFlashErrorDialog;},3);
__d("VideoAutoplayPlayButton",["CSS","Event","cx"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('Event'),i=b('cx'),j={},k={getClicked:function(l){if(j.hasOwnProperty(l))return j[l].clicked;return false;},register:function(l,m,n){j[l]=h.listen(m,'click',function(){g.removeClass(m,"_5vos");g.show(n);j[l].clicked=true;});},unregister:function(l){if(j.hasOwnProperty(l))j[l].remove();}};e.exports=k;});