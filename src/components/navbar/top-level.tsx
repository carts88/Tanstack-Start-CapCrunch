// import { ThemeToggle } from '@/components/navbar/global-context-controls/theme/theme-toggle';
import SearchBar from './search-bar/search-bar';
import SiteLogo from './site-logo';
import { Link } from '@tanstack/react-router';
import {TestNavigation} from './test-navigation';
import { navigationConfig } from './navigation-menu-config';


export default function TopNavigationLevel() {
  return (
    <div className="bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between gap-2 ">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-6">
              <Link
                to={"/"}
                >
                <SiteLogo />
              </Link>
              <TestNavigation
                menuItems={navigationConfig}
              />
            </div>
          </div>
          <div className='flex gap-x-2'>
            <SearchBar />
            {/* <ThemeToggle /> */}
          </div>
          </div>
      </header>
      
    </div>
  );
}

