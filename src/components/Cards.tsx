import { DataFormat } from '../utils/types';
import { motion } from 'framer-motion';

type CardsProps = {
  props: DataFormat;
  selectedPage: number | null;
  setSelectedPage: (value: number) => void;
};

const Cards = ({ props, selectedPage, setSelectedPage }: CardsProps) => {
  return (
    <div className='w-full flex flex-col items-center gap-5 font-medium'>
      <motion.div
        onViewportEnter={() => setSelectedPage(props.id)}
        className='flex justify-center items-center'
      >
        <img
          src={props.coverImage}
          alt={props.item}
          className='w-4/5 sm:w-[420px] lg:w-1/2 object-cover'
        />
      </motion.div>

      {props.isSoldOut ? (
        <>
          <p className='font-bold text-xl -mt-5'>{props.item} is sold out.</p>
          <div className='text-center '>
            <p>
              If you are lucky, you may get the last pieces in{' '}
              <a href={props.store} style={{ color: props.secondColor }}>
                selected stores
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
          <p className='font-bold text-xl -mt-5'>{props.item}</p>
          <div className='text-center'>
            {props.purchaseLinkEurope && props.purchaseLinkUK ? (
              <>
                <p>
                  <a
                    href={props.purchaseLinkEurope}
                    style={{
                      color:
                        selectedPage === props.id
                          ? props.secondColor
                          : props.mainColor,
                    }}
                  >
                    BUY HERE
                  </a>{' '}
                  (Europe)
                </p>
                <p>
                  <a
                    href={props.purchaseLinkUK}
                    style={{
                      color:
                        selectedPage === props.id
                          ? props.secondColor
                          : props.mainColor,
                    }}
                  >
                    BUY HERE
                  </a>{' '}
                  (UK & Overseas)
                </p>
              </>
            ) : (
              <a
                href={props.purchaseLinkEurope}
                style={{
                  color:
                    selectedPage === props.id
                      ? props.secondColor
                      : props.mainColor,
                }}
              >
                BUY HERE
              </a>
            )}
          </div>
          <p>
            or in{' '}
            <a
              href={props.store}
              style={{
                color:
                  selectedPage === props.id
                    ? props.secondColor
                    : props.mainColor,
              }}
            >
              selected stores
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default Cards;
