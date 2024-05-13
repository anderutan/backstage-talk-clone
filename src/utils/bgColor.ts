export const bgColor = (num: number): string => {
  switch (num) {
    case 1:
      return 'bg-red-700 text-black';
    case 2:
      return 'bg-blue-700 text-black';
    case 3:
      return 'bg-yellow-500 text-black';
    case 4:
      return 'bg-orange-600 text-black';
    case 5:
      return 'bg-teal-500 text-black';
    case 6:
      return 'bg-white';
    case 7:
      return 'bg-pink-500 text-black';
    default:
      return 'bg-white text-black';
  }
};
