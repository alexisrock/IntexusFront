import{a as k,b as v,c as F,d as T,e as D,f as C,g as P,h as A,i as G,j as ne,k as ae,l as le,m as V,n as q}from"./chunk-FJN4QPXI.js";import{a as S}from"./chunk-5JNGWLLX.js";import{a as E}from"./chunk-RCXOM7IG.js";import{C as p,E as d,H as J,I as W,J as X,K as Y,L as i,M as o,N as t,P as Z,Q as _,R as u,S as ee,W as l,X as y,Y as N,_ as te,ga as ie,ha as R,k as K,ka as h,p as z,q as H,sa as I,ta as oe,ua as re,v as s,wa as M,x as b,xa as x,y as f,z as Q}from"./chunk-U7YQWJHB.js";var pe=()=>["/usuario/create"];function ce(n,e){n&1&&l(0,"Administrador")}function ue(n,e){n&1&&l(0,"Usuario")}function fe(n,e){n&1&&l(0," Sin rol ")}function ve(n,e){if(n&1){let r=Z();i(0,"div",13)(1,"div",14)(2,"div",15)(3,"p",16),l(4),o(),i(5,"p",17)(6,"b"),l(7,"rol: "),o(),p(8,ce,1,0)(9,ue,1,0)(10,fe,1,0),o()(),t(11,"div",18),i(12,"div",19)(13,"div",14)(14,"div",20)(15,"button",21),_("click",function(){z(r);let m=u().$implicit,c=u();return H(c.editarUsuario(m))}),t(16,"i",22),o()(),t(17,"div",20),i(18,"div",20)(19,"button",21),_("click",function(){z(r);let m=u().$implicit,c=u();return H(c.eliminarUsuario(m.Id))}),t(20,"i",23),o()()()()()(),t(21,"br")}if(n&2){let r,a=u().$implicit;s(4),y(a.NameUsuario),s(4),J((r=a.Idrol)===1?8:r===2?9:10)}}function ge(n,e){if(n&1&&(i(0,"div",12),p(1,ve,22,2),o()),n&2){let r=e.$implicit,a=u();s(),J(a.idUsuario!=r.Id?1:-1)}}var O=class n{constructor(e,r,a){this.service=e;this.router=r;this.auth=a;this.getAllUsers(),this.idUsuario=this.auth.getCookies()?.IdUsuario}usuarios=[];idUsuario=0;getAllUsers(){this.service.GetAllusuarios().subscribe({next:e=>{this.usuarios=e},error:e=>{}})}eliminarUsuario(e){this.service.EliminarUsuario(e).subscribe({next:r=>{this.getAllUsers()},error:r=>{}})}editarUsuario(e){this.service.setCurrentUsuarioResponse(e),this.router.navigate(["usuario/editar"])}static \u0275fac=function(r){return new(r||n)(b(E),b(I),b(x))};static \u0275cmp=f({type:n,selectors:[["app-usuarios"]],decls:16,vars:3,consts:[[1,"d-flex"],[1,"p-4","ancho"],[1,"row","container"],[1,"container","mt-4"],[1,"bannerdos"],[1,"banner-overlaydos"],[1,"banner-contentdos"],[1,"fw-bold"],["routerLinkActive","router-link-active",1,"btn","btn-light","mt-2",3,"routerLink"],[1,"bi","bi-person-fill-add","text-primary"],[1,"user-list-container"],["class","list-group  ",4,"ngFor","ngForOf"],[1,"list-group"],[1,"list-group-item","list-group-item-action"],[1,"row"],[1,"col-lg-7","col-md-8","col-ms-8","text-left"],[1,"text-capitalize","fs-3","fw-semibold"],[1,"text-body-light"],[1,"col-lg-2","col-md-1","col-ms-1"],[1,"col-lg-3","col-md-2","col-ms-2"],[1,"col-md-1","col-lg-1"],[1,"btn","btn-outline-primary","text-primary",3,"click"],[1,"bi","bi-pencil"],[1,"bi","bi-trash"]],template:function(r,a){r&1&&(i(0,"div",0),t(1,"app-menu"),i(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),t(6,"div",5),i(7,"div",6)(8,"h2",7),l(9,"Usuarios"),o(),i(10,"a",8),t(11,"i",9),l(12," Nuevo Usuario "),o()()()()(),t(13,"br"),i(14,"div",10),p(15,ge,2,1,"div",11),o()()()),r&2&&(s(10),d("routerLink",te(2,pe)),s(5),d("ngForOf",a.usuarios))},dependencies:[ie,S,M,oe,re],styles:['.bannerdos[_ngcontent-%COMP%]{position:relative;background:url("./media/Usuarios-Redes-Sociales-RHFEIG3N.jpg") center/cover no-repeat;border-radius:15px;height:200px;color:#fff;display:flex;align-items:center;padding:20px}.banner-overlaydos[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0006;border-radius:15px}.banner-contentdos[_ngcontent-%COMP%]{position:relative;z-index:2}.ancho[_ngcontent-%COMP%]{width:80vw}']})};function _e(n,e){if(n&1&&(i(0,"div",13),l(1),o()),n&2){let r=u();s(),N(" ",r.message," ")}}function he(n,e){n&1&&(i(0,"div",14),l(1," El nombre es obligatorio. "),o())}function xe(n,e){n&1&&(i(0,"div",14),l(1," El correo es obligatorio. "),o())}function Ee(n,e){n&1&&(i(0,"div",14),l(1," El password es obligatorio. "),o())}var U=class n{constructor(e){this.service=e;this.updateDatos()}fg;loading=!1;message="";updateDatos(){this.fg=new D({Nombres:new C("",[v.required]),Email:new C("",[v.required,v.email]),Password:new C("",[v.required])})}sendForm(){if(this.fg.valid){this.service.loadingOn();let e={};e.NameUsuario=this.fg.get("Nombres")?.value,e.Email=this.fg.get("Email")?.value,e.Password=btoa(this.fg.get("Password")?.value),this.service.crearUsuario(e).subscribe({next:r=>{this.showMessage(r.message),this.fg.reset()},error:r=>{this.showMessage(r.error)}})}}showMessage(e){this.service.loadingOff(),this.loading=!0,this.message=e,setTimeout(()=>{this.message="",this.loading=!1},6e3)}static \u0275fac=function(r){return new(r||n)(b(E))};static \u0275cmp=f({type:n,selectors:[["app-usuario"]],decls:32,vars:5,consts:[[3,"submit","formGroup"],[1,"row","mt-2","p-2"],[1,"col-lg-3","col-md-2","col-ms-2"],[1,"col-lg-7","col-md-8","col-ms-8"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"col-lg-7","col-md-8","col-ms-8","border-bottom","border-black"],["type","Nombres","formControlName","Nombres","placeholder","Nombres",1,"form-control-plaintext","text-dark"],["class","colorRed",4,"ngIf"],["type","text","formControlName","Email","placeholder","Email",1,"form-control-plaintext","text-dark"],["type","password","formControlName","Password","placeholder","Password",1,"form-control-plaintext","text-dark"],[1,"col-lg-3","col-md-3","col-ms-2"],[1,"row","mt-4","mb-4","p-2"],["type","submit","value","Crear",1,"btn","btn-primary","rounded-pill"],["role","alert",1,"alert","alert-success"],[1,"colorRed"]],template:function(r,a){if(r&1&&(i(0,"form",0),_("submit",function(){return a.sendForm()}),i(1,"div",1),t(2,"div",2),i(3,"div",3),p(4,_e,2,1,"div",4),o(),t(5,"div",2),o(),i(6,"div",1),t(7,"div",2),i(8,"div",5),t(9,"input",6),o(),p(10,he,2,0,"div",7),t(11,"div",2),o(),t(12,"br"),i(13,"div",1),t(14,"div",2),i(15,"div",5),t(16,"input",8),o(),p(17,xe,2,0,"div",7),t(18,"div",2),o(),t(19,"br"),i(20,"div",1),t(21,"div",2),i(22,"div",5),t(23,"input",9),o(),p(24,Ee,2,0,"div",7),t(25,"div",10),o(),i(26,"div",11),t(27,"div",2),i(28,"div",3),t(29,"input",12),o(),t(30,"div",10),o()(),t(31,"app-loadding")),r&2){let m,c,g;d("formGroup",a.fg),s(4),d("ngIf",a.loading),s(6),d("ngIf",((m=a.fg.get("Nombres"))==null?null:m.invalid)&&((m=a.fg.get("Nombres"))==null?null:m.touched)),s(7),d("ngIf",((c=a.fg.get("Email"))==null?null:c.invalid)&&((c=a.fg.get("Email"))==null?null:c.touched)),s(7),d("ngIf",((g=a.fg.get("Password"))==null?null:g.invalid)&&((g=a.fg.get("Password"))==null?null:g.touched))}},dependencies:[h,R,V,P,k,F,T,A,G,q],encapsulation:2})};var j=class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=f({type:n,selectors:[["app-registrar-usuario"]],decls:12,vars:0,consts:[[1,"container","text-center"],[1,"row"],[1,"col","col-2"],[1,"col"],[1,"card","text-bg-light","mt-5"],[1,"card-body"],[1,"row","mt-4","p-2"]],template:function(r,a){r&1&&(i(0,"div",0)(1,"div",1),t(2,"div",2),i(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),l(8,"Usuario"),o()(),t(9,"br")(10,"app-usuario"),o()()(),t(11,"div",2),o()())},dependencies:[U],encapsulation:2})};var L=class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=f({type:n,selectors:[["app-create"]],decls:9,vars:0,consts:[[1,"d-flex"],[1,"p-4"],[1,"fondoTitulos"]],template:function(r,a){r&1&&(i(0,"div",0),t(1,"app-menu"),i(2,"div",1)(3,"div",2)(4,"h2"),l(5,"Crear Usuario"),o()(),t(6,"br")(7,"br")(8,"app-usuario"),o()())},dependencies:[S,U],encapsulation:2})};function Se(n,e){if(n&1&&(i(0,"div",22),l(1),o()),n&2){let r=u();s(),N(" ",r.message," ")}}function Ue(n,e){n&1&&(i(0,"div",23),l(1," El nombre es obligatorio. "),o())}function we(n,e){n&1&&(i(0,"div",23),l(1," El correo es obligatorio. "),o())}function ye(n,e){n&1&&(i(0,"div",23),l(1," El password es obligatorio. "),o())}function Ne(n,e){if(n&1&&(i(0,"option",16),l(1),o()),n&2){let r=e.$implicit;ee("value",r.Id),s(),y(r.Description)}}var $=class n{constructor(e,r){this.service=e;this.router=r;this.initialComponentes()}userRsponseSubscription;fg;loading=!1;message="";listRol=[];idUser=0;initialComponentes(){this.fg=new D({Nombres:new C("",[v.required]),Email:new C("",[v.required]),Password:new C("",[v.required]),Rol:new C("",[v.required])}),this.userRsponseSubscription=this.service.currentUsuarioResponse.subscribe(e=>{e.Id?(this.fg.patchValue({Nombres:e.NameUsuario,Email:e.Email}),this.idUser=e.Id):this.router.navigate(["usuario/usuarios"])}),this.service.GetRoles().subscribe({next:e=>{this.listRol=e},error:e=>{}})}sendForm(){if(this.fg.valid){let e={};e.Id=this.idUser,e.Email=this.fg.get("Email")?.value,e.NameUsuario=this.fg.get("Nombres")?.value,e.Idrol=this.fg.get("Rol")?.value,e.Password=btoa(this.fg.get("Password")?.value),this.service.EditarUsuario(e).subscribe({next:r=>{this.showMessage(r.message)},error:r=>{this.showMessage(r.message)}})}}showMessage(e){this.service.loadingOff(),this.loading=!0,this.message=e,setTimeout(()=>{this.message="",this.loading=!1},6e3)}static \u0275fac=function(r){return new(r||n)(b(E),b(I))};static \u0275cmp=f({type:n,selectors:[["app-editar-usuario"]],decls:49,vars:5,consts:[[1,"d-flex"],[1,"p-4"],[1,"fondoTitulos"],[3,"submit","formGroup"],[1,"row","mt-2","p-2"],[1,"col-lg-1","col-md-1","col-ms-1"],[1,"col-lg-10","col-md-10","col-ms-10"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"row","mt-2"],[1,"col-lg-10","col-md-10","col-ms-10","border-bottom","border-black"],["type","Nombres","formControlName","Nombres","placeholder","Nombres",1,"form-control-plaintext","text-dark"],["class","colorRed",4,"ngIf"],["type","text","formControlName","Email","placeholder","Email",1,"form-control-plaintext","text-dark"],["type","password","formControlName","Password","placeholder","Password",1,"form-control-plaintext","text-dark"],["formControlName","Rol","aria-label","Default select example",1,"form-select","form-control-plaintext"],["selected","","value",""],[3,"value"],[1,"row","mt-4","mb-4","p-2"],[1,"col-lg-3","col-md-2","col-ms-2"],[1,"col-lg-7","col-md-8","col-ms-8"],["type","submit","value","Guardar",1,"btn","btn-primary","rounded-pill"],[1,"col-lg-3","col-md-3","col-ms-2"],["role","alert",1,"alert","alert-success"],[1,"colorRed"]],template:function(r,a){if(r&1&&(i(0,"div",0),t(1,"app-menu"),i(2,"div",1)(3,"div",2)(4,"h2"),l(5,"Editar Usuario"),o()(),t(6,"br")(7,"br"),i(8,"form",3),_("submit",function(){return a.sendForm()}),i(9,"div",4),t(10,"div",5),i(11,"div",6),p(12,Se,2,1,"div",7),o(),t(13,"div",5),o(),i(14,"div",8),t(15,"div",5),i(16,"div",9),t(17,"input",10),o(),p(18,Ue,2,0,"div",11),t(19,"div",5),o(),t(20,"br"),i(21,"div",8),t(22,"div",5),i(23,"div",9),t(24,"input",12),o(),p(25,we,2,0,"div",11),t(26,"div",5),o(),t(27,"br"),i(28,"div",8),t(29,"div",5),i(30,"div",9),t(31,"input",13),o(),p(32,ye,2,0,"div",11),t(33,"div",5),o(),i(34,"div",8),t(35,"div",5),i(36,"div",9)(37,"select",14)(38,"option",15),l(39,"Seleccione un rol"),o(),X(40,Ne,2,2,"option",16,W),o()(),t(42,"div",5),o(),i(43,"div",17),t(44,"div",18),i(45,"div",19),t(46,"input",20),o(),t(47,"div",21),o()(),t(48,"app-loadding"),o()()),r&2){let m,c,g;s(8),d("formGroup",a.fg),s(4),d("ngIf",a.loading),s(6),d("ngIf",((m=a.fg.get("Nombres"))==null?null:m.invalid)&&((m=a.fg.get("Nombres"))==null?null:m.touched)),s(7),d("ngIf",((c=a.fg.get("Email"))==null?null:c.invalid)&&((c=a.fg.get("Email"))==null?null:c.touched)),s(7),d("ngIf",((g=a.fg.get("Password"))==null?null:g.invalid)&&((g=a.fg.get("Password"))==null?null:g.touched)),s(8),Y(a.listRol)}},dependencies:[h,R,S,V,P,ae,le,k,ne,F,T,A,G,q],encapsulation:2})};var Re=[{path:"",component:j},{path:"usuarios",canActivate:[x],component:O},{path:"create",canActivate:[x],component:L},{path:"editar",canActivate:[x],component:$}],me=class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=Q({type:n});static \u0275inj=K({imports:[h,M.forChild(Re)]})};export{me as UsuarioModule,Re as routes};
