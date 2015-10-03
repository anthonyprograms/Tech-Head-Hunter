angular.module('app')
.controller('ScoresCtrl', function ($scope, ScoresSvc, $location) {
    $scope.addScore = function () {
        if ($scope.scores) {
            ScoresSvc.create({
                username: 'anthonyprograms',
                score: $scope.scores
            }).success(function (post) {
                console.log('success')
            })
        }
    }

    ScoresSvc.fetch().success(function (scores) {
        $scope.scores = scores
    })
})
