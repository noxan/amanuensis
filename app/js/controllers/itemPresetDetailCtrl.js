/**
 * @class ama.controllers.ItemPresetDetailCtrl
 * Controller for the item preset detail view
 *
 * Remember: the term 'item' refers to a single piece of a offer/contract/list of todos/acceptance/invoice
 */
app.controller('ItemPresetDetailCtrl', [
    'ApiAbstractionLayer',
    'MasterDetailService',
    '$stateParams',
    function (ApiAbstractionLayer, MasterDetailService, $stateParams) {
        MasterDetailService.setDetail(this);
        var self = this;

        /**
         * Sets the preset detail. This function gets called by the {@link ama.directives.masterDetail masterDetail directive} when the detail changes
         * @param preset - the new preset
         * @param keyboard - indicates if the detail was changed by keyboard input
         */
        this.detailChanged = function (preset, keyboard) {
            // the preset from the list is equivalent to what we would get from the API, so we don't need a request here
            self.preset = preset;
        };

        /**
         * Deletes the current preset by calling the delete action in the master controller
         */
        this.deletePreset = function () {
            MasterDetailService.notifyMaster('deletePreset', self.preset.id);
        };

        /**
         * Changes the useRate value (fixed/hourly/dailyRate) of the current itemPreset.
         * @param {integer} value The value the userate property of the itemPreset should be set to
         */
        this.setUserate = function (value) {
            var apiObject = {
                name: 'item_preset',
                data: {
                    id: self.preset.id,
                    userate: value
                }
            };
            self.preset.userate = value;
            ApiAbstractionLayer('POST', apiObject).then(function (data) {
                MasterDetailService.notifyMaster('priceChanged', data);
            });

        };

        // if the itemPreset state is entered with a certain id, we want to set the preset detail for this id
        if($stateParams.id){
            // this time, a request is needed to get the item preset
            ApiAbstractionLayer('GET',{name:'item_preset',params:{id:$stateParams.id}}).then(function (data) {
                MasterDetailService.notifyController('setDetail',data);
            });
        }

    }
]);