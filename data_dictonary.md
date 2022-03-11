## Cars Table
CREATE TABLE cars(
  car_id text primary key,
  year text,
  make text,
  model text,
  name text,
  email text
);

## Cars Total Table
CREATE TABLE cars_total(car_id integer primary key, total integer);


## CSV Data Table
CREATE TABLE IF NOT EXISTS "csv_data"(
  "Timestamp" TEXT,
  "Email" TEXT,
  "Name" TEXT,
  "Year" TEXT,
  "Make" TEXT,
  "Model" TEXT,
  "Car_ID" TEXT,
  "Judge_ID" TEXT,
  "Judge_Name" TEXT,
  "Racer_Turbo" TEXT,
  "Racer_Supercharged" TEXT,
  "Racer_Performance" TEXT,
  "Racer_Horsepower" TEXT,
  "Car_Overall" TEXT,
  "Engine_Modifications" TEXT,
  "Engine_Performance" TEXT,
  "Engine_Chrome" TEXT,
  "Engine_Detailing" TEXT,
  "Engine_Cleanliness" TEXT,
  "Body_Frame_Undercarriage" TEXT,
  "Body_Frame_Suspension" TEXT,
  "Body_Frame_Chrome" TEXT,
  "Body_Frame_Detailing" TEXT,
  "Body_Frame_Cleanliness" TEXT,
  "Mods_Paint" TEXT,
  "Mods_Body" TEXT,
  "Mods_Wrap" TEXT,
  "Mods_Rims" TEXT,
  "Mods_Interior" TEXT,
  "Mods_Other" TEXT,
  "Mods_ICE" TEXT,
  "Mods_Aftermarket" TEXT,
  "Mods_WIP" TEXT,
  "Mods_Overall" TEXT
);


## Judges Table
CREATE TABLE judges(Judge_ID TEXT,Judge_Name TEXT);