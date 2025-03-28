import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl, Length } from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 25)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 30)
  description: string;

  @ApiProperty()
  @IsUrl()
  src: string;
}
