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

  async findOne(id: string): Promise<Serie> { 
    return this.serieModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateSerieDto: UpdateSerieDto): Promise<Serie> { 
    return this.serieModel.findOneAndUpdate({ _id: id }, updateSerieDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.serieModel.findByIdAndDelete({ _id: id }).exec(); 
  }
}
