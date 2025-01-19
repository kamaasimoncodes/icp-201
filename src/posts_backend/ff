import Result "mo:base/Result";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";


actor {

  //define the type of uder profile

  type User={
    id:Principal;
    username:Text;
    email:Text;
    phonenumber:Text;
    gender:Text;
    location:Text;
    description:Text;
    image:Text;
    matchdescription:Text;
  };

  //define storage for the users

  let users=HashMap.HashMap<Text,User>(1,Text.equal,Text.hash);
  let usersonprincipal=HashMap.HashMap<Principal,User>(2,Principal.equal,Principal.hash);
  //define function to register user

  public shared ({caller}) func create_user_profile(username:Text,email:Text,phonenumber:Text,gender:Text,location:Text,description:Text,image:Text,matchdescription:Text):async Result.Result<Text,Text>{

    //check to make sure the surname is unique

    switch(users.get(username)){
      case(null){

        //create a new user profile

        let newuser:User={
          id=caller;
          username;
          email;
          phonenumber;
          gender;
          location;
          description;
          image;
          matchdescription;
        };

        users.put(username,newuser);
        usersonprincipal.put(caller,newuser);
        return #ok("profile created successfully");
      };
      case (?_user){
        return #err("username is already taken")
      }
    }
  };

//get user
    public query func get_user(username:Text):async Result.Result<User,Text>{
  
     switch(users.get(username)){
      case (null){
        return #err("user not found");
      };
      case (?found){
        return #ok(found);
      }
     }

  };

//get all available users
   public query func get_all_users():async[User]{
      

      return Iter.toArray(users.vals());
    };


    //update user profile

    public shared ({caller}) func update_user_profile(username:Text,email:Text,phonenumber:Text,gender:Text,location:Text,description:Text,image:Text,matchdescription:Text):async Result.Result<Text,Text>{

    //check to make sure the surname is unique

    switch(users.get(username)){
      case(null){

        //create a new user profile

        return #err("failed to update ");
      };
      case (?_user){
        let updateduser:User={
          id=caller;
          username;
          email;
          phonenumber;
          gender;
          location;
          description;
          image;
          matchdescription;
        };

        users.put(username,updateduser);
        return #ok("profile updated successfully");
      }
    }
  };
//whoami

public shared query ({caller}) func whoami():async Text{

  return Principal.toText(caller);
};

}