export interface PostDto {
    id: string;
    images: Array<string>;
    small: string;
    aspectRatio: number;
    description: string;
    authorId: number;
}