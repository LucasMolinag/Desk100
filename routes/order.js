// Cart page
router.get('/cart', (req, res) => {
  // Retrieve the cart items from the session
  const orderItems = req.session.orderItems || [];

  // Render the cart page and pass the cartItems to the template
  res.render('cart', { orderItems });
});