import { hash } from "bcryptjs";
import IUser from "../../interface/user/IUser";
import prismaClient from "../../prisma";

class CreateUserService {
  async createUser({name,email,password}:IUser){
    //verifica se enviou um email
    if(!email) throw new Error('Email Incorrect!');

    //verifica se o email já está cadastrado no banco
    const alreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(alreadyExists) throw new Error('User already registered!');

    const passwordHash = await hash(password,8);
    //cadastrar usuário
    const user = await prismaClient.user.create({
      data:{
      name: name,
      email: email,
      password: passwordHash,
    },
    select:{
      id:true,
      name:true,
      email:true,

    }
  })
   return user; 
  }
}

export {CreateUserService}