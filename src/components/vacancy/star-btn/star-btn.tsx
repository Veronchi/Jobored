import { FC, useEffect, useState } from 'react';
import { StarIcon } from './start-icon';
import { ActionIcon } from '@mantine/core';
import { getItemsFromLS } from '@/utils/getItemsFromLS';

type StarBtnProps = {
  id: number;
};

export const StarBtn: FC<StarBtnProps> = ({ id }) => {
  const [fillColor, setFillColor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setFillColor(!fillColor);
    setIsHovered(true);
  };

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const list = getItemsFromLS();

    if (list) {
      const favItem = list.find((item) => item.id === id);

      favItem && setFillColor(true);
    }
  }, [id]);

  return (
    <ActionIcon
      data-elem={`vacancy-${id}-shortlist-button`}
      variant="transparent"
      onClick={handleClick}
      size={'22px'}
      sx={{
        border: 'none',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StarIcon fillColor={fillColor} hovered={isHovered} />
    </ActionIcon>
  );
};
