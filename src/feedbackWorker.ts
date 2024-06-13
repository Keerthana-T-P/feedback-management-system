import axios from 'axios';

const fetchData = async () => {
  const result = await axios.get('http://localhost:3000/api/feedback');
  postMessage(result.data);
};

onmessage = () => {
  fetchData();
};
