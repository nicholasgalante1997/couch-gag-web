export type PageConfig<P = {} & JSX.IntrinsicAttributes> = {
    bundle: string;
    component: React.FC<any> | (() => JSX.Element);
    title: string;
    props?: P;
    htmlFileName: string;
    styles: string[];
};