/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PermissaoController } from './permissao.controller';
import { PermissaoPrisma } from './permissao.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [PermissaoController],
  providers: [PermissaoPrisma],
})
export class PermissaoModule {}
