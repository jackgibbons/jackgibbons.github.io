/*!CK:1536228289!*//*1386559177,173203223*/

if (self.CavalryLogger) { CavalryLogger.start_js(["uzfZ5"]); }

__d("TrackingPixel",["Arbiter","ControlledReferer"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('ControlledReferer'),i={_iframe:undefined,loadWithNoReferrer:function(j){if(!i._iframe){var k=document.createElement('iframe');k.frameborder=0;k.width=k.height=1;k.style.position='absolute';k.style.top='-10px';h.useFacebookReferer(k,function(){g.inform('TrackingPixel/iframeIsLoaded',null,g.BEHAVIOR_PERSISTENT);},null);document.body.appendChild(k);i._iframe=k;}g.subscribe('TrackingPixel/iframeIsLoaded',function(){var l=i._iframe.contentWindow.document,m=l.createElement('img');m.src=j;});}};e.exports=i;});
__d("ExternalTrackingTag",["AsyncSignal","TrackingPixel","Event"],function(a,b,c,d,e,f){var g=b('AsyncSignal'),h=b('TrackingPixel'),i=b('Event'),j={listenForElementClick:function(k,l,m,n){i.listen(k,'click',function(){j.sendRequest(l,m,n);});},sendRequest:function(k,l,m){if(!k)return;new g('/ads/external_tracking_tag/',{href:k,tracking_tag_id:l,adgroup_id:m}).send();h.loadWithNoReferrer(k);}};e.exports=j;});
__d("FeedAdsClickLogger",["Arbiter","AsyncRequest","Banzai","collectDataAttributes","DOM","ge","LitestandMessages","LitestandStream","Parent","TrackingNodes","ExternalTrackingTag","UIIntentionalStreamMessage","URI"],function(a,b,c,d,e,f){var g='ssinfeed',h=b('Arbiter'),i=b('AsyncRequest'),j=b('Banzai'),k=b('collectDataAttributes'),l=b('DOM'),m=b('ge'),n=b('LitestandMessages'),o=b('LitestandStream'),p=b('Parent'),q=b('TrackingNodes'),r=b('ExternalTrackingTag'),s=b('UIIntentionalStreamMessage'),t=b('URI'),u={},v=false,w=[];function x(){"use strict";}x.prototype.init=function(y){"use strict";h.subscribe("ClickRefAction/new",this.onNewUserAction.bind(this));if(y.append_tracking_data_to_links){this.appendTrackingDataToLinks();h.subscribe(n.STORIES_INSERTED,this.appendTrackingDataToLinks.bind(this));h.subscribe(s.UPDATE_HTML_CONTENT,this.appendTrackingDataToLinks.bind(this));h.subscribe(s.UPDATE_LAST_REFRESH_TIME,this.appendTrackingDataToLinks.bind(this));}};x.prototype.getStories=function(){"use strict";var y=o.getStreamRoot();if(y){return l.scry(y,o.getStoriesSelector());}else{var z=m('home_stream');if(z)return l.scry(z,'.uiStreamStory');}return [];};x.prototype.appendTrackingDataToLinks=function(){"use strict";var y=this.getStories();for(var z=0;z<y.length;z++){var aa=y[z];if(aa in w)continue;var ba=aa.getAttribute('data-ft');if(!ba||(ba.indexOf('ei')===-1)&&(ba.indexOf('mei')===-1))continue;var ca=l.scry(aa,'a');for(var da=0;da<ca.length;da++){var ea=ca[da];if(ea.getAttribute('ajaxify')!=null)continue;if(ea.getAttribute('rel')!=null)continue;var fa=ea.getAttribute('href');if(!fa||fa.charAt(0)==='#')continue;var ga=t(ea);if(ga.isFacebookURI()===false)continue;if(ga.isLinkshimURI()===true)continue;var ha=k(ea,['ft']).ft,ia=ga.getQueryData();ia.ft=ha;ia.__md__=0;ga.setQueryData(ia);ea.setAttribute('href',ga.toString());ea.setAttribute('onmousedown',"this.href = this.href.replace('__md__=0', '__md__=1');");}w.push(aa);}};x.prototype.getHref=function(y){"use strict";return (y.getAttribute&&(y.getAttribute('ajaxify')||y.getAttribute('data-endpoint'))||y.action||y.href||y.name);};x.prototype.sendLogRequest=function(y){"use strict";var z=y.ei||y.ai;if(!z&&y.mei)z=y.mf_story_key;if(y!==null&&typeof(z)==="string"){var aa=false;if(y.tn){var ba=q.parseTrackingNodeString(y.tn);for(var ca=0;ca<ba.length;ca++){var da=ba[ca][0];switch(da){case q.types.LIKE_LINK:case q.types.UNLIKE_LINK:case q.types.COMMENT:case q.types.ADD_COMMENT_BOX:return;case q.types.XBUTTON:case q.types.HIDE_LINK:case q.types.REPORT_SPAM_LINK:case q.types.HIDE_ALL_LINK:case q.types.DROPDOWN_BUTTON:case q.types.UNHIDE_LINK:return;case q.types.RELATED_SHARE_ARTICLE:case q.types.RELATED_SHARE_VIDEO:return;case q.types.ATTACHMENT:case q.types.USER_MESSAGE:aa=true;break;}}}var ea=Date.now(),fa=500;y.duplicate_click=!!u[z]&&(ea-u[z]<fa);u[z]=ea;if(j.isEnabled('ssinfeed')){j.post(g,y,{delay:0,retry:j.isEnabled('ssinfeed_retry')});}else{var ga=new i('/ajax/ssinfeed/end/').setData(y).setAllowCrossPageTransition(true).setMethod('POST');ga.send();}var ha=y.href;if(t(ha).isLinkshimURI()&&t(ha).getQueryData())ha=t(ha).getQueryData().u;if(aa&&y.external_tracking_tag&&!y.duplicate_click&&ha&&t(ha).isFacebookURI()===false)r.sendRequest(y.external_tracking_tag.url,y.external_tracking_tag.tag_id,y.external_tracking_tag.adgroup_id);}};x.prototype.onNewUserAction=function(y,z){"use strict";if(!z.node)return;var aa=this.getHref(z.node),ba=p.byTag(z.node,'input')||p.byTag(z.node,'button');if(!aa&&ba&&ba.type=="submit"&&ba.getAttribute&&ba.getAttribute('data-ft'))aa="#";var ca;if(aa&&z.event&&(z.event.type==='click'||z.event.type==='contextmenu')){ca=k(z.node,['ft']);ca.ft.href=aa;ca.ft.mouse_type=z.event.type;this.sendLogRequest(ca.ft);}};e.exports.init=function(y){if(v===false){(new x()).init(y);v=true;}};});
__d("PopoverMenu.react",["CSS","InlineBlock.react","Popover","PopoverMenu","React","ReactPropTypes","SubscriptionsHandler","cx","joinClasses","areEqual"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('InlineBlock.react'),i=b('Popover'),j=b('PopoverMenu'),k=b('React'),l=b('ReactPropTypes'),m=b('SubscriptionsHandler'),n=b('cx'),o=b('joinClasses'),p=b('areEqual'),q=k.createClass({displayName:'ReactPopoverMenu',propTypes:{alignh:l.oneOf(['left','center','right']),layerBehaviors:l.array,menu:l.object,disabled:l.bool},_menuSubscriptions:null,componentDidMount:function(){var r=this.refs.root.getDOMNode(),s=r.firstChild;g.addClass(s,"_p");this._popover=new i(r,s,this.props.layerBehaviors,{alignh:this.props.alignh,disabled:this.props.disabled});this._popoverMenu=new j(this._popover,s,this._createMenu(this.props.menu),this.props.behaviors);},componentDidUpdate:function(r){if(!p(r.menu,this.props.menu)){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}this._popoverMenu.setMenu(this._createMenu(this.props.menu));}if(this.props.alignh!==r.alignh)this._popoverMenu.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==r.disabled)if(this.props.disabled){this._popoverMenu.disable();}else this._popoverMenu.enable();},getFirstChild:function(){var r=this.props.children;return Array.isArray(r)?r[0]:r;},getButtonSize:function(){var r=this.getFirstChild();return r&&r.getButtonSize();},render:function(){var r=this.getFirstChild();r.props.className=o(r.props.className||'',"_p");return this.transferPropsTo(h({alignv:"middle",className:"uiPopover",ref:"root",disabled:null},this.props.children));},componentWillUnmount:function(){if(this._menuSubscriptions){this._menuSubscriptions.release();this._menuSubscriptions=null;}},_createMenu:function(r){var s=new r.ctor(r.menuitems,r.config);this._menuSubscriptions=new m();if(r.onItemClick)this._menuSubscriptions.addSubscriptions(s.subscribe('itemclick',r.onItemClick));if(r.onChange)this._menuSubscriptions.addSubscriptions(s.subscribe('change',r.onChange));if(this.props.onShow)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('show',this.props.onShow));if(this.props.onHide)this._menuSubscriptions.addSubscriptions(this._popover.subscribe('hide',this.props.onHide));return s;},showPopover:function(r){this._popover.showLayer();if(r){var s=this._popoverMenu.getMenu();s.blur();s.focusAnItem(r);}},hidePopover:function(){this._popover.hideLayer();}});e.exports=q;});
__d("ReactMenu",["Menu","MenuItem","MenuSelectableItem","MenuTheme","SelectableMenu","cx","flattenArray","joinClasses","merge"],function(a,b,c,d,e,f){var g=b('Menu'),h=b('MenuItem'),i=b('MenuSelectableItem'),j=b('MenuTheme'),k=b('SelectableMenu'),l=b('cx'),m=b('flattenArray'),n=b('joinClasses'),o=b('merge'),p=Array.prototype.slice;function q(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:g,menuitems:m(s||[]),config:{theme:j,maxheight:r?r.maxheight:null,className:r?r.className:null}};return o(t,r);}q.SelectableMenu=function(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:k,menuitems:m(s),config:{className:n("_57di",r?r.className:null),theme:j,multiple:r&&r.multiple,maxheight:r?r.maxheight:null}};return o(t,r);};q.Item=function(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:h,reactChildren:s};return o(t,r);};q.SelectableItem=function(r,s){if(!Array.isArray(s))s=p.call(arguments,1);var t={ctor:i,reactChildren:s};return o(t,r);};e.exports=q;});
__d("UFIOrderingModeSelector.react",["InlineBlock.react","Link.react","LoadingIndicator.react","React","Image.react","ReactMenu","PopoverMenu.react","cx","ix"],function(a,b,c,d,e,f){var g=b('InlineBlock.react'),h=b('Link.react'),i=b('LoadingIndicator.react'),j=b('React'),k=b('Image.react'),l=b('ReactMenu'),m=b('PopoverMenu.react'),n=b('cx'),o=b('ix'),p=l.SelectableMenu,q=l.SelectableItem,r=j.createClass({displayName:'UFIOrderingModeSelector',getInitialState:function(){var s=null;this.props.orderingmodes.map(function(t){if(t.selected)s=t;});return {selectedMode:s};},onMenuItemClick:function(s,t){var u=t.item.getValue();this.props.orderingmodes.map(function(v){if(v.value===u)this.setState({selectedMode:v});}.bind(this));this.props.onOrderChanged(u);},render:function(){var s=null;if(this.props.currentOrderingMode!=this.state.selectedMode.value)s=i({className:"UFIOrderingModeSelectorLoading",color:"white",size:"small"});var t=p({onItemClick:this.onMenuItemClick},this.props.orderingmodes.map(function(u){return (q({key:u.value,value:u.value,selected:u.value===this.state.selectedMode.value},u.name));}.bind(this)));return (j.DOM.div({className:"UFIOrderingModeSelector"},s,g(null,m({className:"UFIOrderingModeSelectorPopover",menu:t,alignh:"right"},h(null,this.state.selectedMode.name,k({className:"UFIOrderingModeSelectorDownCaret",src:o('/images/ui/xhp/link/more/down_caret.gif')}))))));}});e.exports=r;});