import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {


    constructor (
        private usersRepository : IUsersRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: CreateUserRequestDTO) {
     const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

     if(userAlreadyExists) {
        throw new Error("User already exists.")
     }

     const user = new User(data);

     await this.usersRepository.save(user)

     this.mailProvider.sendMail({
        to: {
            name: data.name,
            email: data.email,
        },
        from: {
            name: 'My App Team',
            email: 'app@myapp.com',
        },
        subject: 'Welcome to the platform',
        body: '<p>You can now start using our platform.</p>'
     })
    }
}