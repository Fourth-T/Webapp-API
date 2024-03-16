export class CreateSorteoDTO {
  titulo: string;
  categoria: string;
}

export class UpdateSorteoDTO {
  titulo?: string;
  fecha_publicacion?: string;
  fecha_cierre?: string;
  fecha_sorteo?: string;
  categoria?: string;
  activo?: boolean;
}
