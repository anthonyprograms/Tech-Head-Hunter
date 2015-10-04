angular.module('app')
.service('ScoresSvc', function ($http) {
    this.fetch = function () {
        //console.log($http.get('/api/scores'))
        return $http.get('/api/scores')
    }
    this.create = function (score) {
        return $http.post('/api/scores', score)
    }
})
