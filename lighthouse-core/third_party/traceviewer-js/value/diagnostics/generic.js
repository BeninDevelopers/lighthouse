"use strict";require("./diagnostic.js");'use strict';global.tr.exportTo('tr.v.d',function(){class Generic extends tr.v.d.Diagnostic{constructor(value){super();this.value=value;}asDictInto_(d){d.value=this.value;}static fromDict(d){return new Generic(d.value);}}tr.v.d.Diagnostic.register(Generic,{elementName:'tr-v-ui-generic-diagnostic-span'});return{Generic:Generic};});