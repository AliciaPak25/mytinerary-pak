const UsersControl = require('../models/usersModel')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const sendEmail = async (email, uniqueString) => { 
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',         
        port: 465,
        secure: true,
        auth: {
            user: "verifyemailauthmindhub@gmail.com",    
            pass: "emailVerificationMindhub2022"                           
        },
        tls: {
            rejectUnauthorized: false
        }                                               
    })

    let sender = "verifyemailauthmindhub@gmail.com"  
    let mailOptions = { 
        from: sender,    
        to: email,       
        subject: "MyTinerary | Verify your email ",
        html: `
        <div >
        <h1 style="color:red">Click <a href=https://mytinerary-pak.herokuapp.com/api/verify/${uniqueString}>here</a> to confirm your email, thank you! </h1>
        </div>
        `
    
    };
    await transporter.sendMail(mailOptions, function (error, response) { 
        if (error) { console.log(error) }
        else {
            console.log("Message sent")

        }
    })
};

const usersController = {

    verifyEmail: async (req, res) => {

        const { uniqueString } = req.params; 

        const user = await UsersControl.findOne({uniqueString: uniqueString})
        console.log(user)
        if (user) {
            user.verifiedEmail = true 
            await user.save()
            res.redirect("http://localhost:3000/")
        }
        else { res.json({ success: false, response: "Your email is not verified" }) }
    },

    signUpUser: async (req, res)=>{
        let {firstName, lastName, email, password, photoURL, country, from} = req.body.newUser
        try {
            const userExists = await UsersControl.findOne({email})
            if (userExists) {
                if (userExists.from.indexOf(from) !== -1) {
                    res.json({
                            success: false /* true */ , 
                            from: "form-SignUp",
                            message: "You have already registered in this way. Please, sign in."
                        })
                }else{
                    const hashedPassword = bcryptjs.hashSync(password, 10)
                    userExists.from.push(from)
                    userExists.password.push(hashedPassword)
                    if(from === "form-SignUp"){
                        userExists.uniqueString = crypto.randomBytes(15).toString('hex')
                        await userExists.save()
                        await sendEmail(email, userExists.uniqueString)

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

                const newUser = await new UsersControl({
                    firstName,
                    lastName,
                    email,
                    password: [hashedPassword],
                    photoURL,
                    country,
                    uniqueString: crypto.randomBytes(15).toString('hex'),
                    verifiedEmail: false,
                    from: [from],
                })
                if (from !== "form-SignUp") {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "form-SignUp",
                        message: "Congratulations! Your account has been successfully created with " +from
                    })
                }else{
                    await newUser.save()
                    await sendEmail(email, newUser.uniqueString)

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
                res.json({success: false, message: "The user or password does not match. Try again."})
            } else {
                if (from !== "form-SignIn") { 
                    
                    let passwordMatches =  userExists.password.filter(pass =>bcryptjs.compareSync(password, pass))
                    
                    if (passwordMatches.length > 0) { 
                        
                            const userData = {
                                        id: userExists._id,
                                        firstName: userExists.firstName,
                                        lastName: userExists.lastName,
                                        email: userExists.email,
                                        photoURL: userExists.photoURL,
                                        from: userExists.from
                                        }
                        await userExists.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn: 60* 60* 24})
                        
                        res.json({
                                success: true,  
                                from: from,
                                response: {token, userData}, 
                                message:"Welcome back "+userData.firstName+" "+userData.lastName,
                                })
                    
                    }else {
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not registered with "+from+". If you want to log in with this method, you must sign up with " +from
                        })
                    }
                } else {
                        
                        let passwordMatches =  userExists.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        console.log(passwordMatches)
                        console.log("password serach result " +(passwordMatches.length > 0))
                        if(passwordMatches.length > 0){
                            if(userExists.verifiedEmail){
                                const userData = {
                                    id: userExists._id,
                                    firstName: userExists.firstName,
                                    lastName: userExists.lastName,
                                    email: userExists.email,
                                    photoURL: userExists.photoURL,
                                    from: userExists.from
                                    }
                                const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn:  60* 60*24 })
                                res.json({ success: true, 
                                    from: from, 
                                    response: {token, userData}, 
                                    message:"Welcome back "+userData.firstName+" "+userData.lastName,
                                })
                            }else{
                                res.json({ success: false, 
                                    from: from, 
                                    message:"Your email is not verified! Please, check your inbox to complete your sign up."
                                  }) 
                            }
                        
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"The user or password does not match. Try again.",
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

    verifyToken:(req, res) => {
        console.log(req.user)
        if(!req.err){
        res.json({success:true,
                response:{id:req.user.id, firstName:req.user.firstName,lastName:req.user.lastName, email:req.user.email, photoURL: req.user.photoURL, from:"token"},
                message:"Welcome back "+req.user.firstName+" "+req.user.lastName}) 
        }else{
            res.json({success:false,
            message:"Please, sign in again."}) 
        }
    }
}
module.exports = usersController