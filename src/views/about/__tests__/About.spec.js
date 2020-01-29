import { render } from '@testing-library/vue'
import About from '../About.vue'

describe('About.vue', () => {
  test('find about page title', () => {
    const { getByText } = render(About)

    expect(getByText('This is an about page')).toBeDefined()
  })
})
