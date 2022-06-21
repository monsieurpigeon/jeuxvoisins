import styled from 'styled-components'
import journal from '../data/journal.json'

interface IJournalDay {
  date: string
  people: string[]
  done: string[]
}

type DayProps = { day: IJournalDay }

const JournalDayContainer = styled.div`
  user-select: none;
  background-color: #252525;
  padding: 20px;
  border: 1px solid grey;
  margin: 5px;
  max-width: 500px;
  &:hover {
    border: 1px solid yellow;
  }
`

const JournalDayTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  p {
    font-weight: 600;
  }
`

const JournalDayPeoples = styled.div`
  display: flex;
  gap: 5px;
`

const JournalDayPeople = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: blue;
`

const JournalDayTasks = styled.ul`
  list-style: none;
  margin-left: 20px;
  li {
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background-color: grey;
    }
  }
`

const JournalDay: React.FC<DayProps> = ({ day }) => {
  return (
    <JournalDayContainer key={day.date}>
      <JournalDayTitle>
        <p>{day.date}</p>
        <JournalDayPeoples>
          {!!day.people.length &&
            day.people.map((people) => (
              <JournalDayPeople>{people}</JournalDayPeople>
            ))}
        </JournalDayPeoples>
      </JournalDayTitle>

      <JournalDayTasks>
        {day.done.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </JournalDayTasks>
    </JournalDayContainer>
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
