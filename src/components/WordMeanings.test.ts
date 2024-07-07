import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import WordMeanings from './WordMeanings.svelte'

describe('word meanings', () => {
	it('should render word meanings', async () => {
		render(WordMeanings)

        const words = screen.getByText('Words')
		const meanings = screen.getByText('Meanings')
        expect(words).toBeInTheDocument()
		expect(meanings).toBeInTheDocument()
	});
});
