import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import PrintButton from './PrintButton.svelte'

describe('print button', () => {
	it('should render print button', async () => {
		render(PrintButton)

        const printButton = screen.getByRole('button', {name: 'Print'})

		expect(printButton).toBeInTheDocument()
	});
});
