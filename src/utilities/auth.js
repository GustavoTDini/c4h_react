import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import fs from 'fs'
//
// const privateKey = fs.readFileSync('./keys/private.key', 'utf8');
// const publicKey = fs.readFileSync('./keys/public.key', 'utf8');
// const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
// const jwtAlgorithm = "RS256";

export function hashpassword(password){
    return bcrypt.hashSync(password, 10);
}

export async function comparePassword(passowrd, hashedPassword){
    return await bcrypt.compare(passowrd, hashedPassword);
}

// export function sign(accountId){
//     const token = {accountId};
//     return jwt.sign(token, privateKey,{expiresIn: jwtExpires, algorithm: jwtAlgorithm})
// }
//
// export async function verify(token: string){
//     try{
//         const decoded = await jwt.verify(token, publicKey, {algorithm:[jwtAlgorithm]});
//         return { accountId: decoded.accountId}
//     }catch(error){
//         console.log (`Verify: ${error}`);
//         return null;
//     }
// }
