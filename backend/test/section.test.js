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

    it("All Sections", async () => {
        const response = await request(app).get('/api/sections');
        expect(response.statusCode).toBe(200);
        expect(response.body[0].id).toEqual(1);
        expect(response.body[1].id).toEqual(2);
        expect(response.body[0].name).toEqual("Italian");
        expect(response.body[1].name).toEqual("Indian");
    });

    it("Section with ID=1", async () => {
        const response = await request(app).get('/api/sections/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual("Italian");
    });

    it("Section with ID=2", async () => {
        const response = await request(app).get('/api/sections/2');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual("Indian");
    });

    it("Section with non-existing ID", async () => {
        const response = await request(app).get('/api/sections/222');
        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("SectionDatabaseError")
    });

    it("Products with section_id=1", async () => {
        const response = await request(app).get('/api/sections/1/products');
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
    });

    it("Products with section_id=2", async () => {
        const response = await request(app).get('/api/sections/2/products');
        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toEqual("Curry Chicken");
        expect(response.body[0].image).toEqual("image");
        expect(response.body[0].price).toEqual(13.99);
        expect(response.body[0].ingredients).toEqual("chicken, beef, curry sauce");
    });
});
