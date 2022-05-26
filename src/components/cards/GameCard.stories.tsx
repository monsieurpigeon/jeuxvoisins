import { ComponentStory, ComponentMeta } from '@storybook/react'

import { GameCard } from './GameCard'

export default {
  title: 'Card/Game',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{ name: 'black', value: 'black' }],
    },
  },
} as ComponentMeta<typeof GameCard>

const Template: ComponentStory<typeof GameCard> = (args) => (
  <GameCard {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { name: 'Ark Nova' }
