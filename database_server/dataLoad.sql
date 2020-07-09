-- CREATE DATABASE backpack;
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
INSERT INTO item_list(name,item_weight)
VALUES('tent',10);
INSERT INTO item_list(name,item_weight)
VALUES('water',.5);
INSERT INTO item_list(name,item_weight)
VALUES('food',1);
INSERT INTO item_list(name,item_weight)
VALUES('compass',1);
INSERT INTO item_list(name,item_weight)
VALUES('sleeping bag',3);
INSERT INTO item_list(name,item_weight)
VALUES('first-aid kit',1);
INSERT INTO item_list(name,item_weight)
VALUES('clothes',5);
