(()=>{var S=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});var Et=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,ke=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,Be=/<[a-z][^>]+$/i,ze=/>[^<>]*$/,He=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig,je=/\s+$/,xt=(e,t)=>0<t--&&(Be.test(e[t])||!ze.test(e[t])&&xt(e,t)),Ve=(e,t,n)=>ke.test(t)?e:`<${t}${n.replace(je,"")}></${t}>`,bt=(e,t,n)=>{let r=[],{length:i}=e;for(let c=1;c<i;c++){let l=e[c-1];r.push(Et.test(l)&&xt(e,c)?l.replace(Et,(o,a,f)=>`${t}${c-1}=${f||'"'}${a}${f?"":'"'}`):`${l}<!--${t}${c-1}-->`)}r.push(e[i-1]);let s=r.join("").trim();return n?s:s.replace(He,Ve)};var{isArray:_}=Array,{indexOf:At,slice:B}=[];var $e=1,Ut=111,Ze=({firstChild:e,lastChild:t})=>{let n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e},Rt=(e,t)=>e.nodeType===Ut?1/t<0?t?Ze(e):e.lastChild:t?e.valueOf():e.firstChild:e,_t=e=>{let{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;let r=B.call(t,0),i=r[0],s=r[n-1];return{ELEMENT_NODE:$e,nodeType:Ut,firstChild:i,lastChild:s,valueOf(){if(t.length!==n){let c=0;for(;c<n;)e.appendChild(r[c++])}return e}}};var Tt=(e,t,n,r,i)=>{let s=n.length,c=t.length,l=s,o=0,a=0,f=null;for(;o<c||a<l;)if(c===o){let u=l<s?a?r(n[a-1],-0).nextSibling:r(n[l-a],0):i;for(;a<l;)e.insertBefore(r(n[a++],1),u)}else if(l===a)for(;o<c;)(!f||!f.has(t[o]))&&e.removeChild(r(t[o],-1)),o++;else if(t[o]===n[a])o++,a++;else if(t[c-1]===n[l-1])c--,l--;else if(t[o]===n[l-1]&&n[a]===t[c-1]){let u=r(t[--c],-1).nextSibling;e.insertBefore(r(n[a++],1),r(t[o++],-1).nextSibling),e.insertBefore(r(n[--l],1),u),t[c]=n[l]}else{if(!f){f=new Map;let u=a;for(;u<l;)f.set(n[u],u++)}if(f.has(t[o])){let u=f.get(t[o]);if(a<u&&u<l){let d=o,h=1;for(;++d<c&&d<l&&f.get(t[d])===u+h;)h++;if(h>u-a){let x=r(t[o],0);for(;a<u;)e.insertBefore(r(n[a++],1),x)}else e.replaceChild(r(n[a++],1),r(t[o++],-1))}else o++}else e.removeChild(r(t[o++],-1))}return n};var Ct=e=>t=>{for(let n in t){let r=n==="role"?n:`aria-${n}`,i=t[n];i==null?e.removeAttribute(r):e.setAttribute(r,i)}},Dt=(e,t)=>{let n,r=!0,i=document.createAttributeNS(null,t);return s=>{n!==s&&(n=s,n==null?r||(e.removeAttributeNode(i),r=!0):(i.value=s,r&&(e.setAttributeNodeNS(i),r=!1)))}},Nt=({dataset:e})=>t=>{for(let n in t){let r=t[n];r==null?delete e[n]:e[n]=r}},St=(e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),i=>{let s=_(i)?i:[i,!1];n!==s[0]&&(n&&e.removeEventListener(r,n,s[1]),(n=s[0])&&e.addEventListener(r,n,s[1]))}},It=e=>t=>{typeof t=="function"?t(e):t.current=e},Lt=(e,t)=>n=>{e[t]=n},Ot=e=>{let t;return n=>{t!=n&&(t=n,e.textContent=n??"")}};var We=function(e){"use strict";var t="fragment",n="template",r="content"in c(n),i=r?function(o){var a=c(n);return a.innerHTML=o,a.content}:function(o){var a=c(t),f=c(n),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(o)){var d=RegExp.$1;f.innerHTML="<table>"+o+"</table>",u=f.querySelectorAll(d)}else f.innerHTML=o,u=f.childNodes;return s(a,u),a};return function(a,f){return(f==="svg"?l:i)(a)};function s(o,a){for(var f=a.length;f--;)o.appendChild(a[0])}function c(o){return o===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",o)}function l(o){var a=c(t),f=c("div");return f.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+o+"</svg>",s(a,f.firstChild.childNodes),a}}(document),nt=We;var Ft=({childNodes:e},t)=>e[t],z=e=>{let t=[],{parentNode:n}=e;for(;n;)t.push(At.call(n.childNodes,e)),e=n,n=e.parentNode;return t},{createTreeWalker:vt,importNode:H}=document;var Mt=H.length!=1,Pt=Mt?(e,t,n)=>H.call(document,nt(e,t,n),!0):nt,kt=Mt?e=>vt.call(document,e,1|128,null,!1):e=>vt.call(document,e,1|128);var I=(e,t,n)=>Tt(e.parentNode,t,n,Rt,e),Ge=e=>{let t,n,r=[],i=s=>{switch(typeof s){case"string":case"number":case"boolean":t!==s&&(t=s,n?n.textContent=s:n=document.createTextNode(s),r=I(e,r,[n]));break;case"object":case"undefined":if(s==null){t!=s&&(t=s,r=I(e,r,[]));break}if(_(s)){t=s,s.length===0?r=I(e,r,[]):typeof s[0]=="object"?r=I(e,r,s):i(String(s));break}"ELEMENT_NODE"in s&&t!==s&&(t=s,r=I(e,r,s.nodeType===11?B.call(s.childNodes):[s]))}};return i},Ke=(e,t)=>t==="ref"?It(e):t==="aria"?Ct(e):t===".dataset"?Nt(e):t.slice(0,1)==="."?Lt(e,t.slice(1)):t.slice(0,2)==="on"?St(e,t):Dt(e,t);function Bt(e){let{type:t,path:n}=e,r=n.reduceRight(Ft,this);return t==="node"?Ge(r):t==="attr"?Ke(r,e.name):Ot(r)}var L="is\xB5",zt=S(new WeakMap),qe=/^(?:plaintext|script|style|textarea|title|xmp)$/i,T=()=>({stack:[],entry:null,wire:null}),Xe=(e,t)=>{let{content:n,updates:r}=Ye(e,t);return{type:e,template:t,content:n,updates:r,wire:null}},Je=(e,t)=>{let n=bt(t,L,e==="svg"),r=Pt(n,e),i=kt(r),s=[],c=t.length-1,l=0,o=`${L}${l}`;for(;l<c;){let a=i.nextNode();if(!a)throw`bad template: ${n}`;if(a.nodeType===8)a.textContent===o&&(s.push({type:"node",path:z(a)}),o=`${L}${++l}`);else{for(;a.hasAttribute(o);)s.push({type:"attr",path:z(a),name:a.getAttribute(o)}),a.removeAttribute(o),o=`${L}${++l}`;qe.test(a.tagName)&&a.textContent.trim()===`<!--${o}-->`&&(a.textContent="",s.push({type:"text",path:z(a)}),o=`${L}${++l}`)}}return{content:r,nodes:s}},Ye=(e,t)=>{let{content:n,nodes:r}=zt.get(t)||zt.set(t,Je(e,t)),i=H.call(document,n,!0),s=r.map(Bt,i);return{content:i,updates:s}},O=(e,{type:t,template:n,values:r})=>{let{length:i}=r;Ht(e,r,i);let{entry:s}=e;(!s||s.template!==n||s.type!==t)&&(e.entry=s=Xe(t,n));let{content:c,updates:l,wire:o}=s;for(let a=0;a<i;a++)l[a](r[a]);return o||(s.wire=_t(c))},Ht=({stack:e},t,n)=>{for(let r=0;r<n;r++){let i=t[r];i instanceof j?t[r]=O(e[r]||(e[r]=T()),i):_(i)?Ht(e[r]||(e[r]=T()),i,i.length):e[r]=null}n<e.length&&e.splice(n)};function j(e,t,n){this.type=e,this.template=t,this.values=n}var{create:Qe,defineProperties:tn}=Object,jt=e=>{let t=S(new WeakMap),n=r=>(i,...s)=>O(r,{type:e,template:i,values:s});return tn((r,...i)=>new j(e,r,i),{for:{value(r,i){let s=t.get(r)||t.set(r,Qe(null));return s[i]||(s[i]=n(T()))}},node:{value:(r,...i)=>O(T(),{type:e,template:r,values:i}).valueOf()}})},Vt=S(new WeakMap),$t=(e,t)=>{let n=typeof t=="function"?t():t,r=Vt.get(e)||Vt.set(e,T()),i=n instanceof j?O(r,n):n;return i!==r.wire&&(r.wire=i,e.textContent="",e.appendChild(i.valueOf())),e},Zt=jt("html"),qn=jt("svg");"use strict";var rt=class{constructor(){this.size=0}init(){this.initialized=!0}},st=class extends rt{},V=class extends rt{writeUint8Array(t){this.size+=t.length}};var F=class extends st{constructor(t){super();this.blob=t,this.size=t.size}readUint8Array(t,n){let r=new FileReader;return new Promise((i,s)=>{r.onload=c=>i(new Uint8Array(c.target.result)),r.onerror=s,r.readAsArrayBuffer(this.blob.slice(t,t+n))})}},$=class extends V{constructor(t){super();this.offset=0,this.contentType=t,this.blob=new Blob([],{type:t})}writeUint8Array(t){super.writeUint8Array(t),this.blob=new Blob([this.blob,t.buffer],{type:this.contentType}),this.offset=this.blob.size}getData(){return this.blob}};var Z=class extends V{constructor(){super();this.array=new Uint8Array(0)}writeUint8Array(t){super.writeUint8Array(t);let n=this.array;this.array=new Uint8Array(n.length+t.length),this.array.set(n),this.array.set(t,n.length)}getData(){return this.array}};"use strict";var Wt=class{constructor(){this.crc=-1,this.table=(()=>{let t=[];for(let n=0;n<256;n++){let r=n;for(let i=0;i<8;i++)r&1?r=r>>>1^3988292384:r=r>>>1;t[n]=r}return t})()}append(t){let n=this.table,r=this.crc|0;for(let i=0,s=t.length|0;i<s;i++)r=r>>>8^n[(r^t[i])&255];this.crc=r}get(){return~this.crc}},v=Wt;"use strict";var M="Invalid pasword",g=16,C="raw",Gt={name:"PBKDF2"},W={name:"HMAC"},Kt="SHA-1",it={name:"AES-CTR"},qt=Object.assign({hash:W},Gt),Yt=Object.assign({iterations:1e3,hash:{name:Kt}},Gt),Xt=Object.assign({hash:Kt},W),G=Object.assign({length:g},it),Jt=["deriveBits"],Qt=["sign"],te=528,at=18,y=10,ee=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=crypto.subtle,ot=class{constructor(t,n){this.password=t,this.signed=n,this.input=n&&new Uint8Array(0),this.pendingInput=new Uint8Array(0)}async append(t){let n=async(s=0)=>{if(s+g<=i.length-y){let c=i.subarray(s,s+g),l=await p.decrypt(Object.assign({counter:this.counter},G),this.keys.decrypt,c);return ne(this.counter),r.set(new Uint8Array(l),s),n(s+g)}else return this.pendingInput=i.subarray(s),this.signed&&(this.input=A(this.input,t)),r};if(this.password){let s=t.subarray(0,at);await en(this,s,this.password),this.password=null,t=t.subarray(at)}let r=new Uint8Array(t.length-y-(t.length-y)%g),i=t;return this.pendingInput.length&&(i=A(this.pendingInput,t),r=re(r,i.length-y-(i.length-y)%g)),n()}async flush(){let t=this.pendingInput,n=this.keys,r=t.subarray(0,t.length-y),i=t.subarray(t.length-y),s=new Uint8Array(0);if(r.length){let l=await p.decrypt(Object.assign({counter:this.counter},G),n.decrypt,r);s=new Uint8Array(l)}let c=!0;if(this.signed){let l=await p.sign(W,n.authentication,this.input.subarray(0,this.input.length-y)),o=new Uint8Array(l);this.input=null;for(let a=0;a<y;a++)o[a]!=i[a]&&(c=!1)}return{valid:c,data:s}}},ct=class{constructor(t){this.password=t,this.output=new Uint8Array(0),this.pendingInput=new Uint8Array(0)}async append(t){let n=async(s=0)=>{if(s+g<=t.length){let c=t.subarray(s,s+g),l=await p.encrypt(Object.assign({counter:this.counter},G),this.keys.encrypt,c);return ne(this.counter),i.set(new Uint8Array(l),s+r.length),n(s+g)}else return this.pendingInput=t.subarray(s),this.output=A(this.output,i),i},r=new Uint8Array(0);this.password&&(r=await nn(this,this.password),this.password=null);let i=new Uint8Array(r.length+t.length-t.length%g);return i.set(r,0),this.pendingInput.length&&(t=A(this.pendingInput,t),i=re(i,t.length-t.length%g)),n()}async flush(){let t=new Uint8Array(0);if(this.pendingInput.length){let i=await p.encrypt(Object.assign({counter:this.counter},G),this.keys.encrypt,this.pendingInput);t=new Uint8Array(i),this.output=A(this.output,t)}let n=await p.sign(W,this.keys.authentication,this.output.subarray(at));this.output=null;let r=new Uint8Array(n).subarray(0,y);return{data:A(t,r),signature:r}}};async function en(e,t,n){e.counter=new Uint8Array(ee);let r=t.subarray(0,16),i=t.subarray(16),s=new TextEncoder().encode(n),c=await p.importKey(C,s,qt,!1,Jt),l=await p.deriveBits(Object.assign({salt:r},Yt),c,te),o=new Uint8Array(l),a=o.subarray(64);if(e.keys={decrypt:await p.importKey(C,o.subarray(0,32),it,!0,["decrypt"]),authentication:await p.importKey(C,o.subarray(32,64),Xt,!1,Qt),passwordVerification:a},a[0]!=i[0]||a[1]!=i[1])throw new Error(M)}async function nn(e,t){e.counter=new Uint8Array(ee);let n=crypto.getRandomValues(new Uint8Array(16)),r=new TextEncoder().encode(t),i=await p.importKey(C,r,qt,!1,Jt),s=await p.deriveBits(Object.assign({salt:n},Yt),i,te),c=new Uint8Array(s);return e.keys={encrypt:await p.importKey(C,c.subarray(0,32),it,!0,["encrypt"]),authentication:await p.importKey(C,c.subarray(32,64),Xt,!1,Qt),passwordVerification:c.subarray(64)},A(n,e.keys.passwordVerification)}function ne(e){for(let t=0;t<16;t++)if(e[t]==255)e[t]=0;else{e[t]++;break}}function A(e,t){let n=e;return e.length+t.length&&(n=new Uint8Array(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function re(e,t){if(t&&t>e.length){let n=e;e=new Uint8Array(t),e.set(n,0)}return e}"use strict";var K="deflate",q="inflate",P="Invalid signature",se=class{constructor(t){this.signature=t.inputSignature,this.encrypted=Boolean(t.inputPassword),this.signed=t.inputSigned,this.compressed=t.inputCompressed,this.inflate=this.compressed&&new ZipInflate,this.crc32=this.signed&&this.signed&&new v,this.decrypt=this.encrypted&&new ot(t.inputPassword)}async append(t){return this.encrypted&&(t=await this.decrypt.append(t)),this.compressed&&t.length&&(t=await this.inflate.append(t)),!this.encrypted&&this.signed&&this.crc32.append(t),t}async flush(){let t,n=new Uint8Array(0);if(this.encrypted){let r=await this.decrypt.flush();if(!r.valid)throw new Error(P);n=r.data}else if(this.signed){let r=new DataView(new Uint8Array(4).buffer);if(t=this.crc32.get(),r.setUint32(0,t),this.signature!=r.getUint32(0,!1))throw new Error(P)}return this.compressed&&(n=await this.inflate.append(n)||new Uint8Array(0),await this.inflate.flush()),{data:n,signature:t}}},ie=class{constructor(t){this.encrypted=t.outputEncrypted,this.signed=t.outputSigned,this.compressed=t.outputCompressed,this.deflate=this.compressed&&new ZipDeflate({level:t.level||5}),this.crc32=this.signed&&new v,this.encrypt=this.encrypted&&new ct(t.outputPassword)}async append(t){let n=t;return this.compressed&&t.length&&(n=await this.deflate.append(t)),this.encrypted?n=await this.encrypt.append(n):this.signed&&this.crc32.append(t),n}async flush(){let t=new Uint8Array(0),n;if(this.compressed&&(t=await this.deflate.flush()||new Uint8Array(0)),this.encrypted){t=await this.encrypt.append(t);let r=await this.encrypt.flush();n=r.signature;let i=new Uint8Array(t.length+r.data.length);i.set(t,0),i.set(r.data,t.length),t=i}else this.signed&&(n=this.crc32.get());return{data:t,signature:n}}};function ae(e){if(e.codecType.startsWith(K))return new ie(e);if(e.codecType.startsWith(q))return new se(e)}"use strict";var oe="init",ce="append",lt="flush",ut="message",le="z-worker.js",rn={deflate:[le,"deflate.js"],inflate:[le,"inflate.js"]},m={pool:[],pendingRequests:[]};function Y(e,t){let n=m.pool,r=!t.inputCompressed&&!t.inputSigned&&!t.inputEncrypted&&!t.outputCompressed&&!t.outputSigned&&!t.outputEncrypted,i;if(e.useWebWorkers&&!r){let s=t.codecType;if(e.workerScripts!=null&&e.workerScriptsPath!=null)throw new Error("Either workerScripts or workerScriptsPath may be set, not both");if(e.workerScripts){if(i=e.workerScripts[s],!Array.isArray(i))throw new Error("workerScripts."+s+" must be an array");i=an(i)}else i=rn[s].slice(0),i[0]=(e.workerScriptsPath||"")+i[0]}if(n.length<e.maxWorkers){let s={worker:i&&new Worker(i[0]),busy:!0,options:t,scripts:i};return n.push(s),i?sn(s):ft(s)}else{let s=n.find(c=>!c.busy);return s?(s.busy=!0,s.options=t,s.scripts=i,i?s.interface:ft(s)):new Promise(c=>m.pendingRequests.push({resolve:c,options:t,scripts:i}))}}async function ft(e){let t=ae(e.options),n=t.flush.bind(t);return t.flush=async()=>{let r=await n();if(e.busy=!1,m.pendingRequests.length){let[{resolve:i,options:s}]=m.pendingRequests.splice(0,1);e.busy=!0,e.options=s,i(await ft(e))}else m.pool=m.pool.filter(i=>i!=e);return r},t}function sn(e){let t=e.worker,n=e.scripts.slice(1),r;return t.addEventListener(ut,c,!1),e.interface={async append(l){return i({type:ce,data:l})},async flush(){return i({type:lt})}},e.interface;async function i(l){return r||await s(Object.assign({type:oe,options:e.options,scripts:n})),s(l)}function s(l){try{if(l.data)try{t.postMessage(l,[l.data.buffer])}catch(o){t.postMessage(l)}else t.postMessage(l)}catch(o){r.reject(o),t.removeEventListener(ut,c,!1)}return new Promise((o,a)=>r={resolve:o,reject:a})}function c(l){let o=l.data;if(r){let a=o.error;if(a){let f=new Error(a.message);f.stack=a.stack,r.reject(f),t.removeEventListener(ut,c,!1)}else(o.type==oe||o.type==lt||o.type==ce)&&(o.type==lt?(r.resolve({data:new Uint8Array(o.data),signature:o.signature}),r=null,on(e)):r.resolve(o.data&&new Uint8Array(o.data)))}}}function on(e){if(e.busy=!1,m.pendingRequests.length){let[{resolve:t,options:n,scripts:r}]=m.pendingRequests.splice(0,1);e.busy=!0,e.options=n,e.scripts=r,t(e.interface)}else e.worker.terminate(),m.pool=m.pool.filter(t=>t!=e)}function an(e){return typeof document!="undefined"?e.map(t=>new URL(t,document.baseURI).href):e}"use strict";var cn=64,X=ln;async function ln(e,t,n,r,i,s,c){let l=Math.max(s.chunkSize,cn);return o();async function o(a=0,f=0){let u=a*l;if(u<i){let d=await t.readUint8Array(u+r,Math.min(l,i-u)),h=await e.append(d);return f+=await ue(n,h),c.onprogress&&c.onprogress(u+d.length,i),o(a+1,f)}else{let d=await e.flush();return f+=await ue(n,d.data),{signature:d.signature,length:f}}}}async function ue(e,t){return t.length&&await e.writeUint8Array(t),t.length}"use strict";var dt="File format is not recognized",fe="End of central directory not found",de="End of Zip64 central directory not found",he="End of Zip64 central directory locator not found",pe="Central directory header not found",ge="Local file header not found",we="Zip64 extra field not found",ye="File contains encrypted entry",me="Encryption not supported",ht="Compression method not supported",un=65536,Ee="utf-8",xe="windows-1252",pt=class{constructor(t,n={},r={}){this.reader=t,this.options=n,this.config=r}async getEntries(){let t=this.reader;t.initialized||await t.init();let n=await fn(t,[80,75,5,6],22,un),r,i=new DataView(n.buffer),s=i.getUint32(16,!0),c=i.getUint16(8,!0);if(s==4294967295||c==65535){r=!0;let f=await t.readUint8Array(n.offset-20,20),u=new DataView(f.buffer);if(Number(u.getUint32(0,!1))!=1347094023)throw new Error(de);s=Number(u.getBigUint64(8,!0));let d=await t.readUint8Array(s,56),h=new DataView(d.buffer);if(Number(h.getUint32(0,!1))!=1347094022)throw new Error(he);c=Number(h.getBigUint64(24,!0)),s-=Number(h.getBigUint64(40,!0))}if(s<0||!r&&(s>=t.size||c>=65535))throw new Error(dt);let l=await t.readUint8Array(s,t.size-s);i=new DataView(l.buffer);let o=[],a=0;for(let f=0;f<c;f++){let u=new be(this.reader,this.config,this.options);if(i.getUint32(a,!1)!=1347092738)throw new Error(pe);if(u.compressedSize=0,u.uncompressedSize=0,Ae(u,i,a+6),u.commentLength=i.getUint16(a+32,!0),u.directory=(i.getUint8(a+38)&16)==16,u.offset=i.getUint32(a+42,!0),u.rawFilename=l.subarray(a+46,a+46+u.filenameLength),u.filename=Re(u.rawFilename,u.bitFlag.languageEncodingFlag?Ee:this.options.filenameEncoding||xe),!u.directory&&u.filename.charAt(u.filename.length-1)=="/"&&(u.directory=!0),u.rawExtraField=l.subarray(a+46+u.filenameLength,a+46+u.filenameLength+u.extraFieldLength),Ue(u,u,i,a+6),u.compressionMethod!=0&&u.compressionMethod!=8)throw new Error(ht);u.rawComment=l.subarray(a+46+u.filenameLength+u.extraFieldLength,a+46+u.filenameLength+u.extraFieldLength+u.commentLength),u.comment=Re(u.rawComment,u.bitFlag.languageEncodingFlag?Ee:this.options.commentEncoding||xe),o.push(u),a+=46+u.filenameLength+u.extraFieldLength+u.commentLength}return o}async close(){}};var be=class{constructor(t,n,r){this.reader=t,this.config=n,this.options=r}async getData(t,n={}){let r=this.reader;r.initialized||await r.init();let i=await r.readUint8Array(this.offset,30),s=new DataView(i.buffer),c=n.password===void 0?this.options.password:n.password,l=c&&c.length&&c;if(s.getUint32(0,!1)!=1347093252)throw ge;let o=this.localDirectory={};Ae(o,s,4),o.rawExtraField=i.subarray(this.offset+30+o.filenameLength,this.offset+30+o.filenameLength+o.extraFieldLength),Ue(this,o,s,4);let a=this.offset+30+o.filenameLength+o.extraFieldLength,f=this.bitFlag.encrypted&&o.bitFlag.encrypted;if(f&&!l)throw new Error(ye);let u=await Y(this.config,{codecType:q,inputPassword:l,inputSigned:n.checkSignature===void 0?this.options.checkSignature:n.checkSignature,inputSignature:this.signature,inputCompressed:this.compressionMethod!=0,inputEncrypted:f});return t.initialized||await t.init(),await X(u,r,t,a,this.compressedSize,this.config,{onprogress:n.onprogress}),t.getData()}};function Ae(e,t,n){e.version=t.getUint16(n,!0);let r=e.rawBitFlag=t.getUint16(n+2,!0);e.bitFlag={encrypted:(r&1)==1,level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&2048)==2048},e.rawLastModDate=t.getUint32(n+6,!0),e.lastModDate=dn(e.rawLastModDate),e.filenameLength=t.getUint16(n+22,!0),e.extraFieldLength=t.getUint16(n+24,!0)}function Ue(e,t,n,r){let i,s,c,l=t.rawExtraField,o=t.extraField=new Map,a=new DataView(new Uint8Array(l).buffer),f=0;try{for(;f<l.length;){let d=a.getUint16(f,!0),h=a.getUint16(f+2,!0);o.set(d,{type:d,data:l.slice(f+4,f+4+h)}),f+=4+h}}catch(d){}let u=n.getUint16(r+4,!0);t.signature=n.getUint32(r+10,!0),t.uncompressedSize=n.getUint32(r+18,!0),t.compressedSize=n.getUint32(r+14,!0),i=t.extraFieldZip64=o.get(1),i&&hn(i,t),c=t.extraFieldUnicodePath=o.get(28789),c&&pn(c,t,e),s=t.extraFieldAES=o.get(39169),s?gn(s,t,u):t.compressionMethod=u,t.compressionMethod==8&&(t.bitFlag.enhancedDeflating=(t.rawBitFlag&16)!=16)}function hn(e,t){t.zip64=!0;let n=new DataView(e.data.buffer);e.values=[];for(let s=0;s<Math.floor(e.data.length/8);s++)e.values.push(Number(n.getBigUint64(0+s*8,!0)));let r=["uncompressedSize","compressedSize","offset"],i=r.filter(s=>t[s]==4294967295);for(let s=0;s<i.length;s++)e[i[s]]=e.values[s];r.forEach(s=>{if(t[s]==4294967295)if(e&&e[s]!==void 0)t[s]=e&&e[s];else throw new Error(we)})}function pn(e,t,n){let r=new DataView(e.data.buffer);e.version=r.getUint8(0),e.signature=r.getUint32(1,!0);let i=new v;i.append(n.rawFilename);let s=new DataView(new Uint8Array(4).buffer);s.setUint32(0,i.get()),e.filename=new TextDecoder().decode(e.data.subarray(5)),e.signature==s.getUint32(0,!1)&&(t.filename=e.filename)}function gn(e,t,n){if(e){if(n!=99)throw new Error(ht);let r=new DataView(e.data.buffer);e.vendorVersion=r.getUint8(0),e.vendorId=r.getUint8(2);let i=r.getUint8(4);if(e.compressionMethod=r.getUint16(5,!0),i!=3)throw new Error(me);t.compressionMethod=e.compressionMethod}else t.compressionMethod=n}async function fn(e,t,n,r){if(e.size<n)throw new Error(dt);let i=n+r,c=await l(n);if(c||(c=await l(Math.min(i,e.size))),!c)throw new Error(fe);return c;async function l(o){let a=e.size-o,f=await e.readUint8Array(a,o);for(let u=f.length-n;u>=0;u--)if(f[u]==t[0]&&f[u+1]==t[1]&&f[u+2]==t[2]&&f[u+3]==t[3])return{offset:a,buffer:f.slice(u,u+n).buffer}}}function Re(e,t){return new TextDecoder(t).decode(e)}function dn(e){let t=(e&4294901760)>>16,n=e&65535;try{return new Date(1980+((t&65024)>>9),((t&480)>>5)-1,t&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch(r){}}"use strict";var _e=8,Te=65536,Ce="File already exists",De="Zip file comment exceeds 64KB",Ne="File entry comment exceeds 64KB",gt=class{constructor(t,n={},r={}){this.writer=t,this.options=n,this.config=r,this.files=new Map,this.offset=t.size,this.zip64=n.zip64}async add(t,n,r={}){if(t=t.trim(),r.directory&&t.charAt(t.length-1)!="/"&&(t+="/"),this.files.has(t))throw new Error(Ce);if(r.comment=Ie(Se(r.comment||"")),r.comment>Te)throw new Error(Ne);r.zip64=r.zip64||this.zip64,await wn(this,t,n,r)}async close(t){let n=this.writer,r=this.files,i=0,s=0,c=this.offset,l=r.size;for(let[,f]of r)s+=46+f.filename.length+f.comment.length+f.extraFieldZip64.length+f.extraFieldAES.length+f.rawExtraField.length;(c+s>=4294967295||l>=65535)&&(this.zip64=!0);let o=new Uint8Array(s+(this.zip64?98:22)),a=new DataView(o.buffer);for(let[,f]of r){let u=f.filename,d=f.extraFieldZip64,h=f.extraFieldAES,x=d.length+h.length+f.rawExtraField.length;a.setUint32(i,1347092738),f.zip64?a.setUint16(i+4,11520):a.setUint16(i+4,5120),o.set(f.headerArray,i+6),a.setUint16(i+30,x,!0),a.setUint16(i+32,f.comment.length,!0),f.directory&&a.setUint8(i+38,16),f.zip64?a.setUint32(i+42,4294967295,!0):a.setUint32(i+42,f.offset,!0),o.set(u,i+46),o.set(d,i+46+u.length),o.set(h,i+46+u.length+d.length),o.set(f.rawExtraField,46+u.length+d.length+h.length),o.set(f.comment,i+46+u.length+x),i+=46+u.length+x+f.comment.length}if(this.zip64&&(a.setUint32(i,1347094022),a.setBigUint64(i+4,BigInt(44),!0),a.setUint16(i+12,45,!0),a.setUint16(i+14,45,!0),a.setBigUint64(i+24,BigInt(l),!0),a.setBigUint64(i+32,BigInt(l),!0),a.setBigUint64(i+40,BigInt(s),!0),a.setBigUint64(i+48,BigInt(c),!0),a.setUint32(i+56,1347094023),a.setBigUint64(i+64,BigInt(c+s),!0),a.setUint32(i+72,1,!0),l=65535,c=4294967295,i+=76),a.setUint32(i,1347093766),a.setUint16(i+8,l,!0),a.setUint16(i+10,l,!0),a.setUint32(i+12,s,!0),a.setUint32(i+16,c,!0),t&&t.length)if(t.length<=Te)a.setUint16(i+20,t.length,!0);else throw new Error(De);return await n.writeUint8Array(o),t&&t.length&&await n.writeUint8Array(t),n.getData()}};async function wn(e,t,n,r){let i=e.files,s=e.writer;i.set(t,null);let c;try{let l,o;try{r.bufferedWrite||e.options.bufferedWrite||e.lockWrite?(l=new Z,l.init()):(e.lockWrite=new Promise(a=>c=a),s.initialized||await s.init(),l=s),(e.offset>=4294967295||n&&(n.size>=4294967295||e.offset+n.size>=4294967295))&&(r.zip64=!0),o=await yn(t,n,l,e.config,e.options,r)}catch(a){throw i.delete(t),a}i.set(t,o),l!=s&&(e.lockWrite&&await e.lockWrite,await s.writeUint8Array(l.getData())),o.offset=e.offset,o.zip64&&new DataView(o.extraFieldZip64.buffer).setBigUint64(20,BigInt(o.offset),!0),e.offset+=o.length}finally{c&&(e.lockWrite=null,c())}}async function yn(e,t,n,r,i,s){let c=Ie(Se(e)),l=s.lastModDate||new Date,o=new Uint8Array(26),a=new DataView(o.buffer),f=s.password===void 0?i.password:s.password,u=f&&f.length&&f,d=s.level===void 0?i.level:s.level,h=d!==0&&!s.directory,x=f===void 0||!f.length,D=s.zip64,w={zip64:D,headerArray:o,directory:s.directory,filename:c,comment:s.comment,extraFieldZip64:D?new Uint8Array(28):new Uint8Array(0),extraFieldAES:u?new Uint8Array([1,153,7,0,2,0,65,69,3,0,0]):new Uint8Array(0),rawExtraField:new Uint8Array(0)},Q=s.extraField;if(Q){let E=4,k=0;Q.forEach(N=>E+=N.length);let et=w.rawExtraField=new Uint8Array(E);Q.forEach((N,Pe)=>{et.set(new Uint16Array([Pe]),k),et.set(new Uint16Array([N.length]),k+2),et.set(N,k+4),k+=4+N.length})}s.bitFlag=8,s.version=(s.version===void 0?i.version:s.version)||20,s.compressionMethod=0,h&&(s.compressionMethod=_e),D&&(s.version=s.version>45?s.version:45),u&&(s.version=s.version>51?s.version:51,s.bitFlag=9,s.compressionMethod=99,h&&(w.extraFieldAES[9]=_e)),a.setUint16(0,s.version,!0),a.setUint16(2,s.bitFlag,!0),a.setUint16(4,s.compressionMethod,!0),a.setUint16(6,(l.getHours()<<6|l.getMinutes())<<5|l.getSeconds()/2,!0),a.setUint16(8,(l.getFullYear()-1980<<4|l.getMonth()+1)<<5|l.getDate(),!0),a.setUint16(22,c.length,!0),a.setUint16(24,0,!0);let U=new Uint8Array(30+c.length);new DataView(U.buffer).setUint32(0,1347093252),U.set(o,4),U.set(c,30);let b;if(t){t.initialized||await t.init();let E=await Y(r,{codecType:K,level:d,outputPassword:f,outputSigned:x,outputCompressed:h,outputEncrypted:Boolean(f)});await n.writeUint8Array(U),b=await X(E,t,n,0,t.size,r,{onprogress:s.onprogress}),w.compressedSize=b.length}else await n.writeUint8Array(U);let tt=new Uint8Array(D?24:16),R=new DataView(tt.buffer);if(R.setUint32(0,1347094280),t)if(!u&&b.signature!==void 0&&(a.setUint32(10,b.signature,!0),R.setUint32(4,b.signature,!0)),D){a.setUint32(14,4294967295,!0),R.setBigUint64(8,BigInt(w.compressedSize),!0),a.setUint32(18,4294967295,!0),R.setBigUint64(16,BigInt(t.size),!0);let E=new DataView(w.extraFieldZip64.buffer);E.setUint16(0,1,!0),E.setUint16(2,24,!0),E.setBigUint64(4,BigInt(t.size),!0),E.setBigUint64(12,BigInt(w.compressedSize),!0)}else a.setUint32(14,w.compressedSize,!0),R.setUint32(8,w.compressedSize,!0),a.setUint32(18,t.size,!0),R.setUint32(12,t.size,!0);return await n.writeUint8Array(tt),w.length=U.length+(b?b.length:0)+tt.length,w}function Se(e){return unescape(encodeURIComponent(e))}function Ie(e){let t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n));return t}"use strict";"use strict";var mn={chunkSize:512*1024,maxWorkers:typeof navigator!="undefined"&&navigator.hardwareConcurrency||2,workerScriptsPath:void 0,useWebWorkers:!0},J=Object.assign({},mn),wt=class extends pt{constructor(t,n){super(t,n,J)}},yt=class extends gt{constructor(t,n){super(t,n,J)}};function Le(e){J=Object.assign({},J,e)}var Oe=["empty","ajax","banners","config","contact","content","contenthistory","fields","finder","mailto","media","menus","modules","newsfeeds","privacy","search","tags","users","wrapper"],En=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),mt=(e,t,n)=>e.replace(new RegExp(En(t),"g"),n),Fe=e=>{let t=Array.from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),n=JSON.stringify(e),r="";for(let i=0;i<n.length;i++){let s=n[i],c=t.indexOf(s);c>-1&&(r+=t[c])}return r},ve=e=>{for(;[1,2,3,4,5,6,7,8,9].indexOf(parseInt(e.charAt(0)))>-1||e.charAt(0)==="0";)e=e.substr(1);return e};Le({workerScriptsPath:"/js/"});var Me=class extends HTMLElement{constructor(){super();this.jVersion=4,this.writer=new $("application/zip"),this.renderEl=this.renderEl.bind(this),this.onInputChange=this.onInputChange.bind(this),this.generateZip=this.generateZip.bind(this),this.transform=this.transform.bind(this),this.addFile=this.addFile.bind(this)}connectedCallback(){let t=document.getElementById("data");try{this.data=JSON.parse(t.innerText)}catch(n){throw new Error("Malformed JSON...")}if(!this.data)throw new Error("Data is missing...");this.componentName="Empty",this.componentNameLowercase="empty",this.disabled=!0,this.renderEl()}onInputChange(t){let n=t.target,r=n.value;r=Fe(r),r=ve(r),r.charAt(0)!==r.charAt(0).toUpperCase()&&(r=r.replace(r.charAt(0),r.charAt(0).toUpperCase())),console.log(r),Oe.includes(r.toLowerCase())?this.disabled=!0:(this.componentName=r,this.componentNameLowercase=r.toLowerCase(),n.value=r,this.disabled=!1),r||(this.disabled=!0),this.renderEl()}onSelectChange(t){let n=t.target;this.jVersion=parseInt(n.options[n.selectedIndex].value,10)}transform(t,n,r){let i=mt(n[t],"{{componentName}}",this.componentName);i=mt(i,"{{componentNameLowercase}}",this.componentName.toLowerCase()),r[t]=i}async addFile(t,n){let r=new Blob([n],{type:"text/plain"});await this.ZipWriter.add(t,new F(r))}async generateZip(){this.ZipWriter=new yt(this.writer);let t,n=[],r={},i=this.data[`v${this.jVersion}`].files;Object.keys(i).map(c=>this.transform(c,i,r)),Object.keys(r).map(c=>n.push(this.addFile(`${c}`,r[c],{}))),await Promise.all(n);let s=new wt(new F(await this.ZipWriter.close()));try{await s.close(),t=URL.createObjectURL(await this.writer.getData()),this.ZipWriter=null}catch(c){alert(c)}if(t){let c=document.createElement("a");c.href=t,c.download=`${this.componentName.toLowerCase()}.zip`,document.body.appendChild(c),c.click(),document.body.removeChild(c)}}renderEl(){$t(this,Zt`
        <div class="card" data-component="${this.componentName}">
          <h1 class="h1">Joomla SPA Component Creator</h1>
          <h2>Customise the component</h2>
          <div class="card">
            <label class="form-label" for="text-input">Component Name </label>
            <input class="form-input" type="text" id="text-input" value="${this.componentName}" onkeyup=${this.onInputChange}>
            <br>
            <label class="form-label" for="select-input">For Joomla </label>
            <select value=${this.jVersion} oninput=${this.onSelectChange} id=select-input>
              <option value='4'>Version 4.x</option>
              <option value='3'>Version 3.x</option>
            </select>
          </div>
          <div class="card-footer">
            <button class="build-button" onclick="${this.generateZip}" type="button">
              Computer, build me the component...
            </button>
          </div>
        </div>`)}};customElements.define("create-joomla-empty-component",Me);})();
/*! (c) Andrea Giammarchi - ISC */
