import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faBoxesAlt, faCoffee, faHome, faHouse, faRobot } from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';

const sidebarNavItems = [
  {
    display: 'Home',
    icon: <FontAwesomeIcon icon={faHome} />,
    to: '/',
    section: ''
  },
  {
    display: 'Entities',
    icon: <FontAwesomeIcon icon={faBoxesAlt} />,
    to: '/entities',
    section: 'entities'
  },
];

const roles = [
  { name: 'Admin', value: 'admin' },
  { name: 'User', value: 'user' },
  { name: 'Anonymous', value: 'anonymous'}
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const [selectedRole, setSelectedRole] = useState(roles[0].value);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };
  

  return (
    <div className='sidebar'>
      <div className="sidebar__role">
        <select value={selectedRole} onChange={handleRoleChange}>
          {roles.map((role, index) => (
            <option key={index} value={role.value}>{role.name}</option>
          ))}
        </select>
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
          }}
        ></div>
        {sidebarNavItems.map((item, index) => {
          if (item.section === 'entities' && selectedRole === 'anonymous') {
            return null; // hide "Entities" item when selected role is "anonymous"
          }
          return (
            <Link to={item.to} key={index}>
              <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                <div className="sidebar__menu__item__icon">
                  {item.icon}
                </div>
                <div className="sidebar__menu__item__text">
                  {item.display}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar