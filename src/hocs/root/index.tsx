import React from 'react';
import { Root } from '@/components';

export function withRootProviders<P = {} & JSX.IntrinsicAttributes>(id: string, Component: React.FC<P>): React.FC<P> {
    return function (props: P) {
        return (
            <Root id={id}>
                <Component {...props as P & JSX.IntrinsicAttributes} />
            </Root>
        )
    }
}