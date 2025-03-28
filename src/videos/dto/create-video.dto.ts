import { IsNotEmpty, IsUrl, Length } from 'class-validator';

export class CreateVideoDto {
  @IsNotEmpty()
  @Length(1, 25)
  title: string;

  @IsNotEmpty()
  @Length(1, 30)
  description: string;

  @IsUrl()
  src: string;
}
