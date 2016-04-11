angular.module("myApp").service("inventoryService", [function(){

  var inventory = data();
  //Shopping cart is initially empty
  var cart = [];

  return {
    getInventory: function () {
        return inventory;
    },
    //Returns an array of all unique categories found in inventory
    getCategories: function () {
      var catArray =[];
      for (var i = 0; i < inventory.length; i++) {
        for (var j = 0; j < inventory[i].categories.length; j++) {
            if (catArray.indexOf(inventory[i].categories[j]) === -1)
              catArray.push(inventory[i].categories[j]);
        }
      }
      return catArray;
    },
    getCart: function () {
      return cart;
    },
    //Returns a cart array with each tea only listed once w/ a quantity property
    getSummaryCart: function () {
      var summaryCart = [];

      for (var i = 0; i < cart.length; i++) {
        if (summaryCart.indexOf(cart[i]) === -1) {
          summaryCart.push(cart[i]);
          summaryCart[summaryCart.length-1].quantity = 1;
        }
        else
          summaryCart[summaryCart.indexOf(cart[i])].quantity++;
      }
      return summaryCart;
    },
    //Adds a tea to the cart num times
    addToCart: function (teaID, num) {
      for (var j = 0; j < num; j++) {
        for (var i = 0; i < inventory.length; i++) {
          if (teaID === inventory[i]._id)
            cart.push(inventory[i]);
        }
      }
    },
    //Calculates the subtotal for a given tea
    calculateSubTotal: function (teaID) {
      for (var i = 0; i < cart.length; i++) {
        if (teaID === cart[i]._id) {
          console.log("passedif!");
          return (cart[i].price / 100) * cart[i].quantity;
        }
      }
    },
    //Updates the # of items in cart
    editCart: function (teaID, oldQuantity, newQuantity) {
      var itemToEdit = {};
        //Determine the unique object to edit
      for (var i = 0; i < inventory.length; i++) {
          if (teaID === inventory[i]._id)
            itemToEdit = inventory[i];
      }
      var itemCount = 0;

      if (oldQuantity > newQuantity) {
        //Remove item from array (oldQuantity - newQuantity) times
        for (var i = 0; i < (oldQuantity - newQuantity); i++) {
          var index = cart.indexOf(itemToEdit);
          cart.splice(index, 1);
        }
      }
      else {
        //Add new item to cart array (newQuantity - oldQuantity) times
        for (var i = 0; i < (newQuantity - oldQuantity); i++) {
          cart.push(itemToEdit);
        }
      }
    }
  };
}]);


function data () {

  return [
    {
        "_id": "55c8ee82152165d244b98300",
        "name": "Bayard stew",
        "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
        "caffeineScale": 244,
        "price": 1540,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        "__v": 0,
        "categories": [ "dark", "cold"]
    },

    {
        "_id": "55c8ee82152165d244b98301",
        "name": "Incompactness syrup",
        "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
        "caffeineScale": 49,
        "price": 7348,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["awesome"]
    },
    {
        "_id": "55c8ee82152165d244b98302",
        "name": "Flexner white tea",
        "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
        "caffeineScale": 38,
        "price": 4991,
        "inStock": true,
        "rating": 4,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["cold"]
    },
    {
        "_id": "55c8ee82152165d244b98303",
        "name": "Pressor leaf",
        "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
        "caffeineScale": 153,
        "price": 5496,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry", "hot", "awesome"]
    },
    {
        "_id": "55c8ee82152165d244b98304",
        "name": "Flexner veggie tea",
        "ingredients": "cream of tartar, eggplant, cake, deer antler",
        "caffeineScale": 181,
        "price": 2445,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["summer"]
    },
    {
        "_id": "55c8ee82152165d244b98305",
        "name": "Topflighter malt",
        "ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
        "caffeineScale": 241,
        "price": 4486,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
        "__v": 0,
        "categories": ["dry","lucid","warm"]
    },
    {
        "_id": "55c8ee82152165d244b98306",
        "name": "Cooking mix",
        "ingredients": "flavorings, roasted mushrooms, toast, tumeric",
        "caffeineScale": 230,
        "price": 6973,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["summer"]
    },
    {
        "_id": "55c8ee82152165d244b98307",
        "name": "Cooking stew",
        "ingredients": "eggplant",
        "caffeineScale": 122,
        "price": 6003,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry","winter","lucid"]
    },
    {
        "_id": "55c8ee82152165d244b98308",
        "name": "Prevenient herb tea",
        "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
        "caffeineScale": 196,
        "price": 1374,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
        "__v": 0,
        "categories": ["lucid","hot"]
    },
    {
        "_id": "55c8ee82152165d244b98309",
        "name": "Angular mix",
        "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
        "caffeineScale": 196,
        "price": 4158,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["spring", "warm","winter"]
    }
];
}