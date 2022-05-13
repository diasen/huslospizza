import Link from 'next/link';
import {
  Card,
  Image,
  Text,
  Group,
  useMantineTheme,
  MantineProvider,
} from '@mantine/core';

function Locationsselection() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div className='cardsContainer'>
      <div style={{ width: 340, margin: 'auto' }} className='lacationCards'>
        <Link href='/restaurants/manstad' passHref>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image
                src='./images/manstad.jpg'
                height={200}
                alt='store front'
              />
            </Card.Section>

            <Group
              position='apart'
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500} size='xl'>
                Manstad
              </Text>
            </Group>

            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Lervikveien 28, 1626 Manstad
            </Text>
            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Tlf: 900 00 000
            </Text>
          </Card>
        </Link>
      </div>

      <div style={{ width: 340, margin: 'auto' }} className='lacationCards'>
        <Link href='/restaurants/vikane' passHref>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image src='./images/vikane.jpg' height={200} alt='store front' />
            </Card.Section>
            <Group
              position='apart'
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500} size='xl'>
                Vikane
              </Text>
            </Group>
            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Vikaneveien 325, 1621 Gressvik
            </Text>
            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Tlf: 900 00 001
            </Text>
          </Card>
        </Link>
      </div>

      <div style={{ width: 340, margin: 'auto' }} className='lacationCards'>
        <Link href='/restaurants/sarpsborg' passHref>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image
                src='./images/sarpsborg.jpg'
                height={200}
                alt='store front'
              />
            </Card.Section>

            <Group
              position='apart'
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500} size='xl'>
                Sarpsborg
              </Text>
            </Group>

            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              St. Marie gate, 1706 Sarpsborg
            </Text>
            <Text size='md' style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Tlf: 900 00 002
            </Text>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Locationsselection;
