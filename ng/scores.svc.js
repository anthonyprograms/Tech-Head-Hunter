angular.module('app')
.service('ScoresSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/scores')
    }
    this.create = function (score) {
        return $http.post('/api/scores', score)
    }
})
