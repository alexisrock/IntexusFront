import{E as m,L as e,M as t,N as i,Q as p,W as r,_ as s,sa as d,ta as v,ua as f,v as o,wa as S,x as a,xa as b,y as u}from"./chunk-U7YQWJHB.js";var h=()=>["/usuario/usuarios"],x=()=>["/home"],k=class c{constructor(l,n){this.service=l;this.router=n}CerrarSesion(){this.service.clearAll(),this.router.navigateByUrl("/")}static \u0275fac=function(n){return new(n||c)(a(b),a(d))};static \u0275cmp=u({type:c,selectors:[["app-menu"]],decls:23,vars:4,consts:[[1,"sidebar","d-flex","flex-column","align-items-center"],[1,"btn","btn-light","mb-3"],[1,"bi","bi-list","fs-3"],[1,"nav-item"],[3,"routerLink"],[1,"bi","bi-star","text-primary"],["routerLinkActive","router-link-active",3,"routerLink"],["href","#"],[3,"click"]],template:function(n,C){n&1&&(e(0,"nav",0)(1,"button",1),i(2,"i",2),t(),e(3,"div",3)(4,"a",4),i(5,"i",5),e(6,"span"),r(7,"Gesti\xF3n de Usuarios"),t()()(),e(8,"div",3)(9,"a",6),i(10,"i",5),e(11,"span"),r(12,"Gesti\xF3n de Tareas"),t()()(),e(13,"div",3)(14,"a",7),i(15,"i",5),e(16,"span"),r(17,"Contacto"),t()()(),e(18,"div",3)(19,"a",8),p("click",function(){return C.CerrarSesion()}),i(20,"i",5),e(21,"span"),r(22,"Cerrar Sesion"),t()()()()),n&2&&(o(4),m("routerLink",s(2,h)),o(5),m("routerLink",s(3,x)))},dependencies:[S,v,f],encapsulation:2})};export{k as a};
