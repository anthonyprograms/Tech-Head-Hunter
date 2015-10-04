angular.module('app')
.controller('ScoresCtrl', function ($scope, ScoresSvc, $location) {
    $scope.addScore = function () {
        if ($scope.scores) {
            ScoresSvc.create({
                username: 'anthony',
                points: $scope.scores
            }).success(function (scores) {
                console.log('success')
            })
        }
    }

    ScoresSvc.fetch().success(function (score) {
        //console.log(score)
        $scope.scores = score
    })
})
