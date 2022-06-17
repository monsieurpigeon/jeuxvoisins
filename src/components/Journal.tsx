import journal from '../data/journal.json'

interface IJournalDay {
  date: string
  people: string[]
  done: string[]
}

type DayProps = { day: IJournalDay }

const JournalDay: React.FC<DayProps> = ({ day }) => {
  return (
    <div key={day.date}>
      <h3>{day.date}</h3>
      {!!day.people.length && <div>avec: {day.people.join(', ')}</div>}
      <ul>
        {day.done.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

type Props = {}

export const Journal: React.FC<Props> = () => {
  return (
    <>
      <h1>Journal</h1>
      {journal.map((day: IJournalDay) => (
        <JournalDay key={day.date} day={day} />
      ))}
    </>
  )
}
