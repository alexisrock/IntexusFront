import{C as v,E as u,H as f,L as e,M as t,N as i,Q as S,W as a,_ as l,sa as h,ta as C,ua as b,v as o,wa as k,x as c,xa as p,y as d}from"./chunk-U7YQWJHB.js";var y=()=>["/home"],R=()=>["/contacto/contactos"],x=()=>["/usuario/usuarios"];function A(n,m){n&1&&(e(0,"div",3)(1,"a",6),i(2,"i",5),e(3,"span"),a(4,"Gesti\xF3n de Usuarios"),t()()()),n&2&&(o(),u("routerLink",l(1,x)))}var _=class n{constructor(m,r,s){this.service=m;this.router=r;this.auth=s;this.idRol=this.auth.getCookies()?.IdRol}idRol=0;CerrarSesion(){this.service.clearAll(),this.router.navigateByUrl("/")}static \u0275fac=function(r){return new(r||n)(c(p),c(h),c(p))};static \u0275cmp=d({type:n,selectors:[["app-menu"]],decls:19,vars:5,consts:[[1,"sidebar","d-flex","flex-column","align-items-center"],[1,"btn","btn-light","mb-3"],[1,"bi","bi-list","fs-3"],[1,"nav-item"],["routerLinkActive","router-link-active",3,"routerLink"],[1,"bi","bi-star","text-primary"],[3,"routerLink"],[3,"click"]],template:function(r,s){r&1&&(e(0,"nav",0)(1,"button",1),i(2,"i",2),t(),v(3,A,5,2,"div",3),e(4,"div",3)(5,"a",4),i(6,"i",5),e(7,"span"),a(8,"Gesti\xF3n de Tareas"),t()()(),e(9,"div",3)(10,"a",6),i(11,"i",5),e(12,"span"),a(13,"Contacto"),t()()(),e(14,"div",3)(15,"a",7),S("click",function(){return s.CerrarSesion()}),i(16,"i",5),e(17,"span"),a(18,"Cerrar Sesion"),t()()()()),r&2&&(o(3),f(s.idRol==1?3:-1),o(2),u("routerLink",l(3,y)),o(5),u("routerLink",l(4,R)))},dependencies:[k,C,b],encapsulation:2})};export{_ as a};
