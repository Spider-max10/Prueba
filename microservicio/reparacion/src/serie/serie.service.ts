import { Injectable } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { Serie, SerieDocument } from './entities/serie.entity';


@Injectable()
export class SerieService {
  constructor( 
    @InjectModel(Serie.name) private readonly serieModel: Model<SerieDocument>, 
  ) {}

  async create(createSerieDto: CreateSerieDto): Promise<Serie> { 
    return this.serieModel.create(createSerieDto); 
  }

  async findAll(request: Request): Promise<Serie[]> { 
    return this.serieModel.find(request.query)
    .setOptions({ sanitizeFilter: true })
    .exec();
  }

  async remove(id: string) { 
    return this.serieModel.findByIdAndDelete({ _id: id }).exec(); 
  }
}
