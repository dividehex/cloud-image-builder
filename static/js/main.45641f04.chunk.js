(this["webpackJsonpcloud-image-builder-react"]=this["webpackJsonpcloud-image-builder-react"]||[]).push([[0],{18:function(t,e,a){t.exports=a(25)},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),i=(a(23),a(24),a(9)),u=a(1),c=a(2),l=a(4),p=a(3),m=a(17),h=a(10),f=a(13),d=a(15),g=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={artifacts:[],images:[]},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch(this.props.rootUrl+"/api/queue/v1/task/"+this.props.taskId+"/runs/"+this.props.run.runId+"/artifacts").then((function(t){return t.json()})).then((function(e){if(e.artifacts&&e.artifacts.length){if(t.setState((function(t){return{artifacts:e.artifacts}})),e.artifacts.some((function(t){return t.name.startsWith("public/")&&t.name.endsWith(".json")}))){var a=e.artifacts.find((function(t){return t.name.startsWith("public/")&&t.name.endsWith(".json")}));fetch(t.props.rootUrl+"/api/queue/v1/task/"+t.props.taskId+"/runs/"+t.props.run.runId+"/artifacts/"+a.name).then((function(t){return t.json()})).then((function(e){e.launchConfigs&&e.launchConfigs.length?t.setState((function(t){return{images:e.launchConfigs.map((function(t){return t.storageProfile.imageReference.id}))}})):console.log(e)})).catch(console.log)}}else console.log(e)})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("li",{style:{color:"completed"===this.props.run.state?"green":"failed"===this.props.run.state?"red":"exception"===this.props.run.state?"orange":"gray"}},r.a.createElement("a",{href:this.props.rootUrl+"/tasks/"+this.props.taskId},this.props.taskId,"/",this.props.run.runId)," ",this.props.run.state,"completed"===this.props.run.state?r.a.createElement("ul",null,this.state.images.map((function(t){return r.a.createElement("li",{key:t},t.substring(t.lastIndexOf("/")+1))}))):"")}}]),a}(r.a.Component),k=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("ul",null,this.props.runs.map((function(e){return r.a.createElement(g,{run:e,key:e.runId,taskId:t.props.taskId,rootUrl:t.props.rootUrl})})))}}]),a}(r.a.Component),b=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{style:{color:"completed"===this.props.task.status.state?"green":"failed"===this.props.task.status.state?"red":"exception"===this.props.task.status.state?"orange":"gray"}},this.props.task.task.metadata.name,r.a.createElement(k,{runs:this.props.task.status.runs,taskId:this.props.task.status.taskId,rootUrl:this.props.rootUrl}))}}]),a}(r.a.Component),v=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("ul",null,this.props.tasks.map((function(e){return r.a.createElement(b,{task:e,key:e.status.taskId,rootUrl:t.props.rootUrl})})))}}]),a}(r.a.Component),y=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={showAllTasks:!1,taskGroupId:null,taskCount:0,tasks:[],builds:[],travisApiResponse:{}},t.travisBuildResults=["completed","failed"],t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;switch(this.props.status.context){case"continuous-integration/travis-ci/push":var e=new URL(this.props.status.target_url).pathname,a=e.substring(e.lastIndexOf("/")+1);this.setState((function(t){return{taskGroupId:a}})),fetch("https://api.travis-ci.org/repos/mozilla-platform-ops/cloud-image-builder/builds/"+a).then((function(t){return t.json()})).then((function(e){e.matrix&&t.setState((function(t){return{taskCount:e.matrix.length,builds:e.matrix,travisApiResponse:e}}))})).catch(console.log);break;default:var n=new URL(this.props.status.target_url),r=this.props.status.target_url.substring(this.props.status.target_url.lastIndexOf("/")+1);this.setState((function(t){return{taskGroupId:r}}));var s="https://"+n.hostname+"/api/queue/v1/task-group/"+r+"/list";fetch(s).then((function(t){return t.json()})).then((function(e){e.tasks&&e.tasks.length&&t.setState((function(t){return{taskCount:e.tasks.length,tasks:e.tasks}}))})).catch(console.log)}}},{key:"render",value:function(){var t=this;return r.a.createElement("li",{style:{color:"success"===this.props.status.state?"green":"failure"===this.props.status.state?"red":"gray"}},new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"numeric",timeZoneName:"short"}).format(new Date(this.props.status.updated_at)),"\xa0",this.props.status.description.toLowerCase(),"\xa0 (",this.state.taskCount," tasks in group ",r.a.createElement("a",{href:this.props.status.target_url,title:this.state.taskGroupId},this.state.taskGroupId&&this.state.taskGroupId.substring(0,7),"..."),"\xa0 [",["completed","failed","exception","running","pending","unscheduled"].map((function(e){return t.state.tasks.filter((function(t){return t.status.state===e})).length?r.a.createElement("span",{style:{color:"completed"===e?"green":"failed"===e?"red":"exception"===e?"orange":"pending"===e?"darkorchid":"running"===e?"steelblue":"unscheduled"===e?"gray":"black"}},"\xa0",e,": ",t.state.tasks.filter((function(t){return t.status.state===e})).length,"\xa0"):""})),[0,1].map((function(e){return t.state.builds.filter((function(t){return t.result===e})).length?r.a.createElement("span",{style:{color:0===e?"green":1===e?"red":"black"}},"\xa0",t.travisBuildResults[e],": ",t.state.builds.filter((function(t){return t.result===e})).length,"\xa0"):""})),"] )",this.state.showAllTasks?r.a.createElement(v,{tasks:this.state.tasks,rootUrl:"https://"+new URL(this.props.status.target_url).hostname}):r.a.createElement("ul",null,this.state.tasks.filter((function(t){return t.task.metadata.name.startsWith("04 :: generate")})).map((function(e){return r.a.createElement(b,{task:e,rootUrl:"https://"+new URL(t.props.status.target_url).hostname})}))))}}]),a}(r.a.Component),j=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("ul",null,this.props.contexts.map((function(e,a){return r.a.createElement("li",{key:a},e,r.a.createElement("ul",null,t.props.statuses.some((function(t){return t.context===e&&"pending"!==t.state}))?t.props.statuses.filter((function(t){return t.context===e&&"pending"!==t.state})).map((function(t){return r.a.createElement(y,{status:t,key:t.id})})):t.props.statuses.filter((function(t){return t.context===e})).map((function(t){return r.a.createElement(y,{status:t,key:t.id})}))))})))}}]),a}(r.a.Component),O=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={contexts:[],statuses:[]},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("localhost"===window.location.hostname?"http://localhost:8010/proxy/repos/mozilla-platform-ops/cloud-image-builder/commits/"+this.props.commit.sha+"/statuses":"https://grenade-cors-proxy.herokuapp.com/https://api.github.com/repos/mozilla-platform-ops/cloud-image-builder/commits/"+this.props.commit.sha+"/statuses").then((function(t){return t.json()})).then((function(e){e.length&&t.setState((function(t){return{contexts:Object(m.a)(new Set(e.map((function(t){return t.context})))).sort((function(t,e){return t.toLowerCase().localeCompare(e.toLowerCase())})),statuses:e}}))})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("li",{style:{marginTop:"10px"}},r.a.createElement(f.a,null,r.a.createElement(h.a,{style:{width:"100%"}},r.a.createElement(h.a.Header,null,r.a.createElement("a",{href:this.props.commit.url},this.props.commit.sha.substring(0,7)),"\xa0",new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"numeric",timeZoneName:"short"}).format(new Date(this.props.commit.committer.date)),r.a.createElement(d.a,{src:this.props.commit.author.avatar,alt:this.props.commit.author.name,title:this.props.commit.author.name,rounded:!0,style:{width:"30px",height:"30px",marginLeft:"10px"},className:"float-right"}),r.a.createElement("span",{className:"float-right"},this.props.commit.author.username)),r.a.createElement(h.a.Body,null,r.a.createElement("pre",null,this.props.commit.message.join("\n")),r.a.createElement(j,{contexts:this.state.contexts,statuses:this.state.statuses})))))}}]),a}(r.a.Component),E=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{style:{listStyle:"none",marginLeft:"0",paddingLeft:"0"}},this.props.commits.map((function(t){return r.a.createElement(O,{commit:t,key:t.sha})})))}}]),a}(r.a.Component),w=a(16),x=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={commits:[]},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("localhost"===window.location.hostname?"http://localhost:8010/proxy/repos/mozilla-platform-ops/cloud-image-builder/commits":"https://grenade-cors-proxy.herokuapp.com/https://api.github.com/repos/mozilla-platform-ops/cloud-image-builder/commits").then((function(t){return t.json()})).then((function(e){e.length?t.setState((function(t){return{commits:e.map((function(t){return{sha:t.sha,url:t.html_url,author:Object(i.a)(Object(i.a)({},t.commit.author),{id:t.author.id,username:t.author.login,avatar:t.author.avatar_url}),committer:Object(i.a)(Object(i.a)({},t.commit.committer),{id:t.committer.id,username:t.committer.login,avatar:t.committer.avatar_url}),message:t.commit.message.split("\n").filter((function(t){return""!==t})),verification:t.commit.verification}}))}})):console.log(e)})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement(E,{commits:this.state.commits}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.45641f04.chunk.js.map