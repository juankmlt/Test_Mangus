
import { UserDto } from "src/user/dto/user.dto";

export class ClientDto extends UserDto{
    name? : string;
    lastname? : string;
    address? : string;
    phone? : number;
    username?: string;
    password?: string;
}