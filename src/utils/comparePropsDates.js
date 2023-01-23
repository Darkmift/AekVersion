// for use in memo deps prop check

export default function comparePropsDates(prevProps, nextProps) {
  const oldDates = prevProps.dates;
  const newDates = nextProps.dates;

  return JSON.stringify(oldDates) === JSON.stringify(newDates);
}
