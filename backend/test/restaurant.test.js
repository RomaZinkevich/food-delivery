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

describe("GET /api/restaurants", () => {
    beforeEach(async () => {
        await clearDB.clear();
        await seedDB.seed();
    });

    it("json message", async () => {
        const response = await request(app).get('/api/restaurants');
        expect(response.statusCode).toBe(200);
        expect(response.body[0].id).toBeDefined();
        expect(response.body[0].name).toEqual("Golden India");
    });
});