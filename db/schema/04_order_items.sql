-- Drop and recreate order_items bridge table

DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  item_id INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL,
  PRIMARY KEY (order_id, item_id)
);