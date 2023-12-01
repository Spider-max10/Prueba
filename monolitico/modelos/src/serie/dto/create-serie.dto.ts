import {IsNotEmpty, IsString, MinLength} from 'class-validator';

export class CreateSerieDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    readonly nombre: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    readonly marca: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    readonly tipo: string
}
