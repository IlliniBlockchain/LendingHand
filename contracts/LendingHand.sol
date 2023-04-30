pragma solidity ^0.8.17;
import "hardhat/console.sol";

contract LendingHand {
// profile info
    struct Profile {
        address user;
        string username;
        string profile_pic;
        string bio;
    }
//if you want money
    // define Post attributes
    struct Post {
        uint post_id; // identify post id by its index in the Posts array
        address receiver;
        string title;
        string description;
        uint256 goal;
        uint256 amount_raised;
        string deadline;
        uint256 num_donors;
    }
    // mapping addresses to profiles
    mapping(address => Profile) public profile_map;
    //keeps track of all the keys in the map
    address[] public profile_map_keys;
    // mapping receivers to An array of their posts
    mapping(address => Post[]) public posts_list;
    


    //checks if address is valid
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not valid address");
        _;
    }


    /*
    //In case we eventually need a getter
    function getProfileMap() view public returns (address[] memory, Profile[] memory) {
        address[] memory mAddresses = new address[](profile_map_keys.length);
        Profile[] memory mProfiles = new Profile[](profile_map_keys.length);
        for (uint i = 0; i < profile_map_keys.length; i++) {
            mAddresses[i] = profile_map_keys[i];
            mProfiles[i] = profile_map[profile_map_keys[i]];
        }
        return (mAddresses, mProfiles);
    }
    */

    function getNumberUsers() view public returns (uint){
        return profile_map_keys.length;
    }
    // users can make a profile
    // need to add arguments
    //@amit
    function createProfile(address _user, string calldata _username, string calldata _profile_pic, string calldata _bio) public validAddress(_user) {
        // initialize profile object, 
        // define attributes of profile
        Profile memory profile = Profile(_user, _username, _profile_pic, _bio);
        profile_map[_user] = profile;
        profile_map_keys.push(_user);
    }

    //added a couple of extra methods for profile for extra functionality
    
    //given an existing address in the mapping, it'll update the users profile!
    function updateProfile(address _user, string calldata _username, string calldata _profile_pic, string calldata _bio) public validAddress(_user)  {
        delete profile_map[_user];
        Profile memory profile = Profile(_user, _username, _profile_pic, _bio);
        profile_map[_user] = profile;
    }
    
    //deletes a Profile
    function deleteProfile(address _user) public validAddress(_user) {
        delete profile_map[_user];

        address[] memory new_keys = new address[](profile_map_keys.length - 1); //created a new array for resizing purposes
        uint sub = 0;
        for (uint i = 0; i < profile_map_keys.length; i++) {
            if (profile_map_keys[i] != _user) {
                new_keys[i - sub] = profile_map_keys[i];
            } else {
                sub = 1;
            }
        }
        profile_map_keys = new_keys;
    }

    //receivers can make a post
    //@Yug
    function createPost(address receiver, string calldata title, string calldata description, uint256 goal, uint256 amount_raised, string calldata deadline, uint256 num_donors) public {
        // initialize post object, 
        //define attributes of post, so fill in user provided receiver address, title, description, etc.
        // create post_id, should just be index of the receiver's posts array idx.
        //push it to array of receiver's posts
        //Note: Currently assumes address is in post

        Post memory post;
        post.receiver = receiver;
        post.title = title;
        post.description = description;
        post.goal = goal;
        post.amount_raised = amount_raised;
        post.deadline = deadline;
        post.num_donors = num_donors;
        post.post_id = posts_list[receiver].length;
        posts_list[receiver].push(post);
    }

    // update posts attributes,  need to add more parameters
    //@vikram
    function updatePost(address receiver, uint256 post_id) public {
        // call receiver's post array at idx 'post_id'
        // change all attributes to ones passed by user
    }

    // deletes post, removes it from receivers array
    // add paramters
    //@akhil
    function removePost(uint post_idx, address reciever_address) public view {
        Post[] memory these_posts = getPosts(reciever_address);

        for (uint i = post_idx; i < these_posts.length - 1; i++) {
            these_posts[i] = these_posts[i + 1];
            these_posts[i].post_id--;
        }
        delete these_posts[these_posts.length - 1];
    }

/*
        Akhil's Notes:
        'post_idx' is the index that refers to which post in the Post[] array you wanna get rid of. [Are we getting the post based on post_idx or post address?]
        Presuming we can only access a certain Post[] array depending on what the reciever's address is, a getPost array was implemented where an array of Post struct 
        is returned based on the recievers address as a parameter.
        
        There should be a function for getting a particular reciever's post??
        Making one right below this function
*/      

// NEW @Akhil
    function getPosts(address this_address) public view returns (Post[] memory) {
        return posts_list[this_address];
    }


    //if you want to give money
    //  @manas
    /*
    function fundPost(address receiver, int post_id, int amount) public{
        // fund receiver
        //update post with new amount
        int i; // define vars
        Post  post_to_donate_to;        
        Post[] user_posts = posts_list[receiver]; // get posts of the receiver
        
        // loop through users posts and find the post that matches our post_id
        for(i = 0; i < user_posts.length; i++){
            if(user_posts[i].post_id == post_id){
                post_to_donate_to = user_posts[i];
            }
        }

        // send to receiver and update struct
        receiver.send(amount);
        post_to_donate_to.amount_raised += amount;
    }
    */
    
}