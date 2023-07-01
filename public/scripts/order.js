
// create item container
const renderItems = function(items) {
  const $itemsContainer = $('#items-container');
  $itemsContainer.empty();
  if(items.length === 0) {
    $itemsContainer.append($(`<p>Your cart is empty!</p>`));
  } else {
    let total = 0;
    items.forEach(elm => {
      const newItemElm = createItemElement(elm, total);
      // console.log('newItemElm', newItemElm) // test --------
      total += newItemElm.total;
      $itemsContainer.append(newItemElm.$item);
    });
    $itemsContainer.append(`<div>Total: $${total}</div>`);
  }
}

// generate individual item
const createItemElement = function(item, total) {
  total += item.total;
  let $item = $(`
  <article class="item-listing">
      
      <section class="item-listing__details">
        <img class='item-listing-image'src="${item.picture_url}">
        <h3 class="item-listing__title">${item.name}</h3>
        <div class="item-listing__quantity">x ${item.quantity}</div>
        <div class="item-listing__total">$ ${item.total}</div>
      </section>
    </article>
  `);

  return { $item, total} ;
}

$().ready(function() {
  // console.log("script - order ------") // testing ------------
  $.ajax({
    method: 'GET',
    url: '/api/order'
  })
  .done((items) => {
    renderItems(items);
  });
})