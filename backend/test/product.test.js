const request = require("supertest");
const seedDB = require("../src/db/seeddb");
const clearDB = require("../src/db/cleardb");
const pool = require("../src/db/dbconfig");
const app = require("../src/app");

beforeAll((done) => {
    done();
});

afterAll((done) => {
    pool.end(() => {
        console.log('Closed PostgreSQL connection');
        done();
    });
});

describe("GET /api/sections", () => {
    beforeEach(async () => {
        await clearDB.clear();
        await seedDB.seed();
    });

    it("All Products", async () => {
        const response = await request(app).get('/api/products');
        expect(response.statusCode).toBe(200);
        // First Product
        expect(response.body[0].name).toEqual("Pepperoni Pizza");
        expect(response.body[0].image).toEqual("image");
        expect(response.body[0].price).toEqual(9.99);
        expect(response.body[0].ingredients).toEqual("pepperoni, mozzarella, tomato sauce, oregano");
        // Second Product
        expect(response.body[1].name).toEqual("Margherita Pizza");
        expect(response.body[1].image).toEqual("image");
        expect(response.body[1].price).toEqual(8.99);
        expect(response.body[1].ingredients).toEqual("mozzarella, tomato, olive oil");
        // Third Product
        expect(response.body[2].name).toEqual("Curry Chicken");
        expect(response.body[2].image).toEqual("image");
        expect(response.body[2].price).toEqual(13.99);
        expect(response.body[2].ingredients).toEqual("chicken, beef, curry sauce");
    });

    it("Product with ID=1", async () => {
        const response = await request(app).get('/api/products/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual("Pepperoni Pizza");
        expect(response.body.image).toEqual("image");
        expect(response.body.price).toEqual(9.99);
        expect(response.body.ingredients).toEqual("pepperoni, mozzarella, tomato sauce, oregano");
    });

    it("Product with ID=2", async () => {
        const response = await request(app).get('/api/products/2');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual("Margherita Pizza");
        expect(response.body.image).toEqual("image");
        expect(response.body.price).toEqual(8.99);
        expect(response.body.ingredients).toEqual("mozzarella, tomato, olive oil");
    });

    it("Product with ID=3", async () => {
        const response = await request(app).get('/api/products/3');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual("Curry Chicken");
        expect(response.body.image).toEqual("image");
        expect(response.body.price).toEqual(13.99);
        expect(response.body.ingredients).toEqual("chicken, beef, curry sauce");
    });

    it("Product with non-existing ID", async () => {
        const response = await request(app).get('/api/products/222');
        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("ProductDatabaseError");
        expect(response.body.details).toEqual("Product ID Not Found");
    });
});
