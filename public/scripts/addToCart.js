
$(() => {
  $('#add-to-cart').on('click', () => {
    console.log('script - addToCart --- 1');
    $.ajax({
      method: 'GET',
      url: '/api/addToCart'
    })
    .done((response) => {
      console.log('script - addToCart --- ');
      // const $usersList = $('#users');
      // $usersList.empty();

      // for(const user of response.users) {
      //   $(`<li class="user">`).text(user.name).appendTo($usersList);
      // }
    });
  });
});
