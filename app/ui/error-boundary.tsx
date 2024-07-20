"use client";

import { Button, Result } from "antd";
import { error } from "console";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {};

  public static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.error) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <Result
          status="warning"
          title="There are some problems with your operation."
          extra={
            <Button key="console" onClick={() => {}}>
              Try Again
            </Button>
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
