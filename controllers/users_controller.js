const User = require('../models/doctorsDetails');

module.exports.profile = function(req,res){
  if(req.cookies.user_id){
    User.findById(req.cookies.user_id,function(err, user){
            if(user){
         return res.render('profile',{
             title:"User Profile",
             user:user
         })
            }
            return res.redirect('/users/sign-in')
    });
  }else{
      return res.redirect('/users/sign-in')
  }
}

module.exports.signUp = function(req,res){
    return res.render('doc_sign_up',{
        title:"Doc Sign up"
    })
}

module.exports.signIn = function(req,res){
    return res.render('doc_sign_in',{
        title:"Doc Sign in"
    })
}

// get the sign up data 
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in siging up');
            return;
        }
        if(!user){
            User.create(req.body , function(err,user){
                if(err){
                    console.log('error in creating  user in siging up');
                    return;
                }
                return res.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
    });
}

// sign-in and create a session for the user
module.exports.createSession = function(req,res){

   //steps to authenticate
  // find the user
  User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log('error in finding user in siging in');
        return;
    }

    // handle user found
     if(user){
     // handle mismatch of passwords 
        if(user.password != req.body.password){
            return res.redirect('back')
        }
     // handle create session 
     res.cookie('user_id',user.id);
     return res.redirect('/users/profile');
     }else{
    // handel user not found 
    return res.redirect('back');
     }

  });

 

 


}