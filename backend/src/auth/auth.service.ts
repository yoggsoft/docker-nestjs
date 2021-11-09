import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, password: string): Promise<any> {
		const user = await this.userService.findByUsername(username);

		if (user && user.password === password) {
			const { password, ...rest } = user;
			return rest;
		}

		return null;
	}

	async login (user: any) {
		const payload = { name: user.name, sub: user.id };

		return {
			access_token: this.jwtService.sign(payload)
		}
	}
}
