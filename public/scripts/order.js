
// create item container
const renderItems = function(items) {
  const $itemsContainer = $('#items-container');
  $itemsContainer.empty();
  if(items.length === 0) {
    $itemsContainer.append($(`<p>Your cart is empty!</p>`));
  } else {
    items.forEach(elm => {
      $itemsContainer.append(createItemElement(elm));
    });
  }
  
}

// generate individual item
const createItemElement = function(item) {
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

  return $item;
}

$().ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/order'
  })
  .done((items) => {
    // console.log("script - order ------", items) // testing ------------
    renderItems(items);
  });
})