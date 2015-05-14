app.directive('materialInput', [
    '$http',
    '$templateCache',
    '$compile',
    '$document',
    function ($http, $templateCache, $compile, $document) {
        var inputTypes = {
            text: true,
            textarea: true,
            wysiwyg: true,
            select: true,
            selectMultiple: true,
            price: true
        };
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
                buttons: '=inputButtons',
                searchable: '@inputSelectSearchable'
            },
            controller: function ($scope, $log) {
                $scope.currencySymbol = '€';


                $scope.processWysiwyg = function(type) {

                    if(type=='save') {

                        $scope.model = $scope.editor.code();
                        $scope.buttons[type][type]($scope.model);


                    } else {
                        $scope.buttons[type][type]();
                    }
                };

                if($scope.inputType == 'select'){
                    $scope.toggleSingleSelected = function(option){
                        $scope.model = option[$scope.optionValue];
                        $scope.selected = option[$scope.optionName];
                        $scope.showDropdown = false;
                    };
                }

                if($scope.inputType == 'selectMultiple') {

                    $scope.chosen = [];
                    if (angular.isArray($scope.model)) {
                        for(var i = 0; i<$scope.options.length; i++) {
                            for(var j = 0; j<$scope.model.length; j++){
                                if($scope.options[i][$scope.optionValue] == $scope.model[j])
                                    $scope.chosen.push($scope.options[i]);
                            }
                        }
                    } else {
                        $scope.model = [];
                    }
                    $scope.toggleMultiSelected = function (option) {
                        if (option.selected) {
                            var index = $scope.model.indexOf(option[$scope.optionValue]);
                            $scope.model.splice(index, 1);
                            $scope.chosen.splice(index, 1);
                            option.selected = false;
                        } else {
                            option.selected = true;
                            $scope.model.push(option[$scope.optionValue]);
                            $scope.chosen.push(option);
                        }


                    };

                }


                if($scope.inputType == 'price'){
                    $scope.priceModel = {
                        cents: '00'
                    };
                    $scope.processPrice = function () {
                        var value = $scope.priceModel;
                        if(!value.cents){
                            value.cents = '00';
                        }
                        if(!value.euros){
                            value.euros = null;
                            return;
                        }



                        $scope.model = value.euros+'.'+value.cents;

                        console.log($scope.model,$scope.priceModel.euros);
                    }
                }





            },
            link: function (scope, elem, attr) {
                // we use the link function to get our template, so the directive still works when the type is not set on page load
                var type = attr.inputType;
                if(!inputTypes[type]) {
                    type = 'text';
                }
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
                            ],
                            onBlur: function(e) {
                                scope.model = scope.editor.code();
                            }
                        });
                        scope.editor.code(scope.model);
                    }
                });

                scope.showDropdown = false;
                scope.hideDropdown = function () {
                    scope.showDropdown = false;
                };
                scope.openDropdown = function () {
                    $(elem).focus();
                    scope.showDropdown = true;
                };


            },
            replace: true
        }
    }
]);