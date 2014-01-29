app.service('ingredientMethods', function ($http,sharedProperties) {

  return {

    getTopIngredients : function($scope){
      $http({
        method: 'GET',
        url: '/topIngredients/2000'
      })
      .success(function(data, status) {
        $scope.ingredients = data.data;
      })
      .error(function(data, status){
        console.log(data,status);
      });
    },

    getSuggestedIngredients: function($scope){
      var currentList = [];
      var temp = sharedProperties.getToCook();
      for (var key in temp){
        currentList.push(temp[key]['_id']);
      }
      console.log(currentList);
      $http({
        method: 'POST',
        url: '/suggestedIngredients/',
        data: currentList
      })
      .success(function(data, status) {
        $scope.suggestedIngredients = data.data;
      })
      .error(function(data, status){
        console.log(data,status);
      });
    },

    addToCook: function($scope,ingredient){
      if(!($scope.toCook[ingredient.ingredientName])){
        $scope.toCook[ingredient.ingredientName] = ingredient;
        $scope.showCook = true;
        sharedProperties.setToCook($scope.toCook);
      }
      $scope.getSuggestedIngredients($scope);
      $scope.getSearchResults();
    },

    removeFromToCook : function($scope,ingredient){
      if($scope.toCook[ingredient.ingredientName]){
        delete($scope.toCook[ingredient.ingredientName]);
        sharedProperties.setToCook($scope.toCook);
        $scope.showCook = (Object.keys($scope.toCook).length > 0);
      }
      $scope.getSuggestedIngredients($scope);
      $scope.getSearchResults();
    }

  };


});