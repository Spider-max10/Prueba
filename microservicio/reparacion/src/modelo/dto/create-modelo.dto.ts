import {IsNotEmpty, IsString, MinLength} from 'class-validator';


export class CreateModeloDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
   readonly tipo:string;
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
   readonly modelo:string;
   @IsNotEmpty()
   @IsString()
   @MinLength(5)
readonly vida_util:string;
}
