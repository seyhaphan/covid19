(this["webpackJsonpcovid19-feature"]=this["webpackJsonpcovid19-feature"]||[]).push([[0],{24:function(e,t,a){e.exports=a(55)},29:function(e,t,a){},31:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(29),a(6)),i=a.n(l),s=a(17),d=a(18),u=a(19),m=a(23),h=a(22),v=a(57),p=(a(31),a(20)),f=a.n(p),E=a(5),w=a.n(E),g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={confirmed:{},recovered:{},deaths:{}},e}return Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://covid19.mathdro.id/api/countries/cambodia",e.next=3,f.a.get("https://covid19.mathdro.id/api/countries/cambodia");case 3:t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate,this.setState({confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.confirmed,a=e.recovered,n=e.deaths,c=e.lastUpdate;return console.log(c),t.value?r.a.createElement("div",{className:"main container mt-4 d-flex flex-wrap justify-content-center"},r.a.createElement("h1",{style:{width:"100%",textAlign:"center"}},"Cambodia covid19"),r.a.createElement(v.a,{bg:"primary",text:"white",className:"card-item"},r.a.createElement(v.a.Header,null,"Confirmed"),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement(w.a,{start:0,end:t.value,duration:2.5,separator:","})),r.a.createElement(v.a.Text,null,new Date(c).toDateString()))),r.a.createElement(v.a,{bg:"warning",text:"white",className:"card-item"},r.a.createElement(v.a.Header,null,"Recovered"),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement(w.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(v.a.Text,null,new Date(c).toDateString()))),r.a.createElement(v.a,{bg:"danger",text:"white",className:"card-item"},r.a.createElement(v.a.Header,null,"Deaths"),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement(w.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(v.a.Text,null,new Date(c).toDateString())))):"loading..."}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.802aaa7b.chunk.js.map