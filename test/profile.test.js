const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Create Profile", function () {
  it("Owner should be able to create a profile", async function () {
    const [owner] = await ethers.getSigners();

    const LendingHand = await ethers.getContractFactory("LendingHand");

    const hardhatLH = await LendingHand.deploy();

    await hardhatLH.createProfile(owner.address, "vikkstar", "Picture", "My name is Vikram and I am a CS + Econ Major"); //creates sample profile

    const newProfile = await hardhatLH.profile_map(owner.address);

    expect(newProfile.user).to.equal(owner.address);
    expect(newProfile.username).to.equal("vikkstar");
    expect(newProfile.profile_pic).to.equal("Picture");
    expect(newProfile.bio).to.equal("My name is Vikram and I am a CS + Econ Major");

    const newAddress = await hardhatLH.profile_map_keys(0);
    expect(newAddress).to.equal(owner.address);

    const keys = await hardhatLH.getNumberUsers();
    expect(keys).to.equal(1);

  });
});

describe("Create Multiple Profiles", function () {
  it("Multiple profiles should be able to be created", async function () {
    const [owner, secondOwner] = await ethers.getSigners();

    const LendingHand = await ethers.getContractFactory("LendingHand");

    const hardhatLH = await LendingHand.deploy();

    await hardhatLH.createProfile(owner.address, "vikkstar", "Picture", "My name is Vikram and I am a CS + Econ Major"); //creates sample profile
    
    await hardhatLH.createProfile(secondOwner.address, "user", "user_pic", "user_bio");

    const newProfile = await hardhatLH.profile_map(owner.address);

    const newerProfile = await hardhatLH.profile_map(secondOwner.address);

    expect(newProfile.user).to.equal(owner.address);
    expect(newProfile.username).to.equal("vikkstar");
    expect(newProfile.profile_pic).to.equal("Picture");
    expect(newProfile.bio).to.equal("My name is Vikram and I am a CS + Econ Major");

    expect(newerProfile.user).to.equal(secondOwner.address);
    expect(newerProfile.username).to.equal("user");
    expect(newerProfile.profile_pic).to.equal("user_pic");
    expect(newerProfile.bio).to.equal("user_bio");

    const newAddress = await hardhatLH.profile_map_keys(0);
    expect(newAddress).to.equal(owner.address);

    const newerAddress = await hardhatLH.profile_map_keys(1);
    expect(newerAddress).to.equal(secondOwner.address);

    const keys = await hardhatLH.getNumberUsers();
    expect(keys).to.equal(2);
  });
});

describe("Update Profile", function () {
  it("Owner should be able to update their profile", async function () {
    const [owner] = await ethers.getSigners();

    const LendingHand = await ethers.getContractFactory("LendingHand");

    const hardhatLH = await LendingHand.deploy();

    await hardhatLH.createProfile(owner.address, "vikkstar", "Picture", "My name is Vikram and I am a CS + Econ Major"); //creates sample profile

    const newProfile = await hardhatLH.profile_map(owner.address);

    expect(newProfile.user).to.equal(owner.address);
    expect(newProfile.username).to.equal("vikkstar");
    expect(newProfile.profile_pic).to.equal("Picture");
    expect(newProfile.bio).to.equal("My name is Vikram and I am a CS + Econ Major");

    const newAddress = await hardhatLH.profile_map_keys(0);
    expect(newAddress).to.equal(owner.address);



    await hardhatLH.updateProfile(owner.address, "Test", "TestPic", "TestBio"); //updates Profile

    const updatedProfile = await hardhatLH.profile_map(owner.address);

    expect(updatedProfile.user).to.equal(owner.address);
    expect(updatedProfile.username).to.equal("Test");
    expect(updatedProfile.profile_pic).to.equal("TestPic");
    expect(updatedProfile.bio).to.equal("TestBio");

    const updatedAddress = await hardhatLH.profile_map_keys(0);
    expect(updatedAddress).to.equal(owner.address);


  });
});

describe("Delete Profile", function () {
  it("Owner should be able to delete a profile", async function () {
    const [owner] = await ethers.getSigners();

    const LendingHand = await ethers.getContractFactory("LendingHand");

    const hardhatLH = await LendingHand.deploy();

    await hardhatLH.createProfile(owner.address, "vikkstar", "Picture", "My name is Vikram and I am a CS + Econ Major"); //creates sample profile

    const newProfile = await hardhatLH.profile_map(owner.address);

    expect(newProfile.user).to.equal(owner.address);
    expect(newProfile.username).to.equal("vikkstar");
    expect(newProfile.profile_pic).to.equal("Picture");
    expect(newProfile.bio).to.equal("My name is Vikram and I am a CS + Econ Major");

    const newAddress = await hardhatLH.profile_map_keys(0);
    expect(newAddress).to.equal(owner.address);

    await hardhatLH.deleteProfile(owner.address);
    const deletedProfile = await hardhatLH.profile_map(owner.address);

    expect(deletedProfile.user).to.equal("0x0000000000000000000000000000000000000000");
    expect(deletedProfile.username).to.equal("");
    expect(deletedProfile.profile_pic).to.equal("");
    expect(deletedProfile.bio).to.equal("");

    const keys = await hardhatLH.getNumberUsers();
    expect(keys).to.equal(0);
  });
});