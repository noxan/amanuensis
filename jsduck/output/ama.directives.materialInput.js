Ext.data.JsonP.ama_directives_materialInput({"tagname":"class","name":"ama.directives.materialInput","autodetected":{},"files":[{"filename":"materialInput.js","href":"materialInput.html#ama-directives-materialInput"}],"author":[{"tagname":"author","name":"Christian Baur","email":null}],"members":[{"name":"blurField","tagname":"method","owner":"ama.directives.materialInput","id":"method-blurField","meta":{"deprecated":{"text":"<p>TODO: this code should not be not used anymore. check if we can remove it entirely</p>\n"}}},{"name":"getValueFromWysiwyg","tagname":"method","owner":"ama.directives.materialInput","id":"method-getValueFromWysiwyg","meta":{}},{"name":"hideDropdown","tagname":"method","owner":"ama.directives.materialInput","id":"method-hideDropdown","meta":{}},{"name":"openDropdown","tagname":"method","owner":"ama.directives.materialInput","id":"method-openDropdown","meta":{}},{"name":"processDate","tagname":"method","owner":"ama.directives.materialInput","id":"method-processDate","meta":{}},{"name":"processPrice","tagname":"method","owner":"ama.directives.materialInput","id":"method-processPrice","meta":{}},{"name":"processWysiwyg","tagname":"method","owner":"ama.directives.materialInput","id":"method-processWysiwyg","meta":{}},{"name":"toggleBool","tagname":"method","owner":"ama.directives.materialInput","id":"method-toggleBool","meta":{}},{"name":"toggleMultiSelected","tagname":"method","owner":"ama.directives.materialInput","id":"method-toggleMultiSelected","meta":{}},{"name":"toggleSingleSelected","tagname":"method","owner":"ama.directives.materialInput","id":"method-toggleSingleSelected","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ama.directives.materialInput","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/materialInput.html#ama-directives-materialInput' target='_blank'>materialInput.js</a></div></pre><div class='doc-contents'><p>The materialInput directive\nShows a form field and handles inputs for certain input types</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-blurField' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-blurField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-blurField' class='name expandable'>blurField</a>( <span class='pre'>event, fieldId</span> )<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Chooses the action to be taken on blur. ...</div><div class='long'><p>Chooses the action to be taken on blur.\nIf one of the buttons is clicked, the button action replaces the default blur action.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        <p>TODO: this code should not be not used anymore. check if we can remove it entirely</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fieldId</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValueFromWysiwyg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-getValueFromWysiwyg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-getValueFromWysiwyg' class='name expandable'>getValueFromWysiwyg</a>( <span class='pre'>id</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>passes the model of a wysiwyg field back to the parent scope ...</div><div class='long'><p>passes the model of a wysiwyg field back to the parent scope</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'><ul>\n<li>identifier of the wysiwyg field</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hideDropdown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-hideDropdown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-hideDropdown' class='name expandable'>hideDropdown</a>( <span class='pre'>blur, save</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>hides the dropdown list ...</div><div class='long'><p>hides the dropdown list</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>blur</span> : Object<div class='sub-desc'><ul>\n<li>indicates if the field should be blurred</li>\n</ul>\n\n</div></li><li><span class='pre'>save</span> : Object<div class='sub-desc'><ul>\n<li>indicates if the save action should be triggered</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-openDropdown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-openDropdown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-openDropdown' class='name expandable'>openDropdown</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Opens the dropdown list ...</div><div class='long'><p>Opens the dropdown list</p>\n</div></div></div><div id='method-processDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-processDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-processDate' class='name expandable'>processDate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>updates the backup ...</div><div class='long'><p>updates the backup</p>\n</div></div></div><div id='method-processPrice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-processPrice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-processPrice' class='name expandable'>processPrice</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Parses the actual price (as String) from the priceModel array ...</div><div class='long'><p>Parses the actual price (as String) from the priceModel array</p>\n</div></div></div><div id='method-processWysiwyg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-processWysiwyg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-processWysiwyg' class='name expandable'>processWysiwyg</a>( <span class='pre'>type</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reacts on button clicks when inputType = wysiwyg ...</div><div class='long'><p>Reacts on button clicks when inputType = wysiwyg</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'><ul>\n<li>the type of the button that was clicked (can be one of 'save', 'cancel' or 'delete')</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-toggleBool' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-toggleBool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-toggleBool' class='name expandable'>toggleBool</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>toggles true/false for the bool model\nif buttons are present, calls the save action ...</div><div class='long'><p>toggles true/false for the bool model\nif buttons are present, calls the save action</p>\n</div></div></div><div id='method-toggleMultiSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-toggleMultiSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-toggleMultiSelected' class='name expandable'>toggleMultiSelected</a>( <span class='pre'>option, event</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Toogles the selection of a specified option ...</div><div class='long'><p>Toogles the selection of a specified option</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>option</span> : Object<div class='sub-desc'><ul>\n<li>the (de-)selected option</li>\n</ul>\n\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'><ul>\n<li>the event that led to the (de-)selection</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-toggleSingleSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ama.directives.materialInput'>ama.directives.materialInput</span><br/><a href='source/materialInput.html#ama-directives-materialInput-method-toggleSingleSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ama.directives.materialInput-method-toggleSingleSelected' class='name expandable'>toggleSingleSelected</a>( <span class='pre'>option</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Selects a specified option and closes the dropdown list ...</div><div class='long'><p>Selects a specified option and closes the dropdown list</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>option</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});