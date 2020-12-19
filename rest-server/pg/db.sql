drop table if exists Users cascade;
drop table if exists Tasks cascade;
drop table if exists UsersSessions cascade;
drop table if exists Interests cascade;
drop table if exists House cascade;


create table if not exists Users(
    u_id SERIAL UNIQUE,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(100),
    hash_password text,
    perm_type integer,
    time_registered  timestamp,
    primary key (u_id)
);

create table if not exists UsersSessions(
    u_id integer,
    tokens text,
    token_issue timestamp,
    foreign key (u_id) references Users(u_id)
);

create table if not exists Interests(
    inte_id SERIAL UNIQUE,
    user_id integer,
    buying BOOLEAN,
    selling BOOLEAN,
    primary key(inte_id),
    foreign key (user_id) references Users(u_id)
);

create table if not exists House(
    house_id SERIAL UNIQUE,
    user_id integer,
    primary key(house_id),
    price float,
    rooms integer,
    bathrooms integer,
    areaasqm integer,
    address varchar(50),
    foreign key (user_id) references Users(u_id)
);

INSERT INTO Users (first_name, last_name,email, hash_password, perm_type,time_registered) VALUES ('luka', 'gam','luka@gmail.com','randompasswordhash', 1,current_timestamp);
INSERT INTO Users (first_name, last_name,email, hash_password, perm_type,time_registered) VALUES ('dai', 'con','dai@gmail.com','randompasswordhash', 1,current_timestamp);
INSERT INTO UsersSessions values (1,'randomtokengen1',current_timestamp);
INSERT INTO UsersSessions values (1,'randomtokengen2',current_timestamp);
INSERT INTO UsersSessions values (2,'randomtokengen3',current_timestamp);
INSERT INTO UsersSessions values (2,'randomtokengen4',current_timestamp);
INSERT INTO Interests(user_id,buying,selling) values (1,TRUE,TRUE);
INSERT INTO Interests(user_id,buying,selling) values (2,TRUE,TRUE);
INSERT INTO House(user_id,price,rooms,bathrooms,areaasqm,address) values (2,12345000000.123,3,2,1000,'Point Piper');
INSERT INTO House(user_id,price,rooms,bathrooms,areaasqm,address) values (2,500000000.123,3,2,231,'Parramatta');
INSERT INTO House(user_id,price,rooms,bathrooms,areaasqm,address) values (1,2.123,1,1,50,'Kensington');
INSERT INTO House(user_id,price,rooms,bathrooms,areaasqm,address) values (1,300000,2,1,100,'Chatswood');