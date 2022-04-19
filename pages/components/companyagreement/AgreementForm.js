import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  RadioGroup,
  Radio,
  Select,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

function Agreementform() {
  const [value, setValue] = useState('react');

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
      oragnisasjonsnummer: '',
      firmanavn: '',
      fakturaadresse: '',
      navn: '',
      telefon: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),

      oragnisasjonsnummer: (value) =>
        value.length < 9 ? 'Oragnisasjonsnummer må ha minst 9 tall' : null,
      firmanavn: (value) =>
        value.length < 3 ? 'Firmanavn må ha minst 3 bokstaver' : null,
      fakturaadresse: (value) =>
        value.length < 3 ? 'Fakturaadresse må ha minst 3 bokstaver' : null,
      fultnavn: (value) =>
        value.length < 3 ? 'Navn må ha minst 3 bokstaver' : null,
      telefon: (value) =>
        value.length < 8 ? 'Telefonnummber må ha minst 8 tall' : null,
    },
  });

  return (
    <div className='formContainer'>
      <Box sx={{ maxWidth: 300 }} mx='auto'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Select
            required
            label='Lokasjon'
            placeholder='Velg lokasjon'
            searchable
            nothingFound='No options'
            data={['Manstad', 'Vikane', 'Sarpsborg']}
          />

          <TextInput
            mt='md'
            required
            label='Oragnisasjonsnummer'
            placeholder='Oragnisasjonsnummer'
            {...form.getInputProps('oragnisasjonsnummer')}
          />
          <TextInput
            mt='md'
            required
            label='Firmanavn'
            placeholder='Firmanavn'
            {...form.getInputProps('firmanavn')}
          />
          <TextInput
            mt='md'
            required
            label='Fakturaadresse'
            placeholder='Fakturaadresse'
            {...form.getInputProps('fakturaadresse')}
          />

          <TextInput
            mt='md'
            required
            label='Fult navn'
            placeholder='Fult navn'
            {...form.getInputProps('fultnavn')}
          />
          <TextInput
            mt='md'
            required
            label='E-post'
            placeholder='E-post'
            {...form.getInputProps('email')}
          />
          <TextInput
            mt='md'
            required
            label='Telefon'
            placeholder='Telefon'
            {...form.getInputProps('telefon')}
          />

          <Checkbox
            required
            mt='xl'
            label='Jeg godkjenner at opplysningene ovenfor er korrekte'
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <RadioGroup
            mt='xl'
            orientation='vertical'
            label='Fakturatype'
            color='dark'
            required
            value={value}
            onChange={setValue}
          >
            <Radio value='Faktura på e-post' label='Faktura på e-post' />
            <Radio value='EHF-faktura' label='EHF-faktura' />
          </RadioGroup>

          <Group position='center' mt='xl'>
            <Button className='submitbtn' type='submit'>
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}

export default Agreementform;
