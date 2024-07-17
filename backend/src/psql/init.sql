CREATE TABLE "Restaraunt" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE "Section" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    restaraunt_id INTEGER REFERENCES "Restaraunt"(id)
);

CREATE TABLE "Product" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    image VARCHAR(100),
    section_id INTEGER REFERENCES "Section"(id),
    price INTEGER,
    ingredients VARCHAR(500)
);

CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(100),
    payment VARCHAR(100),
    phone VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role INTEGER
);

CREATE TABLE "Order" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "User"(id),
    status BOOLEAN
);

CREATE TABLE "Ordered_Product" (
    id SERIAL PRIMARY KEY REFERENCES "Product"(id),
    quantity INTEGER,
    order_id INTEGER REFERENCES "Order"(id)
);

INSERT INTO "Restaraunt" (name) VALUES ('Golden Vodka')