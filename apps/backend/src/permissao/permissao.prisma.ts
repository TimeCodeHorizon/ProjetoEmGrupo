/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Permissao, RepositorioPermissao } from '@projeto-auth/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class PermissaoPrisma implements RepositorioPermissao {

    constructor(private readonly prisma: PrismaService) {}
   async salvar(permissao: Permissao): Promise<void> {
        await this.prisma.permissao.upsert({
            where: { id: permissao.id ?? -1 },
            update: permissao,
            create: permissao as any,
          });
    }
    buscarPorId(id: number): Promise<Permissao | null> {
        return this.prisma.permissao.findUnique({ where: { id } });
        
    }
    listar(): Promise<Permissao[]> {
        return this.prisma.permissao.findMany();
    }
    atualizar(permissao: Permissao): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async remover(id: number): Promise<void> {
        await this.prisma.permissao.delete({
            where: { id },
            include: { perfis: true },
          });
    }
}
