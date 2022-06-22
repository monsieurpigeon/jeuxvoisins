import { ComponentMeta, ComponentStory } from '@storybook/react'
import { JournalDay } from './Journal'

export default {
  title: 'Card/JournalDay',
  component: JournalDay,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: 'black' }],
    },
  },
} as ComponentMeta<typeof JournalDay>

const Template: ComponentStory<typeof JournalDay> = (args) => (
  <JournalDay {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  day: {
    date: '11/05/1989',
    people: ['Maxime'],
    done: ['Task 1', 'Task 2', 'Task 3'],
  },
}
