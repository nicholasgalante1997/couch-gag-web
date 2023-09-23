import React, { type ReactNode, createContext, memo, useContext } from 'react';
import { S3Client } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY ?? 'noop',
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? 'noop'
  }
});

interface S3ContextType {
  client: S3Client;
}

const defaultCtx = { client: s3 };

const S3Context = createContext<S3ContextType>(defaultCtx);

export const useS3Context = (): S3ContextType => useContext(S3Context);

interface S3ContextProviderProps {
  children: ReactNode;
}

function S3ContextProvider(props: S3ContextProviderProps): React.JSX.Element {
  return <S3Context.Provider value={{ client: s3 }}>{props.children}</S3Context.Provider>;
}

export const PureS3ContextProvider = memo(S3ContextProvider);
