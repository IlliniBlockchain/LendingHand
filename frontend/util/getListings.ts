import Web3 from 'web3';

interface Listing {
    id: number;
    reciever: string,
    title: string,
    description: string,
    goal: number,
    amount_raised: number, 
    deadline: number,
    num_donors: number,
}

// Instantiate web3 with the appropriate provider for your blockchain network
const web3 = new Web3('http://localhost:8545');

// Define the contract address and ABI
const contractAddress = '0x1234567890abcdef...';
const contractAbi = [{...}]; // ABI definition goes here

// Get a reference to the smart contract
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Define the getListings function
async function getListings(address: string): Promise<Listing[]> {
  // Call the smart contract's getListings function
  const result = await contract.methods.getPosts(address).call();

  // Format the result into an array of Listing objects
  const listings = result.map((listing: any) => ({
    id: listing.id,
    reciever: listing.reciever,
    title: listing.title,
    description: listing.description,
    goal: listing.goal,
    amount_raised: listing.amount_raised, 
    deadline: listing.deadline,
    num_donors: listing.num_donors,
  }));

  // Return the array of Listing objects
  return listings;
}