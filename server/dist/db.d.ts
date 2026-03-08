import mongoose, { Types, Document } from "mongoose";
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export declare const Tag: mongoose.Model<{
    title: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
}, mongoose.Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        title: string;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        title: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Content: mongoose.Model<{
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
}, mongoose.Document<unknown, {}, {
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        link: string;
        title: string;
        tags: Types.ObjectId[];
        userId: Types.ObjectId;
        type?: "image" | "article" | "video" | "audio" | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        link: string;
        title: string;
        tags: Types.ObjectId[];
        userId: Types.ObjectId;
        type?: "image" | "article" | "video" | "audio" | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    link: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
    type?: "image" | "article" | "video" | "audio" | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Link: mongoose.Model<{
    userId: Types.ObjectId;
    hash: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: Types.ObjectId;
    hash: string;
}, mongoose.Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: Types.ObjectId;
        hash: string;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        userId: Types.ObjectId;
        hash: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map