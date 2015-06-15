Ext.data.JsonP.ama_controllers_TodoDetailCtrl({"tagname":"class","name":"ama.controllers.TodoDetailCtrl","autodetected":{},"files":[{"filename":"todoDetailCtrl.js","href":"todoDetailCtrl.html#ama-controllers-TodoDetailCtrl"}],"members":[{"name":"deleteTodo","tagname":"method","owner":"ama.controllers.TodoDetailCtrl","id":"method-deleteTodo","meta":{}},{"name":"getStateParams","tagname":"method","owner":"ama.controllers.TodoDetailCtrl","id":"method-getStateParams","meta":{}},{"name":"moveItem","tagname":"method","owner":"ama.controllers.TodoDetailCtrl","id":"method-moveItem","meta":{}},{"name":"nextStep","tagname":"method","owner":"ama.controllers.TodoDetailCtrl","id":"method-nextStep","meta":{}},{"name":"orderChanged","tagname":"method","owner":"ama.controllers.TodoDetailCtrl","id":"method-orderChanged","meta":{}},{"name":"removeItemFromDocument","tagname":"method","owner":"ama.controllers.TodoDetailCtrl","id":"method-removeItemFromDocument","meta":{}},{"name":"todoItemChanged","tagname":"method","owner":"ama.controllers.TodoDetailCtrl","id":"method-todoItemChanged","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ama.controllers.TodoDetailCtrl","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl' target='_blank'>todoDetailCtrl.js</a></div></pre><div class='doc-contents'><p>Controller for the todoDetail view.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-deleteTodo' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.TodoDetailCtrl'>ama.controllers.TodoDetailCtrl</span><br/><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl-method-deleteTodo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.TodoDetailCtrl-method-deleteTodo' class='name expandable'>deleteTodo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Deletes the current todolist via DeleteService ...</div><div class='long'><p>Deletes the current todolist via <a href=\"#!/api/ama.services.DeleteService\" rel=\"ama.services.DeleteService\" class=\"docClass\">DeleteService</a></p>\n</div></div></div><div id='method-getStateParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.TodoDetailCtrl'>ama.controllers.TodoDetailCtrl</span><br/><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl-method-getStateParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.TodoDetailCtrl-method-getStateParams' class='name expandable'>getStateParams</a>( <span class='pre'>forState</span> ) : {referrer: string, referrerParams: {id: ($stateParams.id|*)}, for: string, forId: ($stateParams.id|*)}<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates a stateParams object from the current stateParams for a certain state ...</div><div class='long'><p>Generates a stateParams object from the current stateParams for a certain state</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>forState</span> : string<div class='sub-desc'><p>The state for which the stateParams should be generated</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>{referrer: string, referrerParams: {id: ($stateParams.id|*)}, for: string, forId: ($stateParams.id|*)}</span><div class='sub-desc'><p>The stateParams for the state to be transitioned to, generated from the current stateParams.</p>\n</div></li></ul></div></div></div><div id='method-moveItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.TodoDetailCtrl'>ama.controllers.TodoDetailCtrl</span><br/><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl-method-moveItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.TodoDetailCtrl-method-moveItem' class='name expandable'>moveItem</a>( <span class='pre'>item</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Moves the specified item to another todolist by calling the moveItem() function in ItemService ...</div><div class='long'><p>Moves the specified item to another todolist by calling <a href=\"#!/api/ama.services.ItemService-method-moveItem\" rel=\"ama.services.ItemService-method-moveItem\" class=\"docClass\">the moveItem() function in ItemService</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p>The item to be moved.</p>\n</div></li></ul></div></div></div><div id='method-nextStep' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.TodoDetailCtrl'>ama.controllers.TodoDetailCtrl</span><br/><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl-method-nextStep' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.TodoDetailCtrl-method-nextStep' class='name expandable'>nextStep</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens a NextStepModal. ...</div><div class='long'><p>Opens a <a href=\"#!/api/ama.services.NextStepModal\" rel=\"ama.services.NextStepModal\" class=\"docClass\">NextStepModal</a>.</p>\n</div></div></div><div id='method-orderChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.TodoDetailCtrl'>ama.controllers.TodoDetailCtrl</span><br/><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl-method-orderChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.TodoDetailCtrl-method-orderChanged' class='name expandable'>orderChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets called when the ordering of the items in the todolist was changed. ...</div><div class='long'><p>Gets called when the ordering of the items in the todolist was changed.\nUses <a href=\"#!/api/ama.services.ItemService-method-changeOrdering\" rel=\"ama.services.ItemService-method-changeOrdering\" class=\"docClass\">the changeOrdering() function in the ItemService</a> to apply the new ordering on the server\nThis changes the todo_order property of the items.</p>\n</div></div></div><div id='method-removeItemFromDocument' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.TodoDetailCtrl'>ama.controllers.TodoDetailCtrl</span><br/><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl-method-removeItemFromDocument' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.TodoDetailCtrl-method-removeItemFromDocument' class='name expandable'>removeItemFromDocument</a>( <span class='pre'>item</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a given item from the document ...</div><div class='long'><p>Removes a given item from the document</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p>The item to be removed</p>\n</div></li></ul></div></div></div><div id='method-todoItemChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.TodoDetailCtrl'>ama.controllers.TodoDetailCtrl</span><br/><a href='source/todoDetailCtrl.html#ama-controllers-TodoDetailCtrl-method-todoItemChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.TodoDetailCtrl-method-todoItemChanged' class='name expandable'>todoItemChanged</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reloads the todoList ...</div><div class='long'><p>Reloads the todoList</p>\n</div></div></div></div></div></div></div>","meta":{}});