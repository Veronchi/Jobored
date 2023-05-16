import { FC } from 'react';
import { Vacancy } from '@/components';
import { Box, List, MantineProvider, Title } from '@mantine/core';
import './vacancy-page.scss';

export const VacancyPage: FC = () => {
  return (
    <main className="vacancy">
      <Vacancy isLink={false} />
      <MantineProvider
        inherit
        theme={{
          components: {
            Title: {
              styles: ({ fontSizes, other, black }) => ({
                root: {
                  fontWeight: 700,
                  fontSize: fontSizes.md,
                  lineHeight: other.lh[1],
                  color: black,
                  marginBottom: '16px',
                },
              }),
            },
            List: {
              styles: ({ fontSizes, other, black }) => ({
                root: {
                  listStyle: 'initial',
                  marginLeft: '22px',
                  '&:not(:last-child)': {
                    marginBottom: '20px',
                  },
                },
                item: {
                  fontWeight: 400,
                  fontSize: fontSizes.sm,
                  lineHeight: other.lh[2],
                  color: black,
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
          })}
        >
          <Title order={3}>Обязанности:</Title>
          <List>
            <List.Item>
              Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии, сувенирной
              продукции.
            </List.Item>
            <List.Item>Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.</List.Item>
            <List.Item>Создание дизайна логотипов и брендбуков</List.Item>
            <List.Item>
              Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка
            </List.Item>
          </List>

          <Title order={3}>Требования:</Title>
          <List>
            <List.Item>Собеседование – после успешного прохождения тестового задания</List.Item>
            <List.Item>Рассматриваются кандидаты только с опытом работы</List.Item>
            <List.Item>Обязательно - наличие портфолио</List.Item>
            <List.Item>
              Умение самостоятельно принимать решения, умение объективно оценивать свою работу,
              работать в режиме многозадачности и переключаться с одного задания к другому и
              планировать свой день. Соблюдать сроки.
            </List.Item>
            <List.Item>
              Ответственный, исполнительный, целеустремленный, большим плюсом будет опыт управления
            </List.Item>
          </List>

          <Title order={3}>Условия:</Title>
          <List>
            <List.Item>Оформление по контракту</List.Item>
            <List.Item>Полный социальный пакет</List.Item>
            <List.Item>Премирование по результатам работы</List.Item>
          </List>
        </Box>
      </MantineProvider>
    </main>
  );
};
