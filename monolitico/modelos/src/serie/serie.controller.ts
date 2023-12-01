import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Request } from 'express';
import { Req } from '@nestjs/common';

@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Post()
  create(@Body() createSerieDto: CreateSerieDto) {
    return this.serieService.create(createSerieDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.serieService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serieService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSerieDto: UpdateSerieDto) {
    return this.serieService.update(id, updateSerieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serieService.remove(id);
  }
}
