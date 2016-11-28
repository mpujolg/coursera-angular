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
                name: "Delicious cookies",
                quantity: "10 bags"
            }, {
                name: "Cookies",
                quantity: "9 bags"
            }, {
                name: "Cookies!",
                quantity: "8 bags"
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
