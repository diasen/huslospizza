import Link from 'next/link';
import {
  Card,
  Image,
  Text,
  Group,
  useMantineTheme,
  Button,
} from '@mantine/core';
import restaurantJson from '../../libs/Restaurantarray';
import { useRouter } from 'next/router';

function Locationsselection() {
  const theme = useMantineTheme();

  const router = useRouter();
  const { vikane } = router.query;

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <div className='cardsContainer'>
      {restaurantJson.map(({ id, src, name, adress, phone, url }) => (
        <div
          key={id}
          style={{ width: 340, margin: 'auto' }}
          className='lacationCards'
        >
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image src={src} height={200} alt='store front' />
            </Card.Section>

            <Group
              position='apart'
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500} size='xl'>
                {name}
              </Text>
            </Group>

            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              {adress}
            </Text>
            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              {phone}
            </Text>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Locationsselection;
