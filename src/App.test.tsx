import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('should render the title', () => {
    render(<App />)
    expect(screen.getByText(/Click Counter/i)).toBeInTheDocument()
  })

  it('should start with count 0', () => {
    render(<App />)
    const countDisplay = screen.getByTestId('count-display')
    expect(countDisplay).toHaveTextContent('Count is: 0')
  })

  it('should increment the count when clicking the button', () => {
    render(<App />)
    const incrementButton = screen.getByText(/Increment/i)
    fireEvent.click(incrementButton)
    const countDisplay = screen.getByTestId('count-display')
    expect(countDisplay).toHaveTextContent('Count is: 1')
  })

  it('should reset the count when clicking the reset button', () => {
    render(<App />)
    const incrementButton = screen.getByText(/Increment/i)
    const resetButton = screen.getByText(/Reset/i)
    const incrementBytwo = screen.getByText(/double/i)
    
    // Increment first
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    let countDisplay = screen.getByTestId('count-display')
    expect(countDisplay).toHaveTextContent('Count is: 2')
    
    // Reset
    fireEvent.click(resetButton)
    countDisplay = screen.getByTestId('count-display')
    expect(countDisplay).toHaveTextContent('Count is: 0')

    // increment +2 
    fireEvent.click(incrementBytwo)
    let countDisplaydouble = screen.getByTestId('count-display')
    expect(countDisplaydouble).toHaveTextContent('Count is: 2')
  })
})
