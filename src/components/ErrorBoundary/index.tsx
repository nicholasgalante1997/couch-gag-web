import { logger } from '@/utils';
import React, { memo } from 'react';

class ErrorBoundary extends React.Component<{ id: string; fallback: JSX.Element; children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { id: string; fallback: JSX.Element; children: React.ReactNode }) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }
    componentDidCatch(error: any, info: { componentStack: any } & Record<string, unknown>) {
        logger.error(error);
        logger.error(info);
    }
    render() {
        if (this.state.hasError) {
          return this.props.fallback;
        }
    
        return this.props.children;
    }
}

export const ErrorWrapper = memo(ErrorBoundary);