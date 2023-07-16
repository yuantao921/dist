System.register(["./vendor-legacy.fc156c611c90.chunk.js","./AuthWrapper-legacy.ec023a5e376e.chunk.js","./formik.esm-legacy.cfe2e4248e4d.chunk.js","./password-strength-legacy.21d89d0a52c0.chunk.js","./AnimateButton-legacy.ccae4ddec8ad.chunk.js","./index-legacy.eddd011a9de2.js","./hey-listen.es-legacy.2cf185e905fe.chunk.js"],(function(e,r){"use strict";var o,i,s,a,n,t,l,d,c,m,p,u,h,g,w,_,f,b,x,y,S,v,k,C,B,j,q,F,A,W,E,I,P,z,D,K,V,O,R;return{setters:[e=>{o=e.i,i=e.o,s=e.ba,a=e.aa,n=e.a9,t=e.r,l=e.j,d=e.F,c=e.b0,m=e.k,p=e.aJ,u=e.ah,h=e.bb,g=e.an,w=e.bc,_=e.bd,f=e.be,b=e.bf,x=e.bg,y=e.br,S=e.B,v=e.T,k=e.l,C=e.bh,B=e.ao,j=e.n},e=>{q=e.A},e=>{F=e.F,A=e.c,W=e.a,E=e.b},e=>{I=e.S,P=e.O,z=e.s,D=e.a},e=>{K=e.A},e=>{V=e.g,O=e.I,R=e.b},null],execute:function(){const r=()=>{const e=o(),{t:r}=i("common"),j=s(),q=a(),{enqueueSnackbar:R}=n(),[$]=V(),[J,M]=t.useState(),[T,G]=t.useState(!1),H=()=>{G(!T)},L=e=>{e.preventDefault()},N=e=>{const r=z(e);M(D(r))};return t.useEffect((()=>{N("")}),[]),l(d,{children:l(F,{initialValues:{email:"",password:"",password_confirm:"",email_code:"",submit:null},validationSchema:A().shape({email:W().email(r("forgot_password.email_invalid").toString()).max(255,r("forgot_password.email_max",{count:255}).toString()).required(r("forgot_password.email_required").toString()),password:W().max(255,r("forgot_password.password_max",{count:255}).toString()).required(r("forgot_password.password_required").toString()),password_confirm:W().oneOf([E("password"),null],r("forgot_password.password_confirm_invalid").toString()).required(r("forgot_password.password_confirm_required").toString()),email_code:W().min(6,r("forgot_password.email_code_min",{count:6}).toString()).max(6,r("forgot_password.email_code_max",{count:6}).toString()).required(r("forgot_password.email_code_required").toString())}),onSubmit:async(e,{setErrors:o,setStatus:i,setSubmitting:s})=>{if(6!==e.email_code.length)return i({success:!1}),void o({email_code:r("forgot_password.email_code_invalid").toString()});await $({email:e.email,password:e.password,email_code:e.email_code}).unwrap().then((()=>{j.current&&(i({success:!0}),s(!1),R(r("notice::forgot_password.reset_success"),{variant:"success"}),c.event("reset_password",{category:"auth",label:"reset_password",email:e.email,success:!0}),q("/login",{replace:!0}))})).catch((r=>{console.error("Error in reset password",r),j.current&&(i({success:!1}),o(r.errors||{submit:r.message}),s(!1),c.event("reset_password",{category:"auth",label:"reset_password",email:e.email,success:!1,error:r.message}))})).finally((()=>{j.current&&s(!1)}))},children:({errors:o,handleBlur:i,handleChange:s,handleSubmit:a,isSubmitting:n,touched:t,values:d,setValues:c})=>l("form",{noValidate:!0,onSubmit:a,children:m(p,{container:!0,spacing:3,children:[l(p,{item:!0,xs:12,children:m(u,{spacing:1,children:[l(h,{htmlFor:"email",children:l(g,{children:"forgot_password.email"})}),l(w,{fullWidth:!0,error:Boolean(t.email&&o.email),id:"email",type:"email",value:d.email,name:"email",onBlur:i,onChange:s,placeholder:"user@example.com",inputProps:{},endAdornment:l(I,{email:d.email})}),t.email&&o.email&&l(_,{error:!0,id:"helper-text-email-signup",children:o.email})]})}),l(p,{item:!0,xs:12,children:m(u,{spacing:1,children:[l(h,{htmlFor:"email-code-signup",children:l(g,{children:"forgot_password.email_code"})}),l(P,{value:d.email_code,onChange:e=>{c((r=>({...r,email_code:e})))},numInputs:6,containerStyle:{justifyContent:"space-between"},inputProps:{name:"email_code",id:"email-code-signup",onBlur:i},inputStyle:{width:"100%",margin:"8px",padding:"10px",border:`1px solid ${"dark"===e.palette.mode?e.palette.grey[200]:e.palette.grey[300]}`,borderRadius:4,":hover":{borderColor:e.palette.primary.main}},focusStyle:{outline:"none",boxShadow:e.customShadows.primary,border:`1px solid ${e.palette.primary.main}`}}),t.email_code&&o.email_code&&l(_,{error:!0,id:"helper-text-email-signup",children:o.email_code})]})}),m(p,{item:!0,xs:12,children:[m(u,{spacing:1,children:[l(h,{htmlFor:"password-signup",children:l(g,{children:"forgot_password.password"})}),l(w,{fullWidth:!0,error:Boolean(t.password&&o.password),id:"password-signup",type:T?"text":"password",value:d.password,name:"password",onBlur:i,onChange:e=>{s(e),N(e.target.value)},autoComplete:"new-password",endAdornment:l(f,{position:"end",children:l(O,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:L,edge:"end",color:"secondary",children:l(T?b:x,{})})}),placeholder:"******",inputProps:{}}),t.password&&o.password&&l(_,{error:!0,id:"helper-text-password-signup",children:o.password})]}),l(y,{fullWidth:!0,sx:{mt:2},children:m(p,{container:!0,spacing:2,alignItems:"center",children:[l(p,{item:!0,children:l(S,{sx:{bgcolor:J?.color,width:85,height:8,borderRadius:"7px"}})}),l(p,{item:!0,children:l(v,{variant:"subtitle1",fontSize:"0.75rem",children:r("forgot_password.password_strength",{context:k.lowerCase(J?.label)}).toString()})})]})})]}),l(p,{item:!0,xs:12,children:m(u,{spacing:1,children:[l(h,{htmlFor:"password-confirm",children:l(g,{children:"forgot_password.password_confirm"})}),l(w,{fullWidth:!0,error:Boolean(t.password_confirm&&o.password_confirm),id:"password-confirm",type:T?"text":"password",value:d.password_confirm,name:"password_confirm",onBlur:i,onChange:e=>{s(e),N(e.target.value)},autoComplete:"new-password",placeholder:"******",inputProps:{}}),t.password_confirm&&o.password_confirm&&l(_,{error:!0,id:"helper-text-password-confirm",children:o.password_confirm})]})}),o.submit&&l(p,{item:!0,xs:12,children:l(_,{error:!0,children:o.submit})}),l(p,{item:!0,xs:12,children:l(K,{children:l(C,{disableElevation:!0,disabled:n,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:n?l(B,{size:24}):l(g,{i18nKey:"forgot_password.submit",children:"重置密码"})})})})]})})})})};e("default",(()=>(R("forgot-password"),l(q,{children:m(p,{container:!0,spacing:3,children:[l(p,{item:!0,xs:12,children:m(u,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[l(v,{variant:"h3",children:l(g,{i18nKey:"forgot_password.title",children:"Forgot password"})}),l(v,{component:j,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:l(g,{i18nKey:"forgot_password.back_to_login",children:"Back to login"})})]})}),l(p,{item:!0,xs:12,children:l(r,{})})]})}))))}}}));
