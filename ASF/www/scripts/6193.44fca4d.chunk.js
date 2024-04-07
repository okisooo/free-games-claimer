(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[6193],{7058:(e,t,a)=>{"use strict";function s(e,t){return e.filter((e=>e.name===t)).length>0}a.d(t,{A:()=>s})},3909:(e,t,a)=>{"use strict";a.d(t,{Dz:()=>i,Pk:()=>o,WL:()=>r,ej:()=>n});var s=a(5471);const i=[{name:s.Ay.i18n.translate("basic"),fields:["SteamOwnerID"]},{name:s.Ay.i18n.translate("trade"),fields:["MaxTradeHoldDuration","FilterBadBots","LicenseID"]},{name:s.Ay.i18n.translate("customization"),fields:["AutoRestart","Blacklist","CommandPrefix","CurrentCulture","SteamMessagePrefix"]},{name:s.Ay.i18n.translate("remote-access"),fields:["Headless","IPC","IPCPassword","IPCPasswordFormat"]},{name:s.Ay.i18n.translate("connection"),fields:["ConnectionTimeout","SteamProtocols","WebProxy","WebProxyPassword","WebProxyUsername"]},{name:s.Ay.i18n.translate("farming"),fields:["FarmingDelay","IdleFarmingPeriod","MaxFarmingTime","MinFarmingDelayAfterBlock"]},{name:s.Ay.i18n.translate("performance"),fields:["OptimizationMode","ConfirmationsLimiterDelay","GiftsLimiterDelay","InventoryLimiterDelay","LoginLimiterDelay","WebLimiterDelay"]},{name:s.Ay.i18n.translate("updates"),fields:["UpdateChannel","UpdatePeriod"]},{name:s.Ay.i18n.translate("advanced"),fields:["Debug","DefaultBot"]}],n=[{name:s.Ay.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword","Enabled","OnlineStatus","BotBehaviour"]},{name:s.Ay.i18n.translate("security"),fields:["PasswordFormat","UseLoginKeys"]},{name:s.Ay.i18n.translate("access"),fields:["SteamUserPermissions","SteamParentalCode"]},{name:s.Ay.i18n.translate("trade"),fields:["SteamTradeToken","AcceptGifts","TradeCheckPeriod","SendTradePeriod","CompleteTypesToSend","TradingPreferences","LootableTypes","TransferableTypes","MatchableTypes"]},{name:s.Ay.i18n.translate("farming"),fields:["FarmingPreferences","FarmingOrders"]},{name:s.Ay.i18n.translate("customization"),fields:["RemoteCommunication","SteamMasterClanID","UserInterfaceMode","OnlineFlags","RedeemingPreferences","GamesPlayedWhileIdle","CustomGamePlayedWhileFarming","CustomGamePlayedWhileIdle"]},{name:s.Ay.i18n.translate("performance"),fields:["HoursUntilCardDrops"]}],r=[{name:s.Ay.i18n.translate("basic"),fields:["Name","SteamLogin","SteamPassword"]}],o=[{name:s.Ay.i18n.translate("general"),fields:[s.Ay.i18n.translate("default-page"),s.Ay.i18n.translate("notification-position"),s.Ay.i18n.translate("notify-release"),s.Ay.i18n.translate("display-categories"),s.Ay.i18n.translate("tooltip-delay")]},{name:s.Ay.i18n.translate("bots"),fields:[s.Ay.i18n.translate("bot-nicknames"),s.Ay.i18n.translate("bot-game-name"),s.Ay.i18n.translate("bot-order-numeric"),s.Ay.i18n.translate("bot-order-disabled"),s.Ay.i18n.translate("bot-fav-buttons")]},{name:s.Ay.i18n.translate("commands"),fields:[s.Ay.i18n.translate("timestamps")]},{name:s.Ay.i18n.translate("log"),fields:[s.Ay.i18n.translate("log-previous-amount"),s.Ay.i18n.translate("log-information"),s.Ay.i18n.translate("log-timestamp")]}]},5709:(e,t,a)=>{var s=a(1601),i=a(6314)(s);i.push([e.id,".main-container--bot-copy{max-width:1000px}.container-description{text-align:center;margin-bottom:2em}",""]),e.exports=i},6193:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=function(){var e=this,t=e._self._c;return e.bot?t("main",{staticClass:"main-container main-container--bot-copy"},[t("h2",{staticClass:"title"},[e._v(e._s(e.$t("bot-new")))]),e._v(" "),t("div",{staticClass:"container"},[t("p",{staticClass:"container-description"},[e._v(e._s(e.$t("bot-new-copy",{name:e.bot.name})))]),e._v(" "),t("ConfigEditor",{attrs:{fields:e.fields,model:e.model,categories:e.displayCategories?e.categories:null}}),e._v(" "),t("div",{staticClass:"form-item"},[t("div",{staticClass:"form-item__buttons"},[t("button",{staticClass:"button button--confirm",on:{click:e.onCreate}},[e.creating?t("FontAwesomeIcon",{attrs:{icon:"spinner",spin:""}}):t("span",[e._v(e._s(e.$t("create")))])],1),e._v(" "),t("router-link",{attrs:{custom:"",to:{name:"bot-config",params:{bot:e.bot.name}}},scopedSlots:e._u([{key:"default",fn:function({navigate:a}){return[t("button",{staticClass:"button button--cancel pull-right",on:{click:a}},[e._v(e._s(e.$t("cancel")))])]}}],null,!1,3333242122)})],1)])],1)]):e._e()};s._withStripped=!0;var i=a(5353),n=a(9872),r=a(9432),o=a(7058),l=a(2822),m=a(3909);const d={name:"BotCopy",components:{ConfigEditor:n.A},data(){const e=[{defaultValue:"",param:"Name",paramName:"Name",type:"string",description:this.$t("name-description")},{defaultValue:"",param:"SteamLogin",paramName:"SteamLogin",type:"string",description:(0,l.Jt)(`cache:parameter-descriptions:${this.$i18n.locale}`).descriptions.SteamLogin},{defaultValue:"",param:"SteamPassword",paramName:"SteamPassword",type:"string",description:(0,l.Jt)(`cache:parameter-descriptions:${this.$i18n.locale}`).descriptions.SteamPassword}];return{creating:!1,categories:m.WL,fields:e,model:{}}},computed:{...(0,i.L8)({displayCategories:"settings/displayCategories",bots:"bots/bots"}),bot(){return this.$store.getters["bots/bot"](this.$route.params.bot)}},watch:{$route:{immediate:!0,async handler(){this.bot&&(this.model=this.bot.config)}}},created(){this.bot||this.$router.replace({name:"bots"})},methods:{async onCreate(){if(this.creating)return;const e=JSON.parse(JSON.stringify(this.model));if(delete e.Name,this.model.Name)if("ASF"!==this.model.Name)if((0,o.A)(this.bots,this.model.Name))this.$error(this.$t("bot-create-name-exist",{name:this.model.Name}));else{this.creating=!0;try{await this.$http.post(`bot/${this.model.Name}`,{botConfig:e}),await(0,r.A)(1e3),await this.$store.dispatch("bots/updateBot",{name:this.model.Name}),this.$parent.close()}catch(e){this.$error(e.message)}finally{this.creating=!1}}else this.$error(this.$t("bot-create-name-asf"));else this.$error(this.$t("bot-create-name"))}}};a(1694);const c=(0,a(4486).A)(d,s,[],!1,null,null,null).exports},1694:(e,t,a)=>{var s=a(5709);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,a(534).A)("5ccf1cce",s,!1,{})}}]);