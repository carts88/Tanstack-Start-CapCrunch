"use client";
import React, { 
  ReactNode, 
  RefObject, 
  createContext, 
  useContext, 
  useCallback, 
  useEffect, 
  useRef, 
  useState 
} from 'react';

// Context for sharing state between components
type ScrollspyContextType = {
  activeId: string | null;
  setActiveId: (id: string) => void;
  registerTrigger: (id: string, element: HTMLElement) => void;
  unregisterTrigger: (id: string) => void;
  registerContent: (id: string, element: HTMLElement) => void;
  unregisterContent: (id: string) => void;
  scrollTo: (id: string) => void;
  offset: number;
  smooth: boolean;
  targetRef?: RefObject<HTMLElement | null>;
};

const ScrollspyContext = createContext<ScrollspyContextType | null>(null);

const useScrollspyContext = () => {
  const context = useContext(ScrollspyContext);
  if (!context) {
    throw new Error('Scrollspy components must be used within Scrollspy');
  }
  return context;
};

// Main Scrollspy Provider
type ScrollspyProps = {
  children: ReactNode;
  targetRef?: RefObject<HTMLElement | null>;
  onUpdate?: (id: string) => void;
  offset?: number;
  smooth?: boolean;
  history?: boolean;
  defaultActiveId?: string;
};

export function Scrollspy({
  children,
  targetRef,
  onUpdate,
  offset = 0,
  smooth = true,
  history = true,
  defaultActiveId,
}: ScrollspyProps) {
  const [activeId, setActiveIdState] = useState<string | null>(defaultActiveId || null);
  const triggersRef = useRef<Map<string, HTMLElement>>(new Map());
  const contentsRef = useRef<Map<string, HTMLElement>>(new Map());
  const prevIdRef = useRef<string | null>(null);
  const targetIdRef = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const registerTrigger = useCallback((id: string, element: HTMLElement) => {
    triggersRef.current.set(id, element);
  }, []);

  const unregisterTrigger = useCallback((id: string) => {
    triggersRef.current.delete(id);
  }, []);

  const registerContent = useCallback((id: string, element: HTMLElement) => {
    contentsRef.current.set(id, element);
  }, []);

  const unregisterContent = useCallback((id: string) => {
    contentsRef.current.delete(id);
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      const contentElement = contentsRef.current.get(id);
      if (!contentElement) return;

      // Set target and immediately update active state
      targetIdRef.current = id;
      setActiveIdState(id);
      prevIdRef.current = id;
      
      if (onUpdate) onUpdate(id);
      if (history) {
        window.history.replaceState({}, '', `#${id}`);
      }

      const scrollElement = targetRef?.current || window;
      const scrollTop = contentElement.offsetTop - offset;

      if ('scrollTo' in scrollElement) {
        scrollElement.scrollTo({
          top: scrollTop,
          left: 0,
          behavior: smooth ? 'smooth' : 'auto',
        });
      }

      // Clear target after scroll completes
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        targetIdRef.current = null;
      }, smooth ? 1000 : 50);
    },
    [offset, smooth, targetRef, onUpdate, history]
  );

  const handleScroll = useCallback(() => {
    // If we have a target from a click, don't override it yet
    if (targetIdRef.current) return;
    
    if (contentsRef.current.size === 0) return;

    const scrollElement = targetRef?.current || window;
    const scrollTop =
      scrollElement === window
        ? window.scrollY || document.documentElement.scrollTop
        : (scrollElement as HTMLElement).scrollTop;

    const contents = Array.from(contentsRef.current.entries());
    
    let activeIdx = 0;
    let minDelta = Infinity;

    contents.forEach(([id, element], idx) => {
      const delta = Math.abs(element.offsetTop - offset - scrollTop);
      if (element.offsetTop - offset <= scrollTop && delta < minDelta) {
        minDelta = delta;
        activeIdx = idx;
      }
    });

    // Check if at bottom
    const scrollHeight =
      scrollElement === window
        ? document.documentElement.scrollHeight
        : (scrollElement as HTMLElement).scrollHeight;
    const clientHeight =
      scrollElement === window
        ? window.innerHeight
        : (scrollElement as HTMLElement).clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 2) {
      activeIdx = contents.length - 1;
    }

    const [newActiveId] = contents[activeIdx] || [];
    if (newActiveId && newActiveId !== prevIdRef.current) {
      setActiveIdState(newActiveId);
      prevIdRef.current = newActiveId;
      
      if (onUpdate) onUpdate(newActiveId);
      if (history) {
        window.history.replaceState({}, '', `#${newActiveId}`);
      }
    }
  }, [offset, targetRef, onUpdate, history]);

  useEffect(() => {
    const scrollElement = targetRef?.current || window;
    scrollElement.addEventListener('scroll', handleScroll);

    // Handle initial hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scrollTo(hash);
      }, 100);
    } else {
      handleScroll();
    }

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, scrollTo, targetRef]);

  const contextValue = React.useMemo(
    () => ({
      activeId,
      setActiveId: () => {}, // No-op, only used internally now
      registerTrigger,
      unregisterTrigger,
      registerContent,
      unregisterContent,
      scrollTo,
      offset,
      smooth,
      targetRef,
    }),
    [activeId, registerTrigger, unregisterTrigger, registerContent, unregisterContent, scrollTo, offset, smooth, targetRef]
  );

  return (
    <ScrollspyContext.Provider value={contextValue}>
      {children}
    </ScrollspyContext.Provider>
  );
}

// Trigger List Container
type ScrollspyTriggerListProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollspyTriggerList({ children, className }: ScrollspyTriggerListProps) {
  return (
    <nav className={className}>
      {children}
    </nav>
  );
}

// Individual Trigger
type ScrollspyTriggerProps = {
  id: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  offset?: number;
};

export function ScrollspyTrigger({ 
  id, 
  children, 
  className,
  activeClassName = 'active',
  offset: customOffset,
}: ScrollspyTriggerProps) {
  const { activeId, scrollTo, registerTrigger, unregisterTrigger } = useScrollspyContext();
  const ref = useRef<HTMLAnchorElement>(null);
  const isActive = activeId === id;

  useEffect(() => {
    if (ref.current) {
      registerTrigger(id, ref.current);
      if (customOffset !== undefined) {
        ref.current.dataset.offset = String(customOffset);
      }
    }
    return () => unregisterTrigger(id);
  }, [id, customOffset]); // Removed registerTrigger and unregisterTrigger from deps

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(id);
  }, [id, scrollTo]);

  const classes = [
    className,
    isActive ? activeClassName : '',
  ].filter(Boolean).join(' ');

  return (
    <a
      ref={ref}
      href={`#${id}`}
      onClick={handleClick}
      className={classes}
      data-active={isActive || undefined}
    >
      {children}
    </a>
  );
}

// Content List Container
type ScrollspyContentListProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollspyContentList({ children, className }: ScrollspyContentListProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Individual Content Section
type ScrollspyContentProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function ScrollspyContent({ id, children, className }: ScrollspyContentProps) {
  const { registerContent, unregisterContent } = useScrollspyContext();
  const ref = useRef<HTMLElement>(null);

  console.log("Rendering ScrollspyContent with id:", id);
  useEffect(() => {
    if (ref.current) {
      registerContent(id, ref.current);
    }
    return () => unregisterContent(id);
  }, [id]); // Removed registerContent and unregisterContent from deps

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}

// Demo
export function ScrollspyDemo() {
  return (
      <Scrollspy offset={80} smooth history>
        <div className="w-64 p-6  h-screen fixed overflow-auto">
          <ScrollspyTriggerList className="space-y-2">
            <ScrollspyTrigger 
              id="section-1" 
              className="block px-4 py-2 rounded hover:bg-muted transition-colors"
              activeClassName="bg-blue-100 text-blue-700 font-semibold"
            >
              Introduction
            </ScrollspyTrigger>
            <ScrollspyTrigger 
              id="section-2" 
              className="block px-4 py-2 rounded hover:bg-muted transition-colors"
              activeClassName="bg-blue-100 text-blue-700 font-semibold"
            >
              Features
            </ScrollspyTrigger>
            <ScrollspyTrigger 
              id="section-3" 
              className="block px-4 py-2 rounded hover:bg-muted transition-colors"
              activeClassName="bg-blue-100 text-blue-700 font-semibold"
            >
              Usage
            </ScrollspyTrigger>
            <ScrollspyTrigger 
              id="section-4" 
              className="block px-4 py-2 rounded hover:bg-muted transition-colors"
              activeClassName="bg-blue-100 text-blue-700 font-semibold"
            >
              Advanced
            </ScrollspyTrigger>
            <ScrollspyTrigger 
              id="section-5" 
              className="block px-4 py-2 rounded hover:bg-muted transition-colors"
              activeClassName="bg-blue-100 text-blue-700 font-semibold"
            >
              Conclusion
            </ScrollspyTrigger>
          </ScrollspyTriggerList>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1">
          <ScrollspyContentList className="max-w-3xl mx-auto p-8">
            <ScrollspyContent id="section-1" className="min-h-screen pt-20">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                This is a composable scrollspy implementation that separates triggers from content.
              </p>
              <p className="text-gray-700 mb-4">
                The navigation automatically highlights as you scroll through different sections.
              </p>
              <p className="text-gray-700">
                Try clicking on the navigation items or scrolling through the page.
              </p>
            </ScrollspyContent>

            <ScrollspyContent id="section-2" className="min-h-screen pt-20">
              <h2 className="text-3xl font-bold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Composable component architecture</li>
                <li>Smooth scrolling with offset support</li>
                <li>URL hash synchronization</li>
                <li>Active state management</li>
                <li>Customizable styling</li>
              </ul>
            </ScrollspyContent>

            <ScrollspyContent id="section-3" className="min-h-screen pt-20">
              <h2 className="text-3xl font-bold mb-4">Usage</h2>
              <p className="text-gray-700 mb-4">
                The component is split into logical pieces:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Scrollspy:</strong> Main provider component</li>
                <li><strong>ScrollspyTriggerList:</strong> Container for navigation</li>
                <li><strong>ScrollspyTrigger:</strong> Individual nav items</li>
                <li><strong>ScrollspyContentList:</strong> Container for sections</li>
                <li><strong>ScrollspyContent:</strong> Individual content sections</li>
              </ul>
            </ScrollspyContent>

            <ScrollspyContent id="section-4" className="min-h-screen pt-20">
              <h2 className="text-3xl font-bold mb-4">Advanced</h2>
              <p className="text-gray-700 mb-4">
                You can customize the offset, smooth scrolling behavior, and handle scroll events.
              </p>
              <p className="text-gray-700">
                The component uses React Context to share state between triggers and content sections.
              </p>
            </ScrollspyContent>

            <ScrollspyContent id="section-5" className="min-h-screen pt-20">
              <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-4">
                This approach provides better separation of concerns and more flexibility.
              </p>
              <p className="text-gray-700">
                Each component has a single responsibility and can be styled independently.
              </p>
            </ScrollspyContent>
          </ScrollspyContentList>
        </div>
      </Scrollspy>
  );
}
