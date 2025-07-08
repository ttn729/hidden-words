import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import NameDateClass from './NameDateClass.svelte'

describe('name date class', () => {
	it('should render name and class', () => {
		render(NameDateClass)
        const name = screen.getByText(/Name:....../)
		const className = screen.getByText(/Class:....../)
        expect(name).toBeInTheDocument()
		expect(className).toBeInTheDocument()
	});
});
