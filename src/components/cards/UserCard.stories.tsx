import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCard } from './UserCard'

export default {
  title: 'Card/User',
  component: UserCard,
} as ComponentMeta<typeof UserCard>

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
