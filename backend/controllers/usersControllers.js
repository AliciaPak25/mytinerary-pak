const UsersControl = require('../models/usersModel')
const bcryptjs = require('bcryptjs')

const usersController = {
    signUpUser: async (req, res)=>{
        let {firstName, lastName, email, password, photoURL, country, from} = req.body.newUser
        console.log(req.body)
        try {
            const userExists = await UsersControl.findOne({email})
        console.log(userExists.from.indexOf(from))
            if (userExists) {
                if (userExists.from.indexOf(from) !== -1) {
                    res.json({
                            success: true, 
                            from: "form-SignUp",
                            message: "You have already registered in this way. Please, sign in."
                        })
                }else{
                    const hashedPassword = bcryptjs.hashSync(password, 10)
                    userExists.from.push(from)
                    userExists.password.push(hashedPassword)
                    if(from === "form-SignUp"){
                        //POSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
                        await userExists.save()

                        res.json({
                            success: true, from: "form-SignUp",
                            message: "We've sent you an email! Please, check your email and verify your account to continue with the registration process and to add it to your sign in methods."
                        })
                    }else{
                        userExists.save()

                        res.json({
                            success: true,
                            from: "form-SignUp",
                            message: "We've added " +from+ " into your sign in methods."
                        })
                    }
                }

            }else{
                const hashedPassword = bcryptjs.hashSync(password, 10)

                const newUser = await new User({
                    firstName,
                    lastName,
                    email,
                    verifiedEmail: true,
                    password: [hashedPassword],
                    photoURL,
                    country,
                    from: [from],
                })
                if (from !== "form-SignUp") {
                    await newUser.save()
                    res.json({
                        success: true.valueOf,
                        from: "form-SignUp",
                        message: "Congratulations! Your account has been successfully created with " +from
                    })
                }else{
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "form-SignUp",
                        message: "We've sent you an email! Please, check your email box and verify your account to continue."
                    })
                }
            }
        }catch (error) {
            console.log(error)
            res.json({success: false, message: "Something went wrong. Try again in a few seconds."})
        }
    },

    signInUser: async (req, res) => {
        const {email, password, from} = req.body.logedUser
        try {
            const userExists = await UsersControl.findOne({email})

            if (!userExists) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({success: false, message: "The email address provided has not been registered. Please, sign up."})
            } else {
                if (from !== "form-SignIn") { 
                    
                    let passwordMatches =  userExists.password.filter(pass =>bcryptjs.compareSync(password, pass))
                    
                    if (passwordMatches.length > 0) { 
                       
                        const userData = {
                                        id: userExists._id,
                                        firstName: userExists.firstName,
                                        lastName: userExists.lastName,
                                        email: userExists.email,
                                        from: userExists.from
                                        }
                        await userExists.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn:  60* 60*24 })
                        
                        res.json({
                                success: true,  
                                from: from,
                                response: {token,userData}, 
                                   message:"Welcome back "+userData.firstName.lastName,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not registered with "+from+". If you want to log in with this method, you must sign up with " +from
                          })
                    }
                } else { 
                    if(userExists.verifiedEmail){
                        
                        let passwordMatches =  userExists.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        console.log(passwordMatches)
                        console.log("password serach result " +(passwordMatches.length > 0))
                        if(passwordMatches.length > 0){
                            
                        const userData = {
                            id: userExists._id,
                            firstName: userExists.firstName,
                            lastName: userExists.lastName,
                            email: userExists.email,
                            from: userExists.from
                            }
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn:  60* 60*24 })
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData}, 
                            message:"Welcome back "+userData.firstName.lastName,
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"The user or password does not match. Try again.",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:"Your email is not verified! Please, check your inbox to complete your sign up."
                          }) 
                    }

                } //SI NO ESTA VERIFICADO
            }

        } catch (error) {
            console.log(error);
            res.json({success: false, message: "Something went wrong. Try again in a few seconds." })
        }
    },

    signOutUser: async (req, res) => {
        console.log(req.body)
        const email = req.body.closedUser
        const user = await UsersControl.findOne({email})
        await user.save()
        res.json(console.log('this session has been signed out ' + email))
    },
}
module.exports = usersController