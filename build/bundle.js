var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function a(){return l(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n){t.value=null==n?"":n}let p;function g(t){p=t}const $=[],m=[],y=[],b=[],x=Promise.resolve();let _=!1;function k(t){y.push(t)}let v=!1;const w=new Set;function E(){if(!v){v=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];g(n),A(n.$$)}for(g(null),$.length=0;m.length;)m.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];w.has(n)||(w.add(n),n())}y.length=0}while($.length);for(;b.length;)b.pop()();_=!1,v=!1,w.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const C=new Set;function M(t,n){t&&t.i&&(C.delete(t),t.i(n))}function O(t,n){t.d(1),n.delete(t.key)}function N(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(c,u,i,f,l,a,d,h=[-1]){const $=p;g(c);const m=c.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:u.context||[]),callbacks:e(),dirty:h,skip_bound:!1,root:u.target||$.$$.root};d&&d(m.root);let y=!1;if(m.ctx=i?i(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),y&&N(c,t)),n})):[],m.update(),y=!0,o(m.before_update),m.fragment=!!f&&f(m.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);m.fragment&&m.fragment.l(t),t.forEach(s)}else m.fragment&&m.fragment.c();u.intro&&M(c.$$.fragment),function(t,e,c,u){const{fragment:i,on_mount:s,on_destroy:f,after_update:l}=t.$$;i&&i.m(e,c),u||k((()=>{const e=s.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(k)}(c,u.target,u.anchor,u.customElement),E()}g($)}function j(t,n,e){const o=t.slice();return o[5]=n[e],o[7]=e,o}function P(t,n){let e,o,c,h,p,g,$=n[5]+"";return{key:t,first:null,c(){e=f("li"),o=l($),c=a(),h=f("button"),h.textContent="🚮",this.first=e},m(t,s){i(t,e,s),u(e,o),u(e,c),u(e,h),p||(g=d(h,"click",(function(){r(n[3](n[7]))&&n[3](n[7]).apply(this,arguments)})),p=!0)},p(t,e){n=t,1&e&&$!==($=n[5]+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(o,$)},d(t){t&&s(e),p=!1,g()}}}function T(n){let e,r,c,u,p,g,$,m,y,b=[],x=new Map,_=n[0];const k=t=>t[7];for(let t=0;t<_.length;t+=1){let e=j(n,_,t),o=k(e);x.set(o,b[t]=P(o,e))}return{c(){e=f("h1"),e.textContent="TODO APP",r=a(),c=f("input"),u=a(),p=f("button"),p.textContent="Add",g=a();for(let t=0;t<b.length;t+=1)b[t].c();var t,n,o;$=l(""),t=c,n="type",null==(o="text")?t.removeAttribute(n):t.getAttribute(n)!==o&&t.setAttribute(n,o)},m(t,o){i(t,e,o),i(t,r,o),i(t,c,o),h(c,n[1]),i(t,u,o),i(t,p,o),i(t,g,o);for(let n=0;n<b.length;n+=1)b[n].m(t,o);i(t,$,o),m||(y=[d(c,"input",n[4]),d(p,"click",n[2])],m=!0)},p(t,[n]){2&n&&c.value!==t[1]&&h(c,t[1]),9&n&&(_=t[0],b=function(t,n,e,o,r,c,u,i,s,f,l,a){let d=t.length,h=c.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const $=[],m=new Map,y=new Map;for(p=h;p--;){const t=a(r,c,p),i=e(t);let s=u.get(i);s?o&&s.p(t,n):(s=f(i,t),s.c()),m.set(i,$[p]=s),i in g&&y.set(i,Math.abs(p-g[i]))}const b=new Set,x=new Set;function _(t){M(t,1),t.m(i,l),u.set(t.key,t),l=t.first,h--}for(;d&&h;){const n=$[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(l=n.first,d--,h--):m.has(r)?!u.has(o)||b.has(o)?_(n):x.has(r)?d--:y.get(o)>y.get(r)?(x.add(o),_(n)):(b.add(r),d--):(s(e,u),d--)}for(;d--;){const n=t[d];m.has(n.key)||s(n,u)}for(;h;)_($[h-1]);return $}(b,n,k,1,t,_,x,$.parentNode,O,P,$,j))},i:t,o:t,d(t){t&&s(e),t&&s(r),t&&s(c),t&&s(u),t&&s(p),t&&s(g);for(let n=0;n<b.length;n+=1)b[n].d(t);t&&s($),m=!1,o(y)}}}function L(t,n,e){let o,r=[];return[r,o,()=>e(0,r=[...r,o]),t=>e(0,r=r.filter(((n,e)=>e!==t))),function(){o=this.value,e(1,o)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,L,T,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
