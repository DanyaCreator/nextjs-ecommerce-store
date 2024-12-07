import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  forwardRef,
  ForwardedRef,
} from 'react';
import './input.css';

type RangeInputProps = {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
};

export const RangeInput = forwardRef(
  (
    { min, max, onChange }: RangeInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // convert to percentage
    const getPercent = useCallback(
      (value) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
    );

    // set width of the range to decrease from the left side
    useEffect(() => {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }, [minVal, getPercent]);

    // set the width of the range to decrease from right side
    useEffect(() => {
      const minPercent = getPercent(minValRef.current);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
      if (minVal != minValRef.current || maxVal != maxValRef.current) {
        onChange({ min: minVal, max: maxVal });
        minValRef.current = minVal;
        maxValRef.current = maxVal;
      }
    }, [minVal, maxVal, onChange]);

    return (
      <>
        <div className={'flex flex-col gap-[10px] mt-[40px]'}>
          <div>
            <input
              type='range'
              min={min}
              max={max}
              value={minVal}
              ref={ref}
              onChange={(event) => {
                const value = Math.min(Number(event.target.value), maxVal - 10);
                setMinVal(value);
              }}
              className='thumb thumb-left w-[272px]'
              style={{
                zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
              }}
            />

            <input
              type='range'
              min={min}
              max={max}
              ref={ref}
              value={maxVal}
              onChange={(event) => {
                const value = Math.max(Number(event.target.value), minVal + 10);
                setMaxVal(value);
              }}
              className='thumb thumb-right w-[277px]'
              style={{
                zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
              }}
            />

            <div className='slider'>
              <div className='track-slider' />

              <div ref={range} className='range-slider' />
            </div>
          </div>

          <div className='flex justify-between text-[#707070] text-[14px]'>
            <span>
              Price: ${minVal} - ${maxVal}
            </span>
            <a href='' className={'text-accent'}>
              Filter
            </a>
          </div>
        </div>
      </>
    );
  }
);

RangeInput.displayName = 'RangeInput';
