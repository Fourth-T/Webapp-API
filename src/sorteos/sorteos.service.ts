import { Injectable } from '@nestjs/common';
import { Sorteo } from './sorteo.entity';

@Injectable()
export class SorteosService {
  private sorteos: Sorteo[] = [
    {
      id: 1,
      titulo: 'Título del sorteo 1',
      fecha_publicacion: '2024-01-01',
      fecha_cierre: '2024-02-01',
      fecha_sorteo: '2024-03-01',
      categoria: 'suscripción anual',
      activo: true,
    },
    {
      id: 2,
      titulo: 'Título del sorteo 2',
      fecha_publicacion: '2024-01-01',
      fecha_cierre: '2024-02-01',
      fecha_sorteo: '2024-03-01',
      categoria: 'macbook pro',
      activo: true,
    },
    {
      id: 3,
      titulo: 'Título del sorteo 3',
      fecha_publicacion: '2024-01-01',
      fecha_cierre: '2024-02-01',
      fecha_sorteo: '2024-03-01',
      categoria: 'suscripción mensual',
      activo: true,
    },
    {
      id: 4,
      titulo: 'Título del sorteo 4',
      fecha_publicacion: '2023-01-01',
      fecha_cierre: '2023-02-01',
      fecha_sorteo: '2023-03-01',
      categoria: 'suscripción mensual',
      activo: false,
    },
  ];

  getAllSorteos() {
    return this.sorteos;
  }

  createSorteo(titulo: string, categoria: string) {
    const lastId = this.sorteos.reduce(
      (max, registro) => Math.max(max, registro.id),
      0,
    );
    const sorteo = {
      id: lastId + 1,
      titulo,
      fecha_publicacion: new Date().toISOString(),
      fecha_cierre: new Date().toISOString(),
      fecha_sorteo: new Date().toISOString(),
      categoria,
      activo: false,
    };
    this.sorteos.push(sorteo);
    return sorteo;
  }

  updateSorteo(id: number, updateFields: any) {
    const sorteo = this.getSorteoById(id);
    const updatedSorteo = Object.assign(sorteo, updateFields);
    this.sorteos = this.sorteos.map((sorteo) =>
      sorteo.id === id ? updateFields : sorteo,
    );
    return updatedSorteo;
  }

  deleteSorteo(id: number) {
    this.sorteos = this.sorteos.filter((sorteo) => sorteo.id !== id);
    return true;
  }

  getSorteoById(id: number): Sorteo {
    return this.sorteos.find((sorteo) => sorteo.id === id);
  }
}
