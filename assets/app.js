angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope",function(e){e.$on("login",function(n,t){e.currentUser=t}),e.logout=function(){e.currentUser=null}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","$location",function(e,n,t){e.login=function(o,r){n.login(o,r).then(function(n){e.$emit("login",o),t.path("/")})}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc","$location",function(e,n,t){e.register=function(o,r,l){l===r&&n.register(o,r).then(function(l){n.login(o,r).then(function(n){e.$emit("login",o),t.path("/")})})}}]),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"ScoresCtrl",templateUrl:"scores.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"}).when("/play",{controller:"PlayCtrl",templateUrl:"game.html"})}]),angular.module("app").controller("ScoresCtrl",["$scope","ScoresSvc","$location",function(e,n,t){e.addScore=function(){e.scores&&n.create({username:"anthony",points:e.scores}).success(function(e){console.log("success")})},n.fetch().success(function(n){e.scores=n})}]),angular.module("app").service("ScoresSvc",["$http",function(e){this.fetch=function(){return e.get("/api/scores")},this.create=function(n){return e.post("/api/scores",n)}}]),angular.module("app").service("UserSvc",["$http",function(e){var n=this;n.getUser=function(){return e.get("/api/users")},n.login=function(t,o){return e.post("/api/sessions",{username:t,password:o}).then(function(t){return n.token=t.data,e.defaults.headers.common["X-Auth"]=t.data,n.getUser()})},n.register=function(t,o){return e.post("/api/users",{username:t,password:o}).then(function(){return n.login(t,o)})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicmVnaXN0ZXIuY3RybC5qcyIsInJvdXRlcy5qcyIsInNjb3Jlcy5jdHJsLmpzIiwic2NvcmVzLnN2Yy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsImxvZ291dCIsIlVzZXJTdmMiLCIkbG9jYXRpb24iLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCIkZW1pdCIsInBhdGgiLCJyZWdpc3RlciIsInJldHlwZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiU2NvcmVzU3ZjIiwiYWRkU2NvcmUiLCJzY29yZXMiLCJjcmVhdGUiLCJwb2ludHMiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwic2NvcmUiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwicG9zdCIsInN2YyIsImdldFVzZXIiLCJ2YWwiLCJ0b2tlbiIsImRhdGEiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE9BQ0EsWUNEQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLG1CQUFBLFNBQUEsU0FBQUMsR0FDQUEsRUFBQUMsSUFBQSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0FILEVBQUFJLFlBQUFELElBRUFILEVBQUFLLE9BQUEsV0FDQUwsRUFBQUksWUFBQSxTQ05BUCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLFVBQUEsWUFBQSxTQUFBQyxFQUFBTSxFQUFBQyxHQUNBUCxFQUFBUSxNQUFBLFNBQUFDLEVBQUFDLEdBQ0FKLEVBQUFFLE1BQUFDLEVBQUFDLEdBQ0FDLEtBQUEsU0FBQUMsR0FFQVosRUFBQWEsTUFBQSxRQUFBSixHQUNBRixFQUFBTyxLQUFBLFdDUEFqQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsZ0JBQUEsU0FBQSxVQUFBLFlBQUEsU0FBQUMsRUFBQU0sRUFBQUMsR0FDQVAsRUFBQWUsU0FBQSxTQUFBTixFQUFBQyxFQUFBTSxHQUNBQSxJQUFBTixHQUNBSixFQUFBUyxTQUFBTixFQUFBQyxHQUNBQyxLQUFBLFNBQUFSLEdBQ0FHLEVBQUFFLE1BQUFDLEVBQUFDLEdBQ0FDLEtBQUEsU0FBQUMsR0FFQVosRUFBQWEsTUFBQSxRQUFBSixHQUNBRixFQUFBTyxLQUFBLGFDVkFqQixRQUFBQyxPQUFBLE9BQ0FtQixRQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsS0FBQXBCLFdBQUEsYUFBQXFCLFlBQUEsZ0JBQ0FELEtBQUEsYUFBQXBCLFdBQUEsZUFBQXFCLFlBQUEsa0JBQ0FELEtBQUEsVUFBQXBCLFdBQUEsWUFBQXFCLFlBQUEsZUFDQUQsS0FBQSxTQUFBcEIsV0FBQSxXQUFBcUIsWUFBQSxpQkNOQXZCLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxjQUFBLFNBQUEsWUFBQSxZQUFBLFNBQUFDLEVBQUFxQixFQUFBZCxHQUNBUCxFQUFBc0IsU0FBQSxXQUNBdEIsRUFBQXVCLFFBQ0FGLEVBQUFHLFFBQ0FmLFNBQUEsVUFDQWdCLE9BQUF6QixFQUFBdUIsU0FDQUcsUUFBQSxTQUFBSCxHQUNBSSxRQUFBQyxJQUFBLGNBS0FQLEVBQUFRLFFBQUFILFFBQUEsU0FBQUksR0FDQTlCLEVBQUF1QixPQUFBTyxPQ2RBakMsUUFBQUMsT0FBQSxPQUNBaUMsUUFBQSxhQUFBLFFBQUEsU0FBQUMsR0FDQUMsS0FBQUosTUFBQSxXQUVBLE1BQUFHLEdBQUFFLElBQUEsZ0JBRUFELEtBQUFULE9BQUEsU0FBQU0sR0FDQSxNQUFBRSxHQUFBRyxLQUFBLGNBQUFMLE9DUEFqQyxRQUFBQyxPQUFBLE9BQ0FpQyxRQUFBLFdBQUEsUUFBQSxTQUFBQyxHQUNBLEdBQUFJLEdBQUFILElBQ0FHLEdBQUFDLFFBQUEsV0FDQSxNQUFBTCxHQUFBRSxJQUFBLGVBRUFFLEVBQUE1QixNQUFBLFNBQUFDLEVBQUFDLEdBQ0EsTUFBQXNCLEdBQUFHLEtBQUEsaUJBQ0ExQixTQUFBQSxFQUFBQyxTQUFBQSxJQUNBQyxLQUFBLFNBQUEyQixHQUdBLE1BRkFGLEdBQUFHLE1BQUFELEVBQUFFLEtBQ0FSLEVBQUFTLFNBQUFDLFFBQUFDLE9BQUEsVUFBQUwsRUFBQUUsS0FDQUosRUFBQUMsYUFHQUQsRUFBQXJCLFNBQUEsU0FBQU4sRUFBQUMsR0FDQSxNQUFBc0IsR0FBQUcsS0FBQSxjQUNBMUIsU0FBQUEsRUFBQUMsU0FBQUEsSUFDQUMsS0FBQSxXQUNBLE1BQUF5QixHQUFBNUIsTUFBQUMsRUFBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgICAnbmdSb3V0ZSdcbl0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICRzY29wZS4kb24oJ2xvZ2luJywgZnVuY3Rpb24gKF8sIHVzZXIpIHtcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlclxuICAgIH0pXG4gICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gbnVsbFxuICAgIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcbiAgICAgICAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHVzZXJuYW1lKVxuICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy8nKVxuICAgICAgICB9KVxuICAgIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdSZWdpc3RlckN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZXR5cGUpIHtcbiAgICAgICAgaWYgKHJldHlwZSA9PT0gcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8kc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHVzZXJuYW1lKVxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy8nLCB7IGNvbnRyb2xsZXI6ICdTY29yZXNDdHJsJywgdGVtcGxhdGVVcmw6ICdzY29yZXMuaHRtbCcgfSlcbiAgICAud2hlbignL3JlZ2lzdGVyJywge2NvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnIH0pXG4gICAgLndoZW4oJy9sb2dpbicsIHtjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyB9KVxuICAgIC53aGVuKCcvcGxheScsIHtjb250cm9sbGVyOiAnUGxheUN0cmwnLCB0ZW1wbGF0ZVVybDogJ2dhbWUuaHRtbCcgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdTY29yZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgU2NvcmVzU3ZjLCAkbG9jYXRpb24pIHtcbiAgICAkc2NvcGUuYWRkU2NvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkc2NvcGUuc2NvcmVzKSB7XG4gICAgICAgICAgICBTY29yZXNTdmMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJ2FudGhvbnknLFxuICAgICAgICAgICAgICAgIHBvaW50czogJHNjb3BlLnNjb3Jlc1xuICAgICAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoc2NvcmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNjb3Jlc1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHNjb3JlKSB7XG4gICAgICAgICRzY29wZS5zY29yZXMgPSBzY29yZVxuICAgIH0pXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnU2NvcmVzU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygkaHR0cC5nZXQoJy9hcGkvc2NvcmVzJykpXG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvc2NvcmVzJylcbiAgICB9XG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvc2NvcmVzJywgc2NvcmUpXG4gICAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcbiAgICB2YXIgc3ZjID0gdGhpc1xuICAgIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJylcbiAgICB9XG4gICAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgc3ZjLnRva2VuID0gdmFsLmRhdGFcbiAgICAgICAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9IHZhbC5kYXRhXG4gICAgICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgfSlcbiAgICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
