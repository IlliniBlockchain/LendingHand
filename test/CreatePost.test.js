const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Create post", function () {
  it("Owner should successfully create a post", async function () {
    const [owner] = await ethers.getSigners();

    const createPost = await ethers.getContractFactory("LendingHand");

    const hardhatToken = await createPost.deploy();

    await hardhatToken.createPost(owner.address,"TestTitle","TestDesc",1000,0,"12/07/2023",5);

    const createdPost = await hardhatToken.posts_list(owner.address, 0);
    expect(createdPost.receiver).to.equal(owner.address);
    expect(createdPost.title).to.equal("TestTitle");
    expect(createdPost.description).to.equal("TestDesc");
    expect(createdPost.goal).to.equal(1000);
    expect(createdPost.amount_raised).to.equal(0);
    expect(createdPost.deadline).to.equal("12/07/2023");
    expect(createdPost.num_donors).to.equal(5);
    expect(createdPost.post_id).to.equal(0);
  });
});

describe("Create post after post", function () {
    it("Owner should successfully create multiple posts", async function () {
        const [owner] = await ethers.getSigners();
    
        const createPost = await ethers.getContractFactory("LendingHand");
    
        const hardhatToken = await createPost.deploy();
    
        await hardhatToken.createPost(owner.address,"TestTitle","TestDesc",1000,0,"12/07/2023",5);

        await hardhatToken.createPost(owner.address,"TestTitle2","TestDesc2",2000,10,"12/31/2023",2);

        const createdPost = await hardhatToken.posts_list(owner.address, 0);
        expect(createdPost.receiver).to.equal(owner.address);
        expect(createdPost.title).to.equal("TestTitle");
        expect(createdPost.description).to.equal("TestDesc");
        expect(createdPost.goal).to.equal(1000);
        expect(createdPost.amount_raised).to.equal(0);
        expect(createdPost.deadline).to.equal("12/07/2023");
        expect(createdPost.num_donors).to.equal(5);
        expect(createdPost.post_id).to.equal(0);

        const createdPost2 = await hardhatToken.posts_list(owner.address,1);
        expect(createdPost2.receiver).to.equal(owner.address);
        expect(createdPost2.title).to.equal("TestTitle2");
        expect(createdPost2.description).to.equal("TestDesc2");
        expect(createdPost2.goal).to.equal(2000);
        expect(createdPost2.amount_raised).to.equal(10);
        expect(createdPost2.deadline).to.equal("12/31/2023");
        expect(createdPost2.num_donors).to.equal(2);
        expect(createdPost2.post_id).to.equal(1);
    });
});

describe("Multiple users create posts", function () {
    it("Multiple signers can create separate posts", async function () {
        const [owner, secondOwner] = await ethers.getSigners();
    
        const createPost = await ethers.getContractFactory("LendingHand");
    
        const hardhatToken = await createPost.deploy();
    
        await hardhatToken.createPost(owner.address,"TestTitle","TestDesc",1000,0,"12/07/2023",5);

        await hardhatToken.createPost(secondOwner.address,"TestTitle2","TestDesc2",2000,10,"12/31/2023",2);

        const createdPost = await hardhatToken.posts_list(owner.address, 0);
        expect(createdPost.receiver).to.equal(owner.address);
        expect(createdPost.title).to.equal("TestTitle");
        expect(createdPost.description).to.equal("TestDesc");
        expect(createdPost.goal).to.equal(1000);
        expect(createdPost.amount_raised).to.equal(0);
        expect(createdPost.deadline).to.equal("12/07/2023");
        expect(createdPost.num_donors).to.equal(5);
        expect(createdPost.post_id).to.equal(0);

        const createdPost2 = await hardhatToken.posts_list(secondOwner.address,0);
        expect(createdPost2.receiver).to.equal(secondOwner.address);
        expect(createdPost2.title).to.equal("TestTitle2");
        expect(createdPost2.description).to.equal("TestDesc2");
        expect(createdPost2.goal).to.equal(2000);
        expect(createdPost2.amount_raised).to.equal(10);
        expect(createdPost2.deadline).to.equal("12/31/2023");
        expect(createdPost2.num_donors).to.equal(2);
        expect(createdPost2.post_id).to.equal(0);
    });
});