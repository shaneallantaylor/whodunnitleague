app.directive('uniqueValue', function($http, $q) {
  return {
    require: 'ngModel',
    scope: {
      check: '&'
    },
    link: function(scope, element, attr, ngModel) {
      ngModel.$asyncValidators.exist = function(modelValue, viewValue) {
        return scope.check({value: viewValue}).then(function(response) {
          if (response.data.exists) {
            return $q.reject();
          }
          return true;
        });
      }
    }
  };
});
