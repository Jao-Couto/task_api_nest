import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' }
        }),
        PassportModule
    ],
    controllers: [
        AuthController,],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
