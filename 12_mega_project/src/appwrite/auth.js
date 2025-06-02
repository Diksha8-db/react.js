import conf from '../conf/conf'
import {Client, Account, ID} from "appwrite"

// quality code
export class AuthService {
    client = new Client();
    account;

    // constructor
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
           const userAccount = await this.account.create(ID.unique(), email, password, name);

           if(userAccount){
            // call another method directly login kar lo
             return this.login({email, password});

           }
           else{
            return userAccount;
           }
        }
        catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession         (email,password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentuser(){
        try{
            return this.account.get();
        }
        catch(error){
            throw error;
        }
           
        return null;
    }

    async logout(){
        try{
           return this.account.deleteSessions();
        }
        catch(err){
            throw err;
        }
    }
}

// object creation
const authService = new AuthService();

// exporting the object
export default authService;


// agar backend me change ho the we just need to change this code nothing else👍