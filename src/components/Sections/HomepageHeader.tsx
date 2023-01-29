import {Dialog, Transition} from '@headlessui/react';
import {MenuAlt3Icon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, PropsWithChildren, useCallback, useMemo, useState} from 'react';

import {SectionType} from '../../data/dataDef';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

interface HeaderProps {
  sections: SectionType[];
}

const Header: FC<PropsWithChildren<HeaderProps>> = memo((props: HeaderProps) => {
  const {sections} = props;
  const [currentSection, setCurrentSection] = useState<SectionType | null>(null);
  const navSections = useMemo(() => Object.values(sections).filter(section => section.isOnNavBar), [sections]);

  const intersectionHandler = useCallback((section: SectionType | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections, intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionType[]; currentSection: SectionType | null}> = memo(
  ({navSections, currentSection}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bright-red sm:hover:text-bright-red text-neutral-100';
    const activeClass = classNames(baseClass, 'text-bright-red');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block" id={headerID}>
        <nav className="flex justify-center gap-x-8">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section.urlName}
              section={section}
            />
          ))}
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionType[]; currentSection: SectionType | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bright-red';
    const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed top-2 right-2 z-40 rounded-md bg-bright-red p-2 ring-offset-gray-800/60 hover:bg-bright-red focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-bright-red focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          <MenuAlt3Icon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-stone-800">
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section.urlName}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: SectionType;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      href={
        section.isOnGatsby ? section.urlName : section.isOnHomepage ? `/#${section.urlName}` : `/${section.urlName}`
      }
      passHref>
      <a className={classNames(current ? activeClass : inactiveClass)} key={section.urlName} onClick={onClick}>
        {section.displayName}
      </a>
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
