"use strict";var _defineProperty=function(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0})},onChange="__onChange";module.exports=function(n){return _defineProperty({getInitialState:function(){return n.getState()},componentWillMount:function(){n.listen(this[onChange])},componentWillUnmount:function(){n.unlisten(this[onChange])}},onChange,function(){this.setState(n.getState())})};
//# sourceMappingURL=../mixins/symbiosis-mixin.js.map