/**
 * Controller for the acceptances overview page
 */
app.controller('AcceptanceDetailCtrl', [
    'ApiAbstractionLayer',
    'LocalStorage',
    'MasterDetailService',
    'PdfService',
    '$stateParams',
    function(ApiAbstractionLayer, LocalStorage, MasterDetailService, PdfService, $stateParams){
        var self = this;
        var id = $stateParams.id;
        MasterDetailService.setMaster(this);
        this.acceptance = LocalStorage.getData('acceptance/'+id);
        ApiAbstractionLayer('GET',{name:'acceptance',params: {id:id}}).then(function (data) {
            LocalStorage.setData('acceptance/'+id, data);
            self.acceptance = data;
        });

        this.viewPdf = function (event,preview,path) {
            PdfService(event,preview,'acceptance',id, path).then(function (data) {
                if(data){
                    self.acceptance.path = data.path;
                    self.acceptance.state = 1;
                    LocalStorage.setData('acceptance/'+id,self.acceptance);
                }
            });
        };



    }]);