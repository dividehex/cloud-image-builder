(this["webpackJsonpcloud-image-builder-react"]=this["webpackJsonpcloud-image-builder-react"]||[]).push([[0],{28:function(t,e,a){t.exports=a(37)},34:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),r=a(16),i=a.n(r),u=(a(33),a(34),a(4)),o=a(5),c=a(6),m=a(8),l=a(7),p=a(27),d=a(10),h=a(20),f=a(17),g=a(12),k=a(18),y=a(25),v=a(14),b=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,this.props.message.filter((function(t){return!t.match(new RegExp("^(include|exclude) (environment|key|pool|region)s: .*$","i"))&&!t.match(new RegExp("^(pool-deploy|no-ci|no-taskcluster-ci|no-travis-ci)$","i"))})).map((function(t){return s.a.createElement("strong",null,t,s.a.createElement("br",null))})),this.props.message.some((function(t){return t.match(/^(include|exclude) (environment|key|pool|region)s: .*$/i)||t.match(/^(pool-deploy|no-ci|no-taskcluster-ci|no-travis-ci)$/i)}))?this.props.message.filter((function(t){return t.match(/^(pool-deploy|no-ci|no-taskcluster-ci|no-travis-ci)$/i)})).map((function(t){return s.a.createElement(g.a,{style:{marginRight:"0.7em"},variant:"pool-deploy"===t?"primary":"dark"},"pool-deploy"===t?"":s.a.createElement("span",null,s.a.createElement(v.c,null),"\xa0"),t)})):s.a.createElement(g.a,{variant:"warning"},"no commit syntax ci instructions"),["include","exclude"].map((function(e){return t.props.message.some((function(t){return t.match(new RegExp("^"+e+" (environment|key|pool|region)s: .*$","i"))}))?s.a.createElement("span",null,["environments","integrations","keys","pools","regions"].map((function(a){return t.props.message.filter((function(t){return t.startsWith(e+" "+a+": ")})).map((function(t){return t.replace(e+" "+a+": ","").split(", ").map((function(t){return s.a.createElement(g.a,{style:{marginRight:"0.7em"},variant:"include"===e?"info":"dark",title:e+" "+a.slice(0,-1)+": "+t},"include"===e?s.a.createElement(v.d,null):s.a.createElement(v.c,null),"\xa0",t)}))}))})),s.a.createElement("br",null)):""})))}}]),a}(s.a.Component),j=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).re=/^((north|south|east|west|(north-|south-|west-)?central)-us(-2)?)-(.*)-(win.*)-([a-f0-9]{7})-([a-f0-9]{7})$/i,t.state={domain:null,pool:null,region:null,sha:{bootstrap:null,disk:null}},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.image.substring(this.props.image.lastIndexOf("/")+1).match(this.re);this.setState((function(e){return{domain:t[5],pool:t[6],region:t[1],sha:{bootstrap:t[8],disk:t[7]}}}))}},{key:"render",value:function(){return s.a.createElement("li",null,this.state.region,"-",this.state.domain,"-",this.state.pool,"-",this.state.sha.disk,"-",this.state.sha.bootstrap)}}]),a}(s.a.Component),O=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"worker manager image deployments:"),s.a.createElement("ul",null,this.props.images.map((function(t){return s.a.createElement(j,{image:t,key:t})}))))}}]),a}(s.a.Component),x={completed:"success",failed:"danger",exception:"warning",running:"primary",pending:"info",unscheduled:"secondary"},E=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={summary:{task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:{}},artifacts:[],images:[]},n.appendToSummary=n.appendToSummary.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"appendToSummary",value:function(t){var e=this;this.setState((function(a){var n={task:{completed:a.summary.task.completed+t.task.completed,failed:a.summary.task.failed+t.task.failed,exception:a.summary.task.exception+t.task.exception,running:a.summary.task.running+t.task.running,pending:a.summary.task.pending+t.task.pending,unscheduled:a.summary.task.unscheduled+t.task.unscheduled},image:Object(u.a)(Object(u.a)({},a.summary.image),t.image)};return e.props.appender(n),{summary:n}}))}},{key:"componentDidMount",value:function(){var t=this;fetch(this.props.rootUrl+"/api/queue/v1/task/"+this.props.taskId+"/runs/"+this.props.run.runId+"/artifacts").then((function(t){return t.json()})).then((function(e){if(e.artifacts&&e.artifacts.length){if(t.setState((function(t){return{artifacts:e.artifacts}})),e.artifacts.some((function(t){return t.name.startsWith("public/")&&t.name.endsWith(".json")}))){var a=e.artifacts.find((function(t){return t.name.startsWith("public/")&&t.name.endsWith(".json")}));fetch(t.props.rootUrl+"/api/queue/v1/task/"+t.props.taskId+"/runs/"+t.props.run.runId+"/artifacts/"+a.name).then((function(t){return t.json()})).then((function(e){if(e.launchConfigs&&e.launchConfigs.length){var a=e.launchConfigs.map((function(t){return t.storageProfile.imageReference.id}));t.setState((function(t){return{images:a}}));var n=/^((north|south|east|west|(north-|south-|east-|west-)?central)-us(-2)?)-(.*)-(win.*)-([a-f0-9]{7})-([a-f0-9]{7})$/i;t.appendToSummary({task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:a.reduce((function(t,e,a){var s=e.substring(e.lastIndexOf("/")+1).match(n),r=s[5]+"/"+s[6];return t[r]=(t[r]||0)+1,t}),{})})}else console.log(e)})).catch(console.log)}}else console.log(e)})).catch(console.log)}},{key:"render",value:function(){return s.a.createElement("li",null,s.a.createElement(k.a,{size:"sm",href:this.props.rootUrl+"/tasks/"+this.props.taskId+"/runs/"+this.props.run.runId,style:{marginLeft:"0.7em"},variant:"outline-"+x[this.props.run.state],title:"task "+this.props.taskId+", run "+this.props.run.runId+": "+this.props.run.state},"task "+this.props.taskId+", run "+this.props.run.runId),"completed"===this.props.run.state&&this.state.images.length?s.a.createElement(O,{images:this.state.images}):"")}}]),a}(s.a.Component),S=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={summary:{task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:{}}},n.appendToSummary=n.appendToSummary.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"appendToSummary",value:function(t){var e=this;this.setState((function(a){var n={task:{completed:a.summary.task.completed+t.task.completed,failed:a.summary.task.failed+t.task.failed,exception:a.summary.task.exception+t.task.exception,running:a.summary.task.running+t.task.running,pending:a.summary.task.pending+t.task.pending,unscheduled:a.summary.task.unscheduled+t.task.unscheduled},image:Object(u.a)(Object(u.a)({},a.summary.image),t.image)};return e.props.appender(n),{summary:n}}))}},{key:"render",value:function(){var t=this;return s.a.createElement("ul",null,this.props.runs.map((function(e){return s.a.createElement(E,{run:e,key:e.runId,taskId:t.props.taskId,rootUrl:t.props.rootUrl,appender:t.appendToSummary})})))}}]),a}(s.a.Component),w=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={summary:{task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:{}}},n.appendToSummary=n.appendToSummary.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"appendToSummary",value:function(t){var e=this;this.setState((function(a){var n={task:{completed:a.summary.task.completed+t.task.completed,failed:a.summary.task.failed+t.task.failed,exception:a.summary.task.exception+t.task.exception,running:a.summary.task.running+t.task.running,pending:a.summary.task.pending+t.task.pending,unscheduled:a.summary.task.unscheduled+t.task.unscheduled},image:Object(u.a)(Object(u.a)({},a.summary.image),t.image)};return e.props.appender(n),{summary:n}}))}},{key:"render",value:function(){return s.a.createElement("li",null,this.props.task.task.metadata.name,"\xa0",s.a.createElement("a",{href:this.props.rootUrl+"/tasks/"+this.props.task.status.taskId,title:this.props.task.status.taskId},this.props.task.status.taskId.substring(0,7),"..."),s.a.createElement(S,{runs:this.props.task.status.runs,taskId:this.props.task.status.taskId,rootUrl:this.props.rootUrl,appender:this.appendToSummary}))}}]),a}(s.a.Component),T=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={summary:{task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:{}}},n.appendToSummary=n.appendToSummary.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"appendToSummary",value:function(t){var e=this;this.setState((function(a){var n={task:{completed:a.summary.task.completed+t.task.completed,failed:a.summary.task.failed+t.task.failed,exception:a.summary.task.exception+t.task.exception,running:a.summary.task.running+t.task.running,pending:a.summary.task.pending+t.task.pending,unscheduled:a.summary.task.unscheduled+t.task.unscheduled},image:Object(u.a)(Object(u.a)({},a.summary.image),t.image)};return e.props.appender(n),{summary:n}}))}},{key:"render",value:function(){var t=this;return s.a.createElement("ul",null,this.props.tasks.map((function(e){return s.a.createElement(w,{task:e,key:e.status.taskId,rootUrl:t.props.rootUrl,appender:t.appendToSummary})})))}}]),a}(s.a.Component),I=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={summary:{task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:{}},showAllTasks:!1,taskGroupId:null,taskCount:0,tasks:[],builds:[],travisApiResponse:{}},n.travisBuildResults=["completed","failed"],n.appendToSummary=n.appendToSummary.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"appendToSummary",value:function(t){var e=this;this.setState((function(a){var n={task:{completed:a.summary.task.completed+t.task.completed,failed:a.summary.task.failed+t.task.failed,exception:a.summary.task.exception+t.task.exception,running:a.summary.task.running+t.task.running,pending:a.summary.task.pending+t.task.pending,unscheduled:a.summary.task.unscheduled+t.task.unscheduled},image:Object(u.a)(Object(u.a)({},a.summary.image),t.image)};return e.props.appender(n),{summary:n}}))}},{key:"componentDidMount",value:function(){var t=this;switch(this.props.status.context){case"continuous-integration/travis-ci/push":var e=new URL(this.props.status.target_url).pathname,a=e.substring(e.lastIndexOf("/")+1);this.setState((function(t){return{taskGroupId:a}})),fetch("https://api.travis-ci.org/repos/mozilla-platform-ops/cloud-image-builder/builds/"+a).then((function(t){return t.json()})).then((function(e){e.matrix&&(t.setState((function(t){return{taskCount:e.matrix.length,builds:e.matrix,travisApiResponse:e}})),t.appendToSummary({task:{completed:e.matrix.filter((function(e){return"completed"===t.travisBuildResults[e.result]})).length,failed:e.matrix.filter((function(e){return"failed"===t.travisBuildResults[e.result]})).length,exception:0,running:0,pending:0,unscheduled:0},image:[]}))})).catch(console.log);break;default:var n=new URL(this.props.status.target_url),s=this.props.status.target_url.substring(this.props.status.target_url.lastIndexOf("/")+1);this.setState((function(t){return{taskGroupId:s}}));var r="https://"+n.hostname+"/api/queue/v1/task-group/"+s+"/list";fetch(r).then((function(t){return t.json()})).then((function(e){e.tasks&&e.tasks.length&&(t.setState((function(t){return{taskCount:e.tasks.length,tasks:e.tasks}})),t.appendToSummary({task:{completed:e.tasks.filter((function(t){return"completed"===t.status.state})).length,failed:e.tasks.filter((function(t){return"failed"===t.status.state})).length,exception:e.tasks.filter((function(t){return"exception"===t.status.state})).length,running:e.tasks.filter((function(t){return"running"===t.status.state})).length,pending:e.tasks.filter((function(t){return"pending"===t.status.state})).length,unscheduled:e.tasks.filter((function(t){return"unscheduled"===t.status.state})).length},image:[]}))})).catch(console.log)}}},{key:"render",value:function(){var t=this;return s.a.createElement("li",null,new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"numeric",timeZoneName:"short"}).format(new Date(this.props.status.updated_at)),"\xa0",this.props.status.description.toLowerCase(),"\xa0 (",this.state.taskCount," tasks in group \xa0",s.a.createElement("a",{href:this.props.status.target_url,title:this.state.taskGroupId},this.state.builds.length?this.state.taskGroupId:(this.state.taskGroupId&&this.state.taskGroupId.slice(0,7))+"..."),"\xa0",Object.keys(x).map((function(e){return t.state.tasks.filter((function(t){return t.status.state===e})).length?s.a.createElement(g.a,{style:{margin:"0 1px"},variant:x[e],title:e+": "+t.state.tasks.filter((function(t){return t.status.state===e})).length},t.state.tasks.filter((function(t){return t.status.state===e})).length):""})),[0,1].map((function(e){return t.state.builds.filter((function(t){return t.result===e})).length?s.a.createElement(g.a,{style:{margin:"0 1px"},variant:x[t.travisBuildResults[e]],title:t.travisBuildResults[e]+": "+t.state.builds.filter((function(t){return t.result===e})).length},t.state.builds.filter((function(t){return t.result===e})).length):""})),")",this.state.showAllTasks?s.a.createElement(T,{tasks:this.state.tasks,rootUrl:"https://"+new URL(this.props.status.target_url).hostname,appender:this.appendToSummary}):s.a.createElement("ul",null,this.state.tasks.filter((function(t){return t.task.metadata.name.startsWith("04 :: generate")&&"completed"===t.status.state})).map((function(e){return s.a.createElement(w,{task:e,rootUrl:"https://"+new URL(t.props.status.target_url).hostname,appender:t.appendToSummary})}))))}}]),a}(s.a.Component),C=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={summary:{task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:{}}},n.appendToSummary=n.appendToSummary.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"appendToSummary",value:function(t){var e=this;this.setState((function(a){var n={task:{completed:a.summary.task.completed+t.task.completed,failed:a.summary.task.failed+t.task.failed,exception:a.summary.task.exception+t.task.exception,running:a.summary.task.running+t.task.running,pending:a.summary.task.pending+t.task.pending,unscheduled:a.summary.task.unscheduled+t.task.unscheduled},image:Object(u.a)(Object(u.a)({},a.summary.image),t.image)};return e.props.appender(n),{summary:n}}))}},{key:"render",value:function(){var t=this;return s.a.createElement("ul",null,this.props.contexts.map((function(e,a){return s.a.createElement("li",{key:a},e,s.a.createElement("ul",null,t.props.statuses.some((function(t){return t.context===e&&"pending"!==t.state}))?t.props.statuses.filter((function(t){return t.context===e&&"pending"!==t.state})).map((function(e){return s.a.createElement(I,{status:e,key:e.id,appender:t.appendToSummary})})):t.props.statuses.filter((function(t){return t.context===e})).map((function(e){return s.a.createElement(I,{status:e,key:e.id,appender:t.appendToSummary})}))))})))}}]),a}(s.a.Component),R=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={summary:{task:{completed:0,failed:0,exception:0,running:0,pending:0,unscheduled:0},image:{}},contexts:[],statuses:[],expanded:!1},n.appendToSummary=n.appendToSummary.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"appendToSummary",value:function(t){this.setState((function(e){return{summary:{task:{completed:e.summary.task.completed+t.task.completed,failed:e.summary.task.failed+t.task.failed,exception:e.summary.task.exception+t.task.exception,running:e.summary.task.running+t.task.running,pending:e.summary.task.pending+t.task.pending,unscheduled:e.summary.task.unscheduled+t.task.unscheduled},image:Object(u.a)(Object(u.a)({},e.summary.image),t.image)}}}))}},{key:"componentDidMount",value:function(){var t=this;this.setState((function(e){return{expanded:t.props.expand}})),fetch("localhost"===window.location.hostname?"http://localhost:8010/proxy/repos/mozilla-platform-ops/cloud-image-builder/commits/"+this.props.commit.sha+"/statuses":"https://grenade-cors-proxy.herokuapp.com/https://api.github.com/repos/mozilla-platform-ops/cloud-image-builder/commits/"+this.props.commit.sha+"/statuses").then((function(t){return t.json()})).then((function(e){e.length&&t.setState((function(t){return{contexts:Object(p.a)(new Set(e.map((function(t){return t.context})))).sort((function(t,e){return t.toLowerCase().localeCompare(e.toLowerCase())})),statuses:e}}))})).catch(console.log)}},{key:"render",value:function(){var t=this;return s.a.createElement(h.a,{style:{width:"100%",marginTop:"10px"}},s.a.createElement(h.a.Header,null,s.a.createElement(f.a.Toggle,{as:k.a,variant:"link",eventKey:this.props.commit.sha,onClick:function(){t.setState((function(t){return{expanded:!t.expanded}}))}},this.state.expanded?s.a.createElement(v.a,null):s.a.createElement(v.b,null)),new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"numeric",timeZoneName:"short"}).format(new Date(this.props.commit.committer.date)),"\xa0",s.a.createElement("a",{href:this.props.commit.url},this.props.commit.sha.substring(0,7)),Object.keys(this.state.summary.task).filter((function(e){return t.state.summary.task[e]>0})).map((function(e){return s.a.createElement(g.a,{style:{marginLeft:"0.3em"},variant:x[e]},t.state.summary.task[e])})),Object.keys(this.state.summary.image).length?s.a.createElement("br",null):"",Object.keys(this.state.summary.image).filter((function(e){return t.state.summary.image[e]>0})).map((function(e){return s.a.createElement(k.a,{style:{marginLeft:"0.3em"},variant:"outline-info",size:"sm"},e," ",s.a.createElement(g.a,{variant:"info"},t.state.summary.image[e]))})),s.a.createElement(y.a,{src:this.props.commit.author.avatar,alt:this.props.commit.author.name,title:this.props.commit.author.name,rounded:!0,style:{width:"30px",height:"30px",marginLeft:"10px"},className:"float-right"}),s.a.createElement("span",{className:"float-right"},this.props.commit.author.username)),s.a.createElement(f.a.Collapse,{eventKey:this.props.commit.sha},s.a.createElement(h.a.Body,null,s.a.createElement(b,{message:this.props.commit.message}),s.a.createElement(C,{contexts:this.state.contexts,statuses:this.state.statuses,appender:this.appendToSummary}))))}}]),a}(s.a.Component),U=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(f.a,{defaultActiveKey:null},this.props.commits.map((function(t){return s.a.createElement(R,{commit:t,key:t.sha,expand:!1})})))}}]),a}(s.a.Component),L=a(26),_=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={commits:[]},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("localhost"===window.location.hostname?"http://localhost:8010/proxy/repos/mozilla-platform-ops/cloud-image-builder/commits":"https://grenade-cors-proxy.herokuapp.com/https://api.github.com/repos/mozilla-platform-ops/cloud-image-builder/commits").then((function(t){return t.json()})).then((function(e){e.length?t.setState((function(t){return{commits:e.map((function(t){return{sha:t.sha,url:t.html_url,author:Object(u.a)(Object(u.a)({},t.commit.author),{id:t.author.id,username:t.author.login,avatar:t.author.avatar_url}),committer:Object(u.a)(Object(u.a)({},t.commit.committer),{id:t.committer.id,username:t.committer.login,avatar:t.committer.avatar_url}),message:t.commit.message.split("\n").filter((function(t){return""!==t})),verification:t.commit.verification}})),latest:e[0].sha}})):console.log(e)})).catch(console.log)}},{key:"render",value:function(){return s.a.createElement(L.a,null,s.a.createElement(U,{commits:this.state.commits,latest:this.state.latest}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.2ec34b41.chunk.js.map