const request = require("supertest");
const restaurantdb = require("../src/db/restaurantdb");
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

describe("GET /api/restaurants", () => {
    beforeEach(async () => {
        await restaurantdb.clearRestaurants();
        await restaurantdb.seedRestaurantDB();
    });

    it("json message", async () => {
        const response = await request(app).get('/api/restaurants');
        expect(response.statusCode).toBe(200);
        expect(response.body[0].id).toBeDefined();
        expect(response.body[0].name).toEqual("Golden India");
    });
});