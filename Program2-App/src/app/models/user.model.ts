
export class User {
    userId: number;
    username: string;
    password: string;
    userRole: string;
    fullname: string;
   

    constructor(userId: number, username: string, userRole: string, fullname: string, password?: string) {
        this.userId = userId;
        this.username = username;
        this.userRole = userRole;
        this.fullname = fullname;
        this.password = password || null;
    }
}
