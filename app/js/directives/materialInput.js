app.directive('materialInput', [
    '$http',
    '$templateCache',
    '$compile',
    function ($http, $templateCache, $compile) {
        return {
            restrict: 'A',
            scope: {
                model:'=ngModel',
                id: '@inputId',
                label: '@inputLabel',
                required: '@inputRequired',
                inputType: '@',
                options: '=inputSelectOptions',
                optionValue: '@inputSelectOptionValue',
                optionName: '@inputSelectOptionName',
                buttons: '=inputButtons'
            },
            controller: function ($scope, $q) {

                $scope.processWysiwyg = function(type) {

                    if(type=='save') {

                        $scope.model = $scope.editor.code();
                        $scope.buttons[type][type]($scope.model);


                    } else {
                        $scope.buttons[type][type]();
                    }
                    console.log($scope.model);


                };

                $scope.toggleMultiSelected = function(option) {
                    if(option.selected){
                        option.selected = false
                    } else {
                        if (angular.isArray($scope.model)) {
                            $scope.model.push(option[$scope.optionValue]);
                        } else {
                            $scope.model = [];
                            $scope.model.push(option[$scope.optionValue]);
                        }
                        option.selected = true;
                    }
                }

            },
            link: function (scope, elem, attr) {
                // we use the link function to get our template, so the directive still works when the type is not set on page load
                var type = attr.inputType;
                if(type!='textarea' && type != 'select' && type != 'wysiwyg' && type != 'selectMultiple')
                    type = 'text';
                $http.get('templates/directives/materialInput/'+type+'.html', {cache: $templateCache}).success(function(tplContent){
                    elem.replaceWith($compile(tplContent)(scope));
                    if(type=='wysiwyg') {
                        scope.editor = $('.summernote');
                        scope.editor.summernote({
                            height: 300,
                            toolbar: [
                                ['style', ['bold', 'italic', 'underline', 'clear']],
                                ['layout', ['ul', 'ol']],
                                ['view', ['fullscreen','codeview']],
                                ['do', ['undo', 'redo']]
                            ]
                        });
                        scope.editor.code(scope.model);
                    }
                });
            },
            replace: true
        }
    }
]);