import { memo, PropsWithChildren } from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import UserBlock from '../user-block/user-block';

type HeaderProps = PropsWithChildren<{
  className?: string,
  noUserBlock?: boolean,
}>

function Header({className, noUserBlock, children}: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${className ?? ''}`}>
      <div className="logo">
        <Link to={AppRoute.Root} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}

      {!noUserBlock && <UserBlock />}
    </header>
  );
}

export default memo(Header);
