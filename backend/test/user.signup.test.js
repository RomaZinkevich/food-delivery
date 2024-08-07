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

describe("POST /api/users/signup", () => {
    beforeEach(async () => {
        await clearDB.clear();
        await seedDB.seed();
    });

    it("creates new user", async () => {
        const newUser = {
            name:"Roman",
            password: "Password!11",
            email:"roman@gmail.com"
        }

        let response = await request(app)
        .post('/api/users/signup')
        .set("Accept", "application/json")
        .send(newUser);

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual("success");
        expect(response.body.token).toBeDefined();
        expect(response.body.details.name).toEqual("Roman");
        expect(response.body.details.role).toEqual(0);
        expect(response.body.details.email).toEqual("roman@gmail.com");
    });

    it("gets error (same email)", async () => {
        const user = {
            name:"Test",
            password: "Pas$w0rd",
            email:"test@test.test"
        }

        let response = await request(app)
        .post('/api/users/signup')
        .set("Accept", "application/json")
        .send(user);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("EmailValidationError");
        expect(response.body.details).toEqual("Email already exists");
    });

    it("gets error (no name)", async () => {
        const newUser = {
            password: "Password!11",
            email:"roman@gmail.com"
        }

        let response = await request(app)
        .post('/api/users/signup')
        .set("Accept", "application/json")
        .send(newUser);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserSchemaError");
        expect(response.body.details).toEqual("\"name\" is required");
    });

    it("gets error (no password)", async () => {
        const newUser = {
            name: "Roman",
            email:"roman@gmail.com"
        }

        let response = await request(app)
        .post('/api/users/signup')
        .set("Accept", "application/json")
        .send(newUser);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserSchemaError");
        expect(response.body.details).toEqual("\"password\" is required");
    });

    it("gets error (no email)", async () => {
        const newUser = {
            password: "Password!11",
            name: "Roman"
        }

        let response = await request(app)
        .post('/api/users/signup')
        .set("Accept", "application/json")
        .send(newUser);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserSchemaError");
        expect(response.body.details).toEqual("\"email\" is required");
    });

    it("gets error (weak password)", async () => {
        const newUser = {
            name: "Roman",
            password: "Password",
            email:"roman@gmail.com"
        }

        let response = await request(app)
        .post('/api/users/signup')
        .set("Accept", "application/json")
        .send(newUser);

        expect(response.statusCode).toBe(400);
        expect(response.body.type).toEqual("UserSchemaError");
        expect(response.body.details).toEqual("\"password\" with value \"Password\" fails to match the required pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*\\W)/");
    });
});
