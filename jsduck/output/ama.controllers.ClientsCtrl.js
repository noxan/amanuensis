Ext.data.JsonP.ama_controllers_ClientsCtrl({"tagname":"class","name":"ama.controllers.ClientsCtrl","autodetected":{},"files":[{"filename":"clientsCtrl.js","href":"clientsCtrl.html#ama-controllers-ClientsCtrl"}],"members":[{"name":"clientList","tagname":"property","owner":"ama.controllers.ClientsCtrl","id":"property-clientList","meta":{}},{"name":"deleteCategoryLink","tagname":"method","owner":"ama.controllers.ClientsCtrl","id":"method-deleteCategoryLink","meta":{}},{"name":"deleteClient","tagname":"method","owner":"ama.controllers.ClientsCtrl","id":"method-deleteClient","meta":{}},{"name":"setClientList","tagname":"method","owner":"ama.controllers.ClientsCtrl","id":"method-setClientList","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ama.controllers.ClientsCtrl","short_doc":"Controller for the client (master) list view. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/clientsCtrl.html#ama-controllers-ClientsCtrl' target='_blank'>clientsCtrl.js</a></div></pre><div class='doc-contents'><p>Controller for the client (master) list view.\nGets the client list and holds functions to add and delete clients in the database.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-clientList' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.ClientsCtrl'>ama.controllers.ClientsCtrl</span><br/><a href='source/clientsCtrl.html#ama-controllers-ClientsCtrl-property-clientList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.ClientsCtrl-property-clientList' class='name expandable'>clientList</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An array containing all clients.</p>\n</div><div class='long'><p>An array containing all clients.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-deleteCategoryLink' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.ClientsCtrl'>ama.controllers.ClientsCtrl</span><br/><a href='source/clientsCtrl.html#ama-controllers-ClientsCtrl-method-deleteCategoryLink' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.ClientsCtrl-method-deleteCategoryLink' class='name expandable'>deleteCategoryLink</a>( <span class='pre'>client, category</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Delete the link between client and client category\nDEPRECATED: We manage this in the ClientCategoriesDialog controller. ...</div><div class='long'><p>Delete the link between client and client category\n<em>DEPRECATED:</em> We manage this in <a href=\"#!/api/ama.controllers.ClientCategoriesDialog\" rel=\"ama.controllers.ClientCategoriesDialog\" class=\"docClass\">the ClientCategoriesDialog controller</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>client</span> : Object<div class='sub-desc'><ul>\n<li>the client's id</li>\n</ul>\n\n</div></li><li><span class='pre'>category</span> : Object<div class='sub-desc'><ul>\n<li>the category</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-deleteClient' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.ClientsCtrl'>ama.controllers.ClientsCtrl</span><br/><a href='source/clientsCtrl.html#ama-controllers-ClientsCtrl-method-deleteClient' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.ClientsCtrl-method-deleteClient' class='name expandable'>deleteClient</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Deletes a client by given ID ...</div><div class='long'><p>Deletes a client by given ID</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'><p>{string} - Database ID of the client to be deleted</p>\n</div></li></ul></div></div></div><div id='method-setClientList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.ClientsCtrl'>ama.controllers.ClientsCtrl</span><br/><a href='source/clientsCtrl.html#ama-controllers-ClientsCtrl-method-setClientList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.ClientsCtrl-method-setClientList' class='name expandable'>setClientList</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Process the list of clients coming from the api after GET or DELETE request ...</div><div class='long'><p>Process the list of clients coming from the api after GET or DELETE request</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><ul>\n<li>the apiData object</li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});