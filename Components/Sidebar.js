
import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  FileText, 
  SquareUser, 
  Users,
  MonitorSmartphone, 
  ChartNoAxesCombined, 
  SquarePlay, 
  Settings,
  Move,
  Bell, 
  Headset,
  CreditCard
} from 'lucide-react';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, name: 'Dashboard', href: '/dashboard', active: false },
    { icon: FileText, name: 'Content', href: '/content', active: true },
    { icon: SquareUser, name: 'User', href: '/users', active: false },
    { icon: Users, name: 'Task', href: '/task', active: false },
    { icon: MonitorSmartphone, name: 'App/Web', href: '/app-web', active: false },
    { icon: ChartNoAxesCombined, name: 'Analytics', href: '/analytics', active: false },
    { icon: SquarePlay, name: 'Media', href: '/media', active: false },
    { icon: Move, name: 'Customize', href: '/customize', active: false },
    { icon:  Bell, name: 'Notification', href: '/Notification', active: false },
    { icon: CreditCard, name: 'Subscription', href: '/subscription', active: false },
    { icon: Settings, name: 'Settings', href: '/settings', active: false },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.menuContainer}>
          {menuItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <div
                className={`${styles.menuItem} ${item.active ? styles.activeMenuItem : ''}`}
              >
                <item.icon size={18} />
                <span className={styles.menuText}>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.supportContainer}>
        <Link href="/support">
          <div className={styles.supportButton}>
            <Headset size={18} />
            <span className={styles.supportText}>Contact Support</span>
          </div>
        </Link>
      </div>
    </div>
  );
}