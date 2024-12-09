import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PermissaoModule } from './permissao/permissao.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [PermissaoModule, DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
