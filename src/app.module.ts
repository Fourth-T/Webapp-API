import { Module } from '@nestjs/common';
import { SorteosModule } from './sorteos/sorteos.module';

@Module({
  imports: [SorteosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
