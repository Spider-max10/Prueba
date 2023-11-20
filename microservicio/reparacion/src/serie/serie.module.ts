import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Serie, SerieSchema } from './entities/serie.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Serie.name, schema: SerieSchema }])
  ],
  controllers: [SerieController],
  providers: [SerieService]
})
export class SerieModule {}

