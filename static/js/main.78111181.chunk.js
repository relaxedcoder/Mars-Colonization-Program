(this["webpackJsonptic-tac-toe-ai"]=this["webpackJsonptic-tac-toe-ai"]||[]).push([[0],[,function(e,t,a){e.exports={board:"Board_board__1JwXj",row:"Board_row__fgEpu",cell:"Board_cell__25gtz"}},,function(e,t,a){e.exports={container:"GameOver_container__14K7b",gameover:"GameOver_gameover__2MZA-",message:"GameOver_message__3fuyj"}},,,function(e,t,a){e.exports=a.p+"static/media/rover.11305738.mp4"},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=a(2),i=(a(12),function(e){for(var t=0;t<3;t++)if(e[3*t]&&e[3*t]===e[3*t+1]&&e[3*t]===e[3*t+2])return e[3*t];for(var a=0;a<3;a++)if(e[a]&&e[a]===e[a+3]&&e[a]===e[a+6])return e[a];if(e[0]===e[4]&&e[0]===e[8]||e[2]===e[4]&&e[2]===e[6])return e[4]}),u=function e(t,a,n,r,c,l){if(a>l)return 0;var o,u=i(t);if(u===c)return 10;if(u)return-10;if(9===r)return 0;if(n){var m=-1e3;for(o=0;o<9;o++)t[o]||(t[o]=r%2?"O":"X",m=Math.max(m,e(t,a+1,!n,r+1,c,l)),t[o]="");return m}var s=1e3;for(o=0;o<9;o++)t[o]||(t[o]=r%2?"O":"X",s=Math.min(s,e(t,a+1,!n,r+1,c,l)),t[o]="");return s},m=function(e,t,a,n){for(var r,c=-1e3,l=0;l<9;l++)if(!e[l]){var o,i=t%2?"O":"X";e[l]=i,o=u(e,0,!1,t+1,i,a?n:9),e[l]="",o>c&&(r=l,c=o)}return r},s=a(1),f=a.n(s);function v(e){return r.a.createElement("div",{className:f.a.board},r.a.createElement("div",{className:f.a.row},r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(0)}},e.board[0]),r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(1)}},e.board[1]),r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(2)}},e.board[2])),r.a.createElement("div",{className:f.a.row},r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(3)}},e.board[3]),r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(4)}},e.board[4]),r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(5)}},e.board[5])),r.a.createElement("div",{className:f.a.row},r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(6)}},e.board[6]),r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(7)}},e.board[7]),r.a.createElement("div",{className:f.a.cell,onClick:function(){return e.playMove(8)}},e.board[8])))}var d=a(3),E=a.n(d),p=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,!c&&r.a.createElement("div",{className:E.a.container,id:"contain"},r.a.createElement("p",{className:E.a.gameover},"Game Over"),r.a.createElement("p",{className:E.a.message},e.winner," wins"),r.a.createElement("button",{onClick:function(){l(!0),e.restartGame()}},"Restart")))},b=a(6),g=a.n(b),y=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("Human"),u=Object(o.a)(l,2),s=u[0],f=u[1],d=Object(n.useState)("Computer"),E=Object(o.a)(d,2),b=E[0],y=E[1],O=Object(n.useState)(4),C=Object(o.a)(O,2),j=C[0],k=C[1],h=Object(n.useState)(!1),x=Object(o.a)(h,2),N=x[0],S=x[1],_=Object(n.useState)(["","","","","","","","",""]),w=Object(o.a)(_,2),M=w[0],G=w[1],P=Object(n.useState)(0),z=Object(o.a)(P,2),B=z[0],X=z[1],H=Object(n.useState)(0),I=Object(o.a)(H,2),D=I[0],J=I[1],T=Object(n.useState)(""),A=Object(o.a)(T,2),R=A[0],W=A[1];function F(e){if(!R&&B<9&&!M[e]){var t=B%2?"O":"X";M[e]=t,G(M.map((function(a,n){return n===e?t:a}))),X(B+1)}}function K(){G(["","","","","","","","",""]),X(0),W("")}return Object(n.useEffect)((function(){1===a&&(f("Human"),y("Computer"),K()),2===a&&(f("Player 1"),y("Player 2"),K())}),[a]),Object(n.useEffect)((function(){var e=i(M);9===B||e?W(e||"No one"):"Computer"===s&&!(B%2)||"Computer"===b&&B%2?F(m(M,B,!0,j)):J(m(M,B,!1))}),[M,B,j,a,s,b]),Object(n.useEffect)((function(){"X"===R?W(s):"O"===R&&W(b)}),[R,s,b]),r.a.createElement("div",{id:"container"},R&&r.a.createElement(p,{winner:R,restartGame:K}),r.a.createElement("div",{id:"header"},r.a.createElement("p",{style:{fontSize:"xxx-large",margin:"20px"}},"AI"),r.a.createElement("video",{src:g.a,playsInline:!0,muted:!0,autoPlay:!0,loop:!0,height:"100px"}),r.a.createElement("p",{style:{fontSize:"xxx-large",margin:"20px"}},"Tic Tac Toe")),r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"settings"},r.a.createElement("p",{style:{fontSize:"xx-large"}},"Settings"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"Number of Players: ",a," Player"),r.a.createElement("button",{onClick:function(){return c(1)}},"1 Player"),r.a.createElement("button",{onClick:function(){return c(2)}},"2 Player")),1===a&&r.a.createElement("div",null,r.a.createElement("p",null,"First move: ",s),r.a.createElement("button",{onClick:function(){f("Human"),y("Computer")}},"Human"),r.a.createElement("button",{onClick:function(){f("Computer"),y("Human")}},"Computer")),1===a&&r.a.createElement("label",null,r.a.createElement("p",null,"Difficulty: ",j<9?j:"Infinity"),r.a.createElement("input",{type:"range",min:"1",max:"9",value:j,onChange:function(e){return k(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("p",null,"Display suggestions?"),r.a.createElement("input",{type:"checkbox",checked:N,onChange:function(e){return S(e.target.checked)}}))))),r.a.createElement("div",{id:"game"},r.a.createElement(v,{board:M,playMove:F}),r.a.createElement("button",{onClick:K},"Restart Game")),r.a.createElement("div",{id:"suggestions"},N&&r.a.createElement("p",{style:{fontSize:"x-large"},onClick:function(){return S(!1)}},"Best move: ",D),!N&&r.a.createElement("p",{style:{fontSize:"x-large"},onClick:function(){return S(!0)}},"Click to Display Suggestions"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.78111181.chunk.js.map