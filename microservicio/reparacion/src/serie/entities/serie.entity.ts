import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
export type SerieDocument = Serie & Document;

@Schema()
export class Serie {
@Prop()
nombre: string;
@Prop()
marca:string;
@Prop()
tipo:string;
}

export const SerieSchema = SchemaFactory.createForClass(Serie);