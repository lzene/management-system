(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-567e1fac","chunk-2d2163e7"],{"70c7":function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return n});a("7f7f"),a("ac6a");var l=a("8bbf"),i=a.n(l);function s(t,e){var a=12,l=!1;return e&&(a=14,l=!0),{alignment:{horizontal:t,vertical:"center"},font:{name:"仿宋",sz:a,color:"#000000",bold:l}}}function n(t,e,l){var n={SheetNames:[],Sheets:{}},o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e.forEach(function(t,e){var a={};i.a.set(a,"!cols",[]),i.a.set(a,"!merges",[{s:{c:0,r:0},e:{c:l.length-1,r:0}}]),i.a.set(a,"A1",{v:t.name,s:s("center",!0)});var g=2;l.forEach(function(t,e){a["!cols"].push({wch:parseInt(t.width)/8}),i.a.set(a,o[e]+g,{v:t.label?t.label:t.prop,s:s(t.align?t.align:"center")})}),t.list.forEach(function(t,e){g++,l.forEach(function(e,l){var n,r=e.prop.indexOf("/");if(-1!=r){var d=e.prop.substring(0,r),c=e.prop.substring(r+1,e.prop.length);n="".concat(t[d],"\n").concat(t[c])}else n=t[e.prop];i.a.set(a,o[l]+g,{v:n,s:s(e.align?e.align:"center"),t:1==e.number?"n":""})})}),i.a.set(a,"!ref","A1:"+o[l.length-1]+g),n.SheetNames.push(t.name),i.a.set(n.Sheets,t.name,a)}),a("eaf2").default(t,n)}},c246:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return i});var l=a("c0d6");function i(){var t=l["a"].getters.getLanguage,e=[{width:"220",prop:"username",align:"right",label:t.userName},{width:"220",prop:"email",align:"right",label:t.email},{width:"220",prop:"remarks",align:"right",label:t.remarks}];return e}},e678:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("mt",[t._v(t._s(t.language[t.$options.name]))]),a("el-row",{staticClass:"padding1vw alnrit",staticStyle:{height:"5%"}},[a("el-col",{staticClass:"margin1vw-t",attrs:{xs:24,sm:24,md:12,lg:14,xl:16}},[t._v("\n            "+t._s(t.language.tableSingMultUsage)+"：\n            "),a("el-radio-group",{model:{value:t.tableSingMultUsageMode,callback:function(e){t.tableSingMultUsageMode=e},expression:"tableSingMultUsageMode"}},[a("el-radio-button",{attrs:{label:"multiple"}},[t._v(t._s(t.language.multipleSelect))]),a("el-radio-button",{attrs:{label:"single"}},[t._v(t._s(t.language.singleSelect))])],1)],1),a("el-col",{staticClass:"margin1vw-t",attrs:{xs:24,sm:24,md:12,lg:10,xl:8}},[a("mdb",{staticClass:"margin1vw-r",attrs:{tooltip:t.language.excelSelectRecordedInfoTooltip,disabled:t.buttonSelectDisabled},on:{click:t.exportSelectItemFun}},[t._v(t._s(t.language.exportSelectItem))]),a("mdb",{attrs:{disabled:t.buttonSelectDisabled},on:{click:t.showLastSelectFun}},[t._v(t._s(t.language.showLastSelect))])],1)],1),a("el-row",{staticClass:"padding1vw",staticStyle:{height:"80%"}},[a("el-col",{staticClass:"margin1vw-t h100",attrs:{xs:24,sm:24,md:12,lg:14,xl:16}},[a("UiPageTable",{ref:"tableSingMultUsage",attrs:{tableData:t.dataList,TableConfig:t.TableConfig,PageConfig:t.PageConfig,DataConfig:t.DataConfig},on:{clickPage:t.clickPage,select:t.selectTable}})],1),a("el-col",{staticClass:"margin1vw-t h100",attrs:{xs:24,sm:24,md:12,lg:10,xl:8}},[a("el-form",{attrs:{"label-width":"50%"}},[a("el-form-item",[a("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"}),t._v("\n                    "+t._s(t.language.addExportItem)+"\n                ")]),a("el-form-item",[a("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.tableItemShowWidth))]),a("el-input-number",{staticClass:"width50",attrs:{min:100,max:400},model:{value:t.addDataConfigFormItem.width,callback:function(e){t.$set(t.addDataConfigFormItem,"width",e)},expression:"addDataConfigFormItem.width"}})],1),a("el-form-item",[a("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.tableItemShowTh))]),a("el-input",{staticClass:"width50",model:{value:t.addDataConfigFormItem.label,callback:function(e){t.$set(t.addDataConfigFormItem,"label",e)},expression:"addDataConfigFormItem.label"}})],1),a("el-form-item",[a("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.tableItemShowValue))]),a("el-input",{staticClass:"width50",model:{value:t.addDataConfigFormItem.prop,callback:function(e){t.$set(t.addDataConfigFormItem,"prop",e)},expression:"addDataConfigFormItem.prop"}})],1),a("el-form-item",[a("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.tableItemShowAlignMethod))]),a("el-radio-group",{model:{value:t.addDataConfigFormItem.align,callback:function(e){t.$set(t.addDataConfigFormItem,"align",e)},expression:"addDataConfigFormItem.align"}},[a("el-radio-button",{attrs:{label:"left"}}),a("el-radio-button",{attrs:{label:"center"}}),a("el-radio-button",{attrs:{label:"right"}})],1)],1),a("el-form-item",[a("span",{staticClass:"emphasize",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.language.isExpandItem))]),a("el-radio-group",{model:{value:t.addDataConfigFormItem.type,callback:function(e){t.$set(t.addDataConfigFormItem,"type",e)},expression:"addDataConfigFormItem.type"}},[a("el-radio-button",{attrs:{label:"expand"}},[t._v(t._s(t.language.expand))]),a("el-radio-button",{attrs:{label:"common"}},[t._v(t._s(t.language.common))])],1)],1),a("el-form-item",[a("mdb",{attrs:{tooltip:t.language.isTableItemShowValueNullNotAddTooltip,disabled:""==t.addDataConfigFormItem.prop},on:{click:t.tableExpandUsageAddTableItemFun}},[t._v(t._s(t.language.sureAdd))])],1)],1)],1)],1),a(t.is,{tag:"component",attrs:{show:t.dialogShow,data:t.dialogData},on:{onColse:t.onColse}})],1)},i=[],s=(a("8615"),a("7f7f"),a("ac6a"),a("456d"),{mixins:[a("a496").default],name:"tableSingMultUsage",data:function(){return{TableConfig:{border:!0,stripe:!0,highlight:!0,multiple:!1,single:!1,disabled:!1},page:1,pageSize:30,total:0,dataList:[],selectTableItem:null,addDataConfig:[],addDataConfigForm:{},addDataConfigFormItem:{width:220,prop:"export",align:"left",label:"addTest",type:"common"},tableSingMultUsageMode:"single",TableSingMultUsageDataConfig:a("c246").default(),dialogData:{},dialogShow:!1,is:"TableSingMultUsageDialog"}},components:{UiPageTable:function(){return a.e("chunk-2d224900").then(a.bind(null,"e153"))},TableSingMultUsageDialog:function(){return a.e("chunk-2d0d61c1").then(a.bind(null,"70c5"))}},watch:{tableSingMultUsageMode:{deep:!0,immediate:!0,handler:function(t,e){this.$set(this.TableConfig,"multiple",!1),this.$set(this.TableConfig,"single",!1),this.$set(this.TableConfig,t,!0)}}},computed:{buttonSelectDisabled:function(){return 1==this.TableConfig.single&&null!=this.selectTableItem?!this.selectTableItem.hasOwnProperty("username"):1!=this.TableConfig.multiple||null==this.selectTableItem||!this.selectTableItem.length>0},PageConfig:function(){return{total:this.total,size:this.pageSize}},addRequestDataConfig:function(){var t=["username","email","remarks"];return t.concat(Object.keys(this.addDataConfigForm))},DataConfig:function(){return this.TableSingMultUsageDataConfig.concat(this.addDataConfig)}},methods:{onColse:function(t){this.dialogShow=t},showLastSelectFun:function(){1==this.TableConfig.single&&null!=this.selectTableItem?this.dialogData=this.selectTableItem:1==this.TableConfig.multiple&&null!=this.selectTableItem&&(this.dialogData=this.selectTableItem[this.selectTableItem.length-1]),this.dialogShow=!0},exportSelectItemFun:function(){var t=[];1==this.TableConfig.single&&null!=this.selectTableItem?t=[this.selectTableItem]:1==this.TableConfig.multiple&&null!=this.selectTableItem&&(t=this.selectTableItem),a("70c7").default(this.language[this.$options.name],[{name:this.language[this.$options.name],list:t}],this.DataConfig)},tableExpandUsageAddTableItemFun:function(){var t=this.$avoid(this.addDataConfigFormItem);this.$set(this.addDataConfigForm,this.addDataConfigFormItem.prop,t),this.addDataConfig=Object.values(this.addDataConfigForm),this.$refs.tableSingMultUsage.resetPage()},clickPage:function(t,e){this.page=t,this.pageSize=e,this.getRequest()},selectTable:function(t){if(1==this.TableConfig.single){var e=t.length;this.selectTableItem=e>0?this.$avoid(t[e-1]):{}}else 1==this.TableConfig.multiple&&(this.selectTableItem=t)},getRequest:function(){var t=this;this.post("/data/table",{page:this.page,pageSize:this.pageSize,data:this.addRequestDataConfig}).then(function(e){t.dataList=e.data,t.total=e.total})}},mounted:function(){this.getRequest()}}),n=s,o=a("2877"),g=Object(o["a"])(n,l,i,!1,null,null,null);e["default"]=g.exports}}]);