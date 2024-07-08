import axios from '../src/lib/axios';

export const createRole = async (name: string): Promise<void> => {
  const formData = {
    name
  };

  const response = await axios.post('api/roles', formData);
};
