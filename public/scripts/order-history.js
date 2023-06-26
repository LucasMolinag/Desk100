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

    for(const order of response) {
      $(`<li class="order">`).text(order.id + ", time completed:" + order.time_completed).appendTo($orderlist);
    }
  });


})