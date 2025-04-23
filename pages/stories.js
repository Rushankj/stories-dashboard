
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  ArrowLeft, 
  Search, 
  Calendar, 
  Sliders, 
  Eye, 
  Copy, 
  MoreHorizontal,
  ChevronDown,
  Menu,
  X,
    //  icons for the mobile menu
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
  Phone,
  CreditCard
} from 'lucide-react';
import Sidebar from '@/Components/Sidebar';
import styles from '../styles/Stories.module.css';

export default function StoriesDashboard() {
  const [activeTab, setActiveTab] = useState('All');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  const tabs = [
    { name: 'All', count: '4,500' },
    { name: 'Draft', count: '1,203' },
    { name: 'Pending', count: '890' },
    { name: 'Published', count: '2,432' },
    { name: 'Archived', count: '320' },
  ];
  
  const stories = [
    {
      id: 1,
      title: 'How 7 lines code turned into $36 Billion Empire',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      image: '/images/code-empire.jpg'
    },
    {
      id: 2,
      title: 'Chez pierre restaurant in Monte Carlo by Vuidafieri',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Created',
      image: '/images/restaurant.jpg'
    },
    {
      id: 3,
      title: 'Teknion wins Gold at 2022 International Design Awards',
      category: 'Politics',
      date: '20 Sep 2022',
      status: 'Draft',
      image: '/images/design-award.jpg'
    },
    {
      id: 4,
      title: 'How 7 lines code turned into $36 Billion Empire',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      image: '/images/code-empire-2.jpg'
    },
    {
      id: 5,
      title: 'How 7 lines code turned into $36 Billion Empire',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      image: '/images/coding.jpg'
    },
    {
      id: 6,
      title: 'Chez pierre restaurant in Monte Carlo by Vuidafieri',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      image: '/images/restaurant-2.jpg'
    },
    {
      id: 7,
      title: 'Teknion wins Gold at 2022 International Design Awards',
      category: 'Politics',
      date: '20 Sep 2022',
      status: 'Published',
      image: '/images/design-award-2.jpg'
    },
    {
      id: 8,
      title: 'How 7 lines code turned into $36 Billion Empire',
      category: 'BUSINESS',
      date: '20 Sep 2022',
      status: 'Published',
      image: '/images/coding-2.jpg'
    },
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'Published':
        return styles.statusPublished;
      case 'Draft':
        return styles.statusDraft;
      case 'Created':
        return styles.statusCreated;
      default:
        return styles.statusDraft;
    }
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Stories Dashboard</title>
        <meta name="description" content="Stories dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* // Desktop Sidebar /* */}
      
      <Sidebar />

      {/* Mobile Sidebar */}
      
      
      <div className={`${styles.mobileSidebar} ${mobileSidebarOpen ? styles.mobileSidebarActive : ''}`}>
  <div className={`${styles.mobileSidebarContent} ${mobileSidebarOpen ? styles.mobileSidebarOpen : ''}`}>
    <button 
      className={styles.closeSidebarButton} 
      onClick={toggleMobileSidebar}
    >
      <X size={24} />
    </button>
    {/* Instead of using the Sidebar component directly, copy its essential parts */}
    
    
    <div className={styles.mobileNavMenu}>
      <div className={styles.mobileMenuContainer}>
        
        {/* Loop through the same menu items that Sidebar uses */}
        
        
        {[
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
        ].map((item) => (
          <a href={item.href} key={item.name}>
            <div
              className={`${styles.mobileMenuItem} ${item.active ? styles.mobileMenuItemActive : ''}`}
            >
              <item.icon size={18} />
              <span className={styles.mobileMenuText}>{item.name}</span>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.mobileSupportContainer}>
        <a href="/support">
          <div className={styles.mobileSupportButton}>
            <Phone size={18} />
            <span className={styles.mobileSupportText}>Contact Support</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>


      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
         
          {/* Header */}
          
          
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <button 
                className={styles.mobileMenuButton} 
                onClick={toggleMobileSidebar}
              >
                <Menu size={24} />
              </button>
              <button className={styles.backButton}>
                <ArrowLeft size={20} />
              </button>
              <h1 className={styles.pageTitle}>Stories</h1>
            </div>
            
            <div className={styles.userProfile}>
              <div className={styles.profileBadge}>
                <div className={styles.avatar}>
                  AP
                </div>
                <div className={styles.profileInfo}>
                  <div className={styles.welcomeText}>Welcome back,</div>
                  <div className={styles.userName}>Akshita Patel</div>
                </div>
                <ChevronDown size={16} className={styles.chevronIcon} />
              </div>
            </div>
          </div>

          {/* Search and Actions */}
         
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} size={18} />
            </div>
            
            <div className={styles.actionButtons}>
              <button className={styles.iconButton}>
                <Calendar size={20} />
              </button>
              <button className={styles.iconButton}>
                <Sliders size={20} />
              </button>
              <button className={styles.addButton}>
                Add New Story
              </button>
            </div>
          </div>

          {/* Tabs */}
          
          
          <div className={styles.tabsContainer}>
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`${styles.tab} ${activeTab === tab.name ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>

          {/* Stories Grid */}
        
        
          <div className={styles.storiesGrid}>
            {stories.map((story) => (
              <div key={story.id} className={styles.storyCard}>
                <div className={styles.imageContainer}>
                  {/* Using placeholder images since we don't have actual images */}
                  <img 
                    src={`/api/placeholder/400/320`} 
                    alt={story.title} 
                    className={styles.storyImage}
                  />
                  <div className={styles.imageActions}>
                    <button className={styles.imageActionButton}>
                      <Eye size={15} />
                    </button>
                    <button className={styles.imageActionButton}>
                      <Copy size={15} />
                    </button>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.storyTitle}>{story.title}</h3>
                  <div className={styles.storyMeta}>
                    <div className={styles.metaLeft}>
                      <span className={styles.category}>{story.category}</span>
                      <span className={styles.metaDivider}>•</span>
                      <span className={styles.date}>{story.date}</span>
                    </div>
                    <span className={`${styles.statusBadge} ${getStatusClass(story.status)}`}>
                      {story.status}
                    </span>
                  </div>
                  <div className={styles.cardActions}>
                    <button className={styles.viewButton}>
                      View
                    </button>
                    <button className={styles.moreButton}>
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}