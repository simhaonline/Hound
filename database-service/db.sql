-- Remove tables if they exist
DROP TABLE IF EXISTS Users cascade;

DROP TABLE IF EXISTS Sessions cascade;

DROP TABLE IF EXISTS Properties cascade;

DROP TABLE IF EXISTS PropertyPhotos cascade;

DROP TABLE IF EXISTS Auctions cascade;

DROP TABLE IF EXISTS PrivateSales cascade;

DROP TABLE IF EXISTS Bidders cascade;

DROP TABLE IF EXISTS Bids cascade;

CREATE TABLE Users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  hashed_password VARCHAR,
  time_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Sessions(
  id INTEGER,
  access_token VARCHAR,
  token_issued TIMESTAMP,
  u_id INTEGER REFERENCES Users(id)
);

CREATE TYPE ProperyType AS ENUM ('House', 'Apartment');
--CREATE TYPE PropertyStatus AS ENUM ('Sold','ForSale')

CREATE TABLE Properties(
  id SERIAL PRIMARY KEY,
  seller_id INTEGER REFERENCES Users(id),
  -- The final bid must be higher than the min price
  min_price INTEGER,
  -- About the property
  rooms INTEGER,
  bathrooms INTEGER,
  garages INTEGER,
  areaasqm INTEGER,
  -- Location of property
  addr VARCHAR,
  lat REAL,
  long REAL,
  
  -- Flag to check if the property was sold ---
  sold BOOLEAN
);

CREATE TABLE PropertyPhotos (
  id SERIAL PRIMARY KEY,
  url VARCHAR,
  property_id INTEGER REFERENCES Properties(id)
);

CREATE TABLE Auctions (
  id SERIAL PRIMARY KEY,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  final_end_time TIMESTAMP,
  property_id INTEGER REFERENCES Properties(id)
);

CREATE TABLE PrivateSales (
  id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES Properties(id),
  buyer_id INTEGER REFERENCES Users(id),
  price INTEGER
);

-- Bidders who are registered to an auction
CREATE TABLE Bidders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(id),
  initial_bid INTEGER,
  auction_id INTEGER REFERENCES Auctions(id)
);

CREATE TABLE Bids (
  id SERIAL PRIMARY KEY,
  bidder_id INTEGER REFERENCES Users(id),
  time TIMESTAMP,
  amount INTEGER,
  auction_id INTEGER REFERENCES Auctions(id)
);

-- Insert Luka and Daigo into the database system
INSERT INTO
  Users (first_name, last_name, email, hashed_password, time_registered)
VALUES
  ('luka', 'gam', 'luka@gmail.com', 'randompasswordhash', current_timestamp),
  ('dai', 'con', 'dai@gmail.com', 'randompasswordhash', current_timestamp);

INSERT INTO 
  Properties(seller_id, min_price, rooms, bathrooms, garages, areaasqm, addr, lat, long, sold)
values
  (1, 100, 3, 4, 1, 123450, 'Point Piper', -45.0, 100.0, FALSE),
  (1, 200, 4, 5, 1, 500000, 'Parramatta' , 0.0  , 100.0, FALSE),
  (1, 300, 5, 6, 1, 2.123 , 'Kensington' , 55.0 , 100.0, FALSE),
  (1, 400, 6, 7, 1, 300000, 'Chatswood'  , 71.0 , 100.0, FALSE);

-- Add more when requried
