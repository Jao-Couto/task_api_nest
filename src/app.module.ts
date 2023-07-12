import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@teste.vvzloj9.mongodb.net/?retryWrites=true&w=majority'),
        AuthModule,
        TasksModule,
        UsersModule
    ]
})
export class AppModule { }
