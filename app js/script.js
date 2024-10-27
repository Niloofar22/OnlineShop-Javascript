


let storeInventory = [
  { productName: "Laptop", id: "123", price: 500, count: 10 },
  { productName: "Ipad", id: "456", price: 3500, count: 3 },
  { productName: "iphone", id: "789", price: 1200, count: 2 },
];

let userBasketList = [];

let StartShopping = prompt(
  "please for shopping product enter 1 :\nplease for delete product from basket enter 2 :\nplease for payment enter 3 :"
);

while (StartShopping !== 3) {
  if (StartShopping == 1) {
    let userEnterProductName = prompt(
      "Please enter the product name you want to buy"
    );

    if (
      storeInventory.find((item) => {
        if (item.productName == userEnterProductName && item.count > 0) {
          return true;
        }
      })
    ) {
      

      if (
        userBasketList.find((item) => {
          if (item.productName === userEnterProductName) {
            return true;
          }
        })
      ) {
       
        for (let x = 0; x <= userBasketList.length - 1; x++) {
          if (userBasketList[x].productName == userEnterProductName) {
            userBasketList[x].count++;
          
          }
        }
      } else {
        for (let i = 0; i <= storeInventory.length - 1; i++) {
          if (storeInventory[i].productName == userEnterProductName) {
            let productForUser = {
              productName: storeInventory[i].productName,
              productPrice: storeInventory[i].price,
              count: 1,
            };
            userBasketList.push(productForUser);
            storeInventory[i].count--;
          }
        }
      }
      alert("product added to user basket");
      StartShopping = prompt(
        "please for shopping product enter 1 :\nplease for delete product from basket enter 2 :\nplease for payment enter 3 :"
      );
    } else {
      alert("The product is out of stock");
      StartShopping = prompt(
        "please for shopping product enter 1 :\nplease for delete product from basket enter 2 :\nplease for payment enter 3 :"
      );
    }
  } else if (StartShopping == 2) {
    let userDeleteProductName = prompt(
      "Please enter the product name you want to delete"
    );

    if (
      userBasketList.find((item) => {
        if (item.productName === userDeleteProductName && item.count > 0) {
          return true;
        }
      })
    ) {
      for (let i = 0; i <= userBasketList.length - 1; i++) {
        if (
          userBasketList[i].productName == userDeleteProductName &&
          userBasketList[i].count > 1
        ) {
          userBasketList[i].count--;

          for (let z = 0; z <= storeInventory.length - 1; z++) {
            if (
              storeInventory[z].productName == userBasketList[i].productName
            ) {
              storeInventory[z].count++;
            }
          }
        } else if (
          userBasketList[i].productName == userDeleteProductName &&
          userBasketList[i].count == 1
        ) {
          let indexOfProductForDelete = userBasketList.indexOf(
            userBasketList[i]
          );

          for (let z = 0; z <= storeInventory.length - 1; z++) {
            if (
              storeInventory[z].productName == userBasketList[i].productName
            ) {
              storeInventory[z].count++;
            }
          }
          userBasketList.splice(indexOfProductForDelete, 1);
        }
      }
      StartShopping = prompt(
        "please for shopping product enter 1 :\nplease for delete product from basket enter 2 :\nplease for payment enter 3 :"
      );
    } else {
      alert("You have not purchased this product");
      StartShopping = prompt(
        "please for shopping product enter 1 :\nplease for delete product from basket enter 2 :\nplease for payment enter 3 :"
      );
    }
  } else if (StartShopping == 3) {
    let totalPrice = 0;

    for (let product of userBasketList) {
      alert(
        `${product.productName}: ${product.count} x ${product.productPrice}`
      );

      totalPrice += product.productPrice * product.count;
    }

    alert(`Total price: ${totalPrice}`);
    StartShopping = prompt(
      "please for shopping product enter 1 :\nplease for delete product from basket enter 2 :\nplease for payment enter 3 :"
    );
  }
}