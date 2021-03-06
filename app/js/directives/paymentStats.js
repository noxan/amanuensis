/**
 * @class ama.directives.paymentStats
 *
 * The paymentStats directive
 * Shows a nice payment stats timeline
 *
 * ## Usage
 *
 *     <div payment-stats="thePaymentStatsObject"></div>
 *
 * @author Sebastian Antosch
 */
app.directive('paymentStats', [
    function () {
        // these input types are available

        return {
            restrict: 'A',
            scope: {
                stats:'=paymentStats'
            },
            controller: function ($scope, amaDateFilter) {

                $scope.$watch('stats', function(){

                    if($scope.stats)
                    {
                        /* normalize if total info or single project info */
                        $scope.payEvents = $scope.stats.to_pay !== undefined ? $scope.stats.to_pay : $scope.stats.toPay;
                        if($scope.stats.overdue instanceof Array)
                        {
                            $scope.overdue = $scope.stats.overdue_total;
                            $scope.overdue_items = $scope.stats.overdue;
                        }
                        else
                        {
                            $scope.overdue = $scope.stats.overdue;
                            $scope.overdue_items = [];
                        }
                        $scope.dayx = $scope.stats.day_x_total !== undefined ? $scope.stats.day_x_total : $scope.stats.toPayDayX;
                        $scope.dayx_items = $scope.stats.day_x || [];

                        if ($scope.stats.totalProjectWorth !== undefined)
                        {
                            $scope.total = $scope.stats.totalProjectWorth;
                        }
                        else if($scope.stats.total !== undefined)
                        {
                            $scope.total = $scope.stats.total;
                            $scope.beforetax = $scope.stats.beforetax;
                            $scope.tax = $scope.stats.tax;
                            $scope.taxlabel = $scope.stats.taxlabel;
                            $scope.singleThing = true;
                        }
                        else
                        {
                            $scope.total = $scope.stats.overdue_total + $scope.stats.to_pay_total + $scope.stats.day_x_total;
                        }


                        /* calc time interval */
                        if($scope.payEvents && $scope.payEvents.length > 0)
                        {
                            $scope.leftendtime = Date.now() / 1000;
                            var rightendtime = Date.now() / 1000;
                            var enddate = amaDateFilter(new Date().toDateString(),'dd.MM.yyyy');

                            for(var i = 0; i < $scope.payEvents.length; i++)
                            {
                                var time = new Date($scope.payEvents[i].date).getTime() / 1000;
                                if(time > rightendtime)
                                {
                                    rightendtime = time;
                                    enddate = amaDateFilter($scope.payEvents[i].date, 'dd.MM.yyyy');
                                }
                            }
                            $scope.rightendtime = rightendtime;
                            $scope.enddate = enddate;
                            $scope.timeintervall = $scope.rightendtime - $scope.leftendtime;
                        }
                    }

                });



                $scope.calcLeft = function(date)
                {
                    var timestamp = new Date(date).getTime() / 1000;
                    var timefromleft = timestamp - $scope.leftendtime;

                    return parseInt(timefromleft / $scope.timeintervall * 100);
                }



            },
            replace: true,
            templateUrl: 'templates/directives/paymentStats.html'
        }
    }
]);