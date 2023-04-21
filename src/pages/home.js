import { useState } from 'react';
import Population from '../components/Population';
import Search from '../components/Search';
import '../components/style/Population.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container">
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Population searchTerm={searchTerm} />
    </div>
  );
}
