import logo from './assets/logo.png';
import { useState } from 'react';
import Cards from './components/Cards';
import useMediaQuery from './utils/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import data from './data';
import { bgColor } from './utils/bgColor';

function App() {
  const [selectedPage, setSelectedPage] = useState<number>(7);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px');

  return (
    <div
      className={`px-5 py-7 ${
        selectedPage && bgColor(selectedPage)
      } ease-in-out duration-[1500ms] relative ${
        isAboveMediumScreens && 'scroll-container'
      }`}
    >
      <div className=''>
        <img
          src={logo}
          alt='logo'
          className='h-5 md:h-8 md:absolute lg:fixed md:top-7 md:left-5'
        />
      </div>
      {data.map((book) => (
        <div
          key={book.id}
          className={`h-screen py-12 ${
            isAboveMediumScreens && 'scroll-section'
          }`}
          id={book.id.toString()}
        >
          <Cards
            props={book}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      ))}
      <div className='mb-10 md:absolute lg:fixed md:left-5 md:bottom-7 md:w-[200px] lg:w-[300px] md:mb-0'>
        <h2 className='text-center text-lg font-bold mb-2 md:text-left md:leading-6'>
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </h2>
        <p className='text-center text-xs mb-5 md:text-left'>
          © 2024 <span className='underline'>Published by Büro Milk</span>
        </p>
        <p className='text-center text-lg underline font-bold md:text-left'>
          <a href='www.google.com'>Privacy Policy</a>
        </p>
      </div>
      {!isAboveMediumScreens ? (
        <div className='text-center font-semibold md:absolute lg:fixed md:right-5 md:bottom-7 '>
          <a href='info@backstagetalks.com'>info@backstagetalks.com</a>
        </div>
      ) : (
        <>
          <div className='text-center font-semibold md:absolute lg:fixed md:right-5 md:top-7 '>
            <a href='info@backstagetalks.com'>info@backstagetalks.com</a>
          </div>
          <div className='text-center md:absolute lg:fixed md:right-5 md:bottom-7 '>
            <ul>
              {data.map((book) => (
                <li key={book.id}>
                  <AnchorLink
                    className={`cursor-pointer ${
                      selectedPage === book.id && 'font-bold'
                    }`}
                    href={`#${book.id}`}
                  >
                    {book.item}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
