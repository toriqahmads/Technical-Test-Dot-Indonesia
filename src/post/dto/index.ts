import { IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";

export class AddPostDto {
    @IsNotEmpty()
    @IsString()
    public readonly title: string;

    @IsNotEmpty()
    @IsString()
    public readonly body: string;

    @IsNotEmpty()
    @IsNumber()
    public readonly userId: number;
    
    public constructor(opts?: Partial<AddPostDto>) {
        Object.assign(this, opts);
    }
}

export class EditPutPostDto {
    @IsNotEmpty()
    @IsString()
    public readonly title: string;

    @IsNotEmpty()
    @IsString()
    public readonly body: string;

    @IsNotEmpty()
    @IsNumber()
    public readonly userId: number;
    
    public constructor(opts?: Partial<EditPostDto>) {
        Object.assign(this, opts);
    }
}

export class EditPostDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public readonly title?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public readonly body?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public readonly userId?: number;
    
    public constructor(opts?: Partial<EditPostDto>) {
        Object.assign(this, opts);
    }
}

export class PostDto {
    public readonly id: number;

    @IsNotEmpty()
    @IsString()
    public readonly title: string;

    @IsNotEmpty()
    @IsString()
    public readonly body: string;

    @IsNotEmpty()
    @IsNumber()
    public readonly userId: number;
    
    public constructor(opts?: Partial<PostDto>) {
        Object.assign(this, opts);
    }
}