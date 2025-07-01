import React from 'react';
import ExerciseCard from './components/ExerciseCard';

function App() {
  return (
    <div className="App">
      <ExerciseCard
        title="示例练习"
        description="这是一个示例练习的描述"
        imageUrl="https://example.com/example-image.jpg"
        link="https://example.com/example-link"
        tags={["标签1", "标签2"]}
      />
    </div>
  );
}

export default App;