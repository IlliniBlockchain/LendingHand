pragma solidity ^0.8.17;


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
    mapping(address => Profile) profile_map;
    // mapping receivers to An array of their posts
    mapping(address => Post[]) public posts_list;

    // users can make a profile
    // need to add arguments
    //@amit
    function createProfile() public {
        // initialize profile object, 
        // define attributes of profile
    }

    //receivers can make a post
    //@Yug
    function createPost() public {
        // initialize post object, 
        //define attributes of post, so fill in user provided receiver address, title, description, etc.
        // create post_id, should just be index of the receiver's posts array idx.
        //push it to array of receiver's posts
        
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
// NEW @Akhil


    
    
    
    //if you want to give money
    //  @manas
    function fundPost(address receiver, int post_id) public{
        // fund receiver
        //update post with new amount
    }
    
}