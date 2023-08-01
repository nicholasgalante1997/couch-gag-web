import React, { memo } from 'react';
import { logger } from '@/utils';

class ErrorBoundary extends React.Component<
{ id: string, fallback: JSX.Element, children: React.ReactNode },
{ hasError: boolean, error?: Error }
> {
  constructor(props: { id: string, fallback: JSX.Element, children: React.ReactNode }) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined
    };
  }

  static getDerivedStateFromError(error: any): { hasError: boolean, error: Error } {
    error = error as Error;
    logger.error(error);
    return { hasError: true, error: new Error(error) };
  }

  componentDidCatch(error: any, info: { componentStack: any } & Record<string, unknown>): void {
    logger.error(error);
    logger.error(info);
  }

  render(): React.JSX.Element | React.ReactNode {
    if (this.state.hasError) {
      logger.info(this.state.error);
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export const ErrorWrapper = memo(ErrorBoundary);
