import { render, screen } from '@testing-library/react';
import { UserForm } from './user-form';

describe('UserForm', () => {
	it('renders form with correct button text', () => {
		render(<UserForm btnText='Some text' onSubmit={() => { }} />);
		expect(screen.getByText('Some text')).toBeInTheDocument();
	});

	it('renders 3 input', () => {
		render(<UserForm btnText='Some text' onSubmit={() => { }} />);
		const inputElements = screen.getAllByRole('textbox');
		expect(inputElements).toHaveLength(3);
	});

	it('renders initial data', () => {
		const mockData = { name: 'Vasya', username: 'vasya23', email: 'vasya@mail.ru' }
		render(<UserForm btnText='Some text' onSubmit={() => { }} initial={mockData} />);
		const nameInput = screen.getByTestId('name') as HTMLInputElement;
		const emailInput = screen.getByTestId('email') as HTMLInputElement;
		const usernameInput = screen.getByTestId('username') as HTMLInputElement;
		expect(nameInput.value).toBe(mockData.name);
		expect(emailInput.value).toBe(mockData.email);
		expect(usernameInput.value).toBe(mockData.username);
	});

});