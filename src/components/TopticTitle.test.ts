import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event'
import TopicTitle from './TopicTitle.svelte'

describe('topic title', () => {
	it('should allow user to enter a topic title', async () => {
		render(TopicTitle)

        const titleInput = screen.getByTestId('titleInput')
        const titleText = 'Smart Start Grade 5 - Theme 8'
        await userEvent.type(titleInput, titleText)

        expect(titleInput).toHaveValue(titleText)
	});
});
