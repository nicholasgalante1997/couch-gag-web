import { useEffect } from "react";

export const useOnMount = (callback: () => void | (() => Promise<void>), cleanup?: () => void) => {
    useEffect(() => {
        callback();
        if (typeof cleanup !== 'undefined') {
            return cleanup;
        }
    }, []);
}