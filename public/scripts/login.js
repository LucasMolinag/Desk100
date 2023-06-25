$(() => {
  console.log("script - login");
  $("form").on('submit', (event) => {
    console.log("script - login 2");
    event.preventDefault();
    
    // $.post("/api/login");
    $.ajax({
      method: 'POST',
      url: '/api/login'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();

      for(const user of response.users) {
        $(`<li class="user">`).text(user.name).appendTo($usersList);
      }
    });
  });
});
