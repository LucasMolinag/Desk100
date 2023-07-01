
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
      total += newItemElm.total;
      $itemsContainer.append(newItemElm.$item);
    });
    $itemsContainer.append(`<div class="total">Total: $${total}</div>`);
  }
}

// generate individual item
const createItemElement = function(item, total) {
  total = item.total;
  let $item = $(`
  
  <article class="item-listing">
  <div class = "item">
      <section class="item-listing__details">
        <h3 class="item-listing__title">${item.name}</h3>
        <div class='item-outer'>
        <img class='item-listing-image'src="${item.picture_url}">
        
        

        x ${item.quantity}
        </div>

       
        <div class="item-listing__total">$ ${item.total}</div>
      
      </section>
    </div>
    </article>
  `);

  return { $item, total} ;
}

$().ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/order'
  })
  .done((items) => {
    renderItems(items);
  });
})