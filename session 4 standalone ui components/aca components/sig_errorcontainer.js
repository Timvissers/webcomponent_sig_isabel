'use strict';

angular.module('sig_errorcontainer', ['be.aca.ui.error.container.ui', 'be.aca.ui.error.container.model'])
    .controller('SigErrorcontainerController', ['ErrorContainer', '$scope', function(ErrorContainer, $scope){

        $scope.errorContainer = ErrorContainer;

        $scope.setErrorCode = function(){
            ErrorContainer.setErrorCode('default.error');
        };

        $scope.clearErrorCode = function(){
            ErrorContainer.reset();
        };
    }]);