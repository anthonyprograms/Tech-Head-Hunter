angular.module('app')
.controller('ScoresCtrl', function ($scope, PostsSvc, $location) {
    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'anthonyprograms',
                body: $scope.postBody
            }).success(function (post) {
                $scope.postBody = null
            })
        }
    }

    PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts
    })
})
