import { motion } from 'framer-motion';
import { useState } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import data from './data';

const bgColor = (num: number): string => {
  switch (num) {
    case 1:
      return 'bg-red-600 text-black';
    case 2:
      return 'bg-blue-600 text-black';
    case 3:
      return 'bg-yellow-600 text-black';
    case 4:
      return 'bg-orange-600 text-black';
    case 5:
      return 'bg-teal-500 text-black';
    case 6:
      return 'bg-white text-pink-500';
    case 7:
      return 'bg-pink-500 text-black';
    default:
      return 'bg-white text-black';
  }
};

function App() {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  return (
    <div
      className={`px-5 py-7 ${
        selectedPage && bgColor(selectedPage)
      } transition ease-in-out duration-[2000ms]`}
    >
      <Header />
      {data.map((book) => (
        <motion.div key={book.id} className='h-screen py-20 '>
          <Cards
            props={book}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default App;
