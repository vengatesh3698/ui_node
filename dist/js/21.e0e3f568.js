"use strict";(self["webpackChunkgn_ui"]=self["webpackChunkgn_ui"]||[]).push([[21],{2021:function(e,s,a){a.r(s),a.d(s,{default:function(){return q}});var l=a(3396),i=a(9242);const r={class:"mt-3"},t=(0,l._)("br",null,null,-1),o=(0,l._)("div",{class:"pageHeader mb-3"},"Profile",-1),n=(0,l._)("div",{class:"container"},[(0,l._)("div",{class:"pageDesc",style:{"font-size":"18px"}},"Let's change the profile")],-1),m={class:"mt-5"},h={class:"flex md6 pa-5 mt-5"},u=["src"],c={class:"mt-4 flex md6"},d={class:"form pa-4"},g=(0,l._)("span",{class:"va-form-label va-form-required-label"},"Username",-1),p=(0,l._)("br",null,null,-1),b=(0,l._)("br",null,null,-1),f=(0,l._)("br",null,null,-1),_=(0,l._)("span",{class:"va-form-label va-form-required-label"},"Mobile",-1),v=(0,l._)("br",null,null,-1),w=(0,l._)("br",null,null,-1),k=(0,l._)("br",null,null,-1),M=(0,l._)("span",{class:"va-form-label va-form-required-label"},"Email",-1),$=(0,l._)("br",null,null,-1),x=(0,l._)("br",null,null,-1),U=(0,l._)("br",null,null,-1),I=(0,l._)("span",{class:"va-form-label"},"Password",-1),E=(0,l._)("br",null,null,-1),V=(0,l._)("br",null,null,-1),P=(0,l._)("br",null,null,-1);function C(e,s,a,C,W,y){const S=(0,l.up)("center"),z=(0,l.up)("va-input"),q=(0,l.up)("va-icon"),A=(0,l.up)("va-button"),Z=(0,l.up)("va-card");return(0,l.wg)(),(0,l.iD)("div",r,[t,o,n,(0,l._)("div",m,[(0,l.Wm)(Z,{class:"cardView"},{default:(0,l.w5)((()=>[(0,l._)("div",h,[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.image_url,height:"330",width:"330",alt:"image"},null,8,u)])),_:1})]),(0,l._)("div",c,[(0,l._)("form",d,[g,p,(0,l.Wm)(z,{modelValue:W.username,"onUpdate:modelValue":s[0]||(s[0]=e=>W.username=e),modelModifiers:{trim:!0},oninput:"event.target.value = event.target.value.replace(/[^a-zA-Z0-9_- ]/g, '')",maxlength:"50",error:W.checkUsername,placeholder:"Enter Username",disabled:""},null,8,["modelValue","error"]),b,f,_,v,(0,l.Wm)(z,{modelValue:W.mobile,"onUpdate:modelValue":s[1]||(s[1]=e=>W.mobile=e),modelModifiers:{trim:!0},maxlength:"10",placeholder:"Enter Mobile",oninput:"event.target.value = event.target.value.replace(/[^0-9]*/g,'');",error:W.checkMobile,"error-messages":W.mobileErrorMessage},null,8,["modelValue","error","error-messages"]),w,k,M,$,(0,l.Wm)(z,{modelValue:W.email,"onUpdate:modelValue":s[2]||(s[2]=e=>W.email=e),modelModifiers:{trim:!0},error:W.checkEmail,"error-messages":e.emailErrorMessage,oninput:"event.target.value = event.target.value.replace(/[^a-zA-Z0-9-_@.]*/g, '');",disabled:""},null,8,["modelValue","error","error-messages"]),x,U,I,E,(0,l.Wm)(z,{modelValue:W.password,"onUpdate:modelValue":s[4]||(s[4]=e=>W.password=e),modelModifiers:{trim:!0},placeholder:"Enter password",type:W.showPassword?"text":"password",error:W.checkPassword},{appendInner:(0,l.w5)((()=>[(0,l.Wm)(q,{name:W.showPassword?"visibility_off":"visibility",size:"small",onClick:s[3]||(s[3]=e=>W.showPassword=!W.showPassword)},null,8,["name"])])),_:1},8,["modelValue","type","error"]),V,P,(0,l.Wm)(A,{color:"#999999",type:"submit","hide-icon":"",onClick:s[5]||(s[5]=(0,i.iM)((e=>y.submit()),["prevent"]))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Update Profile ")])),_:1})])])])),_:1})])])}a(7658);var W=a(8987),y={created(){var e=this.$cookies.get("profile")+".png";this.selectedImageIndex=this.images.indexOf(e),this.image_url="http://157.119.200.65/logo/"+this.$cookies.get("user_id")+".png",this.getUser()},data(){return{role:this.$cookies.get("role"),username:this.$cookies.get("username"),mobile:this.$cookies.get("mobile"),password:"",email:this.$cookies.get("username")+"@email.com",mobileError:!1,mobileErrorMessage:"",checkUsername:!1,checkEmail:!1,checkMobile:!1,checkPassword:!1,showPassword:!1,image_value:"@/assets/avatar7.png",images:["image1.png","image2.png","image3.png","image4.png","image5.png","image6.png"],selectedImageIndex:null}},methods:{selectImage(e){this.selectedImageIndex=e},errorCheck(){return!(this.checkUsername||this.checkMobile||this.checkPassword||this.mobileError)},submit(){if(this.checkUsername=!this.username,this.checkMobile=!this.mobile,this.mobile&&10!=this.mobile.length&&(this.checkMobile=!0,this.mobileErrorMessage="Mobile should be atleast 10 digits"),!this.errorCheck()||this.checkMobile||this.checkEmail)return;var e={username:this.username,phone_number:this.mobile,profile:null!==this.selectedImageIndex?this.images[this.selectedImageIndex].slice(0,-4):null};this.password&&(e["password"]=this.password);const s=this.$loading.show({width:40,height:40});this.axios.put(W.h+"user/"+this.$cookies.get("user_id"),e).then((e=>{console.log("response",e),s.hide(),this.getUser(),this.password="",this.$toast.success(e.data)}),(e=>{s.hide(),this.$toast.error(response.data)}))},getUser(){const e=this.$loading.show({width:40,height:40});this.axios.get(W.h+"user/"+this.$cookies.get("user_id")).then((s=>{console.log("response.data-----------",s.data),e.hide(),this.$cookies.set("profile","image1"),this.$cookies.set("username",s.data.username),this.$cookies.set("phone_number",s.data.phone_number),this.$cookies.set("email",s.data.email)}))},redirect(e,s){this.isAccount=!1,this.isCustomise=!1,this.isIntegation=!1,this.isReport=!1,this.isManage=!1,this.iconaccount="fa fa-angle-down iconSet",this.iconCust="fa fa-angle-down iconSet",this.iconIntegration="fa fa-angle-down iconSet",this.iconManage="fa fa-angle-down iconSet",this.$router.push({name:e}),this.activePage=s}}},S=a(89);const z=(0,S.Z)(y,[["render",C]]);var q=z},8987:function(e){e.exports=JSON.parse('{"h":"http://103.232.245.38/gnapi/"}')}}]);
//# sourceMappingURL=21.e0e3f568.js.map