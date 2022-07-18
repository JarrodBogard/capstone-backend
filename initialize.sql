USE DB1;

DROP TABLE IF EXISTS Clients, Client_Contacts, Client_Addresses, Client_Projects, Materials;

CREATE TABLE Clients (
  client_Id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (client_Id)
);

CREATE TABLE Client_Contacts (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT,
  phone VARCHAR(10),
  email VARCHAR(75),
  PRIMARY KEY (id),
  FOREIGN KEY (client_id) REFERENCES Clients(client_Id)
);

CREATE TABLE Client_Addresses (
  address_id INT NOT NULL AUTO_INCREMENT,
  client_id int,
  address VARCHAR(100),
  city VARCHAR(100),
  county VARCHAR(100),
  state VARCHAR(100),
  zip INT,
  PRIMARY KEY (address_id),
  FOREIGN KEY (client_id) REFERENCES Clients(client_Id)
);

CREATE TABLE Client_Projects (
  project_id INT NOT NULL AUTO_INCREMENT,
  address_id INT,
  client_id INT,
  project_date datetime,
  assigned_crew varchar(50),
  material_id INT,
  PRIMARY KEY (project_id, address_id),
  FOREIGN KEY (address_id) REFERENCES Client_Addresses(address_id),
  FOREIGN KEY (client_id) REFERENCES Clients(client_Id)
);

CREATE TABLE Materials (
  material_id INT NOT NULL AUTO_INCREMENT,
  material_name varchar(100),
  material_type varchar(100),
  quantity int,
  quantity_avail int,
  PRIMARY KEY (material_id)
);