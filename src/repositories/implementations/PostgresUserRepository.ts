import { User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";

export class PostgresUserRepository implements IUserRepository{
    private users: User[];

    async findByEmail(email: string): Promise<User> {
        const user = new User({
            email: "adsasdasdasd",
            name: "asdasdasdasdasd",
            password: "asdasdasdasd"
        });
        
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}