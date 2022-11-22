/*! For license information please see 656.4d137136.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[656],{83:function(r,e,t){t.r(e),t.d(e,{default:function(){return Sr}});var o,n=t(885),a=t(791),i=t(168),s=t(444),p=s.ZP.b(o||(o=(0,i.Z)(["\n  text-align: center;\n  font-size: ",";\n  color: ",";\n"])),(function(r){return r.theme.fontSizes.l}),(function(r){return r.theme.colors.hover})),d=t(725),c=t.n(d),l=function(r,e){var t=c()({},r,e);for(var o in r){var n;r[o]&&"object"===typeof e[o]&&c()(t,((n={})[o]=c()(r[o],e[o]),n))}return t},u={breakpoints:[40,52,64].map((function(r){return r+"em"}))},g=function(r){return"@media screen and (min-width: "+r+")"},f=function(r,e){return m(e,r,r)},m=function(r,e,t,o,n){for(e=e&&e.split?e.split("."):[e],o=0;o<e.length;o++)r=r?r[e[o]]:n;return r===n?t:r},h=function r(e){var t={},o=function(r){var o={},n=!1,a=r.theme&&r.theme.disableStyledSystemCache;for(var i in r)if(e[i]){var s=e[i],p=r[i],d=m(r.theme,s.scale,s.defaults);if("object"!==typeof p)c()(o,s(p,d,r));else{if(t.breakpoints=!a&&t.breakpoints||m(r.theme,"breakpoints",u.breakpoints),Array.isArray(p)){t.media=!a&&t.media||[null].concat(t.breakpoints.map(g)),o=l(o,b(t.media,s,d,p,r));continue}null!==p&&(o=l(o,y(t.breakpoints,s,d,p,r)),n=!0)}}return n&&(o=function(r){var e={};return Object.keys(r).sort((function(r,e){return r.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(t){e[t]=r[t]})),e}(o)),o};o.config=e,o.propNames=Object.keys(e),o.cache=t;var n=Object.keys(e).filter((function(r){return"config"!==r}));return n.length>1&&n.forEach((function(t){var n;o[t]=r(((n={})[t]=e[t],n))})),o},b=function(r,e,t,o,n){var a={};return o.slice(0,r.length).forEach((function(o,i){var s,p=r[i],d=e(o,t,n);p?c()(a,((s={})[p]=c()({},a[p],d),s)):c()(a,d)})),a},y=function(r,e,t,o,n){var a={};for(var i in o){var s=r[i],p=e(o[i],t,n);if(s){var d,l=g(s);c()(a,((d={})[l]=c()({},a[l],p),d))}else c()(a,p)}return a},v=function(r){var e=r.properties,t=r.property,o=r.scale,n=r.transform,a=void 0===n?f:n,i=r.defaultScale;e=e||[t];var s=function(r,t,o){var n={},i=a(r,t,o);if(null!==i)return e.forEach((function(r){n[r]=i})),n};return s.scale=o,s.defaults=i,s},S=function(r){void 0===r&&(r={});var e={};return Object.keys(r).forEach((function(t){var o=r[t];e[t]=!0!==o?"function"!==typeof o?v(o):o:v({property:t,scale:t})})),h(e)},x=S({width:{property:"width",scale:"sizes",transform:function(r,e){return m(e,r,!function(r){return"number"===typeof r&&!isNaN(r)}(r)||r>1?r:100*r+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),R=x,w={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};w.bg=w.backgroundColor;var k=S(w),T=k,C=S({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),j=S({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),W=j,B={space:[0,4,8,16,32,64,128,256,512]},z=S({gridGap:{property:"gridGap",scale:"space",defaultScale:B.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:B.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:B.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),L=z,Z={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};Z.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},Z.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},Z.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},Z.borderBottomColor={property:"borderBottomColor",scale:"colors"},Z.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},Z.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},Z.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},Z.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},Z.borderLeftColor={property:"borderLeftColor",scale:"colors"},Z.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},Z.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},Z.borderRightColor={property:"borderRightColor",scale:"colors"},Z.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var O=S(Z),P=O,A={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};A.bgImage=A.backgroundImage,A.bgSize=A.backgroundSize,A.bgPosition=A.backgroundPosition,A.bgRepeat=A.backgroundRepeat;var G=S(A),I=G,X={space:[0,4,8,16,32,64,128,256,512]},Y=S({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:X.space},right:{property:"right",scale:"space",defaultScale:X.space},bottom:{property:"bottom",scale:"space",defaultScale:X.space},left:{property:"left",scale:"space",defaultScale:X.space}}),H=Y,_={space:[0,4,8,16,32,64,128,256,512]},E=function(r){return"number"===typeof r&&!isNaN(r)},N=function(r,e){if(!E(r))return m(e,r,r);var t=r<0,o=Math.abs(r),n=m(e,o,o);return E(n)?n*(t?-1:1):t?"-"+n:n},F={};F.margin={margin:{property:"margin",scale:"space",transform:N,defaultScale:_.space},marginTop:{property:"marginTop",scale:"space",transform:N,defaultScale:_.space},marginRight:{property:"marginRight",scale:"space",transform:N,defaultScale:_.space},marginBottom:{property:"marginBottom",scale:"space",transform:N,defaultScale:_.space},marginLeft:{property:"marginLeft",scale:"space",transform:N,defaultScale:_.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:N,defaultScale:_.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:N,defaultScale:_.space}},F.margin.m=F.margin.margin,F.margin.mt=F.margin.marginTop,F.margin.mr=F.margin.marginRight,F.margin.mb=F.margin.marginBottom,F.margin.ml=F.margin.marginLeft,F.margin.mx=F.margin.marginX,F.margin.my=F.margin.marginY,F.padding={padding:{property:"padding",scale:"space",defaultScale:_.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:_.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:_.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:_.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:_.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:_.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:_.space}},F.padding.p=F.padding.padding,F.padding.pt=F.padding.paddingTop,F.padding.pr=F.padding.paddingRight,F.padding.pb=F.padding.paddingBottom,F.padding.pl=F.padding.paddingLeft,F.padding.px=F.padding.paddingX,F.padding.py=F.padding.paddingY;var q=function(){for(var r={},e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t.forEach((function(e){e&&e.config&&c()(r,e.config)}));var n=h(r);return n}(S(F.margin),S(F.padding));S({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function D(){return D=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},D.apply(this,arguments)}var M=function(r,e,t,o,n){for(e=e&&e.split?e.split("."):[e],o=0;o<e.length;o++)r=r?r[e[o]]:n;return r===n?t:r},J=[40,52,64].map((function(r){return r+"em"})),U={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},K={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},Q={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},V={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},$=function(r,e){if("number"!==typeof e||e>=0)return M(r,e,e);var t=Math.abs(e),o=M(r,t,t);return"string"===typeof o?"-"+o:-1*o},rr=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(r,e){var t;return D({},r,((t={})[e]=$,t))}),{}),er=function r(e){return function(t){void 0===t&&(t={});var o=D({},U,{},t.theme||t),n={},a=function(r){return function(e){var t={},o=M(e,"breakpoints",J),n=[null].concat(o.map((function(r){return"@media screen and (min-width: "+r+")"})));for(var a in r){var i="function"===typeof r[a]?r[a](e):r[a];if(null!=i)if(Array.isArray(i))for(var s=0;s<i.slice(0,n.length).length;s++){var p=n[s];p?(t[p]=t[p]||{},null!=i[s]&&(t[p][a]=i[s])):t[a]=i[s]}else t[a]=i}return t}}("function"===typeof e?e(o):e)(o);for(var i in a){var s=a[i],p="function"===typeof s?s(o):s;if("variant"!==i)if(p&&"object"===typeof p)n[i]=r(p)(o);else{var d=M(K,i,i),c=M(V,d),l=M(o,c,M(o,d,{})),u=M(rr,d,M)(l,p,p);if(Q[d])for(var g=Q[d],f=0;f<g.length;f++)n[g[f]]=u;else n[d]=u}else n=D({},n,{},r(M(o,p))(o))}return n}},tr=function(r){var e,t,o=r.scale,n=r.prop,a=void 0===n?"variant":n,i=r.variants,s=void 0===i?{}:i,p=r.key;t=Object.keys(s).length?function(r,e,t){return er(m(e,r,null))(t.theme)}:function(r,e){return m(e,r,null)},t.scale=o||p,t.defaults=s;var d=((e={})[a]=t,e);return h(d)},or=(tr({key:"buttons"}),tr({key:"textStyles",prop:"textStyle"}),tr({key:"colorStyles",prop:"colors"}),R.width,R.height,R.minWidth,R.minHeight,R.maxWidth,R.maxHeight,R.size,R.verticalAlign,R.display,R.overflow,R.overflowX,R.overflowY,T.opacity,C.fontSize,C.fontFamily,C.fontWeight,C.lineHeight,C.textAlign,C.fontStyle,C.letterSpacing,W.alignItems,W.alignContent,W.justifyItems,W.justifyContent,W.flexWrap,W.flexDirection,W.flex,W.flexGrow,W.flexShrink,W.flexBasis,W.justifySelf,W.alignSelf,W.order,L.gridGap,L.gridColumnGap,L.gridRowGap,L.gridColumn,L.gridRow,L.gridAutoFlow,L.gridAutoColumns,L.gridAutoRows,L.gridTemplateColumns,L.gridTemplateRows,L.gridTemplateAreas,L.gridArea,P.borderWidth,P.borderStyle,P.borderColor,P.borderTop,P.borderRight,P.borderBottom,P.borderLeft,P.borderRadius,I.backgroundImage,I.backgroundSize,I.backgroundPosition,I.backgroundRepeat,H.zIndex,H.top,H.right,H.bottom,H.left,(0,s.ZP)("div")(k,q,x,j,z,G,O,Y)),nr=t(184);function ar(r){var e=r.message;return(0,nr.jsx)(or,{display:"flex",justifyContent:"center",children:(0,nr.jsxs)(p,{children:["Sorry, something wrong! ",(0,nr.jsx)("br",{})," ",e,"! :("]})})}var ir,sr,pr,dr,cr,lr,ur=t(207),gr=t(731),fr=s.ZP.section(ir||(ir=(0,i.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(r){return r.theme.space[5]}),(function(r){return r.theme.space[5]}),(function(r){return r.theme.space[5]}),(function(r){return r.theme.space[5]})),mr=s.ZP.h1(sr||(sr=(0,i.Z)(["\n  color: ",";\n  padding-bottom: ",";\n  text-align: center;\n  text-shadow: 5px 4px 0px rgba(255, 255, 255, 0.168);\n"])),(function(r){return r.theme.colors.hover}),(function(r){return r.theme.space[5]})),hr=s.ZP.div(pr||(pr=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: ",";\n"])),(function(r){return r.theme.space[4]})),br=s.ZP.img(dr||(dr=(0,i.Z)([""]))),yr=s.ZP.p(cr||(cr=(0,i.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n"])),(function(r){return r.theme.fontSizes.m}),(function(r){return r.theme.fontWeights.medium}),(function(r){return r.theme.space[4]}),(function(r){return r.theme.space[4]}),(function(r){return r.theme.space[4]})),vr=(0,s.ZP)(gr.rU)(lr||(lr=(0,i.Z)(["\n  background-color: ",";\n  border-radius: 10px;\n  overflow: hidden;\n  color: ",";\n  transition: box-shadow 250ms linear, transform 250ms linear;\n\n  &:hover,\n  &:focus {\n    box-shadow: 8px 8px 8px 1px rgba(0, 0, 0, 0.29);\n    transform: scale(1.05);\n  }\n"])),(function(r){return r.theme.colors.filmCard}),(function(r){return r.theme.colors.black}));function Sr(){var r=(0,a.useState)([]),e=(0,n.Z)(r,2),t=e[0],o=e[1],i=(0,a.useState)(""),s=(0,n.Z)(i,2),p=s[0],d=s[1];return(0,a.useEffect)((function(){(0,ur.Df)().then(o).catch((function(r){d(r.message),console.log(r)}))}),[]),(0,nr.jsxs)(fr,{children:[(0,nr.jsx)(mr,{children:"Trending today"}),0!==t.length&&(0,nr.jsx)(hr,{children:t.map((function(r){return(0,nr.jsxs)(vr,{to:"/movies/".concat(r.id),children:[(0,nr.jsx)(br,{src:"https://image.tmdb.org/t/p/w400/".concat(r.poster_path),alt:r.title}),(0,nr.jsx)(yr,{children:r.title})]},r.id)}))}),0===t.length&&""!==p&&(0,nr.jsx)(ar,{message:p})]})}},207:function(r,e,t){t.d(e,{Df:function(){return d},XT:function(){return l},YJ:function(){return g},q5:function(){return b},yo:function(){return m}});var o=t(861),n=t(757),a=t.n(n),i=t(44),s="1c308592d719c7668d47adc63622f209",p="https://api.themoviedb.org/3/";function d(){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)(a().mark((function r(){var e,t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.ZP.get("".concat(p,"trending/movie/week?api_key=").concat(s));case 2:return e=r.sent,r.next=5,e.data.results;case 5:return t=r.sent,r.abrupt("return",t);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function l(r){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)(a().mark((function r(e){var t,o,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={method:"get",url:"".concat(p,"search/movie"),params:{api_key:s,query:e}},r.next=3,(0,i.ZP)(t);case 3:return o=r.sent,r.next=6,o.data.results;case 6:return n=r.sent,r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function g(r){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)(a().mark((function r(e){var t,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.ZP.get("".concat(p,"movie/").concat(e,"?api_key=").concat(s));case 2:return t=r.sent,r.next=5,t.data;case 5:return o=r.sent,r.abrupt("return",o);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function m(r){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)(a().mark((function r(e){var t,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.ZP.get("".concat(p,"movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=r.sent,r.next=5,t.data.cast;case 5:return o=r.sent,r.abrupt("return",o);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function b(r){return y.apply(this,arguments)}function y(){return(y=(0,o.Z)(a().mark((function r(e){var t,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.ZP.get("".concat(p,"movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=r.sent,r.next=5,t.data.results;case 5:return o=r.sent,r.abrupt("return",o);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},725:function(r){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(r){o[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(n){return!1}}()?Object.assign:function(r,a){for(var i,s,p=n(r),d=1;d<arguments.length;d++){for(var c in i=Object(arguments[d]))t.call(i,c)&&(p[c]=i[c]);if(e){s=e(i);for(var l=0;l<s.length;l++)o.call(i,s[l])&&(p[s[l]]=i[s[l]])}}return p}}}]);
//# sourceMappingURL=656.4d137136.chunk.js.map