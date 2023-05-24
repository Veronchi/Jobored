import { FC, MouseEvent } from 'react';
import { Box, Title, Text, ThemeIcon, ColorSwatch, Paper } from '@mantine/core';
import { LocationIcon } from './location-icon';
import { VacancyObj } from '@/utils/types';
import { StarBtn } from '..';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@/utils/constants';
import { useAppDispatch } from '@/store/hooks';
import { decPage, setTotal } from '@/store/slices/paginationFav-slice';
import { setFavVacancies } from '@/store/slices/fav-vacancies-slice';
import { getItemsFromLS } from '@/utils/getItemsFromLS';

type VacancyProps = {
  isLink: boolean;
  vacancy: VacancyObj;
};

export const Vacancy: FC<VacancyProps> = ({ isLink, vacancy }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id, profession, payment_from, payment_to, currency, type_of_work, town } = vacancy;

  const handleLS = () => {
    const favlist = getItemsFromLS();

    if (favlist) {
      let newFavList: Array<VacancyObj> = [];
      const findObject = favlist.find((item: VacancyObj) => item.id === vacancy.id);

      if (findObject) {
        newFavList = favlist.filter((item: VacancyObj) => item.id !== vacancy.id);
        dispatch(setTotal(newFavList.length));
        dispatch(setFavVacancies(newFavList));
        dispatch(decPage());
        localStorage.setItem('items', JSON.stringify(newFavList));
      } else {
        favlist.push(vacancy);
        dispatch(setTotal(favlist.length));
        dispatch(setFavVacancies(favlist));
        localStorage.setItem('items', JSON.stringify(favlist));
      }
    } else {
      localStorage.setItem('items', JSON.stringify([]));
    }
  };

  const handleClick = (e: MouseEvent, id: number) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'svg' || target.tagName === 'path' || target.tagName === 'button') {
      handleLS();
    } else if (isLink) {
      navigate(`/${Paths.VACANCY}/${id}`);
    }
  };

  return (
    <Paper
      data-elem={isLink ? `vacancy-${id}` : ''}
      sx={({ white, other, colors, black }) => ({
        minHeight: isLink ? '137px' : '157px',
        backgroundColor: white,
        border: `1px solid ${colors.grey[1]}`,
        borderRadius: other.br[2],
        color: black,
        padding: '24px',
        cursor: isLink ? 'pointer' : 'auto',

        '&:hover': {
          boxShadow: isLink ? `0 1px 3px ${colors.grey[3]}` : 'none',
        },

        '@media (max-width: 550px)': {
          padding: '14px',
        },
      })}
      onClick={(e) => handleClick(e, id)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: isLink ? '13px' : ' 15px',

          '@media (max-width: 390px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Title
          order={2}
          sx={({ fontSizes, other, colors, black }) => ({
            fontWeight: isLink ? 600 : 700,
            fontSize: isLink ? fontSizes.md : fontSizes.xl,
            lineHeight: isLink ? other.lh[2] : other.lh[5],
            color: isLink ? colors.customBlue[4] : black,

            '@media (max-width: 960px)': {
              fontSize: isLink ? fontSizes.sm : fontSizes.md,
            },
            '@media (max-width: 550px)': {
              fontSize: isLink ? fontSizes.xs : fontSizes.sm,
              lineHeight: isLink ? other.lh[1] : other.lh[2],
            },
            '@media (max-width: 390px)': {
              textAlign: 'center',
            },
          })}
        >
          {profession}
        </Title>
        <StarBtn id={id} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: isLink ? '13px' : '17px',
          marginBottom: isLink ? '13px' : ' 18px',

          '@media (max-width: 390px)': {
            flexDirection: 'column',
            gap: '6px',
          },
        }}
      >
        <Text
          span
          sx={({ fontSizes, other }) => ({
            fontWeight: isLink ? 600 : 700,
            fontSize: isLink ? fontSizes.sm : fontSizes.md,
            lineHeight: other.lh[1],

            '@media (max-width: 960px)': {
              fontSize: isLink ? fontSizes.xs : fontSizes.sm,
            },
            '@media (max-width: 740px)': {
              fontSize: fontSizes.xs,
              ineHeight: other.lh[0],
            },

            '@media (max-width: 390px)': {
              fontSize: fontSizes.xs,
              ineHeight: other.lh[0],
            },
          })}
        >
          {payment_from ? `з/п от ${payment_from} ${currency}` : `з/п до ${payment_to} ${currency}`}
        </Text>
        <ColorSwatch color="#7B7C88" size="5px" />
        <Text
          span
          sx={({ fontSizes, other }) => ({
            fontWeight: 400,
            fontSize: isLink ? fontSizes.sm : fontSizes.md,
            lineHeight: other.lh[1],

            '@media (max-width: 960px)': {
              fontSize: isLink ? fontSizes.xs : fontSizes.sm,
            },

            '@media (max-width: 740px)': {
              fontSize: '12px',
              ineHeight: other.lh[0],
            },
          })}
        >
          {type_of_work.title}
        </Text>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          '@media (max-width: 390px)': {
            justifyContent: 'center',
          },
        }}
      >
        <ThemeIcon variant="default" size="20px" sx={{ border: 'none' }}>
          <LocationIcon />
        </ThemeIcon>
        <Text
          span
          sx={({ fontSizes, other }) => ({
            fontWeight: 400,
            fontSize: fontSizes.sm,
            lineHeight: isLink ? other.lh[0] : other.lh[2],

            '@media (max-width: 960px)': {
              fontSize: fontSizes.xs,
            },

            '@media (max-width: 550px)': {
              fontSize: '12px',
              ineHeight: other.lh[0],
            },
          })}
        >
          {town.title}
        </Text>
      </Box>
    </Paper>
  );
};
