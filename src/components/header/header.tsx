import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Paths } from '@/utils/constants';
import logo from '@/assets/icons/logo.svg';
import './header.scss';

export const Header: FC = () => {
  const { HOME, FAVORITES, EMPTY_STATE } = Paths;
  const location = useLocation();
  const path = location.pathname;

  const isFav = path.includes(`/${FAVORITES}`) || path.includes(`/${EMPTY_STATE}`) || false;

  const isMain = !(location.state === 'main') && isFav;

  return (
    <header className="header">
      <Link className="logo" to={HOME}>
        <img className="logo__img" src={logo} alt="logo" />
        <h1 className="logo__text">Jobored</h1>
      </Link>
      <nav className="header__nav">
        <Link className={`header__link ${isMain ? '' : 'header__link_active'}`} to={HOME}>
          Поиск Вакансий
        </Link>
        <Link className={`header__link ${isMain ? 'header__link_active' : ''}`} to={FAVORITES}>
          Избранное
        </Link>
      </nav>
    </header>
  );
};
