import { socialsLink } from '../data';
const NavIcon = () => {
  return (
    <ul className='nav_icons'>
      {socialsLink.map((social) => {
        const { id, href, icon } = social;
        return (
          <li
            className='icon'
            key={id}
          >
            <a
              href={href}
              target='_blank'
              rel='noreferrer'
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default NavIcon;
