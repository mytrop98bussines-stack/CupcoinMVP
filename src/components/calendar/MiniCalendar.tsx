import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'assets/css/MiniCalendar.css';
import { Text, Icon } from '@chakra-ui/react';
// Chakra imports
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// Custom components
import Card from 'components/card/Card';

type CalendarValue = Date | [Date, Date] | null;

export default function MiniCalendar(props: {
  selectRange: boolean;
  [x: string]: any;
}) {
  const { selectRange, ...rest } = props;
  const [value, setValue] = useState<CalendarValue>(new Date());

  const handleChange = (
    newValue: any,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setValue(newValue);
  };

  // Definimos los iconos como componentes fuera del JSX para limpiar los tipos
  const PrevIcon = () => <Icon as={MdChevronLeft as any} w="24px" h="24px" mt="4px" />;
  const NextIcon = () => <Icon as={MdChevronRight as any} w="24px" h="24px" mt="4px" />;

  return (
    <Card
      alignItems="center"
      flexDirection="column"
      w="100%"
      maxW="max-content"
      p="20px 15px"
      h="max-content"
      {...rest}
    >
      <Calendar
        onChange={handleChange}
        value={value}
        selectRange={selectRange}
        view={'month'}
        tileContent={<Text color="brand.500" />}
        prevLabel={<PrevIcon />}
        nextLabel={<NextIcon />}
      /> 
    </Card>
  );
}
