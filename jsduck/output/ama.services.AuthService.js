Ext.data.JsonP.ama_services_AuthService({"tagname":"class","name":"ama.services.AuthService","autodetected":{},"files":[{"filename":"authService.js","href":"authService.html#ama-services-AuthService"}],"members":[{"name":"currentUser","tagname":"method","owner":"ama.services.AuthService","id":"method-currentUser","meta":{}},{"name":"isLoggedIn","tagname":"method","owner":"ama.services.AuthService","id":"method-isLoggedIn","meta":{}},{"name":"login","tagname":"method","owner":"ama.services.AuthService","id":"method-login","meta":{}},{"name":"logout","tagname":"method","owner":"ama.services.AuthService","id":"method-logout","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ama.services.AuthService","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/authService.html#ama-services-AuthService' target='_blank'>authService.js</a></div></pre><div class='doc-contents'><h1>Authentication Service</h1>\n\n<p>Provides functions to log in, log out and get the login state and the current user</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-currentUser' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.services.AuthService'>ama.services.AuthService</span><br/><a href='source/authService.html#ama-services-AuthService-method-currentUser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.services.AuthService-method-currentUser' class='name expandable'>currentUser</a>( <span class='pre'>noErrorModal</span> ) : promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the currently logged in user ...</div><div class='long'><p>Gets the currently logged in user</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>noErrorModal</span> : bool<div class='sub-desc'><p><em>Optional.</em> If true, no message will be shown in case of an error.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>promise</span><div class='sub-desc'><p>A promise containing the current user or an error object.</p>\n</div></li></ul></div></div></div><div id='method-isLoggedIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.services.AuthService'>ama.services.AuthService</span><br/><a href='source/authService.html#ama-services-AuthService-method-isLoggedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.services.AuthService-method-isLoggedIn' class='name expandable'>isLoggedIn</a>( <span class='pre'></span> ) : promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the login state of the current user ...</div><div class='long'><p>Gets the login state of the current user</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>promise</span><div class='sub-desc'><ul>\n<li>promise containing the login state as boolean: true if logged in, false if not</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-login' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.services.AuthService'>ama.services.AuthService</span><br/><a href='source/authService.html#ama-services-AuthService-method-login' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.services.AuthService-method-login' class='name expandable'>login</a>( <span class='pre'>email, password</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Tries to login the user with the provided data ...</div><div class='long'><p>Tries to login the user with the provided data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>email</span> : Object<div class='sub-desc'><ul>\n<li>the user's mail address</li>\n</ul>\n\n</div></li><li><span class='pre'>password</span> : Object<div class='sub-desc'><ul>\n<li>the user's password</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-logout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.services.AuthService'>ama.services.AuthService</span><br/><a href='source/authService.html#ama-services-AuthService-method-logout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.services.AuthService-method-logout' class='name expandable'>logout</a>( <span class='pre'></span> ) : promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Tries to log out the current user ...</div><div class='long'><p>Tries to log out the current user</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});