(this.webpackJsonpcrudapp=this.webpackJsonpcrudapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(6),o=n.n(u),s=(n(12),n(1)),c=n(2),i=n(4),l=n(3),d=function(e){return r.a.createElement("form",{onSubmit:e.addCourse},r.a.createElement("input",{type:"text",value:e.current,onChange:e.updateCourse,required:!0}),r.a.createElement("input",{className:"btn",type:"submit",value:"Add Course"}))},p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,u=new Array(a),o=0;o<a;o++)u[o]=arguments[o];return(e=t.call.apply(t,[this].concat(u))).state={isEdit:!1},e.renderCourse=function(){return r.a.createElement("li",null,r.a.createElement("span",null,e.props.details.name),r.a.createElement("button",{onClick:function(){e.toggleState()}},"Edit"),r.a.createElement("button",{onClick:function(){e.props.deleteCourse(e.props.index)}},"Delete"))},e.toggleState=function(){var t=e.state.isEdit;e.setState({isEdit:!t})},e.updateItem=function(t){t.preventDefault(),e.props.editCourse(e.props.index,e.input.value),e.toggleState()},e.renderUpdate=function(){return r.a.createElement("form",{onSubmit:e.updateItem},r.a.createElement("input",{type:"text",ref:function(t){e.input=t},defaultValue:e.props.details.name}),r.a.createElement("button",null,"Update"))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.isEdit;return r.a.createElement(a.Fragment,null,e?this.renderUpdate():this.renderCourse())}}]),n}(a.Component),m=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={courses:[{name:"HTML"},{name:"CSS"},{name:"Python"}],current:""},e.updateCourse=function(t){e.setState({current:t.target.value})},e.addCourse=function(t){t.preventDefault();var n=e.state.current,a=e.state.courses;a.push({name:n}),e.setState({courses:a,current:""})},e.deleteCourse=function(t){var n=e.state.courses;n.splice(t,1),e.setState({courses:n})},e.editCourse=function(t,n){var a=e.state.courses;a[t].name=n,e.setState({courses:a})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.courses.map((function(t,n){return r.a.createElement(p,{details:t,key:n,index:n,update:e.handleChange,deleteCourse:e.deleteCourse,editCourse:e.editCourse})}));return r.a.createElement("section",{className:"App"},r.a.createElement("h2",null,"Add Course"),r.a.createElement(d,{current:this.state.current,updateCourse:this.updateCourse,addCourse:this.addCourse}),r.a.createElement("ul",null,t))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.3d068764.chunk.js.map