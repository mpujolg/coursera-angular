(function () {
    angular.module("LunchCheck", [])

    .controller("LunchCheckController", LunchCheckController)

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.dishes = "";
        $scope.checkWords = function () {
            var arrayDishes = countWords($scope.dishes),
                arrayCorrectDishes = detelteEmptyDishes(arrayDishes);
            showMessage(arrayCorrectDishes);
        };

        function countWords(dishes) {
            return ($scope.dishes.split(","));
        };

        function detelteEmptyDishes(dishesArray) {
            var array = dishesArray
            array.forEach(function (element, index) {
                if ((!(/\S/.test(element))) || (element = "")) {
                    array.splice(index, 1);
                };
            });
            return array;
        };

        function showMessage(dishes) {
            if (dishes.length === 0) {
                $scope.message = {
                    text: "Please enter data first",
                    color: "red"
                }
            } else if (dishes.length > 3) {
                $scope.message = {
                    text: "Too much!",
                    color: "green"
                }
            } else {
                $scope.message = {
                    text: "Enjoy!",
                    color: "green"
                }
            }
        };

    }

})()
