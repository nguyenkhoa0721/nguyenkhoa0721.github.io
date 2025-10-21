import { CV } from './components/CV';
import { exportToPDF } from './lib/pdf';

function App() {
  return <CV onExportPDF={exportToPDF} />;
}

export default App;
