/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Param, Put } from '@nestjs/common';
import { PermissaoPrisma } from './permissao.prisma';
import { AtualizarPermissao, ExcluirPermissao, ObterPermissao, ObterTodasPermissao, Permissao, RegistrarPermissao } from '@projeto-auth/core';

@Controller('permissoes')
export class PermissaoController {


    constructor(
        private readonly repo: PermissaoPrisma
    ){}

    @Post()
    async registrar(@Body() permissao: Permissao) {
        const CasoDeUso = new RegistrarPermissao(this.repo);
        await CasoDeUso.executar(permissao);
    }

    @Get()
    async obterTodasPermissoes(): Promise<Permissao[]> {
        const CasoDeUso = new ObterTodasPermissao(this.repo);
        return await CasoDeUso.executar();
      }
    @Get(':id')
    async obterPermissao(@Param('id') id: string): Promise<Permissao> {
        const CasoDeUso = new ObterPermissao(this.repo);
        return await CasoDeUso.executar({id: +id});
      }

    @Delete(':id')
    async excluirPermissao(@Param('id') id: string) {
        const CasoDeUso = new ExcluirPermissao(this.repo)
        await CasoDeUso.executar({id: +id});
    }

    @Put()
    async atualizarPermissao(@Body() permissao: Permissao) {
        const CasoDeUso = new AtualizarPermissao(this.repo);
        return await CasoDeUso.executar(permissao);
    }
}