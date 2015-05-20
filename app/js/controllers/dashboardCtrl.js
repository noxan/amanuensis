app.controller('DashboardCtrl', [
    'ApiAbstractionLayer',
    'LocalStorage',
    'PanelService',
    '$state',
    function (ApiAbstractionLayer, LocalStorage, PanelService, $state) {
        var self = this;
        this.currentProjects = LocalStorage.getData('currentProjects');
        var apiObject = {
            name: 'project',
            params: {
                current: 1
            }
        };
        ApiAbstractionLayer('GET', apiObject).then(function (data) {
            self.currentProjects = data;
            LocalStorage.setData('currentProjects', data);
        });

        this.newProject = function () {
            PanelService.setPanel('clients', 3);
            $state.go('app.clients');
        }
    }
]);