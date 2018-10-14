

app.controller('teamCreateCtrl', function($scope, $http) {
  $scope.createUser = function(email, displayName) {
    var data = {
      email: email,
      display_name: displayName
    }
    $http.post(apiBaseUrl + '/users/', data).then(function (response) {
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
