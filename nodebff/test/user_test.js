const
    should = require("chai").should(),
    expect = require("chai").expect,
    supertest = require("supertest"),
    PORT = require("../src/config").PORT,
    api = supertest(`localhost:3000`);

describe("/User/:id",() => {
    it("/User/:id should return a 200 response",(done) => {
        api.get("/user/123")
            .set("Accept","application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err,res) => {
                expect(res.body.code).to.equal(1);
                expect(res.body.data).to.have.property("name");
                expect(res.body.data).to.have.property("age");
                done();
            });
    })
})
