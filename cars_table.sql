create table cars(
  car_id text primary key,
  year text,
  make text,
  model text,
  name text,
  email text
);
INSERT or IGNORE into cars select car_id, year, make, model, name, email from csv_data;
