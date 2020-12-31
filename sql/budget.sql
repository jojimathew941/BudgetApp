CREATE TABLE users (
   id int NOT NULL AUTO_INCREMENT,
   Name varchar(256),
   d_o_b date,
   age int, 
   sex varchar(7),
   email varchar(256),
   mobile int,
   module varchar(256),
   marital_Status varchar(8),
   created_by VARCHAR(256),
   created_on datetime,
   updated_by VARCHAR(256),
   updated_on datetime,

    PRIMARY KEY (id)
);

INSERT INTO users (Name,d_o_b,age, sex, email, mobile,module,marital_status,created_by,created_on,updated_by,updated_on)
VALUES ('joji mathew', '2018-03-05', 23, 'male', 'joji.mathew941@gmail.com', 9791095216 ,'calculaor,budget','single','jomat', '2020-12-31 23:59:59','jomat','2020-12-31 23:59:59');

CREATE TABLE transactions(
   id int NOT NULL AUTO_INCREMENT,
   Name varchar(256),
   amount decimal(19.4),
   category varchar(256),
   created_by VARCHAR(256),
   created_on datetime,
   updated_by VARCHAR(256),
   updated_on datetime,

    PRIMARY KEY (id)
);

INSERT INTO transactions (Name,amount,category,created_by,created_on,updated_by,updated_on)
VALUES ('joji mathew',2000,'entertainment','jomat', '2020-12-31 23:59:59','jomat','2020-12-31 23:59:59');

CREATE TABLE budget(
   id int NOT NULL AUTO_INCREMENT,
   Name varchar(256),
   amount decimal(19.4),
   available_amount decimal(19.4),
   created_by VARCHAR(256),
   created_on datetime,
   updated_by VARCHAR(256),
   updated_on datetime,

    PRIMARY KEY (id)
);
INSERT INTO budget (Name,amount,available_amount,created_by,created_on,updated_by,updated_on)
VALUES ('joji mathew',2000,10000,'jomat', '2020-12-31 23:59:59','jomat','2020-12-31 23:59:59');