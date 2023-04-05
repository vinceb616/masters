(function(){"use strict";var e={924:function(e,a,n){var r=n(963),t=n(86),o=n(252),l=n.p+"img/masters-logo.2d270080.png";const s=(0,t.Q_)("leaderboard",{state:()=>({players:[],teams:[{teamName:"Team Vince",players:[{name:"Scottie Scheffler"},{name:"Max Homa"},{name:"Tommy Fleetwood"},{name:"Abraham Ancer"},{name:"Danny Willett"},{name:"Cameron Champ"},{name:"K.H. Lee"},{name:"Sam Bennett"}]},{teamName:"Team Audra",players:[{name:"Jon Rahm"},{name:"Corey Conners"},{name:"Tommy Fleetwood"},{name:"Talor Gooch"},{name:"Mito Pereira"},{name:"Harris English"},{name:"Kazuki Higa"},{name:"Larry Mize"}]},{teamName:"Team Brad",players:[{name:"Rory Mcilroy"},{name:"Max Homa"},{name:"Adam Scott"},{name:"Seamus Power"},{name:"Chris Kirk"},{name:"Harris English"},{name:"Kevin Kisner"},{name:"Mateo Fernandez de Oliveira"}]},{teamName:"Team Jason",players:[{name:"Cameron Smith"},{name:"Will Zalatoris"},{name:"Patrick Reed"},{name:"Talor Gooch"},{name:"Billy Horschel"},{name:"Cameron Champ"},{name:"Bernhard Langer"},{name:"Vijay Singh"}]},{teamName:"Team Adam",players:[{name:"Scottie Scheffler"},{name:"Cameron Young"},{name:"Tyrrell Hatton"},{name:"Talor Gooch"},{name:"Billy Horschel"},{name:"Kevin Na"},{name:"Kevin Kisner"},{name:"Larry Mize"}]},{teamName:"Team Bobby",players:[{name:"Scottie Scheffler"},{name:"Will Zalatoris"},{name:"Min Woo Lee"},{name:"Abraham Ancer"},{name:"Billy Horschel"},{name:"Cameron Champ"},{name:"Kevin Kisner"},{name:"Fred Couples"}]},{teamName:"Team Jeff",players:[{name:"Scottie Scheffler"},{name:"Will Zalatoris"},{name:"Justin Rose"},{name:"Talor Gooch"},{name:"Mito Pereira"},{name:"Cameron Champ"},{name:"Bernhard Langer"},{name:"Fred Couples"}]},{teamName:"Team Seth",players:[{name:"Rory Mcilroy"},{name:"Sungjae Im"},{name:"Joaquin Niemann"},{name:"Abraham Ancer"},{name:"Mito Pereira"},{name:"Adam Svensson"},{name:"K.H. Lee"},{name:"Mateo Fernandez de Oliveira"}]}]}),actions:{async fetchLeaderboard(){try{const e=await fetch("https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=401465508"),a=await e.json();this.players=a.events[0].competitions[0].competitors}catch(e){console.log(e)}},getTeamScore(e){let a=0;const n=this.getPlayersList(e);return n.forEach(((e,n)=>{n<3&&e&&(console.log(e),a+=e.score?.value)})),console.log("total score",a),a},getPlayersList(e){const a=this.players;let n=[];return e.forEach((e=>{const r=a.find((a=>a.athlete?.displayName.toLowerCase()===e.name.toLowerCase()));n=[...n,r]})),n.sort(((e,a)=>e.score.value>a.score.value?1:-1)),n}}});var m=n(262),i=n(577);const c={class:"w-full flex items-center"},u={class:"w-full px-4 py-0.5 bg-slate-100"},p={class:"w-[54px] py-0.5 flex justify-center items-center bg-green-700 text-white"};var d={__name:"player",props:{model:{type:Object,default:()=>({})},index:{type:String,default:null}},setup(e){return(a,n)=>((0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",u,[(0,o._)("span",{class:(0,i.C_)({"opacity-50":e.index>3})},(0,i.zw)(e.model.athlete?.displayName),3)]),(0,o._)("div",p,[(0,o._)("span",{class:(0,i.C_)({"opacity-50":e.index>3})},(0,i.zw)(e.model.score?.displayValue),3)])]))}};const f=d;var y=f;const h={class:"w-full flex items-center"},v=(0,o._)("div",{class:"w-full px-4 py-0.5 bg-slate-100 font-bold"},"Team Score",-1),g={class:"w-[54px] py-0.5 flex justify-center items-center bg-green-700 text-white"};var w={__name:"total",props:{model:{type:Array,default:()=>[]}},setup(e){const a=e,n=s(),r=(0,o.Fl)((()=>{let e=n.getTeamScore(a.model);return 0===e?"E":e}));return(e,a)=>((0,o.wg)(),(0,o.iD)("div",h,[v,(0,o._)("div",g,(0,i.zw)((0,m.SU)(r)),1)]))}};const b=w;var x=b;const S={class:"space-y-8"},_={class:"flex justify-center text-xs font-medium border-t border-slate-400 px-4"},C={class:"border border-slate-400"},T={class:"w-full"};var j={__name:"table",setup(e){const a=s();return(e,n)=>((0,o.wg)(),(0,o.iD)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,m.SU)(a).teams,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"w-full"},[(0,o._)("h2",_,(0,i.zw)(e.teamName),1),(0,o._)("div",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,m.SU)(a).getPlayersList(e.players),((e,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a,class:"w-full"},[(0,o.Wm)(y,{model:e,index:a},null,8,["model","index"])])))),128)),(0,o._)("div",T,[(0,o.Wm)(x,{model:e.players},null,8,["model"])])])])))),128))]))}};const L=j;var O=L;const H={class:"container max-w-3xl px-4"},K=(0,o._)("div",{class:"w-full flex justify-center mb-10"},[(0,o._)("img",{alt:"The masters",src:l,class:"w-full max-w-[200px]"})],-1);var N={__name:"App",setup(e){const a=s();return a.fetchLeaderboard(),(e,a)=>((0,o.wg)(),(0,o.iD)("main",H,[K,(0,o.Wm)(O)]))}};const A=N;var M=A;const k=(0,t.WB)(),P=(0,r.ri)(M);P.use(k),P.mount("#app")}},a={};function n(r){var t=a[r];if(void 0!==t)return t.exports;var o=a[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,r,t,o){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],t=e[c][1],o=e[c][2];for(var s=!0,m=0;m<r.length;m++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[m])}))?r.splice(m--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var i=t();void 0!==i&&(a=i)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,t,o]}}(),function(){n.d=function(e,a){for(var r in a)n.o(a,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,r){var t,o,l=r[0],s=r[1],m=r[2],i=0;if(l.some((function(a){return 0!==e[a]}))){for(t in s)n.o(s,t)&&(n.m[t]=s[t]);if(m)var c=m(n)}for(a&&a(r);i<l.length;i++)o=l[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkleaderboard"]=self["webpackChunkleaderboard"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(924)}));r=n.O(r)})();
//# sourceMappingURL=app.79debe26.js.map