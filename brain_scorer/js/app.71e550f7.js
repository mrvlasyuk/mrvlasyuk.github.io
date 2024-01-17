(function(){"use strict";var e={3205:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t,n,r,a,s){const i=(0,o.up)("ChessPuzzle");return(0,o.wg)(),(0,o.j4)(i)}n(560);var s=n(4870),i=n(7139),l=n(6),u=n(1441);const c={class:"puzzle-container flex flex-col items-center"},g=(0,o._)("h1",{class:"text-3xl font-extrabold mb-2"},"Cognitive Score: Chess Metric",-1),v={class:"puzzle-top"},h={class:"puzzle-rating"},d=(0,o._)("span",{class:"puzzle-rating-label"},"Puzzle rating:",-1),f={class:"puzzle-rating-value"},p={class:"info_block my-10"},m={class:"user-rating"},y=(0,o._)("span",{class:"user-rating-label"},"My rating:",-1),z={class:"user-rating-value"},b={class:"user-rating-deviation"},k={key:0,class:"history m-b-5"},_=(0,o._)("h1",{class:"text-xl font-extrabold"},"History",-1),w={class:"history-table"},S=["onClick"],x={class:"explanation info_block my-10"},O={class:"text-xl font-extrabold mb-2"},P={key:0},M={key:1},D={key:0},C=(0,o.uE)('<p> The Chess Puzzle page is designed to measure and track cognitive sharpness and brain energy through the challenge of solving chess puzzles. It is a tool for users to assess their mental acuity at different times of the day. </p><h2 class="text-xl font-extrabold my-2">Rules and Features</h2><ul><li><strong>Chess Puzzle Solving:</strong> Solve chess puzzles within a set time limit to test your cognitive skills. </li><li><strong>Rating System:</strong> Each puzzle has a difficulty rating, and users have their own ratings that adjust based on performance. </li><li><strong>Timer:</strong> A countdown timer adds urgency to the puzzle-solving experience. </li><li><strong>User Performance Tracking:</strong> Track your rating changes and rating deviation to monitor your progress over time. </li><li><strong>History:</strong> A historical record of your ratings is maintained to help you see trends in your performance. </li><li><strong>Adaptive Difficulty:</strong> Puzzles are matched to your rating level to provide a consistent challenge. </li><li><strong>Local Storage:</strong> Your rating history is stored locally to maintain progress across sessions. </li><li><strong>Glicko-2 Rating System:</strong> The user&#39;s rating is updated using the Glicko-2 system, reflecting changes in skill level after each puzzle. </li></ul>',3),H=[C],R={key:0,class:"checkmark-emoji"},T=(0,o._)("div",{class:"made-by mb-2"},[(0,o._)("a",{href:"https://t.me/lovesyuk"},"Made by lovesyuk 💜")],-1),j="https://chess.pomodorr.io/get_puzzle",I=26;var $={__name:"ChessPuzzle",setup(e){const t=(0,s.iH)(null),n=(0,s.iH)([]),r=(0,s.iH)(!1),a={},C=(0,s.iH)(!0),$=(0,s.iH)(10);let N=null,E=!1,J=null,U=[],q="w",A=[],F=(0,s.iH)(null),G=(0,s.iH)(null),Y=null,L=null;const B=(e,t)=>{J.setPosition(e);const n=e.split(" ")[1];q="w"===n?"b":"w",U=t.split(" ");let r=J.board.state.orientation;r="white"===r?"w":"b",q!==r&&J.toggleOrientation()},K=async()=>{try{const e=await fetch(`${j}?rating=${F.value}`),n=await e.json();t.value=n,B(n.FEN,n.Moves),setTimeout((()=>{null!==J&&J.move(U[0])}),300),Q()}catch(e){console.error("Error fetching puzzle:",e)}},W=2*Math.PI*I,Z=()=>{$.value=10,N=setInterval((()=>{if($.value>0){$.value-=.1;const e=document.querySelector(".progress-ring__circle");if(e){const t=W-$.value/10*W;e.style.strokeDashoffset=t.toString(),e.style.strokeDasharray=W.toString()}}else clearInterval(N),E&&ee(!1),K()}),100)},Q=()=>{clearInterval(N),Z()},V=e=>{J=e},X=e=>{if(J.game.turn()===q)return;let t=J.game.history().length-1;if(e.lan===U[t]){if(console.log("correct move"),t+1>=U.length)return console.log("Success!"),se(),ee(!0),void K();setTimeout((()=>{J.move(U[t+1])}),300),Q()}else console.log("wrong move"),setTimeout((()=>{J.undoLastMove()}),300),ee(!1),K()},ee=e=>{let n=Y.makePlayer(L.getRating(),L.getRd());const r=e?1:0;A.push([t.value.Rating,t.value.RatingDeviation,r]);let o=A.map((e=>[n,Y.makePlayer(e[0],e[1]),e[2]]));console.log(A),Y.updateRatings(o),F.value=Math.round(n.getRating()),G.value=Math.round(n.getRd()),ne(),E=e};(0,o.bv)((()=>{ae(),te(),K()}));const te=()=>{let e=.06;Y=new u.Glicko2({tau:.5,rating:1500,rd:200,vol:e});const t=JSON.parse(localStorage.getItem("history"))||[];if(t.length>0){const e=t[t.length-1];F.value=e.rating,G.value=Math.min(2*e.deviation,200)}else F.value=500,G.value=200;L=Y.makePlayer(F.value,G.value,e)},ne=()=>{const e=300,t={rating:Math.round(F.value),deviation:Math.round(G.value),time:Math.round(Date.now()/1e3)};let n=JSON.parse(localStorage.getItem("history"))||[];0===n.length||t.time-n[n.length-1].time>e?n.push(t):n[n.length-1]=t,localStorage.setItem("history",JSON.stringify(n)),ae()},re=e=>{const t=new Date(1e3*e),n=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),a=t.getHours().toString().padStart(2,"0"),s=t.getMinutes().toString().padStart(2,"0");return`${n}-${r}-${o} ${a}:${s}`},oe=e=>{n.value.splice(e,1),localStorage.setItem("history",JSON.stringify(n.value.reverse()))},ae=()=>{let e=JSON.parse(localStorage.getItem("history"))||[];n.value=e.sort(((e,t)=>t.time-e.time))},se=()=>{r.value=!0,setTimeout((()=>{r.value=!1}),1e3)};return(e,u)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",c,[g,(0,o.Wm)((0,s.SU)(l.o),{class:"chessboard","board-config":a,onBoardCreated:V,onMove:X}),(0,o._)("div",v,[(0,o._)("div",h,[d,(0,o._)("span",f,(0,i.zw)(t.value?.Rating),1)]),(0,o._)("svg",{class:"progress-ring",width:"60",height:"60"},[(0,o._)("circle",{class:"progress-ring__circle",stroke:"green","stroke-width":"4",fill:"transparent",r:I,cx:"30",cy:"30"})])]),(0,o._)("div",p,[(0,o._)("div",m,[y,(0,o._)("span",z,(0,i.zw)((0,s.SU)(F)),1),(0,o._)("span",b,"±"+(0,i.zw)((0,s.SU)(G)),1)]),n.value.length>0?((0,o.wg)(),(0,o.iD)("div",k,[_,(0,o._)("table",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.value,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:e.time},[(0,o._)("td",null,(0,i.zw)(re(e.time)),1),(0,o._)("td",null,(0,i.zw)(e.rating),1),(0,o._)("td",null,"±"+(0,i.zw)(e.deviation),1),(0,o._)("td",null,[(0,o._)("button",{onClick:e=>oe(t)},"✖",8,S)])])))),128))])])):(0,o.kq)("",!0)]),(0,o._)("div",x,[(0,o._)("div",{class:"explanation-block",onClick:u[0]||(u[0]=e=>C.value=!C.value)},[(0,o._)("h1",O,[(0,o.Uk)(" Goal of the Chess Puzzle Page "),C.value?((0,o.wg)(),(0,o.iD)("span",P,"▼")):((0,o.wg)(),(0,o.iD)("span",M,"▲"))]),C.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",D,H))])]),r.value?((0,o.wg)(),(0,o.iD)("div",R,"✔")):(0,o.kq)("",!0)]),T],64))}};const N=$;var E=N,J={name:"App",components:{ChessPuzzle:E}},U=n(89);const q=(0,U.Z)(J,[["render",a]]);var A=q;(0,r.ri)(A).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],i=r[1],l=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(t&&t(r);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkbrain_chess_scorer"]=self["webpackChunkbrain_chess_scorer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3205)}));r=n.O(r)})();
//# sourceMappingURL=app.71e550f7.js.map