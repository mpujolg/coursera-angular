(function () {
    angular.module("TestApp", [])
        .controller("ListCtrl1", ListCtrl1)
        .controller("ListCtrl2", ListCtrl2)
        .factory("ListFactory", ListFactory);

    ListCtrl1.$inject = ["ListFactory"];

    function ListCtrl1(ListFactory) {
        var list1 = this,
            lists = ListFactory();

        list1.name = "";
        list1.quantity = "";
        list1.items = lists.getItems();
        list1.addItem = function () {
            lists.addItem(list1.name, list1.quantity);
        }
    };


    ListCtrl2.$inject = ["ListFactory"];

    function ListCtrl2(ListFactory) {
        var list2 = this,
            lists = ListFactory();

        list2.name = "";
        list2.quantity = "";
        list2.items = lists.getItems();
        list2.addItem = function () {
            lists.addItem(list2.name, list2.quantity);
        }
    };

    function ListService() {
        var listService = this,
            items = [];

        listService.addItem = function (itemName, itemQuantity) {
            items.push({
                name: itemName,
                quantity: itemQuantity
            });
        };
        listService.getItems = function () {
            return items;
        };

    };

    function ListFactory() {
        var factory = function () {
            return new ListService();
        }
        return factory;
    }

})()
