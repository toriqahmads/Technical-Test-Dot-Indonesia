export interface IApi {
    baseEndpoint: string;
    basePath: string;

    find: () => Promise<[any]>;
    findOne: (id: number) => Promise<any>;
    add: (entities: any) => Promise<any>;
    edit: (id: number, entities: any) => Promise<any>;
    editPut: (id: number, entities: any) => Promise<any>;
    remove: (id: number) => Promise<any>;
}