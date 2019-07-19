

export class Customer {
    userId: number;
    username: string;
    password: string;
    userRole: string;
    fullname: string;
    // userProfile: Profile;

    constructor(userId: number, username: string, userRole: string, fullname: string, password?: string) {
        this.userId = userId;
        this.username = username;
        this.password = password || null;
        this.userRole = userRole;
        this.fullname = fullname;
    }



}