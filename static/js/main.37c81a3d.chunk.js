(this.webpackJsonpghreact=this.webpackJsonpghreact||[]).push([[0],[,,function(e,a,t){e.exports={Toolbar:"Menu_Toolbar__2YFNm","sub-nav-expanded":"Menu_sub-nav-expanded__TTJKA","sub-nav":"Menu_sub-nav__3Ns1U","sub-nav-heading":"Menu_sub-nav-heading__3LvBG","i-arrow-vert":"Menu_i-arrow-vert__25zIb",SubNavScroll:"Menu_SubNavScroll__1eccO"}},function(e,a,t){e.exports={NavigationItems:"NavigationItems_NavigationItems__Uu3u6","sub-nav":"NavigationItems_sub-nav__9mZA1",active:"NavigationItems_active__1JRFl"}},function(e,a,t){e.exports={Modal:"Modal_Modal__11adI",Overlay:"Modal_Overlay__3IE0f"}},,,,,,function(e,a,t){e.exports={Content:"Layout_Content__aiX1l"}},function(e,a,t){e.exports={BillingCodesPanel:"EditIcons_BillingCodesPanel__3Ry13"}},,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(6),c=t.n(l),o=(t(20),t(7)),r=t(8),d=t(13),s=t(9),m=t(14),u=t(2),v=t.n(u),b=t(3),p=t.n(b),f=function(e){var a=e.items.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("a",{href:e.href,className:e.active?p.a.active:null},e.linkText))}));return i.a.createElement("ul",{className:p.a.NavigationItems+" sub-nav"},a)},E=function(e){return i.a.createElement("div",{className:v.a.Toolbar+" sub-nav-wrap text-center text-md-left"},i.a.createElement("h1",{className:"h3 mb-md-32 py-16 px-8 p-md-0"},"Settings",i.a.createElement("span",{className:"d-inline-flex align-items-center d-md-none"},"\xa0",i.a.createElement("span",{className:"i-arrow-vert ml-12"}))),i.a.createElement("div",{className:"relative"},i.a.createElement("div",{className:v.a.SubNavScroll+" sub-nav-scrollable no-scroll"},i.a.createElement(f,{items:[{linkText:"Billing Codes",href:"/",active:!0},{linkText:"Payment",href:"/payment"}]}))))},_=t(10),g=t.n(_),N=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(E,null),i.a.createElement("main",{className:g.a.Content},this.props.children))}}]),a}(n.Component),h=t(1),x=t(12),C=t(11),I=t.n(C),y=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:I.a.BillingCodesPanel+" col-md-2"},i.a.createElement("span",{className:"link",onClick:e.editItem,"data-qauto":"edit_billing_ico",tabIndex:"0",role:"button","data-toggle":"popover","data-trigger":"hover focus","data-content":"Edit Billing code"},i.a.createElement("span",{className:"i-edit i-m"})),i.a.createElement("span",{className:"link _hint",onClick:e.removeItem,"data-qauto":"remove_code_ico",tabIndex:"0",role:"button","data-toggle":"popover","data-trigger":"hover focus","data-content":"Remove Billing Code"},i.a.createElement("span",{className:"i-trash i-m"}))))},w=function(e){return i.a.createElement("div",{className:"row row-gutter-s billing-codes-row"},i.a.createElement("div",{className:"col-md-5"},i.a.createElement("div",{className:"form-field _field mb-0","data-qauto":"first_name"},i.a.createElement("label",{htmlFor:"billingCode_Key"},"Code"),i.a.createElement("div",{className:"form-el",disabled:"disabled",id:"billingCode_Key"},e.code))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement("div",{className:"form-field _field mb-0","data-qauto":"first_name"},i.a.createElement("label",{htmlFor:"billingCode_Value"},"Description"),i.a.createElement("div",{className:"form-el",disabled:"disabled",id:"billingCode_Value"},e.description))),i.a.createElement(y,{editItem:e.edit,removeItem:e.removed}))},O=function(e){return e.codes.map((function(a,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"box-content input-disabled"},i.a.createElement("div",{className:"box-wrap"},i.a.createElement("div",{className:"bill-codes-grid"},i.a.createElement(w,{code:a.code,description:a.description,key:t,edit:function(){return e.editCodeHandler(t)},removed:function(){return e.removeCodeHandler(t)}})))))}))},k=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"col-md-6 input-disabled"},i.a.createElement("div",{className:"form-field _field","data-qauto":"edit_bill_code_field"},i.a.createElement("label",{htmlFor:"Code"},"Code"),i.a.createElement("input",{className:"form-el",type:"text",value:e.code,onChange:e.codeChanged}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-field _field","data-qauto":"edit_bill_descript_field"},i.a.createElement("label",{htmlFor:"Description"},"Description"),i.a.createElement("input",{className:"form-el",type:"text",value:e.description,onChange:e.descriptionChanged}))),i.a.createElement("button",{className:"btn",onClick:e.save},"Save"))},j=t(4),M=t.n(j),B=Object(n.memo)((function(e){var a=i.a.createElement("div",null,i.a.createElement("div",{className:"box-content"},i.a.createElement("div",{className:"box-wrap"},i.a.createElement("div",{className:"row row-gutter-s"},i.a.createElement("div",{className:M.a.Modal},e.children)))),i.a.createElement("div",{className:M.a.Overlay}));return e.visability?a:null})),S=function(e){var a=Object(n.useState)({codes:[{code:"code1",description:"description1"},{code:"code2",description:"description2"},{code:"code3",description:"description3"},{code:"code4",description:"description4"},{code:"code5",description:"description5"}],editingIndex:1,editPressed:!1}),t=Object(x.a)(a,2),l=t[0],c=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{visability:l.editPressed},i.a.createElement(k,{save:function(e){var a=Object(h.a)({},l);a.editPressed=!1,c(a)},code:l.codes[l.editingIndex].code,description:l.codes[l.editingIndex].description,codeChanged:function(e){return function(e){var a=Object(h.a)({},l);a.codes[l.editingIndex].code=e.target.value,c(a)}(e)},descriptionChanged:function(e){return function(e){var a=Object(h.a)({},l);a.codes[l.editingIndex].description=e.target.value,c(a)}(e)}})),i.a.createElement(O,{codes:l.codes,editCodeHandler:function(e){var a=Object(h.a)({},l);a.editPressed=!0,a.editingIndex=e,c(a)},removeCodeHandler:function(e){var a=Object(h.a)({},l);a.codes.splice(e,1),c(a)}}))};var F=function(){return i.a.createElement(N,null,i.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.37c81a3d.chunk.js.map