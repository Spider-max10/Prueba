import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
export type ModeloDocument = Modelo & Document;

@Schema()
export class Modelo {
@Prop()
tipo: string;
@Prop()
modelo:string;
@Prop()
vida_util:string;
}

export const ModeloSchema = SchemaFactory.createForClass(Modelo);