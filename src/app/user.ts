export class User {
    id!: number;
    usernom: string;
    email: string;
    password: string;
  
    constructor( id:number, username: string, email: string, password: string) {
      this.usernom = username;
      this.email = email;
      this.password = password;
    }
  }

