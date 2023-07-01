// create item container
const renderItems = function(items) {
  const $itemsContainer = $('#items-container');
  $itemsContainer.empty();
  if(items.length === 0) {
    $itemsContainer.append($(`<p>Your cart is empty!</p>`));
  } else {
    let total = 0;
    let time = 0;
    items.forEach(elm => {
      console.log('elm', elm);
      const newItemElm = createItemElement(elm, total, time);

      total += newItemElm.total;
      time += newItemElm.time;
      $itemsContainer.append(newItemElm.$item);
    });
    $itemsContainer.append(`<div>Total: $${total}</div>`);
    $itemsContainer.append(`<div>Time: ${time} minutes</div>`);
    $itemsContainer.append(`<div>
      <form action="/submit" method="POST">
        <button type="submit">Submit</button>
      </form>
    </div>`);
  }
}

const createItemElement = function(item, total, time) {
  time = item.cook_time_in_minutes * item.quantity;
  total = item.price * item.quantity;
  let $item = $(`
  
  <article class="item-listing">
  <div class = "item">
      <section class="item-listing__details">
        <h3 class="item-listing__title"> ${item.name}</h3>
        <div class='item-outer'>
        <img class='item-listing-image'src="${item.picture_url}">
        
        

        Quantity: ${item.quantity}
        </div>

       
        <div class="item-listing__total">Price: ${item.price}</div>
        <div class="item-listing__total">Time: ${item.cook_time_in_minutes} minutes</div>
      
      </section>
    </div>
    </article>
  `);

  return { $item, total, time} ;
};


$().ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/checkout'
  })
  .done((items) => {
    renderItems(items);
  });
})