import { useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, addEdge, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

function Flow() {
  // Handling State Management for Edges and Nodes
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [id, setId] = useState(3);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  
  // Add a new node
  const handleClick = () => {
    // Create new node
    const newNode = {
      id,
      data: { label: "Chris Pondoc" },
      position: {x: 0, y: 0},
      type: 'input',
    };
  }

  return (
    <div style={{ height: '100%' }}>
      <button type="button" onClick={handleClick}>Click Me!</button>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default Flow;