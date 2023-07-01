$(document).ready(function() {

  $.ajax({
    method: 'GET',
    url: '/api/orderhistory'
  })
  .done((response) => {
    console.log('order history response: ');
    console.log(response)

    const $orderlist = $('#orders');
    $orderlist.empty();

    const firstId = response[0].id;
    console.log(firstId);
    let date = response[0].time_completed.substring(0, response[0].time_completed.indexOf("T"));
    $(`<li class="title">`).text("Order #: " + response[0].id + "  completed: " + date).appendTo($orderlist);

    for(const order of response) {
      date = order.time_completed.substring(0, order.time_completed.indexOf("T"));
      if(order.id != firstId){
        $(`<li class="gap">`).appendTo($orderlist);
        $(`<li class="title">`).text("Order #: " + order.id + "  completed: " + date).appendTo($orderlist);
      }
      $(`<li class="order">`).text("Item: " + order.name + ", quantity " + order.quantity).appendTo($orderlist);
      $(`<img class="order-pic" src="${order.picture_url}" />`).appendTo($orderlist);
    }
  });


})