import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './DataBase/database.module';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { HelpersModule } from './helpers/helpers.module';
import { ModelsModule } from './models/models.module';
import { CoreModule } from './core/core.module';
@Module({
  imports: [DatabaseModule, MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), UserModule, HelpersModule, ModelsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
