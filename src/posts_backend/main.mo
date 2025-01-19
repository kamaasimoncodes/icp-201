import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";

actor {

   type User={
    id:Principal;
    username:Text;
    email:Text;
    githublink:Text;
    projects:[Project];
    userimage:Text;
    skills:Text;
  };
  type Project={
    owner:Text;
    nameofproject:Text;
    githublink:Text;
    projectid:Text;
    description:Text;
    chain:Text;
    techused:Text;
    coverimage:Text;
  };
  
  let users=HashMap.HashMap<Principal,User>(1,Principal.equal,Principal.hash);
  let projects=HashMap.HashMap<Text,Project>(2,Text.equal,Text.hash);

  //register new user profile
  public shared ({caller}) func register_user(username:Text,email:Text,glink:Text,skills:Text,userimage:Text):async Result.Result<Text,Text>{


    //check if user is already registered


    switch(users.get(caller)){

      case (null){

        //create a new profile

        let new_profile:User={
           id=caller;
           username;
           email;
           githublink=glink;
           projects=[];
           userimage;
           skills;
        };
        users.put(caller,new_profile);
        return #ok("profile created successfully")
      };
      case(?user){

        //update profile

          let new_profile:User={
           id=caller;
           username;
           email;
           githublink=glink;
           projects=user.projects;
           userimage;
           skills;
        };
        users.put(caller,new_profile);

        return #ok("profile updated")
      }
    }
  };
  //get all users
  public query func get_all_users():async[User]{
      

      return Iter.toArray(users.vals());
  };

  //get all projects
  public query func get_all_projects():async[Project]{
      

      return Iter.toArray(projects.vals());
    };

    //add project

public shared ({caller}) func add_project( nameofproject:Text,githublink:Text,description:Text,chain:Text,techused:Text,coverimage:Text):async Result.Result<Text,Text>{

  //check if user profile is created
  switch(users.get(caller)){
    case (null){
      return #ok("profile not created create on please")
    };
    case (?found){

      //add new project
     let id:Text=Int.toText(Time.now());
      let new_project:Project={
            owner=found.username;
            nameofproject;
            githublink;
            projectid=id;
            description;
            chain;
            techused;
           coverimage;
      };
      projects.put(nameofproject,new_project);

      //update on users side
       let dappusers=Buffer.fromArray<Project>(found.projects);
        dappusers.add(new_project);

        let updateduser=Buffer.toArray(dappusers);
        let updated:User={
          id=caller;
           username=found.username;
           email=found.email;
           githublink=found.githublink;
           projects=updateduser;
           userimage=found.userimage;
           skills=found.skills;
        };
        users.put(caller,updated);
      return #ok("project added")
    }
  }
};
   

    //get project

     
  public query func get_project(projectid:Text):async Result.Result<?Project,Text>{

    switch(projects.get(projectid)){
      case (null){
        return #err("project not found")
      };
      case (?found){
        return #ok(?found)
      }
    }
  };

  //get my projects
  //get my houses
  public shared ({caller}) func get_my_profile():async Result.Result<User,Text>{

    switch(users.get(caller)){
      case (null){
        return #err("failed")
      };
      case(?found){
        return #ok(found)
      }
    }
  };
    //get user
public query func get_user(id:Text):async Result.Result<?User,Text>{
     let userid=Principal.fromText(id);
    switch(users.get(userid)){
      case (null){
        return #err("user not found")
      };
      case (?found){
        return #ok(?found)
      }
    }
  };
    //login user
    public shared query ({caller}) func whoami():async Text{

         return Principal.toText(caller);
};
};
