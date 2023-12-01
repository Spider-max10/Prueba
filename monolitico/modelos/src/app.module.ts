import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeloModule } from './modelo/modelo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SerieModule } from './serie/serie.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Maxi:Argentina619@atlascluster.xpnppjt.mongodb.net/Impresora'),
    ModeloModule,
    SerieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
