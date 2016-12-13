/**
 * Created by tlockhart on 12/11/2016.
 */
;(function (window) {
    var app = angular.module('app', []);
    //Part1: Tab directive
    app.directive('tab', function () {
        return {
            restrict: 'E',
            transclude: true,
            //Part6: addng-show active property for tab display
            template: '<!--h2>Hello world!</h2--> <div role="tabpanel" ng-show="active" ng-transclude></div>',//Part5:tabpanel is the structure of the page in tabset.html
            require: '^tabset',//Part3 Instructs the directive to move up the scope hierarchy one level and look for the controller on tabset
            scope: {heading: '@'},//Part5: access tab string through Angular directive
            link: function (scope, elem, attr, tabsetCtrl) {//Part3
                scope.active = false//Part6: show active tab
                tabsetCtrl.addTab(scope)//Part4: Any property bound to scope in the tab directive will also be accessible by the tabset controller
            }
        }
    }),
        //Part2:Tabset Directive
        app.directive('tabset', function () {
                return {
                    restrict: 'E',
                    transclude: true,
                    scope: {},
                    templateUrl: 'tabset.html',
                    bindToController: true,
                    controllerAs: 'tabset',
                    controller: function () {
                        var self = this
                        self.tabs = []//tabs array
                        //Part4:a function in the tabset controller a tab can use to register itself
                        self.addTab = function addTab(tab) {
                            self.tabs.push(tab)

                            //Part6 = Show the first tab
                            if (self.tabs.length === 1) {
                                tab.active = true
                            }
                        }
                        //Enable a user to actually select a tab.
                        //This method will deactivate all the tabs
                        // that weren't selected before finally
                        // activating the selected tab.
                        self.select = function(selectedTab) {
                            angular.forEach(self.tabs, function(tab) {
                                if(tab.active && tab !== selectedTab) {
                                    tab.active = false;
                                }
                            })

                            selectedTab.active = true;
                        }
                    }

                }
            }
        )

})(window);