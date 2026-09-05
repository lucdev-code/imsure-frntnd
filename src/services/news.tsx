import { API_URL } from '../config/api';

interface NewDto {
  description: string;
}

console.log(API_URL)
export const addNew = async (
  data: NewDto
): Promise<Response> => {
  return fetch(`${API_URL}information/add-new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};