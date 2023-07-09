(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function te(){}const ji=n=>n;function Ru(n,e){for(const t in e)n[t]=e[t];return n}function Ja(n){return n()}function oo(){return Object.create(null)}function le(n){n.forEach(Ja)}function pt(n){return typeof n=="function"}function he(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Nu(n){return Object.keys(n).length===0}function Xs(n,...e){if(n==null)return te;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Xa(n){let e;return Xs(n,t=>e=t)(),e}function Rt(n,e,t){n.$$.on_destroy.push(Xs(e,t))}function Au(n,e,t,i){if(n){const s=Za(n,e,t,i);return n[0](s)}}function Za(n,e,t,i){return n[1]&&i?Ru(t.ctx.slice(),n[1](i(e))):t.ctx}function Pu(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function Ou(n,e,t,i,s,r){if(s){const o=Za(e,t,i,r);n.p(o,s)}}function Du(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function Mu(n,e,t){return n.set(t),e}function Zs(n){return n&&pt(n.destroy)?n.destroy:te}function ao(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}const el=typeof window<"u";let er=el?()=>window.performance.now():()=>Date.now(),tr=el?n=>requestAnimationFrame(n):te;const Vt=new Set;function tl(n){Vt.forEach(e=>{e.c(n)||(Vt.delete(e),e.f())}),Vt.size!==0&&tr(tl)}function nr(n){let e;return Vt.size===0&&tr(tl),{promise:new Promise(t=>{Vt.add(e={c:n,f:t})}),abort(){Vt.delete(e)}}}function m(n,e){n.appendChild(e)}function nl(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Lu(n){const e=b("style");return xu(nl(n),e),e.sheet}function xu(n,e){return m(n.head||n,e),e.sheet}function I(n,e,t){n.insertBefore(e,t||null)}function E(n){n.parentNode&&n.parentNode.removeChild(n)}function qi(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function L(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function _e(n){return document.createTextNode(n)}function A(){return _e(" ")}function gt(){return _e("")}function z(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function hi(n){return function(e){return e.preventDefault(),n.call(this,e)}}function Gi(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function $u(n){return Array.from(n.childNodes)}function ke(n,e){e=""+e,n.data!==e&&(n.data=e)}function oi(n,e){n.value=e??""}function Ye(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function V(n,e,t){n.classList[t?"add":"remove"](e)}function il(n,e,{bubbles:t=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,i,e),s}const mi=new Map;let vi=0;function Fu(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Uu(n,e){const t={stylesheet:Lu(e),rules:{}};return mi.set(n,t),t}function yi(n,e,t,i,s,r,o,a=0){const l=16.666/i;let c=`{
`;for(let g=0;g<=1;g+=l){const S=e+(t-e)*r(g);c+=g*100+`%{${o(S,1-S)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Fu(u)}_${a}`,d=nl(n),{stylesheet:f,rules:p}=mi.get(d)||Uu(d,n);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${h} ${i}ms linear ${s}ms 1 both`,vi+=1,h}function wi(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),vi-=s,vi||Wu())}function Wu(){tr(()=>{vi||(mi.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&E(e)}),mi.clear())})}let An;function En(n){An=n}function Bu(){if(!An)throw new Error("Function called outside component initialization");return An}function ir(){const n=Bu();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=il(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function Hu(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const Wt=[],ie=[];let zt=[];const Ns=[],Vu=Promise.resolve();let As=!1;function zu(){As||(As=!0,Vu.then(sl))}function ht(n){zt.push(n)}function ce(n){Ns.push(n)}const fs=new Set;let $t=0;function sl(){if($t!==0)return;const n=An;do{try{for(;$t<Wt.length;){const e=Wt[$t];$t++,En(e),ju(e.$$)}}catch(e){throw Wt.length=0,$t=0,e}for(En(null),Wt.length=0,$t=0;ie.length;)ie.pop()();for(let e=0;e<zt.length;e+=1){const t=zt[e];fs.has(t)||(fs.add(t),t())}zt.length=0}while(Wt.length);for(;Ns.length;)Ns.pop()();As=!1,fs.clear(),En(n)}function ju(n){if(n.fragment!==null){n.update(),le(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ht)}}function qu(n){const e=[],t=[];zt.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),zt=e}let gn;function sr(){return gn||(gn=Promise.resolve(),gn.then(()=>{gn=null})),gn}function St(n,e,t){n.dispatchEvent(il(`${e?"intro":"outro"}${t}`))}const di=new Set;let Ue;function Pe(){Ue={r:0,c:[],p:Ue}}function Oe(){Ue.r||le(Ue.c),Ue=Ue.p}function N(n,e){n&&n.i&&(di.delete(n),n.i(e))}function P(n,e,t,i){if(n&&n.o){if(di.has(n))return;di.add(n),Ue.c.push(()=>{di.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}const rr={duration:0};function Gu(n,e,t){const i={direction:"in"};let s=e(n,t,i),r=!1,o,a,l=0;function c(){o&&wi(n,o)}function u(){const{delay:d=0,duration:f=300,easing:p=ji,tick:v=te,css:g}=s||rr;g&&(o=yi(n,0,1,f,d,p,g,l++)),v(0,1);const S=er()+d,y=S+f;a&&a.abort(),r=!0,ht(()=>St(n,!0,"start")),a=nr(w=>{if(r){if(w>=y)return v(1,0),St(n,!0,"end"),c(),r=!1;if(w>=S){const k=p((w-S)/f);v(k,1-k)}}return r})}let h=!1;return{start(){h||(h=!0,wi(n),pt(s)?(s=s(i),sr().then(u)):u())},invalidate(){h=!1},end(){r&&(c(),r=!1)}}}function Ku(n,e,t){const i={direction:"out"};let s=e(n,t,i),r=!0,o;const a=Ue;a.r+=1;function l(){const{delay:c=0,duration:u=300,easing:h=ji,tick:d=te,css:f}=s||rr;f&&(o=yi(n,1,0,u,c,h,f));const p=er()+c,v=p+u;ht(()=>St(n,!1,"start")),nr(g=>{if(r){if(g>=v)return d(0,1),St(n,!1,"end"),--a.r||le(a.c),!1;if(g>=p){const S=h((g-p)/u);d(1-S,S)}}return r})}return pt(s)?sr().then(()=>{s=s(i),l()}):l(),{end(c){c&&s.tick&&s.tick(1,0),r&&(o&&wi(n,o),r=!1)}}}function lo(n,e,t,i){const s={direction:"both"};let r=e(n,t,s),o=i?0:1,a=null,l=null,c=null;function u(){c&&wi(n,c)}function h(f,p){const v=f.b-o;return p*=Math.abs(v),{a:o,b:f.b,d:v,duration:p,start:f.start,end:f.start+p,group:f.group}}function d(f){const{delay:p=0,duration:v=300,easing:g=ji,tick:S=te,css:y}=r||rr,w={start:er()+p,b:f};f||(w.group=Ue,Ue.r+=1),a||l?l=w:(y&&(u(),c=yi(n,o,f,v,p,g,y)),f&&S(0,1),a=h(w,v),ht(()=>St(n,f,"start")),nr(k=>{if(l&&k>l.start&&(a=h(l,v),l=null,St(n,a.b,"start"),y&&(u(),c=yi(n,o,a.b,a.duration,0,g,r.css))),a){if(k>=a.end)S(o=a.b,1-o),St(n,a.b,"end"),l||(a.b?u():--a.group.r||le(a.group.c)),a=null;else if(k>=a.start){const R=k-a.start;o=a.a+a.d*g(R/a.duration),S(o,1-o)}}return!!(a||l)}))}return{run(f){pt(r)?sr().then(()=>{r=r(s),d(f)}):d(f)},end(){u(),a=l=null}}}function Vn(n,e){n.d(1),e.delete(n.key)}function or(n,e){P(n,1,1,()=>{e.delete(n.key)})}function mt(n,e,t,i,s,r,o,a,l,c,u,h){let d=n.length,f=r.length,p=d;const v={};for(;p--;)v[n[p].key]=p;const g=[],S=new Map,y=new Map,w=[];for(p=f;p--;){const D=h(s,r,p),U=t(D);let C=o.get(U);C?i&&w.push(()=>C.p(D,e)):(C=c(U,D),C.c()),S.set(U,g[p]=C),U in v&&y.set(U,Math.abs(p-v[U]))}const k=new Set,R=new Set;function O(D){N(D,1),D.m(a,u),o.set(D.key,D),u=D.first,f--}for(;d&&f;){const D=g[f-1],U=n[d-1],C=D.key,M=U.key;D===U?(u=D.first,d--,f--):S.has(M)?!o.has(C)||k.has(C)?O(D):R.has(M)?d--:y.get(C)>y.get(M)?(R.add(C),O(D)):(k.add(M),d--):(l(U,o),d--)}for(;d--;){const D=n[d];S.has(D.key)||l(D,o)}for(;f;)O(g[f-1]);return le(w),g}function ue(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function B(n){n&&n.c()}function $(n,e,t,i){const{fragment:s,after_update:r}=n.$$;s&&s.m(e,t),i||ht(()=>{const o=n.$$.on_mount.map(Ja).filter(pt);n.$$.on_destroy?n.$$.on_destroy.push(...o):le(o),n.$$.on_mount=[]}),r.forEach(ht)}function F(n,e){const t=n.$$;t.fragment!==null&&(qu(t.after_update),le(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Yu(n,e){n.$$.dirty[0]===-1&&(Wt.push(n),zu(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function pe(n,e,t,i,s,r,o,a=[-1]){const l=An;En(n);const c=n.$$={fragment:null,ctx:[],props:r,update:te,not_equal:s,bound:oo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:oo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&Yu(n,h)),d}):[],c.update(),u=!0,le(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const h=$u(e.target);c.fragment&&c.fragment.l(h),h.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&N(n.$$.fragment),$(n,e.target,e.anchor,e.customElement),sl()}En(l)}class ge{$destroy(){F(this,1),this.$destroy=te}$on(e,t){if(!pt(t))return te;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Nu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ft=[];function Qu(n,e){return{subscribe:zn(n,e).subscribe}}function zn(n,e=te){let t;const i=new Set;function s(a){if(he(n,a)&&(n=a,t)){const l=!Ft.length;for(const c of i)c[1](),Ft.push(c,n);if(l){for(let c=0;c<Ft.length;c+=2)Ft[c][0](Ft[c+1]);Ft.length=0}}}function r(a){s(a(n))}function o(a,l=te){const c=[a,l];return i.add(c),i.size===1&&(t=e(s)||te),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function rl(n,e,t){const i=!Array.isArray(n),s=i?[n]:n,r=e.length<2;return Qu(t,o=>{let a=!1;const l=[];let c=0,u=te;const h=()=>{if(c)return;u();const f=e(i?l[0]:l,o);r?o(f):u=pt(f)?f:te},d=s.map((f,p)=>Xs(f,v=>{l[p]=v,c&=~(1<<p),a&&h()},()=>{c|=1<<p}));return a=!0,h(),function(){le(d),u(),a=!1}})}const bi=zn("/");bi.set(location.pathname);const Ps=zn(!0);function Ju(n){let e,t,i;return{c(){e=b("a"),e.textContent="Logout",_(e,"class","link svelte-4v3pm5"),_(e,"href","/logout")},m(s,r){I(s,e,r),t||(i=z(e,"click",hi(n[1])),t=!0)},p:te,d(s){s&&E(e),t=!1,i()}}}function Xu(n){let e,t,i,s,r,o,a,l,c,u,h,d=Ps&&Ju(n);return{c(){e=b("div"),t=b("a"),t.textContent="Home",i=A(),s=b("div"),r=A(),d&&d.c(),o=A(),a=b("a"),a.textContent="Dashboard",l=A(),c=b("a"),c.textContent="Automations",_(t,"class","title svelte-4v3pm5"),_(t,"href","/"),_(s,"class","spacer svelte-4v3pm5"),_(a,"class","link svelte-4v3pm5"),_(a,"href","/"),_(c,"class","link svelte-4v3pm5"),_(c,"href","/automations"),_(e,"class","navbar svelte-4v3pm5")},m(f,p){I(f,e,p),m(e,t),m(e,i),m(e,s),m(e,r),d&&d.m(e,null),m(e,o),m(e,a),m(e,l),m(e,c),u||(h=[z(t,"click",hi(n[0]("/"))),z(a,"click",hi(n[0]("/"))),z(c,"click",hi(n[0]("/automations")))],u=!0)},p(f,[p]){Ps&&d.p(f,p)},i:te,o:te,d(f){f&&E(e),d&&d.d(),u=!1,le(h)}}}function Zu(n){return window.addEventListener("popstate",()=>bi.set(location.pathname)),[i=>()=>{i!==location.pathname&&(history.pushState(null,null,i),bi.set(i))},()=>{}]}class eh extends ge{constructor(e){super(),pe(this,e,Zu,Xu,he,{})}}var be=(n=>(n[n.Camera=0]="Camera",n[n.Button=1]="Button",n[n.ChristmasTree=2]="ChristmasTree",n[n.ChristmasLights=3]="ChristmasLights",n[n.CeilingLight=4]="CeilingLight",n[n.Door=5]="Door",n[n.Fan=6]="Fan",n[n.Garage=7]="Garage",n[n.LargeLamp=8]="LargeLamp",n[n.Lightbulb=9]="Lightbulb",n[n.Outlet=10]="Outlet",n[n.Sensor=11]="Sensor",n[n.SmallLamp=12]="SmallLamp",n[n.Speakers=13]="Speakers",n[n.Switch=14]="Switch",n))(be||{}),Ae=(n=>(n[n.Button=0]="Button",n[n.Dimmer=1]="Dimmer",n[n.Door=2]="Door",n[n.Garage=3]="Garage",n[n.MultiOutlet=4]="MultiOutlet",n[n.Outlet=5]="Outlet",n[n.Sensor=6]="Sensor",n[n.Switch=7]="Switch",n))(Ae||{}),Ct=(n=>(n[n.State=0]="State",n[n.Range=1]="Range",n[n.Operator=2]="Operator",n))(Ct||{}),ne=(n=>(n[n.Parent=0]="Parent",n[n.Device=1]="Device",n[n.Wait=2]="Wait",n[n.If=3]="If",n[n.IfElse=4]="IfElse",n[n.While=5]="While",n))(ne||{}),st=(n=>(n[n.Device=0]="Device",n[n.Time=1]="Time",n[n.Sunrise=2]="Sunrise",n[n.Sunset=3]="Sunset",n))(st||{}),ol=(n=>(n[n.Dark=0]="Dark",n[n.Light=1]="Light",n))(ol||{}),ar=(n=>(n[n.HomeData=0]="HomeData",n[n.UserData=1]="UserData",n[n.UpdateUser=2]="UpdateUser",n[n.UpdateDevice=3]="UpdateDevice",n[n.Set=4]="Set",n[n.Get=5]="Get",n[n.Toggle=6]="Toggle",n[n.UpdateAutomations=7]="UpdateAutomations",n))(ar||{});const lr=n=>{const e=t=>{n.contains(t.target)||(t.stopPropagation(),n.dispatchEvent(new CustomEvent("outclick")))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}};let bt=(()=>{let n=12,e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=(2<<Math.log(e.length-1)/Math.LN2)-1,i=-~(1.6*t*n/e.length);return()=>{let s="";for(;;){let r=crypto.getRandomValues(new Uint8Array(i)),o=i;for(;o--;)if(s+=e[r[o]&t]||"",s.length===n)return s}}})();const ai={};let ae={};const th=()=>ae,nh=n=>{ae=n},ih=n=>{const e=bt();return ae[e]={type:ne.Parent,parentId:n,children:[]},e},In=n=>{const e=ae[n];"seq1"in e&&In(e.seq1),"seq2"in e&&In(e.seq2),e.type===ne.Parent&&e.children.forEach(In),delete ae[n]},sh=n=>{const e=o=>{ae[n]=o,ai[n](ae[n])},t=()=>{delete ai[n]};return{subscribe:o=>(o(ae[n]),ai[n]=o,{unsubscribe:t}),set:e,addChild:o=>{const a=bt();switch(o){case ne.Device:{ae[a]={type:ne.Device,parentId:n,devices:[],state:!0};break}case ne.Wait:{ae[a]={type:ne.Wait,parentId:n,wait:""};break}case ne.If:{const l=bt();ae[a]={type:ne.If,parentId:n,conditions:[],seq1:l},ae[l]={type:ne.Parent,parentId:a,children:[]};break}case ne.IfElse:{const l=bt(),c=bt();ae[a]={type:ne.IfElse,parentId:n,conditions:[],seq1:l,seq2:c},ae[l]={type:ne.Parent,parentId:a,children:[]},ae[c]={type:ne.Parent,parentId:a,children:[]};break}case ne.While:{const l=bt();ae[a]={type:ne.While,parentId:n,conditions:[],seq1:l},ae[l]={type:ne.Parent,parentId:a,children:[]};break}}ae[n].children.push(a),e(ae[n])},remove:()=>{const o=ae[n].parentId,a=ae[o];a.type===ne.Parent&&(a.children=a.children.filter(l=>l!==n),ai[o](a),In(n))}}},rt=zn({}),rh=rl(rt,n=>Object.keys(n)),oh=n=>{rt.set(n)},ah=()=>Xa(rt),lh=()=>{const n=bt();rt.update(e=>(e[n]={enabled:!0,weekdays:[!0,!0,!0,!0,!0,!0,!0],trigger:{type:st.Device,device:"",state:!0},sequence:ih(n)},e))},ch=n=>{const{subscribe:e}=rl(rt,r=>r[n]);return{subscribe:e,set:r=>{rt.update(o=>(o[n]=r,o))},update:r=>{console.log(r)},remove:()=>{In(Xa(rt)[n].sequence),rt.update(r=>(delete r[n],r))}}};function uh(n){let e,t,i,s,r,o,a;const l=n[3].default,c=Au(l,n,n[2],null);return{c(){e=b("button"),t=b("div"),i=_e(n[1]),s=A(),c&&c.c(),_(t,"class","label svelte-g767w5"),V(t,"active",n[0]),_(e,"class","container svelte-g767w5"),V(e,"active",n[0])},m(u,h){I(u,e,h),m(e,t),m(t,i),m(e,s),c&&c.m(e,null),r=!0,o||(a=z(e,"click",n[4]),o=!0)},p(u,[h]){(!r||h&2)&&ke(i,u[1]),(!r||h&1)&&V(t,"active",u[0]),c&&c.p&&(!r||h&4)&&Ou(c,l,u,u[2],r?Pu(l,u[2],h,null):Du(u[2]),null),(!r||h&1)&&V(e,"active",u[0])},i(u){r||(N(c,u),r=!0)},o(u){P(c,u),r=!1},d(u){u&&E(e),c&&c.d(u),o=!1,a()}}}function hh(n,e,t){let{$$slots:i={},$$scope:s}=e,{active:r}=e,{label:o}=e;function a(l){Hu.call(this,n,l)}return n.$$set=l=>{"active"in l&&t(0,r=l.active),"label"in l&&t(1,o=l.label),"$$scope"in l&&t(2,s=l.$$scope)},[r,o,s,i,a]}class Ki extends ge{constructor(e){super(),pe(this,e,hh,uh,he,{active:0,label:1})}}const co=n=>Object.fromEntries(n.map((e,t)=>[t,e])),dh=n=>{jn.device=Object.fromEntries(Object.keys(n).map(e=>[e,`${n[e].room} ${n[e].name}`]).sort((e,t)=>e[1].localeCompare(t[1])))},jn={device:{},mode:{0:"Dark",1:"Light"},entry:{1:"Device",2:"Wait",3:"If",4:"If Else",5:"While"},trigger:{0:"Device",1:"Time",2:"Sunrise",3:"Sunset"},brightness:{10:"10%",20:"20%",30:"30%",40:"40%",50:"50%",60:"60%",70:"70%",80:"80%",90:"90%",100:"100%"},numbers:{1:"1",2:"2",3:"3",4:"4",5:"5"},type:co(["Button","Dimmer","Door","Garage","Multi-Outlet","Outlet","Sensor","Switch"]),icons:co(["Camera","Button","Christmas Tree","Christmas Lights","Ceiling Light","Door","Fan","Garage","Large Lamp","Lightbulb","Outlet","Sensor","Small Lamp","Speakers","Switch"])};function uo(n,e,t){const i=n.slice();return i[11]=e[t][0],i[3]=e[t][1],i}function ho(n){let e,t=[],i=new Map,s,r,o=Object.entries(n[5]);const a=l=>l[11];for(let l=0;l<o.length;l+=1){let c=uo(n,o,l),u=a(c);i.set(u,t[l]=_o(u,c))}return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();_(e,"class","options svelte-16bhhvs")},m(l,c){I(l,e,c);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);s||(r=[Zs(lr.call(null,e)),z(e,"outclick",n[7])],s=!0)},p(l,c){c&289&&(o=Object.entries(l[5]),t=mt(t,c,a,1,l,o,i,e,Vn,_o,null,uo))},d(l){l&&E(e);for(let c=0;c<t.length;c+=1)t[c].d();s=!1,le(r)}}}function fo(n){let e,t;return{c(){e=L("svg"),t=L("path"),_(t,"d","M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"),_(e,"class","check svelte-16bhhvs"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512")},m(i,s){I(i,e,s),m(e,t)},d(i){i&&E(e)}}}function _o(n,e){let t,i,s=e[3]+"",r,o,a,l,c,u=e[0]==e[11]&&fo();return{key:n,first:null,c(){t=b("button"),i=b("div"),r=_e(s),o=A(),u&&u.c(),a=A(),_(i,"class","text svelte-16bhhvs"),_(t,"class","option svelte-16bhhvs"),this.first=t},m(h,d){I(h,t,d),m(t,i),m(i,r),m(t,o),u&&u.m(t,null),m(t,a),l||(c=z(t,"click",Gi(e[8](e[11]))),l=!0)},p(h,d){e=h,e[0]==e[11]?u||(u=fo(),u.c(),u.m(t,a)):u&&(u.d(1),u=null)},d(h){h&&E(t),u&&u.d(),l=!1,c()}}}function fh(n){let e,t,i,s,r=n[2]&&ho(n);return{c(){e=b("div"),t=_e(n[3]),i=A(),r&&r.c(),s=gt(),_(e,"class","text svelte-16bhhvs")},m(o,a){I(o,e,a),m(e,t),I(o,i,a),r&&r.m(o,a),I(o,s,a)},p(o,a){a&8&&ke(t,o[3]),o[2]?r?r.p(o,a):(r=ho(o),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(o){o&&E(e),o&&E(i),r&&r.d(o),o&&E(s)}}}function _h(n){let e,t;return e=new Ki({props:{active:n[4],label:n[1],$$slots:{default:[fh]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},p(i,[s]){const r={};s&16&&(r.active=i[4]),s&2&&(r.label=i[1]),s&16397&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function ph(n,e,t){let i,{selected:s}=e,{type:r}=e,{label:o}=e,a=!1,l=!1;const c=jn[r],u=ir(),h=()=>t(2,l=!0),d=()=>t(2,l=!1),f=p=>()=>{t(0,s=p),t(2,l=!1),u("select",p)};return n.$$set=p=>{"selected"in p&&t(0,s=p.selected),"type"in p&&t(9,r=p.type),"label"in p&&t(1,o=p.label)},n.$$.update=()=>{n.$$.dirty&1&&t(3,i=c[s]||""),n.$$.dirty&12&&t(4,a=l||i!=="")},[s,o,l,i,a,c,h,d,f,r]}class an extends ge{constructor(e){super(),pe(this,e,ph,_h,he,{selected:0,type:9,label:1})}}function po(n,e,t){const i=n.slice();return i[10]=e[t][0],i[3]=e[t][1],i}function go(n){let e,t=[],i=new Map,s,r,o=Object.entries(n[5]);const a=l=>l[10];for(let l=0;l<o.length;l+=1){let c=po(n,o,l),u=a(c);i.set(u,t[l]=vo(u,c))}return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();_(e,"class","options svelte-13h3y7m")},m(l,c){I(l,e,c);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);s||(r=[Zs(lr.call(null,e)),z(e,"outclick",n[7])],s=!0)},p(l,c){c&289&&(o=Object.entries(l[5]),t=mt(t,c,a,1,l,o,i,e,Vn,vo,null,po))},d(l){l&&E(e);for(let c=0;c<t.length;c+=1)t[c].d();s=!1,le(r)}}}function mo(n){let e,t;return{c(){e=L("svg"),t=L("path"),_(t,"d","M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"),_(e,"class","check svelte-13h3y7m"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512")},m(i,s){I(i,e,s),m(e,t)},d(i){i&&E(e)}}}function vo(n,e){let t,i,s=e[3]+"",r,o,a=e[0].includes(e[10]),l,c,u,h=a&&mo();return{key:n,first:null,c(){t=b("button"),i=b("div"),r=_e(s),o=A(),h&&h.c(),l=A(),_(i,"class","text svelte-13h3y7m"),_(t,"class","option svelte-13h3y7m"),this.first=t},m(d,f){I(d,t,f),m(t,i),m(i,r),m(t,o),h&&h.m(t,null),m(t,l),c||(u=z(t,"click",Gi(e[8](e[10]))),c=!0)},p(d,f){e=d,f&1&&(a=e[0].includes(e[10])),a?h||(h=mo(),h.c(),h.m(t,l)):h&&(h.d(1),h=null)},d(d){d&&E(t),h&&h.d(),c=!1,u()}}}function gh(n){let e,t,i,s,r=n[2]&&go(n);return{c(){e=b("div"),t=_e(n[3]),i=A(),r&&r.c(),s=gt(),_(e,"class","text svelte-13h3y7m")},m(o,a){I(o,e,a),m(e,t),I(o,i,a),r&&r.m(o,a),I(o,s,a)},p(o,a){a&8&&ke(t,o[3]),o[2]?r?r.p(o,a):(r=go(o),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(o){o&&E(e),o&&E(i),r&&r.d(o),o&&E(s)}}}function mh(n){let e,t;return e=new Ki({props:{active:n[4],label:n[1],$$slots:{default:[gh]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},p(i,[s]){const r={};s&16&&(r.active=i[4]),s&2&&(r.label=i[1]),s&8205&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function vh(n,e,t){let i,{selected:s}=e,{type:r}=e,{label:o}=e,a=!1,l=!1;const c=jn[r],u=()=>{t(2,l=!0)},h=()=>{t(2,l=!1)},d=f=>()=>{s.includes(f)?t(0,s=s.filter(p=>p!==f)):t(0,s=[...s,f])};return n.$$set=f=>{"selected"in f&&t(0,s=f.selected),"type"in f&&t(9,r=f.type),"label"in f&&t(1,o=f.label)},n.$$.update=()=>{n.$$.dirty&1&&t(3,i=s.map(f=>c[f]).sort().join(", ")||""),n.$$.dirty&12&&t(4,a=l||i!=="")},[s,o,l,i,a,c,u,h,d,r]}class yh extends ge{constructor(e){super(),pe(this,e,vh,mh,he,{selected:0,type:9,label:1})}}function wh(n){let e,t,i;return{c(){e=b("input"),_(e,"class","text svelte-pfz0ar"),_(e,"type","text"),e.value=n[0]},m(s,r){I(s,e,r),t||(i=[z(e,"focus",n[4](!0)),z(e,"blur",n[4](!1)),z(e,"change",n[3])],t=!0)},p(s,r){r&1&&e.value!==s[0]&&(e.value=s[0])},d(s){s&&E(e),t=!1,le(i)}}}function bh(n){let e,t;return e=new Ki({props:{active:n[2],label:n[1],$$slots:{default:[wh]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},p(i,[s]){const r={};s&4&&(r.active=i[2]),s&2&&(r.label=i[1]),s&33&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function Ch(n,e,t){let{text:i}=e,{label:s}=e,r=(i.length||0)>0;const o=l=>t(0,i=l.target.value),a=l=>()=>t(2,r=l||i.length);return n.$$set=l=>{"text"in l&&t(0,i=l.text),"label"in l&&t(1,s=l.label)},[i,s,r,o,a]}class Ge extends ge{constructor(e){super(),pe(this,e,Ch,bh,he,{text:0,label:1})}}function Eh(n){let e=(n[0]?n[2]:n[3])+"",t;return{c(){t=_e(e)},m(i,s){I(i,t,s)},p(i,s){s&13&&e!==(e=(i[0]?i[2]:i[3])+"")&&ke(t,e)},d(i){i&&E(t)}}}function Ih(n){let e,t;return e=new Ki({props:{active:!0,label:n[1],$$slots:{default:[Eh]},$$scope:{ctx:n}}}),e.$on("click",n[4]),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},p(i,[s]){const r={};s&2&&(r.label=i[1]),s&45&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function Sh(n,e,t){let{label:i}=e,{on:s}=e,{off:r}=e,{state:o}=e;const a=()=>t(0,o=!o);return n.$$set=l=>{"label"in l&&t(1,i=l.label),"on"in l&&t(2,s=l.on),"off"in l&&t(3,r=l.off),"state"in l&&t(0,o=l.state)},[o,i,s,r,a]}class cr extends ge{constructor(e){super(),pe(this,e,Sh,Ih,he,{label:1,on:2,off:3,state:0})}}function yo(n,e,t){const i=n.slice();return i[10]=e[t][0],i[11]=e[t][1],i}function kh(n){let e,t=n[0].isAnd?"And":"Or",i,s,r;return{c(){e=b("button"),i=_e(t),_(e,"class","text svelte-1jg6byl")},m(o,a){I(o,e,a),m(e,i),s||(r=z(e,"click",n[9]),s=!0)},p(o,a){a&1&&t!==(t=o[0].isAnd?"And":"Or")&&ke(i,t)},d(o){o&&E(e),s=!1,r()}}}function Th(n){let e,t,i,s,r,o,a,l,c,u,h;return{c(){e=b("div"),e.textContent="Between",t=A(),i=b("input"),s=A(),r=b("div"),r.textContent="-",o=A(),a=b("input"),l=A(),c=b("div"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1jg6byl"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',_(e,"class","test svelte-1jg6byl"),_(i,"class","time svelte-1jg6byl"),_(i,"type","text"),_(i,"placeholder","0:00"),_(a,"class","time svelte-1jg6byl"),_(a,"type","text"),_(a,"placeholder","24:00"),_(c,"class","remove svelte-1jg6byl")},m(d,f){I(d,e,f),I(d,t,f),I(d,i,f),oi(i,n[0].start),I(d,s,f),I(d,r,f),I(d,o,f),I(d,a,f),oi(a,n[0].end),I(d,l,f),I(d,c,f),u||(h=[z(i,"input",n[7]),z(a,"input",n[8])],u=!0)},p(d,f){f&1&&i.value!==d[0].start&&oi(i,d[0].start),f&1&&a.value!==d[0].end&&oi(a,d[0].end)},d(d){d&&E(e),d&&E(t),d&&E(i),d&&E(s),d&&E(r),d&&E(o),d&&E(a),d&&E(l),d&&E(c),u=!1,le(h)}}}function Rh(n){let e,t=(n[2][n[0].device]||"Select Device")+"",i,s,r,o,a=n[0].state?"Is On":"Is Off",l,c,u,h,d,f=n[1]&&wo(n);return{c(){e=b("button"),i=_e(t),s=A(),f&&f.c(),r=A(),o=b("button"),l=_e(a),c=A(),u=b("div"),u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1jg6byl"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',_(e,"class","text svelte-1jg6byl"),_(o,"class","text svelte-1jg6byl"),_(u,"class","remove svelte-1jg6byl")},m(p,v){I(p,e,v),m(e,i),I(p,s,v),f&&f.m(p,v),I(p,r,v),I(p,o,v),m(o,l),I(p,c,v),I(p,u,v),h||(d=[z(e,"click",n[3]),z(o,"click",n[6])],h=!0)},p(p,v){v&1&&t!==(t=(p[2][p[0].device]||"Select Device")+"")&&ke(i,t),p[1]?f?f.p(p,v):(f=wo(p),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),v&1&&a!==(a=p[0].state?"Is On":"Is Off")&&ke(l,a)},d(p){p&&E(e),p&&E(s),f&&f.d(p),p&&E(r),p&&E(o),p&&E(c),p&&E(u),h=!1,le(d)}}}function wo(n){let e,t=[],i=new Map,s,r,o=Object.entries(n[2]);const a=l=>l[10];for(let l=0;l<o.length;l+=1){let c=yo(n,o,l),u=a(c);i.set(u,t[l]=Co(u,c))}return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();_(e,"class","options svelte-1jg6byl")},m(l,c){I(l,e,c);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);s||(r=[Zs(lr.call(null,e)),z(e,"outclick",n[4])],s=!0)},p(l,c){c&37&&(o=Object.entries(l[2]),t=mt(t,c,a,1,l,o,i,e,Vn,Co,null,yo))},d(l){l&&E(e);for(let c=0;c<t.length;c+=1)t[c].d();s=!1,le(r)}}}function bo(n){let e,t;return{c(){e=L("svg"),t=L("path"),_(t,"d","M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"),_(e,"class","check svelte-1jg6byl"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512")},m(i,s){I(i,e,s),m(e,t)},d(i){i&&E(e)}}}function Co(n,e){let t,i,s=e[11]+"",r,o,a,l,c,u=e[0].device===e[10]&&bo();return{key:n,first:null,c(){t=b("button"),i=b("div"),r=_e(s),o=A(),u&&u.c(),a=A(),_(i,"class","optiontext svelte-1jg6byl"),_(t,"class","option svelte-1jg6byl"),this.first=t},m(h,d){I(h,t,d),m(t,i),m(i,r),m(t,o),u&&u.m(t,null),m(t,a),l||(c=z(t,"click",Gi(e[5](e[10]))),l=!0)},p(h,d){e=h,e[0].device===e[10]?u||(u=bo(),u.c(),u.m(t,a)):u&&(u.d(1),u=null)},d(h){h&&E(t),u&&u.d(),l=!1,c()}}}function Nh(n){let e;function t(r,o){return r[0].type===Ct.State?Rh:r[0].type===Ct.Range?Th:kh}let i=t(n),s=i(n);return{c(){e=b("div"),s.c(),_(e,"class","condition svelte-1jg6byl")},m(r,o){I(r,e,o),s.m(e,null)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},i:te,o:te,d(r){r&&E(e),s.d()}}}function Ah(n,e,t){let{condition:i}=e,s=!1;const r=jn.device,o=()=>t(1,s=!0),a=()=>t(1,s=!1),l=f=>()=>{t(0,i.device=f,i),t(1,s=!1)},c=()=>t(0,i.state=!i.state,i);function u(){i.start=this.value,t(0,i)}function h(){i.end=this.value,t(0,i)}const d=()=>t(0,i.isAnd=!i.isAnd,i);return n.$$set=f=>{"condition"in f&&t(0,i=f.condition)},[i,s,r,o,a,l,c,u,h,d]}class ur extends ge{constructor(e){super(),pe(this,e,Ah,Nh,he,{condition:0})}}function Eo(n,e,t){const i=n.slice();return i[7]=e[t][0],i[8]=e[t][1],i}function Io(n,e){let t,i=e[8]+"",s,r,o;return{key:n,first:null,c(){t=b("button"),s=_e(i),_(t,"class","option svelte-ugf7so"),V(t,"active",e[1]),this.first=t},m(a,l){I(a,t,l),m(t,s),r||(o=z(t,"click",function(){pt(e[4](e[7]))&&e[4](e[7]).apply(this,arguments)}),r=!0)},p(a,l){e=a,l&1&&i!==(i=e[8]+"")&&ke(s,i),l&2&&V(t,"active",e[1])},d(a){a&&E(t),r=!1,o()}}}function Ph(n){let e,t,i,s=[],r=new Map,o,a,l=Object.entries(n[0]);const c=u=>u[7];for(let u=0;u<l.length;u+=1){let h=Eo(n,l,u),d=c(h);r.set(d,s[u]=Io(d,h))}return{c(){e=b("div"),t=b("div"),t.textContent="+",i=A();for(let u=0;u<s.length;u+=1)s[u].c();_(t,"class","plus svelte-ugf7so"),V(t,"active",n[1]),_(e,"class","container svelte-ugf7so"),Ye(e,"width",(n[1]?n[2].scrollWidth-6:24)+"px"),V(e,"active",n[1])},m(u,h){I(u,e,h),m(e,t),m(e,i);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(e,null);n[5](e),o||(a=[z(e,"mouseenter",n[3](!0)),z(e,"mouseleave",n[3](!1))],o=!0)},p(u,[h]){h&2&&V(t,"active",u[1]),h&19&&(l=Object.entries(u[0]),s=mt(s,h,c,1,u,l,r,e,Vn,Io,null,Eo)),h&6&&Ye(e,"width",(u[1]?u[2].scrollWidth-6:24)+"px"),h&2&&V(e,"active",u[1])},i:te,o:te,d(u){u&&E(e);for(let h=0;h<s.length;h+=1)s[h].d();n[5](null),o=!1,le(a)}}}function Oh(n,e,t){let{options:i}=e,s=!1,r;const o=ir(),a=u=>()=>t(1,s=u),l=u=>()=>o("click",parseInt(u));function c(u){ie[u?"unshift":"push"](()=>{r=u,t(2,r)})}return n.$$set=u=>{"options"in u&&t(0,i=u.options)},[i,s,r,a,l,c]}class Yi extends ge{constructor(e){super(),pe(this,e,Oh,Ph,he,{options:0})}}function So(n,e,t){const i=n.slice();return i[19]=e[t],i[24]=e,i[25]=t,i}function ko(n,e,t){const i=n.slice();return i[19]=e[t],i[22]=e,i[23]=t,i}function To(n,e,t){const i=n.slice();return i[19]=e[t],i[20]=e,i[21]=t,i}function Ro(n,e,t){const i=n.slice();return i[16]=e[t],i}function Dh(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,v=n[1].conditions,g=[];for(let y=0;y<v.length;y+=1)g[y]=No(So(n,v,y));const S=y=>P(g[y],1,1,()=>{g[y]=null});return c=new Yi({props:{options:n[2]}}),c.$on("click",n[7]),h=new Xt({props:{id:n[1].seq1,indent:n[0]}}),{c(){e=b("div"),t=b("div"),i=b("button"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1k8tee3"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',s=A(),r=b("div"),r.textContent="While",o=A(),a=b("div");for(let y=0;y<g.length;y+=1)g[y].c();l=A(),B(c.$$.fragment),u=A(),B(h.$$.fragment),_(i,"class","remove svelte-1k8tee3"),Ye(t,"width",n[4]),_(r,"class","text svelte-1k8tee3"),_(a,"class","conditions svelte-1k8tee3"),_(e,"class","container svelte-1k8tee3")},m(y,w){I(y,e,w),m(e,t),m(t,i),m(e,s),m(e,r),m(e,o),m(e,a);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(a,null);m(a,l),$(c,a,null),I(y,u,w),$(h,y,w),d=!0,f||(p=z(i,"click",n[5]),f=!0)},p(y,w){if(w&2){v=y[1].conditions;let R;for(R=0;R<v.length;R+=1){const O=So(y,v,R);g[R]?(g[R].p(O,w),N(g[R],1)):(g[R]=No(O),g[R].c(),N(g[R],1),g[R].m(a,l))}for(Pe(),R=v.length;R<g.length;R+=1)S(R);Oe()}const k={};w&2&&(k.id=y[1].seq1),w&1&&(k.indent=y[0]),h.$set(k)},i(y){if(!d){for(let w=0;w<v.length;w+=1)N(g[w]);N(c.$$.fragment,y),N(h.$$.fragment,y),d=!0}},o(y){g=g.filter(Boolean);for(let w=0;w<g.length;w+=1)P(g[w]);P(c.$$.fragment,y),P(h.$$.fragment,y),d=!1},d(y){y&&E(e),qi(g,y),F(c),y&&E(u),F(h,y),f=!1,p()}}}function Mh(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,v,g,S,y,w,k,R,O=n[1].conditions,D=[];for(let C=0;C<O.length;C+=1)D[C]=Ao(ko(n,O,C));const U=C=>P(D[C],1,1,()=>{D[C]=null});return c=new Yi({props:{options:n[2]}}),c.$on("click",n[7]),h=new Xt({props:{id:n[1].seq1,indent:n[0]}}),y=new Xt({props:{id:n[1].seq2,indent:n[0]}}),{c(){e=b("div"),t=b("div"),i=b("button"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1k8tee3"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',s=A(),r=b("div"),r.textContent="If",o=A(),a=b("div");for(let C=0;C<D.length;C+=1)D[C].c();l=A(),B(c.$$.fragment),u=A(),B(h.$$.fragment),d=A(),f=b("div"),p=b("div"),v=A(),g=b("div"),g.textContent="Else",S=A(),B(y.$$.fragment),_(i,"class","remove svelte-1k8tee3"),Ye(t,"width",n[4]),_(r,"class","text svelte-1k8tee3"),_(a,"class","conditions svelte-1k8tee3"),_(e,"class","container svelte-1k8tee3"),Ye(p,"width",n[4]),_(g,"class","text svelte-1k8tee3"),_(f,"class","container svelte-1k8tee3")},m(C,M){I(C,e,M),m(e,t),m(t,i),m(e,s),m(e,r),m(e,o),m(e,a);for(let se=0;se<D.length;se+=1)D[se]&&D[se].m(a,null);m(a,l),$(c,a,null),I(C,u,M),$(h,C,M),I(C,d,M),I(C,f,M),m(f,p),m(f,v),m(f,g),I(C,S,M),$(y,C,M),w=!0,k||(R=z(i,"click",n[5]),k=!0)},p(C,M){if(M&2){O=C[1].conditions;let j;for(j=0;j<O.length;j+=1){const H=ko(C,O,j);D[j]?(D[j].p(H,M),N(D[j],1)):(D[j]=Ao(H),D[j].c(),N(D[j],1),D[j].m(a,l))}for(Pe(),j=O.length;j<D.length;j+=1)U(j);Oe()}const se={};M&2&&(se.id=C[1].seq1),M&1&&(se.indent=C[0]),h.$set(se);const Q={};M&2&&(Q.id=C[1].seq2),M&1&&(Q.indent=C[0]),y.$set(Q)},i(C){if(!w){for(let M=0;M<O.length;M+=1)N(D[M]);N(c.$$.fragment,C),N(h.$$.fragment,C),N(y.$$.fragment,C),w=!0}},o(C){D=D.filter(Boolean);for(let M=0;M<D.length;M+=1)P(D[M]);P(c.$$.fragment,C),P(h.$$.fragment,C),P(y.$$.fragment,C),w=!1},d(C){C&&E(e),qi(D,C),F(c),C&&E(u),F(h,C),C&&E(d),C&&E(f),C&&E(S),F(y,C),k=!1,R()}}}function Lh(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,v=n[1].conditions,g=[];for(let y=0;y<v.length;y+=1)g[y]=Po(To(n,v,y));const S=y=>P(g[y],1,1,()=>{g[y]=null});return c=new Yi({props:{options:n[2]}}),c.$on("click",n[7]),h=new Xt({props:{id:n[1].seq1,indent:n[0]}}),{c(){e=b("div"),t=b("div"),i=b("button"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1k8tee3"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',s=A(),r=b("div"),r.textContent="If",o=A(),a=b("div");for(let y=0;y<g.length;y+=1)g[y].c();l=A(),B(c.$$.fragment),u=A(),B(h.$$.fragment),_(i,"class","remove svelte-1k8tee3"),Ye(t,"width",n[4]),_(r,"class","text svelte-1k8tee3"),_(a,"class","conditions svelte-1k8tee3"),_(e,"class","container svelte-1k8tee3")},m(y,w){I(y,e,w),m(e,t),m(t,i),m(e,s),m(e,r),m(e,o),m(e,a);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(a,null);m(a,l),$(c,a,null),I(y,u,w),$(h,y,w),d=!0,f||(p=z(i,"click",n[5]),f=!0)},p(y,w){if(w&2){v=y[1].conditions;let R;for(R=0;R<v.length;R+=1){const O=To(y,v,R);g[R]?(g[R].p(O,w),N(g[R],1)):(g[R]=Po(O),g[R].c(),N(g[R],1),g[R].m(a,l))}for(Pe(),R=v.length;R<g.length;R+=1)S(R);Oe()}const k={};w&2&&(k.id=y[1].seq1),w&1&&(k.indent=y[0]),h.$set(k)},i(y){if(!d){for(let w=0;w<v.length;w+=1)N(g[w]);N(c.$$.fragment,y),N(h.$$.fragment,y),d=!0}},o(y){g=g.filter(Boolean);for(let w=0;w<g.length;w+=1)P(g[w]);P(c.$$.fragment,y),P(h.$$.fragment,y),d=!1},d(y){y&&E(e),qi(g,y),F(c),y&&E(u),F(h,y),f=!1,p()}}}function xh(n){let e,t,i,s,r,o,a,l,c;function u(d){n[12](d)}let h={label:"Wait"};return n[1].wait!==void 0&&(h.text=n[1].wait),r=new Ge({props:h}),ie.push(()=>ue(r,"text",u)),{c(){e=b("div"),t=b("div"),i=b("button"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1k8tee3"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',s=A(),B(r.$$.fragment),_(i,"class","remove svelte-1k8tee3"),Ye(t,"width",n[4]),_(e,"class","container svelte-1k8tee3")},m(d,f){I(d,e,f),m(e,t),m(t,i),m(e,s),$(r,e,null),a=!0,l||(c=z(i,"click",n[5]),l=!0)},p(d,f){const p={};!o&&f&2&&(o=!0,p.text=d[1].wait,ce(()=>o=!1)),r.$set(p)},i(d){a||(N(r.$$.fragment,d),a=!0)},o(d){P(r.$$.fragment,d),a=!1},d(d){d&&E(e),F(r),l=!1,c()}}}function $h(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,v;function g(O){n[9](O)}let S={label:"Devices",type:"device"};n[1].devices!==void 0&&(S.selected=n[1].devices),r=new yh({props:S}),ie.push(()=>ue(r,"selected",g));function y(O){n[10](O)}let w={label:"State",on:"Turn On",off:"Turn Off"};n[1].state!==void 0&&(w.state=n[1].state),l=new cr({props:w}),ie.push(()=>ue(l,"state",y));function k(O){n[11](O)}let R={label:"Brightness",type:"brightness"};return n[1].brightness!==void 0&&(R.selected=n[1].brightness),h=new an({props:R}),ie.push(()=>ue(h,"selected",k)),{c(){e=b("div"),t=b("div"),i=b("button"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1k8tee3"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',s=A(),B(r.$$.fragment),a=A(),B(l.$$.fragment),u=A(),B(h.$$.fragment),_(i,"class","remove svelte-1k8tee3"),Ye(t,"width",n[4]),_(e,"class","container svelte-1k8tee3")},m(O,D){I(O,e,D),m(e,t),m(t,i),m(e,s),$(r,e,null),m(e,a),$(l,e,null),m(e,u),$(h,e,null),f=!0,p||(v=z(i,"click",n[5]),p=!0)},p(O,D){const U={};!o&&D&2&&(o=!0,U.selected=O[1].devices,ce(()=>o=!1)),r.$set(U);const C={};!c&&D&2&&(c=!0,C.state=O[1].state,ce(()=>c=!1)),l.$set(C);const M={};!d&&D&2&&(d=!0,M.selected=O[1].brightness,ce(()=>d=!1)),h.$set(M)},i(O){f||(N(r.$$.fragment,O),N(l.$$.fragment,O),N(h.$$.fragment,O),f=!0)},o(O){P(r.$$.fragment,O),P(l.$$.fragment,O),P(h.$$.fragment,O),f=!1},d(O){O&&E(e),F(r),F(l),F(h),p=!1,v()}}}function Fh(n){let e=[],t=new Map,i,s,r,o,a,l,c=n[1].children;const u=h=>h[16];for(let h=0;h<c.length;h+=1){let d=Ro(n,c,h),f=u(d);t.set(f,e[h]=Oo(f,d))}return a=new Yi({props:{options:jn.entry}}),a.$on("click",n[6]),{c(){for(let h=0;h<e.length;h+=1)e[h].c();i=A(),s=b("div"),r=b("div"),o=A(),B(a.$$.fragment),Ye(r,"width",n[4]),_(s,"class","container svelte-1k8tee3")},m(h,d){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(h,d);I(h,i,d),I(h,s,d),m(s,r),m(s,o),$(a,s,null),l=!0},p(h,d){d&3&&(c=h[1].children,Pe(),e=mt(e,d,u,1,h,c,t,i.parentNode,or,Oo,i,Ro),Oe())},i(h){if(!l){for(let d=0;d<c.length;d+=1)N(e[d]);N(a.$$.fragment,h),l=!0}},o(h){for(let d=0;d<e.length;d+=1)P(e[d]);P(a.$$.fragment,h),l=!1},d(h){for(let d=0;d<e.length;d+=1)e[d].d(h);h&&E(i),h&&E(s),F(a)}}}function No(n){let e,t,i;function s(o){n[15](o,n[19],n[24],n[25])}let r={};return n[19]!==void 0&&(r.condition=n[19]),e=new ur({props:r}),ie.push(()=>ue(e,"condition",s)),{c(){B(e.$$.fragment)},m(o,a){$(e,o,a),i=!0},p(o,a){n=o;const l={};!t&&a&2&&(t=!0,l.condition=n[19],ce(()=>t=!1)),e.$set(l)},i(o){i||(N(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){F(e,o)}}}function Ao(n){let e,t,i;function s(o){n[14](o,n[19],n[22],n[23])}let r={};return n[19]!==void 0&&(r.condition=n[19]),e=new ur({props:r}),ie.push(()=>ue(e,"condition",s)),{c(){B(e.$$.fragment)},m(o,a){$(e,o,a),i=!0},p(o,a){n=o;const l={};!t&&a&2&&(t=!0,l.condition=n[19],ce(()=>t=!1)),e.$set(l)},i(o){i||(N(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){F(e,o)}}}function Po(n){let e,t,i;function s(o){n[13](o,n[19],n[20],n[21])}let r={};return n[19]!==void 0&&(r.condition=n[19]),e=new ur({props:r}),ie.push(()=>ue(e,"condition",s)),{c(){B(e.$$.fragment)},m(o,a){$(e,o,a),i=!0},p(o,a){n=o;const l={};!t&&a&2&&(t=!0,l.condition=n[19],ce(()=>t=!1)),e.$set(l)},i(o){i||(N(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){F(e,o)}}}function Oo(n,e){let t,i,s;return i=new Xt({props:{id:e[16],indent:e[0]+1}}),{key:n,first:null,c(){t=gt(),B(i.$$.fragment),this.first=t},m(r,o){I(r,t,o),$(i,r,o),s=!0},p(r,o){e=r;const a={};o&2&&(a.id=e[16]),o&1&&(a.indent=e[0]+1),i.$set(a)},i(r){s||(N(i.$$.fragment,r),s=!0)},o(r){P(i.$$.fragment,r),s=!1},d(r){r&&E(t),F(i,r)}}}function Uh(n){let e,t,i,s;const r=[Fh,$h,xh,Lh,Mh,Dh],o=[];function a(l,c){return l[1].type===ne.Parent?0:l[1].type===ne.Device?1:l[1].type===ne.Wait?2:l[1].type===ne.If?3:l[1].type===ne.IfElse?4:l[1].type===ne.While?5:-1}return~(e=a(n))&&(t=o[e]=r[e](n)),{c(){t&&t.c(),i=gt()},m(l,c){~e&&o[e].m(l,c),I(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(t&&(Pe(),P(o[u],1,1,()=>{o[u]=null}),Oe()),~e?(t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),N(t,1),t.m(i.parentNode,i)):t=null)},i(l){s||(N(t),s=!0)},o(l){P(t),s=!1},d(l){~e&&o[e].d(l),l&&E(i)}}}function Wh(n,e,t){let i,{id:s}=e,{indent:r=-1}=e;const o={[Ct.State]:"Device",[Ct.Range]:"Time"},a=sh(s);Rt(n,a,w=>t(1,i=w));const l=r*30+30+"px",c=()=>{a.remove()},u=w=>{a.addChild(w.detail)},h=w=>{const k=w.detail;i.conditions.length>0&&i.conditions.push({type:Ct.Operator,isAnd:!0}),k===Ct.State?i.conditions.push({type:k,device:"",state:!0}):i.conditions.push({type:k,start:"",end:""}),a.set(i)};function d(w){n.$$.not_equal(i.devices,w)&&(i.devices=w,a.set(i))}function f(w){n.$$.not_equal(i.state,w)&&(i.state=w,a.set(i))}function p(w){n.$$.not_equal(i.brightness,w)&&(i.brightness=w,a.set(i))}function v(w){n.$$.not_equal(i.wait,w)&&(i.wait=w,a.set(i))}function g(w,k,R,O){R[O]=w,a.set(i)}function S(w,k,R,O){R[O]=w,a.set(i)}function y(w,k,R,O){R[O]=w,a.set(i)}return n.$$set=w=>{"id"in w&&t(8,s=w.id),"indent"in w&&t(0,r=w.indent)},[r,i,o,a,l,c,u,h,s,d,f,p,v,g,S,y]}class Xt extends ge{constructor(e){super(),pe(this,e,Wh,Uh,he,{id:8,indent:0})}}function Do(n,e,t){const i=n.slice();return i[4]=e[t],i[6]=t,i}function Mo(n,e){let t,i=e[1][e[6]]+"",s,r,o;function a(){return e[3](e[6])}return{key:n,first:null,c(){t=b("button"),s=_e(i),_(t,"class","svelte-utj4gx"),V(t,"selected",e[4]),this.first=t},m(l,c){I(l,t,c),m(t,s),r||(o=z(t,"click",a),r=!0)},p(l,c){e=l,c&1&&i!==(i=e[1][e[6]]+"")&&ke(s,i),c&1&&V(t,"selected",e[4])},d(l){l&&E(t),r=!1,o()}}}function Bh(n){let e,t=[],i=new Map,s=n[0];const r=o=>o[6];for(let o=0;o<s.length;o+=1){let a=Do(n,s,o),l=r(a);i.set(l,t[o]=Mo(l,a))}return{c(){e=b("div");for(let o=0;o<t.length;o+=1)t[o].c();_(e,"class","container svelte-utj4gx")},m(o,a){I(o,e,a);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(o,[a]){a&7&&(s=o[0],t=mt(t,a,r,1,o,s,i,e,Vn,Mo,null,Do))},i:te,o:te,d(o){o&&E(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function Hh(n,e,t){let{weekdays:i}=e;const s=["S","M","T","W","T","F","S"],r=a=>{t(0,i[a]=!i[a],i)},o=a=>r(a);return n.$$set=a=>{"weekdays"in a&&t(0,i=a.weekdays)},[i,s,r,o]}class Vh extends ge{constructor(e){super(),pe(this,e,Hh,Bh,he,{weekdays:0})}}function zh(n){let e,t,i;function s(o){n[7](o)}let r={label:"Offset"};return n[0].offset!==void 0&&(r.text=n[0].offset),e=new Ge({props:r}),ie.push(()=>ue(e,"text",s)),{c(){B(e.$$.fragment)},m(o,a){$(e,o,a),i=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.text=o[0].offset,ce(()=>t=!1)),e.$set(l)},i(o){i||(N(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){F(e,o)}}}function jh(n){let e,t,i;function s(o){n[6](o)}let r={label:"Offset"};return n[0].offset!==void 0&&(r.text=n[0].offset),e=new Ge({props:r}),ie.push(()=>ue(e,"text",s)),{c(){B(e.$$.fragment)},m(o,a){$(e,o,a),i=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.text=o[0].offset,ce(()=>t=!1)),e.$set(l)},i(o){i||(N(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){F(e,o)}}}function qh(n){let e,t,i;function s(o){n[5](o)}let r={label:"Time"};return n[0].time!==void 0&&(r.text=n[0].time),e=new Ge({props:r}),ie.push(()=>ue(e,"text",s)),{c(){B(e.$$.fragment)},m(o,a){$(e,o,a),i=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.text=o[0].time,ce(()=>t=!1)),e.$set(l)},i(o){i||(N(e.$$.fragment,o),i=!0)},o(o){P(e.$$.fragment,o),i=!1},d(o){F(e,o)}}}function Gh(n){let e,t,i,s,r,o;function a(h){n[3](h)}let l={type:"device",label:"Device"};n[0].device!==void 0&&(l.selected=n[0].device),e=new an({props:l}),ie.push(()=>ue(e,"selected",a));function c(h){n[4](h)}let u={label:"State",on:"Turns On",off:"Turns Off"};return n[0].state!==void 0&&(u.state=n[0].state),s=new cr({props:u}),ie.push(()=>ue(s,"state",c)),{c(){B(e.$$.fragment),i=A(),B(s.$$.fragment)},m(h,d){$(e,h,d),I(h,i,d),$(s,h,d),o=!0},p(h,d){const f={};!t&&d&1&&(t=!0,f.selected=h[0].device,ce(()=>t=!1)),e.$set(f);const p={};!r&&d&1&&(r=!0,p.state=h[0].state,ce(()=>r=!1)),s.$set(p)},i(h){o||(N(e.$$.fragment,h),N(s.$$.fragment,h),o=!0)},o(h){P(e.$$.fragment,h),P(s.$$.fragment,h),o=!1},d(h){F(e,h),h&&E(i),F(s,h)}}}function Kh(n){let e,t,i,s,r,o;t=new an({props:{selected:n[0].type,type:"trigger",label:"Event"}}),t.$on("select",n[2]);const a=[Gh,qh,jh,zh],l=[];function c(u,h){return u[0].type===st.Device?0:u[0].type===st.Time?1:u[0].type===st.Sunrise?2:u[0].type===st.Sunset?3:-1}return~(s=c(n))&&(r=l[s]=a[s](n)),{c(){e=b("div"),B(t.$$.fragment),i=A(),r&&r.c(),_(e,"class","row svelte-8yvmn9")},m(u,h){I(u,e,h),$(t,e,null),m(e,i),~s&&l[s].m(e,null),o=!0},p(u,[h]){const d={};h&1&&(d.selected=u[0].type),t.$set(d);let f=s;s=c(u),s===f?~s&&l[s].p(u,h):(r&&(Pe(),P(l[f],1,1,()=>{l[f]=null}),Oe()),~s?(r=l[s],r?r.p(u,h):(r=l[s]=a[s](u),r.c()),N(r,1),r.m(e,null)):r=null)},i(u){o||(N(t.$$.fragment,u),N(r),o=!0)},o(u){P(t.$$.fragment,u),P(r),o=!1},d(u){u&&E(e),F(t),~s&&l[s].d()}}}function Yh(n,e,t){let{trigger:i}=e;const s=h=>{h===st.Device?t(0,i={type:h,device:"",state:!0}):h===st.Time?t(0,i={type:h,time:""}):t(0,i={type:h,offset:""})},r=h=>s(parseInt(h.detail));function o(h){n.$$.not_equal(i.device,h)&&(i.device=h,t(0,i))}function a(h){n.$$.not_equal(i.state,h)&&(i.state=h,t(0,i))}function l(h){n.$$.not_equal(i.time,h)&&(i.time=h,t(0,i))}function c(h){n.$$.not_equal(i.offset,h)&&(i.offset=h,t(0,i))}function u(h){n.$$.not_equal(i.offset,h)&&(i.offset=h,t(0,i))}return n.$$set=h=>{"trigger"in h&&t(0,i=h.trigger)},[i,s,r,o,a,l,c,u]}class Qh extends ge{constructor(e){super(),pe(this,e,Yh,Kh,he,{trigger:0})}}function Jh(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,p,v,g,S,y=n[0].enabled?"Enabled":"Disabled",w,k,R,O,D,U;function C(j){n[4](j)}let M={};n[0].trigger!==void 0&&(M.trigger=n[0].trigger),s=new Qh({props:M}),ie.push(()=>ue(s,"trigger",C));function se(j){n[5](j)}let Q={};return n[0].weekdays!==void 0&&(Q.weekdays=n[0].weekdays),c=new Vh({props:Q}),ie.push(()=>ue(c,"weekdays",se)),p=new Xt({props:{id:n[0].sequence}}),{c(){e=b("div"),t=b("div"),t.textContent="Event",i=A(),B(s.$$.fragment),o=A(),a=b("div"),a.textContent="Weekdays",l=A(),B(c.$$.fragment),h=A(),d=b("div"),d.textContent="Sequence",f=A(),B(p.$$.fragment),v=A(),g=b("div"),S=b("button"),w=_e(y),k=A(),R=b("button"),R.textContent="Delete",_(t,"class","title svelte-18iwm7x"),_(a,"class","title svelte-18iwm7x"),_(d,"class","title svelte-18iwm7x"),_(S,"class","enable svelte-18iwm7x"),_(R,"class","red svelte-18iwm7x"),_(g,"class","controls svelte-18iwm7x"),_(e,"class","container svelte-18iwm7x")},m(j,H){I(j,e,H),m(e,t),m(e,i),$(s,e,null),m(e,o),m(e,a),m(e,l),$(c,e,null),m(e,h),m(e,d),m(e,f),$(p,e,null),m(e,v),m(e,g),m(g,S),m(S,w),m(g,k),m(g,R),O=!0,D||(U=[z(S,"click",n[2]),z(R,"click",n[1].remove)],D=!0)},p(j,[H]){const oe={};!r&&H&1&&(r=!0,oe.trigger=j[0].trigger,ce(()=>r=!1)),s.$set(oe);const Fe={};!u&&H&1&&(u=!0,Fe.weekdays=j[0].weekdays,ce(()=>u=!1)),c.$set(Fe);const me={};H&1&&(me.id=j[0].sequence),p.$set(me),(!O||H&1)&&y!==(y=j[0].enabled?"Enabled":"Disabled")&&ke(w,y)},i(j){O||(N(s.$$.fragment,j),N(c.$$.fragment,j),N(p.$$.fragment,j),O=!0)},o(j){P(s.$$.fragment,j),P(c.$$.fragment,j),P(p.$$.fragment,j),O=!1},d(j){j&&E(e),F(s),F(c),F(p),D=!1,le(U)}}}function Xh(n,e,t){let i,{id:s}=e;const r=ch(s);Rt(n,r,c=>t(0,i=c));const o=()=>{Mu(r,i.enabled=!i.enabled,i)};function a(c){n.$$.not_equal(i.trigger,c)&&(i.trigger=c,r.set(i))}function l(c){n.$$.not_equal(i.weekdays,c)&&(i.weekdays=c,r.set(i))}return n.$$set=c=>{"id"in c&&t(3,s=c.id)},[i,r,o,s,a,l]}class Zh extends ge{constructor(e){super(),pe(this,e,Xh,Jh,he,{id:3})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(n,e){if(!n)throw ln(e)},ln=function(n){return new Error("Firebase Database ("+al.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ed=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ll(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ed(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new td;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cl=function(n){const e=ll(n);return hr.encodeByteArray(e,!0)},Ci=function(n){return cl(n).replace(/\./g,"")},Ei=function(n){try{return hr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){return ul(void 0,n)}function ul(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!id(t)||(n[t]=ul(n[t],e[t]));return n}function id(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=()=>sd().__FIREBASE_DEFAULTS__,od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ad=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ei(n[1]);return e&&JSON.parse(e)},dr=()=>{try{return rd()||od()||ad()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hl=n=>{var e,t;return(t=(e=dr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ld=n=>{const e=hl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},dl=()=>{var n;return(n=dr())===null||n===void 0?void 0:n.config},fl=n=>{var e;return(e=dr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ci(JSON.stringify(t)),Ci(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ud(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _l(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hd(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pl(){return al.NODE_ADMIN===!0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function fd(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="FirebaseError";class vt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=_d,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?pd(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vt(s,a,i)}}function pd(n,e){return n.replace(gd,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const gd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n){return JSON.parse(n)}function de(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Pn(Ei(r[0])||""),t=Pn(Ei(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},md=function(n){const e=gl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vd=function(n){const e=gl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Zt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Os(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ii(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Si(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Lo(r)&&Lo(o)){if(!Si(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Lo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function bn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Cn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function wd(n,e){const t=new bd(n,e);return t.subscribe.bind(t)}class bd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Cd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=_s),s.error===void 0&&(s.error=_s),s.complete===void 0&&(s.complete=_s);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _s(){}function _r(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,T(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ji=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n){return n&&n._delegate?n._delegate:n}class Nt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Qi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kd(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(n){return n===yt?void 0:n}function kd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Id(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Rd={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Nd=J.INFO,Ad={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Pd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Ad[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pr{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Od=(n,e)=>e.some(t=>n instanceof t);let xo,$o;function Dd(){return xo||(xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return $o||($o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ml=new WeakMap,Ds=new WeakMap,vl=new WeakMap,ps=new WeakMap,gr=new WeakMap;function Ld(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ot(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ml.set(t,n)}).catch(()=>{}),gr.set(e,n),e}function xd(n){if(Ds.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ds.set(n,e)}let Ms={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ds.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $d(n){Ms=n(Ms)}function Fd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(gs(this),e,...t);return vl.set(i,e.sort?e.sort():[e]),ot(i)}:Md().includes(n)?function(...e){return n.apply(gs(this),e),ot(ml.get(this))}:function(...e){return ot(n.apply(gs(this),e))}}function Ud(n){return typeof n=="function"?Fd(n):(n instanceof IDBTransaction&&xd(n),Od(n,Dd())?new Proxy(n,Ms):n)}function ot(n){if(n instanceof IDBRequest)return Ld(n);if(ps.has(n))return ps.get(n);const e=Ud(n);return e!==n&&(ps.set(n,e),gr.set(e,n)),e}const gs=n=>gr.get(n);function Wd(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ot(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ot(o.result),l.oldVersion,l.newVersion,ot(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Bd=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],ms=new Map;function Fo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ms.get(e))return ms.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Hd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Bd.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return ms.set(e,r),r}$d(n=>({...n,get:(e,t,i)=>Fo(e,t)||n.get(e,t,i),has:(e,t)=>!!Fo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ls="@firebase/app",Uo="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new pr("@firebase/app"),jd="@firebase/app-compat",qd="@firebase/analytics-compat",Gd="@firebase/analytics",Kd="@firebase/app-check-compat",Yd="@firebase/app-check",Qd="@firebase/auth",Jd="@firebase/auth-compat",Xd="@firebase/database",Zd="@firebase/database-compat",ef="@firebase/functions",tf="@firebase/functions-compat",nf="@firebase/installations",sf="@firebase/installations-compat",rf="@firebase/messaging",of="@firebase/messaging-compat",af="@firebase/performance",lf="@firebase/performance-compat",cf="@firebase/remote-config",uf="@firebase/remote-config-compat",hf="@firebase/storage",df="@firebase/storage-compat",ff="@firebase/firestore",_f="@firebase/firestore-compat",pf="firebase",gf="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]",mf={[Ls]:"fire-core",[jd]:"fire-core-compat",[Gd]:"fire-analytics",[qd]:"fire-analytics-compat",[Yd]:"fire-app-check",[Kd]:"fire-app-check-compat",[Qd]:"fire-auth",[Jd]:"fire-auth-compat",[Xd]:"fire-rtdb",[Zd]:"fire-rtdb-compat",[ef]:"fire-fn",[tf]:"fire-fn-compat",[nf]:"fire-iid",[sf]:"fire-iid-compat",[rf]:"fire-fcm",[of]:"fire-fcm-compat",[af]:"fire-perf",[lf]:"fire-perf-compat",[cf]:"fire-rc",[uf]:"fire-rc-compat",[hf]:"fire-gcs",[df]:"fire-gcs-compat",[ff]:"fire-fst",[_f]:"fire-fst-compat","fire-js":"fire-js",[pf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,$s=new Map;function vf(n,e){try{n.container.addComponent(e)}catch(t){At.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){const e=n.name;if($s.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;$s.set(e,n);for(const t of ki.values())vf(t,n);return!0}function mr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},at=new qn("app","Firebase",yf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=gf;function yl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:xs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw at.create("bad-app-name",{appName:String(s)});if(t||(t=dl()),!t)throw at.create("no-options");const r=ki.get(s);if(r){if(Si(t,r.options)&&Si(i,r.config))return r;throw at.create("duplicate-app",{appName:s})}const o=new Td(s);for(const l of $s.values())o.addComponent(l);const a=new wf(t,i,o);return ki.set(s,a),a}function wl(n=xs){const e=ki.get(n);if(!e&&n===xs&&dl())return yl();if(!e)throw at.create("no-app",{appName:n});return e}function lt(n,e,t){var i;let s=(i=mf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(a.join(" "));return}en(new Nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="firebase-heartbeat-database",Cf=1,On="firebase-heartbeat-store";let vs=null;function bl(){return vs||(vs=Wd(bf,Cf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(On)}}}).catch(n=>{throw at.create("idb-open",{originalErrorMessage:n.message})})),vs}async function Ef(n){try{return await(await bl()).transaction(On).objectStore(On).get(Cl(n))}catch(e){if(e instanceof vt)At.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(t.message)}}}async function Wo(n,e){try{const i=(await bl()).transaction(On,"readwrite");await i.objectStore(On).put(e,Cl(n)),await i.done}catch(t){if(t instanceof vt)At.warn(t.message);else{const i=at.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});At.warn(i.message)}}}function Cl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=1024,Sf=30*24*60*60*1e3;class kf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Sf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bo(),{heartbeatsToSend:t,unsentEntries:i}=Tf(this._heartbeatsCache.heartbeats),s=Ci(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bo(){return new Date().toISOString().substring(0,10)}function Tf(n,e=If){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ho(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ho(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Rf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?fd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ef(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ho(n){return Ci(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n){en(new Nt("platform-logger",e=>new Vd(e),"PRIVATE")),en(new Nt("heartbeat",e=>new kf(e),"PRIVATE")),lt(Ls,Uo,n),lt(Ls,Uo,"esm2017"),lt("fire-js","")}Nf("");var Af="firebase",Pf="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Af,Pf,"app");const Vo="@firebase/database",zo="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El="";function Of(n){El=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Pn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Xe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Df(e)}}catch{}return new Mf},Et=Il("localStorage"),Fs=Il("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new pr("@firebase/database"),Lf=function(){let n=1;return function(){return n++}}(),Sl=function(n){const e=Ed(n),t=new yd;t.update(e);const i=t.digest();return hr.encodeByteArray(i)},Gn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Gn.apply(null,i):typeof i=="object"?e+=de(i):e+=i,e+=" "}return e};let kt=null,jo=!0;const xf=function(n,e){T(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(jt.logLevel=J.VERBOSE,kt=jt.log.bind(jt),e&&Fs.set("logging_enabled",!0)):typeof n=="function"?kt=n:(kt=null,Fs.remove("logging_enabled"))},Ce=function(...n){if(jo===!0&&(jo=!1,kt===null&&Fs.get("logging_enabled")===!0&&xf(!0)),kt){const e=Gn.apply(null,n);kt(e)}},Kn=function(n){return function(...e){Ce(n,...e)}},Us=function(...n){const e="FIREBASE INTERNAL ERROR: "+Gn(...n);jt.error(e)},Qe=function(...n){const e=`FIREBASE FATAL ERROR: ${Gn(...n)}`;throw jt.error(e),new Error(e)},Te=function(...n){const e="FIREBASE WARNING: "+Gn(...n);jt.warn(e)},$f=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ff=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},tn="[MIN_NAME]",Pt="[MAX_NAME]",hn=function(n,e){if(n===e)return 0;if(n===tn||e===Pt)return-1;if(e===tn||n===Pt)return 1;{const t=qo(n),i=qo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Uf=function(n,e){return n===e?0:n<e?-1:1},mn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+de(e))},vr=function(n){if(typeof n!="object"||n===null)return de(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=de(e[i]),t+=":",t+=vr(n[e[i]]);return t+="}",t},Tl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Re(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Rl=function(n){T(!kl(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Wf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Vf=new RegExp("^-?(0*)\\d{1,10}$"),zf=-2147483648,jf=2147483647,qo=function(n){if(Vf.test(n)){const e=Number(n);if(e>=zf&&e<=jf)return e}return null},dn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Te("Exception was thrown by user callback.",t),e},Math.floor(0))}},qf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Te(e)}}class qt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="5",Nl="v",Al="s",Pl="r",Ol="f",Dl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ml="ls",Ll="p",Ws="ac",xl="websocket",$l="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Et.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Et.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Yf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ul(n,e,t){T(typeof e=="string","typeof type must == string"),T(typeof t=="object","typeof params must == object");let i;if(e===xl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===$l)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yf(n)&&(t.ns=n.namespace);const s=[];return Re(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.counters_={}}incrementCounter(e,t=1){Xe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return nd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={},ws={};function wr(n){const e=n.toString();return ys[e]||(ys[e]=new Qf),ys[e]}function Jf(n,e){const t=n.toString();return ws[t]||(ws[t]=e()),ws[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&dn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="start",Zf="close",e_="pLPCommand",t_="pRTLPCB",Wl="id",Bl="pw",Hl="ser",n_="cb",i_="seg",s_="ts",r_="d",o_="dframe",Vl=1870,zl=30,a_=Vl-zl,l_=25e3,c_=3e4;class Bt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kn(e),this.stats_=wr(t),this.urlFn=l=>(this.appCheckToken&&(l[Ws]=this.appCheckToken),Ul(t,$l,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Xf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(c_)),Ff(()=>{if(this.isClosed_)return;this.scriptTagHolder=new br((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Go)this.id=a,this.password=l;else if(o===Zf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Go]="t",i[Hl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[n_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Nl]=yr,this.transportSessionId&&(i[Al]=this.transportSessionId),this.lastSessionId&&(i[Ml]=this.lastSessionId),this.applicationId&&(i[Ll]=this.applicationId),this.appCheckToken&&(i[Ws]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dl.test(location.hostname)&&(i[Pl]=Ol);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bt.forceAllow_=!0}static forceDisallow(){Bt.forceDisallow_=!0}static isAvailable(){return Bt.forceAllow_?!0:!Bt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wf()&&!Bf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=cl(t),s=Tl(i,a_);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[o_]="t",i[Wl]=e,i[Bl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=de(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class br{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lf(),window[e_+this.uniqueCallbackIdentifier]=e,window[t_+this.uniqueCallbackIdentifier]=t,this.myIFrame=br.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wl]=this.myID,e[Bl]=this.myPW,e[Hl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zl+i.length<=Vl;){const o=this.pendingSegs.shift();i=i+"&"+i_+s+"="+o.seg+"&"+s_+s+"="+o.ts+"&"+r_+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(l_)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=16384,h_=45e3;let Ti=null;typeof MozWebSocket<"u"?Ti=MozWebSocket:typeof WebSocket<"u"&&(Ti=WebSocket);class De{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kn(this.connId),this.stats_=wr(t),this.connURL=De.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Nl]=yr,typeof location<"u"&&location.hostname&&Dl.test(location.hostname)&&(o[Pl]=Ol),t&&(o[Al]=t),i&&(o[Ml]=i),s&&(o[Ws]=s),r&&(o[Ll]=r),Ul(e,xl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Et.set("previous_websocket_failure",!0);try{let i;pl(),this.mySock=new Ti(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ti!==null&&!De.forceDisallow_}static previouslyFailed(){return Et.isInMemoryStorage||Et.get("previous_websocket_failure")===!0}markConnectionHealthy(){Et.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Pn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Tl(t,u_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(h_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}De.responsesRequiredToBeHealthy=2;De.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bt,De]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=De&&De.isAvailable();let i=t&&!De.previouslyFailed();if(e.webSocketOnly&&(t||Te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[De];else{const s=this.transports_=[];for(const r of Dn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Dn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Dn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=6e4,f_=5e3,__=10*1024,p_=100*1024,bs="t",Ko="d",g_="s",Yo="r",m_="e",Qo="o",Jo="a",Xo="n",Zo="p",v_="h";class y_{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kn("c:"+this.id+":"),this.transportManager_=new Dn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Sn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>p_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>__?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bs in e){const t=e[bs];t===Jo?this.upgradeIfSecondaryHealthy_():t===Yo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=mn("t",e),i=mn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=mn("t",e),i=mn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=mn(bs,e);if(Ko in e){const i=e[Ko];if(t===v_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Xo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===g_?this.onConnectionShutdown_(i):t===Yo?this.onReset_(i):t===m_?Us("Server Error: "+i):t===Qo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Us("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),yr!==i&&Te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Sn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(f_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Et.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends ql{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ri}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=32,ta=768;class X{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Y(){return new X("")}function q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function dt(n){return n.pieces_.length-n.pieceNum_}function Z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new X(n.pieces_,e)}function Gl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function w_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Kl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new X(e,0)}function fe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof X)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new X(t,0)}function K(n){return n.pieceNum_>=n.pieces_.length}function Ie(n,e){const t=q(n),i=q(e);if(t===null)return e;if(t===i)return Ie(Z(n),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Cr(n,e){if(dt(n)!==dt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Me(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(dt(n)>dt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class b_{constructor(e,t){this.errorPrefix_=t,this.parts_=Kl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ji(this.parts_[i]);Ql(this)}}function C_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ji(e),Ql(n)}function E_(n){const e=n.parts_.pop();n.byteLength_-=Ji(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ql(n){if(n.byteLength_>ta)throw new Error(n.errorPrefix_+"has a key path longer than "+ta+" bytes ("+n.byteLength_+").");if(n.parts_.length>ea)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ea+") or object contains a cycle "+wt(n))}function wt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ql{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Er}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=1e3,I_=60*5*1e3,na=30*1e3,S_=1.3,k_=3e4,T_="server_kill",ia=3;class Ke extends jl{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ke.nextPersistentConnectionId_++,this.log_=Kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vn,this.maxReconnectDelay_=I_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!pl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Er.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(de(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Qi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ke.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Xe(e,"w")){const i=Zt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=na)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=md(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Us("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>k_&&(this.reconnectDelay_=vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*S_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ke.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new y_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{Te(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(T_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Te(h),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Os(this.interruptReasons_)&&(this.reconnectDelay_=vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>vr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new X(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ia&&(this.reconnectDelay_=na,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ia&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+El.replace(/\./g,"-")]=1,fr()?e["framework.cordova"]=1:_l()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ri.getInstance().currentlyOnline();return Os(this.interruptReasons_)&&e}}Ke.nextPersistentConnectionId_=0;Ke.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new G(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new G(tn,e),s=new G(tn,t);return this.compare(i,s)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class Jl extends Xi{static get __EMPTY_NODE(){return li}static set __EMPTY_NODE(e){li=e}compare(e,t){return hn(e.name,t.name)}isDefinedOn(e){throw ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return G.MIN}maxPost(){return new G(Pt,li)}makePost(e,t){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,li)}toString(){return".key"}}const Gt=new Jl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ye.RED,this.left=s??Se.EMPTY_NODE,this.right=r??Se.EMPTY_NODE}copy(e,t,i,s,r){return new ye(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class R_{copy(e,t,i,s,r){return this}insert(e,t,i){return new ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,t=Se.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Se(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ci(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ci(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ci(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ci(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new R_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n,e){return hn(n.name,e.name)}function Ir(n,e){return hn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;function A_(n){Bs=n}const Xl=function(n){return typeof n=="number"?"number:"+Rl(n):"string:"+n},Zl=function(n){if(n.isLeafNode()){const e=n.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xe(e,".sv"),"Priority must be a string or number.")}else T(n===Bs||n.isEmpty(),"priority of unexpected type.");T(n===Bs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;class ve{constructor(e,t=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zl(this.priorityNode_)}static set __childrenNodeConstructor(e){sa=e}static get __childrenNodeConstructor(){return sa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:q(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=q(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(T(i!==".priority"||dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Rl(this.value_):e+=this.value_,this.lazyHash_=Sl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ve.VALUE_TYPE_ORDER.indexOf(t),r=ve.VALUE_TYPE_ORDER.indexOf(i);return T(s>=0,"Unknown leaf type: "+t),T(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec,tc;function P_(n){ec=n}function O_(n){tc=n}class D_ extends Xi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?hn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Pt,new ve("[PRIORITY-POST]",tc))}makePost(e,t){const i=ec(e);return new G(t,new ve("[PRIORITY-POST]",i))}toString(){return".priority"}}const re=new D_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=Math.log(2);class L_{constructor(e){const t=r=>parseInt(Math.log(r)/M_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ni=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new ye(d,h.node,ye.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),v=s(f+1,c);return h=n[f],d=t?t(h):h,new ye(d,h.node,ye.BLACK,p,v)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,v){const g=h-p,S=h;h-=p;const y=s(g+1,S),w=n[g],k=t?t(w):w;f(new ye(k,w.node,v,null,y))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));v?d(g,ye.BLACK):(d(g,ye.BLACK),d(g,ye.RED))}return u},o=new L_(n.length),a=r(o);return new Se(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;const Ut={};class ze{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return T(Ut&&re,"ChildrenNode.ts has not been loaded"),Cs=Cs||new ze({".priority":Ut},{".priority":re}),Cs}get(e){const t=Zt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Se?t:null}hasIndex(e){return Xe(this.indexSet_,e.toString())}addIndex(e,t){T(e!==Gt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(G.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ni(i,e.getCompare()):a=Ut;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ze(u,c)}addToIndexes(e,t){const i=Ii(this.indexes_,(s,r)=>{const o=Zt(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),s===Ut)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ni(a,o.getCompare())}else return Ut;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new ze(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ii(this.indexes_,s=>{if(s===Ut)return s;{const r=t.get(e.name);return r?s.remove(new G(e.name,r)):s}});return new ze(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn;class x{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Zl(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yn||(yn=new x(new Se(Ir),null,ze.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yn}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?yn:t}}getChild(e){const t=q(e);return t===null?this:this.getImmediateChild(t).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(T(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new G(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?yn:this.priorityNode_;return new x(s,o,r)}}updateChild(e,t){const i=q(e);if(i===null)return t;{T(q(e)!==".priority"||dt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Z(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(re,(o,a)=>{t[o]=a.val(e),i++,r&&x.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xl(this.getPriority().val())+":"),this.forEachChild(re,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Sl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new G(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new G(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new G(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,G.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yn?-1:0}withIndex(e){if(e===Gt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Gt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(re),s=t.getIterator(re);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gt?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class x_ extends x{constructor(){super(new Se(Ir),x.EMPTY_NODE,ze.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Yn=new x_;Object.defineProperties(G,{MIN:{value:new G(tn,x.EMPTY_NODE)},MAX:{value:new G(Pt,Yn)}});Jl.__EMPTY_NODE=x.EMPTY_NODE;ve.__childrenNodeConstructor=x;A_(Yn);O_(Yn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=!0;function we(n,e=null){if(n===null)return x.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ve(t,we(e))}if(!(n instanceof Array)&&$_){const t=[];let i=!1;if(Re(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=we(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new G(o,l)))}}),t.length===0)return x.EMPTY_NODE;const r=Ni(t,N_,o=>o.name,Ir);if(i){const o=Ni(t,re.getCompare());return new x(r,we(e),new ze({".priority":o},{".priority":re}))}else return new x(r,we(e),ze.Default)}else{let t=x.EMPTY_NODE;return Re(n,(i,s)=>{if(Xe(n,i)&&i.substring(0,1)!=="."){const r=we(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(we(e))}}P_(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_ extends Xi{constructor(e){super(),this.indexPath_=e,T(!K(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?hn(e.name,t.name):r}makePost(e,t){const i=we(e),s=x.EMPTY_NODE.updateChild(this.indexPath_,i);return new G(t,s)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Yn);return new G(Pt,e)}toString(){return Kl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends Xi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?hn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,t){const i=we(e);return new G(t,i)}toString(){return".value"}}const W_=new U_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){return{type:"value",snapshotNode:n}}function nn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Mn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ln(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function B_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Mn(t,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(nn(t,i)):o.trackChildChange(Ln(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(re,(s,r)=>{t.hasChild(s)||i.trackChildChange(Mn(s,r))}),t.isLeafNode()||t.forEachChild(re,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ln(s,r,o))}else i.trackChildChange(nn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.indexedFilter_=new Sr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new G(t,i))||(i=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=x.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(x.EMPTY_NODE);const r=this;return t.forEachChild(re,(o,a)=>{r.matches(new G(o,a))||(s=s.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new G(t,i))||(i=x.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=x.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(x.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new G(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ln(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Mn(t,h));const v=a.updateImmediateChild(t,x.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(nn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Mn(c.name,c.node)),r.trackChildChange(nn(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new kr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function V_(n){return n.loadsAllData()?new Sr(n.getIndex()):n.hasLimit()?new H_(n):new xn(n)}function ra(n){const e={};if(n.isDefault())return e;let t;if(n.index_===re?t="$priority":n.index_===W_?t="$value":n.index_===Gt?t="$key":(T(n.index_ instanceof F_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=de(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=de(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+de(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=de(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+de(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function oa(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==re&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends jl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Kn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ai.getListenId_(e,i),a={};this.listens_[o]=a;const l=ra(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Zt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Ai.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ra(e._queryParams),i=e._path.toString(),s=new Qi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Pn(a.responseText)}catch{Te("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Te("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){return{value:null,children:new Map}}function ic(n,e,t){if(K(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=q(e);n.children.has(i)||n.children.set(i,Pi());const s=n.children.get(i);e=Z(e),ic(s,e,t)}}function Hs(n,e,t){n.value!==null?t(e,n.value):j_(n,(i,s)=>{const r=new X(e.toString()+"/"+i);Hs(s,r,t)})}function j_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Re(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=10*1e3,G_=30*1e3,K_=5*60*1e3;class Y_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new q_(e);const i=aa+(G_-aa)*Math.random();Sn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Re(e,(s,r)=>{r>0&&Xe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Sn(this.reportStats_.bind(this),Math.floor(Math.random()*2*K_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Le||(Le={}));function sc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Le.ACK_USER_WRITE,this.source=sc()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new X(e));return new Oi(Y(),t,this.revert)}}else return T(q(this.path)===e,"operationForChild called for unrelated child."),new Oi(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.source=e,this.path=t,this.type=Le.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new $n(this.source,Y()):new $n(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Le.OVERWRITE}operationForChild(e){return K(this.path)?new Ot(this.source,Y(),this.snap.getImmediateChild(e)):new Ot(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Le.MERGE}operationForChild(e){if(K(this.path)){const t=this.children.subtree(new X(e));return t.isEmpty()?null:t.value?new Ot(this.source,Y(),t.value):new Fn(this.source,Y(),t)}else return T(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fn(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const t=q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function J_(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(B_(o.childName,o.snapshotNode))}),wn(n,s,"child_removed",e,i,t),wn(n,s,"child_added",e,i,t),wn(n,s,"child_moved",r,i,t),wn(n,s,"child_changed",e,i,t),wn(n,s,"value",e,i,t),s}function wn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Z_(n,a,l)),o.forEach(a=>{const l=X_(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function X_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Z_(n,e,t){if(e.childName==null||t.childName==null)throw ln("Should only compare child_ events.");const i=new G(e.childName,e.snapshotNode),s=new G(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,e){return{eventCache:n,serverCache:e}}function kn(n,e,t,i){return Zi(new ft(e,t,i),n.serverCache)}function rc(n,e,t,i){return Zi(n.eventCache,new ft(e,t,i))}function Di(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Dt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;const ep=()=>(Es||(Es=new Se(Uf)),Es);class ee{constructor(e,t=ep()){this.value=e,this.children=t}static fromObject(e){let t=new ee(null);return Re(e,(i,s)=>{t=t.set(new X(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Y(),value:this.value};if(K(e))return null;{const i=q(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Z(e),t);return r!=null?{path:fe(new X(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const t=q(e),i=this.children.get(t);return i!==null?i.subtree(Z(e)):new ee(null)}}set(e,t){if(K(e))return new ee(t,this.children);{const i=q(e),r=(this.children.get(i)||new ee(null)).set(Z(e),t),o=this.children.insert(i,r);return new ee(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const t=q(e),i=this.children.get(t);if(i){const s=i.remove(Z(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new ee(null):new ee(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const t=q(e),i=this.children.get(t);return i?i.get(Z(e)):null}}setTree(e,t){if(K(e))return t;{const i=q(e),r=(this.children.get(i)||new ee(null)).setTree(Z(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ee(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(fe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Y(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(K(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(Z(e),fe(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Y(),t)}foreachOnPath_(e,t,i){if(K(e))return this;{this.value&&i(t,this.value);const s=q(e),r=this.children.get(s);return r?r.foreachOnPath_(Z(e),fe(t,s),i):new ee(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(fe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.writeTree_=e}static empty(){return new xe(new ee(null))}}function Tn(n,e,t){if(K(e))return new xe(new ee(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ie(s,e);return r=r.updateChild(o,t),new xe(n.writeTree_.set(s,r))}else{const s=new ee(t),r=n.writeTree_.setTree(e,s);return new xe(r)}}}function la(n,e,t){let i=n;return Re(t,(s,r)=>{i=Tn(i,fe(e,s),r)}),i}function ca(n,e){if(K(e))return xe.empty();{const t=n.writeTree_.setTree(e,new ee(null));return new xe(t)}}function Vs(n,e){return xt(n,e)!=null}function xt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ie(t.path,e)):null}function ua(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(re,(i,s)=>{e.push(new G(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new G(i,s.value))}),e}function ct(n,e){if(K(e))return n;{const t=xt(n,e);return t!=null?new xe(new ee(t)):new xe(n.writeTree_.subtree(e))}}function zs(n){return n.writeTree_.isEmpty()}function sn(n,e){return oc(Y(),n.writeTree_,e)}function oc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=oc(fe(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(fe(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n,e){return uc(e,n)}function tp(n,e,t,i,s){T(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Tn(n.visibleWrites,e,t)),n.lastWriteId=i}function np(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function ip(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);T(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&sp(a,i.path)?s=!1:Me(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return rp(n),!0;if(i.snap)n.visibleWrites=ca(n.visibleWrites,i.path);else{const a=i.children;Re(a,l=>{n.visibleWrites=ca(n.visibleWrites,fe(i.path,l))})}return!0}else return!1}function sp(n,e){if(n.snap)return Me(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Me(fe(n.path,t),e))return!0;return!1}function rp(n){n.visibleWrites=ac(n.allWrites,op,Y()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function op(n){return n.visible}function ac(n,e,t){let i=xe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Me(t,o)?(a=Ie(t,o),i=Tn(i,a,r.snap)):Me(o,t)&&(a=Ie(o,t),i=Tn(i,Y(),r.snap.getChild(a)));else if(r.children){if(Me(t,o))a=Ie(t,o),i=la(i,a,r.children);else if(Me(o,t))if(a=Ie(o,t),K(a))i=la(i,Y(),r.children);else{const l=Zt(r.children,q(a));if(l){const c=l.getChild(Z(a));i=Tn(i,Y(),c)}}}else throw ln("WriteRecord should have .snap or .children")}}return i}function lc(n,e,t,i,s){if(!i&&!s){const r=xt(n.visibleWrites,e);if(r!=null)return r;{const o=ct(n.visibleWrites,e);if(zs(o))return t;if(t==null&&!Vs(o,Y()))return null;{const a=t||x.EMPTY_NODE;return sn(o,a)}}}else{const r=ct(n.visibleWrites,e);if(!s&&zs(r))return t;if(!s&&t==null&&!Vs(r,Y()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Me(c.path,e)||Me(e,c.path))},a=ac(n.allWrites,o,e),l=t||x.EMPTY_NODE;return sn(a,l)}}}function ap(n,e,t){let i=x.EMPTY_NODE;const s=xt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(re,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=ct(n.visibleWrites,e);return t.forEachChild(re,(o,a)=>{const l=sn(ct(r,new X(o)),a);i=i.updateImmediateChild(o,l)}),ua(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ct(n.visibleWrites,e);return ua(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function lp(n,e,t,i,s){T(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=fe(e,t);if(Vs(n.visibleWrites,r))return null;{const o=ct(n.visibleWrites,r);return zs(o)?s.getChild(t):sn(o,s.getChild(t))}}function cp(n,e,t,i){const s=fe(e,t),r=xt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=ct(n.visibleWrites,s);return sn(o,i.getNode().getImmediateChild(t))}else return null}function up(n,e){return xt(n.visibleWrites,e)}function hp(n,e,t,i,s,r,o){let a;const l=ct(n.visibleWrites,e),c=xt(l,Y());if(c!=null)a=c;else if(t!=null)a=sn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function dp(){return{visibleWrites:xe.empty(),allWrites:[],lastWriteId:-1}}function Mi(n,e,t,i){return lc(n.writeTree,n.treePath,e,t,i)}function Nr(n,e){return ap(n.writeTree,n.treePath,e)}function ha(n,e,t,i){return lp(n.writeTree,n.treePath,e,t,i)}function Li(n,e){return up(n.writeTree,fe(n.treePath,e))}function fp(n,e,t,i,s,r){return hp(n.writeTree,n.treePath,e,t,i,s,r)}function Ar(n,e,t){return cp(n.writeTree,n.treePath,e,t)}function cc(n,e){return uc(fe(n.treePath,e),n.writeTree)}function uc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;T(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),T(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ln(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Mn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,nn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ln(i,e.snapshotNode,s.oldSnap));else throw ln("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const hc=new pp;class Pr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ar(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dt(this.viewCache_),r=fp(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(n){return{filter:n}}function mp(n,e){T(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function vp(n,e,t,i,s){const r=new _p;let o,a;if(t.type===Le.OVERWRITE){const c=t;c.source.fromUser?o=js(n,e,c.path,c.snap,i,s,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=xi(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Le.MERGE){const c=t;c.source.fromUser?o=wp(n,e,c.path,c.children,i,s,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=qs(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Le.ACK_USER_WRITE){const c=t;c.revert?o=Ep(n,e,c.path,i,s,r):o=bp(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Le.LISTEN_COMPLETE)o=Cp(n,e,t.path,i,r);else throw ln("Unknown operation type: "+t.type);const l=r.getChanges();return yp(e,o,l),{viewCache:o,changes:l}}function yp(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Di(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(nc(Di(e)))}}function dc(n,e,t,i,s,r){const o=e.eventCache;if(Li(i,t)!=null)return e;{let a,l;if(K(t))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Dt(e),u=c instanceof x?c:x.EMPTY_NODE,h=Nr(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Mi(i,Dt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(t);if(c===".priority"){T(dt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ha(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=Z(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ha(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ar(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return kn(e,a,o.isFullyInitialized()||K(t),n.filter.filtersNodes())}}function xi(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(K(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=q(t);if(!l.isCompleteForPath(t)&&dt(t)>1)return e;const p=Z(t),g=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,p,hc,null)}const h=rc(e,c,l.isFullyInitialized()||K(t),u.filtersNodes()),d=new Pr(s,h,r);return dc(n,h,t,s,d,a)}function js(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Pr(s,e,r);if(K(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=kn(e,c,!0,n.filter.filtersNodes());else{const h=q(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=kn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Z(t),f=a.getNode().getImmediateChild(h);let p;if(K(d))p=i;else{const v=u.getCompleteChild(h);v!=null?Gl(d)===".priority"&&v.getChild(Yl(d)).isEmpty()?p=v:p=v.updateChild(d,i):p=x.EMPTY_NODE}if(f.equals(p))l=e;else{const v=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=kn(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function da(n,e){return n.eventCache.isCompleteForChild(e)}function wp(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=fe(t,l);da(e,q(u))&&(a=js(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=fe(t,l);da(e,q(u))||(a=js(n,a,u,c,s,r,o))}),a}function fa(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function qs(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;K(t)?c=i:c=new ee(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=fa(n,f,d);l=xi(n,l,new X(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),v=fa(n,p,d);l=xi(n,l,new X(h),v,s,r,o,a)}}),l}function bp(n,e,t,i,s,r,o){if(Li(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(K(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return xi(n,e,t,l.getNode().getChild(t),s,r,a,o);if(K(t)){let c=new ee(null);return l.getNode().forEachChild(Gt,(u,h)=>{c=c.set(new X(u),h)}),qs(n,e,t,c,s,r,a,o)}else return e}else{let c=new ee(null);return i.foreach((u,h)=>{const d=fe(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),qs(n,e,t,c,s,r,a,o)}}function Cp(n,e,t,i,s){const r=e.serverCache,o=rc(e,r.getNode(),r.isFullyInitialized()||K(t),r.isFiltered());return dc(n,o,t,i,hc,s)}function Ep(n,e,t,i,s,r){let o;if(Li(i,t)!=null)return e;{const a=new Pr(i,e,s),l=e.eventCache.getNode();let c;if(K(t)||q(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mi(i,Dt(e));else{const h=e.serverCache.getNode();T(h instanceof x,"serverChildren would be complete if leaf node"),u=Nr(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=q(t);let h=Ar(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,Z(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,x.EMPTY_NODE,Z(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mi(i,Dt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Li(i,Y())!=null,kn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Sr(i.getIndex()),r=V_(i);this.processor_=gp(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(x.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(x.EMPTY_NODE,a.getNode(),null),u=new ft(l,o.isFullyInitialized(),s.filtersNodes()),h=new ft(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zi(h,u),this.eventGenerator_=new Q_(this.query_)}get query(){return this.query_}}function Sp(n){return n.viewCache_.serverCache.getNode()}function kp(n){return Di(n.viewCache_)}function Tp(n,e){const t=Dt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!K(e)&&!t.getImmediateChild(q(e)).isEmpty())?t.getChild(e):null}function _a(n){return n.eventRegistrations_.length===0}function Rp(n,e){n.eventRegistrations_.push(e)}function pa(n,e,t){const i=[];if(t){T(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function ga(n,e,t,i){e.type===Le.MERGE&&e.source.queryId!==null&&(T(Dt(n.viewCache_),"We should always have a full cache before handling merges"),T(Di(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=vp(n.processor_,s,e,t,i);return mp(n.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,fc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Np(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(re,(r,o)=>{i.push(nn(r,o))}),t.isFullyInitialized()&&i.push(nc(t.getNode())),fc(n,i,t.getNode(),e)}function fc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return J_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class _c{constructor(){this.views=new Map}}function Ap(n){T(!$i,"__referenceConstructor has already been defined"),$i=n}function Pp(){return T($i,"Reference.ts has not been loaded"),$i}function Op(n){return n.views.size===0}function Or(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return T(r!=null,"SyncTree gave us an op for an invalid query."),ga(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(ga(o,e,t,i));return r}}function pc(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Mi(t,s?i:null),l=!1;a?l=!0:i instanceof x?(a=Nr(t,i),l=!1):(a=x.EMPTY_NODE,l=!1);const c=Zi(new ft(a,l,!1),new ft(i,s,!1));return new Ip(e,c)}return o}function Dp(n,e,t,i,s,r){const o=pc(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Rp(o,t),Np(o,t)}function Mp(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=_t(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(pa(c,t,i)),_a(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(pa(l,t,i)),_a(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!_t(n)&&r.push(new(Pp())(e._repo,e._path)),{removed:r,events:o}}function gc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ut(n,e){let t=null;for(const i of n.views.values())t=t||Tp(i,e);return t}function mc(n,e){if(e._queryParams.loadsAllData())return ts(n);{const i=e._queryIdentifier;return n.views.get(i)}}function vc(n,e){return mc(n,e)!=null}function _t(n){return ts(n)!=null}function ts(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;function Lp(n){T(!Fi,"__referenceConstructor has already been defined"),Fi=n}function xp(){return T(Fi,"Reference.ts has not been loaded"),Fi}let $p=1;class ma{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=dp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yc(n,e,t,i,s){return tp(n.pendingWriteTree_,e,t,i,s),s?Jn(n,new Ot(sc(),e,t)):[]}function It(n,e,t=!1){const i=np(n.pendingWriteTree_,e);if(ip(n.pendingWriteTree_,e)){let r=new ee(null);return i.snap!=null?r=r.set(Y(),!0):Re(i.children,o=>{r=r.set(new X(o),!0)}),Jn(n,new Oi(i.path,r,t))}else return[]}function Qn(n,e,t){return Jn(n,new Ot(Tr(),e,t))}function Fp(n,e,t){const i=ee.fromObject(t);return Jn(n,new Fn(Tr(),e,i))}function Up(n,e){return Jn(n,new $n(Tr(),e))}function Wp(n,e,t){const i=Mr(n,t);if(i){const s=Lr(i),r=s.path,o=s.queryId,a=Ie(r,e),l=new $n(Rr(o),a);return xr(n,r,l)}else return[]}function Ui(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||vc(o,e))){const l=Mp(o,e,t,i);Op(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>_t(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Vp(d);for(let p=0;p<f.length;++p){const v=f[p],g=v.query,S=Ec(n,v);n.listenProvider_.startListening(Rn(g),Un(n,g),S.hashFn,S.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Rn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(ns(d));n.listenProvider_.stopListening(Rn(d),f)}))}zp(n,c)}return a}function wc(n,e,t,i){const s=Mr(n,i);if(s!=null){const r=Lr(s),o=r.path,a=r.queryId,l=Ie(o,e),c=new Ot(Rr(a),l,t);return xr(n,o,c)}else return[]}function Bp(n,e,t,i){const s=Mr(n,i);if(s){const r=Lr(s),o=r.path,a=r.queryId,l=Ie(o,e),c=ee.fromObject(t),u=new Fn(Rr(a),l,c);return xr(n,o,u)}else return[]}function Gs(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=Ie(d,s);r=r||ut(f,p),o=o||_t(f)});let a=n.syncPointTree_.get(s);a?(o=o||_t(a),r=r||ut(a,Y())):(a=new _c,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=x.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const v=ut(p,Y());v&&(r=r.updateImmediateChild(f,v))}));const c=vc(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ns(e);T(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=jp();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=es(n.pendingWriteTree_,s);let h=Dp(a,e,t,u,r,l);if(!c&&!o&&!i){const d=mc(a,e);h=h.concat(qp(n,e,d))}return h}function Dr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ie(o,e),c=ut(a,l);if(c)return c});return lc(s,e,r,t,!0)}function Hp(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=Ie(c,t);i=i||ut(u,h)});let s=n.syncPointTree_.get(t);s?i=i||ut(s,Y()):(s=new _c,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new ft(i,!0,!1):null,a=es(n.pendingWriteTree_,e._path),l=pc(s,e,a,r?o.getNode():x.EMPTY_NODE,r);return kp(l)}function Jn(n,e){return bc(e,n.syncPointTree_,null,es(n.pendingWriteTree_,Y()))}function bc(n,e,t,i){if(K(n.path))return Cc(n,e,t,i);{const s=e.get(Y());t==null&&s!=null&&(t=ut(s,Y()));let r=[];const o=q(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=cc(i,o);r=r.concat(bc(a,l,c,u))}return s&&(r=r.concat(Or(s,n,i,t))),r}}function Cc(n,e,t,i){const s=e.get(Y());t==null&&s!=null&&(t=ut(s,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=cc(i,o),u=n.operationForChild(o);u&&(r=r.concat(Cc(u,a,l,c)))}),s&&(r=r.concat(Or(s,n,i,t))),r}function Ec(n,e){const t=e.query,i=Un(n,t);return{hashFn:()=>(Sp(e)||x.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Wp(n,t._path,i):Up(n,t._path);{const r=Hf(s,t);return Ui(n,t,null,r)}}}}function Un(n,e){const t=ns(e);return n.queryToTagMap.get(t)}function ns(n){return n._path.toString()+"$"+n._queryIdentifier}function Mr(n,e){return n.tagToQueryMap.get(e)}function Lr(n){const e=n.indexOf("$");return T(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new X(n.substr(0,e))}}function xr(n,e,t){const i=n.syncPointTree_.get(e);T(i,"Missing sync point for query tag that we're tracking");const s=es(n.pendingWriteTree_,e);return Or(i,t,s,null)}function Vp(n){return n.fold((e,t,i)=>{if(t&&_t(t))return[ts(t)];{let s=[];return t&&(s=gc(t)),Re(i,(r,o)=>{s=s.concat(o)}),s}})}function Rn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(xp())(n._repo,n._path):n}function zp(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ns(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function jp(){return $p++}function qp(n,e,t){const i=e._path,s=Un(n,e),r=Ec(n,t),o=n.listenProvider_.startListening(Rn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)T(!_t(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!K(c)&&u&&_t(u))return[ts(u).query];{let d=[];return u&&(d=d.concat(gc(u).map(f=>f.query))),Re(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Rn(u),Un(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $r(t)}node(){return this.node_}}class Fr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=fe(this.path_,e);return new Fr(this.syncTree_,t)}node(){return Dr(this.syncTree_,this.path_)}}const Gp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},va=function(n,e,t){if(!n||typeof n!="object")return n;if(T(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Kp(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yp(n[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Kp=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:T(!1,"Unexpected server value: "+n)}},Yp=function(n,e,t){n.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&T(!1,"Unexpected increment value: "+i);const s=e.node();if(T(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Qp=function(n,e,t,i){return Ur(e,new Fr(t,n),i)},Ic=function(n,e,t){return Ur(n,new $r(e),t)};function Ur(n,e,t){const i=n.getPriority().val(),s=va(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=va(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ve(a,we(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ve(s))),o.forEachChild(re,(a,l)=>{const c=Ur(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Br(n,e){let t=e instanceof X?e:new X(e),i=n,s=q(t);for(;s!==null;){const r=Zt(i.node.children,s)||{children:{},childCount:0};i=new Wr(s,i,r),t=Z(t),s=q(t)}return i}function fn(n){return n.node.value}function Sc(n,e){n.node.value=e,Ks(n)}function kc(n){return n.node.childCount>0}function Jp(n){return fn(n)===void 0&&!kc(n)}function is(n,e){Re(n.node.children,(t,i)=>{e(new Wr(t,n,i))})}function Tc(n,e,t,i){t&&!i&&e(n),is(n,s=>{Tc(s,e,!0,i)}),t&&i&&e(n)}function Xp(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Xn(n){return new X(n.parent===null?n.name:Xn(n.parent)+"/"+n.name)}function Ks(n){n.parent!==null&&Zp(n.parent,n.name,n)}function Zp(n,e,t){const i=Jp(t),s=Xe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Ks(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ks(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=/[\[\].#$\/\u0000-\u001F\u007F]/,tg=/[\[\].#$\u0000-\u001F\u007F]/,Is=10*1024*1024,Rc=function(n){return typeof n=="string"&&n.length!==0&&!eg.test(n)},Nc=function(n){return typeof n=="string"&&n.length!==0&&!tg.test(n)},ng=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nc(n)},ig=function(n,e,t,i){i&&e===void 0||Hr(_r(n,"value"),e,t)},Hr=function(n,e,t){const i=t instanceof X?new b_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wt(i));if(typeof e=="function")throw new Error(n+"contains a function "+wt(i)+" with contents = "+e.toString());if(kl(e))throw new Error(n+"contains "+e.toString()+" "+wt(i));if(typeof e=="string"&&e.length>Is/3&&Ji(e)>Is)throw new Error(n+"contains a string greater than "+Is+" utf8 bytes "+wt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Rc(o)))throw new Error(n+" contains an invalid key ("+o+") "+wt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C_(i,o),Hr(n,a,i),E_(i)}),s&&r)throw new Error(n+' contains ".value" child '+wt(i)+" in addition to actual children.")}},Ac=function(n,e,t,i){if(!(i&&t===void 0)&&!Nc(t))throw new Error(_r(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sg=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ac(n,e,t,i)},rg=function(n,e){if(q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},og=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ng(t))throw new Error(_r(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Cr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Pc(n,e,t){Vr(n,t),Oc(n,i=>Cr(i,e))}function He(n,e,t){Vr(n,t),Oc(n,i=>Me(i,e)||Me(e,i))}function Oc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(lg(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function lg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();kt&&Ce("event: "+t.toString()),dn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="repo_interrupt",ug=25;class hg{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ag,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pi(),this.transactionQueueTree_=new Wr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dg(n,e,t){if(n.stats_=wr(n.repoInfo_),n.forceRestClient_||qf())n.server_=new Ai(n.repoInfo_,(i,s,r,o)=>{ya(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>wa(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ke(n.repoInfo_,e,(i,s,r,o)=>{ya(n,i,s,r,o)},i=>{wa(n,i)},i=>{_g(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Jf(n.repoInfo_,()=>new Y_(n.stats_,n.server_)),n.infoData_=new z_,n.infoSyncTree_=new ma({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Qn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jr(n,"connected",!1),n.serverSyncTree_=new ma({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);He(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function fg(n){const t=n.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function zr(n){return Gp({timestamp:fg(n)})}function ya(n,e,t,i,s){n.dataUpdateCount++;const r=new X(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Ii(t,c=>we(c));o=Bp(n.serverSyncTree_,r,l,s)}else{const l=we(t);o=wc(n.serverSyncTree_,r,l,s)}else if(i){const l=Ii(t,c=>we(c));o=Fp(n.serverSyncTree_,r,l)}else{const l=we(t);o=Qn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=rs(n,r)),He(n.eventQueue_,a,o)}function wa(n,e){jr(n,"connected",e),e===!1&&mg(n)}function _g(n,e){Re(e,(t,i)=>{jr(n,t,i)})}function jr(n,e,t){const i=new X("/.info/"+e),s=we(t);n.infoData_.updateSnapshot(i,s);const r=Qn(n.infoSyncTree_,i,s);He(n.eventQueue_,i,r)}function Dc(n){return n.nextWriteId_++}function pg(n,e,t){const i=Hp(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=we(s).withIndex(e._queryParams.getIndex());Gs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Qn(n.serverSyncTree_,e._path,r);else{const a=Un(n.serverSyncTree_,e);o=wc(n.serverSyncTree_,e._path,r,a)}return He(n.eventQueue_,e._path,o),Ui(n.serverSyncTree_,e,t,null,!0),r},s=>(ss(n,"get for query "+de(e)+" failed: "+s),Promise.reject(new Error(s))))}function gg(n,e,t,i,s){ss(n,"set",{path:e.toString(),value:t,priority:i});const r=zr(n),o=we(t,i),a=Dr(n.serverSyncTree_,e),l=Ic(o,a,r),c=Dc(n),u=yc(n.serverSyncTree_,e,l,c,!0);Vr(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Te("set at "+e+" failed: "+d);const v=It(n.serverSyncTree_,c,!p);He(n.eventQueue_,e,v),wg(n,s,d,f)});const h=Fc(n,e);rs(n,h),He(n.eventQueue_,h,[])}function mg(n){ss(n,"onDisconnectEvents");const e=zr(n),t=Pi();Hs(n.onDisconnect_,Y(),(s,r)=>{const o=Qp(s,r,n.serverSyncTree_,e);ic(t,s,o)});let i=[];Hs(t,Y(),(s,r)=>{i=i.concat(Qn(n.serverSyncTree_,s,r));const o=Fc(n,s);rs(n,o)}),n.onDisconnect_=Pi(),He(n.eventQueue_,Y(),i)}function vg(n,e,t){let i;q(e._path)===".info"?i=Gs(n.infoSyncTree_,e,t):i=Gs(n.serverSyncTree_,e,t),Pc(n.eventQueue_,e._path,i)}function ba(n,e,t){let i;q(e._path)===".info"?i=Ui(n.infoSyncTree_,e,t):i=Ui(n.serverSyncTree_,e,t),Pc(n.eventQueue_,e._path,i)}function yg(n){n.persistentConnection_&&n.persistentConnection_.interrupt(cg)}function ss(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ce(t,...e)}function wg(n,e,t,i){e&&dn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Mc(n,e,t){return Dr(n.serverSyncTree_,e,t)||x.EMPTY_NODE}function qr(n,e=n.transactionQueueTree_){if(e||os(n,e),fn(e)){const t=xc(n,e);T(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&bg(n,Xn(e),t)}else kc(e)&&is(e,t=>{qr(n,t)})}function bg(n,e,t){const i=t.map(c=>c.currentWriteId),s=Mc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ie(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ss(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(It(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();os(n,Br(n.transactionQueueTree_,e)),qr(n,n.transactionQueueTree_),He(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)dn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Te("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}rs(n,e)}},o)}function rs(n,e){const t=Lc(n,e),i=Xn(t),s=xc(n,t);return Cg(n,s,i),i}function Cg(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ie(t,l.path);let u=!1,h;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ug)u=!0,h="maxretry",s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Mc(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Hr("transaction failed: Data returned ",f,l.path);let p=we(f);typeof f=="object"&&f!=null&&Xe(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,S=zr(n),y=Ic(p,d,S);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=Dc(n),o.splice(o.indexOf(g),1),s=s.concat(yc(n.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(It(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",s=s.concat(It(n.serverSyncTree_,l.currentWriteId,!0))}He(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}os(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)dn(i[a]);qr(n,n.transactionQueueTree_)}function Lc(n,e){let t,i=n.transactionQueueTree_;for(t=q(e);t!==null&&fn(i)===void 0;)i=Br(i,t),e=Z(e),t=q(e);return i}function xc(n,e){const t=[];return $c(n,e,t),t.sort((i,s)=>i.order-s.order),t}function $c(n,e,t){const i=fn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);is(e,s=>{$c(n,s,t)})}function os(n,e){const t=fn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Sc(e,t.length>0?t:void 0)}is(e,i=>{os(n,i)})}function Fc(n,e){const t=Xn(Lc(n,e)),i=Br(n.transactionQueueTree_,e);return Xp(i,s=>{Ss(n,s)}),Ss(n,i),Tc(i,s=>{Ss(n,s)}),t}function Ss(n,e){const t=fn(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(T(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(It(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sc(e,void 0):t.length=r+1,He(n.eventQueue_,Xn(e),s);for(let o=0;o<i.length;o++)dn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ig(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Te(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ca=function(n,e){const t=Sg(n),i=t.namespace;t.domain==="firebase.com"&&Qe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Qe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||$f();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Fl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new X(t.pathString)}},Sg=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=Eg(n.substring(u,h)));const d=Ig(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Wc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return K(this._path)?null:Gl(this._path)}get ref(){return new Ve(this._repo,this._path)}get _queryIdentifier(){const e=oa(this._queryParams),t=vr(e);return t==="{}"?"default":t}get _queryObject(){return oa(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof Gr))return!1;const t=this._repo===e._repo,i=Cr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+w_(this._path)}}class Ve extends Gr{constructor(e,t){super(e,t,new kr,!1)}get parent(){const e=Yl(this._path);return e===null?null:new Ve(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new X(e),i=Mt(this.ref,e);return new rn(this._node.getChild(t),i,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new rn(s,Mt(this.ref,i),re)))}hasChild(e){const t=new X(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zn(n,e){return n=Ne(n),n._checkNotDeleted("ref"),e!==void 0?Mt(n._root,e):n._root}function Mt(n,e){return n=Ne(n),q(n._path)===null?sg("child","path",e,!1):Ac("child","path",e,!1),new Ve(n._repo,fe(n._path,e))}function Kr(n,e){n=Ne(n),rg("set",n._path),ig("set",e,n._path,!1);const t=new Qi;return gg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function as(n){n=Ne(n);const e=new Bc(()=>{}),t=new ls(e);return pg(n._repo,n,t).then(i=>new rn(i,new Ve(n._repo,n._path),n._queryParams.getIndex()))}class ls{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Uc("value",this,new rn(e.snapshotNode,new Ve(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Wc(this,e,t):null}matches(e){return e instanceof ls?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Yr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Wc(this,e,t):null}createEvent(e,t){T(e.childName!=null,"Child events should have a childName.");const i=Mt(new Ve(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Uc(e.type,this,new rn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Yr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function kg(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{ba(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Bc(t,r||void 0),a=e==="value"?new ls(o):new Yr(e,o);return vg(n._repo,n,a),()=>ba(n._repo,n,a)}function Tg(n,e,t,i){return kg(n,"value",e,t,i)}Ap(Ve);Lp(Ve);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="FIREBASE_DATABASE_EMULATOR_HOST",Ys={};let Ng=!1;function Ag(n,e,t,i){n.repoInfo_=new Fl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Pg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Qe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ca(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Rg]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ca(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new qt(qt.OWNER):new Kf(n.name,n.options,e);og("Invalid Firebase Database URL",o),K(o.path)||Qe("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Dg(a,n,u,new Gf(n.name,t));return new Mg(h,n)}function Og(n,e){const t=Ys[e];(!t||t[n.key]!==n)&&Qe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),yg(n),delete t[n.key]}function Dg(n,e,t,i){let s=Ys[e.name];s||(s={},Ys[e.name]=s);let r=s[n.toURLString()];return r&&Qe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hg(n,Ng,t,i),s[n.toURLString()]=r,r}class Mg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ve(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Og(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qe("Cannot call "+e+" on a deleted database.")}}function Lg(n=wl(),e){const t=mr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ld("database");i&&xg(t,...i)}return t}function xg(n,e,t,i={}){n=Ne(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Qe("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Qe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new qt(qt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:cd(i.mockUserToken,n.app.options.projectId);r=new qt(o)}Ag(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n){Of(un),en(new Nt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Pg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),lt(Vo,zo,n),lt(Vo,zo,"esm2017")}Ke.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ke.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};$g();let Kt={};const Yt={},Fg=n=>{Kt=n},Ug=n=>{var e;Kt[n.id]=n,(e=Yt[n.id])==null||e.call(Yt,n)},Wg=n=>Kt[n],Bg=n=>{const e=s=>{Kt[n]=s,Yt[n](Kt[n])},t=()=>{delete Yt[n]};return{subscribe:s=>(s(Kt[n]),Yt[n]=s,{unsubscribe:t}),set:e}},Hg=n=>{Hc.set(n)},Hc=zn({theme:ol.Dark,room:"",layout:[],username:""});function Qr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Vc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vg=Vc,zc=new qn("auth","Firebase",Vc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new pr("@firebase/auth");function zg(n,...e){Wi.logLevel<=J.WARN&&Wi.warn(`Auth (${un}): ${n}`,...e)}function fi(n,...e){Wi.logLevel<=J.ERROR&&Wi.error(`Auth (${un}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,...e){throw Jr(n,...e)}function We(n,...e){return Jr(n,...e)}function jg(n,e,t){const i=Object.assign(Object.assign({},Vg()),{[e]:t});return new qn("auth","Firebase",i).create(e,{appName:n.name})}function Jr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return zc.create(n,...e)}function W(n,e,...t){if(!n)throw Jr(e,...t)}function je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fi(e),new Error(e)}function Je(n,e){n||je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qg(){return Ea()==="http:"||Ea()==="https:"}function Ea(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qg()||ud()||"connection"in navigator)?navigator.onLine:!0}function Kg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=fr()||_l()}get(){return Gg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n,e){Je(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new ei(3e4,6e4);function ti(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _n(n,e,t,i,s={}){return qc(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=cn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),jc.fetch()(Gc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function qc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Yg),e);try{const s=new Jg(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ui(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ui(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ui(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ui(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jg(n,u,c);$e(n,u)}}catch(s){if(s instanceof vt)throw s;$e(n,"network-request-failed",{message:String(s)})}}async function cs(n,e,t,i,s={}){const r=await _n(n,e,t,i,s);return"mfaPendingCredential"in r&&$e(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Gc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Xr(n.config,s):`${n.config.apiScheme}://${s}`}class Jg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(We(this.auth,"network-request-failed")),Qg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ui(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=We(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e){return _n(n,"POST","/v1/accounts:delete",e)}async function Zg(n,e){return _n(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function em(n,e=!1){const t=Ne(n),i=await t.getIdToken(e),s=Zr(i);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Nn(ks(s.auth_time)),issuedAtTime:Nn(ks(s.iat)),expirationTime:Nn(ks(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ks(n){return Number(n)*1e3}function Zr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return fi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ei(t);return s?JSON.parse(s):(fi("Failed to decode base64 JWT payload"),null)}catch(s){return fi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tm(n){const e=Zr(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof vt&&nm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function nm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Wn(n,Zg(t,{idToken:i}));W(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?om(r.providerUserInfo):[],a=rm(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Kc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function sm(n){const e=Ne(n);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rm(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function om(n){return n.map(e=>{var{providerId:t}=e,i=Qr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(n,e){const t=await qc(n,{},async()=>{const i=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Gc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await am(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Bn;return i&&(W(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bn,this.toJSON())}_performRefresh(){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Qr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new im(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Kc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return em(this,e)}reload(){return sm(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Bi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wn(this,Xg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,y=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:k,isAnonymous:R,providerData:O,stsTokenManager:D}=t;W(w&&D,e,"internal-error");const U=Bn.fromJSON(this.name,D);W(typeof w=="string",e,"internal-error"),Ze(h,e.name),Ze(d,e.name),W(typeof k=="boolean",e,"internal-error"),W(typeof R=="boolean",e,"internal-error"),Ze(f,e.name),Ze(p,e.name),Ze(v,e.name),Ze(g,e.name),Ze(S,e.name),Ze(y,e.name);const C=new Tt({uid:w,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:R,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:U,createdAt:S,lastLoginAt:y});return O&&Array.isArray(O)&&(C.providerData=O.map(M=>Object.assign({},M))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,i=!1){const s=new Bn;s.updateFromServerResponse(t);const r=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Bi(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map;function qe(n){Je(n instanceof Function,"Expected a class definition");let e=Ia.get(n);return e?(Je(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ia.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yc.type="NONE";const Sa=Yc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e,t){return`firebase:${n}:${e}:${t}`}class Qt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=_i(this.userKey,s.apiKey,r),this.fullPersistenceKey=_i("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Qt(qe(Sa),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||qe(Sa);const o=_i(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=Tt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Qt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eu(e))return"Blackberry";if(tu(e))return"Webos";if(eo(e))return"Safari";if((e.includes("chrome/")||Jc(e))&&!e.includes("edge/"))return"Chrome";if(Zc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Qc(n=Ee()){return/firefox\//i.test(n)}function eo(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jc(n=Ee()){return/crios\//i.test(n)}function Xc(n=Ee()){return/iemobile/i.test(n)}function Zc(n=Ee()){return/android/i.test(n)}function eu(n=Ee()){return/blackberry/i.test(n)}function tu(n=Ee()){return/webos/i.test(n)}function us(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lm(n=Ee()){var e;return us(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cm(){return hd()&&document.documentMode===10}function nu(n=Ee()){return us(n)||Zc(n)||tu(n)||eu(n)||/windows phone/i.test(n)||Xc(n)}function um(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n,e=[]){let t;switch(n){case"Browser":t=ka(Ee());break;case"Worker":t=`${ka(Ee())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${un}/${i}`}async function su(n,e){return _n(n,"GET","/v2/recaptchaConfig",ti(n,e))}function Ta(n){return n!==void 0&&n.enterprise!==void 0}class ru{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ou(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=We("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",hm().appendChild(i)})}function dm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fm="https://www.google.com/recaptcha/enterprise.js?render=",_m="recaptcha-enterprise",pm="NO_RECAPTCHA";class au{constructor(e){this.type=_m,this.auth=ni(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{su(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ru(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Ta(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(pm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Ta(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ou(fm+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ra(n,e,t,i=!1){const s=new au(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Na(this),this.idTokenSubscription=new Na(this),this.beforeStateQueue=new gm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Qt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ne(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}async initializeRecaptchaConfig(){const e=await su(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ru(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new au(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qe(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Qt.create(this,[qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ni(n){return Ne(n)}class Na{constructor(e){this.auth=e,this.observer=null,this.addObserver=wd(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e){const t=mr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Si(r,e??{}))return s;$e(s,"already-initialized")}return t.initialize({options:e})}function ym(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(qe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function wm(n,e,t){const i=ni(n);W(i._canInitEmulator,i,"emulator-config-failed"),W(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=lu(e),{host:o,port:a}=bm(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Cm()}function lu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bm(n){const e=lu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Aa(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Aa(o)}}}function Aa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return je("not implemented")}_getIdTokenResponse(e){return je("not implemented")}_linkToIdToken(e,t){return je("not implemented")}_getReauthenticationResolver(e){return je("not implemented")}}async function Em(n,e){return _n(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n,e){return cs(n,"POST","/v1/accounts:signInWithPassword",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(n,e){return cs(n,"POST","/v1/accounts:signInWithEmailLink",ti(n,e))}async function Sm(n,e){return cs(n,"POST","/v1/accounts:signInWithEmailLink",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends to{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Hn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Hn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await Ra(e,i,"signInWithPassword");return Ts(e,s)}else return Ts(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Ra(e,i,"signInWithPassword");return Ts(e,r)}else return Promise.reject(s)});case"emailLink":return Im(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Em(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sm(e,{idToken:t,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(n,e){return cs(n,"POST","/v1/accounts:signInWithIdp",ti(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="http://localhost";class Lt extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Qr(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Lt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Jt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Jt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jt(e,t)}buildRequest(){const e={requestUri:km,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rm(n){const e=bn(Cn(n)).link,t=e?bn(Cn(e)).deep_link_id:null,i=bn(Cn(n)).deep_link_id;return(i?bn(Cn(i)).link:null)||i||t||e||n}class no{constructor(e){var t,i,s,r,o,a;const l=bn(Cn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=Tm((s=l.mode)!==null&&s!==void 0?s:null);W(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Rm(e);try{return new no(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,t){return Hn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=no.parseLink(t);return W(i,"argument-error"),Hn._fromEmailAndCode(e,i.code,i.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends ii{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch{return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com";et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return tt.credential(t,i)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends ii{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com";nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends ii{constructor(){super("twitter.com")}static credential(e,t){return Lt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return it.credential(t,i)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Tt._fromIdTokenResponse(e,i,s),o=Pa(i);return new on({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Pa(i);return new on({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Pa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends vt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Hi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Hi(e,t,i,s)}}function uu(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Hi._fromErrorAndOperation(n,r,e,i):r})}async function Nm(n,e,t=!1){const i=await Wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return on._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Wn(n,uu(i,s,e,n),t);W(r.idToken,i,"internal-error");const o=Zr(r.idToken);W(o,i,"internal-error");const{sub:a}=o;return W(n.uid===a,i,"user-mismatch"),on._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&$e(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(n,e,t=!1){const i="signIn",s=await uu(n,i,e),r=await on._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Pm(n,e){return hu(ni(n),e)}function Om(n,e,t){return Pm(Ne(n),pn.credential(e,t))}function Dm(n,e,t,i){return Ne(n).onIdTokenChanged(e,t,i)}function Mm(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}function Lm(n,e,t,i){return Ne(n).onAuthStateChanged(e,t,i)}const Vi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vi,"1"),this.storage.removeItem(Vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){const n=Ee();return eo(n)||us(n)}const $m=1e3,Fm=10;class fu extends du{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xm()&&um(),this.fallbackToPolling=nu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);cm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fm):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fu.type="LOCAL";const Um=fu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends du{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_u.type="SESSION";const pu=_u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new hs(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Wm(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=io("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return window}function Hm(n){Be().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function Vm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jm(){return gu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="firebaseLocalStorageDb",qm=1,zi="firebaseLocalStorage",vu="fbase_key";class si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ds(n,e){return n.transaction([zi],e?"readwrite":"readonly").objectStore(zi)}function Gm(){const n=indexedDB.deleteDatabase(mu);return new si(n).toPromise()}function Js(){const n=indexedDB.open(mu,qm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(zi,{keyPath:vu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(zi)?e(i):(i.close(),await Gm(),e(await Js()))})})}async function Oa(n,e,t){const i=ds(n,!0).put({[vu]:e,value:t});return new si(i).toPromise()}async function Km(n,e){const t=ds(n,!1).get(e),i=await new si(t).toPromise();return i===void 0?null:i.value}function Da(n,e){const t=ds(n,!0).delete(e);return new si(t).toPromise()}const Ym=800,Qm=3;class yu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Js(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Qm)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hs._getInstance(jm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vm(),!this.activeServiceWorker)return;this.sender=new Bm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Js();return await Oa(e,Vi,"1"),await Da(e,Vi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Oa(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Km(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Da(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ds(s,!1).getAll();return new si(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yu.type="LOCAL";const Jm=yu;new ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n,e){return e?qe(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends to{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zm(n){return hu(n.auth,new so(n),n.bypassAuthState)}function e1(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Am(t,new so(n),n.bypassAuthState)}async function t1(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Nm(t,new so(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zm;case"linkViaPopup":case"linkViaRedirect":return t1;case"reauthViaPopup":case"reauthViaRedirect":return e1;default:$e(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new ei(2e3,1e4);class Ht extends wu{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n1.get())};e()}}Ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="pendingRedirect",pi=new Map;class s1 extends wu{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=pi.get(this.auth._key());if(!e){try{const i=await r1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}pi.set(this.auth._key(),e)}return this.bypassAuthState||pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r1(n,e){const t=l1(e),i=a1(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function o1(n,e){pi.set(n._key(),e)}function a1(n){return qe(n._redirectPersistence)}function l1(n){return _i(i1,n.config.apiKey,n.name)}async function c1(n,e,t=!1){const i=ni(n),s=Xm(i,e),o=await new s1(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=10*60*1e3;class h1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!bu(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(We(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ma(e))}saveEventToCache(e){this.cachedEventUids.add(Ma(e)),this.lastProcessedEventTime=Date.now()}}function Ma(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(n,e={}){return _n(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p1=/^https?/;async function g1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await f1(n);for(const t of e)try{if(m1(t))return}catch{}$e(n,"unauthorized-domain")}function m1(n){const e=Qs(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!p1.test(t))return!1;if(_1.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new ei(3e4,6e4);function La(){const n=Be().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function y1(n){return new Promise((e,t)=>{var i,s,r;function o(){La(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{La(),t(We(n,"network-request-failed"))},timeout:v1.get()})}if(!((s=(i=Be().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Be().gapi)===null||r===void 0)&&r.load)o();else{const a=dm("iframefcb");return Be()[a]=()=>{gapi.load?o():t(We(n,"network-request-failed"))},ou(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw gi=null,e})}let gi=null;function w1(n){return gi=gi||y1(n),gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new ei(5e3,15e3),C1="__/auth/iframe",E1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k1(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xr(e,E1):`https://${n.config.authDomain}/${C1}`,i={apiKey:e.apiKey,appName:n.name,v:un},s=S1.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${cn(i).slice(1)}`}async function T1(n){const e=await w1(n),t=Be().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:k1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=We(n,"network-request-failed"),a=Be().setTimeout(()=>{r(o)},b1.get());function l(){Be().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N1=500,A1=600,P1="_blank",O1="http://localhost";class xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D1(n,e,t,i=N1,s=A1){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},R1),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Ee().toLowerCase();t&&(a=Jc(c)?P1:t),Qc(c)&&(e=e||O1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(lm(c)&&a!=="_self")return M1(e||"",a),new xa(null);const h=window.open(e||"",a,u);W(h,n,"popup-blocked");try{h.focus()}catch{}return new xa(h)}function M1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="__/auth/handler",x1="emulator/auth/handler",$1=encodeURIComponent("fac");async function $a(n,e,t,i,s,r){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:un,eventId:s};if(e instanceof cu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Os(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ii){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${$1}=${encodeURIComponent(l)}`:"";return`${F1(n)}?${cn(a).slice(1)}${c}`}function F1({config:n}){return n.emulator?Xr(n,x1):`https://${n.authDomain}/${L1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="webStorageSupport";class U1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pu,this._completeRedirectFn=c1,this._overrideRedirectResult=o1}async _openPopup(e,t,i,s){var r;Je((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await $a(e,t,i,Qs(),s);return D1(e,o,io())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await $a(e,t,i,Qs(),s);return Hm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Je(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await T1(e),i=new h1(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rs,{type:Rs},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Rs];o!==void 0&&t(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=g1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nu()||eo()||us()}}const W1=U1;var Fa="@firebase/auth",Ua="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function V1(n){en(new Nt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iu(n)},c=new mm(i,s,r,l);return ym(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),en(new Nt("auth-internal",e=>{const t=ni(e.getProvider("auth").getImmediate());return(i=>new B1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Fa,Ua,H1(n)),lt(Fa,Ua,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=5*60,j1=fl("authIdTokenMaxAge")||z1;let Wa=null;const q1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>j1)return;const s=t==null?void 0:t.token;Wa!==s&&(Wa=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cu(n=wl()){const e=mr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vm(n,{popupRedirectResolver:W1,persistence:[Jm,Um,pu]}),i=fl("authTokenSyncURL");if(i){const r=q1(i);Mm(t,r,()=>r(t.currentUser)),Dm(t,o=>r(o))}const s=hl("auth");return s&&wm(t,`http://${s}`),t}V1("Browser");const G1={apiKey:"AIzaSyCw-ZHcO4Z43U1hxVqzloQEme7DjCe4-0M",authDomain:"home60.firebaseapp.com",databaseURL:"https://home60-default-rtdb.firebaseio.com",projectId:"home60",storageBucket:"home60.appspot.com",messagingSenderId:"331283862970",appId:"1:331283862970:web:3db771cf017c1250b17983"},Eu=yl(G1),ri=Lg(Eu),K1=Cu(Eu),Y1=Zn(ri,"users"),Iu=Zn(ri,"devices"),Su=Zn(ri,"entries"),ku=Zn(ri,"automations"),Q1=Zn(ri,"messages"),J1=async n=>(await as(Mt(Y1,n))).val(),X1=async()=>(await as(ku)).val()||{},Z1=n=>Kr(ku,n),e0=async()=>(await as(Su)).val()||{},t0=n=>Kr(Su,n),n0=async()=>(await as(Iu)).val()||{},Tu=n=>{Kr(Mt(Q1,Date.now().toString()),n)};Lm(K1,async n=>{try{if(n){const[e,t,i,s]=await Promise.all([J1(n.uid),n0(),e0(),X1()]);console.log({user:e,devices:t,entries:i,automations:s}),dh(t),Fg(t),nh(i),oh(s),Hg(e),e.layout.forEach(r=>{Tg(Mt(Iu,r),o=>{const a=o.val();Ug(a),console.log(a)})})}}catch(e){console.log(e)}});function Ba(n,e,t){const i=n.slice();return i[2]=e[t],i}function Ha(n,e){let t,i,s;return i=new Zh({props:{id:e[2]}}),{key:n,first:null,c(){t=gt(),B(i.$$.fragment),this.first=t},m(r,o){I(r,t,o),$(i,r,o),s=!0},p(r,o){e=r;const a={};o&1&&(a.id=e[2]),i.$set(a)},i(r){s||(N(i.$$.fragment,r),s=!0)},o(r){P(i.$$.fragment,r),s=!1},d(r){r&&E(t),F(i,r)}}}function i0(n){let e,t=[],i=new Map,s,r,o,a,l,c,u,h,d=n[0];const f=p=>p[2];for(let p=0;p<d.length;p+=1){let v=Ba(n,d,p),g=f(v);i.set(g,t[p]=Ha(g,v))}return{c(){e=b("div");for(let p=0;p<t.length;p+=1)t[p].c();s=A(),r=b("div"),o=b("button"),o.textContent="New Automation",a=A(),l=b("button"),l.textContent="Save",_(o,"class","svelte-17zdb6j"),_(l,"class","svelte-17zdb6j"),_(r,"class","controls svelte-17zdb6j"),_(e,"class","container svelte-17zdb6j")},m(p,v){I(p,e,v);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(e,null);m(e,s),m(e,r),m(r,o),m(r,a),m(r,l),c=!0,u||(h=[z(o,"click",lh),z(l,"click",n[1])],u=!0)},p(p,[v]){v&1&&(d=p[0],Pe(),t=mt(t,v,f,1,p,d,i,e,or,Ha,s,Ba),Oe())},i(p){if(!c){for(let v=0;v<d.length;v+=1)N(t[v]);c=!0}},o(p){for(let v=0;v<t.length;v+=1)P(t[v]);c=!1},d(p){p&&E(e);for(let v=0;v<t.length;v+=1)t[v].d();u=!1,le(h)}}}function s0(n,e,t){let i;return Rt(n,rh,r=>t(0,i=r)),[i,()=>{Z1(ah()),t0(th())}]}class r0 extends ge{constructor(e){super(),pe(this,e,s0,i0,he,{})}}function o0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M240 95.1h-96c-26.4 0-48 21.6-48 48V256h192V143.1C288 117.6 266.4 95.1 240 95.1z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M320 0H64c-35.38 0-64 28.62-64 64v384c0 35.38 28.62 64 64 64h256c35.38 0 64-28.62 64-64v-384C384 28.62 355.4 0 320 0zM192 32c8.875 0 16 7.125 16 16S200.9 64 192 64S176 56.88 176 48S183.1 32 192 32zM192 480c-8.875 0-16-7.125-16-16S183.1 448 192 448s16 7.125 16 16S200.9 480 192 480zM288 240v127.1c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V143.1c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V240z"),_(e,"class","yellow svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 384 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function a0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M384 0h-320c-35.38 0-64 28.62-64 64v288c0 35.38 28.62 64 64 64h72.75L76.5 450.9C69.63 455.1 64 465.3 64 473.4v12C64 500 76 512 90.75 512h266.6C372.1 512 384 500 384 485.4V473.5c0-8.25-5.625-18.38-12.62-22.62L311.3 416h72.75c35.38 0 64-28.62 64-64V64C448 28.62 419.4 0 384 0zM224 336c-70.78 0-127.1-57.33-127.1-128c0-70.67 57.33-128 127.1-128s128 57.33 128 128C352 278.7 294.7 336 224 336z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M224 112c-53.04 0-96 42.96-96 96c0 53.04 42.96 96 96 96s96-42.96 96-96C320 154.1 277 112 224 112z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function l0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M464 160C490.5 160 512 138.5 512 112S490.5 64 464 64S416 85.5 416 112S437.5 160 464 160zM464 224C402.2 224 352 274.2 352 336s50.19 112 112 112s112-50.17 112-112S525.8 224 464 224zM464 400c-35.31 0-64-28.67-64-64s28.69-64 64-64s64 28.67 64 64S499.3 400 464 400zM176 160C202.5 160 224 138.5 224 112S202.5 64 176 64S128 85.5 128 112S149.5 160 176 160zM63.92 336c0 61.83 50.2 112 112 112C207.3 448 235.7 435 256 414.2V257.8C235.7 236.1 207.3 224 175.9 224C114.1 224 63.92 274.2 63.92 336zM240 336c0 35.33-28.69 64-64 64s-64-28.67-64-64s28.69-64 64-64S240 300.7 240 336z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M175.9 224C201.1 224 237.8 239.1 256 257.8V48C256.1 33.22 263.4 11.72 272.4 0H48C21.5 0 0 21.5 0 48v416C0 490.5 21.5 512 48 512h224.4C263.4 500.3 256.1 478.8 256 464v-49.79C237.8 432.9 201.1 448 175.9 448c-61.84 0-112-50.17-112-112S114.1 224 175.9 224zM176 64C202.5 64 224 85.5 224 112S202.5 160 176 160S128 138.5 128 112S149.5 64 176 64zM592 0h-256C309.5 0 288 21.5 288 48v416c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48v-416C640 21.5 618.5 0 592 0zM464 64C490.5 64 512 85.5 512 112S490.5 160 464 160S416 138.5 416 112S437.5 64 464 64zM464 448c-61.81 0-112-50.17-112-112S402.2 224 464 224S576 274.2 576 336S525.8 448 464 448z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 640 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function c0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M272.1 384l-.2156 70.34c0 5.328-2.411 13.26-5.348 17.7l-17.08 25.68c-5.25 7.875-17.17 14.28-26.61 14.28H161.2c-9.469 0-21.39-6.406-26.64-14.28l-17.14-25.69c-3.469-5.25-5.284-11.39-5.284-17.69l-.2156-70.34H272.1z"),_(e,"class","yellow svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 384 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function u0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M256 448H127.1c-28.38 0-55.01 18.5-63.26 44.13C61.49 502 69.78 512 80.16 512h223.7c10.38 0 18.67-9.1 15.42-19.88C311 466.5 284.4 448 256 448zM381.4 179.4l-68.63-160C307.8 7.625 296.3 0 283.4 0H100.6c-12.88 0-24.38 7.625-29.38 19.38l-68.63 160C-1.645 189.3-.6442 200.6 5.231 209.6C11.23 218.6 21.23 224 31.98 224h320c10.75 0 20.75-5.375 26.75-14.38C384.6 200.6 385.6 189.3 381.4 179.4z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M224 448H160l.0098-224h64.01L224 448z"),_(e,"class","yellow svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 384 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function h0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M224 288C210.8 288 200 298.8 200 312v24h48V312C248 298.8 237.2 288 224 288zM160 192C151.2 192 144 199.2 144 208V256c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V208C176 199.2 168.8 192 160 192zM288 192c-8.836 0-16 7.164-16 16V256c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V208C304 199.2 296.8 192 288 192zM332.5 378.6c-3.646 3.5-8.543 5.4-13.65 5.4H129.1c-5.105 0-10-1.9-13.65-5.4C83.79 347.4 64 304.1 64 255.1c0-48.1 19.79-91.4 51.46-122.6C119.1 129.9 124 127.9 129.1 128h189.8c5.104-.0996 10 1.9 13.65 5.4C364.2 164.6 384 207.9 384 255.1C384 304.1 364.2 347.4 332.5 378.6z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M384 31.1H64c-35.35 0-64 28.65-64 63.1v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-320C448 60.65 419.3 31.1 384 31.1zM332.5 378.6c-3.646 3.5-8.543 5.4-13.65 5.4H129.1c-5.105 0-10-1.9-13.65-5.4C83.79 347.4 64 304.1 64 255.1c0-48.1 19.79-91.4 51.46-122.6C119.1 129.9 124 127.9 129.1 128h189.8c5.104-.0996 10 1.9 13.65 5.4C364.2 164.6 384 207.9 384 255.1C384 304.1 364.2 347.4 332.5 378.6z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function d0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M221.8 119.8l-118.8 118.9C98.45 243.2 95.97 249.4 95.97 255.7c0 2.178 .2967 4.374 .907 6.528l53 185.7h50l-52.88-185.2l108.8-108.8L221.8 119.8zM471.1 223.9c0-13-4.516-26.03-13.61-36.51l-78.63 78.72c10.47 9.109 23.48 13.63 36.47 13.63c14.31 0 28.6-5.491 39.41-16.38C466.5 252.5 471.1 238.2 471.1 223.9z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M319.1 447.9H63.97C18.94 447.9 0 486.8 0 496.5C0 504.7 7.311 512 16.14 512h351.7c8.83 0 16.12-7.252 16.12-15.51C383.9 486.7 364.6 447.9 319.1 447.9zM512 81.2c0-9.067-7.032-17.76-17.63-17.76h-147.9l-45.25-45.31C288.8 6.039 272.7 0 256.6 0C222.1 0 192.6 27.89 192.6 64.05c0 16.11 6.032 32.23 18.11 44.7l45.11 45.14l.154 148.3c0 10.61 8.642 17.64 17.7 17.64c4.3 0 8.721-1.584 12.3-5.13l220.9-221.2C510.4 89.89 512 85.5 512 81.2z"),_(e,"class","yellow svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 512 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function f0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M40.23 111.9L308.1 4.753C315.7 1.702 324.3 1.702 331.9 4.753L599.8 111.9C624.1 121.6 640 145.2 640 171.3V488C640 501.3 629.3 512 616 512H568C554.7 512 544 501.3 544 488V223.1C544 206.3 529.7 191.1 512 191.1H128C110.3 191.1 96 206.3 96 223.1V488C96 501.3 85.25 512 72 512H24C10.75 512 0 501.3 0 488V171.3C0 145.2 15.93 121.6 40.23 111.9z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M512 320H128V224H512V320zM128 352H512V512H128V352zM272 448H368C376.8 448 384 440.8 384 432C384 423.2 376.8 416 368 416H272C263.2 416 256 423.2 256 432C256 440.8 263.2 448 272 448z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 640 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function _0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M432 0h-288C117.5 0 96 22.75 96 50.75V512h384V50.75C480 22.75 458.5 0 432 0zM384 288c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S401.6 288 384 288z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M0 464v32C0 504.9 7.125 512 16 512H96v-64H16C7.125 448 0 455.1 0 464zM560 448H480v64h80c8.875 0 16-7.125 16-16v-32C576 455.1 568.9 448 560 448zM384 224c-17.62 0-32 14.38-32 32s14.38 32 32 32s32-14.38 32-32S401.6 224 384 224z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 576 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function p0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M320 448H128c-28.38 0-55 18.5-63.25 44.13C61.5 502 69.79 512 80.17 512h287.7c10.38 0 18.67-9.999 15.42-19.88C375 466.5 348.4 448 320 448zM119.6 334.8c45.25 26.12 103 10.62 129.1-34.5c11.12-19.38 14.88-42.13 10.62-64.13l104.8 17.5c5.375 .875 11-.625 15.25-4.25s6.625-8.875 6.625-14.38c.1255-36.88-21.25-70.38-54.62-85.88c-33.5-15.5-72.88-10.12-100.9 13.75l-37.13-99c-2.75-7.375-14-17.12-27-9.75c-21.75 12.5-37.63 33.13-44 57.38c-9.5 35.75 2.5 92.75 59.62 113l-67.5 82C105.1 318 112.6 330.8 119.6 334.8zM224 192c8.875 0 16 7.125 16 16S232.9 224 224 224S208 216.9 208 208S215.1 192 224 192z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M224 0C109.1 0 16 93.13 16 208c0 103.1 76.42 189.8 176 205.2V448h64v-34.8C355.6 397.8 432 311.1 432 208C432 93.13 338.9 0 224 0zM379.4 249.4C375.1 253 369.5 254.5 364.1 253.6l-104.8-17.5c4.25 22 .5 44.75-10.62 64.13c-26.12 45.13-83.88 60.63-129.1 34.5c-7-4-14.5-16.75-5.125-28.25l67.5-82c-57.12-20.25-69.12-77.25-59.62-113c6.375-24.25 22.25-44.88 44-57.38c13-7.375 24.25 2.375 27 9.75l37.13 99c28-23.88 67.38-29.25 100.9-13.75c33.38 15.5 54.75 49 54.62 85.88C385.1 240.5 383.6 245.8 379.4 249.4z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function g0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96C448 60.64 419.4 32 384 32zM224 416c-88.35 0-160-71.65-160-160s71.65-160 160-160s160 71.65 160 160S312.4 416 224 416z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M224 96C135.6 96 64 167.6 64 256s71.65 160 160 160s160-71.65 160-160S312.4 96 224 96zM224 352c-53.02 0-96-42.98-96-96s42.98-96 96-96s96 42.98 96 96S277 352 224 352z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function m0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M192 447.1c0 35.38 28.62 64 63.1 64s64.01-28.62 64.01-64H192zM288 162.3V0h-64v162.3C234.6 160.1 245.2 160 256 160S277.5 160.1 288 162.3z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M512 380.8V384c0 19.2-12.87 32-32.17 32L32.41 415.1C13.11 415.1 0 403.2 0 384v-3.203C16.01 253.4 128 160 256 160S495.1 253.4 512 380.8z"),_(e,"class","yellow svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 512 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function v0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M146.1 236c-14.66-5.499-69.17-19.1-93.77 45.55c-18.61 49.61 12.1 129.2 26.53 134.3c13.53 5.059 89.65-33.99 108.3-83.69C214.2 262.4 153.1 238.7 146.1 236zM319.1 256c-15.67 0-71.8 5.539-71.8 75.58C248.2 384.6 305.7 448 320.1 448s72.08-63.29 72.08-116.4C392.2 257 327.5 256 319.1 256zM586.8 281.6c-24.6-65.58-79.12-51.05-93.81-45.58c-6.1 2.64-67.24 26.31-41.06 96.11c18.65 49.72 94.81 88.75 108.3 83.69C573.7 410.8 605.4 331.2 586.8 281.6z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M621.9 127.5c-34.56 18.52-72.57 33.46-112.7 44.92l21.94 58.97c-.002 0 .002 0 0 0c-8.287-1.066-16.17-.5488-22.8 .5879c-.0449 .0078 .0449-.0078 0 0c-3.25 .5625-6.417 1.283-8.968 1.994c-.1074 .0273 .1055-.0273 0 0c-2.469 .6992-4.77 1.449-6.377 2.047c-.6504 .2422-1.993 .7891-3.448 1.418c-.0918 .0391 .0957-.0469 0 0c-4.775 2.074-13.04 6.289-21.14 13.17L444.9 187.3c-29.1 5.398-60.89 8.734-92.43 10.15v65.54c-14.93-6.418-29.15-6.992-32.44-6.992c-6.332 0-19.26 1.16-32.43 6.855V197.5C256 196.1 225.1 192.7 195.1 187.3L172.2 251.2c-.002 0 .002 0 0 0C163.9 244 155.5 239.7 150.6 237.5c-.0215-.0078 .0215 .0078 0 0c-1.564-.6797-2.896-1.223-3.578-1.48c-1.553-.582-3.635-1.266-6-1.945C140.8 234 140.7 234 140.6 233.1C138.2 233.3 135.4 232.7 132.4 232.1c-.2227-.0391-.4219-.0781-.6445-.1172C128.6 231.5 125.3 231.1 121.7 230.9C121.5 230.9 121.4 230.9 121.2 230.9c-3.68-.1641-7.521-.082-11.5 .3828l21.07-58.83c-40.16-11.46-78.17-26.4-112.7-44.92c-17.34-9.289-23.42-31.28-12.83-47.95c9.152-14.4 27.86-19.94 42.8-11.8C123.9 109.1 219.2 131.6 320 131.6s196.1-22.45 271.1-63.81c14.94-8.145 33.65-2.605 42.8 11.8C645.4 96.23 639.3 118.2 621.9 127.5z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 640 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function y0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M330.1 71.85L286.5 49.51l-22.35-44.48c-3.367-6.701-12.93-6.701-16.3 0L225.5 49.51L181 71.85c-6.701 3.367-6.701 12.93 0 16.3l44.48 22.35l22.35 44.48C249.5 158.3 252.8 160 255.1 160s6.465-1.677 8.149-5.027L286.5 110.5l44.48-22.35C337.7 84.78 337.7 75.22 330.1 71.85zM192 264C178.8 264 168 274.8 168 288s10.75 24 23.1 24c13.25 0 23.1-10.75 23.1-24S205.2 264 192 264z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M471.6 455.6l-89.87-103.6h35.1c25.62 0 39.5-29.25 23.25-48.5l-155.1-190.1l-20.89 41.58C262.5 158.3 259.2 160 255.1 160S249.5 158.3 247.9 154.1L226.1 113.4L71.04 303.5c-16.25 19.25-2.375 48.5 23.25 48.5h35.1l-89.87 103.6C21.42 477.5 36.67 512 65.17 512h381.6C475.4 512 490.5 477.4 471.6 455.6zM192 312C178.8 312 168 301.3 168 288s10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24S205.2 312 192 312zM319.1 440c-13.25 0-23.1-10.75-23.1-24s10.75-24 23.1-24s23.1 10.75 23.1 24S333.2 440 319.1 440z"),_(e,"class","tree svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 512 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function w0(n){let e,t,i;return{c(){e=L("svg"),t=L("path"),i=L("path"),_(t,"class","one svelte-1iv9hde"),_(t,"d","M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM96 272C96 280.9 88.88 288 80 288S64 280.9 64 272v-160C64 103.1 71.13 96 80 96S96 103.1 96 112V272zM160 272C160 280.9 152.9 288 144 288S128 280.9 128 272v-160C128 103.1 135.1 96 144 96S160 103.1 160 112V272zM224 272C224 280.9 216.9 288 208 288S192 280.9 192 272v-160C192 103.1 199.1 96 208 96S224 103.1 224 112V272z"),_(i,"class","two svelte-1iv9hde"),_(i,"d","M80 96C71.13 96 64 103.1 64 112v160C64 280.9 71.13 288 80 288S96 280.9 96 272v-160C96 103.1 88.88 96 80 96zM144 96C135.1 96 128 103.1 128 112v160C128 280.9 135.1 288 144 288S160 280.9 160 272v-160C160 103.1 152.9 96 144 96zM208 96C199.1 96 192 103.1 192 112v160C192 280.9 199.1 288 208 288S224 280.9 224 272v-160C224 103.1 216.9 96 208 96z"),_(e,"class","blue svelte-1iv9hde"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"viewBox","0 0 448 512"),V(e,"state",n[1])},m(s,r){I(s,e,r),m(e,t),m(e,i)},p(s,r){r&2&&V(e,"state",s[1])},d(s){s&&E(e)}}}function b0(n){let e;function t(r,o){if(r[0]===be.Sensor)return w0;if(r[0]===be.ChristmasTree)return y0;if(r[0]===be.ChristmasLights)return v0;if(r[0]===be.CeilingLight)return m0;if(r[0]===be.Button)return g0;if(r[0]===be.Fan)return p0;if(r[0]===be.Door)return _0;if(r[0]===be.Garage)return f0;if(r[0]===be.SmallLamp)return d0;if(r[0]===be.Outlet)return h0;if(r[0]===be.LargeLamp)return u0;if(r[0]===be.Lightbulb)return c0;if(r[0]===be.Speakers)return l0;if(r[0]===be.Camera)return a0;if(r[0]===be.Switch)return o0}let i=t(n),s=i&&i(n);return{c(){s&&s.c(),e=gt()},m(r,o){s&&s.m(r,o),I(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s&&s.d(1),s=i&&i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:te,o:te,d(r){s&&s.d(r),r&&E(e)}}}function C0(n,e,t){let{icon:i}=e,{state:s}=e;return n.$$set=r=>{"icon"in r&&t(0,i=r.icon),"state"in r&&t(1,s=r.state)},[i,s]}class E0 extends ge{constructor(e){super(),pe(this,e,C0,b0,he,{icon:0,state:1})}}function I0(n){const e=n-1;return e*e*e+1}function Va(n,{delay:e=0,duration:t=400,easing:i=ji}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function za(n,{delay:e=0,duration:t=400,easing:i=I0,x:s=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,d]=ao(s),[f,p]=ao(r);return{delay:e,duration:t,easing:i,css:(v,g)=>`
			transform: ${c} translate(${(1-v)*h}${d}, ${(1-v)*f}${p});
			opacity: ${l-u*g}`}}function ja(n,e,t){const i=n.slice();return i[13]=e[t],i[14]=e,i[15]=t,i}function qa(n){let e,t,i,s,r;e=new an({props:{label:"Outlets",selected:n[1],type:"numbers"}}),e.$on("select",n[6]);function o(l){n[7](l)}let a={label:"Combine",on:"Yes",off:"No"};return n[2].combine!==void 0&&(a.state=n[2].combine),i=new cr({props:a}),ie.push(()=>ue(i,"state",o)),{c(){B(e.$$.fragment),t=A(),B(i.$$.fragment)},m(l,c){$(e,l,c),I(l,t,c),$(i,l,c),r=!0},p(l,c){const u={};c&2&&(u.selected=l[1]),e.$set(u);const h={};!s&&c&4&&(s=!0,h.state=l[2].combine,ce(()=>s=!1)),i.$set(h)},i(l){r||(N(e.$$.fragment,l),N(i.$$.fragment,l),r=!0)},o(l){P(e.$$.fragment,l),P(i.$$.fragment,l),r=!1},d(l){F(e,l),l&&E(t),F(i,l)}}}function Ga(n){let e,t,i,s,r,o,a,l,c,u,h,d;function f(k){n[8](k,n[15])}let p={label:"Id"};n[2].id[n[15]]!==void 0&&(p.text=n[2].id[n[15]]),t=new Ge({props:p}),ie.push(()=>ue(t,"text",f));function v(...k){return n[9](n[15],...k)}r=new an({props:{label:"Icon",selected:n[2].icon[n[15]],type:"icons"}}),r.$on("select",v);function g(k){n[10](k,n[15])}let S={label:"Name"};n[2].name[n[15]]!==void 0&&(S.text=n[2].name[n[15]]),a=new Ge({props:S}),ie.push(()=>ue(a,"text",g));function y(k){n[11](k,n[15])}let w={label:"Room"};return n[2].room[n[15]]!==void 0&&(w.text=n[2].room[n[15]]),u=new Ge({props:w}),ie.push(()=>ue(u,"text",y)),{c(){e=b("div"),B(t.$$.fragment),s=A(),B(r.$$.fragment),o=A(),B(a.$$.fragment),c=A(),B(u.$$.fragment),_(e,"class","row svelte-1m7vbpi")},m(k,R){I(k,e,R),$(t,e,null),m(e,s),$(r,e,null),m(e,o),$(a,e,null),m(e,c),$(u,e,null),d=!0},p(k,R){n=k;const O={};!i&&R&4&&(i=!0,O.text=n[2].id[n[15]],ce(()=>i=!1)),t.$set(O);const D={};R&4&&(D.selected=n[2].icon[n[15]]),r.$set(D);const U={};!l&&R&4&&(l=!0,U.text=n[2].name[n[15]],ce(()=>l=!1)),a.$set(U);const C={};!h&&R&4&&(h=!0,C.text=n[2].room[n[15]],ce(()=>h=!1)),u.$set(C)},i(k){d||(N(t.$$.fragment,k),N(r.$$.fragment,k),N(a.$$.fragment,k),N(u.$$.fragment,k),d=!0)},o(k){P(t.$$.fragment,k),P(r.$$.fragment,k),P(a.$$.fragment,k),P(u.$$.fragment,k),d=!1},d(k){k&&E(e),F(t),F(r),F(a),F(u)}}}function S0(n){let e,t,i,s,r,o,a,l,c=n[0].room+" "+n[0].name,u,h,d,f,p,v,g,S,y,w,k,R,O,D,U,C;v=new an({props:{label:"Type",selected:n[2].type,type:"type"}}),v.$on("select",n[3]);let M=n[2].type===Ae.MultiOutlet&&qa(n),se=new Array(n[1]).fill(0),Q=[];for(let H=0;H<se.length;H+=1)Q[H]=Ga(ja(n,se,H));const j=H=>P(Q[H],1,1,()=>{Q[H]=null});return{c(){e=b("div"),i=A(),s=b("div"),r=b("div"),o=b("button"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svelte-1m7vbpi"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>',a=A(),l=b("div"),u=_e(c),h=A(),d=b("div"),d.innerHTML='<input type="range"/>',f=A(),p=b("div"),B(v.$$.fragment),g=A(),M&&M.c(),S=A();for(let H=0;H<Q.length;H+=1)Q[H].c();y=A(),w=b("div"),k=b("button"),k.textContent="Save",_(e,"class","background svelte-1m7vbpi"),_(o,"class","close svelte-1m7vbpi"),_(l,"class","headertext svelte-1m7vbpi"),_(r,"class","header svelte-1m7vbpi"),_(p,"class","row svelte-1m7vbpi"),_(k,"class","save svelte-1m7vbpi"),_(w,"class","controls svelte-1m7vbpi"),_(s,"class","modal svelte-1m7vbpi"),_(s,"role","dialog"),_(s,"aria-modal","true")},m(H,oe){I(H,e,oe),I(H,i,oe),I(H,s,oe),m(s,r),m(r,o),m(r,a),m(r,l),m(l,u),m(s,h),m(s,d),m(s,f),m(s,p),$(v,p,null),m(p,g),M&&M.m(p,null),m(s,S);for(let Fe=0;Fe<Q.length;Fe+=1)Q[Fe]&&Q[Fe].m(s,null);m(s,y),m(s,w),m(w,k),D=!0,U||(C=[z(e,"click",n[4]),z(e,"keypress",n[4]),z(o,"click",n[4]),z(k,"click",n[5])],U=!0)},p(H,[oe]){(!D||oe&1)&&c!==(c=H[0].room+" "+H[0].name)&&ke(u,c);const Fe={};if(oe&4&&(Fe.selected=H[2].type),v.$set(Fe),H[2].type===Ae.MultiOutlet?M?(M.p(H,oe),oe&4&&N(M,1)):(M=qa(H),M.c(),N(M,1),M.m(p,null)):M&&(Pe(),P(M,1,1,()=>{M=null}),Oe()),oe&6){se=new Array(H[1]).fill(0);let me;for(me=0;me<se.length;me+=1){const ro=ja(H,se,me);Q[me]?(Q[me].p(ro,oe),N(Q[me],1)):(Q[me]=Ga(ro),Q[me].c(),N(Q[me],1),Q[me].m(s,y))}for(Pe(),me=se.length;me<Q.length;me+=1)j(me);Oe()}},i(H){if(!D){ht(()=>{D&&(t||(t=lo(e,Va,{duration:250},!0)),t.run(1))}),N(v.$$.fragment,H),N(M);for(let oe=0;oe<se.length;oe+=1)N(Q[oe]);ht(()=>{D&&(O&&O.end(1),R=Gu(s,za,{y:-100,duration:500}),R.start())}),D=!0}},o(H){t||(t=lo(e,Va,{duration:250},!1)),t.run(0),P(v.$$.fragment,H),P(M),Q=Q.filter(Boolean);for(let oe=0;oe<Q.length;oe+=1)P(Q[oe]);R&&R.invalidate(),O=Ku(s,za,{y:-50,duration:500}),D=!1},d(H){H&&E(e),H&&t&&t.end(),H&&E(i),H&&E(s),F(v),M&&M.d(),qi(Q,H),H&&O&&O.end(),U=!1,le(C)}}}function k0(n,e,t){let{info:i}=e,s=1;const r={type:i.type,id:new Array(5).fill(""),name:new Array(5).fill(""),room:new Array(5).fill(""),icon:new Array(5),combine:!1,outlets:[]};"combine"in i?(i.outlets.map(Wg).forEach((S,y)=>{t(2,r.id[y]=S.id,r),t(2,r.name[y]=S.name,r),t(2,r.room[y]=S.room,r),t(2,r.icon[y]=S.icon,r)}),r.combine=i.combine,r.outlets=i.outlets,s=i.outlets.length):(r.id[0]=i.id,r.name[0]=i.name,r.room[0]=i.room,r.icon[0]=i.icon);const o=g=>{const S=parseInt(g.detail);t(2,r.type=S,r),t(1,s=S===Ae.MultiOutlet?2:1)},a=ir(),l=()=>a("close"),c=()=>{const g=[];for(let S=0;S<s;S++){const y={id:r.id[S],name:r.name[S],room:r.room[S],icon:r.icon[S],type:r.type,state:!1,text:"Off"};r.type===Ae.MultiOutlet?(y.combine=r.combine,y.outlets=r.id.slice(0,s)):r.type===Ae.Dimmer&&(y.brightness=100),g.push(y)}Tu({event:ar.UpdateDevice,data:g})},u=g=>t(1,s=parseInt(g.detail));function h(g){n.$$.not_equal(r.combine,g)&&(r.combine=g,t(2,r))}function d(g,S){n.$$.not_equal(r.id[S],g)&&(r.id[S]=g,t(2,r))}const f=(g,S)=>t(2,r.icon[g]=parseInt(S.detail),r);function p(g,S){n.$$.not_equal(r.name[S],g)&&(r.name[S]=g,t(2,r))}function v(g,S){n.$$.not_equal(r.room[S],g)&&(r.room[S]=g,t(2,r))}return n.$$set=g=>{"info"in g&&t(0,i=g.info)},[i,s,r,o,l,c,u,h,d,f,p,v]}class T0 extends ge{constructor(e){super(),pe(this,e,k0,S0,he,{info:0})}}function Ka(n){let e,t;return e=new T0({props:{info:n[1]}}),e.$on("close",n[6]),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},p(i,s){const r={};s&2&&(r.info=i[1]),e.$set(r)},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function R0(n){let e,t,i,s,r,o,a=n[1].room+"",l,c,u,h=n[1].name+"",d,f,p,v,g,S=n[1].text+"",y,w,k,R,O,D;i=new E0({props:{icon:n[1].icon,state:n[1].state}});let U=n[0]&&Ka(n);return{c(){e=b("button"),t=b("button"),B(i.$$.fragment),s=A(),r=b("div"),o=b("span"),l=_e(a),c=b("br"),u=b("span"),d=_e(h),f=A(),p=b("br"),v=A(),g=b("span"),y=_e(S),w=A(),U&&U.c(),k=gt(),_(t,"class","circle svelte-1tfmfv5"),_(g,"class","state svelte-1tfmfv5"),_(r,"class","text svelte-1tfmfv5"),_(e,"class","container svelte-1tfmfv5"),V(e,"state",n[1].state)},m(C,M){I(C,e,M),m(e,t),$(i,t,null),m(e,s),m(e,r),m(r,o),m(o,l),m(r,c),m(r,u),m(u,d),m(r,f),m(r,p),m(r,v),m(r,g),m(g,y),I(C,w,M),U&&U.m(C,M),I(C,k,M),R=!0,O||(D=[z(t,"click",Gi(n[4])),z(e,"click",n[3])],O=!0)},p(C,[M]){const se={};M&2&&(se.icon=C[1].icon),M&2&&(se.state=C[1].state),i.$set(se),(!R||M&2)&&a!==(a=C[1].room+"")&&ke(l,a),(!R||M&2)&&h!==(h=C[1].name+"")&&ke(d,h),(!R||M&2)&&S!==(S=C[1].text+"")&&ke(y,S),(!R||M&2)&&V(e,"state",C[1].state),C[0]?U?(U.p(C,M),M&1&&N(U,1)):(U=Ka(C),U.c(),N(U,1),U.m(k.parentNode,k)):U&&(Pe(),P(U,1,1,()=>{U=null}),Oe())},i(C){R||(N(i.$$.fragment,C),N(U),R=!0)},o(C){P(i.$$.fragment,C),P(U),R=!1},d(C){C&&E(e),F(i),C&&E(w),U&&U.d(C),C&&E(k),O=!1,le(D)}}}function N0(n,e,t){let i,{id:s}=e,r=!1;const o=Bg(s);Rt(n,o,u=>t(1,i=u));const a=()=>{[Ae.Garage,Ae.Button,Ae.Dimmer,Ae.MultiOutlet,Ae.Outlet,Ae.Switch].includes(i.type)&&Tu({event:ar.Toggle,id:s})},l=()=>{t(0,r=!0)},c=()=>t(0,r=!1);return n.$$set=u=>{"id"in u&&t(5,s=u.id)},[r,i,o,a,l,s,c]}class A0 extends ge{constructor(e){super(),pe(this,e,N0,R0,he,{id:5})}}function Ya(n,e,t){const i=n.slice();return i[1]=e[t],i}function Qa(n,e){let t,i,s;return i=new A0({props:{id:e[1]}}),{key:n,first:null,c(){t=gt(),B(i.$$.fragment),this.first=t},m(r,o){I(r,t,o),$(i,r,o),s=!0},p(r,o){e=r;const a={};o&1&&(a.id=e[1]),i.$set(a)},i(r){s||(N(i.$$.fragment,r),s=!0)},o(r){P(i.$$.fragment,r),s=!1},d(r){r&&E(t),F(i,r)}}}function P0(n){let e,t=[],i=new Map,s,r=n[0].layout;const o=a=>a[1];for(let a=0;a<r.length;a+=1){let l=Ya(n,r,a),c=o(l);i.set(c,t[a]=Qa(c,l))}return{c(){e=b("div");for(let a=0;a<t.length;a+=1)t[a].c();_(e,"class","dashboard svelte-1bmvcx6")},m(a,l){I(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);s=!0},p(a,[l]){l&1&&(r=a[0].layout,Pe(),t=mt(t,l,o,1,a,r,i,e,or,Qa,null,Ya),Oe())},i(a){if(!s){for(let l=0;l<r.length;l+=1)N(t[l]);s=!0}},o(a){for(let l=0;l<t.length;l+=1)P(t[l]);s=!1},d(a){a&&E(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function O0(n,e,t){let i;return Rt(n,Hc,s=>t(0,i=s)),[i]}class D0 extends ge{constructor(e){super(),pe(this,e,O0,P0,he,{})}}function M0(n){let e,t,i,s,r,o,a,l,c,u,h;function d(g){n[3](g)}let f={label:"Username"};n[0]!==void 0&&(f.text=n[0]),t=new Ge({props:f}),ie.push(()=>ue(t,"text",d));function p(g){n[4](g)}let v={label:"Password"};return n[1]!==void 0&&(v.text=n[1]),r=new Ge({props:v}),ie.push(()=>ue(r,"text",p)),{c(){e=b("div"),B(t.$$.fragment),s=A(),B(r.$$.fragment),a=A(),l=b("button"),l.textContent="Login",_(l,"class","svelte-1k7nfnu"),_(e,"class","container svelte-1k7nfnu")},m(g,S){I(g,e,S),$(t,e,null),m(e,s),$(r,e,null),m(e,a),m(e,l),c=!0,u||(h=z(l,"click",n[2]),u=!0)},p(g,[S]){const y={};!i&&S&1&&(i=!0,y.text=g[0],ce(()=>i=!1)),t.$set(y);const w={};!o&&S&2&&(o=!0,w.text=g[1],ce(()=>o=!1)),r.$set(w)},i(g){c||(N(t.$$.fragment,g),N(r.$$.fragment,g),c=!0)},o(g){P(t.$$.fragment,g),P(r.$$.fragment,g),c=!1},d(g){g&&E(e),F(t),F(r),u=!1,h()}}}function L0(n,e,t){let i="",s="";const r=async()=>{const l=Cu();try{await Om(l,i,s)}catch(c){console.log(c.code,c.message)}};function o(l){i=l,t(0,i)}function a(l){s=l,t(1,s)}return[i,s,r,o,a]}class x0 extends ge{constructor(e){super(),pe(this,e,L0,M0,he,{})}}function $0(n){let e,t;return e=new D0({}),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function F0(n){let e,t;return e=new r0({}),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function U0(n){let e,t;return e=new x0({}),{c(){B(e.$$.fragment)},m(i,s){$(e,i,s),t=!0},i(i){t||(N(e.$$.fragment,i),t=!0)},o(i){P(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function W0(n){let e,t,i,s,r,o;t=new eh({});const a=[U0,F0,$0],l=[];function c(u,h){return u[0]?u[1]==="/automations"?1:2:0}return s=c(n),r=l[s]=a[s](n),{c(){e=b("div"),B(t.$$.fragment),i=A(),r.c()},m(u,h){I(u,e,h),$(t,e,null),m(e,i),l[s].m(e,null),o=!0},p(u,[h]){let d=s;s=c(u),s!==d&&(Pe(),P(l[d],1,1,()=>{l[d]=null}),Oe(),r=l[s],r||(r=l[s]=a[s](u),r.c()),N(r,1),r.m(e,null))},i(u){o||(N(t.$$.fragment,u),N(r),o=!0)},o(u){P(t.$$.fragment,u),P(r),o=!1},d(u){u&&E(e),F(t),l[s].d()}}}function B0(n,e,t){let i,s;return Rt(n,Ps,r=>t(0,i=r)),Rt(n,bi,r=>t(1,s=r)),[i,s]}class H0 extends ge{constructor(e){super(),pe(this,e,B0,W0,he,{})}}new H0({target:document.getElementById("app")});
