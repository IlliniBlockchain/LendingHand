describe("Get Post", function () {
    it("Deployment should get a certain Posts array with an address input", async function () {
      const [owner] = await ethers.getSigners();
      const contract = await ethers.getContractFactory("LendingHand");
      const lendingHand = await contract.deploy();

      // Owners' Address
      const newAddress = owner.address;


      // Creating 2 Test Posts -> CreatePost [address, title, description, money I need, money I got, date deadline, number of donors]
      await lendingHand.createPost(newAddress, "Title1", "Description1", 999, 0, "8/19/2023", 10);
      await lendingHand.createPost(newAddress, "Title2", "Description2", 69, 10, "03/20/2023", 5);


      // 12 & 24 are post idxs + 2 posts are created to this guy's posts array
      const newPost1 = await lendingHand.posts_list(newAddress, 12);
      const newPost2 = await lendingHand.posts_list(newAddress, 24);

      // Post array tied to this address -> Tested getPost
      const postArray = await lendingHand.getPosts(newAddress);


      //Check Post Array
      expect(postArray.length).to.equal(2);
      expect(postArray[0]).to.equal(newPost1);
      expect(postArray[1]).to.equal(newPost2);

    });
});


describe("Between Multiple Posts", function () {
  it("Deployment should get a certain Posts array between multiple addresses", async function () {
    const [owner1, owner2] = await ethers.getSigners();
    const contract = await ethers.getContractFactory("LendingHand");
    const lendingHand = await contract.deploy();

    // Owners' Address
    const newAddress1 = owner1.address;
    const newAddress2 = owner2.address;


    // Creating 2 Test Posts for address1 -> CreatePost [address, title, description, money I need, money I got, date deadline, number of donors]
    await lendingHand.createPost(newAddress1, "Title1", "Description1", 999, 0, "8/19/2023", 10);
    await lendingHand.createPost(newAddress1, "Title2", "Description2", 69, 10, "03/20/2023", 5);

    // Creating 2 Test Posts for address2
    await lendingHand.createPost(newAddress2, "Akhil", "Akhil was here", 1000, 250, "8/19/2023", 5);
    await lendingHand.createPost(newAddress2, "Aashu", "Aashu was also here", 200, 100, "08/05/2023", 3);
    await lendingHand.createPost(newAddress2, "Diya", "Diya was also here", 100, 90, "06/15/2023", 2);


    // 0 & 1 are post idxs + 2 posts are created to address1's post array
    const newPost1_1 = await lendingHand.posts_list(newAddress1, 0);
    const newPost1_2 = await lendingHand.posts_list(newAddress1, 1);

    // Ditto but for address 2
    const newPost2_1 = await lendingHand.posts_list(newAddress1, 0);
    const newPost2_2 = await lendingHand.posts_list(newAddress1, 1);
    const newPost2_3 = await lendingHand.posts_list(newAddress1, 2);


    // 2 Post arrays tied to two addresses -> Testing getPost
    const postArray1 = await lendingHand.getPosts(newAddress1);
    const postArray2 = await lendingHand.getPosts(newAddress2);



    //Check Post Arrays

    //Length
    expect(postArray1.length).to.equal(2);
    expect(postArray2.length).to.equal(3);

    //Positions Array 1
    expect(postArray1[0]).to.equal(newPost1_1);
    expect(postArray1[1]).to.equal(newPost1_2);

    //Positions Array 2
    expect(postArray1[0]).to.equal(newPost2_1);
    expect(postArray1[1]).to.equal(newPost2_2);
    expect(postArray1[2]).to.equal(newPost2_3);
  });
});