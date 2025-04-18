import { useState } from 'react';
import PedidoForm from './PedidoForm';
import PedidoTabla from './PedidoTabla';

function App() {
    const [refrescar, setRefrescar] = useState(false);

    const manejarPedidoAgregado = () => {
        setRefrescar(prev => !prev); // cambia el estado para actualizar la tabla
    };

    return (
        <div>
            <h1>Gestión de Pedidos</h1>
            <PedidoForm onPedidoAgregado={manejarPedidoAgregado} />
            <PedidoTabla refrescar={refrescar} />
        </div>
    );
}

export default App;
