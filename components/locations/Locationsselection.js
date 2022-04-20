import Link from 'next/link';
import { Card, Image, Text, Group, useMantineTheme } from '@mantine/core';
import { restaurants } from '../../configs/Restaurantarray';

function Locationsselection() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div className='cardsContainer'>
      {restaurants.map(({ id, name, adress, phone }) => (
        <div
          key={id}
          style={{ width: 340, margin: 'auto' }}
          className='lacationCards'
        >
          <Link href='/manstad' passHref>
            <Card shadow='sm' p='lg'>
              <Card.Section>
                <Image
                  src='./images/manstad.jpg'
                  height={200}
                  alt='Manstad front'
                />
              </Card.Section>

              <Group
                position='apart'
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500} size='xl'>
                  {name}
                </Text>
              </Group>

              <Text
                size='md'
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                {adress}
              </Text>
              <Text
                size='md'
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                {phone}
              </Text>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Locationsselection;
