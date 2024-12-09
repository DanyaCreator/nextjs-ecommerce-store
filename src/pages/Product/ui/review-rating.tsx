import { Rating, styled } from '@mui/material';

import { dmSans } from '@/shared/assets/fonts';

type ReviewRatingProps = {
  value: number;
  onChange: (value: number | null) => void;
};

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#000',
  },
  '& .MuiRating-iconHover': {
    color: '#000',
  },
});

export const ReviewRating = ({ value, onChange }: ReviewRatingProps) => {
  return (
    <div className='flex flex-col gap-[13px]'>
      <span className={`${dmSans.className} text-[14px] font-normal`}>
        Your rating*
      </span>
      <StyledRating value={value} onChange={(_, v) => onChange(v)} />
    </div>
  );
};
