import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SorteosService } from './sorteos.service';
import { CreateSorteoDTO, UpdateSorteoDTO } from './dtos/sorteo.dto';

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

  @Delete(':/sorteo')
  deleteSorteo(@Param('sorteo') sorteo: string) {
    const id = parseInt(sorteo);
    return this.sorteoService.deleteSorteo(id);
  }

  @Patch(':sorteo')
  updateSorteo(
    @Param('sorteo') sorteo: string,
    @Body() updateFields: UpdateSorteoDTO,
  ) {
    const id = parseInt(sorteo);
    return this.sorteoService.updateSorteo(id, updateFields);
  }
}
