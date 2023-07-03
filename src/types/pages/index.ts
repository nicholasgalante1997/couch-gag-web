export type PageConfig = {
    bundle: string;
    component: React.FC<any> | (() => JSX.Element);
};