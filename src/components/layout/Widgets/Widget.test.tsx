import React from 'react';
import { render } from '@testing-library/react';
import Widget from './Widget';

test('renders widget component with correct props', () => {
  const users = 'Users';
  const icon = 'path_to_icon';
  

  const { getByText, getByAltText } = render(<Widget icon={users} users="USERS" count="2,453"/>);
  
  // Ensure that the users text is rendered
  expect(getByText('Users')).toBeInTheDocument();

  // Ensure that the icon is rendered with the correct alt text
  const iconElement = getByAltText('icon');
  expect(iconElement).toBeInTheDocument();
  
  // Ensure that the count text is rendered as a heading
 
});
