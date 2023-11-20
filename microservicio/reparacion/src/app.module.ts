import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModeloModule } from './modelo/modelo.module';
import { SerieModule } from './serie/serie.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Maxi:Argentina619@atlascluster.xpnppjt.mongodb.net/Reparaciones'),
   ModeloModule, 
   SerieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
