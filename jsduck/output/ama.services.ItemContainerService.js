Ext.data.JsonP.ama_services_ItemContainerService({"tagname":"class","name":"ama.services.ItemContainerService","autodetected":{},"files":[{"filename":"itemContainerService.js","href":"itemContainerService.html#ama-services-ItemContainerService"}],"members":[{"name":"createItemContainer","tagname":"method","owner":"ama.services.ItemContainerService","id":"method-createItemContainer","meta":{}},{"name":"updateLocalStorage","tagname":"method","owner":"ama.services.ItemContainerService","id":"method-updateLocalStorage","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ama.services.ItemContainerService","short_doc":"ItemContainerService\n\nHolds functions to manage documents that have items associated (item containers). ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/itemContainerService.html#ama-services-ItemContainerService' target='_blank'>itemContainerService.js</a></div></pre><div class='doc-contents'><h1>ItemContainerService</h1>\n\n<p>Holds functions to manage documents that have items associated (item containers).</p>\n\n<p>Remember: the term 'item' refers to a single piece of an offer/contract/list of todos/acceptance/invoice</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createItemContainer' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.services.ItemContainerService'>ama.services.ItemContainerService</span><br/><a href='source/itemContainerService.html#ama-services-ItemContainerService-method-createItemContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.services.ItemContainerService-method-createItemContainer' class='name expandable'>createItemContainer</a>( <span class='pre'>type, projectId, newContainer</span> ) : promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an item container of given type for a given project ...</div><div class='long'><p>Creates an item container of given type for a given project</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : string<div class='sub-desc'><p>One of: 'offer', 'contract', 'accepatance', 'invoice', 'reminder'</p>\n</div></li><li><span class='pre'>projectId</span> : string|int<div class='sub-desc'><p>The id of the current project</p>\n</div></li><li><span class='pre'>newContainer</span> : Object<div class='sub-desc'><p>The new item container to be posted to the API.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>promise</span><div class='sub-desc'><p>A promise containing the newly crated item container or an error object.</p>\n</div></li></ul></div></div></div><div id='method-updateLocalStorage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.services.ItemContainerService'>ama.services.ItemContainerService</span><br/><a href='source/itemContainerService.html#ama-services-ItemContainerService-method-updateLocalStorage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.services.ItemContainerService-method-updateLocalStorage' class='name expandable'>updateLocalStorage</a>( <span class='pre'>type, projectId, container</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Updates the local storage entry of an given item container ...</div><div class='long'><p>Updates the <a href=\"#!/api/ama.services.LocalStorage\" rel=\"ama.services.LocalStorage\" class=\"docClass\">local storage</a> entry of an given item container</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : string<div class='sub-desc'><p>The type of the given item container (offer/contract/acceptance/invoice/reminder)</p>\n</div></li><li><span class='pre'>projectId</span> : int|string<div class='sub-desc'><p>The ID of the current project</p>\n</div></li><li><span class='pre'>container</span> : object<div class='sub-desc'><p>The container to update the entry for</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});