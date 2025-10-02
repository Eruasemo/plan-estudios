import { useState } from 'react';
import './App.css';
import planData from './data/plan.json';
import Semestre from './components/Semestre';
import MateriaDetalle from './components/MateriaDetalle'; // 1. Importamos el nuevo componente

function App() {
  // 2. Estado para saber qué materia está seleccionada
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);

  // 3. Función que se ejecuta al hacer clic en una materia
  const handleMateriaClick = (materia) => {
    setMateriaSeleccionada(materia);
  };

  // 4. Función para volver a la vista de la retícula
  const handleVolver = () => {
    setMateriaSeleccionada(null);
  };

  return (
    <div className="app-container">
      <h1>Reticula de Plan de Estudios</h1>

      {/* 5. Renderizado condicional: o mostramos los detalles o la retícula */}
      {materiaSeleccionada ? (
        <MateriaDetalle materia={materiaSeleccionada} onVolver={handleVolver} />
      ) : (
        <div className="plan-grid">
          {planData.map((semestre, index) => (
            <Semestre
              key={index}
              data={semestre}
              onMateriaClick={handleMateriaClick} // Pasamos la función como prop
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

