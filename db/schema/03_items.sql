-- Drop and recreate Items table

DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  price FLOAT NOT NULL,
  picture_url TEXT,
  description TEXT,
  cook_time_in_minutes INTEGER
);
