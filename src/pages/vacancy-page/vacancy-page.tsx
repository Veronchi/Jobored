import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import { Paths, override } from '@/utils/constants';
import { Box, MantineProvider, TypographyStylesProvider, Text, MediaQuery } from '@mantine/core';
import { Vacancy } from '@/components';
import { fetchVacancy } from '@/service/vacancies';
import { VacancyObj } from '@/utils/types';
import './vacancy-page.scss';

export const VacancyPage: FC = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<VacancyObj>({
    id: 0,
    payment_from: 0,
    payment_to: 0,
    profession: '',
    currency: '',
    vacancyRichText: '',
    type_of_work: {
      title: '',
    },
    town: {
      title: '',
    },
    firm_name: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getVacancy = async () => {
      if (id) {
        const vacancy = await fetchVacancy(id);

        if (vacancy) {
          setData(vacancy);
          setIsLoading(false);
        } else {
          navigate(`/${Paths.EMPTY_STATE}`, { replace: true, state: 'main' });
        }
      }
    };

    getVacancy();
  }, [id]);

  if (isLoading) return <SyncLoader cssOverride={override} color="#3b7cd3" size={25} />;

  return (
    <main className="vacancy">
      <Vacancy isLink={false} vacancy={data} />
      <MantineProvider
        inherit
        theme={{
          components: {
            TypographyStylesProvider: {
              styles: ({ fontSizes, other, black }) => ({
                root: {
                  '& p, & i, & b': {
                    fontWeight: 700,
                    fontSize: fontSizes.md,
                    lineHeight: other.lh[1],
                    color: black,
                    marginBottom: '0',
                  },

                  '& ul': {
                    listStyle: 'initial',
                    marginLeft: '22px',
                    marginBottom: '0',
                    paddingLeft: '0',
                    marginTop: '16px',
                    '&:not(:last-child)': {
                      marginBottom: '20px',
                    },

                    '& li': {
                      fontWeight: 400,
                      fontSize: fontSizes.sm,
                      lineHeight: other.lh[2],
                      color: black,
                      marginTop: '0',
                    },
                  },
                },
              }),
            },
          },
        }}
      >
        <Box
          sx={({ colors, white, other }) => ({
            background: white,
            border: `1px solid ${colors.grey[1]}`,
            borderRadius: other.br,
            padding: '24px',
            paddingTop: '15px',
          })}
        >
          {data.vacancyRichText ? (
            <MediaQuery
              query="(max-width: 960px)"
              styles={({ fontSizes, other }) => ({
                '& p, & i, & b': {
                  fontWeight: 600,
                  fontSize: fontSizes.sm,
                },
                '& ul': {
                  marginTop: '10px',
                  '& li': {
                    fontSize: fontSizes.xs,
                    lineHeight: other.lh[1],
                  },
                },
              })}
            >
              <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: data.vacancyRichText }} />
              </TypographyStylesProvider>
            </MediaQuery>
          ) : (
            <Text sx={{ textAlign: 'center' }}>Описание вакансии отсутствует</Text>
          )}
        </Box>
      </MantineProvider>
    </main>
  );
};
