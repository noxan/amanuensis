Ext.data.JsonP.ama_controllers_SettingsCtrl({"tagname":"class","name":"ama.controllers.SettingsCtrl","autodetected":{},"files":[{"filename":"settingsCtrl.js","href":"settingsCtrl.html#ama-controllers-SettingsCtrl"}],"members":[{"name":"addNewUser","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-addNewUser","meta":{}},{"name":"changeUserPass","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-changeUserPass","meta":{}},{"name":"checkffapp","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-checkffapp","meta":{}},{"name":"deleteUser","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-deleteUser","meta":{}},{"name":"ffappinstalled","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-ffappinstalled","meta":{}},{"name":"isSetting","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-isSetting","meta":{}},{"name":"isSettingSet","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-isSettingSet","meta":{}},{"name":"objectKeys","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-objectKeys","meta":{}},{"name":"reset","tagname":"method","owner":"ama.controllers.SettingsCtrl","id":"method-reset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ama.controllers.SettingsCtrl","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl' target='_blank'>settingsCtrl.js</a></div></pre><div class='doc-contents'><p>Controller for the app settings</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addNewUser' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-addNewUser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-addNewUser' class='name expandable'>addNewUser</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a new user ...</div><div class='long'><p>Adds a new user</p>\n</div></div></div><div id='method-changeUserPass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-changeUserPass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-changeUserPass' class='name expandable'>changeUserPass</a>( <span class='pre'>user</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Changes the passwort of a user with a given id ...</div><div class='long'><p>Changes the passwort of a user with a given id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>user</span> : Object<div class='sub-desc'><ul>\n<li>the user to be modified</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-checkffapp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-checkffapp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-checkffapp' class='name expandable'>checkffapp</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if the ff extension is installed ...</div><div class='long'><p>Checks if the ff extension is installed</p>\n</div></div></div><div id='method-deleteUser' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-deleteUser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-deleteUser' class='name expandable'>deleteUser</a>( <span class='pre'>e, id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Deletes a user with a given id ...</div><div class='long'><p>Deletes a user with a given id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'><ul>\n<li>the click event</li>\n</ul>\n\n</div></li><li><span class='pre'>id</span> : Object<div class='sub-desc'><ul>\n<li>the id of the user</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-ffappinstalled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-ffappinstalled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-ffappinstalled' class='name expandable'>ffappinstalled</a>( <span class='pre'>e</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Tries to install the amanu firefox open web app ...</div><div class='long'><p>Tries to install the amanu firefox open web app</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'><ul>\n<li>the click event</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-isSetting' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-isSetting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-isSetting' class='name expandable'>isSetting</a>( <span class='pre'>val</span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>test if the given object can be a setting ...</div><div class='long'><p>test if the given object can be a setting</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isSettingSet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-isSettingSet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-isSettingSet' class='name expandable'>isSettingSet</a>( <span class='pre'>val</span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Test if the given object is a setting object ...</div><div class='long'><p>Test if the given object is a setting object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-objectKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-objectKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-objectKeys' class='name expandable'>objectKeys</a>( <span class='pre'>obj</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Will give me all keys of an object ...</div><div class='long'><p>Will give me all keys of an object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.controllers.SettingsCtrl'>ama.controllers.SettingsCtrl</span><br/><a href='source/settingsCtrl.html#ama-controllers-SettingsCtrl-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.controllers.SettingsCtrl-method-reset' class='name expandable'>reset</a>( <span class='pre'>type</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resets the user creation form ...</div><div class='long'><p>Resets the user creation form</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});