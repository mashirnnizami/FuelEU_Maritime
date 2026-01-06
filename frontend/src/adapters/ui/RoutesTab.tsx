export default function RoutesTab({ routes, onBaseline }: any) {
  return (
    <table className="border w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>GHG</th>
          <th>Baseline</th>
        </tr>
      </thead>
      <tbody>
        {routes.map((r: any) => (
          <tr key={r.routeId}>
            <td>{r.routeId}</td>
            <td>{r.ghgIntensity}</td>
            <td>
              {r.isBaseline ? "✅" : (
                <button onClick={() => onBaseline(r.routeId)}>Set</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
