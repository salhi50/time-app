"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30],{30:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(294),a=n(663),r=n(106),c=n(583),s=n(788),u=n(352),i=n(967),o=n.n(i),m=n(7);function d(e){let t,n,l,a=e;return t=Math.floor(a/6e3).toString().padStart(2,"0"),a%=6e3,n=Math.floor(a/100).toString().padStart(2,"0"),a%=100,l=a.toString().padStart(2,"0"),"".concat(t,":").concat(n,".").concat(l)}const E=()=>{const[e,t]=l.useState(0),[n,i]=l.useState(!1),[E,f]=l.useState([]),h=l.useRef(),v=l.useRef(null),{fscreenStatus:b,requestFscreen:p,existFscreen:Z}=(e=>{const[t,n]=l.useState("disabled");return l.useEffect((()=>{function e(){m.Z.fullscreenElement instanceof Element?n("enabled"):null===m.Z.fullscreenElement?n("disabled"):n("unavailable")}function t(){n("unavailable")}return e(),m.Z.addEventListener("fullscreenchange",e),m.Z.addEventListener("fullscreenerror",t),()=>{m.Z.removeEventListener("fullscreenchange",e),m.Z.removeEventListener("fullscreenerror",t)}}),[]),{fscreenStatus:t,requestFscreen:l.useCallback((()=>{e&&e.current?m.Z.requestFullscreen(e.current):m.Z.requestFullscreen(document.body)}),[e]),existFscreen:l.useCallback((()=>{m.Z.exitFullscreen()}),[])}})(v);l.useEffect((()=>(n&&(h.current=window.setInterval((()=>{t((e=>e+1))}),10)),()=>window.clearInterval(h.current))),[n]);const S=l.useMemo((()=>{let e,t=[];for(e=E.length-1;e>=0;e--)t.push(l.createElement("tr",null,l.createElement("td",null,e+1),l.createElement("td",null,d(E[e]-(E[e-1]||0))),l.createElement("td",null,d(E[e]))));return t}),[E]),[k,g,x]=d(e).split(/[.:]/);return l.createElement("div",{className:o()({container:!0,"h-screen bg-dark-900":"enabled"===b}),ref:v},l.createElement("div",{className:"flex justify-end"},l.createElement(a.Z,{variant:"tertiary",shape:"square",Icon:"enabled"===b?r.FOq:r.RPH,hidden:"unavailable"===b,onClick:"enabled"===b?Z:p})),l.createElement("div",{className:o()({"text-center text-display select-none leading-none duration-300 transition-opacity":!0,"opacity-80":!n})},l.createElement("span",null,k,":"),l.createElement("span",null,g,"."),l.createElement("span",{className:"text-[.75em]"},x)),l.createElement("div",{className:"flex items-center justify-center space-x-16 my-32"},l.createElement(a.Z,{shape:"square",variant:"primary",Icon:n?c.Wh:c.gmG,onClick:()=>i((e=>!e))}),l.createElement(a.Z,{shape:"square",Icon:u.rz7,disabled:!n,onClick:()=>f((t=>[...t,e]))}),l.createElement(a.Z,{shape:"square",Icon:s.Z4w,disabled:0===e,onClick:()=>{t(0),i(!1),f([])}})),l.createElement("section",{className:o()({"max-h-[50vh] overflow-auto":!0,invisible:0===E.length})},l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"#"),l.createElement("th",null,"Time"),l.createElement("th",null,"Total time"))),l.createElement("tbody",null,S))))}}}]);