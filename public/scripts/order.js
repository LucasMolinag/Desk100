
// create item container
const renderItems = function(items) {
  const $itemsContainer = $('#items-container');
  $itemsContainer.empty();

  items.forEach(elm => {
    $itemsContainer.append(createItemElement(elm));
  });
}

// add item to cart
// function buttonclick(id) {
//   console.log("button id click is: ",id);
//   $.ajax({
//     method: 'POST',
//     url: '/api/addToCart',
//     data: {id: id}
//   })
//   .done(res => {
//     console.log(res);
//   })
// }

// generate individual item
const createItemElement = function(item) {
  // <section class="item-listing__image">
  //       <img class='item-listing-image'src="${item.picture_url}">
  //     </section>
  let $item = $(`
  <article class="item-listing">
      
      <section class="item-listing__details">
        <h3 class="item-listing__title">${item.name}</h3>
        <div class="item-listing__quantity">$ x ${item.quantity}</div>
        <div class="item-listing__total">$ $ ${item.total}</div>
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
    renderItems(items);
  });
})