import { Body, Controller, Get, Post } from '@nestjs/common';
import { SorteosService } from './sorteos.service';
import { CreateSorteoDTO } from './dtos/sorteo.dto';

@Controller('sorteos')
export class SorteosController {
  constructor(private sorteoService: SorteosService) {}

  @Get()
  getSorteos() {
    return this.sorteoService.getAllSorteos();
  }

  @Post()
  createSorteo(@Body() newSorteo: CreateSorteoDTO) {
    const { titulo, categoria } = newSorteo;
    return this.sorteoService.createSorteo(titulo, categoria);
  }
}
