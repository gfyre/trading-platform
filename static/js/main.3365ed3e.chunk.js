(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(61)},49:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(22),i=n.n(c),u=(n(48),n(49),n(19)),l=n(2),s=n(5),d=n(1);!function(e){e.black="black",e.white="white"}(r||(r={}));var f={bg:r.white,fg:r.black,focus:"#119dff",borderRadius:"0.25rem"},m={invert:function(e){var t=e.bg,n=e.fg,r=Object(l.a)(e,["bg","fg"]);return Object(s.a)({},m,r,{bg:n,fg:t})}},p=Object(s.a)({},f,m),h=function(e){return e.invert(e)},v=function(e){var t=e.children;return o.a.createElement(d.a,{theme:h},t)},b=function(e){return function(t){return o.a.createElement(v,null,o.a.createElement(e,t))}},g=function(e){return e.theme.borderRadius},y=function(e){return e.theme.bg},w=function(e){return e.theme.fg},j=n(3),E=n(33),x=n(26),O=n.n(x),C=n(34),_="".concat("https://min-api.cryptocompare.com/data/pricemulti","?api_key=").concat("748f5799b70597b39add7a3507d79dea2db8b3c9d6cb15396e714a2af93e77bf"),k=["GBP","EUR","USD"],N=new Error("Fetch Timeout"),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timeout,r=void 0===n?5e3:n,a=Object(l.a)(t,["timeout"]);return new Promise(function(t,n){var o=setTimeout(function(){return n(N)},r);return fetch(e,a).then(function(e){return clearTimeout(o),t(e)},function(e){return clearTimeout(o),n(e)})})},F=function(e,t){var n=Object(j.a)(t,2),r=n[0],a=n[1];return Object.entries(a).forEach(function(t){var n=Object(j.a)(t,2),a=n[0],o=n[1];r!==a&&(e["".concat(r,":").concat(a)]=o)}),e},z=function(){var e=Object(C.a)(O.a.mark(function e(){var t,n,r,a,o,c=arguments;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:[],n=c.length>1&&void 0!==c[1]?c[1]:5e3,!(t.length<2)){e.next=4;break}throw new Error("[400]: less than 2 currencies");case 4:return r=t.join(","),e.next=7,I("".concat(_,"&fsyms=").concat(r,"&tsyms=").concat(r),{timeout:n});case 7:if(a=e.sent){e.next=10;break}throw new Error("[600]: empty response");case 10:if(a.ok){e.next=18;break}return e.t0=Error,e.t1="[".concat(a.status,"]: "),e.next=15,a.text();case 15:throw e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),new e.t0(e.t3);case 18:return e.t4=Object,e.next=21,a.json();case 21:if(e.t5=e.sent,(o=e.t4.entries.call(e.t4,e.t5)).length===t.length){e.next=25;break}throw new Error("[600]: length error");case 25:return e.abrupt("return",o.reduce(F,{}));case 26:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){var e;return!!+(e=console).log.apply(e,arguments)},S={rates:{},online:!1,updated:-1/0},B=function(e){var t=Object(a.createContext)(S),n=function(){var n=Object(a.useContext)(t);return{online:n.online,updated:n.updated,error:n.error,rates:n.rates,currencies:e}};return{Provider:function(n){var r,c=n.children,i=Object(a.useState)(S),u=Object(j.a)(i,2),l=u[0],d=u[1];return r=function(){z(e).then(function(e){return d({rates:e,online:!0,updated:Date.now()})},function(e){return d(Object(s.a)({},l,{online:P(e),error:e}))})},Object(E.a)(r,1e4,!0),o.a.createElement(t.Provider,{value:l},c)},useForex:function(e,t){var r=n(),a=r.rates,o=Object(l.a)(r,["rates"]);return[a["".concat(e,":").concat(t)],o]},useForexState:n,useCurrencyForex:function(e){var t=n(),r=t.rates,a=Object(l.a)(t,["rates"]),o=Object.entries(r).reduce(function(t,n){var r=Object(j.a)(n,2),a=r[0],o=r[1],c=a.replace("".concat(e,":"),"");return a!==c&&(t[c]=o),t},{});return Object(s.a)({rates:o},a)}}}(k),W=B.Provider,A=Object(l.a)(B,["Provider"]),R=A.useForexState,T=A.useCurrencyForex,L=A.useForex,D=n(9),U=n(13),G=function(e){var t=e.getPrecision(),n=t?"0.".concat("0".repeat(t)):"0";return e.toFormat(n)},q=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"number"===typeof t?e(t.toFixed(n)):parseInt(t.replace(".",""),10)},H=n(30),M=n(23),V=function(e){return Object(H.a)(e,{})},J=function(e,t){return n=function(e){return function(){return t(e.apply(void 0,arguments))}},r=e,Object.entries(r).reduce(function(e,t){var r=Object(j.a)(t,2),a=r[0],o=r[1];return Object(s.a)({},e,Object(D.a)({},a,n(o)))},{});var n,r},X=function(e){var t=e.currencies,n=e.amount,r=void 0===n?q(1e4):n;return t.reduce(function(e,t){return Object(s.a)({},e,Object(D.a)({},t,Object(U.a)({amount:r,currency:t})))},{})},$={exchange:Object(M.a)("EXCHANGE")},K=V(Object(D.a)({},"".concat($.exchange),function(e,t){var n,r=t.payload,a=r.amount,o=r.to,c=r.rate,i=a.getCurrency(),u=a.multiply(c).getAmount();return Object(s.a)({},e,(n={},Object(D.a)(n,i,e[i].subtract(a)),Object(D.a)(n,o,e[o].add(Object(U.a)({amount:u,currency:o}))),n))})),Q=function(e){var t=Object(a.createContext)({}),n=Object(a.createContext)(null),r=function(){return J($,Object(a.useContext)(n))},c=function(){return Object(a.useContext)(t)},i=function(e){return c()[e]};return{Provider:function(r){var c=r.children,i=Object(a.useReducer)(K,{currencies:e},X),u=Object(j.a)(i,2),l=u[0],s=u[1];return o.a.createElement(n.Provider,{value:s},o.a.createElement(t.Provider,{value:l},c))},useFund:i,useFunds:c,usePocket:function(e){return[i(e),r()]},usePockets:function(){return[c(),r()]},useActions:r}}(k),Y=Q.Provider,Z=Object(l.a)(Q,["Provider"]),ee=Z.usePocket,te=Z.usePockets,ne=(Z.useFund,Z.useFunds,Z.useActions,n(35)),re=function(e){return{black:"0,0,0",white:"255,255,255"}[e]},ae=function(e){var t=e.theme,n=e.element,r=void 0===n?"&":n,a=e.within,o=void 0!==a&&a,c=e.selector,i=function(e){return function(t){var n=t.theme;return"\n  outline: none !important;\n  ::-moz-focus-inner { border: 0 }\n  ".concat(e," { box-shadow: 0 0 0 3px ").concat(n.focus," }\n")}}(void 0===c?function(e,t){return"".concat(e,":").concat(t?"focus-within":"focus")}(r,o):c);return t?i({theme:t}):i},oe=function(e){var t=e.theme;return"\n  --bg-rgb: ".concat(re(y({theme:t})),";\n  --fg-rgb: ").concat(re(w({theme:t})),";\n  background: ").concat(y({theme:t}),";\n  color: ").concat(w({theme:t}),";\n")};function ce(){var e=Object(ne.a)(["\n  :root, body, #root { "," height: 100%; }\n  :root, body { background: ","; }\n"]);return ce=function(){return e},e}var ie=Object(d.b)(ce(),oe,w),ue=function(){return!("undefined"!==typeof navigator&&!1===navigator.onLine)},le=function(){var e=Object(a.useState)(ue),t=Object(j.a)(e,2),n=t[0],r=t[1],o=Object(a.useCallback)(function(){return r(!0)},[r]),c=Object(a.useCallback)(function(){return r(!1)},[r]);return Object(a.useEffect)(function(){return window.addEventListener("online",o),window.addEventListener("offline",c),function(){window.removeEventListener("online",o),window.removeEventListener("offline",c)}},[o,c]),n},se=d.c.div.withConfig({displayName:"Container",componentId:"um71lb-0"})(["width:100%;max-width:44rem;padding:0 1rem;margin:0 auto;"]),de=d.c.header.withConfig({displayName:"SectionHeader__Wrapper",componentId:"sc-1ns2rna-0"})(["",""],oe),fe=d.c.h1.withConfig({displayName:"SectionHeader__Title",componentId:"sc-1ns2rna-1"})(["font-size:1.5rem;line-height:1.5rem;font-weight:700;text-transform:lowercase;padding:1rem 0 ",";"],function(e){var t=e.paddingBottom;return void 0===t?"":t}),me=function(e){var t=e.children,n=e.paddingBottom,r=Object(l.a)(e,["children","paddingBottom"]);return o.a.createElement(de,r,o.a.createElement(se,null,o.a.createElement(fe,{paddingBottom:n},t)))},pe=d.c.div.withConfig({displayName:"NavBar__Flex",componentId:"icqqrl-0"})(["display:flex;justify-content:space-between;align-items:center;"]),he=d.c.div.withConfig({displayName:"NavBar__Badge",componentId:"icqqrl-1"})(["border:1px solid ",";border-radius:",";font-size:0.75rem;line-height:1.25rem;padding:calc(0.125rem - 1px) calc(0.25rem + 3px);flex:0 0 auto;"],w,g),ve=document.querySelector("#root"),be=b(function(){var e=le(),t=R().online,n=e&&t;return Object(a.useEffect)(function(){if(ve)return ve.classList[n?"remove":"add"]("offline")},[n]),o.a.createElement(me,{paddingBottom:0},o.a.createElement(pe,null,o.a.createElement("div",null,"Blockchain Forex"),!n&&o.a.createElement(he,null,e?"loading...":"offline")))}),ge=n(12),ye=d.c.label.withConfig({displayName:"Select__Wrapper",componentId:"t05d76-0"})([""," "," cursor:pointer;display:flex;align-items:center;position:relative;overflow:hidden;line-height:1.5rem;border-radius:",";padding:0 0.5rem;margin-left:-0.5rem;flex:0 0 auto;"],oe,ae({within:!0}),g),we=d.c.select.withConfig({displayName:"Select__Field",componentId:"t05d76-1"})(["border-radius:0;font-size:1rem;display:block;appearance:none;border:none;opacity:0;position:absolute;left:0;width:100%;height:100%;cursor:pointer;"]),je=d.c.div.withConfig({displayName:"Select__Value",componentId:"t05d76-2"})(["font-weight:600;margin:0.5rem 0.5rem 0.5rem 0;"]),Ee=d.c.svg.withConfig({displayName:"Select__ChevronSVG",componentId:"t05d76-3"})(["width:","px;height:","px;fill:none;flex:0 0 auto;"],function(e){return e.size},function(e){return e.size}),xe=function(e){var t=e.size,n=void 0===t?16:t,r=e.strokeWidth,a=void 0===r?1.5:r,c=e.color,i=void 0===c?"currentColor":c;return o.a.createElement(Ee,{viewBox:"0 0 16 16",size:n},o.a.createElement("path",{stroke:i,strokeWidth:a,d:"M4 6l4 4 4-4"}))},Oe=function(e){var t=e.style,n=e.className,r=Object(l.a)(e,["style","className"]);return o.a.createElement(ye,{style:t,className:n},o.a.createElement(je,null,r.value),o.a.createElement(we,r),o.a.createElement(xe,null))},Ce=function(e){var t=e.currencies,n=void 0===t?k:t,r=Object(l.a)(e,["currencies"]);return o.a.createElement(Oe,r,n.map(function(e){return o.a.createElement("option",{key:e,value:e,children:e})}))},_e=n(36),ke=function(e){return e.replace(/[^\d.]+/g,"")},Ne=function(e,t){return ke(e)===ke(t)},Ie=function(e){var t=ke(e),n=-1===t.indexOf(".")?t.length>2?"".concat(t.substr(0,t.length-2),".").concat(t.substr(-2)):t:"".concat(t.split(".")[0],".").concat(t.split(".")[1].substr(0,2)),r=parseFloat(n);return Number.isNaN(r)?"0.00":r.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1})},Fe=Object(a.forwardRef)(function(e,t){var n=e.value,r=e.onChange,c=e.children,i=Object(a.useState)(n),u=Object(j.a)(i,2),l=u[0],s=u[1];return Object(a.useEffect)(function(){Ne(l,n)||r({target:{value:l}})},[l]),Object(a.useEffect)(function(){Ne(l,n)||s(Ie(n))},[n]),o.a.createElement(_e.a,{value:l,onChange:s,refuse:/[^\d.]/g,format:Ie,children:function(e){return c(e,t)}})}),ze=d.c.div.withConfig({displayName:"Inputs__Wrapper",componentId:"h8z24-0"})([""," padding:1.5rem 0;width:100%;"],oe),Pe=Object(d.c)(se).withConfig({displayName:"Inputs__StyledContainer",componentId:"h8z24-1"})(["display:flex;justify-content:space-between;"]),Se=d.c.div.withConfig({displayName:"Inputs__RelativeWrapper",componentId:"h8z24-2"})(["position:relative;flex:1 1 auto;margin-left:1rem;"]),Be=d.c.input.withConfig({displayName:"Inputs__Input",componentId:"h8z24-3"})([""," display:block;width:100%;outline:none;appearance:none;caret-color:currentColor;padding:0;text-align:right;border:0px solid transparent;border-radius:",";font-size:2rem;line-height:2.5rem;font-weight:500;letter-spacing:-0.025em;font-family:inherit;text-transform:uppercase;text-indent:0;font-variant-numeric:tabular-nums;"],oe,g),We=Object(d.c)(Be).withConfig({displayName:"Inputs__Prefix",componentId:"h8z24-4"})(["background:transparent;pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0;"]),Ae=d.c.span.withConfig({displayName:"Inputs__Transparent",componentId:"h8z24-5"})(["color:transparent;user-select:none;"]),Re=function(e){var t=e.currency,n=e.setCurrency,r=e.prefix,a=e.form,c=Object(l.a)(e,["currency","setCurrency","prefix","form"]);return o.a.createElement(ze,c,o.a.createElement(Pe,null,o.a.createElement(Ce,{value:t,onChange:n}),o.a.createElement(Fe,a,function(e,t){return o.a.createElement(Se,null,o.a.createElement(Be,Object.assign({},a,e,{maxLength:10,ref:t})),o.a.createElement(We,{as:"div"},r," ",o.a.createElement(Ae,null,e.value)))})))};Re.defaultProps={prefix:"\u2212"};var Te=b(Re);Te.defaultProps={prefix:"+"};var Le="0.375rem",De=d.c.button.withConfig({displayName:"FlipButton__Wrapper",componentId:"ifzrsz-0"})([""," "," appearance:none;cursor:pointer;font-family:inherit;padding:0 ",";display:flex;border:"," ",";border-radius:",";align-items:center;"],oe,ae,Le,"1px solid",w,g),Ue=Object(d.c)(function(e){var t=e.color,n=void 0===t?"currentColor":t,r=e.strokeWidth,a=void 0===r?2:r,c=Object(l.a)(e,["color","strokeWidth"]);return o.a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:a},c),o.a.createElement("polyline",{points:"16 3 21 3 21 8"}),o.a.createElement("line",{x1:"4",y1:"20",x2:"21",y2:"3"}),o.a.createElement("polyline",{points:"21 16 21 21 16 21"}),o.a.createElement("line",{x1:"15",y1:"15",x2:"21",y2:"21"}),o.a.createElement("line",{x1:"4",y1:"4",x2:"9",y2:"9"}))}).withConfig({displayName:"FlipButton__StyledIcon",componentId:"ifzrsz-1"})(["height:",";width:",";margin:"," 0;display:block;flex:0 0 auto;"],"0.75rem","0.75rem",Le),Ge=d.c.div.withConfig({displayName:"FlipButton__Rate",componentId:"ifzrsz-2"})(["font-weight:500;font-size:",";line-height:1rem;padding:0.25rem 0 0.25rem ",";border-left:"," ",";margin-left:",";flex:0 0 auto;"],"0.75rem",Le,"1px solid",w,Le),qe=function(e){var t=e.rate,n=Object(l.a)(e,["rate"]);return"number"!==typeof t?null:o.a.createElement(De,Object.assign({type:"button"},n),o.a.createElement(Ue,null),o.a.createElement(Ge,null,t))};var He=Object(d.c)(qe).withConfig({displayName:"FlipButton__AbsoluteButton",componentId:"ifzrsz-3"})(["position:absolute;transform:translate(-2px,-50%);"]);qe.Absolute=function(e){var t=e.className,n=e.style,r=Object(l.a)(e,["className","style"]);return o.a.createElement(se,{className:t,style:n},o.a.createElement(He,r))};var Me=qe,Ve=d.c.button.withConfig({displayName:"SubmitButton__Wrapper",componentId:"sc-1y1w0vs-0"})([""," "," margin-bottom:0.5rem appearance:none;display:block;width:100%;font-size:1rem;line-height:1.5rem;border:solid ",";border-width:1px 0;border-radius:0;padding:calc(0.25rem - 1px) 0;cursor:",";"],oe,ae,w,function(e){return e.disabled?"default":"pointer"}),Je=d.c.div.withConfig({displayName:"SubmitButton__Main",componentId:"sc-1y1w0vs-1"})(["display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0;"]),Xe=d.c.div.withConfig({displayName:"SubmitButton__Content",componentId:"sc-1y1w0vs-2"})(["font-weight:600;"]),$e=function(e){var t=e.size,n=void 0===t?20:t,r=e.strokeWidth,a=void 0===r?1.75:r,c=e.color,i=void 0===c?"currentColor":c;return o.a.createElement("svg",{viewBox:"0 0 24 24",width:n,height:n,strokeWidth:a,fill:"none",stroke:i},o.a.createElement("path",{d:"M9 10l-5 5 5 5"}),o.a.createElement("path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}))},Ke=b(function(e){var t=e.children,n=Object(l.a)(e,["children"]);return o.a.createElement(Ve,Object.assign({type:"submit"},n),o.a.createElement(se,null,o.a.createElement(Je,null,o.a.createElement(Xe,null,t),o.a.createElement($e,null))))}),Qe=V({focus:function(e,t){var n=t.payload.source;return Object(s.a)({},e,{source:n})},input:function(e,t){var n=e.rate,r=t.payload,a=r.value,o=r.rate,c=void 0===o?n:o,i=Object(U.a)({amount:q(a)}),u=i.multiply(c);return{source:"input",rate:c,input:i,output:u}},output:function(e,t){var n=e.rate,r=t.payload,a=r.value,o=r.rate,c=void 0===o?n:o,i=Object(U.a)({amount:q(a)});return{source:"output",rate:c,input:i.divide(c),output:i}},forex:function(e,t){var n=e.source,r=e[n],a=t.payload.rate;return Qe({rate:a},{type:n,payload:{value:G(r)}})}}),Ye=function(e){var t=e.value,n=e.rate;return Qe({rate:n,source:"input"},{type:"input",payload:{value:t}})},Ze=function(e,t,n){return{ref:Object(a.useRef)(null),value:G(t[e]),onChange:function(t){return n({type:e,payload:{value:t.target.value}})},onFocus:function(){return n({type:"focus",payload:{source:e}})}}},et=function(e){var t=Object(a.useRef)();return Object(a.useEffect)(function(){t.current=e}),t.current},tt=function(e){var t=e.current;t&&(t.focus(),t.select())};var nt=b(function(e){var t=e.initialAmount,n=void 0===t?0:t,r=e.from,c=e.setFrom,i=e.to,u=e.setTo,s=Object(l.a)(e,["initialAmount","from","setFrom","to","setTo"]),d=le(),f=L(r,i),m=Object(j.a)(f,2),p=m[0],h=m[1],v=h.online,b=h.error,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={value:e,rate:t},r=Object(a.useReducer)(Qe,n,Ye),o=Object(j.a)(r,2),c=o[0],i=o[1];Object(a.useEffect)(function(){"number"===typeof t&&i({type:"forex",payload:{rate:t}})},[t]);var u={input:Ze("input",c,i),output:Ze("output",c,i)};return[c.input,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;i({type:"input",payload:{value:n,rate:t}});var r=u[c.source].ref.current;r&&r.focus()},u]}(n,p),y=Object(j.a)(g,3),w=y[0],E=y[1],x=y[2],O=ee(r),C=Object(j.a)(O,2),_=C[0],k=C[1].exchange,N=w.getAmount()>_.getAmount(),I=d&&v&&!b&&!N&&w.getAmount()>0;!function(e,t){var n=e.input,r=e.output,o=t.from,c=t.to,i=et(o),u=et(c);Object(a.useEffect)(function(){return i!==o?tt(n.ref):u!==c?tt(r.ref):void 0},[o,c,n.ref,r.ref,i,u])}(x,e);return o.a.createElement("form",Object.assign({},s,{onSubmit:function(e){if(e.preventDefault(),I){var t=Object(U.a)({amount:w.getAmount(),currency:r});k({to:i,amount:t,rate:p}),E()}}}),o.a.createElement(Re,{currency:r,setCurrency:c,form:x.input}),o.a.createElement(Me.Absolute,{rate:p,onClick:function(e){e.preventDefault();var t={to:i,from:r};u(t.from),c(t.to)}}),o.a.createElement(Te,{currency:i,setCurrency:u,form:x.output}),o.a.createElement(Ke,{disabled:!I},N?"OVERDRAFT!":"exchange"))}),rt="calc(1rem - 0.5px) calc(0.5rem - 1px)",at=d.c.div.withConfig({displayName:"Card__Wrapper",componentId:"sc-16jn9mh-0"})(["border-radius:",";border:1px solid ",";"],g,w),ot=d.c.div.withConfig({displayName:"Card__Flex",componentId:"sc-16jn9mh-1"})([""," flex:1;display:flex;align-items:center;justify-content:space-between;"],oe),ct=d.c.h3.withConfig({displayName:"Card__Currency",componentId:"sc-16jn9mh-2"})(["font-size:1rem;line-height:1.5rem;font-weight:600;padding:",";"],rt),it=d.c.div.withConfig({displayName:"Card__Amount",componentId:"sc-16jn9mh-3"})(["font-weight:400;font-size:1.5rem;line-height:1.5rem;padding:",";letter-spacing:-0.025rem;"],rt),ut=Object(d.c)(ot).withConfig({displayName:"Card__ForexGroup",componentId:"sc-16jn9mh-4"})(["border-bottom-left-radius:",";border-bottom-right-radius:",";"],g,g),lt=Object(d.c)(ot).withConfig({displayName:"Card__ForexWrapper",componentId:"sc-16jn9mh-5"})([""," text-decoration:none;overflow:hidden;position:relative;& + &::before{content:'';position:absolute;width:1px;height:100%;background:",";pointer-events:none;}&:first-of-type{border-bottom-left-radius:",";}&:last-of-type{border-bottom-right-radius:",";}&:focus{z-index:1;}"],ae,w,g,g),st=d.c.div.withConfig({displayName:"Card__ForexCurrency",componentId:"sc-16jn9mh-6"})(["padding:",";font-size:0.75rem;line-height:1rem;font-weight:600;"],rt),dt=d.c.div.withConfig({displayName:"Card__ForexRate",componentId:"sc-16jn9mh-7"})(["padding:",";font-size:0.875rem;line-height:1rem;"],rt),ft=function(e){var t=e.currency,n=e.amount,r=Object(l.a)(e,["currency","amount"]);return o.a.createElement(v,null,o.a.createElement(ot,r,o.a.createElement(ct,null,t),o.a.createElement(it,null,n)))};var mt=function(e){var t=e.from,n=e.to,r=e.rate;return o.a.createElement(lt,{as:u.b,to:"/exchange/".concat(t,"x").concat(n)},o.a.createElement(st,null,n),o.a.createElement(dt,null,r))},pt=function(e){var t=e.fund,n=Object(l.a)(e,["fund"]),r=G(t),a=t.getCurrency(),c=T(a).rates;return o.a.createElement(at,n,o.a.createElement(ft,{currency:a,amount:r}),!!c&&o.a.createElement(ut,null,Object.entries(c).map(function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1];return o.a.createElement(mt,{key:n,from:a,to:n,rate:r})})))},ht=d.c.div.withConfig({displayName:"Pockets__Wrapper",componentId:"cnkoj6-0"})([""," padding-top:2rem;"],oe),vt=d.c.div.withConfig({displayName:"Pockets__Row",componentId:"cnkoj6-1"})(["margin:0 -1rem;overflow:scroll;display:flex;flex-wrap:no-wrap;&::before,&::after{content:'';flex:0 0 0.25rem;}overflow-scrolling:touch;-webkit-overflow-scrolling:touch;scrollbar-width:none;scrollbar-height:none;-ms-overflow-style:none;&::-webkit-scrollbar{width:0;height:0;}& > ","{margin:0.5rem 0.75rem;min-width:13rem;flex:0 0 auto;}"],at);var bt=function(e){var t=te(),n=Object(j.a)(t,1)[0];return o.a.createElement(ht,e,o.a.createElement(me,null,"Pockets"),o.a.createElement(se,null,o.a.createElement(vt,null,Object.entries(n).map(function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1];return o.a.createElement(pt,{key:n,fund:r})}))))},gt=d.c.div.withConfig({displayName:"ErrorPage__Wrapper",componentId:"oj4u9x-0"})([""," font-feature-settings:'kern','liga','pnum','lnum','zero';font-size:33vmin;display:flex;align-items:center;justify-content:center;flex:1;"],oe),yt=b(function(e){var t=e.children,n=void 0===t?404:t;return o.a.createElement(gt,null,n)}),wt=k.join("|"),jt="/exchange/:from(".concat(wt,")x:to(").concat(wt,")"),Et=function(e){return"string"===typeof e?e:e.target.value},xt=function(e){var t=e.match.params,n=e.history,r={setFrom:function(e){var r=Et(e)===t.to?t.from:t.to;n.replace("/exchange/".concat(Et(e),"x").concat(r))},setTo:function(e){var r=Et(e)===t.from?t.to:t.from;n.replace("/exchange/".concat(r,"x").concat(Et(e)))}};return o.a.createElement(a.Fragment,null,o.a.createElement(nt,Object.assign({},t,r)),o.a.createElement(bt,null))},Ot=function(){return o.a.createElement(ge.d,null,o.a.createElement(ge.b,{sensitive:!0,exact:!0,strict:!0,path:jt,render:xt}),o.a.createElement(ge.a,{exact:!0,from:"/",to:"/exchange/GBPxEUR"}),o.a.createElement(ge.b,{render:function(){return o.a.createElement(yt,null)}}))},Ct=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return Object(a.createFactory)(e)});return function(e){return function(t){var n=t.children,o=Object(l.a)(t,["children"]);return r.reduceRight(function(e,t){return t(void 0,e)},Object(a.createElement)(e,o,n))}}}(function(e){return o.a.createElement(d.a,Object.assign({},e,{theme:p}))},Y,W,function(e){var t=e.children;return o.a.createElement(a.Fragment,null,o.a.createElement(ie,null),t)},u.a)(function(){return o.a.createElement(a.Fragment,null,o.a.createElement(be,null),o.a.createElement(Ot,null))}),_t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function kt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(Ct,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");_t?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):kt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):kt(t,e)})}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.3365ed3e.chunk.js.map