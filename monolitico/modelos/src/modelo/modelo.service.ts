import { Injectable } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { Modelo, ModeloDocument } from './entities/modelo.entity';

@Injectable()
export class ModeloService {
  constructor( 
    @InjectModel(Modelo.name) private readonly modeloModel: Model<ModeloDocument>, 
  ) {}

  async create(createModeloDto: CreateModeloDto): Promise<Modelo> { 
    return this.modeloModel.create(createModeloDto); 
  }

  async findAll(request: Request): Promise<Modelo[]> { 
    return this.modeloModel.find(request.query)
    .setOptions({ sanitizeFilter: true })
    .exec();
  }

  async findOne(id: string): Promise<Modelo> { 
    return this.modeloModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateAreaDto: UpdateModeloDto): Promise<Modelo> { 
    return this.modeloModel.findOneAndUpdate({ _id: id }, updateAreaDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.modeloModel.findByIdAndDelete({ _id: id }).exec(); 
  }
}
