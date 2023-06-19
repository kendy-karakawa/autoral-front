import format from 'date-fns/format';
import { pt } from 'date-fns/locale';

function maskDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  const formattedDate = format(date, 'EEEE, dd/MM/yyyy', { locale: pt });
  const dayOfWeek = formattedDate.replace('-feira', '');
  return `${dayOfWeek.charAt(0).toUpperCase()}${dayOfWeek.slice(1)}`;
}

function maskValue(value){
  const formattedValue = (value/100).toLocaleString('pt-BR',{
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formattedValue
}


export { maskDate, maskValue };
