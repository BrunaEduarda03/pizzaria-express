import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import ILogin from "../../interface/user/ILogin";
import prismaClient from "../../prisma";


class LoginUserService{
  async loginUser({email,password}:ILogin){
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })
    if(!user?.email) throw new Error('email incorrect');
    if(!user?.password) throw new Error('password incorrect');

    const passwordMatch = await compare(password, user.password);//return true/false

    if(!passwordMatch) throw new Error('password incorrect');


    const createToken = sign(
      {
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      subject:user.id,
      expiresIn:'30d'
    }
    )
    
    
    return {
      id:user.id,
      name:user.name,
      email:user.email,
      token:createToken
    }; 
  }
}
export {LoginUserService};