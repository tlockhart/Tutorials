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
                //Part9: Disable tab
                scope.disabled = false
                if(attr.disable) {
                    attr.$observe('disable', function(value) {
                        scope.disabled = (value !== 'false')
                    })
                }
                tabsetCtrl.addTab(scope)//Part4: Any property bound to scope in the tab directive will also be accessible by the tabset controller
            }
        }
    }),
        //Part2:Tabset Directive
        app.directive('tabset', function () {
                return {
                    restrict: 'E',
                    transclude: true,
                    //Part10 :tabset controller-- add type: '@', to scope object.
                    scope: {type: '@',
                        vertical: '@',
                        justified: '@'
                    },
                    templateUrl: 'tabset.html',
                    bindToController: true,
                    controllerAs: 'tabset',
                    controller: function () {
                        var self = this
                        self.tabs = []//tabs array

                        //Part10 tabset controller-- add type: '@', to scope object.
                        //Removed settabs
                        /***************************************/
                        self.classes = {}
                        if(self.type === 'pills') {
                            self.classes['nav-pills'] = true
                        } else {
                            self.classes['nav-tabs'] = true
                        }
                        if(self.justified) {
                            self.classes['nav-justified'] = true
                        }
                        if(self.vertical) {
                            self.classes['nav-stacked'] = true
                        }
                        /***************************************/

                        //Part4:a function in the tabset controller a tab can use to register itself
                        self.addTab = function addTab(tab) {
                            self.tabs.push(tab)

                            //Part6 = Show the first tab
                            if (self.tabs.length === 1) {
                                tab.active = true
                            }
                        }

                        //Part8: Enable a user to actually select a tab.
                        //This method will deactivate all the tabs
                        // that weren't selected before finally
                        // activating the selected tab.
                        self.select = function(selectedTab) {
                            //If selected tab disabled simply return nothing
                            if(selectedTab.disabled){return}

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