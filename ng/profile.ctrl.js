angular.module('app')
.controller('ProfileCtrl', function ($scope, UserSvc) {
    UserSvc.getUser()
    .then(function (response) {
        console.log(response)
        $scope.user = response.data
    })
})
