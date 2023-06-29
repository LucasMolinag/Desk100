
// create item container
const renderItems = function(items) {
  const $itemsContainer = $('#items-container');
  $itemsContainer.empty();

  items.forEach(elm => {
    $itemsContainer.append(createItemElement(elm));
  });
}

// generate individual item
const createItemElement = function(item) {
  let $item = $(`
  <article class="item-listing">
      <section class="item-listing__image">
        <img class='item-listing-image'src="${item.picture_url}">
      </section>
      <section class="item-listing__details">
        <h3 class="item-listing__title">${item.name}</h3>
        <div class="item-listing__price">$ ${item.price}</div>
        <div class="item-listing__cook_time_in_minutes">Cook Time: ${item.cook_time_in_minutes}</div>
      </section>
      <a class="nav-item nav-link" href="/addItem">Add Item</a>
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