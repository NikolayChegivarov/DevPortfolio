function App() {
  return (
    <div className="test-class min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-600">
          🎉 Проверка CSS!
        </h1>
        <p className="mt-2 text-gray-600">
          Если фон стал красным — значит index.css загружается.
        </p>
      </div>
    </div>
  );
}

export default App;

