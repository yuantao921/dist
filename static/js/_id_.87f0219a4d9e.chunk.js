import{r as d,a9 as L,o as P,k as p,j as e,T as b,ah as S,bI as _,H as A,af as M,q as O,B as T,bc as Y,be as F,av as j,ai as R,cc as q,cd as B,bd as N,aa as Q,a7 as H,bh as $,aJ as h,bV as D}from"./vendor.83d59a4358fc.chunk.js";import{q as V,M as E,r as W,s as G,b as J}from"./index.8aebe18ecbfa.js";import{c as U}from"./constate.es.35fffc22355a.chunk.js";import{a as z,g as I}from"./plan.6e4c8cc42528.chunk.js";import{E as K}from"./index.es.fde1566bd5c2.chunk.js";import{F as X,c as Z,d as ee,a as w}from"./formik.esm.c705069f060a.chunk.js";import{a as y}from"./plan.a4c4be1cb76c.chunk.js";const ne=({id:t})=>{const n=V(t),[i,l]=d.useState(null),[o,f]=d.useState(!1),[r,a]=d.useState(null);d.useEffect(()=>{n.data&&!i&&l(z(n.data))},[n.data,i]);const c=d.useMemo(()=>{if(!n.data||!i)return-1;const g=I(n.data)[i];return g?g/100:-1},[n.data,i]),u=d.useMemo(()=>r?r.type===1?c-r.value/100:r.type===2?c*(1-r.value/100):-1:c,[r,c]),{enqueueSnackbar:s}=L();return d.useEffect(()=>{n.error&&s(n.error.message,{variant:"error"})},[n.error,s]),{id:t,originPrice:c,price:u,planQuery:n,period:i,setPeriod:l,isSubmitting:o,setIsSubmitting:f,couponCode:r,setCouponCode:a}},[te,k]=U(ne),re=()=>{const{t}=P(),{planQuery:{data:n,isLoading:i}}=k();return p(E,{title:t("subscription.plan.plan-info-card.title",{name:n==null?void 0:n.name}),content:!1,children:[n&&e(b,{variant:"body1",paragraph:!0,component:"div",children:e(K,{children:n.content})}),i&&e(S,{p:2,spacing:1,children:Array.from(new Array(3)).map((l,o)=>e(_,{variant:"text",width:"100%",height:20},o))})]})},ie=()=>{const{t}=P(),{planQuery:{data:n},setPeriod:i,period:l,isSubmitting:o}=k(),f=d.useMemo(()=>n?Object.keys(I(n)):[],[n]);return e(E,{title:t("subscription.plan.period-select-card.title"),content:!1,children:e(A,{sx:{p:0},children:n&&f.map(r=>e(M,{divider:!0,disablePadding:!0,children:e(O,{onClick:a=>{a.preventDefault(),i(r)},selected:r===l,disabled:o,children:p(S,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,width:"100%",py:1.5,children:[e(b,{variant:"subtitle1",children:t("subscription.plan.period-select-card.period",{context:r})}),e(b,{variant:"subtitle1",children:t("subscription.plan.period-select-card.price",{price:((I(n)[r]||0)/100).toFixed(2)})})]})})},r))})})},oe=()=>{const{t}=P(),[n,{isLoading:i}]=W(),{setIsSubmitting:l,isSubmitting:o,id:f,setCouponCode:r,couponCode:a}=k();return d.useEffect(()=>{l(i)},[i,l]),e(E,{title:t("subscription.plan.coupon-card.title"),children:e(X,{initialValues:{coupon:(a==null?void 0:a.code)||""},onSubmit:async(c,{setSubmitting:u,setStatus:s,setErrors:g,setValues:C})=>{if(a){C({coupon:""}),r(null);return}u(!0),await n({code:c.coupon,plan_id:f}).unwrap().then(v=>{r(v),u(!1),s({success:!0})}).catch(v=>{u(!1),s({success:!1}),g(v.errors||{coupon:v.message})})},children:({values:c,handleChange:u,handleSubmit:s,handleBlur:g,errors:C,touched:v})=>p(T,{component:"form",onSubmit:s,children:[e(Y,{fullWidth:!0,name:"coupon",placeholder:t("subscription.plan.coupon-card.placeholder").toString(),disabled:o||a!==null,onChange:u,onBlur:g,value:a!==null?a.code:c.coupon,endAdornment:e(F,{position:"end",children:e(j,{title:t("subscription.plan.coupon-card.tooltip",{context:a!==null?"reset":"add"}).toString(),placement:"bottom",children:e(R,{edge:"end",type:"submit",children:a!==null?e(q,{}):e(B,{})})})})}),v.coupon&&C.coupon&&e(N,{error:!0,children:C.coupon})]})})})},ae=()=>{const{t}=P(),{planQuery:{data:n},originPrice:i,price:l,couponCode:o,setIsSubmitting:f,isSubmitting:r,period:a}=k(),[c,{isLoading:u}]=G();d.useEffect(()=>{f(u)},[u,f]);const{enqueueSnackbar:s}=L(),g=Q(),C=Z().shape({plan_id:ee().required(t("notice::data-not-loaded").toString()),period:w().oneOf([y.ONETIME,y.MONTHLY,y.QUARTERLY,y.HALF_YEARLY,y.YEARLY,y.TWO_YEARLY,y.THREE_YEARLY]).required(t("notice::period-not-selected").toString()),coupon_code:w().nullable()}),v=()=>{const x={plan_id:n==null?void 0:n.id,coupon_code:o==null?void 0:o.code,period:a};C.isValid(x).then(()=>{c({plan_id:x.plan_id,coupon_code:x.coupon_code,period:x.period}).unwrap().then(m=>{console.log("order created:",m),s(t("notice::order-created").toString(),{variant:"success"}),g(`/order/${m}`)}).catch(m=>{console.error(m),s(m.message,{variant:"error"})})}).catch(m=>{console.error(m),s(`${m.name}: ${Array.from(m.errors).join(", ")}`,{variant:"error"})})};return e(E,{title:t("subscription.plan.order-info-card.title"),children:p(S,{spacing:2,divider:e(H,{}),children:[n&&p(S,{direction:"row",justifyContent:"space-between",spacing:1,children:[e(b,{variant:"body1",children:n==null?void 0:n.name}),e(b,{variant:"body1",children:t("subscription.plan.order-info-card.price",{price:Number(i).toFixed(2)})})]}),o&&p(S,{direction:"row",justifyContent:"space-between",spacing:1,children:[e(b,{variant:"body1",children:t("subscription.plan.order-info-card.coupon",{name:o.name})}),e(b,{variant:"body1",children:t("subscription.plan.order-info-card.price",{price:Number(o.type===1?o.value/100*-1:o.value/100*-1*i).toFixed(2)})})]}),p(S,{direction:"column",spacing:2,children:[e(b,{variant:"subtitle1",children:t("subscription.plan.order-info-card.total")}),e(b,{variant:"h2",component:"span",children:t("subscription.plan.order-info-card.price",{price:Number(l).toFixed(2)})}),e($,{fullWidth:!0,variant:"contained",color:"primary",onClick:v,disabled:r,children:t("subscription.plan.order-info-card.button")})]})]})})},ce=()=>p(h,{container:!0,spacing:2,children:[e(h,{item:!0,xs:12,md:8,children:p(h,{container:!0,spacing:2,children:[e(h,{item:!0,xs:12,children:e(re,{})}),e(h,{item:!0,xs:12,children:e(ie,{})})]})}),e(h,{item:!0,xs:12,md:4,children:p(h,{container:!0,spacing:2,children:[e(h,{item:!0,xs:12,children:e(oe,{})}),e(h,{item:!0,xs:12,children:e(ae,{})})]})})]}),be=()=>{J("buy-plan");const t=D().id,n=d.useMemo(()=>t&&parseInt(t)||0,[t]);return e(te,{id:n,children:e(ce,{})})};export{be as default};
