(function () {
    angular.module("ShoppingList", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.search = "";
        toBuy.items = ShoppingListCheckOffService.getItemstoBuy();
        toBuy.setBought = function (item, itemIndex) {
            ShoppingListCheckOffService.setBought(item, itemIndex);
        }
    };

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.search = "";
        bought.items = ShoppingListCheckOffService.getItemsBought();
    };

    function ShoppingListCheckOffService() {
        var listService = this,
            itemsToBuy = [{
                name: "Cookies",
                quantity: "10 bags"
            }, {
                name: "AngularJS cup",
                quantity: "1"
            }, {
                name: "Milk",
                quantity: "2 bottles"
            }, {
                name: "Water",
                quantity: "1 bottle"
            }, {
                name: "AngularJS knowledge",
                quantity: "a lot"
            }],
            itemsBought = [];
        this.getItemstoBuy = function () {
            return itemsToBuy;
        }
        this.getItemsBought = function () {
            return itemsBought;
        }
        this.setBought = function (item, itemIndex) {
            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        }
    };

})()
