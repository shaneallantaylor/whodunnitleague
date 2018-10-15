

app.controller('teamCreateCtrl', function($scope, $http) {
  $scope.noSuchUser = false;

  $scope.createUser = function(email, displayName) {
    var data = {
      email: email,
      display_name: displayName
    }
    $http.post(apiBaseUrl + '/users/', data).then(function (response) {
      window.location = './team.html?id=' + response.data._id;
      console.log(response.data);
    });
    $scope.email = '';
    $scope.displayName = '';
  };

  $scope.accessTeam = function(userId) {
    var data = {
      id: $scope.userId
    }
    $http({
      url: apiBaseUrl + '/users',
      method: 'GET',
      params: data
    }).then(function(response) {
      if (!angular.equals(response.data, {})) {
        window.location = './team.html?id=' + response.data._id;
      } else {
        $scope.noSuchUser = true;
      }
       console.log(response.data);
     });
    $scope.userId = '';
  };

  function checkUser(data) {
    return $http({
      url: apiBaseUrl + '/users/check',
      method: 'GET',
      params: data
    });
  }

  $scope.checkEmail = function(email) {
    var data = {email: email};
    return checkUser(data);
  }

  $scope.checkDisplayName = function(displayName) {
    var data = {display_name: displayName};
    return checkUser(data);
  }
});
