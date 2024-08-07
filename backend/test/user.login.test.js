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

describe("POST /api/users/login", () => {
    beforeEach(async () => {
        await clearDB.clear();
        await seedDB.seed();
    });

    it("logs user in", async () => {
        const user = {
            password: "testtesttest",
            email:"test@test.test"
        }

        let response = await request(app)
        .post('/api/users/login')
        .set("Accept", "application/json")
        .send(user);
        console.log(response.body)
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual("success");
        expect(response.body.token).toBeDefined();
        expect(response.body.details.name).toEqual("Test");
        expect(response.body.details.role).toEqual(1);
        expect(response.body.details.email).toEqual("test@test.test");
    });

    it("gets error (wrong email)", async () => {
        const user = {
            password: "testtesttest",
            email:"test@test.tests"
        }

        let response = await request(app)
        .post('/api/users/login')
        .set("Accept", "application/json")
        .send(user);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserDatabaseError");
        expect(response.body.details).toEqual("User does not exist");
    });

    it("gets error (wrong password)", async () => {
        const user = {
            password: "testtesttestss",
            email:"test@test.test"
        }

        let response = await request(app)
        .post('/api/users/login')
        .set("Accept", "application/json")
        .send(user);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserDatabaseError");
        expect(response.body.details).toEqual("Wrong Password");
    });

    it("gets error (no password)", async () => {
        const user = {
            email:"roman@gmail.com"
        }

        let response = await request(app)
        .post('/api/users/login')
        .set("Accept", "application/json")
        .send(user);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserSchemaError");
        expect(response.body.details).toEqual("\"password\" is required");
    });

    it("gets error (no email)", async () => {
        const user = {
            password: "Password!11"
        }

        let response = await request(app)
        .post('/api/users/login')
        .set("Accept", "application/json")
        .send(user);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserSchemaError");
        expect(response.body.details).toEqual("\"email\" is required");
    });
});
