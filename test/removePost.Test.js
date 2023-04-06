const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Remove Post", function () {
    it("Deployment should remove a certain index of a reciever's Post array with address and idx inputs", async function () {
      const [owner] = await ethers.getSigners();
      const contract = await ethers.getContractFactory("LendingHand");
      const lendingHand = await contract.deploy();

      // Owners' Address
      const newAddress = owner.address;


      // Creating 2 Test Posts -> CreatePost [address, title, description, money I need, money I got, date deadline, number of donors]
      await lendingHand.createPost(newAddress, "Title1", "Description1", 999, 0, "8/19/2023", 10);
      await lendingHand.createPost(newAddress, "Title2", "Description2", 69, 10, "03/20/2023", 5);


      // 1 is the post idxs of the SECOND post  in the array
      const newPost2 = await lendingHand.posts_list(newAddress, 1);

      // Post array tied to this address -> Tested getPost
      const postArray = await lendingHand.getPost(newAddress);

      // RemovePost #1 [post_idx, address] -> No expected return value;
      await lendingHand.removePost(1, newAddress)

      //Check Post Array
      expect(postArray.length).to.equal(1);
      expect(postArray[0]).to.equal(newPost2);
      expect(lendingHand.posts_list(newAddress, 0)).to.equal(newPost2);

      // //Check Post
      // expect(newPost2.post_id).to.equal(0);
      // expect(newPost2.reciver).to.equal(newAddress);
      // expect(newPost.title).to.equal("Title2");
      // expect(newPost.description).to.equal("Description2");
      // expect(newPost.goal).to.equal(69);
      // expect(newPost.amount_raised).to.equal(10);
      // expect(newPost.deadline).to.equal("3/10/2023");
      // expect(newPost.num_donors).to.equal(5);

    });
});

//QUESTION: How do we assign 'post_id' to a post in the array? How does the mapping work?
//          How does lendingHand.posts_lists(address, x) work?

const { ethers } = require("hardhat");

describe("Remove Post", function () {
    it("Deployment should remove a certain index of a reciever's Post array with address and idx inputs", async function () {
      const [owner] = await ethers.getSigners();
      const contract = await ethers.getContractFactory("LendingHand");
      const lendingHand = await contract.deploy();

      // Owners' Address
      const newAddress = owner.address;


      // Creating 2 Test Posts -> CreatePost [address, title, description, money I need, money I got, date deadline, number of donors]
      await lendingHand.createPost(newAddress, "Title1", "Description1", 999, 0, "8/19/2023", 10);
      await lendingHand.createPost(newAddress, "Title2", "Description2", 69, 10, "03/20/2023", 5);


      // 1 is the post idxs of the SECOND post  in the array
      const newPost2 = await lendingHand.posts_list(newAddress, 1);

      // Post array tied to this address -> Tested getPost
      const postArray = await lendingHand.getPost(newAddress);

      // RemovePost #1 [post_idx, address] -> No expected return value;
      await lendingHand.removePost(1, newAddress)

      //Check Post Array
      expect(postArray.length).to.equal(1);
      expect(postArray[0]).to.equal(newPost2);
      expect(lendingHand.posts_list(newAddress, 0)).to.equal(newPost2);

      //Check Post
      expect(newPost2.post_id).to.equal(0);
      expect(newPost2.reciver).to.equal(newAddress);
      expect(newPost.title).to.equal("Title2");
      expect(newPost.description).to.equal("Description2");
      expect(newPost.goal).to.equal(69);
      expect(newPost.amount_raised).to.equal(10);
      expect(newPost.deadline).to.equal("3/10/2023");
      expect(newPost.num_donors).to.equal(5);

    });
});

describe("Remove Multiple Post", function () {
  it("Deployment should remove a certain index of a reciever's Post array with address and idx inputs", async function () {
    const [owner] = await ethers.getSigners();
    const contract = await ethers.getContractFactory("LendingHand");
    const lendingHand = await contract.deploy();

    // Owners' Address
    const newAddress = owner.address;


    // Creating 2 Test Posts -> CreatePost [address, title, description, money I need, money I got, date deadline, number of donors]
    await lendingHand.createPost(newAddress2, "Akhil", "Akhil was here", 1000, 250, "8/19/2023", 5);
    await lendingHand.createPost(newAddress2, "Aashu", "Aashu was also here", 200, 100, "08/05/2023", 3);
    await lendingHand.createPost(newAddress2, "Diya", "Diya was also here", 100, 90, "06/15/2023", 2);


    // 1 & 2 are the post idxs of the SECOND & THIRD posts in the array
    const newPost2 = await lendingHand.posts_list(newAddress, 1);
    const newPost3 = await lendingHand.posts_list(newAddress, 2);

    // Post array tied to this address -> Tested getPost
    const postArray = await lendingHand.getPost(newAddress);


    






    // RemovePost #1 [post_idx, address] -> No expected return value;
    await lendingHand.removePost(0, newAddress);

    //Check Post Array
    expect(postArray.length).to.equal(2);
    expect(postArray[0]).to.equal(newPost2);
    expect(lendingHand.posts_list(newAddress, 0)).to.equal(newPost2);

      //Test First Postiion
    expect(postArray[0].post_id).to.equal(0);
    expect(postArray[0].reciver).to.equal(newAddress);
    expect(postArray[0].title).to.equal("Aashu");
    expect(postArray[0].description).to.equal("Aashu was also here");
    expect(postArray[0].goal).to.equal(200);
    expect(postArray[0].amount_raised).to.equal(100);
    expect(postArray[0].deadline).to.equal("08/05/2023");
    expect(postArray[0].num_donors).to.equal(3);

      //Test Second Position
    expect(postArray[1].post_id).to.equal(1);
    expect(postArray[1].reciver).to.equal(newAddress);
    expect(postArray[1].title).to.equal("Diya");
    expect(postArray[1].description).to.equal("Diya was also here");
    expect(postArray[1].goal).to.equal(100);
    expect(postArray[1].amount_raised).to.equal(90);
    expect(postArray[1].deadline).to.equal("06/15/2023");
    expect(postArray[1].num_donors).to.equal(2);




    // RemovePost #2
    await lendingHand.removePost(0, newAddress);

    //Check Post Array
    expect(postArray.length).to.equal(1);
    expect(postArray[0]).to.equal(newPost3);
    expect(lendingHand.posts_list(newAddress, 0)).to.equal(newPost3);

    //Check Post (Only post in the array)
    expect(postArray[0].post_id).to.equal(0);
    expect(postArray[0].reciver).to.equal(newAddress);
    expect(postArray[0].title).to.equal("Diya");
    expect(postArray[0].description).to.equal("Diya was also here");
    expect(postArray[0].goal).to.equal(100);
    expect(postArray[0].amount_raised).to.equal(90);
    expect(postArray[0].deadline).to.equal("06/15/2023");
    expect(postArray[0].num_donors).to.equal(2);

  });
});