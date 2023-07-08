import React, { memo, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import { withProfiler, withErrorWrapper } from '@/hocs';
import { isServer, combine } from '@/utils';

export const AsideClassnames = {
    Container: 'aside__container',
    ContainerExpanded: 'aside__container-open',
    LogoContainer: 'aside__logo-container',
    ExpandButtonContainer: 'aside__expand-container'
}; 

function AsideComponent() {
    const isBrowser = !isServer();
    let lsAsideOpen = false;
    if (isBrowser) {
        const hasStoredValue = window.localStorage.getItem('couch-gag__aside__open');
        if (hasStoredValue) {
            lsAsideOpen = !!(JSON.parse(hasStoredValue) as any).isOpen
        }
    }
    const [expanded, setExpanded] = useState(lsAsideOpen);
    useEffect(() => {
        window.localStorage.setItem('couch-gag__aside__open', JSON.stringify({ isOpen: expanded }));
    }, [expanded]);

    const parentClassName = useMemo(() => classnames({
        [AsideClassnames.Container]: !expanded,
        [AsideClassnames.ContainerExpanded]: expanded
    }), [expanded]);

    return (
        <div className={parentClassName}>
            <div className="aside__logo-container">
                <img src="/web.svg" height="48px" width="48px" />
            </div>
            <div className="aside__expand-container">
                <button onClick={() => setExpanded(previous => !previous)}>
                    {expanded ? 'Close' : 'Open'}
                </button>
            </div>
        </div>
    );
}

export const Aside = combine(
    [withProfiler, withErrorWrapper],
    memo(AsideComponent),
    'PageSidebar'
);