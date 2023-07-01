
// create item container
const renderItems = function(items) {
  const $itemsContainer = $('#items-container');
  $itemsContainer.empty();
  if (items) {
    items.forEach(elm => {
      $itemsContainer.append(createItemElement(elm));
    });
  }
}

// add item to cart
function buttonclick(id) {
  console.log("button id click is: ",id);
  $.ajax({
    method: 'POST',
    url: '/api/addToCart',
    data: {id: id}
  })
  .done(res => {})
}

// generate individual item
const createItemElement = function(item) {
  let $item = $(`
  <article class="item-listing">
      <section class="item-listing__image">
        <img class='item-listing-image'src="${item.picture_url}">
      </section>
      <div class="item-listing__details">
        <h3 class="item-listing__title">${item.name}</h3>
        <div class="item-listing__price">$${item.price}</div>
        <div class="item-listing__cook_time_in_minutes">Cook Time: ${item.cook_time_in_minutes}</div>
      </section>
      <button class="add-to-cart" onclick="buttonclick(${item.id})">Add To Cart</button>
    </article>
  `);

  return $item;
}

$().ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/menu'
  })
  .done((items) => {
    renderItems(items);
  });
})