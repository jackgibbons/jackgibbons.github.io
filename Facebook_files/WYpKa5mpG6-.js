/*!CK:3218849494!*//*1385392971,173198911*/

if (self.CavalryLogger) { CavalryLogger.start_js(["hJ5S0"]); }

__d("EntstreamStoryDeduper",["DOM","csx"],function(a,b,c,d,e,f){var g=b('DOM'),h=b('csx'),i={dedupe:function(j,k){k=k||"._5jmm";var l=g.scry(j,k);l=l.filter(function(q){return q.getAttribute('data-dedupekey');});var m={};for(var n=0;n<l.length;n++){var o=l[n],p=o.getAttribute('data-dedupekey');if(m[p]){g.remove(o);}else m[p]=1;}}};e.exports=i;});
__d("LitestandNewStoryController",["Animation","Arbiter","AsyncRequest","BanzaiNectar","DOM","DOMScroll","EntstreamStoryDeduper","Event","LitestandMessages","LitestandNewStoryBarConfig","LitestandStream","Run","ScubaSample","Style","Vector","ViewportBounds","$","csx","queryThenMutateDOM","tx"],function(a,b,c,d,e,f){var g=b('Animation'),h=b('Arbiter'),i=b('AsyncRequest'),j=b('BanzaiNectar'),k=b('DOM'),l=b('DOMScroll'),m=b('EntstreamStoryDeduper'),n=b('Event'),o=b('LitestandMessages'),p=b('LitestandNewStoryBarConfig'),q=b('LitestandStream'),r=b('Run'),s=b('ScubaSample'),t=b('Style'),u=b('Vector'),v=b('ViewportBounds'),w=b('$'),x=b('csx'),y=b('queryThenMutateDOM'),z=b('tx'),aa=300,ba=200,ca=600,da=500,ea=600,fa,ga=[],ha=0,ia,ja,ka,la;function ma(){if(!la){la=h.subscribe(o.FILTER_SWITCH_BEGIN,oa);r.onLeave(na);}}function na(){h.unsubscribe(la);la=null;oa();}function oa(){ra();sa();ia&&k.remove(ia);ia=null;ha=0;}function pa(event){var za=p.qrt_version;if(!za)return;var ab=u.getScrollPosition().y,bb=new s('new_stories_bar');bb.addNormal('event',event);bb.addNormal('qrt_version',za);bb.addInteger('count',ha);bb.addInteger('scroll_pos',ab);bb.flush();j.log('new_stories_bar',event,{count:ha,scroll_pos:ab,homeload_id:q.getHomeloadID()});}function qa(){pa('click');ra();h.inform(o.NEW_STORY_BAR_CLICK);var za=new u(u.getScrollPosition().x,0,'document');l.scrollTo(za,aa,false,false,function(){l.scrollTo(za,0);wa();sa();});}function ra(){ga.forEach(function(za){za.remove();});ga=[];ka&&clearTimeout(ka);ka=null;}function sa(){if(!fa)return;k.remove(fa);fa=null;}function ta(){var za;if(ha===1){za=z._("1 New Story",{count:ha});}else if(ha>1){za=z._("{count} New Stories",{count:ha});}else{sa();return;}k.setContent(k.find(fa,"._75o"),za);}function ua(){ka=setTimeout(function(){ka=null;va();},da);}function va(){var za;y(function(){za=q.canInsertNewerStories();},function(){if(za){if(fa){t.set(k.find(fa,"._75r"),'top','');setTimeout(sa,ba);}wa();}else ua();},'LitestandNewStoryController/tryShowingStories');}function wa(){ra();ha=0;if(!ia)return;m.dedupe(q.getStreamRoot(),q.getStoriesSelector());t.apply(ia,{left:'',position:''});new g(ia).from('opacity',0).to('opacity',1).duration(ca).go();h.inform(o.STORIES_INSERTED);h.inform(o.NEWER_STORIES_INSERTED);h.inform('reflow');new i().setURI('/ajax/litestand/update_filter_viewtime').setData({section_id:q.getSectionID()}).send();ia=null;}function xa(){if(ja)if(Date.now()-ja>ea*1000){ja=null;}else return;k.appendContent(k.getRootElement(),fa);ta();var za=k.find(fa,"._75r");ga=[n.listen(za,'click',qa),n.listen(k.find(fa,"._75p"),'click',function(event){ja=Date.now();sa();pa('close');event.kill();})];ua();t.set(za,'top',v.getTop()+'px');pa('imp');}var ya={waitForDisplay:function(za,ab,bb){ma();ha+=bb;if(!ia)ia=w(za);if(q.disableNewStoryBar()){if(q.canInsertNewerStories()){wa();}else ua();return;}if(fa){ta();return;}if(q.canInsertNewerStories()){fa=null;wa();return;}var cb=ha>p.min_new_story_count||(q.getTotalStoryCount()>p.min_stories_read_count)||(q.getOldStoryCount()>p.min_old_story_count);if(!cb)return;fa=ab;setTimeout(xa,0);}};e.exports=ya;});