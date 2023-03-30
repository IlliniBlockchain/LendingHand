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
    function updatePost(address receiver, uint256 post_id,string title, string description, uint256 goal, uint256 amount_raised, string deadline) public {
        // call receiver's post array at idx 'post_id'
        Post[] posts = posts_list[receiver];
        Post post = posts[post_id];
        // change all attributes to ones passed by user
        post.title = title;
        post.description = description;
        post.goal = goal;
        post.amount_raised = amount_raised;
        post.deadline = deadline;
    }

    // deletes post, removes it from receivers array
    // add paramters
    //@akhil
    function removePost() public {
        /* can not resize arrays in solidity, make new array and move 
        everything but deleted post over*/

        /* because indexing changes when deleting post form array, update post index (post_id)
         of every post*/
    }


    //if you want to give money
    //  @manas
    function fundPost(address receiver, int post_id) public{
        // fund receiver
        //update post with new amount
    }

    
}