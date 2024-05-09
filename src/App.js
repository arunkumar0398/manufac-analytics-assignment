import './App.css';
import { Table } from '@mantine/core';
import { calculateMaxMinCrop } from './utils/calculateMaxMinCrop';

function App() {

  const maxMinCrops = calculateMaxMinCrop().map((cropData, index) => (
    <Table.Tr key={cropData.Year}>
      <Table.Td>{cropData.Year}</Table.Td>
      <Table.Td>{cropData.CropWithMaxProduction}</Table.Td>
      <Table.Td>{cropData.CropWithMinProduction}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table striped highlightOnHover withTableBorder withColumnBorders id='Crop--maxProd--minProd'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production in that Year</Table.Th>
            <Table.Th>Crop with Minimum Production in that Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{maxMinCrops}</Table.Tbody>
      </Table>

      <Table>
      </Table>
    </>
  );
}

export default App;
