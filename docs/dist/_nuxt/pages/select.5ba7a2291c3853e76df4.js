webpackJsonp([6],{FwgL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("MDD7"),o=a("kYSf"),s=a("VU/8")(n.a,o.a,!1,null,null,null);s.options.__file="pages/select.vue",t.default=s.exports},MDD7:function(e,t,a){"use strict";t.a={data:function(){return{selectedOption1:null,selectedOption2:null,options:["Option 1","Option 2  pppppppppppp","Option 3","Option 4"]}}}},kYSf:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"container",rawName:"v-container"}]},[a("h1",{attrs:{id:"main-header"}},[e._v("Select")]),a("p",[e._v("\n      The select item basically replaces the default html select.\n  ")]),a("h3",[e._v("Events")]),a("a-table",[a("thead",[a("tr",[a("td",[e._v("This component has no events")])])])]),a("h3",[e._v("Properties")]),a("a-table",[a("thead",[a("tr",[a("td",[e._v("Property")]),a("td",[e._v("Description")]),a("td",[e._v("Type of data")])])]),a("tbody",[a("tr",[a("td",[e._v("options")]),a("td",[e._v("An array with the available options")]),a("td",[e._v("Array of String")])]),a("tr",[a("td",[e._v("placeholder")]),a("td",[e._v("Text to show when no option is selected")]),a("td",[e._v("String")])])])]),a("h2",[e._v("Select")]),a("h3",[e._v("Example 1")]),a("p",[e._v("Options are passed in an array to the 'options' property")]),a("textarea",{directives:[{name:"verbatim",rawName:"v-verbatim"}]},[e._v('        \n      <a-select v-model="selectedOption1" :options="options" ></a-select>\n  ')]),a("p",[e._v("Leads to ")]),a("div",{staticClass:"example-content"},[a("a-select",{attrs:{options:e.options},model:{value:e.selectedOption1,callback:function(t){e.selectedOption1=t},expression:"selectedOption1"}})],1),a("h3",[e._v("Example 2")]),a("p",[e._v("The default placeholder can be replace by using the 'placeholder' property")]),a("textarea",{directives:[{name:"verbatim",rawName:"v-verbatim"}]},[e._v('        \n      <a-select v-model="selectedOption2" :options="options" :placeholder="\'My custom placeholder...\'"></a-select>\n  ')]),a("p",[e._v("Leads to ")]),a("div",{staticClass:"example-content"},[a("a-select",{attrs:{options:e.options,placeholder:"My custom placeholder..."},model:{value:e.selectedOption2,callback:function(t){e.selectedOption2=t},expression:"selectedOption2"}})],1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};t.a=o}});