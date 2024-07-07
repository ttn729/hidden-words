import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import NameClass from './NameClass.svelte'

describe('name class', () => {
	it('should render name and class', () => {
		render(NameClass)
        const name = screen.getByText('Name:......')
		const className = screen.getByText('Class:......')
        expect(name).toBeInTheDocument()
		expect(className).toBeInTheDocument()
	});
});
