import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLayerGroup, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';
import SearchContainer from '@/components/dashboard/search/SearchContainer';
import http from '@/api/http';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import Avatar from '@/components/Avatar';

export default () => {
    const name = useStoreState((state: ApplicationStore) => state.settings.data!.name);
    const rootAdmin = useStoreState((state: ApplicationStore) => state.user.data!.rootAdmin);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const onTriggerLogout = () => {
        setIsLoggingOut(true);
        http.post('/auth/logout').finally(() => {
            // @ts-expect-error this is valid
            window.location = '/';
        });
    };

    return (
        <aside className={'hamz-sidebar'}>
            <SpinnerOverlay visible={isLoggingOut} />
            <Link to={'/'} className={'hamz-brand'}>
                <span className={'hamz-brand-mark'}>H</span>
                <span className={'hamz-brand-copy'}>
                    <strong>HamzPedia</strong>
                    <small>GAME PANEL</small>
                </span>
            </Link>

            <div className={'hamz-sidebar-section'}>
                <span className={'hamz-section-label'}>WORKSPACE</span>
                <NavLink to={'/'} exact className={'hamz-nav-link'} activeClassName={'active'}>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    <span>Dashboard</span>
                </NavLink>
                {rootAdmin && (
                    <a href={'/admin'} rel={'noreferrer'} className={'hamz-nav-link'}>
                        <FontAwesomeIcon icon={faCogs} />
                        <span>Admin Panel</span>
                    </a>
                )}
                <div className={'hamz-search'}>
                    <FontAwesomeIcon icon={faSearch} />
                    <SearchContainer />
                </div>
            </div>

            <div className={'hamz-sidebar-spacer'} />

            <div className={'hamz-sidebar-footer'}>
                <NavLink to={'/account'} className={'hamz-nav-link'} activeClassName={'active'}>
                    <span className={'hamz-avatar'}><Avatar.User /></span>
                    <span>Account Settings</span>
                </NavLink>
                <button onClick={onTriggerLogout} className={'hamz-nav-link hamz-logout'}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Sign Out</span>
                </button>
                <div className={'hamz-version'}>{name} · HamzPedia UI</div>
            </div>
        </aside>
    );
};
