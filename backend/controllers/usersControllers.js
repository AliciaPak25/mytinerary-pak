const UsersControl = require('../models/usersModel')
const bcryptjs = require('bcryptjs')

const usersController = {
    signUpUser: async (req, res)=>{
        let {firstName, lastName, email, password, photoURL, country, from} = req.body.userData
        console.log(req.body)
        try {
            const userExists = await UsersControl.findOne({email})
        console.log(userExists.from.indexOf(from))
            if (userExists) {
                if (userExists.from.indexOf(from) !== -1) {
                    res.json({
                            success: false, 
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
    }
}
module.exports = usersController