(function(){"use strict";var e={185:function(e,a,t){var r=t(963),s=t(86),n=t(252),o=t.p+"img/masters-logo.2d270080.png";const l=(0,s.Q_)("leaderboard",{state:()=>({eventKey:"401465508",leaderboard:[],players:[],createdTeams:[],teams:[{teamName:"Team Vince",players:[{name:"Scottie Scheffler"},{name:"Max Homa"},{name:"Tommy Fleetwood"},{name:"Abraham Ancer"},{name:"Danny Willett"},{name:"Cameron Champ"},{name:"K.H. Lee"},{name:"Sam Bennett"}]},{teamName:"Team Audra",players:[{name:"Jon Rahm"},{name:"Corey Conners"},{name:"Tommy Fleetwood"},{name:"Talor Gooch"},{name:"Mito Pereira"},{name:"Harris English"},{name:"Kazuki Higa"},{name:"Larry Mize"}]},{teamName:"Team Brad",players:[{name:"Rory Mcilroy"},{name:"Max Homa"},{name:"Adam Scott"},{name:"Seamus Power"},{name:"Chris Kirk"},{name:"Harris English"},{name:"Kevin Kisner"},{name:"Mateo Fernandez de Oliveira"}]},{teamName:"Team Jason",players:[{name:"Cameron Smith"},{name:"Will Zalatoris"},{name:"Patrick Reed"},{name:"Talor Gooch"},{name:"Billy Horschel"},{name:"Cameron Champ"},{name:"Bernhard Langer"},{name:"Vijay Singh"}]},{teamName:"Team Adam",players:[{name:"Scottie Scheffler"},{name:"Cameron Young"},{name:"Tyrrell Hatton"},{name:"Talor Gooch"},{name:"Billy Horschel"},{name:"Kevin Na"},{name:"Kevin Kisner"},{name:"Larry Mize"}]},{teamName:"Team Bobby",players:[{name:"Scottie Scheffler"},{name:"Will Zalatoris"},{name:"Min Woo Lee"},{name:"Abraham Ancer"},{name:"Billy Horschel"},{name:"Cameron Champ"},{name:"Kevin Kisner"},{name:"Fred Couples"}]},{teamName:"Team Jeff",players:[{name:"Scottie Scheffler"},{name:"Will Zalatoris"},{name:"Justin Rose"},{name:"Talor Gooch"},{name:"Mito Pereira"},{name:"Cameron Champ"},{name:"Bernhard Langer"},{name:"Fred Couples"}]},{teamName:"Team Seth",players:[{name:"Rory Mcilroy"},{name:"Sungjae Im"},{name:"Joaquin Niemann"},{name:"Abraham Ancer"},{name:"Mito Pereira"},{name:"Adam Svensson"},{name:"K.H. Lee"},{name:"Mateo Fernandez de Oliveira"}]},{teamName:"Team Audrey",players:[{name:"Rory Mcilroy"},{name:"Max Homa"},{name:"Shane Lowry"},{name:"Louis Oosthuizen"},{name:"Mito Pereira"},{name:"Bubba Watson"},{name:"Sepp Straka"},{name:"Vijay Singh"}]},{teamName:"Team Max",players:[{name:"Jordan Spieth"},{name:"Corey Conners"},{name:"Min Woo Lee"},{name:"Sahith Theegala"},{name:"Chris Kirk"},{name:"Gordon Sargent"},{name:"Harrison Crowe"},{name:"Adam Svensson"}]},{teamName:"Team Ross",players:[{name:"Scottie Scheffler"},{name:"Cameron Young"},{name:"Tyrrell Hatton"},{name:"Keith Mitchell"},{name:"Chris Kirk"},{name:"J.T. Poston"},{name:"Scott Stallings"},{name:"Sam Bennett"}]}]}),actions:{async fetchLeaderboard(){try{const e=await fetch(`https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=${this.eventKey}`),a=await e.json();this.players=a.events[0].competitions[0].competitors,this.createTeams(),this.createLeaderboard()}catch(e){console.log(e)}},createLeaderboard(){let e=[];e=this.createdTeams.sort(((e,a)=>e.totalScore>a.totalScore?1:-1)),this.leaderboard=e},createTeams(){this.teams.forEach((e=>{let a={};a.teamName=e.teamName,a.players=this.getPlayersList(e.players),a.totalScore=this.getTeamScore(e.players),this.createdTeams=[...this.createdTeams,a]}))},getTeamScore(e){let a=0;const t=this.getPlayersList(e);return t.forEach(((e,t)=>{t<3&&e&&(a+=e.statistics[0]?.value)})),a},getPlayersList(e){const a=this.players;let t=[];return e.forEach((e=>{const r=a.find((a=>a.athlete?.displayName?.toLowerCase()===e?.name?.toLowerCase()));t=[...t,r]})),t.sort(((e,a)=>e.statistics[0].value>a.statistics[0].value?1:-1)),t}}});var i=t(262);const m={class:"w-full flex items-center bg-masters-500 text-white"},c=(0,n._)("div",{class:"w-[40px] text-center py-0.5"},[(0,n._)("span",{class:"text-[9px]"}," POS ")],-1),d=(0,n._)("div",{class:"flex-1 px-4 py-0.5"},[(0,n._)("span",{class:"text-[9px]"}," PLAYER ")],-1),p={key:0,class:"w-[40px] text-center py-0.5"},u=(0,n._)("span",{class:"text-[9px]"}," THRU ",-1),f=[u],y=(0,n._)("div",{class:"w-[54px] py-0.5 flex justify-center items-center"},[(0,n._)("span",{class:"text-[9px]"}," TOTAL ")],-1);var b={__name:"player-attributes",props:{isLeaderboard:{type:Boolean,default:!1}},setup(e){return(a,t)=>((0,n.wg)(),(0,n.iD)("div",m,[c,d,e.isLeaderboard?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",p,f)),y]))}};const x=b;var h=x,v=t(577);const w={class:"w-full flex items-center"},g={class:"w-[40px] text-center py-0.5 bg-white border-b border-slate-300"},_={class:"text-xs"},S={class:"flex-1 px-4 py-0.5 bg-white flex align-center border-b border-l border-slate-300"},T={class:"w-[54px] py-0.5 flex justify-center items-center border-b border-masters-900 bg-masters-900 text-masters-200"};var C={__name:"leaderboard-item",props:{model:{type:Object,default:()=>({})},position:{type:Number,default:null}},setup(e){const a=e,t=l(),r=(0,n.Fl)((()=>0===a.model.totalScore?"E":a.model.totalScore)),s=(0,n.Fl)((()=>{let e=t.leaderboard.findIndex((e=>e.totalScore===a.model.totalScore));return e+1}));return(a,t)=>((0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",g,[(0,n._)("span",_,(0,v.zw)((0,i.SU)(s)),1)]),(0,n._)("div",S,[(0,n._)("span",null,(0,v.zw)(e.model.teamName),1)]),(0,n._)("div",T,[(0,n._)("span",null,(0,v.zw)((0,i.SU)(r)),1)])]))}};const L=C;var N=L;const O={class:"mb-20"},j=(0,n._)("h2",{class:"flex justify-center text-masters-300 text-xs font-medium border-t border-masters-900 px-4"},"Leaderboard",-1),K={class:"border-l border-slate-300 text-sm"},M={class:"w-full"};var H={__name:"leaderboard",setup(e){const a=l();return(e,t)=>((0,n.wg)(),(0,n.iD)("div",O,[j,(0,n._)("div",K,[(0,n._)("div",M,[(0,n.Wm)(h,{isLeaderboard:!0})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(a).leaderboard,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a,class:"w-full"},[(0,n.Wm)(N,{model:e,position:a},null,8,["model","position"])])))),128))])]))}};const A=H;var k=A;const z={class:"w-full flex items-center"};var D={__name:"player",props:{model:{type:Object,default:()=>({})},index:{type:String,default:null}},setup(e){return(a,t)=>((0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("div",{class:(0,v.C_)(["w-[40px] text-center py-0.5 bg-white border-l border-slate-300",{"border-b border-slate-300":7!==e.index&&3!==e.index}])},[(0,n._)("span",{class:(0,v.C_)(["text-xs",{"opacity-50":e.index>3}])},(0,v.zw)(e.model.status?.position?.displayName),3)],2),(0,n._)("div",{class:(0,v.C_)(["flex-1 px-4 py-0.5 bg-white border-l border-slate-300 whitespace-nowrap text-ellipsis overflow-hidden",{"border-b border-slate-300":7!==e.index&&3!==e.index}])},[(0,n._)("span",{class:(0,v.C_)({"opacity-50":e.index>3})},(0,v.zw)(e.model.athlete?.displayName),3)],2),(0,n._)("div",{class:(0,v.C_)(["w-[40px] text-center py-0.5 bg-white border-l border-slate-300",{"border-b border-slate-300":7!==e.index&&3!==e.index}])},[(0,n._)("span",{class:(0,v.C_)(["text-xs",{"opacity-50":e.index>3},{"text-masters-500":"STATUS_IN_PROGRESS"===e.model.status?.type?.name}])},(0,v.zw)(e.model.status?.thru),3)],2),(0,n._)("div",{class:(0,v.C_)(["w-[54px] py-0.5 flex justify-center items-center bg-masters-900 text-masters-200",{"border-t border-masters-900":0===e.index},{"border-b border-masters-900":7!==e.index&&3!==e.index}])},[(0,n._)("span",{class:(0,v.C_)({"opacity-50":e.index>3})},(0,v.zw)(e.model.statistics[0]?.displayValue),3)],2)]))}};const P=D;var W=P;const B={class:"w-full flex items-center"},E=(0,n._)("div",{class:"flex-1 px-4 py-0.5 bg-masters-500 text-white text-[12px]"},"TEAM SCORE",-1),R={class:"w-[54px] py-0.5 flex justify-center items-center bg-masters-900 text-masters-200"};var F={__name:"total",props:{score:{type:Number,default:null}},setup(e){const a=e,t=(0,n.Fl)((()=>0===a.score?"E":a.score));return(e,a)=>((0,n.wg)(),(0,n.iD)("div",B,[E,(0,n._)("div",R,(0,v.zw)((0,i.SU)(t)),1)]))}};const J=F;var U=J;const G={class:"space-y-8"},Y={class:"flex justify-center text-xs font-medium border-t border-masters-900 px-4"},V={class:"text-sm"},I={class:"w-full"},Z={class:"w-full"};var q={__name:"table",setup(e){const a=l();return(e,t)=>((0,n.wg)(),(0,n.iD)("div",G,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(a).createdTeams,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a,class:"w-full"},[(0,n._)("h2",Y,(0,v.zw)(e.teamName),1),(0,n._)("div",V,[(0,n._)("div",I,[(0,n.Wm)(h)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.players,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a,class:(0,v.C_)(["w-full",{"border-b border-masters-400":3===a}])},[(0,n.Wm)(W,{model:e,index:a},null,8,["model","index"])],2)))),128)),(0,n._)("div",Z,[(0,n.Wm)(U,{score:e.totalScore},null,8,["score"])])])])))),128))]))}};const Q=q;var $=Q;const X={class:"bg-slate-100 font-nova"},ee={class:"container max-w-3xl p-4 pb-10"},ae=(0,n._)("div",{class:"w-full flex justify-center mb-10"},[(0,n._)("img",{alt:"The masters",src:o,class:"w-full max-w-[200px]"})],-1);var te={__name:"App",setup(e){const a=l();return a.fetchLeaderboard(),(e,a)=>((0,n.wg)(),(0,n.iD)("div",X,[(0,n._)("main",ee,[ae,(0,n.Wm)(k),(0,n.Wm)($)])]))}};const re=te;var se=re;const ne=(0,s.WB)(),oe=(0,r.ri)(se);oe.use(ne),oe.mount("#app")}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var n=a[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,r,s,n){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],n=e[c][2];for(var l=!0,i=0;i<r.length;i++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(l=!1,n<o&&(o=n));if(l){e.splice(c--,1);var m=s();void 0!==m&&(a=m)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,s,n]}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var s,n,o=r[0],l=r[1],i=r[2],m=0;if(o.some((function(a){return 0!==e[a]}))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(i)var c=i(t)}for(a&&a(r);m<o.length;m++)n=o[m],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},r=self["webpackChunkleaderboard"]=self["webpackChunkleaderboard"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(185)}));r=t.O(r)})();
//# sourceMappingURL=app.4dcfa100.js.map