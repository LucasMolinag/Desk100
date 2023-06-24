-- Drop and recreate orders table (Example)

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,,
  start TIMESTAMP,
  complete TIMESTAMP
);
