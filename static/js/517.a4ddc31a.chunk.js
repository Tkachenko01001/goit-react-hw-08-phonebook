"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[517],{1517:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(2791),i=t(9434),a=t(6748),o=t(1413),s=t(9439),c=t(7630),d=(0,c.ZP)("form")({display:"flex",flexDirection:"column",width:"100%",maxWidth:"350px",padding:"20px",border:"1px solid #ccc",borderRadius:"4px",boxShadow:"0 2px 4px rgba(0, 0, 0, .3)","& h2":{marginBottom:"20px",textAlign:"center"},"& .MuiTextField-root":{marginBottom:"20px"}}),l=t(6151),u=t(3239),x=t(3417),m=t(3543),h=t(4358),p=t(1573),f=t(3329),b=function(){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),t=n[0],c=n[1],b=(0,i.v9)((function(e){return e.contacts.items})),j=(0,i.v9)(p.A),v=(0,i.I0)(),Z=(0,r.forwardRef)((function(e,n){return(0,f.jsx)(h.Z,(0,o.Z)({elevation:6,ref:n,variant:"filled"},e))})),g=function(e,n){"clickaway"!==n&&c(!1)},w=function(e){return b.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))};return(0,f.jsxs)(d,{onSubmit:function(e){e.preventDefault();var n=e.target.elements,t=n.name,r=n.number,i={name:t.value,number:r.value};w(i)?alert("".concat(i.name," is already in contacts")):(v((0,a.uK)(i)),c(!0),e.target.reset())},children:[(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(x.Z,{id:"name",label:"Name",variant:"outlined",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,f.jsx)(x.Z,{id:"number",label:"Number",variant:"outlined",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),"add"===j.operation?(0,f.jsx)(l.Z,{type:"submit",variant:"contained",children:(0,f.jsx)(u.Z,{size:25,color:"inherit"})}):(0,f.jsx)(l.Z,{type:"submit",variant:"contained",children:"Add contact"}),(0,f.jsx)(m.Z,{open:t,autoHideDuration:3e3,onClose:g,children:(0,f.jsx)(Z,{onClose:g,severity:"success",sx:{width:"100%"},children:"Contact added successfully!"})})]})},j=t(4691),v=function(){var e=(0,i.v9)((function(e){return e.filter})),n=(0,i.I0)();return(0,f.jsx)(x.Z,{id:"outlined-basic",label:"find contacts by name",variant:"outlined",type:"text",name:"filter",value:e,onChange:function(e){return n((0,j.xO)(e.target.value))},size:"small"})},Z=t(3433),g=t(7924),w=(0,c.ZP)("li")({display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"5px",marginBottom:"10px"}),C=function(e){var n=e.id,t=e.name,r=e.number,i=e.children;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(w,{children:[t,": ",r," ",i]},n),(0,f.jsx)(g.Z,{})]})},y=t(7247),k=function(){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),t=n[0],o=n[1],c=(0,r.useState)([]),d=(0,s.Z)(c,2),x=d[0],p=d[1],b=(0,i.v9)((function(e){return e.contacts.items})),j=(0,i.v9)((function(e){return e.filter})),v=(0,i.I0)(),g=b.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})),w=function(){o(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("ul",{children:g.map((function(e){return(0,f.jsx)(C,{id:e.id,name:e.name,number:e.number,children:(0,f.jsx)(l.Z,{variant:"outlined",color:"error",size:"small",startIcon:(0,f.jsx)(y.Z,{}),onClick:function(){return n=e.id,p((function(e){return[].concat((0,Z.Z)(e),[n])})),v((0,a.GK)(n)),void o(!0);var n},children:x.includes(e.id)?(0,f.jsx)(u.Z,{size:15,color:"inherit"}):"delete"})},e.id)}))}),(0,f.jsx)(m.Z,{open:t,autoHideDuration:3e3,onClose:w,children:(0,f.jsx)(h.Z,{onClose:w,severity:"success",sx:{width:"100%"},children:"Contact deleted successfully!"})})]})},A=t(4554),z=t(1889),P=t(5931),I=(0,c.ZP)("div")({display:"flex",alignItems:"center",justifyContent:"center"}),F=function(){var e=(0,i.v9)(p.A),n=(0,i.I0)();return(0,r.useEffect)((function(){n((0,a.yF)())}),[n]),(0,f.jsxs)(A.Z,{textAlign:"left",children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsxs)(z.ZP,{container:!0,spacing:15,children:[(0,f.jsx)(z.ZP,{item:!0,xs:6,children:(0,f.jsx)(P.Z,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:(0,f.jsx)("div",{children:(0,f.jsx)(b,{})})})}),(0,f.jsx)(z.ZP,{item:!0,xs:6,children:(0,f.jsx)(A.Z,{sx:{padding:"20px",width:"100%",height:"257px",overflowY:"auto",maxWidth:"350px",border:"1px solid #ccc",borderRadius:"4px",boxShadow:"0 2px 4px rgba(0, 0, 0, .3)","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#ccc",borderRadius:"4px"},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:"#999"}},children:(0,f.jsx)(P.Z,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:(0,f.jsx)("div",{children:"fatch"===e.operation?(0,f.jsx)(I,{children:(0,f.jsx)(u.Z,{size:25,color:"inherit"})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v,{}),(0,f.jsx)(k,{})]})})})})})]})]})}}}]);
//# sourceMappingURL=517.a4ddc31a.chunk.js.map