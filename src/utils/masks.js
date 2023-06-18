import format from 'date-fns/format';
import { pt } from 'date-fns/locale';

function maskDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  const formattedDate = format(date, 'EEEE, dd/MM/yyyy', { locale: pt });
  const dayOfWeek = formattedDate.replace('-feira', '');
  return `${dayOfWeek.charAt(0).toUpperCase()}${dayOfWeek.slice(1)}`;
}


export { maskDate };
