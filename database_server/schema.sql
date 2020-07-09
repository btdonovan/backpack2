CREATE TABLE backpack(
  backpack_id serial,
  name text,
  max_weight int,
  PRIMARY KEY(backpack_id)
);

CREATE TABLE item_list(
  item_id serial,
  name text,
  item_weight int,
  PRIMARY KEY(item_id)
);

CREATE TABLE backpack_items(
  item_id int,
  backpack_id int,
  item_weight int,
  FOREIGN KEY(backpack_id) REFERENCES backpack(backpack_id),
  FOREIGN KEY(item_id) REFERENCES item_list(item_id)
);